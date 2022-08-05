<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <!-- <el-menu-item index="0">LOGO</el-menu-item> -->
    <el-space wrap>
      <a>
        <i class="fa fa-users"></i>
      </a>
    </el-space>
    <el-menu-item index="1">Evento
      <el-divider direction="vertical" />
    </el-menu-item>

    <el-menu-item index="1">Palestrantes
      <el-divider direction="vertical" />
    </el-menu-item>

    <el-menu-item index="1">Contatos</el-menu-item>


    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>Audrey</template>
      <el-menu-item index="2-1">Perfil</el-menu-item>
      <el-menu-item index="2-2">Sair</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

i {
  font-size: 30px;
  margin-top: 5px;
}
</style>