<template lang="pug">
    #overlay.start(style="display: none;")
        h2.title Wheel of Success
        h3#js-end-statement &nbsp
        button#js-btn-reset Start Game
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Overlay",
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

  #js-btn-reset {
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
