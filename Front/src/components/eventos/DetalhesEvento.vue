<template>
    <el-card class="card-evento-view" v-loading.fullscreen.lock="fullscreenLoading">
        <el-form ref="ruleFormCadastroEvento" :model="evento" :rules="rules" :size="size" label-width="auto"
            class="demo-ruleForm" label-position="top" status-icon>
            <el-row justify="center">
                <el-col :span="20">
                    <el-form-item label="Tema" prop="tema">
                        <el-input v-model="evento.tema" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="16">
                    <el-form-item label="Local" prop="local">
                        <el-input v-model="evento.local" />
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="Data Evento" prop="dataEvento" style="margin-left: 2%">
                        <el-date-picker format="DD/MM/YYYY" value-format="DD-MM-YYYY" @change="update()" v-model="evento.dataEvento"
                            type="date" placeholder="Data do evento" style="width: 100%" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20" justify="center">
                <el-col :span="3">
                    <el-form-item label="Qtd Pessoas" prop="qtdPessoas">
                        <el-input v-model="evento.qtdPessoas" />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="Telefone" prop="telefone">
                        <el-input v-model="evento.telefone" />
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="evento.email" />
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="Imagem" prop="imagemURL">
                        <el-input v-model="evento.imagemURL" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20" justify="center">
                <el-form-item>
                    <el-button @click="router.push({ name: 'lista' })">Voltar</el-button>
                    <el-button type="success" @click="submitForm(ruleFormCadastroEvento)">Salvar alteração</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Evento } from "../../Models/Eventos/Evento";
import httpclient from '../../services/HttpClient';
import { ElNotification } from 'element-plus';

const route = useRoute();
const router = useRouter();
const ruleFormCadastroEvento = ref<FormInstance>();
const size = ref('large');
const fullscreenLoading = ref(false);

const evento = ref<Evento>({
    id: 0,
    tema: '',
    local: '',
    dataEvento: '',
    qtdPessoas: 0,
    telefone: '',
    email: '',
    imagemURL: '',
    lotes: [],
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
            console.log("evento.value", evento.value)
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
function update(){
    evento.value.dataEvento = evento.value.dataEvento;
}
</script>

<style scoped>
.card-evento-view {
    justify-content: center;
    align-items: center;
    top: 10px;
    padding: 40px;
    width: 80%;
    margin-left: 8%;
}
</style>
