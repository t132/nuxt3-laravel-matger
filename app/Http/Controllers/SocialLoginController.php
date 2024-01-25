<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSocial;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Auth\Events\Verified;
use Laravel\Socialite\Two\InvalidStateException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;

class SocialLoginController extends Controller
{
    protected $auth;



    public function redirect($service)
    {
        Auth::logout();
        return Socialite::driver($service)->redirect();
    }

    public function callback($service)
    {
        try {
            $serviceUser = Socialite::driver($service)->user();
        } catch (\Exception $e) {

            return redirect(env('CLIENT_BASE_URL') . '/auth/social-callback?error=Unable to login using ' . $service . '. Please try again' . '&origin=login');
        }

        if ((env('RETRIEVE_UNVERIFIED_SOCIAL_EMAIL') == 0) && ($service != 'google')) {
            $email = $serviceUser->getId() . '@' . $service . '.local';
        } else {
            $email = $serviceUser->getEmail();
        }

        $user = $this->getExistingUser($serviceUser, $email, $service);
        $newUser = false;
        if (!$user) {
            $newUser = true;
            try {
            //  DB::beginTransaction();

                 $user = User::create([
                'name' => $serviceUser->getName(),
                'email' => $email,
                'password' =>  Hash::make(Str::random(32)),
                'email_verified_at' => now()
            ]);
            $customer = new Customer();
            $names = explode(" ", $user->name);
            $customer->user_id = $user->id;
            $customer->first_name = $names[0];
            $customer->last_name = $names[1] ?? '';
            $customer->save();
            } catch (\Throwable $th) {
                //  DB::rollBack();
                return redirect(env('CLIENT_BASE_URL') . '/auth/social-callback?token=err'.$user->id);
            }

        }
        if ($this->needsToCreateSocial($user, $service)) {
            UserSocial::create([
                'user_id' => $user->id,
                'social_id' => $serviceUser->getId(),
                'service' => $service
            ]);
        }
        $token = $user->createToken('set-cookie')->accessToken;

        Auth::login($user);
        return redirect(env('CLIENT_BASE_URL') . '/auth/social-callback?token=' . $token);
    }

    public function needsToCreateSocial(User $user, $service)
    {
        return !$user->hasSocialLinked($service);
    }

    public function getExistingUser($serviceUser, $email, $service)
    {
        if ((env('RETRIEVE_UNVERIFIED_SOCIAL_EMAIL') == 0) && ($service != 'google')) {
            $userSocial = UserSocial::where('social_id', $serviceUser->getId())->first();
            return $userSocial ? $userSocial->user : null;
        }
        return User::where('email', $email)->orWhereHas('social', function ($q) use ($serviceUser, $service) {
            $q->where('social_id', $serviceUser->getId())->where('service', $service);
        })->first();
    }
}
