<template>

    <div class="text-center">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" dir="rtl">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <!-- <Sociallogin /> -->
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">من فضلك قم بإدخال
                البيانات الاتية</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#"  @submit.prevent="handleRegister">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">الاسم</label>
                    <div class="mt-2">
                        <input type="text" v-model="form.name" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">البريد الالكتروني</label>
                    <div class="mt-2">
                        <input id="email" v-model="form.email" type="email" autocomplete="email" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">الهاتف </label>
                    <div class="mt-2">
                        <input id="phone" v-model="form.phone" type="text" autocomplete="phone" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">كلمة المرور</label>

                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password"
                            v-model="form.password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="passwordc" class="block text-sm font-medium leading-6 text-gray-900">إعادة كلمة
                            المرور</label>
                    </div>
                    <div class="mt-2">
                        <input id="passwordc" name="password" type="password" autocomplete="current-password"
                        v-model="form.password_confirmation"  required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <!-- <div v-if="errorMessage" class="col-12 ">
                    <p style="font-size: 3.5vmin !important;" class="error" id="phonenum" placeholder="" required>
                        {{ errorMessage }}
                    </p>
                </div> -->
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
            </form>
            <div>
                <p class="mb-0  text-center" style="color:font-size: 3.5vmin !important;font-weight: 500;">
                    لديك حساب بالفعل؟
                    <router-link to="/login" class=" fw-bold"
                        style="color:aqua;font-size: 3.5vmin !important;font-weight: 500;">تسجيل
                        الدخول</router-link>
                </p>
            </div>

        </div>
    </div></div>

</template>

        <script lang="ts" setup>
import { useAuth } from '../../api/composables/useAuth';

        useSeoMeta({
            title: 'إنشاء حساب',
            ogTitle: 'إنشاء حساب',
            description: ' إنشاء حساب',
            ogDescription:' إنشاء حساب',
            ogImage: 'https://simsaregy.web.app/simsary.png',
        })
        const form = ref({
          name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: ""
        });

         const {register}=useAuth()
        async function handleRegister() {
          const {error} = await register(form.value.name,form.value.email,form.value.phone,form.value.password,form.value.password_confirmation);
        //   if (!error.value) {
        //     navigateTo("/");
        //   }
        }
        </script>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}
</style>
