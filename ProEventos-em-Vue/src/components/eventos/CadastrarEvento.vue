<template class="columns">
    <div class="box is-full">
        <div class="card p-6">
            <form class="">
                <div>
                    <label class="label" for="username">Tema</label>
                    <div class="control has-icons">
                        <input class="input" type="text" placeholder="Insira o Tema"
                            v-model="cadastroEventoForm.tema" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                    <div class="columns is-four-fifths">
                        <div class="column is-9">
                            <label class="label">Local</label>
                            <input class="input" type="text" placeholder="Local" name="firstName"
                                v-model="cadastroEventoForm.local" />
                        </div>
                        <div class="column">
                            <label class="label" for="firstName">Data Evento</label>
                            <div class="control">
                                <div>
                                    <span class="icon">
                                        <i class="fas fa-calendar"></i>
                                    </span>
                                    <flat-pickr class="button" :config="config" v-model="cadastroEventoForm.dataEvento">
                                    </flat-pickr>
                                </div>
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
                        <div class="column"><label class="label" for="retypePassword">Confirmar Senha</label>
                            <div class="control has-icons-left">
                                <input class="input" type="current-password" placeholder="Confirm Password"
                                    name="retypePassword" v-model="cadastroEventoForm.passaword.confirPassword" />
                                <span class="icon is-left">
                                    <i class="fa"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-2"><label class="label" for="password">Qtd Pessoas</label>
                            <div class="control has-icons">
                                <input class="input" type="number" name="password"
                                    v-model="cadastroEventoForm.qtdPessoas" />
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
                        <div class="column"><label class="label" for="retypePassword">Email</label>
                            <div class="control has-icons-left">
                                <input class="input" type="email" name="retypePassword"
                                    v-model="cadastroEventoForm.email" />
                                <span class="icon is-left"><i class="fa"></i></span>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
        <div class="card-footer m-5 ">
            <div class="field is-grouped ">
                <div class="control  ">
                    <button class="button is-medium is-info"> Cancelar</button>
                    <button class="button is-primary is-medium" type="submit" @click="cadastrar()"> Salvar Alteração
                    </button>
                </div>
            </div>
        </div>
        <div :class="{ error: v$.$errors.length }">
            <input v-model="cadastroEventoForm.tema">
            <div class="input-errors" v-for="error of v$.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const config = reactive({
    dateFormat: 'd-m-Y'
});
const cadastroEventoForm = reactive({
    tema: '',
    local: '',
    dataEvento: '',
    passaword: {
        password: '',
        confirPassword: ''
    },
    qtdPessoas: 0,
    telefone: '',
    email: ''
});

const rules = {
    tema: { required },
    local: { required },
    dataEvento: { required },
    passaword: {
        password: { required },
        confirPassword: { required }
    },
    qtdPessoas: { required },
    telefone: { required },
    email: { required }
}
const v$ = useVuelidate(rules, cadastroEventoForm);

function cadastrar() {
    v$.value.$validate()
    console.log("cadastroEventoForm", cadastroEventoForm);
    console.log("v", v$.value.$error)
    console.log("erros", v$.value.$errors)
    if (!v$.value.$error)
        alert("Form sucessfuly")
    else
        alert("Erro")
}


</script>

<style lang="scss">
</style>