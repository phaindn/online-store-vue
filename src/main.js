// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// require("../node_modules/semantic/dist/semantic.min.css");
// require("../node_modules/semantic/dist/semantic.min.js");
// import "../node_modules/semantic/dist/semantic.min.js";
require("../node_modules/jquery/dist/jquery.min.js");

import $ from "../node_modules/jquery/dist/jquery.min.js";
import jQuery from "../node_modules/jquery/dist/jquery.min.js";
window.jQuery = require("jquery");
import "../node_modules/popper.js/dist/popper.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
require("../node_modules/font-awesome/css/font-awesome.min.css");
require("popper.js");
// require("font-awesome");
require("bootstrap");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});