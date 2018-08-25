<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app right>
      <NavigationList />
    </v-navigation-drawer>
    <router-view name="toolbar" @drawerSwitcher="drawerSwitchHandler" />
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>Kustodian &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationList from '@/shared/components/navigation/NavigationList.vue';

export default {
  name: 'App',
  components: { NavigationList },
  data: () => ({
    drawer: false,
  }),
  methods: {
    drawerSwitchHandler() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
