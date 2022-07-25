<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-scroller bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/eventos/lista">
                <i class="fa fa-users mb-2"></i>
            </router-link>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style="cursor: pointer;" id="navbarDropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Audrey
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" routerLink="user/perfil/1">
                                Perfil
                            </a>
                            <div role="separator" class="divider"></div>
                            <a class="dropdown-item" href="user/login">
                                Sair
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <nav class="navbar level" role="navigation" aria-label="main navigation" v-if="mostarNav">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/eventos/lista">
                <i class="fa fa-users mb-2"></i>
            </router-link>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/eventos/lista">
                    Eventos
                </router-link>
                <router-link class="navbar-item" to="/palestrantes">
                    Palestrantes
                </router-link>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    Usuario
                </a>

                <div class="navbar-dropdown">
                    <router-link to="/user/perfil" class="navbar-item">
                        Perfil
                    </router-link> -->
    <!-- <a class="navbar-item">
                        Jobs
                    </a> -->
    <!-- <a class="navbar-item">
                        Contact
                    </a> -->
    <!-- <hr class="navbar-divider">
                    <router-link to="/user/registro" class="navbar-item">
                        Sair
                    </router-link>
                </div>
            </div>
        </div> -->

    <!-- <div class="navbar-end">
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
            </div> -->
    <!-- </nav> -->
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