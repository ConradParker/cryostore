/* Allow re-assigning parameters as this is how Vuex works */
/* eslint no-param-reassign: 0 */

export default {
  namespaced: true,
  state: {
    snack: {
      message: '',
      color: '',
    },
  },
  mutations: {
    setSnack(state, snack) {
      state.snack = snack;
    },
  },
};
