<template>
  <v-container>
    <v-layout align-start justify-start column fill-height>
      <br>
      <RegistrationForm title="Register"/>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

import RegistrationForm from "../RegistrationForm.vue";
import Card from "../Card.vue";

export default {
  components: {
    RegistrationForm,
    Card
  },
  name: "registration",
};
</script>

