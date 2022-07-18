<template>
    <div v-if="show" class="d-flex justify-content-center">
        <MDBSpinner />
    </div>
</template>

<script setup lang="ts">
import { MDBSpinner } from "mdb-vue-ui-kit";
defineProps({
    show: Boolean
})

</script>

<style>
</style>