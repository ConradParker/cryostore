import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getDewars();
  },
  computed: {
    ...mapState({ dewars: state => state.dewar.dewars }),
  },
  methods: {
    ...mapActions('dewar', ['getDewars']),
  },
};
