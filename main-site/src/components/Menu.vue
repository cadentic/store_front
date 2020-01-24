<template>
    <div class="banner_menu_part2">
        <div class="headerfull">
            <div class="wsmain clearfix">
                <nav class="wsmenu clearfix">
                    <div class="overlapblackbg"></div>
                    <div class="overlapblackbg"></div>
                    <ul class="wsmenu-list">
                        <li v-for="name in menu_title" aria-haspopup="true"><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><span class="wsmenu-click"><i class="wsmenu-arrow"></i></span><a href="#" class="navtext"><span></span> <span>{{ name }}</span></a>
                            <div class="wsshoptabing wtsdepartmentmenu clearfix">
                                <div class="wsshopwp clearfix" style="height: 400px;">
                                    <ul class="wstabitem clearfix">
                                        <SubMenu1/>
                                        <SubMenu2/>
                                        <SubMenu3/>
                                        <SubMenu4/>
                                        <SubMenu5/>
                                        <SubMenu6/>
                                        <SubMenu7/>
                                        <SubMenu8/>
                                        <SubMenu9/>
                                        <SubMenu10/>
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
import SubMenu1 from './SubMenu1'
import SubMenu2 from './SubMenu2'
import SubMenu3 from './SubMenu3'
import SubMenu4 from './SubMenu4'
import SubMenu5 from './SubMenu5'
import SubMenu6 from './SubMenu6'
import SubMenu7 from './SubMenu7'
import SubMenu8 from './SubMenu8'
import SubMenu9 from './SubMenu9'
import SubMenu10 from './SubMenu10'
import Offer from './Offer'
export default {
//   name: 'Menu',
  components: {
      Offer,
      SubMenu1,
      SubMenu2,
      SubMenu3,
      SubMenu4,
      SubMenu5,
      SubMenu6,
      SubMenu7,
      SubMenu8,
      SubMenu9,
      SubMenu10
  },
  data: () => ({
    menu_title:['Electronics', 'Tv & Appliences', 'Men', 'Women', 'Kids', 'Home & Furniture', 'Sports,Books & More']
  }),
};
</script>