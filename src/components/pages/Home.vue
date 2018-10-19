<template>
      <v-container fluid>
        <v-layout>
          <p>Count = {{count}}</p>
          <button @click="increment">PLUS UNO</button>
          <Table/>
        </v-layout>
      </v-container>
</template>

<script>
import CardFilter from "../CardFilter.vue";
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
