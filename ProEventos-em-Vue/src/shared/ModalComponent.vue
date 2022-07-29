

<template>
    <!-- <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModal"
        @after-leave="startTransitionModal"> -->
        <div class="modal fade" v-if="abrimodal" ref="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <!-- <button class="close" type="button" @click="abrimodal = !abrimodal"><span
                                aria-hidden="true">×</span></button> -->
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <!-- <button class="btn btn-secondary" @click="showModal = !showModal">Close</button> -->
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    <!-- </transition> -->
    <div class="modal-backdrop fade d-none" ref="backdrop"></div>    
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
const props = defineProps({
    abrimodal: {
        type: Boolean,
        default: false
    },
    // title: {
    //     type: String,
    //     default: "Confirmar ação"
    // },
    // variant: String,
})

// const showModal = ref(false);
// function startTransitionModal() {
//     $refs.backdrop.classList.toggle("d-block");
//     $refs.modal.classList.toggle("d-block");
// }

// function endTransitionModal() {
//     $refs.backdrop.classList.toggle("show");
//     $refs.modal.classList.toggle("show");
// }

</script>

<style scoped>
</style>
