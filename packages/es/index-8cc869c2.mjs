import { NInput as K, NButton as E, NSpin as z, NModal as P, NDropdown as F, NCheckbox as G, NSpace as H, NDrawerContent as J, NDrawer as Q, NTransfer as ne } from "naive-ui";
import { ref as U, reactive as N, resolveComponent as T, openBlock as v, createBlock as R, withCtx as m, createElementVNode as _, createVNode as i, createTextVNode as b, watch as B, computed as O, toDisplayString as V, unref as C, createCommentVNode as A, createElementBlock as S, Fragment as W, renderList as X, h as q, pushScopeId as Y, popScopeId as Z, isRef as le, nextTick as ae } from "vue";
import { j as D, o as M, f as ee, k as j, c as ie } from "./index-c846165e.mjs";
import { _ as te } from "./_plugin-vue_export-helper-dad06003.mjs";
import { u as ce } from "./useModal-07595bd1.mjs";
import "lodash";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const de = { class: "pt-20" }, re = { class: "text-right mt-20" }, ue = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(d, { expose: o, emit: p }) {
    const f = {
      add: "新增",
      update: "修改"
    }, a = U(null), t = N({
      show: !1,
      loading: !1,
      type: "add"
    }), s = (l = "") => ({
      appId: l,
      roleName: "",
      description: ""
    }), n = N(s()), y = (l) => {
      Object.assign(n, s(l));
    }, r = () => {
      var l;
      (l = a.value) == null || l.validate((e) => {
        e || h();
      });
    }, h = async () => {
      t.loading = !0;
      const { code: l, msg: e } = await D[t.type](n);
      t.loading = !1, l === 0 ? ($message.success("成功"), t.show = !1, p("loadList")) : $message.error(e);
    }, x = async (l) => {
      t.loading = !0;
      const { code: e, msg: u, data: w } = await D.get({ id: l });
      t.loading = !1, e === 0 ? Object.assign(n, w) : $message.error(u);
    };
    return o({
      open: (l, e) => {
        t.show = !0, t.type = l, l === "update" ? x(e.id) : (t.type = "add", y(e.id));
      }
    }), (l, e) => {
      const u = K, w = T("sh-form-item"), k = T("sh-form"), I = E, g = z, $ = P;
      return v(), R($, {
        show: t.show,
        "onUpdate:show": e[3] || (e[3] = (L) => t.show = L),
        preset: "card",
        class: "w-600",
        title: `${f[t.type]}企业角色`
      }, {
        default: m(() => [
          _("div", de, [
            i(g, {
              show: t.loading
            }, {
              default: m(() => [
                i(k, {
                  ref_key: "formRef",
                  ref: a,
                  model: n
                }, {
                  default: m(() => [
                    i(w, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: m(() => [
                        i(u, {
                          value: n.roleName,
                          "onUpdate:value": e[0] || (e[0] = (L) => n.roleName = L),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    i(w, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: m(() => [
                        i(u, {
                          value: n.description,
                          "onUpdate:value": e[1] || (e[1] = (L) => n.description = L),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                _("div", re, [
                  i(I, {
                    onClick: e[2] || (e[2] = (L) => t.show = !1)
                  }, {
                    default: m(() => [
                      b(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  i(I, {
                    type: "primary",
                    onClick: r
                  }, {
                    default: m(() => [
                      b(" 确定 ")
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
}, pe = { class: "text-14 text-#3370ff cursor-pointer" }, fe = {
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
    const o = d, p = "UNIT";
    (() => {
      if (!o.item.classId)
        for (const s in o.item.classList)
          o.item.classList[s].classCode === p && (o.item.classId = o.item.classList[s].id);
    })(), B(
      () => o.classTypeId,
      (s) => {
        if (s)
          for (const n in o.item.classList)
            o.item.classList[n].id === s && (o.item.classId = o.item.classList[n].id);
      }
    );
    const a = O(() => {
      for (const s in o.item.classList)
        if (o.item.classList[s].id === o.item.classId)
          return o.item.classList[s].className;
      return "请选择";
    }), t = (s) => {
      o.item.classId = s;
    };
    return (s, n) => {
      const y = T("sh-icon"), r = F;
      return d.item.classList && d.item.classList.length ? (v(), R(r, {
        key: 0,
        trigger: "hover",
        options: d.item.classList,
        "key-field": "id",
        "label-field": "className",
        onSelect: t
      }, {
        default: m(() => [
          _("span", pe, [
            b(V(C(a)) + " ", 1),
            i(y, {
              name: "arrow-right",
              class: "align-middle"
            })
          ])
        ]),
        _: 1
      }, 8, ["options"])) : A("", !0);
    };
  }
}, _e = { class: "flex leading-40" }, me = { class: "w-320" }, he = { class: "flex-1" }, ye = {
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
    const o = d;
    B(
      () => o.option.selected,
      (t) => {
        o.option.resources.forEach((s) => {
          s.selected = t;
        });
      }
    );
    const p = (t) => {
      o.option.children && f(o.option.children, t), a(o.treeList, t);
    }, f = (t, s) => {
      t.forEach((n) => {
        n.selected = s, n.children && f(n.children, s);
      });
    }, a = (t, s) => {
      for (const n in t) {
        if (t[n].id === o.option.id)
          return !0;
        if (t[n].children && a(t[n].children, s)) {
          if (s)
            t[n].selected = !0;
          else {
            let y = 0;
            for (const r in t[n].children)
              t[n].children[r].selected && y++;
            y === 0 && (t[n].selected = !1);
          }
          return !0;
        }
      }
      return !1;
    };
    return (t, s) => {
      const n = G, y = H;
      return v(), S("div", _e, [
        _("div", me, [
          i(n, {
            checked: d.option.selected,
            "onUpdate:checked": [
              s[0] || (s[0] = (r) => d.option.selected = r),
              p
            ],
            label: d.option.name
          }, null, 8, ["checked", "label"])
        ]),
        _("div", he, [
          i(y, null, {
            default: m(() => [
              (v(!0), S(W, null, X(d.option.resources, (r, h) => (v(), S("div", { key: h }, [
                i(n, {
                  checked: r.selected,
                  "onUpdate:checked": (x) => r.selected = x,
                  disabled: !d.option.selected,
                  label: r.resourceName
                }, null, 8, ["checked", "onUpdate:checked", "disabled", "label"]),
                r.classList && r.classList.length ? (v(), R(fe, {
                  key: 0,
                  item: r,
                  "class-type-id": d.classTypeId
                }, null, 8, ["item", "class-type-id"])) : A("", !0)
              ]))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const se = (d) => (Y("data-v-e098fbc8"), d = d(), Z(), d), ge = { class: "border border-#C0C7D4 rounded-8 relative" }, ve = /* @__PURE__ */ se(() => /* @__PURE__ */ _("div", { class: "absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2" }, null, -1)), we = { class: "flex" }, be = /* @__PURE__ */ se(() => /* @__PURE__ */ _("div", { class: "w-320" }, [
  /* @__PURE__ */ _("div", { class: "title" }, "菜单")
], -1)), ke = { class: "flex-1" }, Ie = { class: "title" }, $e = { class: "text-14 text-#3370ff cursor-pointer" }, xe = { class: "container" }, Le = { class: "text-right mt-20" }, Ce = {
  __name: "index",
  setup(d, { expose: o }) {
    const p = N({
      show: !1,
      loading: !1
    }), f = N({
      list: [],
      loading: !1,
      roleId: ""
    }), a = N({
      list: [],
      id: ""
    }), t = async () => {
      p.loading = !0;
      const { code: c, msg: l } = await M.saveAuthTreeByRoleId({
        roleId: f.roleId,
        menuTreeList: f.list
      });
      p.loading = !1, c === 0 ? ($message.success(l), p.show = !1) : $message.error(l);
    }, s = async (c) => {
      p.loading = !0;
      const { code: l, msg: e, data: u } = await M.findAuthTreeByRoleId({ id: f.roleId });
      if (p.loading = !1, l === 0) {
        let w = [], k = [], I = [];
        u && u.length && u.forEach((g) => {
          g.children.forEach(($) => {
            $.menuType ? I.push($) : k.push($);
          }), g.children = [], g.children.push({
            id: "-2",
            name: "pc菜单",
            children: k,
            menuType: 0,
            selected: !1,
            resources: []
          }), g.children.push({
            id: "-3",
            name: "移动端菜单",
            children: I,
            menuType: 1,
            selected: !1,
            resources: []
          }), w.push(g);
        }), f.list = w;
      } else
        $message.error(e);
    }, n = (c) => q(ye, {
      option: c.option,
      classTypeId: a.id,
      treeList: f.list
    });
    (async () => {
      const { code: c, msg: l, data: e } = await ee.listAllClass();
      c === 0 ? a.list = e || [] : $message.error(l);
    })();
    const r = O(() => {
      for (const c in a.list)
        if (a.list[c].id === a.id)
          return a.list[c].className;
      return "请选择";
    }), h = (c) => {
      a.id = c;
    };
    return o({
      open: (c) => {
        p.show = !0, f.roleId = c.id, s();
      }
    }), (c, l) => {
      const e = T("sh-icon"), u = F, w = T("sh-tree"), k = E, I = J, g = Q;
      return v(), R(g, {
        show: p.show,
        "onUpdate:show": l[1] || (l[1] = ($) => p.show = $),
        width: "70%"
      }, {
        default: m(() => [
          i(I, { title: "权限配置" }, {
            default: m(() => [
              _("div", ge, [
                ve,
                _("div", we, [
                  be,
                  _("div", ke, [
                    _("div", Ie, [
                      b(" 资源 "),
                      i(u, {
                        trigger: "hover",
                        options: a.list,
                        "key-field": "id",
                        "label-field": "className",
                        onSelect: h
                      }, {
                        default: m(() => [
                          _("span", $e, [
                            b(V(C(r)) + " ", 1),
                            i(e, {
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
                _("div", xe, [
                  i(w, {
                    data: f.list,
                    "label-field": "name",
                    "key-field": "id",
                    "default-expand-all": "",
                    "render-label": n
                  }, null, 8, ["data"])
                ])
              ]),
              _("div", Le, [
                i(k, {
                  onClick: l[0] || (l[0] = ($) => p.show = !1)
                }, {
                  default: m(() => [
                    b(" 关闭 ")
                  ]),
                  _: 1
                }),
                i(k, {
                  type: "primary",
                  onClick: t
                }, {
                  default: m(() => [
                    b(" 确定 ")
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
}, Te = /* @__PURE__ */ te(Ce, [["__scopeId", "data-v-e098fbc8"]]), Re = { class: "pt-20" }, Ne = { class: "text-right mt-20" }, Ue = {
  __name: "sysRoleFormDialog",
  emits: ["loadList"],
  setup(d, { expose: o, emit: p }) {
    const { formRef: f, loading: a, showModal: t, type: s, typeTxt: n, formValue: y, reseForm: r, validate: h } = ce({
      roleName: "",
      description: "",
      roleType: 1
    }), x = (l, e) => {
      t.value = !0, s.value = l, l === "add" ? (r(), y.value.unitRoleId = e.id) : (e.roleName = e.name, r(e));
    }, c = async () => {
      a.value = !0;
      const { code: l, msg: e } = await M[s.value](y.value);
      a.value = !1, l === 0 ? ($message.success("成功"), t.value = !1, p("loadList")) : $message.error(e);
    };
    return o({ init: x }), (l, e) => {
      const u = K, w = T("sh-form-item"), k = T("sh-form"), I = E, g = z, $ = P;
      return v(), R($, {
        show: C(t),
        "onUpdate:show": e[4] || (e[4] = (L) => le(t) ? t.value = L : null),
        preset: "card",
        class: "w-600",
        title: `${C(n)}系统角色`
      }, {
        default: m(() => [
          _("div", Re, [
            i(g, { show: C(a) }, {
              default: m(() => [
                i(k, {
                  ref_key: "formRef",
                  ref: f,
                  model: C(y)
                }, {
                  default: m(() => [
                    i(w, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: m(() => [
                        i(u, {
                          value: C(y).roleName,
                          "onUpdate:value": e[0] || (e[0] = (L) => C(y).roleName = L),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    i(w, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: m(() => [
                        i(u, {
                          value: C(y).description,
                          "onUpdate:value": e[1] || (e[1] = (L) => C(y).description = L),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                _("div", Ne, [
                  i(I, {
                    onClick: e[2] || (e[2] = (L) => t.value = !1)
                  }, {
                    default: m(() => [
                      b(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  i(I, {
                    type: "primary",
                    onClick: e[3] || (e[3] = (L) => C(h)(c))
                  }, {
                    default: m(() => [
                      b(" 确定 ")
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
}, Se = { class: "text-14 text-#3370ff cursor-pointer" }, Ae = {
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
    const o = d, p = "UNIT";
    (() => {
      if (!o.item.classId)
        for (const s in o.item.classList)
          o.item.classList[s].classCode === p && (o.item.classId = o.item.classList[s].id);
    })(), B(
      () => o.classTypeId,
      (s) => {
        if (s)
          for (const n in o.item.classList)
            o.item.classList[n].id === s && (o.item.classId = o.item.classList[n].id);
      }
    );
    const a = O(() => {
      for (const s in o.item.classList)
        if (o.item.classList[s].id === o.item.classId)
          return o.item.classList[s].className;
      return "请选择";
    }), t = (s) => {
      o.item.classId = s;
    };
    return (s, n) => {
      const y = T("sh-icon"), r = F;
      return d.item.classList && d.item.classList.length ? (v(), R(r, {
        key: 0,
        trigger: "hover",
        options: d.item.classList,
        "key-field": "id",
        "label-field": "className",
        onSelect: t
      }, {
        default: m(() => [
          _("span", Se, [
            b(V(C(a)) + " ", 1),
            i(y, {
              name: "arrow-right",
              class: "align-middle"
            })
          ])
        ]),
        _: 1
      }, 8, ["options"])) : A("", !0);
    };
  }
}, De = { class: "flex leading-40" }, Ee = { class: "w-320" }, Be = { class: "flex-1" }, Me = {
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
    const o = d;
    B(
      () => o.option.selected,
      (t) => {
        o.option.resources.forEach((s) => {
          s.selected = t;
        });
      }
    );
    const p = (t) => {
      o.option.children && f(o.option.children, t), a(o.treeList, t);
    }, f = (t, s) => {
      t.forEach((n) => {
        n.selected = s, n.children && f(n.children, s);
      });
    }, a = (t, s) => {
      for (const n in t) {
        if (t[n].id === o.option.id)
          return !0;
        if (t[n].children && a(t[n].children, s)) {
          if (s)
            t[n].selected = !0;
          else {
            let y = 0;
            for (const r in t[n].children)
              t[n].children[r].selected && y++;
            y === 0 && (t[n].selected = !1);
          }
          return !0;
        }
      }
      return !1;
    };
    return (t, s) => {
      const n = G, y = H;
      return v(), S("div", De, [
        _("div", Ee, [
          i(n, {
            checked: d.option.selected,
            "onUpdate:checked": [
              s[0] || (s[0] = (r) => d.option.selected = r),
              p
            ],
            label: d.option.name
          }, null, 8, ["checked", "label"])
        ]),
        _("div", Be, [
          i(y, null, {
            default: m(() => [
              (v(!0), S(W, null, X(d.option.resources, (r, h) => (v(), S("div", { key: h }, [
                i(n, {
                  checked: r.selected,
                  "onUpdate:checked": (x) => r.selected = x,
                  disabled: !d.option.selected,
                  label: r.resourceName
                }, null, 8, ["checked", "onUpdate:checked", "disabled", "label"]),
                r.classList && r.classList.length ? (v(), R(Ae, {
                  key: 0,
                  item: r,
                  "class-type-id": d.classTypeId
                }, null, 8, ["item", "class-type-id"])) : A("", !0)
              ]))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const oe = (d) => (Y("data-v-4bb8deb7"), d = d(), Z(), d), je = { class: "border border-#C0C7D4 rounded-8 relative" }, Fe = /* @__PURE__ */ oe(() => /* @__PURE__ */ _("div", { class: "absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2" }, null, -1)), Oe = { class: "flex" }, Ve = /* @__PURE__ */ oe(() => /* @__PURE__ */ _("div", { class: "w-320" }, [
  /* @__PURE__ */ _("div", { class: "title" }, "菜单")
], -1)), Ke = { class: "flex-1" }, ze = { class: "title" }, Pe = { class: "text-14 text-#3370ff cursor-pointer" }, qe = { class: "container" }, Ge = { class: "text-right mt-20" }, He = {
  __name: "index",
  setup(d, { expose: o }) {
    const p = N({
      show: !1,
      loading: !1
    }), f = N({
      list: [],
      loading: !1,
      roleId: ""
    }), a = N({
      list: [],
      id: ""
    }), t = async () => {
      p.loading = !0;
      const { code: c, msg: l } = await D.saveAuthTreeByRoleId({
        roleId: f.roleId,
        menuTreeList: f.list
      });
      p.loading = !1, c === 0 ? ($message.success(l), p.show = !1) : $message.error(l);
    }, s = async (c) => {
      p.loading = !0;
      const { code: l, msg: e, data: u } = await D.findAuthTreeByRoleId({ id: f.roleId });
      if (p.loading = !1, l === 0) {
        let w = [], k = [], I = [];
        u && u.length && u.forEach((g) => {
          g.children.forEach(($) => {
            $.menuType ? I.push($) : k.push($);
          }), g.children = [], g.children.push({
            id: "-2",
            name: "pc菜单",
            children: k,
            menuType: 0,
            selected: !1,
            resources: []
          }), g.children.push({
            id: "-3",
            name: "移动端菜单",
            children: I,
            menuType: 1,
            selected: !1,
            resources: []
          }), w.push(g);
        }), f.list = w;
      } else
        $message.error(e);
    }, n = (c) => q(Me, {
      option: c.option,
      classTypeId: a.id,
      treeList: f.list
    });
    (async () => {
      const { code: c, msg: l, data: e } = await ee.listAllClass();
      c === 0 ? a.list = e || [] : $message.error(l);
    })();
    const r = O(() => {
      for (const c in a.list)
        if (a.list[c].id === a.id)
          return a.list[c].className;
      return "请选择";
    }), h = (c) => {
      a.id = c;
    };
    return o({
      open: (c) => {
        p.show = !0, f.roleId = c.id, s();
      }
    }), (c, l) => {
      const e = T("sh-icon"), u = F, w = T("sh-tree"), k = E, I = J, g = Q;
      return v(), R(g, {
        show: p.show,
        "onUpdate:show": l[1] || (l[1] = ($) => p.show = $),
        width: "70%"
      }, {
        default: m(() => [
          i(I, { title: "权限配置" }, {
            default: m(() => [
              _("div", je, [
                Fe,
                _("div", Oe, [
                  Ve,
                  _("div", Ke, [
                    _("div", ze, [
                      b(" 资源 "),
                      i(u, {
                        trigger: "hover",
                        options: a.list,
                        "key-field": "id",
                        "label-field": "className",
                        onSelect: h
                      }, {
                        default: m(() => [
                          _("span", Pe, [
                            b(V(C(r)) + " ", 1),
                            i(e, {
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
                _("div", qe, [
                  i(w, {
                    data: f.list,
                    "label-field": "name",
                    "key-field": "id",
                    "default-expand-all": "",
                    "render-label": n
                  }, null, 8, ["data"])
                ])
              ]),
              _("div", Ge, [
                i(k, {
                  onClick: l[0] || (l[0] = ($) => p.show = !1)
                }, {
                  default: m(() => [
                    b(" 关闭 ")
                  ]),
                  _: 1
                }),
                i(k, {
                  type: "primary",
                  onClick: t
                }, {
                  default: m(() => [
                    b(" 确定 ")
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
}, Je = /* @__PURE__ */ te(He, [["__scopeId", "data-v-4bb8deb7"]]), Qe = { class: "pt-20" }, We = { class: "text-right mt-20" }, Xe = {
  __name: "UnitAuthRole",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(d, { expose: o, emit: p }) {
    const f = d, a = N({
      show: !1,
      loading: !1,
      type: "add"
    }), t = N({
      list: [],
      unitIds: []
    }), s = async () => {
      t.unitIds.length || $message.warning("请先选择企业"), a.loading = !0;
      const { code: r, msg: h } = await j.add({
        roleId: f.activeRoleId,
        unitIds: t.unitIds
      });
      r === 0 ? ($message.success("成功"), p("loadList"), a.show = !1) : $message.error(h);
    }, n = async () => {
      a.loading = !0;
      const { code: r, msg: h, data: x } = await j.listNotAuthUnitByRole({
        roleId: f.activeRoleId,
        page: 1,
        limit: 1e3
      });
      r === 0 ? t.list = x.map((c) => ({
        label: c.unitName,
        value: c.id
      })) : ($message.error(h), t.list = []), a.loading = !1;
    };
    return o({
      open: () => {
        a.show = !0, t.unitIds = [], n();
      }
    }), (r, h) => {
      const x = ne, c = E, l = P;
      return v(), R(l, {
        show: a.show,
        "onUpdate:show": h[2] || (h[2] = (e) => a.show = e),
        preset: "card",
        class: "w-800",
        title: "批量授权"
      }, {
        default: m(() => [
          _("div", Qe, [
            i(x, {
              ref: "transfer",
              value: t.unitIds,
              "onUpdate:value": h[0] || (h[0] = (e) => t.unitIds = e),
              "target-filterable": "",
              "source-filterable": "",
              class: "h-600",
              options: t.list,
              "virtual-scroll": ""
            }, null, 8, ["value", "options"]),
            _("div", We, [
              i(c, {
                onClick: h[1] || (h[1] = (e) => a.show = !1)
              }, {
                default: m(() => [
                  b(" 关闭 ")
                ]),
                _: 1
              }),
              i(c, {
                type: "primary",
                onClick: s
              }, {
                default: m(() => [
                  b(" 确定 ")
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
}, Ye = { class: "mb-20" }, Ze = {
  __name: "index",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  setup(d) {
    const o = d, p = [
      { type: "selection" },
      { type: "index" },
      { title: "企业名称", key: "unitName" },
      { title: "企业code", key: "unitCode" }
    ], f = U(null), a = U(null), t = U([]);
    B(
      () => o.activeRoleId,
      (h) => {
        h && ae(() => {
          s();
        });
      },
      { immediate: !0 }
    );
    const s = async () => {
      a.value.loadList({ roleId: o.activeRoleId });
    }, n = () => {
      if (!t.value.length) {
        $message.warning("请先选择数据");
        return;
      }
      $delete(
        j.delete,
        { roleId: o.activeRoleId, unitIds: t.value },
        () => {
          s(), t.value = [];
        },
        "是否要批量移除数据？此操作不可逆"
      );
    }, y = (h) => {
      t.value = h;
    }, r = (h) => {
      o.activeRoleId === "-1" ? $message.warning("子节点不允许新增") : f.value.open(h);
    };
    return (h, x) => {
      const c = E, l = T("sh-data-table");
      return v(), S("div", null, [
        _("div", Ye, [
          h.$isCode("system-unitAuth-batchAuth") ? (v(), R(c, {
            key: 0,
            type: "primary",
            onClick: r
          }, {
            default: m(() => [
              b(" 批量授权 ")
            ]),
            _: 1
          })) : A("", !0),
          h.$isCode("system-unitAuth-batchAuth-delete") ? (v(), R(c, {
            key: 1,
            onClick: n
          }, {
            default: m(() => [
              b(" 批量移除 ")
            ]),
            _: 1
          })) : A("", !0)
        ]),
        i(l, {
          ref_key: "tableRef",
          ref: a,
          "row-key": (e) => e.id,
          columns: p,
          api: C(j).listAuthUnitByRole,
          autoload: !1,
          "onUpdate:checkedRowKeys": y
        }, null, 8, ["row-key", "api"]),
        i(Xe, {
          ref_key: "dialogRef",
          ref: f,
          "active-role-id": d.activeRoleId,
          onLoadList: s
        }, null, 8, ["active-role-id"])
      ]);
    };
  }
}, et = { class: "h-790 flex" }, tt = { class: "mb-30" }, st = { class: "text-red text-30 pl-40 border-l border-#E1E7F8 flex-1" }, gt = {
  __name: "index",
  setup(d) {
    const o = ie(), p = U(null), f = U(null), a = U(null), t = U(null), s = N({
      list: [],
      loading: !1,
      pattern: "",
      activeId: "",
      activeType: ""
    }), n = async () => {
      s.loading = !0;
      const { code: e, data: u } = await D.listUnitRole();
      s.loading = !1, e === 0 && (s.list = u || []);
    };
    n();
    const y = (e, u) => {
      e[0] && (s.activeId = e[0], s.activeType = u[0].type);
    }, r = (e) => {
      let u = [];
      return e.type === "app" ? u.push({
        label: "新增企业角色",
        key: "add",
        code: "system-unitAuth-roleAdd",
        onClick: () => {
          c("add", e);
        }
      }) : e.type === "unitRole" ? (u.push({
        label: "新增系统角色",
        key: "add",
        code: "",
        onClick: () => {
          l("add", e);
        }
      }), u.push({
        label: "修改",
        key: "update",
        code: "system-unitAuth-roleUpdate",
        onClick: () => {
          c("update", e);
        }
      }), u.push({
        label: "授权",
        key: "auth",
        code: "system-unitAuth-roleAuth",
        onClick: () => {
          c("auth", e);
        }
      }), u.push({
        label: "删除",
        key: "delete",
        code: "system-unitAuth-roleDelete",
        onClick: () => {
          $delete(D.delete, { id: e.id }, n);
        }
      })) : (u.push({
        label: "授权",
        key: "auth",
        code: "",
        onClick: () => {
          l("auth", e);
        }
      }), u.push({
        label: "修改",
        key: "update",
        code: "",
        onClick: () => {
          l("update", e);
        }
      }), u.push({
        label: "删除",
        key: "delete",
        code: "",
        onClick: () => {
          $delete(M.delete, { id: e.id }, n);
        }
      })), u;
    }, h = (e) => e.type === "app" ? { name: "app", style: { "font-size": "20px", color: o.themeColor } } : { name: "role", style: { color: "#979daf" } }, x = ({ option: e }) => q(
      "span",
      {
        style: { color: e.type === "app" ? "#202837" : "#515E78" }
      },
      e.name
    ), c = (e, u) => {
      e === "auth" ? a.value.open(u) : p.value.open(e, u);
    }, l = (e, u) => {
      e === "auth" ? t.value.open(u) : f.value.init(e, u);
    };
    return (e, u) => {
      const w = K, k = T("sh-tree"), I = z;
      return v(), S("div", et, [
        i(I, {
          show: s.loading,
          class: "w-400 mr-40"
        }, {
          default: m(() => [
            _("div", tt, [
              i(w, {
                value: s.pattern,
                "onUpdate:value": u[0] || (u[0] = (g) => s.pattern = g),
                class: "mt-10",
                placeholder: "请输入关键字"
              }, null, 8, ["value"])
            ]),
            i(k, {
              data: s.list,
              "label-field": "name",
              "key-field": "id",
              pattern: s.pattern,
              "default-expand-all": "",
              prefix: h,
              suffix: r,
              "render-label": x,
              "onUpdate:selectedKeys": y
            }, null, 8, ["data", "pattern"])
          ]),
          _: 1
        }, 8, ["show"]),
        _("div", st, [
          s.activeType === "role" ? (v(), R(Ze, {
            key: 0,
            "active-role-id": s.activeId
          }, null, 8, ["active-role-id"])) : A("", !0)
        ]),
        i(ue, {
          ref_key: "dialogRef",
          ref: p,
          onLoadList: n
        }, null, 512),
        i(Je, {
          ref_key: "authRef",
          ref: a
        }, null, 512),
        i(Ue, {
          ref_key: "sysTeamDialogRef",
          ref: f,
          onLoadList: n
        }, null, 512),
        i(Te, {
          ref_key: "sysAuthDialogRef",
          ref: t
        }, null, 512)
      ]);
    };
  }
};
export {
  gt as default
};
