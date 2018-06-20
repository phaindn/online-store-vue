import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home";
import ViewItem from "@/components/ViewItem";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/item",
            name: "ViewItem",
            component: ViewItem
        }
    ]
});