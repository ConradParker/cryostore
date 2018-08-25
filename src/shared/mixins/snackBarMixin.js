import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({ snack: state => state.snackbar.snack }),
  },
  methods: {
    ...mapMutations({ setSnack: 'snackbar/setSnack' }),
    displaySnackbar(message, color) {
      this.setSnack({
        message,
        color,
      });
    },
  },
};
