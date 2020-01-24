<template>
  <v-app>
    <AppHeader/>
        <section class="container-fluid" id="banner" style="background:unset">
            <div class="row">
                <div class="menucontainer wid13" style="max-width: unset; width:100%;">
                    <div class="banner_section">
                        <div class="banner_content">
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Fluid/>
        <Recent/>
    <AppFooter/>
  </v-app>
</template>

<script>
import Menu from '../components/Menu';
import Fluid from '../components/Fluid';
import Recent from '../components/Recent';
import "../../public/css/mystyle.css";

export default {
  name: 'Cart',
  components: {
    Menu,
    Fluid,
    Recent
  },
  data: () => ({
    //
  }),
};
</script>
