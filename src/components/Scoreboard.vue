<template lang="pug">
    #scoreboard.section
        ol
            li.tries(v-for="heart in totalHearts" :key="heart")
                img(src="../assets/liveHeart.png", alt="", height="35px", width="30px")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'Scoreboard',
    props: ['totalHearts']
})
</script>

<style lang="scss" scoped>
</style>
