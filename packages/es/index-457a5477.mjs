import { NInput as P, NButton as E, NSpin as V, NModal as A, NTransfer as M } from "naive-ui";
import { ref as R, reactive as C, resolveComponent as N, openBlock as y, createBlock as L, withCtx as u, createElementVNode as b, createVNode as r, createTextVNode as I, computed as q, unref as B, h as K, watch as O, nextTick as j, createElementBlock as T, createCommentVNode as S, createStaticVNode as F } from "vue";
import { o as U, f as Z, g as D, c as z } from "./index-2db33f86.mjs";
import { s as H } from "./index-85b4ecce.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import { c as G } from "./company-0dfd2ecd.mjs";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const J = { class: "p-20" }, Q = { class: "text-right mt-20" }, W = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(v, { expose: m, emit: k }) {
    const _ = {
      add: "新增",
      update: "修改"
    }, a = R(null), t = C({
      show: !1,
      loading: !1,
      type: "add"
    }), o = () => ({
      roleName: "",
      description: ""
    }), d = C(o()), w = () => {
      Object.assign(d, o());
    }, g = () => {
      var c;
      (c = a.value) == null || c.validate((l) => {
        l || e();
      });
    }, e = async () => {
      t.loading = !0;
      const { code: c, msg: l } = await U[t.type](d);
      t.loading = !1, c === 0 ? ($message.success("成功"), t.show = !1, k("loadList")) : $message.error(l);
    };
    return m({
      open: (c, l) => {
        t.show = !0, t.type = c, c === "update" ? Object.assign(d, l) : (t.type = "add", w());
      }
    }), (c, l) => {
      const i = P, s = N("sh-form-item"), f = N("sh-form"), h = E, p = V, $ = A;
      return y(), L($, {
        show: t.show,
        "onUpdate:show": l[3] || (l[3] = (x) => t.show = x),
        preset: "card",
        class: "w-600",
        title: `${_[t.type]}角色`
      }, {
        default: u(() => [
          b("div", J, [
            r(p, {
              show: t.loading
            }, {
              default: u(() => [
                r(f, {
                  ref_key: "formRef",
                  ref: a,
                  model: d
                }, {
                  default: u(() => [
                    r(s, {
                      label: "角色名称",
                      path: "roleName",
                      rule: "required"
                    }, {
                      default: u(() => [
                        r(i, {
                          value: d.roleName,
                          "onUpdate:value": l[0] || (l[0] = (x) => d.roleName = x),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    r(s, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: u(() => [
                        r(i, {
                          value: d.description,
                          "onUpdate:value": l[1] || (l[1] = (x) => d.description = x),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                b("div", Q, [
                  r(h, {
                    onClick: l[2] || (l[2] = (x) => t.show = !1)
                  }, {
                    default: u(() => [
                      I(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  r(h, {
                    type: "primary",
                    onClick: g
                  }, {
                    default: u(() => [
                      I(" 确定 ")
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
}, X = { class: "pt-20" }, Y = { class: "text-right mt-20" }, ee = {
  __name: "AuthRole",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(v, { expose: m, emit: k }) {
    const _ = v, a = N("sh-tree"), t = C({
      show: !1,
      loading: !1,
      type: "add"
    }), o = C({
      list: [],
      unitIds: [],
      checkedKeys: []
    }), d = q(() => c(o.list)), w = function({ onCheck: i, pattern: s }) {
      return K(a, {
        style: "margin: 0 4px;",
        keyField: "id",
        labelField: "name",
        checkable: !0,
        selectable: !1,
        blockLine: !0,
        cascade: !0,
        checkOnClick: !0,
        data: o.list,
        pattern: s,
        checkedKeys: o.checkedKeys,
        onUpdateCheckedKeys: (f, h) => {
          o.unitIds = [], o.checkedKeys = [], h.forEach((p) => {
            p.type === "person" && o.unitIds.push(p.id), o.checkedKeys = f;
          });
        }
      });
    }, g = (i) => {
      o.checkedKeys = i;
    }, e = async () => {
      o.unitIds.length || $message.warning("请先选择企业"), t.loading = !0;
      let i = [];
      for (const h in d.value)
        o.unitIds.indexOf(d.value[h].id) !== -1 && i.push(d.value[h].personId);
      const { code: s, msg: f } = await Z.add({
        roleId: _.activeRoleId,
        personIds: i
      });
      s === 0 ? ($message.success("成功"), k("loadList"), t.show = !1) : $message.error(f);
    }, n = async () => {
      t.loading = !0;
      const { code: i, msg: s, data: f } = await D.deptPersonTree();
      i === 0 ? o.list = f || [] : ($message.error(s), o.list = []), t.loading = !1;
    };
    function c(i) {
      const s = [];
      function f(h = []) {
        h.forEach((p) => {
          p.type === "person" && s.push({
            ...p,
            value: p.id,
            label: p.name
          }), p.children && p.children.length && f(p.children);
        });
      }
      return f(i), s;
    }
    return m({
      open: () => {
        t.show = !0, o.unitIds = [], o.checkedKeys = [], n();
      }
    }), (i, s) => {
      const f = M, h = E, p = A;
      return y(), L(p, {
        show: t.show,
        "onUpdate:show": s[2] || (s[2] = ($) => t.show = $),
        preset: "card",
        class: "w-800",
        title: "批量授权"
      }, {
        default: u(() => [
          b("div", X, [
            r(f, {
              ref: "transfer",
              value: o.unitIds,
              "onUpdate:value": [
                s[0] || (s[0] = ($) => o.unitIds = $),
                g
              ],
              "target-filterable": "",
              "source-filterable": "",
              class: "h-600",
              options: B(d),
              "render-source-list": w,
              "virtual-scroll": ""
            }, null, 8, ["value", "options"]),
            b("div", Y, [
              r(h, {
                onClick: s[1] || (s[1] = ($) => t.show = !1)
              }, {
                default: u(() => [
                  I(" 关闭 ")
                ]),
                _: 1
              }),
              r(h, {
                type: "primary",
                onClick: e
              }, {
                default: u(() => [
                  I(" 确定 ")
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
}, te = { class: "mb-20" }, oe = {
  __name: "index",
  props: {
    activeRoleId: {
      type: String,
      default: ""
    }
  },
  setup(v) {
    const m = v, k = [
      { type: "selection" },
      { type: "index" },
      { title: "姓名", key: "name" },
      {
        title: "性别",
        key: "gender",
        render(e) {
          return e.gender ? "男" : "女";
        }
      },
      { title: "手机号", key: "phone" }
    ], _ = R(null), a = R(null), t = R([]);
    O(
      () => m.activeRoleId,
      (e) => {
        e && j(() => {
          o();
        });
      },
      { immediate: !0 }
    );
    const o = async () => {
      a.value.loadList({ roleId: m.activeRoleId });
    }, d = () => {
      if (!t.value.length) {
        $message.warning("请先选择数据");
        return;
      }
      $delete(
        Z.delete,
        { roleId: m.activeRoleId, personIds: t.value },
        () => {
          o(), t.value = [];
        },
        "是否要批量移除数据？此操作不可逆"
      );
    }, w = (e) => {
      t.value = e;
    }, g = (e) => {
      m.activeRoleId === "-1" ? $message.warning("子节点不允许新增") : _.value.open();
    };
    return (e, n) => {
      const c = E, l = N("sh-data-table");
      return y(), T("div", null, [
        b("div", te, [
          e.$isCode("system-role-batchAuth") ? (y(), L(c, {
            key: 0,
            type: "primary",
            onClick: g
          }, {
            default: u(() => [
              I(" 批量授权 ")
            ]),
            _: 1
          })) : S("", !0),
          e.$isCode("system-role-batchAuth-delete") ? (y(), L(c, {
            key: 1,
            onClick: d
          }, {
            default: u(() => [
              I(" 批量移除 ")
            ]),
            _: 1
          })) : S("", !0)
        ]),
        r(l, {
          ref_key: "tableRef",
          ref: a,
          "row-key": (i) => i.id,
          columns: k,
          api: B(Z).listAuthPersonByRole,
          autoload: !1,
          "onUpdate:checkedRowKeys": w
        }, null, 8, ["row-key", "api"]),
        r(ee, {
          ref_key: "dialogRef",
          ref: _,
          "active-role-id": v.activeRoleId,
          onLoadList: o
        }, null, 8, ["active-role-id"])
      ]);
    };
  }
}, ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, se = /* @__PURE__ */ F('<g data-name="组 8612"><g data-name="组 8611"><g data-name="组 8609"><g data-name="组 8585"><g data-name="组 8583"><g data-name="组 8581"><g data-name="组 8504"><path fill="none" d="M0 .001h20v20H0z" data-name="矩形 13790"></path></g></g></g></g></g></g><path fill="#979daf" stroke="#979daf" stroke-width=".4" d="M15.399 10.324a5.671 5.671 0 0 1 3.4 3.129 5.591 5.591 0 0 1 .449 2.578.527.527 0 0 1-.394.533.511.511 0 0 1-.627-.551 4.491 4.491 0 0 0-.684-2.766 4.553 4.553 0 0 0-3.026-2.1c-.2-.042-.407-.056-.61-.088a.506.506 0 0 1-.079-.981 3.283 3.283 0 0 0 2.193-2.821 3.313 3.313 0 0 0-2.587-3.514 4.04 4.04 0 0 0-.888-.079.486.486 0 1 1 0-.972 4.065 4.065 0 0 1 1.831.332 4.286 4.286 0 0 1 1.459 6.888c-.066.073-.138.14-.21.207s-.146.131-.233.207Zm-6.98 1.675.708 1.2.963 1.634a.086.086 0 0 1-.016.13q-.8.783-1.595 1.572c-.046.046-.072.054-.123 0q-.8-.791-1.6-1.578c-.038-.037-.05-.062-.019-.114l1.645-2.792c.005-.01.017-.023.034-.051Zm6.74 4.067a6.487 6.487 0 0 0-.314-1.218 6.887 6.887 0 0 0-3.711-4q-.275-.123-.561-.221a4.318 4.318 0 0 0 2.08-3.136 4.2 4.2 0 0 0-1.117-3.582 4.343 4.343 0 0 0-6.434.022 4.2 4.2 0 0 0-1.1 3.447 4.332 4.332 0 0 0 2.092 3.242.147.147 0 0 1-.081.039 5.989 5.989 0 0 0-.519.21 6.89 6.89 0 0 0-3.135 2.826 6.808 6.808 0 0 0-.847 2.347.514.514 0 0 0 .275.585.554.554 0 0 0 .687-.157.8.8 0 0 0 .134-.367 5.637 5.637 0 0 1 1.723-3.152 5.645 5.645 0 0 1 5.384-1.428 5.633 5.633 0 0 1 3.711 2.828 6.032 6.032 0 0 1 .666 1.91.542.542 0 0 0 1.065-.2Zm-6.822-5.825a3.371 3.371 0 1 1 3.362-3.371 3.363 3.363 0 0 1-3.367 3.37Zm0 0"></path></g>', 1), ne = [
  se
];
function le(v, m) {
  return y(), T("svg", ae, ne);
}
const re = { render: le }, de = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, ie = /* @__PURE__ */ F('<g data-name="组 12065"><g data-name="组 12064"><path fill="#1b5ec9" d="M9.985 2.886a3.2 3.2 0 1 1-2.266.939 3.2 3.2 0 0 1 2.266-.939m0-1.25a4.454 4.454 0 1 0 4.456 4.455 4.454 4.454 0 0 0-4.456-4.455Z" data-name="路径 10795"></path><path fill="#1b5ec9" d="M10.473 18.359c-1.952 0-3.861-.018-6.882-.047l-.869-.007v-.62a8.482 8.482 0 0 1 2.108-5.674 7.25 7.25 0 0 1 2.313-1.741 6.656 6.656 0 0 1 5.713 0l-.536 1.13a5.393 5.393 0 0 0-2.322-.525c-3.139 0-5.725 2.725-6 6.191 5.191.049 7.034.064 12.006 0a7.481 7.481 0 0 0-.375-1.818l1.183-.4a8.783 8.783 0 0 1 .469 2.838v.617l-.617.008c-2.656.034-4.441.048-6.191.048Z" data-name="路径 10796"></path><g data-name="组 12063"><g data-name="组 12062"><path fill="#1b5ec9" d="M14.728 14.907a2.047 2.047 0 1 1 1.575-.737 2.042 2.042 0 0 1-1.575.737Zm0-2.845a.568.568 0 0 0-.074 0 .8.8 0 1 0 .685 1.3.8.8 0 0 0-.611-1.308Z" data-name="路径 10797" opacity=".5"></path></g></g></g></g>', 1), ce = [
  ie
];
function pe(v, m) {
  return y(), T("svg", de, ce);
}
const ue = { render: pe }, me = { class: "h-790 flex" }, fe = { class: "mb-30" }, he = { class: "text-red text-30 pl-40 border-l border-#E1E7F8 flex-1" }, Se = {
  __name: "index",
  setup(v) {
    const m = z(), k = R(null), _ = R(null), a = C({
      list: [],
      loading: !1,
      pattern: "",
      activeId: "",
      activeType: ""
    }), t = async () => {
      a.loading = !0;
      const { code: e, data: n } = await U.listPersonRole();
      a.loading = !1, e === 0 && (a.list = n || []);
    };
    t();
    const o = (e, n) => {
      e[0] && (a.activeId = e[0], a.activeType = n[0].type);
    }, d = (e) => {
      let n = [];
      return e.type === "app" ? n.push({
        label: "新增角色",
        key: "add",
        code: "system-role-add",
        onClick: () => {
          g("add", e);
        }
      }) : e.roleType || (n.push({
        label: "授权",
        key: "auth",
        code: "system-role-auth",
        onClick: () => {
          g("auth", e);
        }
      }), n.push({
        label: "修改",
        key: "update",
        code: "system-role-update",
        onClick: () => {
          e.roleName = e.name, g("update", e);
        }
      }), n.push({
        label: "删除",
        key: "delete",
        code: "system-role-delete",
        onClick: () => {
          $delete(U.delete, { id: e.id }, t);
        }
      })), n;
    }, w = (e) => e.option.type === "app" ? K(G, { style: { color: m.themeColor } }) : e.option.roleType ? K(re) : K(ue), g = (e, n) => {
      e === "auth" ? _.value.open(n) : k.value.open(e, n);
    };
    return (e, n) => {
      const c = P, l = N("sh-tree"), i = V;
      return y(), T("div", me, [
        r(i, {
          show: a.loading,
          class: "w-400 mr-40"
        }, {
          default: u(() => [
            b("div", fe, [
              r(c, {
                value: a.pattern,
                "onUpdate:value": n[0] || (n[0] = (s) => a.pattern = s),
                class: "mt-10",
                placeholder: "请输入关键字"
              }, null, 8, ["value"])
            ]),
            r(l, {
              data: a.list,
              "label-field": "name",
              "key-field": "id",
              pattern: a.pattern,
              "default-expand-all": "",
              "render-prefix": w,
              suffix: d,
              "onUpdate:selectedKeys": o
            }, null, 8, ["data", "pattern"])
          ]),
          _: 1
        }, 8, ["show"]),
        b("div", he, [
          a.activeType === "role" ? (y(), L(oe, {
            key: 0,
            "active-role-id": a.activeId
          }, null, 8, ["active-role-id"])) : S("", !0)
        ]),
        r(W, {
          ref_key: "dialogRef",
          ref: k,
          onLoadList: t
        }, null, 512),
        r(H, {
          ref_key: "authRef",
          ref: _
        }, null, 512)
      ]);
    };
  }
};
export {
  Se as default
};
