<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="wite"
          x-small
          class="ma-5 standart_btn"
          v-bind="attrs"
          v-on="on"
        >
          Edit profile
        </v-btn>
      </template>
      <v-card class="dialog">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="name" label="First name"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="secondName"
                  label="Last name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nickname"
                  label="nickname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="age" label="age"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="gender"
                  :items="['Female', 'Male', 'Transgender']"
                  label="Gender"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="role"
                  :items="['Administrator', 'Client', 'Editor', 'Guest']"
                  label="Role"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="onSave">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['editUser'],
  data() {
    return {
      dialog: false,
      valid: false,
      number: Number,
      img: '',
      name: this.editUser.name,
      secondName: this.editUser.secondName,
      nickname: this.editUser.nickname,
      age: this.editUser.age,
      gender: this.editUser.gender,
      role: this.editUser.role,
      dbId: this.editUser.dbId
    }
  },
  methods: {
    onSave() {
      if (
        this.name !== '' &&
        this.secondName !== '' &&
        this.nickname !== '' &&
        this.age !== '' &&
        this.gender !== '' &&
        this.role !== ''
      ) {
        this.$store.dispatch('updateUser', {
          name: this.name,
          secondName: this.secondName,
          nickname: this.nickname,
          age: this.age,
          gender: this.gender,
          role: this.role,
          dbId: this.editUser.dbId
        })
      }
      this.dialog = false
    }
  }
}
</script>

<style scoped>
.dialog {
  background: linear-gradient(45deg, #eecfba, rgb(190 249 213 / 1), #85d3f7);
}
</style>
