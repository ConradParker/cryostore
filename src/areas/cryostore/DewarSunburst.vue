<template>
  <v-layout row xs12 wrap>
    <v-flex xs12 sm8 md6 lg6>
      <v-container>
        <v-card>
          <div ref="infoPanel"></div>
        </v-card>
      </v-container>
    </v-flex>
    <v-flex xs12 sm4 md6 lg6>
      <div class="d3-panel">
        <div class="breadcrumbs" ref="breadcrumbs"></div>
        <div ref="sunburst"></div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import dewarMixin from '@/shared/mixins/dewarMixin';
import { createSunburst, nodeClick } from '@/shared/helpers/d3/sunburst/sunburst';
import dewarInfoPanel from '@/shared/helpers/d3/sunburst/informationPanel';
import breadcrumbs from '@/shared/helpers/d3/sunburst/breadcrumbs';
import EventBus from '@/shared/helpers/eventBus';

export default {
  data: () => ({
    dewar: {},
  }),
  mounted() {
    EventBus.$on('dewarClicked', (id) => {
      this.dewarClickHandler(id);
    });

    // using javascript handlers here to allow easier (non-vue) reuse of the custom D3 scripts
    this.$refs.sunburst.addEventListener('sunburstNodeClicked', this.sunburstClickEventHandler);
    this.$refs.breadcrumbs.addEventListener('breadcrumbNodeClicked', this.breadcrumbClickEventHandler);
  },
  beforeDestroy() {
    console.log('Removing event listeners');
    this.$refs.sunburst.removeEventListener('sunburstNodeClicked', this.sunburstClickEventHandler);
    this.$refs.breadcrumbs.removeEventListener('breadcrumbNodeClicked', this.breadcrumbClickEventHandler);
    EventBus.$off('dewarClicked');
  },
  mixins: [dewarMixin],
  methods: {
    dewarClickHandler(id) {
      this.dewar = this.dewars.find(dewar => dewar.id === +id);
      const dewarNode = createSunburst(this.$refs.sunburst, JSON.parse(this.dewar.content));
      breadcrumbs(this.$refs.breadcrumbs, dewarNode);
      dewarInfoPanel(this.$refs.infoPanel, dewarNode);
    },
    sunburstClickEventHandler(event) {
      breadcrumbs(this.$refs.breadcrumbs, event.detail);
      dewarInfoPanel(this.$refs.infoPanel, event.detail);
    },
    breadcrumbClickEventHandler(event) {
      nodeClick(event.detail);
      dewarInfoPanel(this.$refs.infoPanel, event.detail);
    },
  },
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
