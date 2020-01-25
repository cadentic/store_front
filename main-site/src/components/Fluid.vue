<template>
  <div class="container-fluid productsisecc">
    <div class="row">
      <div class="col-md-12 paading0">
        <section
          class="container-fluid"
          id="products"
          style="padding:5px; background:#f7f7f7;overflow:hidden; position:relative;min-height:100vh;"
          >
          <div class="wp_spslider">
            <div class="wpnewsec"></div>
            <div class="testimonial testi">
              <div class="wp_npslider_item">
                <div class="row">
                  <div class="col-md-9">
                    <Wholehovereff
                      v-for="(product, index) in cart"
                      :key="index"
                      :data="product"
                      @price-change="price => cartTotalPrice += price"
                      @quantity-change="quantity => cartItemsNumber += quantity"
                      />
                    <div class="row">
                      <div
                        class="col-md-12"
                        style="padding-top:40px;padding-bottom:40px;"
                        >
                        <h4>Saved for later ({{ later.length }} item)</h4>
                      </div>
                    </div>

                    <Bodrs
                      v-for="(product, index) in later"
                      :key="index"
                      :data="product"
                      />
                  </div>

                  <div class="col-md-3">
                    <h4 class="purch">100% Purchase Protection</h4>
                    <p class="ori">Original products secure payments</p>
                    <div class="sid">
                      <p class="freeside">
                      Your order is eligible for FREE Delivery. Select this
                      option at checkout. Details
                      </p>

                      <div class="ckf">
                        <h6 class="item">
                          Subtotal ({{ cartItemsNumber }} items): {{ cartTotalPrice }}₹
                        </h6>

                        <!-- Material unchecked -->
                        <div
                          class="form-check"
                          style="padding-left: 8px;padding-top: 6px;"
                          >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="materialUncheckeds"
                            />
                          <label
                            class="form-check-label"
                            for="materialUncheckeds"
                            >This order contains a gift</label
                          >
                        </div>
                            <center>
                              <button
                                type="button"
                                class="btn pok waves-effect waves-light"
                                style="width:76%;"
                                >
                                Proceed to buy
                              </button>
                            </center>
                      </div>

                      <div class="texgh">
                        <p class="emi">EMI Eligibility</p>
                        <span class="plo"
                              >Your order qualifies for EMI with valid credit cards.
                              Details</span
                            >
                      </div>
                    </div>

                    <div class="glow">
                      <p>Sponsored Products related to items in your cart</p>

                      <Expl
                        v-for="(product, index) in sponsoredProducts"
                        :key="index"
                        :data="product"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  class=""
                  ></li>
                <li
                  data-target="#carousel-example-1z"
                  data-slide-to="1"
                  class=""
                  ></li>
                <li
                  data-target="#carousel-example-1z"
                  data-slide-to="2"
                  class="active"
                  ></li>
              </ol>
              <!--/.Indicators-->
              <!--Slides-->
              <div class="carousel-inner" role="listbox">
                <!--First slide-->
                <div class="carousel-item">
                  <div class="container-fluid hidenslidercont">
                    <div class="row">
                      <div class="col-md-3" style="padding: 0;">
                        <div
                          id="testimonial-slider2"
                          class="owl-carousel owl-loaded owl-drag owl-hidden"
                          >
                          <div class="owl-stage-outer">
                            <div
                              class="owl-stage"
                              style="transform: translate3d(-2824px, 0px, 0px); transition: all 0.45s ease 0s; width: 5179px;"
                              >
                              <div
                                class="owl-item cloned"
                                style="width: 470.75px;"
                                >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div
                            class="owl-item active"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-nav disabled">
                            <button
                              type="button"
                              role="presentation"
                              class="owl-prev"
                              >
                              <span aria-label="Previous">‹</span></button
                            ><button
                               type="button"
                               role="presentation"
                               class="owl-next"
                               >
                               <span aria-label="Next">›</span>
                              </button>
                          </div>
                          <div class="owl-dots">
                            <button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot active">
                              <span></span>
                              </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-md-9 abc_colback"
                        style="position: relative;"
                        >
                        <div class="abcclosee">
                          <i class="fas fa-times"></i>
                        </div>
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
                <div class="carousel-item">
                  <div class="container-fluid hidenslidercont">
                    <div class="row">
                      <div class="col-md-3" style="padding: 0;">
                        <div
                          id="testimonial-slider3"
                          class="owl-carousel owl-loaded owl-drag owl-hidden"
                          >
                          <div class="owl-stage-outer">
                            <div
                              class="owl-stage"
                              style="transform: translate3d(-1412px, 0px, 0px); transition: all 0.45s ease 0s; width: 5179px;"
                              >
                              <div
                                class="owl-item cloned"
                                style="width: 470.75px;"
                                >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item active"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-nav disabled">
                            <button
                              type="button"
                              role="presentation"
                              class="owl-prev"
                              >
                              <span aria-label="Previous">‹</span></button
                            ><button
                               type="button"
                               role="presentation"
                               class="owl-next"
                               >
                               <span aria-label="Next">›</span>
                              </button>
                          </div>
                          <div class="owl-dots">
                            <button role="button" class="owl-dot active">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span>
                              </button>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-md-9 abc_colback"
                        style="position: relative;"
                        >
                        <div class="abcclosee">
                          <i class="fas fa-times"></i>
                        </div>

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
                <!--/Second slide-->
                <!--Third slide-->
                <div class="carousel-item active">
                  <div class="container-fluid hidenslidercont">
                    <div class="row">
                      <div class="col-md-3" style="padding: 0;">
                        <div
                          id="testimonial-slider4"
                          class="owl-carousel owl-loaded owl-drag"
                          >
                          <div class="owl-stage-outer">
                            <div
                              class="owl-stage"
                              style="transform: translate3d(-1412px, 0px, 0px); transition: all 0s ease 0s; width: 5179px;"
                              >
                              <div
                                class="owl-item cloned"
                                style="width: 470.75px;"
                                >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item active"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div class="owl-item" style="width: 470.75px;">
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div
                            class="owl-item cloned"
                            style="width: 470.75px;"
                            >
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
                          <div class="owl-nav disabled">
                            <button
                              type="button"
                              role="presentation"
                              class="owl-prev"
                              >
                              <span aria-label="Previous">‹</span></button
                            ><button
                               type="button"
                               role="presentation"
                               class="owl-next"
                               >
                               <span aria-label="Next">›</span>
                              </button>
                          </div>
                          <div class="owl-dots">
                            <button role="button" class="owl-dot active">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span></button
                            ><button role="button" class="owl-dot">
                              <span></span>
                              </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-md-9 abc_colback"
                        style="position: relative;"
                        >
                        <div class="abcclosee">
                          <i class="fas fa-times"></i>
                        </div>
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
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                  ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel-example-1z"
                role="button"
                data-slide="next"
                >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                  ></span>
                <span class="sr-only">Next</span>
              </a>
              <!--/.Controls-->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Wholehovereff from "./Wholehovereff";
import Bodrs from "./Bodrs";
import Expl from "./Expl";
export default {
  components: {
    Wholehovereff,
    Bodrs,
    Expl
  },
  methods: {
    async fetchProducts(ids) {
      const result = [];
      try {
        for (let i = 0; i < ids.length; i++) {
          const { data } = await axios.get("/json/products/"+ids[i]+".json");
          result.push(data);
        }
      } catch (error) {
        alert("Failed to fetch product !");
        console.log(error);
      }
      return result;
    },
    async fetchCart() {
      try {
        // get product ids in cart.json
        const ids = await axios.get("/json/cart.json");
        // get every product informations
        this.cart = await this.fetchProducts(ids.data);
      } catch (error) {
        alert("Unable to get cart!");
        console.log(error);
      }
    },
    async fetchLater() {
      try {
        // get product ids in later.json
        const ids = await axios.get("/json/later.json");
        // get every product informations
        this.later = await this.fetchProducts(ids.data);
      } catch (error) {
        alert("Unable to get later buying!");
        console.log(error);
      }
    },
    async fetchSponsoredProducts() {
      try {
        // get product ids
        const ids = await axios.get("/json/sponsored-products.json");
        // get every product informations
        this.sponsoredProducts = await this.fetchProducts(ids.data);
      } catch (error) {
        alert("Unable to get sponsored products!");
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchCart();
    this.fetchLater();
    this.fetchSponsoredProducts();
  },
  data: () => ({
    cart: [],
    later: [],
    sponsoredProducts: [],
    cartTotalPrice: 0,
    cartItemsNumber: 0,
    myCartArray: [
      { title: "Maniac Men's Sweater", imageUrl: "img/maniac.jpg" },
      {
        title: "Infinix Smart 3 Plus (Sapphire Cyan, 32 GB)",
        imageUrl: "img/71ZU4VsevqL._AC_AA100_.jpg"
      },
      {
        title: "Diesel Analog Blue Dial Men's Watch - DZ1787",
        imageUrl: "img/diesel.jpg"
      },
      {
        title:
        "Apple MacBook Air (13-inch Retina Display, 1.6GHz Dual-core Intel Core i5, 128GB) - Space Grey",
        imageUrl: "img/macbook.jpg"
      }
    ],
    saveItem: [
      {
        title: "Nike Men's Liteforce III Casual Sneakers",
        imageUrl: "img/nike.jpg",
        price: "1799.00"
      },
      {
        title:
        "Ray-Ban Aviator Men's Sunglasses - (0RB3044IL284852|52|Crystal Grey-Green Color)",
        imageUrl: "img/rayban.jpg",
        price: "3752.00"
      },
      {
        title:
        "Braun Satin Hair 7 Senso Dryer HD780 - Professional Hair Dryer with Thermo Sensor & AC Motor",
        imageUrl: "img/dryer.jpg",
        price: "5613.00"
      }
    ],
    explData: [
      {
        title: "VE Digital 24 Images",
        imageUrl: "img/61Avfe-CYgL._AC_UL100_SR100,100_.jpg",
        price: "163.00"
      },
      {
        title: "Redmi Y3 (Bold Red, 3GB RAM, 32GB Storage)",
        imageUrl: "img/redmi.jpg",
        price: "10000.00"
      },
      {
        title: "VE Digital 24 Images",
        imageUrl: "img/51HHHI-SslL._AC_UL100_SR100,100_.jpg",
        price: "163.00"
      },
      {
        title: "Katso Men's Cotton Roundneck T-Shirt",
        imageUrl: "img/tshirt.jpg",
        price: "355.00"
      },
      {
        title: "VE Digital 24 Images",
        imageUrl: "img/nike.jpg",
        price: "163.00"
      }
    ]
  })
};
</script>
