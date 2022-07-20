<template>
    <div class="card m-6 p-5  is-full">
        <div class="container">
            <form>
                <div>
                    <!-- <div class="columns is-four-fifths">
                        <div class="column is-3">
                            <label class="label">Titulo</label>
                            <div class="select control">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                        <div class="column">
                            <label class="label" for="firstName">Primeiro Nome</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="First Name" name="firstName" />
                            </div>
                        </div>
                        <div class="column">
                            <label class="label" for="lastName">Ultimo Nome</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Last Name" name="lastName" />
                            </div>
                        </div>
                    </div> -->

                    <label class="label" for="username">Tema</label>
                    <div class="control has-icons">
                        <input class="input" type="text" placeholder="Insira o Tema" />
                        <span class="icon is-left"><i class="fa"></i></span>
                    </div>
                    <div class="columns is-four-fifths">
                        <div class="column is-5">
                            <label class="label">Local</label>
                            <input class="input" type="text" placeholder="Email" name="firstName" />
                        </div>
                        <div class="column">
                            <label class="label" for="firstName">Telefone</label>
                            <div class="control">
                                <div>
                                    <datepicker placeholder="European Format ('d-m-Y')"
                                        :config="{ dateFormat: 'd-m-Y', static: true }"></datepicker>

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

                    <div class="field is-grouped">
                        <div class="control">
                            <router-link to="/user/login" class="button is-primary is-medium" type="submit"> Salvar
                                Alteração</router-link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">



</script>

<style lang="scss">
</style>