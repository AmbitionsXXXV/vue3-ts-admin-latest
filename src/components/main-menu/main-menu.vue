import useLoginStore from '../../store/login/login';
<template>
  <div class="main-menu">
    <!-- 1.Logo -->
    <div class="logo">
      <img class="img" src="@/assets/image/logo.jpg" alt="" />
      <h2 v-show="!isFold" class="title">哦哦啊管理系统</h2>
    </div>

    <!-- 2.Menu -->
    <div class="menu">
      <el-menu
        :collapse="isFold"
        default-active="3"
        active-text-color="#fff"
        text-color="#b7bdc3"
        background-color="#001529"
      >
        <!-- 遍历整个菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 字符串: el-icon-monitor => 组件 component动态组件 -->
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login"
import { useRouter } from "vue-router"

// 1.定义 props
defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
})

// 2.获取动态的菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 3.监听item的点击
const router = useRouter()
function handleItemClick(item: any) {
  const url = item.url
  // console.log(url)
  router.push(url)
}
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
