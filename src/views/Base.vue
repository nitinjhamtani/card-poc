<template>
  <v-container class="main-container px-0 py-0">
    <!-- <TopToolbar /> -->
    <!-- <v-main> -->
      <!-- <router-view></router-view> -->
    <!-- </v-main> -->
    <!-- <BottomNavigation /> -->
  </v-container>
</template>

<script>
// import TopToolbar from '@/components/TopToolbar.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';
export default {
  name: 'Base',
  components: {
    // TopToolbar,
    BottomNavigation,
  },
  computed: {},
  // mixins: [todoMixin],
  data() {
    return {};
  },
  beforeMount() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.main-container {
  // background-color: #0c365a !important;
}
</style>
