<template>
  <div class="row expl">
    <div class="col-md-4">
      <img class="wtc" :src="data.topImg" />
    </div>
    <div class="col-md-8">
      <h6 class="ve">{{ data.title }}</h6>
      <p class="prickt">₹ {{ data.price }}</p>
      <button type="button" class="btn crtadd waves-effect waves-light">
        See all buying options
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
