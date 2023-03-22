import { NButton as r, NResult as c } from "naive-ui";
import { openBlock as _, createElementBlock as s, createVNode as t, withCtx as e, createTextVNode as l } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.mjs";
const a = {}, i = { class: "h-full flex-center" };
function u(m, d) {
  const o = r, n = c;
  return _(), s("div", i, [
    t(n, {
      status: "500",
      title: "500 服务器错误",
      description: "服务器出错可能说明该雇更多程序员了"
    }, {
      footer: e(() => [
        t(o, null, {
          default: e(() => [
            l("返回上一步")
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const N = /* @__PURE__ */ f(a, [["render", u]]);
export {
  N as default
};
