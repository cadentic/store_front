<template>
  <div
    class="panel panel-default panel-zoqolo orderStatusBox"
    data-collapsed="0"
  >
    <!-- panel head -->
    <div class="panel-heading">
      <div class="panel-title">
        <i class="entypo-basket">&nbsp;</i>Order Status
      </div>
    </div>
    <!-- panel body -->
    <div class="panel-body">
      <MyProgress v-for="(stat, index) in data" :key="index" :statName="stat.label" :percent="stat.percent" />
    </div>
  </div>
</template>

<script>
import MyProgress from "../components/MyProgress";
import axios from "axios";
export default {
  name: "OrderStats",
  components: {
    MyProgress
  },
  data: () => ({
    data: []
  }),
  async mounted() {
    const { data } = await axios.get("/json/main-dashboard-order-stats.json");
    this.data = data;
  }
};
</script>
