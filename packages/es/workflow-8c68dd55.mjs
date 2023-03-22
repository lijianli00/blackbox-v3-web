import { r as e } from "./index-de809ebd.mjs";
const t = {
  add: (s) => e.post("/bbxProcessInfo/add", s),
  update: (s) => e.post("/bbxProcessInfo/update", s),
  updateStatus: (s) => e.post("/bbxProcessInfo/updateStatus", s),
  get: (s) => e.post("/bbxProcessInfo/get", s),
  list: (s) => e.post("/bbxProcessInfo/list", s)
}, b = {
  list: (s) => e.post("/bbxProcessRunTask/list", s),
  findNextNodes: (s) => e.post("/bbxProcessRunTask/findNextNodes", s),
  start: (s) => e.post("/bbxProcessRunTask/start", s),
  submit: (s) => e.post("/bbxProcessRunTask/submit", s),
  change: (s) => e.post("/bbxProcessRunTask/change", s),
  findByProcessDataId: (s) => e.post("/bbxProcessRunTask/findByProcessDataId", s),
  recall: (s) => e.post("/bbxProcessRunTask/recall", s),
  findBackNodes: (s) => e.post("/bbxProcessRunTask/findBackNodes", s),
  back: (s) => e.post("/bbxProcessRunTask/back", s)
}, a = {
  add: (s) => e.post("/bbxProcessBusiness/add", s),
  list: (s) => e.post("/bbxProcessBusiness/list", s),
  delete: (s) => e.post("/bbxProcessBusiness/delete", s)
}, r = {
  add: (s) => e.post("/bbxProcessVariable/add", s),
  update: (s) => e.post("/bbxProcessVariable/update", s),
  list: (s) => e.post("/bbxProcessVariable/list", s),
  delete: (s) => e.post("/bbxProcessVariable/delete", s),
  get: (s) => e.post("/bbxProcessVariable/get", s),
  findByBusinessId: (s) => e.post("/bbxProcessVariable/findByBusinessId", s)
};
export {
  b as a,
  t as b,
  r as c,
  a as s
};
