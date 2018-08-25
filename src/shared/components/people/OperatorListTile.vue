<template>
  <v-list-tile
    avatar
    ripple
    @click.stop="dialog=true"
  >
    <v-list-tile-avatar>
      <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>Stanley Burgess</v-list-tile-title>
      <v-list-tile-sub-title>Doctor of fertility</v-list-tile-sub-title>
    </v-list-tile-content>
    <OperatorModal :dialog="dialog" @closeButtonClicked="dialog=false" />
  </v-list-tile>
</template>

<script>
import OperatorModal from '@/shared/components/people/OperatorModal.vue';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { OperatorModal },
};
</script>
