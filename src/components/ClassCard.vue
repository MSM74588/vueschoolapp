<template>
  <div class="scroll">
    <div :key="classel.id" v-for="classel in classes">
      <a :href="classel.link">
        <div class="card">
          <div class="icon">
            <img
              src="../assets/classnoti.svg"
              alt="classnoti"
              class="iconimg"
            />
          </div>
          <h3>{{ classel.subject }} [ {{ classel.time }} ]</h3>
        </div></a
      >
    </div>
  </div>

  <!-- <h1 :key="classel.id" v-for="classel in classes">{{classel.subject}}</h1> -->
</template>

<script>
// import "../views/Classes"

export default {
  name: "ClassCard",
  props: {
    classes: Array,
  },
};
</script>

<style scoped>
.card:active {
  background-color: #fc8484;
  transition: 200ms;
}

.card {
  background: #ffe9e9;
  border-radius: 7px;
  width: calc(100% - 40px);
  height: 28px;
  margin-bottom: 10px;
  padding: 20px;
}

h3 {
  display: inline-block;
  transform: translateY(-30px);
  color: rgb(110, 110, 110);
}

.icon {
  height: 50px;
  width: 50px;
  background: #fff;
  display: inline-block;
  transform: translate(-13px, -13px);
  border-radius: 5px;
}

.iconimg {
  margin: 13px;
}

.scroll {
  max-height: 75vh;
  overflow: scroll;
  scroll-padding-bottom: 20px;
}
</style>
