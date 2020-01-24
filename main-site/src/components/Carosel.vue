<template>
    <div class="banner_market_part">
        <div class="d-flex flex-wrap justify-content-between" style="width: 100%; height: 100%">
            <div class="market_left_part">
                <div class="market_left_heading">
                    <div class="d-flex flex-wrap align-items-center">
                        <span class="fa fa-list"></span>
                        <h2 class="title">MY MARKETS</h2>
                    </div>
                </div>
                <div class="market_left_list">
                    <ul>
                        <li v-for="name in menu_title">
                            <a href="#">{{ name }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="market_slider_part">
                <Slide/>
                <!-- <div class="owl-carousel owl-theme h-100 owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-3100px, 0px, 0px); transition: all 0.25s ease 0s; width: 6820px;">
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 620px;">
                                <div class="item">
                                    <div class="slider_box_part" style="background-image: url(assets/img/women.png);">
                                        <div class="slider_box">
                                            <div class="slider_box_heading">
                                                <h2 class="title">Women’s Fashion</h2>
                                            </div>
                                            <div class="slider_box_description">
                                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                            </div>
                                            <div class="slider_box_btn">
                                                <a href="#" class="shop_now_btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                    <div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                </div> -->
            </div>

            <div class="market_right_part">
                <div class="market_right_heading">
                    <h2 class="title">One - Stop Solution</h2>
                </div>
                <div class="market_right_contain">
                    <div class="market_right_products" v-for="item in solutions" :key="item.id">
                        <div class="product_heading">
                          <h2 class="title">{{ item.title }}</h2>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div class="source_now_btn_part">
                                <a class="source_btn" :href="item.link">Source now</a>
                            </div>
                            <div class="products_img">
                                <img :src="item.img" :alt="item.title">
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
import Slide from '../components/Slide'
export default {
  // name: 'Carosel',
  components: {
      Slide
  },
  async mounted() {
    let res = await axios.get("/json/carousel-menu-title.json");
    this.menu_title = res.data;
    res = await axios.get("/json/carousel-one-stop-solution.json");
    this.solutions = res.data;
  },
  data: () => ({
    menu_title: [],
    solutions: []
  }),
};
</script>
