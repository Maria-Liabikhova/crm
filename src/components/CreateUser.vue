<template>
  <v-card v-if="!loading">
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
            <v-col cols="12">
              <small>*indicates required field</small>
            </v-col>
            <v-col cols="12">
              <img :src="imgSrc" class="img_profile" v-if="imgSrc" />
            </v-col>
          </v-container>
          <!-- Add picture button -->
          <v-btn color="blue-grey" class="ma-2 white--text" @click="addPhoto">
            upload profile photo
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
          <input
            ref="add"
            type="file"
            accept="image/*"
            style="display: none"
            @change="onFileChange"
          />
          <!-- End add picture button -->
        </v-card-text>

        <v-btn
          ref="createBtn"
          color="blue darken-1"
          text
          :disabled="!valid || !img"
          @click="createUser"
        >
          Save
        </v-btn>
      </v-form>
    </v-card-title>
  </v-card>
  <section v-else>
    <v-container>
      <v-row>
        <v-col xs="12" class="text-center ">
          <v-progress-circular
            :size="100"
            :width="4"
            indeterminate
            color="black"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      rule: [el => !!el || 'Title is required'],
      number: Number,
      img: null,
      imgSrc: '',
      name: '',
      secondName: '',
      nickname: '',
      age: '',
      gender: '',
      role: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    async createUser() {
      try {
        if (this.$refs.forma.validate() && this.img) {
          const user = {
            name: this.name,
            secondName: this.secondName,
            nickname: this.nickname,
            age: this.age,
            gender: this.gender,
            role: this.role,
            img: this.img
          }
          this.$store.dispatch('setLoading', true)
          await this.$store.dispatch('createUser', user)
          this.$store.dispatch('setLoading', false)
        }
      } catch (error) {
        throw error
      }
    },
    addPhoto() {
      this.$refs.add.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imgSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.img = file
    }
  }
}
</script>
<style scoped>
.img_profile {
  height: 100px;
}
</style>
