<template>
  <div class="dashboard">
      <router-link :to="{ name: 'logout' }">Logout</router-link>
    <h3>Contact page</h3>
    <h5>Account list</h5>
        <ul>
        <li v-for="account in accounts">
        <h5>{{ account.name }}</h5>
        <p>Type: {{ account.type }}</p>
        <p>Broker: {{ account.broker }}</p>
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
    this.$store.dispatch('accounts/loadAccounts')
    console.log(this.$store)
  },
  computed:{
    accounts(){
      return this.$store.getters['accounts/getAccounts']
    }
  }
}
</script>
