<template lang="pug">
    #scoreboard.section
        ol
            li.tries
                img(src="../assets/liveHeart.png", alt="", height="35px", width="30px")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Scoreboard'
})
</script>

<style lang="scss" scoped>
    ol {
        list-style: none;
    }
</style>
