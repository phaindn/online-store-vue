//store.js
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

const state = {
    categories: [
        "Accessories",
        "Clothes",
        "Cosmetics",
        "Device",
        "Machine",
        "Health care"
    ]
};

export default new Vuex.Store({
    state,
    mutations,
    getters
});