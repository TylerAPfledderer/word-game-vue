<template lang="pug">
    #phrase.section
        ul
          PhraseLetter(v-for="(item, index) in phrase" :key="index" :className="item.className" :letter="item.text")
</template>

<script>
import Vue from "vue";
import PhraseLetter from "./PhraseLetter";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Phrase",
  components: {PhraseLetter},
  computed: {
    ...mapGetters({
      phrase: "getPhraseArray",
    }),
  },
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

/* This selector is place here instead of the PhraseLetter component to follow CSS cascade */
.show {
  color: #000;
  background-color: #76ce82;
  transform: rotate(360deg);
}
</style>
