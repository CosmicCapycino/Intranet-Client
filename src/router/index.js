import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ContactsView from '@/views/Pages/ContactsView.vue'

import { useUserStore } from '@/stores/userStore'

const axiosInstance = axios.create();

fetch(process.env.BASE_URL + 'config.json').then((response) => response.json()).then((config) => {
  axiosInstance.defaults.baseURL = (config.apiServer.ssl ? 'https' : 'http') + "://" + config.apiServer.host + (config.apiServer.port !== null ? `:${config.apiServer.port}` : null);
});

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
    meta: {
      requiresAuth: true
    }    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from) => {
  console.log('Validating token...');
  const store = useUserStore();
  axiosInstance.defaults.headers.get['Authorization'] = `Bearer ${store.token}`;
  await axiosInstance.get("auth/token/validate")
  .then((response) => {
    if(response.status === 200) {
      store.setAuthenticated(true);
    }
  })
  .catch((response) => {
    if(response.status === 401) {
      store.setAuthenticated(false);
    }
  })

  if(!store.authenticated) {
    if(to.name !== "login" && from.name !== "login") {
      return { name: 'login'}      
    }
  }
})

export default router