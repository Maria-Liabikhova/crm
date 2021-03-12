<template>
  <v-app>
    <router-view></router-view>
    <!-- <Navbar />
    <Alert /> -->
  </v-app>
</template>

<script>
// import Navbar from './components/Navbar.vue'
// import Alert from './components/Alert.vue'
export default {
  props: ['snackbar'],
  // components: { Navbar, Alert },
  computed: {
    loggedIn() {
      return this.$store.getters.userLoggedIn
    }
  }
}
</script>
