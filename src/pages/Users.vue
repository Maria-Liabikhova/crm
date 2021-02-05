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
                v-for="sort in sorts"
                :key="sort.id"
                @click="selectedSort = sort"
              >
                <v-list-item-title>{{ sort }}</v-list-item-title>
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
                      v-for="(filter, i) in filters"
                      :key="i"
                      @click="selectedFilter = filter"
                    >
                      <v-list-item-title>{{ filter }}</v-list-item-title>
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
            <Cards :filteredRole="users" />
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
      filters: ['allUsers', 'admin', 'editor', 'client', 'guest'],
      selectedFilter: 'allUsers',
      sorts: ['name', 'nickname', 'age', 'role'],
      selectedSort: null
    }
  },
  computed: {
    users() {
      let users = [...this.$store.getters.users]
      if (this.selectedFilter !== 'allUsers')
        users = users.filter(el => el.role === this.selectedFilter)
      if (this.selectedSort !== null)
        //prettier-ignore
        users = users.sort((a, b) => a[this.selectedSort] > b[this.selectedSort] ? 1 : -1)

      return users
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
