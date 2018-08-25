import Vue from 'vue';
import Vuex from 'vuex';

import dewarModule from './modules/dewar';
import patientModule from './modules/patient';
import snackbarModule from './modules/snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dewar: dewarModule,
    snackbar: snackbarModule,
    patient: patientModule,
  },
});
