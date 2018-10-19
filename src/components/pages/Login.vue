<template>
    <div class="login">
        <form action="#" @submit.prevent="login">
            <label>Email:</label><br>
            <input type="text" name="email" placeholder="Email" v-model="email">
            <br>
            <label>Password:</label><br>
            <input type="password" name="password" placeholder="Password" v-model="password">
            <br><br>
            <input type="submit" value="Submit">
        </form>

    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      loginError: false
    };
  },
  methods: {
    login() {
      this.loginError = false;
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$store.commit("auth/loginUser");
          localStorage.setItem("token", response.data.token);
          this.$router
            .push({
              name: "dashboard"
            })
            console.log(response.data.token)
            .catch(error => {
              this.loginError = true;
            });
        });
    }
  }
};
</script>

