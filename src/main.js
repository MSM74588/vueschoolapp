import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Password from "./Password.vue"
// import './data.js';

var authenticated = false;

if (authenticated == true) {
    createApp(App).use(router).mount("#app");
    localStorage.setItem('UserStatus', true);
    console.log("User Authenticated!")
}
if (authenticated == false || "") {
    createApp(Password).use(router).mount("#app");
    localStorage.clear();
}



// else { createApp(App).use(router).mount("#app"); }

// add the login logic with if/else logic