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
                    <th>Image</th>
                    <th>Tema</th>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Quantidade Pessoas</th>
                    <th>Lote</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
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
            httpclient.get('https://localhost:44374/api/evento')
                .then((response) => {
                    this.eventos = response.data
                })
            console.log(this.eventos);

            // return this.eventos = [
            //     {
            //         Tema: "Angular",
            //         Local: "Belo Horizonte",
            //     },
            //     {
            //         Tema: "São Paulo",
            //         Local: "Rio de Janeiro",
            //     },
            // ]
        }
    }
});
</script>

<style lang="scss">
</style>
