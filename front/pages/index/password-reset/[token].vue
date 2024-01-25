<template>
    <div class="container">
        <form>
            <img class="mb-4" src="" alt="" width="72" height="57">

            <div class="form-floating">
                <input type="password" class="form-control" id="floatingInput" v-model="form.password"
                    placeholder="name@example.com">
                <label for="floatingInput">كلمة المرور الجديدة</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password_confirmation" id="floatingPassword"
                    placeholder="Password">
                <label for="floatingPassword">تأكيد كلمة المرور</label>
            </div>

            <h3 v-if="logerror">{{ logerror }}</h3>
            <button :disabled="loader" class="w-100 btn btn-lg btn-primary" @click.prevent="handleSendPassword"
                type="submit">تحديث</button>
        </form>

    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useAuth } from '../../../api/composables/useAuth';
import Swal from 'sweetalert2';
import ApiError from '~/api/models/ApiError';
const router = useRouter()
const route = useRoute()
const loader = useState('loader')
const form = reactive({
    email: '',
    token: '',
    password: '',
    password_confirmation: ''
})
onMounted(() => {
    console.log(route.query.email);
    form.email = route.query.email
    form.token = route.params.token
})
    const logerror=ref()
const { passwordReset } = useAuth()
async function handleSendPassword() {
    loader.value = true
    try {

        await passwordReset(form.token, form.email, form.password, form.password_confirmation).then(() => {

            loader.value = false
            Swal.fire({
                title: "<strong>تم تحديث <u>كلمة المرور</u></strong>",
                icon: "info",
                html: `
              يمكنك الان تسجيل الدخول ,
              <a href="#">links</a>,

            `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: true,
                confirmButtonText: `
              <i class="fa fa-thumbs-up">يمكنك الان تسجيل الدخول</i>
            `
            });
             router.push('/login')

            //

        })
    } catch (error) {
        loader.value = false
        logerror.value=error
console.log(error);
    }
}
</script>
