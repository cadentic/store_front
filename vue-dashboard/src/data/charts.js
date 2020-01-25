import { ThemeColors } from '@/utils'
const colors = ThemeColors()

export const lineChartData = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false
    }
  ]
}

export const polarAreaChartData = {
  datasets: [
    {
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10
      ]
    }
  ]
}

export const areaChartData = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor1_10
    }
  ]
}

export const scatterChartData = {
  datasets: [
    {
      borderWidth: 2,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10
    },
    {
      borderWidth: 2,
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10
    }
  ]
}

export const barChartData = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      borderWidth: 2
    },
    {
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      borderWidth: 2
    }
  ]
}

export const radarChartData = {
  datasets: [
    {
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10
    },
    {
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor2,
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10
    }
  ]
}

export const pieChartData = {
  datasets: [
    {
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10
      ],
      borderWidth: 2
    }
  ]
}

export const doughnutChartData = {
  datasets: [
    {
      borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10
      ],
      borderWidth: 2
    }
  ]
}

export const smallChartData1 = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2
    }
  ]
}

export const smallChartData2 = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2
    }
  ]
}

export const smallChartData3 = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2
    }
  ]
}

export const smallChartData4 = {
  datasets: [
    {
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2
    }
  ]
}

export const conversionChartData = {
  datasets: [
    {
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor2_10
    }
  ]
}
