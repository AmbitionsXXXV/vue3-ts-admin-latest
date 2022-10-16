<template>
  <div class="panel-account">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      status-icon
      size="large"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { FormRules } from "element-plus"

// 1.定义account数据
const account = reactive({
  name: "",
  password: "",
})

// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: "必须输入帐号信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: "必须是6~20数字或字母组成~",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "必须输入密码信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur",
    },
  ],
}

// 3.执行账号的登录逻辑
function loginAction() {
  console.log("执行账号的登录", account.name, account.password)
}

defineExpose({
  loginAction,
})
</script>

<style scoped></style>
