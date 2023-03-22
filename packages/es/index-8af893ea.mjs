import { NInput as q, NSwitch as I, NButton as R, NSpin as O, NModal as S, NGridItem as E } from "naive-ui";
import { ref as C, reactive as x, resolveComponent as _, openBlock as b, createBlock as U, withCtx as a, createElementVNode as $, createVNode as e, createElementBlock as D, createCommentVNode as A, createTextVNode as L, unref as m } from "vue";
import { g as P } from "./index-c846165e.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import { _ as G } from "./_plugin-vue_export-helper-dad06003.mjs";
import "@better-scroll/core";
import "@vueuse/core";
import "pinia";
import "axios";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const M = { class: "mt-20" }, T = { key: 0 }, z = { class: "text-right mt-20" }, H = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(B, { expose: f, emit: v }) {
    const w = {
      add: "新增",
      update: "修改"
    }, c = C(null), o = x({
      show: !1,
      loading: !1,
      type: "add"
    }), h = () => ({
      unitName: "",
      unitCode: "",
      adminName: "",
      adminLoginName: "",
      adminPhone: "",
      adminPassword: "",
      unitAddress: "",
      status: 1,
      description: ""
    }), n = x(h()), y = () => {
      Object.assign(n, h());
    }, i = () => {
      var s;
      (s = c.value) == null || s.validate((t) => {
        t || p();
      });
    }, p = async () => {
      o.loading = !0;
      const { code: s, msg: t } = await P[o.type](n);
      o.loading = !1, s === 0 ? ($message.success("成功"), o.show = !1, v("loadList")) : $message.error(t);
    }, g = async (s) => {
      o.loading = !0;
      const { code: t, msg: u, data: d } = await P.get({ id: s });
      o.loading = !1, t === 0 ? Object.assign(n, d) : $message.error(u);
    };
    return f({
      open: (s) => {
        o.show = !0, s && s.id ? (o.type = "update", g(s.id)) : (o.type = "add", y());
      }
    }), (s, t) => {
      const u = q, d = _("sh-form-item"), k = I, r = _("sh-form"), V = R, j = O, F = S;
      return b(), U(F, {
        show: o.show,
        "onUpdate:show": t[10] || (t[10] = (l) => o.show = l),
        preset: "card",
        class: "w-800",
        title: `${w[o.type]}企业`
      }, {
        default: a(() => [
          $("div", M, [
            e(j, {
              show: o.loading
            }, {
              default: a(() => [
                e(r, {
                  ref_key: "formRef",
                  ref: c,
                  model: n,
                  "label-width": "110px"
                }, {
                  default: a(() => [
                    e(d, {
                      label: "企业名称",
                      path: "unitName",
                      rule: "required",
                      span: "12"
                    }, {
                      default: a(() => [
                        e(u, {
                          value: n.unitName,
                          "onUpdate:value": t[0] || (t[0] = (l) => n.unitName = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(d, {
                      label: "企业信用代码",
                      path: "unitCode",
                      rule: "required",
                      span: "12"
                    }, {
                      default: a(() => [
                        e(u, {
                          value: n.unitCode,
                          "onUpdate:value": t[1] || (t[1] = (l) => n.unitCode = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o.type === "add" ? (b(), D("div", T, [
                      e(d, {
                        label: "管理员姓名",
                        path: "adminName",
                        rule: "required",
                        span: "12"
                      }, {
                        default: a(() => [
                          e(u, {
                            value: n.adminName,
                            "onUpdate:value": t[2] || (t[2] = (l) => n.adminName = l),
                            placeholder: "请输入"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      e(d, {
                        label: "	管理员手机号",
                        path: "adminPhone",
                        rule: "required||phone",
                        span: "12"
                      }, {
                        default: a(() => [
                          e(u, {
                            value: n.adminPhone,
                            "onUpdate:value": t[3] || (t[3] = (l) => n.adminPhone = l),
                            placeholder: "请输入"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      e(d, {
                        label: "管理员账号",
                        path: "adminLoginName",
                        rule: "required||account",
                        span: "12"
                      }, {
                        default: a(() => [
                          e(u, {
                            value: n.adminLoginName,
                            "onUpdate:value": t[4] || (t[4] = (l) => n.adminLoginName = l),
                            placeholder: "必须包含数字、大小写字母,且8-32位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      e(d, {
                        label: "	管理员密码",
                        path: "adminPassword",
                        rule: "required||password",
                        span: "12"
                      }, {
                        default: a(() => [
                          e(u, {
                            value: n.adminPassword,
                            "onUpdate:value": t[5] || (t[5] = (l) => n.adminPassword = l),
                            type: "password",
                            "show-password-on": "mousedown",
                            placeholder: "包含数字、大小写字母三种,且8-30位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ])) : A("", !0),
                    e(d, {
                      label: "详细地址",
                      path: "unitAddress"
                    }, {
                      default: a(() => [
                        e(u, {
                          value: n.unitAddress,
                          "onUpdate:value": t[6] || (t[6] = (l) => n.unitAddress = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(d, {
                      label: "状态",
                      "label-placement": "left"
                    }, {
                      default: a(() => [
                        e(k, {
                          value: n.status,
                          "onUpdate:value": t[7] || (t[7] = (l) => n.status = l),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(d, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: a(() => [
                        e(u, {
                          value: n.description,
                          "onUpdate:value": t[8] || (t[8] = (l) => n.description = l),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                $("div", z, [
                  e(V, {
                    onClick: t[9] || (t[9] = (l) => o.show = !1)
                  }, {
                    default: a(() => [
                      L(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(V, {
                    type: "primary",
                    onClick: i
                  }, {
                    default: a(() => [
                      L(" 确定 ")
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
const J = {
  __name: "index",
  setup(B) {
    const f = C(null), v = C(null), w = [
      { type: "index" },
      { title: "企业名称", key: "unitName" },
      { title: "企业信用代码", key: "unitCode" },
      { title: "详细地址", key: "unitAddress" },
      {
        title: "企业状态",
        key: "status",
        render(i) {
          return i.status ? "正常" : "冻结";
        }
      },
      {
        title: "操作",
        key: "handle",
        render(i) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                y(i);
              },
              code: "system-unit-update"
            })
          ];
        }
      }
    ], c = () => ({
      unitName: "",
      unitCode: ""
    });
    let o = x(c());
    const h = () => {
      Object.assign(o, c()), n();
    }, n = () => {
      f.value.loadList();
    }, y = (i) => {
      v.value.open(i);
    };
    return (i, p) => {
      const g = q, N = _("sh-form-item"), s = E, t = _("sh-search-fold"), u = R, d = _("sh-data-table"), k = _("sh-content-layout");
      return b(), U(k, null, {
        header: a(() => [
          e(t, {
            model: m(o),
            reset: h,
            "load-list": n
          }, {
            default: a(() => [
              e(s, null, {
                default: a(() => [
                  e(N, {
                    label: "企业名称",
                    path: "unitName"
                  }, {
                    default: a(() => [
                      e(g, {
                        value: m(o).unitName,
                        "onUpdate:value": p[0] || (p[0] = (r) => m(o).unitName = r)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(s, null, {
                default: a(() => [
                  e(N, {
                    label: "企业编码",
                    path: "unitCode"
                  }, {
                    default: a(() => [
                      e(g, {
                        value: m(o).unitCode,
                        "onUpdate:value": p[1] || (p[1] = (r) => m(o).unitCode = r)
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
        btn: a(() => [
          i.$isCode("system-unit-add") ? (b(), U(u, {
            key: 0,
            type: "primary",
            onClick: y
          }, {
            default: a(() => [
              L(" 新增 ")
            ]),
            _: 1
          })) : A("", !0)
        ]),
        default: a(() => [
          e(d, {
            ref_key: "tableRef",
            ref: f,
            "row-key": (r) => r.roleId,
            columns: w,
            api: m(P).list,
            params: m(o)
          }, null, 8, ["row-key", "api", "params"]),
          e(H, {
            ref_key: "dialogRef",
            ref: v,
            onLoadList: n
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
}, ue = /* @__PURE__ */ G(J, [["__scopeId", "data-v-533dccb5"]]);
export {
  ue as default
};
