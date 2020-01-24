<template>
  <div>
    <AppHeader />
    <div style="background:#fffef2">
      <div class="productbg" style="max-width:1308px; margin:0px auto 0px auto">
        <section class="container-fluid" id="productSell">
          <div class="row">
            <div class="container wid13">
              <div class="products_sell_section">
                <div class="products_sell_content">
                  <Menu />
                  <ProductsSell :data="data"/>
                  <CustomerReview :data="data"/>
                  <!-- <Manufacturer/> -->
                  <Suggestion :data="data"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../components/Menu";
import ProductsSell from "../components/ProductsSell";
import CustomerReview from "../components/CustomerReview";
import Manufacturer from "../components/Manufacturer";
import Suggestion from "../components/Suggestion";

export default {
  name: "Products",
  components: {
    Menu,
    ProductsSell,
    CustomerReview,
    Manufacturer,
    Suggestion
  },
  mounted() {
    this.fetchData();
  },
  data: () => ({
    data: {}
  }),
  methods: {
    async fetchData() {
      const { data } = await axios.get("/json/products/"+this.$route.params.id+".json");
      this.data = data;
    }
  },
  watch: {
    $route: function (oldRoute, newRoute) {
      if (oldRoute.params.id != newRoute.params.id) this.fetchData();
    }
  }
};
</script>
