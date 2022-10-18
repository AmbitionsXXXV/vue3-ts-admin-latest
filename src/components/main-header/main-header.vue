<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="27px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑🍞</div>
      <HeaderInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HeaderInfo from "./c-cpns/header-info.vue"

// 1.内部自定义事件
const emit = defineEmits(["foldChange"])

// 2.记录状态
const isFold = ref(false)
function handleMenuIconClick() {
  // 1.内部改变状态
  isFold.value = !isFold.value

  // 2.将事件和状态传递给父组件
  emit("foldChange", isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
