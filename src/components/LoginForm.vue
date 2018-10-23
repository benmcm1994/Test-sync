<template>
    <v-card class="formCard">
        <v-card-title>
            <h5>{{ title }}</h5>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>

                <v-text-field v-model="password" label="Password" :append-icon="showPassword ?
                 'visibility_off' : 'visibility'" :passwordRules="[passwordRules.required, passwordRules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1" hint="At least 7 characters" @click:append="showPassword = !showPassword"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn :disabled="!valid" @click="login" color="success">Login</v-btn>
            <v-btn router-link to="/register" color="danger">Register</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 7 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      showPassword: false
    };
  },
  props: {
    title: String
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        let email = this.email;
        let password = this.password;

        this.$store
          .dispatch("auth/login", { email, password })
          .then(
            () => this.$router.push({ name: "dashboard" }),
            console.log("Successful login")
          )
          .catch(error => console.log(error));
      }
    }
  }
};
</script>

<style lang="css" scoped>
.formCard {
  padding: 0;
}
</style>
