<template>
  <div class="row">
    <div class="col-md-12 add_btn_part">
      <a href="javascript:;" class="add_btn">Add New Offer</a>
      <a href="javascript:;" class="add_btn">Sold Out Products</a>
      <a href="javascript:;" class="add_btn">Add New Products</a>
    </div>
    <TotalComponent v-for="(total, index) in totals" :key="index" :total="total" />
  </div>
</template>

<script>
import TotalComponent from "../components/TotalComponent";
import axios from "axios";
export default {
  name: "TotalPanel",
  components: {
    TotalComponent
  },
  async mounted() {
    const { data } = await axios.get("/json/main-dashboard-total.json");
    this.totals = data;
  },
  data: () => ({
    totals: []
  })
};
</script>
