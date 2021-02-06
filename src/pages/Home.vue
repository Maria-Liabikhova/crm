<template>
  <div class="wrap ">
    <v-container fluid>
      <v-row>
        <v-col offset="1" cols="10">
          <v-card class="main">
            <v-container fluid>
              <v-row>
                <v-col class="no-padding" cols="4" xs="4" sm="4" md="3">
                  <v-card class="main_left-part" height="100%">
                    <!-- !!!!!!!!!!!!!!!!!! -->
                    <v-list class=" left_menu" dark>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="string">
                            <v-icon class="mr-2">mdi-waves</v-icon>
                            <h1>FitnessName</h1>
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
                            <v-list-item-title
                              v-text="item.text"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                    <!-- !!!!!!!!!!!!!!!!!! -->
                  </v-card>
                </v-col>
                <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
                  <v-card class="main_right-part" height="100%">
                    <div class="right-side-item">
                      <h2>Welcome!</h2>
                      <p class="small-text gray-text">
                        The best time for fitness is now
                      </p>
                    </div>
                    <div class="right-side-item">
                      <div class="string">
                        <v-icon class="mr-2 text-black">mdi-phone</v-icon>
                        <h3 class="gray-text big-text">222-35-47</h3>
                      </div>
                      <p class="gray-text bold-text">
                        Fitness club with swimming pull. We are waiting for you
                        in the fitness club for the wholel famaly.
                      </p>
                    </div>
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
  position: relative;
  max-height: 700px;
  min-height: 500px;
  width: 100%;
}
.main::after {
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
.main_right-part {
  background: linear-gradient(45deg, #eecfba, rgb(190 249 213 / 1), #c5dde8);
}
.main_left-part {
  background: linear-gradient(#4d03f8, #5e1cf8, #27dddd);
  max-height: 700px;
  min-height: 500px;
}
.no-padding {
  padding: 0;
}
.left_menu {
  background-color: transparent !important;
}
.left_menu_list {
  margin-top: 30px;
}
h1 {
  font-size: 18px;
  font-family: initial;
}
.string {
  display: flex;
  align-items: center;
  padding: 5px;
}
.right-side-item {
  padding: 20px;
}
.small-text {
  font-size: 10px;
}
.gray-text {
  color: #838b8f;
}
.text-black {
  color: black !important;
  font-size: 35px !important;
}
.big-text {
  font-size: 35px;
}
.bold-text {
  font-weight: bolder;
}
</style>
