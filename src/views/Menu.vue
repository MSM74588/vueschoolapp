<template>
  <div class="menu">
    <div class="idcard">
      <img :src="idcard" alt="idcard" />
    </div>
    <br />

    <a href=""><h3>📝 Exam Dates</h3></a><br />
    <a href=""><h3>🎥 Useful Videos</h3></a>
    <a href=""><h3>📎 Useful Links</h3></a><br />
    <a href=""><h3>🏛 Github Classroom</h3></a><br />
    <a href=""><h3>💵 Fees</h3></a><br />
    <a href=""><h3>🚀 Some tips for Online Classes</h3></a>

    <br>
    <p>Development of this project is halted for now.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idcard:
        "https://mandrasaptak.netlify.app/assets/ID.png",
    };
  },
};
</script>

<style scoped>



.idcard img {
 max-height: 190px;
 max-width: 80vw;
  border-radius: 10px;
  border: 3px rgb(0, 0, 0) solid;
  
}

.menu {
  padding: 30px;
  margin-bottom: 0;
  
}

a {
  color: #414141;
  text-decoration: none;
}

p{
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  color: orangered;
}

</style>
