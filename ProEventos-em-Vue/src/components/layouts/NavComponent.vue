<template>
    <nav class="navbar level" role="navigation" aria-label="main navigation" v-if="mostarNav">
        <div class="navbar-brand">
            <a class="navbar-item" to="/eventos/lista">
                <i class="fa fa-users mb-2"></i>
            </a>
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
                    </router-link>
                    <!-- <a class="navbar-item">
                        Jobs
                    </a> -->
                    <!-- <a class="navbar-item">
                        Contact
                    </a> -->
                    <hr class="navbar-divider">
                    <router-link to="/user/registro" class="navbar-item">
                        Sair
                    </router-link>
                </div>
            </div>
        </div>

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