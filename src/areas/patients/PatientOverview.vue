<template>
  <v-card :color="patient.backgroundColour">
    <v-card-title><h4>{{ patient.patientName }}</h4></v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Status:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ patient.status }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>Nhs #:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ patient.nhsNumber }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="patientClickHandler">
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import patientMixin from '@/shared/mixins/patientMixin';

export default {
  props: {
    patient: { type: Object, required: true },
  },
  mixins: [patientMixin],
  methods: {
    patientClickHandler() {
      this.$emit('patientClicked', this.patient.gs1Id);
    },
  },
};
</script>
