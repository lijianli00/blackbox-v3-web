import { NInput as H, NButton as V, NSpin as M, NModal as P, NRadio as Y, NSpace as Z, NRadioGroup as ee, NTabPane as se, NTabs as te } from "naive-ui";
import { ref as I, resolveComponent as x, openBlock as N, createBlock as U, mergeProps as oe, createElementBlock as T, createVNode as e, withCtx as s, Fragment as q, renderList as J, createCommentVNode as G, unref as r, isRef as A, createElementVNode as C, createTextVNode as f, toDisplayString as z } from "vue";
import { a as L, b as ae } from "./workflow-8c68dd55.mjs";
import { a as K, u as E } from "./useModal-07595bd1.mjs";
import "lodash";
import "colord";
import { v as ne } from "./index-de809ebd.mjs";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const Q = {
  __name: "TreeSelectPersonArr",
  props: {
    value: {
      type: [String, Array, Object],
      default: ""
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:value"],
  setup(R, { emit: v }) {
    const b = R, d = I(null), p = (n, t) => {
      if (b.multiple) {
        const o = t.filter((c) => {
          if (c.type === "person")
            return !0;
        });
        v(
          "update:value",
          o.map((c) => ({
            userId: c.id,
            userName: c.name,
            unitId: c.unitId
          }))
        ), d.value = o.map((c) => c.id);
      } else
        t.type === "person" && (v("update:value", [
          {
            userId: t.id,
            userName: t.name,
            unitId: t.unitId
          }
        ]), d.value = n);
    };
    return (n, t) => {
      const o = x("sh-tree-select-person");
      return N(), U(o, oe({
        value: d.value,
        class: "w-full"
      }, n.$attrs, {
        multiple: R.multiple,
        "onUpdate:value": p
      }), null, 16, ["value", "multiple"]);
    };
  }
}, W = {
  __name: "ProcessHandle",
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    process: {
      type: Object,
      default: () => ({})
    },
    remark: {
      type: Boolean,
      default: !1
    }
  },
  setup(R, { expose: v }) {
    const { formRef: b, formValue: d, reseForm: p, validate: n } = K(), t = [
      {
        required: !0,
        validator(o, c) {
          return c && c.length ? !0 : new Error("必填项不能为空");
        },
        trigger: ["input", "blur"]
      }
    ];
    return v({
      validate: n
    }), (o, c) => {
      const k = x("sh-form-item"), g = H, i = x("sh-form");
      return N(), T("div", null, [
        e(i, {
          ref_key: "formRef",
          ref: b,
          model: R.form
        }, {
          default: s(() => [
            (N(!0), T(q, null, J(R.process.processNodeNexts, (a) => (N(), T("div", {
              key: a.id,
              class: "w-full"
            }, [
              e(k, {
                label: "处理人",
                path: `processDealUsers.${a.id}`,
                rule: t
              }, {
                default: s(() => [
                  e(Q, {
                    value: R.form.processDealUsers[a.id],
                    "onUpdate:value": (l) => R.form.processDealUsers[a.id] = l,
                    multiple: !!a.isCheckbox
                  }, null, 8, ["value", "onUpdate:value", "multiple"])
                ]),
                _: 2
              }, 1032, ["path"])
            ]))), 128)),
            R.remark ? (N(), U(k, {
              key: 0,
              label: "审批意见",
              path: "processRemark"
            }, {
              default: s(() => [
                e(g, {
                  value: R.form.processRemark,
                  "onUpdate:value": c[0] || (c[0] = (a) => R.form.processRemark = a),
                  type: "textarea",
                  placeholder: "请输入"
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : G("", !0)
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
}, le = { class: "p-20" }, re = { class: "text-right mt-20" }, ue = {
  __name: "index",
  emits: ["close"],
  setup(R, { expose: v, emit: b }) {
    const d = I({}), { formRef: p, loading: n, showModal: t, formValue: o } = E({
      processVersionId: "",
      processBusinessDataId: "",
      processDealUsers: {}
    }), c = () => {
      p.value.validate(k);
    }, k = async () => {
      n.value = !0;
      const { code: a, msg: l } = await L.start(o.value);
      n.value = !1, a === 0 ? ($message.success("成功"), t.value = !1, b("close")) : $message.error(l);
    }, g = async (a) => {
      n.value = !0;
      const l = ne(), { code: u, data: m, msg: h } = await L.findNextNodes({
        processVersionId: a.versionId,
        processBusinessId: "",
        processBusinessDataId: l
      });
      n.value = !1, u === 0 ? (d.value = m || {}, o.value.processVersionId = a.versionId, o.value.processBusinessDataId = l, m.processNodeNexts.forEach((y) => {
        o.value.processDealUsers[y.id] = [];
      })) : $message.error(h);
    };
    return v({
      open: (a) => {
        t.value = !0, g(a);
      }
    }), (a, l) => {
      const u = V, m = M, h = P;
      return N(), U(h, {
        show: r(t),
        "onUpdate:show": l[1] || (l[1] = (y) => A(t) ? t.value = y : null),
        preset: "card",
        class: "w-500",
        title: "流程处理"
      }, {
        default: s(() => [
          e(m, { show: r(n) }, {
            default: s(() => [
              C("div", le, [
                e(W, {
                  ref_key: "formRef",
                  ref: p,
                  form: r(o),
                  process: d.value
                }, null, 8, ["form", "process"])
              ]),
              C("div", re, [
                e(u, {
                  onClick: l[0] || (l[0] = (y) => t.value = !1)
                }, {
                  default: s(() => [
                    f(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(u, {
                  type: "primary",
                  onClick: c
                }, {
                  default: s(() => [
                    f(" 提交 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, ce = { class: "p-20" }, de = { class: "text-right mt-20" }, pe = {
  __name: "AgreeDialog",
  emits: ["close"],
  setup(R, { expose: v, emit: b }) {
    const d = I({}), { formRef: p, loading: n, showModal: t, formValue: o, reseForm: c } = E({
      processTaskId: "",
      processRemark: "",
      processDealUsers: {}
    }), k = () => {
      p.value.validate(g);
    }, g = async () => {
      n.value = !0;
      const { code: l, msg: u } = await L.submit(o.value);
      n.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, b("close")) : $message.error(u);
    }, i = async (l) => {
      n.value = !0;
      const { code: u, data: m, msg: h } = await L.findNextNodes({
        processTaskId: l.id,
        processBusinessDataId: l.businessDataId
      });
      n.value = !1, u === 0 ? (d.value = m || {}, o.value.processTaskId = l.id, m.processNodeNexts.forEach((y) => {
        o.value.processDealUsers[y.id] = [];
      })) : $message.error(h);
    };
    return v({
      open: (l) => {
        t.value = !0, c(), i(l);
      }
    }), (l, u) => {
      const m = V, h = M, y = P;
      return N(), U(y, {
        show: r(t),
        "onUpdate:show": u[1] || (u[1] = (w) => A(t) ? t.value = w : null),
        preset: "card",
        class: "w-500",
        title: "流程处理"
      }, {
        default: s(() => [
          e(h, { show: r(n) }, {
            default: s(() => [
              C("div", ce, [
                e(W, {
                  ref_key: "formRef",
                  ref: p,
                  form: r(o),
                  process: d.value,
                  remark: ""
                }, null, 8, ["form", "process"])
              ]),
              C("div", de, [
                e(m, {
                  onClick: u[0] || (u[0] = (w) => t.value = !1)
                }, {
                  default: s(() => [
                    f(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(m, {
                  type: "primary",
                  onClick: k
                }, {
                  default: s(() => [
                    f(" 提交 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, ie = { class: "p-20" }, me = { class: "text-right mt-20" }, _e = {
  __name: "ChangeDialog",
  emits: ["close"],
  setup(R, { expose: v, emit: b }) {
    const { formRef: d, loading: p, showModal: n, formValue: t, reseForm: o } = E({
      processTaskId: "",
      processRemark: "",
      processDealUser: []
    }), c = () => {
      d.value.validate(k);
    }, k = async () => {
      p.value = !0;
      const { code: i, msg: a } = await L.change(t.value);
      p.value = !1, i === 0 ? ($message.success("成功"), n.value = !1, b("close")) : $message.error(a);
    };
    return v({
      open: (i) => {
        n.value = !0, o(), t.value.processTaskId = i.id;
      }
    }), (i, a) => {
      const l = x("sh-form-item"), u = H, m = x("sh-form"), h = V, y = M, w = P;
      return N(), U(w, {
        show: r(n),
        "onUpdate:show": a[3] || (a[3] = (_) => A(n) ? n.value = _ : null),
        preset: "card",
        class: "w-500",
        title: "转审"
      }, {
        default: s(() => [
          e(y, { show: r(p) }, {
            default: s(() => [
              C("div", ie, [
                e(m, {
                  ref_key: "formRef",
                  ref: d,
                  model: r(t)
                }, {
                  default: s(() => [
                    e(l, {
                      label: "处理人",
                      path: i.processDealUser,
                      rule: i.rules
                    }, {
                      default: s(() => [
                        e(Q, {
                          value: r(t).processDealUser,
                          "onUpdate:value": a[0] || (a[0] = (_) => r(t).processDealUser = _)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["path", "rule"]),
                    e(l, {
                      label: "审批意见",
                      path: "processRemark"
                    }, {
                      default: s(() => [
                        e(u, {
                          value: r(t).processRemark,
                          "onUpdate:value": a[1] || (a[1] = (_) => r(t).processRemark = _),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              C("div", me, [
                e(h, {
                  onClick: a[2] || (a[2] = (_) => n.value = !1)
                }, {
                  default: s(() => [
                    f(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(h, {
                  type: "primary",
                  onClick: c
                }, {
                  default: s(() => [
                    f(" 提交 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, fe = { class: "p-20" }, ve = { class: "text-right mt-20" }, ke = {
  __name: "BackDialog",
  emits: ["close"],
  setup(R, { expose: v, emit: b }) {
    const d = I([]), { formRef: p, loading: n, showModal: t, formValue: o, reseForm: c } = E({
      processTaskId: "",
      processRemark: "",
      processNodeId: ""
    }), k = () => {
      p.value.validate(g);
    }, g = async () => {
      n.value = !0;
      const { code: l, msg: u } = await L.back(o.value);
      n.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, b("close")) : $message.error(u);
    }, i = async (l) => {
      n.value = !0;
      const { code: u, data: m, msg: h } = await L.findBackNodes({
        processTaskId: l.id
      });
      n.value = !1, u === 0 ? d.value = m || [] : $message.error(h);
    };
    return v({
      open: (l) => {
        t.value = !0, c(), i(l), o.value.processTaskId = l.id;
      }
    }), (l, u) => {
      const m = Y, h = Z, y = ee, w = x("sh-form-item"), _ = H, B = x("sh-form"), S = V, D = M, j = P;
      return N(), U(j, {
        show: r(t),
        "onUpdate:show": u[3] || (u[3] = ($) => A(t) ? t.value = $ : null),
        preset: "card",
        class: "w-500",
        title: "退回"
      }, {
        default: s(() => [
          e(D, { show: r(n) }, {
            default: s(() => [
              C("div", fe, [
                e(B, {
                  ref_key: "formRef",
                  ref: p,
                  model: r(o)
                }, {
                  default: s(() => [
                    e(w, {
                      label: "退回节点",
                      path: "processNodeId",
                      rule: "required"
                    }, {
                      default: s(() => [
                        e(y, {
                          value: r(o).processNodeId,
                          "onUpdate:value": u[0] || (u[0] = ($) => r(o).processNodeId = $),
                          name: "radiogroup"
                        }, {
                          default: s(() => [
                            e(h, null, {
                              default: s(() => [
                                (N(!0), T(q, null, J(d.value, ($) => (N(), U(m, {
                                  key: $.processNodeId,
                                  value: $.processNodeId
                                }, {
                                  default: s(() => [
                                    f(z($.processNodeText), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(w, {
                      label: "审批意见",
                      path: "processRemark"
                    }, {
                      default: s(() => [
                        e(_, {
                          value: r(o).processRemark,
                          "onUpdate:value": u[1] || (u[1] = ($) => r(o).processRemark = $),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ]),
              C("div", ve, [
                e(S, {
                  onClick: u[2] || (u[2] = ($) => t.value = !1)
                }, {
                  default: s(() => [
                    f(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(S, {
                  type: "primary",
                  onClick: k
                }, {
                  default: s(() => [
                    f(" 提交 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, he = { class: "h-400 overflow-auto" }, ye = /* @__PURE__ */ C("div", null, "流程表单", -1), we = { class: "text-right mt-20 flex justify-end" }, be = {
  key: 1,
  class: "ml-10"
}, X = {
  __name: "ProcessDialog",
  emits: ["loadList"],
  setup(R, { expose: v, emit: b }) {
    const d = I(null), p = I(null), n = I(null), t = I(null), o = I({}), { type: c, loading: k, showModal: g } = E(), i = (w, _) => {
      g.value = !0, c.value = w, o.value = _;
    }, a = () => {
      g.value = !1, b("loadList");
    }, l = () => {
      d.value.open(o.value);
    }, u = () => {
      p.value.open(o.value);
    }, m = () => {
      n.value.open(o.value);
    }, h = () => {
      t.value.open(o.value);
    }, y = () => {
      $delete(
        L.recall,
        { processBusinessDataId: o.value.businessDataId },
        a,
        "是否确定撤回流程？"
      );
    };
    return v({
      open: i
    }), (w, _) => {
      const B = se, S = te, D = V, j = M, $ = P;
      return N(), T(q, null, [
        e($, {
          show: r(g),
          "onUpdate:show": _[1] || (_[1] = (O) => A(g) ? g.value = O : null),
          preset: "card",
          class: "w-600",
          title: "流程处理"
        }, {
          default: s(() => [
            e(j, { show: r(k) }, {
              default: s(() => [
                C("div", he, [
                  f(z(r(c)) + " ", 1),
                  e(S, {
                    type: "line",
                    animated: ""
                  }, {
                    default: s(() => [
                      e(B, {
                        name: "1",
                        tab: "流程审批"
                      }, {
                        default: s(() => [
                          ye
                        ]),
                        _: 1
                      }),
                      e(B, {
                        name: "2",
                        tab: "流程图"
                      }, {
                        default: s(() => [
                          f(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      e(B, {
                        name: "3",
                        tab: "流转记录"
                      }, {
                        default: s(() => [
                          f(" Hey Jude ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                C("div", we, [
                  e(D, {
                    onClick: _[0] || (_[0] = (O) => g.value = !1)
                  }, {
                    default: s(() => [
                      f(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  r(c) === "add" ? (N(), U(D, {
                    key: 0,
                    type: "primary",
                    onClick: l
                  }, {
                    default: s(() => [
                      f(" 发起 ")
                    ]),
                    _: 1
                  })) : (N(), T("div", be, [
                    e(D, { onClick: y }, {
                      default: s(() => [
                        f(" 撤回 ")
                      ]),
                      _: 1
                    }),
                    e(D, { onClick: h }, {
                      default: s(() => [
                        f(" 退回 ")
                      ]),
                      _: 1
                    }),
                    e(D, { onClick: m }, {
                      default: s(() => [
                        f(" 转审 ")
                      ]),
                      _: 1
                    }),
                    e(D, {
                      type: "primary",
                      onClick: u
                    }, {
                      default: s(() => [
                        f(" 同意 ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          _: 1
        }, 8, ["show"]),
        e(ue, {
          ref_key: "handleRef",
          ref: d,
          onClose: a
        }, null, 512),
        e(pe, {
          ref_key: "agreeRef",
          ref: p,
          onClose: a
        }, null, 512),
        e(_e, {
          ref_key: "changeRef",
          ref: n,
          onClose: a
        }, null, 512),
        e(ke, {
          ref_key: "backRef",
          ref: t,
          onClose: a
        }, null, 512)
      ], 64);
    };
  }
}, ge = { class: "p-20" }, Re = { class: "text-right mt-20" }, Ne = {
  __name: "TableDialog",
  emits: ["loadList"],
  setup(R, { expose: v, emit: b }) {
    const d = I(null), p = I(null), { formRef: n, loading: t, showModal: o, formValue: c, reseForm: k, validate: g } = E({
      processName: "",
      status: 1
    }), i = [{ label: "流程名称", key: "processName" }], a = [
      { type: "index" },
      { title: "流程名称", key: "processName" },
      { title: "版本描述", key: "description" },
      { title: "版本ID", key: "versionId" },
      { title: "创建人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(y) {
          return [
            $textBtn({
              text: "发起流程",
              onClick: () => {
                p.value.open("add", y);
              },
              code: "system-imgList-delete"
            })
          ];
        }
      }
    ], l = () => {
      b("loadList");
    }, u = () => {
      d.value.loadList();
    }, m = async () => {
      await k(), u();
    };
    return v({
      open: () => {
        o.value = !0;
      }
    }), (y, w) => {
      const _ = H, B = x("sh-form-item"), S = x("sh-search-area"), D = x("sh-data-table"), j = V, $ = M, O = P;
      return N(), T(q, null, [
        e(O, {
          show: r(o),
          "onUpdate:show": w[2] || (w[2] = (F) => A(o) ? o.value = F : null),
          preset: "card",
          class: "w-1200",
          title: "流程",
          onAfterLeave: l
        }, {
          default: s(() => [
            C("div", ge, [
              e($, { show: r(t) }, {
                default: s(() => [
                  e(S, {
                    ref_key: "formRef",
                    ref: n,
                    class: "mb-10",
                    form: r(c),
                    "dropdown-list": i,
                    onLoadList: u,
                    onReset: m
                  }, {
                    default: s(() => [
                      e(B, {
                        span: 12,
                        label: "流程名称",
                        path: "processName"
                      }, {
                        default: s(() => [
                          e(_, {
                            value: r(c).processName,
                            "onUpdate:value": w[0] || (w[0] = (F) => r(c).processName = F)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["form"]),
                  e(D, {
                    ref_key: "tableRef",
                    ref: d,
                    "row-key": (F) => F.roleId,
                    columns: a,
                    api: r(ae).list,
                    params: r(c)
                  }, null, 8, ["row-key", "api", "params"]),
                  C("div", Re, [
                    e(j, {
                      onClick: w[1] || (w[1] = (F) => o.value = !1)
                    }, {
                      default: s(() => [
                        f(" 关闭 ")
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
        }, 8, ["show"]),
        e(X, {
          ref_key: "processRef",
          ref: p
        }, null, 512)
      ], 64);
    };
  }
}, je = {
  __name: "index",
  setup(R) {
    const v = I(null), b = I(null), d = I(null), p = [{ label: "标题", key: "title" }], n = [
      { type: "index" },
      { title: "表单数据主键", key: "businessDataId" },
      { title: "当前所在节点", key: "nodeText" },
      { title: "处理人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(i) {
          return [
            $textBtn({
              text: "处理",
              onClick: () => {
                d.value.open("processing", i);
              },
              code: "system-appClient-update"
            })
          ];
        }
      }
    ], { formValue: t, reseForm: o } = K({
      title: ""
    }), c = async () => {
      await o(), k();
    }, k = () => {
      v.value.loadList();
    }, g = (i) => {
      b.value.open(i);
    };
    return (i, a) => {
      const l = V, u = H, m = x("sh-form-item"), h = x("sh-search-area"), y = x("sh-data-table"), w = x("sh-content-layout");
      return N(), U(w, null, {
        header: s(() => [
          e(h, {
            form: r(t),
            "dropdown-list": p,
            onLoadList: k,
            onReset: c
          }, {
            left: s(() => [
              i.$isCode("system-appClient-add") ? (N(), U(l, {
                key: 0,
                type: "primary",
                onClick: g
              }, {
                default: s(() => [
                  f(" 新增 ")
                ]),
                _: 1
              })) : G("", !0)
            ]),
            default: s(() => [
              e(m, {
                span: 12,
                label: "标题",
                path: "title"
              }, {
                default: s(() => [
                  e(u, {
                    value: r(t).title,
                    "onUpdate:value": a[0] || (a[0] = (_) => r(t).title = _)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: s(() => [
          e(y, {
            ref_key: "tableRef",
            ref: v,
            "row-key": (_) => _.roleId,
            columns: n,
            api: r(L).list,
            params: r(t)
          }, null, 8, ["row-key", "api", "params"]),
          e(Ne, {
            ref_key: "dialogRef",
            ref: b,
            onLoadList: k
          }, null, 512),
          e(X, {
            ref_key: "processRef",
            ref: d,
            onLoadList: k
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  je as default
};
