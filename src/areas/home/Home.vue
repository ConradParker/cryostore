<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout id="logo" column align-center>
        <img src="@/assets/logo-large.jpg" alt="Kustodian" class="mb-5">
        <blockquote>
          <footer>
            <small>
              <em>&mdash;&nbsp;of course we are!</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    d3.select('#logo')
      .transition()
      .delay(2000)
      .duration(1000)
      .ease(d3.easeLinear)
      .style('opacity', 0)
      .on('end', () => { this.$router.push('cryostore'); });
  },
};
</script>

<style scoped>
</style>
