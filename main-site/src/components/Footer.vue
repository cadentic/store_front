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
                      {{ data.textWidget }}
                    </p>
                  </div>
                </div>
                <div class="footer_box">
                  <div class="footer_box_heading">
                    <h2 class="title">TWITTER WIDGET</h2>
                  </div>
                  <div class="footer_box_contain">
                    <ul>
                      <li v-for="(comment, index) in data.twitterWidget" :key="index">
                        <p class="text" v-html="comment.html">
                        </p>
                        <span class="day">{{ comment.text }}</span>
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
                      <li v-for="(i, index) in data.flickerWidget" :key="index">
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
import axios from "axios";
export default {
  //   name: 'Footer',
  components: {},
  data: () => ({
    data: {},
    icons: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-google-plus",
      "fa fa-linkedin",
      "fa fa-ellipsis-h"
    ]
  }),
  async mounted() {
    const { data } = await axios.get("/json/main-footer.json");
    this.data = data;
  }
};
</script>
