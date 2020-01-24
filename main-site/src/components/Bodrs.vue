<template>
  <div class="row bodrs">
    <div class="col-md-3">
      <div class="wp_npsliderheadsec">
        <img class="img-fluid phss zoom" v-bind:src="imageUrl" />
        <!-- Material unchecked -->
      </div>
    </div>
    <div class="col-md-5">
      <div class="wpnpsliderheadingsec">
        <!--<div class="wpnpcon">-->
        <h6 class="smart">
          <div class="wpnpico"><i class="far fa-heart ecoheaart"></i></div>
          {{ title }}
        </h6>
        <span class="stk">In Stock</span>
        <div class="disp">
          <a href="#"><span class="wish">Delete</span></a>
          <a href="#"><span class="wish">Move to cart</span></a>
          <a href="#"><span class="wish">Move to wish list</span></a>
        </div>
        <!--</div>-->
      </div>
    </div>
    <div class="col-md-2">
      <p class="pric">Price ₹{{ price }}</p>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "imageUrl", "price"]
};
</script>
