import { NInput as F, NButton as K, NSpin as O, NModal as P, NTransfer as q, NDropdown as V, NCheckbox as G, NSpace as H, NDrawerContent as J, NDrawer as Q } from "naive-ui";
import { ref as R, reactive as C, resolveComponent as L, openBlock as x, createBlock as T, withCtx as _, createElementVNode as y, createVNode as c, createTextVNode as $, computed as D, unref as A, h as j, watch as B, nextTick as W, createElementBlock as N, createCommentVNode as S, toDisplayString as M, Fragment as X, renderList as Y, pushScopeId as Z, popScopeId as ee } from "vue";
import { o as U, d as E, e as te, f as se, c as oe } from "./index-c846165e.mjs";
import { _ as ne } from "./_plugin-vue_export-helper-dad06003.mjs";
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
const le = { class: "p-20" }, ae = { class: "text-right mt-20" }, ie = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(d, { expose: n, emit: f }) {
    const m = {
      add: "新增",
      update: "修改"
    }, l = R(null), e = C({
      show: !1,
      loading: !1,
      type: "add"
    }), t = () => ({
      roleName: "",
      description: ""
    }), s = C(t()), w = () => {
      Object.assign(s, t());
    }, u = () => {
      var i;
      (i = l.value) == null || i.validate((a) => {
        a || o();
      });
    }, o = async () => {
      e.loading = !0;
      const { code: i, msg: a } = await U[e.type](s);
      e.loading = !1, i === 0 ? ($message.success("成功"), e.show = !1, f("loadList")) : $message.error(a);
    };
    return n({
      open: (i, a) => {
        e.show = !0, e.type = i, i === "update" ? Object.assign(s, a) : (e.type = "add", w());
      }
    }), (i, a) => {
      const p = F, r = L("sh-form-item"), k = L("sh-form"), v = K, g = O, b = P;
      return x(), T(b, {
        show: e.show,
        "onUpdate:show": a[3] || (a[3] = (I) => e.show = I),
        preset: "card",
        class: "w-600",
        title: `${m[e.type]}角色`
      }, {
        default: _(() => [
          y("div", le, [
            c(g, {
              show: e.loading
            }, {
              default: _(() => [
                c(k, {
                  ref_key: "formRef",
                  ref: l,
                  model: s
                }, {
                  default: _(() => [
                    c(r, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: _(() => [
                        c(p, {
                          value: s.roleName,
                          "onUpdate:value": a[0] || (a[0] = (I) => s.roleName = I),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    c(r, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: _(() => [
                        c(p, {
                          value: s.description,
                          "onUpdate:value": a[1] || (a[1] = (I) => s.description = I),
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
                  c(v, {
                    onClick: a[2] || (a[2] = (I) => e.show = !1)
                  }, {
                    default: _(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  c(v, {
                    type: "primary",
                    onClick: u
                  }, {
                    default: _(() => [
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
}, ce = { class: "pt-20" }, re = { class: "text-right mt-20" }, de = {
  __name: "AuthRole",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(d, { expose: n, emit: f }) {
    const m = d, l = L("sh-tree"), e = C({
      show: !1,
      loading: !1,
      type: "add"
    }), t = C({
      list: [],
      unitIds: [],
      checkedKeys: []
    }), s = D(() => i(t.list)), w = function({ onCheck: p, pattern: r }) {
      return j(l, {
        style: "margin: 0 4px;",
        keyField: "id",
        labelField: "name",
        checkable: !0,
        selectable: !1,
        blockLine: !0,
        cascade: !0,
        checkOnClick: !0,
        data: t.list,
        pattern: r,
        checkedKeys: t.checkedKeys,
        onUpdateCheckedKeys: (k, v) => {
          t.unitIds = [], t.checkedKeys = [], v.forEach((g) => {
            g.type === "person" && t.unitIds.push(g.id), t.checkedKeys = k;
          });
        }
      });
    }, u = (p) => {
      t.checkedKeys = p;
    }, o = async () => {
      t.unitIds.length || $message.warning("请先选择企业"), e.loading = !0;
      let p = [];
      for (const v in s.value)
        t.unitIds.indexOf(s.value[v].id) !== -1 && p.push(s.value[v].personId);
      const { code: r, msg: k } = await E.add({
        roleId: m.activeRoleId,
        personIds: p
      });
      r === 0 ? ($message.success("成功"), f("loadList"), e.show = !1) : $message.error(k);
    }, h = async () => {
      e.loading = !0;
      const { code: p, msg: r, data: k } = await te.deptPersonTree();
      p === 0 ? t.list = k || [] : ($message.error(r), t.list = []), e.loading = !1;
    };
    function i(p) {
      const r = [];
      function k(v = []) {
        v.forEach((g) => {
          g.type === "person" && r.push({
            ...g,
            value: g.id,
            label: g.name
          }), g.children && g.children.length && k(g.children);
        });
      }
      return k(p), r;
    }
    return n({
      open: () => {
        e.show = !0, t.unitIds = [], t.checkedKeys = [], h();
      }
    }), (p, r) => {
      const k = q, v = K, g = P;
      return x(), T(g, {
        show: e.show,
        "onUpdate:show": r[2] || (r[2] = (b) => e.show = b),
        preset: "card",
        class: "w-800",
        title: "批量授权"
      }, {
        default: _(() => [
          y("div", ce, [
            c(k, {
              ref: "transfer",
              value: t.unitIds,
              "onUpdate:value": [
                r[0] || (r[0] = (b) => t.unitIds = b),
                u
              ],
              "target-filterable": "",
              "source-filterable": "",
              class: "h-600",
              options: A(s),
              "render-source-list": w,
              "virtual-scroll": ""
            }, null, 8, ["value", "options"]),
            y("div", re, [
              c(v, {
                onClick: r[1] || (r[1] = (b) => e.show = !1)
              }, {
                default: _(() => [
                  $(" 关闭 ")
                ]),
                _: 1
              }),
              c(v, {
                type: "primary",
                onClick: o
              }, {
                default: _(() => [
                  $(" 确定 ")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, ue = { class: "mb-20" }, pe = {
  __name: "index",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  setup(d) {
    const n = d, f = [
      { type: "selection" },
      { type: "index" },
      { title: "姓名", key: "name" },
      {
        title: "性别",
        key: "gender",
        render(o) {
          return o.gender ? "男" : "女";
        }
      },
      { title: "手机号", key: "phone" }
    ], m = R(null), l = R(null), e = R([]);
    B(
      () => n.activeRoleId,
      (o) => {
        o && W(() => {
          t();
        });
      },
      { immediate: !0 }
    );
    const t = async () => {
      l.value.loadList({ roleId: n.activeRoleId });
    }, s = () => {
      if (!e.value.length) {
        $message.warning("请先选择数据");
        return;
      }
      $delete(
        E.delete,
        { roleId: n.activeRoleId, personIds: e.value },
        () => {
          t(), e.value = [];
        },
        "是否要批量移除数据？此操作不可逆"
      );
    }, w = (o) => {
      e.value = o;
    }, u = (o) => {
      n.activeRoleId === "-1" ? $message.warning("子节点不允许新增") : m.value.open();
    };
    return (o, h) => {
      const i = K, a = L("sh-data-table");
      return x(), N("div", null, [
        y("div", ue, [
          o.$isCode("system-role-batchAuth") ? (x(), T(i, {
            key: 0,
            type: "primary",
            onClick: u
          }, {
            default: _(() => [
              $(" 批量授权 ")
            ]),
            _: 1
          })) : S("", !0),
          o.$isCode("system-role-batchAuth-delete") ? (x(), T(i, {
            key: 1,
            onClick: s
          }, {
            default: _(() => [
              $(" 批量移除 ")
            ]),
            _: 1
          })) : S("", !0)
        ]),
        c(a, {
          ref_key: "tableRef",
          ref: l,
          "row-key": (p) => p.id,
          columns: f,
          api: A(E).listAuthPersonByRole,
          autoload: !1,
          "onUpdate:checkedRowKeys": w
        }, null, 8, ["row-key", "api"]),
        c(de, {
          ref_key: "dialogRef",
          ref: m,
          "active-role-id": d.activeRoleId,
          onLoadList: t
        }, null, 8, ["active-role-id"])
      ]);
    };
  }
}, fe = { class: "text-14 text-#3370ff cursor-pointer" }, he = {
  __name: "ResourceItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    classTypeId: {
      type: String,
      default: ""
    }
  },
  setup(d) {
    const n = d, f = "UNIT";
    (() => {
      if (!n.item.classId)
        for (const t in n.item.classList)
          n.item.classList[t].classCode === f && (n.item.classId = n.item.classList[t].id);
    })(), B(
      () => n.classTypeId,
      (t) => {
        if (t)
          for (const s in n.item.classList)
            n.item.classList[s].id === t && (n.item.classId = n.item.classList[s].id);
      }
    );
    const l = D(() => {
      for (const t in n.item.classList)
        if (n.item.classList[t].id === n.item.classId)
          return n.item.classList[t].className;
      return "请选择";
    }), e = (t) => {
      n.item.classId = t;
    };
    return (t, s) => {
      const w = L("sh-icon"), u = V;
      return d.item.classList && d.item.classList.length ? (x(), T(u, {
        key: 0,
        trigger: "hover",
        options: d.item.classList,
        "key-field": "id",
        "label-field": "className",
        onSelect: e
      }, {
        default: _(() => [
          y("span", fe, [
            $(M(A(l)) + " ", 1),
            c(w, {
              name: "arrow-right",
              class: "align-middle"
            })
          ])
        ]),
        _: 1
      }, 8, ["options"])) : S("", !0);
    };
  }
}, me = { class: "flex leading-40" }, _e = { class: "w-320" }, ye = { class: "flex-1" }, ge = {
  __name: "TreeItem",
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    classTypeId: {
      type: String,
      default: ""
    },
    treeList: {
      // 整颗资源树
      type: Array,
      default: () => []
    }
  },
  setup(d) {
    const n = d;
    B(
      () => n.option.selected,
      (e) => {
        n.option.resources.forEach((t) => {
          t.selected = e;
        });
      }
    );
    const f = (e) => {
      n.option.children && m(n.option.children, e), l(n.treeList, e);
    }, m = (e, t) => {
      e.forEach((s) => {
        s.selected = t, s.children && m(s.children, t);
      });
    }, l = (e, t) => {
      for (const s in e) {
        if (e[s].id === n.option.id)
          return !0;
        if (e[s].children && l(e[s].children, t)) {
          if (t)
            e[s].selected = !0;
          else {
            let w = 0;
            for (const u in e[s].children)
              e[s].children[u].selected && w++;
            w === 0 && (e[s].selected = !1);
          }
          return !0;
        }
      }
      return !1;
    };
    return (e, t) => {
      const s = G, w = H;
      return x(), N("div", me, [
        y("div", _e, [
          c(s, {
            checked: d.option.selected,
            "onUpdate:checked": [
              t[0] || (t[0] = (u) => d.option.selected = u),
              f
            ],
            label: d.option.name
          }, null, 8, ["checked", "label"])
        ]),
        y("div", ye, [
          c(w, null, {
            default: _(() => [
              (x(!0), N(X, null, Y(d.option.resources, (u, o) => (x(), N("div", { key: o }, [
                c(s, {
                  checked: u.selected,
                  "onUpdate:checked": (h) => u.selected = h,
                  disabled: !d.option.selected,
                  label: u.resourceName
                }, null, 8, ["checked", "onUpdate:checked", "disabled", "label"]),
                u.classList && u.classList.length ? (x(), T(he, {
                  key: 0,
                  item: u,
                  "class-type-id": d.classTypeId
                }, null, 8, ["item", "class-type-id"])) : S("", !0)
              ]))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const z = (d) => (Z("data-v-ff16c00c"), d = d(), ee(), d), ve = { class: "border border-#C0C7D4 rounded-8 relative" }, ke = /* @__PURE__ */ z(() => /* @__PURE__ */ y("div", { class: "absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2" }, null, -1)), we = { class: "flex" }, be = /* @__PURE__ */ z(() => /* @__PURE__ */ y("div", { class: "w-320" }, [
  /* @__PURE__ */ y("div", { class: "title" }, "菜单")
], -1)), Ie = { class: "flex-1" }, xe = { class: "title" }, $e = { class: "text-14 text-#3370ff cursor-pointer" }, Ce = { class: "container" }, Le = { class: "text-right mt-20" }, Te = {
  __name: "index",
  setup(d, { expose: n }) {
    const f = C({
      show: !1,
      loading: !1
    }), m = C({
      list: [],
      loading: !1,
      roleId: ""
    }), l = C({
      list: [],
      id: ""
    }), e = async () => {
      f.loading = !0;
      const { code: i, msg: a } = await U.saveAuthTreeByRoleId({
        roleId: m.roleId,
        menuTreeList: m.list
      });
      f.loading = !1, i === 0 ? ($message.success(a), f.show = !1) : $message.error(a);
    }, t = async (i) => {
      f.loading = !0;
      const { code: a, msg: p, data: r } = await U.findAuthTreeByRoleId({ id: m.roleId });
      if (f.loading = !1, a === 0) {
        let k = [], v = [], g = [];
        r && r.length && r.forEach((b) => {
          console.log("item: ", b), b.children.forEach((I) => {
            I.menuType ? g.push(I) : v.push(I);
          }), b.children = [], b.children.push({
            id: "-2",
            name: "pc菜单",
            children: v,
            menuType: 0,
            selected: !1,
            resources: []
          }), b.children.push({
            id: "-3",
            name: "移动端菜单",
            children: g,
            menuType: 1,
            selected: !1,
            resources: []
          }), k.push(b);
        }), m.list = k;
      } else
        $message.error(p);
    }, s = (i) => j(ge, {
      option: i.option,
      classTypeId: l.id,
      treeList: m.list
    });
    (async () => {
      const { code: i, msg: a, data: p } = await se.listAllClass();
      i === 0 ? l.list = p || [] : $message.error(a);
    })();
    const u = D(() => {
      for (const i in l.list)
        if (l.list[i].id === l.id)
          return l.list[i].className;
      return "请选择";
    }), o = (i) => {
      l.id = i;
    };
    return n({
      open: (i) => {
        f.show = !0, m.roleId = i.id, t();
      }
    }), (i, a) => {
      const p = L("sh-icon"), r = V, k = L("sh-tree"), v = K, g = J, b = Q;
      return x(), T(b, {
        show: f.show,
        "onUpdate:show": a[1] || (a[1] = (I) => f.show = I),
        width: "70%"
      }, {
        default: _(() => [
          c(g, { title: "权限配置" }, {
            default: _(() => [
              y("div", ve, [
                ke,
                y("div", we, [
                  be,
                  y("div", Ie, [
                    y("div", xe, [
                      $(" 资源 "),
                      c(r, {
                        trigger: "hover",
                        options: l.list,
                        "key-field": "id",
                        "label-field": "className",
                        onSelect: o
                      }, {
                        default: _(() => [
                          y("span", $e, [
                            $(M(A(u)) + " ", 1),
                            c(p, {
                              name: "arrow-right",
                              class: "align-middle"
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["options"])
                    ])
                  ])
                ]),
                y("div", Ce, [
                  c(k, {
                    data: m.list,
                    "label-field": "name",
                    "key-field": "id",
                    "default-expand-all": "",
                    "render-label": s
                  }, null, 8, ["data"])
                ])
              ]),
              y("div", Le, [
                c(v, {
                  onClick: a[0] || (a[0] = (I) => f.show = !1)
                }, {
                  default: _(() => [
                    $(" 关闭 ")
                  ]),
                  _: 1
                }),
                c(v, {
                  type: "primary",
                  onClick: e
                }, {
                  default: _(() => [
                    $(" 确定 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}, Re = /* @__PURE__ */ ne(Te, [["__scopeId", "data-v-ff16c00c"]]), Ne = { class: "h-790 flex" }, Se = { class: "mb-30" }, Ue = { class: "text-red text-30 pl-40 border-l border-#E1E7F8 flex-1" }, He = {
  __name: "index",
  setup(d) {
    const n = oe(), f = R(null), m = R(null), l = C({
      list: [],
      loading: !1,
      pattern: "",
      activeId: "",
      activeType: ""
    }), e = async () => {
      l.loading = !0;
      const { code: o, data: h } = await U.listPersonRole();
      l.loading = !1, o === 0 && (l.list = h || []);
    };
    e();
    const t = (o, h) => {
      o[0] && (l.activeId = o[0], l.activeType = h[0].type);
    }, s = (o) => {
      let h = [];
      return o.type === "app" ? h.push({
        label: "新增角色",
        key: "add",
        code: "system-role-add",
        onClick: () => {
          u("add", o);
        }
      }) : (h.push({
        label: "授权",
        key: "auth",
        code: "system-role-auth",
        onClick: () => {
          u("auth", o);
        }
      }), h.push({
        label: "修改",
        key: "update",
        code: "system-role-update",
        onClick: () => {
          o.roleName = o.name, u("update", o);
        }
      }), h.push({
        label: "删除",
        key: "delete",
        code: "system-role-delete",
        onClick: () => {
          $delete(U.delete, { id: o.id }, e);
        }
      })), h;
    }, w = (o) => o.type === "app" ? { name: "company", style: { "font-size": "20px", color: n.themeColor } } : { name: "achievement-expert", style: { color: "#979daf" } }, u = (o, h) => {
      o === "auth" ? m.value.open(h) : f.value.open(o, h);
    };
    return (o, h) => {
      const i = F, a = L("sh-tree"), p = O;
      return x(), N("div", Ne, [
        c(p, {
          show: l.loading,
          class: "w-400 mr-40"
        }, {
          default: _(() => [
            y("div", Se, [
              c(i, {
                value: l.pattern,
                "onUpdate:value": h[0] || (h[0] = (r) => l.pattern = r),
                class: "mt-10",
                placeholder: "请输入关键字"
              }, null, 8, ["value"])
            ]),
            c(a, {
              data: l.list,
              "label-field": "name",
              "key-field": "id",
              pattern: l.pattern,
              "default-expand-all": "",
              prefix: w,
              suffix: s,
              "onUpdate:selectedKeys": t
            }, null, 8, ["data", "pattern"])
          ]),
          _: 1
        }, 8, ["show"]),
        y("div", Ue, [
          l.activeType === "role" ? (x(), T(pe, {
            key: 0,
            "active-role-id": l.activeId
          }, null, 8, ["active-role-id"])) : S("", !0)
        ]),
        c(ie, {
          ref_key: "dialogRef",
          ref: f,
          onLoadList: e
        }, null, 512),
        c(Re, {
          ref_key: "authRef",
          ref: m
        }, null, 512)
      ]);
    };
  }
};
export {
  He as default
};
