<template>
    <div v-if="show" class="d-flex justify-content-center">
        <MDBSpinner />
    </div>
</template>

<script setup lang="ts">
import { MDBSpinner } from "mdb-vue-ui-kit";
defineProps({
    show: Boolean,
    titulo: String,
    subtitulo: {
        type:String,
        default: 'Desde 2021'
    },
    iconClass: {
        type:String,
        default: 'fa fa-user'
    }
})

</script>

<style>
</style>