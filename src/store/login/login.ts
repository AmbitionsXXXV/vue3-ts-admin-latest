import { LOGIN_TOKEN } from "@/global/constants"
import router from "@/router"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId,
} from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"

interface ILoginState {
  token: string
  userInfo: any
  userMenu: any
}

const useLoginStore = defineStore("login", {
  // 如何指定state的类型
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userInfo: {},
    userMenu: [],
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token信息并进行本地缓存
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2.获取登录用户的详细信息(role信息)
      const userInfoResult = await getUserInfoById(id)
      this.userInfo = userInfoResult.data
      console.log(this.userInfo.role)

      // 3.根据角色请求用户的权限(菜单menus)
      const userMenuResult = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenu = userMenuResult.data

      // 4.进行页面跳转
      router.push("/main")
    },
  },
})

export default useLoginStore
