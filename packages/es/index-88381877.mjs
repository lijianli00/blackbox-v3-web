import { NInput as K, NSwitch as Y, NInputNumber as ee, NButton as F, NSpin as U, NModal as q, NDataTable as G, NDropdown as te, NEmpty as oe } from "naive-ui";
import { ref as x, reactive as L, resolveComponent as D, openBlock as g, createBlock as $, withCtx as n, createElementVNode as p, createVNode as t, createTextVNode as C, h as O, createElementBlock as I, normalizeStyle as E, unref as S, Fragment as J, renderList as P, resolveDynamicComponent as j, toDisplayString as Q, nextTick as se, useCssVars as ne, watch as A, createCommentVNode as T, computed as ae, normalizeClass as le } from "vue";
import { s as H, b as B, c as W, d as Z, e as ie } from "./index-de809ebd.mjs";
import re from "sortablejs";
import { _ as M } from "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const de = { class: "pt-20" }, ce = { class: "text-right mt-20" }, ue = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(R, { expose: y, emit: m }) {
    const b = {
      add: "新增",
      update: "修改"
    }, f = x(null), l = L({
      show: !1,
      loading: !1,
      type: "add"
    }), i = () => ({
      dictionaryCode: "",
      groupName: "",
      grade: 1,
      enableCustom: 0,
      remark: ""
    }), _ = L(i()), h = () => {
      Object.assign(_, i());
    }, d = () => {
      var r;
      (r = f.value) == null || r.validate((a) => {
        a || c();
      });
    }, c = async () => {
      l.loading = !0;
      const { code: r, msg: a } = await H[l.type](_);
      l.loading = !1, r === 0 ? ($message.success("成功"), l.show = !1, m("loadList")) : $message.error(a);
    };
    return y({
      open: (r) => {
        l.show = !0, r && r.id ? (l.type = "update", Object.assign(_, r)) : (l.type = "add", h());
      }
    }), (r, a) => {
      const u = K, o = D("sh-form-item"), e = Y, v = ee, w = D("sh-form"), V = F, z = U, N = q;
      return g(), $(N, {
        show: l.show,
        "onUpdate:show": a[6] || (a[6] = (k) => l.show = k),
        preset: "card",
        class: "w-600",
        title: `${b[l.type]}字典类型`
      }, {
        default: n(() => [
          p("div", de, [
            t(z, {
              show: l.loading
            }, {
              default: n(() => [
                t(w, {
                  ref_key: "formRef",
                  ref: f,
                  model: _,
                  "label-width": "90px"
                }, {
                  default: n(() => [
                    t(o, {
                      label: "名称",
                      path: "groupName",
                      rule: "required"
                    }, {
                      default: n(() => [
                        t(u, {
                          value: _.groupName,
                          "onUpdate:value": a[0] || (a[0] = (k) => _.groupName = k),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(o, {
                      label: "编码",
                      path: "dictionaryCode",
                      rule: "required"
                    }, {
                      default: n(() => [
                        t(u, {
                          value: _.dictionaryCode,
                          "onUpdate:value": a[1] || (a[1] = (k) => _.dictionaryCode = k),
                          placeholder: "请输入",
                          disabled: l.type === "update"
                        }, null, 8, ["value", "disabled"])
                      ]),
                      _: 1
                    }),
                    t(o, {
                      label: "企业自定义",
                      path: "enableCustom",
                      span: 8,
                      "label-placement": "left"
                    }, {
                      default: n(() => [
                        t(e, {
                          value: _.enableCustom,
                          "onUpdate:value": a[2] || (a[2] = (k) => _.enableCustom = k),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(o, {
                      label: "层级",
                      path: "grade",
                      rule: "required",
                      span: 12,
                      "label-placement": "left"
                    }, {
                      default: n(() => [
                        t(v, {
                          value: _.grade,
                          "onUpdate:value": a[3] || (a[3] = (k) => _.grade = k),
                          max: 3,
                          min: 1
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(o, {
                      label: "描述",
                      path: "remark"
                    }, {
                      default: n(() => [
                        t(u, {
                          value: _.remark,
                          "onUpdate:value": a[4] || (a[4] = (k) => _.remark = k),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                p("div", ce, [
                  t(V, {
                    onClick: a[5] || (a[5] = (k) => l.show = !1)
                  }, {
                    default: n(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(V, {
                    type: "primary",
                    onClick: d
                  }, {
                    default: n(() => [
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
};
const me = { class: "mb-10 text-right" }, _e = { class: "text-right mt-20" }, pe = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(R, { expose: y, emit: m }) {
    const b = D("ShFormItem"), f = x(null), l = x(null), i = L({
      show: !1,
      loading: !1,
      type: "add"
    }), _ = [
      {
        title: "数据字典值",
        key: "dictionaryName",
        render(u, o) {
          return O(
            b,
            {
              path: `saveList.${o}.dictionaryName`,
              rule: "required"
            },
            () => O(K, {
              value: u.dictionaryName,
              maxlength: 32,
              onUpdateValue(e) {
                d.saveList[o].dictionaryName = e;
              }
            })
          );
        }
      },
      {
        title: "数据字典键",
        key: "dictionaryKey",
        render(u, o) {
          return O(
            b,
            {
              path: `saveList.${o}.dictionaryKey`,
              rule: "required"
            },
            () => O(K, {
              value: u.dictionaryKey,
              maxlength: 32,
              onUpdateValue(e) {
                d.saveList[o].dictionaryKey = e;
              }
            })
          );
        }
      },
      {
        title: "操作",
        key: "handle",
        width: 120,
        render(u, o) {
          return [
            $textBtn({
              text: "复制",
              onClick: () => {
                r(u);
              }
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                d.saveList.length > 1 ? d.saveList.splice(o, 1) : $message.warning("最后一行了");
              }
            })
          ];
        }
      }
    ], h = () => ({
      dictionaryKey: "",
      dictionaryName: "",
      sortNum: $dayjs().valueOf(),
      status: 1
    }), d = L({
      groupId: "",
      parentId: "",
      saveList: []
    }), c = () => {
      var u;
      (u = f.value) == null || u.validate((o) => {
        o || s();
      });
    }, s = async () => {
      i.loading = !0, d.saveList = d.saveList.map((e, v) => (e.sortNum = v, e));
      const { code: u, msg: o } = await B.addBatch(d);
      i.loading = !1, u === 0 ? ($message.success("成功"), i.show = !1, m("loadList")) : $message.error(o);
    }, r = (u = h()) => {
      d.saveList.push({
        ...u,
        sortNum: $dayjs().valueOf()
      });
    };
    return y({
      open: (u) => {
        i.show = !0, d.groupId = u.groupId, d.parentId = u.parentId || -1, d.saveList = [h()];
      }
    }), (u, o) => {
      const e = F, v = G, w = D("sh-form"), V = U, z = q;
      return g(), $(z, {
        show: i.show,
        "onUpdate:show": o[2] || (o[2] = (N) => i.show = N),
        preset: "card",
        class: "w-600",
        title: "新增字典"
      }, {
        default: n(() => [
          p("div", null, [
            t(V, {
              show: i.loading
            }, {
              default: n(() => [
                p("div", me, [
                  t(e, {
                    type: "primary",
                    size: "small",
                    onClick: o[0] || (o[0] = (N) => r())
                  }, {
                    default: n(() => [
                      C(" 新增行 ")
                    ]),
                    _: 1
                  })
                ]),
                t(w, {
                  ref_key: "formRef",
                  ref: f,
                  model: d,
                  gutter: 0
                }, {
                  default: n(() => [
                    t(v, {
                      ref_key: "tableRef",
                      ref: l,
                      "max-height": 500,
                      columns: _,
                      data: d.saveList,
                      "row-key": (N) => N.sortNum
                    }, null, 8, ["data", "row-key"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                p("div", _e, [
                  t(e, {
                    onClick: o[1] || (o[1] = (N) => i.show = !1)
                  }, {
                    default: n(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(e, {
                    type: "primary",
                    onClick: c
                  }, {
                    default: n(() => [
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
      }, 8, ["show"]);
    };
  }
}, fe = /* @__PURE__ */ M(pe, [["__scopeId", "data-v-30d8ff1b"]]), he = { class: "p-20" }, ge = { class: "text-right mt-20" }, ye = {
  __name: "UpdateDialog",
  emits: ["loadList"],
  setup(R, { expose: y, emit: m }) {
    const b = x(null), f = L({
      show: !1,
      loading: !1,
      type: "add"
    }), i = L(((c) => ({
      id: "",
      dictionaryName: "",
      dictionaryKey: "",
      sortNum: "",
      status: 1
    }))()), _ = () => {
      var c;
      (c = b.value) == null || c.validate((s) => {
        s || h();
      });
    }, h = async () => {
      f.loading = !0;
      const { code: c, msg: s } = await B.update(i);
      f.loading = !1, c === 0 ? ($message.success("成功"), f.show = !1, m("loadList")) : $message.error(s);
    };
    return y({
      open: (c) => {
        f.show = !0, Object.assign(i, c);
      }
    }), (c, s) => {
      const r = K, a = D("sh-form-item"), u = D("sh-form"), o = F, e = U, v = q;
      return g(), $(v, {
        show: f.show,
        "onUpdate:show": s[3] || (s[3] = (w) => f.show = w),
        preset: "card",
        class: "w-600",
        title: "修改字典"
      }, {
        default: n(() => [
          p("div", he, [
            t(e, {
              show: f.loading
            }, {
              default: n(() => [
                t(u, {
                  ref_key: "formRef",
                  ref: b,
                  model: i
                }, {
                  default: n(() => [
                    t(a, {
                      label: "字典值",
                      path: "dictionaryName",
                      rule: "required"
                    }, {
                      default: n(() => [
                        t(r, {
                          value: i.dictionaryName,
                          "onUpdate:value": s[0] || (s[0] = (w) => i.dictionaryName = w),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(a, {
                      label: "字典键",
                      path: "dictionaryKey",
                      rule: "required"
                    }, {
                      default: n(() => [
                        t(r, {
                          value: i.dictionaryKey,
                          "onUpdate:value": s[1] || (s[1] = (w) => i.dictionaryKey = w),
                          disabled: "",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                p("div", ge, [
                  t(o, {
                    onClick: s[2] || (s[2] = (w) => f.show = !1)
                  }, {
                    default: n(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(o, {
                    type: "primary",
                    onClick: _
                  }, {
                    default: n(() => [
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
      }, 8, ["show"]);
    };
  }
}, ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200.391",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1026 1024"
}, we = /* @__PURE__ */ p("path", { d: "M739.265 929.96H289.96c-45.975 0-83.592-37.617-83.592-83.593V177.633c0-45.976 37.617-83.592 83.592-83.592h449.306c45.976 0 83.592 37.616 83.592 83.592v668.734c0 45.976-37.616 83.592-83.592 83.592zM289.96 135.836c-22.988 0-41.796 18.808-41.796 41.796v668.734c0 22.988 18.808 41.796 41.796 41.796h449.306c22.988 0 41.796-18.808 41.796-41.796V177.633c0-22.988-18.808-41.796-41.796-41.796H289.96z" }, null, -1), be = /* @__PURE__ */ p("path", { d: "m540.735 463.412-114.94-62.694-114.938 62.694V94.041h229.878v369.371zm-114.94-110.236 73.144 40.228V135.837H352.653v257.567l73.143-40.228zm271.674 407.51H331.755c-11.494 0-20.898-9.404-20.898-20.898s9.404-20.898 20.898-20.898H697.47c11.494 0 20.898 9.404 20.898 20.898s-9.404 20.898-20.898 20.898zM514.612 652.539H331.755c-11.494 0-20.898-9.404-20.898-20.898s9.404-20.898 20.898-20.898h182.857c11.494 0 20.898 9.404 20.898 20.898s-9.404 20.898-20.898 20.898z" }, null, -1), xe = [
  we,
  be
];
function ke(R, y) {
  return g(), I("svg", ve, xe);
}
const X = { render: ke }, $e = { class: "p-20" }, Ce = { class: "bg-[#f0f0f0] dark:bg-[#000] rounded-4 overflow-hidden" }, Ne = { class: "bg-#f3f5fc dark:bg-[#101014] flex-center w-35 h-35 rounded-4 text-18" }, Ie = { class: "ml-16 flex-1 w-0 truncate" }, Le = { class: "text-right mt-20" }, Re = {
  __name: "DraggableDialog",
  emits: ["loadList"],
  setup(R, { expose: y, emit: m }) {
    const b = W(), f = x(null), l = L({
      show: !1,
      loading: !1,
      type: "add"
    }), i = x([]), _ = async () => {
      l.loading = !0;
      const c = i.value.map((a) => a.id), { code: s, msg: r } = await B.updateBatchSortNum({ ids: c });
      l.loading = !1, s === 0 ? ($message.success("成功"), l.show = !1, m("loadList")) : $message.error(r);
    }, h = async (c = []) => {
      l.show = !0, i.value = c.map((s) => ({
        dictionaryName: s.dictionaryName,
        id: s.id
      })), await se(), d();
    }, d = () => {
      const c = f.value;
      re.create(c, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".item",
        animation: 150,
        onEnd({ newIndex: s, oldIndex: r }) {
          const a = i.value.splice(r, 1)[0];
          i.value.splice(s, 0, a);
        }
      });
    };
    return y({
      open: h
    }), (c, s) => {
      const r = F, a = U, u = q;
      return g(), $(u, {
        show: l.show,
        "onUpdate:show": s[1] || (s[1] = (o) => l.show = o),
        preset: "card",
        class: "w-400",
        title: "拖拽排序"
      }, {
        default: n(() => [
          p("div", $e, [
            t(a, {
              show: l.loading
            }, {
              default: n(() => [
                p("div", Ce, [
                  p("div", {
                    class: "h-32 w-full text-[#fff] text-center leading-32",
                    style: E({ "background-color": S(b).themeColor })
                  }, " 字典值 ", 4),
                  p("div", {
                    ref_key: "listRef",
                    ref: f,
                    class: "max-h-450 overflow-auto"
                  }, [
                    (g(!0), I(J, null, P(i.value, (o) => (g(), I("div", {
                      key: o.id,
                      class: "item h-50 m-10 px-10 bg-[#fff] dark:bg-[#26262a] text-[#8996AF] flex items-center"
                    }, [
                      p("div", Ne, [
                        (g(), $(j(S(X)), {
                          style: E({ color: S(b).themeColor })
                        }, null, 8, ["style"]))
                      ]),
                      p("div", Ie, Q(o.dictionaryName), 1)
                    ]))), 128))
                  ], 512)
                ]),
                p("div", Le, [
                  t(r, {
                    onClick: s[0] || (s[0] = (o) => l.show = !1)
                  }, {
                    default: n(() => [
                      C(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(r, {
                    type: "primary",
                    onClick: _
                  }, {
                    default: n(() => [
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
      }, 8, ["show"]);
    };
  }
};
const Se = { class: "text-right mb-10" }, Ve = {
  __name: "index",
  props: {
    groupItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(R) {
    const y = R;
    ne((e) => ({
      "6c9b9af4": f.value,
      "65d23110": b.value
    }));
    const m = W(), b = x(m.themeColor), f = x(m.themeColor), l = x(null), i = x(null), _ = x(null), h = x(null), d = L({
      list: [],
      loading: !1
    }), c = [
      { title: "字典值", key: "dictionaryName" },
      { title: "字典键", key: "dictionaryKey" },
      {
        title: "状态",
        key: "status",
        render(e) {
          return $nSwitch({
            status: e.status,
            code: "system-dictionary-status",
            onClick: async () => {
              d.loading = !0, e.status = e.status ? 0 : 1;
              const { code: v, msg: w } = await B.update({
                ...e,
                status: e.status
              });
              d.loading = !1, v === 0 ? ($message.success(w), r()) : $message.success(w);
            }
          });
        }
      },
      {
        title: "操作",
        key: "handle",
        render(e) {
          var v;
          return [
            $textBtn({
              text: "排序",
              show: e.grade < y.groupItem.grade && ((v = e == null ? void 0 : e.children) == null ? void 0 : v.length) > 1,
              onClick: () => {
                o(e.children);
              },
              code: "system-dictionary-sort"
            }),
            $textBtn({
              text: "新增",
              show: e.grade < y.groupItem.grade,
              onClick: () => {
                a(e.id);
              },
              code: "system-dictionary-add"
            }),
            $textBtn({
              text: "修改",
              onClick: () => {
                u(e);
              },
              code: "system-dictionary-update"
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(B.delete, { id: e.id }, r, "请确认删除，删除后关联数据可能丢失?");
              },
              code: "system-dictionary-delete",
              type: "error"
            })
          ];
        }
      }
    ];
    A(
      () => y.groupItem,
      (e) => {
        e.id && r();
      },
      { immediate: !0 }
    );
    const s = (e) => {
      b.value = Z(e, 0.06), f.value = Z(e, 0.03);
    };
    A(
      () => m.themeColor,
      (e) => {
        s(e);
      },
      {
        immediate: !0
      }
    );
    const r = async () => {
      d.loading = !0;
      const { code: e, msg: v, data: w } = await B.findTree({ groupId: y.groupItem.id });
      d.loading = !1, e === 0 ? d.list = w || [] : $message.error(v);
    }, a = (e = "-1") => {
      y.groupItem.id ? i.value.open({
        groupId: y.groupItem.id,
        parentId: e
      }) : $message.error("请选择字典类型");
    }, u = (e) => {
      _.value.open(e);
    }, o = (e) => {
      h.value.open(e);
    };
    return (e, v) => {
      const w = F, V = G, z = U;
      return g(), I("div", null, [
        p("div", Se, [
          e.$isCode("system-dictionary-add") ? (g(), $(w, {
            key: 0,
            type: "primary",
            size: "small",
            onClick: v[0] || (v[0] = (N) => a())
          }, {
            default: n(() => [
              C(" 新增 ")
            ]),
            _: 1
          })) : T("", !0)
        ]),
        t(z, {
          show: d.loading
        }, {
          default: n(() => [
            t(V, {
              ref_key: "tableRef",
              ref: l,
              striped: "",
              bordered: !1,
              columns: c,
              data: d.list,
              "bottom-bordered": !1,
              "row-key": (N) => N.id,
              "default-expand-all": "",
              autoload: !1,
              "single-line": !1
            }, null, 8, ["data", "row-key"])
          ]),
          _: 1
        }, 8, ["show"]),
        t(fe, {
          ref_key: "dialogRef",
          ref: i,
          onLoadList: r
        }, null, 512),
        t(ye, {
          ref_key: "updateRef",
          ref: _,
          onLoadList: r
        }, null, 512),
        t(Re, {
          ref_key: "draggableRef",
          ref: h,
          onLoadList: r
        }, null, 512)
      ]);
    };
  }
}, Be = /* @__PURE__ */ M(Ve, [["__scopeId", "data-v-40549a85"]]), De = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none"
}, Fe = /* @__PURE__ */ p("path", {
  fill: "#333",
  "fill-rule": "evenodd",
  d: "M3.333 9.167a5.833 5.833 0 1 1 10.035 4.047.816.816 0 0 0-.155.154 5.833 5.833 0 0 1-9.88-4.201Zm10.515 5.86a7.5 7.5 0 1 1 1.179-1.178l3.062 3.062a.833.833 0 0 1-1.178 1.178l-3.063-3.062Z",
  "clip-rule": "evenodd"
}, null, -1), Ue = [
  Fe
];
function ze(R, y) {
  return g(), I("svg", De, Ue);
}
const Ke = { render: ze };
const Oe = { class: "flex h-full" }, je = { class: "w-350 border-r border-#efeff5 h-full pr-40" }, qe = { class: "mb-20 flex" }, Te = { class: "mr-10 flex-1" }, He = {
  key: 0,
  class: "list_box"
}, Me = ["onClick"], Ee = { class: "ml-5 truncate flex-1" }, Ae = {
  key: 1,
  class: "list_box flex-center"
}, Ze = { class: "flex-1" }, Ge = {
  __name: "index",
  setup(R) {
    const y = x(null), m = L({
      loading: !1,
      list: [],
      activeItem: {}
    }), b = [
      { label: "修改", key: "update", code: "system-dictionary-group-update" },
      { label: "删除", key: "delete", code: "system-dictionary-group-delete" }
    ], f = ae(() => b.filter((h) => $isCode(h.code))), l = async () => {
      var s;
      m.loading = !0;
      const { code: h, msg: d, data: c } = await H.list({
        page: 1,
        limit: 999
      });
      m.loading = !1, h === 0 ? c != null && c.length ? (m.list = c, (s = m.activeItem) != null && s.id || (m.activeItem = c[0])) : m.list = [] : $message.error(d);
    };
    l();
    const i = (h) => {
      y.value.open(h);
    }, _ = (h) => {
      switch (h) {
        case "update":
          i(m.activeItem);
          break;
        case "delete":
          $delete(H.delete, { id: m.activeItem.id }, () => {
            m.activeItem = {}, l();
          });
          break;
      }
    };
    return (h, d) => {
      const c = K, s = F, r = te, a = oe, u = U;
      return g(), I("div", null, [
        p("div", Oe, [
          p("div", je, [
            t(u, {
              show: m.loading
            }, {
              default: n(() => [
                p("div", qe, [
                  p("div", Te, [
                    t(c, {
                      placeholder: "请输入关键字过滤",
                      class: "w-full"
                    }, {
                      suffix: n(() => [
                        (g(), $(j(S(Ke))))
                      ]),
                      _: 1
                    })
                  ]),
                  h.$isCode("system-dictionary-group-add") ? (g(), $(s, {
                    key: 0,
                    type: "primary",
                    onClick: i
                  }, {
                    default: n(() => [
                      C(" 新增 ")
                    ]),
                    _: 1
                  })) : T("", !0)
                ]),
                m.list.length ? (g(), I("div", He, [
                  (g(!0), I(J, null, P(m.list, (o) => {
                    var e;
                    return g(), I("div", {
                      key: o.id,
                      class: le([{ active: ((e = m.activeItem) == null ? void 0 : e.id) === o.id }, "item_box flex items-center text-16 h-36 text-#606266 cursor-pointer px-10 mb-1"]),
                      onClick: (v) => m.activeItem = o
                    }, [
                      (g(), $(j(S(X)), { class: "text-#2263e8 w-16 h-16" })),
                      p("div", Ee, Q(o.groupName), 1),
                      S(f).length ? (g(), $(r, {
                        key: 0,
                        trigger: "click",
                        options: S(f),
                        onSelect: _
                      }, {
                        default: n(() => [
                          t(s, {
                            text: "",
                            tag: "a",
                            class: "mr-10 hidden item_dot"
                          }, {
                            default: n(() => [
                              (g(), $(j(S(ie)), { class: "w-14 h-14" }))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["options"])) : T("", !0)
                    ], 10, Me);
                  }), 128))
                ])) : (g(), I("div", Ae, [
                  t(a, { description: "无数据" })
                ]))
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          p("div", Ze, [
            t(Be, {
              "group-item": m.activeItem,
              class: "ml-40"
            }, null, 8, ["group-item"])
          ])
        ]),
        t(ue, {
          ref_key: "dialogRef",
          ref: y,
          onLoadList: l
        }, null, 512)
      ]);
    };
  }
}, dt = /* @__PURE__ */ M(Ge, [["__scopeId", "data-v-11508107"]]);
export {
  dt as default
};
