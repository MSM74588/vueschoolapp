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
     <span>
       <router-view />

          <div id="tab-wrapper">
            <div id="tab-component">

              <Tab />
            </div>
          </div>
    </span>
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

:root{
  --width : 73vw
}

* {
  padding: 0;
  margin: 0;
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

#tab-component {
  position: relative;
  bottom: 0px;
  left: 0;
  width: 100%;

}

#tab-wrapper{
  position: absolute;
  bottom: 0;
  width: calc(100vw - var(--width));  
 
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

 #tab-wrapper{
   width: 100%;
 }

 .app{
 width: 100%;
}

}

.flexbox {
  display: flex;
  flex-direction: row;
}
.portal {
  width: var(--width);
  }

</style>
