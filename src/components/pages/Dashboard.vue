<template>
  <div class="dashboard">
      <router-link :to="{ name: 'logout' }">Logout</router-link>
    <h3>Dashboard page</h3>
    <h5>User list</h5>
        <ul>
        <li v-for="user in users">
        <p>{{ user.name }}</p>
      </li>
        </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      users: []
    }
  },
  mounted(){
      
  }
}
</script>
