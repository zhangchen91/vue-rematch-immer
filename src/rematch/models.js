// function to create a one second delay
const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time))

export const count = {
  state: 0,
  reducers: {
    increment (state, payload) {
      return state + 1
    }
  },
  effects: {
    async incrementAsync (payload, state) {
      await delay(1000)
      this.increment()
    }
  }
}
