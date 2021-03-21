<template>
  <div class="wrap">
    <div class="card-wrapper">
      <v-card class="main">
        <v-container class="correct-fluid" fluid>
          <v-row class="correct-fluid">
            <Navbar />
            <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
              <v-card class="main_right-part" height="100%">
                <section v-if="currentUser">
                  <div class="user_wrap">
                    <v-card class="user-card">
                      <v-img
                        height="200px"
                        src="https://i.sunhome.ru/journal/225/chudesa-chudesa-hristianstva-v2.orig.jpg"
                      >
                        <v-card-title class="white--text mt-8 nowrapp">
                          <h1 class="ml-3 word_nowrapp">
                            {{ currentUser.name }}
                            {{ currentUser.secondName }}
                          </h1>
                          <v-spacer></v-spacer>
                          <v-avatar size="150"
                            ><img
                              class="img_avatar"
                              alt="user"
                              :src="currentUser.imgSrc"
                          /></v-avatar>
                        </v-card-title>
                      </v-img>

                      <v-card-text class="card_background">
                        <v-card-subtitle>
                          <p class="card__subtitle">
                            aid:
                            <span class="card__describe">{{
                              currentUser.aid
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Gender:
                            <span class="card__describe">{{
                              currentUser.gender
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Role:
                            <span class="card__describe">{{
                              currentUser.role
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            eMail:
                            <span class="card__describe">{{
                              currentUser.email
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Nickname:
                            <span class="card__describe">{{
                              currentUser.nickname
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Age:
                            <span class="card__describe">{{
                              currentUser.age
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            dbId:
                            <span class="card__describe">{{
                              currentUser.dbId
                            }}</span>
                          </p>
                        </v-card-subtitle>
                        <div class="wrapper_line_style">
                          <EditUser :editUser="currentUser" />
                          <DeletUser />
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </section>
                <section v-else>
                  <CreateUser />
                </section>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import EditUser from '../components/EditUser.vue'
import DeletUser from '../components/DeletUser.vue'
import CreateUser from '../components/CreateUser.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { EditUser, DeletUser, CreateUser, Navbar },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
.user_wrap {
  width: 100%;
  display: flex;
  align-items: center;
}
.user-card {
  width: 100%;
  margin: 10px;
}
.nowrapp {
  flex-wrap: nowrap;
}
.word_nowrapp {
  white-space: pre;
}
h1 {
  font-size: 25px;
}
.img_avatar {
  object-fit: cover;
}
.card__subtitle {
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: 7px;
}
.card__describe {
  color: white;
  font-size: 16px;
  font-weight: normal;
}
.img_avatar {
  object-fit: cover;
  height: 150px;
  width: 150px;
}
.card_background {
  background-image: url('https://doseng.org/uploads/posts/2013-02/1359716103_doseng.org_04.jpg');
  background-color: black;
}
</style>
