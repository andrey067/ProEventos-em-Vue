<template>
    <!-- <div class="card rounded shadow-5 p-3">
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
    </div> -->
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
