import { NInput as B, NInputNumber as Q, NSwitch as X, NButton as E, NSpin as T, NModal as H, NTreeSelect as Y, NRadio as ee, NSpace as te, NRadioGroup as oe, NSelect as ae } from "naive-ui";
import { ref as P, reactive as U, resolveComponent as L, openBlock as C, createBlock as F, withCtx as o, createElementVNode as x, createVNode as e, createTextVNode as I, computed as ne, unref as K, createElementBlock as S, Fragment as le, createCommentVNode as M, nextTick as Z, h as q } from "vue";
import { l as O, g as R, o as se, c as de } from "./index-de809ebd.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import { c as re } from "./company-0dfd2ecd.mjs";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const ie = { class: "p-20" }, pe = { class: "text-right mt-20" }, ue = {
  __name: "FormDialog",
  props: {
    teamId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(g, { expose: N, emit: i }) {
    const h = g, w = {
      add: "新增",
      update: "修改"
    }, y = P(null), s = U({
      show: !1,
      loading: !1,
      type: "add"
    }), n = (p) => ({
      teamId: h.teamId,
      parentId: p,
      deptName: "",
      sortNum: 0,
      status: 1,
      description: ""
    }), d = U(n()), a = (p) => {
      Object.assign(d, n(p));
    }, _ = () => {
      var p;
      (p = y.value) == null || p.validate((l) => {
        l || r();
      });
    }, r = async () => {
      s.loading = !0;
      const { code: p, msg: l } = await O[s.type](d);
      s.loading = !1, p === 0 ? ($message.success("成功"), s.show = !1, i("loadList")) : $message.error(l);
    }, f = async (p) => {
      s.loading = !0;
      const { code: l, msg: u, data: t } = await O.get({ id: p });
      s.loading = !1, l === 0 ? Object.assign(d, t) : $message.error(u);
    };
    return N({
      open: (p, l) => {
        s.show = !0, s.type = p, p === "update" ? f(l.id) : (s.type = "add", a(l.type === "team" ? "-1" : l.id));
      }
    }), (p, l) => {
      const u = B, t = L("sh-form-item"), k = Q, m = X, V = L("sh-form"), $ = E, D = T, j = H;
      return C(), F(j, {
        show: s.show,
        "onUpdate:show": l[5] || (l[5] = (v) => s.show = v),
        preset: "card",
        class: "w-600",
        title: `${w[s.type]}资源`
      }, {
        default: o(() => [
          x("div", ie, [
            e(D, {
              show: s.loading
            }, {
              default: o(() => [
                e(V, {
                  ref_key: "formRef",
                  ref: y,
                  model: d
                }, {
                  default: o(() => [
                    e(t, {
                      label: "部门名称",
                      path: "deptName",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(u, {
                          value: d.deptName,
                          "onUpdate:value": l[0] || (l[0] = (v) => d.deptName = v),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(t, {
                      label: "排序",
                      path: "sortNum",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(k, {
                          value: d.sortNum,
                          "onUpdate:value": l[1] || (l[1] = (v) => d.sortNum = v),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(t, {
                      label: "状态",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(m, {
                          value: d.status,
                          "onUpdate:value": l[2] || (l[2] = (v) => d.status = v),
                          "checked-value": 1,
                          "unchecked-value": 0
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(t, {
                      label: "说明",
                      path: "description"
                    }, {
                      default: o(() => [
                        e(u, {
                          value: d.description,
                          "onUpdate:value": l[3] || (l[3] = (v) => d.description = v),
                          type: "textarea",
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                x("div", pe, [
                  e($, {
                    onClick: l[4] || (l[4] = (v) => s.show = !1)
                  }, {
                    default: o(() => [
                      I(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e($, {
                    type: "primary",
                    onClick: _
                  }, {
                    default: o(() => [
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
}, ce = { class: "p-20" }, me = { class: "text-right mt-20" }, fe = {
  __name: "PersonFormDialog",
  props: {
    activeDept: {
      type: Object,
      default: () => ({})
    },
    deptTree: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["loadList"],
  setup(g, { expose: N, emit: i }) {
    const h = g, w = ne(() => h.deptTree.list && h.deptTree.list.length ? h.deptTree.list[0].children : []), y = {
      add: "新增",
      update: "修改"
    }, s = P(null), n = U({
      show: !1,
      loading: !1,
      type: "add",
      roleList: [],
      imgCategorize: {
        imgDir: "headImg",
        //文件归类
        claritys: ["LOW"]
        //图片清晰度
      }
    }), d = ({ id: u = "", name: t = "" }) => ({
      deptId: u,
      deptName: t,
      name: "",
      phone: "",
      loginName: "",
      password: "",
      duty: "",
      entryTime: "",
      gender: 1,
      roleIds: [],
      headPic: []
    }), a = U(d({})), _ = () => {
      Object.assign(a, d(h.activeDept.type === "dept" ? h.activeDept : {}));
    }, r = () => {
      var u;
      (u = s.value) == null || u.validate((t) => {
        t || f();
      });
    }, f = async () => {
      n.loading = !0;
      const u = n.type === "add" ? R.addUserAndPerson : R.update;
      let t = { ...a };
      t.headPic = t.headPic.length ? t.headPic.join(",") : "";
      const { code: k, msg: m } = await u(t);
      n.loading = !1, k === 0 ? ($message.success("成功"), n.show = !1, i("loadList")) : $message.error(m);
    };
    (async () => {
      const { code: u, msg: t, data: k } = await se.findPersonRoleByAppId();
      u === 0 ? n.roleList = k || [] : $message.error(t);
    })();
    const p = async (u) => {
      n.loading = !0;
      const { code: t, msg: k, data: m } = await R.get({ id: u });
      n.loading = !1, t === 0 ? (m.headPic = m.headPic ? m.headPic.split(",") : [], Object.assign(a, m)) : $message.error(k);
    };
    return N({
      open: (u) => {
        n.show = !0, u && u.id ? (n.type = "update", p(u.id)) : (n.type = "add", _());
      }
    }), (u, t) => {
      const k = L("sh-upload-image"), m = L("sh-form-item"), V = Y, $ = B, D = ee, j = te, v = oe, A = ae, G = L("sh-form"), z = E, W = T, J = H;
      return C(), F(J, {
        show: n.show,
        "onUpdate:show": t[10] || (t[10] = (c) => n.show = c),
        preset: "card",
        class: "w-800",
        title: `${y[n.type]}成员`
      }, {
        default: o(() => [
          x("div", ce, [
            e(W, {
              show: n.loading
            }, {
              default: o(() => [
                e(G, {
                  ref_key: "formRef",
                  ref: s,
                  model: a,
                  "label-width": "80"
                }, {
                  default: o(() => [
                    e(m, {
                      label: "头像",
                      path: "headPic",
                      span: 12
                    }, {
                      default: o(() => [
                        e(k, {
                          value: a.headPic,
                          "onUpdate:value": t[0] || (t[0] = (c) => a.headPic = c),
                          params: n.imgCategorize
                        }, null, 8, ["value", "params"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "部门",
                      path: "deptId",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(V, {
                          value: a.deptId,
                          "onUpdate:value": t[1] || (t[1] = (c) => a.deptId = c),
                          "label-field": "name",
                          "key-field": "id",
                          options: K(w),
                          "default-expanded-keys": g.deptTree.defaultExpandedKeys
                        }, null, 8, ["value", "options", "default-expanded-keys"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "姓名",
                      path: "name",
                      rule: "required",
                      span: 12
                    }, {
                      default: o(() => [
                        e($, {
                          value: a.name,
                          "onUpdate:value": t[2] || (t[2] = (c) => a.name = c),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "手机号",
                      path: "phone",
                      rule: "required||phone",
                      span: 12
                    }, {
                      default: o(() => [
                        e($, {
                          value: a.phone,
                          "onUpdate:value": t[3] || (t[3] = (c) => a.phone = c),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    n.type === "add" ? (C(), S(le, { key: 0 }, [
                      e(m, {
                        label: "账号",
                        path: "loginName",
                        rule: "required||account",
                        span: 12
                      }, {
                        default: o(() => [
                          e($, {
                            value: a.loginName,
                            "onUpdate:value": t[4] || (t[4] = (c) => a.loginName = c),
                            placeholder: "必须包含数字、大小写字母,且8-32位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      e(m, {
                        label: "	密码",
                        path: "password",
                        rule: "required||password",
                        span: 12
                      }, {
                        default: o(() => [
                          e($, {
                            value: a.password,
                            "onUpdate:value": t[5] || (t[5] = (c) => a.password = c),
                            type: "password",
                            "show-password-on": "mousedown",
                            placeholder: "包含数字、大小写字母三种,且8-30位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ], 64)) : M("", !0),
                    e(m, {
                      label: "职务",
                      path: "duty",
                      span: 12
                    }, {
                      default: o(() => [
                        e($, {
                          value: a.duty,
                          "onUpdate:value": t[6] || (t[6] = (c) => a.duty = c),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "性别",
                      path: "gender",
                      span: 12
                    }, {
                      default: o(() => [
                        e(v, {
                          value: a.gender,
                          "onUpdate:value": t[7] || (t[7] = (c) => a.gender = c)
                        }, {
                          default: o(() => [
                            e(j, null, {
                              default: o(() => [
                                e(D, { value: 1 }, {
                                  default: o(() => [
                                    I(" 男 ")
                                  ]),
                                  _: 1
                                }),
                                e(D, { value: 0 }, {
                                  default: o(() => [
                                    I(" 女 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "角色",
                      path: "roleIds"
                    }, {
                      default: o(() => [
                        e(A, {
                          value: a.roleIds,
                          "onUpdate:value": t[8] || (t[8] = (c) => a.roleIds = c),
                          multiple: "",
                          options: n.roleList,
                          "label-field": "roleName",
                          "value-field": "id"
                        }, null, 8, ["value", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                x("div", me, [
                  e(z, {
                    onClick: t[9] || (t[9] = (c) => n.show = !1)
                  }, {
                    default: o(() => [
                      I(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(z, {
                    type: "primary",
                    onClick: r
                  }, {
                    default: o(() => [
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
}, _e = { class: "mb-20" }, he = {
  __name: "PersonList",
  props: {
    activeDept: {
      type: Object,
      default: () => ({})
    },
    deptTree: {
      type: Object,
      default: () => ({})
    }
  },
  setup(g, { expose: N }) {
    const i = g, h = [
      { type: "selection" },
      { type: "index" },
      { title: "名字", key: "name", resizable: !0 },
      { title: "部门", key: "deptName", resizable: !0 },
      { title: "职务", key: "duty", resizable: !0 },
      { title: "手机号", key: "phone", resizable: !0 },
      {
        title: "操作",
        key: "handle",
        render(_) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                a(_);
              },
              code: "system-dept-personUpdate",
              divider: !0
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(R.quit, { personIds: [_.id] }, d);
              },
              code: "system-dept-personDelete",
              type: "error"
            })
          ];
        }
      }
    ], w = P(null), y = P(null), s = U({
      list: [],
      loading: !1
    }), n = U({
      name: "",
      deptName: "",
      deptId: "",
      phone: "",
      gender: ""
    }), d = () => {
      n.deptId = i.activeDept.type === "team" ? "" : i.activeDept.id, Z(() => {
        y.value.loadList();
      });
    }, a = (_) => {
      w.value.open(_);
    };
    return N({
      loadList: d
    }), (_, r) => {
      const f = E, b = L("sh-data-table"), p = T;
      return C(), S("div", null, [
        x("div", _e, [
          _.$isCode("system-dept-personAdd") ? (C(), F(f, {
            key: 0,
            type: "primary",
            onClick: a
          }, {
            default: o(() => [
              I(" 新增成员 ")
            ]),
            _: 1
          })) : M("", !0)
        ]),
        e(p, {
          show: s.loading
        }, {
          default: o(() => [
            e(b, {
              ref_key: "tableRef",
              ref: y,
              "row-key": (l) => l.id,
              params: n,
              columns: h,
              api: K(R).listMainDeptPerson
            }, null, 8, ["row-key", "params", "api"])
          ]),
          _: 1
        }, 8, ["show"]),
        e(fe, {
          ref_key: "dialogRef",
          ref: w,
          "active-dept": g.activeDept,
          "dept-tree": g.deptTree,
          onLoadList: d
        }, null, 8, ["active-dept", "dept-tree"])
      ]);
    };
  }
}, ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, ye = /* @__PURE__ */ x("path", {
  fill: "currentColor",
  stroke: "#979daf",
  "stroke-width": ".4",
  d: "M18.228 12.955h-1.287V10a.732.732 0 0 0-.772-.682h-5.4V7.045h1.287a.732.732 0 0 0 .772-.682V3.182a.732.732 0 0 0-.772-.682h-3.6a.732.732 0 0 0-.772.682v3.182a.732.732 0 0 0 .772.682h1.287v2.273h-5.4a.732.732 0 0 0-.772.682v2.955H2.272a.732.732 0 0 0-.772.682v3.182a.732.732 0 0 0 .772.682h3.6a.732.732 0 0 0 .772-.682v-3.184a.732.732 0 0 0-.772-.682H4.588v-2.727h5.147v2.727H8.449a.732.732 0 0 0-.772.682v3.182a.732.732 0 0 0 .772.682h3.6a.732.732 0 0 0 .772-.682v-3.182a.732.732 0 0 0-.772-.682h-1.284v-2.727h5.147v2.727h-1.287a.732.732 0 0 0-.772.682v3.182a.732.732 0 0 0 .772.682h3.6a.732.732 0 0 0 .772-.682v-3.182a.732.732 0 0 0-.769-.681ZM8.706 3.41h3.088v2.727H8.706ZM5.618 13.864v2.727H2.529v-2.727Zm6.176 2.727H8.706v-2.727h3.088Zm6.176 0h-3.088v-2.727h3.088Z"
}, null, -1), ge = /* @__PURE__ */ x("path", {
  fill: "none",
  d: "M0 .001h20v20H0z"
}, null, -1), be = [
  ye,
  ge
];
function we(g, N) {
  return C(), S("svg", ve, be);
}
const ke = { render: we }, xe = { class: "h-790 flex" }, Ne = { class: "w-400" }, $e = { class: "pl-40 border-l border-#E1E7F8 flex-1" }, ze = {
  __name: "index",
  setup(g) {
    const N = de(), i = U({
      list: [],
      defaultExpandedKeys: [],
      loading: !1,
      teamId: "",
      activeOption: {}
    }), h = P(null), w = P(null), y = async () => {
      i.loading = !0;
      const { code: r, msg: f, data: b } = await O.deptTree({});
      i.loading = !1, r === 0 ? (i.list = b, b.length && (i.defaultExpandedKeys = [...i.defaultExpandedKeys, b[0].id], i.teamId = b[0].id)) : $message.error(f);
    };
    y();
    const s = (r) => {
      let f = [
        {
          label: "新增",
          key: "add",
          code: "system-dept-add",
          onClick: () => {
            _("add", r);
          }
        }
      ];
      return r.type !== "team" && (f.push({
        label: "修改",
        key: "update",
        code: "system-dept-update",
        onClick: () => {
          _("update", r);
        }
      }), f.push({
        label: "删除",
        key: "delete",
        code: "system-dept-delete",
        onClick: () => {
          $delete(O.delete, { id: r.id }, y);
        }
      })), f;
    }, n = (r) => r.option.type === "team" ? q(re, { style: { color: N.themeColor } }) : q(ke), d = ({ option: r }) => q(
      "span",
      {
        style: { color: r.type === "team" ? "#202837" : "#515E78" }
      },
      r.name
    ), a = (r, f) => {
      r[0] && (i.activeOption = f[0], Z(() => {
        w.value.loadList();
      }));
    }, _ = (r, f) => {
      h.value.open(r, f);
    };
    return (r, f) => {
      const b = L("sh-tree"), p = T;
      return C(), S("div", xe, [
        x("div", Ne, [
          e(p, {
            show: i.loading
          }, {
            default: o(() => [
              e(b, {
                data: i.list,
                "label-field": "name",
                "key-field": "id",
                "default-expanded-keys": i.defaultExpandedKeys,
                suffix: s,
                "render-prefix": n,
                "render-label": d,
                "onUpdate:selectedKeys": a
              }, null, 8, ["data", "default-expanded-keys"])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        x("div", $e, [
          e(he, {
            ref_key: "personRef",
            ref: w,
            "active-dept": i.activeOption,
            "dept-tree": i
          }, null, 8, ["active-dept", "dept-tree"])
        ]),
        e(ue, {
          ref_key: "dialogRef",
          ref: h,
          "team-id": i.teamId,
          onLoadList: y
        }, null, 8, ["team-id"])
      ]);
    };
  }
};
export {
  ze as default
};
