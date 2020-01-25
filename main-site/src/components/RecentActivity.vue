<template>
  <div class="panel panel-default panel-zoqolo" data-collapsed="0">
    <!-- panel head -->
    <div class="panel-heading">
      <div class="panel-title">
        <i class="entypo-calendar">&nbsp;</i>Recent Activity
      </div>
    </div>
    <!-- panel body -->
    <div class="panel-body">
      <div class="recentActList">
        <ul class="list-unstyled">
          <li v-for="(item, index) in data" :key="index">
            <div class="actIcon">
              <span class="entypo-basket"></span>
            </div>
            <div class="actContent">
              <h3>{{ item.title }}</h3>
              <h5>
                {{ item.text }}
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    data: []
  }),
  async mounted() {
    const { data } = await axios.get("/json/main-dashboard-recent-activity.json");
    this.data = data;
  }
};
</script>
