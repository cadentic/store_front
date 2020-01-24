<template>
  <div class="col-md-4" style="display: inline-block">
    <div class="myProgress">
      <div
        class="progress-bar"
        data-percent="100"
        data-duration="1000"
        data-color="#ccc,#f29b6c"
      >
        <div
          class="background"
          style="background-color: rgb(204, 204, 204);"
        ></div>
        <div
          class="rotate"
          style="background-color: rgb(242, 155, 108); transition: transform 1000ms linear 0s; transform: rotate(360deg);"
        ></div>
        <div
          class="left"
          style="background-color: rgb(204, 204, 204); animation: 500ms step-start 0s 1 normal none running toggle; opacity: 0;"
        ></div>
        <div
          class="right"
          style="background-color: rgb(242, 155, 108); animation: 500ms step-end 0s 1 normal none running toggle; opacity: 1;"
        ></div>
        <div class="">
          <span>{{ percent }}%</span>
        </div>
      </div>
      <div class="progressCont">
        <span>{{ statName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["statName", "percent"]
};
</script>
