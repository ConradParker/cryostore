<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-side-icon @click.stop="drawerSwitch"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip left>
      <v-btn icon :to="{name: 'cryostore'}" slot="activator">
        <v-icon>undo</v-icon>
      </v-btn>
      <span>Back to dashboard</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    drawerSwitch() {
      this.$emit('drawerSwitcher');
    },
  },
};
</script>
