<template>
  <section>
    <h2>Bem-vindo ao meu Portfólio!</h2>
    <p>Aqui você encontra meus principais projetos.</p>

    <ProjectsList />
  </section>
</template>

<script setup>
import ProjectsList from '../components/ProjectsList.vue'
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>
