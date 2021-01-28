<template lang="pug">
  li(:class="className" ref="phraseLetter") {{ letter }}
</template>

<script>
import { mapState } from 'vuex';
import { EventBus } from "../main";

export default {
  name: "PhraseLetter",
  props: {
    className: String,
    letter: String,
  },
  computed: {
    ...mapState(['gameResult'])
  },
  methods: {
    showLetter(letter) {
      const { textContent, classList } = this.$refs.phraseLetter;
      const regex = new RegExp(`.*[${letter}].*`, "i");
      
      if (regex.test(textContent)) {
        classList.add('show');
      }
    }
  },
  created() {
    EventBus.$on("matched-letter", this.showLetter);
  },
  watch: {
    gameResult(result) {
      if (result) {
        this.$refs.phraseLetter.classList.remove('show');
      }
    }
  }
};
</script>
