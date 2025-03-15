<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  error.value = '';
  
  if (!email.value || !password.value) {
    error.value = 'Por favor, preencha todos os campos';
    return;
  }
  
  loading.value = true;
  
  try {
    // Simulando uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Em um app real, você faria uma chamada de API aqui
    await authStore.login({
      email: email.value,
      password: password.value
    });
    
    navigateTo('/');
  } catch (err) {
    error.value = 'Credenciais inválidas';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="auth-card">
    <h1 class="auth-title">Login</h1>
    
    <UAlert v-if="error" type="danger" class="mb-4">
      {{ error }}
    </UAlert>
    
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <UInput
          id="email"
          v-model="email"
          type="email"
          placeholder="seu@email.com"
          autocomplete="email"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password" class="form-label">Senha</label>
        <UInput
          id="password"
          v-model="password"
          type="password"
          placeholder="********"
          autocomplete="current-password"
          required
        />
      </div>
      
      <div class="flex justify-between items-center mb-6">
        <NuxtLink to="/recuperar-senha" class="link">
          Esqueceu sua senha?
        </NuxtLink>
      </div>
      
      <UButton
        type="submit"
        block
        :loading="loading"
        :disabled="loading"
      >
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </UButton>
    </form>
  </div>
</template>
