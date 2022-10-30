import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Lazy load routes
const AboutView = () => import('../views/AboutView.vue')
const EventsView = () => import('../views/EventsView.vue')
const ContactView = () => import('../views/ContactView.vue')
const BlogView = () => import('../views/BlogView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
