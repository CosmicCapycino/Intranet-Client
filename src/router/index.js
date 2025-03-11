import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

import { useUserStore } from '@/stores/userStore'
import ContactsView from '@/views/Pages/ContactsView.vue'

const routes = [
  {
    path: '/',
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

router.beforeEach(async (to, from) => {
  const store = useUserStore();
  if (!store.authenticated && to.name !== 'login'
  ) {
    return { name: 'login' }
  }
})

export default router
