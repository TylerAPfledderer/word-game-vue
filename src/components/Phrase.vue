<template lang="pug">
    #phrase.section
        ul
          li(v-for="(item, index) in phrase", :class="item.className") {{item.text}}
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Phrase",
  computed: {
    ...mapState(["activePhrase"]),
    phrase() {
      const phraseArr = this.activePhrase.split("");
      let letterList = [];
      phraseArr.forEach((letter) => {
        if (letter === " ") {
          return letterList.push({className: "space", text: ""});
        }
        letterList.push({className: "letter", text: letter});
      });
      return letterList;
    },
  }
});
</script>

<style lang="scss" scoped>
.letter {
  font-size: var(--font-size-medium);
  height: 65px;
  width: 65px;
  padding: 20px 1px 0 1px;
  margin-right: 2px;
  color: transparent;
  background: var(--color-neutral-light);
  border-radius: 5px;

  /* To allow animation when a letter is "shown" */
  transition: all 1s;
}

.space {
  width: 15px;
}

.show {
  color: #000;
  background-color: #76ce82;
  transform: rotate(360deg);
}
</style>
