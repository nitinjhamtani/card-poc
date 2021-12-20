<template>
  <v-app>
    <router-view></router-view>
    <BottomNavigation />
  </v-app>
</template>
<script>
// import Base from '@/views/Base.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';
export default {
  name: 'app',
  components: {
    // Base,
    BottomNavigation
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.v-application--wrap {
  background-color: #0c365a !important;
}
</style>