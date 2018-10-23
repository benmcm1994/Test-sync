<template>
    <v-app dark id="base">
        <Navbar />
        <Sidebar />
        <Content />
    </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Content
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    }
}
</script>


<style lang="scss">
@import "../../styles/main";

</style>
