<script setup>
import { defineProps } from 'vue'

// const props = defineProps(['title'])
</script>

<template>
  <div class="device-panel-wrapper">
    <img src="@img/close.png" alt="close" class="close" />

    <div class="item">状态：开</div>
    <div class="item">故障：无</div>
    <div class="item">运行：正常</div>
  </div>
</template>

<style scoped lang="scss">
.device-panel-wrapper {
  position: absolute;
  top: 100px;
  left: 280px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 110px;
  height: 80px;
  background-image: url('@img/device_panel_bg.png');
  gap: 6px;
}

img.close {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.item {
  font-size: 13px;
  color: #ffffff;
  text-indent: 18px;
}
</style>
