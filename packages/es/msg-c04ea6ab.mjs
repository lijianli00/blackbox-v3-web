import { r as t } from "./index-2db33f86.mjs";
const o = {
  add: (s) => t.post("/bbxMsgModel/add", s),
  delete: (s) => t.post("/bbxMsgModel/delete", s),
  update: (s) => t.post("/bbxMsgModel/update", s),
  get: (s) => t.post("/bbxMsgModel/get", s),
  list: (s) => t.post("/bbxMsgModel/list", s),
  checkModelCode: (s) => t.post("/bbxMsgModel/checkModelCode", s)
}, a = {
  get: (s) => t.post("/bbxMgsTask/get", s),
  list: (s) => t.post("/bbxMgsTask/listTask", s),
  taskStorageList: (s) => t.post("/bbxMgsTask/listTaskStorage", s),
  getTaskStorage: (s) => t.post("/bbxMgsTask/getTaskStorage", s)
};
export {
  a,
  o as m
};
