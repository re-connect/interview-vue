<script>
import authenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      this.message = "";
      authenticationService
        .login({
          email: this.email,
          password: this.password,
        })
        .then(
          (res) => {
            localStorage.token = res.data.token;
            console.log(localStorage.token);
            this.$router.push("/profile");
          },
          (err) => {
            if (err.response.status === 401) {
              this.message = "Vos identifiants sont incorrects";
            } else {
              this.message = "Une erreur est survenue";
            }
          }
        );
    },
  },
};
</script>

<template>
  <div class="App">
    <header class="App-header">
      <input v-model="email" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Connexion</button>
      <p v-if="message">{{ message }}</p>
    </header>
  </div>
</template>
