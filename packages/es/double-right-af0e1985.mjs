import { openBlock as e, createElementBlock as t, createElementVNode as a } from "vue";
const d = {
  0: "待发送",
  1: "完成",
  2: "已失效",
  3: "推送失败"
}, h = [
  { label: "待发送", value: 0 },
  { label: "完成", value: 1 },
  { label: "已失效", value: 2 },
  { label: "推送失败", value: 3 }
], l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "12",
  fill: "currentColor"
}, o = /* @__PURE__ */ a("path", {
  fill: "#666",
  d: "m7.352 6.38 5.825-4.56a.284.284 0 0 0 .11-.224V.216a.142.142 0 0 0-.231-.113L7 4.843.945.102a.143.143 0 0 0-.23.112v1.38c0 .088.04.172.109.226L6.647 6.38a.571.571 0 0 0 .705 0Zm0 5.428 5.825-4.559a.284.284 0 0 0 .11-.225v-1.38a.142.142 0 0 0-.231-.113L7 10.271.945 5.53a.143.143 0 0 0-.23.113v1.38c0 .088.04.172.109.225l5.823 4.56a.571.571 0 0 0 .705 0Z"
}, null, -1), s = [
  o
];
function c(n, r) {
  return e(), t("svg", l, s);
}
const u = { render: c };
export {
  d as a,
  u as d,
  h as t
};
