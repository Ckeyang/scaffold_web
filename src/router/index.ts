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
                    path: 'home',
                    name: 'home',
                    component: () => import('@/views/home/index.vue')
                }, {
                    path: 'auth',
                    name: 'auth',
                    component: () => import('@/views/system/auth/index.vue')
                }, {
                    path: 'dictionary',
                    name: 'dictionary',
                    component: () => import('@/views/system/dictionary/index.vue')
                }, {
                    path: 'user',
                    name: 'user',
                    component: () => import('@/views/system/user/index.vue')
                }, {
                    path: 'role',
                    name: 'role',
                    component: () => import('@/views/system/user/role.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: '/:patchMatch(.*)*',
            name: '404',
            component: () => import('@/views/common/404.vue')
        }
    ]
})

export default router
