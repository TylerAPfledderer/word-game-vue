<template lang="pug">
    #scoreboard.section
        ol
            li.tries(v-for='heart in totalHearts')
              img(v-if='heart <= misses' src='../assets/lostHeart.png' alt='' height='35px' width='30px')
              img(v-else src='../assets/liveHeart.png' alt='' height='35px' width='30px')
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Scoreboard",
  props: ["totalHearts"],
  computed: {
    ...mapState(["misses"]),
  },
});
</script>

<style lang="scss" scoped></style>
