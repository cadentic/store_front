<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.charts')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.line')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <line-shadow-chart :data="lineChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <line-chart :data="lineChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.polar')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <polar-area-shadow-chart v-if="chartsDataLoaded" :data="polarAreaChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <polar-area-chart v-if="chartsDataLoaded" :data="polarAreaChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.area')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <area-shadow-chart v-if="chartsDataLoaded" :data="areaChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <area-chart v-if="chartsDataLoaded" :data="areaChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.scatter')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <scatter-shadow-chart v-if="chartsDataLoaded" :data="scatterChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <scatter-chart v-if="chartsDataLoaded" :data="scatterChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.bar')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <bar-shadow-chart v-if="chartsDataLoaded" :data="barChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <bar-chart :data="barChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.radar')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <radar-shadow-chart v-if="chartsDataLoaded" :data="radarChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <radar-chart v-if="chartsDataLoaded" :data="radarChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.pie')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <pie-shadow-chart v-if="chartsDataLoaded" :data="pieChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <pie-chart v-if="chartsDataLoaded" :data="pieChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12" >
        <b-card class="mb-4" :title="$t('charts.doughnut')">
            <b-row>
                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.shadow') }}</h6>
                    <div class="chart-container">
                        <doughnut-shadow-chart v-if="chartsDataLoaded" :data="doughnutChartData" :height="300"/>
                    </div>
                </b-colxx>

                <b-colxx xxs="12" lg="6" class="mb-4">
                   <h6 class="card-subtitle">{{ $t('charts.no-shadow') }}</h6>
                    <div class="chart-container">
                        <doughnut-chart v-if="chartsDataLoaded" :data="doughnutChartData" :height="300"/>
                    </div>
                </b-colxx>
            </b-row>
        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>

<script>
import { lineChartData, polarAreaChartData, areaChartData, scatterChartData, barChartData, radarChartData, pieChartData, doughnutChartData } from '@/data/charts'
import LineShadowChart from '@/components/Charts/LineShadow'
import LineChart from '@/components/Charts/Line'
import PolarAreaShadowChart from '@/components/Charts/PolarAreaShadow'
import PolarAreaChart from '@/components/Charts/PolarArea'
import AreaShadowChart from '@/components/Charts/AreaShadow'
import AreaChart from '@/components/Charts/Area'
import ScatterShadowChart from '@/components/Charts/ScatterShadow'
import ScatterChart from '@/components/Charts/Scatter'
import BarShadowChart from '@/components/Charts/BarShadow'
import BarChart from '@/components/Charts/Bar'
import RadarShadowChart from '@/components/Charts/RadarShadow'
import RadarChart from '@/components/Charts/Radar'
import PieShadowChart from '@/components/Charts/PieShadow'
import PieChart from '@/components/Charts/Pie'
import DoughnutShadowChart from '@/components/Charts/DoughnutShadow'
import DoughnutChart from '@/components/Charts/Doughnut'
import { fetch } from '@/utils'
import { merge } from 'lodash'

export default {
  components: {
    LineChart,
    LineShadowChart,
    PolarAreaChart,
    PolarAreaShadowChart,
    AreaShadowChart,
    AreaChart,
    ScatterShadowChart,
    ScatterChart,
    BarShadowChart,
    BarChart,
    RadarShadowChart,
    RadarChart,
    PieShadowChart,
    PieChart,
    DoughnutShadowChart,
    DoughnutChart
  },
  data () {
    return {
      chartsDataLoaded: false,
      charts: {},
      lineChartData,
      polarAreaChartData,
      areaChartData,
      scatterChartData,
      barChartData,
      radarChartData,
      pieChartData,
      doughnutChartData
    }
  },
  async mounted () {
    this.charts = await fetch('/json/vue-charts.json')
    this.lineChartData = merge(lineChartData, this.charts['lineChartData'])
    this.polarAreaChartData = merge(polarAreaChartData, this.charts['polarAreaChartData'])
    this.areaChartData = merge(areaChartData, this.charts['areaChartData'])
    this.scatterChartData = merge(scatterChartData, this.charts['scatterChartData'])
    this.barChartData = merge(barChartData, this.charts['barChartData'])
    this.radarChartData = merge(radarChartData, this.charts['radarChartData'])
    this.pieChartData = merge(pieChartData, this.charts['pieChartData'])
    this.doughnutChartData = merge(doughnutChartData, this.charts['doughnutChartData'])
    this.chartsDataLoaded = true
  }

}
</script>
