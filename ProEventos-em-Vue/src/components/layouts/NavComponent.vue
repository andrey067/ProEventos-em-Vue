<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
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

                <!-- <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div> -->
            </div>

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
        </div>
    </nav>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const collapse1 = ref(false);
const dropdown1 = ref(false);
</script>

<style>
</style>