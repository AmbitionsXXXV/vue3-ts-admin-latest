import { defineStore } from "pinia"

const useCountStore = defineStore("counter", {
  state: () => ({
    counter: 10969,
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
  },
  actions: {
    changeCounterAction(newCounter: number) {
      this.counter = newCounter
    },
  },
})

export default useCountStore
