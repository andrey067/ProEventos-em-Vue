<template>
    <div class="row mt-4">

        <div class="col-md-6 d-none d-md-block" style="height: 450px;">
            <div class="text-center col-md-12 my-auto side-heder">
                <h1>Cadastro de Usuário</h1>
                <el-image style="width: 400px" class="my-4" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />                
            </div>
        </div>

        <div class="col-md-6">

            <form class="p-1">
                <div class="pb-2 d-block d-md-none">
                    <h3 class="border-bottom">Cadastro de Usuário</h3>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <label>Primeiro Nome</label>
                        <input type="text" class="form-control" formControlName="primeiroNome"
                            placeholder="Insira o Primeiro nome" />
                        <div class="invalid-feedback">
                            Primeiro Nome é obrigatório.
                        </div>
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Último nome</label>
                        <input type="text" class="form-control" formControlName="ultimoNome"
                            placeholder="Insira o Último nome" />
                        <div class="invalid-feedback">
                            Último Nome é obrigatório.
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Email:</label>
                    <input class="form-control" type="text" formControlName="email"
                        placeholder="Insira o Nome Completo" />
                    <div class="invalid-feedback">
                        e-mail é obrigatório.
                    </div>
                    <div class="invalid-feedback">
                        Deve ser um e-mail válido.
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Usuario:</label>
                    <input class="form-control" type="text" formControlName="userName"
                        placeholder="Insira o nome de Usuário" />
                    <div class="invalid-feedback">
                        Usuário é obrigatório.
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <label for="">Senha:</label>
                        <input class="form-control" type="password" formControlName="password"
                            placeholder="Digite uma Senha" />
                        <div>
                            Senha é obrigatório.
                        </div>
                        <div class="invalid-feedback">
                            Deve conter no mínimo 6 caracteres.
                        </div>
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="">Confirmar Senha:</label>
                        <input class="form-control" type="password" formControlName="confirmePassword"
                            placeholder="Confirme a Senha" />
                        <div class="invalid-feedback">
                            Confirmar Senha é obrigatório.
                        </div>
                        <div class="invalid-feedback">
                            Repedir a senha é obrigatório.
                        </div>
                    </div>
                </div>
                <div class="form-row p-1 mb-3">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label">Eu concordo com os <a href="#">Termos de Uso</a>.</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-12">
                        <button class="btn btn-lg btn-success btn-block px-5" type="submit">
                            Registar
                        </button>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-12">
                        <a class="btn btn-link btn-block" routerLink="/user/login">
                            Já sou Cadastrado
                        </a>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
</style>