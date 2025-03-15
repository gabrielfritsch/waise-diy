export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  
  // Rotas que não precisam de autenticação
  const publicRoutes = ['/login', '/recuperar-senha'];
  
  if (!authStore.isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }
  
  if (authStore.isAuthenticated && to.path === '/login') {
    return navigateTo('/');
  }
});
