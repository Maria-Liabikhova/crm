<template>
  <v-col class="no-padding" cols="4" xs="4" sm="4" md="3">
    <v-card class="main_left-part">
      <v-list class=" left_menu" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="string">
              <router-link to="/" class="no-decor">
                <h1>DA-VINCHI</h1>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list class=" left_menu left_menu_list" nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" dark>
            <router-link :to="'/' + item.link" class="no-decor items_link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  class="left_menu_items"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>

          <v-list-item dark @click="logOut" v-if="loggedIn">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="left_menu_items "
              >Log out</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0
  }),
  computed: {
    loggedIn() {
      return this.$store.getters.userLoggedIn
    },
    items() {
      // if (this.loggedIn)
      return [
        { text: 'My page', icon: 'mdi-account', link: 'current_user' },
        { text: 'All users', icon: 'mdi-account-multiple', link: 'users' },
        {
          text: 'Chat',
          icon: 'mdi-chat',
          link: 'chat'
        },
        {
          text: 'Actions by dbid',
          icon: 'mdi-account-supervisor-circle',
          link: 'actions_by_dbid'
        }
      ]
      return [
        // { text: 'Login', icon: 'mdi-login', link: 'login' },
        // { text: 'Sign up', icon: 'mdi-account-alert', link: 'registration' }
      ]
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logoutUser')
      this.$router.push(`/`)
    }
  }
}
</script>

<style>
.correct-fluid {
  height: 100%;
  padding: 0;
  margin: 0;
}
.wrap {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
  overflow: hidden;
}
.wrap::after {
  content: '';
  position: absolute;
  height: 300px;
  width: 400px;
  background: url('../assets/img/palm.png');
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  transform: translate(15%, 50%);
  right: 0;
  bottom: 0;
}
.wrap::before {
  content: '';
  position: absolute;
  height: 700px;
  width: 700px;
  background: url('../assets/img/palm.png');
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  transform: rotateY(180deg) translate(40%, 0%);
  left: 0;
  top: 0;
  display: block;
}
.card-wrapper {
  justify-self: center;
  align-self: center;
  height: 100%;
  max-height: 700px;
  width: 1100px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main_left-part {
  background: linear-gradient(#4d03f8, #5e1cf8, #27dddd);
  height: 100%;
}
.main_right-part {
  background: linear-gradient(45deg, #eecfba, rgb(190 249 213 / 1), #c5dde8);
  height: 100%;
}

.left_menu {
  background-color: transparent !important;
}
.left_menu_list {
  margin-top: 30px;
}
.left_menu_items {
  color: white;
}
.items_link {
  height: 100%;
  width: 100%;
  display: flex;
}
h1 {
  font-size: 18px;
  font-family: initial;
  color: white;
}
.string {
  display: flex;
  align-items: center;
  padding: 5px;
}
.no-padding {
  padding: 0;
}
.wrapp {
  height: 100%;
}
.no-decor {
  text-decoration: none;
}
.standart_btn {
  width: 95px;
}
.wrapper_line_style {
  display: flex;
}
</style>
