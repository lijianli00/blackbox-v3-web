import { openBlock as e, createElementBlock as o, createElementVNode as t } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, h = /* @__PURE__ */ t("path", {
  fill: "none",
  d: "M0 .001h20v20H0z"
}, null, -1), r = /* @__PURE__ */ t("g", {
  fill: "currentColor",
  stroke: "currentColor",
  "stroke-miterlimit": "10",
  "stroke-width": ".6"
}, [
  /* @__PURE__ */ t("path", { d: "M9.32 6.739H4.86a.461.461 0 0 0 0 .922h4.459a.461.461 0 0 0 0-.922Zm0 3.369H4.86a.462.462 0 1 0 0 .923h4.459a.462.462 0 0 0 0-.923Zm0 3.381H4.86a.462.462 0 1 0 0 .923h4.459a.462.462 0 0 0 0-.923Zm5.574 0h-1.122a.462.462 0 1 0 0 .923h1.122a.462.462 0 0 0 0-.923Z" }),
  /* @__PURE__ */ t("path", { d: "M17.932 17.248h-.65v-4.865a2.308 2.308 0 0 0-1.092-1.956l-3.859-2.355V4.291a2.292 2.292 0 0 0-2.9-2.207l-5.647 1.71a2.3 2.3 0 0 0-1.675 2.207v11.247h-.65a.461.461 0 0 0 0 .922h16.47a.461.461 0 0 0 0-.922Zm-6.521 0H3.035V6.001a1.376 1.376 0 0 1 1.006-1.318l5.64-1.714a1.372 1.372 0 0 1 1.728 1.318Zm4.948 0h-4.028V9.154l3.369 2.059a1.37 1.37 0 0 1 .654 1.169v4.868Z" })
], -1), n = [
  h,
  r
];
function l(c, s) {
  return e(), o("svg", a, n);
}
const m = { render: l };
export {
  m as c
};
