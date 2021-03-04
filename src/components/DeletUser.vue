<template>
  <span>
    <v-btn color="blue lighten-1" class="white--text ma-5 " @click="userDelete">
      Delite user
    </v-btn>
    <!-- dialod window -->
    <v-dialog v-model="dialogConfirm" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this user?
        </v-card-title>
        <v-card-text>You can not recover this user</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="onDelete">
            Delete
          </v-btn>
          <v-btn color="green darken-1" text @click="dialogConfirm = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- END  gialog window -->
  </span>
</template>

<script>
export default {
  props: ['deletUser'],
  data() {
    return {
      dialogConfirm: false,
      personDeleteId: Number
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },
  methods: {
    userDelete() {
      this.dialogConfirm = true
    },
    onDelete() {
      const enteredDbId = this.deletId
      this.$store.dispatch('deleteUserById', this.deletUser).then(() => {
        this.$router.push(`/users`)
      })
    }
  }
}
</script>

<style scoped>
.icon-delite:hover {
  color: red;
  cursor: pointer;
  transition: all 0.8s ease;
}
</style>
