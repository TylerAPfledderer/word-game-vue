<template lang="pug">
    #overlay.start(ref="overlay", :class="gameResult")
        h2.title Wheel of Success
        h3(v-if="!gameResult") &nbsp
        h3(v-if="gameResult === 'win'") You've Won! Play Again?
        h3(v-if="gameResult === 'lose'") Game Over. Try again?
        button#overlay-btn(@click="this.startGame") {{ newGameBtn }}
</template>

<script>
import Vue from "vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "Overlay",
  props: {
    phraseList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newGame: false,
    };
  },
  computed: {
    ...mapState(["gameResult"]),
    newGameBtn: function() {
      return this.newGame ? "New Game" : "Start Game";
    },
  },
  methods: {
    ...mapActions(["declareActivePhrase"]),
    ...mapMutations(["updateGameResult"]),
    startGame() {
      this.updateGameResult(null);
      this.declareActivePhrase(this.phraseList);
      this.$refs.overlay.style.display = "none";
    },
  },
  watch: {
    gameResult(result) {
      if (result) {
        this.$refs.overlay.style.display = "flex";
        this.newGame = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#overlay {
  display: flex;
  flex-direction: column;
  position: fixed;
  color: #ffffff;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  z-index: 10000;
}

#overlay-btn {
  cursor: pointer;
  padding: 8px;
  margin: 50px auto;
  background: #ffffff;
  border-radius: 5px;
  font-size: var(--font-size-medium);
}

.title {
  color: #fff;
}

.start {
  background-color: var(--color-start);
}

.start button {
  color: var(--color-win);
}

.win {
  background-color: var(--color-win);
}

.win a {
  color: var(--color-win);
}

.lose {
  background-color: var(--color-lose);
}

.lose a {
  color: var(--color-lose);
}
</style>
