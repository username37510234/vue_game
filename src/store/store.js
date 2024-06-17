import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      mineState: 'ready'
    }
  },
  mutations: {
    changeMineState (state, value) {
      console.log(state, value)
      if (value != 'mining' || value != 'closed' || value != 'ready') {
        return;
      }
      state.mineState = value;
    },
  }
})

export default store