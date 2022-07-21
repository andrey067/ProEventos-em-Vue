<template class="columns">
    <div class="box is-full">
        <div class="card p-6">
            <form class="">
                <div>
                    <label class="label" for="username">Tema</label>
                    <div class="control has-icons">
                        <input class="input" type="text" placeholder="Insira o Tema" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                    <div class="columns is-four-fifths">
                        <div class="column is-9">
                            <label class="label">Local</label>
                            <input class="input" type="text" placeholder="Email" name="firstName" />
                        </div>
                        <div class="column">
                            <label class="label" for="firstName">Telefone</label>
                            <div class="control">
                                <div>
                                    <span class="icon">
                                        <i class="fas fa-calendar"></i>
                                    </span>
                                    <flat-pickr class="button" :config="config" v-model="dataEvento"></flat-pickr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column"><label class="label" for="password">Senha</label>
                            <div class="control has-icons">
                                <input class="input" type="new-password" placeholder="Password" name="password" />
                                <span class="icon is-left"><i class="fa"></i></span>
                            </div>
                        </div>
                        <div class="column"><label class="label" for="retypePassword">Confirmar Senha</label>
                            <div class="control has-icons-left"><input class="input" type="current-password"
                                    placeholder="Confirm Password" name="retypePassword" /><span class="icon is-left"><i
                                        class="fa"></i></span></div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-1"><label class="label" for="password">Qtd Pessoas</label>
                            <div class="control has-icons">
                                <input class="input" type="number" name="password" />
                                <span class="icon is-left"><i class="fa"></i></span>
                            </div>
                        </div>
                        <div class="column">
                            <label class="label" for="retypePassword">Telefone</label>
                            <div class="control has-icons-left">
                                <input class="input" type="number" name="retypePassword" />
                                <span class="icon is-left"><i class="fa"></i></span>
                            </div>
                        </div>
                        <div class="column"><label class="label" for="retypePassword">Email</label>
                            <div class="control has-icons-left">
                                <input class="input" type="email" name="retypePassword" />
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
                    <router-link to="/user/login" class="button is-primary is-medium" type="submit"> Salvar Alteração
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const dataEvento = ref<Date>(new Date());
const config = reactive({
    dateFormat: 'd-m-Y'
})
</script>

<style lang="scss">
</style>