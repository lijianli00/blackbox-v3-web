import { defineComponent as J, computed as R, openBlock as h, createElementBlock as _, createElementVNode as v, unref as c, ref as O, createBlock as I, mergeProps as Z, withCtx as p, createVNode as f, renderSlot as L, h as re, nextTick as et, watch as te, onUnmounted as tn, Fragment as Y, renderList as ue, normalizeClass as F, onMounted as nn, useCssVars as on, reactive as ce, toDisplayString as ne, createCommentVNode as U, normalizeProps as rn, guardReactiveProps as sn, normalizeStyle as H, resolveComponent as W, createTextVNode as P, resolveDynamicComponent as G, withDirectives as an, vShow as ln, pushScopeId as Le, popScopeId as Ue, Transition as tt, onBeforeUnmount as Gn, isRef as Yn, createStaticVNode as Et, useAttrs as $n, withModifiers as un, KeepAlive as eo, inject as to, provide as no, withKeys as oo } from "vue";
import { NRow as cn, NForm as dn, useLoadingBar as ro, useDialog as so, useMessage as io, useNotification as ao, NButton as pe, NSwitch as rt, darkTheme as hn, NFormItem as lo, NCol as fn, NConfigProvider as pn, NDataTable as uo, NPagination as co, NSpin as Ve, NCheckbox as gn, NSpace as Ae, NCheckboxGroup as ho, NSelect as mn, NInput as st, NInputGroup as fo, NDropdown as it, NTree as po, NTreeSelect as vn, NGrid as An, NImage as yn, NUpload as go, NPopover as je, NIcon as mo, zhCN as vo, dateZhCN as Ao, NMessageProvider as yo, NNotificationProvider as bo, NDialogProvider as wo, NLoadingBarProvider as So, useThemeVars as _o, NTooltip as bn, NBreadcrumbItem as xo, NBreadcrumb as Eo, NEl as It, NModal as Io, NAvatar as Co, NEllipsis as ko, NMenu as wn, NScrollbar as To, NDivider as Be, NGridItem as Bo, NColorPicker as Ro, NInputNumber as Do, NDrawerContent as Qo, NDrawer as No, NCard as Oo } from "naive-ui";
import { colord as ht } from "colord";
import ft from "crypto-js";
import Jo from "dayjs";
import nt from "axios";
import { defineStore as Me, createPinia as Po } from "pinia";
import { cloneDeep as Lo } from "lodash";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.mjs";
import { useRouter as xe, useRoute as Sn } from "vue-router";
import { ChromeTab as Uo, ButtonTab as Vo } from "@soybeanjs/vue-admin-tab";
import { useElementSize as Nt, useDebounceFn as jo, useElementBounding as Mo, useFullscreen as qo } from "@vueuse/core";
import Fo from "@better-scroll/core";
const Ho = {
  width: "1em",
  height: "1em",
  "aria-hidden": "true"
}, Wo = ["xlink:href", "fill"], zo = J({
  name: "ShIcon"
}), _n = /* @__PURE__ */ Object.assign(zo, {
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
  setup(e) {
    const t = e, n = R(() => `#icon-${t.name}`);
    return (o, r) => (h(), _("svg", Ho, [
      v("use", {
        "xlink:href": c(n),
        fill: e.color
      }, null, 8, Wo)
    ]));
  }
}), Ko = J({
  name: "ShForm"
}), Xo = /* @__PURE__ */ Object.assign(Ko, {
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
  setup(e, { expose: t }) {
    const n = O(null);
    return t({
      validate: (r) => n.value.validate(r),
      formRef: n
    }), (r, s) => {
      const i = cn, a = dn;
      return h(), I(a, Z(r.$attrs, {
        ref_key: "formRef",
        ref: n,
        "require-mark-placement": e.requireMarkPlacement,
        "label-placement": e.labelPlacement,
        "label-width": e.labelWidth
      }), {
        default: p(() => [
          f(i, { gutter: e.gutter }, {
            default: p(() => [
              L(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["gutter"])
        ]),
        _: 3
      }, 16, ["require-mark-placement", "label-placement", "label-width"]);
    };
  }
}), qe = 2, Ot = 16, Zo = 5, Go = 5, Yo = 15, pt = 5, $o = 4;
function _e(e, t) {
  if (t === 6)
    return e;
  const n = t < 6, o = ht(e).toHsv(), r = n ? pt + 1 - t : t - pt - 1, s = {
    h: er(o, r, n),
    s: tr(o, r, n),
    v: nr(o, r, n)
  };
  return ht(s).toHex();
}
function er(e, t, n) {
  let o;
  return e.h >= 60 && e.h <= 240 ? o = n ? e.h - qe * t : e.h + qe * t : o = n ? e.h + qe * t : e.h - qe * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function tr(e, t, n) {
  let o;
  return n ? o = e.s - Ot * t : t === $o ? o = e.s + Ot : o = e.s + Zo * t, o > 100 && (o = 100), n && t === pt && o > 10 && (o = 10), o < 6 && (o = 6), o;
}
function nr(e, t, n) {
  let o;
  return n ? o = e.v + Go * t : o = e.v - Yo * t, o > 100 && (o = 100), o;
}
function gt(e, t) {
  return ht(e).alpha(t).toHex();
}
const or = Object.prototype.toString;
function ye(e, t) {
  return or.call(e) === `[object ${t}]`;
}
function rr(e) {
  return typeof e < "u";
}
function sr(e) {
  return typeof e > "u";
}
function xn(e) {
  return e === null;
}
function En(e) {
  return e === "";
}
function Ct(e) {
  return !xn(e) && ye(e, "Object");
}
function In(e) {
  return e && Array.isArray(e);
}
function ir(e) {
  return ye(e, "String");
}
function zc(e) {
  return ye(e, "Number");
}
function Kc(e) {
  return ye(e, "Boolean");
}
function Xc(e) {
  return ye(e, "Date");
}
function Zc(e) {
  return ye(e, "RegExp");
}
function Jt(e) {
  return typeof e == "function";
}
function Gc(e) {
  return ye(e, "Promise") && Ct(e) && Jt(e.then) && Jt(e.catch);
}
function Yc(e) {
  return Ct(e) && !!e.tagName;
}
function $c(e) {
  return typeof window < "u" && rr(window) && ye(e, "Window");
}
function Je(e) {
  return xn(e) || sr(e);
}
function ar(e) {
  return Je(e) || En(e);
}
function ed(e) {
  return In(e) || ir(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : Ct(e) ? Object.keys(e).length === 0 : !1;
}
function td(e, t = "") {
  return ar(e) ? t : e;
}
function nd(e) {
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e);
}
function Cn(e) {
  return /^(https?:|mailto:|tel:)/.test(e);
}
const lr = typeof window > "u", od = !lr, kn = "__CryptoJS_Secret__";
function ur(e) {
  const t = JSON.stringify(e);
  return ft.AES.encrypt(t, kn).toString();
}
function Tn(e) {
  const n = ft.AES.decrypt(e, kn).toString(ft.enc.Utf8);
  return n ? JSON.parse(n) : null;
}
class cr {
  constructor(t) {
    this.storage = t.storage, this.prefixKey = t.prefixKey;
  }
  getKey(t) {
    return `${this.prefixKey}${t}`.toUpperCase();
  }
  set(t, n, o) {
    const r = JSON.stringify({
      value: ur(n),
      time: Date.now(),
      expire: Je(o) ? null : new Date().getTime() + o * 1e3
    });
    this.storage.setItem(this.getKey(t), r);
  }
  get(t) {
    const { value: n } = this.getItem(t, {});
    return n;
  }
  getItem(t, n = null) {
    const o = this.storage.getItem(this.getKey(t));
    if (!o)
      return n;
    try {
      const r = JSON.parse(o), { value: s, time: i, expire: a } = r;
      return Je(a) || a > new Date().getTime() ? { value: Tn(s), time: i } : (this.remove(t), n);
    } catch {
      return this.remove(t), n;
    }
  }
  remove(t) {
    this.storage.removeItem(this.getKey(t));
  }
  clear() {
    this.storage.clear();
  }
}
function Bn({ prefixKey: e = "", storage: t = sessionStorage }) {
  return new cr({ prefixKey: e, storage: t });
}
const Rn = "Vue_Naive_Admin_", dr = function(e = {}) {
  return Bn({
    prefixKey: e.prefixKey || "",
    storage: localStorage
  });
}, hr = function(e = {}) {
  return Bn({
    prefixKey: e.prefixKey || "",
    storage: sessionStorage
  });
}, Te = dr({ prefixKey: Rn }), fe = hr({ prefixKey: Rn });
function fr() {
  window.$loadingBar = ro(), window.$dialog = so(), window.$message = io(), window.$notification = ao();
}
function pr() {
  window.$dayjs = Jo, window.$decrypto = Tn, window.$textBtn = ({
    text: e,
    onClick: t,
    code: n,
    show: o = !0,
    type: r = "primary",
    style: s = {},
    btnClass: i = {},
    // class
    divider: a = !1
  }) => o && (!n || $isCode(n)) ? re(
    pe,
    {
      text: !0,
      type: r,
      onClick: t,
      style: s,
      class: {
        "sh-table-operation-btn": a,
        ...i
      }
    },
    { default: () => e }
  ) : "", window.$delete = (e, t, n = () => {
  }, o = "确认删除，删除后不可恢复?") => {
    $dialog.warning({
      title: "警告",
      content: o,
      positiveText: "确定",
      negativeText: "不确定",
      onPositiveClick: async () => {
        const { code: r, data: s, msg: i } = await e(t);
        r === 0 ? (n({ code: r, data: s, msg: i }), $message.success(i)) : $message.error(i);
      }
    });
  }, window.$nSwitch = ({ status: e = !1, onClick: t, code: n, checkedValue: o = 1, uncheckedValue: r = 0 }) => re(
    rt,
    {
      checkedValue: o,
      uncheckedValue: r,
      disabled: n && !$isCode(n),
      value: e,
      onClick: n && !$isCode(n) ? "" : t
    },
    { default: () => text }
  );
}
function Pe(e, t = {
  style: { "z-index": 2, position: "relative" }
}) {
  return re(_n, { name: e, ...t });
}
function Ne(e, t = "children") {
  return e.map((n) => {
    var o;
    return (o = n[t]) != null && o.length ? {
      ...n,
      [t]: Ne(n[t])
    } : (delete n[t], n);
  });
}
const rd = () => "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
  const t = Math.random() * 16 | 0;
  return (e === "x" ? t : t & 3 | 8).toString(16);
});
var gr = "0123456789abcdefghijklmnopqrstuvwxyz";
function he(e) {
  return gr.charAt(e);
}
function mr(e, t) {
  return e & t;
}
function Fe(e, t) {
  return e | t;
}
function Pt(e, t) {
  return e ^ t;
}
function Lt(e, t) {
  return e & ~t;
}
function vr(e) {
  if (e == 0)
    return -1;
  var t = 0;
  return e & 65535 || (e >>= 16, t += 16), e & 255 || (e >>= 8, t += 8), e & 15 || (e >>= 4, t += 4), e & 3 || (e >>= 2, t += 2), e & 1 || ++t, t;
}
function Ar(e) {
  for (var t = 0; e != 0; )
    e &= e - 1, ++t;
  return t;
}
var Ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dn = "=";
function ot(e) {
  var t, n, o = "";
  for (t = 0; t + 3 <= e.length; t += 3)
    n = parseInt(e.substring(t, t + 3), 16), o += Ce.charAt(n >> 6) + Ce.charAt(n & 63);
  for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), o += Ce.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), o += Ce.charAt(n >> 2) + Ce.charAt((n & 3) << 4)); (o.length & 3) > 0; )
    o += Dn;
  return o;
}
function Ut(e) {
  var t = "", n, o = 0, r = 0;
  for (n = 0; n < e.length && e.charAt(n) != Dn; ++n) {
    var s = Ce.indexOf(e.charAt(n));
    s < 0 || (o == 0 ? (t += he(s >> 2), r = s & 3, o = 1) : o == 1 ? (t += he(r << 2 | s >> 4), r = s & 15, o = 2) : o == 2 ? (t += he(r), t += he(s >> 2), r = s & 3, o = 3) : (t += he(r << 2 | s >> 4), t += he(s & 15), o = 0));
  }
  return o == 1 && (t += he(r << 2)), t;
}
var Ee, yr = {
  decode: function(e) {
    var t;
    if (Ee === void 0) {
      var n = "0123456789ABCDEF", o = ` \f
\r	 \u2028\u2029`;
      for (Ee = {}, t = 0; t < 16; ++t)
        Ee[n.charAt(t)] = t;
      for (n = n.toLowerCase(), t = 10; t < 16; ++t)
        Ee[n.charAt(t)] = t;
      for (t = 0; t < o.length; ++t)
        Ee[o.charAt(t)] = -1;
    }
    var r = [], s = 0, i = 0;
    for (t = 0; t < e.length; ++t) {
      var a = e.charAt(t);
      if (a == "=")
        break;
      if (a = Ee[a], a != -1) {
        if (a === void 0)
          throw new Error("Illegal character at offset " + t);
        s |= a, ++i >= 2 ? (r[r.length] = s, s = 0, i = 0) : s <<= 4;
      }
    }
    if (i)
      throw new Error("Hex encoding incomplete: 4 bits missing");
    return r;
  }
}, Se, mt = {
  decode: function(e) {
    var t;
    if (Se === void 0) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = `= \f
\r	 \u2028\u2029`;
      for (Se = /* @__PURE__ */ Object.create(null), t = 0; t < 64; ++t)
        Se[n.charAt(t)] = t;
      for (Se["-"] = 62, Se._ = 63, t = 0; t < o.length; ++t)
        Se[o.charAt(t)] = -1;
    }
    var r = [], s = 0, i = 0;
    for (t = 0; t < e.length; ++t) {
      var a = e.charAt(t);
      if (a == "=")
        break;
      if (a = Se[a], a != -1) {
        if (a === void 0)
          throw new Error("Illegal character at offset " + t);
        s |= a, ++i >= 4 ? (r[r.length] = s >> 16, r[r.length] = s >> 8 & 255, r[r.length] = s & 255, s = 0, i = 0) : s <<= 6;
      }
    }
    switch (i) {
      case 1:
        throw new Error("Base64 encoding incomplete: at least 2 bits missing");
      case 2:
        r[r.length] = s >> 10;
        break;
      case 3:
        r[r.length] = s >> 16, r[r.length] = s >> 8 & 255;
        break;
    }
    return r;
  },
  re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
  unarmor: function(e) {
    var t = mt.re.exec(e);
    if (t)
      if (t[1])
        e = t[1];
      else if (t[2])
        e = t[2];
      else
        throw new Error("RegExp out of sync");
    return mt.decode(e);
  }
}, Ie = 1e13, Oe = (
  /** @class */
  function() {
    function e(t) {
      this.buf = [+t || 0];
    }
    return e.prototype.mulAdd = function(t, n) {
      var o = this.buf, r = o.length, s, i;
      for (s = 0; s < r; ++s)
        i = o[s] * t + n, i < Ie ? n = 0 : (n = 0 | i / Ie, i -= n * Ie), o[s] = i;
      n > 0 && (o[s] = n);
    }, e.prototype.sub = function(t) {
      var n = this.buf, o = n.length, r, s;
      for (r = 0; r < o; ++r)
        s = n[r] - t, s < 0 ? (s += Ie, t = 1) : t = 0, n[r] = s;
      for (; n[n.length - 1] === 0; )
        n.pop();
    }, e.prototype.toString = function(t) {
      if ((t || 10) != 10)
        throw new Error("only base 10 is supported");
      for (var n = this.buf, o = n[n.length - 1].toString(), r = n.length - 2; r >= 0; --r)
        o += (Ie + n[r]).toString().substring(1);
      return o;
    }, e.prototype.valueOf = function() {
      for (var t = this.buf, n = 0, o = t.length - 1; o >= 0; --o)
        n = n * Ie + t[o];
      return n;
    }, e.prototype.simplify = function() {
      var t = this.buf;
      return t.length == 1 ? t[0] : this;
    }, e;
  }()
), Qn = "…", br = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, wr = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function ke(e, t) {
  return e.length > t && (e = e.substring(0, t) + Qn), e;
}
var ut = (
  /** @class */
  function() {
    function e(t, n) {
      this.hexDigits = "0123456789ABCDEF", t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = n);
    }
    return e.prototype.get = function(t) {
      if (t === void 0 && (t = this.pos++), t >= this.enc.length)
        throw new Error("Requesting byte offset ".concat(t, " on a stream of length ").concat(this.enc.length));
      return typeof this.enc == "string" ? this.enc.charCodeAt(t) : this.enc[t];
    }, e.prototype.hexByte = function(t) {
      return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(t & 15);
    }, e.prototype.hexDump = function(t, n, o) {
      for (var r = "", s = t; s < n; ++s)
        if (r += this.hexByte(this.get(s)), o !== !0)
          switch (s & 15) {
            case 7:
              r += "  ";
              break;
            case 15:
              r += `
`;
              break;
            default:
              r += " ";
          }
      return r;
    }, e.prototype.isASCII = function(t, n) {
      for (var o = t; o < n; ++o) {
        var r = this.get(o);
        if (r < 32 || r > 176)
          return !1;
      }
      return !0;
    }, e.prototype.parseStringISO = function(t, n) {
      for (var o = "", r = t; r < n; ++r)
        o += String.fromCharCode(this.get(r));
      return o;
    }, e.prototype.parseStringUTF = function(t, n) {
      for (var o = "", r = t; r < n; ) {
        var s = this.get(r++);
        s < 128 ? o += String.fromCharCode(s) : s > 191 && s < 224 ? o += String.fromCharCode((s & 31) << 6 | this.get(r++) & 63) : o += String.fromCharCode((s & 15) << 12 | (this.get(r++) & 63) << 6 | this.get(r++) & 63);
      }
      return o;
    }, e.prototype.parseStringBMP = function(t, n) {
      for (var o = "", r, s, i = t; i < n; )
        r = this.get(i++), s = this.get(i++), o += String.fromCharCode(r << 8 | s);
      return o;
    }, e.prototype.parseTime = function(t, n, o) {
      var r = this.parseStringISO(t, n), s = (o ? br : wr).exec(r);
      return s ? (o && (s[1] = +s[1], s[1] += +s[1] < 70 ? 2e3 : 1900), r = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4], s[5] && (r += ":" + s[5], s[6] && (r += ":" + s[6], s[7] && (r += "." + s[7]))), s[8] && (r += " UTC", s[8] != "Z" && (r += s[8], s[9] && (r += ":" + s[9]))), r) : "Unrecognized time: " + r;
    }, e.prototype.parseInteger = function(t, n) {
      for (var o = this.get(t), r = o > 127, s = r ? 255 : 0, i, a = ""; o == s && ++t < n; )
        o = this.get(t);
      if (i = n - t, i === 0)
        return r ? -1 : 0;
      if (i > 4) {
        for (a = o, i <<= 3; !((+a ^ s) & 128); )
          a = +a << 1, --i;
        a = "(" + i + ` bit)
`;
      }
      r && (o = o - 256);
      for (var l = new Oe(o), u = t + 1; u < n; ++u)
        l.mulAdd(256, this.get(u));
      return a + l.toString();
    }, e.prototype.parseBitString = function(t, n, o) {
      for (var r = this.get(t), s = (n - t - 1 << 3) - r, i = "(" + s + ` bit)
`, a = "", l = t + 1; l < n; ++l) {
        for (var u = this.get(l), d = l == n - 1 ? r : 0, g = 7; g >= d; --g)
          a += u >> g & 1 ? "1" : "0";
        if (a.length > o)
          return i + ke(a, o);
      }
      return i + a;
    }, e.prototype.parseOctetString = function(t, n, o) {
      if (this.isASCII(t, n))
        return ke(this.parseStringISO(t, n), o);
      var r = n - t, s = "(" + r + ` byte)
`;
      o /= 2, r > o && (n = t + o);
      for (var i = t; i < n; ++i)
        s += this.hexByte(this.get(i));
      return r > o && (s += Qn), s;
    }, e.prototype.parseOID = function(t, n, o) {
      for (var r = "", s = new Oe(), i = 0, a = t; a < n; ++a) {
        var l = this.get(a);
        if (s.mulAdd(128, l & 127), i += 7, !(l & 128)) {
          if (r === "")
            if (s = s.simplify(), s instanceof Oe)
              s.sub(80), r = "2." + s.toString();
            else {
              var u = s < 80 ? s < 40 ? 0 : 1 : 2;
              r = u + "." + (s - u * 40);
            }
          else
            r += "." + s.toString();
          if (r.length > o)
            return ke(r, o);
          s = new Oe(), i = 0;
        }
      }
      return i > 0 && (r += ".incomplete"), r;
    }, e;
  }()
), Sr = (
  /** @class */
  function() {
    function e(t, n, o, r, s) {
      if (!(r instanceof Vt))
        throw new Error("Invalid tag value.");
      this.stream = t, this.header = n, this.length = o, this.tag = r, this.sub = s;
    }
    return e.prototype.typeName = function() {
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
    }, e.prototype.content = function(t) {
      if (this.tag === void 0)
        return null;
      t === void 0 && (t = 1 / 0);
      var n = this.posContent(), o = Math.abs(this.length);
      if (!this.tag.isUniversal())
        return this.sub !== null ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + o, t);
      switch (this.tag.tagNumber) {
        case 1:
          return this.stream.get(n) === 0 ? "false" : "true";
        case 2:
          return this.stream.parseInteger(n, n + o);
        case 3:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(n, n + o, t);
        case 4:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + o, t);
        case 6:
          return this.stream.parseOID(n, n + o, t);
        case 16:
        case 17:
          return this.sub !== null ? "(" + this.sub.length + " elem)" : "(no elem)";
        case 12:
          return ke(this.stream.parseStringUTF(n, n + o), t);
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
          return ke(this.stream.parseStringISO(n, n + o), t);
        case 30:
          return ke(this.stream.parseStringBMP(n, n + o), t);
        case 23:
        case 24:
          return this.stream.parseTime(n, n + o, this.tag.tagNumber == 23);
      }
      return null;
    }, e.prototype.toString = function() {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
    }, e.prototype.toPrettyString = function(t) {
      t === void 0 && (t = "");
      var n = t + this.typeName() + " @" + this.stream.pos;
      if (this.length >= 0 && (n += "+"), n += this.length, this.tag.tagConstructed ? n += " (constructed)" : this.tag.isUniversal() && (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) && this.sub !== null && (n += " (encapsulates)"), n += `
`, this.sub !== null) {
        t += "  ";
        for (var o = 0, r = this.sub.length; o < r; ++o)
          n += this.sub[o].toPrettyString(t);
      }
      return n;
    }, e.prototype.posStart = function() {
      return this.stream.pos;
    }, e.prototype.posContent = function() {
      return this.stream.pos + this.header;
    }, e.prototype.posEnd = function() {
      return this.stream.pos + this.header + Math.abs(this.length);
    }, e.prototype.toHexString = function() {
      return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
    }, e.decodeLength = function(t) {
      var n = t.get(), o = n & 127;
      if (o == n)
        return o;
      if (o > 6)
        throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
      if (o === 0)
        return null;
      n = 0;
      for (var r = 0; r < o; ++r)
        n = n * 256 + t.get();
      return n;
    }, e.prototype.getHexStringValue = function() {
      var t = this.toHexString(), n = this.header * 2, o = this.length * 2;
      return t.substr(n, o);
    }, e.decode = function(t) {
      var n;
      t instanceof ut ? n = t : n = new ut(t, 0);
      var o = new ut(n), r = new Vt(n), s = e.decodeLength(n), i = n.pos, a = i - o.pos, l = null, u = function() {
        var g = [];
        if (s !== null) {
          for (var A = i + s; n.pos < A; )
            g[g.length] = e.decode(n);
          if (n.pos != A)
            throw new Error("Content size is not correct for container starting at offset " + i);
        } else
          try {
            for (; ; ) {
              var E = e.decode(n);
              if (E.tag.isEOC())
                break;
              g[g.length] = E;
            }
            s = i - n.pos;
          } catch (w) {
            throw new Error("Exception while decoding undefined length content: " + w);
          }
        return g;
      };
      if (r.tagConstructed)
        l = u();
      else if (r.isUniversal() && (r.tagNumber == 3 || r.tagNumber == 4))
        try {
          if (r.tagNumber == 3 && n.get() != 0)
            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
          l = u();
          for (var d = 0; d < l.length; ++d)
            if (l[d].tag.isEOC())
              throw new Error("EOC is not supposed to be actual content.");
        } catch {
          l = null;
        }
      if (l === null) {
        if (s === null)
          throw new Error("We can't skip over an invalid tag with undefined length at offset " + i);
        n.pos = i + Math.abs(s);
      }
      return new e(o, a, s, r, l);
    }, e;
  }()
), Vt = (
  /** @class */
  function() {
    function e(t) {
      var n = t.get();
      if (this.tagClass = n >> 6, this.tagConstructed = (n & 32) !== 0, this.tagNumber = n & 31, this.tagNumber == 31) {
        var o = new Oe();
        do
          n = t.get(), o.mulAdd(128, n & 127);
        while (n & 128);
        this.tagNumber = o.simplify();
      }
    }
    return e.prototype.isUniversal = function() {
      return this.tagClass === 0;
    }, e.prototype.isEOC = function() {
      return this.tagClass === 0 && this.tagNumber === 0;
    }, e;
  }()
), ve, _r = 244837814094590, jt = (_r & 16777215) == 15715070, ee = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], xr = (1 << 26) / ee[ee.length - 1], Q = (
  /** @class */
  function() {
    function e(t, n, o) {
      t != null && (typeof t == "number" ? this.fromNumber(t, n, o) : n == null && typeof t != "string" ? this.fromString(t, 256) : this.fromString(t, n));
    }
    return e.prototype.toString = function(t) {
      if (this.s < 0)
        return "-" + this.negate().toString(t);
      var n;
      if (t == 16)
        n = 4;
      else if (t == 8)
        n = 3;
      else if (t == 2)
        n = 1;
      else if (t == 32)
        n = 5;
      else if (t == 4)
        n = 2;
      else
        return this.toRadix(t);
      var o = (1 << n) - 1, r, s = !1, i = "", a = this.t, l = this.DB - a * this.DB % n;
      if (a-- > 0)
        for (l < this.DB && (r = this[a] >> l) > 0 && (s = !0, i = he(r)); a >= 0; )
          l < n ? (r = (this[a] & (1 << l) - 1) << n - l, r |= this[--a] >> (l += this.DB - n)) : (r = this[a] >> (l -= n) & o, l <= 0 && (l += this.DB, --a)), r > 0 && (s = !0), s && (i += he(r));
      return s ? i : "0";
    }, e.prototype.negate = function() {
      var t = N();
      return e.ZERO.subTo(this, t), t;
    }, e.prototype.abs = function() {
      return this.s < 0 ? this.negate() : this;
    }, e.prototype.compareTo = function(t) {
      var n = this.s - t.s;
      if (n != 0)
        return n;
      var o = this.t;
      if (n = o - t.t, n != 0)
        return this.s < 0 ? -n : n;
      for (; --o >= 0; )
        if ((n = this[o] - t[o]) != 0)
          return n;
      return 0;
    }, e.prototype.bitLength = function() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + He(this[this.t - 1] ^ this.s & this.DM);
    }, e.prototype.mod = function(t) {
      var n = N();
      return this.abs().divRemTo(t, null, n), this.s < 0 && n.compareTo(e.ZERO) > 0 && t.subTo(n, n), n;
    }, e.prototype.modPowInt = function(t, n) {
      var o;
      return t < 256 || n.isEven() ? o = new Mt(n) : o = new qt(n), this.exp(t, o);
    }, e.prototype.clone = function() {
      var t = N();
      return this.copyTo(t), t;
    }, e.prototype.intValue = function() {
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
    }, e.prototype.byteValue = function() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }, e.prototype.shortValue = function() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }, e.prototype.signum = function() {
      return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
    }, e.prototype.toByteArray = function() {
      var t = this.t, n = [];
      n[0] = this.s;
      var o = this.DB - t * this.DB % 8, r, s = 0;
      if (t-- > 0)
        for (o < this.DB && (r = this[t] >> o) != (this.s & this.DM) >> o && (n[s++] = r | this.s << this.DB - o); t >= 0; )
          o < 8 ? (r = (this[t] & (1 << o) - 1) << 8 - o, r |= this[--t] >> (o += this.DB - 8)) : (r = this[t] >> (o -= 8) & 255, o <= 0 && (o += this.DB, --t)), r & 128 && (r |= -256), s == 0 && (this.s & 128) != (r & 128) && ++s, (s > 0 || r != this.s) && (n[s++] = r);
      return n;
    }, e.prototype.equals = function(t) {
      return this.compareTo(t) == 0;
    }, e.prototype.min = function(t) {
      return this.compareTo(t) < 0 ? this : t;
    }, e.prototype.max = function(t) {
      return this.compareTo(t) > 0 ? this : t;
    }, e.prototype.and = function(t) {
      var n = N();
      return this.bitwiseTo(t, mr, n), n;
    }, e.prototype.or = function(t) {
      var n = N();
      return this.bitwiseTo(t, Fe, n), n;
    }, e.prototype.xor = function(t) {
      var n = N();
      return this.bitwiseTo(t, Pt, n), n;
    }, e.prototype.andNot = function(t) {
      var n = N();
      return this.bitwiseTo(t, Lt, n), n;
    }, e.prototype.not = function() {
      for (var t = N(), n = 0; n < this.t; ++n)
        t[n] = this.DM & ~this[n];
      return t.t = this.t, t.s = ~this.s, t;
    }, e.prototype.shiftLeft = function(t) {
      var n = N();
      return t < 0 ? this.rShiftTo(-t, n) : this.lShiftTo(t, n), n;
    }, e.prototype.shiftRight = function(t) {
      var n = N();
      return t < 0 ? this.lShiftTo(-t, n) : this.rShiftTo(t, n), n;
    }, e.prototype.getLowestSetBit = function() {
      for (var t = 0; t < this.t; ++t)
        if (this[t] != 0)
          return t * this.DB + vr(this[t]);
      return this.s < 0 ? this.t * this.DB : -1;
    }, e.prototype.bitCount = function() {
      for (var t = 0, n = this.s & this.DM, o = 0; o < this.t; ++o)
        t += Ar(this[o] ^ n);
      return t;
    }, e.prototype.testBit = function(t) {
      var n = Math.floor(t / this.DB);
      return n >= this.t ? this.s != 0 : (this[n] & 1 << t % this.DB) != 0;
    }, e.prototype.setBit = function(t) {
      return this.changeBit(t, Fe);
    }, e.prototype.clearBit = function(t) {
      return this.changeBit(t, Lt);
    }, e.prototype.flipBit = function(t) {
      return this.changeBit(t, Pt);
    }, e.prototype.add = function(t) {
      var n = N();
      return this.addTo(t, n), n;
    }, e.prototype.subtract = function(t) {
      var n = N();
      return this.subTo(t, n), n;
    }, e.prototype.multiply = function(t) {
      var n = N();
      return this.multiplyTo(t, n), n;
    }, e.prototype.divide = function(t) {
      var n = N();
      return this.divRemTo(t, n, null), n;
    }, e.prototype.remainder = function(t) {
      var n = N();
      return this.divRemTo(t, null, n), n;
    }, e.prototype.divideAndRemainder = function(t) {
      var n = N(), o = N();
      return this.divRemTo(t, n, o), [n, o];
    }, e.prototype.modPow = function(t, n) {
      var o = t.bitLength(), r, s = ge(1), i;
      if (o <= 0)
        return s;
      o < 18 ? r = 1 : o < 48 ? r = 3 : o < 144 ? r = 4 : o < 768 ? r = 5 : r = 6, o < 8 ? i = new Mt(n) : n.isEven() ? i = new Ir(n) : i = new qt(n);
      var a = [], l = 3, u = r - 1, d = (1 << r) - 1;
      if (a[1] = i.convert(this), r > 1) {
        var g = N();
        for (i.sqrTo(a[1], g); l <= d; )
          a[l] = N(), i.mulTo(g, a[l - 2], a[l]), l += 2;
      }
      var A = t.t - 1, E, w = !0, y = N(), k;
      for (o = He(t[A]) - 1; A >= 0; ) {
        for (o >= u ? E = t[A] >> o - u & d : (E = (t[A] & (1 << o + 1) - 1) << u - o, A > 0 && (E |= t[A - 1] >> this.DB + o - u)), l = r; !(E & 1); )
          E >>= 1, --l;
        if ((o -= l) < 0 && (o += this.DB, --A), w)
          a[E].copyTo(s), w = !1;
        else {
          for (; l > 1; )
            i.sqrTo(s, y), i.sqrTo(y, s), l -= 2;
          l > 0 ? i.sqrTo(s, y) : (k = s, s = y, y = k), i.mulTo(y, a[E], s);
        }
        for (; A >= 0 && !(t[A] & 1 << o); )
          i.sqrTo(s, y), k = s, s = y, y = k, --o < 0 && (o = this.DB - 1, --A);
      }
      return i.revert(s);
    }, e.prototype.modInverse = function(t) {
      var n = t.isEven();
      if (this.isEven() && n || t.signum() == 0)
        return e.ZERO;
      for (var o = t.clone(), r = this.clone(), s = ge(1), i = ge(0), a = ge(0), l = ge(1); o.signum() != 0; ) {
        for (; o.isEven(); )
          o.rShiftTo(1, o), n ? ((!s.isEven() || !i.isEven()) && (s.addTo(this, s), i.subTo(t, i)), s.rShiftTo(1, s)) : i.isEven() || i.subTo(t, i), i.rShiftTo(1, i);
        for (; r.isEven(); )
          r.rShiftTo(1, r), n ? ((!a.isEven() || !l.isEven()) && (a.addTo(this, a), l.subTo(t, l)), a.rShiftTo(1, a)) : l.isEven() || l.subTo(t, l), l.rShiftTo(1, l);
        o.compareTo(r) >= 0 ? (o.subTo(r, o), n && s.subTo(a, s), i.subTo(l, i)) : (r.subTo(o, r), n && a.subTo(s, a), l.subTo(i, l));
      }
      if (r.compareTo(e.ONE) != 0)
        return e.ZERO;
      if (l.compareTo(t) >= 0)
        return l.subtract(t);
      if (l.signum() < 0)
        l.addTo(t, l);
      else
        return l;
      return l.signum() < 0 ? l.add(t) : l;
    }, e.prototype.pow = function(t) {
      return this.exp(t, new Er());
    }, e.prototype.gcd = function(t) {
      var n = this.s < 0 ? this.negate() : this.clone(), o = t.s < 0 ? t.negate() : t.clone();
      if (n.compareTo(o) < 0) {
        var r = n;
        n = o, o = r;
      }
      var s = n.getLowestSetBit(), i = o.getLowestSetBit();
      if (i < 0)
        return n;
      for (s < i && (i = s), i > 0 && (n.rShiftTo(i, n), o.rShiftTo(i, o)); n.signum() > 0; )
        (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n), (s = o.getLowestSetBit()) > 0 && o.rShiftTo(s, o), n.compareTo(o) >= 0 ? (n.subTo(o, n), n.rShiftTo(1, n)) : (o.subTo(n, o), o.rShiftTo(1, o));
      return i > 0 && o.lShiftTo(i, o), o;
    }, e.prototype.isProbablePrime = function(t) {
      var n, o = this.abs();
      if (o.t == 1 && o[0] <= ee[ee.length - 1]) {
        for (n = 0; n < ee.length; ++n)
          if (o[0] == ee[n])
            return !0;
        return !1;
      }
      if (o.isEven())
        return !1;
      for (n = 1; n < ee.length; ) {
        for (var r = ee[n], s = n + 1; s < ee.length && r < xr; )
          r *= ee[s++];
        for (r = o.modInt(r); n < s; )
          if (r % ee[n++] == 0)
            return !1;
      }
      return o.millerRabin(t);
    }, e.prototype.copyTo = function(t) {
      for (var n = this.t - 1; n >= 0; --n)
        t[n] = this[n];
      t.t = this.t, t.s = this.s;
    }, e.prototype.fromInt = function(t) {
      this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
    }, e.prototype.fromString = function(t, n) {
      var o;
      if (n == 16)
        o = 4;
      else if (n == 8)
        o = 3;
      else if (n == 256)
        o = 8;
      else if (n == 2)
        o = 1;
      else if (n == 32)
        o = 5;
      else if (n == 4)
        o = 2;
      else {
        this.fromRadix(t, n);
        return;
      }
      this.t = 0, this.s = 0;
      for (var r = t.length, s = !1, i = 0; --r >= 0; ) {
        var a = o == 8 ? +t[r] & 255 : Ht(t, r);
        if (a < 0) {
          t.charAt(r) == "-" && (s = !0);
          continue;
        }
        s = !1, i == 0 ? this[this.t++] = a : i + o > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - i) - 1) << i, this[this.t++] = a >> this.DB - i) : this[this.t - 1] |= a << i, i += o, i >= this.DB && (i -= this.DB);
      }
      o == 8 && +t[0] & 128 && (this.s = -1, i > 0 && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)), this.clamp(), s && e.ZERO.subTo(this, this);
    }, e.prototype.clamp = function() {
      for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
        --this.t;
    }, e.prototype.dlShiftTo = function(t, n) {
      var o;
      for (o = this.t - 1; o >= 0; --o)
        n[o + t] = this[o];
      for (o = t - 1; o >= 0; --o)
        n[o] = 0;
      n.t = this.t + t, n.s = this.s;
    }, e.prototype.drShiftTo = function(t, n) {
      for (var o = t; o < this.t; ++o)
        n[o - t] = this[o];
      n.t = Math.max(this.t - t, 0), n.s = this.s;
    }, e.prototype.lShiftTo = function(t, n) {
      for (var o = t % this.DB, r = this.DB - o, s = (1 << r) - 1, i = Math.floor(t / this.DB), a = this.s << o & this.DM, l = this.t - 1; l >= 0; --l)
        n[l + i + 1] = this[l] >> r | a, a = (this[l] & s) << o;
      for (var l = i - 1; l >= 0; --l)
        n[l] = 0;
      n[i] = a, n.t = this.t + i + 1, n.s = this.s, n.clamp();
    }, e.prototype.rShiftTo = function(t, n) {
      n.s = this.s;
      var o = Math.floor(t / this.DB);
      if (o >= this.t) {
        n.t = 0;
        return;
      }
      var r = t % this.DB, s = this.DB - r, i = (1 << r) - 1;
      n[0] = this[o] >> r;
      for (var a = o + 1; a < this.t; ++a)
        n[a - o - 1] |= (this[a] & i) << s, n[a - o] = this[a] >> r;
      r > 0 && (n[this.t - o - 1] |= (this.s & i) << s), n.t = this.t - o, n.clamp();
    }, e.prototype.subTo = function(t, n) {
      for (var o = 0, r = 0, s = Math.min(t.t, this.t); o < s; )
        r += this[o] - t[o], n[o++] = r & this.DM, r >>= this.DB;
      if (t.t < this.t) {
        for (r -= t.s; o < this.t; )
          r += this[o], n[o++] = r & this.DM, r >>= this.DB;
        r += this.s;
      } else {
        for (r += this.s; o < t.t; )
          r -= t[o], n[o++] = r & this.DM, r >>= this.DB;
        r -= t.s;
      }
      n.s = r < 0 ? -1 : 0, r < -1 ? n[o++] = this.DV + r : r > 0 && (n[o++] = r), n.t = o, n.clamp();
    }, e.prototype.multiplyTo = function(t, n) {
      var o = this.abs(), r = t.abs(), s = o.t;
      for (n.t = s + r.t; --s >= 0; )
        n[s] = 0;
      for (s = 0; s < r.t; ++s)
        n[s + o.t] = o.am(0, r[s], n, s, 0, o.t);
      n.s = 0, n.clamp(), this.s != t.s && e.ZERO.subTo(n, n);
    }, e.prototype.squareTo = function(t) {
      for (var n = this.abs(), o = t.t = 2 * n.t; --o >= 0; )
        t[o] = 0;
      for (o = 0; o < n.t - 1; ++o) {
        var r = n.am(o, n[o], t, 2 * o, 0, 1);
        (t[o + n.t] += n.am(o + 1, 2 * n[o], t, 2 * o + 1, r, n.t - o - 1)) >= n.DV && (t[o + n.t] -= n.DV, t[o + n.t + 1] = 1);
      }
      t.t > 0 && (t[t.t - 1] += n.am(o, n[o], t, 2 * o, 0, 1)), t.s = 0, t.clamp();
    }, e.prototype.divRemTo = function(t, n, o) {
      var r = t.abs();
      if (!(r.t <= 0)) {
        var s = this.abs();
        if (s.t < r.t) {
          n != null && n.fromInt(0), o != null && this.copyTo(o);
          return;
        }
        o == null && (o = N());
        var i = N(), a = this.s, l = t.s, u = this.DB - He(r[r.t - 1]);
        u > 0 ? (r.lShiftTo(u, i), s.lShiftTo(u, o)) : (r.copyTo(i), s.copyTo(o));
        var d = i.t, g = i[d - 1];
        if (g != 0) {
          var A = g * (1 << this.F1) + (d > 1 ? i[d - 2] >> this.F2 : 0), E = this.FV / A, w = (1 << this.F1) / A, y = 1 << this.F2, k = o.t, B = k - d, T = n ?? N();
          for (i.dlShiftTo(B, T), o.compareTo(T) >= 0 && (o[o.t++] = 1, o.subTo(T, o)), e.ONE.dlShiftTo(d, T), T.subTo(i, i); i.t < d; )
            i[i.t++] = 0;
          for (; --B >= 0; ) {
            var b = o[--k] == g ? this.DM : Math.floor(o[k] * E + (o[k - 1] + y) * w);
            if ((o[k] += i.am(0, b, o, B, 0, d)) < b)
              for (i.dlShiftTo(B, T), o.subTo(T, o); o[k] < --b; )
                o.subTo(T, o);
          }
          n != null && (o.drShiftTo(d, n), a != l && e.ZERO.subTo(n, n)), o.t = d, o.clamp(), u > 0 && o.rShiftTo(u, o), a < 0 && e.ZERO.subTo(o, o);
        }
      }
    }, e.prototype.invDigit = function() {
      if (this.t < 1)
        return 0;
      var t = this[0];
      if (!(t & 1))
        return 0;
      var n = t & 3;
      return n = n * (2 - (t & 15) * n) & 15, n = n * (2 - (t & 255) * n) & 255, n = n * (2 - ((t & 65535) * n & 65535)) & 65535, n = n * (2 - t * n % this.DV) % this.DV, n > 0 ? this.DV - n : -n;
    }, e.prototype.isEven = function() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }, e.prototype.exp = function(t, n) {
      if (t > 4294967295 || t < 1)
        return e.ONE;
      var o = N(), r = N(), s = n.convert(this), i = He(t) - 1;
      for (s.copyTo(o); --i >= 0; )
        if (n.sqrTo(o, r), (t & 1 << i) > 0)
          n.mulTo(r, s, o);
        else {
          var a = o;
          o = r, r = a;
        }
      return n.revert(o);
    }, e.prototype.chunkSize = function(t) {
      return Math.floor(Math.LN2 * this.DB / Math.log(t));
    }, e.prototype.toRadix = function(t) {
      if (t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36)
        return "0";
      var n = this.chunkSize(t), o = Math.pow(t, n), r = ge(o), s = N(), i = N(), a = "";
      for (this.divRemTo(r, s, i); s.signum() > 0; )
        a = (o + i.intValue()).toString(t).substr(1) + a, s.divRemTo(r, s, i);
      return i.intValue().toString(t) + a;
    }, e.prototype.fromRadix = function(t, n) {
      this.fromInt(0), n == null && (n = 10);
      for (var o = this.chunkSize(n), r = Math.pow(n, o), s = !1, i = 0, a = 0, l = 0; l < t.length; ++l) {
        var u = Ht(t, l);
        if (u < 0) {
          t.charAt(l) == "-" && this.signum() == 0 && (s = !0);
          continue;
        }
        a = n * a + u, ++i >= o && (this.dMultiply(r), this.dAddOffset(a, 0), i = 0, a = 0);
      }
      i > 0 && (this.dMultiply(Math.pow(n, i)), this.dAddOffset(a, 0)), s && e.ZERO.subTo(this, this);
    }, e.prototype.fromNumber = function(t, n, o) {
      if (typeof n == "number")
        if (t < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(t, o), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), Fe, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n); )
            this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
      else {
        var r = [], s = t & 7;
        r.length = (t >> 3) + 1, n.nextBytes(r), s > 0 ? r[0] &= (1 << s) - 1 : r[0] = 0, this.fromString(r, 256);
      }
    }, e.prototype.bitwiseTo = function(t, n, o) {
      var r, s, i = Math.min(t.t, this.t);
      for (r = 0; r < i; ++r)
        o[r] = n(this[r], t[r]);
      if (t.t < this.t) {
        for (s = t.s & this.DM, r = i; r < this.t; ++r)
          o[r] = n(this[r], s);
        o.t = this.t;
      } else {
        for (s = this.s & this.DM, r = i; r < t.t; ++r)
          o[r] = n(s, t[r]);
        o.t = t.t;
      }
      o.s = n(this.s, t.s), o.clamp();
    }, e.prototype.changeBit = function(t, n) {
      var o = e.ONE.shiftLeft(t);
      return this.bitwiseTo(o, n, o), o;
    }, e.prototype.addTo = function(t, n) {
      for (var o = 0, r = 0, s = Math.min(t.t, this.t); o < s; )
        r += this[o] + t[o], n[o++] = r & this.DM, r >>= this.DB;
      if (t.t < this.t) {
        for (r += t.s; o < this.t; )
          r += this[o], n[o++] = r & this.DM, r >>= this.DB;
        r += this.s;
      } else {
        for (r += this.s; o < t.t; )
          r += t[o], n[o++] = r & this.DM, r >>= this.DB;
        r += t.s;
      }
      n.s = r < 0 ? -1 : 0, r > 0 ? n[o++] = r : r < -1 && (n[o++] = this.DV + r), n.t = o, n.clamp();
    }, e.prototype.dMultiply = function(t) {
      this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, e.prototype.dAddOffset = function(t, n) {
      if (t != 0) {
        for (; this.t <= n; )
          this[this.t++] = 0;
        for (this[n] += t; this[n] >= this.DV; )
          this[n] -= this.DV, ++n >= this.t && (this[this.t++] = 0), ++this[n];
      }
    }, e.prototype.multiplyLowerTo = function(t, n, o) {
      var r = Math.min(this.t + t.t, n);
      for (o.s = 0, o.t = r; r > 0; )
        o[--r] = 0;
      for (var s = o.t - this.t; r < s; ++r)
        o[r + this.t] = this.am(0, t[r], o, r, 0, this.t);
      for (var s = Math.min(t.t, n); r < s; ++r)
        this.am(0, t[r], o, r, 0, n - r);
      o.clamp();
    }, e.prototype.multiplyUpperTo = function(t, n, o) {
      --n;
      var r = o.t = this.t + t.t - n;
      for (o.s = 0; --r >= 0; )
        o[r] = 0;
      for (r = Math.max(n - this.t, 0); r < t.t; ++r)
        o[this.t + r - n] = this.am(n - r, t[r], o, 0, 0, this.t + r - n);
      o.clamp(), o.drShiftTo(1, o);
    }, e.prototype.modInt = function(t) {
      if (t <= 0)
        return 0;
      var n = this.DV % t, o = this.s < 0 ? t - 1 : 0;
      if (this.t > 0)
        if (n == 0)
          o = this[0] % t;
        else
          for (var r = this.t - 1; r >= 0; --r)
            o = (n * o + this[r]) % t;
      return o;
    }, e.prototype.millerRabin = function(t) {
      var n = this.subtract(e.ONE), o = n.getLowestSetBit();
      if (o <= 0)
        return !1;
      var r = n.shiftRight(o);
      t = t + 1 >> 1, t > ee.length && (t = ee.length);
      for (var s = N(), i = 0; i < t; ++i) {
        s.fromInt(ee[Math.floor(Math.random() * ee.length)]);
        var a = s.modPow(r, this);
        if (a.compareTo(e.ONE) != 0 && a.compareTo(n) != 0) {
          for (var l = 1; l++ < o && a.compareTo(n) != 0; )
            if (a = a.modPowInt(2, this), a.compareTo(e.ONE) == 0)
              return !1;
          if (a.compareTo(n) != 0)
            return !1;
        }
      }
      return !0;
    }, e.prototype.square = function() {
      var t = N();
      return this.squareTo(t), t;
    }, e.prototype.gcda = function(t, n) {
      var o = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
      if (o.compareTo(r) < 0) {
        var s = o;
        o = r, r = s;
      }
      var i = o.getLowestSetBit(), a = r.getLowestSetBit();
      if (a < 0) {
        n(o);
        return;
      }
      i < a && (a = i), a > 0 && (o.rShiftTo(a, o), r.rShiftTo(a, r));
      var l = function() {
        (i = o.getLowestSetBit()) > 0 && o.rShiftTo(i, o), (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r), o.compareTo(r) >= 0 ? (o.subTo(r, o), o.rShiftTo(1, o)) : (r.subTo(o, r), r.rShiftTo(1, r)), o.signum() > 0 ? setTimeout(l, 0) : (a > 0 && r.lShiftTo(a, r), setTimeout(function() {
          n(r);
        }, 0));
      };
      setTimeout(l, 10);
    }, e.prototype.fromNumberAsync = function(t, n, o, r) {
      if (typeof n == "number")
        if (t < 2)
          this.fromInt(1);
        else {
          this.fromNumber(t, o), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), Fe, this), this.isEven() && this.dAddOffset(1, 0);
          var s = this, i = function() {
            s.dAddOffset(2, 0), s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s), s.isProbablePrime(n) ? setTimeout(function() {
              r();
            }, 0) : setTimeout(i, 0);
          };
          setTimeout(i, 0);
        }
      else {
        var a = [], l = t & 7;
        a.length = (t >> 3) + 1, n.nextBytes(a), l > 0 ? a[0] &= (1 << l) - 1 : a[0] = 0, this.fromString(a, 256);
      }
    }, e;
  }()
), Er = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.convert = function(t) {
      return t;
    }, e.prototype.revert = function(t) {
      return t;
    }, e.prototype.mulTo = function(t, n, o) {
      t.multiplyTo(n, o);
    }, e.prototype.sqrTo = function(t, n) {
      t.squareTo(n);
    }, e;
  }()
), Mt = (
  /** @class */
  function() {
    function e(t) {
      this.m = t;
    }
    return e.prototype.convert = function(t) {
      return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
    }, e.prototype.revert = function(t) {
      return t;
    }, e.prototype.reduce = function(t) {
      t.divRemTo(this.m, null, t);
    }, e.prototype.mulTo = function(t, n, o) {
      t.multiplyTo(n, o), this.reduce(o);
    }, e.prototype.sqrTo = function(t, n) {
      t.squareTo(n), this.reduce(n);
    }, e;
  }()
), qt = (
  /** @class */
  function() {
    function e(t) {
      this.m = t, this.mp = t.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
    }
    return e.prototype.convert = function(t) {
      var n = N();
      return t.abs().dlShiftTo(this.m.t, n), n.divRemTo(this.m, null, n), t.s < 0 && n.compareTo(Q.ZERO) > 0 && this.m.subTo(n, n), n;
    }, e.prototype.revert = function(t) {
      var n = N();
      return t.copyTo(n), this.reduce(n), n;
    }, e.prototype.reduce = function(t) {
      for (; t.t <= this.mt2; )
        t[t.t++] = 0;
      for (var n = 0; n < this.m.t; ++n) {
        var o = t[n] & 32767, r = o * this.mpl + ((o * this.mph + (t[n] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (o = n + this.m.t, t[o] += this.m.am(0, r, t, n, 0, this.m.t); t[o] >= t.DV; )
          t[o] -= t.DV, t[++o]++;
      }
      t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
    }, e.prototype.mulTo = function(t, n, o) {
      t.multiplyTo(n, o), this.reduce(o);
    }, e.prototype.sqrTo = function(t, n) {
      t.squareTo(n), this.reduce(n);
    }, e;
  }()
), Ir = (
  /** @class */
  function() {
    function e(t) {
      this.m = t, this.r2 = N(), this.q3 = N(), Q.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
    }
    return e.prototype.convert = function(t) {
      if (t.s < 0 || t.t > 2 * this.m.t)
        return t.mod(this.m);
      if (t.compareTo(this.m) < 0)
        return t;
      var n = N();
      return t.copyTo(n), this.reduce(n), n;
    }, e.prototype.revert = function(t) {
      return t;
    }, e.prototype.reduce = function(t) {
      for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
        t.dAddOffset(1, this.m.t + 1);
      for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
        t.subTo(this.m, t);
    }, e.prototype.mulTo = function(t, n, o) {
      t.multiplyTo(n, o), this.reduce(o);
    }, e.prototype.sqrTo = function(t, n) {
      t.squareTo(n), this.reduce(n);
    }, e;
  }()
);
function N() {
  return new Q(null);
}
function j(e, t) {
  return new Q(e, t);
}
var Ft = typeof navigator < "u";
Ft && jt && navigator.appName == "Microsoft Internet Explorer" ? (Q.prototype.am = function(t, n, o, r, s, i) {
  for (var a = n & 32767, l = n >> 15; --i >= 0; ) {
    var u = this[t] & 32767, d = this[t++] >> 15, g = l * u + d * a;
    u = a * u + ((g & 32767) << 15) + o[r] + (s & 1073741823), s = (u >>> 30) + (g >>> 15) + l * d + (s >>> 30), o[r++] = u & 1073741823;
  }
  return s;
}, ve = 30) : Ft && jt && navigator.appName != "Netscape" ? (Q.prototype.am = function(t, n, o, r, s, i) {
  for (; --i >= 0; ) {
    var a = n * this[t++] + o[r] + s;
    s = Math.floor(a / 67108864), o[r++] = a & 67108863;
  }
  return s;
}, ve = 26) : (Q.prototype.am = function(t, n, o, r, s, i) {
  for (var a = n & 16383, l = n >> 14; --i >= 0; ) {
    var u = this[t] & 16383, d = this[t++] >> 14, g = l * u + d * a;
    u = a * u + ((g & 16383) << 14) + o[r] + s, s = (u >> 28) + (g >> 14) + l * d, o[r++] = u & 268435455;
  }
  return s;
}, ve = 28);
Q.prototype.DB = ve;
Q.prototype.DM = (1 << ve) - 1;
Q.prototype.DV = 1 << ve;
var kt = 52;
Q.prototype.FV = Math.pow(2, kt);
Q.prototype.F1 = kt - ve;
Q.prototype.F2 = 2 * ve - kt;
var at = [], Re, ie;
Re = "0".charCodeAt(0);
for (ie = 0; ie <= 9; ++ie)
  at[Re++] = ie;
Re = "a".charCodeAt(0);
for (ie = 10; ie < 36; ++ie)
  at[Re++] = ie;
Re = "A".charCodeAt(0);
for (ie = 10; ie < 36; ++ie)
  at[Re++] = ie;
function Ht(e, t) {
  var n = at[e.charCodeAt(t)];
  return n ?? -1;
}
function ge(e) {
  var t = N();
  return t.fromInt(e), t;
}
function He(e) {
  var t = 1, n;
  return (n = e >>> 16) != 0 && (e = n, t += 16), (n = e >> 8) != 0 && (e = n, t += 8), (n = e >> 4) != 0 && (e = n, t += 4), (n = e >> 2) != 0 && (e = n, t += 2), (n = e >> 1) != 0 && (e = n, t += 1), t;
}
Q.ZERO = ge(0);
Q.ONE = ge(1);
var Cr = (
  /** @class */
  function() {
    function e() {
      this.i = 0, this.j = 0, this.S = [];
    }
    return e.prototype.init = function(t) {
      var n, o, r;
      for (n = 0; n < 256; ++n)
        this.S[n] = n;
      for (o = 0, n = 0; n < 256; ++n)
        o = o + this.S[n] + t[n % t.length] & 255, r = this.S[n], this.S[n] = this.S[o], this.S[o] = r;
      this.i = 0, this.j = 0;
    }, e.prototype.next = function() {
      var t;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
    }, e;
  }()
);
function kr() {
  return new Cr();
}
var Nn = 256, We, me = null, le;
if (me == null) {
  me = [], le = 0;
  var ze = void 0;
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    var ct = new Uint32Array(256);
    for (window.crypto.getRandomValues(ct), ze = 0; ze < ct.length; ++ze)
      me[le++] = ct[ze] & 255;
  }
  var Ke = 0, Xe = function(e) {
    if (Ke = Ke || 0, Ke >= 256 || le >= Nn) {
      window.removeEventListener ? window.removeEventListener("mousemove", Xe, !1) : window.detachEvent && window.detachEvent("onmousemove", Xe);
      return;
    }
    try {
      var t = e.x + e.y;
      me[le++] = t & 255, Ke += 1;
    } catch {
    }
  };
  typeof window < "u" && (window.addEventListener ? window.addEventListener("mousemove", Xe, !1) : window.attachEvent && window.attachEvent("onmousemove", Xe));
}
function Tr() {
  if (We == null) {
    for (We = kr(); le < Nn; ) {
      var e = Math.floor(65536 * Math.random());
      me[le++] = e & 255;
    }
    for (We.init(me), le = 0; le < me.length; ++le)
      me[le] = 0;
    le = 0;
  }
  return We.next();
}
var vt = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.nextBytes = function(t) {
      for (var n = 0; n < t.length; ++n)
        t[n] = Tr();
    }, e;
  }()
);
function Br(e, t) {
  if (t < e.length + 22)
    return console.error("Message too long for RSA"), null;
  for (var n = t - e.length - 6, o = "", r = 0; r < n; r += 2)
    o += "ff";
  var s = "0001" + o + "00" + e;
  return j(s, 16);
}
function Rr(e, t) {
  if (t < e.length + 11)
    return console.error("Message too long for RSA"), null;
  for (var n = [], o = e.length - 1; o >= 0 && t > 0; ) {
    var r = e.charCodeAt(o--);
    r < 128 ? n[--t] = r : r > 127 && r < 2048 ? (n[--t] = r & 63 | 128, n[--t] = r >> 6 | 192) : (n[--t] = r & 63 | 128, n[--t] = r >> 6 & 63 | 128, n[--t] = r >> 12 | 224);
  }
  n[--t] = 0;
  for (var s = new vt(), i = []; t > 2; ) {
    for (i[0] = 0; i[0] == 0; )
      s.nextBytes(i);
    n[--t] = i[0];
  }
  return n[--t] = 2, n[--t] = 0, new Q(n);
}
var Dr = (
  /** @class */
  function() {
    function e() {
      this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
    }
    return e.prototype.doPublic = function(t) {
      return t.modPowInt(this.e, this.n);
    }, e.prototype.doPrivate = function(t) {
      if (this.p == null || this.q == null)
        return t.modPow(this.d, this.n);
      for (var n = t.mod(this.p).modPow(this.dmp1, this.p), o = t.mod(this.q).modPow(this.dmq1, this.q); n.compareTo(o) < 0; )
        n = n.add(this.p);
      return n.subtract(o).multiply(this.coeff).mod(this.p).multiply(this.q).add(o);
    }, e.prototype.setPublic = function(t, n) {
      t != null && n != null && t.length > 0 && n.length > 0 ? (this.n = j(t, 16), this.e = parseInt(n, 16)) : console.error("Invalid RSA public key");
    }, e.prototype.encrypt = function(t) {
      var n = this.n.bitLength() + 7 >> 3, o = Rr(t, n);
      if (o == null)
        return null;
      var r = this.doPublic(o);
      if (r == null)
        return null;
      for (var s = r.toString(16), i = s.length, a = 0; a < n * 2 - i; a++)
        s = "0" + s;
      return s;
    }, e.prototype.setPrivate = function(t, n, o) {
      t != null && n != null && t.length > 0 && n.length > 0 ? (this.n = j(t, 16), this.e = parseInt(n, 16), this.d = j(o, 16)) : console.error("Invalid RSA private key");
    }, e.prototype.setPrivateEx = function(t, n, o, r, s, i, a, l) {
      t != null && n != null && t.length > 0 && n.length > 0 ? (this.n = j(t, 16), this.e = parseInt(n, 16), this.d = j(o, 16), this.p = j(r, 16), this.q = j(s, 16), this.dmp1 = j(i, 16), this.dmq1 = j(a, 16), this.coeff = j(l, 16)) : console.error("Invalid RSA private key");
    }, e.prototype.generate = function(t, n) {
      var o = new vt(), r = t >> 1;
      this.e = parseInt(n, 16);
      for (var s = new Q(n, 16); ; ) {
        for (; this.p = new Q(t - r, 1, o), !(this.p.subtract(Q.ONE).gcd(s).compareTo(Q.ONE) == 0 && this.p.isProbablePrime(10)); )
          ;
        for (; this.q = new Q(r, 1, o), !(this.q.subtract(Q.ONE).gcd(s).compareTo(Q.ONE) == 0 && this.q.isProbablePrime(10)); )
          ;
        if (this.p.compareTo(this.q) <= 0) {
          var i = this.p;
          this.p = this.q, this.q = i;
        }
        var a = this.p.subtract(Q.ONE), l = this.q.subtract(Q.ONE), u = a.multiply(l);
        if (u.gcd(s).compareTo(Q.ONE) == 0) {
          this.n = this.p.multiply(this.q), this.d = s.modInverse(u), this.dmp1 = this.d.mod(a), this.dmq1 = this.d.mod(l), this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }, e.prototype.decrypt = function(t) {
      var n = j(t, 16), o = this.doPrivate(n);
      return o == null ? null : Qr(o, this.n.bitLength() + 7 >> 3);
    }, e.prototype.generateAsync = function(t, n, o) {
      var r = new vt(), s = t >> 1;
      this.e = parseInt(n, 16);
      var i = new Q(n, 16), a = this, l = function() {
        var u = function() {
          if (a.p.compareTo(a.q) <= 0) {
            var A = a.p;
            a.p = a.q, a.q = A;
          }
          var E = a.p.subtract(Q.ONE), w = a.q.subtract(Q.ONE), y = E.multiply(w);
          y.gcd(i).compareTo(Q.ONE) == 0 ? (a.n = a.p.multiply(a.q), a.d = i.modInverse(y), a.dmp1 = a.d.mod(E), a.dmq1 = a.d.mod(w), a.coeff = a.q.modInverse(a.p), setTimeout(function() {
            o();
          }, 0)) : setTimeout(l, 0);
        }, d = function() {
          a.q = N(), a.q.fromNumberAsync(s, 1, r, function() {
            a.q.subtract(Q.ONE).gcda(i, function(A) {
              A.compareTo(Q.ONE) == 0 && a.q.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(d, 0);
            });
          });
        }, g = function() {
          a.p = N(), a.p.fromNumberAsync(t - s, 1, r, function() {
            a.p.subtract(Q.ONE).gcda(i, function(A) {
              A.compareTo(Q.ONE) == 0 && a.p.isProbablePrime(10) ? setTimeout(d, 0) : setTimeout(g, 0);
            });
          });
        };
        setTimeout(g, 0);
      };
      setTimeout(l, 0);
    }, e.prototype.sign = function(t, n, o) {
      var r = Nr(o), s = r + n(t).toString(), i = Br(s, this.n.bitLength() / 4);
      if (i == null)
        return null;
      var a = this.doPrivate(i);
      if (a == null)
        return null;
      var l = a.toString(16);
      return l.length & 1 ? "0" + l : l;
    }, e.prototype.verify = function(t, n, o) {
      var r = j(n, 16), s = this.doPublic(r);
      if (s == null)
        return null;
      var i = s.toString(16).replace(/^1f+00/, ""), a = Or(i);
      return a == o(t).toString();
    }, e;
  }()
);
function Qr(e, t) {
  for (var n = e.toByteArray(), o = 0; o < n.length && n[o] == 0; )
    ++o;
  if (n.length - o != t - 1 || n[o] != 2)
    return null;
  for (++o; n[o] != 0; )
    if (++o >= n.length)
      return null;
  for (var r = ""; ++o < n.length; ) {
    var s = n[o] & 255;
    s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((s & 31) << 6 | n[o + 1] & 63), ++o) : (r += String.fromCharCode((s & 15) << 12 | (n[o + 1] & 63) << 6 | n[o + 2] & 63), o += 2);
  }
  return r;
}
var Ye = {
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  ripemd160: "3021300906052b2403020105000414"
};
function Nr(e) {
  return Ye[e] || "";
}
function Or(e) {
  for (var t in Ye)
    if (Ye.hasOwnProperty(t)) {
      var n = Ye[t], o = n.length;
      if (e.substr(0, o) == n)
        return e.substr(o);
    }
  return e;
}
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var q = {};
q.lang = {
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
  extend: function(e, t, n) {
    if (!t || !e)
      throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    var o = function() {
    };
    if (o.prototype = t.prototype, e.prototype = new o(), e.prototype.constructor = e, e.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t), n) {
      var r;
      for (r in n)
        e.prototype[r] = n[r];
      var s = function() {
      }, i = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) && (s = function(a, l) {
          for (r = 0; r < i.length; r = r + 1) {
            var u = i[r], d = l[u];
            typeof d == "function" && d != Object.prototype[u] && (a[u] = d);
          }
        });
      } catch {
      }
      s(e.prototype, n);
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
var m = {};
(typeof m.asn1 > "u" || !m.asn1) && (m.asn1 = {});
m.asn1.ASN1Util = new function() {
  this.integerToByteHex = function(e) {
    var t = e.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), t;
  }, this.bigIntToMinTwosComplementsHex = function(e) {
    var t = e.toString(16);
    if (t.substr(0, 1) != "-")
      t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
    else {
      var n = t.substr(1), o = n.length;
      o % 2 == 1 ? o += 1 : t.match(/^[0-7]/) || (o += 2);
      for (var r = "", s = 0; s < o; s++)
        r += "f";
      var i = new Q(r, 16), a = i.xor(e).add(Q.ONE);
      t = a.toString(16).replace(/^-/, "");
    }
    return t;
  }, this.getPEMStringFromHex = function(e, t) {
    return hextopem(e, t);
  }, this.newObject = function(e) {
    var t = m, n = t.asn1, o = n.DERBoolean, r = n.DERInteger, s = n.DERBitString, i = n.DEROctetString, a = n.DERNull, l = n.DERObjectIdentifier, u = n.DEREnumerated, d = n.DERUTF8String, g = n.DERNumericString, A = n.DERPrintableString, E = n.DERTeletexString, w = n.DERIA5String, y = n.DERUTCTime, k = n.DERGeneralizedTime, B = n.DERSequence, T = n.DERSet, b = n.DERTaggedObject, x = n.ASN1Util.newObject, D = Object.keys(e);
    if (D.length != 1)
      throw "key of param shall be only one.";
    var C = D[0];
    if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + C + ":") == -1)
      throw "undefined key: " + C;
    if (C == "bool")
      return new o(e[C]);
    if (C == "int")
      return new r(e[C]);
    if (C == "bitstr")
      return new s(e[C]);
    if (C == "octstr")
      return new i(e[C]);
    if (C == "null")
      return new a(e[C]);
    if (C == "oid")
      return new l(e[C]);
    if (C == "enum")
      return new u(e[C]);
    if (C == "utf8str")
      return new d(e[C]);
    if (C == "numstr")
      return new g(e[C]);
    if (C == "prnstr")
      return new A(e[C]);
    if (C == "telstr")
      return new E(e[C]);
    if (C == "ia5str")
      return new w(e[C]);
    if (C == "utctime")
      return new y(e[C]);
    if (C == "gentime")
      return new k(e[C]);
    if (C == "seq") {
      for (var z = e[C], oe = [], se = 0; se < z.length; se++) {
        var V = x(z[se]);
        oe.push(V);
      }
      return new B({ array: oe });
    }
    if (C == "set") {
      for (var z = e[C], oe = [], se = 0; se < z.length; se++) {
        var V = x(z[se]);
        oe.push(V);
      }
      return new T({ array: oe });
    }
    if (C == "tag") {
      var M = e[C];
      if (Object.prototype.toString.call(M) === "[object Array]" && M.length == 3) {
        var be = x(M[2]);
        return new b({
          tag: M[0],
          explicit: M[1],
          obj: be
        });
      } else {
        var we = {};
        if (M.explicit !== void 0 && (we.explicit = M.explicit), M.tag !== void 0 && (we.tag = M.tag), M.obj === void 0)
          throw "obj shall be specified for 'tag'.";
        return we.obj = x(M.obj), new b(we);
      }
    }
  }, this.jsonToASN1HEX = function(e) {
    var t = this.newObject(e);
    return t.getEncodedHex();
  };
}();
m.asn1.ASN1Util.oidHexToInt = function(e) {
  for (var r = "", t = parseInt(e.substr(0, 2), 16), n = Math.floor(t / 40), o = t % 40, r = n + "." + o, s = "", i = 2; i < e.length; i += 2) {
    var a = parseInt(e.substr(i, 2), 16), l = ("00000000" + a.toString(2)).slice(-8);
    if (s = s + l.substr(1, 7), l.substr(0, 1) == "0") {
      var u = new Q(s, 2);
      r = r + "." + u.toString(10), s = "";
    }
  }
  return r;
};
m.asn1.ASN1Util.oidIntToHex = function(e) {
  var t = function(a) {
    var l = a.toString(16);
    return l.length == 1 && (l = "0" + l), l;
  }, n = function(a) {
    var l = "", u = new Q(a, 10), d = u.toString(2), g = 7 - d.length % 7;
    g == 7 && (g = 0);
    for (var A = "", E = 0; E < g; E++)
      A += "0";
    d = A + d;
    for (var E = 0; E < d.length - 1; E += 7) {
      var w = d.substr(E, 7);
      E != d.length - 7 && (w = "1" + w), l += t(parseInt(w, 2));
    }
    return l;
  };
  if (!e.match(/^[0-9.]+$/))
    throw "malformed oid string: " + e;
  var o = "", r = e.split("."), s = parseInt(r[0]) * 40 + parseInt(r[1]);
  o += t(s), r.splice(0, 2);
  for (var i = 0; i < r.length; i++)
    o += n(r[i]);
  return o;
};
m.asn1.ASN1Object = function() {
  var e = "";
  this.getLengthHexFromValue = function() {
    if (typeof this.hV > "u" || this.hV == null)
      throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1)
      throw "value hex must be even length: n=" + e.length + ",v=" + this.hV;
    var t = this.hV.length / 2, n = t.toString(16);
    if (n.length % 2 == 1 && (n = "0" + n), t < 128)
      return n;
    var o = n.length / 2;
    if (o > 15)
      throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
    var r = 128 + o;
    return r.toString(16) + n;
  }, this.getEncodedHex = function() {
    return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
  }, this.getValueHex = function() {
    return this.getEncodedHex(), this.hV;
  }, this.getFreshValueHex = function() {
    return "";
  };
};
m.asn1.DERAbstractString = function(e) {
  m.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
    return this.s;
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
  }, this.setStringHex = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e == "string" ? this.setString(e) : typeof e.str < "u" ? this.setString(e.str) : typeof e.hex < "u" && this.setStringHex(e.hex));
};
q.lang.extend(m.asn1.DERAbstractString, m.asn1.ASN1Object);
m.asn1.DERAbstractTime = function(e) {
  m.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
    utc = t.getTime() + t.getTimezoneOffset() * 6e4;
    var n = new Date(utc);
    return n;
  }, this.formatDate = function(t, n, o) {
    var r = this.zeroPadding, s = this.localDateToUTC(t), i = String(s.getFullYear());
    n == "utc" && (i = i.substr(2, 2));
    var a = r(String(s.getMonth() + 1), 2), l = r(String(s.getDate()), 2), u = r(String(s.getHours()), 2), d = r(String(s.getMinutes()), 2), g = r(String(s.getSeconds()), 2), A = i + a + l + u + d + g;
    if (o === !0) {
      var E = s.getMilliseconds();
      if (E != 0) {
        var w = r(String(E), 3);
        w = w.replace(/[0]+$/, ""), A = A + "." + w;
      }
    }
    return A + "Z";
  }, this.zeroPadding = function(t, n) {
    return t.length >= n ? t : new Array(n - t.length + 1).join("0") + t;
  }, this.getString = function() {
    return this.s;
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
  }, this.setByDateValue = function(t, n, o, r, s, i) {
    var a = new Date(Date.UTC(t, n - 1, o, r, s, i, 0));
    this.setByDate(a);
  }, this.getFreshValueHex = function() {
    return this.hV;
  };
};
q.lang.extend(m.asn1.DERAbstractTime, m.asn1.ASN1Object);
m.asn1.DERAbstractStructured = function(e) {
  m.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array = t;
  }, this.appendASN1Object = function(t) {
    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
  }, this.asn1Array = new Array(), typeof e < "u" && typeof e.array < "u" && (this.asn1Array = e.array);
};
q.lang.extend(m.asn1.DERAbstractStructured, m.asn1.ASN1Object);
m.asn1.DERBoolean = function() {
  m.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
};
q.lang.extend(m.asn1.DERBoolean, m.asn1.ASN1Object);
m.asn1.DERInteger = function(e) {
  m.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
    this.hTLV = null, this.isModified = !0, this.hV = m.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
  }, this.setByInteger = function(t) {
    var n = new Q(String(t), 10);
    this.setByBigInteger(n);
  }, this.setValueHex = function(t) {
    this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e.bigint < "u" ? this.setByBigInteger(e.bigint) : typeof e.int < "u" ? this.setByInteger(e.int) : typeof e == "number" ? this.setByInteger(e) : typeof e.hex < "u" && this.setValueHex(e.hex));
};
q.lang.extend(m.asn1.DERInteger, m.asn1.ASN1Object);
m.asn1.DERBitString = function(e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = m.asn1.ASN1Util.newObject(e.obj);
    e.hex = "00" + t.getEncodedHex();
  }
  m.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(n) {
    this.hTLV = null, this.isModified = !0, this.hV = n;
  }, this.setUnusedBitsAndHexValue = function(n, o) {
    if (n < 0 || 7 < n)
      throw "unused bits shall be from 0 to 7: u = " + n;
    var r = "0" + n;
    this.hTLV = null, this.isModified = !0, this.hV = r + o;
  }, this.setByBinaryString = function(n) {
    n = n.replace(/0+$/, "");
    var o = 8 - n.length % 8;
    o == 8 && (o = 0);
    for (var r = 0; r <= o; r++)
      n += "0";
    for (var s = "", r = 0; r < n.length - 1; r += 8) {
      var i = n.substr(r, 8), a = parseInt(i, 2).toString(16);
      a.length == 1 && (a = "0" + a), s += a;
    }
    this.hTLV = null, this.isModified = !0, this.hV = "0" + o + s;
  }, this.setByBooleanArray = function(n) {
    for (var o = "", r = 0; r < n.length; r++)
      n[r] == !0 ? o += "1" : o += "0";
    this.setByBinaryString(o);
  }, this.newFalseArray = function(n) {
    for (var o = new Array(n), r = 0; r < n; r++)
      o[r] = !1;
    return o;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e == "string" && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : typeof e.hex < "u" ? this.setHexValueIncludingUnusedBits(e.hex) : typeof e.bin < "u" ? this.setByBinaryString(e.bin) : typeof e.array < "u" && this.setByBooleanArray(e.array));
};
q.lang.extend(m.asn1.DERBitString, m.asn1.ASN1Object);
m.asn1.DEROctetString = function(e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = m.asn1.ASN1Util.newObject(e.obj);
    e.hex = t.getEncodedHex();
  }
  m.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04";
};
q.lang.extend(m.asn1.DEROctetString, m.asn1.DERAbstractString);
m.asn1.DERNull = function() {
  m.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
};
q.lang.extend(m.asn1.DERNull, m.asn1.ASN1Object);
m.asn1.DERObjectIdentifier = function(e) {
  var t = function(o) {
    var r = o.toString(16);
    return r.length == 1 && (r = "0" + r), r;
  }, n = function(o) {
    var r = "", s = new Q(o, 10), i = s.toString(2), a = 7 - i.length % 7;
    a == 7 && (a = 0);
    for (var l = "", u = 0; u < a; u++)
      l += "0";
    i = l + i;
    for (var u = 0; u < i.length - 1; u += 7) {
      var d = i.substr(u, 7);
      u != i.length - 7 && (d = "1" + d), r += t(parseInt(d, 2));
    }
    return r;
  };
  m.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(o) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = o;
  }, this.setValueOidString = function(o) {
    if (!o.match(/^[0-9.]+$/))
      throw "malformed oid string: " + o;
    var r = "", s = o.split("."), i = parseInt(s[0]) * 40 + parseInt(s[1]);
    r += t(i), s.splice(0, 2);
    for (var a = 0; a < s.length; a++)
      r += n(s[a]);
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r;
  }, this.setValueName = function(o) {
    var r = m.asn1.x509.OID.name2oid(o);
    if (r !== "")
      this.setValueOidString(r);
    else
      throw "DERObjectIdentifier oidName undefined: " + o;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, e !== void 0 && (typeof e == "string" ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : e.oid !== void 0 ? this.setValueOidString(e.oid) : e.hex !== void 0 ? this.setValueHex(e.hex) : e.name !== void 0 && this.setValueName(e.name));
};
q.lang.extend(m.asn1.DERObjectIdentifier, m.asn1.ASN1Object);
m.asn1.DEREnumerated = function(e) {
  m.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
    this.hTLV = null, this.isModified = !0, this.hV = m.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
  }, this.setByInteger = function(t) {
    var n = new Q(String(t), 10);
    this.setByBigInteger(n);
  }, this.setValueHex = function(t) {
    this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e.int < "u" ? this.setByInteger(e.int) : typeof e == "number" ? this.setByInteger(e) : typeof e.hex < "u" && this.setValueHex(e.hex));
};
q.lang.extend(m.asn1.DEREnumerated, m.asn1.ASN1Object);
m.asn1.DERUTF8String = function(e) {
  m.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c";
};
q.lang.extend(m.asn1.DERUTF8String, m.asn1.DERAbstractString);
m.asn1.DERNumericString = function(e) {
  m.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12";
};
q.lang.extend(m.asn1.DERNumericString, m.asn1.DERAbstractString);
m.asn1.DERPrintableString = function(e) {
  m.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13";
};
q.lang.extend(m.asn1.DERPrintableString, m.asn1.DERAbstractString);
m.asn1.DERTeletexString = function(e) {
  m.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14";
};
q.lang.extend(m.asn1.DERTeletexString, m.asn1.DERAbstractString);
m.asn1.DERIA5String = function(e) {
  m.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16";
};
q.lang.extend(m.asn1.DERIA5String, m.asn1.DERAbstractString);
m.asn1.DERUTCTime = function(e) {
  m.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function(t) {
    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return typeof this.date > "u" && typeof this.s > "u" && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
  }, e !== void 0 && (e.str !== void 0 ? this.setString(e.str) : typeof e == "string" && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : e.hex !== void 0 ? this.setStringHex(e.hex) : e.date !== void 0 && this.setByDate(e.date));
};
q.lang.extend(m.asn1.DERUTCTime, m.asn1.DERAbstractTime);
m.asn1.DERGeneralizedTime = function(e) {
  m.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return this.date === void 0 && this.s === void 0 && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
  }, e !== void 0 && (e.str !== void 0 ? this.setString(e.str) : typeof e == "string" && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : e.hex !== void 0 ? this.setStringHex(e.hex) : e.date !== void 0 && this.setByDate(e.date), e.millis === !0 && (this.withMillis = !0));
};
q.lang.extend(m.asn1.DERGeneralizedTime, m.asn1.DERAbstractTime);
m.asn1.DERSequence = function(e) {
  m.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
    for (var t = "", n = 0; n < this.asn1Array.length; n++) {
      var o = this.asn1Array[n];
      t += o.getEncodedHex();
    }
    return this.hV = t, this.hV;
  };
};
q.lang.extend(m.asn1.DERSequence, m.asn1.DERAbstractStructured);
m.asn1.DERSet = function(e) {
  m.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
    for (var t = new Array(), n = 0; n < this.asn1Array.length; n++) {
      var o = this.asn1Array[n];
      t.push(o.getEncodedHex());
    }
    return this.sortFlag == !0 && t.sort(), this.hV = t.join(""), this.hV;
  }, typeof e < "u" && typeof e.sortflag < "u" && e.sortflag == !1 && (this.sortFlag = !1);
};
q.lang.extend(m.asn1.DERSet, m.asn1.DERAbstractStructured);
m.asn1.DERTaggedObject = function(e) {
  m.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, n, o) {
    this.hT = n, this.isExplicit = t, this.asn1Object = o, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = o.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, n), this.isModified = !1);
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof e < "u" && (typeof e.tag < "u" && (this.hT = e.tag), typeof e.explicit < "u" && (this.isExplicit = e.explicit), typeof e.obj < "u" && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
q.lang.extend(m.asn1.DERTaggedObject, m.asn1.ASN1Object);
var Jr = globalThis && globalThis.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, r) {
      o.__proto__ = r;
    } || function(o, r) {
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function o() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o());
  };
}(), Wt = (
  /** @class */
  function(e) {
    Jr(t, e);
    function t(n) {
      var o = e.call(this) || this;
      return n && (typeof n == "string" ? o.parseKey(n) : (t.hasPrivateKeyProperty(n) || t.hasPublicKeyProperty(n)) && o.parsePropertiesFrom(n)), o;
    }
    return t.prototype.parseKey = function(n) {
      try {
        var o = 0, r = 0, s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, i = s.test(n) ? yr.decode(n) : mt.unarmor(n), a = Sr.decode(i);
        if (a.sub.length === 3 && (a = a.sub[2].sub[0]), a.sub.length === 9) {
          o = a.sub[1].getHexStringValue(), this.n = j(o, 16), r = a.sub[2].getHexStringValue(), this.e = parseInt(r, 16);
          var l = a.sub[3].getHexStringValue();
          this.d = j(l, 16);
          var u = a.sub[4].getHexStringValue();
          this.p = j(u, 16);
          var d = a.sub[5].getHexStringValue();
          this.q = j(d, 16);
          var g = a.sub[6].getHexStringValue();
          this.dmp1 = j(g, 16);
          var A = a.sub[7].getHexStringValue();
          this.dmq1 = j(A, 16);
          var E = a.sub[8].getHexStringValue();
          this.coeff = j(E, 16);
        } else if (a.sub.length === 2)
          if (a.sub[0].sub) {
            var w = a.sub[1], y = w.sub[0];
            o = y.sub[0].getHexStringValue(), this.n = j(o, 16), r = y.sub[1].getHexStringValue(), this.e = parseInt(r, 16);
          } else
            o = a.sub[0].getHexStringValue(), this.n = j(o, 16), r = a.sub[1].getHexStringValue(), this.e = parseInt(r, 16);
        else
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }, t.prototype.getPrivateBaseKey = function() {
      var n = {
        array: [
          new m.asn1.DERInteger({ int: 0 }),
          new m.asn1.DERInteger({ bigint: this.n }),
          new m.asn1.DERInteger({ int: this.e }),
          new m.asn1.DERInteger({ bigint: this.d }),
          new m.asn1.DERInteger({ bigint: this.p }),
          new m.asn1.DERInteger({ bigint: this.q }),
          new m.asn1.DERInteger({ bigint: this.dmp1 }),
          new m.asn1.DERInteger({ bigint: this.dmq1 }),
          new m.asn1.DERInteger({ bigint: this.coeff })
        ]
      }, o = new m.asn1.DERSequence(n);
      return o.getEncodedHex();
    }, t.prototype.getPrivateBaseKeyB64 = function() {
      return ot(this.getPrivateBaseKey());
    }, t.prototype.getPublicBaseKey = function() {
      var n = new m.asn1.DERSequence({
        array: [
          new m.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
          new m.asn1.DERNull()
        ]
      }), o = new m.asn1.DERSequence({
        array: [
          new m.asn1.DERInteger({ bigint: this.n }),
          new m.asn1.DERInteger({ int: this.e })
        ]
      }), r = new m.asn1.DERBitString({
        hex: "00" + o.getEncodedHex()
      }), s = new m.asn1.DERSequence({
        array: [n, r]
      });
      return s.getEncodedHex();
    }, t.prototype.getPublicBaseKeyB64 = function() {
      return ot(this.getPublicBaseKey());
    }, t.wordwrap = function(n, o) {
      if (o = o || 64, !n)
        return n;
      var r = "(.{1," + o + `})( +|$
?)|(.{1,` + o + "})";
      return n.match(RegExp(r, "g")).join(`
`);
    }, t.prototype.getPrivateKey = function() {
      var n = `-----BEGIN RSA PRIVATE KEY-----
`;
      return n += t.wordwrap(this.getPrivateBaseKeyB64()) + `
`, n += "-----END RSA PRIVATE KEY-----", n;
    }, t.prototype.getPublicKey = function() {
      var n = `-----BEGIN PUBLIC KEY-----
`;
      return n += t.wordwrap(this.getPublicBaseKeyB64()) + `
`, n += "-----END PUBLIC KEY-----", n;
    }, t.hasPublicKeyProperty = function(n) {
      return n = n || {}, n.hasOwnProperty("n") && n.hasOwnProperty("e");
    }, t.hasPrivateKeyProperty = function(n) {
      return n = n || {}, n.hasOwnProperty("n") && n.hasOwnProperty("e") && n.hasOwnProperty("d") && n.hasOwnProperty("p") && n.hasOwnProperty("q") && n.hasOwnProperty("dmp1") && n.hasOwnProperty("dmq1") && n.hasOwnProperty("coeff");
    }, t.prototype.parsePropertiesFrom = function(n) {
      this.n = n.n, this.e = n.e, n.hasOwnProperty("d") && (this.d = n.d, this.p = n.p, this.q = n.q, this.dmp1 = n.dmp1, this.dmq1 = n.dmq1, this.coeff = n.coeff);
    }, t;
  }(Dr)
), dt, Pr = typeof process < "u" ? (dt = process.env) === null || dt === void 0 ? void 0 : dt.npm_package_version : void 0, On = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), t = t || {}, this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null;
    }
    return e.prototype.setKey = function(t) {
      this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new Wt(t);
    }, e.prototype.setPrivateKey = function(t) {
      this.setKey(t);
    }, e.prototype.setPublicKey = function(t) {
      this.setKey(t);
    }, e.prototype.decrypt = function(t) {
      try {
        return this.getKey().decrypt(Ut(t));
      } catch {
        return !1;
      }
    }, e.prototype.encrypt = function(t) {
      try {
        return ot(this.getKey().encrypt(t));
      } catch {
        return !1;
      }
    }, e.prototype.sign = function(t, n, o) {
      try {
        return ot(this.getKey().sign(t, n, o));
      } catch {
        return !1;
      }
    }, e.prototype.verify = function(t, n, o) {
      try {
        return this.getKey().verify(t, Ut(n), o);
      } catch {
        return !1;
      }
    }, e.prototype.getKey = function(t) {
      if (!this.key) {
        if (this.key = new Wt(), t && {}.toString.call(t) === "[object Function]") {
          this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
          return;
        }
        this.key.generate(this.default_key_size, this.default_public_exponent);
      }
      return this.key;
    }, e.prototype.getPrivateKey = function() {
      return this.getKey().getPrivateKey();
    }, e.prototype.getPrivateKeyB64 = function() {
      return this.getKey().getPrivateBaseKeyB64();
    }, e.prototype.getPublicKey = function() {
      return this.getKey().getPublicKey();
    }, e.prototype.getPublicKeyB64 = function() {
      return this.getKey().getPublicBaseKeyB64();
    }, e.version = Pr, e;
  }()
);
const Lr = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtrO3ZQTT1aOWToritHcXVDFDzxFYoJN4jOcumMcfRO/DMJ7T/hWYG/UsIcDP9s8QIttpAE7Aw8xV+7tDeeCk0mYf60qsKYyaYXj9Y3TUXFrZvATbwb3aytx0/Zsi1LslvzjTk6bqEsmIuGAc30D2B3CCABrkIlnpvVmFrwQySpQIDAQAB", Ur = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAK2s7dlBNPVo5ZOiuK0dxdUMUPPEVigk3iM5y6Yxx9E78MwntP+FZgb9SwhwM/2zxAi22kATsDDzFX7u0N54KTSZh/rSqwpjJpheP1jdNRcWtm8BNvBvdrK3HT9myLUuyW/ONOTpuoSyYi4YBzfQPYHcIIAGuQiWem9WYWvBDJKlAgMBAAECgYBlU6tBQcYAGD85L4rHlcNCVXk1f6s0qK3hp2qlgA2wiWQn+FKlcdLg6Q7J0YzDzAnne6dCEzqMlIZKFFNQOJLw4ovVQYmFEBhfNS4ZjHFf8m+qFL+y9KpyG/NogHa59nNJsDr9sIxjHyqqyJKj9ztxR+3fTpvJEAcPkeHMltn3gQJBAOPEJxyXFSBh35T5XnfoeFZNnTGi3iefYpjzLPMcHvw/6OS/UhlwJgBSM9p3VwoXWnVGXD+iFPnTyZDEtBY3KdkCQQDDNEgsPn7nkcMdAki9cWNMh81BW/C4trqHl1Xw4XaIymPHSDhnZuuzY7Vx76uTByow8pG17dhL58FFDdLz7cOtAkBc8E9dVTDjs8w9x7uKhiuEW8tG08R+uoTLEH9I/DKQj6uCm6buhlqbSu+pt4Sms3zP2dQOix6wCoF3Nyyc3AmRAkAZ2cehDFm0Awqqwc2uQODclrNo72sOmyxSnokEEGepL9xM3NSTZP7bz92MjCfVncJJnyYKyMe3LabbpTwFj7w1AkBSo3wi5c7XJA0KtebVihkREPeLW6825zjLD9jRmBprW2Pbyj+80IX6D5WJT+jZ1fg7R8D86yZeJddoe9gc5k5T", Vr = (e, t = Lr) => {
  let n = new On();
  return n.setPublicKey(t), n.encrypt(e);
}, jr = (e, t = Ur) => {
  let n = new On();
  return n.setPrivateKey(t), n.decrypt(e);
}, $ = Me("app", {
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
      var e;
      return (e = this.env) == null ? void 0 : e.VITE_APP_TITLE;
    },
    baseURL() {
      var e;
      return (e = this.env) == null ? void 0 : e.VITE_APP_BASE_API;
    }
  },
  actions: {
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(e) {
      this.collapsed = e;
    },
    //**设置抽屉的可见性 */
    setSettingDrawer(e) {
      this.settingDrawerVisible = e;
    },
    setEnv(e) {
      this.env = e;
    },
    setRouter(e) {
      this.router = e;
    },
    onLink(e) {
      this.router.push(e);
    },
    /** 重新加载页面 */
    async reloadPage() {
      $loadingBar.start(), this.reloadFlag = !1, await et(), this.reloadFlag = !0, setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 }), $loadingBar.finish();
      }, 100);
    }
  }
}), At = "ACCESS_USERINFO", yt = "ACCESS_TOKEN";
function Jn() {
  return fe.get(At);
}
function Pn() {
  return fe.get(yt);
}
function Ln(e = []) {
  return e.map((t) => t.children && t.children.length ? {
    ...t,
    children: Ln(t.children)
  } : (delete t.children, t));
}
const ae = Me("user", {
  state() {
    return {
      token: Pn(),
      userInfo: Jn(),
      activeMenu: ""
    };
  },
  getters: {
    userId() {
      var e;
      return (e = this.userInfo) == null ? void 0 : e.personId;
    },
    name() {
      var e;
      return (e = this.userInfo) == null ? void 0 : e.loginName;
    },
    avatar() {
      var e;
      return (e = this.userInfo) == null ? void 0 : e.avatar;
    },
    menuList() {
      var e;
      return Ln((e = this.userInfo) == null ? void 0 : e.menuList);
    },
    resourceCode() {
      return this.userInfo.resourceCodes;
    }
  },
  actions: {
    // 退出登录
    async logout() {
      this.removeUserInfo(), this.removeToken(), Zn("/login");
    },
    // 设置用户信息
    setUserInfo(e = {}) {
      this.userInfo = e, fe.set(At, e);
    },
    // 清除用户信息
    removeUserInfo() {
      this.userInfo = void 0, fe.remove(At);
    },
    // 设置用户信息
    setToken(e) {
      this.token = e, fe.set(yt, e);
    },
    // 清除token
    removeToken() {
      this.token = "", fe.remove(yt);
    }
  }
}), Mr = !1, qr = !0, Fr = {
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
}, Hr = "#409EFF", Wr = [
  "#409EFF",
  "#1B5EC9",
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
], zr = {
  info: "#0099ad",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d"
}, Kr = !1, Xr = !0, Zr = !0, Gr = {
  inverted: !1,
  height: 60,
  crumb: {
    visible: !0,
    showIcon: !0
  }
}, Yr = {
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
}, $r = {
  inverted: !1,
  width: 220,
  collapsedWidth: 64,
  mixWidth: 80,
  mixCollapsedWidth: 48,
  mixChildMenuWidth: 200
}, es = {
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
}, ts = {
  show: !1,
  fixed: !1,
  height: 48
}, ns = {
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
}, os = {
  darkMode: Mr,
  followSystemTheme: qr,
  layout: Fr,
  themeColor: Hr,
  themeColorList: Wr,
  otherColor: zr,
  isCustomizeInfoColor: Kr,
  fixedHeaderAndTab: Xr,
  showReload: Zr,
  header: Gr,
  tab: Yr,
  sider: $r,
  menu: es,
  footer: ts,
  page: ns
}, bt = {
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
}, rs = [
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
function ss() {
  const e = Te.get("theme-settings");
  return e || os;
}
const Un = "dark";
function is() {
  document.documentElement.classList.add(Un);
}
function as() {
  document.documentElement.classList.remove(Un);
}
function ls(e) {
  Te.set("theme-settings", e);
}
function us() {
  Te.remove("theme-settings");
}
function cs({ themeColor: e, darkMode: t }) {
  return t ? {
    common: {
      primaryColor: e,
      primaryColorHover: _e(e, 5),
      primaryColorPressed: _e(e, 4),
      primaryColorSuppl: _e(e, 7)
    }
  } : {
    ...bt,
    common: {
      ...bt.common,
      primaryColor: e,
      primaryColorHover: _e(e, 5),
      primaryColorPressed: _e(e, 4),
      primaryColorSuppl: _e(e, 7)
    }
  };
}
const X = Me("theme", {
  state: () => ss(),
  getters: {
    /** naive-ui暗黑主题 */
    naiveTheme(e) {
      return e.darkMode ? hn : void 0;
    },
    themeOverrides(e) {
      return cs(e);
    }
  },
  actions: {
    /** 重置theme状态 */
    resetThemeStore() {
      us(), this.$reset();
    },
    /** 设置侧边栏反转色 */
    setSiderInverted(e) {
      this.sider.inverted = e;
    },
    /** 设置头部反转色 */
    setHeaderInverted(e) {
      this.header.inverted = e;
    },
    /** 设置头部高度 */
    setHeaderHeight(e) {
      e && (this.header.height = e);
    },
    /** 设置多页签高度 */
    setTabHeight(e) {
      e && (this.tab.height = e);
    },
    /** 设置多页签缓存 */
    setTabIsCache(e) {
      this.tab.isCache = e;
    },
    /** 侧边栏宽度 */
    setSiderWidth(e) {
      e && (this.sider.width = e);
    },
    /** 侧边栏折叠时的宽度 */
    setSiderCollapsedWidth(e) {
      this.sider.collapsedWidth = e;
    },
    /** 设置布局模式 */
    setLayoutMode(e) {
      this.layout.mode = e;
    },
    /** 设置头部面包屑可见 */
    setHeaderCrumbVisible(e) {
      this.header.crumb.visible = e;
    },
    /** 设置头部面包屑图标可见 */
    setHeaderCrumbIconVisible(e) {
      this.header.crumb.showIcon = e;
    },
    /** 设置菜单图标可见 */
    setMenuIconVisible(e) {
      this.menu.showIcon = e;
    },
    /**设置多页签模式 */
    setTabMode(e) {
      this.tab.mode = e;
    },
    /** 设置多页签可见 */
    setTabVisible(e) {
      this.tab.visible = e;
    },
    // 设置黑暗主题
    setDarkTheme() {
      this.darkMode = !this.darkMode;
    },
    // 设置默认主题样式
    setThemeColor(e) {
      this.themeColor = e;
    },
    /** 缓存主题配置 */
    cacheThemeSettings() {
      ls(this.$state);
    },
    // 还原主题样式
    removeThemeColor() {
      this.themeColor = bt.common.primaryColor;
    }
  }
});
fe.get("activeTag");
const ds = fe.get("tags"), De = Me("tag", {
  state() {
    return {
      tags: ds || []
    };
  },
  actions: {
    /** 当前激活状态的页签索引 */
    activeTabIndex(e) {
      return this.tags.findIndex((t) => t.url === e);
    },
    setTags(e) {
      this.tags = e, fe.set("tags", e);
    },
    addTag(e = {}) {
      this.tags.some((t) => t.url === e.url) || this.setTags([...this.tags, e]);
    },
    removeTag(e, t) {
      if (e === t) {
        const n = this.tags.findIndex((o) => o.url === e);
        n > 0 ? St(this.tags[n - 1].url) : St(this.tags[n + 1].url);
      }
      this.setTags(this.tags.filter((n) => n.url !== e));
    },
    removeOther(e) {
      this.setTags(this.tags.filter((t) => t.url === e));
    },
    removeLeft(e) {
      const t = this.tags.findIndex((o) => o.url === e), n = this.tags.filter((o, r) => r >= t);
      this.setTags(n), n.find((o) => o.url === e) || router.push(n[n.length - 1].url);
    },
    removeRight(e) {
      const t = this.tags.findIndex((o) => o.url === e), n = this.tags.filter((o, r) => r <= t);
      this.setTags(n), n.find((o) => o.url === e) || router.push(n[n.length - 1].url);
    }
  }
}), hs = {
  updatePassword: (e) => S.post("/bbxUser/updatePassword", e),
  resetPassword: (e) => S.post("/bbxUser/resetPassword", e),
  updateStatus: (e) => S.post("/bbxUser/updateStatus", e),
  list: (e) => S.post("/bbxUser/list", e),
  updateRealName: (e) => S.post("/bbxUser/updateRealName", e)
}, sd = {
  add: (e) => S.post("/bbxDataDictionaryGroup/add", e),
  list: (e) => S.post("/bbxDataDictionaryGroup/list", e),
  update: (e) => S.post("/bbxDataDictionaryGroup/update", e),
  delete: (e) => S.post("/bbxDataDictionaryGroup/delete", e)
}, fs = {
  add: (e) => S.post("/bbxDataDictionary/add", e),
  listSelect: (e) => S.post("/bbxDataDictionary/listSelect", e),
  update: (e) => S.post("/bbxDataDictionary/update", e),
  delete: (e) => S.post("/bbxDataDictionary/delete", e),
  addBatch: (e) => S.post("/bbxDataDictionary/addBatch", e),
  findTree: (e) => S.post("/bbxDataDictionary/findTree", e),
  updateBatchSortNum: (e) => S.post("/bbxDataDictionary/updateBatchSortNum", e)
}, id = {
  upload: (e, t) => S.post("/bbxFileInfo/addUpload", e, t),
  listByDataId: (e) => S.post("/bbxFileInfo/listByDataId", e),
  updateEnableDownload: (e) => S.post("/bbxFileInfo/updateEnableDownload", e),
  download: ({ id: e, token: t }) => `/bbxFileInfo/getDownload?id=${e}&token=${t}`,
  list: (e) => S.post("/bbxFileInfo/list", e),
  delete: (e) => S.post("/bbxFileInfo/delete", e)
}, wt = {
  uploadImg: (e, t) => S.post("/bbxFileImg/uploadImg", e, t),
  showImg: ({ id: e, token: t, claritys: n = "LOW" }) => `/bbxFileImg/getShowImg?id=${e}&token=${t}&clarity=${n}`,
  list: (e) => S.post("/bbxFileImg/list", e),
  delete: (e) => S.post("/bbxFileImg/delete", e)
}, ps = {
  listMainDeptPerson: (e) => S.post("/bbxAdminPerson/listMainDeptPerson", e),
  addUserAndPerson: (e) => S.post("/bbxAdminPerson/addUserAndPerson", e),
  quit: (e) => S.post("/bbxAdminPerson/deleteQuit", e),
  deptPersonTree: (e) => S.post("/bbxAdminPerson/findDeptPersonTree", e),
  get: (e) => S.post("/bbxAdminPerson/get", e),
  update: (e) => S.post("/bbxAdminPerson/update", e)
}, ad = {
  listUnitRole: (e) => S.post("/bbxAdinRoleUnit/findUnitRole", e),
  add: (e) => S.post("/bbxAdinRoleUnit/add", e),
  update: (e) => S.post("/bbxAdinRoleUnit/update", e),
  delete: (e) => S.post("/bbxAdinRoleUnit/delete", e),
  get: (e) => S.post("/bbxAdinRoleUnit/get", e),
  saveAuthTreeByRoleId: (e) => S.post("/bbxAdinRoleUnit/addAuthTreeByRoleId", e),
  findAuthTreeByRoleId: (e) => S.post("/bbxAdinRoleUnit/findAuthTreeByRoleId", e)
}, ld = {
  add: (e) => S.post("/bbxAdminUnitRoleRelation/add", e),
  delete: (e) => S.post("/bbxAdminUnitRoleRelation/delete", e),
  listNotAuthUnitByRole: (e) => S.post("/bbxAdminUnitRoleRelation/listNotAuthUnitByRole", e),
  listAuthUnitByRole: (e) => S.post("/bbxAdminUnitRoleRelation/listAuthUnitByRole", e)
}, ud = {
  add: (e) => S.post("/bbxAdminRolePerson/add", e),
  update: (e) => S.post("/bbxAdminRolePerson/update", e),
  delete: (e) => S.post("/bbxAdminRolePerson/delete", e),
  listPersonRole: (e) => S.post("/bbxAdminRolePerson/findPersonRole", e),
  findAuthTreeByRoleId: (e) => S.post("/bbxAdminRolePerson/findAuthTreeByRoleId", e),
  saveAuthTreeByRoleId: (e) => S.post("/bbxAdminRolePerson/addAuthTreeByRoleId", e),
  listPersonRoleByClientId: (e) => S.post("/bbxAdminRolePerson/findPersonRole", e),
  findPersonRoleByAppId: (e) => S.post("/bbxAdminRolePerson/findPersonRoleByAppId", e)
}, cd = {
  add: (e) => S.post("/bbxAdminRolePersonRelation/add", e),
  delete: (e) => S.post("/bbxAdminRolePersonRelation/delete", e),
  listAuthPersonByRole: (e) => S.post("/bbxAdminRolePersonRelation/listAuthPersonByRole", e)
}, dd = {
  add: (e) => S.post("/bbxAdminUnit/add", e),
  update: (e) => S.post("/bbxAdminUnit/update", e),
  list: (e) => S.post("/bbxAdminUnit/list", e),
  get: (e) => S.post("/bbxAdminUnit/get", e)
}, gs = {
  add: (e) => S.post("/bbxAdminUnitDept/add", e),
  delete: (e) => S.post("/bbxAdminUnitDept/delete", e),
  update: (e) => S.post("/bbxAdminUnitDept/update", e),
  get: (e) => S.post("/bbxAdminUnitDept/get", e),
  deptTree: (e) => S.post("/bbxAdminUnitDept/deptTree", e)
}, hd = {
  add: (e) => S.post("/bbxAdminUnitTeam/add", e),
  delete: (e) => S.post("/bbxAdminUnitTeam/delete", e),
  update: (e) => S.post("/bbxAdminUnitTeam/update", e),
  get: (e) => S.post("/bbxAdminUnitTeam/get", e),
  list: (e) => S.post("/bbxAdminUnitTeam/list", e)
}, fd = {
  listClassType: (e) => S.post("/bbxAdminClass/listClassType", e),
  listAllClass: (e) => S.post("/bbxAdminClass/listAllClass", e)
};
function Vn(e) {
  return e.filter((t) => {
    var n;
    return ((n = t.children) == null ? void 0 : n.length) > 0 && (t.children = Vn(t.children)), t.status !== 0;
  });
}
const jn = Me("data", {
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
    async getDictionaryList(e, t = !1) {
      if (this.dictionaryKeyObj[e])
        return t ? this.dictionaryKeyObjAll[e] : this.dictionaryKeyObj[e];
      const { code: n, msg: o, data: r } = await fs.listSelect({ dictionaryCode: e });
      return n === 0 ? (this.dictionaryKeyObjAll[e] = Ne(r), this.dictionaryKeyObj[e] = Ne(Vn(Lo(r))), t ? this.dictionaryKeyObjAll[e] : this.dictionaryKeyObj[e]) : ($message.error(o), []);
    },
    // 获取部门人员
    async getOrgPerson() {
      if (this.orgPersonTree)
        return this.orgPersonTree;
      const { code: e, msg: t, data: n } = await ps.deptPersonTree();
      return e === 0 ? (this.orgPersonTree = Ne(n), this.orgPersonTree) : ($message.error(t), []);
    },
    // 获取部门
    async getOrgDept() {
      if (this.orgDeptTree)
        return this.orgDeptTree;
      const { code: e, msg: t, data: n } = await gs.deptTree();
      return e === 0 ? (this.orgDeptTree = Ne(n), this.orgDeptTree) : ($message.error(t), []);
    }
  }
});
function ms() {
  const e = X(), t = te(
    () => e.darkMode,
    (n) => {
      n ? is() : as();
    },
    {
      immediate: !0
    }
  );
  tn(() => {
    t();
  });
}
function vs() {
  ms();
}
function pd(e, t, n) {
  e.use(Po());
  const o = $();
  o.setEnv(t), o.setRouter(n), S = xs(), St = (r) => {
    n.push(r);
  };
}
function St() {
}
function S() {
}
const As = nt.CancelToken;
let _t = As.source();
function ys(e) {
  e.method === "get" && (e.params = { ...e.params, t: new Date().getTime() });
  const n = ae().token;
  return n && (e.headers.authorization = `Bearer ${e.headers.token || n}`), e.cancelToken = _t.token, e;
}
function bs(e) {
  return Promise.reject(e);
}
function ws(e) {
  var t;
  return e.headers["content-type"].includes("text/plain;charset=UTF-8") && e.data ? e.data : ((t = e == null ? void 0 : e.data) == null ? void 0 : t.code) === 0 ? e == null ? void 0 : e.data : Mn(e == null ? void 0 : e.data);
}
function Mn(e) {
  let { code: t, msg: n } = e || {};
  if (Je(t))
    t = 99, n = "未知错误";
  else if (t === 5) {
    if (n = n || "登录已过期", _t.cancel(), setTimeout(() => {
      _t = nt.CancelToken.source();
    }, 1e3), nt.isCancel(e))
      return new Promise(() => {
      });
    Ss();
  }
  return console.error(`【${t}】 ${n}`), Promise.resolve({ ...e, msg: n });
}
const Ss = () => {
  $dialog.info({
    title: "提示",
    content: "登录过期,返回登录页？",
    positiveText: "确定",
    onPositiveClick: async () => {
      ae().logout();
    }
  });
};
function _s(e = {}) {
  const t = {
    baseURL: "",
    timeout: 3e4,
    method: "post"
  }, n = nt.create({
    ...t,
    ...e
  });
  return n.interceptors.request.use(ys, bs), n.interceptors.response.use(ws, Mn), n;
}
const xs = () => {
  const e = $();
  return _s({
    baseURL: e.baseURL
  });
}, Es = J({
  name: "ShFormItem"
}), Is = /* @__PURE__ */ Object.assign(Es, {
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
  setup(e) {
    const t = e, n = {
      required: {
        required: !0,
        validator(s, i) {
          return En(i) || Je(i) ? new Error("必填项不能为空") : !0;
        },
        trigger: "blur"
      },
      account: {
        validator(s, i) {
          const a = i.length;
          return i === "" ? !0 : a < 8 || a > 32 ? new Error("必须为8-32位") : o(i) < 3 ? new Error("必须包含数字、大小写字母三种") : !0;
        },
        trigger: "blur"
      },
      password: {
        validator(s, i) {
          const a = i.length;
          return i === "" ? !0 : a < 8 || a > 30 ? new Error("必须为8-32位") : o(i) < 3 ? new Error("必须包含数字、大小写字母三种") : !0;
        },
        trigger: "blur"
      },
      number: { type: "number", message: "请输入数字", trigger: "blur" },
      integer: { type: "integer", message: "请输入整数", trigger: "blur" },
      email: { type: "email", message: "请输入正确的邮箱", trigger: "blur" },
      date: { type: "date", message: "请输入正确的日期", trigger: "blur" },
      phone: { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" }
    }, o = (s) => {
      let i = 0;
      return /\d/.test(s) && i++, /[a-z]/.test(s) && i++, /[A-Z]/.test(s) && i++, i;
    }, r = O([]);
    return te(
      () => t.rule,
      (s) => {
        if (!s)
          return;
        let i = [];
        typeof s == "string" ? i = s.split("||") : In(i) ? i = [...s] : i.push(s), i.forEach((a) => {
          typeof a == "string" && n[a] ? r.value.push(n[a]) : typeof a == "object" && r.value.push(a);
        });
      },
      { immediate: !0 }
    ), (s, i) => {
      const a = lo, l = fn;
      return h(), I(l, { span: e.span }, {
        default: p(() => [
          f(a, Z(s.$attrs, { rule: r.value }), {
            default: p(() => [
              (h(!0), _(Y, null, ue(Object.keys(s.$slots), (u) => L(s.$slots, u, { key: u })), 128))
            ]),
            _: 3
          }, 16, ["rule"])
        ]),
        _: 3
      }, 8, ["span"]);
    };
  }
}), Cs = J({
  name: "ShContainer"
}), ks = /* @__PURE__ */ Object.assign(Cs, {
  props: {
    inverted: Boolean
  },
  setup(e) {
    return (t, n) => {
      const o = pn;
      return h(), _("div", {
        class: F(["dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out", e.inverted ? "bg-[#001428] text-white dark" : "bg-white"])
      }, [
        f(o, {
          theme: e.inverted ? c(hn) : void 0,
          class: "h-full"
        }, {
          default: p(() => [
            L(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["theme"])
      ], 2);
    };
  }
}), Ts = J({
  name: "ShBetterScroll"
}), Bs = /* @__PURE__ */ Object.assign(Ts, {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { expose: t }) {
    const n = e, o = O(), r = O(), s = O(), i = R(() => Boolean(n.options.scrollY)), a = () => {
      o.value && (r.value = new Fo(o.value, n.options));
    }, { width: l } = Nt(o), { width: u, height: d } = Nt(s);
    return te([() => l.value, () => u.value, () => d.value], () => {
      r.value && r.value.refresh();
    }), nn(() => {
      a();
    }), t({ instance: r }), (g, A) => (h(), _("div", {
      ref_key: "bsWrap",
      ref: o,
      class: "h-full"
    }, [
      v("div", {
        ref_key: "bsContent",
        ref: s,
        class: F(["inline-block", { "h-full": !c(i) }])
      }, [
        L(g.$slots, "default")
      ], 2)
    ], 512));
  }
});
const Rs = { class: "text-[#515E78] dark:text-[#515e78] text-14" }, Ds = {
  key: 0,
  class: "h-50 items-center flex justify-between px-20 border border-[#efeff5] dark:border-[#2d2d30] rounded-br-3 rounded-bl-3"
}, Qs = J({
  name: "ShDataTable"
}), Ns = /* @__PURE__ */ Object.assign(Qs, {
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
    striped: {
      type: Boolean,
      default: !0
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    bottomBordered: {
      type: Boolean,
      default: !1
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
  setup(e, { expose: t, emit: n }) {
    const o = e;
    on((w) => ({
      "02139493": i.value,
      "628ee117": s.value
    }));
    const r = X(), s = O(r.themeColor), i = O(r.themeColor), a = O([]), l = O(!1), u = ce({
      page: 1,
      pageSize: 15,
      pageSizes: [15, 30, 100],
      itemCount: 0,
      showSizePicker: !0,
      onChange: (w) => {
        u.page = w, g();
      },
      onUpdatePageSize: (w) => {
        u.pageSize = w, u.page = 1, g();
      }
    }), d = R(() => o.columns.map((w) => w.type === "index" ? {
      width: "60",
      title: "序号",
      render: (y, k) => k + 1,
      ...w
    } : w)), g = async (w = {}) => {
      l.value = !0;
      const { code: y, msg: k, data: B, count: T } = await o.api({
        page: u.page,
        limit: u.pageSize,
        ...o.params,
        ...w
      });
      l.value = !1, n("callback", B || []), y === 0 ? (a.value = B, u.itemCount = T) : (a.value = [], u.itemCount = 0, $message.error(k));
    };
    o.autoload && o.api && g();
    const A = ({ data: w, count: y = 0 }) => {
      a.value = w, u.itemCount = y;
    }, E = (w) => {
      s.value = gt(w, 0.06), i.value = gt(w, 0.03);
    };
    return te(
      () => r.themeColor,
      (w) => {
        E(w);
      },
      {
        immediate: !0
      }
    ), t({
      loadList: g,
      setTableData: A
    }), (w, y) => {
      const k = uo, B = co, T = Ve;
      return h(), _("div", Rs, [
        f(T, { show: l.value }, {
          default: p(() => [
            f(k, Z({ class: "rounded-10" }, w.$attrs, {
              columns: c(d),
              data: a.value,
              remote: !0,
              size: e.size,
              striped: e.striped,
              bordered: e.bordered,
              "bottom-bordered": e.bottomBordered,
              "single-line": !1
            }), null, 16, ["columns", "data", "size", "striped", "bordered", "bottom-bordered"]),
            e.showPage ? (h(), _("div", Ds, [
              v("div", null, "共 " + ne(u.itemCount) + " 项数据", 1),
              f(B, {
                page: u.page,
                "onUpdate:page": [
                  y[0] || (y[0] = (b) => u.page = b),
                  u.onChange
                ],
                "page-size": u.pageSize,
                "item-count": u.itemCount,
                "show-size-picker": "",
                "page-sizes": u.pageSizes,
                "onUpdate:pageSize": u.onUpdatePageSize
              }, null, 8, ["page", "page-size", "item-count", "page-sizes", "onUpdate:page", "onUpdate:pageSize"])
            ])) : U("", !0)
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
}), Os = /* @__PURE__ */ K(Ns, [["__scopeId", "data-v-5e6459c2"]]), Js = { class: "ml-20" }, zt = {
  __name: "SearchItemCheckbox",
  props: {
    option: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, n) => {
      const o = gn, r = Ae, s = ho;
      return h(), _("div", Js, [
        f(s, rn(sn(t.$attrs)), {
          default: p(() => [
            f(r, { size: [20, 0] }, {
              default: p(() => [
                (h(!0), _(Y, null, ue(e.option, (i) => (h(), I(o, {
                  key: i.value,
                  value: i.value,
                  label: i.label
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
}, Ps = { class: "flex leading-40" }, Ls = { class: "flex-1 text-#515E78" }, Kt = {
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
  setup(e) {
    return (t, n) => (h(), _("div", Ps, [
      v("div", {
        class: "whitespace-nowrap text-gray-500",
        style: H({ width: e.labelWidth })
      }, ne(e.label), 5),
      v("div", Ls, [
        L(t.$slots, "default")
      ])
    ]));
  }
}, Xt = {
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
      validator: (e) => /^(get|post)$/i.test(e),
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
  setup(e) {
    return (t, n) => {
      const o = W("nl-select");
      return h(), _("div", {
        class: "ml-20",
        style: H({ width: e.width })
      }, [
        f(o, Z(e.nSelectProps, {
          "model-value": e.modelValue,
          params: e.params,
          api: e.api,
          options: e.options,
          method: e.method,
          onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r))
        }), null, 16, ["model-value", "params", "api", "options", "method"])
      ], 4);
    };
  }
};
const Us = { class: "flex flex-wrap item_box" }, Vs = {
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
  setup(e, { emit: t }) {
    return (n, o) => {
      const r = pe;
      return h(), _("div", Us, [
        (h(!0), _(Y, null, ue(e.option, (s) => (h(), I(r, {
          key: s.value,
          type: s.value === e.value ? "primary" : "default",
          quaternary: "",
          class: "btn",
          onClick: (i) => t("update:value", s.value)
        }, {
          default: p(() => [
            P(ne(s.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128))
      ]);
    };
  }
}, Zt = /* @__PURE__ */ K(Vs, [["__scopeId", "data-v-bdb60c3f"]]), Gt = {
  __name: "SearchItemRender",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    let n = () => {
    };
    return te(
      () => t.item.render,
      (o) => {
        n = o;
      },
      { immediate: !0, deep: !0 }
    ), (o, r) => (h(), I(c(n)));
  }
}, js = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ms = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), qs = [
  Ms
];
function Fs(e, t) {
  return h(), _("svg", js, qs);
}
const Tt = { render: Fs };
const Hs = (e) => (Le("data-v-30881222"), e = e(), Ue(), e), Ws = { class: "mb-20 rounded-5 border-#efeff5 wrapper" }, zs = {
  key: 0,
  class: "border-t border-#efeff5 p-20"
}, Ks = { class: "flex justify-between" }, Xs = /* @__PURE__ */ Hs(() => /* @__PURE__ */ v("div", { class: "flex-center" }, [
  /* @__PURE__ */ v("div", { class: "w-4 h-15 primary_bg" }),
  /* @__PURE__ */ v("div", { class: "ml-10 text-gray-500" }, "筛选条件")
], -1)), Zs = { class: "mt-10" }, Gs = { class: "description" }, Ys = J({
  name: "ShSearch"
}), $s = /* @__PURE__ */ Object.assign(Ys, {
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
  setup(e) {
    const t = e, n = X(), o = O(!1), r = R(() => t.moreList.filter((g, A) => A < 2)), s = R(() => t.moreList.filter((g, A) => A >= 2)), i = ce({
      value: ""
    }), a = O(""), l = () => {
      t.form[i.value] = a.value;
    }, u = (g) => {
      t.form[i.value] = "", i.value = g, a.value = "";
    }, d = () => {
      a.value = "", t.reset();
    };
    return te(
      () => t.dropdownList,
      (g) => {
        g && g.length && (i.value = g[0].value);
      },
      { immediate: !0, deep: !0 }
    ), (g, A) => {
      const E = mn, w = st, y = fo, k = pe, B = Ae, T = W("sh-collapse-transition");
      return h(), _("div", Ws, [
        v("div", {
          class: F(["flex justify-between", { dark: c(n).darkMode, "p-10": e.moreList.length }])
        }, [
          v("div", null, [
            L(g.$slots, "left", {}, void 0, !0)
          ]),
          v("div", null, [
            f(B, null, {
              default: p(() => [
                L(g.$slots, "default", {}, void 0, !0),
                e.dropdownList && e.dropdownList.length ? (h(), I(y, {
                  key: 0,
                  class: "w-292"
                }, {
                  default: p(() => [
                    f(E, {
                      value: i.value,
                      style: H({ width: `${e.selectWidth}%` }),
                      options: e.dropdownList,
                      "onUpdate:value": u
                    }, null, 8, ["value", "style", "options"]),
                    f(w, {
                      value: a.value,
                      "onUpdate:value": [
                        A[0] || (A[0] = (b) => a.value = b),
                        l
                      ],
                      style: H({ width: `${100 - e.selectWidth}%` })
                    }, null, 8, ["value", "style"])
                  ]),
                  _: 1
                })) : U("", !0),
                e.loadList ? (h(), I(k, {
                  key: 1,
                  type: "primary",
                  onClick: e.loadList
                }, {
                  default: p(() => [
                    P(" 搜索 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : U("", !0),
                e.reset ? (h(), I(k, {
                  key: 2,
                  onClick: d
                }, {
                  default: p(() => [
                    P(" 重置 ")
                  ]),
                  _: 1
                })) : U("", !0)
              ]),
              _: 3
            })
          ])
        ], 2),
        e.moreList.length ? (h(), _("div", zs, [
          v("div", Ks, [
            Xs,
            c(s).length ? (h(), _("div", {
              key: 0,
              class: "flex-center cursor-pointer primary_color",
              onClick: A[1] || (A[1] = (b) => o.value = !o.value)
            }, [
              P(ne(o.value ? "折叠" : "展开") + " ", 1),
              (h(), I(G(c(Tt)), {
                class: F(["w-14 h-14 ml-5 transition", { "rotate-180": o.value }])
              }, null, 8, ["class"]))
            ])) : U("", !0)
          ]),
          v("div", Zs, [
            (h(!0), _(Y, null, ue(c(r), (b) => (h(), I(Kt, {
              key: b.key,
              "label-width": e.moreLabelWidth,
              label: b.label
            }, {
              default: p(() => [
                b.type === "checkbox" ? (h(), I(zt, {
                  key: 0,
                  value: e.form[b.key],
                  "onUpdate:value": (x) => e.form[b.key] = x,
                  option: b.option
                }, null, 8, ["value", "onUpdate:value", "option"])) : b.type === "select" ? (h(), I(Xt, {
                  key: 1,
                  modelValue: e.form[b.key],
                  "onUpdate:modelValue": (x) => e.form[b.key] = x,
                  width: `${b.width || 30}%`,
                  options: b.options,
                  api: b.api,
                  params: b.params,
                  method: b.method,
                  "n-select-props": b.nSelectProps
                }, null, 8, ["modelValue", "onUpdate:modelValue", "width", "options", "api", "params", "method", "n-select-props"])) : b.type === "radio" ? (h(), I(Zt, {
                  key: 2,
                  value: e.form[b.key],
                  "onUpdate:value": (x) => e.form[b.key] = x,
                  option: b.option
                }, null, 8, ["value", "onUpdate:value", "option"])) : (h(), I(Gt, {
                  key: 3,
                  item: b
                }, null, 8, ["item"]))
              ]),
              _: 2
            }, 1032, ["label-width", "label"]))), 128)),
            f(T, null, {
              default: p(() => [
                an(v("div", Gs, [
                  (h(!0), _(Y, null, ue(c(s), (b) => (h(), I(Kt, {
                    key: b.key,
                    "label-width": e.moreLabelWidth,
                    label: b.label
                  }, {
                    default: p(() => [
                      b.type === "checkbox" ? (h(), I(zt, {
                        key: 0,
                        value: e.form[b.key],
                        "onUpdate:value": (x) => e.form[b.key] = x,
                        option: b.option
                      }, null, 8, ["value", "onUpdate:value", "option"])) : b.type === "select" ? (h(), I(Xt, {
                        key: 1,
                        modelValue: e.form[b.key],
                        "onUpdate:modelValue": (x) => e.form[b.key] = x,
                        width: `${b.width || 30}%`,
                        options: b.options,
                        api: b.api,
                        params: b.params,
                        method: b.method,
                        "n-select-props": b.nSelectProps
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "width", "options", "api", "params", "method", "n-select-props"])) : b.type === "radio" ? (h(), I(Zt, {
                        key: 2,
                        value: e.form[b.key],
                        "onUpdate:value": (x) => e.form[b.key] = x,
                        option: b.option
                      }, null, 8, ["value", "onUpdate:value", "option"])) : (h(), I(Gt, {
                        key: 3,
                        item: b
                      }, null, 8, ["item"]))
                    ]),
                    _: 2
                  }, 1032, ["label-width", "label"]))), 128))
                ], 512), [
                  [ln, o.value]
                ])
              ]),
              _: 1
            })
          ])
        ])) : U("", !0)
      ]);
    };
  }
}), ei = /* @__PURE__ */ K($s, [["__scopeId", "data-v-30881222"]]);
const ti = {
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
    collapseBeforeEnter(e) {
      this.oldPaddingBottom = e.style.paddingBottom, this.oldPaddingTop = e.style.paddingTop, e.style.paddingTop = "0", e.style.paddingBottom = "0", e.style.maxHeight = "0";
    },
    collapseEnter(e, t) {
      this.oldOverflow = e.style.overflow;
      let n = e.scrollHeight;
      n > 0 ? e.style.maxHeight = n + "px" : e.style.maxHeight = "0", e.style.paddingTop = this.oldPaddingTop, e.style.paddingBottom = this.oldPaddingBottom, e.style.overflow = "hidden";
      let o = function() {
        t(), e.removeEventListener("transitionend", o, !1), e.removeEventListener("transitioncancel", o, !1);
      };
      e.addEventListener("transitionend", o, !1), e.addEventListener("transitioncancel", o, !1);
    },
    collapseAfterEnter(e) {
      e.style.maxHeight = "", e.style.overflow = this.oldOverflow;
    },
    collapseBeforeLeave(e) {
      this.oldPaddingBottom = e.style.paddingBottom, this.oldPaddingTop = e.style.paddingTop, this.oldOverflow = e.style.overflow, e.style.maxHeight = e.scrollHeight + "px", e.style.overflow = "hidden";
    },
    collapseLeave(e, t) {
      e.scrollHeight !== 0 && (e.style.maxHeight = "0", e.style.paddingBottom = "0", e.style.paddingTop = "0");
      let n = function() {
        t(), e.removeEventListener("transitionend", n, !1), e.removeEventListener("transitioncancel", n, !1);
      };
      e.addEventListener("transitionend", n, !1), e.addEventListener("transitioncancel", n, !1);
    },
    collapseAfterLeave(e) {
      e.style.maxHeight = "", e.style.overflow = this.oldOverflow, e.style.paddingBottom = this.oldPaddingBottom, e.style.paddingTop = this.oldPaddingTop, this.oldOverflow = this.oldPaddingBottom = this.oldPaddingTop = "";
    }
  }
};
function ni(e, t, n, o, r, s) {
  return h(), I(tt, {
    name: n.transitionName,
    onBeforeEnter: s.collapseBeforeEnter,
    onEnter: s.collapseEnter,
    onAfterEnter: s.collapseAfterEnter,
    onBeforeLeave: s.collapseBeforeLeave,
    onLeave: s.collapseLeave,
    onAfterLeave: s.collapseAfterLeave
  }, {
    default: p(() => [
      L(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["name", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"]);
}
const oi = /* @__PURE__ */ K(ti, [["render", ni]]), ri = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200.391",
  height: "200",
  class: "icon",
  viewBox: "0 0 1026 1024"
}, si = /* @__PURE__ */ v("path", { d: "M0 510.74a21.676 21.676 0 1 0 221.962 0A21.676 21.676 0 1 0 0 510.74ZM401.951 510.74a21.676 21.676 0 1 0 221.962 0 21.676 21.676 0 1 0-221.962 0ZM803.8969999999999 510.74a21.676 21.676 0 1 0 221.962 0 21.676 21.676 0 1 0-221.963 0Z" }, null, -1), ii = [
  si
];
function ai(e, t) {
  return h(), _("svg", ri, ii);
}
const li = { render: ai }, ui = {
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
  setup(e) {
    const t = e, n = R(() => t.suffix ? t.suffix(t.treeItem).filter((r) => !r.code || $isCode(r.code)) : []), o = (r) => {
      const s = n.value.findIndex((i) => i.key === r);
      n.value[s].onClick(t.treeItem);
    };
    return (r, s) => {
      const i = pe, a = it;
      return c(n) && c(n).length ? (h(), I(a, {
        key: 0,
        trigger: "click",
        options: c(n),
        onSelect: o
      }, {
        default: p(() => [
          f(i, {
            text: "",
            tag: "a",
            class: "mr-10"
          }, {
            default: p(() => [
              (h(), I(G(c(li)), { class: "w-14 h-14" }))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options"])) : U("", !0);
    };
  }
};
const ci = J({
  name: "ShTree"
}), di = /* @__PURE__ */ Object.assign(ci, {
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
  setup(e) {
    const t = e, n = W("sh-icon"), o = R(() => (r(t.data), t.data)), r = (a) => {
      a.forEach((l) => {
        l.children && (l.children.length ? r(l.children) : l.children = null);
      });
    }, s = ({ option: a }) => re(ui, {
      treeItem: a,
      suffix: t.suffix
    }), i = ({ option: a }) => re(n, t.prefix(a));
    return (a, l) => {
      const u = po;
      return h(), I(u, Z({
        data: c(o),
        "block-line": e.blockLine
      }, a.$attrs, {
        "show-irrelevant-nodes": e.showIrrelevantNodes,
        "render-prefix": e.prefix ? i : e.renderPrefix,
        "render-suffix": e.suffix ? s : e.renderSuffix
      }), null, 16, ["data", "block-line", "show-irrelevant-nodes", "render-prefix", "render-suffix"]);
    };
  }
}), hi = /* @__PURE__ */ K(di, [["__scopeId", "data-v-7a2ca4bf"]]), fi = J({
  name: "ShTreeSelectDept"
}), pi = /* @__PURE__ */ Object.assign(fi, {
  props: {
    filterable: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = W("sh-icon"), n = jn(), o = ce({
      list: [],
      defaultExpandedKeys: []
    });
    (async () => {
      o.list = await n.getOrgDept(), o.list.forEach((i) => {
        o.defaultExpandedKeys.push(i.id);
      });
    })();
    const s = ({ option: i }) => re(t, {
      name: i.type === "team" ? "company" : "dept"
    });
    return (i, a) => {
      const l = vn;
      return h(), I(l, Z(i.$attrs, {
        "label-field": "name",
        "key-field": "id",
        filterable: e.filterable,
        options: o.list,
        "default-expanded-keys": o.defaultExpandedKeys,
        "render-prefix": s
      }), null, 16, ["filterable", "options", "default-expanded-keys"]);
    };
  }
}), gi = J({
  name: "ShTreeSelectPerson"
}), mi = /* @__PURE__ */ Object.assign(gi, {
  props: {
    filterable: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = W("sh-icon"), n = jn(), o = ce({
      list: [],
      defaultExpandedKeys: []
    });
    (async () => {
      o.list = await n.getOrgPerson(), o.list.forEach((i) => {
        o.defaultExpandedKeys.push(i.id);
      });
    })();
    const s = ({ option: i }) => re(t, {
      name: i.type
    });
    return (i, a) => {
      const l = vn;
      return h(), I(l, Z(i.$attrs, {
        "label-field": "name",
        "key-field": "id",
        filterable: e.filterable,
        options: o.list,
        "default-expanded-keys": o.defaultExpandedKeys,
        "render-prefix": s
      }), null, 16, ["filterable", "options", "default-expanded-keys"]);
    };
  }
}), vi = J({
  name: "ShSelectComma"
}), Ai = /* @__PURE__ */ Object.assign(vi, {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const n = e, o = O([]);
    te(
      () => n.value,
      (s) => {
        s && (o.value = s.split(","));
      },
      { immediate: !0, deep: !0 }
    );
    const r = () => {
      t("update:value", o.value.join(","));
    };
    return (s, i) => {
      const a = mn;
      return h(), I(a, {
        value: o.value,
        "onUpdate:value": [
          i[0] || (i[0] = (l) => o.value = l),
          r
        ],
        multiple: ""
      }, null, 8, ["value"]);
    };
  }
});
const yi = { class: "sh-search-fold" }, bi = { class: "flex items-center justify-end pl-15" }, wi = { class: "flex-center" }, Si = { class: "btn" }, _i = J({
  name: "ShSearchFold"
}), xi = /* @__PURE__ */ Object.assign(_i, {
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
  setup(e, { expose: t }) {
    const n = e;
    let o = O(0), r = O(!1);
    const s = O(null), i = O(null), a = R(() => 34 + 58 * (n.lineNum - 1)), l = (w) => {
      var y;
      (y = s.value) == null || y.validate((k) => {
        w(k);
      });
    }, u = () => {
      var w;
      n.reset(), (w = s.value) == null || w.restoreValidation();
    }, d = () => {
      setTimeout(() => {
        o.value = i.value.$el.offsetHeight;
      }, 100);
    }, g = () => {
      n.loadList();
    };
    nn(() => {
      d(), window.addEventListener("resize", d, !1);
    }), Gn(() => {
      window.removeEventListener("resize", d, !1);
    });
    const A = R(() => {
      let w = "auto";
      return o.value > a.value && (w = o.value > a.value && r.value ? `${o.value}px` : `${a.value}px`), w;
    }), E = R(() => o.value > a.value + 2 + 24);
    return t({
      validate: l,
      formRef: s
    }), (w, y) => {
      const k = W("sh-grid-form"), B = fn, T = pe, b = cn;
      return h(), _("div", yi, [
        v("div", {
          style: H({ height: c(A) }),
          class: "sh-search-fold-wrap"
        }, [
          f(b, {
            ref_key: "searchRef",
            ref: i,
            gutter: e.btnGutter
          }, {
            default: p(() => [
              f(B, {
                span: 24 - e.btnSpan
              }, {
                default: p(() => [
                  f(k, Z(w.$attrs, {
                    ref_key: "formRef",
                    ref: s,
                    "label-width": e.labelWidth
                  }), {
                    default: p(() => [
                      L(w.$slots, "default", {}, void 0, !0)
                    ]),
                    _: 3
                  }, 16, ["label-width"])
                ]),
                _: 3
              }, 8, ["span"]),
              f(B, { span: e.btnSpan }, {
                default: p(() => [
                  v("div", bi, [
                    v("div", wi, [
                      c(E) ? (h(), I(T, {
                        key: 0,
                        text: "",
                        class: "more",
                        onClick: y[0] || (y[0] = (x) => Yn(r) ? r.value = !c(r) : r = !c(r))
                      }, {
                        default: p(() => [
                          P(ne(c(r) ? "折叠查询" : "更多查询") + " ", 1),
                          (h(), I(G(c(Tt)), {
                            class: F(["w-14 h-14 ml-4 icon", c(r) ? "arrow-icon" : ""])
                          }, null, 8, ["class"]))
                        ]),
                        _: 1
                      })) : U("", !0)
                    ]),
                    v("div", Si, [
                      e.reset ? (h(), I(T, {
                        key: 0,
                        class: "reset",
                        onClick: y[1] || (y[1] = (x) => u())
                      }, {
                        default: p(() => [
                          P("重置")
                        ]),
                        _: 1
                      })) : U("", !0),
                      e.loadList ? (h(), I(T, {
                        key: 1,
                        type: "primary",
                        onClick: g
                      }, {
                        default: p(() => [
                          P("查询")
                        ]),
                        _: 1
                      })) : U("", !0),
                      L(w.$slots, "btn", {}, void 0, !0)
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
}), Ei = /* @__PURE__ */ K(xi, [["__scopeId", "data-v-81fb2bad"]]), Ii = J({
  name: "ShGridForm"
}), Ci = /* @__PURE__ */ Object.assign(Ii, {
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
  setup(e, { expose: t }) {
    const n = O(null);
    return t({
      validate: (s) => n.value.validate(s),
      formRef: n,
      restoreValidation: () => {
        var s;
        (s = n.value) == null || s.restoreValidation();
      }
    }), (s, i) => {
      const a = An, l = dn;
      return h(), I(l, Z(s.$attrs, {
        ref_key: "formRef",
        ref: n,
        "require-mark-placement": e.requireMarkPlacement,
        "label-placement": e.labelPlacement
      }), {
        default: p(() => [
          f(a, {
            "x-gap": e.gutter,
            cols: e.cols,
            responsive: e.responsive
          }, {
            default: p(() => [
              L(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["x-gap", "cols", "responsive"])
        ]),
        _: 3
      }, 16, ["require-mark-placement", "label-placement"]);
    };
  }
});
const ki = { class: "sh-content-layout flex flex-col" }, Ti = {
  key: 0,
  class: "py-8 px-20 mb-10 rounded-8 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]"
}, Bi = { class: "bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17] p-20 h-full flex-1 rounded-t-8" }, Ri = J({
  name: "ShContentLayout"
}), Di = /* @__PURE__ */ Object.assign(Ri, {
  props: {
    btnClass: {
      type: String,
      default: "mb-20"
    }
  },
  setup(e) {
    return (t, n) => (h(), _("div", ki, [
      t.$slots.header ? (h(), _("div", Ti, [
        L(t.$slots, "header", {}, void 0, !0)
      ])) : U("", !0),
      v("div", Bi, [
        t.$slots.btn ? (h(), _("div", {
          key: 0,
          class: F(e.btnClass)
        }, [
          L(t.$slots, "btn", {}, void 0, !0)
        ], 2)) : U("", !0),
        L(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Qi = /* @__PURE__ */ K(Di, [["__scopeId", "data-v-ac8db272"]]), Ni = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14"
}, Oi = /* @__PURE__ */ Et('<g fill="#fff" data-name="组 6412"><path d="M11.649 2.631h-9.3a.568.568 0 0 0-.565.565.568.568 0 0 0 .566.568h.419v7.321a1.7 1.7 0 0 0 1.694 1.693h5.07a1.7 1.7 0 0 0 1.693-1.693v-6.2a.567.567 0 0 0-.567-.565.568.568 0 0 0-.565.567v6.2a.561.561 0 0 1-.56.56h-5.07a.561.561 0 0 1-.56-.56V3.766h7.746a.569.569 0 0 0 .566-.565.568.568 0 0 0-.567-.57Z" data-name="路径 9021"></path><path d="M5.868 2.354h2.259a.565.565 0 0 0 .4-.167.557.557 0 0 0 .165-.4.56.56 0 0 0-.167-.4.565.565 0 0 0-.4-.165H5.864a.568.568 0 0 0-.565.565.563.563 0 0 0 .165.4.565.565 0 0 0 .404.167Z" data-name="路径 9022"></path><path d="M5.867 5.445a.568.568 0 0 0-.565.568v3.381a.568.568 0 0 0 .565.566.562.562 0 0 0 .4-.165.565.565 0 0 0 .167-.4V6.012a.563.563 0 0 0-.167-.4.562.562 0 0 0-.4-.166Z" data-name="路径 9023"></path><path d="M8.122 5.448a.562.562 0 0 0-.4.165.565.565 0 0 0-.167.4v3.381a.568.568 0 0 0 .565.566.562.562 0 0 0 .4-.165.565.565 0 0 0 .167-.4V6.018a.568.568 0 0 0-.565-.566Z" data-name="路径 9024"></path></g>', 1), Ji = [
  Oi
];
function Pi(e, t) {
  return h(), _("svg", Ni, Ji);
}
const Li = { render: Pi }, Ui = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14"
}, Vi = /* @__PURE__ */ Et('<g fill="#fff" data-name="组 6415"><path d="M6.673 12.773a5.732 5.732 0 0 1-2.245-.453 5.751 5.751 0 0 1-1.834-1.236A5.755 5.755 0 0 1 1.358 9.25a5.731 5.731 0 0 1-.454-2.245 5.731 5.731 0 0 1 .454-2.245 5.756 5.756 0 0 1 1.236-1.834A5.753 5.753 0 0 1 4.428 1.69a5.734 5.734 0 0 1 2.245-.453 5.74 5.74 0 0 1 3.226.985 5.77 5.77 0 0 1 2.09 2.538l-.806.341a4.886 4.886 0 0 0-4.509-2.989A4.9 4.9 0 0 0 1.78 7.006 4.9 4.9 0 0 0 6.674 11.9a4.89 4.89 0 0 0 3.739-1.735l.668.565a5.761 5.761 0 0 1-4.408 2.043Z" data-name="路径 9025"></path><path d="m12.011 7.715 1.195-3.243-3.406.587Z" data-name="路径 9026"></path><g data-name="组 6414" transform="translate(5.015 3.482)"><path d="M1.382.111.03 2.454a.223.223 0 0 0 .193.335h2.7a.223.223 0 0 0 .193-.335L1.764.111a.223.223 0 0 0-.382 0Z" data-name="路径 9027"></path><rect width="1.45" height="4.35" data-name="矩形 13542" rx=".319" transform="translate(.851 2.454)"></rect></g></g>', 1), ji = [
  Vi
];
function Mi(e, t) {
  return h(), _("svg", Ui, ji);
}
const qi = { render: Mi }, Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "14"
}, Hi = /* @__PURE__ */ v("g", {
  fill: "#fff",
  "data-name": "组 6419"
}, [
  /* @__PURE__ */ v("path", {
    d: "M10.02 4.333a.42.42 0 0 0-.419-.419H4.26a.419.419 0 1 0 0 .838h5.341a.42.42 0 0 0 .419-.419ZM4.26 6.419a.419.419 0 1 0 0 .838h2.494a.419.419 0 1 0 0-.838Zm6.006 4.291a.373.373 0 0 0-.09-.068 2.057 2.057 0 0 0 .375-1.186 2.111 2.111 0 1 0-2.11 2.083 2.125 2.125 0 0 0 1.158-.341.419.419 0 0 0 .076.1l1.087 1.087a.42.42 0 0 0 .593-.593Zm-1.826.008a1.262 1.262 0 1 1 1.279-1.262 1.271 1.271 0 0 1-1.277 1.258Z",
    "data-name": "路径 9030"
  }),
  /* @__PURE__ */ v("path", {
    d: "M7.8 12.279H3.149a.827.827 0 0 1-.835-.814V3.342a.827.827 0 0 1 .835-.814h7.143a.827.827 0 0 1 .835.814v4.05a.42.42 0 0 0 .84 0V3.329c0-.9-.36-1.628-1.279-1.628H3.199a1.655 1.655 0 0 0-1.671 1.628v8.138a1.655 1.655 0 0 0 1.671 1.628h4.6a.409.409 0 1 0 .005-.817Z",
    "data-name": "路径 9031"
  }),
  /* @__PURE__ */ v("path", {
    d: "M11.13 9.018a.42.42 0 1 0 .42-.419.42.42 0 0 0-.42.419Z",
    "data-name": "路径 9032"
  })
], -1), Wi = [
  Hi
];
function zi(e, t) {
  return h(), _("svg", Fi, Wi);
}
const Ki = { render: zi }, Xi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
}, Zi = /* @__PURE__ */ Et('<g fill="none" data-name="组 12213"><path d="M0 0h20v20H0z" data-name="矩形 15313"></path><g stroke="#8996af" stroke-linecap="round" data-name="组 12212"><path d="M2.5 10h15" data-name="直线 775"></path><path d="M10 2.5v15" data-name="直线 776"></path></g></g>', 1), Gi = [
  Zi
];
function Yi(e, t) {
  return h(), _("svg", Xi, Gi);
}
const $i = { render: Yi };
const ea = { class: "flex" }, ta = { class: "rounded-10 rounded-t-none absolute left-0 top-48 w-full h-2/5 flex-center hidden text-16 group-hover:flex icon-box" }, na = J({
  name: "ShUploadImage"
}), oa = /* @__PURE__ */ Object.assign(na, {
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
  setup(e, { emit: t }) {
    const n = e, o = ae(), r = R(() => o.token), s = ce({
      loading: !1,
      progress: 0,
      list: []
    }), i = O(null), a = O(null);
    te(
      () => n.value,
      (y) => {
        s.list = y || [];
      },
      { immediate: !0, deep: !0 }
    );
    const u = $().env.VITE_APP_BASE_API, d = (y) => y ? u + wt.showImg({ id: y, token: r.value }) : null, g = () => {
      var y;
      (y = a.value) == null || y.click();
    }, A = (y) => {
      s.list = s.list.filter((k) => k !== y), t("update:value", s.list);
    }, E = (y) => {
      i.value[y].$el.children[0].click();
    }, w = async ({ file: y, data: k, onError: B, onFinish: T }) => {
      const b = new FormData();
      if (k && Object.keys(k).forEach((C) => {
        b.append(C, k[C]);
      }), n.accept.indexOf(y.name.replace(/.+\./, "").toLowerCase()) === -1 && n.accept) {
        $message.warning(`上传的文件只能为【${n.accept}】格式`), B();
        return;
      }
      s.loading = !0, b.append("files", y.file);
      for (let C in n.params)
        b.append(C, n.params[C]);
      const D = await wt.uploadImg(b, {
        onUploadProgress: (C) => {
          s.progress = Math.floor(C.loaded / C.total * 100);
        }
      });
      s.loading = !1, D.code === 0 ? (s.list = n.multiple ? [...s.list, ...D.data] : D.data, t("update:value", s.list), T()) : ($message.error(D.msg), B());
    };
    return (y, k) => {
      const B = Ae, T = yn, b = go, x = Ve;
      return h(), _("div", ea, [
        f(x, {
          show: s.loading
        }, {
          description: p(() => [
            P(ne(s.progress) + "% ", 1)
          ]),
          default: p(() => [
            f(B, null, {
              default: p(() => [
                (h(!0), _(Y, null, ue(s.list, (D, C) => (h(), _("div", {
                  key: C,
                  class: "group relative text-0 box-image"
                }, [
                  v("div", ta, [
                    f(B, null, {
                      default: p(() => [
                        e.showDelete ? (h(), I(G(c(Li)), {
                          key: 0,
                          class: "cursor-pointer",
                          onClick: (z) => A(D)
                        }, null, 8, ["onClick"])) : U("", !0),
                        (h(), I(G(c(Ki)), {
                          class: "cursor-pointer",
                          onClick: (z) => E(C)
                        }, null, 8, ["onClick"])),
                        e.multiple ? U("", !0) : (h(), I(G(c(qi)), {
                          key: 1,
                          class: "cursor-pointer",
                          onClick: g
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  f(T, {
                    ref_for: !0,
                    ref_key: "imgRef",
                    ref: i,
                    class: "rounded-10",
                    height: "80",
                    width: "80",
                    src: d(D),
                    "object-fit": "cover"
                  }, null, 8, ["src"])
                ]))), 128)),
                f(b, Z({
                  name: "files",
                  "show-file-list": !1,
                  "custom-request": w,
                  multiple: e.multiple,
                  accept: e.accept
                }, y.$attrs), {
                  default: p(() => [
                    v("div", {
                      ref_key: "uploadRef",
                      ref: a,
                      class: F(["w-80 h-80 bg-#fafafc rounded-10 border-dashed border border-#e0e0e6 flex-center cursor-pointer hover:border-#18a058 transition", { changeUpload: !e.multiple && s.list.length }])
                    }, [
                      (h(), I(G(c($i))))
                    ], 2)
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
}), ra = /* @__PURE__ */ K(oa, [["__scopeId", "data-v-7819e9f4"]]), sa = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, ia = /* @__PURE__ */ v(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M112 184l144 144l144-144"
  },
  null,
  -1
  /* HOISTED */
), aa = [ia], la = J({
  name: "ChevronDown",
  render: function(t, n) {
    return h(), _("svg", sa, aa);
  }
}), ua = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, ca = /* @__PURE__ */ v(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M112 328l144-144l144 144"
  },
  null,
  -1
  /* HOISTED */
), da = [ca], ha = J({
  name: "ChevronUp",
  render: function(t, n) {
    return h(), _("svg", ua, da);
  }
});
const fa = (e) => (Le("data-v-a408fd7a"), e = e(), Ue(), e), pa = { class: "search clearfix" }, ga = { class: "search-left" }, ma = { class: "search-right" }, va = { class: "search-input" }, Aa = { class: "dropdown group" }, ya = ["onClick"], ba = /* @__PURE__ */ fa(() => /* @__PURE__ */ v("span", null, null, -1)), wa = J({
  name: "ShSearchArea"
}), Sa = /* @__PURE__ */ Object.assign(wa, {
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    props: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: "80px"
    },
    dropdownList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["loadList"],
  setup(e, { emit: t }) {
    const n = e;
    on((x) => ({
      "32f303f2": c(b)
    }));
    const o = X(), r = $n(), s = O(""), i = O(""), a = O(!1), l = O(!1), u = O(null), d = (x) => {
      a.value = x;
    };
    te(
      () => n.form,
      () => {
        g();
      },
      {
        deep: !0
      }
    );
    const g = jo(() => {
      t("loadList");
    }, 500), A = () => {
      s.value = "", u.value = null, r.onReset ? t("reset") : (n.props && n.props.split("||").forEach((x) => {
        n.form[x] = "";
      }), n.dropdownList.forEach((x) => {
        n.form[x.key] = "";
      }));
    };
    function E(x) {
      s.value = x, w(n.dropdownList[0], 0);
    }
    const w = (x, D) => {
      u.value = D, i.value = x.label, n.dropdownList.forEach((C) => {
        s.value && C.key == x.key ? n.form[C.key] = s.value : n.form[C.key] = "";
      });
    }, y = R(() => {
      let x = s.value;
      return i.value && s.value && (x = `${i.value}：${s.value}`), x;
    }), k = () => {
      i.value = "", l.value = !0, T();
    }, B = () => {
      l.value = !1;
    }, T = () => {
      document.onkeydown = (x) => {
        let D = x || event || window.event || arguments.callee.caller.arguments[0];
        s.value && (D && D.keyCode == 38 ? u.value > 0 && (u.value--, w(n.dropdownList[u.value], u.value)) : D && D.keyCode == 40 && u.value < n.dropdownList.length - 1 && (u.value++, w(n.dropdownList[u.value], u.value)));
      };
    }, b = R(() => {
      const x = o.darkMode ? themeVars.primaryColor : o.themeColor;
      return gt(x, 0.1);
    });
    return (x, D) => {
      const C = st, z = je, oe = mo, se = pe, V = W("sh-form");
      return h(), _("div", pa, [
        v("div", ga, [
          L(x.$slots, "left", {}, void 0, !0)
        ]),
        v("div", ma, [
          v("div", va, [
            f(z, {
              placement: "bottom",
              width: 375,
              trigger: "focus",
              to: ".search",
              "popper-class": "search-popper"
            }, {
              trigger: p(() => [
                f(C, {
                  placeholder: "请输入内容",
                  value: l.value ? s.value : c(y),
                  onFocus: k,
                  onInput: E,
                  onBlur: B
                }, null, 8, ["value"])
              ]),
              default: p(() => [
                v("div", Aa, [
                  (h(!0), _(Y, null, ue(e.dropdownList, (M, be) => (h(), _("div", {
                    key: be,
                    class: F(["dropdown-item", { active: be === u.value }]),
                    onClick: un((we) => w(M, be), ["prevent"])
                  }, ne(`${M.label}:${s.value}`), 11, ya))), 128))
                ])
              ]),
              _: 1
            })
          ]),
          x.$slots.default ? (h(), I(z, {
            key: 0,
            placement: "bottom",
            to: ".search",
            class: "search-popover",
            width: 800,
            trigger: "click",
            "content-style": "padding: 20px 0 5px 0; ",
            "onUpdate:show": d
          }, {
            trigger: p(() => [
              f(se, {
                type: "primary",
                class: "more mr-12"
              }, {
                default: p(() => [
                  P(" 更多搜索 "),
                  f(oe, {
                    size: "16",
                    class: "ml-4",
                    color: "#fff "
                  }, {
                    default: p(() => [
                      a.value ? (h(), I(c(ha), { key: 1 })) : (h(), I(c(la), { key: 0 }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: p(() => [
              f(V, Z({ ref: "formRef" }, x.$attrs, {
                class: "yw-form",
                model: e.form,
                "label-width": e.labelWidth
              }), {
                default: p(() => [
                  L(x.$slots, "default", {}, void 0, !0)
                ]),
                _: 3
              }, 16, ["model", "label-width"])
            ]),
            _: 3
          })) : U("", !0),
          ba,
          f(se, {
            class: F(x.$slots.default ? "" : "ml-12"),
            onClick: A
          }, {
            default: p(() => [
              P("重置")
            ]),
            _: 1
          }, 8, ["class"])
        ])
      ]);
    };
  }
}), _a = /* @__PURE__ */ K(Sa, [["__scopeId", "data-v-a408fd7a"]]), xa = [
  _n,
  Xo,
  Is,
  ks,
  Bs,
  Os,
  ei,
  oi,
  hi,
  pi,
  mi,
  Ai,
  Ei,
  Ci,
  Qi,
  ra,
  _a
], Ea = (e) => {
  xa.forEach((t) => {
    e.component(t.name, t);
  });
};
function Ia(e) {
  return () => {
    const t = Jn(), n = Ca((t == null ? void 0 : t.resourceCodes) || []);
    e.config.globalProperties.$isCode = n, window.$isCode = n;
    const o = ka((t == null ? void 0 : t.menuList) || []);
    e.config.globalProperties.$isRouter = o, window.$isRouter = o;
  };
}
function Ca(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = !0;
  }), function(n) {
    return !!t[n];
  };
}
const ka = function(e) {
  let t = qn(e);
  return function(n) {
    return !!t[n];
  };
};
function qn(e) {
  let t = {};
  return e.forEach((n) => {
    const o = n.url.split("?")[0];
    t[o] = !0, n.children && (t = { ...t, ...qn(n.children) });
  }), t;
}
const Ta = {
  __name: "index",
  setup(e) {
    const t = X(), n = $(), o = J({
      setup(r) {
        fr(), pr(), vs(), Qt();
      },
      render() {
        return re("div");
      }
    });
    return (r, s) => {
      const i = Ve, a = yo, l = bo, u = wo, d = So, g = pn;
      return h(), I(g, {
        "theme-overrides": c(t).themeOverrides,
        theme: c(t).naiveTheme,
        locale: c(vo),
        "date-locale": c(Ao),
        class: "h-full bg-[#f6f9f8] dark:bg-[#101014]"
      }, {
        default: p(() => [
          f(d, null, {
            default: p(() => [
              f(u, null, {
                default: p(() => [
                  f(l, null, {
                    default: p(() => [
                      f(a, null, {
                        default: p(() => [
                          f(i, {
                            show: c(n).loading,
                            class: "h-full"
                          }, {
                            default: p(() => [
                              L(r.$slots, "default", {}, void 0, !0)
                            ]),
                            _: 3
                          }, 8, ["show"]),
                          f(c(o))
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
}, gd = /* @__PURE__ */ K(Ta, [["__scopeId", "data-v-c7d45847"]]);
const Ba = J({
  name: "NlAppRouterView"
}), Ra = /* @__PURE__ */ Object.assign(Ba, {
  emits: ["hide-main-overflow"],
  setup(e, { emit: t }) {
    const n = _o(), o = $(), r = X(), i = xe().getRoutes(), a = R(() => r.header.height + r.tab.height + 20), l = R(() => i.filter((A) => {
      var E;
      return (E = A.meta) == null ? void 0 : E.keepAlive;
    }).map((A) => A.name)), u = R(() => {
      const A = r.darkMode ? n.primaryColor : r.themeColor;
      return _e(A, 1);
    });
    function d() {
      t("hide-main-overflow", !0);
    }
    function g() {
      t("hide-main-overflow", !1);
    }
    return (A, E) => {
      const w = W("router-view");
      return h(), I(w, {
        style: H({
          "--primaryColor": c(n).primaryColor,
          "--primaryColorHover": c(n).primaryColorHover,
          "--primaryBgColor": c(u)
        })
      }, {
        default: p(({ Component: y, route: k }) => [
          f(tt, {
            name: "fade-slide",
            mode: "out-in",
            appear: "",
            onBeforeLeave: d,
            onAfterEnter: g
          }, {
            default: p(() => [
              (h(), I(eo, { include: c(l) }, [
                c(o).reloadFlag ? (h(), I(G(y), {
                  key: k.path,
                  class: "view_box mt-20 mx-20 p-20 rounded-10 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]",
                  style: H({ "min-height": `calc(100vh - ${c(a)}px)` })
                }, null, 8, ["style"])) : U("", !0)
              ], 1032, ["include"]))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["style"]);
    };
  }
}), Da = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Qa = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M512 166.4c-70.4 0-134.4 19.2-192 57.6l-25.6-38.4c-12.8-19.2-38.4-12.8-44.8 6.4l-44.8 140.8c0 12.8 12.8 32 25.6 32l147.2-6.4c19.2 0 32-25.6 19.2-38.4l-32-38.4v-6.4c38.4-32 96-44.8 147.2-44.8 153.6 0 281.6 128 281.6 281.6S665.6 793.6 512 793.6 230.4 665.6 230.4 512c0-19.2-12.8-32-32-32s-32 12.8-32 32c0 192 153.6 345.6 345.6 345.6S857.6 704 857.6 512 704 166.4 512 166.4z"
}, null, -1), Na = [
  Qa
];
function Oa(e, t) {
  return h(), _("svg", Da, Na);
}
const Bt = { render: Oa }, Ja = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pa = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), La = [
  Pa
];
function Ua(e, t) {
  return h(), _("svg", Ja, La);
}
const Fn = { render: Ua }, Va = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-hidden": "true",
  class: "iconify iconify--mdi",
  viewBox: "0 0 24 24"
}, ja = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M11 16v-3h10v-2H11V8l-4 4 4 4m-8 4h2V4H3v16Z"
}, null, -1), Ma = [
  ja
];
function qa(e, t) {
  return h(), _("svg", Va, Ma);
}
const Fa = { render: qa }, Ha = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-hidden": "true",
  class: "iconify iconify--ant-design",
  viewBox: "0 0 1024 1024"
}, Wa = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3 657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z"
}, null, -1), za = [
  Wa
];
function Ka(e, t) {
  return h(), _("svg", Ha, za);
}
const Xa = { render: Ka }, Za = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  "aria-hidden": "true",
  class: "iconify iconify--mdi",
  viewBox: "0 0 24 24"
}, Ga = /* @__PURE__ */ v("path", {
  fill: "currentColor",
  d: "M13 8v3H3v2h10v3l4-4-4-4m6 12h2V4h-2v16Z"
}, null, -1), Ya = [
  Ga
];
function $a(e, t) {
  return h(), _("svg", Za, Ya);
}
const el = { render: $a }, tl = {
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
  setup(e, { emit: t }) {
    const n = e, o = De(), r = $(), s = ae(), i = R(() => [
      {
        label: "重新加载",
        key: "reload",
        disabled: !1,
        // icon: () => renderIcon('refresh'),
        icon: () => re(Bt, { style: { width: "14px", height: "14px" } })
      },
      {
        label: "关闭",
        key: "close",
        disabled: o.tags.length <= 1,
        icon: () => re(Fn, { style: { width: "14px", height: "14px" } })
      },
      {
        label: "关闭其他",
        key: "close-other",
        disabled: o.tags.length <= 1,
        icon: () => re(Xa, { style: { width: "14px", height: "14px" } })
      },
      {
        label: "关闭左侧",
        key: "close-left",
        disabled: o.tags.length <= 1 || n.url === o.tags[0].url,
        icon: () => re(Fa, { style: { width: "14px", height: "14px" } })
      },
      {
        label: "关闭右侧",
        key: "close-right",
        disabled: o.tags.length <= 1 || n.url === o.tags[o.tags.length - 1].url,
        icon: () => re(el, { style: { width: "14px", height: "14px" } })
      }
    ]), a = R({
      get() {
        return n.show;
      },
      set(g) {
        t("update:show", g);
      }
    }), l = /* @__PURE__ */ new Map([
      [
        "reload",
        () => {
          r.reloadPage();
        }
      ],
      [
        "close",
        () => {
          o.removeTag(n.url, s.activeMenu);
        }
      ],
      [
        "close-other",
        () => {
          o.removeOther(n.url);
        }
      ],
      [
        "close-left",
        () => {
          o.removeLeft(n.url);
        }
      ],
      [
        "close-right",
        () => {
          o.removeRight(n.url);
        }
      ]
    ]);
    function u() {
      a.value = !1;
    }
    function d(g) {
      const A = l.get(g);
      A && A(), u();
    }
    return (g, A) => {
      const E = it;
      return h(), I(E, {
        show: c(a),
        options: c(i),
        x: e.x,
        y: e.y,
        placement: "bottom-start",
        onClickoutside: u,
        onSelect: d
      }, null, 8, ["show", "options", "x", "y"]);
    };
  }
};
const nl = { class: "flex-center" }, ol = {
  __name: "index",
  emits: ["scroll"],
  setup(e, { emit: t }) {
    const n = De(), o = ae(), r = X(), s = xe(), i = O(), a = R(() => r.tab.mode === "chrome"), l = R(() => a.value ? Uo : Vo), u = ({ url: B }) => {
      if (n.tags.length === 1) {
        $message.error("最后一个了");
        return;
      }
      n.removeTag(B, o.activeMenu);
    }, d = ({ url: B }) => {
      s.push(B);
    }, g = ce({
      show: !1,
      x: 0,
      y: 0,
      url: ""
    });
    async function A(B, { url: T }) {
      B.preventDefault();
      const { clientX: b, clientY: x } = B;
      w(), y(b, x, T), await et(), E();
    }
    function E() {
      g.show = !0;
    }
    function w() {
      g.show = !1;
    }
    function y(B, T, b) {
      Object.assign(g, { x: B, y: T, url: b });
    }
    async function k() {
      await et();
      const B = n.activeTabIndex(o.activeMenu);
      if (i.value && i.value.children.length && i.value.children[B]) {
        const T = i.value.children[B], { x: b, width: x } = T.getBoundingClientRect(), D = b + x / 2;
        setTimeout(() => {
          t("scroll", D);
        }, 50);
      }
    }
    return te(
      () => o.activeMenu,
      () => {
        k();
      },
      {
        immediate: !0
      }
    ), (B, T) => {
      const b = W("sh-icon");
      return h(), _(Y, null, [
        v("div", {
          ref_key: "tabRef",
          ref: i,
          class: F(["h-full", [c(a) ? "flex items-end" : "flex-y-center"]])
        }, [
          (h(!0), _(Y, null, ue(c(n).tags, (x) => (h(), I(G(c(l)), {
            key: x.url,
            "is-active": c(o).activeMenu === x.url,
            "dark-mode": c(r).darkMode,
            "primary-color": c(r).themeColor,
            class: F({ "ml-10px": !c(a) }),
            onClick: (D) => d(x),
            onClose: (D) => u(x),
            onContextmenu: (D) => A(D, x)
          }, {
            default: p(() => [
              v("div", nl, [
                c(r).menu.showIcon ? (h(), I(b, {
                  key: 0,
                  class: "align-middle mr-4",
                  name: x.svg || "menu"
                }, null, 8, ["name"])) : U("", !0),
                P(" " + ne(x.menuName), 1)
              ])
            ]),
            _: 2
          }, 1064, ["is-active", "dark-mode", "primary-color", "class", "onClick", "onClose", "onContextmenu"]))), 128))
        ], 2),
        f(tl, {
          show: g.show,
          "onUpdate:show": T[0] || (T[0] = (x) => g.show = x),
          url: g.url,
          x: g.x,
          y: g.y
        }, null, 8, ["show", "url", "x", "y"])
      ], 64);
    };
  }
}, rl = /* @__PURE__ */ K(ol, [["__scopeId", "data-v-a89775c6"]]), sl = { class: "h-full dark:hover:bg-[#333] hover:bg-[#f6f6f6] cursor-pointer" }, il = {
  __name: "index",
  setup(e) {
    const t = $();
    return (n, o) => {
      const r = bn;
      return h(), _("div", sl, [
        f(r, { placement: "bottom" }, {
          trigger: p(() => [
            v("div", {
              class: "w-full h-full flex-center text-20",
              onClick: o[0] || (o[0] = (...s) => c(t).reloadPage && c(t).reloadPage(...s))
            }, [
              (h(), I(G(c(Bt)), { class: "w-20 h-20" }))
            ])
          ]),
          default: p(() => [
            P(" 重新加载 ")
          ]),
          _: 1
        })
      ]);
    };
  }
}, al = { class: "h-full flex" }, ll = J({
  name: "NlAppTags"
}), ul = /* @__PURE__ */ Object.assign(ll, {
  setup(e) {
    const t = O(), n = O(), { width: o, left: r } = Mo(n), s = (i) => {
      var u;
      const l = i - r.value - o.value / 2;
      if (t.value) {
        const { maxScrollX: d, x: g } = t.value.instance, A = d - g, E = l > 0 ? Math.max(-l, A) : Math.min(-l, -g);
        (u = t.value) == null || u.instance.scrollBy(E, 0, 300);
      }
    };
    return (i, a) => {
      const l = W("sh-better-scroll"), u = W("sh-container");
      return h(), I(u, { class: "h-full" }, {
        default: p(() => [
          v("div", al, [
            v("div", {
              ref_key: "bsWrapper",
              ref: n,
              class: "flex-1-hidden h-full"
            }, [
              f(l, {
                ref_key: "bsScroll",
                ref: t,
                options: { scrollX: !0, scrollY: !1 }
              }, {
                default: p(() => [
                  f(rl, { onScroll: s })
                ]),
                _: 1
              }, 512)
            ], 512),
            f(il, { class: "w-64px" })
          ])
        ]),
        _: 1
      });
    };
  }
});
function cl() {
  function e(t, n) {
    let o = [];
    for (let r in t)
      if (t[r].url === n) {
        o.push(t[r]);
        break;
      } else if (t[r].children) {
        const s = e(t[r].children, n);
        if (s && s.length) {
          o = [t[r], ...s];
          break;
        }
      }
    return o;
  }
  return {
    getBreadcrumbPath: e
  };
}
const dl = { class: "flex-1-hidden flex items-center h-full text-16 px-10" }, hl = J({
  name: "NlBreadcrumb"
}), fl = /* @__PURE__ */ Object.assign(hl, {
  setup(e) {
    const t = Sn(), n = xe(), o = ae(), r = X(), { getBreadcrumbPath: s } = cl(), i = O([]), a = (u) => u.svg && r.header.crumb.showIcon ? Pe(u.svg) : "", l = (u) => {
      n.push(u);
    };
    return te(
      () => t.path,
      (u) => {
        i.value = s(o.menuList, u);
      },
      { immediate: !0 }
    ), (u, d) => {
      const g = W("sh-icon"), A = it, E = xo, w = Eo;
      return h(), _("div", dl, [
        f(w, null, {
          default: p(() => [
            (h(!0), _(Y, null, ue(i.value, (y, k) => (h(), I(E, { key: k }, {
              default: p(() => [
                f(A, {
                  options: y.children,
                  "label-field": "menuName",
                  "key-field": "url",
                  "render-icon": a,
                  onSelect: l
                }, {
                  default: p(() => [
                    v("div", {
                      class: F(["trigger flex-center", k < i.value.length - 1 ? "text-[#8996AF]" : ""])
                    }, [
                      c(r).header.crumb.showIcon ? (h(), I(g, {
                        key: 0,
                        name: y.svg || "menu",
                        class: "mr-5"
                      }, null, 8, ["name"])) : U("", !0),
                      P(" " + ne(y.menuName), 1)
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
}), pl = /* @__PURE__ */ K(fl, [["__scopeId", "data-v-d0873c6d"]]), gl = J({
  name: "NlProjectTitle"
}), ml = /* @__PURE__ */ Object.assign(gl, {
  setup(e) {
    let t = to("logo");
    const n = $(), o = R(() => n.title);
    return (r, s) => {
      const i = yn, a = It;
      return h(), I(a, {
        tag: "div",
        class: "text-20 flex-center font-600 h-full mr-20",
        style: { color: "var(--primary-color)" }
      }, {
        default: p(() => [
          c(t) ? (h(), I(i, {
            key: 0,
            width: "32",
            src: c(t),
            class: "mr-10"
          }, null, 8, ["src"])) : U("", !0),
          P(" " + ne(c(o)), 1)
        ]),
        _: 1
      });
    };
  }
}), vl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Al = /* @__PURE__ */ v("path", { d: "M17.897 12.962a.987.987 0 0 0-.987.987v1.783l-3.613-3.613a.833.833 0 0 0-1.178 1.179l3.612 3.612h-1.783a.988.988 0 0 0 0 1.975h1.975a2.962 2.962 0 0 0 2.961-2.962v-1.977a.987.987 0 0 0-.987-.984ZM15.923 1.116h-1.975a.987.987 0 0 0 0 1.974h1.781l-3.613 3.613a.833.833 0 0 0 1.178 1.178l3.613-3.612v1.783a.987.987 0 1 0 1.974 0V4.077a2.962 2.962 0 0 0-2.958-2.961ZM6.702 12.119l-3.613 3.613v-1.786a.987.987 0 0 0-1.974 0v1.974a2.962 2.962 0 0 0 2.962 2.962h1.974a.988.988 0 0 0 0-1.975H4.268l3.613-3.612a.834.834 0 1 0-1.179-1.179ZM4.268 3.09h1.783a.987.987 0 0 0 0-1.974H3.089A1.974 1.974 0 0 0 1.115 3.09v2.962a.987.987 0 1 0 1.974 0V4.268l3.613 3.613a.833.833 0 0 0 1.179-1.178Z" }, null, -1), yl = [
  Al
];
function bl(e, t) {
  return h(), _("svg", vl, yl);
}
const wl = { render: bl }, Sl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, _l = /* @__PURE__ */ v("path", { d: "M7.555 2.425a1.043 1.043 0 0 0-1.042 1.042v1.567l-3.332-3.33a1.067 1.067 0 0 0-1.474 0 1.044 1.044 0 0 0 0 1.473l3.331 3.328h-2a1.042 1.042 0 1 0 0 2.084h4.394c.021 0 .041-.006.062-.007s.042.006.063.006a1.034 1.034 0 0 0 1.034-1.121c0-.028.008-.055.008-.083V3.466a1.043 1.043 0 0 0-1.044-1.041ZM8.291 11.702a1.032 1.032 0 0 0-.817-.3c-.028 0-.054-.008-.082-.008H3.474a1.042 1.042 0 1 0 0 2.083h1.567l-3.33 3.332a1.042 1.042 0 0 0 1.474 1.473l3.328-3.331v2a1.042 1.042 0 0 0 2.084 0v-4.394c0-.021-.006-.041-.007-.062a1.037 1.037 0 0 0-.299-.793ZM18.291 16.813l-3.331-3.329h2a1.042 1.042 0 1 0 0-2.083h-4.391c-.021 0-.041.005-.062.006a1.028 1.028 0 0 0-1.1 1.115c0 .028-.008.055-.008.084v3.918a1.042 1.042 0 1 0 2.083 0v-1.568l3.333 3.331a1.042 1.042 0 1 0 1.472-1.474ZM11.708 8.288a1.033 1.033 0 0 0 .736.305c.028 0 .054-.006.082-.008s.053.008.081.008h3.915a1.042 1.042 0 1 0 0-2.084h-1.563l3.329-3.332a1.042 1.042 0 0 0 0-1.473 1.067 1.067 0 0 0-1.473 0l-3.329 3.331v-2a1.042 1.042 0 1 0-2.083 0v4.394c0 .021 0 .041.006.063a1.034 1.034 0 0 0 .299.796Z" }, null, -1), xl = [
  _l
];
function El(e, t) {
  return h(), _("svg", Sl, xl);
}
const Il = { render: El }, Cl = {
  __name: "FullScreen",
  setup(e) {
    const { isFullscreen: t, toggle: n } = qo();
    return (o, r) => {
      const s = je;
      return h(), _("div", Z({ class: "cursor-pointer w-40px h-full" }, o.$attrs), [
        f(s, null, {
          trigger: p(() => [
            v("div", {
              class: "w-full h-full flex-center",
              onClick: r[0] || (r[0] = (...i) => c(n) && c(n)(...i))
            }, [
              (h(), I(G(c(t) ? c(Il) : c(wl)), rn(sn(o.$attrs)), null, 16))
            ])
          ]),
          default: p(() => [
            P(" 全屏 ")
          ]),
          _: 1
        })
      ], 16);
    };
  }
}, kl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Tl = /* @__PURE__ */ v("g", { transform: "translate(-102.38 -2130.054)" }, [
  /* @__PURE__ */ v("circle", {
    cx: "6.667",
    cy: "6.667",
    r: "6.667",
    transform: "translate(105.713 2133.388)"
  }),
  /* @__PURE__ */ v("path", { d: "M112.38 2132.983a.855.855 0 0 1-.855-.855v-.386a.854.854 0 0 1 1.709 0v.386a.854.854 0 0 1-.854.855ZM112.38 2149.221a.855.855 0 0 1-.855-.855v-.386a.854.854 0 0 1 1.709 0v.386a.854.854 0 0 1-.854.855ZM107.379 2135.054a.853.853 0 0 1-1.208 0l-.273-.273a.855.855 0 1 1 1.208-1.209l.273.273a.855.855 0 0 1 0 1.209ZM118.861 2146.536a.853.853 0 0 1-1.208 0l-.273-.273a.855.855 0 0 1 1.209-1.208l.272.272a.855.855 0 0 1 0 1.209ZM105.308 2140.054a.854.854 0 0 1-.854.855h-.386a.854.854 0 1 1 0-1.709h.386a.854.854 0 0 1 .854.854ZM121.546 2140.054a.854.854 0 0 1-.854.855h-.386a.854.854 0 1 1 0-1.709h.386a.854.854 0 0 1 .854.854ZM107.379 2145.055a.853.853 0 0 1 0 1.208l-.273.273a.855.855 0 1 1-1.208-1.209l.273-.272a.853.853 0 0 1 1.208 0ZM118.861 2133.572a.855.855 0 0 1 0 1.209l-.272.273a.855.855 0 0 1-1.209-1.209l.273-.273a.855.855 0 0 1 1.208 0Z" })
], -1), Bl = [
  Tl
];
function Rl(e, t) {
  return h(), _("svg", kl, Bl);
}
const Dl = { render: Rl }, Ql = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Nl = /* @__PURE__ */ v("path", { d: "M9.763 1.596a7.634 7.634 0 0 1-7.74 12.981.252.252 0 0 0-.313.367 9.066 9.066 0 0 0 8.666 3.972 9.264 9.264 0 0 0 7.9-10.334c-.606-5.577-5.778-7.144-8.259-7.564a.325.325 0 0 0-.254.578Z" }, null, -1), Ol = [
  Nl
];
function Jl(e, t) {
  return h(), _("svg", Ql, Ol);
}
const Pl = { render: Jl }, Ll = "data:image/png;base64,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", Ul = { class: "p-20" }, Vl = { class: "text-right mt-20" }, jl = {
  __name: "UpdatePassword",
  setup(e, { expose: t }) {
    const n = O(null), o = ce({
      show: !1,
      loading: !1
    }), r = ce({
      oldPassword: "",
      password: "",
      enterPassword: ""
    }), s = () => {
      var u;
      (u = n.value) == null || u.validate((d) => {
        d || a();
      });
    }, i = (u, d) => d !== r.password ? new Error("密码输入不一致") : !0, a = async () => {
      o.loading = !0;
      const { code: u, message: d } = await hs.updatePassword(r);
      o.loading = !1, u === 0 ? ($message.success("成功"), o.show = !1) : $message.error(d);
    };
    return t({
      open: (u) => {
        o.show = !0;
      }
    }), (u, d) => {
      const g = st, A = W("sh-form-item"), E = W("sh-form"), w = pe, y = Ve, k = Io;
      return h(), I(k, {
        show: o.show,
        "onUpdate:show": d[4] || (d[4] = (B) => o.show = B),
        preset: "card",
        class: "w-550",
        title: "修改密码"
      }, {
        default: p(() => [
          v("div", Ul, [
            f(y, {
              show: o.loading
            }, {
              default: p(() => [
                f(E, {
                  ref_key: "formRef",
                  ref: n,
                  model: r,
                  "label-width": "90"
                }, {
                  default: p(() => [
                    f(A, {
                      label: "旧密码",
                      path: "oldPassword",
                      rule: "required||password"
                    }, {
                      default: p(() => [
                        f(g, {
                          value: r.oldPassword,
                          "onUpdate:value": d[0] || (d[0] = (B) => r.oldPassword = B),
                          placeholder: "请输入",
                          type: "password",
                          "show-password-on": "mousedown"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    f(A, {
                      label: "新密码",
                      path: "password",
                      rule: "required||password"
                    }, {
                      default: p(() => [
                        f(g, {
                          value: r.password,
                          "onUpdate:value": d[1] || (d[1] = (B) => r.password = B),
                          placeholder: "请输入",
                          type: "password",
                          "show-password-on": "mousedown"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    f(A, {
                      label: "确认新密码",
                      path: "enterPassword",
                      rule: { validator: i, trigger: "blur" }
                    }, {
                      default: p(() => [
                        f(g, {
                          value: r.enterPassword,
                          "onUpdate:value": d[2] || (d[2] = (B) => r.enterPassword = B),
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
                v("div", Vl, [
                  f(w, {
                    onClick: d[3] || (d[3] = (B) => o.show = !1)
                  }, {
                    default: p(() => [
                      P(" 关闭 ")
                    ]),
                    _: 1
                  }),
                  f(w, {
                    type: "primary",
                    onClick: s
                  }, {
                    default: p(() => [
                      P(" 确定 ")
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
}, Ml = { class: "cursor-pointer h-full" }, ql = { class: "w-full h-full flex-center" }, Fl = {
  __name: "UserHandle",
  setup(e) {
    const t = ae(), n = O(null), r = $().env.VITE_APP_BASE_API, s = () => {
      if (t.userInfo && t.userInfo.headPic) {
        let l = t.userInfo.headPic;
        return r + wt.showImg({ id: l, token: t.token });
      } else
        return null;
    }, i = [
      // {
      //   label: '用户资料',
      //   key: 'profile',
      //   icon: () => renderIcon('user'),
      // },
      {
        label: "修改密码",
        key: "updatePwd",
        icon: () => Pe("user")
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
          t.logout(), $message.success("已退出登录");
        }
      }) : l === "updatePwd" && n.value.open();
    };
    return (l, u) => {
      const d = Co, g = ko, A = it;
      return h(), _("div", Ml, [
        f(A, {
          options: i,
          trigger: "click",
          onSelect: a
        }, {
          default: p(() => [
            v("div", ql, [
              f(d, {
                round: "",
                size: "large",
                src: s() || c(Ll)
              }, null, 8, ["src"]),
              f(g, {
                class: "pl-10 text-16",
                style: { "max-width": "96px" }
              }, {
                default: p(() => [
                  P(ne(c(t).name), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f(jl, {
          ref_key: "pwdRef",
          ref: n
        }, null, 512)
      ]);
    };
  }
}, Hl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Wl = /* @__PURE__ */ v("path", { d: "M11.528 18.645H8.471a1.09 1.09 0 0 1-1.09-1.09v-.732a1.091 1.091 0 0 0-.575-.957 5.438 5.438 0 0 1-.289-.167 1.094 1.094 0 0 0-1.117-.02l-.635.367a1.09 1.09 0 0 1-1.488-.4l-1.529-2.648a1.09 1.09 0 0 1 .4-1.489l.627-.362a1.087 1.087 0 0 0 .541-.977V9.827a1.091 1.091 0 0 0-.542-.976l-.626-.362A1.09 1.09 0 0 1 1.748 7l1.529-2.645a1.088 1.088 0 0 1 1.488-.4l.617.356A1.089 1.089 0 0 0 6.5 4.29c.1-.062.2-.121.307-.178a1.088 1.088 0 0 0 .574-.956v-.711a1.09 1.09 0 0 1 1.09-1.09h3.057a1.09 1.09 0 0 1 1.09 1.09v.711a1.088 1.088 0 0 0 .574.956c.1.057.206.116.307.178a1.086 1.086 0 0 0 1.116.022l.545-.314a1.111 1.111 0 0 1 1.563.356l1.528 2.647a1.089 1.089 0 0 1-.4 1.489l-.626.362a1.093 1.093 0 0 0-.542.976V10.171a1.087 1.087 0 0 0 .539.976l.554.32a1.111 1.111 0 0 1 .474 1.532l-1.528 2.648a1.091 1.091 0 0 1-1.489.4l-.635-.367a1.092 1.092 0 0 0-1.116.02 6.404 6.404 0 0 1-.29.167 1.091 1.091 0 0 0-.575.957v.732a1.09 1.09 0 0 1-1.089 1.089ZM9.856 17.26h.287a1.09 1.09 0 0 0 1.09-1.089v-.219a1.09 1.09 0 0 1 .74-1.032l.516-.175a1.068 1.068 0 0 0 .367-.211l.419-.367a1.092 1.092 0 0 1 1.262-.123l.19.11a1.09 1.09 0 0 0 1.488-.4l.144-.249a1.09 1.09 0 0 0-.4-1.489l-.859-.5.1-.487a5.4 5.4 0 0 0 0-2.073l-.1-.485.853-.493a1.09 1.09 0 0 0 .4-1.489l-.144-.248a1.088 1.088 0 0 0-1.488-.4l-.174.1a1.09 1.09 0 0 1-1.265-.126l-.423-.372a1.093 1.093 0 0 0-.37-.214l-.522-.177a1.089 1.089 0 0 1-.74-1.032v-.2a1.09 1.09 0 0 0-1.09-1.09H9.85a1.09 1.09 0 0 0-1.09 1.09v.2a1.088 1.088 0 0 1-.74 1.032l-.521.177a1.083 1.083 0 0 0-.37.214l-.424.372a1.089 1.089 0 0 1-1.264.126l-.174-.1a1.089 1.089 0 0 0-1.489.4l-.144.248a1.09 1.09 0 0 0 .4 1.489l.854.493-.1.485a5.369 5.369 0 0 0 0 2.073l.1.487-.859.5a1.09 1.09 0 0 0-.4 1.489l.144.249a1.091 1.091 0 0 0 1.489.4l.189-.11a1.091 1.091 0 0 1 1.262.123l.419.367a1.072 1.072 0 0 0 .368.211l.515.175a1.089 1.089 0 0 1 .74 1.032v.219a1.09 1.09 0 0 0 1.101 1.089Z" }, null, -1), zl = /* @__PURE__ */ v("path", { d: "M12.816 12.886c-3.424 2.589-7.226-.174-6.668-3.549a3.909 3.909 0 0 1 3.189-3.188c3.375-.558 6.137 3.244 3.549 6.667a.355.355 0 0 1-.07.07Zm-.915-4.859a2.744 2.744 0 0 0-3.874 3.876.369.369 0 0 0 .072.071 2.743 2.743 0 0 0 3.873-3.876.339.339 0 0 0-.071-.071Z" }, null, -1), Kl = [
  Wl,
  zl
];
function Xl(e, t) {
  return h(), _("svg", Hl, Kl);
}
const Zl = { render: Xl }, Gl = { class: "cursor-pointer w-40px h-full" }, Yl = {
  __name: "SettingButton",
  setup(e) {
    const t = $();
    return (n, o) => {
      const r = je;
      return h(), _("div", Gl, [
        f(r, null, {
          trigger: p(() => [
            v("div", {
              class: "w-full h-full flex-center",
              onClick: o[0] || (o[0] = (s) => c(t).setSettingDrawer(!0))
            }, [
              (h(), I(G(c(Zl)), { class: "w-20 h-20" }))
            ])
          ]),
          default: p(() => [
            P(" 设置 ")
          ]),
          _: 1
        })
      ]);
    };
  }
};
const $l = { class: "flex-1-hidden h-full px-10px pt-5px" }, eu = {
  __name: "HeaderMenu",
  setup(e) {
    const t = xe(), n = ae(), o = X(), r = De(), s = (a, l) => {
      Cn(l.url) ? window.open(l.url) : (r.addTag(l), t.push(l.url));
    }, i = (a) => o.menu.showIcon && a.svg ? Pe(a.svg) : "";
    return (a, l) => {
      const u = wn, d = To;
      return h(), _("div", $l, [
        f(d, {
          "x-scrollable": !0,
          class: "flex-1-hidden h-full",
          "content-class": "h-full"
        }, {
          default: p(() => [
            v("div", {
              class: "flex-y-center h-full",
              style: H({ justifyContent: c(o).menu.horizontalPosition })
            }, [
              f(u, {
                mode: "horizontal",
                "key-field": "url",
                "label-field": "menuName",
                value: c(n).activeMenu,
                options: c(n).menuList,
                inverted: c(o).header.inverted,
                "render-icon": i,
                "onUpdate:value": s
              }, null, 8, ["value", "options", "inverted"])
            ], 4)
          ]),
          _: 1
        })
      ]);
    };
  }
}, tu = /* @__PURE__ */ K(eu, [["__scopeId", "data-v-09eedb69"]]), $e = {
  login: (e, t) => S.post("/login", e, t),
  logout: (e) => S.post("/logout", e),
  captcha: (e) => S.get("/auth/captcha", e),
  getUser: (e) => S.post("/oauth/getUser", e),
  authorize: (e) => S.post("/oauth/authorize", e),
  getToken: (e) => S.post("/oauth/getToken", e),
  accessToken: (e) => S.post("/oauth/accessToken", e)
}, nu = {
  getUserPermission: (e) => S.post("/bbxPermission/getUserPermission", e)
}, ou = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "design-iconfont",
  viewBox: "0 0 20 20"
}, ru = /* @__PURE__ */ v("g", { fill: "currentColor" }, [
  /* @__PURE__ */ v("path", { d: "M14.681 18.652h-10.2a2.4 2.4 0 0 1-2.4-2.4v-12.5a2.4 2.4 0 0 1 2.4-2.4h10.2a2.4 2.4 0 0 1 2.4 2.4v.945a.833.833 0 1 1-1.666 0v-.945a.736.736 0 0 0-.736-.735h-10.2a.736.736 0 0 0-.735.735v12.5a.737.737 0 0 0 .735.736h10.2a.737.737 0 0 0 .736-.736V15.3a.833.833 0 1 1 1.666 0v.952a2.4 2.4 0 0 1-2.4 2.4Z" }),
  /* @__PURE__ */ v("path", { d: "M15.328 13.254a.834.834 0 0 1-.483-1.514l2.454-1.739-2.454-1.741a.834.834 0 0 1 .964-1.36l3.213 2.293a1.143 1.143 0 0 1 0 1.615l-.108.091-3.1 2.2a.826.826 0 0 1-.486.155Z" }),
  /* @__PURE__ */ v("path", { d: "M18.069 10.834h-7.156a.833.833 0 1 1 0-1.667h7.156a.833.833 0 0 1 0 1.667ZM7.238 15.659l-3.9 1.425V2.917l3.9 1.424a1.666 1.666 0 0 1 1.1 1.566v8.186a1.666 1.666 0 0 1-1.1 1.566Z" })
], -1), su = [
  ru
];
function iu(e, t) {
  return h(), _("svg", ou, su);
}
const au = { render: iu }, lu = { class: "cursor-pointer w-40px h-full" }, uu = {
  __name: "LogoutIcon",
  setup(e) {
    const t = ae(), n = () => {
      $dialog.info({
        title: "提示",
        content: "确认退出？",
        positiveText: "确定",
        negativeText: "关闭",
        onPositiveClick: async () => {
          await $e.logout(), t.logout(), $message.success("已退出登录");
        }
      });
    };
    return (o, r) => {
      const s = je;
      return h(), _("div", lu, [
        f(s, null, {
          trigger: p(() => [
            v("div", {
              class: "w-full h-full flex-center",
              onClick: n
            }, [
              (h(), I(G(c(au)), { class: "w-20 h-20" }))
            ])
          ]),
          default: p(() => [
            P(" 退出登录 ")
          ]),
          _: 1
        })
      ]);
    };
  }
};
const cu = (e) => (Le("data-v-70baaa9d"), e = e(), Ue(), e), du = { class: "flex px-30 justify-between items-center flex-1" }, hu = { class: "flex-1-hidden h-full pl-20" }, fu = /* @__PURE__ */ cu(() => /* @__PURE__ */ v("div", { class: "w-1 h-20 bg-#8996AF mx-10" }, null, -1)), pu = J({
  name: "NlHeaderBar"
}), gu = /* @__PURE__ */ Object.assign(pu, {
  setup(e) {
    const t = X(), n = O(t.themeColor), o = (i, a) => "rgba(" + parseInt("0x" + a.slice(1, 3)) + "," + parseInt("0x" + a.slice(3, 5)) + "," + parseInt("0x" + a.slice(5, 7)) + "," + i + ")", r = (i) => {
      n.value = o(0.06, i);
    };
    te(
      () => t.themeColor,
      (i) => {
        r(i);
      },
      {
        immediate: !0
      }
    ), te(
      () => t.layout.mode,
      (i) => {
        i === "horizontal" ? t.setHeaderHeight(100) : t.setHeaderHeight(60), t.cacheThemeSettings();
      }
    );
    const s = R(() => t.layout.mode === "horizontal");
    return (i, a) => {
      const l = W("sh-container");
      return h(), I(l, {
        class: "h-full",
        inverted: c(t).header.inverted
      }, {
        default: p(() => [
          v("div", {
            class: F(["layout_header h-full flex flex-col", { dark: c(t).darkMode }]),
            style: H({ "background-color": c(t).themeColor })
          }, [
            v("div", du, [
              f(ml),
              v("div", hu, [
                c(t).header.crumb.visible ? (h(), I(pl, { key: 0 })) : U("", !0)
              ]),
              v("div", {
                class: "flex items-center justify-end h-full text-20",
                style: H({ color: c(t).themeColor })
              }, [
                f(c(Cl), { class: "item_box" }),
                f(c(Yl), { class: "item_box" }),
                fu,
                f(c(Fl), { class: "mx-10" }),
                f(c(uu), { class: "item_box" })
              ], 4)
            ]),
            c(s) ? (h(), _("div", {
              key: 0,
              class: F(["h-40 flex-center px-30", { dark: c(t).darkMode }]),
              style: H({ "background-color": n.value })
            }, [
              f(c(tu))
            ], 6)) : U("", !0)
          ], 6)
        ]),
        _: 1
      }, 8, ["inverted"]);
    };
  }
}), mu = /* @__PURE__ */ K(gu, [["__scopeId", "data-v-70baaa9d"]]);
function vu(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const Hn = /\s*,(?![^(]*\))\s*/g, Au = /\s+/g;
function yu(e, t) {
  const n = [];
  return t.split(Hn).forEach((o) => {
    let r = vu(o);
    if (r) {
      if (r === 1) {
        e.forEach((i) => {
          n.push(o.replace("&", i));
        });
        return;
      }
    } else {
      e.forEach((i) => {
        n.push((i && i + " ") + o);
      });
      return;
    }
    let s = [o];
    for (; r--; ) {
      const i = [];
      s.forEach((a) => {
        e.forEach((l) => {
          i.push(a.replace("&", l));
        });
      }), s = i;
    }
    s.forEach((i) => n.push(i));
  }), n;
}
function bu(e, t) {
  const n = [];
  return t.split(Hn).forEach((o) => {
    e.forEach((r) => {
      n.push((r && r + " ") + o);
    });
  }), n;
}
function wu(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), n && (n.includes("&") ? t = yu(t, n) : t = bu(t, n));
  }), t.join(", ").replace(Au, " ");
}
function Yt(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Rt(e) {
  return document.querySelector(`style[cssr-id="${e}"]`);
}
function Su(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Ze(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const _u = /[A-Z]/g;
function Wn(e) {
  return e.replace(_u, (t) => "-" + t.toLowerCase());
}
function xu(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${Wn(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Eu(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function $t(e, t, n, o) {
  if (!t)
    return "";
  const r = Eu(t, n, o);
  if (!r)
    return "";
  if (typeof r == "string")
    return `${e} {
${r}
}`;
  const s = Object.keys(r);
  if (s.length === 0)
    return n.config.keepEmptyBlock ? e + ` {
}` : "";
  const i = e ? [e + " {"] : [];
  return s.forEach((a) => {
    const l = r[a];
    if (a === "raw") {
      i.push(
        `
` + l + `
`
      );
      return;
    }
    a = Wn(a), l != null && i.push(`  ${a}${xu(l)}`);
  }), e && i.push("}"), i.join(`
`);
}
function xt(e, t, n) {
  !e || e.forEach((o) => {
    if (Array.isArray(o))
      xt(o, t, n);
    else if (typeof o == "function") {
      const r = o(t);
      Array.isArray(r) ? xt(r, t, n) : r && n(r);
    } else
      o && n(o);
  });
}
function zn(e, t, n, o, r, s) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    Ze(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const d = i({
      context: o.context,
      props: r
    });
    Ze(d) ? a = d : t.push(d);
  } else if (i.before && i.before(o.context), !i.$ || typeof i.$ == "string")
    Ze(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const d = i.$({
      context: o.context,
      props: r
    });
    Ze(d) ? a = d : t.push(d);
  }
  const l = wu(t), u = $t(l, e.props, o, r);
  a ? (n.push(`${a} {`), s && u && s.insertRule(`${a} {
${u}
}
`)) : (s && u && s.insertRule(u), !s && u.length && n.push(u)), e.children && xt(
    e.children,
    {
      context: o.context,
      props: r
    },
    (d) => {
      if (typeof d == "string") {
        const g = $t(l, { raw: d }, o, r);
        s ? s.insertRule(g) : n.push(g);
      } else
        zn(d, t, n, o, r, s);
    }
  ), t.pop(), a && n.push("}"), i && i.after && i.after(o.context);
}
function Kn(e, t, n, o = !1) {
  const r = [];
  return zn(e, [], r, t, n, o ? e.instance.__styleSheet : void 0), o ? "" : r.join(`

`);
}
function Iu(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Cu(e, t, n) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(Yt), t.els = [];
  else {
    const r = Rt(n);
    r && o.includes(r) && (Yt(r), t.els = o.filter((s) => s !== r));
  }
}
function en(e, t) {
  e.push(t);
}
function ku(e, t, n, o, r, s, i, a, l) {
  if (s && !l) {
    if (n === void 0) {
      console.error("[css-render/mount]: `id` is required in `silent` mode.");
      return;
    }
    const A = window.__cssrContext;
    A[n] || (A[n] = !0, Kn(t, e, o, s));
    return;
  }
  let u;
  if (n === void 0 && (u = t.render(o), n = Iu(u)), l) {
    l.adapter(n, u ?? t.render(o));
    return;
  }
  const d = Rt(n);
  if (d !== null && !i)
    return d;
  const g = d ?? Su(n);
  if (u === void 0 && (u = t.render(o)), g.textContent = u, d !== null)
    return d;
  if (a) {
    const A = document.head.querySelector(`meta[name="${a}"]`);
    if (A)
      return document.head.insertBefore(g, A), en(t.els, g), g;
  }
  return r ? document.head.insertBefore(g, document.head.querySelector("style, link")) : document.head.appendChild(g), en(t.els, g), g;
}
function Tu(e) {
  return Kn(this, this.instance, e);
}
function Bu(e = {}) {
  const { id: t, ssr: n, props: o, head: r = !1, silent: s = !1, force: i = !1, anchorMetaName: a } = e;
  return ku(this.instance, this, t, o, r, s, i, a, n);
}
function Ru(e = {}) {
  const { id: t } = e;
  Cu(this.instance, this, t);
}
const Ge = function(e, t, n, o) {
  return {
    instance: e,
    $: t,
    props: n,
    children: o,
    els: [],
    render: Tu,
    mount: Bu,
    unmount: Ru
  };
}, Du = function(e, t, n, o) {
  return Array.isArray(t) ? Ge(e, { $: null }, null, t) : Array.isArray(n) ? Ge(e, t, null, n) : Array.isArray(o) ? Ge(e, t, n, o) : Ge(e, t, n, null);
};
function Qe(e = {}) {
  let t = null;
  const n = {
    c: (...o) => Du(n, ...o),
    use: (o, ...r) => o.install(n, ...r),
    find: Rt,
    context: {},
    config: e,
    get __styleSheet() {
      if (!t) {
        const o = document.createElement("style");
        return document.head.appendChild(o), t = document.styleSheets[document.styleSheets.length - 1], t;
      }
      return t;
    }
  };
  return n;
}
const Qu = J({ name: "LayoutHeader" }), Nu = /* @__PURE__ */ Object.assign(Qu, {
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
  setup(e) {
    const t = e, n = R(() => {
      const {
        fixed: s,
        zIndex: i,
        minWidth: a,
        height: l,
        paddingLeft: u,
        transitionDuration: d,
        transitionTimingFunction: g
      } = t, A = s ? "fixed" : "static", E = t.useMinWidthLayout ? `min-width:${a}px;` : "";
      return `position:${A};z-index:${i};${E}height:${l}px;padding-left:${u}px;transition-duration:${d}ms;transition-timing-function:${g};`;
    }), { c: o } = Qe(), r = o(".admin-layout__header", {
      left: 0,
      top: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return r.render(), r.mount(), (s, i) => (h(), _(
      "header",
      {
        class: "admin-layout__header",
        style: H(c(n))
      },
      [L(s.$slots, "default")],
      4
    ));
  }
}), Ou = J({ name: "LayoutTab" }), Ju = /* @__PURE__ */ Object.assign(Ou, {
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
  setup(e) {
    const t = e, n = R(() => {
      const {
        fixed: s,
        top: i,
        zIndex: a,
        minWidth: l,
        height: u,
        paddingLeft: d,
        transitionDuration: g,
        transitionTimingFunction: A
      } = t, E = s ? "fixed" : "static", w = t.useMinWidthLayout ? `min-width: ${l}px;` : "";
      return `position:${E};top:${i}px;z-index:${a};${w}height:${u}px;padding-left:${d}px;transition-duration:${g}ms;transition-timing-function:${A};`;
    }), { c: o } = Qe(), r = o(".admin-layout__tab", {
      left: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return r.render(), r.mount(), (s, i) => (h(), _(
      "div",
      {
        class: "admin-layout__tab",
        style: H(c(n))
      },
      [L(s.$slots, "default")],
      4
    ));
  }
}), Pu = J({ name: "LayoutSider" }), Lu = /* @__PURE__ */ Object.assign(Pu, {
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
  setup(e) {
    const t = e, n = R(() => {
      const { zIndex: s, width: i, paddingTop: a, transitionDuration: l, transitionTimingFunction: u } = t;
      return `z-index:${s};width:${i}px;padding-top:${a}px;transition-duration:${l}ms;transition-timing-function:${u};`;
    }), { c: o } = Qe(), r = o(".admin-layout__sider", {
      position: "fixed",
      left: 0,
      top: 0,
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      transitionProperty: "all"
    });
    return r.render(), r.mount(), (s, i) => (h(), _(
      "aside",
      {
        class: "admin-layout__sider",
        style: H(c(n))
      },
      [L(s.$slots, "default")],
      4
    ));
  }
}), Uu = J({ name: "LayoutContent" }), Vu = /* @__PURE__ */ Object.assign(Uu, {
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
  setup(e) {
    const t = e, n = R(() => {
      const {
        paddingTop: s,
        paddingBottom: i,
        paddingLeft: a,
        transitionDuration: l,
        transitionTimingFunction: u
      } = t, d = `overflow:${t.overflowHidden ? "hidden" : "visible"};`;
      return `padding-top:${s}px;padding-bottom:${i}px;padding-left:${a}px;${d}transition-duration:${l}ms;transition-timing-function:${u};`;
    }), { c: o } = Qe(), r = o(".admin-layout__content", {
      flexGrow: 1,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return r.render(), r.mount(), (s, i) => (h(), _(
      "main",
      {
        style: H(c(n)),
        class: "admin-layout__content"
      },
      [L(s.$slots, "default")],
      4
    ));
  }
}), ju = J({ name: "LayoutFooter" }), Mu = /* @__PURE__ */ Object.assign(ju, {
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
  setup(e) {
    const t = e, n = R(() => {
      const {
        fixed: s,
        zIndex: i,
        minWidth: a,
        height: l,
        paddingLeft: u,
        transitionDuration: d,
        transitionTimingFunction: g
      } = t, A = s ? "fixed" : "static", E = t.useMinWidthLayout ? `min-width:${a}px;` : "";
      return `position:${A};z-index:${i};${E}height:${l}px;padding-left:${u}px;transition-duration:${d}ms;transition-timing-function:${g};`;
    }), { c: o } = Qe(), r = o(".admin-layout__footer", {
      left: 0,
      bottom: 0,
      flexShrink: 0,
      boxSizing: "border-box",
      width: "100%",
      transitionProperty: "padding-left"
    });
    return r.render(), r.mount(), (s, i) => (h(), _(
      "footer",
      {
        class: "admin-layout__footer",
        style: H(c(n))
      },
      [L(s.$slots, "default")],
      4
    ));
  }
});
function qu(e) {
  const t = O(0), n = R(() => `transform: translateX(${-t.value}px);`);
  let o = !1;
  function r(d) {
    t.value = d;
  }
  function s() {
    var d;
    const g = ((d = document.scrollingElement) == null ? void 0 : d.scrollLeft) || 0;
    r(g);
  }
  function i() {
    s();
  }
  function a() {
    document.addEventListener("scroll", s);
  }
  function l() {
    !o || document.removeEventListener("scroll", s);
  }
  function u() {
    i(), a(), o = !0;
  }
  return te(
    e,
    (d) => {
      d ? u() : l();
    },
    { immediate: !0 }
  ), tn(() => {
    l();
  }), n;
}
const Fu = J({ name: "AdminLayout" }), Dt = /* @__PURE__ */ Object.assign(Fu, {
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
  setup(e, { emit: t }) {
    const n = e, o = R(() => n.useMinWidthLayout ? `min-width:${n.minWidth}px;` : ""), r = R(() => n.useMinWidthLayout && (n.fixedHeaderAndTab || n.fixedFooter)), s = qu(r), i = R(() => n.fixedHeaderAndTab ? s.value : ""), a = R(() => n.fixedFooter ? s.value : ""), l = R(() => {
      const { transitionDuration: V, transitionTimingFunction: M } = n;
      return {
        transitionDuration: V,
        transitionTimingFunction: M
      };
    }), u = R(() => n.mode === "vertical"), d = 1001, g = 999, A = R(() => n.isMobile || u.value ? 1003 : 1e3), E = 998, w = R({
      get() {
        return n.siderCollapse;
      },
      set(V) {
        t("update:sider-collapse", V);
      }
    });
    function y() {
      w.value = !0;
    }
    const k = R(() => n.isMobile && !w.value), B = R(() => {
      const { transitionDuration: V, transitionTimingFunction: M } = n;
      return `background-color:${n.maskBg};transition-duration:${V}ms;transition-timing-function:${M};`;
    }), T = R(() => {
      const { siderWidth: V, siderCollapsedWidth: M } = n, be = n.isMobile ? 0 : M, we = w.value ? be : V;
      return n.siderVisible ? we : 0;
    }), b = R(() => n.isMobile ? 0 : T.value), x = R(() => u.value ? b.value : 0), D = R(() => !n.isMobile && !u.value && n.headerVisible ? n.headerHeight : 0), C = R(() => {
      let V = 0;
      return n.fixedHeaderAndTab && (n.headerVisible && (V += n.headerHeight), n.tabVisible && (V += n.tabHeight)), V;
    }), z = R(() => n.fixedFooter && n.footerVisible ? n.footerHeight : 0), { c: oe } = Qe(), se = oe(
      ".admin-layout",
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      [
        oe("&__sider-mask", {
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
    return se.render(), se.mount(), (V, M) => (h(), _(
      "div",
      {
        class: "admin-layout",
        style: H(c(o))
      },
      [
        e.headerVisible ? (h(), I(
          c(Nu),
          Z({ key: 0 }, c(l), {
            fixed: e.fixedHeaderAndTab,
            "z-index": d,
            "min-width": e.minWidth,
            height: e.headerHeight,
            "padding-left": c(x),
            style: c(i)
          }),
          {
            default: p(() => [L(V.$slots, "header")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "height", "padding-left", "style"]
        )) : U("", !0),
        e.tabVisible ? (h(), I(
          c(Ju),
          Z({ key: 1 }, c(l), {
            fixed: e.fixedHeaderAndTab,
            "z-index": g,
            "min-width": e.minWidth,
            top: e.headerHeight,
            height: e.tabHeight,
            "padding-left": c(b),
            style: c(i)
          }),
          {
            default: p(() => [L(V.$slots, "tab")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "top", "height", "padding-left", "style"]
        )) : U("", !0),
        e.siderVisible ? (h(), I(
          c(Lu),
          Z({ key: 2 }, c(l), {
            "z-index": c(A),
            width: c(T),
            "padding-top": c(D)
          }),
          {
            default: p(() => [L(V.$slots, "sider")]),
            _: 3
          },
          16,
          ["z-index", "width", "padding-top"]
        )) : U("", !0),
        c(k) ? (h(), _(
          "div",
          {
            key: 3,
            class: "admin-layout__sider-mask",
            style: H(c(B)),
            onClick: y
          },
          null,
          4
        )) : U("", !0),
        f(
          c(Vu),
          Z(c(l), {
            "padding-top": c(C),
            "padding-bottom": c(z),
            "padding-left": c(b),
            "overflow-hidden": e.addMainOverflowHidden
          }),
          {
            default: p(() => [L(V.$slots, "default")]),
            _: 3
          },
          16,
          ["padding-top", "padding-bottom", "padding-left", "overflow-hidden"]
        ),
        e.footerVisible ? (h(), I(
          c(Mu),
          Z({ key: 4 }, c(l), {
            fixed: e.fixedFooter,
            "z-index": E,
            "min-width": e.minWidth,
            height: e.footerHeight,
            "padding-left": c(b),
            style: c(a)
          }),
          {
            default: p(() => [L(V.$slots, "footer")]),
            _: 3
          },
          16,
          ["fixed", "min-width", "height", "padding-left", "style"]
        )) : U("", !0)
      ],
      4
    ));
  }
});
function Hu(e) {
  e.component("AdminLayout", Dt);
}
Dt.install = Hu;
const Wu = J({
  name: "ShLayoutAdmin"
}), zu = /* @__PURE__ */ Object.assign(Wu, {
  props: {
    logo: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    no("logo", e.logo);
    const n = $(), o = X(), r = ae(), s = De(), i = Sn(), a = xe(), l = O(!1), u = O(!1), d = (y) => {
      l.value = y;
    }, g = R(() => o.layout.mode !== "horizontal");
    te(
      () => i.path,
      (y) => {
        r.activeMenu = y;
      },
      { immediate: !0 }
    );
    const A = async () => {
      var B, T;
      u.value = !0;
      const { code: y, data: k } = await nu.getUserPermission();
      u.value = !1, y === 0 && (r.setUserInfo({
        menuList: ((B = k == null ? void 0 : k.permission) == null ? void 0 : B.menuTrees) || [],
        resourceCodes: ((T = k == null ? void 0 : k.permission) == null ? void 0 : T.resourceCodes) || [],
        ...(k == null ? void 0 : k.userInfo) || {}
      }), s.removeOther(), E(), Qt());
    }, E = () => {
      r.menuList && r.menuList.length ? w(r.menuList) : a.push("/405");
    }, w = (y) => {
      y[0].children ? w(y[0].children) : (a.push(y[0].url), s.addTag(y[0]));
    };
    return r.userId ? i.path === "/" && E() : A(), (y, k) => (h(), _(Y, null, [
      f(c(Dt), {
        class: "overflow-auto",
        mode: c(o).layout.mode,
        "fixed-header-and-tab": c(o).fixedHeaderAndTab,
        "header-height": c(o).header.height,
        "tab-visible": c(o).tab.visible,
        "tab-height": c(o).tab.height,
        "sider-width": c(o).sider.width,
        "sider-visible": c(g),
        "sider-collapsed-width": c(o).sider.collapsedWidth,
        "sider-collapse": c(n).collapsed,
        "footer-visible": c(o).footer.show,
        "add-main-overflow-hidden": l.value
      }, {
        header: p(() => [
          f(c(mu))
        ]),
        tab: p(() => [
          f(c(ul))
        ]),
        sider: p(() => [
          f(c(cc))
        ]),
        default: p(() => [
          f(c(Ra), { onHideMainOverflow: d })
        ]),
        _: 1
      }, 8, ["mode", "fixed-header-and-tab", "header-height", "tab-visible", "tab-height", "sider-width", "sider-visible", "sider-collapsed-width", "sider-collapse", "footer-visible", "add-main-overflow-hidden"]),
      f(c(ac))
    ], 64));
  }
}), md = /* @__PURE__ */ K(zu, [["__scopeId", "data-v-e32ff85f"]]), Ku = {
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
  setup(e) {
    const t = e, n = ["#ffffff", "#fff", "rgb(255,255,255)"], o = R(() => n.includes(t.color));
    return (r, s) => {
      const i = W("sh-icon");
      return h(), _("div", {
        class: "flex-center w-20px h-20px rounded-2px shadow cursor-pointer",
        style: H({ backgroundColor: e.color })
      }, [
        e.checked ? (h(), I(i, {
          key: 0,
          name: "check",
          class: F([e.iconClass, c(o) ? "text-gray-700" : "text-white"])
        }, null, 8, ["class"])) : U("", !0)
      ], 4);
    };
  }
}, Xu = {
  __name: "index",
  setup(e) {
    const t = X();
    return (n, o) => {
      const r = Be, s = Bo, i = An, a = Ro, l = Ae;
      return h(), _("div", null, [
        f(r, { "title-placement": "center" }, {
          default: p(() => [
            P("系统主题")
          ]),
          _: 1
        }),
        f(i, {
          cols: 8,
          "x-gap": 8,
          "y-gap": 12
        }, {
          default: p(() => [
            (h(!0), _(Y, null, ue(c(rs), (u) => (h(), I(s, {
              key: u,
              class: "flex-x-center"
            }, {
              default: p(() => [
                f(Ku, {
                  color: u,
                  checked: u === c(t).themeColor,
                  onClick: (d) => c(t).setThemeColor(u)
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
          default: p(() => [
            f(a, {
              value: c(t).themeColor,
              "show-alpha": !1,
              onUpdateValue: c(t).setThemeColor
            }, null, 8, ["value", "onUpdateValue"])
          ]),
          _: 1
        })
      ]);
    };
  }
}, Zu = { class: "flex-y-center justify-between" }, de = {
  __name: "SettingMenu",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (h(), _("div", Zu, [
      v("span", null, ne(e.label), 1),
      L(t.$slots, "default")
    ]));
  }
};
const Gu = {
  __name: "DarkMode",
  setup(e) {
    const t = X();
    return (n, o) => {
      const r = Be, s = rt;
      return h(), _("div", null, [
        f(r, { "title-placement": "center" }, {
          default: p(() => [
            P("主题模式 ")
          ]),
          _: 1
        }),
        f(de, { label: "深色主题" }, {
          default: p(() => [
            f(s, {
              value: c(t).darkMode,
              "onUpdate:value": c(t).setDarkTheme
            }, {
              checked: p(() => [
                (h(), I(G(c(Dl))))
              ]),
              unchecked: p(() => [
                (h(), I(G(c(Pl))))
              ]),
              _: 1
            }, 8, ["value", "onUpdate:value"])
          ]),
          _: 1
        })
      ]);
    };
  }
}, Yu = /* @__PURE__ */ K(Gu, [["__scopeId", "data-v-02bc8b2e"]]), $u = {
  __name: "PageView",
  setup(e) {
    const t = X();
    return (n, o) => {
      const r = Be, s = rt, i = Ae;
      return h(), _("div", null, [
        f(r, { "title-placement": "center" }, {
          default: p(() => [
            P("界面展示 ")
          ]),
          _: 1
        }),
        f(i, {
          vertical: "",
          size: "large"
        }, {
          default: p(() => [
            f(de, { label: "面包屑" }, {
              default: p(() => [
                f(s, {
                  value: c(t).header.crumb.visible,
                  "onUpdate:value": c(t).setHeaderCrumbVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "面包屑图标" }, {
              default: p(() => [
                f(s, {
                  value: c(t).header.crumb.showIcon,
                  "onUpdate:value": c(t).setHeaderCrumbIconVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "菜单图标" }, {
              default: p(() => [
                f(s, {
                  value: c(t).menu.showIcon,
                  "onUpdate:value": c(t).setMenuIconVisible
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "多页签" }, {
              default: p(() => [
                f(s, {
                  value: c(t).tab.visible,
                  "onUpdate:value": c(t).setTabVisible
                }, null, 8, ["value", "onUpdate:value"])
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
const ec = { class: "layout-checkbox__shadow relative w-56px h-48px bg-white rounded-4px overflow-hidden" }, tc = {
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
  setup(e) {
    const t = e, n = {
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
    }, o = R(() => n[t.mode]);
    return (r, s) => {
      const i = bn;
      return h(), _("div", {
        class: F(["border-2px rounded-6px cursor-pointer hover:border-primary", [e.checked ? "border-primary" : "border-transparent"]])
      }, [
        f(i, {
          placement: c(o).placement,
          trigger: "hover"
        }, {
          trigger: p(() => [
            v("div", ec, [
              v("div", {
                class: F(["absolute-lt bg-[#273352]", c(o).menuClass])
              }, null, 2),
              v("div", {
                class: F(["absolute-rb bg-[#f0f2f5]", c(o).mainClass])
              }, null, 2)
            ])
          ]),
          default: p(() => [
            v("span", null, ne(e.label), 1)
          ]),
          _: 1
        }, 8, ["placement"])
      ], 2);
    };
  }
}, nc = /* @__PURE__ */ K(tc, [["__scopeId", "data-v-9db8db2a"]]), oc = {
  __name: "index",
  setup(e) {
    const t = X(), n = (o) => {
      t.setLayoutMode(o.value);
    };
    return (o, r) => {
      const s = Be, i = Ae;
      return h(), _(Y, null, [
        f(s, { "title-placement": "center" }, {
          default: p(() => [
            P("布局模式")
          ]),
          _: 1
        }),
        f(i, { justify: "center" }, {
          default: p(() => [
            (h(!0), _(Y, null, ue(c(t).layout.modeList, (a) => (h(), I(nc, {
              key: a.value,
              mode: a.value,
              label: a.label,
              checked: a.value === c(t).layout.mode,
              onClick: (l) => n(a)
            }, null, 8, ["mode", "label", "checked", "onClick"]))), 128))
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, rc = {
  __name: "PageFunc",
  setup(e) {
    const t = X();
    return (n, o) => {
      const r = Be, s = rt, i = Do, a = Ae;
      return h(), _(Y, null, [
        f(r, { "title-placement": "center" }, {
          default: p(() => [
            P("界面功能")
          ]),
          _: 1
        }),
        f(a, {
          vertical: "",
          size: "large"
        }, {
          default: p(() => [
            f(de, { label: "侧边栏反转色" }, {
              default: p(() => [
                f(s, {
                  value: c(t).sider.inverted,
                  "onUpdate:value": c(t).setSiderInverted
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "头部反转色" }, {
              default: p(() => [
                f(s, {
                  value: c(t).header.inverted,
                  "onUpdate:value": c(t).setHeaderInverted
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "头部高度" }, {
              default: p(() => [
                f(i, {
                  class: "w-120px",
                  size: "small",
                  value: c(t).header.height,
                  step: 1,
                  "onUpdate:value": c(t).setHeaderHeight
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "多页签高度" }, {
              default: p(() => [
                f(i, {
                  class: "w-120px",
                  size: "small",
                  value: c(t).tab.height,
                  step: 1,
                  "onUpdate:value": c(t).setTabHeight
                }, null, 8, ["value", "onUpdate:value"])
              ]),
              _: 1
            }),
            f(de, { label: "侧边栏展开宽度" }, {
              default: p(() => [
                f(i, {
                  class: "w-120px",
                  size: "small",
                  value: c(t).sider.width,
                  step: 10,
                  "onUpdate:value": c(t).setSiderWidth
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
}, sc = {
  __name: "ThemeConfig",
  setup(e) {
    const t = X(), n = $();
    function o() {
      t.resetThemeStore(), n.setSettingDrawer(!1), $message.success("已重置配置！");
    }
    return (r, s) => {
      const i = Be, a = pe, l = Ae;
      return h(), _(Y, null, [
        f(i, { "title-placement": "center" }, {
          default: p(() => [
            P("主题配置")
          ]),
          _: 1
        }),
        f(l, { vertical: "" }, {
          default: p(() => [
            f(a, {
              type: "warning",
              block: !0,
              onClick: o
            }, {
              default: p(() => [
                P("重置当前配置")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, ic = J({
  name: "NlSettingDrawer"
}), ac = /* @__PURE__ */ Object.assign(ic, {
  setup(e) {
    const t = $(), n = X();
    return (o, r) => {
      const s = Qo, i = No;
      return h(), I(i, {
        show: c(t).settingDrawerVisible,
        "display-directive": "show",
        width: 330,
        onMaskClick: r[0] || (r[0] = (a) => c(t).setSettingDrawer(!1)),
        onAfterLeave: r[1] || (r[1] = (a) => c(n).cacheThemeSettings())
      }, {
        default: p(() => [
          f(s, {
            title: "主题配置",
            "native-scrollbar": !1
          }, {
            default: p(() => [
              f(c(Yu)),
              f(c(oc)),
              f(c(Xu)),
              f(c(rc)),
              f(c($u)),
              f(c(sc))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
}), lc = { class: "h-full overflow-auto" }, uc = { class: "h-36 text-right cursor-pointer text-#c0c7d4 pr-10 pt-10 text-16" }, cc = {
  __name: "index",
  setup(e) {
    const t = xe(), n = $(), o = ae(), r = De(), s = X(), i = (u) => u.svg && s.menu.showIcon ? Pe(u.svg) : Pe("menu-defaultMenu"), a = () => re(Tt), l = (u, d) => {
      Cn(d.url) ? window.open(d.url) : (r.addTag(d), t.push(d.url));
    };
    return (u, d) => {
      const g = W("sh-icon"), A = wn, E = W("sh-container");
      return h(), I(E, {
        class: "shadow-xl h-full relative",
        inverted: c(s).sider.inverted
      }, {
        default: p(() => [
          v("div", lc, [
            v("div", uc, [
              f(g, {
                name: "directory",
                class: F([{ "rotate-180": c(n).collapsed }, "leading-36"]),
                onClick: d[0] || (d[0] = (w) => c(n).collapsed = !c(n).collapsed)
              }, null, 8, ["class"])
            ]),
            f(A, {
              value: c(o).activeMenu,
              collapsed: c(n).collapsed,
              "collapsed-width": c(s).sider.collapsedWidth,
              "collapsed-icon-size": 22,
              options: c(o).menuList,
              "key-field": "url",
              "label-field": "menuName",
              accordion: "",
              "render-icon": i,
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
const lt = (e) => (Le("data-v-972f52a7"), e = e(), Ue(), e), dc = { class: "slide-verify" }, hc = {
  class: "title text-32 font-700 h-full mr-20 mb-35",
  style: { color: "var(--primary-color)" }
}, fc = /* @__PURE__ */ lt(() => /* @__PURE__ */ v("span", null, "安全验证", -1)), pc = { class: "text-20 text-[#515E78] absolute top-12 right-0" }, gc = /* @__PURE__ */ lt(() => /* @__PURE__ */ v("span", null, "刷新验证码", -1)), mc = /* @__PURE__ */ lt(() => /* @__PURE__ */ v("span", null, "关闭验证码", -1)), vc = { class: "sliding-pictures flex-center mb-42" }, Ac = /* @__PURE__ */ lt(() => /* @__PURE__ */ v("div", { class: "operation" }, [
  /* @__PURE__ */ v("span", { class: "text" }, "请完成安全校验"),
  /* @__PURE__ */ v("i", { class: "ri:close-fill" })
], -1)), yc = { class: "vimg" }, bc = ["src"], wc = ["src"], Sc = { class: "slider" }, _c = ["onMousedown"], xc = {
  __name: "SlideVerify",
  props: {
    isRemember: Boolean,
    loginInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { expose: t }) {
    const n = e, o = xe(), r = De(), s = ae(), a = $().env.VITE_APP_RSA_LOGIN, l = ce({
      show: !1,
      tips: "",
      timestamp: "",
      verifyError: !1,
      loading: !1,
      dragTime: null
    }), u = ce({
      imgSrc: "",
      imgBlockSrc: "",
      yHeight: "",
      imgCodeId: ""
    });
    let d = null;
    const g = async () => {
      l.loading = !0;
      const { code: T, data: b } = await $e.captcha();
      T === 0 && (u.imgBlockSrc = "data:image/png;base64," + b.smallImage, u.imgSrc = "data:image/png;base64," + b.bigImage, u.yHeight = b.yHeight, u.imgCodeId = b.imgCodeId, d.style.left = "0px"), l.loading = !1;
    }, A = (T) => {
      l.dragTime = new Date();
      const b = T.target, x = { x: T.x, y: T.y };
      let D = 0;
      const C = (oe) => {
        if (D = Math.round(oe.x - x.x), D >= 237)
          return D = 237, !1;
        if (D <= 0)
          return D = 0, !1;
        b.style.left = D + "px", d.style.left = D + "px";
      }, z = () => {
        document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", z), b.style.left = "", w(D);
      };
      document.addEventListener("mousemove", C), document.addEventListener("mouseup", z);
    }, E = (T) => Vr(JSON.stringify(T)), w = async (T) => {
      const b = {
        ...n.loginInfo,
        imgCodeId: u.imgCodeId,
        moveLength: T
      };
      if (a && a === "true") {
        const x = JSON.parse(JSON.stringify(b)), D = await $e.login(E(x), {
          headers: {
            "Content-Type": "text/plain"
          }
        });
        try {
          const { code: C, msg: z, data: oe } = JSON.parse(jr(D));
          y(C, z, oe);
        } catch {
          $message.error("未知错误");
        }
      } else {
        const { code: x, msg: D, data: C } = await $e.login(b);
        y(x, D, C);
      }
    }, y = (T, b, x) => {
      T === 0 ? (l.timestamp = `校验成功，用时${((new Date() - l.dragTime) / 1e3).toFixed(1)}s`, l.tips = "正在登录...", setTimeout(() => {
        $message.success("登录成功"), s.setToken(x), s.removeUserInfo(), r.removeOther(), o.push("/"), n.isRemember ? Te.set("loginInfo", n.loginInfo) : Te.remove("loginInfo");
      }, 1e3)) : T === 1 ? (l.tips = "校验错误,请重新校验", l.verifyError = !0, g()) : ($message.error(b), l.verifyError = !1, l.show = !1);
    }, k = () => {
      l.show = !0, l.tips = "拖动滑块完成上方拼图", l.timestamp = "", l.verifyError = !1, et(() => {
        d = document.querySelector("#sliderBlock"), g();
      });
    }, B = () => {
      l.show = !1;
    };
    return t({
      open: k
    }), (T, b) => {
      const x = je, D = Ve, C = It, z = Oo;
      return h(), I(x, {
        width: 420,
        trigger: "manual",
        raw: "",
        show: l.show,
        placement: "left",
        "show-arrow": !1
      }, {
        trigger: p(() => [
          v("div", null, [
            L(T.$slots, "default", {}, void 0, !0)
          ])
        ]),
        default: p(() => [
          f(z, { class: "container bg-[#fff] dark:bg-[#101014]" }, {
            default: p(() => [
              f(C, { tag: "div" }, {
                default: p(() => [
                  f(tt, { name: "el-fade-in-linear " }, {
                    default: p(() => [
                      v("div", dc, [
                        v("div", hc, [
                          fc,
                          v("span", pc, [
                            f(x, {
                              trigger: "hover",
                              "show-arrow": !1
                            }, {
                              trigger: p(() => [
                                (h(), I(G(c(Bt)), {
                                  class: "svg-icon w-28 h-28 cursor-pointer",
                                  onClick: k
                                }))
                              ]),
                              default: p(() => [
                                gc
                              ]),
                              _: 1
                            }),
                            f(x, {
                              trigger: "hover",
                              "show-arrow": !1
                            }, {
                              trigger: p(() => [
                                (h(), I(G(c(Fn)), {
                                  class: "w-28 h-28 ml-8 cursor-pointer",
                                  onClick: B
                                }))
                              ]),
                              default: p(() => [
                                mc
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        v("div", vc, [
                          v("div", null, [
                            Ac,
                            f(D, {
                              show: l.loading
                            }, {
                              default: p(() => [
                                v("div", yc, [
                                  v("img", {
                                    id: "sliderBlock",
                                    src: u.imgBlockSrc,
                                    class: "slider-block",
                                    style: H({ top: `${u.yHeight}px` })
                                  }, null, 12, bc),
                                  v("img", {
                                    id: "codeImg",
                                    src: u.imgSrc,
                                    class: "slider-img"
                                  }, null, 8, wc)
                                ])
                              ]),
                              _: 1
                            }, 8, ["show"]),
                            v("div", Sc, [
                              f(tt, { name: "el-zoom-in-bottom" }, {
                                default: p(() => [
                                  an(v("p", { class: "verify-success" }, ne(l.timestamp), 513), [
                                    [ln, l.timestamp]
                                  ])
                                ]),
                                _: 1
                              }),
                              v("div", {
                                class: F(["track", { "verify-error": l.verifyError }])
                              }, ne(l.tips), 3),
                              v("div", {
                                class: "button cursor-pointer",
                                onMousedown: un(A, ["prevent"])
                              }, null, 40, _c)
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
}, Ec = /* @__PURE__ */ K(xc, [["__scopeId", "data-v-972f52a7"]]);
const Xn = (e) => (Le("data-v-d6f3045d"), e = e(), Ue(), e), Ic = { class: "w-420 bg-#fff sh-login-box rounded-10 py-30 px-30" }, Cc = /* @__PURE__ */ Xn(() => /* @__PURE__ */ v("span", null, "用户登录", -1)), kc = { class: "mb-60 flex justify-between" }, Tc = /* @__PURE__ */ Xn(() => /* @__PURE__ */ v("br", null, null, -1)), Bc = {
  __name: "index",
  setup(e) {
    const t = O(null), n = ce({
      loginName: "",
      password: ""
    }), o = O(!1), r = O(null), s = () => {
      var a;
      (a = t.value) == null || a.validate((l) => {
        l || r.value.open();
      });
    };
    function i() {
      const a = Te.get("loginInfo");
      a && (n.loginName = a.loginName || "", n.password = a.password || "", o.value = !0);
    }
    return i(), (a, l) => {
      const u = It, d = st, g = W("sh-form-item"), A = W("sh-form"), E = gn, w = pe;
      return h(), _("div", Ic, [
        f(u, {
          tag: "div",
          class: "title text-32 font-700 h-full mr-20 mb-64",
          style: { color: "var(--primary-color)" }
        }, {
          default: p(() => [
            Cc
          ]),
          _: 1
        }),
        f(A, {
          ref_key: "formRef",
          ref: t,
          model: n,
          size: "large",
          "label-placement": "left",
          "label-width": "0"
        }, {
          default: p(() => [
            f(g, {
              path: "loginName",
              rule: "required"
            }, {
              default: p(() => [
                f(d, {
                  value: n.loginName,
                  "onUpdate:value": l[0] || (l[0] = (y) => n.loginName = y),
                  class: "input",
                  placeholder: "输入账号"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            f(g, {
              class: "mt-6",
              path: "password",
              rule: "required"
            }, {
              default: p(() => [
                f(d, {
                  value: n.password,
                  "onUpdate:value": l[1] || (l[1] = (y) => n.password = y),
                  type: "password",
                  class: "input",
                  placeholder: "输入密码",
                  "show-password-on": "mousedown",
                  onKeydown: oo(s, ["enter"])
                }, null, 8, ["value", "onKeydown"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        v("div", kc, [
          f(E, {
            checked: o.value,
            "onUpdate:checked": l[2] || (l[2] = (y) => o.value = y)
          }, {
            default: p(() => [
              P("记住密码")
            ]),
            _: 1
          }, 8, ["checked"]),
          v("p", {
            class: "cursor-pointer btn",
            onClick: l[3] || (l[3] = (...y) => a.onForgetPWD && a.onForgetPWD(...y))
          }, "忘记密码？")
        ]),
        f(Ec, {
          ref_key: "modalRef",
          ref: r,
          class: "absolute -top-440 -left-30",
          "login-info": n,
          "is-remember": o.value
        }, {
          default: p(() => [
            f(w, {
              type: "primary",
              class: "w-full",
              size: "large",
              onClick: s
            }, {
              default: p(() => [
                P(" 立即登录 ")
              ]),
              _: 1
            }),
            Tc,
            f(w, {
              class: "w-full mt-10",
              size: "large",
              onClick: s
            }, {
              default: p(() => [
                P(" 注册 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["login-info", "is-remember"])
      ]);
    };
  }
}, vd = /* @__PURE__ */ K(Bc, [["__scopeId", "data-v-d6f3045d"]]);
function Ad(e) {
  e.beforeEach(() => {
    var t;
    (t = window.$loadingBar) == null || t.start();
  }), e.afterEach(() => {
    setTimeout(() => {
      var t;
      (t = window.$loadingBar) == null || t.finish();
    }, 200);
  }), e.onError(() => {
    var t;
    (t = window.$loadingBar) == null || t.error();
  });
}
function yd(e) {
  const t = $();
  e.afterEach((n) => {
    var s;
    const o = (s = n.meta) == null ? void 0 : s.title, r = t.title;
    o ? document.title = `${o} | ${r}` : document.title = r;
  });
}
function bd(e) {
  e.beforeEach(async (t, n, o) => {
    const { notAuth: r, notLogin: s } = t.meta, i = Pn();
    s || i && r || i && $isRouter(t.path) ? o() : i && !$isRouter(t.path) && !r ? o({ path: "/405" }) : o({ path: "/login" });
  });
}
const Rc = {
  path: "/:pathMatch(.*)*",
  meta: { title: "404", notLogin: !0 },
  component: () => import("./error-404-02a762ed.mjs")
}, Dc = {
  path: "405",
  meta: { title: "405", notLogin: !0 },
  component: () => import("./error-405-b49386ef.mjs")
}, Qc = {
  path: "/500",
  meta: { title: "500", notLogin: !0 },
  component: () => import("./error-500-13dbedb6.mjs")
}, wd = [Qc, Dc, Rc], Sd = [
  {
    path: "dictionary",
    meta: { title: "数据字典" },
    component: () => import("./index-88381877.mjs")
  },
  {
    path: "role",
    meta: { title: "角色管理" },
    component: () => import("./index-fa206a91.mjs")
  },
  {
    path: "menu",
    meta: { title: "菜单管理" },
    component: () => import("./index-103e6258.mjs")
  },
  {
    path: "unit",
    meta: { title: "企业管理" },
    component: () => import("./index-4b6e4f05.mjs")
  },
  {
    path: "team",
    meta: { title: "团队管理" },
    component: () => import("./index-e1e95b46.mjs")
  },
  {
    path: "dept",
    meta: { title: "部门管理" },
    component: () => import("./index-c4ad13d5.mjs")
  },
  {
    path: "appClient",
    meta: { title: "应用管理" },
    component: () => import("./index-f08cd179.mjs")
  },
  {
    path: "person",
    meta: { title: "成员管理" },
    component: () => import("./index-ccb6d13b.mjs")
  },
  {
    path: "unitAuth",
    meta: { title: "企业授权" },
    component: () => import("./index-92cb4947.mjs")
  },
  {
    path: "workbench",
    meta: { title: "工作台" },
    component: () => import("./index-92cb4947.mjs")
  }
], _d = [
  {
    path: "fileList",
    meta: { title: "附件管理" },
    component: () => import("./index-a2eeef31.mjs")
  },
  {
    path: "imgList",
    meta: { title: "图片管理" },
    component: () => import("./index-d69f39dd.mjs")
  }
], xd = [
  {
    path: "msgModel",
    meta: { title: "消息模板" },
    component: () => import("./index-f7d39741.mjs")
  },
  {
    path: "msgTask",
    meta: { title: "消息任务" },
    component: () => import("./index-90272f29.mjs")
  },
  {
    path: "msgTaskStorage",
    meta: { title: "归档消息任务" },
    component: () => import("./index-5e87827f.mjs")
  }
], Ed = [
  {
    path: "/workflow/model",
    meta: { title: "工作流" },
    component: () => import("./index-8b23d109.mjs")
  },
  {
    path: "/workflow/task",
    meta: { title: "任务管理" },
    component: () => import("./index-4635046e.mjs")
  },
  {
    path: "/workflow/systemService",
    meta: { title: "系统业务" },
    component: () => import("./index-dd2da4b4.mjs")
  }
], Id = [
  {
    path: "/workflow/editor/:id",
    meta: { title: "工作流编辑器", notAuth: !0 },
    component: () => import("./index-90374488.mjs")
  }
];
function Cd(e, t) {
  Ea(e), Qt = Ia(e), Zn = (n) => {
    t.push(n);
  };
}
function Qt() {
}
function Zn() {
}
export {
  En as $,
  Zn as A,
  gd as B,
  ul as C,
  pl as D,
  md as E,
  ml as F,
  ac as G,
  cc as H,
  vd as I,
  pd as J,
  De as K,
  jn as L,
  vs as M,
  _e as N,
  nr as O,
  dr as P,
  hr as Q,
  Te as R,
  mu as S,
  fe as T,
  ur as U,
  Tn as V,
  ye as W,
  rr as X,
  sr as Y,
  xn as Z,
  Ra as _,
  $e as a,
  Ct as a0,
  In as a1,
  ir as a2,
  zc as a3,
  Kc as a4,
  Xc as a5,
  Zc as a6,
  Jt as a7,
  Gc as a8,
  Yc as a9,
  Ed as aA,
  Id as aB,
  $c as aa,
  Je as ab,
  ed as ac,
  td as ad,
  nd as ae,
  Cn as af,
  lr as ag,
  od as ah,
  fr as ai,
  pr as aj,
  Pe as ak,
  Ne as al,
  Vr as am,
  jr as an,
  _s as ao,
  xs as ap,
  Ad as aq,
  yd as ar,
  bd as as,
  Rc as at,
  Dc as au,
  Qc as av,
  wd as aw,
  Sd as ax,
  _d as ay,
  xd as az,
  fs as b,
  X as c,
  gt as d,
  li as e,
  cd as f,
  ps as g,
  Tt as h,
  fd as i,
  dd as j,
  hd as k,
  gs as l,
  ad as m,
  ld as n,
  ud as o,
  id as p,
  $ as q,
  S as r,
  sd as s,
  wt as t,
  ae as u,
  rd as v,
  ar as w,
  Fn as x,
  Cd as y,
  Qt as z
};
