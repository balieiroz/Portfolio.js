# 🌐 Meu Portfólio em Vue.js

Este é o meu portfólio pessoal desenvolvido como uma Single Page Application (SPA) usando **Vue.js + Vite**.  
Aqui você encontra meus projetos, minhas habilidades e uma página dedicada com detalhes de cada trabalho.

## 🚀 Tecnologias Utilizadas
- Vue.js 3 (Composition API)
- Vite
- Vue Router
- GitHub API (para carregar meus repositórios automaticamente)
- HTML5 e CSS3 (com `<style scoped>`)
- Deploy via Netlify / Vercel

## 📁 Estrutura do Projeto

src/
├── components/
│ ├── Header.vue
│ ├── Footer.vue
│ ├── ProjectCard.vue
│ └── ProjectsList.vue
├── views/
│ ├── HomeView.vue
│ ├── SobreView.vue
│ └── ProjetoDetalhesView.vue
├── router/
│ └── index.js
├── data/
│ └── projects.js
└── App.vue

markdown
Copiar código

## 🧩 Funcionalidades
- Navegação sem recarregar a página usando Vue Router
- Listagem de projetos manual + projetos da API do GitHub
- Página de detalhes para cada projeto (`/projeto/:id`)
- Layout 100% responsivo
- Animações suaves entre rotas
- Componentes reutilizáveis e organizados

## 🌎 Deploy
Você pode acessar o portfólio online aqui:


## 🛠️ Como Rodar o Projeto Localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Gerar versão de produção
npm run build

# Visualizar build
npm run preview