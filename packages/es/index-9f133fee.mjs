import { NInput as L, NButton as B, NSpin as A, NModal as z, NSelect as W, NDataTable as X } from "naive-ui";
import { resolveComponent as f, openBlock as D, createBlock as q, unref as t, isRef as E, withCtx as o, createElementVNode as U, createVNode as a, createTextVNode as C, reactive as j, h as I, ref as R } from "vue";
import { u as G, a as H } from "./useModal-07595bd1.mjs";
import { s as O, c as S } from "./workflow-d737aad1.mjs";
import "lodash";
import "./index-2db33f86.mjs";
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
const Y = { class: "p-20" }, Z = { class: "text-right mt-20" }, ee = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(M, { expose: b, emit: h }) {
    const { formRef: d, loading: m, showModal: r, type: k, typeTxt: N, formValue: p, reseForm: s, validate: y } = G({
      businessName: ""
    }), g = async () => {
      m.value = !0;
      const { code: u, msg: i } = await O[k.value](p.value);
      m.value = !1, u === 0 ? ($message.success("成功"), r.value = !1, h("loadList")) : $message.error(i);
    };
    return b({
      open: (u) => {
        r.value = !0, u && u.id ? (k.value = "update", s(u)) : (k.value = "add", s());
      }
    }), (u, i) => {
      const w = L, $ = f("sh-form-item"), x = f("sh-form"), c = B, T = A, V = z;
      return D(), q(V, {
        show: t(r),
        "onUpdate:show": i[3] || (i[3] = (n) => E(r) ? r.value = n : null),
        preset: "card",
        class: "w-600",
        title: `${t(N)}系统业务`
      }, {
        default: o(() => [
          U("div", Y, [
            a(T, { show: t(m) }, {
              default: o(() => [
                a(x, {
                  ref_key: "formRef",
                  ref: d,
                  model: t(p),
                  "label-width": "100"
                }, {
                  default: o(() => [
                    a($, {
                      label: "业务名称",
                      path: "businessName",
                      rule: "required"
                    }, {
                      default: o(() => [
                        a(w, {
                          value: t(p).businessName,
                          "onUpdate:value": i[0] || (i[0] = (n) => t(p).businessName = n),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                U("div", Z, [
                  a(c, {
                    onClick: i[1] || (i[1] = (n) => r.value = !1)
                  }, {
                    default: o(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(c, {
                    type: "primary",
                    onClick: i[2] || (i[2] = (n) => t(y)(g))
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
}, te = { class: "p-15" }, ae = { class: "text-right mt-20" }, le = {
  __name: "ConditionVariableFormDialog",
  emits: ["loadList"],
  setup(M, { expose: b, emit: h }) {
    const d = f("ShFormItem"), m = j([
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
    ]), r = j([]), k = (n) => {
      Object.assign(r, e.value.child), n ? e.value.child = [] : e.value.child = r;
    }, { formRef: N, loading: p, showModal: s, type: y, typeTxt: g, formValue: e, reseForm: u, validate: i } = G({
      businessId: "",
      varName: "",
      varValue: "",
      varType: 0,
      child: []
    }), w = async () => {
      p.value = !0;
      const { code: n, msg: l } = await S[y.value](e.value);
      p.value = !1, n === 0 ? ($message.success("成功"), s.value = !1, h("loadList")) : $message.error(l);
    }, $ = async (n) => {
      const { code: l, data: _, msg: F } = await S.get({ id: n.id });
      l === 0 ? (_.child = _.child ? _.child : [], u(_)) : $message.error(F);
    }, x = (n, l) => {
      s.value = !0, n && n.id ? (y.value = "update", $(n)) : (y.value = "add", u(), e.value.businessId = l), Object.assign(r, []);
    }, c = [
      {
        title: "属性名",
        key: "varName",
        render(n, l) {
          return I(
            d,
            {
              path: `child.${l}.varName`,
              rule: "required"
            },
            () => I(L, {
              value: n.varName,
              maxlength: 32,
              onUpdateValue(_) {
                e.value.child[l].varName = _;
              }
            })
          );
        }
      },
      {
        title: "属性值",
        key: "varValue",
        render(n, l) {
          return I(
            d,
            {
              path: `child.${l}.varValue`,
              rule: "required"
            },
            () => I(L, {
              value: n.varValue,
              maxlength: 32,
              onUpdateValue(_) {
                e.value.child[l].varValue = _;
              }
            })
          );
        }
      },
      {
        title: "操作",
        key: "handle",
        width: 120,
        render(n, l) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                e.value.child.splice(l, 1);
              }
            })
          ];
        }
      }
    ], T = () => ({
      varValue: "",
      varName: ""
    }), V = (n = T()) => {
      e.value.child.push({ ...n });
    };
    return b({
      open: x
    }), (n, l) => {
      const _ = W, F = B, J = X, K = f("sh-form"), P = A, Q = z;
      return D(), q(Q, {
        show: t(s),
        "onUpdate:show": l[6] || (l[6] = (v) => E(s) ? s.value = v : null),
        preset: "card",
        class: "w-1000",
        title: `${t(g)}业务变量`
      }, {
        default: o(() => [
          U("div", te, [
            a(P, { show: t(p) }, {
              default: o(() => [
                a(K, {
                  ref_key: "formRef",
                  ref: N,
                  model: t(e),
                  "label-width": "100"
                }, {
                  default: o(() => [
                    a(t(d), {
                      label: "变量名称",
                      path: "varName",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        a(t(L), {
                          value: t(e).varName,
                          "onUpdate:value": l[0] || (l[0] = (v) => t(e).varName = v),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(t(d), {
                      label: "变量属性",
                      path: "varValue",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        a(t(L), {
                          value: t(e).varValue,
                          "onUpdate:value": l[1] || (l[1] = (v) => t(e).varValue = v),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(t(d), {
                      label: "变量类型",
                      path: "varType",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        a(_, {
                          value: t(e).varType,
                          "onUpdate:value": [
                            l[2] || (l[2] = (v) => t(e).varType = v),
                            k
                          ],
                          options: m
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    a(t(d), {
                      label: "",
                      path: "",
                      span: 24
                    }, {
                      default: o(() => [
                        a(F, {
                          type: "primary",
                          size: "small",
                          disabled: [1, 2].includes(t(e).varType),
                          onClick: l[3] || (l[3] = (v) => V())
                        }, {
                          default: o(() => [
                            C(" 新增行 ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }),
                    a(J, {
                      ref: "tableRef",
                      "max-height": 500,
                      columns: c,
                      data: t(e).child
                    }, null, 8, ["data"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                U("div", ae, [
                  a(F, {
                    onClick: l[4] || (l[4] = (v) => s.value = !1)
                  }, {
                    default: o(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(F, {
                    type: "primary",
                    onClick: l[5] || (l[5] = (v) => t(i)(w))
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
}, oe = {
  __name: "ConditionVariableList",
  setup(M, { expose: b }) {
    const h = R(null), d = R(null), m = R(!1), { formValue: r, reseForm: k } = H({
      businessId: ""
      // 系统业务主键
    }), N = j(["String", "Integer", "Double"]), p = [
      { type: "index" },
      { title: "变量名称", key: "varName" },
      { title: "变量属性", key: "varValue" },
      {
        title: "变量类型",
        key: "varType",
        render(e) {
          return N[e.varType];
        }
      },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(e) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                g(e);
              },
              code: ""
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(S.delete, { id: e.id }, s);
              },
              code: "",
              type: "error"
            })
          ];
        }
      }
    ], s = () => {
      h.value.loadList();
    }, y = (e) => {
      r.value.businessId = e.id, m.value = !0;
    }, g = (e) => {
      d.value.open(e, r.value.businessId);
    };
    return b({
      init: y
    }), (e, u) => {
      const i = B, w = f("sh-data-table"), $ = f("sh-content-layout"), x = z;
      return D(), q(x, {
        show: m.value,
        "onUpdate:show": u[0] || (u[0] = (c) => m.value = c),
        preset: "card",
        class: "w-1000",
        title: "业务变量列表"
      }, {
        default: o(() => [
          a($, null, {
            btn: o(() => [
              a(i, {
                type: "primary",
                onClick: g
              }, {
                default: o(() => [
                  C("新增")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              a(w, {
                ref_key: "tableRef",
                ref: h,
                "row-key": (c) => c.id,
                columns: p,
                api: t(S).list,
                params: t(r)
              }, null, 8, ["row-key", "api", "params"]),
              a(le, {
                ref_key: "dialogRef",
                ref: d,
                onLoadList: s
              }, null, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, ge = {
  __name: "index",
  setup(M) {
    const b = R(null), h = R(null), d = R(null), { formValue: m, reseForm: r } = H({
      busienssName: ""
    }), k = [{ label: "业务名称", key: "busienssName" }], N = [
      { type: "index" },
      { title: "业务名称", key: "businessName" },
      { title: "创建人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(e) {
          return [
            $textBtn({
              text: "条件变量",
              onClick: () => {
                g(e);
              },
              code: "",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(O.delete, { id: e.id }, s);
              },
              code: "",
              type: "error"
            })
          ];
        }
      }
    ], p = async () => {
      await r(), s();
    }, s = () => {
      b.value.loadList();
    }, y = (e) => {
      h.value.open(e);
    }, g = (e) => {
      d.value.init(e);
    };
    return (e, u) => {
      const i = B, w = L, $ = f("sh-form-item"), x = f("sh-search-area"), c = f("sh-data-table"), T = f("sh-content-layout");
      return D(), q(T, null, {
        header: o(() => [
          a(x, {
            form: t(m),
            "dropdown-list": k,
            onLoadList: s,
            onReset: p
          }, {
            left: o(() => [
              a(i, {
                type: "primary",
                onClick: y
              }, {
                default: o(() => [
                  C("新增")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              a($, {
                label: "业务名称",
                path: "busienssName"
              }, {
                default: o(() => [
                  a(w, {
                    value: t(m).busienssName,
                    "onUpdate:value": u[0] || (u[0] = (V) => t(m).busienssName = V)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: o(() => [
          a(c, {
            ref_key: "tableRef",
            ref: b,
            "row-key": (V) => V.id,
            columns: N,
            api: t(O).list,
            params: t(m)
          }, null, 8, ["row-key", "api", "params"]),
          a(ee, {
            ref_key: "dialogRef",
            ref: h,
            onLoadList: s
          }, null, 512),
          a(oe, {
            ref_key: "ConditionVariableDialog",
            ref: d
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  ge as default
};
