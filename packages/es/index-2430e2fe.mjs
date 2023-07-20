import { NImage as N, NInput as w } from "naive-ui";
import { computed as x, ref as D, reactive as L, resolveComponent as i, openBlock as S, createBlock as A, withCtx as n, createVNode as a, unref as t, h as B } from "vue";
import { u as U, q as V, t as d } from "./index-2db33f86.mjs";
import "pinia";
import "axios";
import "colord";
import "crypto-js";
import "dayjs";
import "lodash";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "vue-router";
import "@soybeanjs/vue-admin-tab";
import "@vueuse/core";
import "@better-scroll/core";
const Q = {
  __name: "index",
  setup(C) {
    const _ = U(), f = [
      { label: "业务主键", key: "dataId" },
      { label: "文件归类", key: "imgDir" },
      { label: "上传人", key: "createName" }
    ], k = x(() => _.token), u = D(null), y = V().env.VITE_APP_BASE_API, h = [
      { type: "index" },
      {
        title: "图片",
        key: "id",
        render(l) {
          return B(N, {
            width: 60,
            src: y + d.showImg({ id: l.id, token: k.value })
          });
        }
      },
      { title: "文件归类", key: "imgDir" },
      { title: "上传人", key: "createName" },
      { title: "上传时间", key: "createTime" },
      {
        title: "操作",
        key: "handle",
        render(l) {
          return [
            $textBtn({
              text: "删除",
              onClick: () => {
                $delete(d.delete, { id: l.id }, s);
              },
              code: "system-imgList-delete",
              type: "error"
            })
          ];
        }
      }
    ], c = () => ({
      imgDir: "",
      createName: "",
      dataId: ""
    });
    let e = L(c());
    const v = () => {
      Object.assign(e, c()), s();
    }, s = () => {
      u.value.loadList();
    };
    return (l, r) => {
      const m = w, p = i("sh-form-item"), I = i("sh-search-area"), b = i("sh-data-table"), g = i("sh-content-layout");
      return S(), A(g, null, {
        header: n(() => [
          a(I, {
            form: t(e),
            "dropdown-list": f,
            onLoadList: s,
            onReset: v
          }, {
            default: n(() => [
              a(p, {
                span: 12,
                label: "业务主键",
                path: "dataId"
              }, {
                default: n(() => [
                  a(m, {
                    value: t(e).dataId,
                    "onUpdate:value": r[0] || (r[0] = (o) => t(e).dataId = o)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(p, {
                span: 12,
                label: "文件归类",
                path: "imgDir"
              }, {
                default: n(() => [
                  a(m, {
                    value: t(e).imgDir,
                    "onUpdate:value": r[1] || (r[1] = (o) => t(e).imgDir = o)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              a(p, {
                span: 12,
                label: "上传人",
                path: "createName"
              }, {
                default: n(() => [
                  a(m, {
                    value: t(e).createName,
                    "onUpdate:value": r[2] || (r[2] = (o) => t(e).createName = o)
                  }, null, 8, ["value"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["form"])
        ]),
        default: n(() => [
          a(b, {
            ref_key: "tableRef",
            ref: u,
            "row-key": (o) => o.roleId,
            columns: h,
            api: t(d).list,
            params: t(e)
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
