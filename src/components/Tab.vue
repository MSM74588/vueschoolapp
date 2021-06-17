<template>
  <div class="tab">
    <div class="grid-container">
      <div class="home center el">
        <router-link to="/"
          ><i><img id="home-icon" src="../assets/home.svg" alt="home" /></i
        ></router-link>
      </div>
      <div class="class center el">
        <router-link to="/classes"
          ><i
            ><img
              id="presentation"
              src="../assets/presentation.svg"
              alt="class"
          /></i>
          <h1>Class</h1></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "home class";

  height: 70px;
}

.el {
  padding: 10px;
}

.tab {
  /* border-radius: 20px 20px 0 0; */
  background-color: #212121;
  margin: 0;
  border-radius: 5px;
}

.home {
  grid-area: home;
}

.center {
  display: grid;
  place-items: center;
}

.class {
  grid-area: class;
}

#home-icon {
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #212121;
}

img {
  width: 30px;
  display: inline-block;
}

h1 {
  display: inline-block;
  font-size: 25px;
  color: #fff;
}

#presentation {
  transform: translate(-10px, 7px);
}

a.router-link-exact-active {
  border-bottom: #fff 3px solid;
  padding-bottom: 5px;
  transition: 300ms;
}
</style>
