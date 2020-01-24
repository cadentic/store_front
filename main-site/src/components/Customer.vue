<template>
  <li>
    <a href="javascript:;">
      <div class="customersImg">
        <img
          v-bind:src="customer.sex"
          alt="Customers 1"
          class="img-responsive"
        />
      </div>
      <div class="customersName">
        <h4>{{ customer.username }}</h4>
      </div>
      <div class="customerCart" title="">
        <span class="entypo-bag"></span>
        <div class="successCart cartStatus">
          <span v-bind:class="customer.cart"></span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: ["customer"],
  data: () => ({})
};
</script>
