import { NButton as i, NResult as c } from "naive-ui";
import { openBlock as m, createElementBlock as p, createVNode as t, withCtx as o, createTextVNode as a } from "vue";
import { u, a as _ } from "./index-2db33f86.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const l = { class: "h-full flex-center" }, T = {
  __name: "error-405",
  setup(f) {
    const e = u(), r = async () => {
      await _.logout(), e.logout();
    };
    return (d, h) => {
      const n = i, s = c;
      return m(), p("div", l, [
        t(s, {
          status: "405",
          title: "405 权限不够",
          description: "总有些门是对你关闭的"
        }, {
          footer: o(() => [
            t(n, { onClick: r }, {
              default: o(() => [
                a("返回登录")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
export {
  T as default
};
