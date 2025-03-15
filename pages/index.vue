<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (!authStore.isAuthenticated) {
    navigateTo('/login');
  }
});
</script>

<template>
  <div class="container mx-auto p-6">
    <div v-if="authStore.isAuthenticated" class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-6 text-center">Bem-vindo ao Dashboard</h1>
      <p class="text-gray-600 mb-4 text-center">Você está logado como: <span class="font-semibold">{{ authStore.user?.email }}</span></p>
      
      <div class="flex justify-center mt-8">
        <UButton color="red" @click="authStore.logout(); navigateTo('/login')">
          Sair
        </UButton>
      </div>
    </div>
    <div v-else>
      <p>Redirecionando para o login...</p>
    </div>
  </div>
</template>
