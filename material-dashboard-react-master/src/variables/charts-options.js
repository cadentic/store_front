// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

export const options = {
  lineSmooth: Chartist.Interpolation.cardinal({
    tension: 0
  }),
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export const responsiveOptions = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];

export const animation = {
  draw: function(data) {
    if (data.type === "line" || data.type === "area") {
      data.element.animate({
        d: {
          begin: 600,
          dur: 700,
          from: data.path
          .clone()
          .scale(1, 0)
          .translate(0, data.chartRect.height())
          .stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    } else if (data.type === "point") {
      data.element.animate({
        opacity: {
          begin: (data.index + 1) * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "ease"
        }
      });
    }
  }
};
