<template>
    <el-space wrap :size="20" class="mb-2">
        <el-input v-model="search" placeholder="Buscar">
            <template #prepend>Filtrar tabela</template>
        </el-input>
        <el-button routerLink="/eventos/detalhe" :icon="CirclePlus">Novo</el-button>
    </el-space>
    <el-table v-loading.fullscreen.lock="fullscreenLoading" class="table table-striped" :data="filterTableData"
        :border="true" style="width: 100%" table-layout="auto" highlight-current-row @current-change="detalheEvento">
        <el-table-column align="center" width="120">
            <template #default="props">
                <el-image style="width: 100px; height: 100px" :src="props.row.imagemURL" fit="cover" />
            </template>
        </el-table-column>
        <el-table-column label="Id" align="center" prop="id" />
        <el-table-column label="Tema" prop="tema" />
        <el-table-column label="Local" prop="local" />
        <el-table-column label="Data Evento" prop="dataEvento" />
        <el-table-column label="Qtd Pessoas" prop="qtdPessoas" align="center" />
        <el-table-column label="Ações" align="center" width="120">
            <template #default="scope">
                <el-tooltip content="Deletar evento" placement="top">
                    <el-button type="danger" :icon="Delete" plain @click="confirmarDeletarEvento($event, scope.row)" />
                    <!-- <el-button type="danger" :icon="Delete" plain @click="deletar(scope.row)" /> -->
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup lang="ts">
import { Evento } from '../../Models/Eventos/Evento';
import { computed, onMounted, ref } from 'vue'
import httpClient from '../../services/HttpClient'
import { Action, ElNotification } from 'element-plus';
import { Delete, CirclePlus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'


onMounted(() => {
    getEventos();
});

const search = ref('');
const eventos = ref<Evento[]>([])
const fullscreenLoading = ref(false);
const router = useRouter();

const filterTableData = computed(() => eventos.value.filter((data) => !search.value || data.tema.toLowerCase().includes(search.value.toLowerCase())));

function confirmarDeletarEvento(event: any, evento: Evento) {
    event.stopPropagation();
    ElMessageBox.confirm(
        'Deseja deletar este evento?',
        'Warning',
        {
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            type: 'warning',
        }
    ).then(() => {
        let statusRequest: { status: number; };
        deletar(evento).then((response) => {
            getEventos();
            statusRequest = response.status
        }).finally(() => {
            if (statusRequest.status == 200)
                return ElNotification.success({ title: "Sucesso", message: "Evento deletado com sucesso", offset: 100 })
            ElNotification.error({ title: "Erro", message: "Erro ao deletar o evento", offset: 100 })

        })

    }).catch(() => {
        ElMessage({
            type: 'info',
            message: 'Cancelado',
        })
    })
};

const handleEdit = (index: number, row: Evento) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: Evento) => {
    console.log(index, row)
}

function getEventos(): void {
    fullscreenLoading.value = true;
    httpClient.get<Evento[]>('/eventos')
        .then((response) => {
            eventos.value = response.data;
        }).finally(() => fullscreenLoading.value = false)
        .catch((error) => {
            fullscreenLoading.value = false;
            ElNotification.error({
                title: "Erro",
                message: "Erro ao carregar os eventos",
                offset: 100,
            })
        })
}

async function deletar(evento: Evento): Promise<any> {
    let statusRequest;
    fullscreenLoading.value = true;
    await httpClient.delete('/eventos/' + evento.id).then((response) => {
        statusRequest = response;
    }).finally(() => {
        fullscreenLoading.value = false;
    })
    return statusRequest;
}

function detalheEvento(evento: Evento | undefined) {
    router.push(`/eventos/detalhes/${evento?.id}`)
}


</script>

<style>
</style>