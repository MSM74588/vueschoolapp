<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
<span>

<div class="flexbox">
  <div class="portal">
   
      <div class="iframe-wrapper">
        <iframe src="https://msmtesting.blogspot.com/" frameborder="0"></iframe>
      </div>

  </div>
  <div class="app">

  <div class="container">
  <div class="view">
      <router-view />
  </div>

  <div class="tabs">
              <Tab />
  </div>
</div>




  </div>
</div>


 
</span>
</template>

<script>
// import VueOffline from 'vue-offline'
// Vue.use(VueOffline)

import Tab from "@/components/Tab";

// import Tab from './components/Tab.vue';
export default {
  name: "App",
  components: {
    // HelloWorld,
    Tab,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");



* {
  padding: 0;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 70px;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "view"
    "tabs";
  height: 100%;
}

.tabs { grid-area: tabs;
   background: #d4fc79;

 }

.view { grid-area: view;;
 }




#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  height: 100vh;
}


.iframe-wrapper{
  padding: 20px;
  height: calc(100% - 40px);
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  
 
}




iframe{
  width: 100%;
  height: 100%;
   border-radius: 10px;
}

.flexbox{
  height: 100vh;
  width: 100vw;
}


@media only screen and (max-width: 730px) {
 .portal{
   display: none;
 }

 .tab-wrapper{
   width: 100%;
 }

 .app{
 width: 100vw;
}

}

.flexbox {
  display: flex;
  flex-direction: row;
}
.portal {
  flex-grow: 1;
  }

.app{
  width: 450px;
}


</style>
