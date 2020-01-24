<template>
  <v-carousel :show-arrows="false" style="height: 355px;">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      :description="item.description"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
export default {
  async mounted() {
    const { data } = await axios.get("/json/slide.json");
    this.items = data;
  },
  data() {
    return {
      items: []
    };
  }
};
</script>
