import { NInput as $, NSwitch as I, NButton as q, NSpin as O, NModal as S } from "naive-ui";
import { ref as k, reactive as C, resolveComponent as f, openBlock as w, createBlock as x, withCtx as o, createElementVNode as P, createVNode as t, createElementBlock as E, createCommentVNode as R, createTextVNode as U, unref as m } from "vue";
import { j as L } from "./index-de809ebd.mjs";
import { _ as D } from "./_plugin-vue_export-helper-dad06003.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const M = { class: "mt-20" }, T = { key: 0 }, z = { class: "text-right mt-20" }, G = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(A, { expose: c, emit: v }) {
    const b = {
      add: "新增",
      update: "修改"
    }, h = k(null), l = C({
      show: !1,
      loading: !1,
      type: "add"
    }), i = () => ({
      unitName: "",
      unitCode: "",
      adminName: "",
      adminLoginName: "",
      adminPhone: "",
      adminPassword: "",
      unitAddress: "",
      status: 1,
      description: ""
    }), n = C(i()), y = () => {
      Object.assign(n, i());
    }, r = () => {
      var s;
      (s = h.value) == null || s.validate((e) => {
        e || _();
      });
    }, _ = async () => {
      l.loading = !0;
      const { code: s, msg: e } = await L[l.type](n);
      l.loading = !1, s === 0 ? ($message.success("成功"), l.show = !1, v("loadList")) : $message.error(e);
    }, N = async (s) => {
      l.loading = !0;
      const { code: e, msg: u, data: d } = await L.get({ id: s });
      l.loading = !1, e === 0 ? Object.assign(n, d) : $message.error(u);
    };
    return c({
      open: (s) => {
        l.show = !0, s && s.id ? (l.type = "update", N(s.id)) : (l.type = "add", y());
      }
    }), (s, e) => {
      const u = $, d = f("sh-form-item"), p = I, B = f("sh-form"), V = q, F = O, j = S;
      return w(), x(j, {
        show: l.show,
        "onUpdate:show": e[10] || (e[10] = (a) => l.show = a),
        preset: "card",
        class: "w-800",
        title: `${b[l.type]}企业`
      }, {
        default: o(() => [
          P("div", M, [
            t(F, {
              show: l.loading
            }, {
              default: o(() => [
                t(B, {
                  ref_key: "formRef",
                  ref: h,
                  model: n,
                  "label-width": "110px"
                }, {
                  default: o(() => [
                    t(d, {
                      label: "企业名称",
                      path: "unitName",
                      rule: "required",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(u, {
                          value: n.unitName,
                          "onUpdate:value": e[0] || (e[0] = (a) => n.unitName = a),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(d, {
                      label: "企业信用代码",
                      path: "unitCode",
                      rule: "required",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(u, {
                          value: n.unitCode,
                          "onUpdate:value": e[1] || (e[1] = (a) => n.unitCode = a),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l.type === "add" ? (w(), E("div", T, [
                      t(d, {
                        label: "管理员姓名",
                        path: "adminName",
                        rule: "required",
                        span: "12"
                      }, {
                        default: o(() => [
                          t(u, {
                            value: n.adminName,
                            "onUpdate:value": e[2] || (e[2] = (a) => n.adminName = a),
                            placeholder: "请输入"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "	管理员手机号",
                        path: "adminPhone",
                        rule: "required||phone",
                        span: "12"
                      }, {
                        default: o(() => [
                          t(u, {
                            value: n.adminPhone,
                            "onUpdate:value": e[3] || (e[3] = (a) => n.adminPhone = a),
                            placeholder: "请输入"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "管理员账号",
                        path: "adminLoginName",
                        rule: "required||account",
                        span: "12"
                      }, {
                        default: o(() => [
                          t(u, {
                            value: n.adminLoginName,
                            "onUpdate:value": e[4] || (e[4] = (a) => n.adminLoginName = a),
                            placeholder: "必须包含数字、大小写字母,且8-32位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      t(d, {
                        label: "	管理员密码",
                        path: "adminPassword",
                        rule: "required||password",
                        span: "12"
                      }, {
                        default: o(() => [
                          t(u, {
                            value: n.adminPassword,
                            "onUpdate:value": e[5] || (e[5] = (a) => n.adminPassword = a),
                            type: "password",
                            "show-password-on": "mousedown",
                            placeholder: "包含数字、大小写字母三种,且8-30位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ])) : R("", !0),
                    t(d, {
                      label: "详细地址",
                      path: "unitAddress"
                    }, {
                      default: o(() => [
                        t(u, {
                          value: n.unitAddress,
                          "onUpdate:value": e[6] || (e[6] = (a) => n.unitAddress = a),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(d, {
                      label: "状态",
                      "label-placement": "left"
                    }, {
                      default: o(() => [
                        t(p, {
                          value: n.status,
                          "onUpdate:value": e[7] || (e[7] = (a) => n.status = a),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(d, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: o(() => [
                        t(u, {
                          value: n.description,
                          "onUpdate:value": e[8] || (e[8] = (a) => n.description = a),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                P("div", z, [
                  t(V, {
                    onClick: e[9] || (e[9] = (a) => l.show = !1)
                  }, {
                    default: o(() => [
                      U(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(V, {
                    type: "primary",
                    onClick: r
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
};
const H = {
  __name: "index",
  setup(A) {
    const c = k(null), v = k(null), b = [
      { label: "企业名称", key: "unitName" },
      { label: "企业编码", key: "unitCode" }
    ], h = [
      { type: "index" },
      { title: "企业名称", key: "unitName" },
      { title: "企业信用代码", key: "unitCode" },
      { title: "详细地址", key: "unitAddress" },
      {
        title: "企业状态",
        key: "status",
        render(r) {
          return r.status ? "正常" : "冻结";
        }
      },
      {
        title: "操作",
        key: "handle",
        render(r) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                y(r);
              },
              code: "system-unit-update"
            })
          ];
        }
      }
    ];
    let i = C((() => ({
      unitName: "",
      unitCode: ""
    }))());
    const n = () => {
      c.value.loadList();
    }, y = (r) => {
      v.value.open(r);
    };
    return (r, _) => {
      const N = q, g = $, s = f("sh-form-item"), e = f("sh-search-area"), u = f("sh-data-table"), d = f("sh-content-layout");
      return w(), x(d, null, {
        header: o(() => [
          t(e, {
            form: m(i),
            "dropdown-list": b,
            onLoadList: n
          }, {
            left: o(() => [
              r.$isCode("system-unit-add") ? (w(), x(N, {
                key: 0,
                type: "primary",
                onClick: y
              }, {
                default: o(() => [
                  U(" 新增 ")
                ]),
                _: 1
              })) : R("", !0)
            ]),
            default: o(() => [
              t(s, {
                span: 12,
                label: "企业名称",
                path: "unitName",
                "label-width": "80px"
              }, {
                default: o(() => [
                  t(g, {
                    value: m(i).unitName,
                    "onUpdate:value": _[0] || (_[0] = (p) => m(i).unitName = p)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              t(s, {
                span: 12,
                label: "企业编码",
                path: "unitCode"
              }, {
                default: o(() => [
                  t(g, {
                    value: m(i).unitCode,
                    "onUpdate:value": _[1] || (_[1] = (p) => m(i).unitCode = p)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: o(() => [
          t(u, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (p) => p.roleId,
            columns: h,
            api: m(L).list,
            params: m(i)
          }, null, 8, ["row-key", "api", "params"]),
          t(G, {
            ref_key: "dialogRef",
            ref: v,
            onLoadList: n
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
}, de = /* @__PURE__ */ D(H, [["__scopeId", "data-v-ec8a3f8b"]]);
export {
  de as default
};
