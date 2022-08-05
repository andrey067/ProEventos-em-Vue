<template>
    <el-table class="table table-striped" :data="filterTableData" :border="true"
        style="width: 100%">
        <el-table-column label="Tema" prop="tema" />
        <el-table-column label="Local" prop="local" />
        <el-table-column label="Data Evento" prop="date" />
        <el-table-column label="Date" prop="dataEvento" />
        <el-table-column label="Qtd Pessoas" prop="qtdPessoas" />
        <!-- <el-table-column label="Name" prop="name" /> -->
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <button type="button" class="btn btn-danger btn-lg" tooltip="Excluir" @click="deletar(scope.row)">
                    <i class="fa fa-trash"></i>
                </button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup lang="ts">
import { Evento } from '@app/Models/Evento.js';
import { computed, onMounted, ref } from 'vue'
import httpClient from '../../services/HttpClient'
import { ElNotification } from 'element-plus'


onMounted(() => {
    getEventos();
});
const search = ref('');
const eventos = ref<Evento[]>([])
const loading = ref(false)

const filterTableData = computed(() =>
    eventos.value.filter(
        (data) =>
            !search.value ||
            data.tema.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: Evento) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: Evento) => {
    console.log(index, row)
}

function getEventos(): void {
    httpClient.get<Evento[]>('/eventos')
        .then((response) => {
            console.log(response)
            eventos.value = response.data;
        }).finally(() => loading.value = false)
        .catch((error) => {
            console.log(error);
            ElNotification.error({
                title:"Erro",
                message:"Erro ao carregar os eventos",
                offset: 100,
            })
        })
}

function deletar(evento: any) {
    console.log(evento)

}

</script>

<style>
</style>