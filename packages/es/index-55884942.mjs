import { NImage as g, NInput as x, NGridItem as w } from "naive-ui";
import { computed as S, ref as A, reactive as B, resolveComponent as s, openBlock as U, createBlock as V, withCtx as a, createVNode as e, unref as o, h as C } from "vue";
import { u as L, m as P, n as p } from "./index-c846165e.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const W = {
  __name: "index",
  setup(D) {
    const f = L(), h = S(() => f.token), c = A(null), I = P().env.VITE_APP_BASE_API, k = [
      { type: "index" },
      {
        title: "图片",
        key: "id",
        render(n) {
          return C(g, {
            width: 60,
            src: I + p.showImg({ id: n.id, token: h.value })
          });
        }
      },
      { title: "文件归类", key: "imgDir" },
      { title: "上传人", key: "createName" },
      { title: "上传时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(n) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(p.delete, { id: n.id }, d);
              },
              code: "system-imgList-delete",
              type: "error"
            })
          ];
        }
      }
    ], _ = () => ({
      imgDir: "",
      createName: "",
      dataId: ""
    });
    let t = B(_());
    const v = () => {
      Object.assign(t, _()), d();
    }, d = () => {
      c.value.loadList();
    };
    return (n, r) => {
      const i = x, m = s("sh-form-item"), u = w, y = s("sh-search-fold"), b = s("sh-data-table"), N = s("sh-content-layout");
      return U(), V(N, null, {
        header: a(() => [
          e(y, {
            ref: "search",
            model: o(t),
            "label-placement": "left",
            reset: v,
            "load-list": d
          }, {
            default: a(() => [
              e(u, null, {
                default: a(() => [
                  e(m, {
                    label: "业务主键",
                    path: "dataId"
                  }, {
                    default: a(() => [
                      e(i, {
                        value: o(t).dataId,
                        "onUpdate:value": r[0] || (r[0] = (l) => o(t).dataId = l)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(u, null, {
                default: a(() => [
                  e(m, {
                    label: "文件归类",
                    path: "dataId"
                  }, {
                    default: a(() => [
                      e(i, {
                        value: o(t).dataId,
                        "onUpdate:value": r[1] || (r[1] = (l) => o(t).dataId = l)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(u, null, {
                default: a(() => [
                  e(m, {
                    label: "上传人",
                    path: "createName"
                  }, {
                    default: a(() => [
                      e(i, {
                        value: o(t).createName,
                        "onUpdate:value": r[2] || (r[2] = (l) => o(t).createName = l)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        default: a(() => [
          e(b, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (l) => l.roleId,
            columns: k,
            api: o(p).list,
            params: o(t)
          }, null, 8, ["row-key", "api", "params"])
        ]),
        _: 1
      });
    };
  }
};
export {
  W as default
};
