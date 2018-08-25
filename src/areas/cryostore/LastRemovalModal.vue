<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Last Removal
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('closeButtonClicked')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <dl>
          <dt><a href="#">Visotube 5</a></dt>
          <dd><a href="#">Straw 10</a></dd>
          <dd><a href="#">Straw 12</a></dd>
          <dd><a href="#">Straw 13</a></dd>
          <dt><a href="#">Visotube 6</a></dt>
          <dd><a href="#">Straw 14</a></dd>
          <dd><a href="#">Straw 15</a></dd>
        </dl>
      </v-card-text>

      <v-list two-line>
        <v-subheader>Operator</v-subheader>
        <v-divider></v-divider>
        <OperatorListTile />
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import OperatorListTile from '@/shared/components/people/OperatorListTile.vue';

export default {
  props: {
    dialog: { type: Boolean, required: true },
  },
  components: { OperatorListTile },
};
</script>

<style scoped>
dl {
    margin-left: 10px;
}
dt {
  margin-left: 20px;
}
dd {
  margin-left: 30px;
}
</style>
