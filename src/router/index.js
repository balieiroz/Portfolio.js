import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import ProjetoDetalhes from '../views/ProjetoDetalhes.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/sobre', component: SobreView },
    { path: '/projeto/:id', component: ProjetoDetalhes }
  ]
})
