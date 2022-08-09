<template>
    <el-form ref="ruleFormCadastroEvento" label-width="auto">
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
                                        <label>Nome</label>
                                        <input type="text" class="form-control" formControlName="nome"
                                            placeholder="Lote">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Quantidade</label>
                                        <input type="text" class="form-control" placeholder="000">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Preço</label>
                                        <input type="text" currencyMask class="form-control" placeholder="R$ 0,00">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Data Início</label>
                                        <input type="datetime" class="form-control" bsDatepicker
                                            value="{{lotes.get(i+'.dataInicio').value | date:'dd/MM/yyyy'}}"
                                            placeholder="01/01/2019">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Data Fim</label>
                                        <input type="datetime" class="form-control" bsDatepicker
                                            value="{{lotes.get(i+'.dataFim').value | date:'dd/MM/yyyy'}}"
                                            placeholder="01/01/2019">
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

</script>

<style>
</style>