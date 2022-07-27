import EventoComponent from "../components/eventos/EventoComponent.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PalestrantesComponent from "../components/palestrantes/PalestrantesComponent.vue";
import DetalhesEvento from "../components/eventos/DetalhesEvento.vue";
import EventoLista from "../components/eventos/EventoLista.vue";
import UserComponent from "../components/users/RegistroComponent.vue";
import LoginComponent from "../components/users/login/LoginComponent.vue";
import CadastrarEvento from "../components/eventos/CadastrarEvento.vue";
import RegistroComponent from "../components/users/registro/RegisterComponent.vue";
import UserProfile from "../components/users/perfil/UserProfile.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/user',
        component: UserComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registro',
                component: RegistroComponent
            }
        ]
    },
    {
        path: '/user/perfil',
        component: UserProfile
    },
    {
        path: '/eventos',
        component: EventoComponent,
        redirect: '/eventos/lista',
        children: [
            {
                path: 'cadastrar',
                component: CadastrarEvento
            },
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