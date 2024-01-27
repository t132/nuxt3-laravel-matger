import { useUser } from './useUser';
import { useApi } from './useApi';
import { useRouter } from 'vue-router';
export const useAuth = () => {
    const router = useRouter();
    const config = useRuntimeConfig();
    const { authentication } = useApi();
    const user = useUser();
    const userProfile = ref([])
    console.log(user.value?.name)
    const isAuthenticated = computed(() => user.value?.name !== undefined);
    console.log(isAuthenticated.value);

    async function fetchUser(): Promise<any> {
        user.value = await authentication.user();
    }
    async function profileDetails(): Promise<any> {
        userProfile.value = await authentication.profileDetails();
        console.log(userProfile.value);

    }
    async function saveProfile(
        shipping: [],
        billing: []
    ): Promise<any> {
        await authentication.saveProfile(
            shipping,
            billing
        );

    }
    async function login(
        email: string,
        password: string,
        remember = true
    ): Promise<any> {

        // if (isAuthenticated.value === true) {
        //     console.log(user.value);

        //     return;
        // }
        // console.log(password);

        await authentication.login(email, password, remember);
        await fetchUser();

        await router.push(config.public.homeUrl);
    }
    async function register(
        name: string,
        email: string,
        phone: string,
        password: string,
        password_confirmation: string
    ): Promise<any> {
        await authentication.register(
            name,
            email,
            phone,
            password,
            password_confirmation
        );
        await fetchUser();

        await router.push(config.public.homeUrl);
    }

    async function logout(): Promise<any> {
        if (isAuthenticated.value === false) {
            return;
        }

        await authentication.logout();
        user.value = null;

        await router.push(config.public.homeUrl);
    }
    async function passwordForgot(email: string): Promise<{ status: string }> {

        const data = await authentication.passwordForgot(
            email
        );
        return data;
    }

    async function passwordReset(
        token: string,
        email: string,
        password: string,
        password_confirmation: string
    ): Promise<any> {
        await authentication.passwordReset(token, email, password, password_confirmation).then((res) => {
            console.log('res' + res);

        })

    }
    return {
        user,
        fetchUser,
        isAuthenticated,
        login,
        register,
        logout,
        profileDetails,
        saveProfile,
        passwordForgot,
        passwordReset
    };
};
