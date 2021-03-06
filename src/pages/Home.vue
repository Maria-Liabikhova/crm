<template>
  <div class="wrapp">
    <div class="right-side-item">
      <h2 class="serif">Welcome!</h2>
      <p class="small-text gray-text">
        It's our job to implement your ideas
      </p>
    </div>
    <div class="right-side-item">
      <div class="string"></div>
      <p class="gray-text bold-text ml-12 serif">
        We are a team of developers and students, who know their business and
        who do the best job!
        <br />
        Welcome to our friendly team
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.right-side-item {
  padding: 20px;
  display: flex;
  flex-direction: column;
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

.serif {
  font-family: cursive;
}
.main-img {
  height: 350px;
  width: 350px;
  border: black;
  border-radius: 20%;
  align-self: center;
}
</style>
