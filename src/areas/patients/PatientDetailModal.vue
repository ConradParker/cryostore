<template>
  <v-dialog
    v-model="dialog"
    max-width="1000"
    persistent
  >
    <v-card>
      <v-layout row xs12 wrap>
        <v-flex xs11>
          <PatientDetail />
        </v-flex>
        <v-flex xs1>
          <v-btn left icon @click="$emit('closeButtonClicked')">
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import PatientDetail from './PatientDetail.vue';

export default {
  props: {
    dialog: { type: Boolean, required: true },
  },
  components: { PatientDetail },
};
</script>
