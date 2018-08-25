import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/areas/home/Home.vue';
import DefaultToolbar from '@/shared/components/toolbars/DefaultToolbar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        toolbar: DefaultToolbar,
      },
      props: { toolbar: { title: 'Kustodian' } },
    },
    {
      path: '/cryostore',
      name: 'cryostore',
      components: {
        default: () => import(/* webpackChunkName: "CryostoreDewars" */ '@/areas/cryostore/CryostoreDewars.vue'),
        toolbar: DefaultToolbar,
      },
      props: { toolbar: { title: 'Cambridge Cryostore' } },
    },
    {
      path: '/patients',
      name: 'patients',
      components: {
        default: () => import(/* webpackChunkName: "Patients" */ '@/areas/patients/PatientList.vue'),
        toolbar: DefaultToolbar,
      },
      props: { toolbar: { title: 'Patients' } },
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import(/* webpackChunkName: "About" */ '@/areas/home/About.vue'),
        toolbar: DefaultToolbar,
      },
      props: { toolbar: { title: 'About Cryostore' } },
    },
  ],
});
