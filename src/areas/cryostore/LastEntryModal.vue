<template>
  <v-dialog
    v-model="dialog"
    max-width="490"
  >
    <v-card>
      <v-card-title class="headline">
        Last Entry {{date}}
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('closeButtonClicked')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <dl>
          <dt><a href="#">Visotube 1</a></dt>
          <dd><a href="#">Straw 1</a></dd>
          <dd><a href="#">Straw 2</a></dd>
          <dd><a href="#">Straw 3</a></dd>
          <dt><a href="#">Visotube 2</a></dt>
          <dd><a href="#">Straw 4</a></dd>
          <dd><a href="#">Straw 5</a></dd>
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
    date: { type: String, required: true },
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
