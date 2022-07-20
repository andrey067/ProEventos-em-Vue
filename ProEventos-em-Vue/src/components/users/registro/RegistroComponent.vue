<template>
    <div class="columns level">
        <figure class="image is-450">
            <img src="../../../assets/registerImage.png">
        </figure>

        <div class="card mr-5 column is-two-thirds">
            <div class="container">
                <form>
                    <div class="field">
                        <div class="columns is-four-fifths">
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
                        </div>
                        <div class="columns is-four-fifths">
                            <div class="column is-5">
                                <label class="label">Email</label>
                                <input class="input" type="text" placeholder="Email" name="firstName" />
                            </div>
                            <div class="column">
                                <label class="label" for="firstName">Telefone</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="First Name" name="firstName" />
                                </div>
                            </div>
                            <div class="column">
                                <label class="label" for="lastName">Função</label>
                                <div class="select control">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <label class="label" for="username">Descriacao</label>
                        <div class="control has-icons">
                            <input class="input" type="text" placeholder="Username" name="username" />
                            <span class="icon is-left"><i class="fa"></i></span>
                        </div>
                        <div class="has-text-left">
                            <h3 class=" is-size-3">Mudar Senha</h3>
                            <p>Caso mude de senha, preencha os campos abaixo:</p>
                        </div>
                        <hr>
                        <div class="columns">
                            <div class="column"><label class="label" for="password">Senha</label>
                                <div class="control has-icons">
                                    <input class="input" type="new-password" placeholder="Password" name="password" />
                                    <span class="icon is-left"><i class="fa"></i></span>
                                </div>
                            </div>
                            <div class="column"><label class="label" for="retypePassword">Confirmar Senha</label>
                                <div class="control has-icons-left"><input class="input" type="current-password"
                                        placeholder="Confirm Password" name="retypePassword" /><span
                                        class="icon is-left"><i class="fa"></i></span></div>
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
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css">
</style>