<template>
  <div class="main-wrap">
    <div class="content-wrapper">
      <v-card class="content">
        <v-container class="correct-conteiner" fluid>
          <v-row class="correct-conteiner">
            <v-col cols="12" class="correct-conteiner">
              <v-row class="correct-conteiner">
                <v-col cols="6" class="correct-conteiner">
                  <div class="main_page-display display_bg-1"></div
                ></v-col>
                <v-col cols="6" class="correct-conteiner">
                  <div class="main_page-display display_bg-2">
                    <div v-if="!onSystem" class="right">
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="onLogin">
                        Login
                      </v-btn>
                      <v-btn color="green darken-1" text @click="onReg">
                        Registation
                      </v-btn>
                    </div>
                    <div v-else>
                      <v-btn color="green darken-1" text @click="onUserPage">
                        My Page
                      </v-btn>
                      <v-btn color="green darken-1" text @click="onLogout">
                        logout
                      </v-btn>
                    </div>
                  </div></v-col
                >
                <v-col
                  cols="6"
                  v-for="bg in bgs"
                  :key="bg.id"
                  class="correct-conteiner"
                >
                  <div class="main_page-display" :class="bg"></div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgs: ['display_bg-3', 'display_bg-4']
    }
  },
  methods: {
    onLogin() {
      this.$router.push(`/login`)
    },
    onReg() {
      this.$router.push(`/registration`)
    },
    onUserPage() {
      this.$store.dispatch('fetchUsersDB').then(() => {
        this.$router.push(`/current_user`)
      })
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
    }
  },
  computed: {
    onSystem() {
      return this.$store.getters.userLoggedIn
    }
  }
}
</script>

<style scoped>
.correct-conteiner {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.main-wrap {
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
.main-wrap::after {
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
.main-wrap::before {
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
.content-wrapper {
  justify-self: center;
  align-self: center;
  height: 100%;
  max-height: 600px;
  width: 1100px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.main_page-display {
  background-size: cover;
  width: 550px;
  height: 280px;
}
.display_bg-1 {
  background-image: url(../assets/img/main.jpg);
}
.display_bg-2 {
  background-image: url(../assets/img/darvin.jpg);
}
.display_bg-3 {
  background-image: url(../assets/img/nuton.jpg);
}
.display_bg-4 {
  background-image: url(../assets/img/tesla.webp);
}
</style>
