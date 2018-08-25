<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-items>
      <v-btn flat dark icon :to="{name: 'home'}">
        <img src="@/assets/logo.png" alt="Kustodian">
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-title v-text="title">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="drawerSwitch"></v-toolbar-side-icon>
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
