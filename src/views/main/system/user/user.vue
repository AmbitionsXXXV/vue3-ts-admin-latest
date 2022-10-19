<template>
  <div class="user">
    <UserSearch />
    <div class="content">
      <dlv class="header">头部</dlv>
      <div class="table">表格</div>
      <div class="pagination">分页</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserSearch from "./c-cpns/user-search.vue"
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
