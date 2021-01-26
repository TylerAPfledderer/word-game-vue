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
    ...mapState(["activePhrase", "misses"]),
  },
  methods: {
    ...mapMutations(["addMiss"]),
    checkLetter() {
      let { textContent, classList } = this.$refs.button;
      const regex = new RegExp(`.*[${textContent}.*]`, "i");
      this.$refs.button.disabled = true;

      if (!regex.test(this.activePhrase)) {
        this.addMiss();
        return classList.add("wrong");
      }

      EventBus.$emit("matched-letter", textContent);
      return classList.add("chosen");
    },
  },
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
