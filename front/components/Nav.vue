<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <nuxt-link to="/" class="navbar-brand">متجر</nuxt-link>
            <nuxt-link to="/login" class="navbar-brand" v-if="!user">تسجيل الدخول</nuxt-link>
            <div class="dropdown" v-if="user">
                <button class="btn dropdown-toggle bg-dark text-white" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{user.name}}
                </button>
                <ul class="dropdown-menu bg-dark text-center">
                    <li><router-link to="/auth/profile" class="dropdown-item text-white" href="#">الملف الشخصي</router-link ></li>
                    <li> <button @click="handelLogout" class=" text-white">تسجيل الخروج</button>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>
<script setup>
// import { useAuthStore } from '../stores/useAuthStore';

// const store=useAuthStore()
const user = useUser()
console.log(user.value);
const { logout } = useAuth()
const loader= useState('loader' )
const handelLogout = async () => {
try {
    loader.value=true
await logout();
    loader.value=false
} catch (error) {
    loader.value=false

}

}
</script>
