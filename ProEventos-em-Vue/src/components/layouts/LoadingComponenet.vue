<template>
    <div :class="carregandoAtivo()">
        <div class="loader is-loading"></div>
    </div>
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

<style scoped lang="scss">
.loader-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0;
    z-index: -1;
    transition: opacity .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    .loader {
        height: 80px;
        width: 80px;
    }

    &.is-active {
        opacity: 1;
        z-index: 1;
    }
}
</style>