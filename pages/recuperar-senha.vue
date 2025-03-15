<script setup>
import { ref } from 'vue';

const email = ref('');
const loading = ref(false);
const success = ref(false);
const error = ref('');

const handleRecovery = async () => {
  error.value = '';
  
  if (!email.value) {
    error.value = 'Por favor, informe seu email';
    return;
  }
  
  loading.value = true;
  
  try {
    // Simulando uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Em um app real, você faria uma chamada de API aqui
    success.value = true;
  } catch (err) {
    error.value = 'Ocorreu um erro ao processar sua solicitação';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="auth-card">
    <h1 class="auth-title">Recuperação de Senha</h1>
    
    <UAlert v-if="error" type="danger" class="mb-4">
      {{ error }}
    </UAlert>
    
    <UAlert v-if="success" type="success" class="mb-4">
      Enviamos um email com instruções para redefinir sua senha. Por favor, verifique sua caixa de entrada.
    </UAlert>
    
    <template v-if="!success">
      <p class="text-gray-600 mb-6">
        Informe seu email e enviaremos instruções para redefinir sua senha.
      </p>
      
      <form @submit.prevent="handleRecovery">
        <div class="form-group">
          <label for="recovery-email" class="form-label">Email</label>
          <UInput
            id="recovery-email"
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            autocomplete="email"
            required
          />
        </div>
        
        <UButton
          type="submit"
          block
          :loading="loading"
          :disabled="loading"
          class="mb-4"
        >
          {{ loading ? 'Enviando...' : 'Enviar instruções' }}
        </UButton>
      </form>
    </template>
    
    <div class="text-center mt-4">
      <NuxtLink to="/login" class="link">
        Voltar para o login
      </NuxtLink>
    </div>
  </div>
</template>
