import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '@/views/Contact.vue'
import Gallery from '@/views/Gallery.vue'
import Project from '@/views/Project.vue'
// import AddProject from '@/views/AddProject.vue'

import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDTLfyBoWJ5oyVq41VW8Hqfu16U0FL_st8",
  authDomain: "testing-f1970.firebaseapp.com",
  projectId: "testing-f1970",
  storageBucket: "testing-f1970.firebasestorage.app",
  messagingSenderId: "999659174530",
  appId: "1:999659174530:web:c56e6842eb4866eb2f129b",
  measurementId: "G-2J1CJFSH2S"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    // {
    //   path: '/add-project',
    //   name: 'add-project',
    //   component: AddProject
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
});

router.afterEach((to) => {
  logEvent(analytics, 'page_view', { page_path: to.fullPath });
});

export default router
