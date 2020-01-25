<template>
  <section class="container-fluid" id="products">
    <div class="row" style="max-width:1308px; margin:0px auto 0px auto">
      <div class="container wid13">
        <div class="products_section">
          <div class="products_content">
            <template v-for="section in sections">
              <Deals v-if="section.html === 'deals'" :key="section"></Deals>
              <Featured v-else-if="section.html === 'featured'" :key="section"></Featured>
              <Trending v-else-if="section.html === 'trending'" :key="section"></Trending>
              <Kitchen v-else-if="section.html === 'kitchen'" :key="section"></Kitchen>
              <Range v-else-if="section.html === 'range'" :key="section"></Range>
              <Fashion v-else-if="section.html === 'fashion'" :key="section"></Fashion>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Deals from "./Deals";
import Featured from "./Featured";
import Trending from "./Trending";
import Kitchen from "./Kitchen";
import Range from "./Range";
import Fashion from "./Fashion";

export default {
  // name: 'MainContent',
  components: {
    Deals,
    Featured,
    Trending,
    Kitchen,
    Range,
    Fashion
  },
  async mounted() {
    const { data } = await axios.get("/json/theme-sections.json");
    this.sections = data;
  },
  data: () => ({
    sections: []
  })
};
</script>
