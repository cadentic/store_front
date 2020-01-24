<template>
  <div class="products_sell_info_part">
    <div class="d-flex flex-wrap justify-content-between" style="width: 100%">
      <div class="products_sell_img_part">
        <div class="products_sell_img_contain">
          <div class="products_top_img_part">
            <img :src="data.topImg" alt="" />
          </div>

          <div class="products_sell_thumb_img_part">
            <div class="d-flex flex-wrap justify-content-between">
              <div class="thumb_img" v-for="(img, index) in data.images" :key="index">
                <a href="javascript:;">
                  <img :src="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="products_sell_description">
        <div class="products_sell_contain">
          <div class="products_info_top_part">
            <div class="d-flex flex-wrap justify-content-between">
              <div class="products_info_heading">
                <h2 class="title">{{ data.title }}</h2>
                <p class="text">{{ data.text }}</p>
                <div class="star_rating">
                  <div class="d-flex flex-wrap">
                    <div
                      id="rateYo"
                      class="jq-ry-container"
                      readonly="readonly"
                      style="width: 100px;"
                    >
                      <div class="jq-ry-group-wrapper">
                        <div class="jq-ry-normal-group jq-ry-group">
                          <!--?xml version="1.0" encoding="utf-8"?--><svg
                            v-for="i in Math.floor(data.rankPoint)"
                            :key="i"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 12.705 512 486.59"
                            x="0px"
                            y="0px"
                            xml:space="preserve"
                            width="20px"
                            height="20px"
                            fill="#ffcc33"
                          >
                            <polygon
                              points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "
                            ></polygon>
                          </svg>
                          <!--?xml version="1.0" encoding="utf-8"?--><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 12.705 512 486.59"
                            x="0px"
                            y="0px"
                            xml:space="preserve"
                            width="20px"
                            height="20px"
                            fill=""
                            style="margin-left: 0px;"
                          >
                            <polygon
                              points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "
                            ></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p class="rank_point">({{ data.rankPoint }})</p>
                    <p class="review">{{ data.reviews }}<span>Reviews</span></p>
                  </div>
                </div>
              </div>

              <div class="price_part">
                <ul>
                  <li
                    class="d-flex flex-wrap align-items-center justify-content-end"
                  >
                    <p class="price_holder">Actual Price</p>
                    <h2 class="price"><del>${{ data.price }}</del></h2>
                  </li>
                  <li
                    class="d-flex flex-wrap align-items-center justify-content-end discount"
                    v-if="data.discountedPrice"
                  >
                    <p class="price_holder">Discounted Price</p>
                    <h2 class="price">${{ data.discountedPrice }}</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="products_info_description_part">
            <div class="description_heading">
              <h2 class="title">Description :</h2>
              <p>{{ data.description }}</p>
            </div>
            <div class="item_information">
              <ul>
                <li class="d-flex flex-wrap align-items-center" v-for="(item, index) in data.informations" :key="index">
                  <p class="item_holder">{{ item.name }} :</p>
                  <p class="item_info">{{ item.value }}</p>
                </li>
              </ul>
            </div>
            <div class="select_item_part">
              <div
                class="d-flex flex-wrap align-items-center justify-content-between"
              >
                <div class="size_part">
                  <ul>
                    <li
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <p class="item_holder">Select Size :</p>
                      <select class="quality_box">
                        <option>Medium</option>
                        <option>high</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div class="quantity_part">
                  <ul>
                    <li
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <p class="item_holder">Quantity :</p>
                      <div class="quantity">
                        <div class="d-flex flex-wrap align-items-center">
                          <a
                            href="javascript:;"
                            id="sub"
                            class="sub quntity_btn"
                            >-</a
                          >
                          <input
                            class="number_input"
                            readonly=""
                            type="number"
                            id="1"
                            value="1"
                            min="1"
                            max="5"
                          />
                          <a
                            href="javascript:;"
                            id="add"
                            class="add quntity_btn"
                            >+</a
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="products_color_part">
              <div class="d-flex flex-wrap">
                <p class="item_holder">Available Colors :</p>
                <ul class="color_btn_part d-flex flex-wrap">
                  <li>
                    <input
                      type="radio"
                      name="color"
                      id="color1"
                      class="color_input"
                      style="display: none;"
                    />
                    <label
                      for="color1"
                      class="color_btn"
                      style="background-color: #0e2142;"
                    ></label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="color"
                      id="color2"
                      class="color_input"
                      style="display: none;"
                    />
                    <label
                      for="color2"
                      class="color_btn"
                      style="background-color: #efba6a;"
                    ></label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="color"
                      id="color3"
                      class="color_input"
                      style="display: none;"
                    />
                    <label
                      for="color3"
                      class="color_btn"
                      style="background-color: #252525;"
                    ></label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="color"
                      id="color4"
                      class="color_input"
                      style="display: none;"
                    />
                    <label
                      for="color4"
                      class="color_btn"
                      style="background-color: #a3d39c;"
                    ></label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="add_cart_part">
              <div class="d-flex flex-wrap align-items-center">
                <button class="add_cart_btn" @click="addToCart">
                  <span class="fa fa-shopping-cart"></span>
                  ADD to My ZOQOLO
                </button>
                <div class="like_share_part">
                  <a href="javascript:;" class="like_btn">
                    <span class="fa fa-heart-o"></span>
                  </a>
                  <a href="javascript:;" class="like_btn">
                    <span class="fa fa-share-alt"></span>
                  </a>
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
import axios from "axios";
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async addToCart() {
      const id = this.$route.params.id;
      try {
        await axios.post("/add-to-cart/"+id);
        alert("Added to cart successfully!");
      } catch (error) {
        alert("An error occured!");
        console.log(error);
      }
    }
  }
};
</script>
