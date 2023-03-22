import { NButton as $, NInput as C } from "naive-ui";
import { ref as _, reactive as I, resolveComponent as l, openBlock as B, createBlock as R, withCtx as o, createVNode as n, unref as r, createTextVNode as V } from "vue";
import { b as f } from "./workflow-8c68dd55.mjs";
import { useRouter as w } from "vue-router";
import "./index-de809ebd.mjs";
import "colord";
import "crypto-js";
import "dayjs";
import "axios";
import "pinia";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const M = {
  __name: "index",
  setup(S) {
    const y = w(), c = _(null), p = _(!1), k = [{ label: "流程名称", key: "processName" }], h = [
      { type: "index" },
      { title: "流程名称", key: "processName" },
      { title: "版本描述", key: "description" },
      { title: "版本ID", key: "versionId" },
      {
        title: "状态",
        key: "status",
        render(t) {
          return $nSwitch({
            status: t.status,
            code: "system-dictionary-status",
            onClick: async () => {
              p.value = !0, t.status = t.status ? 0 : 1;
              const { code: e, msg: a } = await f.updateStatus({
                id: t.id,
                status: t.status
              });
              p.value = !1, e === 0 ? ($message.success(a), m()) : $message.error(a);
            }
          });
        }
      },
      { title: "创建人", key: "createName" },
      { title: "创建时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(t) {
          return [
            $textBtn({
              text: "编辑",
              onClick: () => {
                d(`editor/${t.id}`);
              },
              code: "system-imgList-delete"
            })
          ];
        }
      }
    ], u = () => ({
      processName: "",
      status: ""
    });
    let s = I(u());
    const b = () => {
      Object.assign(s, u()), m();
    }, m = () => {
      c.value.loadList();
    }, d = (t) => {
      y.push(t);
    };
    return (t, e) => {
      const a = $, N = C, v = l("sh-form-item"), x = l("sh-search-area"), g = l("sh-data-table"), L = l("sh-content-layout");
      return B(), R(L, null, {
        header: o(() => [
          n(x, {
            form: r(s),
            "dropdown-list": k,
            onLoadList: m,
            onReset: b
          }, {
            let: o(() => [
              n(a, {
                type: "primary",
                onClick: e[0] || (e[0] = (i) => d("editor/add"))
              }, {
                default: o(() => [
                  V(" 新增 ")
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              n(v, {
                span: 12,
                label: "流程名称",
                path: "processName"
              }, {
                default: o(() => [
                  n(N, {
                    value: r(s).processName,
                    "onUpdate:value": e[1] || (e[1] = (i) => r(s).processName = i)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: o(() => [
          n(g, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (i) => i.roleId,
            columns: h,
            api: r(f).list,
            params: r(s)
          }, null, 8, ["row-key", "api", "params"])
        ]),
        _: 1
      });
    };
  }
};
export {
  M as default
};
