<template>
  <v-app>
    <router-view></router-view>
    <BottomNavigation />
  </v-app>
  <!-- <div>
    <LeftNavigation />
    <v-main class="secondary_50 pt-16 d-flex flex-column">
      <v-container fluid class="pa-5 application-container flex-grow-1">
        <v-row>
          <v-col class="pt-0">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div> -->
</template>
<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
// import LeftNavigation from '@/components/LeftNavigation.vue';
export default {
  name: 'app',
  components: {
    BottomNavigation,
    // LeftNavigation
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