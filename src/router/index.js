import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Productpage from "@/components/productDetail"

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "Product",
      component: Productpage
    }
  ]
});
