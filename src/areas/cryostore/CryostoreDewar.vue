<template>
  <v-card>
    <v-tooltip top>
      <v-btn slot="activator" style="height:160px" block @click="dewarClickHandler">
      <svg :id="dewarSvgId"
        width="97%"
        :height="(size > 80 ? 80 : size) * 2">
      </svg>
      </v-btn>
      <span>Open {{ name }}</span>
    </v-tooltip>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">{{name}}</div>
        <v-list dense>
          <v-list-tile ripple @click.stop="lastAuditDialog=true">
            <v-list-tile-content class="caption">Last Audit:</v-list-tile-content>
            <v-list-tile-content class="align-end caption">
              {{ auditDate }}
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon color="info">info</v-icon>
                <LastAuditModal
                  :dialog="lastAuditDialog"
                  @closeButtonClicked="lastAuditDialog=false"
                />
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile ripple @click.stop="lastEntryDialog=true">
            <v-list-tile-content class="sub-heading">Last Entry:</v-list-tile-content>
            <v-list-tile-content class="align-end caption">
              {{ entryDate }}
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon color="info">info</v-icon>
              </v-btn>
              <LastEntryModal
                :date="entryDate"
                :dialog="lastEntryDialog"
                @closeButtonClicked="lastEntryDialog=false" />
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile ripple @click.stop="lastRemovalDialog=true">
            <v-list-tile-content class="sub-heading">Last Removal:</v-list-tile-content>
            <v-list-tile-content class="align-end caption">
              {{ removalDate }}
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon color="info">info</v-icon>
              </v-btn>
              <LastRemovalModal :dialog="lastRemovalDialog"
                @closeButtonClicked="lastRemovalDialog=false" />
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
import liquidFill from '@/shared/helpers/d3/liquidFill/liquidFillGauge';
import liquidFillConfig from '@/shared/helpers/d3/liquidFill/liquidFillGaugeConfig';
import LastEntryModal from './LastEntryModal.vue';
import LastRemovalModal from './LastRemovalModal.vue';
import LastAuditModal from './LastAuditModal.vue';

export default {
  name: 'CryoStoreDewar',
  data() {
    return {
      lastEntryDialog: false,
      lastRemovalDialog: false,
      lastAuditDialog: false,
    };
  },
  components: {
    LastEntryModal,
    LastRemovalModal,
    LastAuditModal,
  },
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    auditDate: { type: String, required: false },
    entryDate: { type: String, required: false },
    removalDate: { type: String, required: false },
    percentageFull: { type: Number, required: true },
    isError: { type: Boolean, required: true },
    size: { type: Number, required: true },
  },
  computed: {
    dewarSvgId() {
      return `dewarSvg${this.id}`;
    },
  },
  mounted() {
    const config = liquidFillConfig();
    if (this.isError) {
      config.circleColor = '#FF0000';
      config.waveColor = '#FF0000';
    }
    liquidFill(this.dewarSvgId, this.percentageFull, config);
  },
  methods: {
    dewarClickHandler() {
      this.$emit('dewarClicked', this.id);
    },
  },
};
</script>
