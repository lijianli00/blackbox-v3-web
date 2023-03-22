import { NInput as b } from "naive-ui";
import { ref as h, reactive as I, resolveComponent as m, openBlock as x, createBlock as w, withCtx as r, createVNode as a, unref as t } from "vue";
import { p as f } from "./index-de809ebd.mjs";
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
const E = {
  __name: "index",
  setup(D) {
    const p = h(null), _ = [
      { label: "文件名", key: "fileName" },
      { label: "业务主键", key: "dataId" },
      { label: "文件归类", key: "fileDir" },
      { label: "上传人", key: "createName" }
    ], c = [
      { type: "index" },
      { title: "文件名", key: "fileName" },
      { title: "文件归类", key: "fileDir" },
      { title: "业务数据主键", key: "dataId" },
      { title: "上传人", key: "createName" },
      {
        title: "操作",
        key: "handle",
        render(u) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(f.delete, { id: u.id }, s);
              },
              code: "system-fileList-delete",
              type: "error"
            })
          ];
        }
      }
    ], d = () => ({
      fileName: "",
      dataId: "",
      fileDir: "",
      createName: ""
    });
    let e = I(d());
    const y = () => {
      Object.assign(e, d()), s();
    }, s = () => {
      p.value.loadList();
    };
    return (u, o) => {
      const n = b, i = m("sh-form-item"), k = m("sh-search-area"), v = m("sh-data-table"), N = m("sh-content-layout");
      return x(), w(N, null, {
        header: r(() => [
          a(k, {
            form: t(e),
            "dropdown-list": _,
            onLoadList: s,
            onReset: y
          }, {
            default: r(() => [
              a(i, {
                label: "文件名",
                span: 12,
                path: "fileName"
              }, {
                default: r(() => [
                  a(n, {
                    value: t(e).fileName,
                    "onUpdate:value": o[0] || (o[0] = (l) => t(e).fileName = l)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(i, {
                span: 12,
                label: "业务主键",
                path: "dataId"
              }, {
                default: r(() => [
                  a(n, {
                    value: t(e).dataId,
                    "onUpdate:value": o[1] || (o[1] = (l) => t(e).dataId = l)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(i, {
                span: 12,
                label: "文件归类",
                path: "fileDir"
              }, {
                default: r(() => [
                  a(n, {
                    value: t(e).fileDir,
                    "onUpdate:value": o[2] || (o[2] = (l) => t(e).fileDir = l)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(i, {
                span: 12,
                label: "上传人",
                path: "createName"
              }, {
                default: r(() => [
                  a(n, {
                    value: t(e).createName,
                    "onUpdate:value": o[3] || (o[3] = (l) => t(e).createName = l)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: r(() => [
          a(v, {
            ref_key: "tableRef",
            ref: p,
            "row-key": (l) => l.roleId,
            columns: c,
            api: t(f).list,
            params: t(e)
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
