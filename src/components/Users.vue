<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="4" xs='4' sm='4' md='3'>
          <v-card
          class="mx-auto"
            height="100%"
          >
            <v-navigation-drawer
              absolute
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
              width="100%"
              permanent
            >
            <!-- menu button-->
              <div class="text-center pointer mt-3 mb-3" >
                <v-menu >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Select by role
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item class="pointer"
                      v-for="(item, i) in items"
                      :key="i"
                      @click="filter = item.title"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <!-- END menu button-->
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <v-col cols="8" xs='8' sm='8' md='9'
        >
          <v-row>
            <v-col  cols="6" xs='6' sm='6' md='4'
              v-for="user in filteredRole"
              :key="user.id">
              <v-card
                class="mx-auto card"
                max-width="344"
              >
                <v-img
                  :src="user.imgSrc"
                  height="300px"
                ></v-img>
                <v-card-title>
                  <p class="card__subtitle">Name: <span class="card__name">{{user.name}} {{user.surname}}</span></p>
                </v-card-title>
                <v-card-subtitle>
                  <p class="card__subtitle">Id: <span class="card__describe">{{user.id}}</span></p>
                  <p class="card__subtitle">Gender: <span class="card__describe">{{user.gender}}</span></p>
                  <p class="card__subtitle">Role: <span class="card__describe">{{user.role}}</span></p>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
  export default {
    data() { 
      return {
        items: [
          { title: 'All users' },
          { title: 'Admin' },
          { title: 'Editor' },
          { title: 'Client' },
          { title: 'Guest' },
        ],
        filter: 'All users',
        dialog: false,
      }
    },
    computed: {
      users() {
        return this.$store.getters.users
      },
      filteredRole() {
        if (this.filter === 'All users') {return this.users}
        if (this.filter === 'Guest') {return this.users.filter(el => el.role ==='Guest')}
        if (this.filter === 'Admin') {return this.users.filter(el => el.role === 'Admin')}
        if (this.filter === 'Client') {return this.users.filter(el => el.role === 'Client')}
        return this.users.filter(el => el.role === 'Editor')
      }
    },
  }
</script>

<style scoped>
  .card__name {
    color: black;
    font-weight: bold;
    font-size: 25px;
    word-break: keep-all
  }
  .card__subtitle {
    font-weight: bold;
    color: rgb(116, 116, 116);
    font-size: 20px;
    margin-bottom: 7px;
  }
  .card__describe {
    color: black;
    font-size: 16px;
  }
  .pointer:hover {
    cursor: pointer;
  }
  .card {
    height: 100% ;
  }
</style>