export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();
  
  // Inicializa o estado de autenticação ao carregar o app
  await authStore.initialize();
});
