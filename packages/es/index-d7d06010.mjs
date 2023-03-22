import { NInput as B, NInputNumber as W, NSwitch as X, NButton as E, NSpin as T, NModal as K, NTreeSelect as Y, NRadio as Z, NSpace as ee, NRadioGroup as te, NSelect as oe } from "naive-ui";
import { ref as R, reactive as L, resolveComponent as I, openBlock as P, createBlock as S, withCtx as o, createElementVNode as U, createVNode as e, createTextVNode as $, computed as ae, unref as z, createElementBlock as V, Fragment as ne, createCommentVNode as A, nextTick as M, h as le } from "vue";
import { i as O, e as C, o as se, c as de } from "./index-c846165e.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "@better-scroll/core";
import "@vueuse/core";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "lodash";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
const re = { class: "p-20" }, pe = { class: "text-right mt-20" }, ie = {
  __name: "FormDialog",
  props: {
    teamId: {
      type: String,
      default: ""
    }
  },
  emits: ["loadList"],
  setup(b, { expose: N, emit: p }) {
    const y = b, w = {
      add: "新增",
      update: "修改"
    }, h = R(null), s = L({
      show: !1,
      loading: !1,
      type: "add"
    }), n = (i) => ({
      teamId: y.teamId,
      parentId: i,
      deptName: "",
      sortNum: 0,
      status: 1,
      description: ""
    }), d = L(n()), a = (i) => {
      Object.assign(d, n(i));
    }, _ = () => {
      var i;
      (i = h.value) == null || i.validate((l) => {
        l || r();
      });
    }, r = async () => {
      s.loading = !0;
      const { code: i, msg: l } = await O[s.type](d);
      s.loading = !1, i === 0 ? ($message.success("成功"), s.show = !1, p("loadList")) : $message.error(l);
    }, f = async (i) => {
      s.loading = !0;
      const { code: l, msg: u, data: t } = await O.get({ id: i });
      s.loading = !1, l === 0 ? Object.assign(d, t) : $message.error(u);
    };
    return N({
      open: (i, l) => {
        s.show = !0, s.type = i, i === "update" ? f(l.id) : (s.type = "add", a(l.type === "team" ? "-1" : l.id));
      }
    }), (i, l) => {
      const u = B, t = I("sh-form-item"), k = W, m = X, j = I("sh-form"), x = E, D = T, q = K;
      return P(), S(q, {
        show: s.show,
        "onUpdate:show": l[5] || (l[5] = (v) => s.show = v),
        preset: "card",
        class: "w-600",
        title: `${w[s.type]}资源`
      }, {
        default: o(() => [
          U("div", re, [
            e(D, {
              show: s.loading
            }, {
              default: o(() => [
                e(j, {
                  ref_key: "formRef",
                  ref: h,
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
                U("div", pe, [
                  e(x, {
                    onClick: l[4] || (l[4] = (v) => s.show = !1)
                  }, {
                    default: o(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(x, {
                    type: "primary",
                    onClick: _
                  }, {
                    default: o(() => [
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
}, ue = { class: "p-20" }, ce = { class: "text-right mt-20" }, me = {
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
  setup(b, { expose: N, emit: p }) {
    const y = b, w = ae(() => y.deptTree.list && y.deptTree.list.length ? y.deptTree.list[0].children : []), h = {
      add: "新增",
      update: "修改"
    }, s = R(null), n = L({
      show: !1,
      loading: !1,
      type: "add",
      roleList: []
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
    }), a = L(d({})), _ = () => {
      Object.assign(a, d(y.activeDept.type === "dept" ? y.activeDept : {}));
    }, r = () => {
      var u;
      (u = s.value) == null || u.validate((t) => {
        t || f();
      });
    }, f = async () => {
      n.loading = !0;
      const u = n.type === "add" ? C.addUserAndPerson : C.update;
      let t = { ...a };
      t.headPic = t.headPic.length ? t.headPic.join(",") : "";
      const { code: k, msg: m } = await u(t);
      n.loading = !1, k === 0 ? ($message.success("成功"), n.show = !1, p("loadList")) : $message.error(m);
    };
    (async () => {
      const { code: u, msg: t, data: k } = await se.findPersonRoleByAppId();
      u === 0 ? n.roleList = k || [] : $message.error(t);
    })();
    const i = async (u) => {
      n.loading = !0;
      const { code: t, msg: k, data: m } = await C.get({ id: u });
      n.loading = !1, t === 0 ? (m.headPic = m.headPic ? m.headPic.split(",") : [], Object.assign(a, m)) : $message.error(k);
    };
    return N({
      open: (u) => {
        n.show = !0, u && u.id ? (n.type = "update", i(u.id)) : (n.type = "add", _());
      }
    }), (u, t) => {
      const k = I("sh-upload-image"), m = I("sh-form-item"), j = Y, x = B, D = Z, q = ee, v = te, G = oe, H = I("sh-form"), F = E, J = T, Q = K;
      return P(), S(Q, {
        show: n.show,
        "onUpdate:show": t[10] || (t[10] = (c) => n.show = c),
        preset: "card",
        class: "w-800",
        title: `${h[n.type]}成员`
      }, {
        default: o(() => [
          U("div", ue, [
            e(J, {
              show: n.loading
            }, {
              default: o(() => [
                e(H, {
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
                          "onUpdate:value": t[0] || (t[0] = (c) => a.headPic = c)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e(m, {
                      label: "部门",
                      path: "deptId",
                      rule: "required"
                    }, {
                      default: o(() => [
                        e(j, {
                          value: a.deptId,
                          "onUpdate:value": t[1] || (t[1] = (c) => a.deptId = c),
                          "label-field": "name",
                          "key-field": "id",
                          options: z(w),
                          "default-expanded-keys": b.deptTree.defaultExpandedKeys
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
                        e(x, {
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
                        e(x, {
                          value: a.phone,
                          "onUpdate:value": t[3] || (t[3] = (c) => a.phone = c),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    n.type === "add" ? (P(), V(ne, { key: 0 }, [
                      e(m, {
                        label: "账号",
                        path: "loginName",
                        rule: "required||account",
                        span: 12
                      }, {
                        default: o(() => [
                          e(x, {
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
                          e(x, {
                            value: a.password,
                            "onUpdate:value": t[5] || (t[5] = (c) => a.password = c),
                            type: "password",
                            "show-password-on": "mousedown",
                            placeholder: "包含数字、大小写字母三种,且8-30位"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ], 64)) : A("", !0),
                    e(m, {
                      label: "职务",
                      path: "duty",
                      span: 12
                    }, {
                      default: o(() => [
                        e(x, {
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
                            e(q, null, {
                              default: o(() => [
                                e(D, { value: 1 }, {
                                  default: o(() => [
                                    $(" 男 ")
                                  ]),
                                  _: 1
                                }),
                                e(D, { value: 0 }, {
                                  default: o(() => [
                                    $(" 女 ")
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
                        e(G, {
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
                U("div", ce, [
                  e(F, {
                    onClick: t[9] || (t[9] = (c) => n.show = !1)
                  }, {
                    default: o(() => [
                      $(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  e(F, {
                    type: "primary",
                    onClick: r
                  }, {
                    default: o(() => [
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
}, fe = { class: "mb-20" }, _e = {
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
  setup(b, { expose: N }) {
    const p = b, y = [
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
                $delete(C.quit, { personIds: [_.id] }, d);
              },
              code: "system-dept-personDelete",
              type: "error"
            })
          ];
        }
      }
    ], w = R(null), h = R(null), s = L({
      list: [],
      loading: !1
    }), n = L({
      name: "",
      deptName: "",
      deptId: "",
      phone: "",
      gender: ""
    }), d = () => {
      n.deptId = p.activeDept.type === "team" ? "" : p.activeDept.id, M(() => {
        h.value.loadList();
      });
    }, a = (_) => {
      w.value.open(_);
    };
    return N({
      loadList: d
    }), (_, r) => {
      const f = E, g = I("sh-data-table"), i = T;
      return P(), V("div", null, [
        U("div", fe, [
          _.$isCode("system-dept-personAdd") ? (P(), S(f, {
            key: 0,
            type: "primary",
            onClick: a
          }, {
            default: o(() => [
              $(" 新增成员 ")
            ]),
            _: 1
          })) : A("", !0)
        ]),
        e(i, {
          show: s.loading
        }, {
          default: o(() => [
            e(g, {
              ref_key: "tableRef",
              ref: h,
              "row-key": (l) => l.id,
              params: n,
              columns: y,
              api: z(C).listMainDeptPerson
            }, null, 8, ["row-key", "params", "api"])
          ]),
          _: 1
        }, 8, ["show"]),
        e(me, {
          ref_key: "dialogRef",
          ref: w,
          "active-dept": b.activeDept,
          "dept-tree": b.deptTree,
          onLoadList: d
        }, null, 8, ["active-dept", "dept-tree"])
      ]);
    };
  }
}, ye = { class: "h-790 flex" }, ve = { class: "w-400" }, he = { class: "pl-40 border-l border-#E1E7F8 flex-1" }, Oe = {
  __name: "index",
  setup(b) {
    const N = de(), p = L({
      list: [],
      defaultExpandedKeys: [],
      loading: !1,
      teamId: "",
      activeOption: {}
    }), y = R(null), w = R(null), h = async () => {
      p.loading = !0;
      const { code: r, msg: f, data: g } = await O.deptTree({});
      p.loading = !1, r === 0 ? (p.list = g, g.length && (p.defaultExpandedKeys = [...p.defaultExpandedKeys, g[0].id], p.teamId = g[0].id)) : $message.error(f);
    };
    h();
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
          $delete(O.delete, { id: r.id }, h);
        }
      })), f;
    }, n = (r) => r.type === "team" ? { name: "company", style: { "font-size": "20px", color: N.themeColor } } : { name: "dept", style: { color: "#979daf" } }, d = ({ option: r }) => le(
      "span",
      {
        style: { color: r.type === "team" ? "#202837" : "#515E78" }
      },
      r.name
    ), a = (r, f) => {
      r[0] && (p.activeOption = f[0], M(() => {
        w.value.loadList();
      }));
    }, _ = (r, f) => {
      y.value.open(r, f);
    };
    return (r, f) => {
      const g = I("sh-tree"), i = T;
      return P(), V("div", ye, [
        U("div", ve, [
          e(i, {
            show: p.loading
          }, {
            default: o(() => [
              e(g, {
                data: p.list,
                "label-field": "name",
                "key-field": "id",
                "default-expanded-keys": p.defaultExpandedKeys,
                suffix: s,
                prefix: n,
                "render-label": d,
                "onUpdate:selectedKeys": a
              }, null, 8, ["data", "default-expanded-keys"])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        U("div", he, [
          e(_e, {
            ref_key: "personRef",
            ref: w,
            "active-dept": p.activeOption,
            "dept-tree": p
          }, null, 8, ["active-dept", "dept-tree"])
        ]),
        e(ie, {
          ref_key: "dialogRef",
          ref: y,
          "team-id": p.teamId,
          onLoadList: h
        }, null, 8, ["team-id"])
      ]);
    };
  }
};
export {
  Oe as default
};
