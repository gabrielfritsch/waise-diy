import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  
  actions: {
    async login(credentials) {
      // Em um app real, você faria uma chamada de API aqui
      // e armazenaria o token JWT retornado
      
      // Simulando uma resposta de API bem-sucedida
      const fakeUser = {
        id: 1,
        name: 'Usuário Teste',
        email: credentials.email
      };
      
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substring(2);
      
      this.user = fakeUser;
      this.token = fakeToken;
      
      // Em um app real, você armazenaria o token no localStorage
      localStorage.setItem('auth_token', fakeToken);
      localStorage.setItem('auth_user', JSON.stringify(fakeUser));
    },
    
    async logout() {
      this.user = null;
      this.token = null;
      
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
    },
    
    async initialize() {
      // Recupera o estado de autenticação do localStorage ao iniciar o app
      const token = localStorage.getItem('auth_token');
      const user = JSON.parse(localStorage.getItem('auth_user') || 'null');
      
      if (token && user) {
        this.token = token;
        this.user = user;
      }
    }
  }
});
