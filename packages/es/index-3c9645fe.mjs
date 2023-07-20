import { NInput as _, NIcon as K, NButton as D, NDataTable as H, NSpin as W, NModal as G } from "naive-ui";
import { defineComponent as P, openBlock as $, createElementBlock as Q, createStaticVNode as X, resolveComponent as h, ref as V, reactive as S, createBlock as O, withCtx as n, createElementVNode as q, createVNode as l, unref as a, createTextVNode as M, h as v, createCommentVNode as Y } from "vue";
import { m as U } from "./msg-c04ea6ab.mjs";
import "./index-2db33f86.mjs";
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
const Z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, ee = /* @__PURE__ */ X('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 112l80-80l80 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M255.98 32l.02 448"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 400l80 80l80-80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 176l80 80l-80 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 176l-80 80l80 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 256h448"></path>', 6), te = [ee], le = P({
  name: "Move",
  render: function(g, C) {
    return $(), Q("svg", Z, te);
  }
}), oe = [
  { label: "内部消息", value: "COMMON" },
  { label: "微信消息", value: "WECHAT" },
  { label: "短信消息", value: "SMS" },
  { label: "邮箱消息", value: "EMAIL" }
], ae = { class: "pt-20" }, ne = { class: "text-right mt-20" }, re = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(E, { expose: g, emit: C }) {
    const m = h("ShFormItem"), I = {
      add: "新增",
      update: "修改"
    }, x = V(null), r = S({
      show: !1,
      loading: !1,
      type: "add"
    }), d = () => ({
      modelName: "",
      modelCode: "",
      modelType: "",
      modelTopic: "",
      modelContent: "",
      modelVariables: {},
      modelVariablesList: []
      // relationId: '',
    }), t = S(d()), b = () => {
      Object.assign(t, d());
    }, j = () => {
      var o;
      (o = x.value) == null || o.validate((e) => {
        e || L();
      });
    }, L = async () => {
      r.loading = !0, t.modelVariables = {}, t.modelVariablesList.forEach((f) => {
        t.modelVariables[f.varName] = f.varValue;
      });
      const o = JSON.stringify(t.modelVariables), { code: e, msg: i } = await U[r.type]({
        ...t,
        modelVariables: o === "{}" ? "" : o
      });
      r.loading = !1, e === 0 ? ($message.success("成功"), r.show = !1, C("loadList")) : $message.error(i);
    }, p = async (o) => {
      r.loading = !0;
      const { code: e, data: i, msg: f } = await U.get({ id: o });
      r.loading = !1, e === 0 ? (Object.assign(t, i), t.modelVariables = JSON.parse(i.modelVariables || "{}"), t.modelVariablesList = [], Object.keys(t.modelVariables).forEach((T) => {
        t.modelVariablesList.push({
          varName: T,
          varValue: t.modelVariables[T]
        });
      })) : $message.error(f);
    }, c = (o) => {
      r.show = !0, N.value = null, o && o.id ? (r.type = "update", p(o.id)) : (r.type = "add", b());
    }, R = [
      {
        title: "变量名（可拖拽至模板内容中）",
        key: "varName",
        render(o, e) {
          return v(
            m,
            {
              path: `modelVariablesList.${e}.varName`,
              rule: "required"
            },
            {
              default: () => v(
                "div",
                {
                  draggable: !0,
                  class: "cursor-move flex flex-center",
                  onDragstart: (i) => B(i, t.modelVariablesList[e].varName)
                },
                [
                  v(K, { size: 20, class: "mr-14" }, () => v(le)),
                  v(_, {
                    value: o.varName,
                    onUpdateValue(i) {
                      t.modelVariablesList[e].varName = i;
                    }
                  })
                ]
              )
            }
          );
        }
      },
      {
        title: "变量值",
        key: "varValue",
        render(o, e) {
          return v(
            m,
            {
              path: `modelVariablesList.${e}.varValue`,
              rule: "required"
            },
            () => v(_, {
              value: o.varValue,
              onUpdateValue(i) {
                t.modelVariablesList[e].varValue = i;
              }
            })
          );
        }
      },
      {
        title: "操作",
        key: "handle",
        width: 120,
        render(o, e) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                t.modelVariablesList.splice(e, 1);
              }
            })
          ];
        }
      }
    ], k = () => ({
      varValue: "",
      varName: ""
    }), y = (o = k()) => {
      t.modelVariablesList.push({ ...o });
    }, w = V(""), N = V(null), B = (o, e = "") => {
      w.value = "${" + e + "}";
    }, u = () => {
      let o = N.value, e = t.modelContent;
      typeof o == "number" ? t.modelContent = e.slice(0, o) + w.value + e.slice(o) : t.modelContent += w.value;
    }, F = (o) => {
      N.value = o.srcElement.selectionStart;
    };
    return g({
      open: c
    }), (o, e) => {
      const i = h("sh-select-comma"), f = D, T = H, z = h("sh-form"), A = W, J = G;
      return $(), O(J, {
        show: r.show,
        "onUpdate:show": e[8] || (e[8] = (s) => r.show = s),
        preset: "card",
        class: "w-800",
        title: `${I[r.type]}消息模板`
      }, {
        default: n(() => [
          q("div", ae, [
            l(A, {
              show: r.loading
            }, {
              default: n(() => [
                l(z, {
                  ref_key: "formRef",
                  ref: x,
                  model: t
                }, {
                  default: n(() => [
                    l(a(m), {
                      label: "模板名称",
                      path: "modelName",
                      rule: "required",
                      span: 12
                    }, {
                      default: n(() => [
                        l(a(_), {
                          value: t.modelName,
                          "onUpdate:value": e[0] || (e[0] = (s) => t.modelName = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(a(m), {
                      label: "模板标识",
                      path: "modelCode",
                      rule: "required",
                      span: 12
                    }, {
                      default: n(() => [
                        l(a(_), {
                          value: t.modelCode,
                          "onUpdate:value": e[1] || (e[1] = (s) => t.modelCode = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(a(m), {
                      label: "模板类型",
                      path: "modelType",
                      rule: "required",
                      span: 12
                    }, {
                      default: n(() => [
                        l(i, {
                          value: t.modelType,
                          "onUpdate:value": e[2] || (e[2] = (s) => t.modelType = s),
                          options: a(oe)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    l(a(m), {
                      label: "模板主题",
                      path: "modelTopic",
                      rule: "required"
                    }, {
                      default: n(() => [
                        l(a(_), {
                          value: t.modelTopic,
                          "onUpdate:value": e[3] || (e[3] = (s) => t.modelTopic = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(a(m), {
                      label: "模板内容",
                      path: "modelContent",
                      rule: "required"
                    }, {
                      default: n(() => [
                        l(a(_), {
                          value: t.modelContent,
                          "onUpdate:value": e[4] || (e[4] = (s) => t.modelContent = s),
                          type: "textarea",
                          placeholder: "请输入",
                          onDragover: e[5] || (e[5] = (s) => s.preventDefault()),
                          onDrop: u,
                          onBlur: F
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    l(a(m), {
                      label: "变量模型:",
                      path: "",
                      span: 24
                    }),
                    l(a(m), {
                      label: "",
                      path: "",
                      span: 24
                    }, {
                      default: n(() => [
                        l(f, {
                          class: "ml-10 -mt-45",
                          type: "primary",
                          size: "small",
                          onClick: e[6] || (e[6] = (s) => y())
                        }, {
                          default: n(() => [
                            M(" 新增行 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    l(T, {
                      ref: "tableRef",
                      class: "-mt-25",
                      "max-height": 500,
                      columns: R,
                      data: t.modelVariablesList
                    }, null, 8, ["data"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                q("div", ne, [
                  l(f, {
                    onClick: e[7] || (e[7] = (s) => r.show = !1)
                  }, {
                    default: n(() => [
                      M(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  l(f, {
                    type: "primary",
                    onClick: j
                  }, {
                    default: n(() => [
                      M(" 确定 ")
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
}, ge = {
  __name: "index",
  setup(E) {
    const g = V(null), C = V(null), m = V([]), I = [
      { label: "模板名称", key: "modelName" },
      { label: "模板标识", key: "modelCode" },
      { label: "模板类型", key: "modelType" },
      { label: "关联id", key: "relationId" }
    ], x = [
      // { type: 'selection' },
      { type: "index" },
      { title: "模板名称", key: "modelName" },
      { title: "模板标识", key: "modelCode" },
      { title: "模板类型", key: "modelType" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(p) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                L(p);
              },
              code: "system-msgModel-update",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(U.delete, { id: p.id }, b);
              },
              code: "system-msgModel-delete",
              type: "error"
            })
          ];
        }
      }
    ], r = () => ({
      modelName: "",
      modelCode: "",
      modelType: "",
      relationId: ""
    });
    let d = S(r());
    const t = () => {
      Object.assign(d, r()), b();
    }, b = () => {
      g.value.loadList();
    }, j = (p) => {
      m.value = p;
    }, L = (p) => {
      C.value.open(p);
    };
    return (p, c) => {
      const R = D, k = _, y = h("sh-form-item"), w = h("sh-search-area"), N = h("sh-data-table"), B = h("sh-content-layout");
      return $(), O(B, null, {
        header: n(() => [
          l(w, {
            form: a(d),
            "dropdown-list": I,
            onLoadList: b,
            onReset: t
          }, {
            left: n(() => [
              p.$isCode("system-msgModel-add") ? ($(), O(R, {
                key: 0,
                type: "primary",
                onClick: L
              }, {
                default: n(() => [
                  M(" 新增 ")
                ]),
                _: 1
              })) : Y("", !0)
            ]),
            default: n(() => [
              l(y, {
                span: 12,
                label: "模板名称",
                path: "modelName"
              }, {
                default: n(() => [
                  l(k, {
                    value: a(d).modelName,
                    "onUpdate:value": c[0] || (c[0] = (u) => a(d).modelName = u)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              l(y, {
                span: 12,
                label: "模板标识",
                path: "modelCode"
              }, {
                default: n(() => [
                  l(k, {
                    value: a(d).modelCode,
                    "onUpdate:value": c[1] || (c[1] = (u) => a(d).modelCode = u)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              l(y, {
                span: 12,
                label: "模板类型",
                path: "modelType"
              }, {
                default: n(() => [
                  l(k, {
                    value: a(d).modelType,
                    "onUpdate:value": c[2] || (c[2] = (u) => a(d).modelType = u)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              l(y, {
                span: 12,
                label: "关联id",
                path: "relationId"
              }, {
                default: n(() => [
                  l(k, {
                    value: a(d).relationId,
                    "onUpdate:value": c[3] || (c[3] = (u) => a(d).relationId = u)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: n(() => [
          l(N, {
            ref_key: "tableRef",
            ref: g,
            "row-key": (u) => u.roleId,
            columns: x,
            api: a(U).list,
            params: a(d),
            "onUpdate:checkedRowKeys": j
          }, null, 8, ["row-key", "api", "params"]),
          l(re, {
            ref_key: "dialogRef",
            ref: C,
            onLoadList: b
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  ge as default
};
