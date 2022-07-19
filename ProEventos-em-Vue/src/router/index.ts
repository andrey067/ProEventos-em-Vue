import EventoComponent from "../components/eventos/EventoComponent.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PalestrantesComponent from "../components/palestrantes/PalestrantesComponent.vue";
import DetalhesEvento from "../components/eventos/DetalhesEvento.vue";
import EventoLista from "../components/eventos/EventoLista.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/eventos',
        component: EventoComponent,
        redirect: '/eventos/lista',
        children: [
            {
                path: 'detalhes',
                component: DetalhesEvento
            },
            {
                path: 'detalhes/:id',
                component: DetalhesEvento
            },
            {
                path: 'lista',
                component: EventoLista
            }
        ]
    },
    {
        path: '/palestrantes',
        component: PalestrantesComponent
    },
    { path: '/:catchAll(.*)*', redirect: '/eventos/lista' }
]


const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router