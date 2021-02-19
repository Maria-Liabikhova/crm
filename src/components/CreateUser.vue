<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="blue lighten-1"
        class="white--text ma-5 "
        v-bind="attrs"
        v-on="on"
      >
        Create user
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Please, enter user data</span>
      </v-card-title>
      <v-form ref="form" v-model="valid">
        <v-card-text>
          <v-container>
            <v-row>
              <!-- First dada -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  label="First name*"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>
              <!-- End First dada -->
              <!-- Second dada -->
              <v-col cols="12" md="6">
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
              <v-col cols="12" sm="6">
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
              <v-col cols="12" sm="6">
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
          <v-spacer></v-spacer>
          <!-- Add picture button -->
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="ma-2 white--text"
            @click="addPhoto"
          >
            upload profile photo
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
          <input ref="add" type="file" accept="image/*" style="display: none" />
          <!-- End add picture button -->
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="createPerson"
          :disabled="!valid"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: false,
      rule: [el => !!el || 'Title is required'],
      number: Number,
      img: '',
      name: '',
      secondName: '',
      id: '',
      gender: '',
      role: '',
      loader: null,
      loading3: false
    }
  },
  methods: {
    createPerson() {
      this.dialog = false
      if (this.$refs.form.validate()) {
        const person = {
          name: `${this.name} ${this.secondName}`,
          id: this.id,
          gender: this.gender,
          role: this.role
        }
        this.$store.dispatch('createPerson', person)
      }
    },
    addPhoto() {
      this.loader = 'loading3'
      this.$refs.add.click()
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  }
}
</script>
