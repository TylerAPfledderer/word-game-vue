<template lang="pug">
    #keyboard.section
        .keyrow
            button q
            button w
            button e
            button r
            button t
            button y
            button u
            button i
            button o
            button p
        .keyrow
            button a
            button s
            button d
            button f
            button g
            button h
            button j
            button k
            button l
        .keyrow
            button z
            button x
            button c
            button v
            button b
            button n
            button m
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Keyboard"
});
</script>

<style lang="scss" scoped>
  .keyrow {
    display: flex;
    justify-content: center;
  }

  .chosen {
    background: var(--color-neutral);
    border-radius: 5px;
    font-size: var(--font-size-medium);
    color: #ffffff;
  }
</style>
