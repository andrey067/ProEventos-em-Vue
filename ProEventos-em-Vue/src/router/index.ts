import EventoComponent from "../components/EventoComponent.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PalestrantesComponent from "../components/PalestrantesComponent.vue";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: EventoComponent,
    },
    {
        path: '/palestrantes',
        component: PalestrantesComponent
    }
]


const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router