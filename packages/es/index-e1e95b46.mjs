import { NInput as O, NSwitch as S, NButton as V, NSpin as I, NModal as T } from "naive-ui";
import { ref as w, reactive as b, resolveComponent as p, openBlock as N, createBlock as g, withCtx as a, createElementVNode as $, createVNode as o, createTextVNode as x, unref as k, createCommentVNode as q } from "vue";
import { k as C } from "./index-de809ebd.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const D = { class: "pt-20" }, E = { class: "text-right mt-20" }, M = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(R, { expose: c, emit: u }) {
    const h = {
      add: "新增",
      update: "修改"
    }, _ = w(null), t = b({
      show: !1,
      loading: !1,
      type: "add"
    }), i = () => ({
      teamName: "",
      status: 1,
      description: ""
    }), n = b(i()), m = () => {
      Object.assign(n, i());
    }, f = () => {
      var s;
      (s = _.value) == null || s.validate((e) => {
        e || l();
      });
    }, l = async () => {
      t.loading = !0;
      const { code: s, msg: e } = await C[t.type](n);
      t.loading = !1, s === 0 ? ($message.success("成功"), t.show = !1, u("loadList")) : $message.error(e);
    };
    return c({
      open: (s) => {
        t.show = !0, s && s.id ? (t.type = "update", Object.assign(n, s)) : (t.type = "add", m());
      }
    }), (s, e) => {
      const y = O, d = p("sh-form-item"), v = S, U = p("sh-form"), L = V, j = I, F = T;
      return N(), g(F, {
        show: t.show,
        "onUpdate:show": e[4] || (e[4] = (r) => t.show = r),
        preset: "card",
        class: "w-600",
        title: `${h[t.type]}团队`
      }, {
        default: a(() => [
          $("div", D, [
            o(j, {
              show: t.loading
            }, {
              default: a(() => [
                o(U, {
                  ref_key: "formRef",
                  ref: _,
                  model: n
                }, {
                  default: a(() => [
                    o(d, {
                      label: "团队名称",
                      path: "teamName",
                      rule: "required"
                    }, {
                      default: a(() => [
                        o(y, {
                          value: n.teamName,
                          "onUpdate:value": e[0] || (e[0] = (r) => n.teamName = r),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(d, {
                      label: "状态",
                      "label-placement": "left"
                    }, {
                      default: a(() => [
                        o(v, {
                          value: n.status,
                          "onUpdate:value": e[1] || (e[1] = (r) => n.status = r),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(d, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: a(() => [
                        o(y, {
                          value: n.description,
                          "onUpdate:value": e[2] || (e[2] = (r) => n.description = r),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                $("div", E, [
                  o(L, {
                    onClick: e[3] || (e[3] = (r) => t.show = !1)
                  }, {
                    default: a(() => [
                      x(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  o(L, {
                    type: "primary",
                    onClick: f
                  }, {
                    default: a(() => [
                      x(" 确定 ")
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
}, oe = {
  __name: "index",
  setup(R) {
    const c = w(null), u = w(null), h = [{ label: "团队名称", key: "teamName" }], _ = [
      { type: "index" },
      { title: "团队名称", key: "teamName" },
      { title: "说明", key: "description" },
      {
        title: "状态",
        key: "status",
        render(l) {
          return l.status ? "正常" : "冻结";
        }
      },
      {
        title: "操作",
        key: "handle",
        render(l) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                f(l);
              },
              code: "system-team-update",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(C.delete, { id: l.id }, m);
              },
              code: "system-team-delete",
              type: "error"
            })
          ];
        }
      }
    ], t = () => ({
      teamName: ""
    });
    let i = b(t());
    const n = () => {
      Object.assign(i, t()), m();
    }, m = () => {
      c.value.loadList();
    }, f = (l) => {
      u.value.open(l);
    };
    return (l, B) => {
      const s = V, e = p("sh-search-area"), y = p("sh-data-table"), d = p("sh-content-layout");
      return N(), g(d, null, {
        header: a(() => [
          o(e, {
            form: k(i),
            "dropdown-list": h,
            onLoadList: m,
            onReset: n
          }, {
            left: a(() => [
              l.$isCode("system-team-add") ? (N(), g(s, {
                key: 0,
                type: "primary",
                onClick: f
              }, {
                default: a(() => [
                  x(" 新增 ")
                ]),
                _: 1
              })) : q("", !0)
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: a(() => [
          o(y, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (v) => v.roleId,
            columns: _,
            api: k(C).list,
            params: k(i)
          }, null, 8, ["row-key", "api", "params"]),
          o(M, {
            ref_key: "dialogRef",
            ref: u,
            onLoadList: m
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  oe as default
};
