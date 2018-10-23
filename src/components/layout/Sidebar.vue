<template>
  <v-navigation-drawer class="grey darken-3" app clipped v-model="drawer">
    <v-list class="pa-1 grey darken-3">
      <v-list-tile class="hidden-md-and-up">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="logo headline">Logo</v-toolbar-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile router-link to="/">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Home
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile router-link to="/dashboard">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">book</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Dashboard
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile router-link to="/login">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">wifi_tethering</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Login
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile router-link to="/logout">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">wifi_tethering</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Logout
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
            <v-list-tile router-link to="/about">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">wifi_tethering</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          About
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
            <v-list-tile router-link to="/contact">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">wifi_tethering</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Contact
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
            <v-divider></v-divider>
            <v-list-tile router-link to="/register">
        <v-list-tile-action class="pa-0 mr-0">
          <v-icon class="pa-1">wifi_tethering</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="tileText">
          Register
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.sidebar.drawer;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list .v-list__tile--active .v-list__tile__title {
  color: white !important;
}
.v-list .v-list__tile--active .v-list__tile__action {
  color: #67c8ff !important;
}

.v-list .v-list__tile:active {
  color: white !important;
}

.v-list .v-list__tile:hover {
  color: white !important;
}

.v-list__tile__action {
  min-width: 2.5rem !important;
}

.v-list__tile__title:hover {
  color: white !important;
}

.v-list__tile__title:active {
  color: white !important;
}
</style>

