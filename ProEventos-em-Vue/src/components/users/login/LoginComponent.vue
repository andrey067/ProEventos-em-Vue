<template>
    <div class="section is-medium">
        <div class="container">
            <div class="columns is-justify-content-center">
                <div class="column is-6-tablet is-5-desktop is-4-widescreen is-3-fullh">
                    <form method="POST" class="box p-5">
                        <label class="is-block mb-4">
                            <span class="is-block mb-2">Email address</span>
                            <input required type="email" class="input" placeholder="Email" />
                        </label>

                        <label class="is-block mb-4">
                            <span class="is-block mb-2">Password</span>
                            <input name="password" type="password" class="input" minlength="6"
                                placeholder="Senha" required />
                        </label>

                        <div class="mb-4">
                            <button type="submit" class="button is-primary px-4">Logar</button>
                        </div>

                        <div>
                            <div class="is-size-7 has-text-right">
                                by
                                <a class="has-text-dark" target="_blank">HeroTofu</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style>
</style>