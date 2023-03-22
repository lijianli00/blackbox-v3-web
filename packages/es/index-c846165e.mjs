import { defineComponent as P, computed as R, openBlock as m, createElementBlock as x, createElementVNode as w, unref as c, ref as O, createBlock as I, mergeProps as W, withCtx as h, createVNode as f, renderSlot as U, h as me, watch as ne, Fragment as Z, renderList as ce, normalizeClass as z, onMounted as Gt, reactive as le, toDisplayString as te, createCommentVNode as V, nextTick as Xe, onUnmounted as Yt, normalizeProps as qn, guardReactiveProps as Fn, normalizeStyle as M, resolveComponent as J, createTextVNode as L, withDirectives as Zt, vShow as $t, pushScopeId as $e, popScopeId as et, Transition as Ge, onBeforeUnmount as Mn, isRef as Hn, KeepAlive as Wn, resolveDynamicComponent as en, inject as zn, provide as Kn, withModifiers as Xn, withKeys as Gn } from "vue";
import { NRow as tn, NForm as nn, useLoadingBar as Yn, useDialog as Zn, useMessage as $n, useNotification as er, NButton as ve, NSwitch as tt, NFormItem as tr, NCol as rn, darkTheme as on, NConfigProvider as sn, NDataTable as nr, NPagination as rr, NSpin as Je, NCheckbox as an, NSpace as Ae, NCheckboxGroup as or, NSelect as St, NInput as Et, NInputGroup as ir, NDropdown as nt, NTree as sr, NTreeSelect as ln, NGrid as un, NImage as cn, NUpload as ar, zhCN as lr, dateZhCN as ur, NMessageProvider as cr, NNotificationProvider as dr, NDialogProvider as fr, NLoadingBarProvider as hr, useThemeVars as pr, NTooltip as dn, NBreadcrumbItem as gr, NBreadcrumb as mr, NEl as wt, NPopover as rt, NModal as vr, NAvatar as Ar, NEllipsis as yr, NMenu as fn, NScrollbar as br, NDivider as Te, NGridItem as Sr, NColorPicker as Er, NInputNumber as wr, NDrawerContent as xr, NDrawer as Ir, NCard as Cr } from "naive-ui";
import { colord as ut } from "colord";
import ct from "crypto-js";
import _r from "dayjs";
import kr from "@better-scroll/core";
import { useElementSize as Tt, useElementBounding as Tr, useFullscreen as Br } from "@vueuse/core";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.mjs";
import { defineStore as Pe, createPinia as Rr } from "pinia";
import Ye from "axios";
import { cloneDeep as Dr } from "lodash";
import { useRouter as Ee, useRoute as hn } from "vue-router";
import { ChromeTab as Qr, ButtonTab as Nr } from "@soybeanjs/vue-admin-tab";
const Or = {
  width: "1em",
  height: "1em",
  "aria-hidden": "true"
}, Jr = ["xlink:href", "fill"], Pr = P({
  name: "ShIcon"
}), pn = /* @__PURE__ */ Object.assign(Pr, {
  props: {
    name: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, n = R(() => `#icon-${e.name}`);
    return (r, o) => (m(), x("svg", Or, [
      w("use", {
        "xlink:href": c(n),
        fill: t.color
      }, null, 8, Jr)
    ]));
  }
}), Lr = P({
  name: "ShForm"
}), Ur = /* @__PURE__ */ Object.assign(Lr, {
  props: {
    gutter: {
      type: Number,
      default: 30
    },
    requireMarkPlacement: {
      type: String,
      default: "left"
    },
    labelPlacement: {
      type: String,
      default: "left"
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  setup(t, { expose: e }) {
    const n = O(null);
    return e({
      validate: (o) => n.value.validate(o),
      formRef: n
    }), (o, i) => {
      const s = tn, a = nn;
      return m(), I(a, W(o.$attrs, {
        ref_key: "formRef",
        ref: n,
        "require-mark-placement": t.requireMarkPlacement,
        "label-placement": t.labelPlacement,
        "label-width": t.labelWidth
      }), {
        default: h(() => [
          f(s, { gutter: t.gutter }, {
            default: h(() => [
              U(o.$slots, "default")
            ]),
            _: 3
          }, 8, ["gutter"])
        ]),
        _: 3
      }, 16, ["require-mark-placement", "label-placement", "label-width"]);
    };
  }
}), Le = 2, Bt = 16, Vr = 5, jr = 5, qr = 15, dt = 5, Fr = 4;
function Se(t, e) {
  if (e === 6)
    return t;
  const n = e < 6, r = ut(t).toHsv(), o = n ? dt + 1 - e : e - dt - 1, i = {
    h: Mr(r, o, n),
    s: Hr(r, o, n),
    v: Wr(r, o, n)
  };
  return ut(i).toHex();
}
function Mr(t, e, n) {
  let r;
  return t.h >= 60 && t.h <= 240 ? r = n ? t.h - Le * e : t.h + Le * e : r = n ? t.h + Le * e : t.h - Le * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Hr(t, e, n) {
  let r;
  return n ? r = t.s - Bt * e : e === Fr ? r = t.s + Bt : r = t.s + Vr * e, r > 100 && (r = 100), n && e === dt && r > 10 && (r = 10), r < 6 && (r = 6), r;
}
function Wr(t, e, n) {
  let r;
  return n ? r = t.v + jr * e : r = t.v - qr * e, r > 100 && (r = 100), r;
}
function ql(t, e) {
  return ut(t).alpha(e).toHex();
}
const zr = Object.prototype.toString;
function ye(t, e) {
  return zr.call(t) === `[object ${e}]`;
}
function Kr(t) {
  return typeof t < "u";
}
function Xr(t) {
  return typeof t > "u";
}
function gn(t) {
  return t === null;
}
function mn(t) {
  return t === "";
}
function xt(t) {
  return !gn(t) && ye(t, "Object");
}
function vn(t) {
  return t && Array.isArray(t);
}
function Gr(t) {
  return ye(t, "String");
}
function Fl(t) {
  return ye(t, "Number");
}
function Ml(t) {
  return ye(t, "Boolean");
}
function Hl(t) {
  return ye(t, "Date");
}
function Wl(t) {
  return ye(t, "RegExp");
}
function Rt(t) {
  return typeof t == "function";
}
function zl(t) {
  return ye(t, "Promise") && xt(t) && Rt(t.then) && Rt(t.catch);
}
function Kl(t) {
  return xt(t) && !!t.tagName;
}
function Xl(t) {
  return typeof window < "u" && Kr(window) && ye(t, "Window");
}
function Oe(t) {
  return gn(t) || Xr(t);
}
function Yr(t) {
  return Oe(t) || mn(t);
}
function Gl(t) {
  return vn(t) || Gr(t) ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : xt(t) ? Object.keys(t).length === 0 : !1;
}
function Yl(t, e = "") {
  return Yr(t) ? e : t;
}
function Zl(t) {
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t);
}
function An(t) {
  return /^(https?:|mailto:|tel:)/.test(t);
}
const Zr = typeof window > "u", $l = !Zr, yn = "__CryptoJS_Secret__";
function $r(t) {
  const e = JSON.stringify(t);
  return ct.AES.encrypt(e, yn).toString();
}
function bn(t) {
  const n = ct.AES.decrypt(t, yn).toString(ct.enc.Utf8);
  return n ? JSON.parse(n) : null;
}
class eo {
  constructor(e) {
    this.storage = e.storage, this.prefixKey = e.prefixKey;
  }
  getKey(e) {
    return `${this.prefixKey}${e}`.toUpperCase();
  }
  set(e, n, r) {
    const o = JSON.stringify({
      value: $r(n),
      time: Date.now(),
      expire: Oe(r) ? null : new Date().getTime() + r * 1e3
    });
    this.storage.setItem(this.getKey(e), o);
  }
  get(e) {
    const { value: n } = this.getItem(e, {});
    return n;
  }
  getItem(e, n = null) {
    const r = this.storage.getItem(this.getKey(e));
    if (!r)
      return n;
    try {
      const o = JSON.parse(r), { value: i, time: s, expire: a } = o;
      return Oe(a) || a > new Date().getTime() ? { value: bn(i), time: s } : (this.remove(e), n);
    } catch {
      return this.remove(e), n;
    }
  }
  remove(e) {
    this.storage.removeItem(this.getKey(e));
  }
  clear() {
    this.storage.clear();
  }
}
function Sn({ prefixKey: t = "", storage: e = sessionStorage }) {
  return new eo({ prefixKey: t, storage: e });
}
const En = "Vue_Naive_Admin_", to = function(t = {}) {
  return Sn({
    prefixKey: t.prefixKey || "",
    storage: localStorage
  });
}, no = function(t = {}) {
  return Sn({
    prefixKey: t.prefixKey || "",
    storage: sessionStorage
  });
}, ke = to({ prefixKey: En }), fe = no({ prefixKey: En });
function ro() {
  window.$loadingBar = Yn(), window.$dialog = Zn(), window.$message = $n(), window.$notification = er();
}
function oo() {
  window.$dayjs = _r, window.$decrypto = bn, window.$textBtn = ({
    text: t,
    onClick: e,
    code: n,
    show: r = !0,
    type: o = "primary",
    style: i = {},
    btnClass: s = {},
    // class
    divider: a = !1
  }) => r && (!n || $isCode(n)) ? me(
    ve,
    {
      text: !0,
      type: o,
      onClick: e,
      style: i,
      class: {
        "sh-table-operation-btn": a,
        ...s
      }
    },
    { default: () => t }
  ) : "", window.$delete = (t, e, n = () => {
  }, r = "确认删除，删除后不可恢复?") => {
    $dialog.warning({
      title: "警告",
      content: r,
      positiveText: "确定",
      negativeText: "不确定",
      onPositiveClick: async () => {
        const { code: o, data: i, msg: s } = await t(e);
        o === 0 ? (n({ code: o, data: i, msg: s }), $message.success(s)) : $message.error(s);
      }
    });
  }, window.$nSwitch = ({ status: t = !1, onClick: e, code: n, checkedValue: r = 1, uncheckedValue: o = 0 }) => me(
    tt,
    {
      checkedValue: r,
      uncheckedValue: o,
      disabled: n && !$isCode(n),
      value: t,
      onClick: n && !$isCode(n) ? "" : e
    },
    { default: () => text }
  );
}
function se(t, e = {
  style: { "z-index": 2, position: "relative" }
}) {
  return me(pn, { name: t, ...e });
}
function Qe(t, e = "children") {
  return t.map((n) => {
    var r;
    return (r = n[e]) != null && r.length ? {
      ...n,
      [e]: Qe(n[e])
    } : (delete n[e], n);
  });
}
const eu = () => "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
  const e = Math.random() * 16 | 0;
  return (t === "x" ? e : e & 3 | 8).toString(16);
});
var io = "0123456789abcdefghijklmnopqrstuvwxyz";
function de(t) {
  return io.charAt(t);
}
function so(t, e) {
  return t & e;
}
function Ue(t, e) {
  return t | e;
}
function Dt(t, e) {
  return t ^ e;
}
function Qt(t, e) {
  return t & ~e;
}
function ao(t) {
  if (t == 0)
    return -1;
  var e = 0;
  return t & 65535 || (t >>= 16, e += 16), t & 255 || (t >>= 8, e += 8), t & 15 || (t >>= 4, e += 4), t & 3 || (t >>= 2, e += 2), t & 1 || ++e, e;
}
function lo(t) {
  for (var e = 0; t != 0; )
    t &= t - 1, ++e;
  return e;
}
var Ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wn = "=";
function Ze(t) {
  var e, n, r = "";
  for (e = 0; e + 3 <= t.length; e += 3)
    n = parseInt(t.substring(e, e + 3), 16), r += Ce.charAt(n >> 6) + Ce.charAt(n & 63);
  for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += Ce.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += Ce.charAt(n >> 2) + Ce.charAt((n & 3) << 4)); (r.length & 3) > 0; )
    r += wn;
  return r;
}
function Nt(t) {
  var e = "", n, r = 0, o = 0;
  for (n = 0; n < t.length && t.charAt(n) != wn; ++n) {
    var i = Ce.indexOf(t.charAt(n));
    i < 0 || (r == 0 ? (e += de(i >> 2), o = i & 3, r = 1) : r == 1 ? (e += de(o << 2 | i >> 4), o = i & 15, r = 2) : r == 2 ? (e += de(o), e += de(i >> 2), o = i & 3, r = 3) : (e += de(o << 2 | i >> 4), e += de(i & 15), r = 0));
  }
  return r == 1 && (e += de(o << 2)), e;
}
var xe, uo = {
  decode: function(t) {
    var e;
    if (xe === void 0) {
      var n = "0123456789ABCDEF", r = ` \f
\r	 \u2028\u2029`;
      for (xe = {}, e = 0; e < 16; ++e)
        xe[n.charAt(e)] = e;
      for (n = n.toLowerCase(), e = 10; e < 16; ++e)
        xe[n.charAt(e)] = e;
      for (e = 0; e < r.length; ++e)
        xe[r.charAt(e)] = -1;
    }
    var o = [], i = 0, s = 0;
    for (e = 0; e < t.length; ++e) {
      var a = t.charAt(e);
      if (a == "=")
        break;
      if (a = xe[a], a != -1) {
        if (a === void 0)
          throw new Error("Illegal character at offset " + e);
        i |= a, ++s >= 2 ? (o[o.length] = i, i = 0, s = 0) : i <<= 4;
      }
    }
    if (s)
      throw new Error("Hex encoding incomplete: 4 bits missing");
    return o;
  }
}, be, ft = {
  decode: function(t) {
    var e;
    if (be === void 0) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = `= \f
\r	 \u2028\u2029`;
      for (be = /* @__PURE__ */ Object.create(null), e = 0; e < 64; ++e)
        be[n.charAt(e)] = e;
      for (be["-"] = 62, be._ = 63, e = 0; e < r.length; ++e)
        be[r.charAt(e)] = -1;
    }
    var o = [], i = 0, s = 0;
    for (e = 0; e < t.length; ++e) {
      var a = t.charAt(e);
      if (a == "=")
        break;
      if (a = be[a], a != -1) {
        if (a === void 0)
          throw new Error("Illegal character at offset " + e);
        i |= a, ++s >= 4 ? (o[o.length] = i >> 16, o[o.length] = i >> 8 & 255, o[o.length] = i & 255, i = 0, s = 0) : i <<= 6;
      }
    }
    switch (s) {
      case 1:
        throw new Error("Base64 encoding incomplete: at least 2 bits missing");
      case 2:
        o[o.length] = i >> 10;
        break;
      case 3:
        o[o.length] = i >> 16, o[o.length] = i >> 8 & 255;
        break;
    }
    return o;
  },
  re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
  unarmor: function(t) {
    var e = ft.re.exec(t);
    if (e)
      if (e[1])
        t = e[1];
      else if (e[2])
        t = e[2];
      else
        throw new Error("RegExp out of sync");
    return ft.decode(t);
  }
}, Ie = 1e13, Ne = (
  /** @class */
  function() {
    function t(e) {
      this.buf = [+e || 0];
    }
    return t.prototype.mulAdd = function(e, n) {
      var r = this.buf, o = r.length, i, s;
      for (i = 0; i < o; ++i)
        s = r[i] * e + n, s < Ie ? n = 0 : (n = 0 | s / Ie, s -= n * Ie), r[i] = s;
      n > 0 && (r[i] = n);
    }, t.prototype.sub = function(e) {
      var n = this.buf, r = n.length, o, i;
      for (o = 0; o < r; ++o)
        i = n[o] - e, i < 0 ? (i += Ie, e = 1) : e = 0, n[o] = i;
      for (; n[n.length - 1] === 0; )
        n.pop();
    }, t.prototype.toString = function(e) {
      if ((e || 10) != 10)
        throw new Error("only base 10 is supported");
      for (var n = this.buf, r = n[n.length - 1].toString(), o = n.length - 2; o >= 0; --o)
        r += (Ie + n[o]).toString().substring(1);
      return r;
    }, t.prototype.valueOf = function() {
      for (var e = this.buf, n = 0, r = e.length - 1; r >= 0; --r)
        n = n * Ie + e[r];
      return n;
    }, t.prototype.simplify = function() {
      var e = this.buf;
      return e.length == 1 ? e[0] : this;
    }, t;
  }()
), xn = "…", co = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, fo = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function _e(t, e) {
  return t.length > e && (t = t.substring(0, e) + xn), t;
}
var st = (
  /** @class */
  function() {
    function t(e, n) {
      this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = n);
    }
    return t.prototype.get = function(e) {
      if (e === void 0 && (e = this.pos++), e >= this.enc.length)
        throw new Error("Requesting byte offset ".concat(e, " on a stream of length ").concat(this.enc.length));
      return typeof this.enc == "string" ? this.enc.charCodeAt(e) : this.enc[e];
    }, t.prototype.hexByte = function(e) {
      return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(e & 15);
    }, t.prototype.hexDump = function(e, n, r) {
      for (var o = "", i = e; i < n; ++i)
        if (o += this.hexByte(this.get(i)), r !== !0)
          switch (i & 15) {
            case 7:
              o += "  ";
              break;
            case 15:
              o += `
`;
              break;
            default:
              o += " ";
          }
      return o;
    }, t.prototype.isASCII = function(e, n) {
      for (var r = e; r < n; ++r) {
        var o = this.get(r);
        if (o < 32 || o > 176)
          return !1;
      }
      return !0;
    }, t.prototype.parseStringISO = function(e, n) {
      for (var r = "", o = e; o < n; ++o)
        r += String.fromCharCode(this.get(o));
      return r;
    }, t.prototype.parseStringUTF = function(e, n) {
      for (var r = "", o = e; o < n; ) {
        var i = this.get(o++);
        i < 128 ? r += String.fromCharCode(i) : i > 191 && i < 224 ? r += String.fromCharCode((i & 31) << 6 | this.get(o++) & 63) : r += String.fromCharCode((i & 15) << 12 | (this.get(o++) & 63) << 6 | this.get(o++) & 63);
      }
      return r;
    }, t.prototype.parseStringBMP = function(e, n) {
      for (var r = "", o, i, s = e; s < n; )
        o = this.get(s++), i = this.get(s++), r += String.fromCharCode(o << 8 | i);
      return r;
    }, t.prototype.parseTime = function(e, n, r) {
      var o = this.parseStringISO(e, n), i = (r ? co : fo).exec(o);
      return i ? (r && (i[1] = +i[1], i[1] += +i[1] < 70 ? 2e3 : 1900), o = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (o += ":" + i[5], i[6] && (o += ":" + i[6], i[7] && (o += "." + i[7]))), i[8] && (o += " UTC", i[8] != "Z" && (o += i[8], i[9] && (o += ":" + i[9]))), o) : "Unrecognized time: " + o;
    }, t.prototype.parseInteger = function(e, n) {
      for (var r = this.get(e), o = r > 127, i = o ? 255 : 0, s, a = ""; r == i && ++e < n; )
        r = this.get(e);
      if (s = n - e, s === 0)
        return o ? -1 : 0;
      if (s > 4) {
        for (a = r, s <<= 3; !((+a ^ i) & 128); )
          a = +a << 1, --s;
        a = "(" + s + ` bit)
`;
      }
      o && (r = r - 256);
      for (var l = new Ne(r), u = e + 1; u < n; ++u)
        l.mulAdd(256, this.get(u));
      return a + l.toString();
    }, t.prototype.parseBitString = function(e, n, r) {
      for (var o = this.get(e), i = (n - e - 1 << 3) - o, s = "(" + i + ` bit)
`, a = "", l = e + 1; l < n; ++l) {
        for (var u = this.get(l), d = l == n - 1 ? o : 0, p = 7; p >= d; --p)
          a += u >> p & 1 ? "1" : "0";
        if (a.length > r)
          return s + _e(a, r);
      }
      return s + a;
    }, t.prototype.parseOctetString = function(e, n, r) {
      if (this.isASCII(e, n))
        return _e(this.parseStringISO(e, n), r);
      var o = n - e, i = "(" + o + ` byte)
`;
      r /= 2, o > r && (n = e + r);
      for (var s = e; s < n; ++s)
        i += this.hexByte(this.get(s));
      return o > r && (i += xn), i;
    }, t.prototype.parseOID = function(e, n, r) {
      for (var o = "", i = new Ne(), s = 0, a = e; a < n; ++a) {
        var l = this.get(a);
        if (i.mulAdd(128, l & 127), s += 7, !(l & 128)) {
          if (o === "")
            if (i = i.simplify(), i instanceof Ne)
              i.sub(80), o = "2." + i.toString();
            else {
              var u = i < 80 ? i < 40 ? 0 : 1 : 2;
              o = u + "." + (i - u * 40);
            }
          else
            o += "." + i.toString();
          if (o.length > r)
            return _e(o, r);
          i = new Ne(), s = 0;
        }
      }
      return s > 0 && (o += ".incomplete"), o;
    }, t;
  }()
), ho = (
  /** @class */
  function() {
    function t(e, n, r, o, i) {
      if (!(o instanceof Ot))
        throw new Error("Invalid tag value.");
      this.stream = e, this.header = n, this.length = r, this.tag = o, this.sub = i;
    }
    return t.prototype.typeName = function() {
      switch (this.tag.tagClass) {
        case 0:
          switch (this.tag.tagNumber) {
            case 0:
              return "EOC";
            case 1:
              return "BOOLEAN";
            case 2:
              return "INTEGER";
            case 3:
              return "BIT_STRING";
            case 4:
              return "OCTET_STRING";
            case 5:
              return "NULL";
            case 6:
              return "OBJECT_IDENTIFIER";
            case 7:
              return "ObjectDescriptor";
            case 8:
              return "EXTERNAL";
            case 9:
              return "REAL";
            case 10:
              return "ENUMERATED";
            case 11:
              return "EMBEDDED_PDV";
            case 12:
              return "UTF8String";
            case 16:
              return "SEQUENCE";
            case 17:
              return "SET";
            case 18:
              return "NumericString";
            case 19:
              return "PrintableString";
            case 20:
              return "TeletexString";
            case 21:
              return "VideotexString";
            case 22:
              return "IA5String";
            case 23:
              return "UTCTime";
            case 24:
              return "GeneralizedTime";
            case 25:
              return "GraphicString";
            case 26:
              return "VisibleString";
            case 27:
              return "GeneralString";
            case 28:
              return "UniversalString";
            case 30:
              return "BMPString";
          }
          return "Universal_" + this.tag.tagNumber.toString();
        case 1:
          return "Application_" + this.tag.tagNumber.toString();
        case 2:
          return "[" + this.tag.tagNumber.toString() + "]";
        case 3:
          return "Private_" + this.tag.tagNumber.toString();
      }
    }, t.prototype.content = function(e) {
      if (this.tag === void 0)
        return null;
      e === void 0 && (e = 1 / 0);
      var n = this.posContent(), r = Math.abs(this.length);
      if (!this.tag.isUniversal())
        return this.sub !== null ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + r, e);
      switch (this.tag.tagNumber) {
        case 1:
          return this.stream.get(n) === 0 ? "false" : "true";
        case 2:
          return this.stream.parseInteger(n, n + r);
        case 3:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(n, n + r, e);
        case 4:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + r, e);
        case 6:
          return this.stream.parseOID(n, n + r, e);
        case 16:
        case 17:
          return this.sub !== null ? "(" + this.sub.length + " elem)" : "(no elem)";
        case 12:
          return _e(this.stream.parseStringUTF(n, n + r), e);
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
          return _e(this.stream.parseStringISO(n, n + r), e);
        case 30:
          return _e(this.stream.parseStringBMP(n, n + r), e);
        case 23:
        case 24:
          return this.stream.parseTime(n, n + r, this.tag.tagNumber == 23);
      }
      return null;
    }, t.prototype.toString = function() {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
    }, t.prototype.toPrettyString = function(e) {
      e === void 0 && (e = "");
      var n = e + this.typeName() + " @" + this.stream.pos;
      if (this.length >= 0 && (n += "+"), n += this.length, this.tag.tagConstructed ? n += " (constructed)" : this.tag.isUniversal() && (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) && this.sub !== null && (n += " (encapsulates)"), n += `
`, this.sub !== null) {
        e += "  ";
        for (var r = 0, o = this.sub.length; r < o; ++r)
          n += this.sub[r].toPrettyString(e);
      }
      return n;
    }, t.prototype.posStart = function() {
      return this.stream.pos;
    }, t.prototype.posContent = function() {
      return this.stream.pos + this.header;
    }, t.prototype.posEnd = function() {
      return this.stream.pos + this.header + Math.abs(this.length);
    }, t.prototype.toHexString = function() {
      return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
    }, t.decodeLength = function(e) {
      var n = e.get(), r = n & 127;
      if (r == n)
        return r;
      if (r > 6)
        throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
      if (r === 0)
        return null;
      n = 0;
      for (var o = 0; o < r; ++o)
        n = n * 256 + e.get();
      return n;
    }, t.prototype.getHexStringValue = function() {
      var e = this.toHexString(), n = this.header * 2, r = this.length * 2;
      return e.substr(n, r);
    }, t.decode = function(e) {
      var n;
      e instanceof st ? n = e : n = new st(e, 0);
      var r = new st(n), o = new Ot(n), i = t.decodeLength(n), s = n.pos, a = s - r.pos, l = null, u = function() {
        var p = [];
        if (i !== null) {
          for (var v = s + i; n.pos < v; )
            p[p.length] = t.decode(n);
          if (n.pos != v)
            throw new Error("Content size is not correct for container starting at offset " + s);
        } else
          try {
            for (; ; ) {
              var y = t.decode(n);
              if (y.tag.isEOC())
                break;
              p[p.length] = y;
            }
            i = s - n.pos;
          } catch (E) {
            throw new Error("Exception while decoding undefined length content: " + E);
          }
        return p;
      };
      if (o.tagConstructed)
        l = u();
      else if (o.isUniversal() && (o.tagNumber == 3 || o.tagNumber == 4))
        try {
          if (o.tagNumber == 3 && n.get() != 0)
            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
          l = u();
          for (var d = 0; d < l.length; ++d)
            if (l[d].tag.isEOC())
              throw new Error("EOC is not supposed to be actual content.");
        } catch {
          l = null;
        }
      if (l === null) {
        if (i === null)
          throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
        n.pos = s + Math.abs(i);
      }
      return new t(r, a, i, o, l);
    }, t;
  }()
), Ot = (
  /** @class */
  function() {
    function t(e) {
      var n = e.get();
      if (this.tagClass = n >> 6, this.tagConstructed = (n & 32) !== 0, this.tagNumber = n & 31, this.tagNumber == 31) {
        var r = new Ne();
        do
          n = e.get(), r.mulAdd(128, n & 127);
        while (n & 128);
        this.tagNumber = r.simplify();
      }
    }
    return t.prototype.isUniversal = function() {
      return this.tagClass === 0;
    }, t.prototype.isEOC = function() {
      return this.tagClass === 0 && this.tagNumber === 0;
    }, t;
  }()
), ge, po = 244837814094590, Jt = (po & 16777215) == 15715070, Y = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], go = (1 << 26) / Y[Y.length - 1], Q = (
  /** @class */
  function() {
    function t(e, n, r) {
      e != null && (typeof e == "number" ? this.fromNumber(e, n, r) : n == null && typeof e != "string" ? this.fromString(e, 256) : this.fromString(e, n));
    }
    return t.prototype.toString = function(e) {
      if (this.s < 0)
        return "-" + this.negate().toString(e);
      var n;
      if (e == 16)
        n = 4;
      else if (e == 8)
        n = 3;
      else if (e == 2)
        n = 1;
      else if (e == 32)
        n = 5;
      else if (e == 4)
        n = 2;
      else
        return this.toRadix(e);
      var r = (1 << n) - 1, o, i = !1, s = "", a = this.t, l = this.DB - a * this.DB % n;
      if (a-- > 0)
        for (l < this.DB && (o = this[a] >> l) > 0 && (i = !0, s = de(o)); a >= 0; )
          l < n ? (o = (this[a] & (1 << l) - 1) << n - l, o |= this[--a] >> (l += this.DB - n)) : (o = this[a] >> (l -= n) & r, l <= 0 && (l += this.DB, --a)), o > 0 && (i = !0), i && (s += de(o));
      return i ? s : "0";
    }, t.prototype.negate = function() {
      var e = N();
      return t.ZERO.subTo(this, e), e;
    }, t.prototype.abs = function() {
      return this.s < 0 ? this.negate() : this;
    }, t.prototype.compareTo = function(e) {
      var n = this.s - e.s;
      if (n != 0)
        return n;
      var r = this.t;
      if (n = r - e.t, n != 0)
        return this.s < 0 ? -n : n;
      for (; --r >= 0; )
        if ((n = this[r] - e[r]) != 0)
          return n;
      return 0;
    }, t.prototype.bitLength = function() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Ve(this[this.t - 1] ^ this.s & this.DM);
    }, t.prototype.mod = function(e) {
      var n = N();
      return this.abs().divRemTo(e, null, n), this.s < 0 && n.compareTo(t.ZERO) > 0 && e.subTo(n, n), n;
    }, t.prototype.modPowInt = function(e, n) {
      var r;
      return e < 256 || n.isEven() ? r = new Pt(n) : r = new Lt(n), this.exp(e, r);
    }, t.prototype.clone = function() {
      var e = N();
      return this.copyTo(e), e;
    }, t.prototype.intValue = function() {
      if (this.s < 0) {
        if (this.t == 1)
          return this[0] - this.DV;
        if (this.t == 0)
          return -1;
      } else {
        if (this.t == 1)
          return this[0];
        if (this.t == 0)
          return 0;
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }, t.prototype.byteValue = function() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }, t.prototype.shortValue = function() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }, t.prototype.signum = function() {
      return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
    }, t.prototype.toByteArray = function() {
      var e = this.t, n = [];
      n[0] = this.s;
      var r = this.DB - e * this.DB % 8, o, i = 0;
      if (e-- > 0)
        for (r < this.DB && (o = this[e] >> r) != (this.s & this.DM) >> r && (n[i++] = o | this.s << this.DB - r); e >= 0; )
          r < 8 ? (o = (this[e] & (1 << r) - 1) << 8 - r, o |= this[--e] >> (r += this.DB - 8)) : (o = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --e)), o & 128 && (o |= -256), i == 0 && (this.s & 128) != (o & 128) && ++i, (i > 0 || o != this.s) && (n[i++] = o);
      return n;
    }, t.prototype.equals = function(e) {
      return this.compareTo(e) == 0;
    }, t.prototype.min = function(e) {
      return this.compareTo(e) < 0 ? this : e;
    }, t.prototype.max = function(e) {
      return this.compareTo(e) > 0 ? this : e;
    }, t.prototype.and = function(e) {
      var n = N();
      return this.bitwiseTo(e, so, n), n;
    }, t.prototype.or = function(e) {
      var n = N();
      return this.bitwiseTo(e, Ue, n), n;
    }, t.prototype.xor = function(e) {
      var n = N();
      return this.bitwiseTo(e, Dt, n), n;
    }, t.prototype.andNot = function(e) {
      var n = N();
      return this.bitwiseTo(e, Qt, n), n;
    }, t.prototype.not = function() {
      for (var e = N(), n = 0; n < this.t; ++n)
        e[n] = this.DM & ~this[n];
      return e.t = this.t, e.s = ~this.s, e;
    }, t.prototype.shiftLeft = function(e) {
      var n = N();
      return e < 0 ? this.rShiftTo(-e, n) : this.lShiftTo(e, n), n;
    }, t.prototype.shiftRight = function(e) {
      var n = N();
      return e < 0 ? this.lShiftTo(-e, n) : this.rShiftTo(e, n), n;
    }, t.prototype.getLowestSetBit = function() {
      for (var e = 0; e < this.t; ++e)
        if (this[e] != 0)
          return e * this.DB + ao(this[e]);
      return this.s < 0 ? this.t * this.DB : -1;
    }, t.prototype.bitCount = function() {
      for (var e = 0, n = this.s & this.DM, r = 0; r < this.t; ++r)
        e += lo(this[r] ^ n);
      return e;
    }, t.prototype.testBit = function(e) {
      var n = Math.floor(e / this.DB);
      return n >= this.t ? this.s != 0 : (this[n] & 1 << e % this.DB) != 0;
    }, t.prototype.setBit = function(e) {
      return this.changeBit(e, Ue);
    }, t.prototype.clearBit = function(e) {
      return this.changeBit(e, Qt);
    }, t.prototype.flipBit = function(e) {
      return this.changeBit(e, Dt);
    }, t.prototype.add = function(e) {
      var n = N();
      return this.addTo(e, n), n;
    }, t.prototype.subtract = function(e) {
      var n = N();
      return this.subTo(e, n), n;
    }, t.prototype.multiply = function(e) {
      var n = N();
      return this.multiplyTo(e, n), n;
    }, t.prototype.divide = function(e) {
      var n = N();
      return this.divRemTo(e, n, null), n;
    }, t.prototype.remainder = function(e) {
      var n = N();
      return this.divRemTo(e, null, n), n;
    }, t.prototype.divideAndRemainder = function(e) {
      var n = N(), r = N();
      return this.divRemTo(e, n, r), [n, r];
    }, t.prototype.modPow = function(e, n) {
      var r = e.bitLength(), o, i = he(1), s;
      if (r <= 0)
        return i;
      r < 18 ? o = 1 : r < 48 ? o = 3 : r < 144 ? o = 4 : r < 768 ? o = 5 : o = 6, r < 8 ? s = new Pt(n) : n.isEven() ? s = new vo(n) : s = new Lt(n);
      var a = [], l = 3, u = o - 1, d = (1 << o) - 1;
      if (a[1] = s.convert(this), o > 1) {
        var p = N();
        for (s.sqrTo(a[1], p); l <= d; )
          a[l] = N(), s.mulTo(p, a[l - 2], a[l]), l += 2;
      }
      var v = e.t - 1, y, E = !0, S = N(), C;
      for (r = Ve(e[v]) - 1; v >= 0; ) {
        for (r >= u ? y = e[v] >> r - u & d : (y = (e[v] & (1 << r + 1) - 1) << u - r, v > 0 && (y |= e[v - 1] >> this.DB + r - u)), l = o; !(y & 1); )
          y >>= 1, --l;
        if ((r -= l) < 0 && (r += this.DB, --v), E)
          a[y].copyTo(i), E = !1;
        else {
          for (; l > 1; )
            s.sqrTo(i, S), s.sqrTo(S, i), l -= 2;
          l > 0 ? s.sqrTo(i, S) : (C = i, i = S, S = C), s.mulTo(S, a[y], i);
        }
        for (; v >= 0 && !(e[v] & 1 << r); )
          s.sqrTo(i, S), C = i, i = S, S = C, --r < 0 && (r = this.DB - 1, --v);
      }
      return s.revert(i);
    }, t.prototype.modInverse = function(e) {
      var n = e.isEven();
      if (this.isEven() && n || e.signum() == 0)
        return t.ZERO;
      for (var r = e.clone(), o = this.clone(), i = he(1), s = he(0), a = he(0), l = he(1); r.signum() != 0; ) {
        for (; r.isEven(); )
          r.rShiftTo(1, r), n ? ((!i.isEven() || !s.isEven()) && (i.addTo(this, i), s.subTo(e, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(e, s), s.rShiftTo(1, s);
        for (; o.isEven(); )
          o.rShiftTo(1, o), n ? ((!a.isEven() || !l.isEven()) && (a.addTo(this, a), l.subTo(e, l)), a.rShiftTo(1, a)) : l.isEven() || l.subTo(e, l), l.rShiftTo(1, l);
        r.compareTo(o) >= 0 ? (r.subTo(o, r), n && i.subTo(a, i), s.subTo(l, s)) : (o.subTo(r, o), n && a.subTo(i, a), l.subTo(s, l));
      }
      if (o.compareTo(t.ONE) != 0)
        return t.ZERO;
      if (l.compareTo(e) >= 0)
        return l.subtract(e);
      if (l.signum() < 0)
        l.addTo(e, l);
      else
        return l;
      return l.signum() < 0 ? l.add(e) : l;
    }, t.prototype.pow = function(e) {
      return this.exp(e, new mo());
    }, t.prototype.gcd = function(e) {
      var n = this.s < 0 ? this.negate() : this.clone(), r = e.s < 0 ? e.negate() : e.clone();
      if (n.compareTo(r) < 0) {
        var o = n;
        n = r, r = o;
      }
      var i = n.getLowestSetBit(), s = r.getLowestSetBit();
      if (s < 0)
        return n;
      for (i < s && (s = i), s > 0 && (n.rShiftTo(s, n), r.rShiftTo(s, r)); n.signum() > 0; )
        (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r), n.compareTo(r) >= 0 ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r));
      return s > 0 && r.lShiftTo(s, r), r;
    }, t.prototype.isProbablePrime = function(e) {
      var n, r = this.abs();
      if (r.t == 1 && r[0] <= Y[Y.length - 1]) {
        for (n = 0; n < Y.length; ++n)
          if (r[0] == Y[n])
            return !0;
        return !1;
      }
      if (r.isEven())
        return !1;
      for (n = 1; n < Y.length; ) {
        for (var o = Y[n], i = n + 1; i < Y.length && o < go; )
          o *= Y[i++];
        for (o = r.modInt(o); n < i; )
          if (o % Y[n++] == 0)
            return !1;
      }
      return r.millerRabin(e);
    }, t.prototype.copyTo = function(e) {
      for (var n = this.t - 1; n >= 0; --n)
        e[n] = this[n];
      e.t = this.t, e.s = this.s;
    }, t.prototype.fromInt = function(e) {
      this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
    }, t.prototype.fromString = function(e, n) {
      var r;
      if (n == 16)
        r = 4;
      else if (n == 8)
        r = 3;
      else if (n == 256)
        r = 8;
      else if (n == 2)
        r = 1;
      else if (n == 32)
        r = 5;
      else if (n == 4)
        r = 2;
      else {
        this.fromRadix(e, n);
        return;
      }
      this.t = 0, this.s = 0;
      for (var o = e.length, i = !1, s = 0; --o >= 0; ) {
        var a = r == 8 ? +e[o] & 255 : Vt(e, o);
        if (a < 0) {
          e.charAt(o) == "-" && (i = !0);
          continue;
        }
        i = !1, s == 0 ? this[this.t++] = a : s + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, s += r, s >= this.DB && (s -= this.DB);
      }
      r == 8 && +e[0] & 128 && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && t.ZERO.subTo(this, this);
    }, t.prototype.clamp = function() {
      for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
        --this.t;
    }, t.prototype.dlShiftTo = function(e, n) {
      var r;
      for (r = this.t - 1; r >= 0; --r)
        n[r + e] = this[r];
      for (r = e - 1; r >= 0; --r)
        n[r] = 0;
      n.t = this.t + e, n.s = this.s;
    }, t.prototype.drShiftTo = function(e, n) {
      for (var r = e; r < this.t; ++r)
        n[r - e] = this[r];
      n.t = Math.max(this.t - e, 0), n.s = this.s;
    }, t.prototype.lShiftTo = function(e, n) {
      for (var r = e % this.DB, o = this.DB - r, i = (1 << o) - 1, s = Math.floor(e / this.DB), a = this.s << r & this.DM, l = this.t - 1; l >= 0; --l)
        n[l + s + 1] = this[l] >> o | a, a = (this[l] & i) << r;
      for (var l = s - 1; l >= 0; --l)
        n[l] = 0;
      n[s] = a, n.t = this.t + s + 1, n.s = this.s, n.clamp();
    }, t.prototype.rShiftTo = function(e, n) {
      n.s = this.s;
      var r = Math.floor(e / this.DB);
      if (r >= this.t) {
        n.t = 0;
        return;
      }
      var o = e % this.DB, i = this.DB - o, s = (1 << o) - 1;
      n[0] = this[r] >> o;
      for (var a = r + 1; a < this.t; ++a)
        n[a - r - 1] |= (this[a] & s) << i, n[a - r] = this[a] >> o;
      o > 0 && (n[this.t - r - 1] |= (this.s & s) << i), n.t = this.t - r, n.clamp();
    }, t.prototype.subTo = function(e, n) {
      for (var r = 0, o = 0, i = Math.min(e.t, this.t); r < i; )
        o += this[r] - e[r], n[r++] = o & this.DM, o >>= this.DB;
      if (e.t < this.t) {
        for (o -= e.s; r < this.t; )
          o += this[r], n[r++] = o & this.DM, o >>= this.DB;
        o += this.s;
      } else {
        for (o += this.s; r < e.t; )
          o -= e[r], n[r++] = o & this.DM, o >>= this.DB;
        o -= e.s;
      }
      n.s = o < 0 ? -1 : 0, o < -1 ? n[r++] = this.DV + o : o > 0 && (n[r++] = o), n.t = r, n.clamp();
    }, t.prototype.multiplyTo = function(e, n) {
      var r = this.abs(), o = e.abs(), i = r.t;
      for (n.t = i + o.t; --i >= 0; )
        n[i] = 0;
      for (i = 0; i < o.t; ++i)
        n[i + r.t] = r.am(0, o[i], n, i, 0, r.t);
      n.s = 0, n.clamp(), this.s != e.s && t.ZERO.subTo(n, n);
    }, t.prototype.squareTo = function(e) {
      for (var n = this.abs(), r = e.t = 2 * n.t; --r >= 0; )
        e[r] = 0;
      for (r = 0; r < n.t - 1; ++r) {
        var o = n.am(r, n[r], e, 2 * r, 0, 1);
        (e[r + n.t] += n.am(r + 1, 2 * n[r], e, 2 * r + 1, o, n.t - r - 1)) >= n.DV && (e[r + n.t] -= n.DV, e[r + n.t + 1] = 1);
      }
      e.t > 0 && (e[e.t - 1] += n.am(r, n[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp();
    }, t.prototype.divRemTo = function(e, n, r) {
      var o = e.abs();
      if (!(o.t <= 0)) {
        var i = this.abs();
        if (i.t < o.t) {
          n != null && n.fromInt(0), r != null && this.copyTo(r);
          return;
        }
        r == null && (r = N());
        var s = N(), a = this.s, l = e.s, u = this.DB - Ve(o[o.t - 1]);
        u > 0 ? (o.lShiftTo(u, s), i.lShiftTo(u, r)) : (o.copyTo(s), i.copyTo(r));
        var d = s.t, p = s[d - 1];
        if (p != 0) {
          var v = p * (1 << this.F1) + (d > 1 ? s[d - 2] >> this.F2 : 0), y = this.FV / v, E = (1 << this.F1) / v, S = 1 << this.F2, C = r.t, k = C - d, T = n ?? N();
          for (s.dlShiftTo(k, T), r.compareTo(T) >= 0 && (r[r.t++] = 1, r.subTo(T, r)), t.ONE.dlShiftTo(d, T), T.subTo(s, s); s.t < d; )
            s[s.t++] = 0;
          for (; --k >= 0; ) {
            var B = r[--C] == p ? this.DM : Math.floor(r[C] * y + (r[C - 1] + S) * E);
            if ((r[C] += s.am(0, B, r, k, 0, d)) < B)
              for (s.dlShiftTo(k, T), r.subTo(T, r); r[C] < --B; )
                r.subTo(T, r);
          }
          n != null && (r.drShiftTo(d, n), a != l && t.ZERO.subTo(n, n)), r.t = d, r.clamp(), u > 0 && r.rShiftTo(u, r), a < 0 && t.ZERO.subTo(r, r);
        }
      }
    }, t.prototype.invDigit = function() {
      if (this.t < 1)
        return 0;
      var e = this[0];
      if (!(e & 1))
        return 0;
      var n = e & 3;
      return n = n * (2 - (e & 15) * n) & 15, n = n * (2 - (e & 255) * n) & 255, n = n * (2 - ((e & 65535) * n & 65535)) & 65535, n = n * (2 - e * n % this.DV) % this.DV, n > 0 ? this.DV - n : -n;
    }, t.prototype.isEven = function() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }, t.prototype.exp = function(e, n) {
      if (e > 4294967295 || e < 1)
        return t.ONE;
      var r = N(), o = N(), i = n.convert(this), s = Ve(e) - 1;
      for (i.copyTo(r); --s >= 0; )
        if (n.sqrTo(r, o), (e & 1 << s) > 0)
          n.mulTo(o, i, r);
        else {
          var a = r;
          r = o, o = a;
        }
      return n.revert(r);
    }, t.prototype.chunkSize = function(e) {
      return Math.floor(Math.LN2 * this.DB / Math.log(e));
    }, t.prototype.toRadix = function(e) {
      if (e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36)
        return "0";
      var n = this.chunkSize(e), r = Math.pow(e, n), o = he(r), i = N(), s = N(), a = "";
      for (this.divRemTo(o, i, s); i.signum() > 0; )
        a = (r + s.intValue()).toString(e).substr(1) + a, i.divRemTo(o, i, s);
      return s.intValue().toString(e) + a;
    }, t.prototype.fromRadix = function(e, n) {
      this.fromInt(0), n == null && (n = 10);
      for (var r = this.chunkSize(n), o = Math.pow(n, r), i = !1, s = 0, a = 0, l = 0; l < e.length; ++l) {
        var u = Vt(e, l);
        if (u < 0) {
          e.charAt(l) == "-" && this.signum() == 0 && (i = !0);
          continue;
        }
        a = n * a + u, ++s >= r && (this.dMultiply(o), this.dAddOffset(a, 0), s = 0, a = 0);
      }
      s > 0 && (this.dMultiply(Math.pow(n, s)), this.dAddOffset(a, 0)), i && t.ZERO.subTo(this, this);
    }, t.prototype.fromNumber = function(e, n, r) {
      if (typeof n == "number")
        if (e < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), Ue, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n); )
            this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
      else {
        var o = [], i = e & 7;
        o.length = (e >> 3) + 1, n.nextBytes(o), i > 0 ? o[0] &= (1 << i) - 1 : o[0] = 0, this.fromString(o, 256);
      }
    }, t.prototype.bitwiseTo = function(e, n, r) {
      var o, i, s = Math.min(e.t, this.t);
      for (o = 0; o < s; ++o)
        r[o] = n(this[o], e[o]);
      if (e.t < this.t) {
        for (i = e.s & this.DM, o = s; o < this.t; ++o)
          r[o] = n(this[o], i);
        r.t = this.t;
      } else {
        for (i = this.s & this.DM, o = s; o < e.t; ++o)
          r[o] = n(i, e[o]);
        r.t = e.t;
      }
      r.s = n(this.s, e.s), r.clamp();
    }, t.prototype.changeBit = function(e, n) {
      var r = t.ONE.shiftLeft(e);
      return this.bitwiseTo(r, n, r), r;
    }, t.prototype.addTo = function(e, n) {
      for (var r = 0, o = 0, i = Math.min(e.t, this.t); r < i; )
        o += this[r] + e[r], n[r++] = o & this.DM, o >>= this.DB;
      if (e.t < this.t) {
        for (o += e.s; r < this.t; )
          o += this[r], n[r++] = o & this.DM, o >>= this.DB;
        o += this.s;
      } else {
        for (o += this.s; r < e.t; )
          o += e[r], n[r++] = o & this.DM, o >>= this.DB;
        o += e.s;
      }
      n.s = o < 0 ? -1 : 0, o > 0 ? n[r++] = o : o < -1 && (n[r++] = this.DV + o), n.t = r, n.clamp();
    }, t.prototype.dMultiply = function(e) {
      this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, t.prototype.dAddOffset = function(e, n) {
      if (e != 0) {
        for (; this.t <= n; )
          this[this.t++] = 0;
        for (this[n] += e; this[n] >= this.DV; )
          this[n] -= this.DV, ++n >= this.t && (this[this.t++] = 0), ++this[n];
      }
    }, t.prototype.multiplyLowerTo = function(e, n, r) {
      var o = Math.min(this.t + e.t, n);
      for (r.s = 0, r.t = o; o > 0; )
        r[--o] = 0;
      for (var i = r.t - this.t; o < i; ++o)
        r[o + this.t] = this.am(0, e[o], r, o, 0, this.t);
      for (var i = Math.min(e.t, n); o < i; ++o)
        this.am(0, e[o], r, o, 0, n - o);
      r.clamp();
    }, t.prototype.multiplyUpperTo = function(e, n, r) {
      --n;
      var o = r.t = this.t + e.t - n;
      for (r.s = 0; --o >= 0; )
        r[o] = 0;
      for (o = Math.max(n - this.t, 0); o < e.t; ++o)
        r[this.t + o - n] = this.am(n - o, e[o], r, 0, 0, this.t + o - n);
      r.clamp(), r.drShiftTo(1, r);
    }, t.prototype.modInt = function(e) {
      if (e <= 0)
        return 0;
      var n = this.DV % e, r = this.s < 0 ? e - 1 : 0;
      if (this.t > 0)
        if (n == 0)
          r = this[0] % e;
        else
          for (var o = this.t - 1; o >= 0; --o)
            r = (n * r + this[o]) % e;
      return r;
    }, t.prototype.millerRabin = function(e) {
      var n = this.subtract(t.ONE), r = n.getLowestSetBit();
      if (r <= 0)
        return !1;
      var o = n.shiftRight(r);
      e = e + 1 >> 1, e > Y.length && (e = Y.length);
      for (var i = N(), s = 0; s < e; ++s) {
        i.fromInt(Y[Math.floor(Math.random() * Y.length)]);
        var a = i.modPow(o, this);
        if (a.compareTo(t.ONE) != 0 && a.compareTo(n) != 0) {
          for (var l = 1; l++ < r && a.compareTo(n) != 0; )
            if (a = a.modPowInt(2, this), a.compareTo(t.ONE) == 0)
              return !1;
          if (a.compareTo(n) != 0)
            return !1;
        }
      }
      return !0;
    }, t.prototype.square = function() {
      var e = N();
      return this.squareTo(e), e;
    }, t.prototype.gcda = function(e, n) {
      var r = this.s < 0 ? this.negate() : this.clone(), o = e.s < 0 ? e.negate() : e.clone();
      if (r.compareTo(o) < 0) {
        var i = r;
        r = o, o = i;
      }
      var s = r.getLowestSetBit(), a = o.getLowestSetBit();
      if (a < 0) {
        n(r);
        return;
      }
      s < a && (a = s), a > 0 && (r.rShiftTo(a, r), o.rShiftTo(a, o));
      var l = function() {
        (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), (s = o.getLowestSetBit()) > 0 && o.rShiftTo(s, o), r.compareTo(o) >= 0 ? (r.subTo(o, r), r.rShiftTo(1, r)) : (o.subTo(r, o), o.rShiftTo(1, o)), r.signum() > 0 ? setTimeout(l, 0) : (a > 0 && o.lShiftTo(a, o), setTimeout(function() {
          n(o);
        }, 0));
      };
      setTimeout(l, 10);
    }, t.prototype.fromNumberAsync = function(e, n, r, o) {
      if (typeof n == "number")
        if (e < 2)
          this.fromInt(1);
        else {
          this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), Ue, this), this.isEven() && this.dAddOffset(1, 0);
          var i = this, s = function() {
            i.dAddOffset(2, 0), i.bitLength() > e && i.subTo(t.ONE.shiftLeft(e - 1), i), i.isProbablePrime(n) ? setTimeout(function() {
              o();
            }, 0) : setTimeout(s, 0);
          };
          setTimeout(s, 0);
        }
      else {
        var a = [], l = e & 7;
        a.length = (e >> 3) + 1, n.nextBytes(a), l > 0 ? a[0] &= (1 << l) - 1 : a[0] = 0, this.fromString(a, 256);
      }
    }, t;
  }()
), mo = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.convert = function(e) {
      return e;
    }, t.prototype.revert = function(e) {
      return e;
    }, t.prototype.mulTo = function(e, n, r) {
      e.multiplyTo(n, r);
    }, t.prototype.sqrTo = function(e, n) {
      e.squareTo(n);
    }, t;
  }()
), Pt = (
  /** @class */
  function() {
    function t(e) {
      this.m = e;
    }
    return t.prototype.convert = function(e) {
      return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
    }, t.prototype.revert = function(e) {
      return e;
    }, t.prototype.reduce = function(e) {
      e.divRemTo(this.m, null, e);
    }, t.prototype.mulTo = function(e, n, r) {
      e.multiplyTo(n, r), this.reduce(r);
    }, t.prototype.sqrTo = function(e, n) {
      e.squareTo(n), this.reduce(n);
    }, t;
  }()
), Lt = (
  /** @class */
  function() {
    function t(e) {
      this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
    }
    return t.prototype.convert = function(e) {
      var n = N();
      return e.abs().dlShiftTo(this.m.t, n), n.divRemTo(this.m, null, n), e.s < 0 && n.compareTo(Q.ZERO) > 0 && this.m.subTo(n, n), n;
    }, t.prototype.revert = function(e) {
      var n = N();
      return e.copyTo(n), this.reduce(n), n;
    }, t.prototype.reduce = function(e) {
      for (; e.t <= this.mt2; )
        e[e.t++] = 0;
      for (var n = 0; n < this.m.t; ++n) {
        var r = e[n] & 32767, o = r * this.mpl + ((r * this.mph + (e[n] >> 15) * this.mpl & this.um) << 15) & e.DM;
        for (r = n + this.m.t, e[r] += this.m.am(0, o, e, n, 0, this.m.t); e[r] >= e.DV; )
          e[r] -= e.DV, e[++r]++;
      }
      e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
    }, t.prototype.mulTo = function(e, n, r) {
      e.multiplyTo(n, r), this.reduce(r);
    }, t.prototype.sqrTo = function(e, n) {
      e.squareTo(n), this.reduce(n);
    }, t;
  }()
), vo = (
  /** @class */
  function() {
    function t(e) {
      this.m = e, this.r2 = N(), this.q3 = N(), Q.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e);
    }
    return t.prototype.convert = function(e) {
      if (e.s < 0 || e.t > 2 * this.m.t)
        return e.mod(this.m);
      if (e.compareTo(this.m) < 0)
        return e;
      var n = N();
      return e.copyTo(n), this.reduce(n), n;
    }, t.prototype.revert = function(e) {
      return e;
    }, t.prototype.reduce = function(e) {
      for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; )
        e.dAddOffset(1, this.m.t + 1);
      for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
        e.subTo(this.m, e);
    }, t.prototype.mulTo = function(e, n, r) {
      e.multiplyTo(n, r), this.reduce(r);
    }, t.prototype.sqrTo = function(e, n) {
      e.squareTo(n), this.reduce(n);
    }, t;
  }()
);
function N() {
  return new Q(null);
}
function j(t, e) {
  return new Q(t, e);
}
var Ut = typeof navigator < "u";
Ut && Jt && navigator.appName == "Microsoft Internet Explorer" ? (Q.prototype.am = function(e, n, r, o, i, s) {
  for (var a = n & 32767, l = n >> 15; --s >= 0; ) {
    var u = this[e] & 32767, d = this[e++] >> 15, p = l * u + d * a;
    u = a * u + ((p & 32767) << 15) + r[o] + (i & 1073741823), i = (u >>> 30) + (p >>> 15) + l * d + (i >>> 30), r[o++] = u & 1073741823;
  }
  return i;
}, ge = 30) : Ut && Jt && navigator.appName != "Netscape" ? (Q.prototype.am = function(e, n, r, o, i, s) {
  for (; --s >= 0; ) {
    var a = n * this[e++] + r[o] + i;
    i = Math.floor(a / 67108864), r[o++] = a & 67108863;
  }
  return i;
}, ge = 26) : (Q.prototype.am = function(e, n, r, o, i, s) {
  for (var a = n & 16383, l = n >> 14; --s >= 0; ) {
    var u = this[e] & 16383, d = this[e++] >> 14, p = l * u + d * a;
    u = a * u + ((p & 16383) << 14) + r[o] + i, i = (u >> 28) + (p >> 14) + l * d, r[o++] = u & 268435455;
  }
  return i;
}, ge = 28);
Q.prototype.DB = ge;
Q.prototype.DM = (1 << ge) - 1;
Q.prototype.DV = 1 << ge;
var It = 52;
Q.prototype.FV = Math.pow(2, It);
Q.prototype.F1 = It - ge;
Q.prototype.F2 = 2 * ge - It;
var ot = [], Be, re;
Be = "0".charCodeAt(0);
for (re = 0; re <= 9; ++re)
  ot[Be++] = re;
Be = "a".charCodeAt(0);
for (re = 10; re < 36; ++re)
  ot[Be++] = re;
Be = "A".charCodeAt(0);
for (re = 10; re < 36; ++re)
  ot[Be++] = re;
function Vt(t, e) {
  var n = ot[t.charCodeAt(e)];
  return n ?? -1;
}
function he(t) {
  var e = N();
  return e.fromInt(t), e;
}
function Ve(t) {
  var e = 1, n;
  return (n = t >>> 16) != 0 && (t = n, e += 16), (n = t >> 8) != 0 && (t = n, e += 8), (n = t >> 4) != 0 && (t = n, e += 4), (n = t >> 2) != 0 && (t = n, e += 2), (n = t >> 1) != 0 && (t = n, e += 1), e;
}
Q.ZERO = he(0);
Q.ONE = he(1);
var Ao = (
  /** @class */
  function() {
    function t() {
      this.i = 0, this.j = 0, this.S = [];
    }
    return t.prototype.init = function(e) {
      var n, r, o;
      for (n = 0; n < 256; ++n)
        this.S[n] = n;
      for (r = 0, n = 0; n < 256; ++n)
        r = r + this.S[n] + e[n % e.length] & 255, o = this.S[n], this.S[n] = this.S[r], this.S[r] = o;
      this.i = 0, this.j = 0;
    }, t.prototype.next = function() {
      var e;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
    }, t;
  }()
);
function yo() {
  return new Ao();
}
var In = 256, je, pe = null, ie;
if (pe == null) {
  pe = [], ie = 0;
  var qe = void 0;
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    var at = new Uint32Array(256);
    for (window.crypto.getRandomValues(at), qe = 0; qe < at.length; ++qe)
      pe[ie++] = at[qe] & 255;
  }
  var Fe = 0, Me = function(t) {
    if (Fe = Fe || 0, Fe >= 256 || ie >= In) {
      window.removeEventListener ? window.removeEventListener("mousemove", Me, !1) : window.detachEvent && window.detachEvent("onmousemove", Me);
      return;
    }
    try {
      var e = t.x + t.y;
      pe[ie++] = e & 255, Fe += 1;
    } catch {
    }
  };
  typeof window < "u" && (window.addEventListener ? window.addEventListener("mousemove", Me, !1) : window.attachEvent && window.attachEvent("onmousemove", Me));
}
function bo() {
  if (je == null) {
    for (je = yo(); ie < In; ) {
      var t = Math.floor(65536 * Math.random());
      pe[ie++] = t & 255;
    }
    for (je.init(pe), ie = 0; ie < pe.length; ++ie)
      pe[ie] = 0;
    ie = 0;
  }
  return je.next();
}
var ht = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.nextBytes = function(e) {
      for (var n = 0; n < e.length; ++n)
        e[n] = bo();
    }, t;
  }()
);
function So(t, e) {
  if (e < t.length + 22)
    return console.error("Message too long for RSA"), null;
  for (var n = e - t.length - 6, r = "", o = 0; o < n; o += 2)
    r += "ff";
  var i = "0001" + r + "00" + t;
  return j(i, 16);
}
function Eo(t, e) {
  if (e < t.length + 11)
    return console.error("Message too long for RSA"), null;
  for (var n = [], r = t.length - 1; r >= 0 && e > 0; ) {
    var o = t.charCodeAt(r--);
    o < 128 ? n[--e] = o : o > 127 && o < 2048 ? (n[--e] = o & 63 | 128, n[--e] = o >> 6 | 192) : (n[--e] = o & 63 | 128, n[--e] = o >> 6 & 63 | 128, n[--e] = o >> 12 | 224);
  }
  n[--e] = 0;
  for (var i = new ht(), s = []; e > 2; ) {
    for (s[0] = 0; s[0] == 0; )
      i.nextBytes(s);
    n[--e] = s[0];
  }
  return n[--e] = 2, n[--e] = 0, new Q(n);
}
var wo = (
  /** @class */
  function() {
    function t() {
      this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
    }
    return t.prototype.doPublic = function(e) {
      return e.modPowInt(this.e, this.n);
    }, t.prototype.doPrivate = function(e) {
      if (this.p == null || this.q == null)
        return e.modPow(this.d, this.n);
      for (var n = e.mod(this.p).modPow(this.dmp1, this.p), r = e.mod(this.q).modPow(this.dmq1, this.q); n.compareTo(r) < 0; )
        n = n.add(this.p);
      return n.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
    }, t.prototype.setPublic = function(e, n) {
      e != null && n != null && e.length > 0 && n.length > 0 ? (this.n = j(e, 16), this.e = parseInt(n, 16)) : console.error("Invalid RSA public key");
    }, t.prototype.encrypt = function(e) {
      var n = this.n.bitLength() + 7 >> 3, r = Eo(e, n);
      if (r == null)
        return null;
      var o = this.doPublic(r);
      if (o == null)
        return null;
      for (var i = o.toString(16), s = i.length, a = 0; a < n * 2 - s; a++)
        i = "0" + i;
      return i;
    }, t.prototype.setPrivate = function(e, n, r) {
      e != null && n != null && e.length > 0 && n.length > 0 ? (this.n = j(e, 16), this.e = parseInt(n, 16), this.d = j(r, 16)) : console.error("Invalid RSA private key");
    }, t.prototype.setPrivateEx = function(e, n, r, o, i, s, a, l) {
      e != null && n != null && e.length > 0 && n.length > 0 ? (this.n = j(e, 16), this.e = parseInt(n, 16), this.d = j(r, 16), this.p = j(o, 16), this.q = j(i, 16), this.dmp1 = j(s, 16), this.dmq1 = j(a, 16), this.coeff = j(l, 16)) : console.error("Invalid RSA private key");
    }, t.prototype.generate = function(e, n) {
      var r = new ht(), o = e >> 1;
      this.e = parseInt(n, 16);
      for (var i = new Q(n, 16); ; ) {
        for (; this.p = new Q(e - o, 1, r), !(this.p.subtract(Q.ONE).gcd(i).compareTo(Q.ONE) == 0 && this.p.isProbablePrime(10)); )
          ;
        for (; this.q = new Q(o, 1, r), !(this.q.subtract(Q.ONE).gcd(i).compareTo(Q.ONE) == 0 && this.q.isProbablePrime(10)); )
          ;
        if (this.p.compareTo(this.q) <= 0) {
          var s = this.p;
          this.p = this.q, this.q = s;
        }
        var a = this.p.subtract(Q.ONE), l = this.q.subtract(Q.ONE), u = a.multiply(l);
        if (u.gcd(i).compareTo(Q.ONE) == 0) {
          this.n = this.p.multiply(this.q), this.d = i.modInverse(u), this.dmp1 = this.d.mod(a), this.dmq1 = this.d.mod(l), this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }, t.prototype.decrypt = function(e) {
      var n = j(e, 16), r = this.doPrivate(n);
      return r == null ? null : xo(r, this.n.bitLength() + 7 >> 3);
    }, t.prototype.generateAsync = function(e, n, r) {
      var o = new ht(), i = e >> 1;
      this.e = parseInt(n, 16);
      var s = new Q(n, 16), a = this, l = function() {
        var u = function() {
          if (a.p.compareTo(a.q) <= 0) {
            var v = a.p;
            a.p = a.q, a.q = v;
          }
          var y = a.p.subtract(Q.ONE), E = a.q.subtract(Q.ONE), S = y.multiply(E);
          S.gcd(s).compareTo(Q.ONE) == 0 ? (a.n = a.p.multiply(a.q), a.d = s.modInverse(S), a.dmp1 = a.d.mod(y), a.dmq1 = a.d.mod(E), a.coeff = a.q.modInverse(a.p), setTimeout(function() {
            r();
          }, 0)) : setTimeout(l, 0);
        }, d = function() {
          a.q = N(), a.q.fromNumberAsync(i, 1, o, function() {
            a.q.subtract(Q.ONE).gcda(s, function(v) {
              v.compareTo(Q.ONE) == 0 && a.q.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(d, 0);
            });
          });
        }, p = function() {
          a.p = N(), a.p.fromNumberAsync(e - i, 1, o, function() {
            a.p.subtract(Q.ONE).gcda(s, function(v) {
              v.compareTo(Q.ONE) == 0 && a.p.isProbablePrime(10) ? setTimeout(d, 0) : setTimeout(p, 0);
            });
          });
        };
        setTimeout(p, 0);
      };
      setTimeout(l, 0);
    }, t.prototype.sign = function(e, n, r) {
      var o = Io(r), i = o + n(e).toString(), s = So(i, this.n.bitLength() / 4);
      if (s == null)
        return null;
      var a = this.doPrivate(s);
      if (a == null)
        return null;
      var l = a.toString(16);
      return l.length & 1 ? "0" + l : l;
    }, t.prototype.verify = function(e, n, r) {
      var o = j(n, 16), i = this.doPublic(o);
      if (i == null)
        return null;
      var s = i.toString(16).replace(/^1f+00/, ""), a = Co(s);
      return a == r(e).toString();
    }, t;
  }()
);
function xo(t, e) {
  for (var n = t.toByteArray(), r = 0; r < n.length && n[r] == 0; )
    ++r;
  if (n.length - r != e - 1 || n[r] != 2)
    return null;
  for (++r; n[r] != 0; )
    if (++r >= n.length)
      return null;
  for (var o = ""; ++r < n.length; ) {
    var i = n[r] & 255;
    i < 128 ? o += String.fromCharCode(i) : i > 191 && i < 224 ? (o += String.fromCharCode((i & 31) << 6 | n[r + 1] & 63), ++r) : (o += String.fromCharCode((i & 15) << 12 | (n[r + 1] & 63) << 6 | n[r + 2] & 63), r += 2);
  }
  return o;
}
var ze = {
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  ripemd160: "3021300906052b2403020105000414"
};
function Io(t) {
  return ze[t] || "";
}
function Co(t) {
  for (var e in ze)
    if (ze.hasOwnProperty(e)) {
      var n = ze[e], r = n.length;
      if (t.substr(0, r) == n)
        return t.substr(r);
    }
  return t;
}
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var F = {};
F.lang = {
  /**
   * Utility to set up the prototype, constructor and superclass properties to
   * support an inheritance strategy that can chain constructors and methods.
   * Static members will not be inherited.
   *
   * @method extend
   * @static
   * @param {Function} subc   the object to modify
   * @param {Function} superc the object to inherit
   * @param {Object} overrides  additional properties/methods to add to the
   *                              subclass prototype.  These will override the
   *                              matching items obtained from the superclass
   *                              if present.
   */
  extend: function(t, e, n) {
    if (!e || !t)
      throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    var r = function() {
    };
    if (r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), n) {
      var o;
      for (o in n)
        t.prototype[o] = n[o];
      var i = function() {
      }, s = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) && (i = function(a, l) {
          for (o = 0; o < s.length; o = o + 1) {
            var u = s[o], d = l[u];
            typeof d == "function" && d != Object.prototype[u] && (a[u] = d);
          }
        });
      } catch {
      }
      i(t.prototype, n);
    }
  }
};
/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */
var g = {};
(typeof g.asn1 > "u" || !g.asn1) && (g.asn1 = {});
g.asn1.ASN1Util = new function() {
  this.integerToByteHex = function(t) {
    var e = t.toString(16);
    return e.length % 2 == 1 && (e = "0" + e), e;
  }, this.bigIntToMinTwosComplementsHex = function(t) {
    var e = t.toString(16);
    if (e.substr(0, 1) != "-")
      e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
    else {
      var n = e.substr(1), r = n.length;
      r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
      for (var o = "", i = 0; i < r; i++)
        o += "f";
      var s = new Q(o, 16), a = s.xor(t).add(Q.ONE);
      e = a.toString(16).replace(/^-/, "");
    }
    return e;
  }, this.getPEMStringFromHex = function(t, e) {
    return hextopem(t, e);
  }, this.newObject = function(t) {
    var e = g, n = e.asn1, r = n.DERBoolean, o = n.DERInteger, i = n.DERBitString, s = n.DEROctetString, a = n.DERNull, l = n.DERObjectIdentifier, u = n.DEREnumerated, d = n.DERUTF8String, p = n.DERNumericString, v = n.DERPrintableString, y = n.DERTeletexString, E = n.DERIA5String, S = n.DERUTCTime, C = n.DERGeneralizedTime, k = n.DERSequence, T = n.DERSet, B = n.DERTaggedObject, A = n.ASN1Util.newObject, D = Object.keys(t);
    if (D.length != 1)
      throw "key of param shall be only one.";
    var _ = D[0];
    if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + _ + ":") == -1)
      throw "undefined key: " + _;
    if (_ == "bool")
      return new r(t[_]);
    if (_ == "int")
      return new o(t[_]);
    if (_ == "bitstr")
      return new i(t[_]);
    if (_ == "octstr")
      return new s(t[_]);
    if (_ == "null")
      return new a(t[_]);
    if (_ == "oid")
      return new l(t[_]);
    if (_ == "enum")
      return new u(t[_]);
    if (_ == "utf8str")
      return new d(t[_]);
    if (_ == "numstr")
      return new p(t[_]);
    if (_ == "prnstr")
      return new v(t[_]);
    if (_ == "telstr")
      return new y(t[_]);
    if (_ == "ia5str")
      return new E(t[_]);
    if (_ == "utctime")
      return new S(t[_]);
    if (_ == "gentime")
      return new C(t[_]);
    if (_ == "seq") {
      for (var $ = t[_], ee = [], ue = 0; ue < $.length; ue++) {
        var q = A($[ue]);
        ee.push(q);
      }
      return new k({ array: ee });
    }
    if (_ == "set") {
      for (var $ = t[_], ee = [], ue = 0; ue < $.length; ue++) {
        var q = A($[ue]);
        ee.push(q);
      }
      return new T({ array: ee });
    }
    if (_ == "tag") {
      var H = t[_];
      if (Object.prototype.toString.call(H) === "[object Array]" && H.length == 3) {
        var it = A(H[2]);
        return new B({
          tag: H[0],
          explicit: H[1],
          obj: it
        });
      } else {
        var we = {};
        if (H.explicit !== void 0 && (we.explicit = H.explicit), H.tag !== void 0 && (we.tag = H.tag), H.obj === void 0)
          throw "obj shall be specified for 'tag'.";
        return we.obj = A(H.obj), new B(we);
      }
    }
  }, this.jsonToASN1HEX = function(t) {
    var e = this.newObject(t);
    return e.getEncodedHex();
  };
}();
g.asn1.ASN1Util.oidHexToInt = function(t) {
  for (var o = "", e = parseInt(t.substr(0, 2), 16), n = Math.floor(e / 40), r = e % 40, o = n + "." + r, i = "", s = 2; s < t.length; s += 2) {
    var a = parseInt(t.substr(s, 2), 16), l = ("00000000" + a.toString(2)).slice(-8);
    if (i = i + l.substr(1, 7), l.substr(0, 1) == "0") {
      var u = new Q(i, 2);
      o = o + "." + u.toString(10), i = "";
    }
  }
  return o;
};
g.asn1.ASN1Util.oidIntToHex = function(t) {
  var e = function(a) {
    var l = a.toString(16);
    return l.length == 1 && (l = "0" + l), l;
  }, n = function(a) {
    var l = "", u = new Q(a, 10), d = u.toString(2), p = 7 - d.length % 7;
    p == 7 && (p = 0);
    for (var v = "", y = 0; y < p; y++)
      v += "0";
    d = v + d;
    for (var y = 0; y < d.length - 1; y += 7) {
      var E = d.substr(y, 7);
      y != d.length - 7 && (E = "1" + E), l += e(parseInt(E, 2));
    }
    return l;
  };
  if (!t.match(/^[0-9.]+$/))
    throw "malformed oid string: " + t;
  var r = "", o = t.split("."), i = parseInt(o[0]) * 40 + parseInt(o[1]);
  r += e(i), o.splice(0, 2);
  for (var s = 0; s < o.length; s++)
    r += n(o[s]);
  return r;
};
g.asn1.ASN1Object = function() {
  var t = "";
  this.getLengthHexFromValue = function() {
    if (typeof this.hV > "u" || this.hV == null)
      throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1)
      throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
    var e = this.hV.length / 2, n = e.toString(16);
    if (n.length % 2 == 1 && (n = "0" + n), e < 128)
      return n;
    var r = n.length / 2;
    if (r > 15)
      throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
    var o = 128 + r;
    return o.toString(16) + n;
  }, this.getEncodedHex = function() {
    return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
  }, this.getValueHex = function() {
    return this.getEncodedHex(), this.hV;
  }, this.getFreshValueHex = function() {
    return "";
  };
};
g.asn1.DERAbstractString = function(t) {
  g.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
    return this.s;
  }, this.setString = function(e) {
    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(this.s);
  }, this.setStringHex = function(e) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof t < "u" && (typeof t == "string" ? this.setString(t) : typeof t.str < "u" ? this.setString(t.str) : typeof t.hex < "u" && this.setStringHex(t.hex));
};
F.lang.extend(g.asn1.DERAbstractString, g.asn1.ASN1Object);
g.asn1.DERAbstractTime = function(t) {
  g.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(e) {
    utc = e.getTime() + e.getTimezoneOffset() * 6e4;
    var n = new Date(utc);
    return n;
  }, this.formatDate = function(e, n, r) {
    var o = this.zeroPadding, i = this.localDateToUTC(e), s = String(i.getFullYear());
    n == "utc" && (s = s.substr(2, 2));
    var a = o(String(i.getMonth() + 1), 2), l = o(String(i.getDate()), 2), u = o(String(i.getHours()), 2), d = o(String(i.getMinutes()), 2), p = o(String(i.getSeconds()), 2), v = s + a + l + u + d + p;
    if (r === !0) {
      var y = i.getMilliseconds();
      if (y != 0) {
        var E = o(String(y), 3);
        E = E.replace(/[0]+$/, ""), v = v + "." + E;
      }
    }
    return v + "Z";
  }, this.zeroPadding = function(e, n) {
    return e.length >= n ? e : new Array(n - e.length + 1).join("0") + e;
  }, this.getString = function() {
    return this.s;
  }, this.setString = function(e) {
    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(e);
  }, this.setByDateValue = function(e, n, r, o, i, s) {
    var a = new Date(Date.UTC(e, n - 1, r, o, i, s, 0));
    this.setByDate(a);
  }, this.getFreshValueHex = function() {
    return this.hV;
  };
};
F.lang.extend(g.asn1.DERAbstractTime, g.asn1.ASN1Object);
g.asn1.DERAbstractStructured = function(t) {
  g.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(e) {
    this.hTLV = null, this.isModified = !0, this.asn1Array = e;
  }, this.appendASN1Object = function(e) {
    this.hTLV = null, this.isModified = !0, this.asn1Array.push(e);
  }, this.asn1Array = new Array(), typeof t < "u" && typeof t.array < "u" && (this.asn1Array = t.array);
};
F.lang.extend(g.asn1.DERAbstractStructured, g.asn1.ASN1Object);
g.asn1.DERBoolean = function() {
  g.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
};
F.lang.extend(g.asn1.DERBoolean, g.asn1.ASN1Object);
g.asn1.DERInteger = function(t) {
  g.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(e) {
    this.hTLV = null, this.isModified = !0, this.hV = g.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
  }, this.setByInteger = function(e) {
    var n = new Q(String(e), 10);
    this.setByBigInteger(n);
  }, this.setValueHex = function(e) {
    this.hV = e;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof t < "u" && (typeof t.bigint < "u" ? this.setByBigInteger(t.bigint) : typeof t.int < "u" ? this.setByInteger(t.int) : typeof t == "number" ? this.setByInteger(t) : typeof t.hex < "u" && this.setValueHex(t.hex));
};
F.lang.extend(g.asn1.DERInteger, g.asn1.ASN1Object);
g.asn1.DERBitString = function(t) {
  if (t !== void 0 && typeof t.obj < "u") {
    var e = g.asn1.ASN1Util.newObject(t.obj);
    t.hex = "00" + e.getEncodedHex();
  }
  g.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(n) {
    this.hTLV = null, this.isModified = !0, this.hV = n;
  }, this.setUnusedBitsAndHexValue = function(n, r) {
    if (n < 0 || 7 < n)
      throw "unused bits shall be from 0 to 7: u = " + n;
    var o = "0" + n;
    this.hTLV = null, this.isModified = !0, this.hV = o + r;
  }, this.setByBinaryString = function(n) {
    n = n.replace(/0+$/, "");
    var r = 8 - n.length % 8;
    r == 8 && (r = 0);
    for (var o = 0; o <= r; o++)
      n += "0";
    for (var i = "", o = 0; o < n.length - 1; o += 8) {
      var s = n.substr(o, 8), a = parseInt(s, 2).toString(16);
      a.length == 1 && (a = "0" + a), i += a;
    }
    this.hTLV = null, this.isModified = !0, this.hV = "0" + r + i;
  }, this.setByBooleanArray = function(n) {
    for (var r = "", o = 0; o < n.length; o++)
      n[o] == !0 ? r += "1" : r += "0";
    this.setByBinaryString(r);
  }, this.newFalseArray = function(n) {
    for (var r = new Array(n), o = 0; o < n; o++)
      r[o] = !1;
    return r;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof t < "u" && (typeof t == "string" && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : typeof t.hex < "u" ? this.setHexValueIncludingUnusedBits(t.hex) : typeof t.bin < "u" ? this.setByBinaryString(t.bin) : typeof t.array < "u" && this.setByBooleanArray(t.array));
};
F.lang.extend(g.asn1.DERBitString, g.asn1.ASN1Object);
g.asn1.DEROctetString = function(t) {
  if (t !== void 0 && typeof t.obj < "u") {
    var e = g.asn1.ASN1Util.newObject(t.obj);
    t.hex = e.getEncodedHex();
  }
  g.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
};
F.lang.extend(g.asn1.DEROctetString, g.asn1.DERAbstractString);
g.asn1.DERNull = function() {
  g.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
};
F.lang.extend(g.asn1.DERNull, g.asn1.ASN1Object);
g.asn1.DERObjectIdentifier = function(t) {
  var e = function(r) {
    var o = r.toString(16);
    return o.length == 1 && (o = "0" + o), o;
  }, n = function(r) {
    var o = "", i = new Q(r, 10), s = i.toString(2), a = 7 - s.length % 7;
    a == 7 && (a = 0);
    for (var l = "", u = 0; u < a; u++)
      l += "0";
    s = l + s;
    for (var u = 0; u < s.length - 1; u += 7) {
      var d = s.substr(u, 7);
      u != s.length - 7 && (d = "1" + d), o += e(parseInt(d, 2));
    }
    return o;
  };
  g.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(r) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r;
  }, this.setValueOidString = function(r) {
    if (!r.match(/^[0-9.]+$/))
      throw "malformed oid string: " + r;
    var o = "", i = r.split("."), s = parseInt(i[0]) * 40 + parseInt(i[1]);
    o += e(s), i.splice(0, 2);
    for (var a = 0; a < i.length; a++)
      o += n(i[a]);
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = o;
  }, this.setValueName = function(r) {
    var o = g.asn1.x509.OID.name2oid(r);
    if (o !== "")
      this.setValueOidString(o);
    else
      throw "DERObjectIdentifier oidName undefined: " + r;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, t !== void 0 && (typeof t == "string" ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : t.oid !== void 0 ? this.setValueOidString(t.oid) : t.hex !== void 0 ? this.setValueHex(t.hex) : t.name !== void 0 && this.setValueName(t.name));
};
F.lang.extend(g.asn1.DERObjectIdentifier, g.asn1.ASN1Object);
g.asn1.DEREnumerated = function(t) {
  g.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(e) {
    this.hTLV = null, this.isModified = !0, this.hV = g.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
  }, this.setByInteger = function(e) {
    var n = new Q(String(e), 10);
    this.setByBigInteger(n);
  }, this.setValueHex = function(e) {
    this.hV = e;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof t < "u" && (typeof t.int < "u" ? this.setByInteger(t.int) : typeof t == "number" ? this.setByInteger(t) : typeof t.hex < "u" && this.setValueHex(t.hex));
};
F.lang.extend(g.asn1.DEREnumerated, g.asn1.ASN1Object);
g.asn1.DERUTF8String = function(t) {
  g.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
};
F.lang.extend(g.asn1.DERUTF8String, g.asn1.DERAbstractString);
g.asn1.DERNumericString = function(t) {
  g.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
};
F.lang.extend(g.asn1.DERNumericString, g.asn1.DERAbstractString);
g.asn1.DERPrintableString = function(t) {
  g.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
};
F.lang.extend(g.asn1.DERPrintableString, g.asn1.DERAbstractString);
g.asn1.DERTeletexString = function(t) {
  g.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
};
F.lang.extend(g.asn1.DERTeletexString, g.asn1.DERAbstractString);
g.asn1.DERIA5String = function(t) {
  g.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
};
F.lang.extend(g.asn1.DERIA5String, g.asn1.DERAbstractString);
g.asn1.DERUTCTime = function(t) {
  g.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(e) {
    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return typeof this.date > "u" && typeof this.s > "u" && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
  }, t !== void 0 && (t.str !== void 0 ? this.setString(t.str) : typeof t == "string" && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : t.hex !== void 0 ? this.setStringHex(t.hex) : t.date !== void 0 && this.setByDate(t.date));
};
F.lang.extend(g.asn1.DERUTCTime, g.asn1.DERAbstractTime);
g.asn1.DERGeneralizedTime = function(t) {
  g.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(e) {
    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return this.date === void 0 && this.s === void 0 && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
  }, t !== void 0 && (t.str !== void 0 ? this.setString(t.str) : typeof t == "string" && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : t.hex !== void 0 ? this.setStringHex(t.hex) : t.date !== void 0 && this.setByDate(t.date), t.millis === !0 && (this.withMillis = !0));
};
F.lang.extend(g.asn1.DERGeneralizedTime, g.asn1.DERAbstractTime);
g.asn1.DERSequence = function(t) {
  g.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
    for (var e = "", n = 0; n < this.asn1Array.length; n++) {
      var r = this.asn1Array[n];
      e += r.getEncodedHex();
    }
    return this.hV = e, this.hV;
  };
};
F.lang.extend(g.asn1.DERSequence, g.asn1.DERAbstractStructured);
g.asn1.DERSet = function(t) {
  g.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
    for (var e = new Array(), n = 0; n < this.asn1Array.length; n++) {
      var r = this.asn1Array[n];
      e.push(r.getEncodedHex());
    }
    return this.sortFlag == !0 && e.sort(), this.hV = e.join(""), this.hV;
  }, typeof t < "u" && typeof t.sortflag < "u" && t.sortflag == !1 && (this.sortFlag = !1);
};
F.lang.extend(g.asn1.DERSet, g.asn1.DERAbstractStructured);
g.asn1.DERTaggedObject = function(t) {
  g.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(e, n, r) {
    this.hT = n, this.isExplicit = e, this.asn1Object = r, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = r.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, n), this.isModified = !1);
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof t < "u" && (typeof t.tag < "u" && (this.hT = t.tag), typeof t.explicit < "u" && (this.isExplicit = t.explicit), typeof t.obj < "u" && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
F.lang.extend(g.asn1.DERTaggedObject, g.asn1.ASN1Object);
var _o = globalThis && globalThis.__extends || function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), jt = (
  /** @class */
  function(t) {
    _o(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return n && (typeof n == "string" ? r.parseKey(n) : (e.hasPrivateKeyProperty(n) || e.hasPublicKeyProperty(n)) && r.parsePropertiesFrom(n)), r;
    }
    return e.prototype.parseKey = function(n) {
      try {
        var r = 0, o = 0, i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, s = i.test(n) ? uo.decode(n) : ft.unarmor(n), a = ho.decode(s);
        if (a.sub.length === 3 && (a = a.sub[2].sub[0]), a.sub.length === 9) {
          r = a.sub[1].getHexStringValue(), this.n = j(r, 16), o = a.sub[2].getHexStringValue(), this.e = parseInt(o, 16);
          var l = a.sub[3].getHexStringValue();
          this.d = j(l, 16);
          var u = a.sub[4].getHexStringValue();
          this.p = j(u, 16);
          var d = a.sub[5].getHexStringValue();
          this.q = j(d, 16);
          var p = a.sub[6].getHexStringValue();
          this.dmp1 = j(p, 16);
          var v = a.sub[7].getHexStringValue();
          this.dmq1 = j(v, 16);
          var y = a.sub[8].getHexStringValue();
          this.coeff = j(y, 16);
        } else if (a.sub.length === 2)
          if (a.sub[0].sub) {
            var E = a.sub[1], S = E.sub[0];
            r = S.sub[0].getHexStringValue(), this.n = j(r, 16), o = S.sub[1].getHexStringValue(), this.e = parseInt(o, 16);
          } else
            r = a.sub[0].getHexStringValue(), this.n = j(r, 16), o = a.sub[1].getHexStringValue(), this.e = parseInt(o, 16);
        else
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }, e.prototype.getPrivateBaseKey = function() {
      var n = {
        array: [
          new g.asn1.DERInteger({ int: 0 }),
          new g.asn1.DERInteger({ bigint: this.n }),
          new g.asn1.DERInteger({ int: this.e }),
          new g.asn1.DERInteger({ bigint: this.d }),
          new g.asn1.DERInteger({ bigint: this.p }),
          new g.asn1.DERInteger({ bigint: this.q }),
          new g.asn1.DERInteger({ bigint: this.dmp1 }),
          new g.asn1.DERInteger({ bigint: this.dmq1 }),
          new g.asn1.DERInteger({ bigint: this.coeff })
        ]
      }, r = new g.asn1.DERSequence(n);
      return r.getEncodedHex();
    }, e.prototype.getPrivateBaseKeyB64 = function() {
      return Ze(this.getPrivateBaseKey());
    }, e.prototype.getPublicBaseKey = function() {
      var n = new g.asn1.DERSequence({
        array: [
          new g.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
          new g.asn1.DERNull()
        ]
      }), r = new g.asn1.DERSequence({
        array: [
          new g.asn1.DERInteger({ bigint: this.n }),
          new g.asn1.DERInteger({ int: this.e })
        ]
      }), o = new g.asn1.DERBitString({
        hex: "00" + r.getEncodedHex()
      }), i = new g.asn1.DERSequence({
        array: [n, o]
      });
      return i.getEncodedHex();
    }, e.prototype.getPublicBaseKeyB64 = function() {
      return Ze(this.getPublicBaseKey());
    }, e.wordwrap = function(n, r) {
      if (r = r || 64, !n)
        return n;
      var o = "(.{1," + r + `})( +|$
?)|(.{1,` + r + "})";
      return n.match(RegExp(o, "g")).join(`
`);
    }, e.prototype.getPrivateKey = function() {
      var n = `-----BEGIN RSA PRIVATE KEY-----
`;
      return n += e.wordwrap(this.getPrivateBaseKeyB64()) + `
`, n += "-----END RSA PRIVATE KEY-----", n;
    }, e.prototype.getPublicKey = function() {
      var n = `-----BEGIN PUBLIC KEY-----
`;
      return n += e.wordwrap(this.getPublicBaseKeyB64()) + `
`, n += "-----END PUBLIC KEY-----", n;
    }, e.hasPublicKeyProperty = function(n) {
      return n = n || {}, n.hasOwnProperty("n") && n.hasOwnProperty("e");
    }, e.hasPrivateKeyProperty = function(n) {
      return n = n || {}, n.hasOwnProperty("n") && n.hasOwnProperty("e") && n.hasOwnProperty("d") && n.hasOwnProperty("p") && n.hasOwnProperty("q") && n.hasOwnProperty("dmp1") && n.hasOwnProperty("dmq1") && n.hasOwnProperty("coeff");
    }, e.prototype.parsePropertiesFrom = function(n) {
      this.n = n.n, this.e = n.e, n.hasOwnProperty("d") && (this.d = n.d, this.p = n.p, this.q = n.q, this.dmp1 = n.dmp1, this.dmq1 = n.dmq1, this.coeff = n.coeff);
    }, e;
  }(wo)
), lt, ko = typeof process < "u" ? (lt = process.env) === null || lt === void 0 ? void 0 : lt.npm_package_version : void 0, Cn = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), e = e || {}, this.default_key_size = e.default_key_size ? parseInt(e.default_key_size, 10) : 1024, this.default_public_exponent = e.default_public_exponent || "010001", this.log = e.log || !1, this.key = null;
    }
    return t.prototype.setKey = function(e) {
      this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new jt(e);
    }, t.prototype.setPrivateKey = function(e) {
      this.setKey(e);
    }, t.prototype.setPublicKey = function(e) {
      this.setKey(e);
    }, t.prototype.decrypt = function(e) {
      try {
        return this.getKey().decrypt(Nt(e));
      } catch {
        return !1;
      }
    }, t.prototype.encrypt = function(e) {
      try {
        return Ze(this.getKey().encrypt(e));
      } catch {
        return !1;
      }
    }, t.prototype.sign = function(e, n, r) {
      try {
        return Ze(this.getKey().sign(e, n, r));
      } catch {
        return !1;
      }
    }, t.prototype.verify = function(e, n, r) {
      try {
        return this.getKey().verify(e, Nt(n), r);
      } catch {
        return !1;
      }
    }, t.prototype.getKey = function(e) {
      if (!this.key) {
        if (this.key = new jt(), e && {}.toString.call(e) === "[object Function]") {
          this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
          return;
        }
        this.key.generate(this.default_key_size, this.default_public_exponent);
      }
      return this.key;
    }, t.prototype.getPrivateKey = function() {
      return this.getKey().getPrivateKey();
    }, t.prototype.getPrivateKeyB64 = function() {
      return this.getKey().getPrivateBaseKeyB64();
    }, t.prototype.getPublicKey = function() {
      return this.getKey().getPublicKey();
    }, t.prototype.getPublicKeyB64 = function() {
      return this.getKey().getPublicBaseKeyB64();
    }, t.version = ko, t;
  }()
);
const To = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtrO3ZQTT1aOWToritHcXVDFDzxFYoJN4jOcumMcfRO/DMJ7T/hWYG/UsIcDP9s8QIttpAE7Aw8xV+7tDeeCk0mYf60qsKYyaYXj9Y3TUXFrZvATbwb3aytx0/Zsi1LslvzjTk6bqEsmIuGAc30D2B3CCABrkIlnpvVmFrwQySpQIDAQAB", Bo = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAK2s7dlBNPVo5ZOiuK0dxdUMUPPEVigk3iM5y6Yxx9E78MwntP+FZgb9SwhwM/2zxAi22kATsDDzFX7u0N54KTSZh/rSqwpjJpheP1jdNRcWtm8BNvBvdrK3HT9myLUuyW/ONOTpuoSyYi4YBzfQPYHcIIAGuQiWem9WYWvBDJKlAgMBAAECgYBlU6tBQcYAGD85L4rHlcNCVXk1f6s0qK3hp2qlgA2wiWQn+FKlcdLg6Q7J0YzDzAnne6dCEzqMlIZKFFNQOJLw4ovVQYmFEBhfNS4ZjHFf8m+qFL+y9KpyG/NogHa59nNJsDr9sIxjHyqqyJKj9ztxR+3fTpvJEAcPkeHMltn3gQJBAOPEJxyXFSBh35T5XnfoeFZNnTGi3iefYpjzLPMcHvw/6OS/UhlwJgBSM9p3VwoXWnVGXD+iFPnTyZDEtBY3KdkCQQDDNEgsPn7nkcMdAki9cWNMh81BW/C4trqHl1Xw4XaIymPHSDhnZuuzY7Vx76uTByow8pG17dhL58FFDdLz7cOtAkBc8E9dVTDjs8w9x7uKhiuEW8tG08R+uoTLEH9I/DKQj6uCm6buhlqbSu+pt4Sms3zP2dQOix6wCoF3Nyyc3AmRAkAZ2cehDFm0Awqqwc2uQODclrNo72sOmyxSnokEEGepL9xM3NSTZP7bz92MjCfVncJJnyYKyMe3LabbpTwFj7w1AkBSo3wi5c7XJA0KtebVihkREPeLW6825zjLD9jRmBprW2Pbyj+80IX6D5WJT+jZ1fg7R8D86yZeJddoe9gc5k5T", Ro = (t, e = To) => {
  let n = new Cn();
  return n.setPublicKey(e), n.encrypt(t);
}, Do = (t, e = Bo) => {
  let n = new Cn();
  return n.setPrivateKey(e), n.decrypt(t);
}, Qo = P({
  name: "ShFormItem"
}), No = /* @__PURE__ */ Object.assign(Qo, {
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    rule: {
      type: [Array, String, Object],
      default: ""
    }
  },
  setup(t) {
    const e = t, n = {
      required: {
        required: !0,
        validator(i, s) {
          return mn(s) || Oe(s) ? new Error("必填项不能为空") : !0;
        },
        trigger: "blur"
      },
      account: {
        validator(i, s) {
          const a = s.length;
          return s === "" ? !0 : a < 8 || a > 32 ? new Error("必须为8-32位") : r(s) < 3 ? new Error("必须包含数字、大小写字母三种") : !0;
        },
        trigger: "blur"
      },
      password: {
        validator(i, s) {
          const a = s.length;
          return s === "" ? !0 : a < 8 || a > 30 ? new Error("必须为8-32位") : r(s) < 3 ? new Error("必须包含数字、大小写字母三种") : !0;
        },
        trigger: "blur"
      },
      number: { type: "number", message: "请输入数字", trigger: "blur" },
      integer: { type: "integer", message: "请输入整数", trigger: "blur" },
      email: { type: "email", message: "请输入正确的邮箱", trigger: "blur" },
      date: { type: "date", message: "请输入正确的日期", trigger: "blur" },
      phone: { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" }
    }, r = (i) => {
      let s = 0;
      return /\d/.test(i) && s++, /[a-z]/.test(i) && s++, /[A-Z]/.test(i) && s++, s;
    }, o = O([]);
    return ne(
      () => e.rule,
      (i) => {
        if (!i)
          return;
        let s = [];
        typeof i == "string" ? s = i.split("||") : vn(s) ? s = [...i] : s.push(i), s.forEach((a) => {
          typeof a == "string" && n[a] ? o.value.push(n[a]) : typeof a == "object" && o.value.push(a);
        });
      },
      { immediate: !0 }
    ), (i, s) => {
      const a = tr, l = rn;
      return m(), I(l, { span: t.span }, {
        default: h(() => [
          f(a, W(i.$attrs, { rule: o.value }), {
            default: h(() => [
              (m(!0), x(Z, null, ce(Object.keys(i.$slots), (u) => U(i.$slots, u, { key: u })), 128))
            ]),
            _: 3
          }, 16, ["rule"])
        ]),
        _: 3
      }, 8, ["span"]);
    };
  }
}), Oo = P({
  name: "ShContainer"
}), Jo = /* @__PURE__ */ Object.assign(Oo, {
  props: {
    inverted: Boolean
  },
  setup(t) {
    return (e, n) => {
      const r = sn;
      return m(), x("div", {
        class: z(["dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out", t.inverted ? "bg-[#001428] text-white dark" : "bg-white"])
      }, [
        f(r, {
          theme: t.inverted ? c(on) : void 0,
          class: "h-full"
        }, {
          default: h(() => [
            U(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["theme"])
      ], 2);
    };
  }
}), Po = P({
  name: "ShBetterScroll"
}), Lo = /* @__PURE__ */ Object.assign(Po, {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { expose: e }) {
    const n = t, r = O(), o = O(), i = O(), s = R(() => Boolean(n.options.scrollY)), a = () => {
      r.value && (o.value = new kr(r.value, n.options));
    }, { width: l } = Tt(r), { width: u, height: d } = Tt(i);
    return ne([() => l.value, () => u.value, () => d.value], () => {
      o.value && o.value.refresh();
    }), Gt(() => {
      a();
    }), e({ instance: o }), (p, v) => (m(), x("div", {
      ref_key: "bsWrap",
      ref: r,
      class: "h-full"
    }, [
      w("div", {
        ref_key: "bsContent",
        ref: i,
        class: z(["inline-block", { "h-full": !c(s) }])
      }, [
        U(p.$slots, "default")
      ], 2)
    ], 512));
  }
});
const Uo = { class: "text-[#515E78] dark:text-[#515e78] text-15" }, Vo = {
  key: 0,
  class: "h-50 items-center flex justify-between px-20 border border-[#efeff5] dark:border-[#2d2d30] rounded-br-3 rounded-bl-3"
}, jo = P({
  name: "ShDataTable"
}), qo = /* @__PURE__ */ Object.assign(jo, {
  props: {
    api: {
      type: Function,
      default: void 0
    },
    // 加载就请求
    autoload: {
      type: Boolean,
      default: !0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String,
      default: "large"
    },
    columns: {
      type: Array,
      default: () => []
    },
    showPage: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["callback"],
  setup(t, { expose: e, emit: n }) {
    const r = t, o = O([]), i = O(!1), s = le({
      page: 1,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      itemCount: 0,
      showSizePicker: !0,
      onChange: (d) => {
        s.page = d, l();
      },
      onUpdatePageSize: (d) => {
        s.pageSize = d, s.page = 1, l();
      }
    }), a = R(() => r.columns.map((d) => d.type === "index" ? {
      width: "60",
      title: "序号",
      render: (p, v) => v + 1,
      ...d
    } : d)), l = async (d = {}) => {
      i.value = !0;
      const { code: p, msg: v, data: y, count: E } = await r.api({
        page: s.page,
        limit: s.pageSize,
        ...r.params,
        ...d
      });
      i.value = !1, n("callback", y || []), p === 0 ? (o.value = y, s.itemCount = E) : (o.value = [], s.itemCount = 0, $message.error(v));
    };
    return r.autoload && r.api && l(), e({
      loadList: l,
      setTableData: ({ data: d, count: p = 0 }) => {
        o.value = d, s.itemCount = p;
      }
    }), (d, p) => {
      const v = nr, y = rr, E = Je;
      return m(), x("div", Uo, [
        f(E, { show: i.value }, {
          default: h(() => [
            f(v, W({ class: "rounded-10" }, d.$attrs, {
              columns: c(a),
              data: o.value,
              remote: !0,
              size: t.size
            }), null, 16, ["columns", "data", "size"]),
            t.showPage ? (m(), x("div", Vo, [
              w("div", null, "共 " + te(s.itemCount) + " 项数据", 1),
              f(y, {
                page: s.page,
                "onUpdate:page": [
                  p[0] || (p[0] = (S) => s.page = S),
                  s.onChange
                ],
                "page-size": s.pageSize,
                "item-count": s.itemCount,
                "show-size-picker": "",
                "page-sizes": s.pageSizes,
                "onUpdate:pageSize": s.onUpdatePageSize
              }, null, 8, ["page", "page-size", "item-count", "page-sizes", "onUpdate:page", "onUpdate:pageSize"])
            ])) : V("", !0)
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
}), Fo = /* @__PURE__ */ K(qo, [["__scopeId", "data-v-c74c8620"]]), G = Pe("app", {
  state() {
    return {
      env: null,
      reloadFlag: !0,
      // 重载页面
      collapsed: !1,
      // 侧边栏折叠状态
      settingDrawerVisible: !1,
      // 项目配置的抽屉可见状态
      loading: !1,
      router: null
    };
  },
  getters: {
    title() {
      var t;
      return (t = this.env) == null ? void 0 : t.VITE_APP_TITLE;
    },
    baseURL() {
      var t;
      return (t = this.env) == null ? void 0 : t.VITE_APP_BASE_API;
    }
  },
  actions: {
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(t) {
      this.collapsed = t;
    },
    //**设置抽屉的可见性 */
    setSettingDrawer(t) {
      this.settingDrawerVisible = t;
    },
    setEnv(t) {
      this.env = t;
    },
    setRouter(t) {
      this.router = t;
    },
    onLink(t) {
      this.router.push(t);
    },
    /** 重新加载页面 */
    async reloadPage() {
      $loadingBar.start(), this.reloadFlag = !1, await Xe(), this.reloadFlag = !0, setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 }), $loadingBar.finish();
      }, 100);
    }
  }
}), Mo = Ye.CancelToken;
let pt = Mo.source();
function Ho(t) {
  t.method === "get" && (t.params = { ...t.params, t: new Date().getTime() });
  const n = oe().token;
  return n && (t.headers.authorization = `Bearer ${t.headers.token || n}`), t.cancelToken = pt.token, t;
}
function Wo(t) {
  return Promise.reject(t);
}
function zo(t) {
  var e;
  return t.headers["content-type"].includes("text/plain;charset=UTF-8") && t.data ? t.data : ((e = t == null ? void 0 : t.data) == null ? void 0 : e.code) === 0 ? t == null ? void 0 : t.data : _n(t == null ? void 0 : t.data);
}
function _n(t) {
  let { code: e, msg: n } = t || {};
  if (Oe(e))
    e = 99, n = "未知错误";
  else if (e === 5) {
    if (n = n || "登录已过期", pt.cancel(), setTimeout(() => {
      pt = Ye.CancelToken.source();
    }, 1e3), Ye.isCancel(t))
      return new Promise(() => {
      });
    Ko();
  }
  return console.error(`【${e}】 ${n}`), Promise.resolve({ ...t, msg: n });
}
const Ko = () => {
  $dialog.info({
    title: "提示",
    content: "登录过期,返回登录页？",
    positiveText: "确定",
    onPositiveClick: async () => {
      oe().logout();
    }
  });
};
function Xo(t = {}) {
  const e = {
    baseURL: "",
    timeout: 3e4,
    method: "post"
  }, n = Ye.create({
    ...e,
    ...t
  });
  return n.interceptors.request.use(Ho, Wo), n.interceptors.response.use(zo, _n), n;
}
const Go = () => {
  const t = G();
  return Xo({
    baseURL: t.baseURL
  });
}, gt = "ACCESS_USERINFO", mt = "ACCESS_TOKEN";
function kn() {
  return fe.get(gt);
}
function Tn() {
  return fe.get(mt);
}
function Bn(t = []) {
  return t.map((e) => e.children && e.children.length ? {
    ...e,
    children: Bn(e.children)
  } : (delete e.children, e));
}
const oe = Pe("user", {
  state() {
    return {
      token: Tn(),
      userInfo: kn(),
      activeMenu: ""
    };
  },
  getters: {
    userId() {
      var t;
      return (t = this.userInfo) == null ? void 0 : t.personId;
    },
    name() {
      var t;
      return (t = this.userInfo) == null ? void 0 : t.loginName;
    },
    avatar() {
      var t;
      return (t = this.userInfo) == null ? void 0 : t.avatar;
    },
    menuList() {
      var t;
      return Bn((t = this.userInfo) == null ? void 0 : t.menuList);
    },
    resourceCode() {
      return this.userInfo.resourceCodes;
    }
  },
  actions: {
    // 退出登录
    async logout() {
      this.removeUserInfo(), this.removeToken(), jn("/login");
    },
    // 设置用户信息
    setUserInfo(t = {}) {
      this.userInfo = t, fe.set(gt, t);
    },
    // 清除用户信息
    removeUserInfo() {
      this.userInfo = void 0, fe.remove(gt);
    },
    // 设置用户信息
    setToken(t) {
      this.token = t, fe.set(mt, t);
    },
    // 清除token
    removeToken() {
      this.token = "", fe.remove(mt);
    }
  }
}), Yo = !1, Zo = !0, $o = {
  minWidth: 900,
  mode: "vertical-mix",
  modeList: [
    {
      value: "horizontal",
      label: "顶部菜单模式"
    },
    {
      value: "vertical-mix",
      label: "左侧菜单模式"
    }
  ]
}, ei = "#1B5EC9", ti = [
  "#1B5EC9",
  "#409EFF",
  "#2d8cf0",
  "#007AFF",
  "#5ac8fa",
  "#5856D6",
  "#536dfe",
  "#9c27b0",
  "#AF52DE",
  "#0096c7",
  "#00C1D4",
  "#34C759",
  "#43a047",
  "#7cb342",
  "#c0ca33",
  "#78DEC7",
  "#e53935",
  "#d81b60",
  "#f4511e",
  "#fb8c00",
  "#ffb300",
  "#fdd835",
  "#6d4c41",
  "#546e7a"
], ni = {
  info: "#0099ad",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d"
}, ri = !1, oi = !0, ii = !0, si = {
  inverted: !1,
  height: 60,
  crumb: {
    visible: !0,
    showIcon: !0
  }
}, ai = {
  visible: !0,
  height: 36,
  mode: "chrome",
  modeList: [
    {
      value: "chrome",
      label: "谷歌风格"
    },
    {
      value: "button",
      label: "按钮风格"
    }
  ],
  isCache: !0
}, li = {
  inverted: !1,
  width: 220,
  collapsedWidth: 64,
  mixWidth: 80,
  mixCollapsedWidth: 48,
  mixChildMenuWidth: 200
}, ui = {
  showIcon: !0,
  horizontalPosition: "flex-start",
  horizontalPositionList: [
    {
      value: "flex-start",
      label: "居左"
    },
    {
      value: "center",
      label: "居中"
    },
    {
      value: "flex-end",
      label: "居右"
    }
  ]
}, ci = {
  show: !1,
  fixed: !1,
  height: 48
}, di = {
  animate: !0,
  animateMode: "fade-slide",
  animateModeList: [
    {
      value: "fade-slide",
      label: "滑动"
    },
    {
      value: "fade",
      label: "消退"
    },
    {
      value: "fade-bottom",
      label: "底部消退"
    },
    {
      value: "fade-scale",
      label: "缩放消退"
    },
    {
      value: "zoom-fade",
      label: "渐变"
    },
    {
      value: "zoom-out",
      label: "闪现"
    }
  ]
}, fi = {
  darkMode: Yo,
  followSystemTheme: Zo,
  layout: $o,
  themeColor: ei,
  themeColorList: ti,
  otherColor: ni,
  isCustomizeInfoColor: ri,
  fixedHeaderAndTab: oi,
  showReload: ii,
  header: si,
  tab: ai,
  sider: li,
  menu: ui,
  footer: ci,
  page: di
}, vt = {
  common: {
    primaryColor: "#1B5EC9",
    tabColor: "red",
    textColor1: "#202837",
    textColor2: "#515E78",
    textColor3: "#8996AF",
    textColor3: "#C0C7D4"
  },
  Modal: {
    peers: {
      Card: {
        common: {
          borderRadius: "8px"
        }
      }
    }
  },
  Table: {
    common: {
      lineHeight: 1.8,
      fontSizeLarge: "14px"
    }
  }
}, hi = [
  "#1B5EC9",
  "#1890ff",
  "#409EFF",
  "#2d8cf0",
  "#007AFF",
  "#5ac8fa",
  "#5856D6",
  "#536dfe",
  "#9c27b0",
  "#AF52DE",
  "#0096c7",
  "#00C1D4",
  "#34C759",
  "#43a047",
  "#7cb342",
  "#c0ca33",
  "#78DEC7",
  "#e53935",
  "#d81b60",
  "#f4511e",
  "#fb8c00",
  "#ffb300",
  "#fdd835",
  "#6d4c41",
  "#546e7a"
];
function pi() {
  const t = ke.get("theme-settings");
  return t || fi;
}
const Rn = "dark";
function gi() {
  document.documentElement.classList.add(Rn);
}
function mi() {
  document.documentElement.classList.remove(Rn);
}
function vi(t) {
  ke.set("theme-settings", t);
}
function Ai() {
  ke.remove("theme-settings");
}
function yi({ themeColor: t, darkMode: e }) {
  return e ? {
    common: {
      primaryColor: t,
      primaryColorHover: Se(t, 5),
      primaryColorPressed: Se(t, 4),
      primaryColorSuppl: Se(t, 7)
    }
  } : {
    ...vt,
    common: {
      ...vt.common,
      primaryColor: t,
      primaryColorHover: Se(t, 5),
      primaryColorPressed: Se(t, 4),
      primaryColorSuppl: Se(t, 7)
    }
  };
}
const X = Pe("theme", {
  state: () => pi(),
  getters: {
    /** naive-ui暗黑主题 */
    naiveTheme(t) {
      return t.darkMode ? on : void 0;
    },
    themeOverrides(t) {
      return yi(t);
    }
  },
  actions: {
    /** 重置theme状态 */
    resetThemeStore() {
      Ai(), this.$reset();
    },
    /** 设置侧边栏反转色 */
    setSiderInverted(t) {
      this.sider.inverted = t;
    },
    /** 设置头部反转色 */
    setHeaderInverted(t) {
      this.header.inverted = t;
    },
    /** 设置头部高度 */
    setHeaderHeight(t) {
      t && (this.header.height = t);
    },
    /** 设置多页签高度 */
    setTabHeight(t) {
      t && (this.tab.height = t);
    },
    /** 设置多页签缓存 */
    setTabIsCache(t) {
      this.tab.isCache = t;
    },
    /** 侧边栏宽度 */
    setSiderWidth(t) {
      t && (this.sider.width = t);
    },
    /** 侧边栏折叠时的宽度 */
    setSiderCollapsedWidth(t) {
      this.sider.collapsedWidth = t;
    },
    /** 设置布局模式 */
    setLayoutMode(t) {
      this.layout.mode = t;
    },
    /** 设置头部面包屑可见 */
    setHeaderCrumbVisible(t) {
      this.header.crumb.visible = t;
    },
    /** 设置头部面包屑图标可见 */
    setHeaderCrumbIconVisible(t) {
      this.header.crumb.showIcon = t;
    },
    /** 设置菜单图标可见 */
    setMenuIconVisible(t) {
      this.menu.showIcon = t;
    },
    /**设置多页签模式 */
    setTabMode(t) {
      this.tab.mode = t;
    },
    /** 设置多页签可见 */
    setTabVisible(t) {
      this.tab.visible = t;
    },
    // 设置黑暗主题
    setDarkTheme() {
      this.darkMode = !this.darkMode;
    },
    // 设置默认主题样式
    setThemeColor(t) {
      this.themeColor = t;
    },
    /** 缓存主题配置 */
    cacheThemeSettings() {
      vi(this.$state);
    },
    // 还原主题样式
    removeThemeColor() {
      this.themeColor = vt.common.primaryColor;
    }
  }
});
fe.get("activeTag");
const bi = fe.get("tags"), Re = Pe("tag", {
  state() {
    return {
      tags: bi || []
    };
  },
  actions: {
    /** 当前激活状态的页签索引 */
    activeTabIndex(t) {
      return this.tags.findIndex((e) => e.url === t);
    },
    setTags(t) {
      this.tags = t, fe.set("tags", t);
    },
    addTag(t = {}) {
      this.tags.some((e) => e.url === t.url) || this.setTags([...this.tags, t]);
    },
    removeTag(t, e) {
      if (t === e) {
        const n = this.tags.findIndex((r) => r.url === t);
        n > 0 ? yt(this.tags[n - 1].url) : yt(this.tags[n + 1].url);
      }
      this.setTags(this.tags.filter((n) => n.url !== t));
    },
    removeOther(t) {
      this.setTags(this.tags.filter((e) => e.url === t));
    },
    removeLeft(t) {
      const e = this.tags.findIndex((r) => r.url === t), n = this.tags.filter((r, o) => o >= e);
      this.setTags(n), n.find((r) => r.url === t) || router.push(n[n.length - 1].url);
    },
    removeRight(t) {
      const e = this.tags.findIndex((r) => r.url === t), n = this.tags.filter((r, o) => o <= e);
      this.setTags(n), n.find((r) => r.url === t) || router.push(n[n.length - 1].url);
    }
  }
}), Si = {
  updatePassword: (t) => b.post("/bbxUser/updatePassword", t),
  resetPassword: (t) => b.post("/bbxUser/resetPassword", t),
  updateStatus: (t) => b.post("/bbxUser/updateStatus", t),
  list: (t) => b.post("/bbxUser/list", t),
  updateRealName: (t) => b.post("/bbxUser/updateRealName", t)
}, tu = {
  add: (t) => b.post("/bbxDataDictionaryGroup/add", t),
  list: (t) => b.post("/bbxDataDictionaryGroup/list", t),
  update: (t) => b.post("/bbxDataDictionaryGroup/update", t),
  delete: (t) => b.post("/bbxDataDictionaryGroup/delete", t)
}, Ei = {
  add: (t) => b.post("/bbxDataDictionary/add", t),
  listSelect: (t) => b.post("/bbxDataDictionary/listSelect", t),
  update: (t) => b.post("/bbxDataDictionary/update", t),
  delete: (t) => b.post("/bbxDataDictionary/delete", t),
  addBatch: (t) => b.post("/bbxDataDictionary/addBatch", t),
  findTree: (t) => b.post("/bbxDataDictionary/findTree", t),
  updateBatchSortNum: (t) => b.post("/bbxDataDictionary/updateBatchSortNum", t)
}, nu = {
  upload: (t, e) => b.post("/bbxFileInfo/addUpload", t, e),
  listByDataId: (t) => b.post("/bbxFileInfo/listByDataId", t),
  updateEnableDownload: (t) => b.post("/bbxFileInfo/updateEnableDownload", t),
  download: ({ id: t, token: e }) => `/bbxFileInfo/getDownload?id=${t}&token=${e}`,
  list: (t) => b.post("/bbxFileInfo/list", t),
  delete: (t) => b.post("/bbxFileInfo/delete", t)
}, At = {
  uploadImg: (t, e) => b.post("/bbxFileImg/uploadImg", t, e),
  showImg: ({ id: t, token: e, claritys: n = "LOW" }) => `/bbxFileImg/getShowImg?id=${t}&token=${e}&clarity=${n}`,
  list: (t) => b.post("/bbxFileImg/list", t),
  delete: (t) => b.post("/bbxFileImg/delete", t)
}, wi = {
  listMainDeptPerson: (t) => b.post("/bbxAdminPerson/listMainDeptPerson", t),
  addUserAndPerson: (t) => b.post("/bbxAdminPerson/addUserAndPerson", t),
  quit: (t) => b.post("/bbxAdminPerson/deleteQuit", t),
  deptPersonTree: (t) => b.post("/bbxAdminPerson/findDeptPersonTree", t),
  get: (t) => b.post("/bbxAdminPerson/get", t),
  update: (t) => b.post("/bbxAdminPerson/update", t)
}, ru = {
  listUnitRole: (t) => b.post("/bbxAdinRoleUnit/findUnitRole", t),
  add: (t) => b.post("/bbxAdinRoleUnit/add", t),
  update: (t) => b.post("/bbxAdinRoleUnit/update", t),
  delete: (t) => b.post("/bbxAdinRoleUnit/delete", t),
  get: (t) => b.post("/bbxAdinRoleUnit/get", t),
  saveAuthTreeByRoleId: (t) => b.post("/bbxAdinRoleUnit/addAuthTreeByRoleId", t),
  findAuthTreeByRoleId: (t) => b.post("/bbxAdinRoleUnit/findAuthTreeByRoleId", t)
}, ou = {
  add: (t) => b.post("/bbxAdminUnitRoleRelation/add", t),
  delete: (t) => b.post("/bbxAdminUnitRoleRelation/delete", t),
  listNotAuthUnitByRole: (t) => b.post("/bbxAdminUnitRoleRelation/listNotAuthUnitByRole", t),
  listAuthUnitByRole: (t) => b.post("/bbxAdminUnitRoleRelation/listAuthUnitByRole", t)
}, iu = {
  add: (t) => b.post("/bbxAdminRolePerson/add", t),
  update: (t) => b.post("/bbxAdminRolePerson/update", t),
  delete: (t) => b.post("/bbxAdminRolePerson/delete", t),
  listPersonRole: (t) => b.post("/bbxAdminRolePerson/findPersonRole", t),
  findAuthTreeByRoleId: (t) => b.post("/bbxAdminRolePerson/findAuthTreeByRoleId", t),
  saveAuthTreeByRoleId: (t) => b.post("/bbxAdminRolePerson/addAuthTreeByRoleId", t),
  listPersonRoleByClientId: (t) => b.post("/bbxAdminRolePerson/findPersonRole", t),
  findPersonRoleByAppId: (t) => b.post("/bbxAdminRolePerson/findPersonRoleByAppId", t)
}, su = {
  add: (t) => b.post("/bbxAdminRolePersonRelation/add", t),
  delete: (t) => b.post("/bbxAdminRolePersonRelation/delete", t),
  listAuthPersonByRole: (t) => b.post("/bbxAdminRolePersonRelation/listAuthPersonByRole", t)
}, au = {
  add: (t) => b.post("/bbxAdminUnit/add", t),
  update: (t) => b.post("/bbxAdminUnit/update", t),
  list: (t) => b.post("/bbxAdminUnit/list", t),
  get: (t) => b.post("/bbxAdminUnit/get", t)
}, xi = {
  add: (t) => b.post("/bbxAdminUnitDept/add", t),
  delete: (t) => b.post("/bbxAdminUnitDept/delete", t),
  update: (t) => b.post("/bbxAdminUnitDept/update", t),
  get: (t) => b.post("/bbxAdminUnitDept/get", t),
  deptTree: (t) => b.post("/bbxAdminUnitDept/deptTree", t)
}, lu = {
  add: (t) => b.post("/bbxAdminUnitTeam/add", t),
  delete: (t) => b.post("/bbxAdminUnitTeam/delete", t),
  update: (t) => b.post("/bbxAdminUnitTeam/update", t),
  get: (t) => b.post("/bbxAdminUnitTeam/get", t),
  list: (t) => b.post("/bbxAdminUnitTeam/list", t)
}, uu = {
  listClassType: (t) => b.post("/bbxAdminClass/listClassType", t),
  listAllClass: (t) => b.post("/bbxAdminClass/listAllClass", t)
};
function Dn(t) {
  return t.filter((e) => {
    var n;
    return ((n = e.children) == null ? void 0 : n.length) > 0 && (e.children = Dn(e.children)), e.status !== 0;
  });
}
const Qn = Pe("data", {
  state() {
    return {
      dictionaryKeyObj: {},
      dictionaryKeyObjAll: {},
      orgPersonTree: null,
      orgDeptTree: null
    };
  },
  getters: {},
  actions: {
    // 获取字典数据
    async getDictionaryList(t, e = !1) {
      if (this.dictionaryKeyObj[t])
        return e ? this.dictionaryKeyObjAll[t] : this.dictionaryKeyObj[t];
      const { code: n, msg: r, data: o } = await Ei.listSelect({ dictionaryCode: t });
      return n === 0 ? (this.dictionaryKeyObjAll[t] = Qe(o), this.dictionaryKeyObj[t] = Qe(Dn(Dr(o))), e ? this.dictionaryKeyObjAll[t] : this.dictionaryKeyObj[t]) : ($message.error(r), []);
    },
    // 获取部门人员
    async getOrgPerson() {
      if (this.orgPersonTree)
        return this.orgPersonTree;
      const { code: t, msg: e, data: n } = await wi.deptPersonTree();
      return t === 0 ? (this.orgPersonTree = Qe(n), this.orgPersonTree) : ($message.error(e), []);
    },
    // 获取部门
    async getOrgDept() {
      if (this.orgDeptTree)
        return this.orgDeptTree;
      const { code: t, msg: e, data: n } = await xi.deptTree();
      return t === 0 ? (this.orgDeptTree = Qe(n), this.orgDeptTree) : ($message.error(e), []);
    }
  }
});
function Ii() {
  const t = X(), e = ne(
    () => t.darkMode,
    (n) => {
      n ? gi() : mi();
    },
    {
      immediate: !0
    }
  );
  Yt(() => {
    e();
  });
}
function Ci() {
  Ii();
}
function cu(t, e, n) {
  t.use(Rr());
  const r = G();
  r.setEnv(e), r.setRouter(n), b = Go(), yt = (o) => {
    n.push(o);
  };
}
function yt() {
}
function b() {
}
const _i = { class: "ml-20" }, qt = {
  __name: "SearchItemCheckbox",
  props: {
    option: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    return (e, n) => {
      const r = an, o = Ae, i = or;
      return m(), x("div", _i, [
        f(i, qn(Fn(e.$attrs)), {
          default: h(() => [
            f(o, { size: [20, 0] }, {
              default: h(() => [
                (m(!0), x(Z, null, ce(t.option, (s) => (m(), I(r, {
                  key: s.value,
                  value: s.value,
                  label: s.label
                }, null, 8, ["value", "label"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16)
      ]);
    };
  }
}, ki = { class: "flex leading-40" }, Ti = { class: "flex-1 text-#515E78" }, Ft = {
  __name: "SearchItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: "200px"
    }
  },
  setup(t) {
    return (e, n) => (m(), x("div", ki, [
      w("div", {
        class: "whitespace-nowrap text-gray-500",
        style: M({ width: t.labelWidth })
      }, te(t.label), 5),
      w("div", Ti, [
        U(e.$slots, "default")
      ])
    ]));
  }
}, Mt = {
  __name: "SearchItemSelect",
  props: {
    width: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: [String, Number, Array],
      default: void 0
    },
    options: {
      type: Array,
      default: void 0
    },
    api: {
      type: [String, Function],
      default: void 0
    },
    method: {
      validator: (t) => /^(get|post)$/i.test(t),
      default: "post"
    },
    params: {
      type: Object,
      default: () => ({})
    },
    nSelectProps: {
      type: Object,
      default: void 0
    }
  },
  emits: {
    "update:modelValue": () => !0
  },
  setup(t) {
    return (e, n) => {
      const r = J("nl-select");
      return m(), x("div", {
        class: "ml-20",
        style: M({ width: t.width })
      }, [
        f(r, W(t.nSelectProps, {
          "model-value": t.modelValue,
          params: t.params,
          api: t.api,
          options: t.options,
          method: t.method,
          onChange: n[0] || (n[0] = (o) => e.$emit("update:modelValue", o))
        }), null, 16, ["model-value", "params", "api", "options", "method"])
      ], 4);
    };
  }
};
const Bi = { class: "flex flex-wrap item_box" }, Ri = {
  __name: "SearchItemRadio",
  props: {
    option: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    return (n, r) => {
      const o = ve;
      return m(), x("div", Bi, [
        (m(!0), x(Z, null, ce(t.option, (i) => (m(), I(o, {
          key: i.value,
          type: i.value === t.value ? "primary" : "default",
          quaternary: "",
          class: "btn",
          onClick: (s) => e("update:value", i.value)
        }, {
          default: h(() => [
            L(te(i.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128))
      ]);
    };
  }
}, Ht = /* @__PURE__ */ K(Ri, [["__scopeId", "data-v-a3d2c822"]]), Wt = {
  __name: "SearchItemRender",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t;
    let n = () => {
    };
    return ne(
      () => e.item.render,
      (r) => {
        n = r;
      },
      { immediate: !0, deep: !0 }
    ), (r, o) => (m(), I(c(n)));
  }
};
const Di = (t) => ($e("data-v-9c19c06e"), t = t(), et(), t), Qi = { class: "mb-20 rounded-5 border-#efeff5 wrapper" }, Ni = {
  key: 0,
  class: "border-t border-#efeff5 p-20"
}, Oi = { class: "flex justify-between" }, Ji = /* @__PURE__ */ Di(() => /* @__PURE__ */ w("div", { class: "flex-center" }, [
  /* @__PURE__ */ w("div", { class: "w-4 h-15 primary_bg" }),
  /* @__PURE__ */ w("div", { class: "ml-10 text-gray-500" }, "筛选条件")
], -1)), Pi = { class: "mt-10" }, Li = { class: "description" }, Ui = P({
  name: "ShSearch"
}), Vi = /* @__PURE__ */ Object.assign(Ui, {
  props: {
    reset: {
      type: Function,
      default: null
    },
    loadList: {
      type: Function,
      default: null
    },
    dropdownList: {
      type: Array,
      default: () => []
    },
    moreList: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => ({})
    },
    selectWidth: {
      type: Number,
      default: 25
    },
    moreLabelWidth: {
      type: String,
      default: "160px"
    }
  },
  setup(t) {
    const e = t, n = X(), r = O(!1), o = R(() => e.moreList.filter((p, v) => v < 2)), i = R(() => e.moreList.filter((p, v) => v >= 2)), s = le({
      value: ""
    }), a = O(""), l = () => {
      e.form[s.value] = a.value;
    }, u = (p) => {
      e.form[s.value] = "", s.value = p, a.value = "";
    }, d = () => {
      a.value = "", e.reset();
    };
    return ne(
      () => e.dropdownList,
      (p) => {
        p && p.length && (s.value = p[0].value);
      },
      { immediate: !0, deep: !0 }
    ), (p, v) => {
      const y = St, E = Et, S = ir, C = ve, k = Ae, T = J("sh-icon"), B = J("sh-collapse-transition");
      return m(), x("div", Qi, [
        w("div", {
          class: z(["flex justify-between", { dark: c(n).darkMode, "p-10": t.moreList.length }])
        }, [
          w("div", null, [
            U(p.$slots, "left", {}, void 0, !0)
          ]),
          w("div", null, [
            f(k, null, {
              default: h(() => [
                U(p.$slots, "default", {}, void 0, !0),
                t.dropdownList && t.dropdownList.length ? (m(), I(S, {
                  key: 0,
                  class: "w-292"
                }, {
                  default: h(() => [
                    f(y, {
                      value: s.value,
                      style: M({ width: `${t.selectWidth}%` }),
                      options: t.dropdownList,
                      "onUpdate:value": u
                    }, null, 8, ["value", "style", "options"]),
                    f(E, {
                      value: a.value,
                      "onUpdate:value": [
                        v[0] || (v[0] = (A) => a.value = A),
                        l
                      ],
                      style: M({ width: `${100 - t.selectWidth}%` })
                    }, null, 8, ["value", "style"])
                  ]),
                  _: 1
                })) : V("", !0),
                t.loadList ? (m(), I(C, {
                  key: 1,
                  type: "primary",
                  onClick: t.loadList
                }, {
                  default: h(() => [
                    L(" 搜索 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : V("", !0),
                t.reset ? (m(), I(C, {
                  key: 2,
                  onClick: d
                }, {
                  default: h(() => [
                    L(" 重置 ")
                  ]),
                  _: 1
                })) : V("", !0)
              ]),
              _: 3
            })
          ])
        ], 2),
        t.moreList.length ? (m(), x("div", Ni, [
          w("div", Oi, [
            Ji,
            c(i).length ? (m(), x("div", {
              key: 0,
              class: "flex-center cursor-pointer primary_color",
              onClick: v[1] || (v[1] = (A) => r.value = !r.value)
            }, [
              L(te(r.value ? "折叠" : "展开") + " ", 1),
              f(T, {
                name: "arrow-right",
                class: z(["ml-5 transition", { "rotate-180": r.value }])
              }, null, 8, ["class"])
            ])) : V("", !0)
          ]),
          w("div", Pi, [
            (m(!0), x(Z, null, ce(c(o), (A) => (m(), I(Ft, {
              key: A.key,
              "label-width": t.moreLabelWidth,
              label: A.label
            }, {
              default: h(() => [
                A.type === "checkbox" ? (m(), I(qt, {
                  key: 0,
                  value: t.form[A.key],
                  "onUpdate:value": (D) => t.form[A.key] = D,
                  option: A.option
                }, null, 8, ["value", "onUpdate:value", "option"])) : A.type === "select" ? (m(), I(Mt, {
                  key: 1,
                  modelValue: t.form[A.key],
                  "onUpdate:modelValue": (D) => t.form[A.key] = D,
                  width: `${A.width || 30}%`,
                  options: A.options,
                  api: A.api,
                  params: A.params,
                  method: A.method,
                  "n-select-props": A.nSelectProps
                }, null, 8, ["modelValue", "onUpdate:modelValue", "width", "options", "api", "params", "method", "n-select-props"])) : A.type === "radio" ? (m(), I(Ht, {
                  key: 2,
                  value: t.form[A.key],
                  "onUpdate:value": (D) => t.form[A.key] = D,
                  option: A.option
                }, null, 8, ["value", "onUpdate:value", "option"])) : (m(), I(Wt, {
                  key: 3,
                  item: A
                }, null, 8, ["item"]))
              ]),
              _: 2
            }, 1032, ["label-width", "label"]))), 128)),
            f(B, null, {
              default: h(() => [
                Zt(w("div", Li, [
                  (m(!0), x(Z, null, ce(c(i), (A) => (m(), I(Ft, {
                    key: A.key,
                    "label-width": t.moreLabelWidth,
                    label: A.label
                  }, {
                    default: h(() => [
                      A.type === "checkbox" ? (m(), I(qt, {
                        key: 0,
                        value: t.form[A.key],
                        "onUpdate:value": (D) => t.form[A.key] = D,
                        option: A.option
                      }, null, 8, ["value", "onUpdate:value", "option"])) : A.type === "select" ? (m(), I(Mt, {
                        key: 1,
                        modelValue: t.form[A.key],
                        "onUpdate:modelValue": (D) => t.form[A.key] = D,
                        width: `${A.width || 30}%`,
                        options: A.options,
                        api: A.api,
                        params: A.params,
                        method: A.method,
                        "n-select-props": A.nSelectProps
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "width", "options", "api", "params", "method", "n-select-props"])) : A.type === "radio" ? (m(), I(Ht, {
                        key: 2,
                        value: t.form[A.key],
                        "onUpdate:value": (D) => t.form[A.key] = D,
                        option: A.option
                      }, null, 8, ["value", "onUpdate:value", "option"])) : (m(), I(Wt, {
                        key: 3,
                        item: A
                      }, null, 8, ["item"]))
                    ]),
                    _: 2
                  }, 1032, ["label-width", "label"]))), 128))
                ], 512), [
                  [$t, r.value]
                ])
              ]),
              _: 1
            })
          ])
        ])) : V("", !0)
      ]);
    };
  }
}), ji = /* @__PURE__ */ K(Vi, [["__scopeId", "data-v-9c19c06e"]]);
const qi = {
  name: "ShCollapseTransition",
  props: {
    transitionName: {
      type: String,
      default: "collapse-transition"
    }
  },
  data() {
    return {
      oldPaddingTop: "",
      oldPaddingBottom: "",
      oldOverflow: ""
    };
  },
  methods: {
    collapseBeforeEnter(t) {
      this.oldPaddingBottom = t.style.paddingBottom, this.oldPaddingTop = t.style.paddingTop, t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.maxHeight = "0";
    },
    collapseEnter(t, e) {
      this.oldOverflow = t.style.overflow;
      let n = t.scrollHeight;
      n > 0 ? t.style.maxHeight = n + "px" : t.style.maxHeight = "0", t.style.paddingTop = this.oldPaddingTop, t.style.paddingBottom = this.oldPaddingBottom, t.style.overflow = "hidden";
      let r = function() {
        e(), t.removeEventListener("transitionend", r, !1), t.removeEventListener("transitioncancel", r, !1);
      };
      t.addEventListener("transitionend", r, !1), t.addEventListener("transitioncancel", r, !1);
    },
    collapseAfterEnter(t) {
      t.style.maxHeight = "", t.style.overflow = this.oldOverflow;
    },
    collapseBeforeLeave(t) {
      this.oldPaddingBottom = t.style.paddingBottom, this.oldPaddingTop = t.style.paddingTop, this.oldOverflow = t.style.overflow, t.style.maxHeight = t.scrollHeight + "px", t.style.overflow = "hidden";
    },
    collapseLeave(t, e) {
      t.scrollHeight !== 0 && (t.style.maxHeight = "0", t.style.paddingBottom = "0", t.style.paddingTop = "0");
      let n = function() {
        e(), t.removeEventListener("transitionend", n, !1), t.removeEventListener("transitioncancel", n, !1);
      };
      t.addEventListener("transitionend", n, !1), t.addEventListener("transitioncancel", n, !1);
    },
    collapseAfterLeave(t) {
      t.style.maxHeight = "", t.style.overflow = this.oldOverflow, t.style.paddingBottom = this.oldPaddingBottom, t.style.paddingTop = this.oldPaddingTop, this.oldOverflow = this.oldPaddingBottom = this.oldPaddingTop = "";
    }
  }
};
function Fi(t, e, n, r, o, i) {
  return m(), I(Ge, {
    name: n.transitionName,
    onBeforeEnter: i.collapseBeforeEnter,
    onEnter: i.collapseEnter,
    onAfterEnter: i.collapseAfterEnter,
    onBeforeLeave: i.collapseBeforeLeave,
    onLeave: i.collapseLeave,
    onAfterLeave: i.collapseAfterLeave
  }, {
    default: h(() => [
      U(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["name", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"]);
}
const Mi = /* @__PURE__ */ K(qi, [["render", Fi]]), Hi = {
  __name: "NlTreeSuffix",
  props: {
    treeItem: {
      type: Object,
      default: () => ({})
    },
    suffix: {
      type: Function,
      default: void 0
    }
  },
  setup(t) {
    const e = t, n = R(() => e.suffix ? e.suffix(e.treeItem).filter((o) => !o.code || $isCode(o.code)) : []), r = (o) => {
      const i = n.value.findIndex((s) => s.key === o);
      n.value[i].onClick(e.treeItem);
    };
    return (o, i) => {
      const s = J("sh-icon"), a = ve, l = nt;
      return c(n) && c(n).length ? (m(), I(l, {
        key: 0,
        trigger: "click",
        options: c(n),
        onSelect: r
      }, {
        default: h(() => [
          f(a, {
            text: "",
            tag: "a",
            class: "mr-10"
          }, {
            default: h(() => [
              f(s, { name: "dot" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options"])) : V("", !0);
    };
  }
};
const Wi = P({
  name: "ShTree"
}), zi = /* @__PURE__ */ Object.assign(Wi, {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    blockLine: {
      type: Boolean,
      default: !0
    },
    renderSuffix: {
      type: Function,
      default: void 0
    },
    suffix: {
      type: Function,
      default: void 0
    },
    renderPrefix: {
      type: Function,
      default: void 0
    },
    prefix: {
      type: Function,
      default: void 0
    },
    showIrrelevantNodes: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, n = J("sh-icon"), r = R(() => (o(e.data), e.data)), o = (a) => {
      a.forEach((l) => {
        l.children && (l.children.length ? o(l.children) : l.children = null);
      });
    }, i = ({ option: a }) => me(Hi, {
      treeItem: a,
      suffix: e.suffix
    }), s = ({ option: a }) => me(n, e.prefix(a));
    return (a, l) => {
      const u = sr;
      return m(), I(u, W({
        data: c(r),
        "block-line": t.blockLine
      }, a.$attrs, {
        "show-irrelevant-nodes": t.showIrrelevantNodes,
        "render-prefix": t.prefix ? s : t.renderPrefix,
        "render-suffix": t.suffix ? i : t.renderSuffix
      }), null, 16, ["data", "block-line", "show-irrelevant-nodes", "render-prefix", "render-suffix"]);
    };
  }
}), Ki = /* @__PURE__ */ K(zi, [["__scopeId", "data-v-7f5ef4f1"]]), Xi = P({
  name: "ShTreeSelectDept"
}), Gi = /* @__PURE__ */ Object.assign(Xi, {
  props: {
    filterable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = J("sh-icon"), n = Qn(), r = le({
      list: [],
      defaultExpandedKeys: []
    });
    (async () => {
      r.list = await n.getOrgDept(), r.list.forEach((s) => {
        r.defaultExpandedKeys.push(s.id);
      });
    })();
    const i = ({ option: s }) => me(e, {
      name: s.type === "team" ? "company" : "dept"
    });
    return (s, a) => {
      const l = ln;
      return m(), I(l, W(s.$attrs, {
        "label-field": "name",
        "key-field": "id",
        filterable: t.filterable,
        options: r.list,
        "default-expanded-keys": r.defaultExpandedKeys,
        "render-prefix": i
      }), null, 16, ["filterable", "options", "default-expanded-keys"]);
    };
  }
}), Yi = P({
  name: "ShTreeSelectPerson"
}), Zi = /* @__PURE__ */ Object.assign(Yi, {
  props: {
    filterable: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = J("sh-icon"), n = Qn(), r = le({
      list: [],
      defaultExpandedKeys: []
    });
    (async () => {
      r.list = await n.getOrgPerson(), r.list.forEach((s) => {
        r.defaultExpandedKeys.push(s.id);
      });
    })();
    const i = ({ option: s }) => me(e, {
      name: s.type
    });
    return (s, a) => {
      const l = ln;
      return m(), I(l, W(s.$attrs, {
        "label-field": "name",
        "key-field": "id",
        filterable: t.filterable,
        options: r.list,
        "default-expanded-keys": r.defaultExpandedKeys,
        "render-prefix": i
      }), null, 16, ["filterable", "options", "default-expanded-keys"]);
    };
  }
}), $i = P({
  name: "ShSelectComma"
}), es = /* @__PURE__ */ Object.assign($i, {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const n = t, r = O([]);
    ne(
      () => n.value,
      (i) => {
        i && (r.value = i.split(","));
      },
      { immediate: !0, deep: !0 }
    );
    const o = () => {
      e("update:value", r.value.join(","));
    };
    return (i, s) => {
      const a = St;
      return m(), I(a, {
        value: r.value,
        "onUpdate:value": [
          s[0] || (s[0] = (l) => r.value = l),
          o
        ],
        multiple: ""
      }, null, 8, ["value"]);
    };
  }
});
const ts = { class: "sh-search-fold" }, ns = { class: "flex items-center justify-end pl-15" }, rs = { class: "flex-center" }, os = { class: "btn" }, is = P({
  name: "ShSearchFold"
}), ss = /* @__PURE__ */ Object.assign(is, {
  props: {
    reset: {
      type: Function,
      default: null
    },
    loadList: {
      type: Function,
      default: null
    },
    btnGutter: {
      type: Number,
      default: 15
    },
    btnSpan: {
      type: Number,
      default: 6
    },
    labelWidth: {
      type: String,
      default: "72px"
    },
    lineNum: {
      type: Number,
      default: 1
    }
  },
  setup(t, { expose: e }) {
    const n = t;
    let r = O(0), o = O(!1);
    const i = O(null), s = O(null), a = R(() => 34 + 58 * (n.lineNum - 1)), l = (E) => {
      var S;
      (S = i.value) == null || S.validate((C) => {
        E(C);
      });
    }, u = () => {
      var E;
      n.reset(), (E = i.value) == null || E.restoreValidation();
    }, d = () => {
      setTimeout(() => {
        r.value = s.value.$el.offsetHeight;
      }, 100);
    }, p = () => {
      n.loadList();
    };
    Gt(() => {
      d(), window.addEventListener("resize", d, !1);
    }), Mn(() => {
      window.removeEventListener("resize", d, !1);
    });
    const v = R(() => {
      let E = "auto";
      return r.value > a.value && (E = r.value > a.value && o.value ? `${r.value}px` : `${a.value}px`), E;
    }), y = R(() => r.value > a.value + 2 + 24);
    return e({
      validate: l,
      formRef: i
    }), (E, S) => {
      const C = J("sh-grid-form"), k = rn, T = J("sh-icon"), B = ve, A = tn;
      return m(), x("div", ts, [
        w("div", {
          style: M({ height: c(v) }),
          class: "sh-search-fold-wrap"
        }, [
          f(A, {
            ref_key: "searchRef",
            ref: s,
            gutter: t.btnGutter
          }, {
            default: h(() => [
              f(k, {
                span: 24 - t.btnSpan
              }, {
                default: h(() => [
                  f(C, W(E.$attrs, {
                    ref_key: "formRef",
                    ref: i,
                    "label-width": t.labelWidth
                  }), {
                    default: h(() => [
                      U(E.$slots, "default", {}, void 0, !0)
                    ]),
                    _: 3
                  }, 16, ["label-width"])
                ]),
                _: 3
              }, 8, ["span"]),
              f(k, { span: t.btnSpan }, {
                default: h(() => [
                  w("div", ns, [
                    w("div", rs, [
                      c(y) ? (m(), I(B, {
                        key: 0,
                        text: "",
                        class: "more",
                        onClick: S[0] || (S[0] = (D) => Hn(o) ? o.value = !c(o) : o = !c(o))
                      }, {
                        default: h(() => [
                          L(te(c(o) ? "折叠查询" : "更多查询") + " ", 1),
                          f(T, {
                            class: z(["ml-4 icon", c(o) ? "arrow-icon" : ""]),
                            name: "arrow-right"
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      })) : V("", !0)
                    ]),
                    w("div", os, [
                      t.reset ? (m(), I(B, {
                        key: 0,
                        class: "reset",
                        onClick: S[1] || (S[1] = (D) => u())
                      }, {
                        default: h(() => [
                          L("重置")
                        ]),
                        _: 1
                      })) : V("", !0),
                      t.loadList ? (m(), I(B, {
                        key: 1,
                        type: "primary",
                        onClick: p
                      }, {
                        default: h(() => [
                          L("查询")
                        ]),
                        _: 1
                      })) : V("", !0),
                      U(E.$slots, "btn", {}, void 0, !0)
                    ])
                  ])
                ]),
                _: 3
              }, 8, ["span"])
            ]),
            _: 3
          }, 8, ["gutter"])
        ], 4)
      ]);
    };
  }
}), as = /* @__PURE__ */ K(ss, [["__scopeId", "data-v-0d3cdbb5"]]), ls = P({
  name: "ShGridForm"
}), us = /* @__PURE__ */ Object.assign(ls, {
  props: {
    gutter: {
      type: Number,
      default: 10
    },
    responsive: {
      type: String,
      // default: 'screen',
      default: "self"
    },
    cols: {
      type: String,
      // default: '2 s:2 m:2 l:3  xl:4 2xl:5',
      default: "2 845:3 1100:4"
    },
    requireMarkPlacement: {
      type: String,
      default: "left"
    },
    labelPlacement: {
      type: String,
      default: "left"
    }
  },
  setup(t, { expose: e }) {
    const n = O(null);
    return e({
      validate: (i) => n.value.validate(i),
      formRef: n,
      restoreValidation: () => {
        var i;
        (i = n.value) == null || i.restoreValidation();
      }
    }), (i, s) => {
      const a = un, l = nn;
      return m(), I(l, W(i.$attrs, {
        ref_key: "formRef",
        ref: n,
        "require-mark-placement": t.requireMarkPlacement,
        "label-placement": t.labelPlacement
      }), {
        default: h(() => [
          f(a, {
            "x-gap": t.gutter,
            cols: t.cols,
            responsive: t.responsive
          }, {
            default: h(() => [
              U(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["x-gap", "cols", "responsive"])
        ]),
        _: 3
      }, 16, ["require-mark-placement", "label-placement"]);
    };
  }
});
const cs = { class: "sh-content-layout flex flex-col" }, ds = {
  key: 0,
  class: "py-8 px-20 mb-10 rounded-8 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]"
}, fs = { class: "bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17] p-20 h-full flex-1 rounded-t-8" }, hs = P({
  name: "ShContentLayout"
}), ps = /* @__PURE__ */ Object.assign(hs, {
  props: {
    btnClass: {
      type: String,
      default: "mb-20"
    }
  },
  setup(t) {
    return (e, n) => (m(), x("div", cs, [
      e.$slots.header ? (m(), x("div", ds, [
        U(e.$slots, "header", {}, void 0, !0)
      ])) : V("", !0),
      w("div", fs, [
        e.$slots.btn ? (m(), x("div", {
          key: 0,
          class: z(t.btnClass)
        }, [
          U(e.$slots, "btn", {}, void 0, !0)
        ], 2)) : V("", !0),
        U(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), gs = /* @__PURE__ */ K(ps, [["__scopeId", "data-v-a062aadb"]]), ms = { class: "flex" }, vs = { class: "absolute-lt wh-full flex-center hidden group-hover:flex group-hover:bg-#fafafccc text-16" }, As = /* @__PURE__ */ w("div", { class: "w-96 h-96 bg-#fafafc rounded-3 border-dashed border border-#e0e0e6 flex-center cursor-pointer hover:border-#18a058 transition" }, " 点击上传 ", -1), ys = P({
  name: "ShUploadImage"
}), bs = /* @__PURE__ */ Object.assign(ys, {
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: [String, Array],
      default: ".png,.jpg,.jpeg"
    },
    value: {
      type: Array,
      default: () => []
    },
    showDelete: {
      type: Boolean,
      default: !0
    },
    btnText: {
      type: String,
      default: "点击上传"
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const n = t, r = oe(), o = R(() => r.token), i = le({
      loading: !1,
      progress: 0,
      list: []
    }), s = O(null);
    ne(
      () => n.value,
      (y) => {
        i.list = y || [];
      },
      { immediate: !0, deep: !0 }
    );
    const l = G().env.VITE_APP_BASE_API, u = (y) => y ? l + At.showImg({ id: y, token: o.value }) : null, d = (y) => {
      i.list = i.list.filter((E) => E !== y), e("update:value", i.list);
    }, p = (y) => {
      s.value[y].$el.children[0].click();
    }, v = async ({ file: y, data: E, onError: S, onFinish: C }) => {
      const k = new FormData();
      if (E && Object.keys(E).forEach((A) => {
        k.append(A, E[A]);
      }), n.accept.indexOf(y.name.replace(/.+\./, "").toLowerCase()) === -1 && n.accept) {
        $message.warning(`上传的文件只能为【${n.accept}】格式`), S();
        return;
      }
      i.loading = !0, k.append("files", y.file);
      for (let A in n.params)
        k.append(A, n.params[A]);
      const B = await At.uploadImg(k, {
        onUploadProgress: (A) => {
          i.progress = Math.floor(A.loaded / A.total * 100);
        }
      });
      i.loading = !1, B.code === 0 ? (i.list = n.multiple ? [...i.list, ...B.data] : B.data, e("update:value", i.list), C()) : ($message.error(B.msg), S());
    };
    return (y, E) => {
      const S = J("sh-icon"), C = Ae, k = cn, T = ar, B = Je;
      return m(), x("div", ms, [
        f(B, {
          show: i.loading
        }, {
          description: h(() => [
            L(te(i.progress) + "% ", 1)
          ]),
          default: h(() => [
            f(C, null, {
              default: h(() => [
                (m(!0), x(Z, null, ce(i.list, (A, D) => (m(), x("div", {
                  key: D,
                  class: "group relative text-0"
                }, [
                  w("div", vs, [
                    f(C, null, {
                      default: h(() => [
                        t.showDelete ? (m(), I(S, {
                          key: 0,
                          name: "delete",
                          class: "cursor-pointer",
                          onClick: (_) => d(A)
                        }, null, 8, ["onClick"])) : V("", !0),
                        f(S, {
                          name: "view",
                          class: "cursor-pointer",
                          onClick: (_) => p(D)
                        }, null, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  f(k, {
                    ref_for: !0,
                    ref_key: "imgRef",
                    ref: s,
                    height: "96",
                    width: "96",
                    src: u(A),
                    "object-fit": "cover"
                  }, null, 8, ["src"])
                ]))), 128)),
                f(T, W({
                  name: "files",
                  "show-file-list": !1,
                  "custom-request": v,
                  multiple: t.multiple,
                  accept: t.accept
                }, y.$attrs), {
                  default: h(() => [
                    As
                  ]),
                  _: 1
                }, 16, ["multiple", "accept"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
}), Ss = [
  pn,
  Ur,
  No,
  Jo,
  Lo,
  Fo,
  ji,
  Mi,
  Ki,
  Gi,
  Zi,
  es,
  as,
  us,
  gs,
  bs
], Es = (t) => {
  Ss.forEach((e) => {
    t.component(e.name, e);
  });
};
function ws(t) {
  return () => {
    const e = kn(), n = xs((e == null ? void 0 : e.resourceCodes) || []);
    t.config.globalProperties.$isCode = n, window.$isCode = n;
    const r = Is((e == null ? void 0 : e.menuList) || []);
    t.config.globalProperties.$isRouter = r, window.$isRouter = r;
  };
}
function xs(t) {
  const e = {};
  return t.forEach((n) => {
    e[n] = !0;
  }), function(n) {
    return !!e[n];
  };
}
const Is = function(t) {
  let e = Nn(t);
  return function(n) {
    return !!e[n];
  };
};
function Nn(t) {
  let e = {};
  return t.forEach((n) => {
    const r = n.url.split("?")[0];
    e[r] = !0, n.children && (e = { ...e, ...Nn(n.children) });
  }), e;
}
const Cs = {
  __name: "index",
  setup(t) {
    const e = X(), n = G(), r = P({
      setup(o) {
        ro(), oo(), Ci(), kt();
      },
      render() {
        return me("div");
      }
    });
    return (o, i) => {
      const s = Je, a = cr, l = dr, u = fr, d = hr, p = sn;
      return m(), I(p, {
        "theme-overrides": c(e).themeOverrides,
        theme: c(e).naiveTheme,
        locale: c(lr),
        "date-locale": c(ur),
        class: "h-full bg-[#f6f9f8] dark:bg-[#101014]"
      }, {
        default: h(() => [
          f(d, null, {
            default: h(() => [
              f(u, null, {
                default: h(() => [
                  f(l, null, {
                    default: h(() => [
                      f(a, null, {
                        default: h(() => [
                          f(s, {
                            show: c(n).loading,
                            class: "h-full"
                          }, {
                            default: h(() => [
                              U(o.$slots, "default", {}, void 0, !0)
                            ]),
                            _: 3
                          }, 8, ["show"]),
                          f(c(r))
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["theme-overrides", "theme", "locale", "date-locale"]);
    };
  }
}, du = /* @__PURE__ */ K(Cs, [["__scopeId", "data-v-ae419d17"]]);
const _s = P({
  name: "NlAppRouterView"
}), ks = /* @__PURE__ */ Object.assign(_s, {
  emits: ["hide-main-overflow"],
  setup(t, { emit: e }) {
    const n = pr(), r = G(), o = X(), s = Ee().getRoutes(), a = R(() => o.header.height + o.tab.height + 20), l = R(() => s.filter((v) => {
      var y;
      return (y = v.meta) == null ? void 0 : y.keepAlive;
    }).map((v) => v.name)), u = R(() => {
      const v = o.darkMode ? n.primaryColor : o.themeColor;
      return Se(v, 1);
    });
    function d() {
      e("hide-main-overflow", !0);
    }
    function p() {
      e("hide-main-overflow", !1);
    }
    return (v, y) => {
      const E = J("router-view");
      return m(), I(E, {
        style: M({
          "--primaryColor": c(n).primaryColor,
          "--primaryColorHover": c(n).primaryColorHover,
          "--primaryBgColor": c(u)
        })
      }, {
        default: h(({ Component: S, route: C }) => [
          f(Ge, {
            name: "fade-slide",
            mode: "out-in",
            appear: "",
            onBeforeLeave: d,
            onAfterEnter: p
          }, {
            default: h(() => [
              (m(), I(Wn, { include: c(l) }, [
                c(r).reloadFlag ? (m(), I(en(S), {
                  key: C.path,
                  class: "view_box mt-20 mx-20 p-20 rounded-10 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]",
                  style: M({ "min-height": `calc(100vh - ${c(a)}px)` })
                }, null, 8, ["style"])) : V("", !0)
              ], 1032, ["include"]))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
}), Ts = {
  __name: "ContextMenu",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: ""
    }
  },
  emits: ["update:show"],
  setup(t, { emit: e }) {
    const n = t, r = Re(), o = G(), i = oe(), s = R(() => [
      {
        label: "重新加载",
        key: "reload",
        disabled: !1,
        icon: () => se("refresh")
      },
      {
        label: "关闭",
        key: "close",
        disabled: r.tags.length <= 1,
        icon: () => se("close")
      },
      {
        label: "关闭其他",
        key: "close-other",
        disabled: r.tags.length <= 1,
        icon: () => se("close-other")
      },
      {
        label: "关闭左侧",
        key: "close-left",
        disabled: r.tags.length <= 1 || n.url === r.tags[0].url,
        icon: () => se("close-left")
      },
      {
        label: "关闭右侧",
        key: "close-right",
        disabled: r.tags.length <= 1 || n.url === r.tags[r.tags.length - 1].url,
        icon: () => se("close-right")
      }
    ]), a = R({
      get() {
        return n.show;
      },
      set(p) {
        e("update:show", p);
      }
    }), l = /* @__PURE__ */ new Map([
      [
        "reload",
        () => {
          o.reloadPage();
        }
      ],
      [
        "close",
        () => {
          r.removeTag(n.url, i.activeMenu);
        }
      ],
      [
        "close-other",
        () => {
          r.removeOther(n.url);
        }
      ],
      [
        "close-left",
        () => {
          r.removeLeft(n.url);
        }
      ],
      [
        "close-right",
        () => {
          r.removeRight(n.url);
        }
      ]
    ]);
    function u() {
      a.value = !1;
    }
    function d(p) {
      const v = l.get(p);
      v && v(), u();
    }
    return (p, v) => {
      const y = nt;
      return m(), I(y, {
        show: c(a),
        options: c(s),
        x: t.x,
        y: t.y,
        placement: "bottom-start",
        onClickoutside: u,
        onSelect: d
      }, null, 8, ["show", "options", "x", "y"]);
    };
  }
};
const Bs = { class: "flex-center" }, Rs = {
  __name: "index",
  emits: ["scroll"],
  setup(t, { emit: e }) {
    const n = Re(), r = oe(), o = X(), i = Ee(), s = O(), a = R(() => o.tab.mode === "chrome"), l = R(() => a.value ? Qr : Nr), u = ({ url: k }) => {
      if (n.tags.length === 1) {
        $message.error("最后一个了");
        return;
      }
      n.removeTag(k, r.activeMenu);
    }, d = ({ url: k }) => {
      i.push(k);
    }, p = le({
      show: !1,
      x: 0,
      y: 0,
      url: ""
    });
    async function v(k, { url: T }) {
      k.preventDefault();
      const { clientX: B, clientY: A } = k;
      E(), S(B, A, T), await Xe(), y();
    }
    function y() {
      p.show = !0;
    }
    function E() {
      p.show = !1;
    }
    function S(k, T, B) {
      Object.assign(p, { x: k, y: T, url: B });
    }
    async function C() {
      await Xe();
      const k = n.activeTabIndex(r.activeMenu);
      if (s.value && s.value.children.length && s.value.children[k]) {
        const T = s.value.children[k], { x: B, width: A } = T.getBoundingClientRect(), D = B + A / 2;
        setTimeout(() => {
          e("scroll", D);
        }, 50);
      }
    }
    return ne(
      () => r.activeMenu,
      () => {
        C();
      },
      {
        immediate: !0
      }
    ), (k, T) => {
      const B = J("sh-icon");
      return m(), x(Z, null, [
        w("div", {
          ref_key: "tabRef",
          ref: s,
          class: z(["h-full", [c(a) ? "flex items-end" : "flex-y-center"]])
        }, [
          (m(!0), x(Z, null, ce(c(n).tags, (A) => (m(), I(en(c(l)), {
            key: A.url,
            "is-active": c(r).activeMenu === A.url,
            "dark-mode": c(o).darkMode,
            "primary-color": c(o).themeColor,
            class: z({ "ml-10px": !c(a) }),
            onClick: (D) => d(A),
            onClose: (D) => u(A),
            onContextmenu: (D) => v(D, A)
          }, {
            default: h(() => [
              w("div", Bs, [
                c(o).menu.showIcon ? (m(), I(B, {
                  key: 0,
                  class: "align-middle mr-4",
                  name: A.svg || "menu"
                }, null, 8, ["name"])) : V("", !0),
                L(" " + te(A.menuName), 1)
              ])
            ]),
            _: 2
          }, 1064, ["is-active", "dark-mode", "primary-color", "class", "onClick", "onClose", "onContextmenu"]))), 128))
        ], 2),
        f(Ts, {
          show: p.show,
          "onUpdate:show": T[0] || (T[0] = (A) => p.show = A),
          url: p.url,
          x: p.x,
          y: p.y
        }, null, 8, ["show", "url", "x", "y"])
      ], 64);
    };
  }
}, Ds = /* @__PURE__ */ K(Rs, [["__scopeId", "data-v-81ce4147"]]), Qs = { class: "h-full dark:hover:bg-[#333] hover:bg-[#f6f6f6] cursor-pointer" }, Ns = {
  __name: "index",
  setup(t) {
    const e = G();
    return (n, r) => {
      const o = J("sh-icon"), i = dn;
      return m(), x("div", Qs, [
        f(i, { placement: "bottom" }, {
          trigger: h(() => [
            w("div", {
              class: "w-full h-full flex-center text-20",
              onClick: r[0] || (r[0] = (...s) => c(e).reloadPage && c(e).reloadPage(...s))
            }, [
              f(o, { name: "refresh" })
            ])
          ]),
          default: h(() => [
            L(" 重新加载 ")
          ]),
          _: 1
        })
      ]);
    };
  }
}, Os = { class: "h-full flex" }, Js = P({
  name: "NlAppTags"
}), Ps = /* @__PURE__ */ Object.assign(Js, {
  setup(t) {
    const e = O(), n = O(), { width: r, left: o } = Tr(n), i = (s) => {
      var u;
      const l = s - o.value - r.value / 2;
      if (e.value) {
        const { maxScrollX: d, x: p } = e.value.instance, v = d - p, y = l > 0 ? Math.max(-l, v) : Math.min(-l, -p);
        (u = e.value) == null || u.instance.scrollBy(y, 0, 300);
      }
    };
    return (s, a) => {
      const l = J("sh-better-scroll"), u = J("sh-container");
      return m(), I(u, { class: "h-full" }, {
        default: h(() => [
          w("div", Os, [
            w("div", {
              ref_key: "bsWrapper",
              ref: n,
              class: "flex-1-hidden h-full"
            }, [
              f(l, {
                ref_key: "bsScroll",
                ref: e,
                options: { scrollX: !0, scrollY: !1 }
              }, {
                default: h(() => [
                  f(Ds, { onScroll: i })
                ]),
                _: 1
              }, 512)
            ], 512),
            f(Ns, { class: "w-64px" })
          ])
        ]),
        _: 1
      });
    };
  }
});
function Ls() {
  function t(e, n) {
    let r = [];
    for (let o in e)
      if (e[o].url === n) {
        r.push(e[o]);
        break;
      } else if (e[o].children) {
        const i = t(e[o].children, n);
        if (i && i.length) {
          r = [e[o], ...i];
          break;
        }
      }
    return r;
  }
  return {
    getBreadcrumbPath: t
  };
}
const Us = { class: "flex-1-hidden flex items-center h-full text-16 px-10" }, Vs = P({
  name: "NlBreadcrumb"
}), js = /* @__PURE__ */ Object.assign(Vs, {
  setup(t) {
    const e = hn(), n = Ee(), r = oe(), o = X(), { getBreadcrumbPath: i } = Ls(), s = O([]), a = (u) => u.svg && o.header.crumb.showIcon ? se(u.svg) : "", l = (u) => {
      n.push(u);
    };
    return ne(
      () => e.path,
      (u) => {
        s.value = i(r.menuList, u);
      },
      { immediate: !0 }
    ), (u, d) => {
      const p = J("sh-icon"), v = nt, y = gr, E = mr;
      return m(), x("div", Us, [
        f(E, null, {
          default: h(() => [
            (m(!0), x(Z, null, ce(s.value, (S, C) => (m(), I(y, { key: C }, {
              default: h(() => [
                f(v, {
                  options: S.children,
                  "label-field": "menuName",
                  "key-field": "url",
                  "render-icon": a,
                  onSelect: l
                }, {
                  default: h(() => [
                    w("div", {
                      class: z(["trigger flex-center", C < s.value.length - 1 ? "text-[#8996AF]" : ""])
                    }, [
                      c(o).header.crumb.showIcon ? (m(), I(p, {
                        key: 0,
                        name: S.svg || "menu",
                        class: "mr-5"
                      }, null, 8, ["name"])) : V("", !0),
                      L(" " + te(S.menuName), 1)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["options"])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
}), qs = /* @__PURE__ */ K(js, [["__scopeId", "data-v-10a6ae15"]]), Fs = P({
  name: "NlProjectTitle"
}), Ms = /* @__PURE__ */ Object.assign(Fs, {
  setup(t) {
    let e = zn("logo");
    const n = G(), r = R(() => n.title);
    return (o, i) => {
      const s = cn, a = wt;
      return m(), I(a, {
        tag: "div",
        class: "text-20 flex-center font-600 h-full mr-20",
        style: { color: "var(--primary-color)" }
      }, {
        default: h(() => [
          c(e) ? (m(), I(s, {
            key: 0,
            width: "32",
            src: c(e),
            class: "mr-10"
          }, null, 8, ["src"])) : V("", !0),
          L(" " + te(c(r)), 1)
        ]),
        _: 1
      });
    };
  }
}), Hs = {
  __name: "FullScreen",
  setup(t) {
    const { isFullscreen: e, toggle: n } = Br();
    return (r, o) => {
      const i = J("sh-icon"), s = rt;
      return m(), x("div", W({ class: "cursor-pointer w-40px h-full" }, r.$attrs), [
        f(s, null, {
          trigger: h(() => [
            w("div", {
              class: "w-full h-full flex-center",
              onClick: o[0] || (o[0] = (...a) => c(n) && c(n)(...a))
            }, [
              f(i, W(r.$attrs, {
                name: c(e) ? "fullscreen-exit" : "fullscreen"
              }), null, 16, ["name"])
            ])
          ]),
          default: h(() => [
            L(" 全屏 ")
          ]),
          _: 1
        })
      ], 16);
    };
  }
}, Ws = "data:image/png;base64,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", zs = { class: "p-20" }, Ks = { class: "text-right mt-20" }, Xs = {
  __name: "UpdatePassword",
  setup(t, { expose: e }) {
    const n = O(null), r = le({
      show: !1,
      loading: !1
    }), o = le({
      oldPassword: "",
      password: "",
      enterPassword: ""
    }), i = () => {
      var u;
      (u = n.value) == null || u.validate((d) => {
        d || a();
      });
    }, s = (u, d) => d !== o.password ? new Error("密码输入不一致") : !0, a = async () => {
      r.loading = !0;
      const { code: u, message: d } = await Si.updatePassword(o);
      r.loading = !1, u === 0 ? ($message.success("成功"), r.show = !1) : $message.error(d);
    };
    return e({
      open: (u) => {
        r.show = !0;
      }
    }), (u, d) => {
      const p = Et, v = J("sh-form-item"), y = J("sh-form"), E = ve, S = Je, C = vr;
      return m(), I(C, {
        show: r.show,
        "onUpdate:show": d[4] || (d[4] = (k) => r.show = k),
        preset: "card",
        class: "w-550",
        title: "修改密码"
      }, {
        default: h(() => [
          w("div", zs, [
            f(S, {
              show: r.loading
            }, {
              default: h(() => [
                f(y, {
                  ref_key: "formRef",
                  ref: n,
                  model: o,
                  "label-width": "90"
                }, {
                  default: h(() => [
                    f(v, {
                      label: "旧密码",
                      path: "oldPassword",
                      rule: "required||password"
                    }, {
                      default: h(() => [
                        f(p, {
                          value: o.oldPassword,
                          "onUpdate:value": d[0] || (d[0] = (k) => o.oldPassword = k),
                          placeholder: "请输入",
                          type: "password",
                          "show-password-on": "mousedown"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    f(v, {
                      label: "新密码",
                      path: "password",
                      rule: "required||password"
                    }, {
                      default: h(() => [
                        f(p, {
                          value: o.password,
                          "onUpdate:value": d[1] || (d[1] = (k) => o.password = k),
                          placeholder: "请输入",
                          type: "password",
                          "show-password-on": "mousedown"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    f(v, {
                      label: "确认新密码",
                      path: "enterPassword",
                      rule: { validator: s, trigger: "blur" }
                    }, {
                      default: h(() => [
                        f(p, {
                          value: o.enterPassword,
                          "onUpdate:value": d[2] || (d[2] = (k) => o.enterPassword = k),
                          placeholder: "请输入",
                          type: "password",
                          "show-password-on": "mousedown"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["rule"])
                  ]),
                  _: 1
                }, 8, ["model"]),
                w("div", Ks, [
                  f(E, {
                    onClick: d[3] || (d[3] = (k) => r.show = !1)
                  }, {
                    default: h(() => [
                      L(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  f(E, {
                    type: "primary",
                    onClick: i
                  }, {
                    default: h(() => [
                      L(" 确定 ")
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
      }, 8, ["show"]);
    };
  }
}, Gs = { class: "cursor-pointer h-full" }, Ys = { class: "w-full h-full flex-center" }, Zs = {
  __name: "UserHandle",
  setup(t) {
    const e = oe(), n = O(null), o = G().env.VITE_APP_BASE_API, i = () => {
      if (e.userInfo && e.userInfo.headPic) {
        let l = e.userInfo.headPic;
        return o + At.showImg({ id: l, token: e.token });
      } else
        return null;
    }, s = [
      // {
      //   label: '用户资料',
      //   key: 'profile',
      //   icon: () => renderIcon('user'),
      // },
      {
        label: "修改密码",
        key: "updatePwd",
        icon: () => se("user")
      }
      // {
      //   label: '退出登录',
      //   key: 'logout',
      //   icon: () => renderIcon('user'),
      // },
    ], a = (l) => {
      l === "logout" ? $dialog.info({
        title: "提示",
        content: "确认退出？",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick() {
          e.logout(), $message.success("已退出登录");
        }
      }) : l === "updatePwd" && n.value.open();
    };
    return (l, u) => {
      const d = Ar, p = yr, v = nt;
      return m(), x("div", Gs, [
        f(v, {
          options: s,
          trigger: "click",
          onSelect: a
        }, {
          default: h(() => [
            w("div", Ys, [
              f(d, {
                round: "",
                size: "large",
                src: i() || c(Ws)
              }, null, 8, ["src"]),
              f(p, {
                class: "pl-10 text-16",
                style: { "max-width": "96px" }
              }, {
                default: h(() => [
                  L(te(c(e).name), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f(Xs, {
          ref_key: "pwdRef",
          ref: n
        }, null, 512)
      ]);
    };
  }
}, $s = { class: "cursor-pointer w-40px h-full" }, ea = {
  __name: "SettingButton",
  setup(t) {
    const e = G();
    return (n, r) => {
      const o = J("sh-icon"), i = rt;
      return m(), x("div", $s, [
        f(i, null, {
          trigger: h(() => [
            w("div", {
              class: "w-full h-full flex-center",
              onClick: r[0] || (r[0] = (s) => c(e).setSettingDrawer(!0))
            }, [
              f(o, { name: "setting" })
            ])
          ]),
          default: h(() => [
            L(" 设置 ")
          ]),
          _: 1
        })
      ]);
    };
  }
};
const ta = { class: "flex-1-hidden h-full px-10px pt-5px" }, na = {
  __name: "HeaderMenu",
  setup(t) {
    const e = Ee(), n = oe(), r = X(), o = Re(), i = (a, l) => {
      An(l.url) ? window.open(l.url) : (o.addTag(l), e.push(l.url));
    }, s = (a) => r.menu.showIcon && a.svg ? se(a.svg) : "";
    return (a, l) => {
      const u = fn, d = br;
      return m(), x("div", ta, [
        f(d, {
          "x-scrollable": !0,
          class: "flex-1-hidden h-full",
          "content-class": "h-full"
        }, {
          default: h(() => [
            w("div", {
              class: "flex-y-center h-full",
              style: M({ justifyContent: c(r).menu.horizontalPosition })
            }, [
              f(u, {
                mode: "horizontal",
                "key-field": "url",
                "label-field": "menuName",
                value: c(n).activeMenu,
                options: c(n).menuList,
                inverted: c(r).header.inverted,
                "render-icon": s,
                "onUpdate:value": i
              }, null, 8, ["value", "options", "inverted"])
            ], 4)
          ]),
          _: 1
        })
      ]);
    };
  }
}, ra = /* @__PURE__ */ K(na, [["__scopeId", "data-v-e01f63c3"]]), Ke = {
  login: (t, e) => b.post("/login", t, e),
  logout: (t) => b.post("/logout", t),
  captcha: (t) => b.get("/auth/captcha", t),
  getUser: (t) => b.post("/oauth/getUser", t),
  authorize: (t) => b.post("/oauth/authorize", t),
  getToken: (t) => b.post("/oauth/getToken", t),
  accessToken: (t) => b.post("/oauth/accessToken", t)
}, oa = {
  getUserPermission: (t) => b.post("/bbxPermission/getUserPermission", t)
}, ia = { class: "cursor-pointer w-40px h-full" }, sa = {
  __name: "LogoutIcon",
  setup(t) {
    const e = oe(), n = () => {
      $dialog.info({
        title: "提示",
        content: "确认退出？",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          await Ke.logout(), e.logout(), $message.success("已退出登录");
        }
      });
    };
    return (r, o) => {
      const i = J("sh-icon"), s = rt;
      return m(), x("div", ia, [
        f(s, null, {
          trigger: h(() => [
            w("div", {
              class: "w-full h-full flex-center",
              onClick: n
            }, [
              f(i, { name: "logout" })
            ])
          ]),
          default: h(() => [
            L(" 退出登录 ")
          ]),
          _: 1
        })
      ]);
    };
  }
};
const aa = (t) => ($e("data-v-abf24980"), t = t(), et(), t), la = { class: "flex px-30 justify-between items-center flex-1" }, ua = { class: "flex-1-hidden h-full pl-20" }, ca = /* @__PURE__ */ aa(() => /* @__PURE__ */ w("div", { class: "w-1 h-20 bg-#8996AF mx-10" }, null, -1)), da = P({
  name: "NlHeaderBar"
}), fa = /* @__PURE__ */ Object.assign(da, {
  setup(t) {
    const e = X(), n = O(e.themeColor), r = (s, a) => "rgba(" + parseInt("0x" + a.slice(1, 3)) + "," + parseInt("0x" + a.slice(3, 5)) + "," + parseInt("0x" + a.slice(5, 7)) + "," + s + ")", o = (s) => {
      n.value = r(0.06, s);
    };
    ne(
      () => e.themeColor,
      (s) => {
        o(s);
      },
      {
        immediate: !0
      }
    ), ne(
      () => e.layout.mode,
      (s) => {
        s === "horizontal" ? e.setHeaderHeight(100) : e.setHeaderHeight(60), e.cacheThemeSettings();
      }
    );
    const i = R(() => e.layout.mode === "horizontal");
    return (s, a) => {
      const l = J("sh-container");
      return m(), I(l, {
        class: "h-full",
        inverted: c(e).header.inverted
      }, {
        default: h(() => [
          w("div", {
            class: z(["layout_header h-full flex flex-col", { dark: c(e).darkMode }]),
            style: M({ "background-color": c(e).themeColor })
          }, [
            w("div", la, [
              f(Ms),
              w("div", ua, [
                c(e).header.crumb.visible ? (m(), I(qs, { key: 0 })) : V("", !0)
              ]),
              w("div", {
                class: "flex items-center justify-end h-full text-20",
                style: M({ color: c(e).themeColor })
              }, [
                f(c(Hs), { class: "item_box" }),
                f(c(ea), { class: "item_box" }),
                ca,
                f(c(Zs), { class: "mx-10" }),
                f(c(sa), { class: "item_box" })
              ], 4)
            ]),
            c(i) ? (m(), x("div", {
              key: 0,
              class: z(["h-40 flex-center px-30", { dark: c(e).darkMode }]),
              style: M({ "background-color": n.value })
            }, [
              f(c(ra))
            ], 6)) : V("", !0)
          ], 6)
        ]),
        _: 1
      }, 8, ["inverted"]);
    };
  }
}), ha = /* @__PURE__ */ K(fa, [["__scopeId", "data-v-abf24980"]]);
function pa(t) {
  let e = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++e;
  return e;
}
const On = /\s*,(?![^(]*\))\s*/g, ga = /\s+/g;
function ma(t, e) {
  const n = [];
  return e.split(On).forEach((r) => {
    let o = pa(r);
    if (o) {
      if (o === 1) {
        t.forEach((s) => {
          n.push(r.replace("&", s));
        });
        return;
      }
    } else {
      t.forEach((s) => {
        n.push((s && s + " ") + r);
      });
      return;
    }
    let i = [r];
    for (; o--; ) {
      const s = [];
      i.forEach((a) => {
        t.forEach((l) => {
          s.push(a.replace("&", l));
        });
      }), i = s;
    }
    i.forEach((s) => n.push(s));
  }), n;
}
function va(t, e) {
  const n = [];
  return e.split(On).forEach((r) => {
    t.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function Aa(t) {
  let e = [""];
  return t.forEach((n) => {
    n = n && n.trim(), n && (n.includes("&") ? e = ma(e, n) : e = va(e, n));
  }), e.join(", ").replace(ga, " ");
}
function zt(t) {
  if (!t)
    return;
  const e = t.parentElement;
  e && e.removeChild(t);
}
function Ct(t) {
  return document.querySelector(`style[cssr-id="${t}"]`);
}
function ya(t) {
  const e = document.createElement("style");
  return e.setAttribute("cssr-id", t), e;
}
function He(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const ba = /[A-Z]/g;
function Jn(t) {
  return t.replace(ba, (e) => "-" + e.toLowerCase());
}
function Sa(t, e = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => e + `  ${Jn(n[0])}: ${n[1]};`).join(`
`) + `
` + e + "}" : `: ${t};`;
}
function Ea(t, e, n) {
  return typeof t == "function" ? t({
    context: e.context,
    props: n
  }) : t;
}
function Kt(t, e, n, r) {
  if (!e)
    return "";
  const o = Ea(e, n, r);
  if (!o)
    return "";
  if (typeof o == "string")
    return `${t} {
${o}
}`;
  const i = Object.keys(o);
  if (i.length === 0)
    return n.config.keepEmptyBlock ? t + ` {
}` : "";
  const s = t ? [t + " {"] : [];
  return i.forEach((a) => {
    const l = o[a];
    if (a === "raw") {
      s.push(
        `
` + l + `
`
      );
      return;
    }
    a = Jn(a), l != null && s.push(`  ${a}${Sa(l)}`);
  }), t && s.push("}"), s.join(`
`);
}
function bt(t, e, n) {
  !t || t.forEach((r) => {
    if (Array.isArray(r))
      bt(r, e, n);
    else if (typeof r == "function") {
      const o = r(e);
      Array.isArray(o) ? bt(o, e, n) : o && n(o);
    } else
      r && n(r);
  });
}
function Pn(t, e, n, r, o, i) {
  const s = t.$;
  let a = "";
  if (!s || typeof s == "string")
    He(s) ? a = s : e.push(s);
  else if (typeof s == "function") {
    const d = s({
      context: r.context,
      props: o
    });
    He(d) ? a = d : e.push(d);
  } else if (s.before && s.before(r.context), !s.$ || typeof s.$ == "string")
    He(s.$) ? a = s.$ : e.push(s.$);
  else if (s.$) {
    const d = s.$({
      context: r.context,
      props: o
    });
    He(d) ? a = d : e.push(d);
  }
  const l = Aa(e), u = Kt(l, t.props, r, o);
  a ? (n.push(`${a} {`), i && u && i.insertRule(`${a} {
${u}
}
`)) : (i && u && i.insertRule(u), !i && u.length && n.push(u)), t.children && bt(
    t.children,
    {
      context: r.context,
      props: o
    },
    (d) => {
      if (typeof d == "string") {
        const p = Kt(l, { raw: d }, r, o);
        i ? i.insertRule(p) : n.push(p);
      } else
        Pn(d, e, n, r, o, i);
    }
  ), e.pop(), a && n.push("}"), s && s.after && s.after(r.context);
}
function Ln(t, e, n, r = !1) {
  const o = [];
  return Pn(t, [], o, e, n, r ? t.instance.__styleSheet : void 0), r ? "" : o.join(`

`);
}
function wa(t) {
  for (var e = 0, n, r = 0, o = t.length; o >= 4; ++r, o -= 4)
    n = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, e = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      e ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function xa(t, e, n) {
  const { els: r } = e;
  if (n === void 0)
    r.forEach(zt), e.els = [];
  else {
    const o = Ct(n);
    o && r.includes(o) && (zt(o), e.els = r.filter((i) => i !== o));
  }
}
function Xt(t, e) {
  t.push(e);
}
function Ia(t, e, n, r, o, i, s, a, l) {
  if (i && !l) {
    if (n === void 0) {
      console.error("[css-render/mount]: `id` is required in `silent` mode.");
      return;
    }
    const v = window.__cssrContext;
    v[n] || (v[n] = !0, Ln(e, t, r, i));
    return;
  }
  let u;
  if (n === void 0 && (u = e.render(r), n = wa(u)), l) {
    l.adapter(n, u ?? e.render(r));
    return;
  }
  const d = Ct(n);
  if (d !== null && !s)
    return d;
  const p = d ?? ya(n);
  if (u === void 0 && (u = e.render(r)), p.textContent = u, d !== null)
    return d;
  if (a) {
    const v = document.head.querySelector(`meta[name="${a}"]`);
    if (v)
      return document.head.insertBefore(p, v), Xt(e.els, p), p;
  }
  return o ? document.head.insertBefore(p, document.head.querySelector("style, link")) : document.head.appendChild(p), Xt(e.els, p), p;
}
function Ca(t) {
  return Ln(this, this.instance, t);
}
function _a(t = {}) {
  const { id: e, ssr: n, props: r, head: o = !1, silent: i = !1, force: s = !1, anchorMetaName: a } = t;
  return Ia(this.instance, this, e, r, o, i, s, a, n);
}
function ka(t = {}) {
  const { id: e } = t;
  xa(this.instance, this, e);
}
const We = function(t, e, n, r) {
  return {
    instance: t,
    $: e,
    props: n,
    children: r,
    els: [],
    render: Ca,
    mount: _a,
    unmount: ka
  };
}, Ta = function(t, e, n, r) {
  return Array.isArray(e) ? We(t, { $: null }, null, e) : Array.isArray(n) ? We(t, e, null, n) : Array.isArray(r) ? We(t, e, n, r) : We(t, e, n, null);
};
function De(t = {}) {
  let e = null;
  const n = {
    c: (...r) => Ta(n, ...r),
    use: (r, ...o) => r.install(n, ...o),
    find: Ct,
    context: {},
    config: t,
    get __styleSheet() {
      if (!e) {
        const r = document.createElement("style");
        return document.head.appendChild(r), e = document.styleSheets[document.styleSheets.length - 1], e;
      }
      return e;
    }
  };
  return n;
}
const Ba = P({ name: "LayoutHeader" }), Ra = /* @__PURE__ */ Object.assign(Ba, {
  props: {
    fixed: {
      type: Boolean,
      default: !0
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    useMinWidthLayout: Boolean,
    minWidth: {
      type: Number,
      default: 1200
    },
    height: {
      type: Number,
      default: 56
    },
    paddingLeft: {
      type: Number,
      default: 0
    },
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  setup(t) {
    const e = t, n = R(() => {
      const {
        fixed: i,
        zIndex: s,
        minWidth: a,
        height: l,
        paddingLeft: u,
        transitionDuration: d,
        transitionTimingFunction: p
      } = e, v = i ? "fixed" : "static", y = e.useMinWidthLayout ? `min-width:${a}px;` : "";
      return `position:${v};z-index:${s};${y}height:${l}px;padding-left:${u}px;transition-duration:${d}ms;transition-timing-function:${p};`;
    }), { c: r } = De(), o = r(".admin-layout__header", {
      left: 0,
      top: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return o.render(), o.mount(), (i, s) => (m(), x(
      "header",
      {
        class: "admin-layout__header",
        style: M(c(n))
      },
      [U(i.$slots, "default")],
      4
    ));
  }
}), Da = P({ name: "LayoutTab" }), Qa = /* @__PURE__ */ Object.assign(Da, {
  props: {
    fixed: {
      type: Boolean,
      default: !1
    },
    top: {
      type: Number,
      default: 50
    },
    zIndex: {
      type: Number,
      default: 999
    },
    useMinWidthLayout: Boolean,
    minWidth: {
      type: Number,
      default: 1200
    },
    height: {
      type: Number,
      default: 56
    },
    paddingLeft: {
      type: Number,
      default: 0
    },
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  setup(t) {
    const e = t, n = R(() => {
      const {
        fixed: i,
        top: s,
        zIndex: a,
        minWidth: l,
        height: u,
        paddingLeft: d,
        transitionDuration: p,
        transitionTimingFunction: v
      } = e, y = i ? "fixed" : "static", E = e.useMinWidthLayout ? `min-width: ${l}px;` : "";
      return `position:${y};top:${s}px;z-index:${a};${E}height:${u}px;padding-left:${d}px;transition-duration:${p}ms;transition-timing-function:${v};`;
    }), { c: r } = De(), o = r(".admin-layout__tab", {
      left: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return o.render(), o.mount(), (i, s) => (m(), x(
      "div",
      {
        class: "admin-layout__tab",
        style: M(c(n))
      },
      [U(i.$slots, "default")],
      4
    ));
  }
}), Na = P({ name: "LayoutSider" }), Oa = /* @__PURE__ */ Object.assign(Na, {
  props: {
    zIndex: {
      type: Number,
      default: 1002
    },
    collapse: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 200
    },
    paddingTop: {
      type: Number,
      default: 0
    },
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  setup(t) {
    const e = t, n = R(() => {
      const { zIndex: i, width: s, paddingTop: a, transitionDuration: l, transitionTimingFunction: u } = e;
      return `z-index:${i};width:${s}px;padding-top:${a}px;transition-duration:${l}ms;transition-timing-function:${u};`;
    }), { c: r } = De(), o = r(".admin-layout__sider", {
      position: "fixed",
      left: 0,
      top: 0,
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      transitionProperty: "all"
    });
    return o.render(), o.mount(), (i, s) => (m(), x(
      "aside",
      {
        class: "admin-layout__sider",
        style: M(c(n))
      },
      [U(i.$slots, "default")],
      4
    ));
  }
}), Ja = P({ name: "LayoutContent" }), Pa = /* @__PURE__ */ Object.assign(Ja, {
  props: {
    paddingTop: {
      type: Number,
      default: 0
    },
    paddingBottom: {
      type: Number,
      default: 0
    },
    paddingLeft: {
      type: Number,
      default: 0
    },
    overflowHidden: Boolean,
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  setup(t) {
    const e = t, n = R(() => {
      const {
        paddingTop: i,
        paddingBottom: s,
        paddingLeft: a,
        transitionDuration: l,
        transitionTimingFunction: u
      } = e, d = `overflow:${e.overflowHidden ? "hidden" : "visible"};`;
      return `padding-top:${i}px;padding-bottom:${s}px;padding-left:${a}px;${d}transition-duration:${l}ms;transition-timing-function:${u};`;
    }), { c: r } = De(), o = r(".admin-layout__content", {
      flexGrow: 1,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return o.render(), o.mount(), (i, s) => (m(), x(
      "main",
      {
        style: M(c(n)),
        class: "admin-layout__content"
      },
      [U(i.$slots, "default")],
      4
    ));
  }
}), La = P({ name: "LayoutFooter" }), Ua = /* @__PURE__ */ Object.assign(La, {
  props: {
    fixed: {
      type: Boolean,
      default: !0
    },
    zIndex: {
      type: Number,
      default: 999
    },
    useMinWidthLayout: Boolean,
    minWidth: {
      type: Number,
      default: 1200
    },
    height: {
      type: Number,
      default: 56
    },
    paddingLeft: {
      type: Number,
      default: 300
    },
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  setup(t) {
    const e = t, n = R(() => {
      const {
        fixed: i,
        zIndex: s,
        minWidth: a,
        height: l,
        paddingLeft: u,
        transitionDuration: d,
        transitionTimingFunction: p
      } = e, v = i ? "fixed" : "static", y = e.useMinWidthLayout ? `min-width:${a}px;` : "";
      return `position:${v};z-index:${s};${y}height:${l}px;padding-left:${u}px;transition-duration:${d}ms;transition-timing-function:${p};`;
    }), { c: r } = De(), o = r(".admin-layout__footer", {
      left: 0,
      bottom: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return o.render(), o.mount(), (i, s) => (m(), x(
      "footer",
      {
        class: "admin-layout__footer",
        style: M(c(n))
      },
      [U(i.$slots, "default")],
      4
    ));
  }
});
function Va(t) {
  const e = O(0), n = R(() => `transform: translateX(${-e.value}px);`);
  let r = !1;
  function o(d) {
    e.value = d;
  }
  function i() {
    var d;
    const p = ((d = document.scrollingElement) == null ? void 0 : d.scrollLeft) || 0;
    o(p);
  }
  function s() {
    i();
  }
  function a() {
    document.addEventListener("scroll", i);
  }
  function l() {
    !r || document.removeEventListener("scroll", i);
  }
  function u() {
    s(), a(), r = !0;
  }
  return ne(
    t,
    (d) => {
      d ? u() : l();
    },
    { immediate: !0 }
  ), Yt(() => {
    l();
  }), n;
}
const ja = P({ name: "AdminLayout" }), _t = /* @__PURE__ */ Object.assign(ja, {
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    isMobile: {
      type: Boolean,
      default: !1
    },
    maskBg: {
      type: String,
      default: "rgba(0,0,0,0.3)"
    },
    useMinWidthLayout: {
      type: Boolean,
      default: !1
    },
    minWidth: {
      type: Number,
      default: 1200
    },
    headerVisible: {
      type: Boolean,
      default: !0
    },
    headerHeight: {
      type: Number,
      default: 56
    },
    tabVisible: {
      type: Boolean,
      default: !0
    },
    tabHeight: {
      type: Number,
      default: 44
    },
    fixedHeaderAndTab: {
      type: Boolean,
      default: !0
    },
    addMainOverflowHidden: {
      type: Boolean,
      default: !1
    },
    footerVisible: {
      type: Boolean,
      default: !0
    },
    footerHeight: {
      type: Number,
      default: 48
    },
    fixedFooter: {
      type: Boolean,
      default: !0
    },
    siderVisible: {
      type: Boolean,
      default: !0
    },
    siderWidth: {
      type: Number,
      default: 200
    },
    siderCollapsedWidth: {
      type: Number,
      default: 64
    },
    siderCollapse: {
      type: Boolean,
      default: !1
    },
    transitionDuration: {
      type: Number,
      default: 300
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    }
  },
  emits: ["update:sider-collapse", "collapse"],
  setup(t, { emit: e }) {
    const n = t, r = R(() => n.useMinWidthLayout ? `min-width:${n.minWidth}px;` : ""), o = R(() => n.useMinWidthLayout && (n.fixedHeaderAndTab || n.fixedFooter)), i = Va(o), s = R(() => n.fixedHeaderAndTab ? i.value : ""), a = R(() => n.fixedFooter ? i.value : ""), l = R(() => {
      const { transitionDuration: q, transitionTimingFunction: H } = n;
      return {
        transitionDuration: q,
        transitionTimingFunction: H
      };
    }), u = R(() => n.mode === "vertical"), d = 1001, p = 999, v = R(() => n.isMobile || u.value ? 1003 : 1e3), y = 998, E = R({
      get() {
        return n.siderCollapse;
      },
      set(q) {
        e("update:sider-collapse", q);
      }
    });
    function S() {
      E.value = !0;
    }
    const C = R(() => n.isMobile && !E.value), k = R(() => {
      const { transitionDuration: q, transitionTimingFunction: H } = n;
      return `background-color:${n.maskBg};transition-duration:${q}ms;transition-timing-function:${H};`;
    }), T = R(() => {
      const { siderWidth: q, siderCollapsedWidth: H } = n, it = n.isMobile ? 0 : H, we = E.value ? it : q;
      return n.siderVisible ? we : 0;
    }), B = R(() => n.isMobile ? 0 : T.value), A = R(() => u.value ? B.value : 0), D = R(() => !n.isMobile && !u.value && n.headerVisible ? n.headerHeight : 0), _ = R(() => {
      let q = 0;
      return n.fixedHeaderAndTab && (n.headerVisible && (q += n.headerHeight), n.tabVisible && (q += n.tabHeight)), q;
    }), $ = R(() => n.fixedFooter && n.footerVisible ? n.footerHeight : 0), { c: ee } = De(), ue = ee(
      ".admin-layout",
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      [
        ee("&__sider-mask", {
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1002,
          width: "100%",
          height: "100%",
          transitionProperty: "background-color"
        })
      ]
    );
    return ue.render(), ue.mount(), (q, H) => (m(), x(
      "div",
      {
        class: "admin-layout",
        style: M(c(r))
      },
      [
        t.headerVisible ? (m(), I(
          c(Ra),
          W({ key: 0 }, c(l), {
            fixed: t.fixedHeaderAndTab,
            "z-index": d,
            "min-width": t.minWidth,
            height: t.headerHeight,
            "padding-left": c(A),
            style: c(s)
          }),
          {
            default: h(() => [U(q.$slots, "header")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "height", "padding-left", "style"]
        )) : V("", !0),
        t.tabVisible ? (m(), I(
          c(Qa),
          W({ key: 1 }, c(l), {
            fixed: t.fixedHeaderAndTab,
            "z-index": p,
            "min-width": t.minWidth,
            top: t.headerHeight,
            height: t.tabHeight,
            "padding-left": c(B),
            style: c(s)
          }),
          {
            default: h(() => [U(q.$slots, "tab")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "top", "height", "padding-left", "style"]
        )) : V("", !0),
        t.siderVisible ? (m(), I(
          c(Oa),
          W({ key: 2 }, c(l), {
            "z-index": c(v),
            width: c(T),
            "padding-top": c(D)
          }),
          {
            default: h(() => [U(q.$slots, "sider")]),
            _: 3
          },
          16,
          ["z-index", "width", "padding-top"]
        )) : V("", !0),
        c(C) ? (m(), x(
          "div",
          {
            key: 3,
            class: "admin-layout__sider-mask",
            style: M(c(k)),
            onClick: S
          },
          null,
          4
        )) : V("", !0),
        f(
          c(Pa),
          W(c(l), {
            "padding-top": c(_),
            "padding-bottom": c($),
            "padding-left": c(B),
            "overflow-hidden": t.addMainOverflowHidden
          }),
          {
            default: h(() => [U(q.$slots, "default")]),
            _: 3
          },
          16,
          ["padding-top", "padding-bottom", "padding-left", "overflow-hidden"]
        ),
        t.footerVisible ? (m(), I(
          c(Ua),
          W({ key: 4 }, c(l), {
            fixed: t.fixedFooter,
            "z-index": y,
            "min-width": t.minWidth,
            height: t.footerHeight,
            "padding-left": c(B),
            style: c(a)
          }),
          {
            default: h(() => [U(q.$slots, "footer")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "height", "padding-left", "style"]
        )) : V("", !0)
      ],
      4
    ));
  }
});
function qa(t) {
  t.component("AdminLayout", _t);
}
_t.install = qa;
const Fa = P({
  name: "ShLayoutAdmin"
}), Ma = /* @__PURE__ */ Object.assign(Fa, {
  props: {
    logo: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    Kn("logo", t.logo);
    const n = G(), r = X(), o = oe(), i = Re(), s = hn(), a = Ee(), l = O(!1), u = O(!1), d = (S) => {
      l.value = S;
    }, p = R(() => r.layout.mode !== "horizontal");
    ne(
      () => s.path,
      (S) => {
        o.activeMenu = S;
      },
      { immediate: !0 }
    );
    const v = async () => {
      var k, T;
      u.value = !0;
      const { code: S, data: C } = await oa.getUserPermission();
      u.value = !1, S === 0 && (o.setUserInfo({
        menuList: ((k = C == null ? void 0 : C.permission) == null ? void 0 : k.menuTrees) || [],
        resourceCodes: ((T = C == null ? void 0 : C.permission) == null ? void 0 : T.resourceCodes) || [],
        ...(C == null ? void 0 : C.userInfo) || {}
      }), i.removeOther(), y(), kt());
    }, y = () => {
      o.menuList && o.menuList.length ? E(o.menuList) : a.push("/405");
    }, E = (S) => {
      S[0].children ? E(S[0].children) : (a.push(S[0].url), i.addTag(S[0]));
    };
    return o.userId ? s.path === "/" && y() : v(), (S, C) => (m(), x(Z, null, [
      f(c(_t), {
        class: "overflow-auto",
        mode: c(r).layout.mode,
        "fixed-header-and-tab": c(r).fixedHeaderAndTab,
        "header-height": c(r).header.height,
        "tab-visible": c(r).tab.visible,
        "tab-height": c(r).tab.height,
        "sider-width": c(r).sider.width,
        "sider-visible": c(p),
        "sider-collapsed-width": c(r).sider.collapsedWidth,
        "sider-collapse": c(n).collapsed,
        "footer-visible": c(r).footer.show,
        "add-main-overflow-hidden": l.value
      }, {
        header: h(() => [
          f(c(ha))
        ]),
        tab: h(() => [
          f(c(Ps))
        ]),
        sider: h(() => [
          f(c(al))
        ]),
        default: h(() => [
          f(c(ks), { onHideMainOverflow: d })
        ]),
        _: 1
      }, 8, ["mode", "fixed-header-and-tab", "header-height", "tab-visible", "tab-height", "sider-width", "sider-visible", "sider-collapsed-width", "sider-collapse", "footer-visible", "add-main-overflow-hidden"]),
      f(c(ol))
    ], 64));
  }
}), fu = /* @__PURE__ */ K(Ma, [["__scopeId", "data-v-e542ac25"]]), Ha = {
  __name: "ColorCheckbox",
  props: {
    /** 颜色 */
    color: {
      type: String,
      default: ""
    },
    /** 是否选中 */
    checked: {
      type: Boolean,
      default: !1
    },
    /** 图标的class */
    iconClass: {
      type: String,
      default: "text-14px"
    }
  },
  setup(t) {
    const e = t, n = ["#ffffff", "#fff", "rgb(255,255,255)"], r = R(() => n.includes(e.color));
    return (o, i) => {
      const s = J("sh-icon");
      return m(), x("div", {
        class: "flex-center w-20px h-20px rounded-2px shadow cursor-pointer",
        style: M({ backgroundColor: t.color })
      }, [
        t.checked ? (m(), I(s, {
          key: 0,
          name: "check",
          class: z([t.iconClass, c(r) ? "text-gray-700" : "text-white"])
        }, null, 8, ["class"])) : V("", !0)
      ], 4);
    };
  }
}, Wa = {
  __name: "index",
  setup(t) {
    const e = X();
    return (n, r) => {
      const o = Te, i = Sr, s = un, a = Er, l = Ae;
      return m(), x("div", null, [
        f(o, { "title-placement": "center" }, {
          default: h(() => [
            L("系统主题")
          ]),
          _: 1
        }),
        f(s, {
          cols: 8,
          "x-gap": 8,
          "y-gap": 12
        }, {
          default: h(() => [
            (m(!0), x(Z, null, ce(c(hi), (u) => (m(), I(i, {
              key: u,
              class: "flex-x-center"
            }, {
              default: h(() => [
                f(Ha, {
                  color: u,
                  checked: u === c(e).themeColor,
                  onClick: (d) => c(e).setThemeColor(u)
                }, null, 8, ["color", "checked", "onClick"])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        }),
        f(l, {
          vertical: !0,
          class: "pt-12px"
        }, {
          default: h(() => [
            f(a, {
              value: c(e).themeColor,
              "show-alpha": !1,
              onUpdateValue: c(e).setThemeColor
            }, null, 8, ["value", "onUpdateValue"])
          ]),
          _: 1
        })
      ]);
    };
  }
}, za = { class: "flex-y-center justify-between" }, ae = {
  __name: "SettingMenu",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (e, n) => (m(), x("div", za, [
      w("span", null, te(t.label), 1),
      U(e.$slots, "default")
    ]));
  }
};
const Ka = {
  __name: "DarkMode",
  setup(t) {
    const e = X();
    return (n, r) => {
      const o = Te, i = J("sh-icon"), s = tt;
      return m(), x("div", null, [
        f(o, { "title-placement": "center" }, {
          default: h(() => [
            L("主题模式 ")
          ]),
          _: 1
        }),
        f(ae, { label: "深色主题" }, {
          default: h(() => [
            f(s, {
              value: c(e).darkMode,
              "onUpdate:value": c(e).setDarkTheme
            }, {
              checked: h(() => [
                f(i, { name: "theme-light" })
              ]),
              unchecked: h(() => [
                f(i, { name: "theme-dark" })
              ]),
              _: 1
            }, 8, ["value", "onUpdate:value"])
          ]),
          _: 1
        })
      ]);
    };
  }
}, Xa = /* @__PURE__ */ K(Ka, [["__scopeId", "data-v-e8b99800"]]), Ga = {
  __name: "PageView",
  setup(t) {
    const e = X();
    return (n, r) => {
      const o = Te, i = tt, s = St, a = Ae;
      return m(), x("div", null, [
        f(o, { "title-placement": "center" }, {
          default: h(() => [
            L("界面展示 ")
          ]),
          _: 1
        }),
        f(a, {
          vertical: "",
          size: "large"
        }, {
          default: h(() => [
            f(ae, { label: "面包屑" }, {
              default: h(() => [
                f(i, {
                  value: c(e).header.crumb.visible,
                  "onUpdate:value": c(e).setHeaderCrumbVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "面包屑图标" }, {
              default: h(() => [
                f(i, {
                  value: c(e).header.crumb.showIcon,
                  "onUpdate:value": c(e).setHeaderCrumbIconVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "菜单图标" }, {
              default: h(() => [
                f(i, {
                  value: c(e).menu.showIcon,
                  "onUpdate:value": c(e).setMenuIconVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "多页签" }, {
              default: h(() => [
                f(i, {
                  value: c(e).tab.visible,
                  "onUpdate:value": c(e).setTabVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "多页签风格" }, {
              default: h(() => [
                f(s, {
                  class: "w-120px",
                  size: "small",
                  value: c(e).tab.mode,
                  options: c(e).tab.modeList,
                  "onUpdate:value": c(e).setTabMode
                }, null, 8, ["value", "options", "onUpdate:value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
const Ya = { class: "layout-checkbox__shadow relative w-56px h-48px bg-white rounded-4px overflow-hidden" }, Za = {
  __name: "LayoutCheckbox",
  props: {
    /** 布局模式 */
    mode: {
      type: String,
      default: ""
    },
    /** 布局模式文本 */
    label: {
      type: String,
      default: ""
    },
    /** 选中状态 */
    checked: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, n = {
      vertical: {
        placement: "bottom-start",
        menuClass: "w-1/3 h-full",
        mainClass: "w-2/3 h-3/4"
      },
      "vertical-mix": {
        placement: "bottom-end",
        menuClass: "w-full h-1/4",
        mainClass: "w-2/3 h-3/4"
      },
      horizontal: {
        placement: "bottom",
        menuClass: "w-full h-1/4",
        mainClass: "w-full h-3/4"
      },
      "horizontal-mix": {
        placement: "bottom",
        menuClass: "w-1/4 h-full",
        mainClass: "w-2/3 h-3/4"
      }
    }, r = R(() => n[e.mode]);
    return (o, i) => {
      const s = dn;
      return m(), x("div", {
        class: z(["border-2px rounded-6px cursor-pointer hover:border-primary", [t.checked ? "border-primary" : "border-transparent"]])
      }, [
        f(s, {
          placement: c(r).placement,
          trigger: "hover"
        }, {
          trigger: h(() => [
            w("div", Ya, [
              w("div", {
                class: z(["absolute-lt bg-[#273352]", c(r).menuClass])
              }, null, 2),
              w("div", {
                class: z(["absolute-rb bg-[#f0f2f5]", c(r).mainClass])
              }, null, 2)
            ])
          ]),
          default: h(() => [
            w("span", null, te(t.label), 1)
          ]),
          _: 1
        }, 8, ["placement"])
      ], 2);
    };
  }
}, $a = /* @__PURE__ */ K(Za, [["__scopeId", "data-v-e010c16d"]]), el = {
  __name: "index",
  setup(t) {
    const e = X(), n = (r) => {
      e.setLayoutMode(r.value);
    };
    return (r, o) => {
      const i = Te, s = Ae;
      return m(), x(Z, null, [
        f(i, { "title-placement": "center" }, {
          default: h(() => [
            L("布局模式")
          ]),
          _: 1
        }),
        f(s, { justify: "center" }, {
          default: h(() => [
            (m(!0), x(Z, null, ce(c(e).layout.modeList, (a) => (m(), I($a, {
              key: a.value,
              mode: a.value,
              label: a.label,
              checked: a.value === c(e).layout.mode,
              onClick: (l) => n(a)
            }, null, 8, ["mode", "label", "checked", "onClick"]))), 128))
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, tl = {
  __name: "PageFunc",
  setup(t) {
    const e = X();
    return (n, r) => {
      const o = Te, i = tt, s = wr, a = Ae;
      return m(), x(Z, null, [
        f(o, { "title-placement": "center" }, {
          default: h(() => [
            L("界面功能")
          ]),
          _: 1
        }),
        f(a, {
          vertical: "",
          size: "large"
        }, {
          default: h(() => [
            f(ae, { label: "侧边栏反转色" }, {
              default: h(() => [
                f(i, {
                  value: c(e).sider.inverted,
                  "onUpdate:value": c(e).setSiderInverted
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "头部反转色" }, {
              default: h(() => [
                f(i, {
                  value: c(e).header.inverted,
                  "onUpdate:value": c(e).setHeaderInverted
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "头部高度" }, {
              default: h(() => [
                f(s, {
                  class: "w-120px",
                  size: "small",
                  value: c(e).header.height,
                  step: 1,
                  "onUpdate:value": c(e).setHeaderHeight
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "多页签高度" }, {
              default: h(() => [
                f(s, {
                  class: "w-120px",
                  size: "small",
                  value: c(e).tab.height,
                  step: 1,
                  "onUpdate:value": c(e).setTabHeight
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(ae, { label: "侧边栏展开宽度" }, {
              default: h(() => [
                f(s, {
                  class: "w-120px",
                  size: "small",
                  value: c(e).sider.width,
                  step: 10,
                  "onUpdate:value": c(e).setSiderWidth
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, nl = {
  __name: "ThemeConfig",
  setup(t) {
    const e = X(), n = G();
    function r() {
      e.resetThemeStore(), n.setSettingDrawer(!1), $message.success("已重置配置！");
    }
    return (o, i) => {
      const s = Te, a = ve, l = Ae;
      return m(), x(Z, null, [
        f(s, { "title-placement": "center" }, {
          default: h(() => [
            L("主题配置")
          ]),
          _: 1
        }),
        f(l, { vertical: "" }, {
          default: h(() => [
            f(a, {
              type: "warning",
              block: !0,
              onClick: r
            }, {
              default: h(() => [
                L("重置当前配置")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, rl = P({
  name: "NlSettingDrawer"
}), ol = /* @__PURE__ */ Object.assign(rl, {
  setup(t) {
    const e = G(), n = X();
    return (r, o) => {
      const i = xr, s = Ir;
      return m(), I(s, {
        show: c(e).settingDrawerVisible,
        "display-directive": "show",
        width: 330,
        onMaskClick: o[0] || (o[0] = (a) => c(e).setSettingDrawer(!1)),
        onAfterLeave: o[1] || (o[1] = (a) => c(n).cacheThemeSettings())
      }, {
        default: h(() => [
          f(i, {
            title: "主题配置",
            "native-scrollbar": !1
          }, {
            default: h(() => [
              f(c(Xa)),
              f(c(el)),
              f(c(Wa)),
              f(c(tl)),
              f(c(Ga)),
              f(c(nl))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}), il = { class: "h-full overflow-auto" }, sl = { class: "h-36 text-right cursor-pointer text-#c0c7d4 pr-10 pt-10 text-16" }, al = {
  __name: "index",
  setup(t) {
    const e = Ee(), n = G(), r = oe(), o = Re(), i = X(), s = (u) => u.svg && i.menu.showIcon ? se(u.svg) : se("default-menu"), a = () => se("arrow-right"), l = (u, d) => {
      An(d.url) ? window.open(d.url) : (o.addTag(d), e.push(d.url));
    };
    return (u, d) => {
      const p = J("sh-icon"), v = fn, y = J("sh-container");
      return m(), I(y, {
        class: "shadow-xl h-full relative",
        inverted: c(i).sider.inverted
      }, {
        default: h(() => [
          w("div", il, [
            w("div", sl, [
              f(p, {
                name: "directory",
                class: z([{ "rotate-180": c(n).collapsed }, "leading-36"]),
                onClick: d[0] || (d[0] = (E) => c(n).collapsed = !c(n).collapsed)
              }, null, 8, ["class"])
            ]),
            f(v, {
              value: c(r).activeMenu,
              collapsed: c(n).collapsed,
              "collapsed-width": c(i).sider.collapsedWidth,
              "collapsed-icon-size": 22,
              options: c(r).menuList,
              "key-field": "url",
              "label-field": "menuName",
              accordion: "",
              "render-icon": s,
              "expand-icon": a,
              "onUpdate:value": l
            }, null, 8, ["value", "collapsed", "collapsed-width", "options"])
          ])
        ]),
        _: 1
      }, 8, ["inverted"]);
    };
  }
};
const Un = (t) => ($e("data-v-02d439b2"), t = t(), et(), t), ll = { class: "slide-verify" }, ul = {
  class: "title text-32 font-700 h-full mr-20 mb-35",
  style: { color: "var(--primary-color)" }
}, cl = /* @__PURE__ */ Un(() => /* @__PURE__ */ w("span", null, "安全验证", -1)), dl = { class: "text-28 text-[#515E78] absolute top-12 right-0" }, fl = { class: "sliding-pictures flex-center mb-42" }, hl = /* @__PURE__ */ Un(() => /* @__PURE__ */ w("div", { class: "operation" }, [
  /* @__PURE__ */ w("span", { class: "text" }, "请完成安全校验"),
  /* @__PURE__ */ w("i", { class: "ri:close-fill" })
], -1)), pl = { class: "vimg" }, gl = ["src"], ml = ["src"], vl = { class: "slider" }, Al = ["onMousedown"], yl = {
  __name: "SlideVerify",
  props: {
    isRemember: Boolean,
    loginInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { expose: e }) {
    const n = t, r = Ee(), o = Re(), i = oe(), a = G().env.VITE_APP_RSA_LOGIN, l = le({
      show: !1,
      tips: "",
      timestamp: "",
      verifyError: !1,
      loading: !1,
      dragTime: null
    }), u = le({
      imgSrc: "",
      imgBlockSrc: "",
      yHeight: "",
      imgCodeId: ""
    });
    let d = null;
    const p = async () => {
      l.loading = !0;
      const { code: T, data: B } = await Ke.captcha();
      T === 0 && (u.imgBlockSrc = "data:image/png;base64," + B.smallImage, u.imgSrc = "data:image/png;base64," + B.bigImage, u.yHeight = B.yHeight, u.imgCodeId = B.imgCodeId, d.style.left = "0px"), l.loading = !1;
    }, v = (T) => {
      l.dragTime = new Date();
      const B = T.target, A = { x: T.x, y: T.y };
      let D = 0;
      const _ = (ee) => {
        if (D = Math.round(ee.x - A.x), D >= 237)
          return D = 237, !1;
        if (D <= 0)
          return D = 0, !1;
        B.style.left = D + "px", d.style.left = D + "px";
      }, $ = () => {
        document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", $), B.style.left = "", E(D);
      };
      document.addEventListener("mousemove", _), document.addEventListener("mouseup", $);
    }, y = (T) => Ro(JSON.stringify(T)), E = async (T) => {
      const B = {
        ...n.loginInfo,
        imgCodeId: u.imgCodeId,
        moveLength: T
      };
      if (a && a === "true") {
        const A = JSON.parse(JSON.stringify(B)), D = await Ke.login(y(A), {
          headers: {
            "Content-Type": "text/plain"
          }
        });
        try {
          const { code: _, msg: $, data: ee } = JSON.parse(Do(D));
          S(_, $, ee);
        } catch {
          $message.error("未知错误");
        }
      } else {
        const { code: A, msg: D, data: _ } = await Ke.login(B);
        S(A, D, _);
      }
    }, S = (T, B, A) => {
      T === 0 ? (l.timestamp = `校验成功，用时${((new Date() - l.dragTime) / 1e3).toFixed(1)}s`, l.tips = "正在登录...", setTimeout(() => {
        $message.success("登录成功"), i.setToken(A), i.removeUserInfo(), o.removeOther(), r.push("/"), n.isRemember ? ke.set("loginInfo", n.loginInfo) : ke.remove("loginInfo");
      }, 1e3)) : T === 1 ? (l.tips = "校验错误,请重新校验", l.verifyError = !0, p()) : ($message.error(B), l.verifyError = !1, l.show = !1);
    }, C = () => {
      l.show = !0, l.tips = "拖动滑块完成上方拼图", l.timestamp = "", l.verifyError = !1, Xe(() => {
        d = document.querySelector("#sliderBlock"), p();
      });
    }, k = () => {
      l.show = !1;
    };
    return e({
      open: C
    }), (T, B) => {
      const A = J("sh-icon"), D = Je, _ = wt, $ = Cr, ee = rt;
      return m(), I(ee, {
        width: 420,
        trigger: "manual",
        raw: "",
        show: l.show,
        placement: "left",
        "show-arrow": !1
      }, {
        trigger: h(() => [
          w("div", null, [
            U(T.$slots, "default", {}, void 0, !0)
          ])
        ]),
        default: h(() => [
          f($, { class: "container bg-[#fff] dark:bg-[#101014]" }, {
            default: h(() => [
              f(_, { tag: "div" }, {
                default: h(() => [
                  f(Ge, { name: "el-fade-in-linear " }, {
                    default: h(() => [
                      w("div", ll, [
                        w("div", ul, [
                          cl,
                          w("span", dl, [
                            f(A, {
                              name: "refresh",
                              class: "svg-icon cursor-pointer",
                              title: "刷新验证码",
                              onClick: C
                            }),
                            f(A, {
                              name: "close",
                              class: "svg-icon ml-8 cursor-pointer",
                              title: "关闭验证码",
                              onClick: k
                            })
                          ])
                        ]),
                        w("div", fl, [
                          w("div", null, [
                            hl,
                            f(D, {
                              show: l.loading
                            }, {
                              default: h(() => [
                                w("div", pl, [
                                  w("img", {
                                    id: "sliderBlock",
                                    src: u.imgBlockSrc,
                                    class: "slider-block",
                                    style: M({ top: `${u.yHeight}px` })
                                  }, null, 12, gl),
                                  w("img", {
                                    id: "codeImg",
                                    src: u.imgSrc,
                                    class: "slider-img"
                                  }, null, 8, ml)
                                ])
                              ]),
                              _: 1
                            }, 8, ["show"]),
                            w("div", vl, [
                              f(Ge, { name: "el-zoom-in-bottom" }, {
                                default: h(() => [
                                  Zt(w("p", { class: "verify-success" }, te(l.timestamp), 513), [
                                    [$t, l.timestamp]
                                  ])
                                ]),
                                _: 1
                              }),
                              w("div", {
                                class: z(["track", { "verify-error": l.verifyError }])
                              }, te(l.tips), 3),
                              w("div", {
                                class: "button cursor-pointer",
                                onMousedown: Xn(v, ["prevent"])
                              }, null, 40, Al)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["show"]);
    };
  }
}, bl = /* @__PURE__ */ K(yl, [["__scopeId", "data-v-02d439b2"]]);
const Vn = (t) => ($e("data-v-0b91cfc9"), t = t(), et(), t), Sl = { class: "w-420 bg-#fff sh-login-box rounded-10 py-30 px-30" }, El = /* @__PURE__ */ Vn(() => /* @__PURE__ */ w("span", null, "用户登录", -1)), wl = { class: "mb-60 flex justify-between" }, xl = /* @__PURE__ */ Vn(() => /* @__PURE__ */ w("br", null, null, -1)), Il = {
  __name: "index",
  setup(t) {
    const e = O(null), n = le({
      loginName: "",
      password: ""
    }), r = O(!1), o = O(null), i = () => {
      var a;
      (a = e.value) == null || a.validate((l) => {
        l || o.value.open();
      });
    };
    function s() {
      const a = ke.get("loginInfo");
      a && (n.loginName = a.loginName || "", n.password = a.password || "", r.value = !0);
    }
    return s(), (a, l) => {
      const u = wt, d = Et, p = J("sh-form-item"), v = J("sh-form"), y = an, E = ve;
      return m(), x("div", Sl, [
        f(u, {
          tag: "div",
          class: "title text-32 font-700 h-full mr-20 mb-64",
          style: { color: "var(--primary-color)" }
        }, {
          default: h(() => [
            El
          ]),
          _: 1
        }),
        f(v, {
          ref_key: "formRef",
          ref: e,
          model: n,
          size: "large",
          "label-placement": "left",
          "label-width": "0"
        }, {
          default: h(() => [
            f(p, {
              path: "loginName",
              rule: "required"
            }, {
              default: h(() => [
                f(d, {
                  value: n.loginName,
                  "onUpdate:value": l[0] || (l[0] = (S) => n.loginName = S),
                  class: "input",
                  placeholder: "输入账号"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            f(p, {
              class: "mt-6",
              path: "password",
              rule: "required"
            }, {
              default: h(() => [
                f(d, {
                  value: n.password,
                  "onUpdate:value": l[1] || (l[1] = (S) => n.password = S),
                  type: "password",
                  class: "input",
                  placeholder: "输入密码",
                  "show-password-on": "mousedown",
                  onKeydown: Gn(i, ["enter"])
                }, null, 8, ["value", "onKeydown"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        w("div", wl, [
          f(y, {
            checked: r.value,
            "onUpdate:checked": l[2] || (l[2] = (S) => r.value = S)
          }, {
            default: h(() => [
              L("记住密码")
            ]),
            _: 1
          }, 8, ["checked"]),
          w("p", {
            class: "cursor-pointer btn",
            onClick: l[3] || (l[3] = (...S) => a.onForgetPWD && a.onForgetPWD(...S))
          }, "忘记密码？")
        ]),
        f(bl, {
          ref_key: "modalRef",
          ref: o,
          class: "absolute -top-440 -left-30",
          "login-info": n,
          "is-remember": r.value
        }, {
          default: h(() => [
            f(E, {
              type: "primary",
              class: "w-full",
              size: "large",
              onClick: i
            }, {
              default: h(() => [
                L(" 立即登录 ")
              ]),
              _: 1
            }),
            xl,
            f(E, {
              class: "w-full mt-10",
              size: "large",
              onClick: i
            }, {
              default: h(() => [
                L(" 注册 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["login-info", "is-remember"])
      ]);
    };
  }
}, hu = /* @__PURE__ */ K(Il, [["__scopeId", "data-v-0b91cfc9"]]);
function pu(t) {
  t.beforeEach(() => {
    var e;
    (e = window.$loadingBar) == null || e.start();
  }), t.afterEach(() => {
    setTimeout(() => {
      var e;
      (e = window.$loadingBar) == null || e.finish();
    }, 200);
  }), t.onError(() => {
    var e;
    (e = window.$loadingBar) == null || e.error();
  });
}
function gu(t) {
  const e = G();
  t.afterEach((n) => {
    var i;
    const r = (i = n.meta) == null ? void 0 : i.title, o = e.title;
    r ? document.title = `${r} | ${o}` : document.title = o;
  });
}
function mu(t) {
  t.beforeEach(async (e, n, r) => {
    const { notAuth: o, notLogin: i } = e.meta, s = Tn();
    i || s && o || s && $isRouter(e.path) ? r() : s && !$isRouter(e.path) && !o ? r({ path: "/405" }) : r({ path: "/login" });
  });
}
const Cl = {
  path: "/:pathMatch(.*)*",
  meta: { title: "404", notLogin: !0 },
  component: () => import("./error-404-02a762ed.mjs")
}, _l = {
  path: "405",
  meta: { title: "405", notLogin: !0 },
  component: () => import("./error-405-3658b133.mjs")
}, kl = {
  path: "/500",
  meta: { title: "500", notLogin: !0 },
  component: () => import("./error-500-13dbedb6.mjs")
}, vu = [kl, _l, Cl], Au = [
  {
    path: "dictionary",
    meta: { title: "数据字典" },
    component: () => import("./index-f374ca9f.mjs")
  },
  {
    path: "role",
    meta: { title: "角色管理" },
    component: () => import("./index-783812b9.mjs")
  },
  {
    path: "menu",
    meta: { title: "菜单管理" },
    component: () => import("./index-9e3e1a11.mjs")
  },
  {
    path: "unit",
    meta: { title: "企业管理" },
    component: () => import("./index-8af893ea.mjs")
  },
  {
    path: "team",
    meta: { title: "团队管理" },
    component: () => import("./index-7237b0ad.mjs")
  },
  {
    path: "dept",
    meta: { title: "部门管理" },
    component: () => import("./index-d7d06010.mjs")
  },
  {
    path: "appClient",
    meta: { title: "应用管理" },
    component: () => import("./index-d23b1169.mjs")
  },
  {
    path: "person",
    meta: { title: "成员管理" },
    component: () => import("./index-bcde327c.mjs")
  },
  {
    path: "unitAuth",
    meta: { title: "企业授权" },
    component: () => import("./index-8cc869c2.mjs")
  },
  {
    path: "workbench",
    meta: { title: "工作台" },
    component: () => import("./index-8cc869c2.mjs")
  }
], yu = [
  {
    path: "fileList",
    meta: { title: "附件管理" },
    component: () => import("./index-6262b466.mjs")
  },
  {
    path: "imgList",
    meta: { title: "图片管理" },
    component: () => import("./index-55884942.mjs")
  }
], bu = [
  {
    path: "msgModel",
    meta: { title: "消息模板" },
    component: () => import("./index-39227c64.mjs")
  },
  {
    path: "msgTask",
    meta: { title: "消息任务" },
    component: () => import("./index-8a9b2c3a.mjs")
  },
  {
    path: "msgTaskStorage",
    meta: { title: "归档消息任务" },
    component: () => import("./index-f8bd988d.mjs")
  }
], Su = [
  {
    path: "/workflow/model",
    meta: { title: "工作流" },
    component: () => import("./index-decf563b.mjs")
  },
  {
    path: "/workflow/task",
    meta: { title: "任务管理" },
    component: () => import("./index-bba9827a.mjs")
  },
  {
    path: "/workflow/systemService",
    meta: { title: "系统业务" },
    component: () => import("./index-8854d157.mjs")
  }
], Eu = [
  {
    path: "/workflow/editor/:id",
    meta: { title: "工作流编辑器", notAuth: !0 },
    component: () => import("./index-8da096e1.mjs")
  }
];
function wu(t, e) {
  Es(t), kt = ws(t), jn = (n) => {
    e.push(n);
  };
}
function kt() {
}
function jn() {
}
export {
  Gr as $,
  Ms as A,
  qs as B,
  ol as C,
  al as D,
  hu as E,
  cu as F,
  Re as G,
  Qn as H,
  Ci as I,
  Se as J,
  Wr as K,
  ql as L,
  to as M,
  no as N,
  ke as O,
  fe as P,
  $r as Q,
  bn as R,
  ha as S,
  ye as T,
  Kr as U,
  Xr as V,
  gn as W,
  mn as X,
  xt as Y,
  vn as Z,
  ks as _,
  Ke as a,
  Fl as a0,
  Ml as a1,
  Hl as a2,
  Wl as a3,
  Rt as a4,
  zl as a5,
  Kl as a6,
  Xl as a7,
  Oe as a8,
  Gl as a9,
  Yl as aa,
  Zl as ab,
  An as ac,
  Zr as ad,
  $l as ae,
  ro as af,
  oo as ag,
  se as ah,
  Qe as ai,
  Ro as aj,
  Do as ak,
  pu as al,
  gu as am,
  mu as an,
  Cl as ao,
  _l as ap,
  kl as aq,
  vu as ar,
  Au as as,
  yu as at,
  bu as au,
  Su as av,
  Eu as aw,
  Ei as b,
  X as c,
  su as d,
  wi as e,
  uu as f,
  au as g,
  lu as h,
  xi as i,
  ru as j,
  ou as k,
  nu as l,
  G as m,
  At as n,
  iu as o,
  eu as p,
  Yr as q,
  b as r,
  tu as s,
  wu as t,
  oe as u,
  kt as v,
  jn as w,
  du as x,
  Ps as y,
  fu as z
};
