<template>
  <li class="">
    <span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span
    ><span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span
    ><a href="#">{{ content.title }}</a>
    <div class="wstitemright clearfix wstitemrightactive" style="height: auto;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-12" v-for="(links, index) in content.links" :key="index">
            <ul class="wstliststy02 clearfix">
              <li class="wstheading clearfix">{{ links.heading }}</li>
              <li v-for="(link, index) in links.content" :key="index">
                <a :href="link.link" v-html="link.html"
                  >
                  </a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-6 col-md-12 bg4">
            <div class="row">
              <div class="col-lg-6 col-md-12" v-for="(item, index) in content.side" :key="index">
                <div class="bx">
                  <h3>{{ item.title }}</h3>
                  <p>
                  {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  </template>
</template>

<script>
export default {
  //   name: 'SubMenu1',
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  components: {},
  data: () => ({})
};
</script>
