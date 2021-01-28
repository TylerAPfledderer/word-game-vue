<template lang="pug">
  #app
    Overlay(:phraseList="this.phrases")
    Banner
    Phrase
    Keyboard
    Scoreboard(:totalHearts="totalHearts")
</template>

<script>
import Vue from "vue";
import Overlay from "./components/Overlay.vue";
import Banner from "./components/Banner.vue";
import Phrase from "@/components/AppPhrase";
import Keyboard from "@/components/AppKeyboard";
import Scoreboard from "./components/Scoreboard.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { EventBus } from "./main";
const phraseList = require("../data/phraseList");

export default Vue.extend({
  name: "App",
  components: {
    Overlay,
    Banner,
    Phrase,
    Keyboard,
    Scoreboard,
  },
  methods: {
    ...mapMutations(["setActivePhrase", "updateGameResult"]),
    ...mapActions(["resetStates"]),
  },
  computed: {
    ...mapState(["misses", "activePhrase", "correct", "gameResult"]),
  },
  data() {
    return {
      totalHearts: 5,
      phrases: phraseList,
    };
  },
  watch: {
    misses(value) {
      if (value === this.totalHearts) {
        this.updateGameResult("lose");
      }
    },
    correct(value) {
      // Immediately return if state holds null
      if (!this.activePhrase) {
        return;
      }
      const phraseNoSpace = this.activePhrase.split(" ").join("");
      const phraseNoDuplicates = phraseNoSpace
        .split("")
        .filter((c, index) => phraseNoSpace.indexOf(c) === index)
        .join("");
      const phraseLength = phraseNoDuplicates.length;
      if (value === phraseLength) {
        this.updateGameResult("win");
      }
    },
    gameResult(result) {
      if (result) {
        this.resetStates();
        EventBus.$off(); // This is required to prevent undefined warnings when reseting the game with new values.
      }
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&Roboto:300");

:root {
  --color-win: #78cf82;
  --color-lose: #d94545;
  --color-start: #5b85b7;
  --color-neutral: #445069;
  --color-neutral-light: #d2d2d2;
  --color-keys: #37474f;
  --color-keys-light: #e5e5e5;
  --font-size-large: 60px;
  --font-size-medium: 20px;
  --transition: all 0.2s ease-in-out;
}

* {
  box-sizing: border-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

body {
  height: 100vh;
}

h2 {
  margin: 0;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-size: var(--font-size-large);
  margin: 0;
}

li,
ol,
ul {
  display: inline-block;
}

button {
  margin: 6px;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  color: var(--color-keys);
  font-size: var(--font-size-medium);
  background-color: var(--color-keys-light);
  border-radius: 5px;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  max-height: 900px;
  text-align: center;
}

.section {
  width: 100%;
  padding: 10px;
}
</style>
