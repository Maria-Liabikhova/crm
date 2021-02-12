<template>
  <v-app>
    <Navbar />
    <template v-if="error">
      <v-snackbar color="blue darken-4" v-model="snackbar" :timeout="5000">
        {{ error }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink accent-2"
            text
            v-bind="attrs"
            @click.native="closeError"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      snackbar: true
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  }
}
</script>
