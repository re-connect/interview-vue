<template>
  <div class="App">
    <header class="App-header">
      <form v-on:submit.prevent="handleSubmit">
        <div v-if="error" className="alert alert-danger">
          {{ error }}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Adresse Email : </label>
          <input
            type="email"
            v-model="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Mot de passe : </label>
          <input
            type="password"
            v-model="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" v-bind:class="{ disabled: isLoading }">
          Se connecter
        </button>
      </form>
    </header>
  </div>
</template>

<script>
import axios from "axios";

const backendUrl = "http://localhost:8000";
const loginEndpoint = `${backendUrl}/api/login`;

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      this.error = "";
      const json = {
        username: this.email,
        password: this.password,
      };
      axios
        .post(loginEndpoint, json)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.Beneficiaries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.Beneficiary-card {
  width: 200px;
}

.App-header {
  padding: 200px;
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
