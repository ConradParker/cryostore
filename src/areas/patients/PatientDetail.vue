<template>
  <v-layout v-if="patient" row xs12 wrap>
    <v-flex xs12 sm8 md6 lg6>
      <v-container>
        <v-card>
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
        </v-card>
      </v-container>
    </v-flex>
    <v-flex xs12 sm4 md6 lg6>
      <div class="d3-panel">
        <svg ref="forceElement"></svg>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import EventBus from '@/shared/helpers/eventBus';
import force from '@/shared/helpers/d3/force/forceDiagram';
import patientMixin from '@/shared/mixins/patientMixin';

export default {
  data: () => ({
    patient: {},
  }),
  created() {
    EventBus.$on('patientClicked', (id) => {
      this.patientClickHandler(id);
    });
  },
  beforeDestroy() {
    EventBus.$off('patientClicked');
  },
  methods: {
    patientClickHandler(id) {
      this.patient = this.patients.find(patient => patient.gs1Id === +id);
      force(this.$refs.forceElement, this.patient.forceData);
    },
  },
  mixins: [patientMixin],
};
</script>

<style scoped>
  .d3-panel {
      display: block;
      background-color: #666666;
      border-radius: 4px;
      padding: 3px;
      margin: 8px;
  }
  .container {
    max-width: 800px;
  }
</style>
