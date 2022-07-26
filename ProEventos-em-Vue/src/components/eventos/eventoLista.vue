<template>
    <LoadingComponenet :show="loading" />
    <div v-if="!loading" class="card rounded shadow-sm p-3">
        <div class="d-flex">
            <div class="flex-fill pr-3">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Filtro: </div>
                    </div>
                    <input type="text" class="form-control" placeholder="Filtrar por Tema e Local">
                </div>
            </div>
            <div>
                <router-link class="d-flex btn btn-outline-primary" to="/eventos/cadastrar">
                    <i class="fa fa-plus-circle my-1"></i>
                    <b class="ml-1 d-none d-sm-block">Novo Evento</b>
                </router-link>
            </div>
        </div>
        <!-- <h3>Filtro: {{filtroLista}}</h3> -->
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th class="d-none d-md-table-cell">
                        <button type="button" class="btn btn-outline-light btn-sm">
                            <i class="{{!exibirImagem ? 'fa fa-eye' : 'fa fa-eye-slash'}}"></i>
                            {{ !exibirImagem ? 'exibir' : 'ocultar' }}
                        </button>
                    </th>
                    <th>#</th>
                    <th>Tema</th>
                    <th class="d-none d-md-table-cell">Local</th>
                    <th>Data</th>
                    <th class="d-none d-md-table-cell">Qtd Pessoas</th>
                    <th class="d-none d-md-table-cell">Lote</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="evento in eventos" :key="evento.id" style="cursor: pointer;">
                    <td class="d-none d-md-table-cell">

                    </td>
                    <td>{{ evento.id }}</td>
                    <td>{{ evento.tema }}</td>
                    <td class="d-none d-md-table-cell">{{ evento.local }}</td>
                    <td>{{ pipe.format_date(evento.dataEvento) }}</td>
                    <td class="d-none d-md-table-cell">{{ evento.qtdPessoas }}</td>
                    <td class="d-none d-md-table-cell">{{ evento.lotes[0]?.nome }}</td>
                    <td>
                        <button type="button" class="btn btn-danger btn-lg" tooltip="Excluir">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr v-if="!eventos.length">
                    <td colspan="8" class="text-center">
                        <h4>Nenhum evento encontrado!</h4>
                    </td>
                </tr>
            </tfoot>
        </table>
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
import { useRouter } from 'vue-router';

onMounted(() => {
    getEventos();
})

const eventos = ref<Evento[]>([])
const exibirImagem = ref(false);
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
            toast.error("Erro ao carregar os Eventos", error)
        })
}

function mostrarImagem(): void {
    exibirImagem.value = !exibirImagem.value
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
