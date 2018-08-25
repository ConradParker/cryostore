import patientData from '@/data/patients';

/* Allow re-assigning parameters as this is how Vuex state works */
/* eslint no-param-reassign: 0 */
export default {
  namespaced: true,
  state: {
    patients: [],
  },
  mutations: {
    mutatePatients(state, patients) {
      state.patients = patients;
    },
    mutatePatient(state, patient) {
      const idx = state.patients.map(p => p.id).indexOf(patient.id);
      state.patients.splice(idx, 1, patient);
    },
  },
  getters: {
    // sortedDewars(state, sortItem) {
    //   return state.dewars.sort(sortHelper.
    // compareValues(sortItem.sortField, sortItem.sortDirection));
    // },
  },
  actions: {
    getPatients({ commit }) {
      // Instead of this timeout, call the API
      window.setTimeout(() => {
        commit('mutatePatients', patientData);
      }, 500);

      // axios.get('/api/dewar')
      //   .then(response => commit('mutateDewar', response.data))
      //   .catch(console.error);
    },
    updatePatient({ commit }, patient) {
      // axios.put(`/api/dewar/${item.id}`, item)
      //   .then((response) => {
      //     commit('mutateDewar', { item: response.data });
      //   }, (err) => {
      //     console.log(err);
      //   });
      commit('mutatePatient', patient);
    },
  },
};
