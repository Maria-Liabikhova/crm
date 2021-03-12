<template>
  <div class="scroll">
    <v-row>
      <v-col cols="4" v-for="user in filteredRole" :key="user.id">
        <v-card>
          <router-link class="no-decor" :to="'/user/' + user.dbId">
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
                  >{{ user.name }} {{ user.secondName }}</span
                >
              </p>
            </v-card-title>
            <v-card-subtitle>
              <p class="card__subtitle">
                Nckname:
                <span class="card__describe">{{ user.nickname }}</span>
              </p>
              <p class="card__subtitle">
                Age:
                <span class="card__describe">{{ user.age }}</span>
              </p>
              <p class="card__subtitle">
                aid:
                <span class="card__describe">{{ user.aid }}</span>
              </p>
              <p class="card__subtitle">
                eMail:
                <span class="card__describe">{{ user.email }}</span>
              </p>
              <p class="card__subtitle">
                Gender:
                <span class="card__describe">{{ user.gender }}</span>
              </p>
              <p class="card__subtitle">
                Role: <span class="card__describe">{{ user.role }}</span>
              </p>
              <p class="card__subtitle">
                dbId: <span class="card__describe">{{ user.dbId }}</span>
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
.img-avatar {
  height: 150px;
  object-fit: cover;
}
</style>
