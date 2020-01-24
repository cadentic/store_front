<template>
  <div class="wholehovereff">
    <div class="row bodr">
      <div class="col-md-6">
        <h4 class="mycart">My Cart (1)</h4>
      </div>
      <div
        class="col-md-6"
        style="padding-bottom:10px;padding-left:10px;padding-right:10px;"
      >
        <!-- Search form -->
        <div class="deliverflexy">
          <div class="devilerypla">
            <svg
              style="width:20px;"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 486.3 486.3"
              xml:space="preserve"
            >
              <g>
                <path
                  style="fill:#CD2A00;"
                  d="M243.15,0v104.4c44.11,0,80,35.88,80,80c0,44.11-35.89,80-80,80v221.9l146.43-184.1
                                c26.29-33.25,40.19-73.21,40.19-115.58C429.77,83.72,346.05,0,243.15,0z"
                ></path>
                <path
                  style="fill:#D8D7DA;"
                  d="M323.15,184.4c0-44.12-35.89-80-80-80v160C287.26,264.4,323.15,228.51,323.15,184.4z"
                ></path>
                <path
                  style="fill:#FF3501;"
                  d="M163.15,184.4c0-44.12,35.89-80,80-80V0C140.25,0,56.53,83.72,56.53,186.62
                                c0,42.37,13.9,82.33,40.23,115.62L243.15,486.3V264.4C199.04,264.4,163.15,228.51,163.15,184.4z"
                ></path>
                <path
                  style="fill:#FFFFFF;"
                  d="M163.15,184.4c0,44.11,35.89,80,80,80v-160C199.04,104.4,163.15,140.28,163.15,184.4z"
                ></path>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            Deliver to
          </div>
          <div class="deliverymenusection">
            <div class="deliveryshwadd" data-val="1">Jaipur 302016</div>
            <div class="delivermenuitemsec" id="del1">
              <div class="logintoviewfull">
                <div class="logicooo">
                  <svg
                    class="img-fluid"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 58 58"
                    style="enable-background:new 0 0 58 58;"
                    xml:space="preserve"
                  >
                    <polygon
                      style="fill:#EFCE4A;"
                      points="48,37 39.564,37 29.177,52 18.79,37 10,37 0,58 58,58 "
                    ></polygon>
                    <path
                      style="fill:#9777A8;"
                      d="M42.03,5.324L42.03,5.324c-7.098-7.098-18.607-7.098-25.706,0h0C9.928,11.72,9.208,23.763,14.636,31
                                        l14.541,21l14.541-21C49.146,23.763,48.426,11.72,42.03,5.324z M29.354,24c-3.314,0-6-2.686-6-6s2.686-6,6-6s6,2.686,6,6
                                        S32.667,24,29.354,24z"
                    ></path>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div class="logforc">
                  <a href="#!">Login</a> to View Full Address
                </div>
              </div>
              <div class="enterdelflex">
                <input
                  type="text"
                  class="enterdelinp"
                  placeholder="Enter Deliver Code"
                />
                <button class="enterdelbtn">Check</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wp_npsliderheadsec">
          <img class="img-fluid phss zoom" v-bind:src="imageUrl" />
          <!-- Material unchecked -->
        </div>
      </div>
      <div class="col-md-5 sweter">
        <div class="wpnpsliderheadingsec">
          <!--<div class="wpnpcon">-->
          <h6 class="smart">
            <div class="wpnpico"><i class="far fa-heart ecoheaart"></i></div>
            {{ title }}
          </h6>
          <div class="prostarrat_sec">
            <div class="protista">4.2 <i class="fas fa-star"></i></div>
            <div class="protiratnum">28,530 Ratings &amp; 4195 Reviews</div>
          </div>
          <span class="stk">In Stock</span>
          <div class="exxoo" style="    padding: 0px; margin-top: 5px;">
            <i class="fas fa-rupee-sign"></i> 27,996 <strike>31,996</strike> 12%
            Off <span class="dicolll"> 4 Offers Available</span>
          </div>
          <!--</div>-->
        </div>
      </div>
      <div class="col-md-4">
        <div class="priquat_flexy">
          <p class="pric">Price ₹479.00</p>
          <select class="browser-default custom-select newecoselect">
            <option selected=""> Select the Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "imageUrl"]
};
</script>
