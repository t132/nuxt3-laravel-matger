<template>
    <div class="text-center">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" dir="rtl">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">

                <form class="space-y-6" @submit.prevent="handleForgetPassword">
                    <h2 class="fw-bold mb-2 text-uppercase ">متجر</h2>

                    <p class=" mb-5 "> ادخل الايميل المسجل لدينا
                    </p>
                    <div class="col-12">
                        <label for="phonenum" class="form-label">الايميل</label>
                        <input type="email" v-model="restEmail.email" style="font-size: 1.3vmax !important;"
                            class="form-control" id="phonenum" placeholder="" required>
                    </div>
                    <div class="d-grid">
                        <h2 class="bg-success">{{ res }}</h2>
                        <button :disabled="loader" class="btn btn-outline-dark text-white" @click.prevent="handleForgetPassword"
                            style="color: aliceblue;font-size: large;font-weight: 500;">إستمرار</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
<script setup>
// import {useAuthStore} from "~/stores/useAuthStore";
import { toDisplayString } from 'vue';
import { useAuth } from '../../api/composables/useAuth';
import { useLoader } from '../../api/composables/useLoader';
const restEmail = ref({
    email: ''
})
// const auth=useAuthStore()
let loader=useState('loader');
const res=ref()
async function handleForgetPassword() {
    loader.value=true
try {
    const {passwordForgot}=useAuth()
    await passwordForgot(restEmail.value.email)

    loader.value=false
res.value='تم إرسال رابط لتحديث كلمة المرور ... من فضلك راجع بريدك الالكتروني'
} catch (error) {
    loader.value=false
    res.value='يوجد خطأ في البيانات المدخلة'
}

        }

</script>

<style></style>
