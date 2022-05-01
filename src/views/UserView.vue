<script setup lang="ts">
const myToken = JSON.parse(localStorage.getItem("user"));

function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

const user = parseJwt(myToken.token)

</script>

}
<template>
  <div class="App">
    <header class="App-header">
      <h1>Bonjour {{ user.username }}</h1>
      <hr />
      <h3>Votre rôle est {{ user.roles }}</h3>
    </header>
  </div>
</template>

<style>

.App-header {
  padding-left: 200px;
  padding-right: 200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App {
  text-align: center;
}
</style>
