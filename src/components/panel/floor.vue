<script setup>
import { defineProps } from 'vue'

// const props = defineProps(['title'])

const handleClose = () => {
  console.log('close')
}
</script>

<template>
  <div class="floor-panel-wrapper">
    <div class="floor-panel">
      <div class="title">行政楼</div>
      <div class="content">
        <div class="item">占地面积：188平方米</div>
        <div class="item">楼层数量：6楼</div>
        <div class="item">大楼使用率：100%</div>
      </div>
    </div>
    <img
      src="@img/close.png"
      alt="close icon"
      class="close"
      @click="handleClose"
    />
  </div>
</template>

<style scoped lang="scss">
.floor-panel-wrapper {
  position: absolute;
  top: 100px;
  left: 0;
  display: flex;
  gap: 8px;
}

.floor-panel {
  width: 234px;
  height: 152px;
  background-image: url('@img/floor_panel_bg.png');

  .title {
    height: 38px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 44px;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 22px 0 0 20px;
    gap: 14px;

    .item {
      font-size: 13px;
      color: #ffffff;
    }
  }
}

.close {
  width: 20px;
  height: 20px;
  background-color: rgba(12, 26, 53, 0.66);
  border-radius: 50%;
  cursor: pointer;
}
</style>
