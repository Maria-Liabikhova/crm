<template>
  <div class="scroll">
    <v-row>
      <v-col cols="4" v-for="user in filteredRole" :key="user.id">
        <v-card>
          <router-link class="no-decoration" :to="'/user/' + user.id">
            <div class="wrap-avatar">
              <v-img
                :class="user.borderClass"
                class="img-avatar"
                :src="user.imgSrc"
              ></v-img>
            </div>
            <v-card-title>
              <p class="card__subtitle">
                Name:
                <span class="card__name"
                  >{{ user.name }} {{ user.surname }}</span
                >
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
  </div>
</template>

<script>
export default {
  props: ['filteredRole']
}
</script>

<style scoped>
/* .border {
  border: 3px dashed red
} */
.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 400px;
}
.card__name {
  color: black;
  font-weight: bold;
  font-size: 16px;
  word-break: keep-all;
}
.card__subtitle {
  font-weight: bold;
  color: rgb(116, 116, 116);
  font-size: 12px;
  margin-bottom: 3px;
}
.card__describe {
  color: black;
  font-size: 12px;
}
.no-decoration {
  text-decoration: none;
}
.img-avatar {
  height: 150px;
}
</style>
