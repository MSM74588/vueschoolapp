<template>
   <div class="scroll">
        <div class="noticecard" :key="notice.id" v-for="notice in notices">
       <h6>{{notice.date}}</h6>
       <hr>
        <h5>{{notice.title}}</h5>
        <h6 class="text">{{notice.text}}</h6>
    </div>
   </div>


</template>

<script>
export default {
    name:"NoticeCard",
   
   props:{
        notices: Array,
    },
}
</script>

<style scoped>
.noticecard{
    background-color: rgb(193, 231, 247);
    margin: 10px 0 10px 0;
    padding: 10px;
    border-radius: 5px;
}

.scroll {
  max-height: 47vh;
  overflow: scroll;
  scroll-padding-bottom: 20px;

}


@media only screen and (max-height: 720px) {
  .scroll{
   height: 37vh;
 }
} 




.text{
    color: grey;
}
</style>