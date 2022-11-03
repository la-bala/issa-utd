import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Lazy load routes
const AboutView = () => import('../views/AboutView.vue')
const EventsView = () => import('../views/EventsView.vue')
const ContactView = () => import('../views/ContactView.vue')
const BlogMenuView = () => import('../views/BlogMenuView.vue')
const BlogPostView = () => import('../views/BlogPostView.vue')

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
      component: BlogMenuView
    },
    {
      path: '/blog/:slug',
      name: 'blogpost',
      component: BlogPostView
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
