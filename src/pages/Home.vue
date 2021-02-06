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
                    <v-navigation-drawer
                      absolute
                      dark
                      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                      width="100%"
                      permanent
                    >
                    </v-navigation-drawer>
                  </v-card>
                </v-col>
                <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
                  <v-card class="main_right-part" height="100%">
                    <p>Hello world!</p>
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
  border-radius: 10px !important;
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
  max-height: 700px;
  min-height: 500px;
}
.no-padding {
  padding: 0;
}
</style>
