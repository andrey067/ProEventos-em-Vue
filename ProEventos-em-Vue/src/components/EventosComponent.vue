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
                    <td>{{ $filters.price(evento.dataEvento) }}</td>
                    <td>{{ evento.qtdPessoas }}</td>
                    <td>{{ evento.lotes }}</td>
                    <td>
                        <button type="button" class="btn btn-primary btn-sm mr-5">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import httpclient from '../services/HttpClient'
import { Evento } from "../models/Evento";


export default defineComponent({
    name: "EventosComponent",

    data: () => ({
        eventos: Array<Evento>(),
        imagem: false,
        search: ''
    }),
    created() {
        this.getEventos();
    },
    methods: {
        getEventos(): void {
            httpclient.get<Array<Evento>>('/Evento')
                .then((response) => {
                    this.eventos = response.data
                })
        },
        mostrarImagem() {
            this.imagem = !this.imagem
        },
        filtrar() {
            console.log(this.search)
            this.search = this.search.toLowerCase();
            this.eventos.filter((evento: Evento) => {
                evento.tema.toLowerCase().includes(this.search)
            });


        }
    },
    computed: {

    }
});
</script>

<style scoped lang="css">
</style>
