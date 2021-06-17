<template>
  <span>
    <div class="login-container">
      <div class="bg">
        <h1>Welcome Back,</h1>
        <h1>LogIn</h1>
      </div>

      <div class="form">
        <img
          class="paslogo"
          src="../public/img/icons/android-chrome-512x512.png"
          alt="logo"
        />

            <label class="label">Username:</label>
            <input class="input is-info" type="text" placeholder="Username" />
            <br />
            <label class="label">Password:</label>
            <input
              class="input is-info"
              type="password"
              placeholder="Password"
            />
            <br />
           
         <button class="submit-bt button is-primary" type="submit" value="Send" @click=ssubmit>
              Login
            </button>
            <br />
            <button class="button is-text">
              Forgot Password?
            </button>

        <br />
        <p>#Task: Better Login Page</p>
      </div>
    </div>
  </span>
</template>

<script>

// import gql from "graphql-tag"
// import { InMemoryCache } from "apollo-cache-inmemory"

export default {
  name: "Password",
  data(){
      return {
        //   username: "",
        //   password: "",
      }
  },
   methods: {
      ssubmit(){
        //   const { username , password } = $this.data;
        //   this.username = "",
        //   this.password = ""
          console.log("btn clicked")
      }
  }
 
    


};







</script>

<style scoped>
/* @import "~bulma/css/bulma.css"; */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap'); */

.login-container h1 {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: white;
}

.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url("./assets/bg.png");
  background-size: 500px;
}

.bg {
  padding: 30px;
  flex: 0.5;
  transform: translateY(30px);
}

.form {
  border-radius: 10px 10px 0 0;
  flex: 2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.paslogo {
  height: 60px;
  width: 60px;
  margin: 10px 10px 10px 0;
}

.button.is-primary {
  font-family: "Poppins", sans-serif;
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.button.is-primary:hover {
  background-color: #10bda3;
}

.button.is-text {
  border: transparent;
  background-color: transparent;
  font-family: "Poppins", serif;
  cursor: pointer;
  text-decoration: underline 2px;
}

.input.is-info {
  padding: 7px;
  border-radius: 5px;
  outline: transparent;
  border: 2px rgb(80, 139, 207) solid;
  font-family: "Poppins", serif;
}

label {
  font-family: "Poppins", serif;
}
</style>
