<template>
  <div class="banner_menu_part2">
    <div class="headerfull">
      <div class="wsmain clearfix">
        <nav class="wsmenu clearfix">
          <div class="overlapblackbg"></div>
          <div class="overlapblackbg"></div>
          <ul class="wsmenu-list">
            <li v-for="name in menu_title" aria-haspopup="true">
              <span class="wsmenu-click"><i class="wsmenu-arrow"></i></span
              ><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span
              ><a href="#" class="navtext"
                ><span></span> <span>{{ name }}</span></a
              >
              <div class="wsshoptabing wtsdepartmentmenu clearfix">
                <div class="wsshopwp clearfix" style="height: 400px;">
                  <ul class="wstabitem clearfix">
                    <SubMenu v-for="submenu in submenus" :key="submenu.id" :content="submenu.content"/>
                  </ul>
                </div>
              </div>
            </li>
            <Offer></Offer>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import Offer from "./Offer";
import axios from "axios";
export default {
  //   name: 'Menu',
  components: {
    Offer,
    SubMenu
  },
  async mounted() {
    let res = await axios.get("/json/menu-title.json");
    this.menu_title = res.data;
    res = await axios.get("/json/submenus.json");
    this.submenus = res.data;
  },
  data: () => ({
    menu_title: [
    ],
    submenus: []
  })
};
</script>
