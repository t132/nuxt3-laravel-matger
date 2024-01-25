export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated.value === true) {
        if (to.path === '/login' || to.path === '/register') {
            return navigateTo('/')
          }
    }
});

