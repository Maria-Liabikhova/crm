<template>
  <v-snackbar color="blue darken-4" v-model="snackbar" :timeout="5000">
    {{ error }} {{ successMessage }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink accent-2"
        text
        @click.native="closeError"
        v-bind="attrs"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { eventEmitter } from '../main'
export default {
  data() {
    return {
      snackbar: false
    }
  },
  created() {
    eventEmitter.$on('showModal', () => {
      this.snackbar = true
    })
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    successMessage() {
      return this.$store.getters.successMessage
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
      this.snackbar = false
    }
  }
}
</script>
