import { NInput as R, NButton as B, NSpin as A, NModal as z, NSelect as W, NDataTable as X, NGridItem as Y } from "naive-ui";
import { resolveComponent as h, openBlock as D, createBlock as q, unref as e, isRef as E, withCtx as o, createElementVNode as U, createVNode as l, createTextVNode as C, reactive as j, h as F, ref as L } from "vue";
import { u as G, a as H } from "./useModal-07595bd1.mjs";
import { s as O, c as S } from "./workflow-2c0ca3a0.mjs";
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
const Z = { class: "p-20" }, ee = { class: "text-right mt-20" }, te = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(M, { expose: k, emit: y }) {
    const { formRef: u, loading: d, showModal: s, type: g, typeTxt: N, formValue: i, reseForm: m, validate: b } = G({
      businessName: ""
    }), c = async () => {
      d.value = !0;
      const { code: p, msg: r } = await O[g.value](i);
      d.value = !1, p === 0 ? ($message.success("成功"), s.value = !1, y("loadList")) : $message.error(r);
    };
    return k({
      open: (p) => {
        s.value = !0, p && p.id ? (g.value = "update", m(p)) : (g.value = "add", m());
      }
    }), (p, r) => {
      const w = R, $ = h("sh-form-item"), x = h("sh-form"), _ = B, T = A, V = z;
      return D(), q(V, {
        show: e(s),
        "onUpdate:show": r[3] || (r[3] = (n) => E(s) ? s.value = n : null),
        preset: "card",
        class: "w-600",
        title: `${e(N)}系统业务`
      }, {
        default: o(() => [
          U("div", Z, [
            l(T, { show: e(d) }, {
              default: o(() => [
                l(x, {
                  ref_key: "formRef",
                  ref: u,
                  model: e(i),
                  "label-width": "100"
                }, {
                  default: o(() => [
                    l($, {
                      label: "业务名称",
                      path: "businessName",
                      rule: "required"
                    }, {
                      default: o(() => [
                        l(w, {
                          value: e(i).businessName,
                          "onUpdate:value": r[0] || (r[0] = (n) => e(i).businessName = n),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                U("div", ee, [
                  l(_, {
                    onClick: r[1] || (r[1] = (n) => s.value = !1)
                  }, {
                    default: o(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  l(_, {
                    type: "primary",
                    onClick: r[2] || (r[2] = (n) => e(b)(c))
                  }, {
                    default: o(() => [
                      C(" 确定 ")
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
}, le = { class: "p-15" }, ae = { class: "text-right mt-20" }, oe = {
  __name: "ConditionVariableFormDialog",
  emits: ["loadList"],
  setup(M, { expose: k, emit: y }) {
    const u = h("ShFormItem"), d = j([
      {
        label: "String",
        value: 0
      },
      {
        label: "Integer",
        value: 1
      },
      {
        label: "Double",
        value: 2
      }
    ]), s = j([]), g = (n) => {
      Object.assign(s, t.value.child), n ? t.value.child = [] : t.value.child = s;
    }, { formRef: N, loading: i, showModal: m, type: b, typeTxt: c, formValue: t, reseForm: p, validate: r } = G({
      businessId: "",
      varName: "",
      varValue: "",
      varType: 0,
      child: []
    }), w = async () => {
      i.value = !0;
      const { code: n, msg: a } = await S[b.value](t.value);
      i.value = !1, n === 0 ? ($message.success("成功"), m.value = !1, y("loadList")) : $message.error(a);
    }, $ = async (n) => {
      const { code: a, data: v, msg: I } = await S.get({ id: n.id });
      a === 0 ? (v.child = v.child ? v.child : [], p(v)) : $message.error(I);
    }, x = (n, a) => {
      m.value = !0, n && n.id ? (b.value = "update", $(n)) : (b.value = "add", p(), t.value.businessId = a), Object.assign(s, []);
    }, _ = [
      {
        title: "属性名",
        key: "varName",
        render(n, a) {
          return F(
            u,
            {
              path: `child.${a}.varName`,
              rule: "required"
            },
            () => F(R, {
              value: n.varName,
              maxlength: 32,
              onUpdateValue(v) {
                t.value.child[a].varName = v;
              }
            })
          );
        }
      },
      {
        title: "属性值",
        key: "varValue",
        render(n, a) {
          return F(
            u,
            {
              path: `child.${a}.varValue`,
              rule: "required"
            },
            () => F(R, {
              value: n.varValue,
              maxlength: 32,
              onUpdateValue(v) {
                t.value.child[a].varValue = v;
              }
            })
          );
        }
      },
      {
        title: "操作",
        key: "handle",
        width: 120,
        render(n, a) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                t.value.child.splice(a, 1);
              }
            })
          ];
        }
      }
    ], T = () => ({
      varValue: "",
      varName: ""
    }), V = (n = T()) => {
      t.value.child.push({ ...n });
    };
    return k({
      open: x
    }), (n, a) => {
      const v = W, I = B, J = X, K = h("sh-form"), P = A, Q = z;
      return D(), q(Q, {
        show: e(m),
        "onUpdate:show": a[6] || (a[6] = (f) => E(m) ? m.value = f : null),
        preset: "card",
        class: "w-1000",
        title: `${e(c)}业务变量`
      }, {
        default: o(() => [
          U("div", le, [
            l(P, { show: e(i) }, {
              default: o(() => [
                l(K, {
                  ref_key: "formRef",
                  ref: N,
                  model: e(t),
                  "label-width": "100"
                }, {
                  default: o(() => [
                    l(e(u), {
                      label: "变量名称",
                      path: "varName",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        l(e(R), {
                          value: e(t).varName,
                          "onUpdate:value": a[0] || (a[0] = (f) => e(t).varName = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(e(u), {
                      label: "变量属性",
                      path: "varValue",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        l(e(R), {
                          value: e(t).varValue,
                          "onUpdate:value": a[1] || (a[1] = (f) => e(t).varValue = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(e(u), {
                      label: "变量类型",
                      path: "varType",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        l(v, {
                          value: e(t).varType,
                          "onUpdate:value": [
                            a[2] || (a[2] = (f) => e(t).varType = f),
                            g
                          ],
                          options: d
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    l(e(u), {
                      label: "",
                      path: "",
                      span: 24
                    }, {
                      default: o(() => [
                        l(I, {
                          type: "primary",
                          size: "small",
                          disabled: [1, 2].includes(e(t).varType),
                          onClick: a[3] || (a[3] = (f) => V())
                        }, {
                          default: o(() => [
                            C(" 新增行 ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }),
                    l(J, {
                      ref: "tableRef",
                      "max-height": 500,
                      columns: _,
                      data: e(t).child
                    }, null, 8, ["data"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                U("div", ae, [
                  l(I, {
                    onClick: a[4] || (a[4] = (f) => m.value = !1)
                  }, {
                    default: o(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  l(I, {
                    type: "primary",
                    onClick: a[5] || (a[5] = (f) => e(r)(w))
                  }, {
                    default: o(() => [
                      C(" 确定 ")
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
  __name: "ConditionVariableList",
  setup(M, { expose: k }) {
    const y = L(null), u = L(null), d = L(!1), { formValue: s, reseForm: g } = H({
      businessId: ""
      // 系统业务主键
    }), N = j(["String", "Integer", "Double"]), i = [
      { type: "index" },
      { title: "变量名称", key: "varName" },
      { title: "变量属性", key: "varValue" },
      {
        title: "变量类型",
        key: "varType",
        render(t) {
          return N[t.varType];
        }
      },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(t) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                c(t);
              },
              code: ""
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(S.delete, { id: t.id }, m);
              },
              code: "",
              type: "error"
            })
          ];
        }
      }
    ], m = () => {
      y.value.loadList();
    }, b = (t) => {
      s.value.businessId = t.id, d.value = !0;
    }, c = (t) => {
      u.value.open(t, s.value.businessId);
    };
    return k({
      init: b
    }), (t, p) => {
      const r = B, w = h("sh-data-table"), $ = h("sh-content-layout"), x = z;
      return D(), q(x, {
        show: d.value,
        "onUpdate:show": p[0] || (p[0] = (_) => d.value = _),
        preset: "card",
        class: "w-1000",
        title: "业务变量列表"
      }, {
        default: o(() => [
          l($, null, {
            btn: o(() => [
              l(r, {
                type: "primary",
                onClick: c
              }, {
                default: o(() => [
                  C("新增")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              l(w, {
                ref_key: "tableRef",
                ref: y,
                "row-key": (_) => _.id,
                columns: i,
                api: e(S).list,
                params: e(s)
              }, null, 8, ["row-key", "api", "params"]),
              l(oe, {
                ref_key: "dialogRef",
                ref: u,
                onLoadList: m
              }, null, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, Ne = {
  __name: "index",
  setup(M) {
    const k = L(null), y = L(null), u = L(null), { formValue: d, reseForm: s } = H({
      busienssName: ""
    }), g = [
      { type: "index" },
      { title: "业务名称", key: "businessName" },
      { title: "创建人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(c) {
          return [
            $textBtn({
              text: "条件变量",
              onClick: () => {
                b(c);
              },
              code: "",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(O.delete, { id: c.id }, i);
              },
              code: "",
              type: "error"
            })
          ];
        }
      }
    ], N = async () => {
      await s(), i();
    }, i = () => {
      k.value.loadList();
    }, m = (c) => {
      y.value.open(c);
    }, b = (c) => {
      u.value.init(c);
    };
    return (c, t) => {
      const p = R, r = h("sh-form-item"), w = Y, $ = h("sh-search-fold"), x = B, _ = h("sh-data-table"), T = h("sh-content-layout");
      return D(), q(T, null, {
        header: o(() => [
          l($, {
            model: e(d),
            reset: N,
            "load-list": i
          }, {
            default: o(() => [
              l(w, null, {
                default: o(() => [
                  l(r, {
                    label: "业务名称",
                    path: "busienssName"
                  }, {
                    default: o(() => [
                      l(p, {
                        value: e(d).busienssName,
                        "onUpdate:value": t[0] || (t[0] = (V) => e(d).busienssName = V)
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
          l(x, {
            type: "primary",
            onClick: m
          }, {
            default: o(() => [
              C("新增")
            ]),
            _: 1
          })
        ]),
        default: o(() => [
          l(_, {
            ref_key: "tableRef",
            ref: k,
            "row-key": (V) => V.id,
            columns: g,
            api: e(O).list,
            params: e(d)
          }, null, 8, ["row-key", "api", "params"]),
          l(te, {
            ref_key: "dialogRef",
            ref: y,
            onLoadList: i
          }, null, 512),
          l(ne, {
            ref_key: "ConditionVariableDialog",
            ref: u
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  Ne as default
};
