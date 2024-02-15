import {createRouter , createWebHistory} from 'vue-router'

const homePage = () => import('../views/homePage.vue')
const tours = () => import('../views/services/tours.vue');

const routes = [
    {path: "/" ,  component : homePage},
    {path: "/services" ,  component : tours},
];
const router = createRouter({
    history: createWebHistory(),
    routes,  
});

export default router; 