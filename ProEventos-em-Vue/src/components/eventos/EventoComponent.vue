<template>
    <LoadingComponenet :show="loading" />
    <div class="card rounded shadow-5 p-3">
        <div v-show="!loading">
            <h2>Eventos</h2>
            <hr>
            <div class="d-flex">
                <div class="flex-fill pr-3">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Filtro:</div>
                        </div>
                        <input type="text" class="form-control" placeholder="buscar">
                    </div>

                </div>
                <div>
                    <a class="d-flex btn btn-outline-primary">
                        <i class="fa fa-plus-circle my-1"></i>
                        <b class="ml-1 d-none d-sm-block">Novo Evento</b>
                    </a>
                </div>
            </div>


            <MDBTable class="align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
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
                    <tr v-for="evento in eventos" :key="evento.id">
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
                            <Popper content="Editar" hover placement="top-start">
                                <button type="button" class="btn btn-primary btn-sm mr-5">
                                    <i class="fa fa-edit"></i>
                                </button>
                            </Popper>
                            <Popper content="Excluir" hover placement="top-start">
                                <button type="button" class="btn btn-danger btn-sm">
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
            </MDBTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MDBTable } from 'mdb-vue-ui-kit';
import { getCurrentInstance } from 'vue'
import { ref } from "@vue/reactivity";
import { Evento } from "../../models/Evento";
import httpclient from "../../services/httpclient";
import { computed, onMounted } from "@vue/runtime-core";
import { POSITION, useToast } from "vue-toastification";
import LoadingComponenet from '../../components/layouts/LoadingComponenet.vue'
import { Titulo } from '../../interfaces/Titulo';
const emit = defineEmits(['dadosTitulo']);

const dadosTitulo: Titulo = {
    titulo: "Eventos",
    subtitulo: "subtitulo Eventos",
    iconClass: "fa-calendar-alt",
}

onMounted(() => {
    setarTitulo()
    getEventos();
})


const eventos = ref<Evento[]>([])
const imagem = ref(false);
const search = ref('');
const internalInstance = getCurrentInstance();
const pipe = internalInstance?.appContext.config.globalProperties.$filters;
const modalShow = ref(false);
const toast = useToast();
const loading = ref(true)


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

function mostrarImagem() {
    imagem.value = !imagem.value
}

function setarTitulo() {
    emit('dadosTitulo', dadosTitulo)
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
</script>

<style scoped lang="css">
</style>
