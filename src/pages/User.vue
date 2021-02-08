<template>
  <div>
    <!-- <v-container class="conteiner">
      <router-link to="/users" class="no-decoration"
        ><v-btn elevation="2">All users</v-btn></router-link
      >
      <v-row justify="space-around"> -->
    <!-- <v-col cols="6"> -->
    <v-card class="user-card">
      <v-img
        height="200px"
        src="https://i.sunhome.ru/journal/225/chudesa-chudesa-hristianstva-v2.orig.jpg"
      >
        <v-card-title class="white--text mt-8 nowrapp">
          <h1 class="ml-3 word_nowrapp">{{ user.name }} {{ user.surname }}</h1>
          <v-spacer></v-spacer>
          <v-avatar size="150">
            <img class="img_avatar" alt="user" :src="user.imgSrc" />
          </v-avatar>
        </v-card-title>
      </v-img>

      <v-card-text class="card_background">
        <v-card-subtitle>
          <p class="card__subtitle">
            Id:
            <span class="card__describe">{{ user.id }}</span>
          </p>
          <p class="card__subtitle">
            Gender:
            <span class="card__describe">{{ user.gender }}</span>
          </p>
          <p class="card__subtitle">
            Role: <span class="card__describe">{{ user.role }}</span>
          </p>
          <p class="card__subtitle">
            eMail: <span class="card__describe">{{ user.eMail }}</span>
          </p>
          <p class="card__subtitle">
            Nickname:
            <span class="card__describe">{{ user.nickname }}</span>
          </p>
          <p class="card__subtitle">
            Age: <span class="card__describe">{{ user.age }}</span>
          </p>
        </v-card-subtitle>
      </v-card-text>
    </v-card>
    <!-- </v-col> -->
    <!-- </v-row> -->
    <!-- </v-container> -->
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    user() {
      const id = Number.parseInt(this.id)
      return this.$store.getters.userById(id)
    }
  }
}
</script>

<style scoped>
.user-card {
  width: 400px;
  margin: 10px;
}
.conteiner {
  padding-top: 50px;
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
.card_background {
  background-image: url('https://doseng.org/uploads/posts/2013-02/1359716103_doseng.org_04.jpg');
  background-color: black;
}
.no-decoration {
  text-decoration: none;
}
</style>
