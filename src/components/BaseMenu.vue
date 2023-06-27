<script setup>
import { defineProps, ref, defineEmits } from 'vue'

const props = defineProps(['menus', 'selected'])
// const selected = ref(0)
const emit = defineEmits(['menuClick'])

const handleClick = (id, menu) => {
  emit('menuClick', id, menu.name)
}
</script>

<template>
  <div class="base-menu-wrapper">
    <div
      class="item"
      v-for="(menu, id) in menus"
      :key="id"
      :class="{ active: selected === id }"
      @click="handleClick(id, menu)"
    >
      <div class="menu-image">
        <img
          :src="selected === id ? menu.sel : menu.icon"
          alt=""
          class="icon"
        />
        <div class="bottom"></div>
      </div>
      <div class="name">{{ menu.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-menu-wrapper {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 60px;
}

.item {
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  .menu-image {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 88px;
    height: 90px;

    img.icon {
      width: 50px;
      height: 50px;
      margin-bottom: -40px;
      transition: all 0.4s;
    }

    .bottom {
      width: 88px;
      height: 60px;
      background-image: url('@img/home_menu.png');
    }
  }

  .name {
    font-size: 14px;
    color: #ffffff;
    margin-top: 4px;
  }

  &.active {
    img.icon {
      margin-bottom: -30px;
    }
    .bottom {
      background-image: url('@img/home_menu_sel.png');
    }

    .name {
      background: linear-gradient(0deg, #aad4ff 0%, #e8f3ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
