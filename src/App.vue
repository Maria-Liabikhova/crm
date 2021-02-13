<template>
  <v-app>
    <Navbar />
    <Alert @showModal="showModal = $event" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Alert from './components/Alert.vue'
export default {
  props: ['snackbar'],
  components: { Navbar, Alert }
}
</script>
