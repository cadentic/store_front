<template>
  <div class="row expl">
    <div class="col-md-4">
      <img class="wtc" v-bind:src="imageUrl" />
    </div>
    <div class="col-md-8">
      <h6 class="ve">{{ title }}</h6>
      <p class="prickt">₹ {{ price }}</p>
      <button type="button" class="btn crtadd waves-effect waves-light">
        See all buying options
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "imageUrl", "price"]
};
</script>
