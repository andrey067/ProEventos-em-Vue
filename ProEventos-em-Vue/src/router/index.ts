import EventoComponent from "../components/eventos/EventoComponent.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PalestrantesComponent from "../components/palestrantes/PalestrantesComponent.vue";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: EventoComponent,
    },
    {
        path: '/palestrantes',
        component: PalestrantesComponent
    },
    { path: '/:catchAll(.*)*', redirect: '/' }
]


const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router