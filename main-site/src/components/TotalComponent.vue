<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="tile-stats">
      <div class="tile-stats-header clearfix">
        <h2 class="total pull-left">{{ total.title }}</h2>
        <div class="month pull-right">
          <a href="javascript:;">Monthly</a>
        </div>
      </div>
      <div class="tile-stats-contain clearfix">
        <i v-bind:class="total.icon"></i>
        <div class="num pull-right">
          <p>{{ total.num }}</p>
        </div>
      </div>
      <div class="tile-stats-footer">
        <a href="#" class="view">View more..</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total"],
  data: () => ({})
};
</script>
