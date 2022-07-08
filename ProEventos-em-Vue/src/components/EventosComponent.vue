<template>
    <div>
        <h2>Eventos</h2>
        <hr>
        <form action="" class="form-inline">
            <div class="form-group mb-2">
                <input type="text" class="form control mr-2" placeholder="buscar">
                <button class="btn btn-outline-success">Buscar</button>
            </div>
        </form>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <!-- <th>Image</th> -->
                    <th>Tema</th>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Quantidade Pessoas</th>
                    <th>Lote</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody v-if="eventos && eventos.length">
                <tr v-for="(eveto, index) in eventos" :key="index">
                    <td>{{ eveto.id }}</td>
                    <!-- <td>{{ eveto.imagemURL }}</td> -->
                    <td>{{ eveto.tema }}</td>
                    <td>{{ eveto.local }}</td>
                    <td>{{ eveto.dataEvento }}</td>
                    <td>{{ eveto.qtdPessoas }}</td>
                    <td>{{ eveto.lotes }}</td>
                    <td></td>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import httpclient from '@/services/HttpClient'


export default defineComponent({
    name: "EventosComponent",
    data: () => ({
        eventos: Array<any>()
    }),
    created() {
        this.getEventos();
    },
    methods: {
        getEventos(): void {
            httpclient.get('/Evento')
                .then((response) => {
                    this.eventos = response.data
                    console.log(this.eventos)
                })
        }
    }
});
</script>

<style lang="scss">
</style>
