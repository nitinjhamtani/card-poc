import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LogoTextWhite from './icons/logo-text-white.vue';
import LogoActive from './icons/logo-active.vue';
import LogoInactive from './icons/logo-inactive';
import CardActive from './icons/card-active';
import CardInactive from './icons/card-inactive';
import PaymentActive from './icons/payment-active';
import PaymentInactive from './icons/payment-inactive';
import CreditActive from './icons/credit-active';
import CreditInactive from './icons/credit-inactive';
import ProfileActive from './icons/profile-active';
import ProfileInactive from './icons/profile-inactive';
import CirclePlus from './icons/circle-plus';
import SolidEyeActive from './icons/solid-eye-active';
import VisaLogoWhite from './icons/visa-logo-white';
import FreezeCardActive from './icons/freeze-card-active';
import SpendLimitActive from './icons/spend-limit-active';
import AddGPayActive from './icons/add-gpay-active';
import ReplaceCardActive from './icons/replace-card-active';
import CancelCardActive from './icons/cancel-card-active';
import CardDetails from './icons/card-details.vue';
import RecentTransactions from './icons/recent-transactions';
import DownArrowIcon from './icons/down-arrow-icon';
import UpArrowIcon from './icons/down-arrow-icon';
import FileStorage from './icons/file-storage.vue';
import FlightIcon from './icons/flight-icon.vue';
import MegaPhoneIcon from './icons/mega-phone-icon.vue';
import BusinessCard from './icons/business-card.vue';
import RightArrowIcon from './icons/right-arrow-icon.vue';
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      visa_logo_white: {
        component: VisaLogoWhite,
      },
      logo_text_white: {
        component: LogoTextWhite,
      },
      logo_active: {
        component: LogoActive,
      },
      logo_inactive: {
        component: LogoInactive,
      },
      card_active: {
        component: CardActive,
      },
      card_inactive: {
        component: CardInactive,
      },
      payment_active: {
        component: PaymentActive,
      },
      payment_inactive: {
        component: PaymentInactive,
      },
      credit_active: {
        component: CreditActive,
      },
      credit_inactive: {
        component: CreditInactive,
      },
      profile_active: {
        component: ProfileActive,
      },
      profile_inactive: {
        component: ProfileInactive,
      },
      circle_plus: {
        component: CirclePlus,
      },
      solid_eye_active: {
        component: SolidEyeActive,
      },
      freeze_card_active: {
        component: FreezeCardActive,
      },
      spend_limit_active: {
        component: SpendLimitActive,
      },
      add_gpay_active: {
        component: AddGPayActive,
      },
      replace_card_active: {
        component: ReplaceCardActive,
      },
      cancel_card_active: {
        component: CancelCardActive,
      },
      card_details: {
        component: CardDetails,
      },
      recent_transactions: {
        component: RecentTransactions,
      },
      down_arrow_icon: {
        component: DownArrowIcon,
      },
      up_arrow_icon: {
        component: UpArrowIcon,
      },
      right_arrow_icon: {
        component: RightArrowIcon,
      },
      file_storage: {
        component: FileStorage,
      },
      flight_icon: {
        component: FlightIcon,
      },
      mega_phone_icon: {
        component: MegaPhoneIcon,
      },
      business_card: {
        component: BusinessCard,
      },
    },
  },
});
