<template>
  <div>
    <AppHeader />
    <section class="container-fluid" id="banner" style="background:unset">
      <div class="row">
        <div class="menucontainer wid13" style="max-width: unset; width:100%;">
          <div class="banner_section">
            <div class="banner_content">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid productsisecc">
      <div class="row">
        <Quickcol />
        <Paading :type="$route.params.type" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Quickcol from "../components/Quickcol";
import Paading from "../components/Paading";
import "../../public/css/mystyle.css";

export default {
  name: "AddProduct",
  components: {
    Menu,
    Quickcol,
    Paading
  }
};
</script>
