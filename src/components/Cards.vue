<template>
  <v-row>
    <v-col
      cols="6"
      xs="6"
      sm="6"
      md="4"
      v-for="user in filteredRole"
      :key="user.id"
    >
      <v-card class="mx-auto card" max-width="344" min-width="300">
        <router-link class="no-decoration" :to="'/user/' + user.id">
          <v-img :src="user.imgSrc" height="300px"></v-img>
          <v-card-title>
            <p class="card__subtitle">
              Name:
              <span class="card__name">{{ user.name }} {{ user.surname }}</span>
            </p>
          </v-card-title>
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
              eMail:
              <span class="card__describe">{{ user.eMail }}</span>
            </p>
            <p class="card__subtitle">
              Nickname:
              <span class="card__describe">{{ user.nickname }}</span>
            </p>
            <p class="card__subtitle">
              Age: <span class="card__describe">{{ user.age }}</span>
            </p>
          </v-card-subtitle>
        </router-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['filteredRole']
}
</script>

<style scoped>
.card__name {
  color: black;
  font-weight: bold;
  font-size: 25px;
  word-break: keep-all;
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
.no-decoration {
  text-decoration: none;
}
</style>
