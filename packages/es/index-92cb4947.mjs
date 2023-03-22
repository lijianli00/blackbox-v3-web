import { NInput as H, NButton as Z, NSpin as B, NModal as E, NDropdown as j, NCheckbox as J, NSpace as Q, NDrawerContent as W, NDrawer as X, NTransfer as Y } from "naive-ui";
import { ref as N, reactive as T, resolveComponent as U, openBlock as y, createBlock as L, withCtx as h, createElementVNode as u, createVNode as i, createTextVNode as R, watch as F, computed as O, toDisplayString as K, unref as b, resolveDynamicComponent as z, createCommentVNode as D, createElementBlock as S, Fragment as ee, renderList as te, h as M, pushScopeId as se, popScopeId as oe, nextTick as ne, isRef as le, createStaticVNode as ae } from "vue";
import { m as A, h as P, i as ie, n as V, o as q, c as de } from "./index-de809ebd.mjs";
import { _ as re } from "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import { s as ce } from "./index-9139782b.mjs";
import { u as ue } from "./useModal-07595bd1.mjs";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const pe = { class: "pt-20" }, he = { class: "text-right mt-20" }, fe = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(p, { expose: n, emit: _ }) {
    const m = {
      add: "新增",
      update: "修改"
    }, d = N(null), t = T({
      show: !1,
      loading: !1,
      type: "add"
    }), s = (l = "") => ({
      appId: l,
      roleName: "",
      description: ""
    }), o = T(s()), v = (l) => {
      Object.assign(o, s(l));
    }, f = () => {
      var l;
      (l = d.value) == null || l.validate((e) => {
        e || c();
      });
    }, c = async () => {
      t.loading = !0;
      const { code: l, msg: e } = await A[t.type](o);
      t.loading = !1, l === 0 ? ($message.success("成功"), t.show = !1, _("loadList")) : $message.error(e);
    }, x = async (l) => {
      t.loading = !0;
      const { code: e, msg: a, data: w } = await A.get({ id: l });
      t.loading = !1, e === 0 ? Object.assign(o, w) : $message.error(a);
    };
    return n({
      open: (l, e) => {
        t.show = !0, t.type = l, l === "update" ? x(e.id) : (t.type = "add", v(e.id));
      }
    }), (l, e) => {
      const a = H, w = U("sh-form-item"), C = U("sh-form"), k = Z, g = B, I = E;
      return y(), L(I, {
        show: t.show,
        "onUpdate:show": e[3] || (e[3] = ($) => t.show = $),
        preset: "card",
        class: "w-600",
        title: `${m[t.type]}企业角色`
      }, {
        default: h(() => [
          u("div", pe, [
            i(g, {
              show: t.loading
            }, {
              default: h(() => [
                i(C, {
                  ref_key: "formRef",
                  ref: d,
                  model: o
                }, {
                  default: h(() => [
                    i(w, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: h(() => [
                        i(a, {
                          value: o.roleName,
                          "onUpdate:value": e[0] || (e[0] = ($) => o.roleName = $),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    i(w, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: h(() => [
                        i(a, {
                          value: o.description,
                          "onUpdate:value": e[1] || (e[1] = ($) => o.description = $),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                u("div", he, [
                  i(k, {
                    onClick: e[2] || (e[2] = ($) => t.show = !1)
                  }, {
                    default: h(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  i(k, {
                    type: "primary",
                    onClick: f
                  }, {
                    default: h(() => [
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
}, _e = { class: "text-14 text-#3370ff cursor-pointer" }, me = {
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
  setup(p) {
    const n = p, _ = "UNIT";
    (() => {
      if (!n.item.classId)
        for (const s in n.item.classList)
          n.item.classList[s].classCode === _ && (n.item.classId = n.item.classList[s].id);
    })(), F(
      () => n.classTypeId,
      (s) => {
        if (s)
          for (const o in n.item.classList)
            n.item.classList[o].id === s && (n.item.classId = n.item.classList[o].id);
      }
    );
    const d = O(() => {
      for (const s in n.item.classList)
        if (n.item.classList[s].id === n.item.classId)
          return n.item.classList[s].className;
      return "请选择";
    }), t = (s) => {
      n.item.classId = s;
    };
    return (s, o) => {
      const v = j;
      return p.item.classList && p.item.classList.length ? (y(), L(v, {
        key: 0,
        trigger: "hover",
        options: p.item.classList,
        "key-field": "id",
        "label-field": "className",
        onSelect: t
      }, {
        default: h(() => [
          u("span", _e, [
            R(K(b(d)) + " ", 1),
            (y(), L(z(b(P)), { class: "w-14 h-14 align-middle" }))
          ])
        ]),
        _: 1
      }, 8, ["options"])) : D("", !0);
    };
  }
}, ve = { class: "flex leading-40" }, ye = { class: "w-320" }, ge = { class: "flex-1" }, we = {
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
  setup(p) {
    const n = p;
    F(
      () => n.option.selected,
      (t) => {
        n.option.resources.forEach((s) => {
          s.selected = t;
        });
      }
    );
    const _ = (t) => {
      n.option.children && m(n.option.children, t), d(n.treeList, t);
    }, m = (t, s) => {
      t.forEach((o) => {
        o.selected = s, o.children && m(o.children, s);
      });
    }, d = (t, s) => {
      for (const o in t) {
        if (t[o].id === n.option.id)
          return !0;
        if (t[o].children && d(t[o].children, s)) {
          if (s)
            t[o].selected = !0;
          else {
            let v = 0;
            for (const f in t[o].children)
              t[o].children[f].selected && v++;
            v === 0 && (t[o].selected = !1);
          }
          return !0;
        }
      }
      return !1;
    };
    return (t, s) => {
      const o = J, v = Q;
      return y(), S("div", ve, [
        u("div", ye, [
          i(o, {
            checked: p.option.selected,
            "onUpdate:checked": [
              s[0] || (s[0] = (f) => p.option.selected = f),
              _
            ],
            label: p.option.name
          }, null, 8, ["checked", "label"])
        ]),
        u("div", ge, [
          i(v, null, {
            default: h(() => [
              (y(!0), S(ee, null, te(p.option.resources, (f, c) => (y(), S("div", { key: c }, [
                i(o, {
                  checked: f.selected,
                  "onUpdate:checked": (x) => f.selected = x,
                  disabled: !p.option.selected,
                  label: f.resourceName
                }, null, 8, ["checked", "onUpdate:checked", "disabled", "label"]),
                f.classList && f.classList.length ? (y(), L(me, {
                  key: 0,
                  item: f,
                  "class-type-id": p.classTypeId
                }, null, 8, ["item", "class-type-id"])) : D("", !0)
              ]))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const G = (p) => (se("data-v-ffaec141"), p = p(), oe(), p), ke = { class: "border border-#C0C7D4 rounded-8 relative" }, $e = /* @__PURE__ */ G(() => /* @__PURE__ */ u("div", { class: "absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2" }, null, -1)), be = { class: "flex" }, xe = /* @__PURE__ */ G(() => /* @__PURE__ */ u("div", { class: "w-320" }, [
  /* @__PURE__ */ u("div", { class: "title" }, "菜单")
], -1)), Ie = { class: "flex-1" }, Re = { class: "title" }, Ce = { class: "text-14 text-#3370ff cursor-pointer" }, Le = { class: "container" }, Ne = { class: "text-right mt-20" }, Te = {
  __name: "index",
  setup(p, { expose: n }) {
    const _ = T({
      show: !1,
      loading: !1
    }), m = T({
      list: [],
      loading: !1,
      roleId: ""
    }), d = T({
      list: [],
      id: ""
    }), t = async () => {
      _.loading = !0;
      const { code: r, msg: l } = await A.saveAuthTreeByRoleId({
        roleId: m.roleId,
        menuTreeList: m.list
      });
      _.loading = !1, r === 0 ? ($message.success(l), _.show = !1) : $message.error(l);
    }, s = async (r) => {
      _.loading = !0;
      const { code: l, msg: e, data: a } = await A.findAuthTreeByRoleId({ id: m.roleId });
      if (_.loading = !1, l === 0) {
        let w = [], C = [], k = [];
        a && a.length && a.forEach((g) => {
          g.children.forEach((I) => {
            I.menuType ? k.push(I) : C.push(I);
          }), g.children = [], g.children.push({
            id: "-2",
            name: "pc菜单",
            children: C,
            menuType: 0,
            selected: C.length && C.every((I) => I.selected === !0),
            resources: []
          }), g.children.push({
            id: "-3",
            name: "移动端菜单",
            children: k,
            menuType: 1,
            selected: k.length && k.every((I) => I.selected === !0),
            resources: []
          }), g.selected = g.children.every((I) => I.selected === !0), w.push(g);
        }), m.list = w;
      } else
        $message.error(e);
    }, o = (r) => M(we, {
      option: r.option,
      classTypeId: d.id,
      treeList: m.list
    });
    (async () => {
      const { code: r, msg: l, data: e } = await ie.listAllClass();
      r === 0 ? d.list = e || [] : $message.error(l);
    })();
    const f = O(() => {
      for (const r in d.list)
        if (d.list[r].id === d.id)
          return d.list[r].className;
      return "请选择";
    }), c = (r) => {
      d.id = r;
    };
    return n({
      open: (r) => {
        _.show = !0, m.roleId = r.id, s();
      }
    }), (r, l) => {
      const e = j, a = U("sh-tree"), w = Z, C = W, k = X;
      return y(), L(k, {
        show: _.show,
        "onUpdate:show": l[1] || (l[1] = (g) => _.show = g),
        width: "70%"
      }, {
        default: h(() => [
          i(C, { title: "权限配置" }, {
            default: h(() => [
              u("div", ke, [
                $e,
                u("div", be, [
                  xe,
                  u("div", Ie, [
                    u("div", Re, [
                      R(" 资源 "),
                      i(e, {
                        trigger: "hover",
                        options: d.list,
                        "key-field": "id",
                        "label-field": "className",
                        onSelect: c
                      }, {
                        default: h(() => [
                          u("span", Ce, [
                            R(K(b(f)) + " ", 1),
                            (y(), L(z(b(P)), { class: "w-14 h-14 align-middle" }))
                          ])
                        ]),
                        _: 1
                      }, 8, ["options"])
                    ])
                  ])
                ]),
                u("div", Le, [
                  i(a, {
                    data: m.list,
                    "label-field": "name",
                    "key-field": "id",
                    "default-expand-all": "",
                    "render-label": o
                  }, null, 8, ["data"])
                ])
              ]),
              u("div", Ne, [
                i(w, {
                  onClick: l[0] || (l[0] = (g) => _.show = !1)
                }, {
                  default: h(() => [
                    R(" 关闭 ")
                  ]),
                  _: 1
                }),
                i(w, {
                  type: "primary",
                  onClick: t
                }, {
                  default: h(() => [
                    R(" 确定 ")
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
}, Se = /* @__PURE__ */ re(Te, [["__scopeId", "data-v-ffaec141"]]), Ue = { class: "pt-20" }, Ae = { class: "text-right mt-20" }, Me = {
  __name: "UnitAuthRole",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(p, { expose: n, emit: _ }) {
    const m = p, d = T({
      show: !1,
      loading: !1,
      type: "add"
    }), t = T({
      list: [],
      unitIds: []
    }), s = async () => {
      t.unitIds.length || $message.warning("请先选择企业"), d.loading = !0;
      const { code: f, msg: c } = await V.add({
        roleId: m.activeRoleId,
        unitIds: t.unitIds
      });
      f === 0 ? ($message.success("成功"), _("loadList"), d.show = !1) : $message.error(c);
    }, o = async () => {
      d.loading = !0;
      const { code: f, msg: c, data: x } = await V.listNotAuthUnitByRole({
        roleId: m.activeRoleId,
        page: 1,
        limit: 1e3
      });
      f === 0 ? t.list = x.map((r) => ({
        label: r.unitName,
        value: r.id
      })) : ($message.error(c), t.list = []), d.loading = !1;
    };
    return n({
      open: () => {
        d.show = !0, t.unitIds = [], o();
      }
    }), (f, c) => {
      const x = Y, r = Z, l = E;
      return y(), L(l, {
        show: d.show,
        "onUpdate:show": c[2] || (c[2] = (e) => d.show = e),
        preset: "card",
        class: "w-800",
        title: "批量授权"
      }, {
        default: h(() => [
          u("div", Ue, [
            i(x, {
              ref: "transfer",
              value: t.unitIds,
              "onUpdate:value": c[0] || (c[0] = (e) => t.unitIds = e),
              "target-filterable": "",
              "source-filterable": "",
              class: "h-600",
              options: t.list,
              "virtual-scroll": ""
            }, null, 8, ["value", "options"]),
            u("div", Ae, [
              i(r, {
                onClick: c[1] || (c[1] = (e) => d.show = !1)
              }, {
                default: h(() => [
                  R(" 关闭 ")
                ]),
                _: 1
              }),
              i(r, {
                type: "primary",
                onClick: s
              }, {
                default: h(() => [
                  R(" 确定 ")
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
}, De = { class: "mb-20" }, Ze = {
  __name: "index",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  setup(p) {
    const n = p, _ = [
      { type: "selection" },
      { type: "index" },
      { title: "企业名称", key: "unitName" },
      { title: "企业code", key: "unitCode" }
    ], m = N(null), d = N(null), t = N([]);
    F(
      () => n.activeRoleId,
      (c) => {
        c && ne(() => {
          s();
        });
      },
      { immediate: !0 }
    );
    const s = async () => {
      d.value.loadList({ roleId: n.activeRoleId });
    }, o = () => {
      if (!t.value.length) {
        $message.warning("请先选择数据");
        return;
      }
      $delete(
        V.delete,
        { roleId: n.activeRoleId, unitIds: t.value },
        () => {
          s(), t.value = [];
        },
        "是否要批量移除数据？此操作不可逆"
      );
    }, v = (c) => {
      t.value = c;
    }, f = (c) => {
      n.activeRoleId === "-1" ? $message.warning("子节点不允许新增") : m.value.open(c);
    };
    return (c, x) => {
      const r = Z, l = U("sh-data-table");
      return y(), S("div", null, [
        u("div", De, [
          c.$isCode("system-unitAuth-batchAuth") ? (y(), L(r, {
            key: 0,
            type: "primary",
            onClick: f
          }, {
            default: h(() => [
              R(" 批量授权 ")
            ]),
            _: 1
          })) : D("", !0),
          c.$isCode("system-unitAuth-batchAuth-delete") ? (y(), L(r, {
            key: 1,
            onClick: o
          }, {
            default: h(() => [
              R(" 批量移除 ")
            ]),
            _: 1
          })) : D("", !0)
        ]),
        i(l, {
          ref_key: "tableRef",
          ref: d,
          "row-key": (e) => e.id,
          columns: _,
          api: b(V).listAuthUnitByRole,
          autoload: !1,
          "onUpdate:checkedRowKeys": v
        }, null, 8, ["row-key", "api"]),
        i(Me, {
          ref_key: "dialogRef",
          ref: m,
          "active-role-id": p.activeRoleId,
          onLoadList: s
        }, null, 8, ["active-role-id"])
      ]);
    };
  }
}, Ve = { class: "pt-20" }, He = { class: "text-right mt-20" }, Be = {
  __name: "sysRoleFormDialog",
  emits: ["loadList"],
  setup(p, { expose: n, emit: _ }) {
    const { formRef: m, loading: d, showModal: t, type: s, typeTxt: o, formValue: v, reseForm: f, validate: c } = ue({
      roleName: "",
      description: "",
      roleType: 1
    }), x = (l, e) => {
      t.value = !0, s.value = l, l === "add" ? (f(), v.value.unitRoleId = e.id) : (e.roleName = e.name, f(e));
    }, r = async () => {
      d.value = !0;
      const { code: l, msg: e } = await q[s.value](v.value);
      d.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, _("loadList")) : $message.error(e);
    };
    return n({ init: x }), (l, e) => {
      const a = H, w = U("sh-form-item"), C = U("sh-form"), k = Z, g = B, I = E;
      return y(), L(I, {
        show: b(t),
        "onUpdate:show": e[4] || (e[4] = ($) => le(t) ? t.value = $ : null),
        preset: "card",
        class: "w-600",
        title: `${b(o)}系统角色`
      }, {
        default: h(() => [
          u("div", Ve, [
            i(g, { show: b(d) }, {
              default: h(() => [
                i(C, {
                  ref_key: "formRef",
                  ref: m,
                  model: b(v)
                }, {
                  default: h(() => [
                    i(w, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: h(() => [
                        i(a, {
                          value: b(v).roleName,
                          "onUpdate:value": e[0] || (e[0] = ($) => b(v).roleName = $),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    i(w, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: h(() => [
                        i(a, {
                          value: b(v).description,
                          "onUpdate:value": e[1] || (e[1] = ($) => b(v).description = $),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                u("div", He, [
                  i(k, {
                    onClick: e[2] || (e[2] = ($) => t.value = !1)
                  }, {
                    default: h(() => [
                      R(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  i(k, {
                    type: "primary",
                    onClick: e[3] || (e[3] = ($) => b(c)(r))
                  }, {
                    default: h(() => [
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
}, Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, Fe = /* @__PURE__ */ u("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linejoin": "round",
  "stroke-width": "1.6"
}, [
  /* @__PURE__ */ u("path", { d: "M7.854 2.999H3.808a.809.809 0 0 0-.809.809v4.046a.809.809 0 0 0 .809.809h4.046a.809.809 0 0 0 .809-.809V3.808a.809.809 0 0 0-.809-.809ZM7.854 11.9H3.808a.809.809 0 0 0-.809.809v4.046a.809.809 0 0 0 .809.809h4.046a.809.809 0 0 0 .809-.809v-4.046a.809.809 0 0 0-.809-.809ZM16.754 2.999h-4.046a.809.809 0 0 0-.809.809v4.046a.809.809 0 0 0 .809.809h4.046a.809.809 0 0 0 .809-.809V3.808a.809.809 0 0 0-.809-.809ZM16.754 11.9h-4.046a.809.809 0 0 0-.809.809v4.046a.809.809 0 0 0 .809.809h4.046a.809.809 0 0 0 .809-.809v-4.046a.809.809 0 0 0-.809-.809Z" })
], -1), je = /* @__PURE__ */ u("path", {
  fill: "none",
  d: "M0 .001h20v20H0z"
}, null, -1), Oe = [
  Fe,
  je
];
function Ke(p, n) {
  return y(), S("svg", Ee, Oe);
}
const ze = { render: Ke }, Pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, qe = /* @__PURE__ */ u("path", {
  fill: "none",
  d: "M0 .001h20v20H0z"
}, null, -1), Ge = /* @__PURE__ */ u("g", {
  fill: "currentColor",
  stroke: "#979daf",
  "stroke-width": ".5"
}, [
  /* @__PURE__ */ u("path", { d: "M16.537 13.661a4.14 4.14 0 0 0-2.171-2.188 2.718 2.718 0 0 0 .814-1.96 2.424 2.424 0 1 0-4.832 0 2.715 2.715 0 0 0 .814 1.96 4.057 4.057 0 0 0-1.283.871 4.148 4.148 0 0 0-1.216 2.948.453.453 0 1 0 .9 0 3.2 3.2 0 0 1 6.4 0 .453.453 0 1 0 .9 0 4.167 4.167 0 0 0-.326-1.631ZM11.25 9.513a1.519 1.519 0 1 1 1.514 1.633 1.58 1.58 0 0 1-1.514-1.633ZM8.234 7.252H5.82a.594.594 0 0 1 0-1.167h2.414a.594.594 0 0 1 0 1.167Zm0 4.084H5.82a.594.594 0 0 1 0-1.167h2.414a.594.594 0 0 1 0 1.167Z" }),
  /* @__PURE__ */ u("path", { d: "M6.695 17.171h-2.04a1.718 1.718 0 0 1-1.064-.407A1.54 1.54 0 0 1 3 15.586v-12a1.54 1.54 0 0 1 .592-1.178 1.721 1.721 0 0 1 1.063-.407h11.784a1.086 1.086 0 0 1 .964.554 2.009 2.009 0 0 1 .239 1.03v1.5a.526.526 0 1 1-1.046 0v-1.5a.8.8 0 0 0-.065-.385c-.008-.015-.018-.031-.092-.031H4.655a.77.77 0 0 0-.444.179.391.391 0 0 0-.165.237v12a.4.4 0 0 0 .165.237.757.757 0 0 0 .444.179h2.039a.587.587 0 0 1 0 1.167Z" })
], -1), Je = [
  qe,
  Ge
];
function Qe(p, n) {
  return y(), S("svg", Pe, Je);
}
const We = { render: Qe }, Xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, Ye = /* @__PURE__ */ ae('<g fill="#33b4ff" data-name="组 12058"><path d="M12.988 18.203h-9.1a.858.858 0 0 1-.859-.859V6.396a.859.859 0 0 1 .554-.8l8.868-3.367a.859.859 0 0 1 1.164.8v5.243h-1.25V4.84a.859.859 0 0 0-1.165-.8L4.833 6.458a.859.859 0 0 0-.554.8v8.83a.859.859 0 0 0 .859.86h7.852Z" data-name="路径 10778"></path><path d="M2.188 16.963h15.625v1.25H2.188Z" data-name="路径 10779"></path><path d="M10.371 9.081H5.704v1.25h4.667Z" data-name="路径 10780"></path><path d="M10.371 12.734H5.704v1.252h4.667Z" data-name="路径 10781"></path><path d="M14.635 10.253a.813.813 0 0 1 .811.811 2.038 2.038 0 0 1-.206.788 1.911 1.911 0 0 1-.482.667l-.135.107a1.2 1.2 0 0 0-.118-.106 1.893 1.893 0 0 1-.477-.664 2.056 2.056 0 0 1-.2-.792.811.811 0 0 1 .811-.81m1.831 4.491v.449h-3.672v-.449h3.672m-1.831-5.742a2.06 2.06 0 0 0-2.061 2.06 3.432 3.432 0 0 0 1.15 2.429h-.1a2.086 2.086 0 0 0-2.08 2.089.859.859 0 0 0 .859.86h4.45a.86.86 0 0 0 .86-.86 2.086 2.086 0 0 0-2.086-2.086h-.093a3.435 3.435 0 0 0 1.16-2.431 2.061 2.061 0 0 0-2.061-2.061h.005Z" data-name="路径 10782" opacity=".5"></path></g>', 1), et = [
  Ye
];
function tt(p, n) {
  return y(), S("svg", Xe, et);
}
const st = { render: tt }, ot = { class: "h-790 flex" }, nt = { class: "mb-30" }, lt = { class: "text-red text-30 pl-40 border-l border-#E1E7F8 flex-1" }, $t = {
  __name: "index",
  setup(p) {
    const n = de(), _ = N(null), m = N(null), d = N(null), t = N(null), s = T({
      list: [],
      loading: !1,
      pattern: "",
      activeId: "",
      activeType: ""
    }), o = async () => {
      s.loading = !0;
      const { code: e, data: a } = await A.listUnitRole();
      s.loading = !1, e === 0 && (s.list = a || []);
    };
    o();
    const v = (e, a) => {
      e[0] && (s.activeId = e[0], s.activeType = a[0].type);
    }, f = (e) => {
      let a = [];
      return e.type === "app" ? a.push({
        label: "新增企业角色",
        key: "add",
        code: "system-unitAuth-roleAdd",
        onClick: () => {
          r("add", e);
        }
      }) : e.type === "unitRole" ? (a.push({
        label: "新增系统角色",
        key: "add",
        code: "",
        onClick: () => {
          l("add", e);
        }
      }), a.push({
        label: "修改",
        key: "update",
        code: "system-unitAuth-roleUpdate",
        onClick: () => {
          r("update", e);
        }
      }), a.push({
        label: "授权",
        key: "auth",
        code: "system-unitAuth-roleAuth",
        onClick: () => {
          r("auth", e);
        }
      }), a.push({
        label: "删除",
        key: "delete",
        code: "system-unitAuth-roleDelete",
        onClick: () => {
          $delete(A.delete, { id: e.id }, o);
        }
      })) : (a.push({
        label: "授权",
        key: "auth",
        code: "",
        onClick: () => {
          l("auth", e);
        }
      }), a.push({
        label: "修改",
        key: "update",
        code: "",
        onClick: () => {
          l("update", e);
        }
      }), a.push({
        label: "删除",
        key: "delete",
        code: "",
        onClick: () => {
          $delete(q.delete, { id: e.id }, o);
        }
      })), a;
    }, c = (e) => {
      let a = e.option.type;
      return a === "app" ? M(ze, { style: { color: n.themeColor } }) : a === "unitRole" ? M(st) : M(We);
    }, x = ({ option: e }) => M(
      "span",
      {
        style: { color: e.type === "app" ? "#202837" : "#515E78" }
      },
      e.name
    ), r = (e, a) => {
      e === "auth" ? d.value.open(a) : _.value.open(e, a);
    }, l = (e, a) => {
      e === "auth" ? t.value.open(a) : m.value.init(e, a);
    };
    return (e, a) => {
      const w = H, C = U("sh-tree"), k = B;
      return y(), S("div", ot, [
        i(k, {
          show: s.loading,
          class: "w-400 mr-40"
        }, {
          default: h(() => [
            u("div", nt, [
              i(w, {
                value: s.pattern,
                "onUpdate:value": a[0] || (a[0] = (g) => s.pattern = g),
                class: "mt-10",
                placeholder: "请输入关键字"
              }, null, 8, ["value"])
            ]),
            i(C, {
              data: s.list,
              "label-field": "name",
              "key-field": "id",
              pattern: s.pattern,
              "default-expand-all": "",
              "render-prefix": c,
              suffix: f,
              "render-label": x,
              "onUpdate:selectedKeys": v
            }, null, 8, ["data", "pattern"])
          ]),
          _: 1
        }, 8, ["show"]),
        u("div", lt, [
          s.activeType === "unitRole" || s.activeType === "sysRole" ? (y(), L(Ze, {
            key: 0,
            "active-role-id": s.activeId
          }, null, 8, ["active-role-id"])) : D("", !0)
        ]),
        i(fe, {
          ref_key: "dialogRef",
          ref: _,
          onLoadList: o
        }, null, 512),
        i(Se, {
          ref_key: "authRef",
          ref: d
        }, null, 512),
        i(Be, {
          ref_key: "sysTeamDialogRef",
          ref: m,
          onLoadList: o
        }, null, 512),
        i(ce, {
          ref_key: "sysAuthDialogRef",
          ref: t
        }, null, 512)
      ]);
    };
  }
};
export {
  $t as default
};
