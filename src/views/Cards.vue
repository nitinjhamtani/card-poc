<template>
  <div>
    <v-card-title class="py-0 pt-10 card-title">
      <v-spacer />
      <v-icon size="25"> $vuetify.icons.logo_active </v-icon>
    </v-card-title>
    <v-card-subtitle class="py-0 card-title">Account balance</v-card-subtitle>
    <v-toolbar
      height="50"
      class="my-toolbar px-0 py-0"
      elevation="0"
      color="rgba(255, 0, 0, 0)">
      <v-btn x-small text class="green-btn"> S$ </v-btn>
      <span class="px-3 amount-txt"> 3,000 </span>
      <v-spacer />
      <v-btn
        x-small
        text
        class="add-card-btn px-0"
        @click.stop="dialog = true">
        <v-icon size="15">$vuetify.icons.circle_plus</v-icon>
        <span class="px-1 py-1 my-0 new-card-btn"> New card </span>
      </v-btn>
    </v-toolbar>
    <v-tabs
      height="30"
      v-model="tab"
      class="px-4 my-tabs"
      :show-arrows="false"
      active-class="my-tab"
      color="white"
      background-color="rgba(0, 0, 0, 0)">
      <v-tabs-slider class="my-tab-slider"></v-tabs-slider>
      <v-tab :ripple="false" key="tab0">My debit cards</v-tab>
      <v-tab :ripple="false" key="tab1">All company cards</v-tab>
    </v-tabs>
    <v-tabs-items
      :touchless="true"
      class="px-0 py-0 my-carousel-items"
      v-model="tab">
      <v-tab-item class="mt-6" key="tab0">
        <carousel
          :paginationSize="6"
          :paginationPadding="3"
          :perPage="1"
          @pageChange="onPageChange"
          paginationActiveColor="#01d167">
          <slide
            :data-index="myDebitCard.id"
            :data-name="myDebitCard.id"
            :style="{opacity: myDebitCard.freeze ? '0.5' :'1'}"
            :key="'slide'+myDebitCard.id"
            v-for="myDebitCard in getMyDebitCardList">
            <v-card elevation="0" class="px-4 py-0">
              <v-card-text class="my-card-text py-0 px-0">
                <div class="py-0 my-card-number-wrapper">
                  <div class="px-3 pt-1 pb-4 my-card-number">
                    <v-icon size="15"> $vuetify.icons.solid_eye_active </v-icon>
                    Show card number
                  </div>
                </div>
                <div class="card-inside px-3">
                  <div class="logo-text">
                    <v-icon size="70"> $vuetify.icons.logo_text_white </v-icon>
                  </div>
                  <div class="card-inside-center">
                    <h1>{{ myDebitCard.firstName }} {{ myDebitCard.lastName }}</h1>
                    <div class="card-number">
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots-num">{{ myDebitCard.LastDigits }}</div>
                      </div>
                    </div>
                    <div class="card-number-dot">
                      <div class="dots-text">
                        {{ myDebitCard.expirationDay }}: 
                        <span class="dots-text-date">
                          {{ myDebitCard.expirationDate }}
                        </span>
                      </div>
                      <div class="dots-text">
                        CVV:  {{ myDebitCard.cvvCode }}
                      </div>
                    </div>
                  </div>
                  <div class="logo-text">
                    <v-icon size="60"> $vuetify.icons.visa_logo_white </v-icon>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </slide>
        </carousel>
      </v-tab-item>
      <v-tab-item class="mt-6" key="tab1">
        <carousel
          :paginationSize="6"
          :paginationPadding="3"
          :perPage="1"
          @pageChange="onPageChange"
          paginationActiveColor="#01d167">
          <slide
            :data-index="myDebitCard.id"
            :data-name="myDebitCard.id"
            :key="'slide2'+myDebitCard.id"
            v-for="myDebitCard in getMyCardList">
            <v-card elevation="0" class="px-4 py-0">
              <v-card-text class="my-card-text py-0 px-0">
                <div class="py-0 my-card-number-wrapper">
                  <div class="px-3 pt-1 pb-4 my-card-number">
                    <v-icon size="15"> $vuetify.icons.solid_eye_active </v-icon>
                    Show card number
                  </div>
                </div>
                <div class="card-inside px-3">
                  <div class="logo-text">
                    <v-icon size="70"> $vuetify.icons.logo_text_white </v-icon>
                  </div>
                  <div class="card-inside-center">
                    <h1>{{ myDebitCard.firstName }} {{ myDebitCard.lastName }}</h1>
                    <div class="card-number">
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="card-number-dot">
                        <div class="dots-num">{{ myDebitCard.LastDigits }}</div>
                      </div>
                    </div>
                    <div class="card-number-dot">
                      <div class="dots-text">
                        {{ myDebitCard.expirationDay }}: 
                        <span class="dots-text-date">
                          {{ myDebitCard.expirationDate }}
                        </span>
                      </div>
                      <div class="dots-text">
                        CVV:  {{ myDebitCard.cvvCode }}
                      </div>
                    </div>
                  </div>
                  <div class="logo-text">
                    <v-icon size="60"> $vuetify.icons.visa_logo_white </v-icon>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </slide>
        </carousel>
      </v-tab-item>
    </v-tabs-items>
    <BottomSheet :halfY="0.64">
      <v-tabs
        centered
        fixed-tabs
        height="114"
        v-model="bottomTab"
        class="px-0 my-bottom-tabs"
        :show-arrows="false"
        :hide-slider="true"
        active-class="my-bottom-tab"
        background-color="#EDF3FF"
        icons-and-text
        style="border-radius: 20px 20px 0px 0px">
        <v-tab
          @click="toggleFreezeCard"
          class="mx-0 px-0">
          <p class="my-bottom-tab-text">{{cardFreeze}}<br />card</p>
          <v-icon size="30">$vuetify.icons.freeze_card_active</v-icon>
        </v-tab>
        <v-tab  class="mx-0 px-0">
          <p class="my-bottom-tab-text">Set spend<br />limit</p>
          <v-icon size="30">$vuetify.icons.spend_limit_active</v-icon>
        </v-tab>
        <v-tab class="mx-0 px-0">
          <p class="my-bottom-tab-text">Add to<br />GPay</p>
          <v-icon size="30">$vuetify.icons.add_gpay_active</v-icon>
        </v-tab>
        <v-tab class="mx-0 px-0">
          <p class="my-bottom-tab-text">Replace<br />card</p>
          <v-icon size="30">$vuetify.icons.replace_card_active</v-icon>
        </v-tab>
        <v-tab
          @click="deleteMyCard"
          class="mx-0 px-0">
          <p class="my-bottom-tab-text">Cancel<br />card</p>
          <v-icon size="30">$vuetify.icons.cancel_card_active</v-icon>
        </v-tab>
      </v-tabs>
      <!-- <v-tabs-items
        :touchless="true"
        class="px-4 py-5 my-tab-items"
        v-model="bottomTab"
      >
        <v-tab-item> -->
      <v-expansion-panels
        class="px-4 py-5 my-tab-items"
        v-model="panel">
        <v-expansion-panel class="mb-5">
          <v-expansion-panel-header
            class="accordion-btn"
            expand-icon="$vuetify.icons.down_arrow_icon"
          >
            <h5 class="header5">
              <v-icon size="22" class="mr-3">$vuetify.icons.card_details</v-icon>
              Card details
            </h5>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Some content
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mb-5">
          <v-expansion-panel-header
            class="accordion-btn"
            expand-icon="$vuetify.icons.down_arrow_icon"
          >
            <h5 class="header5">
              <v-icon size="22" class="mr-3">$vuetify.icons.recent_transactions</v-icon>
              Recent Transactions
            </h5>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-0 py-0">
            <v-list subheader three-line>
              <template v-for="(item, index) in items">
                <v-list-item
                  class="px-0 py-3"
                  v-if="!item.divider"
                  :key="item.id+'item'">
                  <v-list-item-avatar
                    class="mt-2"
                    height="46px"
                    width="46px"
                    :color="item.color"
                  >
                    <v-icon size="16" style="border-radius: initial">
                      {{ item.icon }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h5 class="header5">{{ item.title }}</h5>
                      <v-spacer />
                    </v-list-item-title>
                    <v-list-item-subtitle style="color: #aaaaaa; margin: 5px 0px">
                      {{ item.date }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <div
                        style="
                          height: 18px;
                          width: 22px;
                          background-color: #325baf;
                          border-radius: 20px;
                          padding: 0px 6px;
                          float: left;
                          margin-right: 8px;
                          margin-top: 3px;
                          color: #325baf;
                        "
                      >
                        <v-icon size="10" style="margin-bottom: 1px;">
                          $vuetify.icons.business_card
                        </v-icon>
                      </div>
                      <div
                        style="
                          color: #325baf;
                          font-size: 12px;
                          font-weight: 500;
                          margin-top: 5px;
                        "
                      >
                        {{ item.subtitle }}
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="mx-0 my-0">
                    <v-btn text class="px-0">
                      <span
                        v-if="item.positive"
                        style="
                          color: #01d167;
                          font-size: 14px;
                          font-weight: 600;
                          margin-top: 0px;
                        "
                      >
                        + {{ item.amount }}
                      </span>
                      <span
                        v-else
                        style="
                          color: #000;
                          font-size: 14px;
                          font-weight: 600;
                          margin-top: 0px;
                        "
                      >
                        - {{ item.amount }}
                      </span>
                      <v-icon size="13" class="mx-2">
                        $vuetify.icons.right_arrow_icon
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                ></v-divider>
              </template>
            </v-list>
            <v-btn
              text
              block
              color="#01d167"
              class="view-transaction-btn">
              <span class="px-1 py-1 my-0 new-card-btn"> View all cards  transactions </span>
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
        <!-- </v-tab-item>
      </v-tabs-items> -->
    </BottomSheet>
    <v-dialog
      v-model="dialog"
      width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add new card
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-container class="px-0 py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4">
                  <v-text-field
                    v-model="firstName"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required />
                  <v-text-field
                    v-model="lastName"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required />
                  <v-text-field
                    v-model="cardType"
                    :rules="cardTypeRules"
                    label="Card Type"
                    required />
                  <v-text-field
                    v-model="cardNumber"
                    :rules="cardNumberRules"
                    label="Card Number"
                    required />
                  <v-text-field
                    v-model="cvvCode"
                    :rules="cardCVVNumberRules"
                    label="Card CVV Number"
                    required />
                  <input
                    label="Card Day"
                    type="date"
                    required
                    v-model="expirationDate" />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-0 py-0">
          <v-btn
            class="my-3 mx-3"
            color="error"
            @click="dialog = false">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="my-3 mx-3"
            color="primary"
            @click="addNewCard">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {Carousel, Slide} from 'vue-carousel';
import BottomSheet from '../components/BottomSheet.vue';
import {cardDetails} from "@/mixins/cardDetails";

export default {
  name: 'Cards',
  components: {
    Carousel,
    Slide,
    BottomSheet,
  },
  mixins: [cardDetails],
  data() {
    return {
      dialog: false,
      sheet: true,
      tab: null,
      panel: [0, 1],
      bottomTab: null,
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      items: [
        {
          id: 0,
          icon: '$vuetify.icons.file_storage',
          color: '#009dff1a',
          amount: 'S$ 150',
          positive: 1,
          title: 'Hamleys',
          date: '20-May-20',
          subtitle: 'Refund on debit card',
        },
        {divider: true, inset: true},
        {
          id: 1,
          icon: '$vuetify.icons.flight_icon',
          color: '#00d6b51a',
          amount: 'S$ 150',
          positive: 0,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Hamleys',
          date: '20-May-20',
          subtitle: 'Charged to debit card',
        },
        {divider: true, inset: true},
        {
          id: 2,
          icon: '$vuetify.icons.mega_phone_icon',
          color: '#f251951a',
          amount: 'S$ 150',
          positive: 0,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Hamleys',
          date: '20-May-20',
          subtitle: 'Charged to debit card',
        },
        {divider: true, inset: true},
        {
          id: 3,
          icon: '$vuetify.icons.file_storage',
          color: '#009dff1a',
          amount: 'S$ 150',
          positive: 0,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Hamleys',
          date: '20-May-20',
          subtitle: 'Charged to debit card',
        },
      ],
      cardFreeze: 'Freeze',
      cardItem:  {},
      cardList: [],
      // form fields
      valid: false,
      cardId: null,
      firstName: '',
      lastName: '',
      cardType: '',
      cvvCode: '',
      cardNumber: '',
      expirationDate: '',
      nameRules: [
        v => !!v || 'Field is required',
        v => v.length <= 10 || 'Field must have less than 10 characters',
      ],
      cardTypeRules: [
        v => !!v || 'Field is required',
        v => v?.length <= 5 || 'Type must be less than 5 characters',
        v => v?.length <= 5 || 'Type must be less than 5 characters',
        v => isNaN(v) || 'Only characters are allowed',
      ],
      cardNumberRules: [
        v => !!v || 'Number is required',
        v => !isNaN(v) || 'Number is required',
        v => v?.length <= 16 || 'Card Number must be 16 digits',
        v => v?.length >= 16 || 'Card Number must be 16 digits',
      ],
      cardCVVNumberRules: [
        v => !!v || 'Number is required',
        v => !isNaN(v) || 'Number is required',
        v => v?.length <= 3 || 'CVV must be 3 digits',
        v => v?.length >= 3 || 'CVV must be 3 digits',
      ],
    };
  },
  async mounted() {
    await this.fetch()
  },
  methods: {
    async fetch()  {
      await this.fetchMyDebitCardList()
      await this.fetchMyCardList()
    },
    async fetchMyDebitCardList() {
      await this.$store.dispatch("getMyDebitCardList", {
          vm: this,
      })
    },
    async fetchMyCardList() {
      await this.$store.dispatch("getMyCardList", {
          vm: this,
      })
    },
    async addNewCard() {
      let formData  = {}
      let newId  =  5+this.getMyDebitCardList.length++
      if (this.valid) {
        formData  =  {
          id: newId,
          description: "Take Dog for walk",
          freeze: false,
          firstName: this.firstName.charAt(0).toUpperCase()+this.firstName.slice(1),
          lastName: this.lastName.charAt(0).toUpperCase()+this.lastName.slice(1),
          cardNumber: this.cardNumber,
          expirationDate: this.expirationDate,
          expirationDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(this.expirationDate).getDay()],
          LastDigits: this.cardNumber.slice(12, 16),
          cvvCode: this.cvvCode,
          type: this.cardType
        }
        await this.$store.dispatch("addCard", {
          formData,
          vm: this,
        })
        await this.fetch()
        this.firstCard()
        this.firstName= '',
        this.lastName= '',
        this.cardType= '',
        this.cvvCode= '',
        this.cardNumber= '',
        this.expirationDate= '',
        this.dialog = false
      }
    },
    async deleteMyCard() {
      if (this.cardId) {
        await this.$store.dispatch("deleteCard", {
          id: this.cardId,
          vm: this,
        })
        await this.fetch()
        this.firstCard()
      }
    },
    firstCard() {
      this.cardItem = this.getMyDebitCardList[0]
      this.cardId = this.getMyDebitCardList[0].id
      this.cardFreeze = !this.getMyDebitCardList[0].freeze ? 'Freeze' : 'Un-Freeze'
    },
    async toggleFreezeCard() {
      if (!this.cardId) {
        this.firstCard()
      }
      this.cardItem.freeze = !this.cardItem.freeze
      this.cardFreeze = !this.cardItem.freeze ? 'Freeze' : 'Un-Freeze'
      await this.$store.dispatch("freezeCard", {
        id: this.cardId,
        data: this.cardItem,
        vm: this,
      })
    },
    onPageChange(e) {
      this.cardItem = this.getMyDebitCardList[e]
      this.cardId = this.cardItem.id
      this.cardFreeze = !this.cardItem.freeze ? 'Freeze' : 'Un-Freeze'
    },
  },
  computed: {
    getMyDebitCardList() {
      let list = this.$store.getters?.getMyDebitCardList
      return list
    },
    getMyCardList() {
      return this.$store.getters?.getMyCardList
    },
  },
};
</script>
<style scoped>
.my-tab-items {
  background-color: #ffffff !important;
}
.VueCarousel-slide .v-card,
.my-carousel-items,
.container .v-card {
  background-color: transparent !important;
}
.card-title {
  color: #ffffff !important;
}
.green-btn {
  background-color: #01d167 !important;
  color: #ffffff !important;
  font-size: 10px;
  border-radius: 3px;
  font-weight: 600;
}
.my-toolbar .v-toolbar__content {
  padding: 0px !important;
  height: auto !important;
}
.amount-txt {
  color: #ffffff !important;
  font-size: 20px;
  font-weight: 800;
}
.add-card-btn .new-card-btn {
  color: #23cefd !important;
  font-size: 12px;
  font-weight: 800;
  text-transform: capitalize;
}
.my-tab-slider {
  background-color: #23cefd !important;
}
.v-tabs-slider-wrapper {
  border: 2px solid #23cefd !important;
}
.my-tabs .v-tab {
  font-size: 12px;
  color: #ffffff !important;
  text-transform: none !important;
  opacity: 0.5;
  padding: 0px;
  margin-right: 30px;
}
.my-tabs .v-tab.v-tab--active {
  opacity: 1;
  font-weight: 800;
  border-bottom: 3px solid #23cefd;
}
.my-bottom-tab.v-tab.v-tab--active {
  opacity: 1;
  border: none !important;
}
.my-bottom-tabs .my-bottom-tab-text {
  text-transform: none !important;
  color: #0c365a !important;
  font-size: 12px;
  margin-top: 8px;
}
.my-bottom-tabs .v-tab {
  min-width: auto !important;
}
.v-slide-group__prev.v-slide-group__prev--disabled {
  display: none !important;
}
.my-tabs .v-tab.v-tab--active::before {
  opacity: 0 !important;
}
.my-carousel-items .VueCarousel-dot--active {
  width: 14px !important;
  border-radius: 12px !important;
}
.my-card-number-wrapper {
  display: flex;
  flex-direction: row-reverse;
  z-index: -8;
  position: relative;
}
.my-card-number {
  background-color: #ffffff;
  color: #01d167;
  font-size: 12px;
  font-weight: 800;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-inside {
  display: flex;
  flex-direction: column;
  color: #ffffff !important;
  background-color: #01d167;
  border-radius: 14px !important;
  margin-top: -13px !important;
}
.card-number-dot {
  margin-right: 20px;
}
.card-number {
  margin-top: 22px;
  margin-bottom: 8px;
}
.card-number,
.card-number-dot {
  display: flex;
  align-items: center;
}
.card-number-dot .dots {
  height: 8px;
  width: 8px;
  margin-right: 5px;
  background-color: #ffffff;
  border-radius: 100%;
}
.dots-num {
  letter-spacing: 5px;
  font-weight: 800;
}
.dots-text {
  letter-spacing: 1px;
  font-weight: 800;
  margin-right: 35px;
}
.dots-text-date {
  letter-spacing: 2px;
  font-weight: 800;
  font-size: 14px;
}
.dots-text-astrik {
  letter-spacing: 4px;
  font-weight: 600;
  font-size: 35px;
}
.logo-text {
  align-self: flex-end;
}
.accordion-btn {
  background-color: #fafcff;
}
.header5{
  font-size: 15px;
}
.bar {
  width: 0px !important;
  height: 0px !important;
  background-color: rgba(0, 0, 0, 0.12) !important;
}
.view-transaction-btn {
  text-transform: capitalize !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  background-color: #EDFFF5 !important;
  border-color: #DDFFEC  !important;
}
.view-transaction-btn span {
  font-size: 12px !important;
}
</style>
