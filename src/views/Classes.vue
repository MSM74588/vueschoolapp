<template>
  <div class="classes">
    <h1>Classes({{ classno }} {{ sec }})</h1>
    <h5 v-if="isOffline" class="offline">You are offline</h5>

    <ClassCard :classes="classes" />
  </div>
</template>

<script>

// import VueOffline from 'vue-offline'

// Vue.use(VueOffline)

import ClassCard from "@/components/ClassCard";

export default {
  name: "Classes",
  components: {
    ClassCard,
  },

  data() {
    return {
      classno: "12",
      sec: "B",
      classes: [
        {
          id: 1,
          classn: "12",
          time: "9:00 AM",
          link: "",
          subject: "Biology",
        },
        {
          id: 2,
          classn: "12",
          time: "10:00 AM",
          link: "https://us04web.zoom.us/j/4645295717?pwd=K3YvRXp3bkFHM2dnMGJVcjhtNFYxUT09",
          subject: "Physics",
        },
        {
          id: 3,
          classn: "12",
          time: "11:00 AM",
          link: "https://us04web.zoom.us/j/4645295717?pwd=K3YvRXp3bkFHM2dnMGJVcjhtNFYxUT09",
          subject: "English",
        },
  
      ],
    };
  },
  //   created() {
  //   classes[

  //   ];
  // },
};
</script>

<style scoped>
.classes {
  padding: 30px;
  width: calc(100% - 60px);
}

.offline{
  color: rgb(255, 86, 86);
}
</style>
