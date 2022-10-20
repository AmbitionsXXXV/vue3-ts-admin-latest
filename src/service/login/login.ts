import etcRequest from ".."
import type { IAccount } from "@/types"
// import { localCache } from "@/utils/cache"
// import { LOGIN_TOKEN } from "@/global/constants"

export function accountLoginRequest(account: IAccount) {
  return etcRequest.post({
    url: "/login",
    data: account,
  })
}

export function getUserInfoById(id: number) {
  return etcRequest.get({
    url: `/users/${id}`,
    // headers: {
    //   Authorization: "Bearer " + localCache.getCache(LOGIN_TOKEN),
    // },
  })
}

export function getUserMenusByRoleId(id: number) {
  return etcRequest.get({
    url: `/role/${id}/menu`,
  })
}
