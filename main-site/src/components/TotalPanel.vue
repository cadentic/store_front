<template>
  <div class="row">
    <div class="col-md-12 add_btn_part">
      <a href="javascript:;" class="add_btn">Add New Offer</a>
      <a href="javascript:;" class="add_btn">Sold Out Products</a>
      <a href="javascript:;" class="add_btn">Add New Products</a>
    </div>
    <TotalComponent :total="total[0]" />
    <TotalComponent :total="total[1]" />
    <TotalComponent :total="total[2]" />
  </div>
</template>

<script>
import TotalComponent from "../components/TotalComponent";
export default {
  name: "TotalPanel",
  components: {
    TotalComponent
  },
  data: () => ({
    total: [
      { title: "Total Orders", num: "3.6K", icon: "entypo-basket pull-left" },
      { title: "Total Sales", num: "7.2M", icon: "entypo-window pull-left" },
      { title: "Total Customers", num: "3.6K", icon: "entypo-user pull-left" }
    ]
  })
};
</script>
