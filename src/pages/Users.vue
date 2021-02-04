<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" class="text-center">
          <v-menu rounded offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn
                color="blue lighten-1"
                class="white--text ma-5 "
                v-bind="attrs"
                v-on="on"
              >
                Filtered by:
              </v-btn>
            </template>

            <v-list class="bg-list">
              <v-list-item
                class="pointer-menu"
                v-for="par in pars"
                :key="par.id"
                @click="selectorBy(par)"
              >
                <v-list-item-title>{{ par }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" xs="4" sm="4" md="3">
          <v-card class="mx-auto" height="100%">
            <v-navigation-drawer
              absolute
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
              width="100%"
              permanent
            >
              <!-- choose button-->
              <div class="text-center pointer mt-3 mb-3">
                <v-menu>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Select by role
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item
                      class="pointer"
                      v-for="(item, i) in items"
                      :key="i"
                      @click="filter = item.title"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <!-- END choose button-->
              <CreateUser />
              <DeleteUser />
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="8" xs="8" sm="8" md="9">
          <v-row>
            <Cards :filteredRole="filteredRole" :users="users" />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CreateUser from '../components/CreateUser.vue'
import DeleteUser from '../components/DeleteUser.vue'
import Cards from '../components/Cards.vue'
export default {
  components: { CreateUser, DeleteUser, Cards },
  data() {
    return {
      items: [
        { title: 'allUsers' },
        { title: 'admin' },
        { title: 'editor' },
        { title: 'client' },
        { title: 'guest' }
      ],
      filter: 'allUsers',
      pars: ['name', 'nickname', 'age', 'role'],
      cretary: '',
      abcd: ['guest', 'admin']
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    filteredRole() {
      if (this.filter === 'allUsers') return this.users
      return this.users.filter(el => el.role === this.filter)
    }
  },
  methods: {
    selectorBy(par) {
      this.cretary = par
      this.$store.dispatch('selectorBY', this.cretary)
    }
  }
}
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
.bg-list {
  background-color: rgb(95, 85, 190);
  padding-top: 0;
  padding-bottom: 0;
}
.pointer-menu:hover {
  cursor: pointer;
  background-color: rgb(175, 225, 248);
  transition: all 0.5s ease;
}
</style>
