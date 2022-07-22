<template class="columns">
    <div class="card p-6">
        <Form class="box" @submit="submitForm()">
            <label class="label" for="username">Tema</label>
            <div class="control has-icons">
                <input class="input" v-validate="'required|min:3'" v-model="cadastroEventoForm.tema" />
                {{ errorMessage }}
                <!-- <ErrorMessage class="help is-danger" name="tema" /> -->
            </div>

            <!-- <div class="columns is-three-quarters">
                <div class="column mr-3">
                    <label class="label">Local</label>
                    <input class="input" type="text" placeholder="Local" name="firstName"
                        v-model="cadastroEventoForm.local" />
                </div>
                <div class="column is-2">
                    <label class="label">Data Evento</label>
                    <div class="control is-flex">
                        <span class="icon">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <flat-pickr class="input" :config="config" v-model="cadastroEventoForm.dataEvento">
                        </flat-pickr>
                    </div>
                </div>
            </div> -->
            <!-- 
            
            <div class="columns is-three-quarters">
                <div class="column mr-3">
                    <label class="label">Local</label>
                    <input class="input" type="text" placeholder="Local" name="firstName"
                        v-model="cadastroEventoForm.local" />
                </div>
                <div class="column is-2">
                    <label class="label">Data Evento</label>
                    <div class="control is-flex">
                        <span class="icon">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <flat-pickr class="input" :config="config" v-model="cadastroEventoForm.dataEvento">
                        </flat-pickr>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column"><label class="label" for="password">Senha</label>
                    <div class="control has-icons">
                        <input class="input" type="new-password" placeholder="Password" name="password"
                            v-model="cadastroEventoForm.passaword.password" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                </div>
                <div class="column"><label class="label" for="retrypassword">Confirmar Senha</label>
                    <div class="control has-icons">
                        <input class="input" type="current-password" placeholder="Confir Password" name="confirPassword"
                            v-model="cadastroEventoForm.passaword.password" />
                        <span class="icon is-left">
                            <i class="fa"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-2"><label class="label" for="password">Qtd Pessoas</label>
                    <div class="control has-icons">
                        <input class="input" type="number" name="password" v-model="cadastroEventoForm.qtdPessoas" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Telefone</label>
                    <div class="control has-icons-left">
                        <input class="input" type="number" name="retypePassword"
                            v-model="cadastroEventoForm.telefone" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Email</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" name="retypePassword" v-model="cadastroEventoForm.email" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                </div>
                <div class="column">
                    <label class="label" for="retypePassword">Email</label>
                    <div class="file is-normal">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" @change="handlerFile($event)">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div> -->
        </Form>
    </div>

    <div class="card-footer">
        <div class="card-footer-item box">
            <div class="mr-6">
                <button class="button is-medium is-info"> Cancelar</button>
            </div>
            <div class="ml-6">
                <button class="button is-primary is-medium" type="submit" @click="submitForm()"> Salvar
                    Alteração</button>
            </div>
        </div>
    </div>

    <!-- <div :class="{ error: v$.$errors.length }">
            <input v-model="cadastroEventoForm.tema">
            <div class="input-errors" v-for="error of v$.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div> -->


</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { Form, Field, ErrorMessage, useField } from 'vee-validate';

import * as Yup from "yup";
import { CadastrarEventoFrom } from "../../models/CadastroEventoForm";

const { errorMessage, meta, value } = useField('tema',);

const config = reactive({
    dateFormat: 'd-m-Y'
});

const cadastroEventoFormShema = Yup.object({
    tema: Yup.string().required(),
    local: Yup.string().required(),
    dataEvento: Yup.date().required(),
    passawords: Yup.object().shape({
        passaword: Yup.string().required(),
        confirPassword: Yup.string().required()
    }),
    qtdPessoas: Yup.number().required(),
    telefone: Yup.number().required(),
    email: Yup.string().required(),
    urlImagem: Yup.array().required()
})
const cadastroEventoForm = reactive<CadastrarEventoFrom>({
    tema: '',
    local: '',
    dataEvento: '',
    passaword: {
        password: '',
        confirPassword: ''
    },
    qtdPessoas: Number(),
    telefone: Number(),
    email: '',
    urlImagem: []
});

function validar() {
    let v = VeeValidate
}

function submitForm() {
    console.log("Form", cadastroEventoForm);
}

function handlerFile(event: Event) {
    console.log("Event", event);
    // cadastroEventoForm.urlImagem = event.target.files;
    console.log("urlImagem", cadastroEventoForm.urlImagem);
}

</script>

<style lang="scss">
</style>