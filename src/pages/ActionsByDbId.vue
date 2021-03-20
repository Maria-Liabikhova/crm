<template>
  <div class="wrap">
    <div class="card-wrapper">
      <v-card class="main">
        <v-container class="correct-fluid" fluid>
          <v-row class="correct-fluid">
            <Navbar />
            <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
              <v-card class="main_right-part" height="100%">
                <div class="wrapp">
                  <div class="right-side-item">
                    <h2 class="serif">Create Read Update Delete</h2>
                    <v-card>
                      <v-card-text>
                        <v-form ref="form" v-model="valid">
                          <v-text-field
                            prepend-icon="mdi-alphabetical"
                            label="Enter id"
                            v-model="enteredDbId"
                            :rules="idRules"
                          >
                          </v-text-field>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          dark
                          color="blue lighten-1"
                          @click="onFind"
                          :disabled="!valid"
                          >Find user</v-btn
                        >
                        <v-btn
                          dark
                          color="blue lighten-1"
                          @click="onDelete"
                          :disabled="!valid"
                          >Delete user</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      valid: false,
      enteredDbId: '',
      idRules: [v => v.length >= 19 || 'Password must be equal 19 characters']
    }
  },
  methods: {
    // onFind() {
    //   const id = this.enteredDbId
    //   this.$store.dispatch('getUserById', id).then(() => {
    //     this.$router.push(`/user/${id}`)
    //   })
    // },
    onFind() {
      const id = this.enteredDbId
      this.$router.push(`/user/${id}`)
    },
    onDelete() {
      const enteredDbId = this.enteredDbId
      this.$store.dispatch('deleteUserById', enteredDbId).then(() => {
        this.$router.push(`/user/${id}`)
      })
    }
  }
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
