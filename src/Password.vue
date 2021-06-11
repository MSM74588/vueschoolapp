<template>
    <span>
       <div class="login-container">
           <div class="bg">
                <h1>Welcome Back,</h1> 
                <h1>LogIn</h1>
           </div>


          <div class="form">
            <img class="paslogo"  src="../public/img/icons/android-chrome-512x512.png" alt="logo">
            <label class="label">Username:</label>
            <input class="input is-info" type="text" placeholder="Username"> <br>
            <label class="label">Password:</label>
            <input class="input is-info" type="password" placeholder="Info input"> <br>
            <button class="submit-bt button is-primary" type="submit" >Login</button>
            <button class="button is-text" type="submit" >Forgot Password?</button>
            <br><p>#Task: Better Login Page</p>
          </div>


       </div>
    </span>
</template>

<script>
export default {
    name: "Password",
}
</script>

<style scoped>
@import "~bulma/css/bulma.css";
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap'); */

.login-container h1{
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: white;
}

.login-container{
    display: flex;
    flex-direction: column;
    height: 100vh;
     background: url("./assets/bg.png");
     background-size: 500px ;
}

.bg{
   
    padding: 30px;
    flex: 0.5;
}

.form{
    border-radius: 10px 10px 0 0;
    flex: 2;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #fff;
}

.paslogo{
    height: 60px;
    width: 60px;
   margin: 10px 10px 10px 0;
}

button{
    font-family: 'Poppins', sans-serif;
}


</style>