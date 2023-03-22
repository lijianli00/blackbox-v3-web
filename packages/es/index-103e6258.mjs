import { NInput as Z, NInputNumber as K, NButton as j, NSpin as F, NModal as z, NSwitch as Q, NSelect as H, NTooltip as D } from "naive-ui";
import { ref as $, reactive as C, resolveComponent as M, openBlock as b, createBlock as S, unref as W, withCtx as l, createElementVNode as I, createVNode as a, createTextVNode as R, createElementBlock as V, Fragment as X, createCommentVNode as L, watch as Y, createStaticVNode as A, h as T } from "vue";
import { a as P, b as E, c as ee } from "./app-90dc6322.mjs";
import { i as te, c as ae } from "./index-de809ebd.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import { c as oe } from "./company-0dfd2ecd.mjs";
import { _ as ne } from "./_plugin-vue_export-helper-dad06003.mjs";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const se = { class: "pt-20" }, le = { class: "text-right mt-20" }, de = {
  __name: "FormDialog",
  props: {
    appId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(y, { expose: v, emit: N }) {
    const i = y, r = {
      add: "新增",
      update: "修改"
    }, g = $(null), n = C({
      show: !1,
      loading: !1,
      type: "add"
    }), h = (s, e) => ({
      appId: i.appId,
      parentId: s,
      menuName: "",
      svg: "",
      type: 0,
      url: "",
      status: 1,
      sortNum: 0,
      description: "",
      menuType: e
    });
    let c = $(0);
    const t = C(h()), w = (s) => {
      let e = s;
      (s === "-2" || s === "-3") && (e = "-1"), Object.assign(t, h(e, c.value));
    }, k = () => {
      var s;
      (s = g.value) == null || s.validate((e) => {
        e || x();
      });
    }, x = async () => {
      n.loading = !0;
      const { code: s, msg: e } = await P[n.type](t);
      n.loading = !1, s === 0 ? ($message.success("成功"), n.show = !1, N("loadList")) : $message.error(e);
    }, d = async (s) => {
      n.loading = !0;
      const { code: e, msg: o, data: m } = await P.get({ id: s });
      n.loading = !1, e === 0 ? Object.assign(t, m) : $message.error(o);
    };
    return v({
      open: (s, e) => {
        n.show = !0, n.type = s, s === "update" ? d(e.id) : (n.type = "add", c.value = e.menuType, w(e.id));
      }
    }), (s, e) => {
      const o = Z, m = M("sh-form-item"), _ = K, O = M("sh-form"), U = j, q = F, B = z;
      return b(), S(B, {
        show: n.show,
        "onUpdate:show": e[6] || (e[6] = (f) => n.show = f),
        preset: "card",
        class: "w-600",
        title: `${r[n.type]}${W(c) ? "移动端" : "PC"}菜单`
      }, {
        default: l(() => [
          I("div", se, [
            a(q, {
              show: n.loading
            }, {
              default: l(() => [
                a(O, {
                  ref_key: "formRef",
                  ref: g,
                  model: t
                }, {
                  default: l(() => [
                    a(m, {
                      label: "菜单名称",
                      path: "menuName",
                      rule: "required"
                    }, {
                      default: l(() => [
                        a(o, {
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
                      default: l(() => [
                        a(o, {
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
                      default: l(() => [
                        a(o, {
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
                      default: l(() => [
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
                      default: l(() => [
                        a(o, {
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
                I("div", le, [
                  a(U, {
                    onClick: e[5] || (e[5] = (f) => n.show = !1)
                  }, {
                    default: l(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(U, {
                    type: "primary",
                    onClick: k
                  }, {
                    default: l(() => [
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
}, re = { class: "pt-20" }, ie = { class: "text-right mt-20" }, ue = {
  __name: "ResourceFormDialog",
  props: {
    activeMenuId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(y, { expose: v, emit: N }) {
    const i = y, r = {
      add: "新增",
      update: "修改"
    }, g = $(null), n = C({
      show: !1,
      loading: !1,
      type: "add"
    }), h = $([]), c = () => ({
      resourceName: "",
      resourceCode: "",
      menuId: i.activeMenuId,
      filterUrl: "",
      status: 1,
      sortNum: 0,
      classTypeId: "",
      description: "",
      dataPermission: 0
    }), t = C(c()), w = () => {
      Object.assign(t, c());
    }, k = () => {
      t.filterUrl = "";
    }, x = () => {
      var e;
      (e = g.value) == null || e.validate((o) => {
        o || d();
      });
    }, d = async () => {
      n.loading = !0;
      const { code: e, msg: o } = await E[n.type](t);
      n.loading = !1, e === 0 ? ($message.success("成功"), n.show = !1, N("loadList")) : $message.error(o);
    };
    return (async () => {
      const { code: e, msg: o, data: m } = await te.listClassType();
      e === 0 ? h.value = m || [] : $message.error(o);
    })(), v({
      open: (e) => {
        n.show = !0, e && e.id ? (n.type = "update", Object.assign(t, e)) : (n.type = "add", w());
      }
    }), (e, o) => {
      const m = Z, _ = M("sh-form-item"), O = K, U = Q, q = H, B = M("sh-form"), f = j, G = F, J = z;
      return b(), S(J, {
        show: n.show,
        "onUpdate:show": o[9] || (o[9] = (p) => n.show = p),
        preset: "card",
        class: "w-600",
        title: `${r[n.type]}资源`
      }, {
        default: l(() => [
          I("div", re, [
            a(G, {
              show: n.loading
            }, {
              default: l(() => [
                a(B, {
                  ref_key: "formRef",
                  ref: g,
                  model: t
                }, {
                  default: l(() => [
                    a(_, {
                      label: "资源名称",
                      path: "resourceName",
                      rule: "required"
                    }, {
                      default: l(() => [
                        a(m, {
                          value: t.resourceName,
                          "onUpdate:value": o[0] || (o[0] = (p) => t.resourceName = p),
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
                      default: l(() => [
                        a(m, {
                          value: t.resourceCode,
                          "onUpdate:value": o[1] || (o[1] = (p) => t.resourceCode = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    a(_, {
                      label: "排序",
                      path: "sortNum"
                    }, {
                      default: l(() => [
                        a(O, {
                          value: t.sortNum,
                          "onUpdate:value": o[2] || (o[2] = (p) => t.sortNum = p),
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
                      default: l(() => [
                        a(U, {
                          value: t.dataPermission,
                          "onUpdate:value": [
                            o[3] || (o[3] = (p) => t.dataPermission = p),
                            k
                          ],
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t.dataPermission ? (b(), V(X, { key: 0 }, [
                      t.dataPermission ? (b(), S(_, {
                        key: 0,
                        label: "过滤",
                        path: "filterUrl",
                        rule: "required"
                      }, {
                        default: l(() => [
                          a(m, {
                            value: t.filterUrl,
                            "onUpdate:value": o[4] || (o[4] = (p) => t.filterUrl = p),
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
                        default: l(() => [
                          a(q, {
                            value: t.classTypeId,
                            "onUpdate:value": o[5] || (o[5] = (p) => t.classTypeId = p),
                            "label-field": "name",
                            "value-field": "id",
                            options: h.value
                          }, null, 8, ["value", "options"])
                        ]),
                        _: 1
                      })
                    ], 64)) : L("", !0),
                    n.type === "update" ? (b(), S(_, {
                      key: 1,
                      label: "状态"
                    }, {
                      default: l(() => [
                        a(U, {
                          value: t.status,
                          "onUpdate:value": o[6] || (o[6] = (p) => t.status = p),
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
                      default: l(() => [
                        a(m, {
                          value: t.description,
                          "onUpdate:value": o[7] || (o[7] = (p) => t.description = p),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                I("div", ie, [
                  a(f, {
                    onClick: o[8] || (o[8] = (p) => n.show = !1)
                  }, {
                    default: l(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  a(f, {
                    type: "primary",
                    onClick: x
                  }, {
                    default: l(() => [
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
}, pe = { key: 0 }, ce = { class: "mb-20" }, me = {
  __name: "ResourceList",
  props: {
    activeMenuId: {
      type: String,
      default: ""
    }
  },
  setup(y) {
    const v = y, N = [
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
                h(c);
              },
              code: "system-resource-update"
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(E.delete, { id: c.id }, n);
              },
              code: "system-resource-delete",
              type: "error"
            })
          ];
        }
      }
    ], i = $(null), r = $(null), g = C({
      list: [],
      loading: !1
    });
    Y(
      () => v.activeMenuId,
      () => {
        n();
      }
    );
    const n = async () => {
      g.loading = !0;
      const { code: c, msg: t, data: w } = await E.findByMenuId({ menuId: v.activeMenuId });
      g.loading = !1, c === 0 ? (g.list = w, r.value.setTableData({ data: w })) : $message.error(t);
    }, h = (c) => {
      v.activeMenuId === "-1" ? $message.warning("子节点不允许新增") : i.value.open(c);
    };
    return (c, t) => {
      const w = j, k = M("sh-data-table"), x = F;
      return y.activeMenuId ? (b(), V("div", pe, [
        I("div", ce, [
          c.$isCode("system-resource-update") ? (b(), S(w, {
            key: 0,
            type: "primary",
            onClick: h
          }, {
            default: l(() => [
              R(" 新增资源 ")
            ]),
            _: 1
          })) : L("", !0)
        ]),
        a(x, {
          show: g.loading
        }, {
          default: l(() => [
            a(k, {
              ref_key: "tableRef",
              ref: r,
              columns: N,
              "show-page": !1
            }, null, 512)
          ]),
          _: 1
        }, 8, ["show"]),
        a(ue, {
          ref_key: "dialogRef",
          ref: i,
          "active-menu-id": y.activeMenuId,
          onLoadList: n
        }, null, 8, ["active-menu-id"])
      ])) : L("", !0);
    };
  }
}, fe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, _e = /* @__PURE__ */ A('<path fill="none" d="M0 0h20v20H0z"></path><g fill="#1b5ec9" transform="translate(-609.5 -63.09)"><path d="M613 67a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13m0-1h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2ZM623.5 80.18h-8a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5Z"></path><path d="M619 79.2v-1.451a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5V79.2a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5Z"></path><rect width="13" height="3" opacity=".2" rx="1" transform="translate(613 72)"></rect><rect width="6" height="3" opacity=".2" rx="1" transform="translate(613 68)"></rect></g>', 2), he = [
  _e
];
function ve(y, v) {
  return b(), V("svg", fe, he);
}
const ge = { render: ve }, ye = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, we = /* @__PURE__ */ A('<path fill="none" d="M0 0h20v20H0z"></path><g fill="#33b4ff" transform="translate(-636 -63.5)"><path d="M641 66a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V67a1 1 0 0 0-1-1h-10m0-1h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V67a2 2 0 0 1 2-2Z"></path><path d="M648.823 80.18h-5.646a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h5.646a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5ZM643 65.199h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1Z"></path><path d="M643 65.199h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path><rect width="10" height="10" opacity=".2" rx="1" transform="translate(641 68)"></rect></g>', 2), be = [
  we
];
function Ie(y, v) {
  return b(), V("svg", ye, be);
}
const Ne = { render: Ie };
const xe = { class: "flex" }, ke = { class: "w-400 h-auto" }, $e = { class: "mb-30 mr-40" }, Ce = { class: "tree_height pr-40" }, Me = { class: "pl-40 border-l border-#E1E7F8 flex-1" }, Ue = {
  __name: "index",
  setup(y) {
    const v = ae(), N = $(null), i = C({
      list: [],
      loading: !1,
      pattern: "",
      defaultExpandedKeys: ["-1"],
      activeId: ""
    }), r = C({
      appId: "",
      appName: "",
      list: []
    });
    (async () => {
      i.loading = !0;
      const { code: d, msg: u, data: s } = await ee.list({ page: 1, limit: 100 });
      d === 0 ? (r.list = s || [], r.list.length && (r.appId = r.list[0].appId, r.appName = r.list[0].appName, h())) : (i.loading = !1, $message.error(u));
    })();
    const n = (d, { appName: u, appId: s }) => {
      r.appId = s, r.appName = u, h();
    }, h = async () => {
      i.loading = !0;
      const { code: d, data: u } = await P.getMenuTree({ appId: r.appId });
      i.loading = !1;
      let s = [], e = [];
      u.length && u.forEach((o) => {
        o.menuType ? e.push(o) : s.push(o);
      }), d === 0 && (i.list = [
        {
          id: "-1",
          name: r.appName,
          children: [
            {
              id: "-2",
              name: "PC菜单",
              menuType: 0,
              children: s
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
    }, c = (d) => {
      d[0] && (i.activeId = d[0]);
    }, t = (d) => {
      let u = [];
      return d.id !== "-1" && (u = [
        {
          label: "新增",
          key: "add",
          code: "system-menu-add",
          onClick: () => {
            x("add", d);
          }
        }
      ]), ["-1", "-2", "-3"].includes(d.id) || (u.push({
        label: "修改",
        key: "update",
        code: "system-menu-update",
        onClick: () => {
          x("update", d);
        }
      }), u.push({
        label: "删除",
        key: "delete",
        code: "system-menu-delete",
        onClick: () => {
          $delete(P.delete, { id: d.id }, h);
        }
      })), u;
    }, w = (d) => d.option.id === "-1" ? T(oe, { style: { color: v.themeColor } }) : k(d.option.menuType), k = (d) => d ? T(D, { trigger: "hover" }, { trigger: () => T(Ne), default: () => "移动端" }) : T(D, { trigger: "hover" }, { trigger: () => T(ge), default: () => "pc端" }), x = (d, u) => {
      N.value.open(d, u);
    };
    return (d, u) => {
      const s = H, e = Z, o = M("sh-tree"), m = F;
      return b(), V("div", xe, [
        I("div", ke, [
          I("div", $e, [
            a(s, {
              value: r.appId,
              "onUpdate:value": [
                u[0] || (u[0] = (_) => r.appId = _),
                n
              ],
              options: r.list,
              "label-field": "appName",
              "value-field": "appId"
            }, null, 8, ["value", "options"]),
            a(e, {
              value: i.pattern,
              "onUpdate:value": u[1] || (u[1] = (_) => i.pattern = _),
              class: "mt-10",
              placeholder: "请输入关键字"
            }, null, 8, ["value"])
          ]),
          I("div", Ce, [
            a(m, {
              show: i.loading
            }, {
              default: l(() => [
                a(o, {
                  data: i.list,
                  "label-field": "name",
                  "key-field": "id",
                  pattern: i.pattern,
                  "default-expanded-keys": i.defaultExpandedKeys,
                  "render-prefix": w,
                  suffix: t,
                  "onUpdate:selectedKeys": c
                }, null, 8, ["data", "pattern", "default-expanded-keys"])
              ]),
              _: 1
            }, 8, ["show"])
          ])
        ]),
        I("div", Me, [
          a(me, {
            "active-menu-id": i.activeId
          }, null, 8, ["active-menu-id"])
        ]),
        a(de, {
          ref_key: "dialogRef",
          ref: N,
          "app-id": r.appId,
          onLoadList: h
        }, null, 8, ["app-id"])
      ]);
    };
  }
}, He = /* @__PURE__ */ ne(Ue, [["__scopeId", "data-v-5090d94b"]]);
export {
  He as default
};
