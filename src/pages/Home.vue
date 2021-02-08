<template>
  <div class="wrapp">
    <div class="right-side-item">
      <h2 class="serif">Welcome!</h2>
      <p class="small-text gray-text">
        The best time for fitness is now
      </p>
    </div>
    <div class="right-side-item">
      <div class="string">
        <v-icon class="mr-2 text-black">mdi-phone</v-icon>
        <h3 class="gray-text big-text serif">222-35-47</h3>
      </div>
      <p class="gray-text bold-text ml-12 serif">
        Fitness club with swimming pull. We are waiting for you in the fitness
        <br />
        club for the wholel famaly.
      </p>
    </div>
    <div class="wrapper-for-carusel">
      <v-carousel hide-delimiters class="carusel-wrap">
        <v-carousel-item
          class="carusel-slide"
          v-for="(itemCarusel, i) in itemsCarusel"
          :key="i"
          >{{ itemCarusel.item }}</v-carousel-item
        >
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemsCarusel: [
      { item: 'Hello world' },
      { item: 'Hello world 1' },
      { item: 'Hello world 2' },
      { item: 'Hello world 3' }
    ]
  })
}
</script>

<style scoped>
.wrapp {
  height: 500px;
}
.right-side-item {
  padding: 20px;
}
.small-text {
  font-size: 10px;
}
.gray-text {
  color: #838b8f;
}
.text-black {
  color: black !important;
  font-size: 35px !important;
}
.big-text {
  font-size: 35px;
}
.bold-text {
  font-weight: bolder;
}
.carusel-wrap {
  height: 200px !important;
  width: 590px;
  padding: 20px;
}
.wrapper-for-carusel {
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.carusel-slide {
  background: linear-gradient(45deg, #da9797, rgb(190 249 213 / 1), #6aafcf);
}
.serif {
  font-family: sans-serif;
}
</style>
