<template>
  <div class="content">
    <dlv class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </dlv>
    <div class="table">
      <el-table>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
        <el-table-column></el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
