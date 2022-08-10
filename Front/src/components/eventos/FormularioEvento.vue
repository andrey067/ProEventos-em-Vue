<template>
    <el-form ref="ruleFormCadastroEvento" :model="evento" :rules="rules" :size="size" label-width="auto"
        label-position="top" status-icon>
        <div class="card rounded shadow-sm">
            <div class="p-3">
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <el-form-item label="Tema" prop="tema">
                            <el-input v-model="evento.tema" />
                        </el-form-item>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <el-form-item label="Local" prop="local">
                            <el-input v-model="evento.local" />
                        </el-form-item>
                    </div>
                    <div class="form-group col-md-4">
                        <el-form-item label="Data Evento" prop="dataEvento" style="margin-left: 2%">
                            <el-date-picker format="DD/MM/YYYY" value-format="DD-MM-YYYY" v-model="evento.dataEvento"
                                type="date" placeholder="Data do evento" style="width: 100%" />
                        </el-form-item>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <el-form-item label="Qtd Pessoas" prop="qtdPessoas">
                            <el-input v-model="evento.qtdPessoas" />
                        </el-form-item>
                    </div>
                    <div class="form-group col-md-4">
                        <el-form-item label="Telefone" prop="telefone">
                            <el-input v-model="evento.telefone" placeholder="(000) 90000-0000" />
                        </el-form-item>
                    </div>
                    <div class="form-group col-md-6">
                        <el-form-item label="Email" prop="email">
                            <el-input v-model="evento.email" />
                        </el-form-item>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div class="card-footer">
                <div class="d-flex">
                    <el-button @click="router.push({ name: 'lista' })">Voltar</el-button>
                    <el-button type="success" @click="submitForm(ruleFormCadastroEvento)">Salvar alteração</el-button>
                </div>
            </div>
        </div>

        <el-form-item v-for="(lote, index) in evento.lotes" :key="lote.id">
            <div class="card rounded shadow-sm mt-3" style="width: 100%;">
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
                                                <el-input v-model="lote.nome" />
                                            </el-form-item>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <el-form-item label="Quantidade" prop="quantidade">
                                                <el-input v-model="lote.quantidade" placeholder="000" />
                                            </el-form-item>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <el-form-item label="Preco" prop="preco">
                                                <el-input v-model="lote.preco" placeholder="000" />
                                            </el-form-item>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <el-form-item label="Data Inicio" prop="dataEvento" style="margin-left: 2%">
                                                <el-date-picker format="DD/MM/YYYY" v-model="lote.dataInicio"
                                                    type="date" placeholder="Data do Inicio" style="width: 100%" />
                                            </el-form-item>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <el-form-item label="Data Fim" prop="dataEvento" style="margin-left: 2%">
                                                <el-date-picker format="DD/MM/YYYY" v-model="lote.dataFim" type="date"
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
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElNotification, FormInstance, FormRules } from "element-plus";
import { Evento } from "../../Models/Eventos/Evento";
import { useRoute, useRouter } from "vue-router";
import httpclient from '../../services/HttpClient';
import { Lote } from "../../Models/lote";

const route = useRoute();
const ruleFormCadastroEvento = ref<FormInstance>();
const size = ref('large');
const fullscreenLoading = ref(false);
const router = useRouter();

const evento = ref<Evento>({
    id: 0,
    tema: '',
    local: '',
    dataEvento: '',
    qtdPessoas: 0,
    telefone: '',
    email: '',
    imagemURL: '',
    lotes: [] as Lote[],
    redesSociais: [],
    palestrantesEventos: []
});

const rules = reactive<FormRules>({
    tema: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
        { min: 3, message: 'Tema deve conter 3 a 5 caracteres', trigger: 'blur' },
    ],
    local: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
        { min: 3, message: 'Local deve conter 3 a 5 caracteres', trigger: 'blur' },
    ],
    dataEvento: [
        { type: 'date', required: true, message: 'Campo obrigatorio', trigger: 'blur' },
    ],
    qtdPessoas: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
        { min: 3, max: 999, type: 'number', message: 'Valor maior deve ser mair que zero', trigger: 'blur' }
    ],
    telefone: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
        { min: 3, max: 34, message: 'Deve um telefone valido', trigger: 'blur' }
    ],
    email: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
    ],
    urlImagem: [
        { required: true, message: 'Campo obrigatorio', trigger: 'blur' },
    ],
});

function submitForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

function resetForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.resetFields()
}

function getEvento(id: any): void {
    httpclient.get<Evento>('/eventos/' + id)
        .then((response) => {
            evento.value = { ...response.data };
            console.log("evento", evento.value)
        }).finally(() => {
            fullscreenLoading.value = false;
        })
        .catch((error) => {
            fullscreenLoading.value = false;
            ElNotification.error({
                title: "Erro",
                message: "Erro ao carregar o evento: " + id,
                offset: 100,
            })
        })
}

onMounted(() => {
    fullscreenLoading.value = true;
    console.log(route.params.id)
    if (!Number.isNaN(route.params.id))
        getEvento(route.params.id);
})


function update() {
    evento.value.dataEvento = evento.value.dataEvento;
}

</script>

<style>
</style>