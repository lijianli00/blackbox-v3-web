import { NInput as D, NRadio as E, NSpace as K, NRadioGroup as M, NButton as L, NSpin as T, NModal as A } from "naive-ui";
import { ref as k, reactive as x, resolveComponent as y, openBlock as h, createBlock as N, withCtx as a, createElementVNode as B, createVNode as o, createCommentVNode as I, createTextVNode as c, createElementBlock as G, unref as U, isRef as H } from "vue";
import { g as _ } from "./index-de809ebd.mjs";
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
const J = { class: "p-20" }, Q = { class: "text-right mt-20" }, W = {
  __name: "FormDialog",
  emits: ["loadList"],
  setup(z, { expose: v, emit: g }) {
    const i = {
      add: "新增",
      update: "修改"
    }, w = k(null), n = x({
      show: !1,
      loading: !1,
      type: "add"
    }), f = () => ({
      name: "",
      phone: "",
      loginName: "",
      password: "",
      deptId: "1033876568584880a30714aef1899db6",
      duty: "",
      entryTime: "",
      gender: 1,
      roleIds: []
    }), t = x(f()), C = () => {
      Object.assign(t, f());
    }, u = () => {
      var l;
      (l = w.value) == null || l.validate((e) => {
        e || $();
      });
    }, $ = async () => {
      n.loading = !0;
      const { code: l, msg: e } = n.type === "add" ? await _.addUserAndPerson(t) : await _.update(t);
      n.loading = !1, l === 0 ? ($message.success("成功"), n.show = !1, g("loadList")) : $message.error(e);
    }, R = async (l) => {
      n.loading = !0;
      const { code: e, msg: p, data: d } = await _.get({ id: l });
      n.loading = !1, e === 0 ? Object.assign(t, d) : $message.error(p);
    }, b = (l, e) => {
      e.type === "dept" && (t.deptId = l);
    };
    return v({
      open: (l) => {
        n.show = !0, l && l.id ? (n.type = "update", R(l.id)) : (n.type = "add", C());
      }
    }), (l, e) => {
      const p = D, d = y("sh-form-item"), m = y("sh-tree-select-dept"), V = E, j = K, F = M, O = y("sh-form"), q = L, P = T, S = A;
      return h(), N(S, {
        show: n.show,
        "onUpdate:show": e[7] || (e[7] = (s) => n.show = s),
        preset: "card",
        class: "w-600",
        title: `${i[n.type]}成员`
      }, {
        default: a(() => [
          B("div", J, [
            o(P, {
              show: n.loading
            }, {
              default: a(() => [
                o(O, {
                  ref_key: "formRef",
                  ref: w,
                  model: t,
                  "label-width": "80"
                }, {
                  default: a(() => [
                    o(d, {
                      label: "姓名",
                      path: "name",
                      rule: "required"
                    }, {
                      default: a(() => [
                        o(p, {
                          value: t.name,
                          "onUpdate:value": e[0] || (e[0] = (s) => t.name = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(d, {
                      label: "手机号",
                      path: "phone",
                      rule: "required||phone"
                    }, {
                      default: a(() => [
                        o(p, {
                          value: t.phone,
                          "onUpdate:value": e[1] || (e[1] = (s) => t.phone = s),
                          placeholder: "请输入"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(d, {
                      label: "账号",
                      path: "loginName",
                      rule: "required||account"
                    }, {
                      default: a(() => [
                        o(p, {
                          value: t.loginName,
                          "onUpdate:value": e[2] || (e[2] = (s) => t.loginName = s),
                          disabled: n.type === "update",
                          placeholder: "必须包含数字、大小写字母,且8-32位"
                        }, null, 8, ["value", "disabled"])
                      ]),
                      _: 1
                    }),
                    n.type === "add" ? (h(), N(d, {
                      key: 0,
                      label: "	密码",
                      path: "password",
                      rule: "required||password"
                    }, {
                      default: a(() => [
                        o(p, {
                          value: t.password,
                          "onUpdate:value": e[3] || (e[3] = (s) => t.password = s),
                          type: "password",
                          "show-password-on": "mousedown",
                          placeholder: "包含数字、大小写字母三种,且8-30位"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })) : I("", !0),
                    o(d, {
                      label: "部门",
                      path: "deptId",
                      rule: "required"
                    }, {
                      default: a(() => [
                        o(m, {
                          value: t.deptId,
                          "onUpdate:value": [
                            e[4] || (e[4] = (s) => t.deptId = s),
                            b
                          ]
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    o(d, {
                      label: "性别",
                      path: "gender"
                    }, {
                      default: a(() => [
                        o(F, {
                          value: t.gender,
                          "onUpdate:value": e[5] || (e[5] = (s) => t.gender = s)
                        }, {
                          default: a(() => [
                            o(j, null, {
                              default: a(() => [
                                o(V, { value: 1 }, {
                                  default: a(() => [
                                    c(" 男 ")
                                  ]),
                                  _: 1
                                }),
                                o(V, { value: 0 }, {
                                  default: a(() => [
                                    c(" 女 ")
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
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                B("div", Q, [
                  o(q, {
                    onClick: e[6] || (e[6] = (s) => n.show = !1)
                  }, {
                    default: a(() => [
                      c(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  o(q, {
                    type: "primary",
                    onClick: u
                  }, {
                    default: a(() => [
                      c(" 确定 ")
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
  setup(z) {
    const v = k(null), g = k(null), i = k([]), w = [
      { label: "名字", value: "name" },
      { label: "部门", value: "deptName" }
    ], n = [
      { type: "selection" },
      { title: "名字", key: "name", resizable: !0 },
      { title: "部门", key: "deptName", resizable: !0 },
      { title: "职务", key: "duty", resizable: !0 },
      { title: "手机号", key: "phone", resizable: !0 },
      {
        title: "性别",
        key: "gender",
        resizable: !0,
        render(r) {
          return r.gender ? "男" : "女";
        }
      },
      {
        title: "操作",
        key: "handle",
        render(r) {
          return [
            $textBtn({
              text: "修改",
              onClick: () => {
                b(r);
              },
              code: "system-person-update"
            }),
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(_.quit, { personIds: [r.id] }, u);
              },
              code: "system-person-delete",
              type: "error"
            })
          ];
        }
      }
    ], f = () => ({
      name: "",
      deptName: ""
    });
    let t = x(f());
    const C = () => {
      Object.assign(t, f()), u();
    }, u = () => {
      v.value.loadList();
    }, $ = () => {
      if (!i.value.length) {
        $message.warning("请先选择数据");
        return;
      }
      $delete(
        _.quit,
        { personIds: i.value },
        () => {
          u(), i.value = [];
        },
        "是否要批量删除数据？此操作不可逆"
      );
    }, R = (r) => {
      i.value = r;
    }, b = (r) => {
      g.value.open(r);
    };
    return (r, l) => {
      const e = L, p = y("sh-search"), d = y("sh-data-table");
      return h(), G("div", null, [
        o(p, {
          form: U(t),
          "onUpdate:form": l[0] || (l[0] = (m) => H(t) ? t.value = m : t = m),
          "load-list": u,
          reset: C,
          "dropdown-list": w
        }, {
          left: a(() => [
            r.$isCode("system-person-add") ? (h(), N(e, {
              key: 0,
              type: "primary",
              onClick: b
            }, {
              default: a(() => [
                c(" 新增 ")
              ]),
              _: 1
            })) : I("", !0),
            r.$isCode("system-person-batches-delete") ? (h(), N(e, {
              key: 1,
              onClick: $
            }, {
              default: a(() => [
                c(" 批量删除 ")
              ]),
              _: 1
            })) : I("", !0)
          ]),
          _: 1
        }, 8, ["form"]),
        o(d, {
          ref_key: "tableRef",
          ref: v,
          "row-key": (m) => m.id,
          columns: n,
          api: U(_).listMainDeptPerson,
          params: U(t),
          "onUpdate:checkedRowKeys": R
        }, null, 8, ["row-key", "api", "params"]),
        o(W, {
          ref_key: "dialogRef",
          ref: g,
          onLoadList: u
        }, null, 512)
      ]);
    };
  }
};
export {
  ie as default
};
