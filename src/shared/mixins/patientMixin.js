import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getPatients();
  },
  computed: {
    ...mapState({ patients: state => state.patient.patients }),
  },
  methods: {
    ...mapActions('patient', ['getPatients']),
  },
};
