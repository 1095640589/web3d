<script setup>
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue'
import echarts from '@u/echarts'

const props = defineProps(['options'])
const chartRef = ref(null)
let chart = echarts.ECharts
const resizeHandler = () => {
  chart.resize()
}
onMounted(() => {
  setTimeout(() => {
    initChart()
  }, 20)
  window.addEventListener('resize', resizeHandler)
})

const initChart = () => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
    ...props.options
  })
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chart.dispose()
})
</script>

<template>
  <div class="my-chart" ref="chartRef"></div>
</template>

<style scoped lang="scss">
.my-chart {
}
</style>
