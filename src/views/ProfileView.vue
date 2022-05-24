<script lang="ts">
import axios from "axios";

export default {
  data () {
    return {
      user: null
    }
  },
  async beforeCreate() {
    const response = await axios.get("http://localhost:8000/api/users/me", {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    });
    this.user = response.data;
  }
};
</script>

<template>
  <div class="App">
    <header class="App-header">
      <h1>Profil</h1>
      <div v-if="user">
        <p>Id : {{ user.id }}</p>
        <p>Email : {{ user.email }}</p>
        <p>Password : {{ user.password }}</p>
      </div> 
    </header>
  </div>
</template>