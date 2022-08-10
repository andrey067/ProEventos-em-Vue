<template >
    <el-form ref="ruleFormCadastroEvento" :model="propsLote" label-width="auto" :size="size">
        <div class="card rounded shadow-sm mt-3">
            <div class="p-3">
                <div class="d-flex border-bottom">
                    <h2 class="mr-auto">
                        Lotes do Evento
                    </h2>
                    <h2>
                        <i class="fas fa-money-bill-wave"></i>
                    </h2>
                </div>
                <p>Clique em Lote para adicionar e preencher novos Lotes</p>
                <div class="form-row p-1">
                    <div class="col">
                        <div formArrayName="lotes">
                            <fieldset class="form-group">
                                <legend class="d-flex justify-content-between capitalize">
                                    <button class="p-2 btn btn-sm btn-outline-warning mb-1 d-flex"
                                        tooltip="Excluir Lote" placement="left">
                                        <i class="fa fa-window-close my-1"></i>
                                        <b class="ml-1 d-none d-sm-block">Excluir</b>
                                    </button>
                                </legend>
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <el-form-item label="Nome" prop="nome">
                                            <el-input v-model="propsLote.nome" />
                                        </el-form-item>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <el-form-item label="Quantidade" prop="quantidade">
                                            <el-input v-model="propsLote.quantidade" placeholder="000" />
                                        </el-form-item>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <el-form-item label="Preco" prop="preco">
                                            <el-input v-model="propsLote.preco" placeholder="000" />
                                        </el-form-item>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <el-form-item label="Data Inicio" prop="dataEvento" style="margin-left: 2%">
                                            <el-date-picker format="DD/MM/YYYY" v-model="propsLote.dataInicio"
                                                type="date" placeholder="Data do Inicio" style="width: 100%" />
                                        </el-form-item>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <el-form-item label="Data Fim" prop="dataEvento" style="margin-left: 2%">
                                            <el-date-picker format="DD/MM/YYYY" v-model="propsLote.dataFim" type="date"
                                                placeholder="Data do Fim" style="width: 100%" />
                                        </el-form-item>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <button class="d-flex btn btn-outline-primary">
                    <i class="fa fa-plus-circle my-1"></i>
                    <b class="ml-1">Lote</b>
                </button>
            </div>
            <div class="card-footer">
                <div class="d-flex">
                    <button class="btn btn-outline-secondary mr-auto border">
                        Cancelar Alteração
                    </button>
                    <button class="btn btn-success">
                        Salvar Lotes
                    </button>
                </div>
            </div>
        </div>
    </el-form>
</template>

<script setup lang="ts">
import { onUpdated, ref } from "vue";

const size = ref('large');

const propsLote = defineProps({
    id: Number,
    nome: String,
    preco: Number,
    dataInicio: {
        type: Date,
        default: new Date()
    },
    dataFim: Date,
    quantidade: Number,
    eventoId: Number,
})

onUpdated(() => {
    console.log("props", propsLote)
})
</script>

<style>
</style>