<template lang="pug">
  button(@click="checkLetter" ref="button") {{letter}}
</template>

<script>
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import { EventBus } from "../main";

export default Vue.extend({
  name: "KeybordButton",
  props: ["letter"],
  computed: {
    ...mapState(["activePhrase", "misses", "gameResult"]),
  },
  methods: {
    ...mapMutations(["addMiss", "addCorrect"]),
    checkLetter() {
      const { textContent, classList } = this.$refs.button;
      const regex = new RegExp(`.*[${textContent}.*]`, "i");
      this.$refs.button.disabled = true;

      if (!regex.test(this.activePhrase)) {
        this.addMiss();
        classList.add("wrong");
        return;
      }

      EventBus.$emit("matched-letter", textContent);
      this.addCorrect();
      classList.add("chosen");
    },
  },
  watch: {
    gameResult(result) {
      if (result) {
        const button = this.$refs.button;
        button.disabled = false;
        button.classList.remove('chosen', 'wrong');
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
  color: #ffffff;
}
</style>
