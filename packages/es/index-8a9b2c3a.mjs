import { NInput as I, NSwitch as K, NInputNumber as O, NSelect as P, NButton as V, NSpin as B, NModal as D, NGridItem as L } from "naive-ui";
import { ref as U, reactive as v, resolveComponent as p, openBlock as $, createBlock as R, withCtx as n, createElementVNode as S, createVNode as t, unref as _, createTextVNode as C } from "vue";
import { a as j } from "./msg-ca485703.mjs";
import { t as E, a as G } from "./taskState-8c59aa09.mjs";
import "./index-c846165e.mjs";
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
const M = { class: "p-20" }, q = { class: "text-right mt-20" }, z = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(F, { expose: f, emit: h }) {
    const m = {
      add: "新增",
      update: "修改",
      view: "查看"
    }, y = U(null), i = v({
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
    }))()), u = async (o) => {
      i.loading = !0;
      const { code: e, msg: s, data: r } = await j.get({ id: o });
      i.loading = !1, e === 0 ? Object.assign(a, r) : $message.error(s);
    };
    return f({
      open: (o) => {
        i.show = !0, u(o.id);
      }
    }), (o, e) => {
      const s = I, r = p("sh-form-item"), c = K, g = O, k = P, b = p("sh-form"), w = V, N = B, T = D;
      return $(), R(T, {
        show: i.show,
        "onUpdate:show": e[14] || (e[14] = (l) => i.show = l),
        preset: "card",
        class: "w-800",
        title: `${m[i.type]}详情`
      }, {
        default: n(() => [
          S("div", M, [
            t(N, {
              show: i.loading
            }, {
              default: n(() => [
                t(b, {
                  ref_key: "formRef",
                  ref: y,
                  model: a,
                  disabled: !0
                }, {
                  default: n(() => [
                    t(r, {
                      label: "任务id",
                      path: "id",
                      span: "12"
                    }, {
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(c, {
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
                      default: n(() => [
                        t(c, {
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
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
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
                      default: n(() => [
                        t(k, {
                          value: a.taskState,
                          "onUpdate:value": e[10] || (e[10] = (l) => a.taskState = l),
                          options: _(E)
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    }),
                    t(r, {
                      label: "创建时间",
                      path: "createTime",
                      span: "12"
                    }, {
                      default: n(() => [
                        t(s, {
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
                      default: n(() => [
                        t(s, {
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
                S("div", q, [
                  t(w, {
                    onClick: e[13] || (e[13] = (l) => i.show = !1)
                  }, {
                    default: n(() => [
                      C(" 关闭 ")
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
}, ie = {
  __name: "index",
  setup(F) {
    const f = U(null), h = () => ({
      searchKey: "",
      page: 0,
      limit: 20
    });
    let m = v(h());
    const y = () => {
      Object.assign(m, h()), d();
    }, i = U(null), x = [
      // { type: 'selection' },
      { type: "index" },
      { title: "任务id", key: "id" },
      { title: "发送人名称", key: "sourceName" },
      { title: "接收人名称", key: "targetName" },
      {
        title: "是否定时",
        key: "timing",
        render: (o) => o.timing ? "定时" : "即时"
      },
      { title: "指定发送时间", key: "futureTime" },
      {
        title: "失败是否重试",
        key: "retry",
        render: (o) => o.retry ? "是" : "否"
      },
      {
        title: "任务状态",
        key: "retry",
        render: (o) => G[o.retry]
      },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(o) {
          return [
            $textBtn({
              text: "查看",
              onClick: () => {
                a(o);
              }
            })
          ];
        }
      }
    ], a = (o) => {
      f.value.open(o);
    }, u = v({
      list: [],
      // 后端拿到数据 保存 渲染
      isBottom: !1,
      loading: !1
    }), d = async () => {
      if (u.isBottom) {
        $message.warning("没有更多数据了");
        return;
      }
      u.loading = !0, m.page++;
      const { code: o, data: e, msg: s } = await j.list(m);
      o === 0 ? (e && (u.list.push(...e), i.value.setTableData({
        data: u.list
      })), (!e || e.length < 10) && (u.isBottom = !0)) : $message.error(s), u.loading = !1;
    };
    return d(), (o, e) => {
      const s = I, r = p("sh-form-item"), c = L, g = p("sh-search-fold"), k = p("sh-data-table"), b = p("sh-icon"), w = V, N = B, T = p("sh-content-layout");
      return $(), R(T, null, {
        header: n(() => [
          t(g, {
            ref: "search",
            model: _(m),
            reset: y,
            "load-list": d
          }, {
            default: n(() => [
              t(c, null, {
                default: n(() => [
                  t(r, {
                    label: "关键字",
                    path: "searchKey"
                  }, {
                    default: n(() => [
                      t(s, {
                        value: _(m).searchKey,
                        "onUpdate:value": e[0] || (e[0] = (l) => _(m).searchKey = l)
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
        default: n(() => [
          t(N, {
            show: u.loading
          }, {
            default: n(() => [
              t(k, {
                ref_key: "tableRef",
                ref: i,
                "show-page": !1,
                columns: x
              }, null, 512),
              t(w, {
                text: "",
                type: "primary",
                class: "border border-#efeff5 flex-center h-40 cursor-pointer w-full",
                tag: "div",
                onClick: d
              }, {
                default: n(() => [
                  C(" 更多数据 "),
                  t(b, {
                    name: "double-right",
                    class: "ml-5"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["show"]),
          t(z, {
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
  ie as default
};
