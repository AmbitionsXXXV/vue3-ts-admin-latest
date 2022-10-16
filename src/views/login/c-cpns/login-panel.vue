<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h1 class="title">哦哦啊后台管理系统</h1>

    <!-- 中间tabs -->
    <div class="tabs">
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="账号登录">
          <div>10969</div>
          <div>10969</div>
        </el-tab-pane>
        <el-tab-pane label="手机登录">
          <div>3636</div>
          <div>3636</div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isRemPwd = ref(false)
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
