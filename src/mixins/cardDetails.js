// const axios = require("axios");
import axios from 'axios';
const apiUrl = "http://localhost:3000";
let localStorageSetting = true;

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

export const cardDetails = {
  methods: {
    getLocalStorageSetting() {
      return localStorageSetting;
    },
    setLocalStorageSetting(setting) {
      localStorageSetting = setting;
    },
    getCardList() {
      return axios.get(`${apiUrl}/cardDetails`);
    },
    addCard(data) {
      // console.log("cardDetailscardDetails", data, cardDetails);
      data.id = uuidv4()
      return axios.post(`${apiUrl}/cardDetails`, data);
    },
    deleteCard(id) {
      return axios.delete(`${apiUrl}/cardDetails/${id}`);
    },
    freezeCard(id, data) {
      return axios.put(`${apiUrl}/cardDetails/${id}`, data);
    },
  },
};
