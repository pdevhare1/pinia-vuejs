import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  actions: {
    countPlus() {
      this.count++;
    },
    countMinus() {
      this.count--;
    },
  },
  getters: {
    EvenOrOdd: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});
