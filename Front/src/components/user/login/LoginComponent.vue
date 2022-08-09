<template>
  <el-card class="card-evento-view">
    <div class="d-flex align-items-center vh-100">
      <div class="mx-auto text-center shadow-sm bg-white rounded p-5 my-5">
        <form class="form-signin">
          <i class="fa fa-users mb-2"></i>
          <h1 class="h3 mb-3 font-weight-normal">Entrar com</h1>
          <label for="username" class="sr-only">Usuário</label>
          <input name="username" type="email" id="username" class="form-control" placeholder="Usuário" required>
          <label for="password" class="sr-only">Password</label>
          <input name="password" type="password" id="password" class="form-control" placeholder="Senha" required>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
          <p class="mt-4 mb-2 text-muted">Não tem login? Cadastre-se abaixo</p>
          <a class="btn btn-lg btn-link btn-block" routerLink="/user/registro">Quero me cadastrar</a>
        </form>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="css">
.card-evento-view {
    justify-content: center;
    align-items: center;
    top: 10px;
    padding: 40px;
    width: 30%;    
    margin-left: 35%;
    margin-top:3% ;    
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-signin i {
  font-size: 50px;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
