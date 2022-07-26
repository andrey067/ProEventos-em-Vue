<template>   
    <vue-element-loading :active="show" spinner="spinner" />
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core"
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
onMounted(() => {
    carregandoAtivo();
})
function carregandoAtivo(): String {
    return props.show ? 'loader-wrapper is-active' : 'loader-wrapper'
}
</script>

<style scoped lang="css">
@keyframes spinner-grow {
    0% {
        transform: scale(0);
    }

    50% {
        opacity: 1;
        transform: none;
    }

}
</style>