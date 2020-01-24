<template>
    <li aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#" class="navtext"><span></span> <span>Offer Zone</span></a>
        <div class="wsmegamenu clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb" v-for="(item, index) in items" :key="index">
                        <img class="" :src="item.img" width="60" alt="">
                        <p>{{ item.title }}</p>
                        <span class="ubermenu-target-title ubermenu-target-text">{{ item.description }}</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import axios from "axios";
export default {
//   name: 'Menu',
  components: {

  },
  async mounted() {
    const { data } = await axios.get("/json/offer-zone.json");
    this.items = data;
  },
  data: () => ({
    items: []
  }),
};
</script>