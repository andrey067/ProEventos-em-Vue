<template>
    <LoadingComponenet :show="loading" />
    <div class="card rounded shadow-sm">
        <form>
            <div class="p-3">
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label>Tema</label>
                        <input type="text" class="form-control" :value="evento?.tema" placeholder="Insira o Tema">
                        <div class="invalid-feedback">
                            Tema é obrigatório.
                        </div>
                        <div class="invalid-feedback">
                            Tema deve ter no mínimo 4 Caracters.
                        </div>
                        <div class="invalid-feedback">
                            Tema deve ter no máximo 50 Caracters.
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label>Local</label>
                        <input type="text" class="form-control" :value="evento?.local" placeholder="Local evento">
                        <div class="invalid-feedback">
                            Local é obrigatório.
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                        <label>Data e Hora</label>
                        <input type="datetime" class="form-control" :value="evento?.dataEvento"
                            placeholder="Data Evento">
                        <div class="invalid-feedback">
                            Data e hora é obrigatório.
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label>Qtd Pessoas</label>
                        <input type="text" class="form-control is-invalid" :value="evento?.qtdPessoas"
                            placeholder="Quantidade pessoa">
                        <div class="invalid-feedback">
                            Qtd Pessoas é obrigatório.
                        </div>
                        <div class="invalid-feedback">
                            Qtd Pessoas deve ser menor que 120000.
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                        <label>Telefone</label>
                        <input type="text" mask="(000) 0000-0000" class="form-control" :value="evento?.telefone"
                            placeholder="(000) 90000-0000">
                        <div class="invalid-feedback">
                            Telefone é obrigatório.
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="text" class="form-control" :value="evento?.email" placeholder="e-mail">
                        <div class="invalid-feedback">
                            Email é obrigatório.
                        </div>
                        <div class="invalid-feedback">
                            Deve ser um e-mail válido.
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-flex">
                    <button class="btn btn-outline-secondary mr-auto border">
                        Cancelar Alteração
                    </button>
                    <button class="btn btn-success">
                        <span class="spinner-border spinner-border-sm mr-1"></span>
                        Salvar Evento
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="card rounded shadow-sm mt-4">
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
                <form class="col">
                    <div>
                        <fieldset class="form-group">
                            <legend class="d-flex justify-content-between capitalize">
                                <!-- {{
                                        lotes.get(i + '.nome').value === null || lotes.get(i + '.nome').value === ''
                                            ? 'Nome do Lote'
                                            : lotes.get(i + '.nome').value
                                }} -->
                                <button class="p-2 btn btn-sm btn-outline-warning mb-1 d-flex" tooltip="Excluir Lote"
                                    placement="left">
                                    <i class="fa fa-window-close my-1"></i>
                                    <b class="ml-1 d-none d-sm-block">Excluir</b>
                                </button>
                            </legend>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label>Nome</label>
                                    <input type="text" class="form-control" placeholder="Lote">
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
                                    <input type="text" class="form-control" formControlName="dataInicio"
                                        placeholder="01/01/2019">
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Data Fim</label>
                                    <input type="text" class="form-control" formControlName="dataFim"
                                        placeholder="01/01/2019">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
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
                    <span class="spinner-border spinner-border-sm mr-1"></span>
                    Salvar Lotes
                </button>
            </div>
        </div>
    </div>

    <div class="card rounded shadow-sm mt-4">
        <div class="p-3">
            <div class="d-flex border-bottom">
                <h2 class="mr-auto">
                    Redes Sociais do Evento
                </h2>
                <h2>
                    <i class="fa fa-user-friends"></i>
                </h2>
            </div>
            <p>Clique em Rede Social para adicionar e preencher novas Redes Sociais</p>
            <div class="form-row p-1">
                <form class="col">
                    <!-- <div >
                        <fieldset [formGroupName]="j" class="form-group">
                            <legend class="d-flex capitalize">
                                <div class="mr-auto align-self-center">
                                    <i class="iconesSociais mr-2 {{redesSociais.get(j+'.nome').value}}"></i>
                                    <label>
                                        {{
                                                redesSociais.get(j + '.nome').value === '' || redesSociais.get(j +
                                                    '.nome').value
                                                    === null
                                                    ? 'Redes Sociais'
                                                    : redesSociais.get(j + '.nome').value?.replace('fab fa-', '')
                                        }}
                                    </label>
                                </div>
                                <button (click)="removerRedeSocial(j)"
                                    class="p-2 btn btn-sm btn-outline-warning mb-1 d-flex" tooltip="Excluir Rede Social"
                                    [adaptivePosition]="false" placement="left" [delay]="500">
                                    <i class="fa fa-window-close my-1"></i>
                                    <b class="ml-1 d-none d-sm-block">Excluir</b>
                                </button>
                            </legend>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label>Nome</label>
                                    <select class="form-control"
                                        [ngClass]="{'is-invalid': redesSociais.get(j+'.nome').errors && redesSociais.get(j+'.nome').touched}"
                                        formControlName="nome">
                                        <option value="">Selecione</option>
                                        <option value="fab fa-youtube">Youtube</option>
                                        <option value="fab fa-instagram">Instagram</option>
                                        <option value="fab fa-facebook">Facebook</option>
                                        <option value="fab fa-twitter">Twitter</option>
                                        <option value="fab fa-google">Google</option>
                                        <option value="fab fa-linkedin">Linkedin</option>
                                        <option value="fab fa-pinterest">Pinterest</option>
                                        <option value="fab fa-whatsapp">Whatsapp</option>
                                        <option value="fab fa-telegram">Telegram</option>
                                        <option value="fab fa-skype">Skype</option>
                                        <option value="fab fa-vimeo">Vimeo</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-8">
                                    <label>Link</label>
                                    <input type="text" prefix="http://" mask=""
                                        [ngClass]="{'is-invalid': redesSociais.get(j+'.url').errors && redesSociais.get(j+'.url').touched}"
                                        formControlName="url" class="form-control" placeholder="URL">
                                </div>
                            </div>
                        </fieldset>
                    </div> -->
                </form>
            </div>
            <button class="d-flex btn btn-outline-primary">
                <i class="fa fa-plus-circle my-1"></i>
                <b class="ml-1"> Rede Social</b>
            </button>
        </div>
        <div class="card-footer">
            <div class="d-flex">
                <button class="btn btn-outline-secondary mr-auto border">
                    Cancelar Alteração
                </button>
                <button class="btn btn-success">
                    <span class="spinner-border spinner-border-sm mr-1"></span>
                    Salvar Redes Sociais
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { RouteParams, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { Evento } from "../../models/Evento";
import httpclient from "../../services/httpclient";
import LoadingComponenet from '../../shared/LoadingComponenet.vue'
const route = useRoute();
const loading = ref(true);
const evento = ref<Evento>();
const toast = useToast();
onMounted(() => {
    console.log(route.params.id)
    if (!Number.isNaN(route.params.id))
        getEvento(route.params.id);

})

function getEvento(id: any): void {
    httpclient.get('/Evento/Evento/' + id)
        .then((response) => {
            evento.value = { ...response.data };
        }).finally(() => {
            loading.value = false;
            toast.success("Evento Carregado com sucesso")
        })
        .catch((error) => {
            loading.value = false;
            toast.error("Erro ao carregar o Evento", error)
        })
}
</script>

<style scoped>
</style>
