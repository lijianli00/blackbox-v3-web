import { NInput as $, NGridItem as C, NButton as B } from "naive-ui";
import { ref as _, reactive as V, resolveComponent as i, openBlock as L, createBlock as R, withCtx as e, createVNode as s, unref as r, createTextVNode as S } from "vue";
import { b as f } from "./workflow-2c0ca3a0.mjs";
import { useRouter as T } from "vue-router";
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
import "@soybeanjs/vue-admin-tab";
const Q = {
  __name: "index",
  setup(j) {
    const y = T(), c = _(null), u = _(!1), k = [
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
              u.value = !0, t.status = t.status ? 0 : 1;
              const { code: o, msg: a } = await f.updateStatus({
                id: t.id,
                status: t.status
              });
              u.value = !1, o === 0 ? ($message.success(a), m()) : $message.error(a);
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
    ], p = () => ({
      processName: "",
      status: ""
    });
    let n = V(p());
    const h = () => {
      Object.assign(n, p()), m();
    }, m = () => {
      c.value.loadList();
    }, d = (t) => {
      y.push(t);
    };
    return (t, o) => {
      const a = $, b = i("sh-form-item"), N = C, v = i("sh-search-fold"), x = B, g = i("sh-data-table"), I = i("sh-content-layout");
      return L(), R(I, null, {
        header: e(() => [
          s(v, {
            ref: "search",
            model: r(n),
            reset: h,
            "load-list": m
          }, {
            default: e(() => [
              s(N, null, {
                default: e(() => [
                  s(b, {
                    label: "流程名称",
                    path: "processName"
                  }, {
                    default: e(() => [
                      s(a, {
                        value: r(n).processName,
                        "onUpdate:value": o[0] || (o[0] = (l) => r(n).processName = l)
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
        btn: e(() => [
          s(x, {
            type: "primary",
            onClick: o[1] || (o[1] = (l) => d("editor/add"))
          }, {
            default: e(() => [
              S(" 新增 ")
            ]),
            _: 1
          })
        ]),
        default: e(() => [
          s(g, {
            ref_key: "tableRef",
            ref: c,
            "row-key": (l) => l.roleId,
            columns: k,
            api: r(f).list,
            params: r(n)
          }, null, 8, ["row-key", "api", "params"])
        ]),
        _: 1
      });
    };
  }
};
export {
  Q as default
};
