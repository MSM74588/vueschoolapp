<template>
  <div class="home">
    <div class="school">
      <h1>NotSo Public School</h1>
      <transition name="slide">
        <router-link to="/Menu"
          ><i><img id="m-img" src="../assets/menu.svg" alt="menu" /></i
        ></router-link>
      </transition>
    </div>
    <div class="hello">
      <h1 class="bday" v-if="bday">Happy Birthday!,</h1>
      <i v-if="bday" class="bdaycake"><img src="../assets/cake.png" alt="Happy Bday"></i>
      <h1 v-else>Hello,</h1>

      <h1 class="nameh1" contenteditable="true" >{{ name }}</h1>
    </div>
    <div class="announcement">
      <a href=""><h1>Announcement</h1></a>
    </div>
    <div class="grid-container">
      <div class="notice">
        <h1>Notice:</h1>
        <div class="devider"></div>

       
          <NoticeCard :notices="notices" />


      </div>
      <div class="icons">
       <div class="flex">  <IconButton
          :link="studentco"
          text="Student Corner"
          icon="https://msmwebapp.netlify.app/ico/class.svg"
        /></div>
        <div class="flex">  <IconButton
          :link="qb"
          text="Question Banks"
          icon="https://msmwebapp.netlify.app/ico/qb.svg"
        /></div>
         <div class="flex">  <IconButton
          :link="events"
          text="Events"
          icon="https://msmwebapp.netlify.app/ico/calender.svg"
        /></div>
          <div class="flex">  <IconButton
          :link="bookmarks"
          text="Bookmarks"
          icon="https://msmwebapp.netlify.app/ico/bookmark.svg"
        /></div>
      
      
      
      
        <!-- Remove the link var....as it will be dynamically fetched through API later -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import IconButton from "@/components/IconButton";
import NoticeCard from "@/components/NoticeCard";
// import "../../data-fetched.js"
// this method might not work so delete this file later

export default {
  name: "Home",
  components: {
    IconButton,
    NoticeCard,
  },

  data() {
    return {
      bday: false, 
      name: "MandraSaptak Mandal",
      class: "12",
      sec: "B",
      announcementlink: "https://www.notion.so/Announcements-74aad8100b7e4851821a0dd575bf8036",
      notice: "https://www.notion.so/Exam-Schedule-cc8d9a9b5dcb487db3205c102bf7352d",
      studentco: "https://mandrasaptak.netlify.app",
      qb: "https://drive.google.com/drive/folders/1vaWARCJMJb5RalC23QsZpeu9AXzwrszH?usp=sharing",
      events: "https://www.notion.so/Events-46e720416c3844dbac5e60e78a71b884",
      bookmarks: "https://raindrop.io/msm74588/education-prototype-14514085",
       notices:[
        {
          id: 1,
          title: "School Closed forever",
          text: "Seriously!",
          date: "3 June 2021",
        },
         {
          id: 2,
          title: "School Again Reopened, Sorry...",
          text: "Seriously!",
          date: "5 June 2021",
        },
         {
          id: 3,
          title: "School Again Reopened, Sorry...",
          text: "Seriously!",
          date: "5 June 2021",
        },
         {
          id: 4,
          title: "School Again Reopened, Sorry...",
          text: "Seriously!",
          date: "5 June 2021",
        },
      ],
     
    };
  },
};
</script>

<style scoped>
/* 
.slide-enter-active,.slide-leave-active{
  transition: opacity 2.5s ease-out;
} */
@media only screen and (max-width: 730px) {
.home{
  width: 100vw;
}
}

.nameh1{
  width: 60%;
}
.bday{
  font-size: 2.5em;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bdaycake img{
  height: 60px;
  position: absolute;
  right: 50px;
  top: 90px;
}


.school {
  display: inline-block;
}

.school {
  font-size: 10px;
  padding: 30px 30px 30px 30px;
  color: #48834b;
  width: calc(100% - 60px);
}

#m-img {
  float: right;
  transform: translate(0, -30px);
  height: 20px;
  margin-bottom: -30px;
}

.hello {
  padding: 0 0 20px 30px;
  font-size: 10px;
}

.announcement a {
  color: #f08080;
  font-size: 8px;
  text-decoration: 3px underline;
}

.announcement {
  padding: 0 0 30px 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas: "notice icons";
  height: 56vh;

 
}



@media only screen and (max-height: 720px) {
  .grid-container{
   height: 37vh;
 }

 .flex{
   height: 70px;
 }
}





.notice {
  grid-area: notice;
  padding: 20px 30px 20px 30px;
  background-color: #ecf0f2;
  border-radius: 0 5px 5px 0;
}

.icons {
  grid-area: icons;
  background-color: #c2f1ba;
  border-radius: 5px 0 0 5px;
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.notice h1 {
  font-size: 18px;
  color: #83c5ea;
}

.devider {
  height: 3px;
  background-color: #83c5ea;
  width: 100%;
}
</style>
