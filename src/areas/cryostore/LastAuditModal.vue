<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Last Audit
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('closeButtonClicked')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        Last Audit from Dewar &apos;&apos; was on the 12th Aug 2018.
        We can display a bunch of information here in this pop up dialog box.
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
