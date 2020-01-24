<template>
  <section class="container-fluid" id="banner">
    <div class="row" style="max-width:1308px; margin:0px auto 0px auto">
      <div class="container wid13">
        <div class="banner_section">
          <div class="banner_content">
            <Menu />
            <Carosel />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from "./Menu";
import Carosel from "./Carosel";

export default {
  // name: 'Section',
  components: {
    Menu,
    Carosel
  },
  data: () => ({
    //
  })
};
</script>
