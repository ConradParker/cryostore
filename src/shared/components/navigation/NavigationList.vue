<template>
  <v-list>
    <v-list-tile
      value="true"
      v-for="(item, i) in items"
      :key="i"
      :to="{name: item.routeName}" v-ripple
    >
      <v-list-tile-action>
        <v-icon v-html="item.icon"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        icon: 'storage',
        title: 'Cryostore',
        routeName: 'cryostore',
      },
      {
        icon: 'people',
        title: 'Patients',
        routeName: 'patients',
      }],
    };
  },
};
</script>
