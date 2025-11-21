<template>
  <div>
    <h3>Meus Projetos</h3>

    <ProjectCard
      v-for="p in todosProjetos"
      :key="p.id"
      :projeto="p"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import projetosManuais from '../data/projects'

const todosProjetos = ref([...projetosManuais])

onMounted(async () => {
  try {
    const res = await fetch("https://api.github.com/users/balieiroz/repos")
    const repos = await res.json()

    const reposFormatados = repos.map(r => ({
      id: r.id,
      title: r.name,
      description: r.description || "Esse projeto não tem descrição ",
      tech: ["GitHub API"],
      github: r.html_url,
      demo: r.homepage
    }))

    todosProjetos.value.push(...reposFormatados)

  } catch (e) {
    console.error("Erro ao carregar repositórios:", e)
  }
})
</script>
