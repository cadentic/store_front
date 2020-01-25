<template>
  <div class="products_main_box">
    <div class="products_header">
      <div class="d-flex flex-wrap align-items-center">
        <div class="products_heading">
          <h2>Trending Offers</h2>
        </div>
        <div class="view_all_btn_part d-flex justify-content-end">
          <router-link :to="{name: 'addProduct', params: {type: 'trending'}}" class="view_btn">View All</router-link>
        </div>
      </div>
    </div>
    <div class="products_list">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="products_box" v-for="pd in products_detail" :key="pd.id">
          <div class="products_img">
            <router-link :to="{name: 'product', params: {id: pd.id}}"><img v-bind:src="pd.img" alt=""/></router-link>
          </div>
          <div class="products_info">
            <h2 class="title">{{ pd.subtitle }}</h2>
            <p>
              upto
              <span style="font-size:30px; color:red">{{ pd.price }}%</span> off
            </p>
            <div class="buy_now_btn_part d-flex justify-content-end">
              <router-link :to="{name: 'product', params: {id: pd.id}}" class="buy_now_btn">Buy Now</router-link>
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
    const { data } = await axios.get("/json/trending.json");
    this.products_detail = data;
  },
  data: () => ({
    products_detail: []
  })
};
</script>
