import {createRouter, createWebHistory} from 'vue-router'
import Admin from '@/layout/admin.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'checkToken',
            component: () => import('@/views/index.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/home/index.vue')
                }, {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        }
    ]
})

export default router
