<template>
  <div class="wrapp">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- First button  Filtered by: -->
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
          <!-- Second button Select by role-->
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="blue lighten-1"
                class="white--text ma-5 "
                v-bind="attrs"
                v-on="on"
              >
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
          <CreateUser />
          <DeleteUser />
        </v-col>
      </v-row>
      <Cards :filteredRole="users" />
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
        users = users.sort((a, b) =>
          a[this.selectedSort] > b[this.selectedSort] ? 1 : -1
        )

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
