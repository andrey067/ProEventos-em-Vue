import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EventoComponent from '../components/eventos/EventoComponent.vue'
import EventoLista from '../components/eventos/EventoLista.vue'
import DetalhesEvento from '../components/eventos/DetalhesEvento.vue'
import UserComponent from '../components/user/UserComponent.vue'
import LoginComponent from '../components/user/login/LoginComponent.vue'
import RegistrarUsuario from '../components/user/registrar/RegistrarUsuario.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/user',
        component: UserComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                name: 'login'
            },
            {
                path: 'registro',
                component: RegistrarUsuario
            }
        ]
    },
    // {
    //     path: '/user/perfil',
    //     component: UserProfile
    // },
    {
        path: '/eventos',
        component: EventoComponent,
        redirect: '/eventos/lista',
        children: [
            // {
            //     path: 'cadastrar',
            //     component: CadastrarEvento
            // },
            // {
            //     path: 'detalhes',
            //     component: DetalhesEvento
            // },
            {
                path: 'detalhes/:id',
                name: "detalhe",
                component: DetalhesEvento,
            },
            {
                path: 'lista',
                name: "lista",
                component: EventoLista,
            }
        ]
    },
    // {
    //     path: '/palestrantes',
    //     component: PalestrantesComponent
    // },
    { path: '/:catchAll(.*)*', redirect: '/eventos/lista' }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router