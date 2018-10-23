<template>
      <v-container fluid>
        <v-layout>
          <v-btn color="primary" dark large router-link to="/dashboard">Users</v-btn>
          <v-btn color="secondary" dark large router-link to="/about">Signals</v-btn>
          <v-btn color="error" dark large router-link to="/contact">Accounts</v-btn>
          <p>Count = {{count}}</p>
          <button @click="increment">PLUS UNO</button>
          <Table/>
        </v-layout>
      </v-container>
</template>

<script>
import Table from "../Table.vue";

export default {
  computed: {
    count(){
      return this.$store.state.counter.count
    }
  },
  methods: {
    increment(){
      this.$store.commit('counter/increment')
    }
  }
}
</script>

<style lang="scss">
  .redBack{
    background: red !important;
  }
</style>
