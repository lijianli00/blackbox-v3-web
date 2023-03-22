import { NInput as g, NButton as L, NSpin as F, NModal as M, NGridItem as q } from "naive-ui";
import { resolveComponent as _, openBlock as C, createBlock as x, unref as t, isRef as T, withCtx as o, createElementVNode as U, createVNode as e, createTextVNode as R, ref as $, createCommentVNode as D } from "vue";
import { c as w } from "./app-675b6095.mjs";
import { u as E, a as G } from "./useModal-07595bd1.mjs";
import "lodash";
import "./index-c846165e.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const j = { class: "pt-20" }, z = { class: "text-right mt-20" }, A = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(V, { expose: h, emit: y }) {
    const { formRef: k, loading: n, showModal: i, type: f, typeTxt: m, formValue: l, reseForm: p, validate: u } = E({
      appName: "",
      appRedirectUri: "",
      additionalInformation: "",
      autoapprove: ""
    }), N = async () => {
      n.value = !0;
      const { code: r, msg: a } = await w[f.value](l);
      n.value = !1, r === 0 ? ($message.success("成功"), i.value = !1, y("loadList")) : $message.error(a);
    };
    return h({
      open: (r) => {
        i.value = !0, r && r.appId ? (f.value = "update", p(r)) : (f.value = "add", p());
      }
    }), (r, a) => {
      const c = g, v = _("sh-form-item"), b = _("sh-form"), d = L, B = F, S = M;
      return C(), x(S, {
        show: t(i),
        "onUpdate:show": a[5] || (a[5] = (s) => T(i) ? i.value = s : null),
        preset: "card",
        class: "w-600",
        title: `${t(m)}应用`
      }, {
        default: o(() => [
          U("div", j, [
            e(B, { show: t(n) }, {
              default: o(() => [
                e(b, {
                  ref_key: "formRef",
                  ref: k,
                  model: t(l),
                  "label-width": "150"
                }, {
                  default: o(() => [
                    e(v, {
                      label: "应用名称",
                      path: "appName",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(c, {
                          value: t(l).appName,
                          "onUpdate:value": a[0] || (a[0] = (s) => t(l).appName = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(v, {
                      label: "重定向授权登录地址",
                      path: "appRedirectUri",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(c, {
                          value: t(l).appRedirectUri,
                          "onUpdate:value": a[1] || (a[1] = (s) => t(l).appRedirectUri = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(v, {
                      label: "重定向地址附带参数",
                      path: "additionalInformation"
                    }, {
                      default: o(() => [
                        e(c, {
                          value: t(l).additionalInformation,
                          "onUpdate:value": a[2] || (a[2] = (s) => t(l).additionalInformation = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                U("div", z, [
                  e(d, {
                    onClick: a[3] || (a[3] = (s) => i.value = !1)
                  }, {
                    default: o(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(d, {
                    type: "primary",
                    onClick: a[4] || (a[4] = (s) => t(u)(N))
                  }, {
                    default: o(() => [
                      R(" 确定 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 8, ["show"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"]);
    };
  }
}, pe = {
  __name: "index",
  setup(V) {
    const h = $(null), y = $(null), k = [
      { type: "index" },
      { title: "应用名称", key: "appName" },
      { title: "应用id", key: "appId" },
      { title: "应用秘钥", key: "appSecret" },
      {
        title: "操作",
        key: "handle",
        render(p) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                l(p);
              },
              code: "system-appClient-update",
              divider: !0
            }),
            $textBtn({
              text: "刷新密钥",
              onClick: () => {
                $delete(w.refreshSecret, { appId: p.appId }, m, "是否确认刷新密钥？");
              },
              code: "system-appClient-refreshSecret"
            })
            // $textBtn({
            //   text: '删除',
            //   onClick: () => {
            //     $delete(appClient.delete, { appId: row.appId }, loadList)
            //   },
            //   code: 'system-appClient-delete',
            //   type: 'error',
            // }),
          ];
        }
      }
    ], { formValue: n, reseForm: i } = G({
      appName: "",
      appId: ""
    }), f = async () => {
      await i(), m();
    }, m = () => {
      h.value.loadList();
    }, l = (p) => {
      y.value.open(p);
    };
    return (p, u) => {
      const N = g, I = _("sh-form-item"), r = q, a = _("sh-search-fold"), c = L, v = _("sh-data-table"), b = _("sh-content-layout");
      return C(), x(b, null, {
        header: o(() => [
          e(a, {
            ref: "search",
            model: t(n),
            reset: f,
            "load-list": m
          }, {
            default: o(() => [
              e(r, null, {
                default: o(() => [
                  e(I, {
                    label: "应用名称",
                    path: "appName"
                  }, {
                    default: o(() => [
                      e(N, {
                        value: t(n).appName,
                        "onUpdate:value": u[0] || (u[0] = (d) => t(n).appName = d)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(r, null, {
                default: o(() => [
                  e(I, {
                    label: "应用id",
                    path: "appId"
                  }, {
                    default: o(() => [
                      e(N, {
                        value: t(n).appId,
                        "onUpdate:value": u[1] || (u[1] = (d) => t(n).appId = d)
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
        btn: o(() => [
          p.$isCode("system-appClient-add") ? (C(), x(c, {
            key: 0,
            type: "primary",
            onClick: l
          }, {
            default: o(() => [
              R(" 新增 ")
            ]),
            _: 1
          })) : D("", !0)
        ]),
        default: o(() => [
          e(v, {
            ref_key: "tableRef",
            ref: h,
            "row-key": (d) => d.roleId,
            columns: k,
            api: t(w).list,
            params: t(n)
          }, null, 8, ["row-key", "api", "params"]),
          e(A, {
            ref_key: "dialogRef",
            ref: y,
            onLoadList: m
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  pe as default
};
