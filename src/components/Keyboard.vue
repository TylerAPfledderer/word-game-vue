<template lang="pug">
    #keyboard.section
        .keyboard(v-for="(row, index) in keyboardRows" :key="index")
          <KeyboardButton v-for="(key, id) in row" :key="id" :letter="key"/>
</template>

<script>
import Vue from "vue";
import KeyboardButton from "./KeyboardButton";

export default Vue.extend({
  name: "Keyboard",
  components: {KeyboardButton},
  data() {
    return {
      keyboardRows: [
        ["q","w","e","r","t","y","u","i","o","p"],
        ["a","s","d","f","g","h","j","k","l"],
        ["z","x","c","v","b","n","m"]
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
  .keyrow {
    display: flex;
    justify-content: center;
  }
</style>
