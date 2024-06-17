import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      mineState: 'ready',
      minesMap: Array,
    }
  },
  mutations: {
    changeMineState (state, value) {
      const list = ['mining', 'closed', 'ready']
      if (list.includes(value)) {
        state.mineState = value;
      }
    },
    makeMineMaps (state, {row, cell, mines}) {
      let count = 0;
      const size = row * cell;
      const MineArray = []
      state.minesMap = Array.from(Array(row), ()=> Array(cell))
      for (let i=0; i < row; i++) {
        let tmpArray = []
        for (let j=0; j < cell; j++) {
          let flag = false;
          if (Math.random() * (size-(i*10 + j)) <= mines) {
            flag = true;
            mines--;
          }
          tmpArray.push({
            mine: flag,
            clear: false,
            install: 'none',
          })
          count++;
        }
        MineArray.push(tmpArray)
      }
      state.minesMap = MineArray
    },
    resetMines (state) {
      state.mineState = 'ready';
      state.minesMap = [];
    },
  }
})

export default store