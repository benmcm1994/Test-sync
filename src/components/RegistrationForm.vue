<template>
    <v-card class="formCard">
        <v-card-title>
            <h5>{{ title }}</h5>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>

                <v-text-field v-model="password" label="Password" :append-icon="showPassword ?
                 'visibility_off' : 'visibility'" :passwordRules="[passwordRules.required, passwordRules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1" hint="At least 7 characters" @click:append="showPassword = !showPassword"></v-text-field>
            
            <v-text-field v-model="password_confirmation" label="Confirm Password" :append-icon="showPassword ?
                 'visibility_off' : 'visibility'" :passwordRules="[passwordRules.required, passwordRules.min]" :type="showPasswordConf ? 'text' : 'password'" name="input-10-1" hint="At least 7 characters" @click:append="showPasswordConf = !showPasswordConf"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn :disabled="!valid" @click="register" color="success">Register</v-btn>
            <v-btn router-link to="/login" color="danger">Login</v-btn>
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
      name: "",
      nameRules: [
        v => !!v || "Name is required"
      ],
      password: "",
      password_confirmation: "",
      passwordRules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 7 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      showPassword: false,
      showPasswordConf: false
    };
  },
  props: {
    title: String
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        let name = this.name;
        let email = this.email;
        let password = this.password;
        let password_confirmation = this.password_confirmation;

        this.$store.dispatch("auth/register", { name, email, password, password_confirmation})
        this.$store.dispatch("auth/login", {email, password})
          .then(() => this.$router.push({ name: "dashboard" }),
            console.log("Successful reg"))
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
