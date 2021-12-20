<template>
  <v-bottom-navigation
    active-class="no-active"
    app
    fixed
    grow
    v-model="active"
    color="#01d167"
  >
    <v-btn
      v-for="menu in menus"
      :key="menu.id"
      :value="menu.value"
      :to="{path: menu.path}">
      <span>{{menu.title}}</span>
      <v-icon v-if="active == menu.value">{{menu.activeIcon}}</v-icon>
      <v-icon v-else>{{menu.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  props: {
    activeItem: {
      type: String,
      default: 'cards',
    },
  },
  data() {
    return {
      active: 'cards',
      menus: [
        {
          id: 0,
          title: 'Home',
          value: 'home',
          icon: '$vuetify.icons.logo_inactive',
          activeIcon: '$vuetify.icons.logo_active',
          isActive: false,
          path: '/home'
        },
        {
          id: 1,
          title: 'Cards',
          value: 'cards',
          icon: '$vuetify.icons.card_inactive',
          activeIcon: '$vuetify.icons.card_active',
          isActive: false,
          path: '/cards'
        },
        {
          id: 2,
          title: 'Payments',
          value: 'payments',
          icon: '$vuetify.icons.payment_inactive',
          activeIcon: '$vuetify.icons.payment_active',
          isActive: false,
          path: '/payments'
        },
        {
          id: 3,
          title: 'credit',
          value: 'credit',
          icon: '$vuetify.icons.credit_inactive',
          activeIcon: '$vuetify.icons.credit_active',
          isActive: false,
          path: '/credit'
        },
        {
          id: 4,
          title: 'Profile',
          value: 'profile',
          icon: '$vuetify.icons.profile_inactive',
          activeIcon: '$vuetify.icons.profile_active',
          isActive: false,
          path: '/profile'
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style>
span {
  font-size: 9px;
  margin-top: 2.57px;
}
.no-active {
  text-decoration-line: none !important;
}
</style>
