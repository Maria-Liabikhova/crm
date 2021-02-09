<template>
  <div class="wrap ">
    <v-container fluid>
      <v-row>
        <v-col offset="1" cols="10">
          <v-card class="main">
            <v-container fluid>
              <!-- <v-container fluid class="main"> -->
              <v-row>
                <v-col class="no-padding" cols="4" xs="4" sm="4" md="3">
                  <v-card class="main_left-part" height="100%">
                    <!-- !!!!!!!!!!!!!!!!!! -->
                    <v-list class=" left_menu" dark>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="string">
                            <v-icon class="mr-2">mdi-waves</v-icon>
                            <router-link to="/" class="no-decor">
                              <h1>FitnessName</h1>
                            </router-link>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list class=" left_menu left_menu_list" nav dense>
                      <v-list-item-group>
                        <v-list-item v-for="(item, i) in items" :key="i" dark>
                          <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>

                          <v-list-item-content>
                            <router-link :to="'/' + item.text" class="no-decor">
                              <v-list-item-title
                                class="left_menu_items"
                                v-text="item.text"
                              ></v-list-item-title>
                            </router-link>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
                  <v-card class="main_right-part" height="100%">
                    <!-- !!!!!!!!!!!!!!!!!!! -->
                    <!-- <div> -->
                    <router-view></router-view>
                    <!-- </div> -->
                    <!-- !!!!!!!!!!!!!!!!!!! -->
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: 'Login', icon: 'mdi-login' },
      { text: 'Sign up', icon: 'mdi-account-alert' },
      { text: 'Our services', icon: 'mdi-dumbbell' },
      { text: 'Our team', icon: 'mdi-account-multiple' },
      { text: 'Buy pass', icon: 'mdi-currency-usd' },
      { text: 'Contacts', icon: 'mdi-card-account-mail-outline' }
    ]
  })
}
</script>

<style scoped>
.wrap {
  display: flex;
  position: relative;
  align-items: center;
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
  transform: translate(30%, 50%);
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
  transform: rotateY(180deg) translate(20%, 0%);
  left: 0;
  top: 0;
  display: block;
}
.main {
  height: 500px;
  width: 100%;
  overflow: hidden;
}
.main_left-part {
  background: linear-gradient(#4d03f8, #5e1cf8, #27dddd);
  height: 500px;
}
.main_right-part {
  background: linear-gradient(45deg, #eecfba, rgb(190 249 213 / 1), #c5dde8);
  height: 500px;
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
</style>
<style>
.wrapp {
  height: 500px;
}
.no-decor {
  text-decoration: none;
}
</style>
