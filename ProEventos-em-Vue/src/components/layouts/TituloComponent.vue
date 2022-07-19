<template>
    <!-- <div class="d-flex p-3 my-3 text-white bg-secondary rounded shadow-sm">
        <div class="d-flex align-items-center mr-auto">
            <i :class="iconClass"></i>
            <div class="lh-100">
                <h2 class="mb-0">{{ titulo }}</h2>
                <small>{{ subtitulo }}</small>
            </div>
        </div>
        <div class="p-3" v-if="botaoListar">
            <button class="btn btn-outline-light">
                Listar {{ titulo }}
            </button>
        </div>
    </div> -->
    <section class="hero is-info welcome is-small">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Hello, Admin.
                </h1>
                <h2 class="subtitle">
                    I hope you are having a great day!
                </h2>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    titulo: {
        type: String,
        default: "Titulo"
    },
    subtitulo: {
        type: String,
        default: 'Desde 2021'
    },
    iconClass: {
        type: String,
        default: 'fa fa-user',
    },
    botaoListar: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
i {
    margin-left: 10px;
    font-size: 48px;
}
</style>