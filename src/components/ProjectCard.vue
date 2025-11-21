<template>
  <div class="card" @click="irParaDetalhes">
    <h3>{{ projeto.title }}</h3>
    <p>{{ projeto.description }}</p>

    <div class="tags">
      <span v-for="tech in projeto.tech" :key="tech">{{ tech }}</span>
    </div>

    <div class="links">
      <a :href="projeto.github" @click.stop target="_blank">GitHub</a>
      <a v-if="projeto.demo" :href="projeto.demo" @click.stop target="_blank">Demo</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({ projeto: Object })

function irParaDetalhes() {
  router.push(`/projeto/${props.projeto.id}`)
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
}
</style>
