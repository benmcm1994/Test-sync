<template>
  <div class="dashboard">
      <router-link :to="{ name: 'logout' }">Logout</router-link>
    <h3>About page</h3>
    <h5>Signal list</h5>
        <ul>
        <li v-for="signal in signals">
        <h5>{{ signal.name }}</h5>
        <p>Ranked: {{ signal.rank }}</p>
        <p>{{ signal.description }}</p>
      </li>
        </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      
    }
  },
  created(){
    this.$store.dispatch('signals/loadSignals')
    console.log(this.$store)
  },
  computed:{
    signals(){
      return this.$store.getters['signals/getSignals']
    }
  }
}
</script>
