import { NDropdown as D, NCheckbox as j, NSpace as O, NButton as P, NDrawerContent as z, NDrawer as F } from "naive-ui";
import { watch as B, computed as E, openBlock as _, createBlock as x, withCtx as y, createElementVNode as d, createTextVNode as L, toDisplayString as A, unref as b, resolveDynamicComponent as R, createCommentVNode as U, createElementBlock as T, createVNode as f, Fragment as q, renderList as G, reactive as N, resolveComponent as H, h as J, pushScopeId as K, popScopeId as Q } from "vue";
import { h as V, o as $, i as W } from "./index-de809ebd.mjs";
import { _ as X } from "./_plugin-vue_export-helper-dad06003.mjs";
const Y = { class: "text-14 text-#3370ff cursor-pointer" }, Z = {
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
  setup(n) {
    const e = n, c = "UNIT";
    (() => {
      if (!e.item.classId)
        for (const s in e.item.classList)
          e.item.classList[s].classCode === c && (e.item.classId = e.item.classList[s].id);
    })(), B(
      () => e.classTypeId,
      (s) => {
        if (s)
          for (const o in e.item.classList)
            e.item.classList[o].id === s && (e.item.classId = e.item.classList[o].id);
      }
    );
    const i = E(() => {
      for (const s in e.item.classList)
        if (e.item.classList[s].id === e.item.classId)
          return e.item.classList[s].className;
      return "请选择";
    }), t = (s) => {
      e.item.classId = s;
    };
    return (s, o) => {
      const m = D;
      return n.item.classList && n.item.classList.length ? (_(), x(m, {
        key: 0,
        trigger: "hover",
        options: n.item.classList,
        "key-field": "id",
        "label-field": "className",
        onSelect: t
      }, {
        default: y(() => [
          d("span", Y, [
            L(A(b(i)) + " ", 1),
            (_(), x(R(b(V)), { class: "w-14 h-14 align-middle" }))
          ])
        ]),
        _: 1
      }, 8, ["options"])) : U("", !0);
    };
  }
}, ee = { class: "flex leading-40" }, se = { class: "w-320" }, te = { class: "flex-1" }, oe = {
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
  setup(n) {
    const e = n;
    B(
      () => e.option.selected,
      (t) => {
        e.option.resources.forEach((s) => {
          s.selected = t;
        });
      }
    );
    const c = (t) => {
      e.option.children && r(e.option.children, t), i(e.treeList, t);
    }, r = (t, s) => {
      t.forEach((o) => {
        o.selected = s, o.children && r(o.children, s);
      });
    }, i = (t, s) => {
      for (const o in t) {
        if (t[o].id === e.option.id)
          return !0;
        if (t[o].children && i(t[o].children, s)) {
          if (s)
            t[o].selected = !0;
          else {
            let m = 0;
            for (const a in t[o].children)
              t[o].children[a].selected && m++;
            m === 0 && (t[o].selected = !1);
          }
          return !0;
        }
      }
      return !1;
    };
    return (t, s) => {
      const o = j, m = O;
      return _(), T("div", ee, [
        d("div", se, [
          f(o, {
            checked: n.option.selected,
            "onUpdate:checked": [
              s[0] || (s[0] = (a) => n.option.selected = a),
              c
            ],
            label: n.option.name
          }, null, 8, ["checked", "label"])
        ]),
        d("div", te, [
          f(m, null, {
            default: y(() => [
              (_(!0), T(q, null, G(n.option.resources, (a, C) => (_(), T("div", { key: C }, [
                f(o, {
                  checked: a.selected,
                  "onUpdate:checked": (S) => a.selected = S,
                  disabled: !n.option.selected,
                  label: a.resourceName
                }, null, 8, ["checked", "onUpdate:checked", "disabled", "label"]),
                a.classList && a.classList.length ? (_(), x(Z, {
                  key: 0,
                  item: a,
                  "class-type-id": n.classTypeId
                }, null, 8, ["item", "class-type-id"])) : U("", !0)
              ]))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const M = (n) => (K("data-v-e8149d6e"), n = n(), Q(), n), ne = { class: "border border-#C0C7D4 rounded-8 relative" }, le = /* @__PURE__ */ M(() => /* @__PURE__ */ d("div", { class: "absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2" }, null, -1)), ce = { class: "flex" }, ie = /* @__PURE__ */ M(() => /* @__PURE__ */ d("div", { class: "w-320" }, [
  /* @__PURE__ */ d("div", { class: "title" }, "菜单")
], -1)), de = { class: "flex-1" }, ae = { class: "title" }, re = { class: "text-14 text-#3370ff cursor-pointer" }, ue = { class: "container" }, pe = { class: "text-right mt-20" }, he = {
  __name: "index",
  setup(n, { expose: e }) {
    const c = N({
      show: !1,
      loading: !1
    }), r = N({
      list: [],
      loading: !1,
      roleId: ""
    }), i = N({
      list: [],
      id: ""
    }), t = async () => {
      c.loading = !0;
      const { code: l, msg: u } = await $.saveAuthTreeByRoleId({
        roleId: r.roleId,
        menuTreeList: r.list
      });
      c.loading = !1, l === 0 ? ($message.success(u), c.show = !1) : $message.error(u);
    }, s = async (l) => {
      c.loading = !0;
      const { code: u, msg: v, data: k } = await $.findAuthTreeByRoleId({ id: r.roleId });
      if (c.loading = !1, u === 0) {
        let I = [], g = [], w = [];
        k && k.length && k.forEach((p) => {
          p.children.forEach((h) => {
            h.menuType ? w.push(h) : g.push(h);
          }), p.children = [], p.children.push({
            id: "-2",
            name: "pc菜单",
            children: g,
            menuType: 0,
            selected: g.length && g.every((h) => h.selected === !0),
            resources: []
          }), p.children.push({
            id: "-3",
            name: "移动端菜单",
            children: w,
            menuType: 1,
            selected: w.length && w.every((h) => h.selected === !0),
            resources: []
          }), p.selected = p.children.every((h) => h.selected === !0), I.push(p);
        }), r.list = I;
      } else
        $message.error(v);
    }, o = (l) => J(oe, {
      option: l.option,
      classTypeId: i.id,
      treeList: r.list
    });
    (async () => {
      const { code: l, msg: u, data: v } = await W.listAllClass();
      l === 0 ? i.list = v || [] : $message.error(u);
    })();
    const a = E(() => {
      for (const l in i.list)
        if (i.list[l].id === i.id)
          return i.list[l].className;
      return "请选择";
    }), C = (l) => {
      i.id = l;
    };
    return e({
      open: (l) => {
        c.show = !0, r.roleId = l.id, s();
      }
    }), (l, u) => {
      const v = D, k = H("sh-tree"), I = P, g = z, w = F;
      return _(), x(w, {
        show: c.show,
        "onUpdate:show": u[1] || (u[1] = (p) => c.show = p),
        width: "70%"
      }, {
        default: y(() => [
          f(g, { title: "权限配置" }, {
            default: y(() => [
              d("div", ne, [
                le,
                d("div", ce, [
                  ie,
                  d("div", de, [
                    d("div", ae, [
                      L(" 资源 "),
                      f(v, {
                        trigger: "hover",
                        options: i.list,
                        "key-field": "id",
                        "label-field": "className",
                        onSelect: C
                      }, {
                        default: y(() => [
                          d("span", re, [
                            L(A(b(a)) + " ", 1),
                            (_(), x(R(b(V)), { class: "w-14 h-14 align-middle" }))
                          ])
                        ]),
                        _: 1
                      }, 8, ["options"])
                    ])
                  ])
                ]),
                d("div", ue, [
                  f(k, {
                    data: r.list,
                    "label-field": "name",
                    "key-field": "id",
                    "default-expand-all": "",
                    "render-label": o
                  }, null, 8, ["data"])
                ])
              ]),
              d("div", pe, [
                f(I, {
                  onClick: u[0] || (u[0] = (p) => c.show = !1)
                }, {
                  default: y(() => [
                    L(" 关闭 ")
                  ]),
                  _: 1
                }),
                f(I, {
                  type: "primary",
                  onClick: t
                }, {
                  default: y(() => [
                    L(" 确定 ")
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
}, ge = /* @__PURE__ */ X(he, [["__scopeId", "data-v-e8149d6e"]]);
export {
  ge as s
};
