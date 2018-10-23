<template>
  <div class="dashboard">
      <router-link :to="{ name: 'logout' }">Logout</router-link>
    <h3>Dashboard page</h3>
    <h5>User list</h5>
        <ul>
        <li v-for="user in users">
        <h5>{{ user.name }}</h5>
        <p>{{ user.email }}</p>
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
    this.$store.dispatch('users/loadUsers')
    console.log(this.$store)
  },
  computed:{
    users(){
      return this.$store.getters['users/getUsers']
    }
  }
}
</script>
