<template>
    <LoadingComponenet :show="loading" />    
    <div v-if="!loading" class="card rounded shadow-sm">
        <div class="p-3">
            <div class="d-flex">
                <div class="flex-fill pr-3">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Filtro:</div>
                        </div>
                        <input type="text" class="form-control" placeholder="Busca por Tema e Local">
                    </div>

                </div>
                <div>
                    <a class="d-flex btn btn-outline-primary" routerLink="/eventos/detalhe">
                        <i class="fa fa-plus-circle my-1"></i>
                        <b class="ml-1 d-none d-sm-block">Novo</b>
                    </a>
                </div>
            </div>
            <b-table :striped="striped" hover :bordered="bordered" :fields="fields" :items="eventos"
                @row-clicked="mostrarImagem">
                <!-- <template #row-details="row">
                    <b-card>{{ row.item.id }}</b-card>
                </template> -->
                <template #cell(dataEvento)="data">
                    {{ filters.format_date(data.value) }}
                </template>
                <template v-slot:cell(actions)="data">
                    <b-button v-b-tooltip.hover title="Excluir evento" @click="deletarEvento($event, data.item.id)"
                        variant="danger">
                        <i class="fa fa-trash"></i>
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { Evento } from "../../models/Evento";
import httpclient from "../../services/httpclient";
import { onMounted } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
import LoadingComponenet from '../../shared/LoadingComponenet.vue'
import { useRouter } from 'vue-router';
import filters from '../../helpers/filters'
onMounted(() => {
    getEventos();
});

const fields = [
    { key: 'id', label: 'Id' },
    { key: 'tema', label: 'Tema' },
    { key: 'local', label: 'Local' },
    { key: 'dataEvento', label: 'Data Evento' },
    { key: 'qtdPessoas', label: 'Qtd Pessoas' },
    { key: 'lotes', label: 'Lotes' },
    { key: 'actions', label: '' },
];

const eventos = ref<Evento[]>([])
const exibirImagem = ref(false);
const search = ref('');
const toast = useToast();
const loading = ref(true);
const router = useRouter()
const striped = ref(true);
const bordered = ref(true);

function getEventos(): void {
    httpclient.get<Evento[]>('/Evento')
        .then((response) => {
            eventos.value = response.data;           
        }).finally(() => loading.value = false)
        .catch((error) => {
            toast.error("Erro ao carregar os Eventos", error)
        })
}

function mostrarImagem(): void {
    console.log("Teste")
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


function detalheEventos(eventoid: number) {
    router.push(`/eventos/detalhes/${eventoid}`)
}

function deletarEvento(event: Event, idEvento: Number) {
    event.stopPropagation();
    console.log(idEvento);

}
</script>

<style scoped>
</style>
