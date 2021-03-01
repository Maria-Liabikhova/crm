<template>
  <v-card>
    <v-card-title>
      <span class="headline">Please, enter your data</span>
      <v-form ref="forma" v-model="valid">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  label="First name*"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="secondName"
                  label="Last name*"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nickname"
                  label="nickname*"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="age"
                  label="age*"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                  :rules="rule"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="gender"
                  :items="['Female', 'Male', 'Transgender']"
                  label="Gender"
                  required
                  :rules="rule"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="role"
                  :items="['Administrator', 'Client', 'Editor', 'Guest']"
                  label="Role"
                  required
                  :rules="rule"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <v-spacer></v-spacer>
          <!-- Add picture button -->
          <v-btn color="blue-grey" class="ma-2 white--text" @click="addPhoto">
            upload profile photo
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
          <input ref="add" type="file" accept="image/*" style="display: none" />
          <!-- End add picture button -->
        </v-card-text>

        <v-btn
          color="blue darken-1"
          text
          :disabled="!valid"
          @click="createPerson"
        >
          Save
        </v-btn>
      </v-form>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      rule: [el => !!el || 'Title is required'],
      number: Number,
      img: '',
      name: '',
      secondName: '',
      nickname: '',
      age: '',
      email: '',
      gender: '',
      role: ''
    }
  },
  methods: {
    createPerson() {
      if (this.$refs.forma.validate()) {
        const person = {
          name: this.name,
          secondName: this.secondName,
          nickname: this.nickname,
          age: this.age,
          email: this.email,
          gender: this.gender,
          role: this.role
        }
        this.$store.dispatch('createPerson', person).then(() => {
          this.$router.push('/')
        })
      }
    },
    addPhoto() {
      this.$refs.add.click()
    }
  }
}
</script>
