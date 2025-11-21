<template>
  <section v-if="projeto">
    <h2>{{ projeto.title }}</h2>
    <p>{{ projeto.description }}</p>

    <h3>Tecnologias utilizadas</h3>
    <ul>
      <li v-for="t in projeto.tech" :key="t">{{ t }}</li>
    </ul>

    <h3>Links</h3>
    <p>
      <a :href="projeto.github" target="_blank">Repositório no GitHub</a>
      <br />
      <a v-if="projeto.demo" :href="projeto.demo" target="_blank">Demonstração</a>
    </p>
  </section>

  <p v-else>Projeto não encontrado.</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projetos from '../data/projects'

const route = useRoute()
const { id } = route.params

const projeto = projetos.find(p => p.id == id)
</script>

<style scoped>
a {
  font-weight: bold;
  color: #3366ff;
}
</style>
