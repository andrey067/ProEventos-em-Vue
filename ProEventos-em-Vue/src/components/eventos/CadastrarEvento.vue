<template>
    <TituloComponent :titulo="dadosTitulo.titulo" :subtitulo="dadosTitulo.subtitulo" :icon-class="dadosTitulo.iconClass"
        :botao-listar="true" />
    <div class="section is-flex is-justify-content-center">
        <form class="box" @submit="submitForm()">
            <label class="label">Tema</label>
            <div class="mb-5">
                <input class="input" type="text" v-model="cadastroEventoForm.tema" placeholder="Tema do evento" />
                <div v-for="(error, index) in validacao.tema.$errors" :key="index">
                    <p class="help is-danger">{{ error.$message }}</p>
                </div>
            </div>

            <div class="columns is-three-quarters">
                <div class="column mr-3">
                    <label class="label">Local</label>
                    <input class="input" type="text" placeholder="Local" name="firstName"
                        v-model="cadastroEventoForm.local" />
                    <div v-for="(error, index) in validacao.local.$errors" :key="index">
                        <p class="help is-danger">{{ error.$message }}</p>
                    </div>
                </div>
                <div class="column is-2">
                    <label class="label">Data Evento</label>
                    <div class="control is-flex">
                        <span class="icon">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <flat-pickr class="input" :config="config" v-model="cadastroEventoForm.dataEvento"
                            placeholder="Data Evento">
                        </flat-pickr>
                        <div v-for="(error, index) in validacao.dataEvento.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column"><label class="label" for="password">Senha</label>
                    <div class="control has-icons">
                        <input class="input" type="new-password" placeholder="Password" name="password"
                            v-model="cadastroEventoForm.passawords.password" />
                        <div v-for="(error, index) in validacao.passawords.password.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
                <div class="column"><label class="label" for="retrypassword">Confirmar Senha</label>
                    <div class="control has-icons">
                        <input class="input" type="current-password" placeholder="Confir Password" name="confirPassword"
                            v-model="cadastroEventoForm.passawords.confirPassword" />
                        <div v-for="(error, index) in validacao.passawords.confirPassword.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-2"><label class="label" for="password">Qtd Pessoas</label>
                    <div class="control has-icons">
                        <input class="input" type="number" name="password" v-model="cadastroEventoForm.qtdPessoas" />
                        <div v-for="(error, index) in validacao.qtdPessoas.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Telefone</label>
                    <div class="control has-icons">
                        <input class="input" type="number" name="retypePassword"
                            v-model="cadastroEventoForm.telefone" />
                        <div v-for="(error, index) in validacao.telefone.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Email</label>
                    <div class="control has-icons">
                        <input class="input" type="email" name="retypePassword" v-model="cadastroEventoForm.email"
                            placeholder="Email" />
                        <div v-for="(error, index) in validacao.email.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Imagem</label>
                    <div class="file is-normal">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" @change="handlerFile($event)">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Escolha a imagem do Evento
                                </span>
                            </span>
                            <div v-for="(error, index) in validacao.urlImagem.$errors" :key="index">
                                <p class="help is-danger">{{ error.$message }}</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="is-flex is-justify-content-center">
                <div class="mr-6">
                    <button class="button is-medium is-info" @click="resetForm()"> Cancelar</button>
                </div>
                <div class="ml-6">
                    <button class="button is-primary is-medium" :disabled="validacao.$invalid" type="submit"
                        @click="submitForm()"> Salvar
                        Alteração</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email, helpers, sameAs, minLength, minValue } from '@vuelidate/validators'
import { CadastrarEventoFrom } from "../../models/CadastroEventoForm";
import { Titulo } from "../../interfaces/Titulo";
import TituloComponent from '../../shared/TituloComponenent.vue'
import { useRoute } from "vue-router";
const route = useRoute();

const dadosTitulo: Titulo = {
    titulo: "Cadastrar Evento",
    subtitulo: "Cadastre seu Evento aqui",
    iconClass: "fa-wpforms",
    router: route.matched[0].path
}

const config = reactive({
    dateFormat: 'd-m-Y'
});

const cadastroEventoForm = reactive<CadastrarEventoFrom>({
    tema: '',
    local: '',
    dataEvento: '',
    passawords: {
        password: '',
        confirPassword: ''
    },
    qtdPessoas: Number(),
    telefone: Number(),
    email: '',
    urlImagem: []
});

const rules = {
    tema: { required: helpers.withMessage('Campo obrigatorio', required) },
    local: { required: helpers.withMessage('Campo obrigatorio', required) },
    dataEvento: { required: helpers.withMessage('Campo obrigatorio', required) },
    passawords: {
        password: { required: helpers.withMessage('Campo obrigatorio', required) },
        confirPassword: { required: helpers.withMessage('Campo obrigatorio', required) }
    },
    qtdPessoas: { required: helpers.withMessage('Campo obrigatorio', required) },
    telefone: { required: helpers.withMessage('Campo obrigatorio', required) },
    email: { required: helpers.withMessage('Campo obrigatorio', required), email: helpers.withMessage('Email Invalido', email) },
    urlImagem: { required: helpers.withMessage('Campo obrigatorio', required) }
};

function submitForm() {
    console.log("Form", cadastroEventoForm);
    // validador.value.$touch()
    // console.log("validador", validador)
}

function handlerFile(event: Event) {
    console.log("Event", event);
    const target = (event.target as HTMLInputElement);
    cadastroEventoForm.urlImagem = target.files as FileList;
    console.log("urlImagem", cadastroEventoForm.urlImagem);
}

const validacao = useVuelidate(rules, cadastroEventoForm, { $autoDirty: true });

function resetForm(): void {
    console.log("Limpar Formulario");
    validacao.value.$validate
    console.log("validacao", validacao.value)

}
</script>

<style lang="css">
</style>