<template>
  <header class="header">
    <h1 class="logo">Portfólio Maria Eduarda</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #616263ff;
  color: white;
}

nav a {
  margin-left: 20px;
  color: #ddd;
  text-decoration: none;
}
nav a:hover {
  color: white;
}
</style>
