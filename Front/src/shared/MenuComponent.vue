<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-space wrap>
      <router-link to="evento/lista" style="font-size: 20px">
        <el-icon>
          <Star style="width: 1em; height: 1em; margin-left: 10px" />
        </el-icon>
      </router-link>
    </el-space>
    <el-space spacer="|">
      <el-menu-item router index="eventos">Eventos</el-menu-item>
      <el-menu-item router index="palestrantes">Palestrantes</el-menu-item>
      <el-menu-item router index="contatos">Contatos</el-menu-item>
    </el-space>


    <div class="flex-grow" />
    <el-sub-menu index="profile">
      <template #title>Audrey</template>
      <el-menu-item index="perfil">Perfil</el-menu-item>
      <el-menu-item index="login">Sair</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const activeIndex = ref("eventos");

const handleSelect = (key: string) => {
  switch (key) {
    case ("eventos"):
      router.push({ name: "lista" })
      activeIndex.value = key
      break;

    case ("palestrantes"):
      router.push({ name: "palestrantes" })
      activeIndex.value = key
      break;

    case ("contatos"):
      router.push({ name: "contatos" })
      activeIndex.value = key
      break;

    case ("login"):
      router.push({ name: "login" })    
      break;
  }

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