<template>
  <div class="suggestion_part">
    <div class="suggestion_heading">
      <h2 class="title">ZOQOLO’s Suggestions for you :</h2>
    </div>
    <div class="suggestion_contain" v-for="(suggestion, index) in data.suggestions" :key="index">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="suggestion_box">
          <div class="suggestion_img">
            <img :src="suggestion.img" alt="" />
          </div>
          <div class="suggestion_info">
            <div class="suggestion_user">
              <h2 class="username">{{ suggestion.name }}</h2>
            </div>
            <div class="seller_name d-flex flex-wrap">
              <p class="seller_holder">Seller :</p>
              <p class="seller_name">{{ suggestion.username }}</p>
            </div>
            <div
              class="seller_review jq-ry-container"
              readonly="readonly"
              style="width: 150px;"
            >
              <div class="jq-ry-group-wrapper">
                <div class="jq-ry-normal-group jq-ry-group">
                  <!--?xml version="1.0" encoding="utf-8"?--><svg
                    v-for="i in 5"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 12.705 512 486.59"
                    x="0px"
                    y="0px"
                    xml:space="preserve"
                    width="30px"
                    height="30px"
                    fill="gray"
                  >
                    <polygon
                      points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "
                    ></polygon>
                  </svg>
                </div>
                <div class="jq-ry-rated-group jq-ry-group" style="width: 90%;">
                  <!--?xml version="1.0" encoding="utf-8"?--><svg
                    v-for="i in Math.floor(suggestion.rating)"
                    :key="i"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 12.705 512 486.59"
                    x="0px"
                    y="0px"
                    xml:space="preserve"
                    width="30px"
                    height="30px"
                    fill="#9d3931"
                  >
                    <polygon
                      points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "
                    ></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
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
