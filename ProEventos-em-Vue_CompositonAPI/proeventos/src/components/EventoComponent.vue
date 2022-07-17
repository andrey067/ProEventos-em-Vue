<template>
    <div>
        <h2>Eventos</h2>
        <hr>
        <div action="" class="form-inline">
            <div class="form-group mb-2">
                <label for="Filtro" class="mr-2"></label>
                <input type="text" class="form control mr-2" placeholder="buscar" v-model="search">
                <button class="btn btn-outline-success" @click="filtrar()">Buscar</button>
            </div>
        </div>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>
                        <button type="button" class="btn btn-light btn-sm" @click="mostrarImagem()">
                            {{ imagem ?
                                    'Ocultar' : 'Mostrar'
                            }}
                        </button>
                    </th>
                    <th>#</th>
                    <th>Tema</th>
                    <th>Local</th>
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
                    <td>{{ evento.local }}</td>
                    <td>{{ pipe.format_date(evento.dataEvento) }}</td>
                    <td>{{ evento.qtdPessoas }}</td>
                    <td>{{ evento.lotes }}</td>
                    <td>
                        <b-button v-b-tooltip.hover title="Editar" variant="primary" size="sm">
                            <i class="fa fa-edit"></i>
                        </b-button>
                        <b-button v-b-tooltip.hover title="Excluir" variant="danger" size="sm" class="m-2">
                            <i class="fa fa-trash"></i>
                        </b-button>
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

    <div>
        <b-button @click="makeToast()">Open Modal</b-button>
        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { ref } from "@vue/reactivity";
import { Evento } from "@/models/Evento";
import httpclient from "../services/httpclient";
import { onMounted } from "@vue/runtime-core";
import { POSITION, useToast } from "vue-toastification";


onMounted(() => {
    getEventos();
})

const eventos = ref<Evento[]>([])
const imagem = ref(false);
const search = ref('');
const internalInstance = getCurrentInstance();
const pipe = internalInstance?.appContext.config.globalProperties.$filters;
const modalShow = ref(false);
const toast = useToast();

function getEventos(): void {

    httpclient.get<Array<Evento>>('/Evento')
        .then((response) => {
            eventos.value = response.data
        }).finally(() => console.log(""))
}

function mostrarImagem() {
    imagem.value = !imagem.value
}

function filtrar() {
    console.log(search.value)
    search.value = search.value.toLowerCase();
    eventos.value.filter((evento: Evento) => {
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
