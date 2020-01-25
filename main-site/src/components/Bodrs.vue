<template>
  <div class="row bodrs">
    <div class="col-md-3">
      <div class="wp_npsliderheadsec">
        <img class="img-fluid phss zoom" :src="data.topImg" />
        <!-- Material unchecked -->
      </div>
    </div>
    <div class="col-md-5">
      <div class="wpnpsliderheadingsec">
        <!--<div class="wpnpcon">-->
        <h6 class="smart">
          <div class="wpnpico"><i class="far fa-heart ecoheaart"></i></div>
          {{ data.title }}
        </h6>
        <span class="stk" v-if="data.available > 0">In Stock</span>
        <div class="disp">
          <a href="#"><span class="wish">Delete</span></a>
          <a href="#"><span class="wish">Move to cart</span></a>
          <a href="#"><span class="wish">Move to wish list</span></a>
        </div>
        <!--</div>-->
      </div>
    </div>
    <div class="col-md-2">
      <p class="pric">Price ₹{{ data.price }}</p>
    </div>
    <div class="col-md-2"></div>
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
