import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Views/Home.vue'), // Lazy-loaded component
  },
  {
    path: '/single-post',
    name: 'Single',
    component: () => import('./Views/Single.vue'), // Lazy-loaded component
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('./Views/Page.vue'), // Lazy-loaded component
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('./Views/Archive.vue'), // Lazy-loaded component
  },
  {
    path: '/blog',
    name: 'Blogs',
    component: () => import('./Views/Blog.vue'), // Lazy-loaded component
  },
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(), // HTML5 history mode
  routes,
});

export default router;