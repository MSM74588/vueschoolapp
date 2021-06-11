<template>
    <div class="site-container">
        <iframe :src="source" frameborder="0" width="100%" height="100vh"></iframe>
    </div>
</template>

<script>
export default {
    name: "StudentSite",
    props: {
        source: String,
    },
}
</script>

<style scoped>
iframe{
    background-color: aquamarine;
    height: 100vh;
}
</style>