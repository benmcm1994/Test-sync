<template>
  <v-toolbar class="grey darken-3" app dark fixed dense clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="logo headline">Logo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <h1></h1>
  </v-toolbar>
</template>

<script>
export default {
    computed: {
      drawer: {
        get () {
          return this.$store.state.sidebar.drawer
        },
        set (val) {
          this.$store.commit('sidebar/toggleDrawer')
        }
      }
    }
}
</script>

<style lang="scss">
  .logo{
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
