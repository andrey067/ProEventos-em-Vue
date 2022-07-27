<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-scroller bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/eventos/lista">
                <i class="fa fa-users mb-2"></i>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-item" to="/eventos/lista">
                        <a class="nav-link" aria-current="page">Eventos</a>
                    </router-link>
                    <router-link class="nav-item" to="/palestrantes">
                        <a class="nav-link" aria-current="page">Palestrantes</a>
                    </router-link>
                    <li class="nav-item" routerLinkActive="active">
                        <a class="nav-link" routerLink="contatos">Contatos</a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown" dropdown>
                        <a dropdownToggle class="nav-link dropdown-toggle" style="cursor: pointer;"
                            id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Audrey
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <router-link to="/user/perfil">
                                <a class="dropdown-item">Perfil</a>
                            </router-link>
                            <div role="separator" class="divider"></div>
                            <router-link to="/user/login">
                                <a class="dropdown-item">Sair</a>
                            </router-link>
                        </div>
                    </li>
                </ul>
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
    if (fullPath !== '/user/login')
        return mostarNav.value = true;
    else mostarNav.value = false;
}

</script>

<style>
</style>