/* eslint-disable */
import axios from "axios";
export default {
    name: 'WebApi',

    install(Vue) {

        const axiosConfig = {
            baseURL: process.env.VUE_APP_WEB_API
        };

    Vue.prototype.$webapi = axios.create(axiosConfig)
  }
};
