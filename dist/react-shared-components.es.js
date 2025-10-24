import Le, { useState as V, useRef as fe, useCallback as B, useEffect as de } from "react";
var Z = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function pr() {
  if (Ne) return J;
  Ne = 1;
  var i = Le, v = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(m, b, d) {
    var u, R = {}, O = null, N = null;
    d !== void 0 && (O = "" + d), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (N = b.ref);
    for (u in b) f.call(b, u) && !E.hasOwnProperty(u) && (R[u] = b[u]);
    if (m && m.defaultProps) for (u in b = m.defaultProps, b) R[u] === void 0 && (R[u] = b[u]);
    return { $$typeof: v, type: m, key: O, ref: N, props: R, _owner: w.current };
  }
  return J.Fragment = l, J.jsx = g, J.jsxs = g, J;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function mr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && (function() {
    var i = Le, v = Symbol.for("react.element"), l = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), z = Symbol.iterator, Q = "@@iterator";
    function ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[Q];
      return typeof r == "function" ? r : null;
    }
    var j = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        re("error", e, t);
      }
    }
    function re(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var C = !1, _ = !1, D = !1, Y = !1, te = !1, A;
    A = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === E || te || e === w || e === d || e === u || Y || e === N || C || _ || D || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === g || e.$$typeof === m || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === A || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case l:
          return "Portal";
        case E:
          return "Profiler";
        case w:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ve(r) + ".Consumer";
          case g:
            var t = e;
            return ve(t._context) + ".Provider";
          case b:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case O: {
            var s = e, c = s._payload, o = s._init;
            try {
              return k(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, ge, pe, me, be, ye, he, Ee;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function Be() {
      {
        if (M === 0) {
          ge = console.log, pe = console.info, me = console.warn, be = console.error, ye = console.group, he = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Me() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ge
            }),
            info: I({}, e, {
              value: pe
            }),
            warn: I({}, e, {
              value: me
            }),
            error: I({}, e, {
              value: be
            }),
            group: I({}, e, {
              value: ye
            }),
            groupCollapsed: I({}, e, {
              value: he
            }),
            groupEnd: I({}, e, {
              value: Ee
            })
          });
        }
        M < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = j.ReactCurrentDispatcher, ae;
    function H(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ae = n && n[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, K;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ue();
    }
    function Re(e, r) {
      if (!e || oe)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      oe = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ne.current, ne.current = null, Be();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var a = S.stack.split(`
`), x = n.stack.split(`
`), y = a.length - 1, h = x.length - 1; y >= 1 && h >= 0 && a[y] !== x[h]; )
            h--;
          for (; y >= 1 && h >= 0; y--, h--)
            if (a[y] !== x[h]) {
              if (y !== 1 || h !== 1)
                do
                  if (y--, h--, h < 0 || a[y] !== x[h]) {
                    var T = `
` + a[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, T), T;
                  }
                while (y >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = c, Me(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", $ = L ? H(L) : "";
      return typeof e == "function" && K.set(e, $), $;
    }
    function Je(e, r, t) {
      return Re(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, qe(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case d:
          return H("Suspense");
        case u:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Je(e.render);
          case R:
            return X(e.type, r, t);
          case O: {
            var n = e, s = n._payload, c = n._init;
            try {
              return X(c(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, _e = {}, xe = j.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, s) {
      {
        var c = Function.call.bind(U);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var x = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              a = y;
            }
            a && !(a instanceof Error) && (G(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), G(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, G(s), p("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function ie(e) {
      return He(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Te(e) {
      if (Xe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Se(e);
    }
    var Ce = j.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, je;
    function Ze(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ce.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          je || (je = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, c, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, s) {
      {
        var c, o = {}, a = null, x = null;
        t !== void 0 && (Te(t), a = "" + t), Qe(r) && (Te(r.key), a = "" + r.key), Ze(r) && (x = r.ref, er(r, s));
        for (c in r)
          U.call(r, c) && !Ge.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (c in y)
            o[c] === void 0 && (o[c] = y[c]);
        }
        if (a || x) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, h), x && tr(o, h);
        }
        return nr(e, a, x, s, n, Ce.current, o);
      }
    }
    var se = j.ReactCurrentOwner, Pe = j.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function ke() {
      {
        if (se.current) {
          var e = k(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var De = {};
    function ir(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + k(e._owner.type) + "."), W(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && Ae(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = ee(e);
          if (typeof s == "function" && s !== e.entries)
            for (var c = s.call(e), o; !(o = c.next()).done; )
              le(o.value) && Ae(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = k(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Ie = {};
    function $e(e, r, t, n, s, c) {
      {
        var o = F(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = or();
          x ? a += x : a += ke();
          var y;
          e === null ? y = "null" : ie(e) ? y = "array" : e !== void 0 && e.$$typeof === v ? (y = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, a);
        }
        var h = ar(e, r, t, s, c);
        if (h == null)
          return h;
        if (o) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (ie(T)) {
                for (var L = 0; L < T.length; L++)
                  Fe(T[L], e);
                Object.freeze && Object.freeze(T);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(T, e);
        }
        if (U.call(r, "key")) {
          var $ = k(e), S = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ce = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[$ + ce]) {
            var vr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, $, vr, $), Ie[$ + ce] = !0;
          }
        }
        return e === f ? ur(h) : sr(h), h;
      }
    }
    function lr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function cr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    q.Fragment = f, q.jsx = fr, q.jsxs = dr;
  })()), q;
}
var We;
function br() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? Z.exports = pr() : Z.exports = mr()), Z.exports;
}
var P = br();
const hr = ({
  children: i,
  variant: v = "primary",
  size: l = "md",
  isLoading: f = !1,
  disabled: w,
  className: E = "",
  ...g
}) => {
  const m = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2", b = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 disabled:bg-gray-400",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 disabled:bg-gray-100",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 disabled:bg-gray-400",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500 disabled:text-gray-400"
  }, d = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, u = [
    m,
    b[v],
    d[l],
    E
  ].join(" ");
  return /* @__PURE__ */ P.jsxs(
    "button",
    {
      className: u,
      disabled: w || f,
      ...g,
      children: [
        f && /* @__PURE__ */ P.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ P.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ P.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        i
      ]
    }
  );
}, Er = ({
  children: i,
  title: v,
  actions: l,
  padding: f = "md",
  className: w = "",
  ...E
}) => {
  const m = [
    "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
    {
      none: "",
      sm: "p-3",
      md: "p-6",
      lg: "p-8"
    }[f],
    w
  ].join(" ");
  return /* @__PURE__ */ P.jsxs("div", { className: m, ...E, children: [
    (v || l) && /* @__PURE__ */ P.jsxs("div", { className: "flex items-center justify-between mb-4 pb-4 border-b border-gray-100", children: [
      v && /* @__PURE__ */ P.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: v }),
      l && /* @__PURE__ */ P.jsx("div", { className: "flex items-center space-x-2", children: l })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "text-gray-700", children: i })
  ] });
}, wr = (i = null) => {
  const [v, l] = V({
    data: i,
    loading: !1,
    error: null
  }), f = fe(null), w = B(
    async (E, g) => {
      f.current && f.current.abort(), f.current = new AbortController();
      const { skipJsonParsing: m, ...b } = g || {};
      l((d) => ({ ...d, loading: !0, error: null }));
      try {
        const d = await fetch(E, {
          ...b,
          signal: f.current.signal
        });
        if (!d.ok)
          throw new Error(`HTTP error! status: ${d.status}`);
        const u = m ? d : await d.json();
        return l(m ? (R) => ({ ...R, loading: !1, error: null }) : { data: u, loading: !1, error: null }), u;
      } catch (d) {
        throw typeof d == "object" && d !== null && "name" in d && d.name === "AbortError" ? (console.warn("Request aborted:", E), l((u) => ({ ...u, loading: !1 })), new Error("Request aborted")) : (l((u) => ({
          ...u,
          loading: !1,
          error: d instanceof Error ? d : new Error("An error occurred")
        })), d);
      }
    },
    []
  );
  return de(() => () => {
    f.current?.abort();
  }, []), {
    ...v,
    fetchData: w
  };
}, Rr = (i, v) => {
  const [l, f] = V(v);
  de(() => {
    try {
      const g = window.localStorage.getItem(i);
      g && f(JSON.parse(g));
    } catch (g) {
      console.warn(`Error reading localStorage key "${i}":`, g);
    }
  }, [i]);
  const w = B((g) => {
    try {
      const m = g instanceof Function ? g(l) : g;
      f(m), window.localStorage.setItem(i, JSON.stringify(m));
    } catch (m) {
      console.warn(`Error setting localStorage key "${i}":`, m);
    }
  }, [i, l]), E = B(() => {
    try {
      window.localStorage.removeItem(i), f(v);
    } catch (g) {
      console.warn(`Error removing localStorage key "${i}":`, g);
    }
  }, [i, v]);
  return { value: l, setValue: w, removeValue: E };
}, _r = ({
  threshold: i = 100,
  disableHysteresis: v = !1,
  throttleMs: l = 50,
  showScrollTop: f = !0,
  scrollTopThreshold: w = 300,
  showScrollBottom: E = !1,
  scrollBottomThreshold: g = 100
} = {}) => {
  const [m, b] = V({
    x: 0,
    y: 0,
    direction: { vertical: "none", horizontal: "none" },
    isAtTop: !0,
    isAtBottom: !1
  }), d = fe({ x: 0, y: 0 }), u = fe(null), [R, O] = V(!1), [N, z] = V(!1), [Q, ee] = V(!1), j = B((C, _) => {
    const { x: D, y: Y } = d.current;
    return {
      vertical: _ > Y ? "down" : _ < Y ? "up" : "none",
      horizontal: C > D ? "right" : C < D ? "left" : "none"
    };
  }, []), p = B(() => {
    u.current === null && (u.current = window.setTimeout(() => {
      const C = window.scrollX, _ = window.scrollY, D = j(C, _), Y = _ === 0, te = window.innerHeight + _ >= document.documentElement.scrollHeight;
      b({ x: C, y: _, direction: D, isAtTop: Y, isAtBottom: te });
      let A;
      if (v ? A = _ > i : A = D.vertical === "down" && _ > i ? !0 : _ <= i ? !1 : R, O((F) => F === A ? F : A), f && z(_ > w), E) {
        const F = document.documentElement.scrollHeight - (window.innerHeight + _);
        ee(F > g);
      }
      d.current = { x: C, y: _ }, u.current = null;
    }, l));
  }, [
    v,
    j,
    i,
    l,
    R,
    f,
    w,
    E,
    g
  ]);
  de(() => {
    if (!(typeof window > "u"))
      return window.addEventListener("scroll", p, { passive: !0 }), window.addEventListener("resize", p, { passive: !0 }), p(), () => {
        window.removeEventListener("scroll", p), window.removeEventListener("resize", p), u.current && window.clearTimeout(u.current);
      };
  }, [p]);
  const re = B((C) => {
    typeof window < "u" && window.scrollTo({ behavior: "smooth", ...C });
  }, []);
  return {
    ...m,
    trigger: R,
    scrollTo: re,
    showTopButton: N,
    showBottomButton: Q
  };
}, xr = (i, v = {}) => {
  const l = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...v
  };
  return new Date(i).toLocaleDateString("en-US", l);
}, Sr = (i, v) => {
  let l;
  return (...f) => {
    clearTimeout(l), l = setTimeout(() => i(...f), v);
  };
}, Tr = (...i) => i.filter(Boolean).join(" "), Cr = () => `id_${Math.random().toString(36).substr(2, 9)}`;
export {
  hr as Button,
  Er as Card,
  Tr as classNames,
  Sr as debounce,
  xr as formatDate,
  Cr as generateId,
  wr as useApi,
  Rr as useLocalStorage,
  _r as useScrollTrigger
};
//# sourceMappingURL=react-shared-components.es.js.map
