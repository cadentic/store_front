<template>
  <div class="products_main_box">
    <div class="products_header">
      <div class="d-flex flex-wrap align-items-center">
        <div class="products_heading">
          <h3>Deals of the Day</h3>
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
            <router-link class="buy_now_btn" :to="{ name: 'product', params: { id: pd.id }}"><img v-bind:src="pd.img" alt=""/></router-link>
          </div>
          <div class="products_info">
            <h2 class="title">{{ pd.subtitle }}</h2>
            <p>
              upto
              <span style="font-size:30px; color:red">{{ pd.price }}%</span> off
            </p>
            <div class="buy_now_btn_part d-flex justify-content-end">
              <router-link class="buy_now_btn" :to="{ name: 'product', params: { id: pd.id }}">Buy Now</router-link>
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
    try {
      const { data } = await axios.get("/json/deals.json");
      this.products_detail = data;
    } catch (error) {
      console.log(error);
    }
  },
  data: () => ({
    products_detail: []
  })
};
</script>
