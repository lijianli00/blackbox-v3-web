import { NInput as U, NSwitch as I, NButton as B, NSpin as S, NModal as T, NGridItem as q } from "naive-ui";
import { ref as g, reactive as w, resolveComponent as i, openBlock as x, createBlock as C, withCtx as a, createElementVNode as R, createVNode as o, createTextVNode as $, unref as p, createCommentVNode as D } from "vue";
import { h as V } from "./index-c846165e.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "pinia";
import "axios";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const E = { class: "pt-20" }, G = { class: "text-right mt-20" }, M = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(j, { expose: c, emit: _ }) {
    const k = {
      add: "新增",
      update: "修改"
    }, d = g(null), e = w({
      show: !1,
      loading: !1,
      type: "add"
    }), f = () => ({
      teamName: "",
      status: 1,
      description: ""
    }), n = w(f()), h = () => {
      Object.assign(n, f());
    }, l = () => {
      var s;
      (s = d.value) == null || s.validate((t) => {
        t || y();
      });
    }, y = async () => {
      e.loading = !0;
      const { code: s, msg: t } = await V[e.type](n);
      e.loading = !1, s === 0 ? ($message.success("成功"), e.show = !1, _("loadList")) : $message.error(t);
    };
    return c({
      open: (s) => {
        e.show = !0, s && s.id ? (e.type = "update", Object.assign(n, s)) : (e.type = "add", h());
      }
    }), (s, t) => {
      const v = U, u = i("sh-form-item"), N = I, b = i("sh-form"), m = B, F = S, O = T;
      return x(), C(O, {
        show: e.show,
        "onUpdate:show": t[4] || (t[4] = (r) => e.show = r),
        preset: "card",
        class: "w-600",
        title: `${k[e.type]}团队`
      }, {
        default: a(() => [
          R("div", E, [
            o(F, {
              show: e.loading
            }, {
              default: a(() => [
                o(b, {
                  ref_key: "formRef",
                  ref: d,
                  model: n
                }, {
                  default: a(() => [
                    o(u, {
                      label: "团队名称",
                      path: "teamName",
                      rule: "required"
                    }, {
                      default: a(() => [
                        o(v, {
                          value: n.teamName,
                          "onUpdate:value": t[0] || (t[0] = (r) => n.teamName = r),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(u, {
                      label: "状态",
                      "label-placement": "left"
                    }, {
                      default: a(() => [
                        o(N, {
                          value: n.status,
                          "onUpdate:value": t[1] || (t[1] = (r) => n.status = r),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(u, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: a(() => [
                        o(v, {
                          value: n.description,
                          "onUpdate:value": t[2] || (t[2] = (r) => n.description = r),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                R("div", G, [
                  o(m, {
                    onClick: t[3] || (t[3] = (r) => e.show = !1)
                  }, {
                    default: a(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  o(m, {
                    type: "primary",
                    onClick: l
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
}, ne = {
  __name: "index",
  setup(j) {
    const c = g(null), _ = g(null), k = [
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
                h(l);
              },
              code: "system-team-update",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(V.delete, { id: l.id }, n);
              },
              code: "system-team-delete",
              type: "error"
            })
          ];
        }
      }
    ], d = () => ({
      teamName: ""
    });
    let e = w(d());
    const f = () => {
      Object.assign(e, d()), n();
    }, n = () => {
      c.value.loadList();
    }, h = (l) => {
      _.value.open(l);
    };
    return (l, y) => {
      const L = U, s = i("sh-form-item"), t = q, v = i("sh-search-fold"), u = B, N = i("sh-data-table"), b = i("sh-content-layout");
      return x(), C(b, null, {
        header: a(() => [
          o(v, {
            model: p(e),
            reset: f,
            "load-list": n
          }, {
            default: a(() => [
              o(t, null, {
                default: a(() => [
                  o(s, {
                    label: "团队名称",
                    path: "teamName"
                  }, {
                    default: a(() => [
                      o(L, {
                        value: p(e).teamName,
                        "onUpdate:value": y[0] || (y[0] = (m) => p(e).teamName = m)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        btn: a(() => [
          l.$isCode("system-team-add") ? (x(), C(u, {
            key: 0,
            type: "primary",
            onClick: h
          }, {
            default: a(() => [
              $(" 新增 ")
            ]),
            _: 1
          })) : D("", !0)
        ]),
        default: a(() => [
          o(N, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (m) => m.roleId,
            columns: k,
            api: p(V).list,
            params: p(e)
          }, null, 8, ["row-key", "api", "params"]),
          o(M, {
            ref_key: "dialogRef",
            ref: _,
            onLoadList: n
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  ne as default
};
