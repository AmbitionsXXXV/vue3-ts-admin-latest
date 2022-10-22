import etcRequest from ".."

export function getEntireRoles() {
  return etcRequest.post({
    url: "/role/list",
  })
}

export function getEntireDepartments() {
  return etcRequest.post({
    url: "/department/list",
  })
}

export function getEntireMenus() {
  return etcRequest.post({
    url: "/menu/list",
  })
}
