import { createRouter, createWebHistory } from 'vue-router';
import MonitorView from '@/views/MonitorView.vue';
import SettingView from '@/views/SettingView.vue';
import LogView from '@/views/LogView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
const routes = [
    {
        path: '/',
        component: MonitorView,
    },
    {
        path: '/setting',
        component: SettingView,
    },
    {
        path: '/log',
        component: LogView,
    },
    {
        path: '/notFound',
        component: NotFoundView,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/notFound',
    }
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
    linkActiveClass: 'route-active',
    linkExactActiveClass: 'route-active'
});
export default router;
//# sourceMappingURL=index.js.map