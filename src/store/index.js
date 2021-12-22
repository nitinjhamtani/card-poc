/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const apiUrl = "http://localhost:3000";
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r =
        (parseFloat(
          "0." +
            Math.random()
              .toString()
              .replace("0.", "") +
            new Date().getTime()
        ) *
          16) |
        0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export default new Vuex.Store({
  state: {
    myDebitCard: {
      list: [],
      loading: false
    },
    myCard: {
      list: [],
      loading: false
    },
  },
  mutations: {
    setMyDebitCardList(state, payload) {
      state.myDebitCard.list = payload
    },
    setMyDebitCardLoading(state, payload) {
      state.myDebitCard.loading = payload
    },
    setMyCardList(state, payload) {
      state.myCard.list = payload
    },
    setMyCardLoading(state, payload) {
      state.myCard.loading = payload
    },
  },
  getters:  {
    getMyDebitCardList: (state) =>{
      return state.myDebitCard.list.filter(e => e.type).reverse();
    },
    getMyCardList: (state) =>{
      return state.myCard.list
    },
  },
  actions: {
    startMyDebitCardLoading({dispatch, commit}) {
      commit("setMyDebitCardLoading", true)
    },
    stopMyDebitCardLoading({dispatch, commit}) {
      commit("setMyDebitCardLoading", false)
    },
    async getMyDebitCardList({dispatch, commit}, {vm}) {
      // commit("startMyDebitCardLoading", true)
      const {data} = await vm.$webapi.get(`${apiUrl}/cardDetails`).catch((error) => {
          dispatch("stopMyDebitCardLoading");
          return Promise.reject(error);
      });
      commit("setMyDebitCardList", data)
      setTimeout(() => dispatch("stopMyDebitCardLoading"), 300);
    },
    startMyCardLoading({dispatch, commit}) {
      commit("setMyCardLoading", true)
    },
    stopMyCardLoading({dispatch, commit}) {
      commit("setMyCardLoading", false)
    },
    async getMyCardList({dispatch, commit}, {vm}) {
      // commit("startMyCardLoading", true)
      const {data} = await vm.$webapi.get(`${apiUrl}/cardDetails`).catch((error) => {
          dispatch("stopMyCardLoading");
          return Promise.reject(error);
      });
      commit("setMyCardList", data)
      setTimeout(() => dispatch("stopMyCardLoading"), 300);
    },
    async addCard({dispatch, commit}, {formData, vm}) {
      formData.id = uuidv4()
      const {data} = await vm.$webapi.post(`${apiUrl}/cardDetails`, formData).catch((error) => {
          dispatch("stopMyDebitCardLoading");
          return Promise.reject(error);
      });
      setTimeout(() => dispatch("stopMyDebitCardLoading"), 300);
    },
    async deleteCard({dispatch, commit}, {id, vm}) {
      // return axios.delete(`${apiUrl}/cardDetails/${id}`);
      await vm.$webapi.delete(`${apiUrl}/cardDetails/${id}`).catch((error) => {
          dispatch("stopMyDebitCardLoading");
          return Promise.reject(error);
      });
      setTimeout(() => dispatch("stopMyDebitCardLoading"), 300);
    },
    async freezeCard({dispatch, commit}, {id, data, vm}) {
      // return axios.put(`${apiUrl}/cardDetails/${id}`, data);
      await vm.$webapi.put(`${apiUrl}/cardDetails/${id}`, data).catch((error) => {
        dispatch("stopMyDebitCardLoading");
        return Promise.reject(error);
      });
      setTimeout(() => dispatch("stopMyDebitCardLoading"), 300);
    },
  },
  modules: {}
});
