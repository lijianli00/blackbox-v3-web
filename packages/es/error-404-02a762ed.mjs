import { NButton as c, NResult as _ } from "naive-ui";
import { resolveComponent as s, openBlock as l, createElementBlock as u, createVNode as t, withCtx as e, createTextVNode as a } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.mjs";
const i = {}, m = { class: "h-full flex-center" };
function p(d, x) {
  const o = c, n = s("router-link"), r = _;
  return l(), u("div", m, [
    t(r, {
      "m-auto": "",
      status: "404",
      title: "404 资源不存在",
      description: "生活总归带点荒谬"
    }, {
      footer: e(() => [
        t(n, { to: "/" }, {
          default: e(() => [
            t(o, null, {
              default: e(() => [
                a("返回上一步")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const B = /* @__PURE__ */ f(i, [["render", p]]);
export {
  B as default
};
