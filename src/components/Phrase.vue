<template lang="pug">
    #phrase.section
        ul <!-- Phrase Letters looped as list items -->
          li.letter t
          li.letter e
          li.letter s
          li.letter t
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'Phrase'
})
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
    background-color: #76CE82;
    transform: rotate(360deg);
  }
</style>
