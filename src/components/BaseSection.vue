<script setup>
import { defineProps } from 'vue'

const props = defineProps(['title'])
</script>

<template>
  <section class="base-section-wrapper">
    <div class="section-title">{{ title }}</div>
    <slot name="section-content"></slot>
  </section>
</template>

<style scoped lang="scss">
section.base-section-wrapper {
  width: 340px;
}

.section-title {
  width: 340px;
  height: 30px;
  background-image: url('@img/title_bg.png');

  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
  text-indent: 35px;
}
</style>
