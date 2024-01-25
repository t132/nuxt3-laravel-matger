<template>
    <div class="social-login">
        <NuxtLink to="http://localhost:8000/api/login/google"><Icon name="uil:google" color="black" /></NuxtLink>
        <button @click="socialLogin('google')" class="social-login-btn google">
            <Icon name="uil:google" color="black" />
        </button>
        <button @click="socialLogin('github')" class="social-login-btn github">
            <Icon name="uil:github" color="black" />
        </button>
        <button @click="socialLogin('facebook')" class="social-login-btn facebook">
         <Icon name="uil:facebook" color="black" />
        </button>
        <button @click="socialLogin('twitter')" class="social-login-btn twitter">
            <Icon name="uil:twitter" color="black" />
        </button>
        <button @click="socialLogin('linkedin')" class="social-login-btn linkedin">
            <Icon name="uil:linkedin" color="black" />
        </button>
    </div>
</template>

<script>
        // import {} from "~/stores/useAuthStore";

export default {

    methods: {
        socialLogin(service) {
            // auth.socialLogin(service)
            window.location.href = `http://localhost:8000/api/login/${service}`;
        }
    }
}
</script>

<style scoped>
.social-login {
    display: flex;
    justify-content: center;
}
.social-login-btn {
    color: white;
    border-radius: 5px;
    background: #333;
    border: none;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    width: 50px;
    height: 50px;
    font-size: 23px;
    cursor: pointer;

    &.google {
        background: #dd4b39;
    }
    &.github {
        background: #24292e;
    }
    &.facebook {
        background: #3B5998;
    }
}
</style>
