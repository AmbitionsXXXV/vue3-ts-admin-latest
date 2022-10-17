import { LOGIN_TOKEN } from "@/global/constants"
import router from "@/router"
import { accountLoginRequest } from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"
import { defineStore } from "pinia"

const useLoginStore = defineStore("login", {
  state: () => ({
    id: "",
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    name: "",
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token信息
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 3.进行页面跳转
      router.push("/main")
    },
  },
})

export default useLoginStore
