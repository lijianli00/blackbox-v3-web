import { ref as t, nextTick as i, computed as m } from "vue";
import { cloneDeep as d } from "lodash";
function p(a = {}) {
  const n = t(null), s = t(d(a));
  return {
    formRef: n,
    formValue: s,
    reseForm: async (e) => {
      s.value = d(e || a), await i();
    },
    validate: async (e) => {
      var r;
      (r = n.value) == null || r.validate((o) => {
        o || e();
      });
    }
  };
}
function x(a = {}) {
  const { formRef: n, formValue: s, reseForm: l, validate: c } = p(a), e = {
    add: "新增",
    update: "修改",
    view: "查看",
    delete: "删除"
  }, r = t(!1), o = t(!1), u = t("add"), f = m(() => e[u.value]);
  return {
    formRef: n,
    loading: r,
    showModal: o,
    type: u,
    typeTxt: f,
    formValue: s,
    reseForm: l,
    validate: c,
    close: () => {
      o.value = !1;
    },
    open: () => {
      o.value = !0;
    }
  };
}
export {
  p as a,
  x as u
};
