<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-scroller bg-white shadow-sm">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/eventos/lista">
                <i class="fa fa-users mb-2"></i>
            </router-link>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-item" to="/eventos/lista">
                        <a class="nav-link" aria-current="page">Eventos</a>
                    </router-link>
                    <router-link class="nav-item" to="/palestrantes">
                        <a class="nav-link" aria-current="page">Palestrantes</a>
                    </router-link>
                    <!-- <router-link class="nav-item" to="/palestrantes">
                        <a class="nav-link" aria-current="page">Contatos</a>
                    </router-link> -->
                </ul>
            </div>
            <div class="d-flex">
                <ul class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-current="page">
                        Audrey
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Perfil</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sair</a></li>
                    </ul>
                </ul>
                <!-- <ul>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </ul> -->
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mostarNav = ref(false);

watch(() => router.currentRoute.value.fullPath, (firt, second) => {
    mostrarNav(firt);
})
function mostrarNav(fullPath: String) {
    console.log(fullPath)
    if (fullPath !== '/user/login')
        return mostarNav.value = true;
    else mostarNav.value = false;
}

</script>

<style>
</style>