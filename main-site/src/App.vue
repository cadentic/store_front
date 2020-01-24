<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home";
import Products from "./views/Products";
import Payment from "./views/Payment";
import Cart from "./views/Cart";
import AddProduct from "./views/AddProduct";
import AdminPanel from "./views/AdminPanel";

export default {
  name: "App",
  components: {
    Home,
    Products,
    Payment,
    Cart,
    AddProduct,
    AdminPanel
  },
  data: () => ({
    //
  })
};
</script>
