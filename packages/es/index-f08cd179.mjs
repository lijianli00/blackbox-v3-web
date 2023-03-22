import { NInput as L, NButton as g, NSpin as F, NModal as M } from "naive-ui";
import { resolveComponent as f, openBlock as R, createBlock as I, unref as e, isRef as q, withCtx as o, createElementVNode as x, createVNode as a, createTextVNode as U, ref as $, createCommentVNode as T } from "vue";
import { c as C } from "./app-90dc6322.mjs";
import { u as D, a as E } from "./useModal-07595bd1.mjs";
import "lodash";
import "./index-de809ebd.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const j = { class: "pt-20" }, z = { class: "text-right mt-20" }, A = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(V, { expose: y, emit: h }) {
    const { formRef: b, loading: _, showModal: n, type: c, typeTxt: k, formValue: l, reseForm: v, validate: s } = D({
      appName: "",
      appRedirectUri: "",
      additionalInformation: "",
      autoapprove: "",
      mobileRedirectUri: ""
    }), d = async () => {
      _.value = !0;
      const { code: r, msg: t } = await C[c.value](l.value);
      _.value = !1, r === 0 ? ($message.success("成功"), n.value = !1, h("loadList")) : $message.error(t);
    };
    return y({
      open: (r) => {
        n.value = !0, r && r.appId ? (c.value = "update", v(r)) : (c.value = "add", v());
      }
    }), (r, t) => {
      const m = L, u = f("sh-form-item"), N = f("sh-form"), i = g, B = F, S = M;
      return R(), I(S, {
        show: e(n),
        "onUpdate:show": t[6] || (t[6] = (p) => q(n) ? n.value = p : null),
        preset: "card",
        class: "w-600",
        title: `${e(k)}应用`
      }, {
        default: o(() => [
          x("div", j, [
            a(B, { show: e(_) }, {
              default: o(() => [
                a(N, {
                  ref_key: "formRef",
                  ref: b,
                  model: e(l),
                  "label-width": "150"
                }, {
                  default: o(() => [
                    a(u, {
                      label: "应用名称",
                      path: "appName",
                      rule: "required"
                    }, {
                      default: o(() => [
                        a(m, {
                          value: e(l).appName,
                          "onUpdate:value": t[0] || (t[0] = (p) => e(l).appName = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(u, {
                      label: "重定向授权登录地址",
                      path: "appRedirectUri",
                      rule: "required"
                    }, {
                      default: o(() => [
                        a(m, {
                          value: e(l).appRedirectUri,
                          "onUpdate:value": t[1] || (t[1] = (p) => e(l).appRedirectUri = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(u, {
                      label: "重定向地址附带参数",
                      path: "additionalInformation"
                    }, {
                      default: o(() => [
                        a(m, {
                          value: e(l).additionalInformation,
                          "onUpdate:value": t[2] || (t[2] = (p) => e(l).additionalInformation = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(u, {
                      label: "app登录成功地址",
                      path: "mobileRedirectUri"
                    }, {
                      default: o(() => [
                        a(m, {
                          value: e(l).mobileRedirectUri,
                          "onUpdate:value": t[3] || (t[3] = (p) => e(l).mobileRedirectUri = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                x("div", z, [
                  a(i, {
                    onClick: t[4] || (t[4] = (p) => n.value = !1)
                  }, {
                    default: o(() => [
                      U(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(i, {
                    type: "primary",
                    onClick: t[5] || (t[5] = (p) => e(s)(d))
                  }, {
                    default: o(() => [
                      U(" 确定 ")
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
}, ne = {
  __name: "index",
  setup(V) {
    const y = $(null), h = $(null), b = [
      { label: "应用名称", key: "appName" },
      { label: "应用id", key: "appId" }
    ], _ = [
      { type: "index" },
      { title: "应用名称", key: "appName" },
      { title: "应用id", key: "appId" },
      { title: "应用秘钥", key: "appSecret" },
      {
        title: "操作",
        key: "handle",
        render(s) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                v(s);
              },
              code: "system-appClient-update",
              divider: !0
            }),
            $textBtn({
              text: "刷新密钥",
              onClick: () => {
                $delete(C.refreshSecret, { appId: s.appId }, l, "是否确认刷新密钥？");
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
    ], { formValue: n, reseForm: c } = E({
      appName: "",
      appId: ""
    }), k = async () => {
      await c(), l();
    }, l = () => {
      y.value.loadList();
    }, v = (s) => {
      h.value.open(s);
    };
    return (s, d) => {
      const w = g, r = L, t = f("sh-form-item"), m = f("sh-search-area"), u = f("sh-data-table"), N = f("sh-content-layout");
      return R(), I(N, null, {
        header: o(() => [
          a(m, {
            form: e(n),
            "dropdown-list": b,
            onLoadList: l,
            onReset: k
          }, {
            left: o(() => [
              s.$isCode("system-appClient-add") ? (R(), I(w, {
                key: 0,
                type: "primary",
                onClick: v
              }, {
                default: o(() => [
                  U(" 新增 ")
                ]),
                _: 1
              })) : T("", !0)
            ]),
            default: o(() => [
              a(t, {
                span: 12,
                label: "应用名称",
                path: "appName"
              }, {
                default: o(() => [
                  a(r, {
                    value: e(n).appName,
                    "onUpdate:value": d[0] || (d[0] = (i) => e(n).appName = i)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(t, {
                span: "12",
                label: "应用id",
                path: "appId"
              }, {
                default: o(() => [
                  a(r, {
                    value: e(n).appId,
                    "onUpdate:value": d[1] || (d[1] = (i) => e(n).appId = i)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: o(() => [
          a(u, {
            ref_key: "tableRef",
            ref: y,
            "row-key": (i) => i.roleId,
            columns: _,
            api: e(C).list,
            params: e(n)
          }, null, 8, ["row-key", "api", "params"]),
          a(A, {
            ref_key: "dialogRef",
            ref: h,
            onLoadList: l
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  ne as default
};
