<template lang="pug">
  #app
    Overlay
    Banner
    Phrase
    Keyboard
    Scoreboard(:totalHearts="totalHearts")
</template>

<script>
import Vue from "vue";
import Overlay from "./components/Overlay.vue";
import Banner from "./components/Banner.vue";
import Phrase from "./components/Phrase.vue";
import Keyboard from "./components/Keyboard.vue";
import Scoreboard from "./components/Scoreboard.vue";

export default Vue.extend({
  name: "App",
  components: {
    Overlay,
    Banner,
    Phrase,
    Keyboard,
    Scoreboard,
  },
  data() {
    return {
      totalHearts: 5
    }
  }
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
