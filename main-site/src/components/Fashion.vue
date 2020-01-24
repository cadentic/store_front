<template>
  <div class="products_main_box">
    <div class="products_header">
      <div class="d-flex flex-wrap align-items-center">
        <div class="products_heading">
          <h3>Fashion Acessories</h3>
        </div>
        <div class="view_all_btn_part d-flex justify-content-end">
          <a class="view_btn" href="javascript:;">View All</a>
        </div>
      </div>
    </div>
    <div class="products_list">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="products_box" v-for="pd in products_detail" :key="pd.id">
          <div class="products_img">
            <a href="products.html"><img v-bind:src="pd.img" alt=""/></a>
          </div>
          <div class="products_info">
            <h2 class="title">{{ pd.subtitle }}</h2>
            <p>
              upto
              <span style="font-size:30px; color:red">{{ pd.price }}%</span> off
            </p>
            <div class="buy_now_btn_part d-flex justify-content-end">
              <a href="products.html" class="buy_now_btn">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // name: 'MainContent',
  components: {},
  async mounted() {
    const { data } = await axios.get("/json/fashion.json");
    this.products_detail = data;
  },
  data: () => ({
    products_detail: []
  })
};
</script>
