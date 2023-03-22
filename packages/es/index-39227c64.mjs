import { NInput as U, NButton as O, NSpin as I, NModal as R, NGridItem as A } from "naive-ui";
import { openBlock as S, createElementBlock as q, normalizeClass as L, createElementVNode as T, ref as k, reactive as j, resolveComponent as v, createBlock as F, withCtx as l, createVNode as e, unref as c, createTextVNode as E, createCommentVNode as J } from "vue";
import { m as $ } from "./msg-ca485703.mjs";
import z from "jsoneditor";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.mjs";
import "./index-c846165e.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "pinia";
import "axios";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const P = {
  editor: null,
  name: "json-editor-vue",
  internalChange: !1,
  props: {
    modelValue: Object,
    // https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options
    options: Object,
    currentMode: {
      type: String,
      default: "code"
    },
    modeList: {
      type: Array,
      default: () => ["tree", "code", "form", "text", "view"]
    },
    // en, es zh-CN, pt-BR, tr, ja, fr-FR, de, ru, ko
    language: {
      type: String,
      default: "en"
    }
  },
  data() {
    return {
      json: this.modelValue,
      expandedModes: ["tree", "view", "form"],
      // 全屏处理
      isFullScreen: !1,
      hasLogo: !0,
      showFullScreen: !1
    };
  },
  watch: {
    modelValue: {
      immediate: !0,
      deep: !0,
      handler(d) {
        this.internalChange || (this.setEditorContent(d), this.$nextTick(() => {
          this.expandAll();
        }));
      }
    }
  },
  mounted() {
    this.init();
    const d = document.querySelector(
      ".jsoneditor-menu .jsoneditor-poweredBy"
    );
    this.hasLogo = d && window.getComputedStyle(d).display !== "none", this.showFullScreen = !0;
  },
  unmounted() {
    var d;
    (d = this.editor) == null || d.destroy(), this.editor = null;
  },
  methods: {
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen, this.$nextTick(() => {
        const d = new Event("resize");
        window.dispatchEvent(d);
      });
    },
    init() {
      const { currentMode: d, modeList: r, options: y } = this, C = () => {
        const n = (t) => {
          this.json = t, this.$emit("update:modelValue", t), this.$emit("change", t), this.internalChange = !0, this.$nextTick(() => {
            this.internalChange = !1;
          });
        };
        if (!this.editor.getText()) {
          n({});
          return;
        }
        try {
          const t = this.editor.get();
          n(t);
        } catch {
        }
      }, h = () => {
        this.expandAll();
      }, s = (n, u, t) => {
        this.$emit("textSelectionChange", this.editor, n, u, t);
      }, i = (n, u) => {
        this.$emit("selectionChange", this.editor, n, u);
      }, a = (n, u, t) => {
        this.$emit("colorPicker", this.editor, n, u, t);
      }, g = ({ target: n }) => {
        this.$emit("focus", this.editor, n);
      }, x = async ({ target: n }) => {
        this.$emit("blur", this.editor, n);
      }, b = {
        ...y,
        indentation: 2,
        language: this.language,
        mode: d,
        modes: r,
        onChange: C,
        onModeChange: h,
        onTextSelectionChange: s,
        onSelectionChange: i,
        onColorPicker: a,
        onFocus: g,
        onBlur: x
      };
      this.editor = new z(
        this.$refs.jsonEditorVue,
        b,
        this.json
      );
    },
    expandAll() {
      var d, r;
      this.expandedModes.includes((d = this.editor) == null ? void 0 : d.getMode()) && ((r = this.editor) == null || r.expandAll());
    },
    setEditorContent(d) {
      var r;
      (r = this.editor) == null || r.set(d);
    }
  }
}, D = {
  ref: "jsonEditorVue",
  class: "json-editor-vue"
};
function G(d, r, y, C, h, s) {
  return S(), q("div", {
    class: L(["container", { "full-screen-container": h.isFullScreen }])
  }, [
    T("div", D, null, 512),
    T("div", {
      class: L(["full-screen", {
        show: h.showFullScreen,
        right: !h.hasLogo
      }]),
      onClick: r[0] || (r[0] = (...i) => s.toggleFullScreen && s.toggleFullScreen(...i))
    }, null, 2)
  ], 2);
}
const w = /* @__PURE__ */ K(P, [["render", G], ["__scopeId", "data-v-efe36db3"]]);
w.install = function(r) {
  r.component(w.name, w);
};
typeof window < "u" && window.Vue && window.Vue.component(w.name, w);
const H = [
  { label: "内部消息", value: "COMMON" },
  { label: "微信消息", value: "WECHAT" },
  { label: "短信消息", value: "SMS" },
  { label: "邮箱消息", value: "EMAIL" }
], W = { class: "pt-20" }, Q = { class: "text-right" }, X = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(d, { expose: r, emit: y }) {
    const C = {
      add: "新增",
      update: "修改"
    }, h = k(null), s = j({
      show: !1,
      loading: !1,
      type: "add"
    }), i = () => ({
      modelName: "",
      modelCode: "",
      modelType: "",
      modelTopic: "",
      modelContent: "",
      modelVariables: {}
      // relationId: '',
    }), a = j(i()), g = () => {
      Object.assign(a, i());
    }, x = () => {
      var t;
      (t = h.value) == null || t.validate((o) => {
        o || b();
      });
    }, b = async () => {
      s.loading = !0;
      const t = JSON.stringify(a.modelVariables), { code: o, msg: m } = await $[s.type]({
        ...a,
        modelVariables: t === "{}" ? "" : t
      });
      s.loading = !1, o === 0 ? ($message.success("成功"), s.show = !1, y("loadList")) : $message.error(m);
    }, n = async (t) => {
      s.loading = !0;
      const { code: o, data: m, msg: _ } = await $.get({ id: t });
      s.loading = !1, o === 0 ? (Object.assign(a, m), a.modelVariables = JSON.parse(m.modelVariables || "{}")) : $message.error(_);
    };
    return r({
      open: (t) => {
        s.show = !0, t && t.id ? (s.type = "update", n(t.id)) : (s.type = "add", g());
      }
    }), (t, o) => {
      const m = U, _ = v("sh-form-item"), N = v("sh-select-comma"), M = v("sh-form"), V = O, f = I, B = R;
      return S(), F(B, {
        show: s.show,
        "onUpdate:show": o[7] || (o[7] = (p) => s.show = p),
        preset: "card",
        class: "w-800",
        title: `${C[s.type]}消息模板`
      }, {
        default: l(() => [
          T("div", W, [
            e(f, {
              show: s.loading
            }, {
              default: l(() => [
                e(M, {
                  ref_key: "formRef",
                  ref: h,
                  model: a
                }, {
                  default: l(() => [
                    e(_, {
                      label: "模板名称",
                      path: "modelName",
                      rule: "required",
                      span: 12
                    }, {
                      default: l(() => [
                        e(m, {
                          value: a.modelName,
                          "onUpdate:value": o[0] || (o[0] = (p) => a.modelName = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "模板标识",
                      path: "modelCode",
                      rule: "required",
                      span: 12
                    }, {
                      default: l(() => [
                        e(m, {
                          value: a.modelCode,
                          "onUpdate:value": o[1] || (o[1] = (p) => a.modelCode = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "模板类型",
                      path: "modelType",
                      rule: "required",
                      span: 12
                    }, {
                      default: l(() => [
                        e(N, {
                          value: a.modelType,
                          "onUpdate:value": o[2] || (o[2] = (p) => a.modelType = p),
                          options: c(H)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "模板主题",
                      path: "modelTopic",
                      rule: "required"
                    }, {
                      default: l(() => [
                        e(m, {
                          value: a.modelTopic,
                          "onUpdate:value": o[3] || (o[3] = (p) => a.modelTopic = p),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "模板内容",
                      path: "modelContent",
                      rule: "required"
                    }, {
                      default: l(() => [
                        e(m, {
                          value: a.modelContent,
                          "onUpdate:value": o[4] || (o[4] = (p) => a.modelContent = p),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "变量模型",
                      path: "modelVariables"
                    }, {
                      default: l(() => [
                        e(c(w), {
                          modelValue: a.modelVariables,
                          "onUpdate:modelValue": o[5] || (o[5] = (p) => a.modelVariables = p),
                          class: "w-full"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                T("div", Q, [
                  e(V, {
                    onClick: o[6] || (o[6] = (p) => s.show = !1)
                  }, {
                    default: l(() => [
                      E(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(V, {
                    type: "primary",
                    onClick: x
                  }, {
                    default: l(() => [
                      E(" 确定 ")
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
}, fe = {
  __name: "index",
  setup(d) {
    const r = k(null), y = k(null), C = k([]), h = [
      // { type: 'selection' },
      { type: "index" },
      { title: "模板名称", key: "modelName" },
      { title: "模板标识", key: "modelCode" },
      { title: "模板类型", key: "modelType" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(n) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                b(n);
              },
              code: "system-msgModel-update",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete($.delete, { id: n.id }, g);
              },
              code: "system-msgModel-delete",
              type: "error"
            })
          ];
        }
      }
    ], s = () => ({
      modelName: "",
      modelCode: "",
      modelType: ""
    });
    let i = j(s());
    const a = () => {
      Object.assign(i, s()), g();
    }, g = () => {
      r.value.loadList();
    }, x = (n) => {
      C.value = n;
    }, b = (n) => {
      y.value.open(n);
    };
    return (n, u) => {
      const t = U, o = v("sh-form-item"), m = A, _ = v("sh-search-fold"), N = O, M = v("sh-data-table"), V = v("sh-content-layout");
      return S(), F(V, null, {
        header: l(() => [
          e(_, {
            model: c(i),
            reset: a,
            "load-list": g
          }, {
            default: l(() => [
              e(m, null, {
                default: l(() => [
                  e(o, {
                    label: "模板名称",
                    path: "modelName"
                  }, {
                    default: l(() => [
                      e(t, {
                        value: c(i).modelName,
                        "onUpdate:value": u[0] || (u[0] = (f) => c(i).modelName = f)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(o, {
                    label: "模板标识",
                    path: "modelCode"
                  }, {
                    default: l(() => [
                      e(t, {
                        value: c(i).modelCode,
                        "onUpdate:value": u[1] || (u[1] = (f) => c(i).modelCode = f)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(o, {
                    label: "模板类型",
                    path: "modelType"
                  }, {
                    default: l(() => [
                      e(t, {
                        value: c(i).modelType,
                        "onUpdate:value": u[2] || (u[2] = (f) => c(i).modelType = f)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(o, {
                    label: "关联id",
                    path: "relationId"
                  }, {
                    default: l(() => [
                      e(t, {
                        value: c(i).relationId,
                        "onUpdate:value": u[3] || (u[3] = (f) => c(i).relationId = f)
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
        btn: l(() => [
          n.$isCode("system-msgModel-add") ? (S(), F(N, {
            key: 0,
            type: "primary",
            onClick: b
          }, {
            default: l(() => [
              E(" 新增 ")
            ]),
            _: 1
          })) : J("", !0)
        ]),
        default: l(() => [
          e(M, {
            ref_key: "tableRef",
            ref: r,
            "row-key": (f) => f.roleId,
            columns: h,
            api: c($).list,
            params: c(i),
            "onUpdate:checkedRowKeys": x
          }, null, 8, ["row-key", "api", "params"]),
          e(X, {
            ref_key: "dialogRef",
            ref: y,
            onLoadList: g
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  fe as default
};
