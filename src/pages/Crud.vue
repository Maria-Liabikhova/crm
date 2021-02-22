<template>
  <div class="wrapp">
    <div class="right-side-item">
      <h2 class="serif">Create Read Update Delete</h2>
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              prepend-icon="mdi-alphabetical"
              name="id"
              label="Enter id"
              v-model="id"
              :rules="idRules"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn dark color="blue lighten-1" @click="onFind" :disabled="!valid"
            >Find user</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      id: ' ',
      idRules: [v => v.length >= 19 || 'Password must be equal 19 characters']
    }
  },
  methods: {
    onFind() {
      // console.log(this.id)
      const id = this.id
      this.$store.dispatch('getUserById', id)
    }
  }
  // computed: {
  //   user() {
  //     const id = Number.parseInt(this.id)
  //     return this.$store.getters.personById(id)
  //   }
  // }
}
</script>

<style scoped>
.right-side-item {
  padding: 20px;
}
.serif {
  font-family: sans-serif;
}
</style>
