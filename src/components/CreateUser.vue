<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="mt-5"
        >
          Create user
        </v-btn>
      </template>
      <v-card class="mm">
        <v-card-title>
          <span class="headline">Please, enter user data</span>
        </v-card-title>
        <v-form ref="form" v-model="valid">
          <v-card-text >
            <v-container>
              <v-row>
  <!-- First dada -->
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="name"
                    label="First name*"
                    required
                    :rules="rule"
                  ></v-text-field>
                </v-col>
  <!-- End First dada -->
  <!-- Second dada -->
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="secondName"
                    label="Last name*"
                    required
                    :rules="rule"
                  ></v-text-field>
                </v-col>
  <!-- End second dada -->
  <!-- Third dada -->
                <v-col cols="12">
                  <v-text-field
                    v-model="id"
                    label="Id*"
                    required
                    type="number"
                    :rules="rule"
                  ></v-text-field>
                </v-col>
  <!-- End third dada -->
  <!-- Fourth dada -->
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="gender"
                    :items="['Female', 'Male', 'Transgender']"
                    label="Gender"
                    required
                    :rules="rule"
                  ></v-select>
                </v-col>
  <!-- End fourth dada -->
  <!-- Fifth dada -->
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    v-model="role"
                    :items="['Administrator', 'Client', 'Editor', 'Guest']"
                    label="Role"
                    required
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
  <!-- End fifth dada -->
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createUser"
            :disabled="!valid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: false,
      rule: [el => !!el || "Title is required"],
      number: Number,
      name: '',
      secondName: '',
      id: '',
      gender: '',
      role: ''
    }
  },
  methods: {
    createUser () {
      this.dialog = false
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          secondName: this.secondName,
          id: this.id,
          gender: this.gender,
          role: this.role
        }
        this.$store.dispatch('createUser', user)
        .then(()=> {
          this.$router.push('/users')
        })
      }
    }
  }
}
</script>

<style scoped>
.mm {
  background-color: blue;
}
</style>
