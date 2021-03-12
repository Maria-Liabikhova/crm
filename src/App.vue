<template>
  <v-app>
    <router-view></router-view>
    <Alert />
  </v-app>
</template>

<script>
import Alert from './components/Alert.vue'
export default {
  props: ['snackbar'],
  components: { Alert }
}
</script>
