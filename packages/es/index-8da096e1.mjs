import { resolveComponent as y, openBlock as a, createElementBlock as m, createElementVNode as s, createVNode as t, createTextVNode as V, pushScopeId as Q, popScopeId as G, toDisplayString as T, renderSlot as se, inject as j, withCtx as _, unref as g, ref as N, watch as me, createBlock as x, computed as he, createCommentVNode as E, Fragment as z, renderList as F, resolveDynamicComponent as S, reactive as W, isRef as ve, createStaticVNode as U, nextTick as le, withModifiers as ae, mergeProps as O, normalizeClass as xe, provide as Z, normalizeStyle as ge } from "vue";
import { useRouter as J, useRoute as be } from "vue-router";
import { _ as A } from "./_plugin-vue_export-helper-dad06003.mjs";
import { NInput as P, NSelect as D, NCol as $e, NRow as we, NButton as K, NSpin as re, NModal as de, NPopover as Ne } from "naive-ui";
import { q as ye } from "./index-c846165e.mjs";
import { b as ie, c as Ie, s as Ce } from "./workflow-2c0ca3a0.mjs";
import { u as Be } from "./useModal-07595bd1.mjs";
import { cloneDeep as R } from "lodash";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "pinia";
import "axios";
import "@soybeanjs/vue-admin-tab";
const ce = (e) => (Q("data-v-2ab93ba2"), e = e(), G(), e), ke = { class: "box_shadow bg-#fff h-48 absolute top-0 left-0 w-full flex justify-between text-#515E78 z-99" }, Ae = { class: "h-full ml-20 flex items-center" }, Oe = /* @__PURE__ */ ce(() => /* @__PURE__ */ s("div", { class: "flex-center h-full mx-20" }, [
  /* @__PURE__ */ s("div", { class: "h-60% w-2 bg-#eee" })
], -1)), Ve = /* @__PURE__ */ ce(() => /* @__PURE__ */ s("div", { class: "w-360 h-62 title flex-center" }, [
  /* @__PURE__ */ s("div", { class: "text-20 font-600 mt--10" }, "流程设置")
], -1)), Se = { class: "h-full" }, Re = { class: "h-full w-145 flex-center bg-#4A86FF cursor-pointer" }, Le = {
  __name: "HeaderBar",
  emits: ["zoom", "submit"],
  setup(e, { emit: o }) {
    const n = J(), d = () => {
      $dialog.warning({
        title: "警告",
        content: "是否确定返回？返回后已修改流程将不会保留",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          n.go(-1);
        }
      });
    }, u = (r) => {
      o("zoom", r);
    }, f = () => {
      o("submit");
    };
    return (r, l) => {
      const i = y("sh-icon");
      return a(), m("div", ke, [
        s("div", Ae, [
          s("div", {
            class: "cursor-pointer flex-center h-full text-16",
            onClick: d
          }, [
            t(i, {
              name: "arrow-right",
              class: "rotate-90 mr-5"
            }),
            V(" 返回 ")
          ]),
          Oe,
          t(i, {
            name: "zoom-in",
            class: "text-28 cursor-pointer text-#4A86FF",
            onClick: l[0] || (l[0] = (p) => u(10))
          }),
          t(i, {
            name: "zoom-out",
            class: "text-28 cursor-pointer text-#8996af ml-10",
            onClick: l[1] || (l[1] = (p) => u(-10))
          })
        ]),
        Ve,
        s("div", Se, [
          s("div", Re, [
            s("div", {
              class: "text-#fff flex-center text-16",
              onClick: f
            }, [
              t(i, {
                name: "send",
                class: "mr-5 text-24"
              }),
              V(" 发布 ")
            ])
          ])
        ])
      ]);
    };
  }
}, Te = /* @__PURE__ */ A(Le, [["__scopeId", "data-v-2ab93ba2"]]), Pe = { class: "title text-#515E78 text-16 font-600 flex justify-between border-b border-#D5DCEC pb-5" }, je = { class: "flex items-center" }, De = /* @__PURE__ */ s("div", { class: "w-6 h-16 bg-#3370FF mr-10" }, null, -1), Me = { class: "mr-20" }, L = {
  __name: "ItemTitle",
  props: {
    title: {
      type: String,
      default: "节点属性"
    }
  },
  setup(e) {
    return (o, n) => (a(), m("div", Pe, [
      s("div", je, [
        De,
        s("div", null, T(e.title), 1)
      ]),
      s("div", Me, [
        se(o.$slots, "default")
      ])
    ]));
  }
}, Ze = { class: "p-20" }, Ee = {
  __name: "FormFlow",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = j("businessList");
    return (n, d) => {
      const u = P, f = y("sh-form-item"), r = D, l = y("sh-form");
      return a(), m("div", null, [
        t(L, { title: "流程属性" }),
        s("div", Ze, [
          t(l, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              t(f, {
                label: "流程名称",
                path: "processName",
                rule: "required"
              }, {
                default: _(() => [
                  t(u, {
                    value: e.form.processName,
                    "onUpdate:value": d[0] || (d[0] = (i) => e.form.processName = i),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              t(f, {
                label: "所属业务",
                path: "businessId",
                rule: "required"
              }, {
                default: _(() => [
                  t(r, {
                    value: e.form.businessId,
                    "onUpdate:value": d[1] || (d[1] = (i) => e.form.businessId = i),
                    disabled: "",
                    filterable: "",
                    placeholder: "请选择",
                    options: g(o),
                    "label-field": "businessName",
                    "value-field": "id"
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              t(f, {
                label: "版本描述",
                path: "description",
                rule: "required"
              }, {
                default: _(() => [
                  t(u, {
                    value: e.form.description,
                    "onUpdate:value": d[2] || (d[2] = (i) => e.form.description = i),
                    type: "textarea",
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ]);
    };
  }
}, ze = { class: "p-20" }, oe = {
  __name: "FormSquare",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (o, n) => {
      const d = P, u = y("sh-form-item"), f = y("sh-form");
      return a(), m("div", null, [
        t(L),
        s("div", ze, [
          t(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              t(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  t(d, {
                    value: e.form.text,
                    "onUpdate:value": n[0] || (n[0] = (r) => e.form.text = r),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ]);
    };
  }
}, Fe = [
  { label: "单选", value: 0 },
  { label: "或签", value: 1 },
  { label: "会签", value: 2 }
  // { label: '依次审批', value: 3 },
  // { label: '自动跳过', value: 4 },
], qe = { class: "p-20" }, Ue = { class: "p-20" }, He = {
  __name: "FormAppro",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (o, n) => {
      const d = P, u = y("sh-form-item"), f = y("sh-form"), r = D;
      return a(), m("div", null, [
        t(L),
        s("div", qe, [
          t(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              t(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  t(d, {
                    value: e.form.text,
                    "onUpdate:value": n[0] || (n[0] = (l) => e.form.text = l),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        t(L, { title: "节点设置" }),
        s("div", Ue, [
          t(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              t(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  t(r, {
                    value: e.form.properties.approType,
                    "onUpdate:value": n[1] || (n[1] = (l) => e.form.properties.approType = l),
                    options: g(Fe)
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ]);
    };
  }
}, We = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, Qe = /* @__PURE__ */ s("g", {
  fill: "none",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", { d: "M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 1 0 0-13ZM3.5 7h7" })
], -1), Ge = [
  Qe
];
function Je(e, o) {
  return a(), m("svg", We, Ge);
}
const Ke = { render: Je }, Xe = /* @__PURE__ */ s("div", { class: "leading-32 text-center" }, "值", -1), Ye = {
  __name: "ConditionItemQkj",
  props: {
    value: {
      type: String,
      default: ""
    },
    varValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value"],
  setup(e, { emit: o }) {
    const n = e, d = [
      { label: "=", value: "==" },
      { label: "<", value: ">" },
      { label: "<=", value: ">=" }
    ], u = [
      { label: "<", value: "<" },
      { label: "<=", value: "<=" }
    ], f = N(null), r = N(null), l = N(null), i = N(null);
    me(
      () => n.value,
      (h) => {
        h && h.split("&&").forEach((v) => {
          if (v) {
            let b = [">=", ">", "<=", "<", "=="].find(($) => v.indexOf($) !== -1), w = v.split(b);
            ["<=", "<"].indexOf(b) !== -1 && (l.value = w[1], i.value = b), [">=", ">", "=="].indexOf(b) !== -1 && (f.value = w[1], r.value = b);
          }
        });
      },
      { immediate: !0 }
    );
    const p = () => {
      if (f.value && r.value || l.value && i.value) {
        let h = "";
        if (f.value && r.value && (h = `${n.varValue}${r.value}${f.value}`), l.value && i.value) {
          let c = `${n.varValue}${i.value}${l.value}`;
          h = h ? `${h}&&${c}` : c;
        }
        o("update:value", h);
      }
    };
    return (h, c) => {
      const v = P, b = $e, w = D, $ = we;
      return a(), x($, null, {
        default: _(() => [
          t(b, { span: 6 }, {
            default: _(() => [
              t(v, {
                value: f.value,
                "onUpdate:value": c[0] || (c[0] = (I) => f.value = I),
                onInput: p
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          t(b, { span: 5 }, {
            default: _(() => [
              t(w, {
                value: r.value,
                "onUpdate:value": [
                  c[1] || (c[1] = (I) => r.value = I),
                  p
                ],
                options: d,
                clearable: ""
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          t(b, { span: 2 }, {
            default: _(() => [
              Xe
            ]),
            _: 1
          }),
          t(b, { span: 5 }, {
            default: _(() => [
              t(w, {
                value: i.value,
                "onUpdate:value": [
                  c[2] || (c[2] = (I) => i.value = I),
                  p
                ],
                options: u,
                clearable: ""
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          t(b, { span: 6 }, {
            default: _(() => [
              t(v, {
                value: l.value,
                "onUpdate:value": c[3] || (c[3] = (I) => l.value = I),
                onInput: p
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, et = { class: "flex-center mb-20" }, tt = {
  key: 0,
  class: "pr-5 text-#2263E8"
}, ot = /* @__PURE__ */ s("div", { class: "flex-1 h-1 bg-#e2e6f2" }, null, -1), nt = { class: "pl-10 text-#9097a5" }, st = {
  __name: "ConditionItem",
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    i: {
      type: Number,
      default: 0
    }
  },
  emits: ["deleteItem"],
  setup(e, { emit: o }) {
    const n = e, d = j("variableList"), u = he(() => {
      let r = [];
      return ye(n.form.id) || d.value.forEach((l) => {
        l.id === n.form.id && (r = l.child || []);
      }), r;
    }), f = (r, l) => {
      n.form.varType = l.varType, n.form.varValue = l.varValue, n.form.conditionVal = null;
    };
    return (r, l) => {
      const i = D, p = y("sh-form-item"), h = y("sh-form");
      return a(), m("div", null, [
        s("div", et, [
          e.i ? (a(), m("div", tt, "或")) : E("", !0),
          ot,
          s("div", nt, [
            t(g(Ke), {
              class: "w-1em h-1em",
              onClick: l[0] || (l[0] = (c) => o("deleteItem", e.index, e.i))
            })
          ])
        ]),
        t(h, {
          ref: "formRef",
          model: e.form
        }, {
          default: _(() => [
            t(p, {
              label: "条件类型",
              path: "id",
              rule: "required"
            }, {
              default: _(() => [
                t(i, {
                  value: e.form.id,
                  "onUpdate:value": [
                    l[1] || (l[1] = (c) => e.form.id = c),
                    f
                  ],
                  filterable: "",
                  placeholder: "请选择",
                  options: g(d),
                  "label-field": "varName",
                  "value-field": "id"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            e.form.varType ? (a(), x(p, {
              key: 0,
              label: "条件值",
              path: "conditionVal",
              rule: "required",
              "label-placement": "top"
            }, {
              default: _(() => [
                t(Ye, {
                  value: e.form.conditionVal,
                  "onUpdate:value": l[2] || (l[2] = (c) => e.form.conditionVal = c),
                  "var-value": e.form.varValue
                }, null, 8, ["value", "var-value"])
              ]),
              _: 1
            })) : (a(), x(p, {
              key: 1,
              label: "条件值",
              path: "conditionVal",
              rule: "required"
            }, {
              default: _(() => [
                t(i, {
                  value: e.form.conditionVal,
                  "onUpdate:value": l[3] || (l[3] = (c) => e.form.conditionVal = c),
                  filterable: "",
                  placeholder: "请选择",
                  options: g(u),
                  "label-field": "varName",
                  "value-field": "varValue"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
}, lt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, at = /* @__PURE__ */ s("g", {
  fill: "none",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", { d: "M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 1 0 0-13ZM3.5 7h7M7 3.5v7" })
], -1), rt = [
  at
];
function dt(e, o) {
  return a(), m("svg", lt, rt);
}
const it = { render: dt }, ct = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, ut = /* @__PURE__ */ s("g", { fill: "currentColor" }, [
  /* @__PURE__ */ s("path", { d: "M12.469 1.86H1.531a.667.667 0 1 0 0 1.333h.495v8.611a1.994 1.994 0 0 0 1.992 1.992h5.963a1.994 1.994 0 0 0 1.992-1.992V4.509a.667.667 0 0 0-.667-.665.669.669 0 0 0-.665.668v7.292a.66.66 0 0 1-.659.659H4.016a.66.66 0 0 1-.659-.659V3.193h9.112a.667.667 0 1 0 0-1.333ZM5.67 1.535h2.659a.667.667 0 0 0 0-1.333H5.67a.667.667 0 0 0 0 1.333Z" }),
  /* @__PURE__ */ s("path", { d: "M5.67 5.171a.668.668 0 0 0-.666.668v3.977a.669.669 0 0 0 .666.665.667.667 0 0 0 .666-.665V5.837a.667.667 0 0 0-.667-.665ZM8.32 5.175a.666.666 0 0 0-.666.665v3.978a.668.668 0 0 0 .665.665.666.666 0 0 0 .666-.665V5.84a.667.667 0 0 0-.665-.665Z" })
], -1), ft = [
  ut
];
function _t(e, o) {
  return a(), m("svg", ct, ft);
}
const pt = { render: _t };
const mt = { class: "rounded-4 border border-#E2E6F2 mb-16" }, ht = { class: "title leading-32 pl-20 pr-10 flex justify-between" }, vt = { class: "text-#2263E8" }, xt = { class: "text-#9097a5" }, gt = { class: "p-20" }, bt = {
  __name: "ConditionWrap",
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ["addItem", "deleteWrap"],
  setup(e, { emit: o }) {
    return (n, d) => (a(), m("div", mt, [
      s("div", ht, [
        s("div", vt, "条件" + T(e.index + 1), 1),
        s("div", xt, [
          t(g(it), {
            class: "w-1em h-1em cursor-pointer",
            onClick: d[0] || (d[0] = (u) => o("addItem", e.index))
          }),
          t(g(pt), {
            class: "w-1em h-1em ml-5 cursor-pointer",
            onClick: d[1] || (d[1] = (u) => o("deleteWrap", e.index))
          })
        ])
      ]),
      s("div", gt, [
        se(n.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, $t = /* @__PURE__ */ A(bt, [["__scopeId", "data-v-93ee26e2"]]), wt = { class: "p-20" }, Nt = { class: "p-20" }, yt = {
  __name: "FormCondition",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = e, n = () => {
      o.form.properties.conditions.push([
        {
          conditionVal: "",
          varValue: null,
          varType: 0
        }
      ]);
    }, d = (r) => {
      o.form.properties.conditions[r].push({
        conditionVal: "",
        varValue: "",
        varType: ""
      });
    }, u = (r) => {
      o.form.properties.conditions.splice(r, 1);
    }, f = (r, l) => {
      o.form.properties.conditions[r].splice(l, 1);
    };
    return (r, l) => {
      const i = P, p = y("sh-form-item"), h = y("sh-form"), c = K;
      return a(), m("div", null, [
        t(L),
        s("div", wt, [
          t(h, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              t(p, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  t(i, {
                    value: e.form.text,
                    "onUpdate:value": l[0] || (l[0] = (v) => e.form.text = v),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        t(L, { title: "流程条件" }, {
          default: _(() => [
            t(c, {
              type: "primary",
              size: "small",
              onClick: n
            }, {
              default: _(() => [
                V(" 新增 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        s("div", Nt, [
          (a(!0), m(z, null, F(e.form.properties.conditions, (v, b) => (a(), x($t, {
            key: b,
            index: b,
            onAddItem: d,
            onDeleteWrap: u
          }, {
            default: _(() => [
              (a(!0), m(z, null, F(v, (w, $) => (a(), x(st, {
                key: $,
                form: w,
                index: b,
                i: $,
                onDeleteItem: f
              }, null, 8, ["form", "index", "i"]))), 128))
            ]),
            _: 2
          }, 1032, ["index"]))), 128))
        ])
      ]);
    };
  }
};
const It = { class: "box_shadow h-full w-400 bg-#fff pt-80" }, Ct = {
  __name: "index",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = {
      START: oe,
      END: oe,
      APPROVAL: He,
      CONDITION: yt
    };
    return (n, d) => (a(), m("div", It, [
      (a(), x(S(o[e.form.type] || Ee), { form: e.form }, null, 8, ["form"]))
    ]));
  }
}, Bt = /* @__PURE__ */ A(Ct, [["__scopeId", "data-v-b96a4ed6"]]), kt = { class: "pb-20" }, At = { class: "text-right mt-20" }, Ot = {
  __name: "FormDialog",
  props: {
    process: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["loadList"],
  setup(e, { expose: o, emit: n }) {
    const d = e, u = J(), f = N(null), r = W({
      show: !1,
      loading: !1,
      type: "add"
    }), l = () => {
      var c;
      (c = f.value) == null || c.validate((v) => {
        v || i();
      });
    }, i = async () => {
      r.loading = !0;
      const { code: c, msg: v } = await ie[r.type](d.process);
      r.loading = !1, c === 0 ? ($message.success("成功"), r.show = !1, p()) : $message.error(v);
    }, p = () => {
      u.push("/workflow/model");
    };
    return o({
      open: (c) => {
        r.show = !0;
      }
    }), (c, v) => {
      const b = K, w = re, $ = de;
      return a(), x($, {
        show: r.show,
        "onUpdate:show": v[1] || (v[1] = (I) => r.show = I),
        preset: "card",
        class: "w-400",
        title: "发布流程"
      }, {
        default: _(() => [
          s("div", kt, [
            t(w, {
              show: r.loading
            }, {
              default: _(() => [
                s("div", null, "确认发布【" + T(e.process.processName) + "】流程？", 1),
                s("div", At, [
                  t(b, {
                    onClick: v[0] || (v[0] = (I) => r.show = !1)
                  }, {
                    default: _(() => [
                      V(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(b, {
                    type: "primary",
                    onClick: l
                  }, {
                    default: _(() => [
                      V(" 确定 ")
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
      }, 8, ["show"]);
    };
  }
};
const Vt = { class: "p-20" }, St = { class: "text-right mt-20" }, Rt = {
  __name: "BusinessDialog",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["callback"],
  setup(e, { expose: o, emit: n }) {
    const d = e, u = j("businessList"), f = J(), { formRef: r, showModal: l, loading: i, validate: p, close: h } = Be(), c = () => {
      f.go(-1);
    }, v = () => {
      d.form.businessId ? n("callback", d.form.businessId) : c();
    };
    return o({
      open: () => {
        l.value = !0;
      }
    }), (w, $) => {
      const I = D, C = y("sh-form-item"), B = y("sh-form"), k = K, H = re, pe = de;
      return a(), x(pe, {
        show: g(l),
        "onUpdate:show": $[2] || ($[2] = (M) => ve(l) ? l.value = M : null),
        preset: "card",
        class: "w-500",
        title: "请选择所属业务",
        "close-on-esc": !1,
        onAfterLeave: v
      }, {
        default: _(() => [
          s("div", Vt, [
            t(H, { show: g(i) }, {
              default: _(() => [
                t(B, {
                  ref_key: "formRef",
                  ref: r,
                  model: e.form
                }, {
                  default: _(() => [
                    t(C, {
                      label: "所属业务",
                      path: "businessId",
                      rule: "required"
                    }, {
                      default: _(() => [
                        t(I, {
                          value: e.form.businessId,
                          "onUpdate:value": $[0] || ($[0] = (M) => e.form.businessId = M),
                          filterable: "",
                          placeholder: "请选择",
                          options: g(u),
                          "label-field": "businessName",
                          "value-field": "id"
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                s("div", St, [
                  t(k, { onClick: c }, {
                    default: _(() => [
                      V(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(k, {
                    type: "primary",
                    onClick: $[1] || ($[1] = (M) => g(p)(g(h)))
                  }, {
                    default: _(() => [
                      V(" 确定 ")
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
      }, 8, ["show"]);
    };
  }
}, Lt = /* @__PURE__ */ A(Rt, [["__scopeId", "data-v-f684c57e"]]), Tt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, Pt = /* @__PURE__ */ U('<g transform="translate(-721 -117)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 117)"></rect><g fill="#4a86ff"><path d="m739.757 132.92-1.115-1.852a2.139 2.139 0 1 0-2.979-.082l-1.287 1.938a1.308 1.308 0 0 0-1.185 1.33v1.265a1.3 1.3 0 0 0 1.266 1.335h5.3a1.3 1.3 0 0 0 1.266-1.335v-1.265a1.3 1.3 0 0 0-1.266-1.334Z"></path><path d="m733.617 131.838.56-.835a3.371 3.371 0 0 1 4.225-4.65v-2.9a2.306 2.306 0 0 0-2.3-2.3h-8.814a2.306 2.306 0 0 0-2.3 2.3v10.889a2.306 2.306 0 0 0 2.3 2.3h4.928a2.606 2.606 0 0 1-.254-1.12v-1.269a2.57 2.57 0 0 1 1.659-2.415Zm-5.216-7.673h6.422a.8.8 0 1 1 0 1.6h-6.422a.8.8 0 1 1 0-1.6Zm2.271 9.23h-2.271a.8.8 0 1 1 0-1.6h2.276a.8.8 0 1 1 0 1.6Zm-2.271-4.024a.8.8 0 1 1 0-1.6h3.73a.8.8 0 1 1 0 1.6Z"></path><path d="M738.955 128.283a2.138 2.138 0 1 0-3.292 2.7l-1.285 1.942a1.308 1.308 0 0 0-1.185 1.33v1.265a1.373 1.373 0 0 0 .138.6 12.423 12.423 0 0 0 5.624-7.837ZM734.827 125.762h-6.422a.8.8 0 0 1 0-1.6h6.422a.8.8 0 0 1 .6.274 12.439 12.439 0 0 0 .446-3.295h-8.584a2.306 2.306 0 0 0-2.3 2.3v10a12.373 12.373 0 0 0 2.653-.626.815.815 0 0 1-.032-.222.8.8 0 0 1 .8-.8h1.4a12.449 12.449 0 0 0 5.182-6.053.8.8 0 0 1-.162.017Zm-2.692 3.609h-3.73a.8.8 0 0 1 0-1.6h3.73a.8.8 0 0 1 0 1.6Z"></path><path d="M727.602 124.964a.8.8 0 0 1 .8-.8h1.887a12.38 12.38 0 0 0 1.659-3.021h-4.663a2.306 2.306 0 0 0-2.3 2.3v4.807a12.4 12.4 0 0 0 3.883-2.492h-.465a.8.8 0 0 1-.8-.8Z"></path></g></g>', 1), jt = [
  Pt
];
function Dt(e, o) {
  return a(), m("svg", Tt, jt);
}
const Mt = { render: Dt }, Zt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, Et = /* @__PURE__ */ U('<g transform="translate(-721 -189)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 189)"></rect><rect width="5.648" height="5.648" fill="#4a86ff" rx="1.446" transform="translate(724 197.93)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 192.499)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 198.582)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 205.098)"></rect><path fill="#4a86ff" d="M733.48 201.406h-5.784v-1.3h4.485v-2.7a3.444 3.444 0 0 1 3.441-3.441h2.936v1.3h-2.936a2.14 2.14 0 0 0-2.137 2.137Z"></path><path fill="#4a86ff" d="M738.554 207.922h-2.936a3.444 3.444 0 0 1-3.441-3.441v-3.139h-4.481v-1.3h5.788v4.442a2.14 2.14 0 0 0 2.137 2.137h2.936Z"></path><path fill="#4a86ff" d="M732.829 200.039h5.29v1.303h-5.29z"></path></g>', 1), zt = [
  Et
];
function Ft(e, o) {
  return a(), m("svg", Zt, zt);
}
const qt = { render: Ft }, Ut = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, Ht = /* @__PURE__ */ U('<g transform="translate(-721 -225)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 225)"></rect><rect width="4.781" height="4.781" fill="#4a86ff" rx="1.062" transform="rotate(-90 491.038 -246.482)"></rect><rect width="4.781" height="4.781" fill="#4a86ff" rx="1.062" transform="rotate(-90 485.651 -251.869)"></rect><rect width="6.226" height="6.226" fill="#4a86ff" rx="1.594" transform="rotate(-90 484.446 -239.554)"></rect><path fill="#4a86ff" d="M738.192 241.421v1.383h-7.966v-1.383h.357a2.937 2.937 0 0 0 2.935-2.934v-3.391a4.323 4.323 0 0 1 4.318-4.318v1.383a2.938 2.938 0 0 0-2.935 2.934v3.391a4.3 4.3 0 0 1-1.153 2.934Z"></path></g>', 1), Wt = [
  Ht
];
function Qt(e, o) {
  return a(), m("svg", Ut, Wt);
}
const Gt = { render: Qt }, Jt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, Kt = /* @__PURE__ */ U('<g transform="translate(-721 -261)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 261)"></rect><rect width="6.382" height="6.382" fill="#4a86ff" rx="1.586" transform="translate(724 269.931)"></rect><path fill="#4a86ff" d="M734.714 273.859h-6.541v-1.468h5.068v-2.321a3.892 3.892 0 0 1 3.888-3.887h3.318v1.472h-3.318a2.418 2.418 0 0 0-2.415 2.415Z"></path><path fill="#4a86ff" d="M740.446 280.241h-3.318a3.892 3.892 0 0 1-3.888-3.888v-2.566h-5.068v-1.47h6.541v4.038a2.418 2.418 0 0 0 2.415 2.415h3.318Z"></path><path fill="#4a86ff" d="m742.348 279.15-2.574-2.23a.632.632 0 0 0-1.046.478v4.459a.632.632 0 0 0 1.046.478l2.574-2.23a.631.631 0 0 0 0-.955ZM742.348 266.385l-2.574-2.229a.632.632 0 0 0-1.046.478v4.458a.632.632 0 0 0 1.046.478l2.574-2.23a.632.632 0 0 0 0-.955Z"></path></g>', 1), Xt = [
  Kt
];
function Yt(e, o) {
  return a(), m("svg", Jt, Xt);
}
const eo = { render: Yt }, ne = {
  text: "条件1",
  type: "CONDITION",
  properties: {
    conditions: [
      [
        {
          id: null,
          //变量主键
          varType: 0,
          //变量类型0:String；1:Integer;2:Double
          varValue: null,
          //变量的字段
          conditionVal: null
          //条件的值，
        }
      ]
    ]
  },
  nextNode: null,
  childNodes: []
}, to = {
  type: "CONDITIONAL_BRANCH",
  text: "条件分支",
  nextNode: null,
  childNodes: [
    R(ne),
    {
      ...R(ne),
      text: "条件2"
    }
  ]
}, ue = {
  text: "审批1",
  type: "APPROVAL",
  properties: {
    approType: 0
  },
  nextNode: null,
  childNodes: []
}, oo = { class: "w-50 flex-center relative" }, no = /* @__PURE__ */ s("div", { class: "h-1 bg-#8996AF absolute top-50% w-full" }, null, -1), so = /* @__PURE__ */ s("div", { class: "leading-20 text-16 mt--1" }, "+", -1), lo = [
  so
], ao = { class: "text-#606877 my-10" }, ro = ["onClick"], io = { class: "ml-10" }, X = {
  __name: "NodeAdd",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["add"],
  setup(e, { emit: o }) {
    const n = e, d = [
      {
        name: "审批节点",
        svg: Mt,
        render: () => R(ue)
      },
      // {
      //   name: '子流程',
      //   svg: SvgSub,
      //   render: () => {
      //     return {
      //       type: 'APPROVAL',
      //       text: '子流程',
      //       nextNode: null,
      //       childNodes: [],
      //     }
      //   },
      // },
      {
        name: "条件分支",
        svg: qt,
        render: () => R(to)
      },
      {
        name: "选择分支",
        svg: Gt,
        type: "CHOICE_BRANCH",
        render: () => ({
          type: "CHOICE_BRANCH",
          text: "选择分支",
          nextNode: null,
          childNodes: [
            {
              type: "APPROVAL",
              text: "审批1",
              nextNode: null,
              childNodes: []
            },
            {
              type: "APPROVAL",
              text: "审批2",
              nextNode: null,
              childNodes: []
            }
          ]
        })
      },
      {
        name: "并行分支",
        svg: eo,
        render: () => ({
          type: "PARALLEL_BRANCH",
          text: "并行分支",
          nextNode: null,
          childNodes: [
            {
              type: "APPROVAL",
              text: "审批1",
              nextNode: null,
              childNodes: []
            },
            {
              type: "APPROVAL",
              text: "审批2",
              nextNode: null,
              childNodes: []
            }
          ]
        })
      }
      // {
      //   name: '定时器',
      //   svg: SvgTimer,
      //   render: () => {
      //     return {
      //       type: 'TIMER',
      //       text: '定时器',
      //       nextNode: null,
      //       childNodes: [],
      //     }
      //   },
      // },
    ], u = N(!1), f = () => {
      u.value = !1;
    }, r = (i) => {
      f(), l(i.render());
    }, l = (i) => {
      const p = R(n.nodeInfo.nextNode);
      n.nodeInfo.nextNode = {
        ...i,
        nextNode: p
      };
    };
    return (i, p) => {
      const h = Ne;
      return a(), m("div", oo, [
        no,
        t(h, {
          placement: "bottom",
          trigger: "manual",
          show: u.value,
          onClickoutside: f
        }, {
          trigger: _(() => [
            s("div", {
              class: "rounded-50% bg-#4A86FF w-20 h-20 text-center text-#fff cursor-pointer z-2 hover:scale-110 transition",
              onClick: p[0] || (p[0] = (c) => u.value = !0)
            }, lo)
          ]),
          default: _(() => [
            s("div", ao, [
              (a(), m(z, null, F(d, (c) => s("div", {
                key: c.svg,
                class: "flex items-center px-5 py-10 cursor-pointer",
                onClick: (v) => r(c)
              }, [
                (a(), x(S(c.svg), { class: "w-1em h-1em text-24" })),
                s("div", io, T(c.name), 1)
              ], 8, ro)), 64))
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
};
const co = {
  __name: "BaseInput",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = e, n = N(""), d = N(!1), u = N(!1), f = async () => {
      var l;
      d.value = !0, n.value = o.nodeInfo.text, await le(), (l = u.value) == null || l.focus();
    }, r = () => {
      d.value = !1, n.value && (o.nodeInfo.text = n.value);
    };
    return (l, i) => {
      const p = P;
      return a(), m("div", null, [
        d.value ? (a(), x(p, {
          key: 0,
          ref_key: "inputRef",
          ref: u,
          value: n.value,
          "onUpdate:value": i[0] || (i[0] = (h) => n.value = h),
          type: "text",
          placeholder: "请输入",
          size: "tiny",
          autofocus: "",
          class: "w-full",
          onBlur: r
        }, null, 8, ["value"])) : (a(), m("div", {
          key: 1,
          class: "truncate px-5",
          onClick: f
        }, T(e.nodeInfo.text), 1))
      ]);
    };
  }
}, fe = /* @__PURE__ */ A(co, [["__scopeId", "data-v-154b54b7"]]);
const Y = (e) => (Q("data-v-15c9eb57"), e = e(), G(), e), uo = { class: "flex items-center" }, fo = /* @__PURE__ */ Y(() => /* @__PURE__ */ s("div", { class: "arrows absolute top-50% mt--4 left--6 border-4 border-transparent border-l-red" }, null, -1)), _o = { class: "appro_wrap rounded-4 box_shadow w-120 overflow-hidden relative z-2 cursor-pointer" }, po = { class: "title h-28 leading-28 flex items-center w-full text-#fff pr-5" }, mo = /* @__PURE__ */ Y(() => /* @__PURE__ */ s("div", { class: "w-3 h-14 bg-#ffffff4d rounded-r-2" }, null, -1)), ho = { class: "px-2 flex-1 w-0" }, vo = { class: "h-36 flex items-center justify-between px-10 text-#606877 bg-#fff" }, xo = /* @__PURE__ */ Y(() => /* @__PURE__ */ s("div", { class: "" }, "所有人", -1)), go = {
  __name: "BaseNode",
  props: {
    parentNode: {
      type: Object,
      default: () => ({})
    },
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    childIndex: {
      type: Number,
      default: -1
    }
  },
  emits: ["deleteBranch"],
  setup(e, { emit: o }) {
    const n = e, d = j("clickNode"), u = () => {
      n.childIndex === -1 ? n.parentNode.nextNode = n.nodeInfo.nextNode : n.parentNode.childNodes.length <= 2 ? $dialog.warning({
        title: "警告",
        content: "分支至少需要有两个节点，继续删除将会删除整个分支节点，是否确定删除?",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          o("deleteBranch");
        }
      }) : n.parentNode.childNodes.splice(n.childIndex, 1);
    };
    return (f, r) => {
      var i, p;
      const l = y("sh-icon");
      return a(), m("div", uo, [
        s("div", {
          class: "relative mx-1",
          onClick: r[0] || (r[0] = ae((h) => g(d)(e.nodeInfo), ["stop"]))
        }, [
          fo,
          s("div", _o, [
            s("div", po, [
              mo,
              s("div", ho, [
                t(fe, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
              ]),
              t(l, {
                name: "close",
                class: "close hidden",
                onClick: u
              })
            ]),
            s("div", vo, [
              xo,
              t(l, {
                name: "arrow-right",
                class: "rotate-270"
              })
            ])
          ])
        ]),
        t(X, { "node-info": e.nodeInfo }, null, 8, ["node-info"]),
        (a(), x(S(g(q)[(p = (i = e.nodeInfo) == null ? void 0 : i.nextNode) == null ? void 0 : p.type]), {
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"]))
      ]);
    };
  }
}, ee = /* @__PURE__ */ A(go, [["__scopeId", "data-v-15c9eb57"]]), bo = {
  __name: "NodeAppro",
  setup(e) {
    return (o, n) => (a(), x(ee, O(o.$attrs, { style: { "--node-color": "#4a86ff" } }), null, 16));
  }
};
const $o = (e) => (Q("data-v-99dc4520"), e = e(), G(), e), wo = { class: "flex items-center" }, No = { class: "flex" }, yo = { class: "box_wrap ml-20" }, Io = /* @__PURE__ */ $o(() => /* @__PURE__ */ s("div", { class: "line" }, null, -1)), Co = {
  __name: "BaseBranch",
  props: {
    parentNode: {
      type: Object,
      default: () => ({})
    },
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    addName: {
      type: String,
      default: "添加分支"
    }
  },
  emits: ["addBranch"],
  setup(e, { emit: o }) {
    const n = e, d = () => {
      o("addBranch");
    }, u = () => {
      n.parentNode.nextNode = n.nodeInfo.nextNode;
    };
    return (f, r) => {
      var l;
      return a(), m("div", wo, [
        s("div", No, [
          s("div", yo, [
            s("div", {
              class: "absolute top-50% mt--10 left--25 border border-#c0c7d4 rounded-10 bg-#fff w-50 text-#606877 text-12 box_shadow z-2 cursor-pointer hover:scale-110 transition",
              onClick: d
            }, T(e.addName), 1),
            (a(!0), m(z, null, F(e.nodeInfo.childNodes, (i, p) => (a(), m("div", {
              key: p,
              class: xe([{ top_line: !p }, "item_wrap min-h-100 pl-40 flex items-center"])
            }, [
              Io,
              (a(), x(S(g(q)[i == null ? void 0 : i.type]), {
                "parent-node": e.nodeInfo,
                "node-info": i,
                "child-index": p,
                onDeleteBranch: u
              }, null, 40, ["parent-node", "node-info", "child-index"]))
            ], 2))), 128))
          ])
        ]),
        t(X, { "node-info": e.nodeInfo }, null, 8, ["node-info"]),
        e.nodeInfo.nextNode ? (a(), x(S(g(q)[(l = e.nodeInfo.nextNode) == null ? void 0 : l.type]), {
          key: 0,
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"])) : E("", !0)
      ]);
    };
  }
}, te = /* @__PURE__ */ A(Co, [["__scopeId", "data-v-99dc4520"]]), Bo = {
  __name: "NodeBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = e, n = () => {
      o.nodeInfo.childNodes.push({
        text: `审批${o.nodeInfo.childNodes.length + 1}`,
        type: "APPROVAL",
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (a(), x(te, O(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加选择",
      onAddBranch: n
    }), null, 16, ["node-info"]));
  }
}, ko = {
  __name: "NodeEnd",
  setup(e) {
    return (o, n) => (a(), x(_e, O(o.$attrs, {
      style: { "--node-color": "#576A95" },
      svg: "end"
    }), null, 16));
  }
}, Ao = {
  __name: "NodeCondition",
  setup(e) {
    return (o, n) => (a(), x(ee, O(o.$attrs, { style: { "--node-color": "#35bbee" } }), null, 16));
  }
}, Oo = {
  __name: "NodeConditionBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = e, n = () => {
      o.nodeInfo.childNodes.push({
        text: `条件${o.nodeInfo.childNodes.length + 1}`,
        type: "CONDITION",
        properties: {
          conditions: []
        },
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (a(), x(te, O(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加条件",
      onAddBranch: n
    }), null, 16, ["node-info"]));
  }
}, Vo = {
  __name: "NodeParallelBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const o = e, n = () => {
      o.nodeInfo.childNodes.push({
        text: `审批${o.nodeInfo.childNodes.length + 1}`,
        type: "APPROVAL",
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (a(), x(te, O(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加并行",
      onAddBranch: n
    }), null, 16, ["node-info"]));
  }
}, So = {
  __name: "NodeTimer",
  setup(e) {
    return (o, n) => (a(), x(ee, O(o.$attrs, { style: { "--node-color": "#FFAD5B" } }), null, 16));
  }
}, q = {
  // START: NodeStart,
  APPROVAL: bo,
  CONDITIONAL_BRANCH: Oo,
  CONDITION: Ao,
  PARALLEL_BRANCH: Vo,
  CHOICE_BRANCH: Bo,
  END: ko,
  TIMER: So
}, Ro = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 18.5 18"
}, Lo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M15.642 7.285a2 2 0 0 1 0 3.43l-9.113 5.468A2 2 0 0 1 3.5 14.468V3.532a2 2 0 0 1 3.029-1.715Z"
}, null, -1), To = [
  Lo
];
function Po(e, o) {
  return a(), m("svg", Ro, To);
}
const jo = { render: Po }, Do = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Mo = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0zm0 85.333C276.352 85.333 85.333 276.352 85.333 512S276.352 938.667 512 938.667 938.667 747.648 938.667 512 747.648 85.333 512 85.333zm85.333 256a85.333 85.333 0 0 1 85.334 85.334v170.666a85.333 85.333 0 0 1-85.334 85.334H426.667a85.333 85.333 0 0 1-85.334-85.334V426.667a85.333 85.333 0 0 1 85.334-85.334h170.666z"
}, null, -1), Zo = [
  Mo
];
function Eo(e, o) {
  return a(), m("svg", Do, Zo);
}
const zo = { render: Eo };
const Fo = { class: "flex items-center" }, qo = { class: "text-18" }, Uo = { class: "max-w-80" }, Ho = {
  __name: "BaseNodeSquare",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    },
    svg: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const o = {
      start: jo,
      end: zo
    }, n = j("clickNode");
    return (d, u) => {
      var f, r, l, i;
      return a(), m("div", Fo, [
        s("div", {
          class: "node_box text-#fff rounded-4 text-center leading-14 px-5 pb-5 pt-3 text-12 min-w-40 h-40 box_shadow cursor-pointer",
          onClick: u[0] || (u[0] = ae((p) => g(n)(e.nodeInfo), ["stop"]))
        }, [
          s("div", qo, [
            (a(), x(S(o[e.svg]), { class: "w-1em h-1em" }))
          ]),
          s("div", Uo, [
            t(fe, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
          ])
        ]),
        (f = e.nodeInfo) != null && f.nextNode ? (a(), x(X, {
          key: 0,
          "node-info": e.nodeInfo
        }, null, 8, ["node-info"])) : E("", !0),
        (r = e.nodeInfo) != null && r.nextNode ? (a(), x(S(g(q)[(i = (l = e.nodeInfo) == null ? void 0 : l.nextNode) == null ? void 0 : i.type]), {
          key: 1,
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"])) : E("", !0)
      ]);
    };
  }
}, _e = /* @__PURE__ */ A(Ho, [["__scopeId", "data-v-1697028c"]]), Wo = {
  __name: "NodeStart",
  setup(e) {
    return (o, n) => (a(), x(_e, O(o.$attrs, {
      style: { "--node-color": "#67C23A" },
      svg: "start"
    }), null, 16));
  }
};
const Qo = { class: "min-h-500 flex items-center editor_box" }, Go = {
  __name: "index",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (o, n) => (a(), m("div", Qo, [
      t(Wo, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
    ]));
  }
}, Jo = /* @__PURE__ */ A(Go, [["__scopeId", "data-v-4e48c4cf"]]), Ko = { class: "h-full w-full relative pt-45 bg-#eee min-w-1200" }, mn = {
  __name: "index",
  setup(e) {
    const o = W({
      zoom: 100
    }), n = (C) => {
      o.zoom += C;
    }, d = () => {
      f.value.open();
    }, u = be(), f = N(null), r = N(null), l = N({}), i = N([]), p = N([]), h = W({
      id: u.params.id,
      loading: !1
    });
    let c = N({});
    const v = () => ({
      businessId: null,
      //系统业务主键
      processName: "流程名称",
      //流程名称
      description: "版本描述",
      //版本描述
      nodeTree: {
        //节点树
        text: "开始",
        //节点名称
        type: "START",
        //节点类型(START:开始、APPROVAL:审批、CONDITIONAL_BRANCH:条件分支、CONDITION:条件、PARALLEL_BRANCH:并行分支、CHOICE_BRANCH:选择分支、END:结束)
        childNodes: [],
        //子节点（只有分支才有子节点）
        nextNode: {
          ...R(ue),
          nextNode: {
            text: "结束",
            type: "END",
            nextNode: null,
            childNodes: []
          }
        }
      }
    }), b = async () => {
      console.log(333, h.id), h.loading = !0;
      const { code: C, data: B, msg: k } = await ie.get({ id: h.id });
      h.loading = !1, C === 0 ? (c.value = B, w(c.value), $(h.id)) : $message.error(k);
    }, w = (C) => {
      l.value = C;
    };
    h.id && h.id !== "add" ? b() : (c.value = v(), w(c.value), le(() => {
      r.value.open();
    }));
    const $ = async (C) => {
      const { code: B, msg: k, data: H } = await Ie.findByBusinessId({
        businessId: C
      });
      B === 0 ? i.value = H || [] : $message.error(k);
    };
    return (async () => {
      h.loading = !0;
      const { code: C, msg: B, data: k } = await Ce.list({
        page: 1,
        limit: 999
      });
      h.loading = !1, C === 0 ? p.value = k || [] : $message.error(B);
    })(), Z("clickNode", w), Z("businessList", p), Z("variableList", i), Z("businessId", c.value.businessId), (C, B) => (a(), m("div", Ko, [
      t(Te, {
        onZoom: n,
        onSubmit: d
      }),
      s("div", {
        class: "h-full w-full pl-200 pr-500 py-100 overflow-auto box-border",
        onClick: B[0] || (B[0] = (k) => w(g(c)))
      }, [
        t(Jo, {
          "node-info": g(c).nodeTree,
          style: ge({ transform: `scale(${o.zoom / 100})`, "transform-origin": "0px 0px 0px", "--bg-color": "#eee" })
        }, null, 8, ["node-info", "style"])
      ]),
      t(Bt, {
        class: "absolute right-0 top-0",
        form: l.value
      }, null, 8, ["form"]),
      t(Ot, {
        ref_key: "dialogRef",
        ref: f,
        process: g(c)
      }, null, 8, ["process"]),
      t(Lt, {
        ref_key: "businessRef",
        ref: r,
        form: g(c),
        onCallback: $
      }, null, 8, ["form"])
    ]));
  }
};
export {
  mn as default
};
