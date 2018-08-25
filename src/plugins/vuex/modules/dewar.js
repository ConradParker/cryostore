import dewarData from '@/data/dewars';

/* Allow re-assigning parameters as this is how Vuex state works */
/* eslint no-param-reassign: 0 */
export default {
  namespaced: true,
  state: {
    dewars: [],
  },
  mutations: {
    mutateDewars(state, dewars) {
      state.dewars = dewars;
    },
    mutateDewar(state, dewar) {
      const idx = state.dewars.map(p => p.id).indexOf(dewar.id);
      state.dewars.splice(idx, 1, dewar);
    },
  },
  getters: {
    // sortedDewars(state, sortItem) {
    //   return state.dewars.sort(sortHelper.
    // compareValues(sortItem.sortField, sortItem.sortDirection));
    // },
  },
  actions: {
    getDewars({ commit }) {
      // Instead of this timeout, call the API
      window.setTimeout(() => {
        commit('mutateDewars', dewarData);
      }, 500);

      // axios.get('/api/dewar')
      //   .then(response => commit('mutateDewar', response.data))
      //   .catch(console.error);
    },
    updateDewar({ commit }, dewar) {
      // axios.put(`/api/dewar/${item.id}`, item)
      //   .then((response) => {
      //     commit('mutateDewar', { item: response.data });
      //   }, (err) => {
      //     console.log(err);
      //   });
      commit('mutateDewar', dewar);
    },
  },
};
