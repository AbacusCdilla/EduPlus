import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Lessons from '../views/Lessons.vue'
import CartView from '../views/CartView.vue' // Imported CartView component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons, // Added Lessons route
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView, // Added CartView route
    },
  ],
})

export default router
