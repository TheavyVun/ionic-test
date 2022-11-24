import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/Inbox',
    component: () => import ('../views/InboxPage.vue')
  },
  {
    path: '/folder/Galary',
    component: () => import ('../views/GalaryPage.vue')
  },
  {
    path: '/folder/Story',
    component: () => import ('../views/StoryPage.vue')
  },
  {
    path: '/chat/:userId',
    component: () => import ('../views/ChatPage.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

export default router
