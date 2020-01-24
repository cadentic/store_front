<template>
  <v-carousel :show-arrows="false" style="height: 355px;">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :title="item.title"
      :description="item.description"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'assets/img/women.png',
            title:'Women’s Fashion',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
          },
          {
            src: 'assets/img/women.png',
          },
          {
            src: 'assets/img/women.png',
          },
          {
            src: 'assets/img/women.png',
          },
        ],
      }
    },
  }
</script>