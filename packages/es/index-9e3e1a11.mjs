import { NInput as B, NInputNumber as D, NButton as E, NSpin as O, NModal as K, NSwitch as H, NSelect as z } from "naive-ui";
import { ref as C, reactive as $, resolveComponent as U, openBlock as N, createBlock as M, unref as J, withCtx as d, createElementVNode as b, createVNode as a, createTextVNode as R, createElementBlock as j, Fragment as Q, createCommentVNode as L, watch as W } from "vue";
import { a as S, b as q, c as X } from "./app-675b6095.mjs";
import { f as Y, c as Z } from "./index-c846165e.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import { _ as ee } from "./_plugin-vue_export-helper-dad06003.mjs";
import "@better-scroll/core";
import "@vueuse/core";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const te = { class: "pt-20" }, ae = { class: "text-right mt-20" }, le = {
  __name: "FormDialog",
  props: {
    appId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(I, { expose: h, emit: w }) {
    const u = I, r = {
      add: "新增",
      update: "修改"
    }, y = C(null), o = $({
      show: !1,
      loading: !1,
      type: "add"
    }), v = (n, e) => ({
      appId: u.appId,
      parentId: n,
      menuName: "",
      svg: "",
      type: 0,
      url: "",
      status: 1,
      sortNum: 0,
      description: "",
      menuType: e
    });
    let c = C(0);
    const t = $(v()), g = (n) => {
      let e = n;
      (n === "-2" || n === "-3") && (e = "-1"), Object.assign(t, v(e, c.value));
    }, x = () => {
      var n;
      (n = y.value) == null || n.validate((e) => {
        e || k();
      });
    }, k = async () => {
      o.loading = !0;
      const { code: n, msg: e } = await S[o.type](t);
      o.loading = !1, n === 0 ? ($message.success("成功"), o.show = !1, w("loadList")) : $message.error(e);
    }, s = async (n) => {
      o.loading = !0;
      const { code: e, msg: l, data: m } = await S.get({ id: n });
      o.loading = !1, e === 0 ? Object.assign(t, m) : $message.error(l);
    };
    return h({
      open: (n, e) => {
        o.show = !0, o.type = n, n === "update" ? s(e.id) : (o.type = "add", c.value = e.menuType, g(e.id));
      }
    }), (n, e) => {
      const l = B, m = U("sh-form-item"), _ = D, P = U("sh-form"), T = E, F = O, V = K;
      return N(), M(V, {
        show: o.show,
        "onUpdate:show": e[6] || (e[6] = (f) => o.show = f),
        preset: "card",
        class: "w-600",
        title: `${r[o.type]}${J(c) ? "移动端" : "PC"}菜单`
      }, {
        default: d(() => [
          b("div", te, [
            a(F, {
              show: o.loading
            }, {
              default: d(() => [
                a(P, {
                  ref_key: "formRef",
                  ref: y,
                  model: t
                }, {
                  default: d(() => [
                    a(m, {
                      label: "菜单名称",
                      path: "menuName",
                      rule: "required"
                    }, {
                      default: d(() => [
                        a(l, {
                          value: t.menuName,
                          "onUpdate:value": e[0] || (e[0] = (f) => t.menuName = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(m, {
                      label: "图标",
                      path: "svg"
                    }, {
                      default: d(() => [
                        a(l, {
                          value: t.svg,
                          "onUpdate:value": e[1] || (e[1] = (f) => t.svg = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(m, {
                      label: "菜单路由",
                      path: "url",
                      rule: "required"
                    }, {
                      default: d(() => [
                        a(l, {
                          value: t.url,
                          "onUpdate:value": e[2] || (e[2] = (f) => t.url = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(m, {
                      label: "排序",
                      path: "sortNum",
                      rule: "required"
                    }, {
                      default: d(() => [
                        a(_, {
                          value: t.sortNum,
                          "onUpdate:value": e[3] || (e[3] = (f) => t.sortNum = f),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(m, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: d(() => [
                        a(l, {
                          value: t.description,
                          "onUpdate:value": e[4] || (e[4] = (f) => t.description = f),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                b("div", ae, [
                  a(T, {
                    onClick: e[5] || (e[5] = (f) => o.show = !1)
                  }, {
                    default: d(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(T, {
                    type: "primary",
                    onClick: x
                  }, {
                    default: d(() => [
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
      }, 8, ["show", "title"]);
    };
  }
}, oe = { class: "pt-20" }, se = { class: "text-right mt-20" }, ne = {
  __name: "ResourceFormDialog",
  props: {
    activeMenuId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(I, { expose: h, emit: w }) {
    const u = I, r = {
      add: "新增",
      update: "修改"
    }, y = C(null), o = $({
      show: !1,
      loading: !1,
      type: "add"
    }), v = C([]), c = () => ({
      resourceName: "",
      resourceCode: "",
      menuId: u.activeMenuId,
      filterUrl: "",
      status: 1,
      sortNum: 0,
      classTypeId: "",
      description: "",
      dataPermission: 0
    }), t = $(c()), g = () => {
      Object.assign(t, c());
    }, x = () => {
      t.filterUrl = "";
    }, k = () => {
      var e;
      (e = y.value) == null || e.validate((l) => {
        l || s();
      });
    }, s = async () => {
      o.loading = !0;
      const { code: e, msg: l } = await q[o.type](t);
      o.loading = !1, e === 0 ? ($message.success("成功"), o.show = !1, w("loadList")) : $message.error(l);
    };
    return (async () => {
      const { code: e, msg: l, data: m } = await Y.listClassType();
      e === 0 ? v.value = m || [] : $message.error(l);
    })(), h({
      open: (e) => {
        o.show = !0, e && e.id ? (o.type = "update", Object.assign(t, e)) : (o.type = "add", g());
      }
    }), (e, l) => {
      const m = B, _ = U("sh-form-item"), P = D, T = H, F = z, V = U("sh-form"), f = E, A = O, G = K;
      return N(), M(G, {
        show: o.show,
        "onUpdate:show": l[9] || (l[9] = (p) => o.show = p),
        preset: "card",
        class: "w-600",
        title: `${r[o.type]}资源`
      }, {
        default: d(() => [
          b("div", oe, [
            a(A, {
              show: o.loading
            }, {
              default: d(() => [
                a(V, {
                  ref_key: "formRef",
                  ref: y,
                  model: t
                }, {
                  default: d(() => [
                    a(_, {
                      label: "资源名称",
                      path: "resourceName",
                      rule: "required"
                    }, {
                      default: d(() => [
                        a(m, {
                          value: t.resourceName,
                          "onUpdate:value": l[0] || (l[0] = (p) => t.resourceName = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(_, {
                      label: "资源编码",
                      path: "resourceCode",
                      rule: "required"
                    }, {
                      default: d(() => [
                        a(m, {
                          value: t.resourceCode,
                          "onUpdate:value": l[1] || (l[1] = (p) => t.resourceCode = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(_, {
                      label: "排序",
                      path: "sortNum"
                    }, {
                      default: d(() => [
                        a(P, {
                          value: t.sortNum,
                          "onUpdate:value": l[2] || (l[2] = (p) => t.sortNum = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(_, {
                      label: "启用过滤",
                      path: "dataPermission",
                      "label-placement": "left"
                    }, {
                      default: d(() => [
                        a(T, {
                          value: t.dataPermission,
                          "onUpdate:value": [
                            l[3] || (l[3] = (p) => t.dataPermission = p),
                            x
                          ],
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t.dataPermission ? (N(), j(Q, { key: 0 }, [
                      t.dataPermission ? (N(), M(_, {
                        key: 0,
                        label: "过滤",
                        path: "filterUrl",
                        rule: "required"
                      }, {
                        default: d(() => [
                          a(m, {
                            value: t.filterUrl,
                            "onUpdate:value": l[4] || (l[4] = (p) => t.filterUrl = p),
                            placeholder: "请输入"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })) : L("", !0),
                      a(_, {
                        label: "权限类型",
                        path: "classTypeId",
                        rule: "required"
                      }, {
                        default: d(() => [
                          a(F, {
                            value: t.classTypeId,
                            "onUpdate:value": l[5] || (l[5] = (p) => t.classTypeId = p),
                            "label-field": "name",
                            "value-field": "id",
                            options: v.value
                          }, null, 8, ["value", "options"])
                        ]),
                        _: 1
                      })
                    ], 64)) : L("", !0),
                    o.type === "update" ? (N(), M(_, {
                      key: 1,
                      label: "状态"
                    }, {
                      default: d(() => [
                        a(T, {
                          value: t.status,
                          "onUpdate:value": l[6] || (l[6] = (p) => t.status = p),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : L("", !0),
                    a(_, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: d(() => [
                        a(m, {
                          value: t.description,
                          "onUpdate:value": l[7] || (l[7] = (p) => t.description = p),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                b("div", se, [
                  a(f, {
                    onClick: l[8] || (l[8] = (p) => o.show = !1)
                  }, {
                    default: d(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(f, {
                    type: "primary",
                    onClick: k
                  }, {
                    default: d(() => [
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
      }, 8, ["show", "title"]);
    };
  }
}, de = { key: 0 }, ie = { class: "mb-20" }, re = {
  __name: "ResourceList",
  props: {
    activeMenuId: {
      type: String,
      default: ""
    }
  },
  setup(I) {
    const h = I, w = [
      { title: "资源名称", key: "resourceName" },
      { title: "资源编码", key: "resourceCode" },
      {
        title: "操作",
        key: "handle",
        render(c) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                v(c);
              },
              code: "system-resource-update"
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(q.delete, { id: c.id }, o);
              },
              code: "system-resource-delete",
              type: "error"
            })
          ];
        }
      }
    ], u = C(null), r = C(null), y = $({
      list: [],
      loading: !1
    });
    W(
      () => h.activeMenuId,
      () => {
        o();
      }
    );
    const o = async () => {
      y.loading = !0;
      const { code: c, msg: t, data: g } = await q.findByMenuId({ menuId: h.activeMenuId });
      y.loading = !1, c === 0 ? (y.list = g, r.value.setTableData({ data: g })) : $message.error(t);
    }, v = (c) => {
      h.activeMenuId === "-1" ? $message.warning("子节点不允许新增") : u.value.open(c);
    };
    return (c, t) => {
      const g = E, x = U("sh-data-table"), k = O;
      return I.activeMenuId ? (N(), j("div", de, [
        b("div", ie, [
          c.$isCode("system-resource-update") ? (N(), M(g, {
            key: 0,
            type: "primary",
            onClick: v
          }, {
            default: d(() => [
              R(" 新增资源 ")
            ]),
            _: 1
          })) : L("", !0)
        ]),
        a(k, {
          show: y.loading
        }, {
          default: d(() => [
            a(x, {
              ref_key: "tableRef",
              ref: r,
              columns: w,
              "show-page": !1
            }, null, 512)
          ]),
          _: 1
        }, 8, ["show"]),
        a(ne, {
          ref_key: "dialogRef",
          ref: u,
          "active-menu-id": I.activeMenuId,
          onLoadList: o
        }, null, 8, ["active-menu-id"])
      ])) : L("", !0);
    };
  }
};
const ue = { class: "flex" }, pe = { class: "w-400 h-auto" }, ce = { class: "mb-30 mr-40" }, me = { class: "tree_height pr-40" }, fe = { class: "pl-40 border-l border-#E1E7F8 flex-1" }, _e = {
  __name: "index",
  setup(I) {
    const h = Z(), w = C(null), u = $({
      list: [],
      loading: !1,
      pattern: "",
      defaultExpandedKeys: ["-1"],
      activeId: ""
    }), r = $({
      appId: "",
      appName: "",
      list: []
    });
    (async () => {
      u.loading = !0;
      const { code: s, msg: i, data: n } = await X.list({ page: 1, limit: 100 });
      s === 0 ? (r.list = n || [], r.list.length && (r.appId = r.list[0].appId, r.appName = r.list[0].appName, v())) : (u.loading = !1, $message.error(i));
    })();
    const o = (s, { appName: i, appId: n }) => {
      r.appId = n, r.appName = i, v();
    }, v = async () => {
      u.loading = !0;
      const { code: s, data: i } = await S.getMenuTree({ appId: r.appId });
      u.loading = !1;
      let n = [], e = [];
      i.length && i.forEach((l) => {
        l.menuType ? e.push(l) : n.push(l);
      }), s === 0 && (u.list = [
        {
          id: "-1",
          name: r.appName,
          // data.length ? data : null
          children: [
            {
              id: "-2",
              name: "PC菜单",
              menuType: 0,
              children: n
            },
            {
              id: "-3",
              name: "移动端菜单",
              menuType: 1,
              children: e
            }
          ]
        }
      ]);
    }, c = (s) => {
      s[0] && (u.activeId = s[0]);
    }, t = (s) => {
      let i = [];
      return s.id !== "-1" && (i = [
        {
          label: "新增",
          key: "add",
          code: "system-menu-add",
          onClick: () => {
            k("add", s);
          }
        }
      ]), ["-1", "-2", "-3"].includes(s.id) || (i.push({
        label: "修改",
        key: "update",
        code: "system-menu-update",
        onClick: () => {
          k("update", s);
        }
      }), i.push({
        label: "删除",
        key: "delete",
        code: "system-menu-delete",
        onClick: () => {
          $delete(S.delete, { id: s.id }, v);
        }
      })), i;
    }, g = (s) => s.id === "-1" ? { name: "company", style: { "font-size": "20px", color: h.themeColor } } : { name: x(s), style: { color: "#979daf" } }, x = (s) => {
      let i = s.svg || "menu";
      return s.id === "-2" ? i = "pcmenu" : s.id === "-3" && (i = "movemenu"), i;
    }, k = (s, i) => {
      w.value.open(s, i);
    };
    return (s, i) => {
      const n = z, e = B, l = U("sh-tree"), m = O;
      return N(), j("div", ue, [
        b("div", pe, [
          b("div", ce, [
            a(n, {
              value: r.appId,
              "onUpdate:value": [
                i[0] || (i[0] = (_) => r.appId = _),
                o
              ],
              options: r.list,
              "label-field": "appName",
              "value-field": "appId"
            }, null, 8, ["value", "options"]),
            a(e, {
              value: u.pattern,
              "onUpdate:value": i[1] || (i[1] = (_) => u.pattern = _),
              class: "mt-10",
              placeholder: "请输入关键字"
            }, null, 8, ["value"])
          ]),
          b("div", me, [
            a(m, {
              show: u.loading
            }, {
              default: d(() => [
                a(l, {
                  data: u.list,
                  "label-field": "name",
                  "key-field": "id",
                  pattern: u.pattern,
                  "default-expanded-keys": u.defaultExpandedKeys,
                  prefix: g,
                  suffix: t,
                  "onUpdate:selectedKeys": c
                }, null, 8, ["data", "pattern", "default-expanded-keys"])
              ]),
              _: 1
            }, 8, ["show"])
          ])
        ]),
        b("div", fe, [
          a(re, {
            "active-menu-id": u.activeId
          }, null, 8, ["active-menu-id"])
        ]),
        a(le, {
          ref_key: "dialogRef",
          ref: w,
          "app-id": r.appId,
          onLoadList: v
        }, null, 8, ["app-id"])
      ]);
    };
  }
}, Le = /* @__PURE__ */ ee(_e, [["__scopeId", "data-v-d55337ca"]]);
export {
  Le as default
};
