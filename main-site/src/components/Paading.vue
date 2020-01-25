<template>
  <div class="col-md-9 paading0">
    <section
      class="container-fluid"
      id="products"
      style="padding:5px; background:#f7f7f7;overflow:hidden; position:relative;min-height:100vh;"
    >
      <!--background:#e6f2ff;-->
      <div class="wp_spslider">
        <!-- <div id="testimonial-slider" class="owl-carousel">-->
        <div class="wpnewsec">
          <div class="wplinksec">
            <a class="wp_linkin">
              Home <span class="wp_linksp"> &gt; </span>
            </a>
            <a class="wp_linkin">
              Accesories <span class="wp_linksp"> &gt; </span>
            </a>
            <a class="wp_linkin">
              Mobiles <span class="wp_linksp"> &gt; </span>
            </a>
          </div>

          <div class="wpproneewheadinn">
            {{ data.title }}
            <span class="shww">(Showing {{ data.firstProduct }} – {{ data.lastProduct }} products of {{ data.totalProductsNumber }} products)</span>
          </div>

          <div class="sorttsec">
            <div class="ssortheadingg">Sort By</div>
            <div class="ssortheading sortactive" onclick="ShowSecond()">
              Popularity
            </div>
            <div class="ssortheading" onclick="ShowSecond()">
              Price -- Low to High
            </div>
            <div class="ssortheading" onclick="ShowSecond()">
              Price -- High to Low
            </div>
            <div class="ssortheading" onclick="ShowSecond()">Newest First</div>
          </div>
        </div>
        <div class="testimonial testi" v-for="(item, index) in data.items" :key="index">
          <div class="wp_npslider_item">
            <div class="row">
              <div class="col-md-3">
                <div class="wp_npsliderheadsec">
                  <div class="onn">ON OFFER</div>
                  <img class="img-fluid phss" :src="item.img" />
                </div>
                <div
                  class="form-check"
                  style="    padding: 0px;  margin-top: 5px;margin-left: 20px;"
                >
                  <input
                    type="checkbox"
                    class="form-check-input loadeercheck"
                    id="materialUnchecked"
                  />
                  <label class="form-check-label" for="materialUnchecked"
                    >Add to Compare</label
                  >
                </div>
              </div>
              <div class="col-md-5">
                <div class="wpnpsliderheadingsec">
                  <!--<div class="wpnpcon">-->
                  <h6 class="smart">
                    <div class="wpnpico"><i class="far fa-heart"></i></div>
                    {{ item.title }}
                  </h6>
                  <div class="prostarrat_sec">
                    <div class="protista">4.2 <i class="fas fa-star"></i></div>
                    <div class="protiratnum">
                      {{ item.ratings }} Ratings &amp; {{ item.reviews }} Reviews
                    </div>
                  </div>
                  <ul class="vFw0gD">
                    <li class="tVe95H" v-for="(info, index) in item.informations" :key="index">
                      {{ info }}
                    </li>
                  </ul>
                  <div class="wpnheadingg">{{ item.extra1 }}</div>
                  <div class="wpnotherdet">{{ item.extra2 }}</div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="wpnpsli_itemlastcontent">
                  <div class="_6BWGkk">
                    <div class="_1uv9Cb">
                      <div class="price">₹{{ item.price }}</div>
                      <span class="perc">
                        <div class="strk">
                          ₹
                          <!-- -->{{ item.discountedPrice }}
                        </div>
                        <div class="ofs">
                          <span>{{ Math.round(100 - item.price*100/item.discountedPrice) }}% off</span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="_3gVem9">
                    <span class="ft"
                          >Up to <span class="_2xjzPG">₹{{ item.exchangePrice }}</span> Off on
                      Exchange</span
                    >
                  </div>
                  <div class="_3MCpsc ft">
                    EMI starting from
                    <!-- -->
                    <span class="_1JT2XE"
                      >₹
                      <!-- -->{{ item.emi }}
                      <!-- -->/month</span
                    >
                  </div>
                  <div class="nwo">
                    <span class="ofgh ft">Offers</span>
                    <ul class="_3U7997">
                      <li class="_1ZRRx1 ft">No Cost EMI</li>
                      <li class="_1ZRRx1 ft">Special Price</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  </div>-->
      </div>

      <div class="container-fluid othernpwpslidersec">
        <!--Carousel Wrapper-->
        <div
          id="carousel-example-1z"
          class="carousel slide "
          data-ride="carousel"
        >
          <!--Indicators-->
          <ol class="carousel-indicators">
            <li
              data-target="#carousel-example-1z"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carousel-example-1z"
              data-slide-to="1"
              class=""
            ></li>
            <li
              data-target="#carousel-example-1z"
              data-slide-to="2"
              class=""
            ></li>
          </ol>
          <!--/.Indicators-->
          <!--Slides-->
          <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item active" v-for="i in data.items.length">
              <div class="container-fluid hidenslidercont">
                <div class="row">
                  <div class="col-md-3" style="padding: 0;">
                    <div
                      id="testimonial-slider2"
                      class="owl-carousel owl-theme"
                      style="opacity: 1; display: block;"
                    >
                      <div class="owl-wrapper-outer">
                        <div
                          class="owl-wrapper"
                          style="width: 3510px; left: 0px; display: block;"
                        >
                          <div class="owl-item" style="width: 351px;">
                            <div class="testimonial">
                              <div class="sli2testimg">
                                <img
                                  class="img-fluid"
                                  src=""
                                  style="width:100%;"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="owl-item" style="width: 351px;">
                            <div class="testimonial">
                              <div class="sli2testimg">
                                <img
                                  class="img-fluid"
                                  src="img/phs.png"
                                  style="width:100%;"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="owl-item" style="width: 351px;">
                            <div class="testimonial">
                              <div class="sli2testimg">
                                <img
                                  class="img-fluid"
                                  src="img/phs.png"
                                  style="width:100%;"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="owl-item" style="width: 351px;">
                            <div class="testimonial">
                              <div class="sli2testimg">
                                <img
                                  class="img-fluid"
                                  src="img/phs.png"
                                  style="width:100%;"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="owl-item" style="width: 351px;">
                            <div class="testimonial">
                              <div class="sli2testimg">
                                <img
                                  class="img-fluid"
                                  src="img/phs.png"
                                  style="width:100%;"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="owl-controls clickable">
                        <div class="owl-pagination">
                          <div class="owl-page active">
                            <span class=""></span>
                          </div>
                          <div class="owl-page"><span class=""></span></div>
                          <div class="owl-page"><span class=""></span></div>
                          <div class="owl-page"><span class=""></span></div>
                          <div class="owl-page"><span class=""></span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-9 abc_colback" style="position: relative;">
                    <div class="abcclosee"><i class="fas fa-times"></i></div>

                    <div class="ccola">
                      <h3 class="product-title">
                        Infinix Smart 3 Plus (Sapphire Cyan, 32 GB)
                      </h3>
                      <div class="rating">
                        <div class="stars">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                        <span class="review-no">41 reviews</span>
                      </div>
                      <p class="product-description">
                        Brand Warranty of 1 Year Available for Mobile and 6
                        Months for Accessories
                      </p>
                      <h4 class="priceee">
                        current price: <span>₹6,999</span>
                      </h4>
                      <p class="vote">
                        <strong>Up to </strong> ₹6,999
                        <strong>Off on Exchange</strong>
                      </p>
                      <h5 class="sizes">
                        2 GB RAM | 32 GB ROM | Expandable Upto 256 GB
                      </h5>
                      <h5 class="colors">
                        colors:
                        <span
                          class="color orange not-available"
                          data-toggle="tooltip"
                          title="Not In store"
                        ></span>
                        <span class="color green"></span>
                        <span class="color blue"></span>
                      </h5>
                      <div class="action">
                        <button
                          class="add-to-cart btn btn-default waves-effect waves-light"
                          type="button"
                        >
                          add to cart
                        </button>
                        <button
                          class="like btn btn-default waves-effect waves-light"
                          type="button"
                        >
                          <span class="fa fa-heart"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/First slide-->
            <!--Second slide-->

            <!--/Third slide-->
          </div>
          <!--/.Slides-->
          <!--Controls-->
          <a
            class="carousel-control-prev"
            href="#carousel-example-1z"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-example-1z"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <!--/.Controls-->
        </div>
        <!--/.Carousel Wrapper-->
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    async fetchData(type) {
      const { data } = await axios.get("/json/all-"+type+".json");
      this.data = data;
    }
  },
  mounted() {
    this.fetchData(this.type);
  },
  data: () => ({
    data: []
  }),
  watch: {
    type: function (newType) {
      this.fetchData(newType);
    }
  }
};
</script>
