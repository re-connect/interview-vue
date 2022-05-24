import axios from "axios";

function login(params: { email: string; password: string; }) {
  return axios.post("http://localhost:8000/login", {
    user: {
      email: params.email,
      password: params.password,
    },
  });
}

export default {
  login,
};
