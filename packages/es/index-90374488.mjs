import { openBlock as n, createElementBlock as p, createElementVNode as o, createBlock as v, resolveDynamicComponent as I, unref as x, createTextVNode as R, pushScopeId as Q, popScopeId as G, toDisplayString as Z, renderSlot as le, inject as M, resolveComponent as B, createVNode as l, withCtx as _, ref as N, watch as he, computed as ve, createCommentVNode as E, Fragment as z, renderList as F, reactive as W, isRef as xe, createStaticVNode as U, nextTick as ae, withModifiers as re, mergeProps as V, normalizeClass as ge, provide as D, normalizeStyle as we } from "vue";
import { useRouter as J, useRoute as $e } from "vue-router";
import { h as de, w as be, x as Ne } from "./index-de809ebd.mjs";
import { _ as O } from "./_plugin-vue_export-helper-dad06003.mjs";
import { NInput as T, NSelect as P, NCol as ye, NRow as Ie, NButton as K, NSpin as ie, NModal as ce, NPopover as Ce } from "naive-ui";
import { b as ue, c as Be, s as ke } from "./workflow-8c68dd55.mjs";
import { u as Ae } from "./useModal-07595bd1.mjs";
import { cloneDeep as S } from "lodash";
import "colord";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const Oe = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 32 32"
}, Ve = /* @__PURE__ */ o("g", { fill: "#4a86ff" }, [
  /* @__PURE__ */ o("path", { d: "M13.634 3A10.635 10.635 0 1 1 3 13.635 10.636 10.636 0 0 1 13.634 3Zm0 3.219a7.415 7.415 0 1 0 7.415 7.415 7.416 7.416 0 0 0-7.415-7.415Zm7.222 16.99c-.254.185-.315.246-.122.5 1.494 1.955 1.067 1.575 2.555 3.523 3.132 4.1 8.288-1.1 3.882-3.837-2.149-1.326-3.685-2.037-3.882-2.211-.3-.109-.311-.136-.5.116a8.8 8.8 0 0 1-1.934 1.911Z" }),
  /* @__PURE__ */ o("path", { d: "M8.622 12.225h3.5a.135.135 0 0 0 .135-.135v-3.5a.27.27 0 0 1 .269-.269h2.34a.27.27 0 0 1 .269.269v3.5a.135.135 0 0 0 .135.135h3.5a.27.27 0 0 1 .269.269v2.34a.27.27 0 0 1-.269.269h-3.5a.135.135 0 0 0-.135.135v3.5a.27.27 0 0 1-.269.269h-2.344a.27.27 0 0 1-.269-.269v-3.5a.135.135 0 0 0-.135-.135h-3.5a.27.27 0 0 1-.269-.269v-2.34a.27.27 0 0 1 .269-.269Z" })
], -1), Se = [
  Ve
];
function Re(e, t) {
  return n(), p("svg", Oe, Se);
}
const Le = { render: Re }, Ze = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 32 32"
}, Te = /* @__PURE__ */ o("g", { fill: "#8996af" }, [
  /* @__PURE__ */ o("path", { d: "M13.652 3A10.651 10.651 0 1 1 3.001 13.651 10.652 10.652 0 0 1 13.652 3Zm0 3.224a7.427 7.427 0 1 0 7.426 7.427 7.427 7.427 0 0 0-7.426-7.427Zm7.233 17.016c-.254.185-.315.247-.122.5 1.5 1.958 1.068 1.577 2.559 3.528 3.137 4.106 8.3-1.1 3.888-3.843-2.153-1.328-3.691-2.04-3.888-2.214-.3-.109-.311-.136-.5.117a8.81 8.81 0 0 1-1.936 1.914Z" }),
  /* @__PURE__ */ o("path", { d: "M8.631 12.239h10.161a.27.27 0 0 1 .27.27v2.343a.27.27 0 0 1-.27.27H8.631a.27.27 0 0 1-.27-.27v-2.343a.27.27 0 0 1 .27-.27Z" })
], -1), Me = [
  Te
];
function Pe(e, t) {
  return n(), p("svg", Ze, Me);
}
const je = { render: Pe }, De = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, Ee = /* @__PURE__ */ o("path", {
  fill: "#fff",
  d: "m1.762 10.986 4.606 3.135a.405.405 0 0 0 .46-.006l5.8-4.167c1.074-.742 1.406.317 1.049.666L9.1 15.785a.4.4 0 0 0-.12.313l-.05 3.734a.4.4 0 0 0 .675.273l1.924-1.785a.4.4 0 0 1 .5-.034l3.82 2.691a.4.4 0 0 0 .62-.217l5.09-17.291a.4.4 0 0 0-.528-.49l-19.192 7.3a.4.4 0 0 0-.077.707Z"
}, null, -1), ze = [
  Ee
];
function Fe(e, t) {
  return n(), p("svg", De, ze);
}
const He = { render: Fe };
const X = (e) => (Q("data-v-9197ee38"), e = e(), G(), e), Ue = { class: "box_shadow bg-#fff h-48 absolute top-0 left-0 w-full flex justify-between text-#515E78 z-99" }, qe = { class: "h-full ml-20 flex items-center" }, We = /* @__PURE__ */ X(() => /* @__PURE__ */ o("div", { class: "flex-center h-full mx-20" }, [
  /* @__PURE__ */ o("div", { class: "h-60% w-2 bg-#eee" })
], -1)), Qe = /* @__PURE__ */ X(() => /* @__PURE__ */ o("div", { class: "w-360 h-62 title flex-center" }, [
  /* @__PURE__ */ o("div", { class: "text-20 font-600 mt--10" }, "流程设置")
], -1)), Ge = { class: "h-full" }, Je = { class: "h-full w-145 flex-center bg-#4A86FF cursor-pointer" }, Ke = /* @__PURE__ */ X(() => /* @__PURE__ */ o("div", null, "发布", -1)), Xe = {
  __name: "HeaderBar",
  emits: ["zoom", "submit"],
  setup(e, { emit: t }) {
    const s = J(), d = () => {
      $dialog.warning({
        title: "警告",
        content: "是否确定返回？返回后已修改流程将不会保留",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          s.go(-1);
        }
      });
    }, u = (r) => {
      t("zoom", r);
    }, f = () => {
      t("submit");
    };
    return (r, a) => (n(), p("div", Ue, [
      o("div", qe, [
        o("div", {
          class: "cursor-pointer flex-center h-full text-16",
          onClick: d
        }, [
          (n(), v(I(x(de)), { class: "rotate-90 mr-5 w-16 h-16" })),
          R(" 返回 ")
        ]),
        We,
        (n(), v(I(x(Le)), {
          class: "w-28 h-28 cursor-pointer",
          onClick: a[0] || (a[0] = (c) => u(10))
        })),
        (n(), v(I(x(je)), {
          class: "w-28 h-28 cursor-pointer ml-10",
          onClick: a[1] || (a[1] = (c) => u(-10))
        }))
      ]),
      Qe,
      o("div", Ge, [
        o("div", Je, [
          o("div", {
            class: "text-#fff flex-center text-16",
            onClick: f
          }, [
            (n(), v(I(x(He)), { class: "w-24 h-24 mr-5 text-24" })),
            Ke
          ])
        ])
      ])
    ]));
  }
}, Ye = /* @__PURE__ */ O(Xe, [["__scopeId", "data-v-9197ee38"]]), et = { class: "title text-#515E78 text-16 font-600 flex justify-between border-b border-#D5DCEC pb-5" }, tt = { class: "flex items-center" }, ot = /* @__PURE__ */ o("div", { class: "w-6 h-16 bg-#3370FF mr-10" }, null, -1), nt = { class: "mr-20" }, L = {
  __name: "ItemTitle",
  props: {
    title: {
      type: String,
      default: "节点属性"
    }
  },
  setup(e) {
    return (t, s) => (n(), p("div", et, [
      o("div", tt, [
        ot,
        o("div", null, Z(e.title), 1)
      ]),
      o("div", nt, [
        le(t.$slots, "default")
      ])
    ]));
  }
}, st = { class: "p-20" }, lt = {
  __name: "FormFlow",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = M("businessList");
    return (s, d) => {
      const u = T, f = B("sh-form-item"), r = P, a = B("sh-form");
      return n(), p("div", null, [
        l(L, { title: "流程属性" }),
        o("div", st, [
          l(a, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              l(f, {
                label: "流程名称",
                path: "processName",
                rule: "required"
              }, {
                default: _(() => [
                  l(u, {
                    value: e.form.processName,
                    "onUpdate:value": d[0] || (d[0] = (c) => e.form.processName = c),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              l(f, {
                label: "所属业务",
                path: "businessId",
                rule: "required"
              }, {
                default: _(() => [
                  l(r, {
                    value: e.form.businessId,
                    "onUpdate:value": d[1] || (d[1] = (c) => e.form.businessId = c),
                    disabled: "",
                    filterable: "",
                    placeholder: "请选择",
                    options: x(t),
                    "label-field": "businessName",
                    "value-field": "id"
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              l(f, {
                label: "版本描述",
                path: "description",
                rule: "required"
              }, {
                default: _(() => [
                  l(u, {
                    value: e.form.description,
                    "onUpdate:value": d[2] || (d[2] = (c) => e.form.description = c),
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
}, at = { class: "p-20" }, ne = {
  __name: "FormSquare",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, s) => {
      const d = T, u = B("sh-form-item"), f = B("sh-form");
      return n(), p("div", null, [
        l(L),
        o("div", at, [
          l(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              l(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  l(d, {
                    value: e.form.text,
                    "onUpdate:value": s[0] || (s[0] = (r) => e.form.text = r),
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
}, rt = [
  { label: "单选", value: 0 },
  { label: "或签", value: 1 },
  { label: "会签", value: 2 }
  // { label: '依次审批', value: 3 },
  // { label: '自动跳过', value: 4 },
], dt = { class: "p-20" }, it = { class: "p-20" }, ct = {
  __name: "FormAppro",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, s) => {
      const d = T, u = B("sh-form-item"), f = B("sh-form"), r = P;
      return n(), p("div", null, [
        l(L),
        o("div", dt, [
          l(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              l(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  l(d, {
                    value: e.form.text,
                    "onUpdate:value": s[0] || (s[0] = (a) => e.form.text = a),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        l(L, { title: "节点设置" }),
        o("div", it, [
          l(f, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              l(u, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  l(r, {
                    value: e.form.properties.approType,
                    "onUpdate:value": s[1] || (s[1] = (a) => e.form.properties.approType = a),
                    options: x(rt)
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
}, ut = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, ft = /* @__PURE__ */ o("g", {
  fill: "none",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", { d: "M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 1 0 0-13ZM3.5 7h7" })
], -1), _t = [
  ft
];
function pt(e, t) {
  return n(), p("svg", ut, _t);
}
const mt = { render: pt }, ht = /* @__PURE__ */ o("div", { class: "leading-32 text-center" }, "值", -1), vt = {
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
  setup(e, { emit: t }) {
    const s = e, d = [
      { label: "=", value: "==" },
      { label: "<", value: ">" },
      { label: "<=", value: ">=" }
    ], u = [
      { label: "<", value: "<" },
      { label: "<=", value: "<=" }
    ], f = N(null), r = N(null), a = N(null), c = N(null);
    he(
      () => s.value,
      (h) => {
        h && h.split("&&").forEach((g) => {
          if (g) {
            let w = [">=", ">", "<=", "<", "=="].find(($) => g.indexOf($) !== -1), b = g.split(w);
            ["<=", "<"].indexOf(w) !== -1 && (a.value = b[1], c.value = w), [">=", ">", "=="].indexOf(w) !== -1 && (f.value = b[1], r.value = w);
          }
        });
      },
      { immediate: !0 }
    );
    const m = () => {
      if (f.value && r.value || a.value && c.value) {
        let h = "";
        if (f.value && r.value && (h = `${s.varValue}${r.value}${f.value}`), a.value && c.value) {
          let i = `${s.varValue}${c.value}${a.value}`;
          h = h ? `${h}&&${i}` : i;
        }
        t("update:value", h);
      }
    };
    return (h, i) => {
      const g = T, w = ye, b = P, $ = Ie;
      return n(), v($, null, {
        default: _(() => [
          l(w, { span: 6 }, {
            default: _(() => [
              l(g, {
                value: f.value,
                "onUpdate:value": i[0] || (i[0] = (y) => f.value = y),
                onInput: m
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          l(w, { span: 5 }, {
            default: _(() => [
              l(b, {
                value: r.value,
                "onUpdate:value": [
                  i[1] || (i[1] = (y) => r.value = y),
                  m
                ],
                options: d,
                clearable: ""
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          l(w, { span: 2 }, {
            default: _(() => [
              ht
            ]),
            _: 1
          }),
          l(w, { span: 5 }, {
            default: _(() => [
              l(b, {
                value: c.value,
                "onUpdate:value": [
                  i[2] || (i[2] = (y) => c.value = y),
                  m
                ],
                options: u,
                clearable: ""
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          l(w, { span: 6 }, {
            default: _(() => [
              l(g, {
                value: a.value,
                "onUpdate:value": i[3] || (i[3] = (y) => a.value = y),
                onInput: m
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, xt = { class: "flex-center mb-20" }, gt = {
  key: 0,
  class: "pr-5 text-#2263E8"
}, wt = /* @__PURE__ */ o("div", { class: "flex-1 h-1 bg-#e2e6f2" }, null, -1), $t = { class: "pl-10 text-#9097a5" }, bt = {
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
  setup(e, { emit: t }) {
    const s = e, d = M("variableList"), u = ve(() => {
      let r = [];
      return be(s.form.id) || d.value.forEach((a) => {
        a.id === s.form.id && (r = a.child || []);
      }), r;
    }), f = (r, a) => {
      s.form.varType = a.varType, s.form.varValue = a.varValue, s.form.conditionVal = null;
    };
    return (r, a) => {
      const c = P, m = B("sh-form-item"), h = B("sh-form");
      return n(), p("div", null, [
        o("div", xt, [
          e.i ? (n(), p("div", gt, "或")) : E("", !0),
          wt,
          o("div", $t, [
            l(x(mt), {
              class: "w-1em h-1em",
              onClick: a[0] || (a[0] = (i) => t("deleteItem", e.index, e.i))
            })
          ])
        ]),
        l(h, {
          ref: "formRef",
          model: e.form
        }, {
          default: _(() => [
            l(m, {
              label: "条件类型",
              path: "id",
              rule: "required"
            }, {
              default: _(() => [
                l(c, {
                  value: e.form.id,
                  "onUpdate:value": [
                    a[1] || (a[1] = (i) => e.form.id = i),
                    f
                  ],
                  filterable: "",
                  placeholder: "请选择",
                  options: x(d),
                  "label-field": "varName",
                  "value-field": "id"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            e.form.varType ? (n(), v(m, {
              key: 0,
              label: "条件值",
              path: "conditionVal",
              rule: "required",
              "label-placement": "top"
            }, {
              default: _(() => [
                l(vt, {
                  value: e.form.conditionVal,
                  "onUpdate:value": a[2] || (a[2] = (i) => e.form.conditionVal = i),
                  "var-value": e.form.varValue
                }, null, 8, ["value", "var-value"])
              ]),
              _: 1
            })) : (n(), v(m, {
              key: 1,
              label: "条件值",
              path: "conditionVal",
              rule: "required"
            }, {
              default: _(() => [
                l(c, {
                  value: e.form.conditionVal,
                  "onUpdate:value": a[3] || (a[3] = (i) => e.form.conditionVal = i),
                  filterable: "",
                  placeholder: "请选择",
                  options: x(u),
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
}, Nt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, yt = /* @__PURE__ */ o("g", {
  fill: "none",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ o("path", { d: "M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 1 0 0-13ZM3.5 7h7M7 3.5v7" })
], -1), It = [
  yt
];
function Ct(e, t) {
  return n(), p("svg", Nt, It);
}
const Bt = { render: Ct }, kt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 14 14"
}, At = /* @__PURE__ */ o("g", { fill: "currentColor" }, [
  /* @__PURE__ */ o("path", { d: "M12.469 1.86H1.531a.667.667 0 1 0 0 1.333h.495v8.611a1.994 1.994 0 0 0 1.992 1.992h5.963a1.994 1.994 0 0 0 1.992-1.992V4.509a.667.667 0 0 0-.667-.665.669.669 0 0 0-.665.668v7.292a.66.66 0 0 1-.659.659H4.016a.66.66 0 0 1-.659-.659V3.193h9.112a.667.667 0 1 0 0-1.333ZM5.67 1.535h2.659a.667.667 0 0 0 0-1.333H5.67a.667.667 0 0 0 0 1.333Z" }),
  /* @__PURE__ */ o("path", { d: "M5.67 5.171a.668.668 0 0 0-.666.668v3.977a.669.669 0 0 0 .666.665.667.667 0 0 0 .666-.665V5.837a.667.667 0 0 0-.667-.665ZM8.32 5.175a.666.666 0 0 0-.666.665v3.978a.668.668 0 0 0 .665.665.666.666 0 0 0 .666-.665V5.84a.667.667 0 0 0-.665-.665Z" })
], -1), Ot = [
  At
];
function Vt(e, t) {
  return n(), p("svg", kt, Ot);
}
const St = { render: Vt };
const Rt = { class: "rounded-4 border border-#E2E6F2 mb-16" }, Lt = { class: "title leading-32 pl-20 pr-10 flex justify-between" }, Zt = { class: "text-#2263E8" }, Tt = { class: "text-#9097a5" }, Mt = { class: "p-20" }, Pt = {
  __name: "ConditionWrap",
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ["addItem", "deleteWrap"],
  setup(e, { emit: t }) {
    return (s, d) => (n(), p("div", Rt, [
      o("div", Lt, [
        o("div", Zt, "条件" + Z(e.index + 1), 1),
        o("div", Tt, [
          l(x(Bt), {
            class: "w-1em h-1em cursor-pointer",
            onClick: d[0] || (d[0] = (u) => t("addItem", e.index))
          }),
          l(x(St), {
            class: "w-1em h-1em ml-5 cursor-pointer",
            onClick: d[1] || (d[1] = (u) => t("deleteWrap", e.index))
          })
        ])
      ]),
      o("div", Mt, [
        le(s.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, jt = /* @__PURE__ */ O(Pt, [["__scopeId", "data-v-9d139196"]]), Dt = { class: "p-20" }, Et = { class: "p-20" }, zt = {
  __name: "FormCondition",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, s = () => {
      t.form.properties.conditions.push([
        {
          conditionVal: "",
          varValue: null,
          varType: 0
        }
      ]);
    }, d = (r) => {
      t.form.properties.conditions[r].push({
        conditionVal: "",
        varValue: "",
        varType: ""
      });
    }, u = (r) => {
      t.form.properties.conditions.splice(r, 1);
    }, f = (r, a) => {
      t.form.properties.conditions[r].splice(a, 1);
    };
    return (r, a) => {
      const c = T, m = B("sh-form-item"), h = B("sh-form"), i = K;
      return n(), p("div", null, [
        l(L),
        o("div", Dt, [
          l(h, {
            ref: "formRef",
            model: e.form
          }, {
            default: _(() => [
              l(m, {
                label: "节点名称",
                path: "text",
                rule: "required"
              }, {
                default: _(() => [
                  l(c, {
                    value: e.form.text,
                    "onUpdate:value": a[0] || (a[0] = (g) => e.form.text = g),
                    placeholder: "请输入"
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        l(L, { title: "流程条件" }, {
          default: _(() => [
            l(i, {
              type: "primary",
              size: "small",
              onClick: s
            }, {
              default: _(() => [
                R(" 新增 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        o("div", Et, [
          (n(!0), p(z, null, F(e.form.properties.conditions, (g, w) => (n(), v(jt, {
            key: w,
            index: w,
            onAddItem: d,
            onDeleteWrap: u
          }, {
            default: _(() => [
              (n(!0), p(z, null, F(g, (b, $) => (n(), v(bt, {
                key: $,
                form: b,
                index: w,
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
const Ft = { class: "box_shadow h-full w-400 bg-#fff pt-80" }, Ht = {
  __name: "index",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = {
      START: ne,
      END: ne,
      APPROVAL: ct,
      CONDITION: zt
    };
    return (s, d) => (n(), p("div", Ft, [
      (n(), v(I(t[e.form.type] || lt), { form: e.form }, null, 8, ["form"]))
    ]));
  }
}, Ut = /* @__PURE__ */ O(Ht, [["__scopeId", "data-v-0a1cad1d"]]), qt = { class: "pb-20" }, Wt = { class: "text-right mt-20" }, Qt = {
  __name: "FormDialog",
  props: {
    process: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["loadList"],
  setup(e, { expose: t, emit: s }) {
    const d = e, u = J(), f = N(null), r = W({
      show: !1,
      loading: !1,
      type: "add"
    }), a = () => {
      var i;
      (i = f.value) == null || i.validate((g) => {
        g || c();
      });
    }, c = async () => {
      r.loading = !0;
      const { code: i, msg: g } = await ue[r.type](d.process);
      r.loading = !1, i === 0 ? ($message.success("成功"), r.show = !1, m()) : $message.error(g);
    }, m = () => {
      u.push("/workflow/model");
    };
    return t({
      open: (i) => {
        r.show = !0;
      }
    }), (i, g) => {
      const w = K, b = ie, $ = ce;
      return n(), v($, {
        show: r.show,
        "onUpdate:show": g[1] || (g[1] = (y) => r.show = y),
        preset: "card",
        class: "w-400",
        title: "发布流程"
      }, {
        default: _(() => [
          o("div", qt, [
            l(b, {
              show: r.loading
            }, {
              default: _(() => [
                o("div", null, "确认发布【" + Z(e.process.processName) + "】流程？", 1),
                o("div", Wt, [
                  l(w, {
                    onClick: g[0] || (g[0] = (y) => r.show = !1)
                  }, {
                    default: _(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  l(w, {
                    type: "primary",
                    onClick: a
                  }, {
                    default: _(() => [
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
      }, 8, ["show"]);
    };
  }
};
const Gt = { class: "p-20" }, Jt = { class: "text-right mt-20" }, Kt = {
  __name: "BusinessDialog",
  props: {
    form: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["callback"],
  setup(e, { expose: t, emit: s }) {
    const d = e, u = M("businessList"), f = J(), { formRef: r, showModal: a, loading: c, validate: m, close: h } = Ae(), i = () => {
      f.go(-1);
    }, g = () => {
      d.form.businessId ? s("callback", d.form.businessId) : i();
    };
    return t({
      open: () => {
        a.value = !0;
      }
    }), (b, $) => {
      const y = P, C = B("sh-form-item"), k = B("sh-form"), A = K, q = ie, me = ce;
      return n(), v(me, {
        show: x(a),
        "onUpdate:show": $[2] || ($[2] = (j) => xe(a) ? a.value = j : null),
        preset: "card",
        class: "w-500",
        title: "请选择所属业务",
        "close-on-esc": !1,
        onAfterLeave: g
      }, {
        default: _(() => [
          o("div", Gt, [
            l(q, { show: x(c) }, {
              default: _(() => [
                l(k, {
                  ref_key: "formRef",
                  ref: r,
                  model: e.form
                }, {
                  default: _(() => [
                    l(C, {
                      label: "所属业务",
                      path: "businessId",
                      rule: "required"
                    }, {
                      default: _(() => [
                        l(y, {
                          value: e.form.businessId,
                          "onUpdate:value": $[0] || ($[0] = (j) => e.form.businessId = j),
                          filterable: "",
                          placeholder: "请选择",
                          options: x(u),
                          "label-field": "businessName",
                          "value-field": "id"
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                o("div", Jt, [
                  l(A, { onClick: i }, {
                    default: _(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  l(A, {
                    type: "primary",
                    onClick: $[1] || ($[1] = (j) => x(m)(x(h)))
                  }, {
                    default: _(() => [
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
      }, 8, ["show"]);
    };
  }
}, Xt = /* @__PURE__ */ O(Kt, [["__scopeId", "data-v-15024ff9"]]), Yt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, eo = /* @__PURE__ */ U('<g transform="translate(-721 -117)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 117)"></rect><g fill="#4a86ff"><path d="m739.757 132.92-1.115-1.852a2.139 2.139 0 1 0-2.979-.082l-1.287 1.938a1.308 1.308 0 0 0-1.185 1.33v1.265a1.3 1.3 0 0 0 1.266 1.335h5.3a1.3 1.3 0 0 0 1.266-1.335v-1.265a1.3 1.3 0 0 0-1.266-1.334Z"></path><path d="m733.617 131.838.56-.835a3.371 3.371 0 0 1 4.225-4.65v-2.9a2.306 2.306 0 0 0-2.3-2.3h-8.814a2.306 2.306 0 0 0-2.3 2.3v10.889a2.306 2.306 0 0 0 2.3 2.3h4.928a2.606 2.606 0 0 1-.254-1.12v-1.269a2.57 2.57 0 0 1 1.659-2.415Zm-5.216-7.673h6.422a.8.8 0 1 1 0 1.6h-6.422a.8.8 0 1 1 0-1.6Zm2.271 9.23h-2.271a.8.8 0 1 1 0-1.6h2.276a.8.8 0 1 1 0 1.6Zm-2.271-4.024a.8.8 0 1 1 0-1.6h3.73a.8.8 0 1 1 0 1.6Z"></path><path d="M738.955 128.283a2.138 2.138 0 1 0-3.292 2.7l-1.285 1.942a1.308 1.308 0 0 0-1.185 1.33v1.265a1.373 1.373 0 0 0 .138.6 12.423 12.423 0 0 0 5.624-7.837ZM734.827 125.762h-6.422a.8.8 0 0 1 0-1.6h6.422a.8.8 0 0 1 .6.274 12.439 12.439 0 0 0 .446-3.295h-8.584a2.306 2.306 0 0 0-2.3 2.3v10a12.373 12.373 0 0 0 2.653-.626.815.815 0 0 1-.032-.222.8.8 0 0 1 .8-.8h1.4a12.449 12.449 0 0 0 5.182-6.053.8.8 0 0 1-.162.017Zm-2.692 3.609h-3.73a.8.8 0 0 1 0-1.6h3.73a.8.8 0 0 1 0 1.6Z"></path><path d="M727.602 124.964a.8.8 0 0 1 .8-.8h1.887a12.38 12.38 0 0 0 1.659-3.021h-4.663a2.306 2.306 0 0 0-2.3 2.3v4.807a12.4 12.4 0 0 0 3.883-2.492h-.465a.8.8 0 0 1-.8-.8Z"></path></g></g>', 1), to = [
  eo
];
function oo(e, t) {
  return n(), p("svg", Yt, to);
}
const no = { render: oo }, so = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, lo = /* @__PURE__ */ U('<g transform="translate(-721 -189)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 189)"></rect><rect width="5.648" height="5.648" fill="#4a86ff" rx="1.446" transform="translate(724 197.93)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 192.499)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 198.582)"></rect><rect width="4.344" height="4.344" fill="#4a86ff" rx="1.112" transform="translate(737.685 205.098)"></rect><path fill="#4a86ff" d="M733.48 201.406h-5.784v-1.3h4.485v-2.7a3.444 3.444 0 0 1 3.441-3.441h2.936v1.3h-2.936a2.14 2.14 0 0 0-2.137 2.137Z"></path><path fill="#4a86ff" d="M738.554 207.922h-2.936a3.444 3.444 0 0 1-3.441-3.441v-3.139h-4.481v-1.3h5.788v4.442a2.14 2.14 0 0 0 2.137 2.137h2.936Z"></path><path fill="#4a86ff" d="M732.829 200.039h5.29v1.303h-5.29z"></path></g>', 1), ao = [
  lo
];
function ro(e, t) {
  return n(), p("svg", so, ao);
}
const io = { render: ro }, co = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, uo = /* @__PURE__ */ U('<g transform="translate(-721 -225)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 225)"></rect><rect width="4.781" height="4.781" fill="#4a86ff" rx="1.062" transform="rotate(-90 491.038 -246.482)"></rect><rect width="4.781" height="4.781" fill="#4a86ff" rx="1.062" transform="rotate(-90 485.651 -251.869)"></rect><rect width="6.226" height="6.226" fill="#4a86ff" rx="1.594" transform="rotate(-90 484.446 -239.554)"></rect><path fill="#4a86ff" d="M738.192 241.421v1.383h-7.966v-1.383h.357a2.937 2.937 0 0 0 2.935-2.934v-3.391a4.323 4.323 0 0 1 4.318-4.318v1.383a2.938 2.938 0 0 0-2.935 2.934v3.391a4.3 4.3 0 0 1-1.153 2.934Z"></path></g>', 1), fo = [
  uo
];
function _o(e, t) {
  return n(), p("svg", co, fo);
}
const po = { render: _o }, mo = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 24 24"
}, ho = /* @__PURE__ */ U('<g transform="translate(-721 -261)"><rect width="24" height="24" fill="rgba(74,134,255,.1)" rx="4" transform="translate(721 261)"></rect><rect width="6.382" height="6.382" fill="#4a86ff" rx="1.586" transform="translate(724 269.931)"></rect><path fill="#4a86ff" d="M734.714 273.859h-6.541v-1.468h5.068v-2.321a3.892 3.892 0 0 1 3.888-3.887h3.318v1.472h-3.318a2.418 2.418 0 0 0-2.415 2.415Z"></path><path fill="#4a86ff" d="M740.446 280.241h-3.318a3.892 3.892 0 0 1-3.888-3.888v-2.566h-5.068v-1.47h6.541v4.038a2.418 2.418 0 0 0 2.415 2.415h3.318Z"></path><path fill="#4a86ff" d="m742.348 279.15-2.574-2.23a.632.632 0 0 0-1.046.478v4.459a.632.632 0 0 0 1.046.478l2.574-2.23a.631.631 0 0 0 0-.955ZM742.348 266.385l-2.574-2.229a.632.632 0 0 0-1.046.478v4.458a.632.632 0 0 0 1.046.478l2.574-2.23a.632.632 0 0 0 0-.955Z"></path></g>', 1), vo = [
  ho
];
function xo(e, t) {
  return n(), p("svg", mo, vo);
}
const go = { render: xo }, se = {
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
}, wo = {
  type: "CONDITIONAL_BRANCH",
  text: "条件分支",
  nextNode: null,
  childNodes: [
    S(se),
    {
      ...S(se),
      text: "条件2"
    }
  ]
}, fe = {
  text: "审批1",
  type: "APPROVAL",
  properties: {
    approType: 0
  },
  nextNode: null,
  childNodes: []
}, $o = { class: "w-50 flex-center relative" }, bo = /* @__PURE__ */ o("div", { class: "h-1 bg-#8996AF absolute top-50% w-full" }, null, -1), No = /* @__PURE__ */ o("div", { class: "leading-20 text-16 mt--1" }, "+", -1), yo = [
  No
], Io = { class: "text-#606877 my-10" }, Co = ["onClick"], Bo = { class: "ml-10" }, Y = {
  __name: "NodeAdd",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["add"],
  setup(e, { emit: t }) {
    const s = e, d = [
      {
        name: "审批节点",
        svg: no,
        render: () => S(fe)
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
        svg: io,
        render: () => S(wo)
      },
      {
        name: "选择分支",
        svg: po,
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
        svg: go,
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
    }, r = (c) => {
      f(), a(c.render());
    }, a = (c) => {
      const m = S(s.nodeInfo.nextNode);
      s.nodeInfo.nextNode = {
        ...c,
        nextNode: m
      };
    };
    return (c, m) => {
      const h = Ce;
      return n(), p("div", $o, [
        bo,
        l(h, {
          placement: "bottom",
          trigger: "manual",
          show: u.value,
          onClickoutside: f
        }, {
          trigger: _(() => [
            o("div", {
              class: "rounded-50% bg-#4A86FF w-20 h-20 text-center text-#fff cursor-pointer z-2 hover:scale-110 transition",
              onClick: m[0] || (m[0] = (i) => u.value = !0)
            }, yo)
          ]),
          default: _(() => [
            o("div", Io, [
              (n(), p(z, null, F(d, (i) => o("div", {
                key: i.svg,
                class: "flex items-center px-5 py-10 cursor-pointer",
                onClick: (g) => r(i)
              }, [
                (n(), v(I(i.svg), { class: "w-1em h-1em text-24" })),
                o("div", Bo, Z(i.name), 1)
              ], 8, Co)), 64))
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
};
const ko = {
  __name: "BaseInput",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, s = N(""), d = N(!1), u = N(!1), f = async () => {
      var a;
      d.value = !0, s.value = t.nodeInfo.text, await ae(), (a = u.value) == null || a.focus();
    }, r = () => {
      d.value = !1, s.value && (t.nodeInfo.text = s.value);
    };
    return (a, c) => {
      const m = T;
      return n(), p("div", null, [
        d.value ? (n(), v(m, {
          key: 0,
          ref_key: "inputRef",
          ref: u,
          value: s.value,
          "onUpdate:value": c[0] || (c[0] = (h) => s.value = h),
          type: "text",
          placeholder: "请输入",
          size: "tiny",
          autofocus: "",
          class: "w-full",
          onBlur: r
        }, null, 8, ["value"])) : (n(), p("div", {
          key: 1,
          class: "truncate px-5",
          onClick: f
        }, Z(e.nodeInfo.text), 1))
      ]);
    };
  }
}, _e = /* @__PURE__ */ O(ko, [["__scopeId", "data-v-60eec5bf"]]);
const ee = (e) => (Q("data-v-cfc64728"), e = e(), G(), e), Ao = { class: "flex items-center" }, Oo = /* @__PURE__ */ ee(() => /* @__PURE__ */ o("div", { class: "arrows absolute top-50% mt--4 left--6 border-4 border-transparent border-l-red" }, null, -1)), Vo = { class: "appro_wrap rounded-4 box_shadow w-120 overflow-hidden relative z-2 cursor-pointer" }, So = { class: "title h-28 leading-28 flex items-center w-full text-#fff pr-5" }, Ro = /* @__PURE__ */ ee(() => /* @__PURE__ */ o("div", { class: "w-3 h-14 bg-#ffffff4d rounded-r-2" }, null, -1)), Lo = { class: "px-2 flex-1 w-0" }, Zo = { class: "h-36 flex items-center justify-between px-10 text-#606877 bg-#fff" }, To = /* @__PURE__ */ ee(() => /* @__PURE__ */ o("div", { class: "" }, "所有人", -1)), Mo = {
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
  setup(e, { emit: t }) {
    const s = e, d = M("clickNode"), u = () => {
      s.childIndex === -1 ? s.parentNode.nextNode = s.nodeInfo.nextNode : s.parentNode.childNodes.length <= 2 ? $dialog.warning({
        title: "警告",
        content: "分支至少需要有两个节点，继续删除将会删除整个分支节点，是否确定删除?",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          t("deleteBranch");
        }
      }) : s.parentNode.childNodes.splice(s.childIndex, 1);
    };
    return (f, r) => {
      var a, c;
      return n(), p("div", Ao, [
        o("div", {
          class: "relative mx-1",
          onClick: r[0] || (r[0] = re((m) => x(d)(e.nodeInfo), ["stop"]))
        }, [
          Oo,
          o("div", Vo, [
            o("div", So, [
              Ro,
              o("div", Lo, [
                l(_e, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
              ]),
              (n(), v(I(x(Ne)), {
                class: "close w-14 h-14 hidden",
                onClick: u
              }))
            ]),
            o("div", Zo, [
              To,
              (n(), v(I(x(de)), { class: "rotate-270 w-18 h-18" }))
            ])
          ])
        ]),
        l(Y, { "node-info": e.nodeInfo }, null, 8, ["node-info"]),
        (n(), v(I(x(H)[(c = (a = e.nodeInfo) == null ? void 0 : a.nextNode) == null ? void 0 : c.type]), {
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"]))
      ]);
    };
  }
}, te = /* @__PURE__ */ O(Mo, [["__scopeId", "data-v-cfc64728"]]), Po = {
  __name: "NodeAppro",
  setup(e) {
    return (t, s) => (n(), v(te, V(t.$attrs, { style: { "--node-color": "#4a86ff" } }), null, 16));
  }
};
const jo = (e) => (Q("data-v-76c0c72d"), e = e(), G(), e), Do = { class: "flex items-center" }, Eo = { class: "flex" }, zo = { class: "box_wrap ml-20" }, Fo = /* @__PURE__ */ jo(() => /* @__PURE__ */ o("div", { class: "line" }, null, -1)), Ho = {
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
  setup(e, { emit: t }) {
    const s = e, d = () => {
      t("addBranch");
    }, u = () => {
      s.parentNode.nextNode = s.nodeInfo.nextNode;
    };
    return (f, r) => {
      var a;
      return n(), p("div", Do, [
        o("div", Eo, [
          o("div", zo, [
            o("div", {
              class: "absolute top-50% mt--10 left--25 border border-#c0c7d4 rounded-10 bg-#fff w-50 text-#606877 text-12 box_shadow z-2 cursor-pointer hover:scale-110 transition",
              onClick: d
            }, Z(e.addName), 1),
            (n(!0), p(z, null, F(e.nodeInfo.childNodes, (c, m) => (n(), p("div", {
              key: m,
              class: ge([{ top_line: !m }, "item_wrap min-h-100 pl-40 flex items-center"])
            }, [
              Fo,
              (n(), v(I(x(H)[c == null ? void 0 : c.type]), {
                "parent-node": e.nodeInfo,
                "node-info": c,
                "child-index": m,
                onDeleteBranch: u
              }, null, 40, ["parent-node", "node-info", "child-index"]))
            ], 2))), 128))
          ])
        ]),
        l(Y, { "node-info": e.nodeInfo }, null, 8, ["node-info"]),
        e.nodeInfo.nextNode ? (n(), v(I(x(H)[(a = e.nodeInfo.nextNode) == null ? void 0 : a.type]), {
          key: 0,
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"])) : E("", !0)
      ]);
    };
  }
}, oe = /* @__PURE__ */ O(Ho, [["__scopeId", "data-v-76c0c72d"]]), Uo = {
  __name: "NodeBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, s = () => {
      t.nodeInfo.childNodes.push({
        text: `审批${t.nodeInfo.childNodes.length + 1}`,
        type: "APPROVAL",
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (n(), v(oe, V(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加选择",
      onAddBranch: s
    }), null, 16, ["node-info"]));
  }
}, qo = {
  __name: "NodeEnd",
  setup(e) {
    return (t, s) => (n(), v(pe, V(t.$attrs, {
      style: { "--node-color": "#576A95" },
      svg: "end"
    }), null, 16));
  }
}, Wo = {
  __name: "NodeCondition",
  setup(e) {
    return (t, s) => (n(), v(te, V(t.$attrs, { style: { "--node-color": "#35bbee" } }), null, 16));
  }
}, Qo = {
  __name: "NodeConditionBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, s = () => {
      t.nodeInfo.childNodes.push({
        text: `条件${t.nodeInfo.childNodes.length + 1}`,
        type: "CONDITION",
        properties: {
          conditions: []
        },
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (n(), v(oe, V(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加条件",
      onAddBranch: s
    }), null, 16, ["node-info"]));
  }
}, Go = {
  __name: "NodeParallelBranch",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, s = () => {
      t.nodeInfo.childNodes.push({
        text: `审批${t.nodeInfo.childNodes.length + 1}`,
        type: "APPROVAL",
        nextNode: null,
        childNodes: []
      });
    };
    return (d, u) => (n(), v(oe, V(d.$attrs, {
      "node-info": e.nodeInfo,
      "add-name": "添加并行",
      onAddBranch: s
    }), null, 16, ["node-info"]));
  }
}, Jo = {
  __name: "NodeTimer",
  setup(e) {
    return (t, s) => (n(), v(te, V(t.$attrs, { style: { "--node-color": "#FFAD5B" } }), null, 16));
  }
}, H = {
  // START: NodeStart,
  APPROVAL: Po,
  CONDITIONAL_BRANCH: Qo,
  CONDITION: Wo,
  PARALLEL_BRANCH: Go,
  CHOICE_BRANCH: Uo,
  END: qo,
  TIMER: Jo
}, Ko = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 18.5 18"
}, Xo = /* @__PURE__ */ o("path", {
  fill: "currentColor",
  d: "M15.642 7.285a2 2 0 0 1 0 3.43l-9.113 5.468A2 2 0 0 1 3.5 14.468V3.532a2 2 0 0 1 3.029-1.715Z"
}, null, -1), Yo = [
  Xo
];
function en(e, t) {
  return n(), p("svg", Ko, Yo);
}
const tn = { render: en }, on = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, nn = /* @__PURE__ */ o("path", {
  fill: "currentColor",
  d: "M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0zm0 85.333C276.352 85.333 85.333 276.352 85.333 512S276.352 938.667 512 938.667 938.667 747.648 938.667 512 747.648 85.333 512 85.333zm85.333 256a85.333 85.333 0 0 1 85.334 85.334v170.666a85.333 85.333 0 0 1-85.334 85.334H426.667a85.333 85.333 0 0 1-85.334-85.334V426.667a85.333 85.333 0 0 1 85.334-85.334h170.666z"
}, null, -1), sn = [
  nn
];
function ln(e, t) {
  return n(), p("svg", on, sn);
}
const an = { render: ln };
const rn = { class: "flex items-center" }, dn = { class: "text-18" }, cn = { class: "max-w-80" }, un = {
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
    const t = {
      start: tn,
      end: an
    }, s = M("clickNode");
    return (d, u) => {
      var f, r, a, c;
      return n(), p("div", rn, [
        o("div", {
          class: "node_box text-#fff rounded-4 text-center leading-14 px-5 pb-5 pt-3 text-12 min-w-40 h-40 box_shadow cursor-pointer",
          onClick: u[0] || (u[0] = re((m) => x(s)(e.nodeInfo), ["stop"]))
        }, [
          o("div", dn, [
            (n(), v(I(t[e.svg]), { class: "w-1em h-1em" }))
          ]),
          o("div", cn, [
            l(_e, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
          ])
        ]),
        (f = e.nodeInfo) != null && f.nextNode ? (n(), v(Y, {
          key: 0,
          "node-info": e.nodeInfo
        }, null, 8, ["node-info"])) : E("", !0),
        (r = e.nodeInfo) != null && r.nextNode ? (n(), v(I(x(H)[(c = (a = e.nodeInfo) == null ? void 0 : a.nextNode) == null ? void 0 : c.type]), {
          key: 1,
          "node-info": e.nodeInfo.nextNode,
          "parent-node": e.nodeInfo
        }, null, 8, ["node-info", "parent-node"])) : E("", !0)
      ]);
    };
  }
}, pe = /* @__PURE__ */ O(un, [["__scopeId", "data-v-572d15d0"]]), fn = {
  __name: "NodeStart",
  setup(e) {
    return (t, s) => (n(), v(pe, V(t.$attrs, {
      style: { "--node-color": "#67C23A" },
      svg: "start"
    }), null, 16));
  }
};
const _n = { class: "min-h-500 flex items-center editor_box" }, pn = {
  __name: "index",
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, s) => (n(), p("div", _n, [
      l(fn, { "node-info": e.nodeInfo }, null, 8, ["node-info"])
    ]));
  }
}, mn = /* @__PURE__ */ O(pn, [["__scopeId", "data-v-f9d1211d"]]), hn = { class: "h-full w-full relative pt-45 bg-#eee min-w-1200" }, Rn = {
  __name: "index",
  setup(e) {
    const t = W({
      zoom: 100
    }), s = (C) => {
      t.zoom += C;
    }, d = () => {
      f.value.open();
    }, u = $e(), f = N(null), r = N(null), a = N({}), c = N([]), m = N([]), h = W({
      id: u.params.id,
      loading: !1
    });
    let i = N({});
    const g = () => ({
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
          ...S(fe),
          nextNode: {
            text: "结束",
            type: "END",
            nextNode: null,
            childNodes: []
          }
        }
      }
    }), w = async () => {
      console.log(333, h.id), h.loading = !0;
      const { code: C, data: k, msg: A } = await ue.get({ id: h.id });
      h.loading = !1, C === 0 ? (i.value = k, b(i.value), $(h.id)) : $message.error(A);
    }, b = (C) => {
      a.value = C;
    };
    h.id && h.id !== "add" ? w() : (i.value = g(), b(i.value), ae(() => {
      r.value.open();
    }));
    const $ = async (C) => {
      const { code: k, msg: A, data: q } = await Be.findByBusinessId({
        businessId: C
      });
      k === 0 ? c.value = q || [] : $message.error(A);
    };
    return (async () => {
      h.loading = !0;
      const { code: C, msg: k, data: A } = await ke.list({
        page: 1,
        limit: 999
      });
      h.loading = !1, C === 0 ? m.value = A || [] : $message.error(k);
    })(), D("clickNode", b), D("businessList", m), D("variableList", c), D("businessId", i.value.businessId), (C, k) => (n(), p("div", hn, [
      l(Ye, {
        onZoom: s,
        onSubmit: d
      }),
      o("div", {
        class: "h-full w-full pl-200 pr-500 py-100 overflow-auto box-border",
        onClick: k[0] || (k[0] = (A) => b(x(i)))
      }, [
        l(mn, {
          "node-info": x(i).nodeTree,
          style: we({ transform: `scale(${t.zoom / 100})`, "transform-origin": "0px 0px 0px", "--bg-color": "#eee" })
        }, null, 8, ["node-info", "style"])
      ]),
      l(Ut, {
        class: "absolute right-0 top-0",
        form: a.value
      }, null, 8, ["form"]),
      l(Qt, {
        ref_key: "dialogRef",
        ref: f,
        process: x(i)
      }, null, 8, ["process"]),
      l(Xt, {
        ref_key: "businessRef",
        ref: r,
        form: x(i),
        onCallback: $
      }, null, 8, ["form"])
    ]));
  }
};
export {
  Rn as default
};
