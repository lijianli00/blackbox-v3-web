import { NInput as V, NSwitch as P, NInputNumber as Q, NButton as F, NSpin as U, NModal as j, NDataTable as G, NDropdown as W, NEmpty as X } from "naive-ui";
import { ref as x, reactive as N, resolveComponent as L, openBlock as v, createBlock as R, withCtx as a, createElementVNode as y, createVNode as t, createTextVNode as $, h as K, normalizeStyle as A, unref as O, createElementBlock as C, Fragment as M, renderList as H, toDisplayString as J, nextTick as Y, watch as Z, createCommentVNode as T, computed as ee, normalizeClass as te } from "vue";
import { s as z, b as D, c as oe } from "./index-c846165e.mjs";
import se from "sortablejs";
import { _ as E } from "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const ne = { class: "pt-20" }, ae = { class: "text-right mt-20" }, le = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(S, { expose: g, emit: u }) {
    const h = {
      add: "新增",
      update: "修改"
    }, f = x(null), r = N({
      show: !1,
      loading: !1,
      type: "add"
    }), s = () => ({
      dictionaryCode: "",
      groupName: "",
      grade: 1,
      enableCustom: 0,
      remark: ""
    }), p = N(s()), m = () => {
      Object.assign(p, s());
    }, _ = () => {
      var e;
      (e = f.value) == null || e.validate((o) => {
        o || d();
      });
    }, d = async () => {
      r.loading = !0;
      const { code: e, msg: o } = await z[r.type](p);
      r.loading = !1, e === 0 ? ($message.success("成功"), r.show = !1, u("loadList")) : $message.error(o);
    };
    return g({
      open: (e) => {
        r.show = !0, e && e.id ? (r.type = "update", Object.assign(p, e)) : (r.type = "add", m());
      }
    }), (e, o) => {
      const l = V, i = L("sh-form-item"), c = P, b = Q, k = L("sh-form"), B = F, q = U, I = j;
      return v(), R(I, {
        show: r.show,
        "onUpdate:show": o[6] || (o[6] = (w) => r.show = w),
        preset: "card",
        class: "w-600",
        title: `${h[r.type]}字典类型`
      }, {
        default: a(() => [
          y("div", ne, [
            t(q, {
              show: r.loading
            }, {
              default: a(() => [
                t(k, {
                  ref_key: "formRef",
                  ref: f,
                  model: p,
                  "label-width": "90px"
                }, {
                  default: a(() => [
                    t(i, {
                      label: "名称",
                      path: "groupName",
                      rule: "required"
                    }, {
                      default: a(() => [
                        t(l, {
                          value: p.groupName,
                          "onUpdate:value": o[0] || (o[0] = (w) => p.groupName = w),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(i, {
                      label: "编码",
                      path: "dictionaryCode",
                      rule: "required"
                    }, {
                      default: a(() => [
                        t(l, {
                          value: p.dictionaryCode,
                          "onUpdate:value": o[1] || (o[1] = (w) => p.dictionaryCode = w),
                          placeholder: "请输入",
                          disabled: r.type === "update"
                        }, null, 8, ["value", "disabled"])
                      ]),
                      _: 1
                    }),
                    t(i, {
                      label: "企业自定义",
                      path: "enableCustom",
                      span: 8,
                      "label-placement": "left"
                    }, {
                      default: a(() => [
                        t(c, {
                          value: p.enableCustom,
                          "onUpdate:value": o[2] || (o[2] = (w) => p.enableCustom = w),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(i, {
                      label: "层级",
                      path: "grade",
                      rule: "required",
                      span: 12,
                      "label-placement": "left"
                    }, {
                      default: a(() => [
                        t(b, {
                          value: p.grade,
                          "onUpdate:value": o[3] || (o[3] = (w) => p.grade = w),
                          max: 3,
                          min: 1
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(i, {
                      label: "描述",
                      path: "remark"
                    }, {
                      default: a(() => [
                        t(l, {
                          value: p.remark,
                          "onUpdate:value": o[4] || (o[4] = (w) => p.remark = w),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                y("div", ae, [
                  t(B, {
                    onClick: o[5] || (o[5] = (w) => r.show = !1)
                  }, {
                    default: a(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(B, {
                    type: "primary",
                    onClick: _
                  }, {
                    default: a(() => [
                      $(" 确定 ")
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
const ie = { class: "mb-10 text-right" }, re = { class: "text-right mt-20" }, de = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(S, { expose: g, emit: u }) {
    const h = L("ShFormItem"), f = x(null), r = x(null), s = N({
      show: !1,
      loading: !1,
      type: "add"
    }), p = [
      {
        title: "数据字典值",
        key: "dictionaryName",
        render(l, i) {
          return K(
            h,
            {
              path: `saveList.${i}.dictionaryName`,
              rule: "required"
            },
            () => K(V, {
              value: l.dictionaryName,
              maxlength: 32,
              onUpdateValue(c) {
                _.saveList[i].dictionaryName = c;
              }
            })
          );
        }
      },
      {
        title: "数据字典键",
        key: "dictionaryKey",
        render(l, i) {
          return K(
            h,
            {
              path: `saveList.${i}.dictionaryKey`,
              rule: "required"
            },
            () => K(V, {
              value: l.dictionaryKey,
              maxlength: 32,
              onUpdateValue(c) {
                _.saveList[i].dictionaryKey = c;
              }
            })
          );
        }
      },
      {
        title: "操作",
        key: "handle",
        width: 120,
        render(l, i) {
          return [
            $textBtn({
              text: "复制",
              onClick: () => {
                e(l);
              }
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                _.saveList.length > 1 ? _.saveList.splice(i, 1) : $message.warning("最后一行了");
              }
            })
          ];
        }
      }
    ], m = () => ({
      dictionaryKey: "",
      dictionaryName: "",
      sortNum: $dayjs().valueOf(),
      status: 1
    }), _ = N({
      groupId: "",
      parentId: "",
      saveList: []
    }), d = () => {
      var l;
      (l = f.value) == null || l.validate((i) => {
        i || n();
      });
    }, n = async () => {
      s.loading = !0, _.saveList = _.saveList.map((c, b) => (c.sortNum = b, c));
      const { code: l, msg: i } = await D.addBatch(_);
      s.loading = !1, l === 0 ? ($message.success("成功"), s.show = !1, u("loadList")) : $message.error(i);
    }, e = (l = m()) => {
      _.saveList.push({
        ...l,
        sortNum: $dayjs().valueOf()
      });
    };
    return g({
      open: (l) => {
        s.show = !0, _.groupId = l.groupId, _.parentId = l.parentId || -1, _.saveList = [m()];
      }
    }), (l, i) => {
      const c = F, b = G, k = L("sh-form"), B = U, q = j;
      return v(), R(q, {
        show: s.show,
        "onUpdate:show": i[2] || (i[2] = (I) => s.show = I),
        preset: "card",
        class: "w-600",
        title: "新增字典"
      }, {
        default: a(() => [
          y("div", null, [
            t(B, {
              show: s.loading
            }, {
              default: a(() => [
                y("div", ie, [
                  t(c, {
                    type: "primary",
                    size: "small",
                    onClick: i[0] || (i[0] = (I) => e())
                  }, {
                    default: a(() => [
                      $(" 新增行 ")
                    ]),
                    _: 1
                  })
                ]),
                t(k, {
                  ref_key: "formRef",
                  ref: f,
                  model: _,
                  gutter: 0
                }, {
                  default: a(() => [
                    t(b, {
                      ref_key: "tableRef",
                      ref: r,
                      "max-height": 500,
                      columns: p,
                      data: _.saveList,
                      "row-key": (I) => I.sortNum
                    }, null, 8, ["data", "row-key"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                y("div", re, [
                  t(c, {
                    onClick: i[1] || (i[1] = (I) => s.show = !1)
                  }, {
                    default: a(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(c, {
                    type: "primary",
                    onClick: d
                  }, {
                    default: a(() => [
                      $(" 确定 ")
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
}, ce = /* @__PURE__ */ E(de, [["__scopeId", "data-v-536a969a"]]), ue = { class: "p-20" }, me = { class: "text-right mt-20" }, pe = {
  __name: "UpdateDialog",
  emits: ["loadList"],
  setup(S, { expose: g, emit: u }) {
    const h = x(null), f = N({
      show: !1,
      loading: !1,
      type: "add"
    }), s = N(((d) => ({
      id: "",
      dictionaryName: "",
      dictionaryKey: "",
      sortNum: "",
      status: 1
    }))()), p = () => {
      var d;
      (d = h.value) == null || d.validate((n) => {
        n || m();
      });
    }, m = async () => {
      f.loading = !0;
      const { code: d, msg: n } = await D.update(s);
      f.loading = !1, d === 0 ? ($message.success("成功"), f.show = !1, u("loadList")) : $message.error(n);
    };
    return g({
      open: (d) => {
        f.show = !0, Object.assign(s, d);
      }
    }), (d, n) => {
      const e = V, o = L("sh-form-item"), l = L("sh-form"), i = F, c = U, b = j;
      return v(), R(b, {
        show: f.show,
        "onUpdate:show": n[3] || (n[3] = (k) => f.show = k),
        preset: "card",
        class: "w-600",
        title: "修改字典"
      }, {
        default: a(() => [
          y("div", ue, [
            t(c, {
              show: f.loading
            }, {
              default: a(() => [
                t(l, {
                  ref_key: "formRef",
                  ref: h,
                  model: s
                }, {
                  default: a(() => [
                    t(o, {
                      label: "字典值",
                      path: "dictionaryName",
                      rule: "required"
                    }, {
                      default: a(() => [
                        t(e, {
                          value: s.dictionaryName,
                          "onUpdate:value": n[0] || (n[0] = (k) => s.dictionaryName = k),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(o, {
                      label: "字典键",
                      path: "dictionaryKey",
                      rule: "required"
                    }, {
                      default: a(() => [
                        t(e, {
                          value: s.dictionaryKey,
                          "onUpdate:value": n[1] || (n[1] = (k) => s.dictionaryKey = k),
                          disabled: "",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                y("div", me, [
                  t(i, {
                    onClick: n[2] || (n[2] = (k) => f.show = !1)
                  }, {
                    default: a(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(i, {
                    type: "primary",
                    onClick: p
                  }, {
                    default: a(() => [
                      $(" 确定 ")
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
}, _e = { class: "p-20" }, fe = { class: "bg-[#f0f0f0] dark:bg-[#000] rounded-4 overflow-hidden" }, ye = { class: "bg-#f3f5fc dark:bg-[#101014] flex-center w-35 h-35 rounded-4 text-18" }, ge = { class: "ml-16 flex-1 w-0 truncate" }, he = { class: "text-right mt-20" }, ve = {
  __name: "DraggableDialog",
  emits: ["loadList"],
  setup(S, { expose: g, emit: u }) {
    const h = oe(), f = x(null), r = N({
      show: !1,
      loading: !1,
      type: "add"
    }), s = x([]), p = async () => {
      r.loading = !0;
      const d = s.value.map((o) => o.id), { code: n, msg: e } = await D.updateBatchSortNum({ ids: d });
      r.loading = !1, n === 0 ? ($message.success("成功"), r.show = !1, u("loadList")) : $message.error(e);
    }, m = async (d = []) => {
      r.show = !0, s.value = d.map((n) => ({
        dictionaryName: n.dictionaryName,
        id: n.id
      })), await Y(), _();
    }, _ = () => {
      const d = f.value;
      se.create(d, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".item",
        animation: 150,
        onEnd({ newIndex: n, oldIndex: e }) {
          const o = s.value.splice(e, 1)[0];
          s.value.splice(n, 0, o);
        }
      });
    };
    return g({
      open: m
    }), (d, n) => {
      const e = L("sh-icon"), o = F, l = U, i = j;
      return v(), R(i, {
        show: r.show,
        "onUpdate:show": n[1] || (n[1] = (c) => r.show = c),
        preset: "card",
        class: "w-400",
        title: "拖拽排序"
      }, {
        default: a(() => [
          y("div", _e, [
            t(l, {
              show: r.loading
            }, {
              default: a(() => [
                y("div", fe, [
                  y("div", {
                    class: "h-32 w-full text-[#fff] text-center leading-32",
                    style: A({ "background-color": O(h).themeColor })
                  }, " 字典值 ", 4),
                  y("div", {
                    ref_key: "listRef",
                    ref: f,
                    class: "max-h-450 overflow-auto"
                  }, [
                    (v(!0), C(M, null, H(s.value, (c) => (v(), C("div", {
                      key: c.id,
                      class: "item h-50 m-10 px-10 bg-[#fff] dark:bg-[#26262a] text-[#8996AF] flex items-center"
                    }, [
                      y("div", ye, [
                        t(e, {
                          name: "dictionary",
                          style: A({ color: O(h).themeColor })
                        }, null, 8, ["style"])
                      ]),
                      y("div", ge, J(c.dictionaryName), 1)
                    ]))), 128))
                  ], 512)
                ]),
                y("div", he, [
                  t(o, {
                    onClick: n[0] || (n[0] = (c) => r.show = !1)
                  }, {
                    default: a(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  t(o, {
                    type: "primary",
                    onClick: p
                  }, {
                    default: a(() => [
                      $(" 确定 ")
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
const be = { class: "text-right mb-10" }, we = {
  __name: "index",
  props: {
    groupItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(S) {
    const g = S, u = x(null), h = x(null), f = x(null), r = x(null), s = N({
      list: [],
      loading: !1
    }), p = [
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
              s.loading = !0, e.status = e.status ? 0 : 1;
              const { code: o, msg: l } = await D.update({
                ...e,
                status: e.status
              });
              s.loading = !1, o === 0 ? ($message.success(l), m()) : $message.success(l);
            }
          });
        }
      },
      {
        title: "操作",
        key: "handle",
        render(e) {
          var o;
          return [
            $textBtn({
              text: "排序",
              show: e.grade < g.groupItem.grade && ((o = e == null ? void 0 : e.children) == null ? void 0 : o.length) > 1,
              onClick: () => {
                n(e.children);
              },
              code: "system-dictionary-sort"
            }),
            $textBtn({
              text: "新增",
              show: e.grade < g.groupItem.grade,
              onClick: () => {
                _(e.id);
              },
              code: "system-dictionary-add"
            }),
            $textBtn({
              text: "修改",
              onClick: () => {
                d(e);
              },
              code: "system-dictionary-update"
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(D.delete, { id: e.id }, m, "请确认删除，删除后关联数据可能丢失?");
              },
              code: "system-dictionary-delete",
              type: "error"
            })
          ];
        }
      }
    ];
    Z(
      () => g.groupItem,
      (e) => {
        e.id && m();
      },
      { immediate: !0 }
    );
    const m = async () => {
      s.loading = !0;
      const { code: e, msg: o, data: l } = await D.findTree({ groupId: g.groupItem.id });
      s.loading = !1, e === 0 ? s.list = l || [] : $message.error(o);
    }, _ = (e = "-1") => {
      h.value.open({
        groupId: g.groupItem.id,
        parentId: e
      });
    }, d = (e) => {
      f.value.open(e);
    }, n = (e) => {
      r.value.open(e);
    };
    return (e, o) => {
      const l = F, i = G, c = U;
      return v(), C("div", null, [
        y("div", be, [
          e.$isCode("system-dictionary-add") ? (v(), R(l, {
            key: 0,
            type: "primary",
            size: "small",
            onClick: o[0] || (o[0] = (b) => _())
          }, {
            default: a(() => [
              $(" 新增 ")
            ]),
            _: 1
          })) : T("", !0)
        ]),
        t(c, {
          show: s.loading
        }, {
          default: a(() => [
            t(i, {
              ref_key: "tableRef",
              ref: u,
              columns: p,
              data: s.list,
              "row-key": (b) => b.id,
              "default-expand-all": "",
              autoload: !1
            }, null, 8, ["data", "row-key"])
          ]),
          _: 1
        }, 8, ["show"]),
        t(ce, {
          ref_key: "dialogRef",
          ref: h,
          onLoadList: m
        }, null, 512),
        t(pe, {
          ref_key: "updateRef",
          ref: f,
          onLoadList: m
        }, null, 512),
        t(ve, {
          ref_key: "draggableRef",
          ref: r,
          onLoadList: m
        }, null, 512)
      ]);
    };
  }
}, ke = /* @__PURE__ */ E(we, [["__scopeId", "data-v-425cfc61"]]);
const xe = { class: "flex h-full" }, $e = { class: "w-350 border-r border-#efeff5 h-full pr-40" }, Ne = { class: "mb-20 flex" }, Ce = { class: "mr-10 flex-1" }, Le = {
  key: 0,
  class: "list_box"
}, Ie = ["onClick"], Re = { class: "ml-5 truncate flex-1" }, Se = {
  key: 1,
  class: "list_box flex-center"
}, De = { class: "flex-1" }, Fe = {
  __name: "index",
  setup(S) {
    const g = x(null), u = N({
      loading: !1,
      list: [],
      activeItem: {}
    }), h = [
      { label: "修改", key: "update", code: "system-dictionary-group-update" },
      { label: "删除", key: "delete", code: "system-dictionary-group-delete" }
    ], f = ee(() => h.filter((m) => $isCode(m.code))), r = async () => {
      var n;
      u.loading = !0;
      const { code: m, msg: _, data: d } = await z.list({
        page: 1,
        limit: 999
      });
      u.loading = !1, m === 0 ? d != null && d.length ? (u.list = d, (n = u.activeItem) != null && n.id || (u.activeItem = d[0])) : u.list = [] : $message.error(_);
    };
    r();
    const s = (m) => {
      g.value.open(m);
    }, p = (m) => {
      switch (m) {
        case "update":
          s(u.activeItem);
          break;
        case "delete":
          $delete(z.delete, { id: u.activeItem.id }, () => {
            u.activeItem = {}, r();
          });
          break;
      }
    };
    return (m, _) => {
      const d = L("sh-icon"), n = V, e = F, o = W, l = X, i = U;
      return v(), C("div", null, [
        y("div", xe, [
          y("div", $e, [
            t(i, {
              show: u.loading
            }, {
              default: a(() => [
                y("div", Ne, [
                  y("div", Ce, [
                    t(n, {
                      placeholder: "请输入关键字过滤",
                      class: "w-full"
                    }, {
                      suffix: a(() => [
                        t(d, { name: "search" })
                      ]),
                      _: 1
                    })
                  ]),
                  m.$isCode("system-dictionary-group-add") ? (v(), R(e, {
                    key: 0,
                    type: "primary",
                    onClick: s
                  }, {
                    default: a(() => [
                      $(" 新增 ")
                    ]),
                    _: 1
                  })) : T("", !0)
                ]),
                u.list.length ? (v(), C("div", Le, [
                  (v(!0), C(M, null, H(u.list, (c) => {
                    var b;
                    return v(), C("div", {
                      key: c.id,
                      class: te([{ active: ((b = u.activeItem) == null ? void 0 : b.id) === c.id }, "item_box flex items-center text-16 h-36 text-#606266 cursor-pointer px-10 mb-1"]),
                      onClick: (k) => u.activeItem = c
                    }, [
                      t(d, {
                        name: "dictionary",
                        class: "text-#2263e8"
                      }),
                      y("div", Re, J(c.groupName), 1),
                      O(f).length ? (v(), R(o, {
                        key: 0,
                        trigger: "click",
                        options: O(f),
                        onSelect: p
                      }, {
                        default: a(() => [
                          t(e, {
                            text: "",
                            tag: "a",
                            class: "mr-10 hidden item_dot"
                          }, {
                            default: a(() => [
                              t(d, { name: "dot" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["options"])) : T("", !0)
                    ], 10, Ie);
                  }), 128))
                ])) : (v(), C("div", Se, [
                  t(l, { description: "无数据" })
                ]))
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          y("div", De, [
            t(ke, {
              "group-item": u.activeItem,
              class: "ml-40"
            }, null, 8, ["group-item"])
          ])
        ]),
        t(le, {
          ref_key: "dialogRef",
          ref: g,
          onLoadList: r
        }, null, 512)
      ]);
    };
  }
}, Pe = /* @__PURE__ */ E(Fe, [["__scopeId", "data-v-c8886b47"]]);
export {
  Pe as default
};
