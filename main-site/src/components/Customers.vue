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
            <Customer :customer="customerArray[0]" />
            <Customer :customer="customerArray[1]" />
            <Customer :customer="customerArray[2]" />
            <Customer :customer="customerArray[3]" />
            <Customer :customer="customerArray[4]" />
            <Customer :customer="customerArray[5]" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Customer from "../components/Customer";
export default {
  name: "Customers",
  components: {
    Customer
  },
  data: () => ({
    customerArray: [
      {
        username: "Jone Doe",
        sex: "admin/images/customers/cs1.png",
        cart: "fa fa-plus-circle"
      },
      {
        username: "Maria Curi",
        sex: "admin/images/customers/cs2.png",
        cart: "fa fa-refresh"
      },
      {
        username: "Jone Smiss",
        sex: "admin/images/customers/cs1.png",
        cart: "fa fa-plus-circle"
      },
      {
        username: "Jone Doe",
        sex: "admin/images/customers/cs2.png",
        cart: "fa fa-refresh"
      },
      {
        username: "Micle Bin",
        sex: "admin/images/customers/cs1.png",
        cart: "fa fa-plus-circle"
      },
      {
        username: "Jone Doe",
        sex: "admin/images/customers/cs2.png",
        cart: "fa fa-plus-circle"
      }
    ]
  })
};
</script>
