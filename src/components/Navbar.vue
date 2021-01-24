<template>
  <div>
    <v-navigation-drawer app temporary> </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CRM app</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link class="link-btn" to="/">
        <v-btn text>
          Home
        </v-btn>
      </router-link>
      <v-btn text>
        option2
      </v-btn>
      <v-btn text>
        option3
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<style scoped>
.link-btn {
  text-decoration: none;
}
</style>
