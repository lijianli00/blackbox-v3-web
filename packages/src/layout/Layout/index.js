import {
  defineComponent as S,
  computed as p,
  openBlock as y,
  createElementBlock as b,
  normalizeStyle as $,
  unref as f,
  renderSlot as g,
  ref as tt,
  watch as et,
  onUnmounted as nt,
  createBlock as E,
  mergeProps as L,
  withCtx as C,
  createCommentVNode as N,
  createVNode as it,
} from 'vue'
function ot(e) {
  let n = 0
  for (let t = 0; t < e.length; ++t) e[t] === '&' && ++n
  return n
}
const j = /\s*,(?![^(]*\))\s*/g,
  rt = /\s+/g
function at(e, n) {
  const t = []
  return (
    n.split(j).forEach((i) => {
      let o = ot(i)
      if (o) {
        if (o === 1) {
          e.forEach((r) => {
            t.push(i.replace('&', r))
          })
          return
        }
      } else {
        e.forEach((r) => {
          t.push((r && r + ' ') + i)
        })
        return
      }
      let a = [i]
      for (; o--; ) {
        const r = []
        a.forEach((d) => {
          e.forEach((u) => {
            r.push(d.replace('&', u))
          })
        }),
          (a = r)
      }
      a.forEach((r) => t.push(r))
    }),
    t
  )
}
function dt(e, n) {
  const t = []
  return (
    n.split(j).forEach((i) => {
      e.forEach((o) => {
        t.push((o && o + ' ') + i)
      })
    }),
    t
  )
}
function st(e) {
  let n = ['']
  return (
    e.forEach((t) => {
      ;(t = t && t.trim()), t && (t.includes('&') ? (n = at(n, t)) : (n = dt(n, t)))
    }),
    n.join(', ').replace(rt, ' ')
  )
}
function V(e) {
  if (!e) return
  const n = e.parentElement
  n && n.removeChild(e)
}
function k(e) {
  return document.querySelector(`style[cssr-id="${e}"]`)
}
function ut(e) {
  const n = document.createElement('style')
  return n.setAttribute('cssr-id', e), n
}
function W(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1
}
const lt = /[A-Z]/g
function P(e) {
  return e.replace(lt, (n) => '-' + n.toLowerCase())
}
function ft(e, n = '  ') {
  return typeof e == 'object' && e !== null
    ? ` {
` +
        Object.entries(e).map((t) => n + `  ${P(t[0])}: ${t[1]};`).join(`
`) +
        `
` +
        n +
        '}'
    : `: ${e};`
}
function ct(e, n, t) {
  return typeof e == 'function'
    ? e({
        context: n.context,
        props: t,
      })
    : e
}
function D(e, n, t, i) {
  if (!n) return ''
  const o = ct(n, t, i)
  if (!o) return ''
  if (typeof o == 'string')
    return `${e} {
${o}
}`
  const a = Object.keys(o)
  if (a.length === 0)
    return t.config.keepEmptyBlock
      ? e +
          ` {
}`
      : ''
  const r = e ? [e + ' {'] : []
  return (
    a.forEach((d) => {
      const u = o[d]
      if (d === 'raw') {
        r.push(
          `
` +
            u +
            `
`
        )
        return
      }
      ;(d = P(d)), u != null && r.push(`  ${d}${ft(u)}`)
    }),
    e && r.push('}'),
    r.join(`
`)
  )
}
function B(e, n, t) {
  !e ||
    e.forEach((i) => {
      if (Array.isArray(i)) B(i, n, t)
      else if (typeof i == 'function') {
        const o = i(n)
        Array.isArray(o) ? B(o, n, t) : o && t(o)
      } else i && t(i)
    })
}
function O(e, n, t, i, o, a) {
  const r = e.$
  let d = ''
  if (!r || typeof r == 'string') W(r) ? (d = r) : n.push(r)
  else if (typeof r == 'function') {
    const s = r({
      context: i.context,
      props: o,
    })
    W(s) ? (d = s) : n.push(s)
  } else if ((r.before && r.before(i.context), !r.$ || typeof r.$ == 'string')) W(r.$) ? (d = r.$) : n.push(r.$)
  else if (r.$) {
    const s = r.$({
      context: i.context,
      props: o,
    })
    W(s) ? (d = s) : n.push(s)
  }
  const u = st(n),
    l = D(u, e.props, i, o)
  d
    ? (t.push(`${d} {`),
      a &&
        l &&
        a.insertRule(`${d} {
${l}
}
`))
    : (a && l && a.insertRule(l), !a && l.length && t.push(l)),
    e.children &&
      B(
        e.children,
        {
          context: i.context,
          props: o,
        },
        (s) => {
          if (typeof s == 'string') {
            const c = D(u, { raw: s }, i, o)
            a ? a.insertRule(c) : t.push(c)
          } else O(s, n, t, i, o, a)
        }
      ),
    n.pop(),
    d && t.push('}'),
    r && r.after && r.after(i.context)
}
function R(e, n, t, i = !1) {
  const o = []
  return (
    O(e, [], o, n, t, i ? e.instance.__styleSheet : void 0),
    i
      ? ''
      : o.join(`

`)
  )
}
function pt(e) {
  for (var n = 0, t, i = 0, o = e.length; o >= 4; ++i, o -= 4)
    (t =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (n =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(i + 2) & 255) << 16
    case 2:
      n ^= (e.charCodeAt(i + 1) & 255) << 8
    case 1:
      ;(n ^= e.charCodeAt(i) & 255), (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16))
  }
  return (
    (n ^= n >>> 13),
    (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
    ((n ^ (n >>> 15)) >>> 0).toString(36)
  )
}
typeof window < 'u' && (window.__cssrContext = {})
function mt(e, n, t) {
  const { els: i } = n
  if (t === void 0) i.forEach(V), (n.els = [])
  else {
    const o = k(t)
    o && i.includes(o) && (V(o), (n.els = i.filter((a) => a !== o)))
  }
}
function I(e, n) {
  e.push(n)
}
function ht(e, n, t, i, o, a, r, d, u) {
  if (a && !u) {
    if (t === void 0) {
      console.error('[css-render/mount]: `id` is required in `silent` mode.')
      return
    }
    const h = window.__cssrContext
    h[t] || ((h[t] = !0), R(n, e, i, a))
    return
  }
  let l
  if ((t === void 0 && ((l = n.render(i)), (t = pt(l))), u)) {
    u.adapter(t, l != null ? l : n.render(i))
    return
  }
  const s = k(t)
  if (s !== null && !r) return s
  const c = s != null ? s : ut(t)
  if ((l === void 0 && (l = n.render(i)), (c.textContent = l), s !== null)) return s
  if (d) {
    const h = document.head.querySelector(`meta[name="${d}"]`)
    if (h) return document.head.insertBefore(c, h), I(n.els, c), c
  }
  return (
    o ? document.head.insertBefore(c, document.head.querySelector('style, link')) : document.head.appendChild(c),
    I(n.els, c),
    c
  )
}
function yt(e) {
  return R(this, this.instance, e)
}
function gt(e = {}) {
  const { id: n, ssr: t, props: i, head: o = !1, silent: a = !1, force: r = !1, anchorMetaName: d } = e
  return ht(this.instance, this, n, i, o, a, r, d, t)
}
function xt(e = {}) {
  const { id: n } = e
  mt(this.instance, this, n)
}
const A = function (e, n, t, i) {
    return {
      instance: e,
      $: n,
      props: t,
      children: i,
      els: [],
      render: yt,
      mount: gt,
      unmount: xt,
    }
  },
  bt = function (e, n, t, i) {
    return Array.isArray(n)
      ? A(e, { $: null }, null, n)
      : Array.isArray(t)
      ? A(e, n, null, t)
      : Array.isArray(i)
      ? A(e, n, t, i)
      : A(e, n, t, null)
  }
function _(e = {}) {
  let n = null
  const t = {
    c: (...i) => bt(t, ...i),
    use: (i, ...o) => i.install(t, ...o),
    find: k,
    context: {},
    config: e,
    get __styleSheet() {
      if (!n) {
        const i = document.createElement('style')
        return document.head.appendChild(i), (n = document.styleSheets[document.styleSheets.length - 1]), n
      }
      return n
    },
  }
  return t
}
const $t = S({ name: 'LayoutHeader' }),
  wt = /* @__PURE__ */ Object.assign($t, {
    props: {
      fixed: {
        type: Boolean,
        default: !0,
      },
      zIndex: {
        type: Number,
        default: 1001,
      },
      useMinWidthLayout: Boolean,
      minWidth: {
        type: Number,
        default: 1200,
      },
      height: {
        type: Number,
        default: 56,
      },
      paddingLeft: {
        type: Number,
        default: 0,
      },
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    setup(e) {
      const n = e,
        t = p(() => {
          const {
              fixed: a,
              zIndex: r,
              minWidth: d,
              height: u,
              paddingLeft: l,
              transitionDuration: s,
              transitionTimingFunction: c,
            } = n,
            h = a ? 'fixed' : 'static',
            x = n.useMinWidthLayout ? `min-width:${d}px;` : ''
          return `position:${h};z-index:${r};${x}height:${u}px;padding-left:${l}px;transition-duration:${s}ms;transition-timing-function:${c};`
        }),
        { c: i } = _(),
        o = i('.admin-layout__header', {
          left: 0,
          top: 0,
          flexShrink: 0,
          boxSizing: 'border-box',
          width: '100%',
          transitionProperty: 'padding-left',
        })
      return (
        o.render(),
        o.mount(),
        (a, r) => (
          y(),
          b(
            'header',
            {
              class: 'admin-layout__header',
              style: $(f(t)),
            },
            [g(a.$slots, 'default')],
            4
          )
        )
      )
    },
  }),
  St = S({ name: 'LayoutTab' }),
  _t = /* @__PURE__ */ Object.assign(St, {
    props: {
      fixed: {
        type: Boolean,
        default: !1,
      },
      top: {
        type: Number,
        default: 50,
      },
      zIndex: {
        type: Number,
        default: 999,
      },
      useMinWidthLayout: Boolean,
      minWidth: {
        type: Number,
        default: 1200,
      },
      height: {
        type: Number,
        default: 56,
      },
      paddingLeft: {
        type: Number,
        default: 0,
      },
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    setup(e) {
      const n = e,
        t = p(() => {
          const {
              fixed: a,
              top: r,
              zIndex: d,
              minWidth: u,
              height: l,
              paddingLeft: s,
              transitionDuration: c,
              transitionTimingFunction: h,
            } = n,
            x = a ? 'fixed' : 'static',
            v = n.useMinWidthLayout ? `min-width: ${u}px;` : ''
          return `position:${x};top:${r}px;z-index:${d};${v}height:${l}px;padding-left:${s}px;transition-duration:${c}ms;transition-timing-function:${h};`
        }),
        { c: i } = _(),
        o = i('.admin-layout__tab', {
          left: 0,
          flexShrink: 0,
          boxSizing: 'border-box',
          width: '100%',
          transitionProperty: 'padding-left',
        })
      return (
        o.render(),
        o.mount(),
        (a, r) => (
          y(),
          b(
            'div',
            {
              class: 'admin-layout__tab',
              style: $(f(t)),
            },
            [g(a.$slots, 'default')],
            4
          )
        )
      )
    },
  }),
  vt = S({ name: 'LayoutSider' }),
  Lt = /* @__PURE__ */ Object.assign(vt, {
    props: {
      zIndex: {
        type: Number,
        default: 1002,
      },
      collapse: {
        type: Boolean,
        default: !1,
      },
      width: {
        type: Number,
        default: 200,
      },
      paddingTop: {
        type: Number,
        default: 0,
      },
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    setup(e) {
      const n = e,
        t = p(() => {
          const { zIndex: a, width: r, paddingTop: d, transitionDuration: u, transitionTimingFunction: l } = n
          return `z-index:${a};width:${r}px;padding-top:${d}px;transition-duration:${u}ms;transition-timing-function:${l};`
        }),
        { c: i } = _(),
        o = i('.admin-layout__sider', {
          position: 'fixed',
          left: 0,
          top: 0,
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          transitionProperty: 'all',
        })
      return (
        o.render(),
        o.mount(),
        (a, r) => (
          y(),
          b(
            'aside',
            {
              class: 'admin-layout__sider',
              style: $(f(t)),
            },
            [g(a.$slots, 'default')],
            4
          )
        )
      )
    },
  }),
  Ct = S({ name: 'LayoutContent' }),
  Nt = /* @__PURE__ */ Object.assign(Ct, {
    props: {
      paddingTop: {
        type: Number,
        default: 0,
      },
      paddingBottom: {
        type: Number,
        default: 0,
      },
      paddingLeft: {
        type: Number,
        default: 0,
      },
      overflowHidden: Boolean,
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    setup(e) {
      const n = e,
        t = p(() => {
          const {
              paddingTop: a,
              paddingBottom: r,
              paddingLeft: d,
              transitionDuration: u,
              transitionTimingFunction: l,
            } = n,
            s = `overflow:${n.overflowHidden ? 'hidden' : 'visible'};`
          return `padding-top:${a}px;padding-bottom:${r}px;padding-left:${d}px;${s}transition-duration:${u}ms;transition-timing-function:${l};`
        }),
        { c: i } = _(),
        o = i('.admin-layout__content', {
          flexGrow: 1,
          boxSizing: 'border-box',
          width: '100%',
          transitionProperty: 'padding-left',
        })
      return (
        o.render(),
        o.mount(),
        (a, r) => (
          y(),
          b(
            'main',
            {
              style: $(f(t)),
              class: 'admin-layout__content',
            },
            [g(a.$slots, 'default')],
            4
          )
        )
      )
    },
  }),
  Tt = S({ name: 'LayoutFooter' }),
  Et = /* @__PURE__ */ Object.assign(Tt, {
    props: {
      fixed: {
        type: Boolean,
        default: !0,
      },
      zIndex: {
        type: Number,
        default: 999,
      },
      useMinWidthLayout: Boolean,
      minWidth: {
        type: Number,
        default: 1200,
      },
      height: {
        type: Number,
        default: 56,
      },
      paddingLeft: {
        type: Number,
        default: 300,
      },
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    setup(e) {
      const n = e,
        t = p(() => {
          const {
              fixed: a,
              zIndex: r,
              minWidth: d,
              height: u,
              paddingLeft: l,
              transitionDuration: s,
              transitionTimingFunction: c,
            } = n,
            h = a ? 'fixed' : 'static',
            x = n.useMinWidthLayout ? `min-width:${d}px;` : ''
          return `position:${h};z-index:${r};${x}height:${u}px;padding-left:${l}px;transition-duration:${s}ms;transition-timing-function:${c};`
        }),
        { c: i } = _(),
        o = i('.admin-layout__footer', {
          left: 0,
          bottom: 0,
          flexShrink: 0,
          boxSizing: 'border-box',
          width: '100%',
          transitionProperty: 'padding-left',
        })
      return (
        o.render(),
        o.mount(),
        (a, r) => (
          y(),
          b(
            'footer',
            {
              class: 'admin-layout__footer',
              style: $(f(t)),
            },
            [g(a.$slots, 'default')],
            4
          )
        )
      )
    },
  })
function Wt(e) {
  const n = tt(0),
    t = p(() => `transform: translateX(${-n.value}px);`)
  let i = !1
  function o(s) {
    n.value = s
  }
  function a() {
    var c
    const s = ((c = document.scrollingElement) == null ? void 0 : c.scrollLeft) || 0
    o(s)
  }
  function r() {
    a()
  }
  function d() {
    document.addEventListener('scroll', a)
  }
  function u() {
    !i || document.removeEventListener('scroll', a)
  }
  function l() {
    r(), d(), (i = !0)
  }
  return (
    et(
      e,
      (s) => {
        s ? l() : u()
      },
      { immediate: !0 }
    ),
    nt(() => {
      u()
    }),
    t
  )
}
const At = S({ name: 'AdminLayout' }),
  q = /* @__PURE__ */ Object.assign(At, {
    props: {
      mode: {
        type: String,
        default: 'vertical',
      },
      isMobile: {
        type: Boolean,
        default: !1,
      },
      maskBg: {
        type: String,
        default: 'rgba(0,0,0,0.3)',
      },
      useMinWidthLayout: {
        type: Boolean,
        default: !1,
      },
      minWidth: {
        type: Number,
        default: 1200,
      },
      headerVisible: {
        type: Boolean,
        default: !0,
      },
      headerHeight: {
        type: Number,
        default: 56,
      },
      tabVisible: {
        type: Boolean,
        default: !0,
      },
      tabHeight: {
        type: Number,
        default: 44,
      },
      fixedHeaderAndTab: {
        type: Boolean,
        default: !0,
      },
      addMainOverflowHidden: {
        type: Boolean,
        default: !1,
      },
      footerVisible: {
        type: Boolean,
        default: !0,
      },
      footerHeight: {
        type: Number,
        default: 48,
      },
      fixedFooter: {
        type: Boolean,
        default: !0,
      },
      siderVisible: {
        type: Boolean,
        default: !0,
      },
      siderWidth: {
        type: Number,
        default: 200,
      },
      siderCollapsedWidth: {
        type: Number,
        default: 64,
      },
      siderCollapse: {
        type: Boolean,
        default: !1,
      },
      transitionDuration: {
        type: Number,
        default: 300,
      },
      transitionTimingFunction: {
        type: String,
        default: 'ease-in-out',
      },
    },
    emits: ['update:sider-collapse', 'collapse'],
    setup(e, { emit: n }) {
      const t = e,
        i = p(() => (t.useMinWidthLayout ? `min-width:${t.minWidth}px;` : '')),
        o = p(() => t.useMinWidthLayout && (t.fixedHeaderAndTab || t.fixedFooter)),
        a = Wt(o),
        r = p(() => (t.fixedHeaderAndTab ? a.value : '')),
        d = p(() => (t.fixedFooter ? a.value : '')),
        u = p(() => {
          const { transitionDuration: m, transitionTimingFunction: w } = t
          return {
            transitionDuration: m,
            transitionTimingFunction: w,
          }
        }),
        l = p(() => t.mode === 'vertical'),
        s = 1001,
        c = 999,
        h = p(() => (t.isMobile || l.value ? 1003 : 1e3)),
        x = 998,
        v = p({
          get() {
            return t.siderCollapse
          },
          set(m) {
            n('update:sider-collapse', m)
          },
        })
      function Z() {
        v.value = !0
      }
      const U = p(() => t.isMobile && !v.value),
        G = p(() => {
          const { transitionDuration: m, transitionTimingFunction: w } = t
          return `background-color:${t.maskBg};transition-duration:${m}ms;transition-timing-function:${w};`
        }),
        z = p(() => {
          const { siderWidth: m, siderCollapsedWidth: w } = t,
            F = t.isMobile ? 0 : w,
            Y = v.value ? F : m
          return t.siderVisible ? Y : 0
        }),
        T = p(() => (t.isMobile ? 0 : z.value)),
        X = p(() => (l.value ? T.value : 0)),
        J = p(() => (!t.isMobile && !l.value && t.headerVisible ? t.headerHeight : 0)),
        K = p(() => {
          let m = 0
          return (
            t.fixedHeaderAndTab && (t.headerVisible && (m += t.headerHeight), t.tabVisible && (m += t.tabHeight)), m
          )
        }),
        Q = p(() => (t.fixedFooter && t.footerVisible ? t.footerHeight : 0)),
        { c: H } = _(),
        M = H(
          '.admin-layout',
          {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          },
          [
            H('&__sider-mask', {
              position: 'fixed',
              left: 0,
              top: 0,
              zIndex: 1002,
              width: '100%',
              height: '100%',
              transitionProperty: 'background-color',
            }),
          ]
        )
      return (
        M.render(),
        M.mount(),
        (m, w) => (
          y(),
          b(
            'div',
            {
              class: 'admin-layout',
              style: $(f(i)),
            },
            [
              e.headerVisible
                ? (y(),
                  E(
                    f(wt),
                    L({ key: 0 }, f(u), {
                      fixed: e.fixedHeaderAndTab,
                      'z-index': s,
                      'min-width': e.minWidth,
                      height: e.headerHeight,
                      'padding-left': f(X),
                      style: f(r),
                    }),
                    {
                      default: C(() => [g(m.$slots, 'header')]),
                      _: 3,
                    },
                    16,
                    ['fixed', 'min-width', 'height', 'padding-left', 'style']
                  ))
                : N('', !0),
              e.tabVisible
                ? (y(),
                  E(
                    f(_t),
                    L({ key: 1 }, f(u), {
                      fixed: e.fixedHeaderAndTab,
                      'z-index': c,
                      'min-width': e.minWidth,
                      top: e.headerHeight,
                      height: e.tabHeight,
                      'padding-left': f(T),
                      style: f(r),
                    }),
                    {
                      default: C(() => [g(m.$slots, 'tab')]),
                      _: 3,
                    },
                    16,
                    ['fixed', 'min-width', 'top', 'height', 'padding-left', 'style']
                  ))
                : N('', !0),
              e.siderVisible
                ? (y(),
                  E(
                    f(Lt),
                    L({ key: 2 }, f(u), {
                      'z-index': f(h),
                      width: f(z),
                      'padding-top': f(J),
                    }),
                    {
                      default: C(() => [g(m.$slots, 'sider')]),
                      _: 3,
                    },
                    16,
                    ['z-index', 'width', 'padding-top']
                  ))
                : N('', !0),
              f(U)
                ? (y(),
                  b(
                    'div',
                    {
                      key: 3,
                      class: 'admin-layout__sider-mask',
                      style: $(f(G)),
                      onClick: Z,
                    },
                    null,
                    4
                  ))
                : N('', !0),
              it(
                f(Nt),
                L(f(u), {
                  'padding-top': f(K),
                  'padding-bottom': f(Q),
                  'padding-left': f(T),
                  'overflow-hidden': e.addMainOverflowHidden,
                }),
                {
                  default: C(() => [g(m.$slots, 'default')]),
                  _: 3,
                },
                16,
                ['padding-top', 'padding-bottom', 'padding-left', 'overflow-hidden']
              ),
              e.footerVisible
                ? (y(),
                  E(
                    f(Et),
                    L({ key: 4 }, f(u), {
                      fixed: e.fixedFooter,
                      'z-index': x,
                      'min-width': e.minWidth,
                      height: e.footerHeight,
                      'padding-left': f(T),
                      style: f(d),
                    }),
                    {
                      default: C(() => [g(m.$slots, 'footer')]),
                      _: 3,
                    },
                    16,
                    ['fixed', 'min-width', 'height', 'padding-left', 'style']
                  ))
                : N('', !0),
            ],
            4
          )
        )
      )
    },
  })
function Bt(e) {
  e.component('AdminLayout', q)
}
q.install = Bt
export { q as default }
