export default {
  state: {
    counter: 0
  },
  mutations: { // Делается простая логика
    changeCounter (state, payload) {
      state.counter += payload
    }
  },
  actions: { // Ассинхронны действия
    asyncChangeCounter ({commit}, payload) {
      setTimeout(() => {
        commit('changeCounter', payload.counterValue)
      }, payload.timeoutDalay)
    }
  },
  getters: { // Простые действия и получение на отрисовку
    computedCounter (state) {
      return state.counter * 10
    }
  }
}