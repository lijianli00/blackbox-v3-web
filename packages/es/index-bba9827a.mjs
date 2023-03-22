import { NInput as H, NButton as V, NSpin as M, NModal as P, NRadio as Z, NSpace as ee, NRadioGroup as se, NTabPane as te, NTabs as oe, NGridItem as G } from "naive-ui";
import { ref as $, resolveComponent as x, openBlock as w, createBlock as U, mergeProps as ae, createElementBlock as L, createVNode as e, withCtx as s, Fragment as q, renderList as J, createCommentVNode as z, unref as r, isRef as A, createElementVNode as C, createTextVNode as k, toDisplayString as K } from "vue";
import { a as B, b as ne } from "./workflow-2c0ca3a0.mjs";
import { a as Q, u as E } from "./useModal-07595bd1.mjs";
import "lodash";
import "colord";
import { p as le } from "./index-c846165e.mjs";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const W = {
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
  setup(b, { emit: y }) {
    const g = b, d = $(null), p = (a, t) => {
      if (g.multiple) {
        const o = t.filter((u) => {
          if (u.type === "person")
            return !0;
        });
        y(
          "update:value",
          o.map((u) => ({
            userId: u.id,
            userName: u.name,
            unitId: u.unitId
          }))
        ), d.value = o.map((u) => u.id);
      } else
        t.type === "person" && (y("update:value", [
          {
            userId: t.id,
            userName: t.name,
            unitId: t.unitId
          }
        ]), d.value = a);
    };
    return (a, t) => {
      const o = x("sh-tree-select-person");
      return w(), U(o, ae({
        value: d.value,
        class: "w-full"
      }, a.$attrs, {
        multiple: b.multiple,
        "onUpdate:value": p
      }), null, 16, ["value", "multiple"]);
    };
  }
}, X = {
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
  setup(b, { expose: y }) {
    const { formRef: g, formValue: d, reseForm: p, validate: a } = Q(), t = [
      {
        required: !0,
        validator(o, u) {
          return u && u.length ? !0 : new Error("必填项不能为空");
        },
        trigger: ["input", "blur"]
      }
    ];
    return y({
      validate: a
    }), (o, u) => {
      const N = x("sh-form-item"), m = H, h = x("sh-form");
      return w(), L("div", null, [
        e(h, {
          ref_key: "formRef",
          ref: g,
          model: b.form
        }, {
          default: s(() => [
            (w(!0), L(q, null, J(b.process.processNodeNexts, (n) => (w(), L("div", {
              key: n.id,
              class: "w-full"
            }, [
              e(N, {
                label: "处理人",
                path: `processDealUsers.${n.id}`,
                rule: t
              }, {
                default: s(() => [
                  e(W, {
                    value: b.form.processDealUsers[n.id],
                    "onUpdate:value": (l) => b.form.processDealUsers[n.id] = l,
                    multiple: !!n.isCheckbox
                  }, null, 8, ["value", "onUpdate:value", "multiple"])
                ]),
                _: 2
              }, 1032, ["path"])
            ]))), 128)),
            b.remark ? (w(), U(N, {
              key: 0,
              label: "审批意见",
              path: "processRemark"
            }, {
              default: s(() => [
                e(m, {
                  value: b.form.processRemark,
                  "onUpdate:value": u[0] || (u[0] = (n) => b.form.processRemark = n),
                  type: "textarea",
                  placeholder: "请输入"
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : z("", !0)
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
}, re = { class: "p-20" }, ue = { class: "text-right mt-20" }, ce = {
  __name: "index",
  emits: ["close"],
  setup(b, { expose: y, emit: g }) {
    const d = $({}), { formRef: p, loading: a, showModal: t, formValue: o } = E({
      processVersionId: "",
      processBusinessDataId: "",
      processDealUsers: {}
    }), u = () => {
      p.value.validate(N);
    }, N = async () => {
      a.value = !0;
      const { code: n, msg: l } = await B.start(o.value);
      a.value = !1, n === 0 ? ($message.success("成功"), t.value = !1, g("close")) : $message.error(l);
    }, m = async (n) => {
      a.value = !0;
      const l = le(), { code: c, data: _, msg: f } = await B.findNextNodes({
        processVersionId: n.versionId,
        processBusinessId: "",
        processBusinessDataId: l
      });
      a.value = !1, c === 0 ? (d.value = _ || {}, o.value.processVersionId = n.versionId, o.value.processBusinessDataId = l, _.processNodeNexts.forEach((i) => {
        o.value.processDealUsers[i.id] = [];
      })) : $message.error(f);
    };
    return y({
      open: (n) => {
        t.value = !0, m(n);
      }
    }), (n, l) => {
      const c = V, _ = M, f = P;
      return w(), U(f, {
        show: r(t),
        "onUpdate:show": l[1] || (l[1] = (i) => A(t) ? t.value = i : null),
        preset: "card",
        class: "w-500",
        title: "流程处理"
      }, {
        default: s(() => [
          e(_, { show: r(a) }, {
            default: s(() => [
              C("div", re, [
                e(X, {
                  ref_key: "formRef",
                  ref: p,
                  form: r(o),
                  process: d.value
                }, null, 8, ["form", "process"])
              ]),
              C("div", ue, [
                e(c, {
                  onClick: l[0] || (l[0] = (i) => t.value = !1)
                }, {
                  default: s(() => [
                    k(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(c, {
                  type: "primary",
                  onClick: u
                }, {
                  default: s(() => [
                    k(" 提交 ")
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
}, de = { class: "p-20" }, pe = { class: "text-right mt-20" }, ie = {
  __name: "AgreeDialog",
  emits: ["close"],
  setup(b, { expose: y, emit: g }) {
    const d = $({}), { formRef: p, loading: a, showModal: t, formValue: o, reseForm: u } = E({
      processTaskId: "",
      processRemark: "",
      processDealUsers: {}
    }), N = () => {
      p.value.validate(m);
    }, m = async () => {
      a.value = !0;
      const { code: l, msg: c } = await B.submit(o.value);
      a.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, g("close")) : $message.error(c);
    }, h = async (l) => {
      a.value = !0;
      const { code: c, data: _, msg: f } = await B.findNextNodes({
        processTaskId: l.id,
        processBusinessDataId: l.businessDataId
      });
      a.value = !1, c === 0 ? (d.value = _ || {}, o.value.processTaskId = l.id, _.processNodeNexts.forEach((i) => {
        o.value.processDealUsers[i.id] = [];
      })) : $message.error(f);
    };
    return y({
      open: (l) => {
        t.value = !0, u(), h(l);
      }
    }), (l, c) => {
      const _ = V, f = M, i = P;
      return w(), U(i, {
        show: r(t),
        "onUpdate:show": c[1] || (c[1] = (R) => A(t) ? t.value = R : null),
        preset: "card",
        class: "w-500",
        title: "流程处理"
      }, {
        default: s(() => [
          e(f, { show: r(a) }, {
            default: s(() => [
              C("div", de, [
                e(X, {
                  ref_key: "formRef",
                  ref: p,
                  form: r(o),
                  process: d.value,
                  remark: ""
                }, null, 8, ["form", "process"])
              ]),
              C("div", pe, [
                e(_, {
                  onClick: c[0] || (c[0] = (R) => t.value = !1)
                }, {
                  default: s(() => [
                    k(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(_, {
                  type: "primary",
                  onClick: N
                }, {
                  default: s(() => [
                    k(" 提交 ")
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
}, me = { class: "p-20" }, _e = { class: "text-right mt-20" }, fe = {
  __name: "ChangeDialog",
  emits: ["close"],
  setup(b, { expose: y, emit: g }) {
    const { formRef: d, loading: p, showModal: a, formValue: t, reseForm: o } = E({
      processTaskId: "",
      processRemark: "",
      processDealUser: []
    }), u = () => {
      d.value.validate(N);
    }, N = async () => {
      p.value = !0;
      const { code: h, msg: n } = await B.change(t.value);
      p.value = !1, h === 0 ? ($message.success("成功"), a.value = !1, g("close")) : $message.error(n);
    };
    return y({
      open: (h) => {
        a.value = !0, o(), t.value.processTaskId = h.id;
      }
    }), (h, n) => {
      const l = x("sh-form-item"), c = H, _ = x("sh-form"), f = V, i = M, R = P;
      return w(), U(R, {
        show: r(a),
        "onUpdate:show": n[3] || (n[3] = (v) => A(a) ? a.value = v : null),
        preset: "card",
        class: "w-500",
        title: "转审"
      }, {
        default: s(() => [
          e(i, { show: r(p) }, {
            default: s(() => [
              C("div", me, [
                e(_, {
                  ref_key: "formRef",
                  ref: d,
                  model: r(t)
                }, {
                  default: s(() => [
                    e(l, {
                      label: "处理人",
                      path: h.processDealUser,
                      rule: h.rules
                    }, {
                      default: s(() => [
                        e(W, {
                          value: r(t).processDealUser,
                          "onUpdate:value": n[0] || (n[0] = (v) => r(t).processDealUser = v)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["path", "rule"]),
                    e(l, {
                      label: "审批意见",
                      path: "processRemark"
                    }, {
                      default: s(() => [
                        e(c, {
                          value: r(t).processRemark,
                          "onUpdate:value": n[1] || (n[1] = (v) => r(t).processRemark = v),
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
              C("div", _e, [
                e(f, {
                  onClick: n[2] || (n[2] = (v) => a.value = !1)
                }, {
                  default: s(() => [
                    k(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(f, {
                  type: "primary",
                  onClick: u
                }, {
                  default: s(() => [
                    k(" 提交 ")
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
}, ve = { class: "p-20" }, he = { class: "text-right mt-20" }, ke = {
  __name: "BackDialog",
  emits: ["close"],
  setup(b, { expose: y, emit: g }) {
    const d = $([]), { formRef: p, loading: a, showModal: t, formValue: o, reseForm: u } = E({
      processTaskId: "",
      processRemark: "",
      processNodeId: ""
    }), N = () => {
      p.value.validate(m);
    }, m = async () => {
      a.value = !0;
      const { code: l, msg: c } = await B.back(o.value);
      a.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, g("close")) : $message.error(c);
    }, h = async (l) => {
      a.value = !0;
      const { code: c, data: _, msg: f } = await B.findBackNodes({
        processTaskId: l.id
      });
      a.value = !1, c === 0 ? d.value = _ || [] : $message.error(f);
    };
    return y({
      open: (l) => {
        t.value = !0, u(), h(l), o.value.processTaskId = l.id;
      }
    }), (l, c) => {
      const _ = Z, f = ee, i = se, R = x("sh-form-item"), v = H, T = x("sh-form"), S = V, D = M, j = P;
      return w(), U(j, {
        show: r(t),
        "onUpdate:show": c[3] || (c[3] = (I) => A(t) ? t.value = I : null),
        preset: "card",
        class: "w-500",
        title: "退回"
      }, {
        default: s(() => [
          e(D, { show: r(a) }, {
            default: s(() => [
              C("div", ve, [
                e(T, {
                  ref_key: "formRef",
                  ref: p,
                  model: r(o)
                }, {
                  default: s(() => [
                    e(R, {
                      label: "退回节点",
                      path: "processNodeId",
                      rule: "required"
                    }, {
                      default: s(() => [
                        e(i, {
                          value: r(o).processNodeId,
                          "onUpdate:value": c[0] || (c[0] = (I) => r(o).processNodeId = I),
                          name: "radiogroup"
                        }, {
                          default: s(() => [
                            e(f, null, {
                              default: s(() => [
                                (w(!0), L(q, null, J(d.value, (I) => (w(), U(_, {
                                  key: I.processNodeId,
                                  value: I.processNodeId
                                }, {
                                  default: s(() => [
                                    k(K(I.processNodeText), 1)
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
                    e(R, {
                      label: "审批意见",
                      path: "processRemark"
                    }, {
                      default: s(() => [
                        e(v, {
                          value: r(o).processRemark,
                          "onUpdate:value": c[1] || (c[1] = (I) => r(o).processRemark = I),
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
              C("div", he, [
                e(S, {
                  onClick: c[2] || (c[2] = (I) => t.value = !1)
                }, {
                  default: s(() => [
                    k(" 关闭 ")
                  ]),
                  _: 1
                }),
                e(S, {
                  type: "primary",
                  onClick: N
                }, {
                  default: s(() => [
                    k(" 提交 ")
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
}, ye = { class: "h-400 overflow-auto" }, ge = /* @__PURE__ */ C("div", null, "流程表单", -1), be = { class: "text-right mt-20 flex justify-end" }, we = {
  key: 1,
  class: "ml-10"
}, Y = {
  __name: "ProcessDialog",
  emits: ["loadList"],
  setup(b, { expose: y, emit: g }) {
    const d = $(null), p = $(null), a = $(null), t = $(null), o = $({}), { type: u, loading: N, showModal: m } = E(), h = (R, v) => {
      m.value = !0, u.value = R, o.value = v;
    }, n = () => {
      m.value = !1, g("loadList");
    }, l = () => {
      d.value.open(o.value);
    }, c = () => {
      p.value.open(o.value);
    }, _ = () => {
      a.value.open(o.value);
    }, f = () => {
      t.value.open(o.value);
    }, i = () => {
      $delete(
        B.recall,
        { processBusinessDataId: o.value.businessDataId },
        n,
        "是否确定撤回流程？"
      );
    };
    return y({
      open: h
    }), (R, v) => {
      const T = te, S = oe, D = V, j = M, I = P;
      return w(), L(q, null, [
        e(I, {
          show: r(m),
          "onUpdate:show": v[1] || (v[1] = (O) => A(m) ? m.value = O : null),
          preset: "card",
          class: "w-600",
          title: "流程处理"
        }, {
          default: s(() => [
            e(j, { show: r(N) }, {
              default: s(() => [
                C("div", ye, [
                  k(K(r(u)) + " ", 1),
                  e(S, {
                    type: "line",
                    animated: ""
                  }, {
                    default: s(() => [
                      e(T, {
                        name: "1",
                        tab: "流程审批"
                      }, {
                        default: s(() => [
                          ge
                        ]),
                        _: 1
                      }),
                      e(T, {
                        name: "2",
                        tab: "流程图"
                      }, {
                        default: s(() => [
                          k(" Hey Jude ")
                        ]),
                        _: 1
                      }),
                      e(T, {
                        name: "3",
                        tab: "流转记录"
                      }, {
                        default: s(() => [
                          k(" Hey Jude ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                C("div", be, [
                  e(D, {
                    onClick: v[0] || (v[0] = (O) => m.value = !1)
                  }, {
                    default: s(() => [
                      k(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  r(u) === "add" ? (w(), U(D, {
                    key: 0,
                    type: "primary",
                    onClick: l
                  }, {
                    default: s(() => [
                      k(" 发起 ")
                    ]),
                    _: 1
                  })) : (w(), L("div", we, [
                    e(D, { onClick: i }, {
                      default: s(() => [
                        k(" 撤回 ")
                      ]),
                      _: 1
                    }),
                    e(D, { onClick: f }, {
                      default: s(() => [
                        k(" 退回 ")
                      ]),
                      _: 1
                    }),
                    e(D, { onClick: _ }, {
                      default: s(() => [
                        k(" 转审 ")
                      ]),
                      _: 1
                    }),
                    e(D, {
                      type: "primary",
                      onClick: c
                    }, {
                      default: s(() => [
                        k(" 同意 ")
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
        e(ce, {
          ref_key: "handleRef",
          ref: d,
          onClose: n
        }, null, 512),
        e(ie, {
          ref_key: "agreeRef",
          ref: p,
          onClose: n
        }, null, 512),
        e(fe, {
          ref_key: "changeRef",
          ref: a,
          onClose: n
        }, null, 512),
        e(ke, {
          ref_key: "backRef",
          ref: t,
          onClose: n
        }, null, 512)
      ], 64);
    };
  }
}, Ne = { class: "p-20" }, Re = { class: "text-right mt-20" }, Ie = {
  __name: "TableDialog",
  emits: ["loadList"],
  setup(b, { expose: y, emit: g }) {
    const d = $(null), p = $(null), { formRef: a, loading: t, showModal: o, formValue: u, reseForm: N, validate: m } = E({
      processName: "",
      status: 1
    }), h = [
      { type: "index" },
      { title: "流程名称", key: "processName" },
      { title: "版本描述", key: "description" },
      { title: "版本ID", key: "versionId" },
      { title: "创建人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(f) {
          return [
            $textBtn({
              text: "发起流程",
              onClick: () => {
                p.value.open("add", f);
              },
              code: "system-imgList-delete"
            })
          ];
        }
      }
    ], n = () => {
      g("loadList");
    }, l = () => {
      d.value.loadList();
    }, c = async () => {
      await N(), l();
    };
    return y({
      open: () => {
        o.value = !0;
      }
    }), (f, i) => {
      const R = H, v = x("sh-form-item"), T = G, S = x("sh-search-fold"), D = x("sh-data-table"), j = V, I = M, O = P;
      return w(), L(q, null, [
        e(O, {
          show: r(o),
          "onUpdate:show": i[2] || (i[2] = (F) => A(o) ? o.value = F : null),
          preset: "card",
          class: "w-1200",
          title: "流程",
          onAfterLeave: n
        }, {
          default: s(() => [
            C("div", Ne, [
              e(I, { show: r(t) }, {
                default: s(() => [
                  e(S, {
                    ref_key: "formRef",
                    ref: a,
                    model: r(u),
                    reset: c,
                    "load-list": l,
                    class: "mb-10"
                  }, {
                    default: s(() => [
                      e(T, null, {
                        default: s(() => [
                          e(v, {
                            label: "流程名称",
                            path: "processName"
                          }, {
                            default: s(() => [
                              e(R, {
                                value: r(u).processName,
                                "onUpdate:value": i[0] || (i[0] = (F) => r(u).processName = F)
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model"]),
                  e(D, {
                    ref_key: "tableRef",
                    ref: d,
                    "row-key": (F) => F.roleId,
                    columns: h,
                    api: r(ne).list,
                    params: r(u)
                  }, null, 8, ["row-key", "api", "params"]),
                  C("div", Re, [
                    e(j, {
                      onClick: i[1] || (i[1] = (F) => o.value = !1)
                    }, {
                      default: s(() => [
                        k(" 关闭 ")
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
        e(Y, {
          ref_key: "processRef",
          ref: p
        }, null, 512)
      ], 64);
    };
  }
}, He = {
  __name: "index",
  setup(b) {
    const y = $(null), g = $(null), d = $(null), p = [
      { type: "index" },
      { title: "表单数据主键", key: "businessDataId" },
      { title: "当前所在节点", key: "nodeText" },
      { title: "处理人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(m) {
          return [
            $textBtn({
              text: "处理",
              onClick: () => {
                d.value.open("processing", m);
              },
              code: "system-appClient-update"
            })
          ];
        }
      }
    ], { formValue: a, reseForm: t } = Q({
      title: ""
    }), o = async () => {
      await t(), u();
    }, u = () => {
      y.value.loadList();
    }, N = (m) => {
      g.value.open(m);
    };
    return (m, h) => {
      const n = H, l = x("sh-form-item"), c = G, _ = x("sh-search-fold"), f = V, i = x("sh-data-table"), R = x("sh-content-layout");
      return w(), U(R, null, {
        header: s(() => [
          e(_, {
            ref: "search",
            model: r(a),
            reset: o,
            "load-list": u
          }, {
            default: s(() => [
              e(c, null, {
                default: s(() => [
                  e(l, {
                    label: "标题",
                    path: "title"
                  }, {
                    default: s(() => [
                      e(n, {
                        value: r(a).title,
                        "onUpdate:value": h[0] || (h[0] = (v) => r(a).title = v)
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
        btn: s(() => [
          m.$isCode("system-appClient-add") ? (w(), U(f, {
            key: 0,
            type: "primary",
            onClick: N
          }, {
            default: s(() => [
              k(" 新增 ")
            ]),
            _: 1
          })) : z("", !0)
        ]),
        default: s(() => [
          e(i, {
            ref_key: "tableRef",
            ref: y,
            "row-key": (v) => v.roleId,
            columns: p,
            api: r(B).list,
            params: r(a)
          }, null, 8, ["row-key", "api", "params"]),
          e(Ie, {
            ref_key: "dialogRef",
            ref: g,
            onLoadList: u
          }, null, 512),
          e(Y, {
            ref_key: "processRef",
            ref: d,
            onLoadList: u
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  He as default
};
