<template>
  <a :href="link">
    <div class="i-con">
      <div class="i-button">
        <i><img :src="icon" :srcset="icon" /></i>
      </div>
      <p>{{ text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    link: String,
    text: String,
    icon: String,
  },
};
</script>

<style scoped>
.i-con {
  margin: 10px;
  text-align: center;
}

.i-button {
  height: 7vh;
  width: 7vh;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  place-items: center;
  border-radius: 10px;
}

img {
  height: 4vh;
}

a {
  text-decoration: none;
  color: #212121;
  font-size: 10px;
}

p {
  padding-top: 0.3vh;
  line-height: 110%;
}
</style>
