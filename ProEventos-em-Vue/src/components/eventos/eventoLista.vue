<template>
    <TituloComponent :titulo="dadosTitulo.titulo" :subtitulo="dadosTitulo.subtitulo" :icon-class="dadosTitulo.iconClass"
        :botao-listar="true" />
    <LoadingComponenet :show="loading" />
    <div class="card rounded  p-3">
        <div v-show="!loading">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <p class="control">
                            <span class="tag is-large">
                                Filtro:
                            </span>
                        </p>
                        <div class="field has-addons">
                            <p class="control">
                                <input class="input" type="text" placeholder="Buscar Evento">
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <router-link type="button" to="/eventos/cadastrar" class="level-item button is-primary">
                        <i class="fa fa-plus-circle my-1"></i>
                        <b class="ml-1 d-none d-sm-block">Novo Evento</b>
                    </router-link>
                </div>
            </div>


            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
                <thead class="bg-light">
                    <tr class="">
                        <th v-show="imagem">Imagem</th>
                        <th>#</th>
                        <th>Tema</th>
                        <th class="d-none d-md-table-cell">Local</th>
                        <th>Data</th>
                        <th>Quantidade Pessoas</th>
                        <th>Lote</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody v-if="eventos && eventos.length">
                    <tr v-for="evento in eventos" :key="evento.id" style="cursor:pointer;"
                        @click="detalheEventos(evento.id)">
                        <td v-show="imagem">
                            <img :src="evento.imagemURL">
                        </td>
                        <td>{{ evento.id }}</td>
                        <td>{{ evento.tema }}</td>
                        <td class="d-none d-md-table-cell">{{ evento.local }}</td>
                        <td>{{ pipe.format_date(evento.dataEvento) }}</td>
                        <td>{{ evento.qtdPessoas }}</td>
                        <td>{{ evento.lotes }}</td>
                        <td>
                            <Popper content="Excluir" hover placement="right">
                                <button class="button is-danger is-small">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </Popper>
                        </td>
                    </tr>
                </tbody>
                <tfoot v-if="!eventos.length">
                    <tr>
                        <td colspan="8">
                            <h4>Nenhum evento encontrado</h4>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { ref } from "@vue/reactivity";
import { Evento } from "../../models/Evento";
import httpclient from "../../services/httpclient";
import { onMounted } from "@vue/runtime-core";
import { POSITION, useToast } from "vue-toastification";
import LoadingComponenet from '../../components/layouts/LoadingComponenet.vue'
import { Titulo } from '../../interfaces/Titulo';
import TituloComponent from '../layouts/TituloComponent.vue';
import { useRouter } from 'vue-router';


onMounted(() => {
    getEventos();
})

const dadosTitulo: Titulo = {
    titulo: "Eventos",
    subtitulo: "Lista de Eventos",
    iconClass: "fa-calendar",
}
const eventos = ref<Evento[]>([])
const imagem = ref(false);
const search = ref('');
const internalInstance = getCurrentInstance();
const pipe = internalInstance?.appContext.config.globalProperties.$filters;
const modalShow = ref(false);
const toast = useToast();
const loading = ref(true);
const router = useRouter()


function getEventos(): void {
    httpclient.get<Array<Evento>>('/Evento')
        .then((response) => {
            console.log(response.data)
            eventos.value = response.data
        }).finally(() => loading.value = false)
        .catch((error) => {
            toast.error("Erro ao carregar os Eventos")
        })
}

function mostrarImagem(): void {
    imagem.value = !imagem.value
}

function filtrar() {
    console.log(search.value)
    search.value = search.value.toLowerCase();
    eventos.value.filter((evento: Evento) => {
        console.log(evento)
        evento.tema.toLowerCase().includes(search.value)
    });
}

function mostarModal() {
    modalShow.value = !modalShow.value
}

function makeToast() {
    toast.success("I'm an info toast!", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        rtl: false
    });
}


function detalheEventos(eventoid: number) {
    router.push(`/eventos/detalhes/${eventoid}`)
}
</script>

<style scoped>
</style>
