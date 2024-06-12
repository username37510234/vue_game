import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      mineState: 'ready'
    }
  },
  mutations: {
    ongoingMining (state) {
      state.mineState = 'mining'
    },
    closeMining (state) {
      state.mineState = 'closed'
    },
    readyMining (state) {
      state.mineState = 'ready'
    },
  }
})

export default store