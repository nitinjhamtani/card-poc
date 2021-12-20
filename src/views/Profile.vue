<template>
  <v-container>
    <div>profile</div>
    <v-skeleton-loader v-bind="attrs" type="article, actions">
    </v-skeleton-loader>
    <v-skeleton-loader
      v-bind="attrs"
      type="table-heading, list-item-two-line, table-tfoot"
    >
    </v-skeleton-loader>
  </v-container>
</template>
<script>
export default {
  name: 'Profile',
  computed: {},
  data() {
    return {
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    };
  },
  beforeMount() {},
  methods: {},
};
</script>
