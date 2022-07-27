<template>
    <div class="d-flex align-items-center vh-100">
        <div class="mx-auto text-center shadow-sm bg-white rounded p-5 my-5" data-gr-c-s-loaded="true">
            <form class="form-signin">
                <i class="fa fa-users mb-2"></i>
                <h1 class="h3 mb-3 font-weight-normal">Entrar com</h1>
                <label for="username" class="sr-only">Usuário</label>
                <input type="email" id="username" class="form-control" placeholder="Usuário" name="username" required>
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Senha" name="password" required>
                <!--div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div-->
                <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                <p class="mt-4 mb-2 text-muted">Não tem login? Cadastre-se abaixo</p>
                <router-link class="btn btn-lg btn-link btn-block" to="/user/registro">Quero me cadastrar</router-link>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;

    i {
        font-size: 50px;
    }

    .checkbox {
        font-weight: 400;
    }

    .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-control:focus {
        z-index: 2;
    }

    input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
}
</style>