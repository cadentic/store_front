import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import AddProduct from "./views/AddProduct.vue";
import Adminpanel from "./views/AdminPanel.vue";
import Payment from "./views/Payment.vue";
import Product from "./views/Products.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/addProduct/:type",
      name: "addProduct",
      component: AddProduct
    },
    {
      path: "/adminpanel",
      name: "adminpanel",
      component: Adminpanel
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product
    }
  ]
});
