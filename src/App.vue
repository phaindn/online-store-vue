<template>
  <div id="app">
    <!-- <img src="./assets/v_logo.png"> -->
    <MenuBar></MenuBar>
    <router-view></router-view>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import store from "./vuex/store";
import FooterSection from "./components/FooterSection";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import ViewItem from "./components/ViewItem";
import $ from "jquery";
window.jQuery = require("jquery");

export default {
  name: "App",
  store,
  components: {
    FooterSection,
    MenuBar
  }
};
</script>

<style>
/* @import url("../node_modules/semantic/dist/semantic.min.css"); */
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("../node_modules/font-awesome/css/font-awesome.min.css");
</style>
