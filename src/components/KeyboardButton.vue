<template lang="pug">
  button(@click="checkLetter" ref="button") {{letter}}
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "KeybordButton",
  props: ["letter"],
  methods: {
    ...mapState(['activePhrase']),
    checkLetter () {
      const {textContent} = this.$refs.button;
      const regex = new RegExp(`.*[${textContent}].*`, "i");
      if(regex.test(this.activePhrase)) {
        console.log(true);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .chosen {
    background: var(--color-neutral);
    border-radius: 5px;
    font-size: var(--font-size-medium);
    color: #ffffff;
  }

  .wrong {
    background: #f7a964;
    color: #FFFFFF;
  }
</style>