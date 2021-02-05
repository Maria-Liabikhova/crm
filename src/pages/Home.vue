<template>
  <div class="wrap ">
    <v-card class="container">
      <v-container fluid>
        <v-row>
          <v-col cols="4" xs="4" sm="4" md="3">
            <v-card class="mx-auto left_banner" height="100%">
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
          <v-col cols="8" xs="8" sm="8" md="9">
            <div class="main_part">
              <p>Hello world!</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style scoped>
.left_banner {
  max-height: 700px;
  min-height: 500px;
  margin-right: -20px;
}
.container {
  max-height: 700px;
  min-height: 500px;
  padding: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 10px !important;
}
.wrap {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
}
.main_part {
  margin-left: -25px;
  margin-right: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, #eecfba, rgb(190 249 213 / 1), #c5dde8);
}
</style>
