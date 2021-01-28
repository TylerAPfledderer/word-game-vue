import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    misses: 0,
    correct: 0,
    activePhrase: null,
    currentPhraseIndex: null,
    gameResult: null
  },
  mutations: {
    storeActivePhrase: (state, phrase) => state.activePhrase = phrase.toLowerCase(),
    storeCurrentPhraseIndex: (state, index) => state.currentPhraseIndex = index,
    addCorrect: state => state.correct++,
    addMiss: state => state.misses++,
    updateGameResult: (state, result) => state.gameResult = result,
    resetMisses: state => state.misses = 0,
    resetCorrect: state => state.correct = 0,
    clearPhrase: state => state.activePhrase = null
  },
  actions: {
    declareActivePhrase({ commit }, phraseList) {
      let randomIndex = Math.floor(Math.random() * phraseList.length);
      
      // Do not allow a phrase to be repeated twice
      if (randomIndex === this.state.currentPhraseIndex) {
        randomIndex++;
      }
      const randomPhrase = phraseList[randomIndex];
      commit("storeActivePhrase", randomPhrase);
      commit("storeCurrentPhraseIndex", randomIndex);
    },
    resetStates({ commit }) {
      commit('resetMisses');
      commit('resetCorrect');
      commit('clearPhrase');
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
