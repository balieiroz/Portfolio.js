🌐 Portfólio Desenvolvido com Vue.js

Este repositório contém meu portfólio pessoal, criado como uma aplicação Single Page Application (SPA) utilizando Vue.js em conjunto com Vite.
O projeto reúne informações sobre mim, meus principais trabalhos e uma área dedicada para visualizar detalhes de cada projeto desenvolvido.

🚀 Tecnologias e Ferramentas

Vue.js 3 (Composition API)

Vite para construção e ambiente de desenvolvimento

Vue Router para navegação entre páginas

GitHub API, responsável por listar meus repositórios públicos automaticamente

HTML5 + CSS3, com estilos encapsulados usando <style scoped>

Netlify ou Vercel para publicação online

📁 Organização do Projeto

A estrutura do projeto foi montada de forma modular para facilitar manutenção e escalabilidade:

src/
 ├── components/
 │    ├── Header.vue
 │    ├── Footer.vue
 │    ├── ProjectCard.vue
 │    └── ProjectsList.vue
 ├── views/
 │    ├── HomeView.vue
 │    ├── SobreView.vue
 │    └── ProjetoDetalhesView.vue
 ├── router/
 │    └── index.js
 ├── data/
 │    └── projects.js
 └── App.vue

🧩 Principais Recursos

Navegação fluida entre páginas, sem recarregamento

Combinação de projetos cadastrados manualmente com os projetos retornados pela API do GitHub

Página individual para cada projeto (/projeto/:id)

Layout responsivo, adaptado para diferentes tipos de tela

Transições visuais suaves nas mudanças de rota

Componentização pensada para reaproveitamento e organização

 Disponível Online

A aplicação pode ser acessada por este link:

https://portfoliomariaeduardabalieiro.netlify.app/

(adicione o link após realizar o deploy)

 Executando o Projeto Localmente

Instale as dependências:

npm install


Inicie o ambiente de desenvolvimento:

npm run dev


Gere o build para produção:

npm run build


Visualize o build gerado:

npm run preview
