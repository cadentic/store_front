<template>
  <div class=" textcenter " style="width:20%;">
    <div class="texshaad">
      <div class="addmewcraulselsection">
        <div class="fadein">
          <img id="1" class="pgh howt" :src="data.topImg" />
          <img
            id="2"
            class="pgh howt"
            src="img/syska.jpg"
            style="display: none;"
          />
        </div>
      </div>
      <div class="texeadhig">
        <p class="vivo">{{ data.title }}</p>
        <h6 class="ve" style="text-align:left;">
          <i class="fas fa-star" v-for="i in Math.floor(data.rankPoint)" :key="i"></i>
        </h6>
        <p class="pik" style="text-align:left;padding-top: 5px;">
          ₹ {{ data.price }}
        </p>
      </div>
      <div class="texbtnflexy">
        <button class="texttshbtn" data-toggle="tooltip" title="Add to cart">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <button
          class="texttshbtn"
          data-toggle="tooltip"
          title="Add to Wishlist"
        >
          <i class="far fa-heart"></i>
        </button>
      </div>
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
