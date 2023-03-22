import { NInput as k, NGridItem as b } from "naive-ui";
import { ref as I, reactive as x, resolveComponent as d, openBlock as D, createBlock as w, withCtx as l, createVNode as e, unref as a } from "vue";
import { l as _ } from "./index-c846165e.mjs";
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
const E = {
  __name: "index",
  setup(U) {
    const s = I(null), c = [
      { type: "index" },
      { title: "文件名", key: "fileName" },
      { title: "文件归类", key: "fileDir" },
      { title: "业务数据主键", key: "dataId" },
      { title: "上传人", key: "createName" },
      {
        title: "操作",
        key: "handle",
        render(f) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(_.delete, { id: f.id }, u);
              },
              code: "system-fileList-delete",
              type: "error"
            })
          ];
        }
      }
    ], p = () => ({
      fileName: "",
      dataId: "",
      fileDir: "",
      createName: ""
    });
    let t = x(p());
    const v = () => {
      Object.assign(t, p()), u();
    }, u = () => {
      s.value.loadList();
    };
    return (f, r) => {
      const n = k, i = d("sh-form-item"), m = b, y = d("sh-search-fold"), N = d("sh-data-table"), h = d("sh-content-layout");
      return D(), w(h, null, {
        header: l(() => [
          e(y, {
            ref: "search",
            model: a(t),
            reset: v,
            "load-list": u
          }, {
            default: l(() => [
              e(m, null, {
                default: l(() => [
                  e(i, {
                    label: "文件名",
                    path: "fileName"
                  }, {
                    default: l(() => [
                      e(n, {
                        value: a(t).fileName,
                        "onUpdate:value": r[0] || (r[0] = (o) => a(t).fileName = o)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(i, {
                    label: "业务主键",
                    path: "dataId"
                  }, {
                    default: l(() => [
                      e(n, {
                        value: a(t).dataId,
                        "onUpdate:value": r[1] || (r[1] = (o) => a(t).dataId = o)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(i, {
                    label: "文件归类",
                    path: "fileDir"
                  }, {
                    default: l(() => [
                      e(n, {
                        value: a(t).fileDir,
                        "onUpdate:value": r[2] || (r[2] = (o) => a(t).fileDir = o)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(m, null, {
                default: l(() => [
                  e(i, {
                    label: "上传人",
                    path: "createName"
                  }, {
                    default: l(() => [
                      e(n, {
                        value: a(t).createName,
                        "onUpdate:value": r[3] || (r[3] = (o) => a(t).createName = o)
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
        default: l(() => [
          e(N, {
            ref_key: "tableRef",
            ref: s,
            "row-key": (o) => o.roleId,
            columns: c,
            api: a(_).list,
            params: a(t)
          }, null, 8, ["row-key", "api", "params"])
        ]),
        _: 1
      });
    };
  }
};
export {
  E as default
};
