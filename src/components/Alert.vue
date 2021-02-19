<template>
  <v-snackbar :color="dependColor" v-model="snackbar" :timeout="5000">
    {{ alertMessage }}

    <template v-slot:action="{ attrs }">
      <v-btn color="white" text @click.native="closeError" v-bind="attrs">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false
    }
  },
  created() {
    this.$bus.$on('showModal', () => {
      this.snackbar = true
    })
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    successMessage() {
      return this.$store.getters.successMessage
    },
    dependColor() {
      return this.$store.getters.alertColor
    },
    alertMessage() {
      if (this.error) return this.error
      if (this.$route.query['loginError']) return this.error
      return this.successMessage
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
