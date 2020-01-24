<template>
  <footer class="container-fluid" id="footer">
    <div class="row">
      <div class="footer_section w-100">
        <div class="footer_content">
          <div class="footer_top_part">
            <div
              class="container"
              style="max-width:1308px; margin:0px auto 0px auto"
            >
              <div class="d-flex flex-wrap justify-content-between">
                <div class="footer_box">
                  <div class="footer_box_heading">
                    <h2 class="title">TEXT WIDGET</h2>
                  </div>
                  <div class="footer_box_contain">
                    <p class="text">
                      Donec sed odio dui. Nulla vitae elit libero, a pharetra
                      augue. Nullam id dolor id nibh ultricies vehicula ut id
                      elit. Integer posuere erat a ante venenatis dapibus
                      posuere velit aliquet. Duis mollis, est non commodo
                      luctus, nisi erat porttitor ligula, eget lacinia odio sem
                      nec elit.
                    </p>
                  </div>
                </div>
                <div class="footer_box">
                  <div class="footer_box_heading">
                    <h2 class="title">TWITTER WIDGET</h2>
                  </div>
                  <div class="footer_box_contain">
                    <ul>
                      <li>
                        <p class="text">
                          <a href="#">@ericafustero</a> Why thank you. Your work
                          looks awesome by the way! <a href="#">@treemelody</a>
                        </p>
                        <span class="day">19 days ago</span>
                      </li>
                      <li>
                        <p class="text">
                          <a href="#">@roymarvelous</a> You can seek a refund
                          through TF if it is not as advertised - but it
                        </p>
                        <span class="day">21 days ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer_box">
                  <div class="footer_box_heading">
                    <h2 class="title">FLICKR WIDGET</h2>
                  </div>
                  <div class="footer_box_img_part">
                    <ul class="d-flex flex-wrap justify-content-between">
                      <li v-for="i in idx">
                        <img :src="i" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bottom_part">
            <div
              class="container"
              style="max-width:1308px; margin:0px auto 0px auto"
            >
              <div
                class="d-flex flex-wrap align-items-center justify-content-between"
              >
                <div class="newsletter_form">
                  <form method="post">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter email for newsletter"
                    />
                    <button class="sub_btn" type="submit" name="submit">
                      <span class="fa fa-angle-right"></span>
                    </button>
                  </form>
                </div>

                <div class="social_share_part">
                  <ul
                    class="d-flex flex-wrap align-items-center justify-content-center"
                  >
                    <li v-for="icon in icons">
                      <a href="#">
                        <span :class="icon"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  //   name: 'Footer',
  components: {},
  data: () => ({
    icons: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-google-plus",
      "fa fa-linkedin",
      "fa fa-ellipsis-h"
    ],
    idx: [
      "assets/img/flicker1.png",
      "assets/img/flicker2.png",
      "assets/img/flicker3.png",
      "assets/img/flicker4.png",
      "assets/img/flicker5.png",
      "assets/img/flicker6.png"
    ]
  })
};
</script>
