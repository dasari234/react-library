import je, { useState as J, useCallback as B, useEffect as Pe } from "react";
var U = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function pr() {
  if (Te) return $;
  Te = 1;
  var u = je, l = Symbol.for("react.element"), p = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, R = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(y, c, S) {
    var f, w = {}, O = null, W = null;
    S !== void 0 && (O = "" + S), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (f in c) m.call(c, f) && !_.hasOwnProperty(f) && (w[f] = c[f]);
    if (y && y.defaultProps) for (f in c = y.defaultProps, c) w[f] === void 0 && (w[f] = c[f]);
    return { $$typeof: l, type: y, key: O, ref: W, props: w, _owner: R.current };
  }
  return $.Fragment = p, $.jsx = d, $.jsxs = d, $;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function gr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var u = je, l = Symbol.for("react.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), y = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ie = !1, $e = !1, Ne = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === _ || We || e === R || e === S || e === f || Ne || e === W || Fe || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === d || e.$$typeof === y || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case p:
          return "Portal";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return te(r) + ".Consumer";
          case d:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ve(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return C(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: ae
            }),
            warn: j({}, e, {
              value: oe
            }),
            error: j({}, e, {
              value: ie
            }),
            group: j({}, e, {
              value: se
            }),
            groupCollapsed: j({}, e, {
              value: ue
            }),
            groupEnd: j({}, e, {
              value: le
            })
          });
        }
        F < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, z;
    function Y(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var K = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function fe(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Le();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), b = n.stack.split(`
`), v = a.length - 1, g = b.length - 1; v >= 1 && g >= 0 && a[v] !== b[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (a[v] !== b[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || a[v] !== b[g]) {
                    var x = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, x), x;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = s, Me(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", P = A ? Y(A) : "";
      return typeof e == "function" && V.set(e, P), P;
    }
    function Je(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case S:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case w:
            return L(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return L(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var s = Function.call.bind(I);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (M(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, M(i), h("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var ze = Array.isArray;
    function G(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var me = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, he;
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, b = null;
        t !== void 0 && (ge(t), a = "" + t), Ze(r) && (ge(r.key), a = "" + r.key), Xe(r) && (b = r.ref, Qe(r, i));
        for (s in r)
          I.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (s in v)
            o[s] === void 0 && (o[s] = v[s]);
        }
        if (a || b) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, g), b && rr(o, g);
        }
        return tr(e, a, b, i, n, me.current, o);
      }
    }
    var H = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ee() {
      {
        if (H.current) {
          var e = C(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var _e = {};
    function or(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + C(e._owner.type) + "."), D(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = C(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var we = {};
    function Se(e, r, t, n, i, s) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? a += b : a += Ee();
          var v;
          e === null ? v = "null" : G(e) ? v = "array" : e !== void 0 && e.$$typeof === l ? (v = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var g = nr(e, r, t, i, s);
        if (g == null)
          return g;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (G(x)) {
                for (var A = 0; A < x.length; A++)
                  xe(x[A], e);
                Object.freeze && Object.freeze(x);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(x, e);
        }
        if (I.call(r, "key")) {
          var P = C(e), E = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Q = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[P + Q]) {
            var dr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, P, dr, P), we[P + Q] = !0;
          }
        }
        return e === m ? sr(g) : ir(g), g;
      }
    }
    function ur(e, r, t) {
      return Se(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    N.Fragment = m, N.jsx = cr, N.jsxs = fr;
  }()), N;
}
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? U.exports = pr() : U.exports = gr()), U.exports;
}
var T = mr();
const hr = ({
  children: u,
  variant: l = "primary",
  size: p = "md",
  isLoading: m = !1,
  disabled: R,
  className: _ = "",
  ...d
}) => {
  const y = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2", c = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 disabled:bg-gray-400",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 disabled:bg-gray-100",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 disabled:bg-gray-400",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500 disabled:text-gray-400"
  }, S = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, f = [
    y,
    c[l],
    S[p],
    _
  ].join(" ");
  return /* @__PURE__ */ T.jsxs(
    "button",
    {
      className: f,
      disabled: R || m,
      ...d,
      children: [
        m && /* @__PURE__ */ T.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ T.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ T.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        u
      ]
    }
  );
}, br = ({
  children: u,
  title: l,
  actions: p,
  padding: m = "md",
  className: R = "",
  ..._
}) => {
  const y = [
    "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
    {
      none: "",
      sm: "p-3",
      md: "p-6",
      lg: "p-8"
    }[m],
    R
  ].join(" ");
  return /* @__PURE__ */ T.jsxs("div", { className: y, ..._, children: [
    (l || p) && /* @__PURE__ */ T.jsxs("div", { className: "flex items-center justify-between mb-4 pb-4 border-b border-gray-100", children: [
      l && /* @__PURE__ */ T.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: l }),
      p && /* @__PURE__ */ T.jsx("div", { className: "flex items-center space-x-2", children: p })
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "text-gray-700", children: u })
  ] });
}, Er = (u, l = {}) => {
  const [p, m] = J(null), [R, _] = J(!0), [d, y] = J(null), c = B(async () => {
    try {
      _(!0), y(null);
      const f = await fetch(u, {
        headers: {
          "Content-Type": "application/json",
          ...l.headers
        },
        ...l
      });
      if (!f.ok)
        throw new Error(`HTTP error! status: ${f.status}`);
      const w = await f.json();
      m(w);
    } catch (f) {
      y(f instanceof Error ? f.message : "An error occurred");
    } finally {
      _(!1);
    }
  }, [u, JSON.stringify(l)]);
  Pe(() => {
    c();
  }, [c]);
  const S = B(async () => {
    await c();
  }, [c]);
  return { data: p, loading: R, error: d, refetch: S };
}, _r = (u, l) => {
  const [p, m] = J(l);
  Pe(() => {
    try {
      const d = window.localStorage.getItem(u);
      d && m(JSON.parse(d));
    } catch (d) {
      console.warn(`Error reading localStorage key "${u}":`, d);
    }
  }, [u]);
  const R = B((d) => {
    try {
      const y = d instanceof Function ? d(p) : d;
      m(y), window.localStorage.setItem(u, JSON.stringify(y));
    } catch (y) {
      console.warn(`Error setting localStorage key "${u}":`, y);
    }
  }, [u, p]), _ = B(() => {
    try {
      window.localStorage.removeItem(u), m(l);
    } catch (d) {
      console.warn(`Error removing localStorage key "${u}":`, d);
    }
  }, [u, l]);
  return { value: p, setValue: R, removeValue: _ };
}, Rr = (u, l = {}) => {
  const p = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...l
  };
  return new Date(u).toLocaleDateString("en-US", p);
}, xr = (u, l) => {
  let p;
  return (...m) => {
    clearTimeout(p), p = setTimeout(() => u(...m), l);
  };
}, wr = (...u) => u.filter(Boolean).join(" "), Sr = () => `id_${Math.random().toString(36).substr(2, 9)}`;
export {
  hr as Button,
  br as Card,
  wr as classNames,
  xr as debounce,
  Rr as formatDate,
  Sr as generateId,
  Er as useApi,
  _r as useLocalStorage
};
//# sourceMappingURL=react-shared-components.es.js.map
