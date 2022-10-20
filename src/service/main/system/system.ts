import etcRequest from "@/service"

/** 用户的网络请求 */
export function postUsersListData() {
  return etcRequest.post({
    url: "/users/list",
    data: {
      offset: 0,
      size: 10,
    },
  })
}
