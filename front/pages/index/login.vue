<template>
    <div class="text-center">
        <GoogleSignIn />
        <main class="form-signin  m-auto">
            <form>
                <img class="mb-4" src="" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" v-model="form.email"
                        placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" v-model="form.password" id="floatingPassword"
                        placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <h3>{{ logError }}</h3>
                <button :disabled="loader" class="w-100 btn btn-lg btn-primary" @click.prevent="handleLogin">Sign in</button>
                <div class="checkbox mb-3">
                    <label>
                        <nuxt-link to="forgotpassword">نسيت كلمة المرور</nuxt-link>
                    </label>
                </div>
            </form>
        </main>
    </div>
</template>
<script lang="ts" setup>

definePageMeta({
    middleware: ["guest"],
});
import { reactive } from '@vue/reactivity';
import { useAuth } from '../../api/composables/useAuth';
import { useRouter } from 'vue-router';
useSeoMeta({
    title: 'تسجيل الدخول ',
    description: 'تسجيل الدخول ',

})
const form = reactive({
    email: "",
    password: ""
});

const { login } = useAuth();
const router = useRouter()
let loader=useState('loader');
const logError=ref()
async function handleLogin() {
    try {

    loader.value=true
    await login(form.email, form.password, true);
    loader.value=false
    } catch (error) {
    loader.value=false
        logError.value=error
    }


}
</script>

<style scoped>
html,
body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}


.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
</style>
