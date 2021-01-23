<template>
  <v-row justify="center">
    <v-dialog v-model="dialogDelete" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue darken-1" dark v-bind="attrs" v-on="on" class="mt-5">
          Delite user
        </v-btn>
      </template>
      <!-- Dilog window -->
      <v-card class="mx-auto" max-width="500">
        <v-card-title>
          <span class="blue--text lighten-1">Delite user</span>
        </v-card-title>
        <v-divider></v-divider>
        <!-- main part of dialod window -->
        <v-list subheader>
          <v-list-item v-for="user in users" :key="user.id">
            <v-list-item-avatar>
              <v-img :src="user.imgSrc"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-text="`${user.name}' '${user.surname}`"
              ></v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn @click="dialogClose = true">
                <v-icon class="icon-delite">
                  mdi-trash-can-outline
                </v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <!--END main part of dialod window -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogDelete = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- END  dilog window -->
    </v-dialog>

    <v-dialog v-model="dialogClose" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Are you sure you want to delete this user?
        </v-card-title>
        <v-card-text>You can not recover this user</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialogClose = false">
            Delete
          </v-btn>
          <v-btn color="green darken-1" text @click="dialogClose = false">
            Close
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
      dialogDelete: false,
      dialogClose: false
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
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
