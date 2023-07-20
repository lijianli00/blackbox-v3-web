import { NInput as V, NSwitch as j, NInputNumber as D, NSelect as F, NButton as B, NSpin as L, NModal as O } from "naive-ui";
import { ref as S, reactive as v, resolveComponent as m, openBlock as U, createBlock as x, withCtx as o, createElementVNode as R, createVNode as t, unref as d, createTextVNode as $, resolveDynamicComponent as P } from "vue";
import { a as C } from "./msg-c04ea6ab.mjs";
import { t as E, d as M, a as q } from "./double-right-af0e1985.mjs";
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
const z = { class: "p-20" }, A = { class: "text-right mt-20" }, G = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(K, { expose: f, emit: I }) {
    const c = {
      add: "新增",
      update: "修改",
      view: "查看"
    }, u = S(null), s = v({
      show: !1,
      loading: !1,
      type: "view"
    }), a = v((() => ({
      id: "",
      modelId: "",
      sourceId: "",
      sourceName: "",
      targetId: "",
      targetName: "",
      taskParams: "",
      interactionState: "",
      hyperlink: "",
      timing: "",
      futureTime: "",
      retry: "",
      retryTimes: 0,
      taskState: "",
      createTime: ""
    }))()), h = async (i) => {
      s.loading = !0;
      const { code: e, msg: n, data: r } = await C.getTaskStorage({ id: i });
      s.loading = !1, e === 0 ? Object.assign(a, r) : $message.error(n);
    };
    return f({
      open: (i) => {
        s.show = !0, h(i.id);
      }
    }), (i, e) => {
      const n = V, r = m("sh-form-item"), _ = j, g = D, k = F, b = m("sh-form"), w = B, N = L, T = O;
      return U(), x(T, {
        show: s.show,
        "onUpdate:show": e[14] || (e[14] = (l) => s.show = l),
        preset: "card",
        class: "w-800",
        title: `${c[s.type]}详情`
      }, {
        default: o(() => [
          R("div", z, [
            t(N, {
              show: s.loading
            }, {
              default: o(() => [
                t(b, {
                  ref_key: "formRef",
                  ref: u,
                  model: a,
                  disabled: !0
                }, {
                  default: o(() => [
                    t(r, {
                      label: "任务id",
                      path: "id",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.id,
                          "onUpdate:value": e[0] || (e[0] = (l) => a.id = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "关联模板id	",
                      path: "modelId",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.modelId,
                          "onUpdate:value": e[1] || (e[1] = (l) => a.modelId = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "发送人名称",
                      path: "sourceName",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.sourceName,
                          "onUpdate:value": e[2] || (e[2] = (l) => a.sourceName = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "接收人名称",
                      path: "targetName",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.targetName,
                          "onUpdate:value": e[3] || (e[3] = (l) => a.targetName = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "互动状态",
                      path: "interactionState",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.interactionState,
                          "onUpdate:value": e[4] || (e[4] = (l) => a.interactionState = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "详情连接",
                      path: "hyperlink",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.hyperlink,
                          "onUpdate:value": e[5] || (e[5] = (l) => a.hyperlink = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "是否定时",
                      path: "timing",
                      span: "12",
                      "label-placement": "left"
                    }, {
                      default: o(() => [
                        t(_, {
                          value: a.timing,
                          "onUpdate:value": e[6] || (e[6] = (l) => a.timing = l),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "失败是否重试",
                      path: "retry",
                      span: "12",
                      "label-placement": "left"
                    }, {
                      default: o(() => [
                        t(_, {
                          value: a.retry,
                          "onUpdate:value": e[7] || (e[7] = (l) => a.retry = l),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "指定发送时间",
                      path: "futureTime",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.futureTime,
                          "onUpdate:value": e[8] || (e[8] = (l) => a.futureTime = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "已重试次数",
                      path: "retryTimes",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(g, {
                          value: a.retryTimes,
                          "onUpdate:value": e[9] || (e[9] = (l) => a.retryTimes = l)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "任务状态",
                      path: "taskState",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(k, {
                          value: a.taskState,
                          "onUpdate:value": e[10] || (e[10] = (l) => a.taskState = l),
                          options: d(E)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "创建时间",
                      path: "createTime",
                      span: "12"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.createTime,
                          "onUpdate:value": e[11] || (e[11] = (l) => a.createTime = l),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "参数模型",
                      path: "taskParams"
                    }, {
                      default: o(() => [
                        t(n, {
                          value: a.taskParams,
                          "onUpdate:value": e[12] || (e[12] = (l) => a.taskParams = l),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                R("div", A, [
                  t(w, {
                    onClick: e[13] || (e[13] = (l) => s.show = !1)
                  }, {
                    default: o(() => [
                      $(" 关闭 ")
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
}, ue = {
  __name: "index",
  setup(K) {
    const f = S(null), I = [{ label: "关键字", key: "searchKey" }], c = () => ({
      searchKey: "",
      page: 0,
      limit: 20
    });
    let u = v(c());
    const s = () => {
      Object.assign(u, c()), i();
    }, y = S(null), a = [
      // { type: 'selection' },
      { type: "index" },
      { title: "任务id", key: "id" },
      { title: "发送人名称", key: "sourceName" },
      { title: "接收人名称", key: "targetName" },
      {
        title: "是否定时",
        key: "timing",
        render: (e) => e.timing ? "定时" : "即时"
      },
      { title: "指定发送时间", key: "futureTime" },
      {
        title: "失败是否重试",
        key: "retry",
        render: (e) => e.retry ? "是" : "否"
      },
      {
        title: "任务状态",
        key: "retry",
        render: (e) => q[e.retry]
      },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(e) {
          return [
            $textBtn({
              text: "查看",
              onClick: () => {
                h(e);
              }
            })
          ];
        }
      }
    ], h = (e) => {
      f.value.open(e);
    }, p = v({
      list: [],
      // 后端拿到数据 保存 渲染
      isBottom: !1,
      loading: !1
    }), i = async () => {
      if (p.isBottom) {
        $message.warning("没有更多数据了");
        return;
      }
      p.loading = !0, u.page++;
      const { code: e, data: n, msg: r } = await C.taskStorageList(u);
      e === 0 ? (n && (p.list.push(...n), y.value.setTableData({
        data: p.list
      })), (!n || n.length < 10) && (p.isBottom = !0)) : $message.error(r), p.loading = !1;
    };
    return i(), (e, n) => {
      const r = V, _ = m("sh-form-item"), g = m("sh-search-area"), k = m("sh-data-table"), b = B, w = L, N = m("sh-content-layout");
      return U(), x(N, null, {
        header: o(() => [
          t(g, {
            form: d(u),
            "dropdown-list": I,
            onLoadList: i,
            onReset: s
          }, {
            default: o(() => [
              t(_, {
                span: 12,
                label: "关键字",
                path: "searchKey"
              }, {
                default: o(() => [
                  t(r, {
                    value: d(u).searchKey,
                    "onUpdate:value": n[0] || (n[0] = (T) => d(u).searchKey = T)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: o(() => [
          t(w, {
            show: p.loading
          }, {
            default: o(() => [
              t(k, {
                ref_key: "tableRef",
                ref: y,
                "show-page": !1,
                columns: a
              }, null, 512),
              t(b, {
                text: "",
                type: "primary",
                class: "border border-#efeff5 flex-center h-40 cursor-pointer w-full",
                tag: "div",
                onClick: i
              }, {
                default: o(() => [
                  $(" 更多数据 "),
                  (U(), x(P(d(M)), { class: "ml-5" }))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["show"]),
          t(G, {
            ref_key: "dialogRef",
            ref: f
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
export {
  ue as default
};
