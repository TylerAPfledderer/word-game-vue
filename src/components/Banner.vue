<template lang="pug">
    #banner.section
        h2.header Guess this Phrase!
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'Banner'
})
</script>

<style lang="scss" scoped>

  .header {
    color: var(--color-start);
  }

</style>
