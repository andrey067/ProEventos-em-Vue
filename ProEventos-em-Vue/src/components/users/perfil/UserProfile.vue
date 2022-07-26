<template>
    <TituloComponent titulo="Perfil" icon-class="fa fa-address-card" :botao-listar="false" />
    <div class="card rounded shadow-sm">
        <form>
            <div class="row p-3">
                <div class="col-lg-3 pt-1">
                    <div class="card mb-3">
                        <div class="card-header"></div>
                        <div class="d-flex align-self-center pt-3">
                            <a href="#aboutModal" data-toggle="modal" data-target="#myModal">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
                                    name="aboutme" width="120" height="120" class="rounded-circle">
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="h4 text-center mb-3">@LeeCross</div>
                            <div class="h7 text-bold pb-1"><b>Nome:</b> Miracles Lee Cross</div>
                            <div class="h7">
                                Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                                etc.
                            </div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-6 text-center border-right">
                                        <div class="h5">1342</div>
                                        <div class="h6 text-muted">Eventos Ministrados</div>
                                    </div>
                                    <div class="col-6 text-center">
                                        <div class="h5">1342</div>
                                        <div class="h6 text-muted">Eventos Participados</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="card-footer"></div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="form-row">
                        <div class="form-group col-12">
                            <h3 class="border-bottom">Detalhe Perfil</h3>
                        </div>
                        <div class="form-group col">
                            <label>Título</label>
                            <select class="form-select">
                                <option value=""></option>
                                <option value="0">Não Quero</option>
                                <option value="Senhorita">Tecnólogo(a)</option>
                                <option value="Senhorita">Bacharel</option>
                                <option value="Senhorita">Especialista</option>
                                <option value="Senhorita">Pós Graduado(a)</option>
                                <option value="Senhorita">Mestre</option>
                                <option value="Senhorita">Doutor(a)</option>
                                <option value="Senhorita">Pós Doc</option>
                            </select>
                            <div class="invalid-feedback">
                                <div>Título é obrigatório</div>
                            </div>
                        </div>
                        <div class="form-group col-sm-5">
                            <label>Primeiro Nome</label>
                            <input type="text" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Primeiro nome é obrigatório</div>
                            </div>
                        </div>
                        <div class="form-group col-sm-5">
                            <label>Último nome</label>
                            <input type="text" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Último nome é obrigatório</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-5">
                            <label>E-mail</label>
                            <input type="text" formControlName="email" class="form-control" />
                            <div class="invalid-feedback">
                                <div>e-mail é obrigatório</div>
                                <div>e-mail precisa ser um endereço válido.</div>
                            </div>
                        </div>
                        <div class="form-group col-sm-4">
                            <label>Telefone</label>
                            <input type="text" formControlName="telefone" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Telefone é obrigatório</div>
                            </div>
                        </div>
                        <div class="form-group col-sm">
                            <label>Função</label>
                            <select formControlName="funcao" class="form-control">
                                <option value=""></option>
                                <option value="Participante">Participante</option>
                                <option value="Palestrante">Palestrante</option>
                            </select>
                            <div class="invalid-feedback">
                                <div>função é obrigatório é obrigatório</div>
                            </div>
                        </div>
                        <form-group class="col-12">
                            <label>Descrição</label>
                            <input type="text" formControlName="descricao" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Descrição é obrigatório</div>
                            </div>
                        </form-group>
                    </div>
                    <div>
                        <h3 class="pt-3 border-bottom">Mudar Senha</h3>
                        <p>Caso mude de senha, preencha os campos abaixo:</p>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm">
                            <label>Senha</label>
                            <input type="password" formControlName="senha" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Senha é obrigatório</div>
                                <div>Senha precisa ter pelo menos 6 caracteres</div>
                            </div>
                        </div>
                        <div class="form-group col-sm">
                            <label>Confirmar Senha</label>
                            <input type="password" formControlName="confirmeSenha" class="form-control" />
                            <div class="invalid-feedback">
                                <div>Confirmação de senha é Obrigatório</div>
                                <div>Senhas precisa ser igual</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-flex">
                    <button class="btn btn-outline-secondary mr-auto border">
                        Cancelar Alteração
                    </button>
                    <button class="btn btn-success">
                        <span class="spinner-border spinner-border-sm mr-1"></span>
                        Salvar Alteração
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import TituloComponent from '../../layouts/TituloComponent.vue'
</script>

<style lang="css">
</style>