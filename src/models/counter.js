import { delay } from '../rematch/helper.js';

export default {
  state: 1,
  reducers: {
    increment: (state, payload) => state + 1,
  },
  effects: {
    async incrementAsync (payload, state) {
      await delay(1000)
      this.increment()
    }
  }
}
