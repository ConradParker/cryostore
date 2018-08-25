<template>
  <v-container fluid grid-list-md v-if="dewars">
    <v-data-iterator
      :items="dewars"
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
      <CryostoreDewar
        :id="props.item.id"
        :name="props.item.name"
        :auditDate="props.item.lastAudit.date"
        :entryDate="props.item.lastEntry.date"
        :removalDate="props.item.lastRemoval.date"
        :percentageFull="props.item.percentageFull"
        :isError=props.item.isError
        :size=props.item.size
        @dewarClicked="dewarClickHandler" />
      </v-flex>
    </v-data-iterator>

    <DewarContentModal
      :dialog="dewarContentDialog"
      @closeButtonClicked="dewarContentDialog=false"
    />
  </v-container>
</template>

<script>
import dewarMixin from '@/shared/mixins/dewarMixin';
import EventBus from '@/shared/helpers/eventBus';
import DewarContentModal from './DewarContentModal.vue';
import CryostoreDewar from './CryostoreDewar.vue';

export default {
  data: () => ({
    dewarContentDialog: false,
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 12,
    },
  }),
  mixins: [dewarMixin],
  components: { CryostoreDewar, DewarContentModal },
  methods: {
    dewarClickHandler(dewarId) {
      EventBus.$emit('dewarClicked', dewarId);
      this.dewarContentDialog = true;
    },
  },
};
</script>
