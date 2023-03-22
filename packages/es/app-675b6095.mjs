import { r as p } from "./index-c846165e.mjs";
const b = {
  add: (e) => p.post("/bbxAppClient/add", e),
  delete: (e) => p.post("/bbxAppClient/delete", e),
  update: (e) => p.post("/bbxAppClient/update", e),
  get: (e) => p.post("/bbxAppClient/get", e),
  list: (e) => p.post("/bbxAppClient/list", e),
  refreshSecret: (e) => p.post("/bbxAppClient/refreshSecret", e)
}, s = {
  add: (e) => p.post("/bbxAppMenu/add", e),
  delete: (e) => p.post("/bbxAppMenu/delete", e),
  update: (e) => p.post("/bbxAppMenu/update", e),
  get: (e) => p.post("/bbxAppMenu/get", e),
  getMenuTree: (e) => p.post("/bbxAppMenu/getMenuTree", e),
  getAuthTreeByClientId: (e) => p.post("/bbxAppMenu/getAuthTreeByClientId", e)
}, d = {
  add: (e) => p.post("/bbxAppResource/add", e),
  delete: (e) => p.post("/bbxAppResource/delete", e),
  update: (e) => p.post("/bbxAppResource/update", e),
  findByMenuId: (e) => p.post("/bbxAppResource/findByMenuId", e)
};
export {
  s as a,
  d as b,
  b as c
};
