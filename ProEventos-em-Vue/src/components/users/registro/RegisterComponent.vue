<template>
    <div>
        <div class="section is-flex is-justify-content-center">
            <form class="box p-6" style="width:700px">
                <div class="field">
                    <label class="label">Nome do usuario</label>
                    <div class="control has-icons mb-5">
                        <input class="input" type="text" placeholder="User Name" v-model="userProfile.userName" />
                        <div v-for="(error, index) in validacao.userName.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>

                    <label class="label" for="email">Email</label>
                    <div class="control has-icons mb-5">
                        <input class="input" type="email" placeholder="Email" name="email"
                            v-model="userProfile.email" />
                        <div v-for="(error, index) in validacao.email.$errors" :key="index">
                            <p class="help is-danger">{{ error.$message }}</p>
                        </div>
                    </div>

                    <div class="columns row-one mb-5">
                        <div class="column">
                            <label class="label">First Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="First Name"
                                    v-model="userProfile.firstName" />
                                <div v-for="(error, index) in validacao.firstName.$errors" :key="index">
                                    <p class="help is-danger">{{ error.$message }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column ">
                            <label class="label">Last Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Last Name"
                                    v-model="userProfile.lastName" />
                                <div v-for="(error, index) in validacao.lastName.$errors" :key="index">
                                    <p class="help is-danger">{{ error.$message }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns mb-5">
                        <div class="column">
                            <label class="label" for="password">Password</label>
                            <div class="control has-icons">
                                <input class="input" type="password" placeholder="Password"
                                    v-model="userProfile.passwords.password" />
                                <div v-for="(error, index) in validacao.passwords.password.$errors" :key="index">
                                    <p class="help is-danger">{{ error.$message }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <label class="label">Re-Type Password</label>
                            <div class="control has-icons">
                                <input class="input" type="password" placeholder="Confirm Password"
                                    v-model="userProfile.passwords.confirmPassword" />
                                <div v-for="(error, index) in validacao.passwords.confirmPassword.$errors" :key="index">
                                    <p class="help is-danger">{{ error.$message }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="is-flex is-justify-content-center">
                        <div class="mr-6">
                            <button class="button is-medium is-info"> Cancelar</button>
                        </div>
                        <div class="ml-6">
                            <button class="button is-primary is-medium" type="submit"> Salvar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserProfile } from '@/models/UserProfile';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import { reactive } from 'vue';

const userProfile = reactive<UserProfile>({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    passwords: {
        password: '',
        confirmPassword: ''
    }
});

const rules = {
    userName: { required: helpers.withMessage('Campo obrigatorio', required) },
    email: { required: helpers.withMessage('Campo obrigatorio', required), email },
    firstName: { required: helpers.withMessage('Campo obrigatorio', required) },
    lastName: { required: helpers.withMessage('Campo obrigatorio', required) },
    passwords: {
        password: { required: helpers.withMessage('Campo obrigatorio', required) },
        confirmPassword: { required: helpers.withMessage('Campo obrigatorio', required) },
    }
};
const validacao = useVuelidate(rules, userProfile, { $autoDirty: true });

</script>

<style scoped lang="css">
.column {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

.row-one {
    padding-top: 13px;
}

form .field {
    margin: auto;
    max-width: 740px;
}
</style>