import { delay } from '../rematch/helper.js';

// https://rematch.gitbook.io/handbook/ji-qiao/immer
export default {
  state: {
    1516344826871: { text: 'do stuff', done: true },
    1516344852231: { text: 'do other stuff', done: false },
  },
  reducers: {
    toggleDone (state, id) {
      state[id].done = !state[id].done
    },
    add (state, text) {
      state[Date.now()] = { text, done: false }
    },
    remove (state, id) {
      delete state[id]
    }
  },
  effects: {
    async asyncRemove (id, state) {
      await delay(1000)
      this.remove(id)
    }
  }
}
