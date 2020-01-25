<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h4 class="recom">
          Your recently viewed items and featured recommendations
        </h4>
        <h6 class="hist">Inspired by your browsing history</h6>
      </div>
      <Texshaad
        v-for="(item, index) in recentlyData"
        :key="index"
        :data="item"
        />
    </div>
    <div class="row">
      <div class="col-md-12">
        <h4 class="recom">
          Your browsing history
        </h4>
        <a href="#">
          <h6 class="hist">View or edit your browsing history</h6>
        </a>
      </div>

      <Texshaad
        v-for="(item, index) in browsingData"
        :key="index"
        :data="item"
        />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Texshaad from "./Texshaad";
export default {
  components: {
    Texshaad
  },
  methods: {
    async fetchProducts(ids) {
      const result = [];
      try {
        for(let i = 0; i < ids.length ; i++) {
          const { data } = await axios.get("/json/products/"+ids[i]+".json");
          result.push(data);
        }
      } catch (error) {
        alert("Could not fetch product!");
        console.log(error);
      }
      return result;
    },
    async fetchRecentlyViewed() {
      try {
        const ids = await axios.get("/json/recent-views.json");
        this.recentlyData = await this.fetchProducts(ids.data);
      } catch (error) {
        alert("Unable to fetch recently viewed products !");
        console.log("error");
      }
    },
    async fetchBrowsing() {
      try {
        const ids = await axios.get("/json/browser-views.json");
        this.browsingData = await this.fetchProducts(ids.data);
      } catch (error) {
        alert("Unable to fetch browser history products !");
        console.log("error");
      }
    }
  },
  mounted() {
    this.fetchRecentlyViewed();
    this.fetchBrowsing();
  },
  data: () => ({
    recentlyData: [],
    browsingData: []
  })
};
</script>
