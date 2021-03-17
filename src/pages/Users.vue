<template>
  <div class="wrap">
    <div class="card-wrapper">
      <v-card class="main">
        <v-container class="correct-fluid" fluid>
          <v-row class="correct-fluid">
            <Navbar />
            <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
              <v-card class="main_right-part" height="100%">
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
                        <!-- Second button Select by role -->
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
                              <v-list-item-title>{{
                                filter
                              }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <Cards :filteredRole="users" />
                  </v-container>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Cards, Navbar },
  data() {
    return {
      filters: ['allUsers', 'Administrator', 'Editor', 'Client', 'Guest'],
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
