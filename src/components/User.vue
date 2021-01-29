<template>
  <v-container class="conteiner">
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://i.sunhome.ru/journal/225/chudesa-chudesa-hristianstva-v2.orig.jpg"
        >
          <v-card-title class="white--text mt-8 nowrapp">
            <h1 class="ml-3">Name: {{ user.name }} {{ user.surname }}</h1>
            <v-spacer></v-spacer>
            <v-avatar size="150">
              <img alt="user" :src="user.imgSrc" />
            </v-avatar>
          </v-card-title>
        </v-img>

        <v-card-text>
          <v-card-subtitle>
            <!-- <p class="card__subtitle">
              Id:
              <span class="card__describe">{{ user.id }}</span>
            </p> -->
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    user() {
      let id = this.id
      return this.$store.getters.userById(id)
    }
  },
  mounted() {
    console.log('покажи user', user)
  }
}
</script>

<style scoped>
.conteiner {
  padding-top: 50px;
}
.nowrapp {
  flex-wrap: nowrap;
}
h1 {
  font-size: 25px;
}
</style>
