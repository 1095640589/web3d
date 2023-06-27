<script setup>
import { defineProps } from 'vue'

// const props = defineProps(['title'])
</script>

<template>
  <div class="heating-panel-wrapper">
    <div class="heating-panel-title">
      <div class="left-top">智能供暖</div>
      <div class="right-bottom"></div>
    </div>
    <div class="heating-panel-info">
      <div class="heating-panel">
        <div class="item">
          <div class="name">暖表N1</div>
          <div class="info">
            <div class="top">
              <div class="left">1248.25</div>
              <div class="right">kWh</div>
            </div>
            <div class="bottom">
              <div class="left">2023.06.08</div>
              <div class="right">15:36</div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="name">暖表N1</div>
          <div class="info">
            <div class="top">
              <div class="left">1248.25</div>
              <div class="right">kWh</div>
            </div>
            <div class="bottom">
              <div class="left">2023.06.08</div>
              <div class="right">15:36</div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="name">暖表N1</div>
          <div class="info">
            <div class="top">
              <div class="left">1248.25</div>
              <div class="right">kWh</div>
            </div>
            <div class="bottom">
              <div class="left">2023.06.08</div>
              <div class="right">15:36</div>
            </div>
          </div>
        </div>
      </div>
      <img src="@img/close.png" alt="close" class="close" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.heating-panel-wrapper {
  position: absolute;
  top: 300px;
  left: 500px;
}

.heating-panel-title {
  width: 214px;

  .left-top {
    width: 138px;
    height: 40px;
    background-image: url('@img/heating-left-top.png');

    font-size: 16px;
    color: #ffffff;
    line-height: 40px;
    text-align: center;
  }

  .right-bottom {
    position: relative;
    width: 76px;
    height: 68px;
    background: linear-gradient(
      45deg,
      transparent 49.5%,
      rgba(255, 174, 0, 0.6) 49.5%,
      rgba(255, 174, 0, 0.6) 50.5%,
      transparent 50.5%
    );
    margin-left: 133px;
  }
}

.heating-panel-info {
  display: flex;
  gap: 8px;

  .heating-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 254px;
    height: 165px;
    background-image: url('@img/heating-panel.png');
    gap: 16px;
  }

  img.close {
    width: 20px;
    height: 20px;
    background: rgba(12, 26, 53, 0.66);
    border-radius: 50%;
    cursor: pointer;
  }
}

.item {
  display: flex;
  align-items: center;
  padding-left: 25px;

  .name {
    width: 86px;
    font-size: 13px;
    color: #ffffff;

    background: linear-gradient(0deg, #ffae00 0%, #e8f3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .top,
  .bottom {
    display: flex;
    color: #ffffff;

    .left {
      width: 87px;
    }

    .right {
      width: 36px;
    }
  }

  .top {
    font-size: 13px;
  }

  .bottom {
    font-size: 12px;
  }
}
</style>
