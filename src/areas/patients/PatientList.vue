<template>
  <v-container fluid grid-list-md v-if="patients">
    <v-data-iterator
      :items="PatientList"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm4
        md3
        lg2
      >
      <PatientOverview
        :patient="props.item"
        @patientClicked="patientClickHandler" />
      </v-flex>
    </v-data-iterator>

    <PatientDetailModal
      :dialog="patientDialogOpen"
      @closeButtonClicked="patientDialogOpen=false"
    />
  </v-container>
</template>

<script>
import EventBus from '@/shared/helpers/eventBus';
import sortHelper from '@/shared/helpers/sortHelper';
import patientMixin from '@/shared/mixins/patientMixin';
import PatientOverview from './PatientOverview.vue';
import PatientDetailModal from './PatientDetailModal.vue';

export default {
  data: () => ({
    sortField: 'patientName',
    sortDirection: 'asc',
    filter: '',
    patientDialogOpen: false,
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 12,
    },
  }),
  mixins: [patientMixin],
  components: { PatientOverview, PatientDetailModal },
  methods: {
    patientClickHandler(patientId) {
      EventBus.$emit('patientClicked', patientId);
      this.patientDialogOpen = true;
    },
  },
  computed: {
    PatientList() {
      const localPatients = this.patients;
      return localPatients.sort(sortHelper.compareValues(this.sortField, this.sortDirection))
        .filter(e => (e.patientName)
          .toLowerCase()
          .indexOf((this.filter)
            .toLowerCase()) > -1);
    },
  },
};
</script>

