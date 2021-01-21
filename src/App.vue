<template lang="pug">
  #app
    Overlay
    Banner
    Phrase
    Keyboard
    Scoreboard
</template>

<script lang="ts">
import Vue from 'vue';
import Overlay from './components/Overlay.vue';
import Banner from './components/Banner.vue';
import Phrase from './components/Phrase.vue';
import Keyboard from './components/Keyboard.vue';
import Scoreboard from './components/Scoreboard.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Overlay,
    Banner,
    Phrase,
    Keyboard,
    Scoreboard
  }
});
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
</style>
