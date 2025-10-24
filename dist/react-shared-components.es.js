import { jsxs as S, jsx as h } from "react/jsx-runtime";
import { useState as m, useRef as E, useCallback as f, useEffect as C } from "react";
const P = ({
  children: e,
  variant: n = "primary",
  size: r = "md",
  isLoading: t = !1,
  disabled: d,
  className: l = "",
  ...s
}) => {
  const i = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2", w = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 disabled:bg-gray-400",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 disabled:bg-gray-100",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 disabled:bg-gray-400",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500 disabled:text-gray-400"
  }, o = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, a = [
    i,
    w[n],
    o[r],
    l
  ].join(" ");
  return /* @__PURE__ */ S(
    "button",
    {
      className: a,
      disabled: d || t,
      ...s,
      children: [
        t && /* @__PURE__ */ S("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ h("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ h("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        e
      ]
    }
  );
}, $ = ({
  children: e,
  title: n,
  actions: r,
  padding: t = "md",
  className: d = "",
  ...l
}) => {
  const i = [
    "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
    {
      none: "",
      sm: "p-3",
      md: "p-6",
      lg: "p-8"
    }[t],
    d
  ].join(" ");
  return /* @__PURE__ */ S("div", { className: i, ...l, children: [
    (n || r) && /* @__PURE__ */ S("div", { className: "flex items-center justify-between mb-4 pb-4 border-b border-gray-100", children: [
      n && /* @__PURE__ */ h("h3", { className: "text-lg font-semibold text-gray-900", children: n }),
      r && /* @__PURE__ */ h("div", { className: "flex items-center space-x-2", children: r })
    ] }),
    /* @__PURE__ */ h("div", { className: "text-gray-700", children: e })
  ] });
}, O = (e = null) => {
  const [n, r] = m({
    data: e,
    loading: !1,
    error: null
  }), t = E(null), d = f(
    async (l, s) => {
      t.current && t.current.abort(), t.current = new AbortController();
      const { skipJsonParsing: i, ...w } = s || {};
      r((o) => ({ ...o, loading: !0, error: null }));
      try {
        const o = await fetch(l, {
          ...w,
          signal: t.current.signal
        });
        if (!o.ok)
          throw new Error(`HTTP error! status: ${o.status}`);
        const a = i ? o : await o.json();
        return r(i ? (p) => ({ ...p, loading: !1, error: null }) : { data: a, loading: !1, error: null }), a;
      } catch (o) {
        throw typeof o == "object" && o !== null && "name" in o && o.name === "AbortError" ? (console.warn("Request aborted:", l), r((a) => ({ ...a, loading: !1 })), new Error("Request aborted")) : (r((a) => ({
          ...a,
          loading: !1,
          error: o instanceof Error ? o : new Error("An error occurred")
        })), o);
      }
    },
    []
  );
  return C(() => () => {
    t.current?.abort();
  }, []), {
    ...n,
    fetchData: d
  };
}, J = (e, n) => {
  const [r, t] = m(n);
  C(() => {
    try {
      const s = window.localStorage.getItem(e);
      s && t(JSON.parse(s));
    } catch (s) {
      console.warn(`Error reading localStorage key "${e}":`, s);
    }
  }, [e]);
  const d = f((s) => {
    try {
      const i = s instanceof Function ? s(r) : s;
      t(i), window.localStorage.setItem(e, JSON.stringify(i));
    } catch (i) {
      console.warn(`Error setting localStorage key "${e}":`, i);
    }
  }, [e, r]), l = f(() => {
    try {
      window.localStorage.removeItem(e), t(n);
    } catch (s) {
      console.warn(`Error removing localStorage key "${e}":`, s);
    }
  }, [e, n]);
  return { value: r, setValue: d, removeValue: l };
}, R = ({
  threshold: e = 100,
  disableHysteresis: n = !1,
  throttleMs: r = 50,
  showScrollTop: t = !0,
  scrollTopThreshold: d = 300,
  showScrollBottom: l = !1,
  scrollBottomThreshold: s = 100
} = {}) => {
  const [i, w] = m({
    x: 0,
    y: 0,
    direction: { vertical: "none", horizontal: "none" },
    isAtTop: !0,
    isAtBottom: !1
  }), o = E({ x: 0, y: 0 }), a = E(null), [p, T] = m(!1), [B, j] = m(!1), [A, z] = m(!1), N = f((u, c) => {
    const { x: b, y: x } = o.current;
    return {
      vertical: c > x ? "down" : c < x ? "up" : "none",
      horizontal: u > b ? "right" : u < b ? "left" : "none"
    };
  }, []), g = f(() => {
    a.current === null && (a.current = window.setTimeout(() => {
      const u = window.scrollX, c = window.scrollY, b = N(u, c), x = c === 0, H = window.innerHeight + c >= document.documentElement.scrollHeight;
      w({ x: u, y: c, direction: b, isAtTop: x, isAtBottom: H });
      let v;
      if (n ? v = c > e : v = b.vertical === "down" && c > e ? !0 : c <= e ? !1 : p, T((y) => y === v ? y : v), t && j(c > d), l) {
        const y = document.documentElement.scrollHeight - (window.innerHeight + c);
        z(y > s);
      }
      o.current = { x: u, y: c }, a.current = null;
    }, r));
  }, [
    n,
    N,
    e,
    r,
    p,
    t,
    d,
    l,
    s
  ]);
  C(() => {
    if (!(typeof window > "u"))
      return window.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("resize", g, { passive: !0 }), g(), () => {
        window.removeEventListener("scroll", g), window.removeEventListener("resize", g), a.current && window.clearTimeout(a.current);
      };
  }, [g]);
  const D = f((u) => {
    typeof window < "u" && window.scrollTo({ behavior: "smooth", ...u });
  }, []);
  return {
    ...i,
    trigger: p,
    scrollTo: D,
    showTopButton: B,
    showBottomButton: A
  };
}, V = (e, n = {}) => {
  const r = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...n
  };
  return new Date(e).toLocaleDateString("en-US", r);
}, q = (e, n) => {
  let r;
  return (...t) => {
    clearTimeout(r), r = setTimeout(() => e(...t), n);
  };
}, F = (...e) => e.filter(Boolean).join(" "), X = () => `id_${Math.random().toString(36).substr(2, 9)}`;
export {
  P as Button,
  $ as Card,
  F as classNames,
  q as debounce,
  V as formatDate,
  X as generateId,
  O as useApi,
  J as useLocalStorage,
  R as useScrollTrigger
};
//# sourceMappingURL=react-shared-components.es.js.map
