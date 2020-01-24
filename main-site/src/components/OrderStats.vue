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
      <MyProgress :statName="statName[0]" :percent="percent[0]" />
      <MyProgress :statName="statName[1]" :percent="percent[1]" />
      <MyProgress :statName="statName[2]" :percent="percent[2]" />
    </div>
  </div>
</template>

<script>
import MyProgress from "../components/MyProgress";
export default {
  name: "OrderStats",
  components: {
    MyProgress
  },
  data: () => ({
    statName: ["Completed", "Pending", "Cancelled"],
    percent: [100, 90, 30]
  })
};
</script>
