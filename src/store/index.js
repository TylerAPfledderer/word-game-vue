import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    misses: 5,
    activePhrase: null
  },
  mutations: {
    setActivePhrase (state, phraseList) {
      const randomPhrase = phraseList[Math.floor(Math.random() * phraseList.length)]
      state.activePhrase = randomPhrase;
    }
  }
})
