<template>
  <div class="col-md-6">
    <div class="panel panel-default panel-zoqolo" data-collapsed="0">
      <!-- panel head -->
      <div class="panel-heading">
        <div class="panel-title">
          <i class="entypo-user">&nbsp;</i>Customers
        </div>
      </div>
      <!-- panel body -->
      <div class="panel-body">
        <div class="customerList">
          <ul class="list-unstyled">
            <Customer v-for="(customer, index) in customerArray" :key="index" :customer="customer" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Customer from "../components/Customer";
import axios from "axios";
export default {
  name: "Customers",
  components: {
    Customer
  },
  data: () => ({
    customerArray: []
  }),
  async mounted() {
    const { data } = await axios.get("/json/main-dashboard-customers.json");
    this.customerArray = data;
  }
};
</script>
