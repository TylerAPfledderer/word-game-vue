import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    misses: 0,
    activePhrase: null
  },
  mutations: {
    storeActivePhrase: (state, phrase) => state.activePhrase = phrase.toLowerCase(),
    addMiss: state => state.misses++
  },
  actions: {
    storeActivePhrase({ commit }, phraseList) {
      const randomPhrase = phraseList[Math.floor(Math.random() * phraseList.length)]
      commit("storeActivePhrase", randomPhrase);
    }
  },
  getters: {
    getPhraseArray: state => {
      // Prevent faulty action on intial load as activePhrase defaults to 'null'
      if (!state.activePhrase) {
        return;
      }
      const phraseArr = state.activePhrase.split("");
      let letterList = [];
      phraseArr.forEach((letter) => {
        if (letter === " ") {
          return letterList.push({className: "space", text: ""});
        }
        letterList.push({className: "letter", text: letter});
      });
      return letterList;
    }
  }
})
