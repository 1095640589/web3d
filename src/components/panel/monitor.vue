<script setup>
import { defineProps, onMounted } from 'vue'

import { useStore } from '@/stores'
const visible = useStore()

const handleClose = () => {
  console.log('false')
  visible.setMonitorVisible(false)
}
onMounted(() => {
  // console.log(visible.monitorVisible)
})
// const props = defineProps(['title'])
</script>

<template>
  <div class="monitor-panel-wrapper" v-show="visible.monitorVisible">
    <div class="top">
      <div class="title">监控</div>
      <img
        src="@img/close.png"
        alt="close"
        class="close"
        @click="handleClose"
      />
    </div>
    <div class="content">
      <div class="video">
        <video src="@/assets/video/1.mp4" muted autoplay loop></video>
      </div>
      <!--      <div class="info">-->
      <!--        <span>荷载人数：14人</span>-->
      <!--        <span>当前人数：8人</span>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.monitor-panel-wrapper {
  position: absolute;
  //top: 100px;
  //left: 800px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 220px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #cccccc;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;

  .title {
    font-size: 12px;
    color: #ffffff;
    line-height: 20px;
    text-indent: 6px;
  }

  img.close {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}

.content {
  position: relative;
  width: 100%;
  height: 118px;

  .video {
    width: 100%;
    height: 100%;
    //background-image: url('@img/video_image.png');

    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 20px;
    padding: 0 10px;
    font-size: 12px;
    color: #cccccc;
    line-height: 20px;
  }
}
</style>
