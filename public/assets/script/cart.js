// feather.main
! function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.feather = n() : e.feather = n()
  }("undefined" != typeof self ? self : this, function () {
    return function (e) {
      var n = {};

      function i(t) {
        if (n[t]) return n[t].exports;
        var l = n[t] = {
          i: t,
          l: !1,
          exports: {}
        };
        return e[t].call(l.exports, l, l.exports, i), l.l = !0, l.exports
      }
      return i.m = e, i.c = n, i.d = function (e, n, t) {
        i.o(e, n) || Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: t
        })
      }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, i.n = function (e) {
        var n = e && e.__esModule ? function () {
          return e.default
        } : function () {
          return e
        };
        return i.d(n, "a", n), n
      }, i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }, i.p = "", i(i.s = 80)
    }([function (e, n, i) {
      (function (n) {
        var i = "object",
          t = function (e) {
            return e && e.Math == Math && e
          };
        e.exports = t(typeof globalThis == i && globalThis) || t(typeof window == i && window) || t(typeof self == i && self) || t(typeof n == i && n) || Function("return this")()
      }).call(this, i(75))
    }, function (e, n) {
      var i = {}.hasOwnProperty;
      e.exports = function (e, n) {
        return i.call(e, n)
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(33),
        o = i(62),
        a = t.Symbol,
        c = l("wks");
      e.exports = function (e) {
        return c[e] || (c[e] = o && a[e] || (o ? a : r)("Symbol." + e))
      }
    }, function (e, n, i) {
      var t = i(6);
      e.exports = function (e) {
        if (!t(e)) throw TypeError(String(e) + " is not an object");
        return e
      }
    }, function (e, n) {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    }, function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(10);
      e.exports = t ? function (e, n, i) {
        return l.f(e, n, r(1, i))
      } : function (e, n, i) {
        return e[n] = i, e
      }
    }, function (e, n) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    }, function (e, n, i) {
      var t = i(8),
        l = i(35),
        r = i(3),
        o = i(18),
        a = Object.defineProperty;
      n.f = t ? a : function (e, n, i) {
        if (r(e), n = o(n, !0), r(i), l) try {
          return a(e, n, i)
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (e[n] = i.value), e
      }
    }, function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
      })
    }, function (e, n) {
      e.exports = {}
    }, function (e, n) {
      e.exports = function (e, n) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: n
        }
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(19),
        r = i(17),
        o = t["__core-js_shared__"] || l("__core-js_shared__", {});
      (e.exports = function (e, n) {
        return o[e] || (o[e] = void 0 !== n ? n : {})
      })("versions", []).push({
        version: "3.1.3",
        mode: r ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      })
    }, function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = o(i(43)),
        l = o(i(41)),
        r = o(i(40));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      n.default = Object.keys(l.default).map(function (e) {
        return new t.default(e, l.default[e], r.default[e])
      }).reduce(function (e, n) {
        return e[n.name] = n, e
      }, {})
    }, function (e, n) {
      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function (e, n, i) {
      var t = i(72),
        l = i(20);
      e.exports = function (e) {
        return t(l(e))
      }
    }, function (e, n) {
      e.exports = {}
    }, function (e, n, i) {
      var t = i(11),
        l = i(33),
        r = t("keys");
      e.exports = function (e) {
        return r[e] || (r[e] = l(e))
      }
    }, function (e, n) {
      e.exports = !1
    }, function (e, n, i) {
      var t = i(6);
      e.exports = function (e, n) {
        if (!t(e)) return e;
        var i, l;
        if (n && "function" == typeof (i = e.toString) && !t(l = i.call(e))) return l;
        if ("function" == typeof (i = e.valueOf) && !t(l = i.call(e))) return l;
        if (!n && "function" == typeof (i = e.toString) && !t(l = i.call(e))) return l;
        throw TypeError("Can't convert object to primitive value")
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(5);
      e.exports = function (e, n) {
        try {
          l(t, e, n)
        } catch (i) {
          t[e] = n
        }
        return n
      }
    }, function (e, n) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e
      }
    }, function (e, n) {
      var i = Math.ceil,
        t = Math.floor;
      e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? t : i)(e)
      }
    }, function (e, n, i) {
      var t;
      /*!
        Copyright (c) 2016 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
      */
      /*!
        Copyright (c) 2016 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
      */
      ! function () {
        "use strict";
        var i = function () {
          function e() {}

          function n(e, n) {
            for (var i = n.length, t = 0; t < i; ++t) l(e, n[t])
          }
          e.prototype = Object.create(null);
          var i = {}.hasOwnProperty;
          var t = /\s+/;

          function l(e, l) {
            if (l) {
              var r = typeof l;
              "string" === r ? function (e, n) {
                for (var i = n.split(t), l = i.length, r = 0; r < l; ++r) e[i[r]] = !0
              }(e, l) : Array.isArray(l) ? n(e, l) : "object" === r ? function (e, n) {
                for (var t in n) i.call(n, t) && (e[t] = !!n[t])
              }(e, l) : "number" === r && function (e, n) {
                e[n] = !0
              }(e, l)
            }
          }
          return function () {
            for (var i = arguments.length, t = Array(i), l = 0; l < i; l++) t[l] = arguments[l];
            var r = new e;
            n(r, t);
            var o = [];
            for (var a in r) r[a] && o.push(a);
            return o.join(" ")
          }
        }();
        void 0 !== e && e.exports ? e.exports = i : void 0 === (t = function () {
          return i
        }.apply(n, [])) || (e.exports = t)
      }()
    }, function (e, n, i) {
      var t = i(7).f,
        l = i(1),
        r = i(2)("toStringTag");
      e.exports = function (e, n, i) {
        e && !l(e = i ? e : e.prototype, r) && t(e, r, {
          configurable: !0,
          value: n
        })
      }
    }, function (e, n, i) {
      var t = i(20);
      e.exports = function (e) {
        return Object(t(e))
      }
    }, function (e, n, i) {
      var t = i(1),
        l = i(24),
        r = i(16),
        o = i(63),
        a = r("IE_PROTO"),
        c = Object.prototype;
      e.exports = o ? Object.getPrototypeOf : function (e) {
        return e = l(e), t(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
      }
    }, function (e, n, i) {
      "use strict";
      var t, l, r, o = i(25),
        a = i(5),
        c = i(1),
        p = i(2),
        y = i(17),
        h = p("iterator"),
        x = !1;
      [].keys && ("next" in (r = [].keys()) ? (l = o(o(r))) !== Object.prototype && (t = l) : x = !0), void 0 == t && (t = {}), y || c(t, h) || a(t, h, function () {
        return this
      }), e.exports = {
        IteratorPrototype: t,
        BUGGY_SAFARI_ITERATORS: x
      }
    }, function (e, n, i) {
      var t = i(21),
        l = Math.min;
      e.exports = function (e) {
        return e > 0 ? l(t(e), 9007199254740991) : 0
      }
    }, function (e, n, i) {
      var t = i(1),
        l = i(14),
        r = i(68),
        o = i(15),
        a = r(!1);
      e.exports = function (e, n) {
        var i, r = l(e),
          c = 0,
          p = [];
        for (i in r) !t(o, i) && t(r, i) && p.push(i);
        for (; n.length > c;) t(r, i = n[c++]) && (~a(p, i) || p.push(i));
        return p
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(5),
        o = i(1),
        a = i(19),
        c = i(36),
        p = i(37),
        y = p.get,
        h = p.enforce,
        x = String(c).split("toString");
      l("inspectSource", function (e) {
        return c.call(e)
      }), (e.exports = function (e, n, i, l) {
        var c = !!l && !!l.unsafe,
          p = !!l && !!l.enumerable,
          y = !!l && !!l.noTargetGet;
        "function" == typeof i && ("string" != typeof n || o(i, "name") || r(i, "name", n), h(i).source = x.join("string" == typeof n ? n : "")), e !== t ? (c ? !y && e[n] && (p = !0) : delete e[n], p ? e[n] = i : r(e, n, i)) : p ? e[n] = i : a(n, i)
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && y(this).source || c.call(this)
      })
    }, function (e, n) {
      var i = {}.toString;
      e.exports = function (e) {
        return i.call(e).slice(8, -1)
      }
    }, function (e, n, i) {
      var t = i(8),
        l = i(73),
        r = i(10),
        o = i(14),
        a = i(18),
        c = i(1),
        p = i(35),
        y = Object.getOwnPropertyDescriptor;
      n.f = t ? y : function (e, n) {
        if (e = o(e), n = a(n, !0), p) try {
          return y(e, n)
        } catch (e) {}
        if (c(e, n)) return r(!l.f.call(e, n), e[n])
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(31).f,
        r = i(5),
        o = i(29),
        a = i(19),
        c = i(71),
        p = i(65);
      e.exports = function (e, n) {
        var i, y, h, x, s, u = e.target,
          d = e.global,
          f = e.stat;
        if (i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype)
          for (y in n) {
            if (x = n[y], h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y], !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h) {
              if (typeof x == typeof h) continue;
              c(x, h)
            }(e.sham || h && h.sham) && r(x, "sham", !0), o(i, y, x, e)
          }
      }
    }, function (e, n) {
      var i = 0,
        t = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + t).toString(36))
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(6),
        r = t.document,
        o = l(r) && l(r.createElement);
      e.exports = function (e) {
        return o ? r.createElement(e) : {}
      }
    }, function (e, n, i) {
      var t = i(8),
        l = i(4),
        r = i(34);
      e.exports = !t && !l(function () {
        return 7 != Object.defineProperty(r("div"), "a", {
          get: function () {
            return 7
          }
        }).a
      })
    }, function (e, n, i) {
      var t = i(11);
      e.exports = t("native-function-to-string", Function.toString)
    }, function (e, n, i) {
      var t, l, r, o = i(76),
        a = i(0),
        c = i(6),
        p = i(5),
        y = i(1),
        h = i(16),
        x = i(15),
        s = a.WeakMap;
      if (o) {
        var u = new s,
          d = u.get,
          f = u.has,
          g = u.set;
        t = function (e, n) {
          return g.call(u, e, n), n
        }, l = function (e) {
          return d.call(u, e) || {}
        }, r = function (e) {
          return f.call(u, e)
        }
      } else {
        var v = h("state");
        x[v] = !0, t = function (e, n) {
          return p(e, v, n), n
        }, l = function (e) {
          return y(e, v) ? e[v] : {}
        }, r = function (e) {
          return y(e, v)
        }
      }
      e.exports = {
        set: t,
        get: l,
        has: r,
        enforce: function (e) {
          return r(e) ? l(e) : t(e, {})
        },
        getterFor: function (e) {
          return function (n) {
            var i;
            if (!c(n) || (i = l(n)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
            return i
          }
        }
      }
    }, function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = Object.assign || function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
          }
          return e
        },
        l = o(i(22)),
        r = o(i(12));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      n.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
        var n = document.querySelectorAll("[data-feather]");
        Array.from(n).forEach(function (n) {
          return function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = function (e) {
                return Array.from(e.attributes).reduce(function (e, n) {
                  return e[n.name] = n.value, e
                }, {})
              }(e),
              o = i["data-feather"];
            delete i["data-feather"];
            var a = r.default[o].toSvg(t({}, n, i, {
                class: (0, l.default)(n.class, i.class)
              })),
              c = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
            e.parentNode.replaceChild(c, e)
          }(n, e)
        })
      }
    }, function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t, l = i(12),
        r = (t = l) && t.__esModule ? t : {
          default: t
        };
      n.default = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
        if (!r.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
        return r.default[e].toSvg(n)
      }
    }, function (e) {
      e.exports = {
        activity: ["pulse", "health", "action", "motion"],
        airplay: ["stream", "cast", "mirroring"],
        "alert-circle": ["warning", "alert", "danger"],
        "alert-octagon": ["warning", "alert", "danger"],
        "alert-triangle": ["warning", "alert", "danger"],
        "align-center": ["text alignment", "center"],
        "align-justify": ["text alignment", "justified"],
        "align-left": ["text alignment", "left"],
        "align-right": ["text alignment", "right"],
        anchor: [],
        archive: ["index", "box"],
        "at-sign": ["mention", "at", "email", "message"],
        award: ["achievement", "badge"],
        aperture: ["camera", "photo"],
        "bar-chart": ["statistics", "diagram", "graph"],
        "bar-chart-2": ["statistics", "diagram", "graph"],
        battery: ["power", "electricity"],
        "battery-charging": ["power", "electricity"],
        bell: ["alarm", "notification", "sound"],
        "bell-off": ["alarm", "notification", "silent"],
        bluetooth: ["wireless"],
        "book-open": ["read", "library"],
        book: ["read", "dictionary", "booklet", "magazine", "library"],
        bookmark: ["read", "clip", "marker", "tag"],
        box: ["cube"],
        briefcase: ["work", "bag", "baggage", "folder"],
        calendar: ["date"],
        camera: ["photo"],
        cast: ["chromecast", "airplay"],
        circle: ["off", "zero", "record"],
        clipboard: ["copy"],
        clock: ["time", "watch", "alarm"],
        "cloud-drizzle": ["weather", "shower"],
        "cloud-lightning": ["weather", "bolt"],
        "cloud-rain": ["weather"],
        "cloud-snow": ["weather", "blizzard"],
        cloud: ["weather"],
        codepen: ["logo"],
        codesandbox: ["logo"],
        code: ["source", "programming"],
        coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
        columns: ["layout"],
        command: ["keyboard", "cmd", "terminal", "prompt"],
        compass: ["navigation", "safari", "travel", "direction"],
        copy: ["clone", "duplicate"],
        "corner-down-left": ["arrow", "return"],
        "corner-down-right": ["arrow"],
        "corner-left-down": ["arrow"],
        "corner-left-up": ["arrow"],
        "corner-right-down": ["arrow"],
        "corner-right-up": ["arrow"],
        "corner-up-left": ["arrow"],
        "corner-up-right": ["arrow"],
        cpu: ["processor", "technology"],
        "credit-card": ["purchase", "payment", "cc"],
        crop: ["photo", "image"],
        crosshair: ["aim", "target"],
        database: ["storage", "memory"],
        delete: ["remove"],
        disc: ["album", "cd", "dvd", "music"],
        "dollar-sign": ["currency", "money", "payment"],
        droplet: ["water"],
        edit: ["pencil", "change"],
        "edit-2": ["pencil", "change"],
        "edit-3": ["pencil", "change"],
        eye: ["view", "watch"],
        "eye-off": ["view", "watch", "hide", "hidden"],
        "external-link": ["outbound"],
        facebook: ["logo", "social"],
        "fast-forward": ["music"],
        figma: ["logo", "design", "tool"],
        "file-minus": ["delete", "remove", "erase"],
        "file-plus": ["add", "create", "new"],
        "file-text": ["data", "txt", "pdf"],
        film: ["movie", "video"],
        filter: ["funnel", "hopper"],
        flag: ["report"],
        "folder-minus": ["directory"],
        "folder-plus": ["directory"],
        folder: ["directory"],
        framer: ["logo", "design", "tool"],
        frown: ["emoji", "face", "bad", "sad", "emotion"],
        gift: ["present", "box", "birthday", "party"],
        "git-branch": ["code", "version control"],
        "git-commit": ["code", "version control"],
        "git-merge": ["code", "version control"],
        "git-pull-request": ["code", "version control"],
        github: ["logo", "version control"],
        gitlab: ["logo", "version control"],
        globe: ["world", "browser", "language", "translate"],
        "hard-drive": ["computer", "server", "memory", "data"],
        hash: ["hashtag", "number", "pound"],
        headphones: ["music", "audio", "sound"],
        heart: ["like", "love", "emotion"],
        "help-circle": ["question mark"],
        hexagon: ["shape", "node.js", "logo"],
        home: ["house", "living"],
        image: ["picture"],
        inbox: ["email"],
        instagram: ["logo", "camera"],
        key: ["password", "login", "authentication", "secure"],
        layers: ["stack"],
        layout: ["window", "webpage"],
        "life-bouy": ["help", "life ring", "support"],
        link: ["chain", "url"],
        "link-2": ["chain", "url"],
        linkedin: ["logo", "social media"],
        list: ["options"],
        lock: ["security", "password", "secure"],
        "log-in": ["sign in", "arrow", "enter"],
        "log-out": ["sign out", "arrow", "exit"],
        mail: ["email", "message"],
        "map-pin": ["location", "navigation", "travel", "marker"],
        map: ["location", "navigation", "travel"],
        maximize: ["fullscreen"],
        "maximize-2": ["fullscreen", "arrows", "expand"],
        meh: ["emoji", "face", "neutral", "emotion"],
        menu: ["bars", "navigation", "hamburger"],
        "message-circle": ["comment", "chat"],
        "message-square": ["comment", "chat"],
        "mic-off": ["record", "sound", "mute"],
        mic: ["record", "sound", "listen"],
        minimize: ["exit fullscreen", "close"],
        "minimize-2": ["exit fullscreen", "arrows", "close"],
        minus: ["subtract"],
        monitor: ["tv", "screen", "display"],
        moon: ["dark", "night"],
        "more-horizontal": ["ellipsis"],
        "more-vertical": ["ellipsis"],
        "mouse-pointer": ["arrow", "cursor"],
        move: ["arrows"],
        music: ["note"],
        navigation: ["location", "travel"],
        "navigation-2": ["location", "travel"],
        octagon: ["stop"],
        package: ["box", "container"],
        paperclip: ["attachment"],
        pause: ["music", "stop"],
        "pause-circle": ["music", "audio", "stop"],
        "pen-tool": ["vector", "drawing"],
        percent: ["discount"],
        "phone-call": ["ring"],
        "phone-forwarded": ["call"],
        "phone-incoming": ["call"],
        "phone-missed": ["call"],
        "phone-off": ["call", "mute"],
        "phone-outgoing": ["call"],
        phone: ["call"],
        play: ["music", "start"],
        "pie-chart": ["statistics", "diagram"],
        "play-circle": ["music", "start"],
        plus: ["add", "new"],
        "plus-circle": ["add", "new"],
        "plus-square": ["add", "new"],
        pocket: ["logo", "save"],
        power: ["on", "off"],
        printer: ["fax", "office", "device"],
        radio: ["signal"],
        "refresh-cw": ["synchronise", "arrows"],
        "refresh-ccw": ["arrows"],
        repeat: ["loop", "arrows"],
        rewind: ["music"],
        "rotate-ccw": ["arrow"],
        "rotate-cw": ["arrow"],
        rss: ["feed", "subscribe"],
        save: ["floppy disk"],
        scissors: ["cut"],
        search: ["find", "magnifier", "magnifying glass"],
        send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
        settings: ["cog", "edit", "gear", "preferences"],
        "share-2": ["network", "connections"],
        shield: ["security", "secure"],
        "shield-off": ["security", "insecure"],
        "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
        "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
        shuffle: ["music"],
        "skip-back": ["music"],
        "skip-forward": ["music"],
        slack: ["logo"],
        slash: ["ban", "no"],
        sliders: ["settings", "controls"],
        smartphone: ["cellphone", "device"],
        smile: ["emoji", "face", "happy", "good", "emotion"],
        speaker: ["audio", "music"],
        star: ["bookmark", "favorite", "like"],
        "stop-circle": ["media", "music"],
        sun: ["brightness", "weather", "light"],
        sunrise: ["weather", "time", "morning", "day"],
        sunset: ["weather", "time", "evening", "night"],
        tablet: ["device"],
        tag: ["label"],
        target: ["logo", "bullseye"],
        terminal: ["code", "command line", "prompt"],
        thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
        "thumbs-down": ["dislike", "bad", "emotion"],
        "thumbs-up": ["like", "good", "emotion"],
        "toggle-left": ["on", "off", "switch"],
        "toggle-right": ["on", "off", "switch"],
        tool: ["settings", "spanner"],
        trash: ["garbage", "delete", "remove", "bin"],
        "trash-2": ["garbage", "delete", "remove", "bin"],
        triangle: ["delta"],
        truck: ["delivery", "van", "shipping", "transport", "lorry"],
        tv: ["television", "stream"],
        twitch: ["logo"],
        twitter: ["logo", "social"],
        type: ["text"],
        umbrella: ["rain", "weather"],
        unlock: ["security"],
        "user-check": ["followed", "subscribed"],
        "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
        "user-plus": ["new", "add", "create", "follow", "subscribe"],
        "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
        user: ["person", "account"],
        users: ["group"],
        "video-off": ["camera", "movie", "film"],
        video: ["camera", "movie", "film"],
        voicemail: ["phone"],
        volume: ["music", "sound", "mute"],
        "volume-1": ["music", "sound"],
        "volume-2": ["music", "sound"],
        "volume-x": ["music", "sound", "mute"],
        watch: ["clock", "time"],
        "wifi-off": ["disabled"],
        wifi: ["connection", "signal", "wireless"],
        wind: ["weather", "air"],
        "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
        "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
        "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
        x: ["cancel", "close", "delete", "remove", "times", "clear"],
        youtube: ["logo", "video", "play"],
        "zap-off": ["flash", "camera", "lightning"],
        zap: ["flash", "camera", "lightning"],
        "zoom-in": ["magnifying glass"],
        "zoom-out": ["magnifying glass"]
      }
    }, function (e) {
      e.exports = {
        activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
        "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
        "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
        "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
        anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
        aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
        "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
        "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
        "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
        "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
        "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
        "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
        "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
        "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
        "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
        "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
        "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
        "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
        "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
        award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
        "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
        battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
        "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
        bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
        bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
        "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
        camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
        cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
        "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>',
        "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
        "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
        "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
        "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
        "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
        "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
        "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
        "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
        chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
        circle: '<circle cx="12" cy="12" r="10"></circle>',
        clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
        clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
        "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
        cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
        codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
        command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
        compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
        "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
        "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
        "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
        "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
        "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
        "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
        "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
        "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
        "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
        crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
        crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
        disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
        "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
        "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
        divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
        "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
        droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
        "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
        "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
        edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
        "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
        "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
        facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
        feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
        figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
        "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
        file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
        film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
        "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
        "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
        folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
        framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
        frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
        "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
        "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
        "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
        "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
        hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
        headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
        heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
        inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
        instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
        italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
        key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
        layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
        layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
        "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
        meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
        "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
        "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
        "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
        minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
        monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
        "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
        "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
        move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
        music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
        "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
        navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
        octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
        package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
        pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
        "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
        percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
        "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
        "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
        "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
        pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
        power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
        radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
        "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
        "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
        rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
        "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
        save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
        scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
        search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
        settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
        share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
        "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
        "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
        sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
        "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
        "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
        slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
        slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
        smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
        square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
        sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
        sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
        sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
        tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
        target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
        "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
        "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
        "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
        tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
        trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
        "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
        "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
        triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
        truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
        twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
        umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
        underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
        unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
        "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
        upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
        "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
        "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
        "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
        volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
        watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
        "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
        "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
        x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
        "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
      }
    }, function (e) {
      e.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }, function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var t = Object.assign || function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
          }
          return e
        },
        l = function () {
          function e(e, n) {
            for (var i = 0; i < n.length; i++) {
              var t = n[i];
              t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
          }
          return function (n, i, t) {
            return i && e(n.prototype, i), t && e(n, t), n
          }
        }(),
        r = a(i(22)),
        o = a(i(42));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function () {
        function e(n, i) {
          var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          ! function (e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.name = n, this.contents = i, this.tags = l, this.attrs = t({}, o.default, {
            class: "feather feather-" + n
          })
        }
        return l(e, [{
          key: "toSvg",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return "<svg " + function (e) {
              return Object.keys(e).map(function (n) {
                return n + '="' + e[n] + '"'
              }).join(" ")
            }(t({}, this.attrs, e, {
              class: (0, r.default)(this.attrs.class, e.class)
            })) + ">" + this.contents + "</svg>"
          }
        }, {
          key: "toString",
          value: function () {
            return this.contents
          }
        }]), e
      }();
      n.default = c
    }, function (e, n, i) {
      "use strict";
      var t = o(i(12)),
        l = o(i(39)),
        r = o(i(38));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      e.exports = {
        icons: t.default,
        toSvg: l.default,
        replace: r.default
      }
    }, function (e, n, i) {
      e.exports = i(0)
    }, function (e, n, i) {
      var t = i(2)("iterator"),
        l = !1;
      try {
        var r = 0,
          o = {
            next: function () {
              return {
                done: !!r++
              }
            },
            return: function () {
              l = !0
            }
          };
        o[t] = function () {
          return this
        }, Array.from(o, function () {
          throw 2
        })
      } catch (e) {}
      e.exports = function (e, n) {
        if (!n && !l) return !1;
        var i = !1;
        try {
          var r = {};
          r[t] = function () {
            return {
              next: function () {
                return {
                  done: i = !0
                }
              }
            }
          }, e(r)
        } catch (e) {}
        return i
      }
    }, function (e, n, i) {
      var t = i(30),
        l = i(2)("toStringTag"),
        r = "Arguments" == t(function () {
          return arguments
        }());
      e.exports = function (e) {
        var n, i, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function (e, n) {
          try {
            return e[n]
          } catch (e) {}
        }(n = Object(e), l)) ? i : r ? t(n) : "Object" == (o = t(n)) && "function" == typeof n.callee ? "Arguments" : o
      }
    }, function (e, n, i) {
      var t = i(47),
        l = i(9),
        r = i(2)("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)]
      }
    }, function (e, n, i) {
      "use strict";
      var t = i(18),
        l = i(7),
        r = i(10);
      e.exports = function (e, n, i) {
        var o = t(n);
        o in e ? l.f(e, o, r(0, i)) : e[o] = i
      }
    }, function (e, n, i) {
      var t = i(2),
        l = i(9),
        r = t("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (l.Array === e || o[r] === e)
      }
    }, function (e, n, i) {
      var t = i(3);
      e.exports = function (e, n, i, l) {
        try {
          return l ? n(t(i)[0], i[1]) : n(i)
        } catch (n) {
          var r = e.return;
          throw void 0 !== r && t(r.call(e)), n
        }
      }
    }, function (e, n) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
      }
    }, function (e, n, i) {
      var t = i(52);
      e.exports = function (e, n, i) {
        if (t(e), void 0 === n) return e;
        switch (i) {
          case 0:
            return function () {
              return e.call(n)
            };
          case 1:
            return function (i) {
              return e.call(n, i)
            };
          case 2:
            return function (i, t) {
              return e.call(n, i, t)
            };
          case 3:
            return function (i, t, l) {
              return e.call(n, i, t, l)
            }
        }
        return function () {
          return e.apply(n, arguments)
        }
      }
    }, function (e, n, i) {
      "use strict";
      var t = i(53),
        l = i(24),
        r = i(51),
        o = i(50),
        a = i(27),
        c = i(49),
        p = i(48);
      e.exports = function (e) {
        var n, i, y, h, x = l(e),
          s = "function" == typeof this ? this : Array,
          u = arguments.length,
          d = u > 1 ? arguments[1] : void 0,
          f = void 0 !== d,
          g = 0,
          v = p(x);
        if (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)), void 0 == v || s == Array && o(v))
          for (i = new s(n = a(x.length)); n > g; g++) c(i, g, f ? d(x[g], g) : x[g]);
        else
          for (h = v.call(x), i = new s; !(y = h.next()).done; g++) c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
        return i.length = g, i
      }
    }, function (e, n, i) {
      var t = i(32),
        l = i(54);
      t({
        target: "Array",
        stat: !0,
        forced: !i(46)(function (e) {
          Array.from(e)
        })
      }, {
        from: l
      })
    }, function (e, n, i) {
      var t = i(6),
        l = i(3);
      e.exports = function (e, n) {
        if (l(e), !t(n) && null !== n) throw TypeError("Can't set " + String(n) + " as a prototype")
      }
    }, function (e, n, i) {
      var t = i(56);
      e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, n = !1,
          i = {};
        try {
          (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), n = i instanceof Array
        } catch (e) {}
        return function (i, l) {
          return t(i, l), n ? e.call(i, l) : i.__proto__ = l, i
        }
      }() : void 0)
    }, function (e, n, i) {
      var t = i(0).document;
      e.exports = t && t.documentElement
    }, function (e, n, i) {
      var t = i(28),
        l = i(13);
      e.exports = Object.keys || function (e) {
        return t(e, l)
      }
    }, function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(3),
        o = i(59);
      e.exports = t ? Object.defineProperties : function (e, n) {
        r(e);
        for (var i, t = o(n), a = t.length, c = 0; a > c;) l.f(e, i = t[c++], n[i]);
        return e
      }
    }, function (e, n, i) {
      var t = i(3),
        l = i(60),
        r = i(13),
        o = i(15),
        a = i(58),
        c = i(34),
        p = i(16)("IE_PROTO"),
        y = function () {},
        h = function () {
          var e, n = c("iframe"),
            i = r.length;
          for (n.style.display = "none", a.appendChild(n), n.src = String("javascript:"), (e = n.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), h = e.F; i--;) delete h.prototype[r[i]];
          return h()
        };
      e.exports = Object.create || function (e, n) {
        var i;
        return null !== e ? (y.prototype = t(e), i = new y, y.prototype = null, i[p] = e) : i = h(), void 0 === n ? i : l(i, n)
      }, o[p] = !0
    }, function (e, n, i) {
      var t = i(4);
      e.exports = !!Object.getOwnPropertySymbols && !t(function () {
        return !String(Symbol())
      })
    }, function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
      })
    }, function (e, n, i) {
      "use strict";
      var t = i(26).IteratorPrototype,
        l = i(61),
        r = i(10),
        o = i(23),
        a = i(9),
        c = function () {
          return this
        };
      e.exports = function (e, n, i) {
        var p = n + " Iterator";
        return e.prototype = l(t, {
          next: r(1, i)
        }), o(e, p, !1, !0), a[p] = c, e
      }
    }, function (e, n, i) {
      var t = i(4),
        l = /#|\.prototype\./,
        r = function (e, n) {
          var i = a[o(e)];
          return i == p || i != c && ("function" == typeof n ? t(n) : !!n)
        },
        o = r.normalize = function (e) {
          return String(e).replace(l, ".").toLowerCase()
        },
        a = r.data = {},
        c = r.NATIVE = "N",
        p = r.POLYFILL = "P";
      e.exports = r
    }, function (e, n) {
      n.f = Object.getOwnPropertySymbols
    }, function (e, n, i) {
      var t = i(21),
        l = Math.max,
        r = Math.min;
      e.exports = function (e, n) {
        var i = t(e);
        return i < 0 ? l(i + n, 0) : r(i, n)
      }
    }, function (e, n, i) {
      var t = i(14),
        l = i(27),
        r = i(67);
      e.exports = function (e) {
        return function (n, i, o) {
          var a, c = t(n),
            p = l(c.length),
            y = r(o, p);
          if (e && i != i) {
            for (; p > y;)
              if ((a = c[y++]) != a) return !0
          } else
            for (; p > y; y++)
              if ((e || y in c) && c[y] === i) return e || y || 0;
          return !e && -1
        }
      }
    }, function (e, n, i) {
      var t = i(28),
        l = i(13).concat("length", "prototype");
      n.f = Object.getOwnPropertyNames || function (e) {
        return t(e, l)
      }
    }, function (e, n, i) {
      var t = i(0),
        l = i(69),
        r = i(66),
        o = i(3),
        a = t.Reflect;
      e.exports = a && a.ownKeys || function (e) {
        var n = l.f(o(e)),
          i = r.f;
        return i ? n.concat(i(e)) : n
      }
    }, function (e, n, i) {
      var t = i(1),
        l = i(70),
        r = i(31),
        o = i(7);
      e.exports = function (e, n) {
        for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
          var y = i[p];
          t(e, y) || a(e, y, c(n, y))
        }
      }
    }, function (e, n, i) {
      var t = i(4),
        l = i(30),
        r = "".split;
      e.exports = t(function () {
        return !Object("z").propertyIsEnumerable(0)
      }) ? function (e) {
        return "String" == l(e) ? r.call(e, "") : Object(e)
      } : Object
    }, function (e, n, i) {
      "use strict";
      var t = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        r = l && !t.call({
          1: 2
        }, 1);
      n.f = r ? function (e) {
        var n = l(this, e);
        return !!n && n.enumerable
      } : t
    }, function (e, n, i) {
      "use strict";
      var t = i(32),
        l = i(64),
        r = i(25),
        o = i(57),
        a = i(23),
        c = i(5),
        p = i(29),
        y = i(2),
        h = i(17),
        x = i(9),
        s = i(26),
        u = s.IteratorPrototype,
        d = s.BUGGY_SAFARI_ITERATORS,
        f = y("iterator"),
        g = function () {
          return this
        };
      e.exports = function (e, n, i, y, s, v, m) {
        l(i, n, y);
        var w, M, b, z = function (e) {
            if (e === s && O) return O;
            if (!d && e in H) return H[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new i(this, e)
                }
            }
            return function () {
              return new i(this)
            }
          },
          A = n + " Iterator",
          k = !1,
          H = e.prototype,
          V = H[f] || H["@@iterator"] || s && H[s],
          O = !d && V || z(s),
          j = "Array" == n && H.entries || V;
        if (j && (w = r(j.call(new e)), u !== Object.prototype && w.next && (h || r(w) === u || (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)), a(w, A, !0, !0), h && (x[A] = g))), "values" == s && V && "values" !== V.name && (k = !0, O = function () {
            return V.call(this)
          }), h && !m || H[f] === O || c(H, f, O), x[n] = O, s)
          if (M = {
              values: z("values"),
              keys: v ? O : z("keys"),
              entries: z("entries")
            }, m)
            for (b in M) !d && !k && b in H || p(H, b, M[b]);
          else t({
            target: n,
            proto: !0,
            forced: d || k
          }, M);
        return M
      }
    }, function (e, n) {
      var i;
      i = function () {
        return this
      }();
      try {
        i = i || Function("return this")() || (0, eval)("this")
      } catch (e) {
        "object" == typeof window && (i = window)
      }
      e.exports = i
    }, function (e, n, i) {
      var t = i(0),
        l = i(36),
        r = t.WeakMap;
      e.exports = "function" == typeof r && /native code/.test(l.call(r))
    }, function (e, n, i) {
      var t = i(21),
        l = i(20);
      e.exports = function (e, n, i) {
        var r, o, a = String(l(e)),
          c = t(n),
          p = a.length;
        return c < 0 || c >= p ? i ? "" : void 0 : (r = a.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === p || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343 ? i ? a.charAt(c) : r : i ? a.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
      }
    }, function (e, n, i) {
      "use strict";
      var t = i(77),
        l = i(37),
        r = i(74),
        o = l.set,
        a = l.getterFor("String Iterator");
      r(String, "String", function (e) {
        o(this, {
          type: "String Iterator",
          string: String(e),
          index: 0
        })
      }, function () {
        var e, n = a(this),
          i = n.string,
          l = n.index;
        return l >= i.length ? {
          value: void 0,
          done: !0
        } : (e = t(i, l, !0), n.index += e.length, {
          value: e,
          done: !1
        })
      })
    }, function (e, n, i) {
      i(78), i(55);
      var t = i(45);
      e.exports = t.Array.from
    }, function (e, n, i) {
      i(79), e.exports = i(44)
    }])
  });
  // custom_slick
  $(".slick-1")
  .slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  })
  .slickAnimation();

$(".slick-2")
  .slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="custom-arrow next"><span>Next</span><i class="fas fa-chevron-right ms-3"></i></div>',
    prevArrow: '<div class="custom-arrow prev"><i class="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
  })
  .slickAnimation();

$(".insta-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
});

$(".insta-slider1").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide-1-1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  dots: true,
  arrows: false,
});

$(".slide-1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});

$(".slide-2").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 500,
  autoplay: true,
  dots: true,
  arrows: false,
});

$(".slide-3").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
});

$(".slide-three").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }],
});

$(".slide-3-1").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    },
  ],
});

$(".slide-4").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-4_1").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-5").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-5_1").slick({
  dots: true,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-6").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 705,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-7").slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide-7-1").slick({
  dots: true,
  infinite: false,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".our-product").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".product-slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".brand-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".category-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1501,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        fade: true,
        speed: 800,
      },
    },
  ],
});

$(".category-slider1").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1425,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        fade: true,
      },
    },
  ],
});

$(".category-slider2").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true,
        fade: true,
      },
    },
  ],
});

$(".quick-view-slider").each(function (key, item) {
  var sliderIdName = "slider" + key;
  var sliderNavIdName = "sliderNav" + key;

  this.id = sliderIdName;
  $(".quick-nav")[key].id = sliderNavIdName;

  var sliderId = "#" + sliderIdName;
  var sliderNavId = "#" + sliderNavIdName;

  $(sliderId).slick({
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: sliderNavId,
  });

  $(sliderNavId).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderId,
    swipe: false,
    vertical: true,
    verticalScrolling: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });
});

$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        infinite: false,
        arrows: false,
        slidesToShow: 1,
      },
    }, ],
  });
});

$(document).ready(function () {
  $(".custome-service-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".arrivals-shoes-image").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true,
    dots: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
  nextArrow: '<div class="custom-arrow next"><span>Next</span><i class="fas fa-chevron-right ms-3"></i></div>',
  prevArrow: '<div class="custom-arrow prev"><i class="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  verticalSwiping: true,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
  vertical: true,
});

$(document).ready(function () {
  $(".details-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".details-image-option",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".details-image-option").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details-image",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".details-image-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".details-image-vertical",
  });
  $(".details-image-vertical").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details-image-1",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerPadding: 0,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        vertical: false,
      },
    }, ],
  });
});

// slick-animation.min
/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin HĂÂĽbner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
 !(function (a) {
    a.fn.slickAnimation = function () {
      function n(a, n, t, i, o) {
        (o = "undefined" != typeof o ? o : !1),
        1 == n.opacity ?
          (a.addClass(t), a.addClass(i)) :
          (a.removeClass(t), a.removeClass(i)),
          o && a.css(n);
      }

      function t(a, n) {
        return a ? 1e3 * a + 1e3 : n ? 1e3 * n : a || n ? 1e3 * a + 1e3 * n : 1e3;
      }

      function i(a, n, t) {
        var i = [
            "animation-" + n,
            "-webkit-animation-" + n,
            "-moz-animation-" + n,
            "-o-animation-" + n,
            "-ms-animation-" + n,
          ],
          o = {};
        i.forEach(function (a) {
            o[a] = t + "s";
          }),
          a.css(o);
      }
      var o = a(this),
        e = o.find(".slick-list .slick-track > div"),
        s = o.find('[data-slick-index="0"]'),
        r = "animated",
        c = {
          opacity: "1"
        },
        d = {
          opacity: "0"
        };
      return (
        e.each(function () {
          var e = a(this);
          e.find("[data-animation-in]").each(function () {
            var u = a(this);
            u.css(d);
            var l = u.attr("data-animation-in"),
              f = u.attr("data-animation-out"),
              h = u.attr("data-delay-in"),
              m = u.attr("data-duration-in"),
              y = u.attr("data-delay-out"),
              C = u.attr("data-duration-out");
            f
              ?
              (s.length > 0 &&
                e.hasClass("slick-current") &&
                (n(u, c, l, r, !0),
                  h && i(u, "delay", h),
                  m && i(u, "duration", m),
                  setTimeout(function () {
                    n(u, d, l, r),
                      n(u, c, f, r),
                      y && i(u, "delay", y),
                      C && i(u, "duration", C);
                  }, t(h, m))),
                o.on("afterChange", function (a, o, s) {
                  e.hasClass("slick-current") &&
                    (n(u, c, l, r, !0),
                      h && i(u, "delay", h),
                      m && i(u, "duration", m),
                      setTimeout(function () {
                        n(u, d, l, r),
                          n(u, c, f, r),
                          y && i(u, "delay", y),
                          C && i(u, "duration", C);
                      }, t(h, m)));
                }),
                o.on("beforeChange", function (a, t, i) {
                  n(u, d, f, r, !0);
                })) :
              (s.length > 0 &&
                e.hasClass("slick-current") &&
                (n(u, c, l, r, !0),
                  h && i(u, "delay", h),
                  m && i(u, "duration", m)),
                o.on("afterChange", function (a, t, o) {
                  e.hasClass("slick-current") &&
                    (n(u, c, l, r, !0),
                      h && i(u, "delay", h),
                      m && i(u, "duration", m));
                }),
                o.on("beforeChange", function (a, t, i) {
                  n(u, d, l, r, !0);
                }));
          });
        }),
        this
      );
    };
  })(jQuery);

  //slick
  /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  })(function ($) {
    "use strict";
    var Slick = window.Slick || {};

    Slick = (function () {
      var instanceUid = 0;

      function Slick(element, settings) {
        var _ = this,
          dataSettings;

        _.defaults = {
          accessibility: true,
          adaptiveHeight: false,
          appendArrows: $(element),
          appendDots: $(element),
          arrows: true,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
          autoplay: false,
          autoplaySpeed: 3000,
          centerMode: false,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (slider, i) {
            return $('<button type="button" />').text(i + 1);
          },
          dots: false,
          dotsClass: "slick-dots",
          draggable: true,
          easing: "linear",
          edgeFriction: 0.35,
          fade: false,
          focusOnSelect: false,
          focusOnChange: false,
          infinite: true,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          pauseOnDotsHover: false,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: false,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: true,
          swipeToSlide: false,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          useTransform: true,
          variableWidth: false,
          vertical: false,
          verticalSwiping: false,
          waitForAnimate: true,
          zIndex: 1000,
        };

        _.initials = {
          animating: false,
          dragging: false,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: false,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: false,
          slideOffset: 0,
          swipeLeft: null,
          swiping: false,
          $list: null,
          touchObject: {},
          transformsEnabled: false,
          unslicked: false,
        };

        $.extend(_, _.initials);

        _.activeBreakpoint = null;
        _.animType = null;
        _.animProp = null;
        _.breakpoints = [];
        _.breakpointSettings = [];
        _.cssTransitions = false;
        _.focussed = false;
        _.interrupted = false;
        _.hidden = "hidden";
        _.paused = true;
        _.positionProp = null;
        _.respondTo = null;
        _.rowCount = 1;
        _.shouldClick = true;
        _.$slider = $(element);
        _.$slidesCache = null;
        _.transformType = null;
        _.transitionType = null;
        _.visibilityChange = "visibilitychange";
        _.windowWidth = 0;
        _.windowTimer = null;

        dataSettings = $(element).data("slick") || {};

        _.options = $.extend({}, _.defaults, settings, dataSettings);

        _.currentSlide = _.options.initialSlide;

        _.originalSettings = _.options;

        if (typeof document.mozHidden !== "undefined") {
          _.hidden = "mozHidden";
          _.visibilityChange = "mozvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
          _.hidden = "webkitHidden";
          _.visibilityChange = "webkitvisibilitychange";
        }

        _.autoPlay = $.proxy(_.autoPlay, _);
        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
        _.changeSlide = $.proxy(_.changeSlide, _);
        _.clickHandler = $.proxy(_.clickHandler, _);
        _.selectHandler = $.proxy(_.selectHandler, _);
        _.setPosition = $.proxy(_.setPosition, _);
        _.swipeHandler = $.proxy(_.swipeHandler, _);
        _.dragHandler = $.proxy(_.dragHandler, _);
        _.keyHandler = $.proxy(_.keyHandler, _);

        _.instanceUid = instanceUid++;

        // A simple way to check for HTML strings
        // Strict HTML recognition (must start with <)
        // Extracted from jQuery v1.11 source
        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

        _.registerBreakpoints();
        _.init(true);
      }

      return Slick;
    })();

    Slick.prototype.activateADA = function () {
      var _ = this;

      _.$slideTrack
        .find(".slick-active")
        .attr({
          "aria-hidden": "false",
        })
        .find("a, input, button, select")
        .attr({
          tabindex: "0",
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
      markup,
      index,
      addBefore
    ) {
      var _ = this;

      if (typeof index === "boolean") {
        addBefore = index;
        index = null;
      } else if (index < 0 || index >= _.slideCount) {
        return false;
      }

      _.unload();

      if (typeof index === "number") {
        if (index === 0 && _.$slides.length === 0) {
          $(markup).appendTo(_.$slideTrack);
        } else if (addBefore) {
          $(markup).insertBefore(_.$slides.eq(index));
        } else {
          $(markup).insertAfter(_.$slides.eq(index));
        }
      } else {
        if (addBefore === true) {
          $(markup).prependTo(_.$slideTrack);
        } else {
          $(markup).appendTo(_.$slideTrack);
        }
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slides.each(function (index, element) {
        $(element).attr("data-slick-index", index);
      });

      _.$slidesCache = _.$slides;

      _.reinit();
    };

    Slick.prototype.animateHeight = function () {
      var _ = this;
      if (
        _.options.slidesToShow === 1 &&
        _.options.adaptiveHeight === true &&
        _.options.vertical === false
      ) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.animate({
            height: targetHeight,
          },
          _.options.speed
        );
      }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {
      var animProps = {},
        _ = this;

      _.animateHeight();

      if (_.options.rtl === true && _.options.vertical === false) {
        targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
        if (_.options.vertical === false) {
          _.$slideTrack.animate({
              left: targetLeft,
            },
            _.options.speed,
            _.options.easing,
            callback
          );
        } else {
          _.$slideTrack.animate({
              top: targetLeft,
            },
            _.options.speed,
            _.options.easing,
            callback
          );
        }
      } else {
        if (_.cssTransitions === false) {
          if (_.options.rtl === true) {
            _.currentLeft = -_.currentLeft;
          }
          $({
            animStart: _.currentLeft,
          }).animate({
            animStart: targetLeft,
          }, {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function (now) {
              now = Math.ceil(now);
              if (_.options.vertical === false) {
                animProps[_.animType] = "translate(" + now + "px, 0px)";
                _.$slideTrack.css(animProps);
              } else {
                animProps[_.animType] = "translate(0px," + now + "px)";
                _.$slideTrack.css(animProps);
              }
            },
            complete: function () {
              if (callback) {
                callback.call();
              }
            },
          });
        } else {
          _.applyTransition();
          targetLeft = Math.ceil(targetLeft);

          if (_.options.vertical === false) {
            animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
          } else {
            animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
          }
          _.$slideTrack.css(animProps);

          if (callback) {
            setTimeout(function () {
              _.disableTransition();

              callback.call();
            }, _.options.speed);
          }
        }
      }
    };

    Slick.prototype.getNavTarget = function () {
      var _ = this,
        asNavFor = _.options.asNavFor;

      if (asNavFor && asNavFor !== null) {
        asNavFor = $(asNavFor).not(_.$slider);
      }

      return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {
      var _ = this,
        asNavFor = _.getNavTarget();

      if (asNavFor !== null && typeof asNavFor === "object") {
        asNavFor.each(function () {
          var target = $(this).slick("getSlick");
          if (!target.unslicked) {
            target.slideHandler(index, true);
          }
        });
      }
    };

    Slick.prototype.applyTransition = function (slide) {
      var _ = this,
        transition = {};

      if (_.options.fade === false) {
        transition[_.transitionType] =
          _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
      } else {
        transition[_.transitionType] =
          "opacity " + _.options.speed + "ms " + _.options.cssEase;
      }

      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };

    Slick.prototype.autoPlay = function () {
      var _ = this;

      _.autoPlayClear();

      if (_.slideCount > _.options.slidesToShow) {
        _.autoPlayTimer = setInterval(
          _.autoPlayIterator,
          _.options.autoplaySpeed
        );
      }
    };

    Slick.prototype.autoPlayClear = function () {
      var _ = this;

      if (_.autoPlayTimer) {
        clearInterval(_.autoPlayTimer);
      }
    };

    Slick.prototype.autoPlayIterator = function () {
      var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

      if (!_.paused && !_.interrupted && !_.focussed) {
        if (_.options.infinite === false) {
          if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
            _.direction = 0;
          } else if (_.direction === 0) {
            slideTo = _.currentSlide - _.options.slidesToScroll;

            if (_.currentSlide - 1 === 0) {
              _.direction = 1;
            }
          }
        }

        _.slideHandler(slideTo);
      }
    };

    Slick.prototype.buildArrows = function () {
      var _ = this;

      if (_.options.arrows === true) {
        _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
        _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");

        if (_.slideCount > _.options.slidesToShow) {
          _.$prevArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex");
          _.$nextArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex");

          if (_.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.prependTo(_.options.appendArrows);
          }

          if (_.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.appendTo(_.options.appendArrows);
          }

          if (_.options.infinite !== true) {
            _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          }
        } else {
          _.$prevArrow
            .add(_.$nextArrow)

            .addClass("slick-hidden")
            .attr({
              "aria-disabled": "true",
              tabindex: "-1",
            });
        }
      }
    };

    Slick.prototype.buildDots = function () {
      var _ = this,
        i,
        dot;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$slider.addClass("slick-dotted");

        dot = $("<ul />").addClass(_.options.dotsClass);

        for (i = 0; i <= _.getDotCount(); i += 1) {
          dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
        }

        _.$dots = dot.appendTo(_.options.appendDots);

        _.$dots.find("li").first().addClass("slick-active");
      }
    };

    Slick.prototype.buildOut = function () {
      var _ = this;

      _.$slides = _.$slider
        .children(_.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide");

      _.slideCount = _.$slides.length;

      _.$slides.each(function (index, element) {
        $(element)
          .attr("data-slick-index", index)
          .data("originalStyling", $(element).attr("style") || "");
      });

      _.$slider.addClass("slick-slider");

      _.$slideTrack =
        _.slideCount === 0 ?
        $('<div class="slick-track"/>').appendTo(_.$slider) :
        _.$slides.wrapAll('<div class="slick-track"/>').parent();

      _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
      _.$slideTrack.css("opacity", 0);

      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
        _.options.slidesToScroll = 1;
      }

      $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");

      _.setupInfinite();

      _.buildArrows();

      _.buildDots();

      _.updateDots();

      _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

      if (_.options.draggable === true) {
        _.$list.addClass("draggable");
      }
    };

    Slick.prototype.buildRows = function () {
      var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

      newSlides = document.createDocumentFragment();
      originalSlides = _.$slider.children();

      if (_.options.rows > 0) {
        slidesPerSection = _.options.slidesPerRow * _.options.rows;
        numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

        for (a = 0; a < numOfSlides; a++) {
          var slide = document.createElement("div");
          for (b = 0; b < _.options.rows; b++) {
            var row = document.createElement("div");
            for (c = 0; c < _.options.slidesPerRow; c++) {
              var target =
                a * slidesPerSection + (b * _.options.slidesPerRow + c);
              if (originalSlides.get(target)) {
                row.appendChild(originalSlides.get(target));
              }
            }
            slide.appendChild(row);
          }
          newSlides.appendChild(slide);
        }

        _.$slider.empty().append(newSlides);
        _.$slider
          .children()
          .children()
          .children()
          .css({
            width: 100 / _.options.slidesPerRow + "%",
            display: "inline-block",
          });
      }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {
      var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();

      if (_.respondTo === "window") {
        respondToWidth = windowWidth;
      } else if (_.respondTo === "slider") {
        respondToWidth = sliderWidth;
      } else if (_.respondTo === "min") {
        respondToWidth = Math.min(windowWidth, sliderWidth);
      }

      if (
        _.options.responsive &&
        _.options.responsive.length &&
        _.options.responsive !== null
      ) {
        targetBreakpoint = null;

        for (breakpoint in _.breakpoints) {
          if (_.breakpoints.hasOwnProperty(breakpoint)) {
            if (_.originalSettings.mobileFirst === false) {
              if (respondToWidth < _.breakpoints[breakpoint]) {
                targetBreakpoint = _.breakpoints[breakpoint];
              }
            } else {
              if (respondToWidth > _.breakpoints[breakpoint]) {
                targetBreakpoint = _.breakpoints[breakpoint];
              }
            }
          }
        }

        if (targetBreakpoint !== null) {
          if (_.activeBreakpoint !== null) {
            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
              _.activeBreakpoint = targetBreakpoint;
              if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                _.unslick(targetBreakpoint);
              } else {
                _.options = $.extend({},
                  _.originalSettings,
                  _.breakpointSettings[targetBreakpoint]
                );
                if (initial === true) {
                  _.currentSlide = _.options.initialSlide;
                }
                _.refresh(initial);
              }
              triggerBreakpoint = targetBreakpoint;
            }
          } else {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({},
                _.originalSettings,
                _.breakpointSettings[targetBreakpoint]
              );
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          if (_.activeBreakpoint !== null) {
            _.activeBreakpoint = null;
            _.options = _.originalSettings;
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
            triggerBreakpoint = targetBreakpoint;
          }
        }

        // only trigger breakpoints during an actual break. not on initialize.
        if (!initial && triggerBreakpoint !== false) {
          _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
        }
      }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {
      var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset;

      // If target is a link, prevent default action.
      if ($target.is("a")) {
        event.preventDefault();
      }

      // If target is not the <li> element (ie: a child), find the <li>.
      if (!$target.is("li")) {
        $target = $target.closest("li");
      }

      unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
      indexOffset = unevenOffset ?
        0 :
        (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

      switch (event.data.message) {
        case "previous":
          slideOffset =
            indexOffset === 0 ?
            _.options.slidesToScroll :
            _.options.slidesToShow - indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
          }
          break;

        case "next":
          slideOffset =
            indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
          }
          break;

        case "index":
          var index =
            event.data.index === 0 ?
            0 :
            event.data.index || $target.index() * _.options.slidesToScroll;

          _.slideHandler(_.checkNavigable(index), false, dontAnimate);
          $target.children().trigger("focus");
          break;

        default:
          return;
      }
    };

    Slick.prototype.checkNavigable = function (index) {
      var _ = this,
        navigables,
        prevNavigable;

      navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
        index = navigables[navigables.length - 1];
      } else {
        for (var n in navigables) {
          if (index < navigables[n]) {
            index = prevNavigable;
            break;
          }
          prevNavigable = navigables[n];
        }
      }

      return index;
    };

    Slick.prototype.cleanUpEvents = function () {
      var _ = this;

      if (_.options.dots && _.$dots !== null) {
        $("li", _.$dots)
          .off("click.slick", _.changeSlide)
          .off("mouseenter.slick", $.proxy(_.interrupt, _, true))
          .off("mouseleave.slick", $.proxy(_.interrupt, _, false));

        if (_.options.accessibility === true) {
          _.$dots.off("keydown.slick", _.keyHandler);
        }
      }

      _.$slider.off("focus.slick blur.slick");

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
        _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);

        if (_.options.accessibility === true) {
          _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
          _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
        }
      }

      _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
      _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
      _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
      _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);

      _.$list.off("click.slick", _.clickHandler);

      $(document).off(_.visibilityChange, _.visibility);

      _.cleanUpSlideEvents();

      if (_.options.accessibility === true) {
        _.$list.off("keydown.slick", _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().off("click.slick", _.selectHandler);
      }

      $(window).off(
        "orientationchange.slick.slick-" + _.instanceUid,
        _.orientationChange
      );

      $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);

      $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);

      $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {
      var _ = this;

      _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
      _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {
      var _ = this,
        originalSlides;

      if (_.options.rows > 0) {
        originalSlides = _.$slides.children().children();
        originalSlides.removeAttr("style");
        _.$slider.empty().append(originalSlides);
      }
    };

    Slick.prototype.clickHandler = function (event) {
      var _ = this;

      if (_.shouldClick === false) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      }
    };

    Slick.prototype.destroy = function (refresh) {
      var _ = this;

      _.autoPlayClear();

      _.touchObject = {};

      _.cleanUpEvents();

      $(".slick-cloned", _.$slider).detach();

      if (_.$dots) {
        _.$dots.remove();
      }

      if (_.$prevArrow && _.$prevArrow.length) {
        _.$prevArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", "");

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
        }
      }

      if (_.$nextArrow && _.$nextArrow.length) {
        _.$nextArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", "");

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
        }
      }

      if (_.$slides) {
        _.$slides
          .removeClass(
            "slick-slide slick-active slick-center slick-visible slick-current"
          )
          .removeAttr("aria-hidden")
          .removeAttr("data-slick-index")
          .each(function () {
            $(this).attr("style", $(this).data("originalStyling"));
          });

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.detach();

        _.$list.detach();

        _.$slider.append(_.$slides);
      }

      _.cleanUpRows();

      _.$slider.removeClass("slick-slider");
      _.$slider.removeClass("slick-initialized");
      _.$slider.removeClass("slick-dotted");

      _.unslicked = true;

      if (!refresh) {
        _.$slider.trigger("destroy", [_]);
      }
    };

    Slick.prototype.disableTransition = function (slide) {
      var _ = this,
        transition = {};

      transition[_.transitionType] = "";

      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {
      var _ = this;

      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).css({
          zIndex: _.options.zIndex,
        });

        _.$slides.eq(slideIndex).animate({
            opacity: 1,
          },
          _.options.speed,
          _.options.easing,
          callback
        );
      } else {
        _.applyTransition(slideIndex);

        _.$slides.eq(slideIndex).css({
          opacity: 1,
          zIndex: _.options.zIndex,
        });

        if (callback) {
          setTimeout(function () {
            _.disableTransition(slideIndex);

            callback.call();
          }, _.options.speed);
        }
      }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {
      var _ = this;

      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).animate({
            opacity: 0,
            zIndex: _.options.zIndex - 2,
          },
          _.options.speed,
          _.options.easing
        );
      } else {
        _.applyTransition(slideIndex);

        _.$slides.eq(slideIndex).css({
          opacity: 0,
          zIndex: _.options.zIndex - 2,
        });
      }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
      filter
    ) {
      var _ = this;

      if (filter !== null) {
        _.$slidesCache = _.$slides;

        _.unload();

        _.$slideTrack.children(this.options.slide).detach();

        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

        _.reinit();
      }
    };

    Slick.prototype.focusHandler = function () {
      var _ = this;

      // If any child element receives focus within the slider we need to pause the autoplay
      _.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (event) {
          var $sf = $(this);

          setTimeout(function () {
            if (_.options.pauseOnFocus) {
              if ($sf.is(":focus")) {
                _.focussed = true;
                _.autoPlay();
              }
            }
          }, 0);
        })
        .on("blur.slick", "*", function (event) {
          var $sf = $(this);

          // When a blur occurs on any elements within the slider we become unfocused
          if (_.options.pauseOnFocus) {
            _.focussed = false;
            _.autoPlay();
          }
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
      var _ = this;
      return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {
      var _ = this;

      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;

      if (_.options.infinite === true) {
        if (_.slideCount <= _.options.slidesToShow) {
          ++pagerQty;
        } else {
          while (breakPoint < _.slideCount) {
            ++pagerQty;
            breakPoint = counter + _.options.slidesToScroll;
            counter +=
              _.options.slidesToScroll <= _.options.slidesToShow ?
              _.options.slidesToScroll :
              _.options.slidesToShow;
          }
        }
      } else if (_.options.centerMode === true) {
        pagerQty = _.slideCount;
      } else if (!_.options.asNavFor) {
        pagerQty =
          1 +
          Math.ceil(
            (_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll
          );
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter +=
            _.options.slidesToScroll <= _.options.slidesToShow ?
            _.options.slidesToScroll :
            _.options.slidesToShow;
        }
      }

      return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {
      var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

      _.slideOffset = 0;
      verticalHeight = _.$slides.first().outerHeight(true);

      if (_.options.infinite === true) {
        if (_.slideCount > _.options.slidesToShow) {
          _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
          coef = -1;

          if (_.options.vertical === true && _.options.centerMode === true) {
            if (_.options.slidesToShow === 2) {
              coef = -1.5;
            } else if (_.options.slidesToShow === 1) {
              coef = -2;
            }
          }
          verticalOffset = verticalHeight * _.options.slidesToShow * coef;
        }
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          if (
            slideIndex + _.options.slidesToScroll > _.slideCount &&
            _.slideCount > _.options.slidesToShow
          ) {
            if (slideIndex > _.slideCount) {
              _.slideOffset =
                (_.options.slidesToShow - (slideIndex - _.slideCount)) *
                _.slideWidth *
                -1;
              verticalOffset =
                (_.options.slidesToShow - (slideIndex - _.slideCount)) *
                verticalHeight *
                -1;
            } else {
              _.slideOffset =
                (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
              verticalOffset =
                (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
            }
          }
        }
      } else {
        if (slideIndex + _.options.slidesToShow > _.slideCount) {
          _.slideOffset =
            (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
          verticalOffset =
            (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
        }
      }

      if (_.slideCount <= _.options.slidesToShow) {
        _.slideOffset = 0;
        verticalOffset = 0;
      }

      if (
        _.options.centerMode === true &&
        _.slideCount <= _.options.slidesToShow
      ) {
        _.slideOffset =
          (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
          (_.slideWidth * _.slideCount) / 2;
      } else if (_.options.centerMode === true && _.options.infinite === true) {
        _.slideOffset +=
          _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
        _.slideOffset = 0;
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }

      if (_.options.vertical === false) {
        targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
      } else {
        targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
      }

      if (_.options.variableWidth === true) {
        if (
          _.slideCount <= _.options.slidesToShow ||
          _.options.infinite === false
        ) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack
            .children(".slick-slide")
            .eq(slideIndex + _.options.slidesToShow);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft =
              (_.$slideTrack.width() -
                targetSlide[0].offsetLeft -
                targetSlide.width()) *
              -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        if (_.options.centerMode === true) {
          if (
            _.slideCount <= _.options.slidesToShow ||
            _.options.infinite === false
          ) {
            targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
          } else {
            targetSlide = _.$slideTrack
              .children(".slick-slide")
              .eq(slideIndex + _.options.slidesToShow + 1);
          }

          if (_.options.rtl === true) {
            if (targetSlide[0]) {
              targetLeft =
                (_.$slideTrack.width() -
                  targetSlide[0].offsetLeft -
                  targetSlide.width()) *
                -1;
            } else {
              targetLeft = 0;
            }
          } else {
            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
          }

          targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
        }
      }

      return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
      option
    ) {
      var _ = this;

      return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {
      var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

      if (_.options.infinite === false) {
        max = _.slideCount;
      } else {
        breakPoint = _.options.slidesToScroll * -1;
        counter = _.options.slidesToScroll * -1;
        max = _.slideCount * 2;
      }

      while (breakPoint < max) {
        indexes.push(breakPoint);
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow ?
          _.options.slidesToScroll :
          _.options.slidesToShow;
      }

      return indexes;
    };

    Slick.prototype.getSlick = function () {
      return this;
    };

    Slick.prototype.getSlideCount = function () {
      var _ = this,
        slidesTraversed,
        swipedSlide,
        swipeTarget,
        centerOffset;

      centerOffset =
        _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
      swipeTarget = _.swipeLeft * -1 + centerOffset;

      if (_.options.swipeToSlide === true) {
        _.$slideTrack.find(".slick-slide").each(function (index, slide) {
          var slideOuterWidth, slideOffset, slideRightBoundary;
          slideOuterWidth = $(slide).outerWidth();
          slideOffset = slide.offsetLeft;
          if (_.options.centerMode !== true) {
            slideOffset += slideOuterWidth / 2;
          }

          slideRightBoundary = slideOffset + slideOuterWidth;

          if (swipeTarget < slideRightBoundary) {
            swipedSlide = slide;
            return false;
          }
        });

        slidesTraversed =
          Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;

        return slidesTraversed;
      } else {
        return _.options.slidesToScroll;
      }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
      slide,
      dontAnimate
    ) {
      var _ = this;

      _.changeSlide({
          data: {
            message: "index",
            index: parseInt(slide),
          },
        },
        dontAnimate
      );
    };

    Slick.prototype.init = function (creation) {
      var _ = this;

      if (!$(_.$slider).hasClass("slick-initialized")) {
        $(_.$slider).addClass("slick-initialized");

        _.buildRows();
        _.buildOut();
        _.setProps();
        _.startLoad();
        _.loadSlider();
        _.initializeEvents();
        _.updateArrows();
        _.updateDots();
        _.checkResponsive(true);
        _.focusHandler();
      }

      if (creation) {
        _.$slider.trigger("init", [_]);
      }

      if (_.options.accessibility === true) {
        _.initADA();
      }

      if (_.options.autoplay) {
        _.paused = false;
        _.autoPlay();
      }
    };

    Slick.prototype.initADA = function () {
      var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
          return val >= 0 && val < _.slideCount;
        });

      _.$slides
        .add(_.$slideTrack.find(".slick-cloned"))
        .attr({
          "aria-hidden": "true",
          tabindex: "-1",
        })
        .find("a, input, button, select")
        .attr({
          tabindex: "-1",
        });

      if (_.$dots !== null) {
        _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
          var slideControlIndex = tabControlIndexes.indexOf(i);

          $(this).attr({
            role: "tabpanel",
            id: "slick-slide" + _.instanceUid + i,
            tabindex: -1,
          });

          if (slideControlIndex !== -1) {
            var ariaButtonControl =
              "slick-slide-control" + _.instanceUid + slideControlIndex;
            if ($("#" + ariaButtonControl).length) {
              $(this).attr({
                "aria-describedby": ariaButtonControl,
              });
            }
          }
        });

        _.$dots
          .attr("role", "tablist")
          .find("li")
          .each(function (i) {
            var mappedSlideIndex = tabControlIndexes[i];

            $(this).attr({
              role: "presentation",
            });

            $(this)
              .find("button")
              .first()
              .attr({
                role: "tab",
                id: "slick-slide-control" + _.instanceUid + i,
                "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                "aria-label": i + 1 + " of " + numDotGroups,
                "aria-selected": null,
                tabindex: "-1",
              });
          })
          .eq(_.currentSlide)
          .find("button")
          .attr({
            "aria-selected": "true",
            tabindex: "0",
          })
          .end();
      }

      for (
        var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++
      ) {
        if (_.options.focusOnChange) {
          _.$slides.eq(i).attr({
            tabindex: "0"
          });
        } else {
          _.$slides.eq(i).removeAttr("tabindex");
        }
      }

      _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {
      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.off("click.slick").on(
          "click.slick", {
            message: "previous",
          },
          _.changeSlide
        );
        _.$nextArrow.off("click.slick").on(
          "click.slick", {
            message: "next",
          },
          _.changeSlide
        );

        if (_.options.accessibility === true) {
          _.$prevArrow.on("keydown.slick", _.keyHandler);
          _.$nextArrow.on("keydown.slick", _.keyHandler);
        }
      }
    };

    Slick.prototype.initDotEvents = function () {
      var _ = this;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        $("li", _.$dots).on(
          "click.slick", {
            message: "index",
          },
          _.changeSlide
        );

        if (_.options.accessibility === true) {
          _.$dots.on("keydown.slick", _.keyHandler);
        }
      }

      if (
        _.options.dots === true &&
        _.options.pauseOnDotsHover === true &&
        _.slideCount > _.options.slidesToShow
      ) {
        $("li", _.$dots)
          .on("mouseenter.slick", $.proxy(_.interrupt, _, true))
          .on("mouseleave.slick", $.proxy(_.interrupt, _, false));
      }
    };

    Slick.prototype.initSlideEvents = function () {
      var _ = this;

      if (_.options.pauseOnHover) {
        _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
      }
    };

    Slick.prototype.initializeEvents = function () {
      var _ = this;

      _.initArrowEvents();

      _.initDotEvents();
      _.initSlideEvents();

      _.$list.on(
        "touchstart.slick mousedown.slick", {
          action: "start",
        },
        _.swipeHandler
      );
      _.$list.on(
        "touchmove.slick mousemove.slick", {
          action: "move",
        },
        _.swipeHandler
      );
      _.$list.on(
        "touchend.slick mouseup.slick", {
          action: "end",
        },
        _.swipeHandler
      );
      _.$list.on(
        "touchcancel.slick mouseleave.slick", {
          action: "end",
        },
        _.swipeHandler
      );

      _.$list.on("click.slick", _.clickHandler);

      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

      if (_.options.accessibility === true) {
        _.$list.on("keydown.slick", _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on("click.slick", _.selectHandler);
      }

      $(window).on(
        "orientationchange.slick.slick-" + _.instanceUid,
        $.proxy(_.orientationChange, _)
      );

      $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));

      $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);

      $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
      $(_.setPosition);
    };

    Slick.prototype.initUI = function () {
      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.show();
        _.$nextArrow.show();
      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.show();
      }
    };

    Slick.prototype.keyHandler = function (event) {
      var _ = this;
      //Dont slide if the cursor is inside the form fields and arrow keys are pressed
      if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
        if (event.keyCode === 37 && _.options.accessibility === true) {
          _.changeSlide({
            data: {
              message: _.options.rtl === true ? "next" : "previous",
            },
          });
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
          _.changeSlide({
            data: {
              message: _.options.rtl === true ? "previous" : "next",
            },
          });
        }
      }
    };

    Slick.prototype.lazyLoad = function () {
      var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

      function loadImages(imagesScope) {
        $("img[data-lazy]", imagesScope).each(function () {
          var image = $(this),
            imageSource = $(this).attr("data-lazy"),
            imageSrcSet = $(this).attr("data-srcset"),
            imageSizes =
            $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
            imageToLoad = document.createElement("img");

          imageToLoad.onload = function () {
            image.animate({
              opacity: 0
            }, 100, function () {
              if (imageSrcSet) {
                image.attr("srcset", imageSrcSet);

                if (imageSizes) {
                  image.attr("sizes", imageSizes);
                }
              }

              image
                .attr("src", imageSource)
                .animate({
                  opacity: 1
                }, 200, function () {
                  image
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading");
                });
              _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
            });
          };

          imageToLoad.onerror = function () {
            image
              .removeAttr("data-lazy")
              .removeClass("slick-loading")
              .addClass("slick-lazyload-error");

            _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
          };

          imageToLoad.src = imageSource;
        });
      }

      if (_.options.centerMode === true) {
        if (_.options.infinite === true) {
          rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
          rangeEnd = rangeStart + _.options.slidesToShow + 2;
        } else {
          rangeStart = Math.max(
            0,
            _.currentSlide - (_.options.slidesToShow / 2 + 1)
          );
          rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
        }
      } else {
        rangeStart = _.options.infinite ?
          _.options.slidesToShow + _.currentSlide :
          _.currentSlide;
        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
        if (_.options.fade === true) {
          if (rangeStart > 0) rangeStart--;
          if (rangeEnd <= _.slideCount) rangeEnd++;
        }
      }

      loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);

      if (_.options.lazyLoad === "anticipated") {
        var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find(".slick-slide");

        for (var i = 0; i < _.options.slidesToScroll; i++) {
          if (prevSlide < 0) prevSlide = _.slideCount - 1;
          loadRange = loadRange.add($slides.eq(prevSlide));
          loadRange = loadRange.add($slides.eq(nextSlide));
          prevSlide--;
          nextSlide++;
        }
      }

      loadImages(loadRange);

      if (_.slideCount <= _.options.slidesToShow) {
        cloneRange = _.$slider.find(".slick-slide");
        loadImages(cloneRange);
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider
          .find(".slick-cloned")
          .slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider
          .find(".slick-cloned")
          .slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }
    };

    Slick.prototype.loadSlider = function () {
      var _ = this;

      _.setPosition();

      _.$slideTrack.css({
        opacity: 1,
      });

      _.$slider.removeClass("slick-loading");

      _.initUI();

      if (_.options.lazyLoad === "progressive") {
        _.progressiveLazyLoad();
      }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {
      var _ = this;

      _.changeSlide({
        data: {
          message: "next",
        },
      });
    };

    Slick.prototype.orientationChange = function () {
      var _ = this;

      _.checkResponsive();
      _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {
      var _ = this;

      _.autoPlayClear();
      _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {
      var _ = this;

      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {
      var _ = this;

      if (!_.unslicked) {
        _.$slider.trigger("afterChange", [_, index]);

        _.animating = false;

        if (_.slideCount > _.options.slidesToShow) {
          _.setPosition();
        }

        _.swipeLeft = null;

        if (_.options.autoplay) {
          _.autoPlay();
        }

        if (_.options.accessibility === true) {
          _.initADA();

          if (_.options.focusOnChange) {
            var $currentSlide = $(_.$slides.get(_.currentSlide));
            $currentSlide.attr("tabindex", 0).focus();
          }
        }
      }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {
      var _ = this;

      _.changeSlide({
        data: {
          message: "previous",
        },
      });
    };

    Slick.prototype.preventDefault = function (event) {
      event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {
      tryCount = tryCount || 1;

      var _ = this,
        $imgsToLoad = $("img[data-lazy]", _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

      if ($imgsToLoad.length) {
        image = $imgsToLoad.first();
        imageSource = image.attr("data-lazy");
        imageSrcSet = image.attr("data-srcset");
        imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
        imageToLoad = document.createElement("img");

        imageToLoad.onload = function () {
          if (imageSrcSet) {
            image.attr("srcset", imageSrcSet);

            if (imageSizes) {
              image.attr("sizes", imageSizes);
            }
          }

          image
            .attr("src", imageSource)
            .removeAttr("data-lazy data-srcset data-sizes")
            .removeClass("slick-loading");

          if (_.options.adaptiveHeight === true) {
            _.setPosition();
          }

          _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          _.progressiveLazyLoad();
        };

        imageToLoad.onerror = function () {
          if (tryCount < 3) {
            /**
             * try to load the image 3 times,
             * leave a slight delay so we don't get
             * servers blocking the request.
             */
            setTimeout(function () {
              _.progressiveLazyLoad(tryCount + 1);
            }, 500);
          } else {
            image
              .removeAttr("data-lazy")
              .removeClass("slick-loading")
              .addClass("slick-lazyload-error");

            _.$slider.trigger("lazyLoadError", [_, image, imageSource]);

            _.progressiveLazyLoad();
          }
        };

        imageToLoad.src = imageSource;
      } else {
        _.$slider.trigger("allImagesLoaded", [_]);
      }
    };

    Slick.prototype.refresh = function (initializing) {
      var _ = this,
        currentSlide,
        lastVisibleIndex;

      lastVisibleIndex = _.slideCount - _.options.slidesToShow;

      // in non-infinite sliders, we don't want to go past the
      // last visible index.
      if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
        _.currentSlide = lastVisibleIndex;
      }

      // if less slides than to show, go to start.
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }

      currentSlide = _.currentSlide;

      _.destroy(true);

      $.extend(_, _.initials, {
        currentSlide: currentSlide
      });

      _.init();

      if (!initializing) {
        _.changeSlide({
            data: {
              message: "index",
              index: currentSlide,
            },
          },
          false
        );
      }
    };

    Slick.prototype.registerBreakpoints = function () {
      var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

      if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
        _.respondTo = _.options.respondTo || "window";

        for (breakpoint in responsiveSettings) {
          l = _.breakpoints.length - 1;

          if (responsiveSettings.hasOwnProperty(breakpoint)) {
            currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

            // loop through the breakpoints and cut out any existing
            // ones with the same breakpoint number, we don't want dupes.
            while (l >= 0) {
              if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                _.breakpoints.splice(l, 1);
              }
              l--;
            }

            _.breakpoints.push(currentBreakpoint);
            _.breakpointSettings[currentBreakpoint] =
              responsiveSettings[breakpoint].settings;
          }
        }

        _.breakpoints.sort(function (a, b) {
          return _.options.mobileFirst ? a - b : b - a;
        });
      }
    };

    Slick.prototype.reinit = function () {
      var _ = this;

      _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");

      _.slideCount = _.$slides.length;

      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
        _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }

      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }

      _.registerBreakpoints();

      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();

      _.checkResponsive(false, true);

      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on("click.slick", _.selectHandler);
      }

      _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

      _.setPosition();
      _.focusHandler();

      _.paused = !_.options.autoplay;
      _.autoPlay();

      _.$slider.trigger("reInit", [_]);
    };

    Slick.prototype.resize = function () {
      var _ = this;

      if ($(window).width() !== _.windowWidth) {
        clearTimeout(_.windowDelay);
        _.windowDelay = window.setTimeout(function () {
          _.windowWidth = $(window).width();
          _.checkResponsive();
          if (!_.unslicked) {
            _.setPosition();
          }
        }, 50);
      }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
      index,
      removeBefore,
      removeAll
    ) {
      var _ = this;

      if (typeof index === "boolean") {
        removeBefore = index;
        index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
        index = removeBefore === true ? --index : index;
      }

      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
        return false;
      }

      _.unload();

      if (removeAll === true) {
        _.$slideTrack.children().remove();
      } else {
        _.$slideTrack.children(this.options.slide).eq(index).remove();
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slidesCache = _.$slides;

      _.reinit();
    };

    Slick.prototype.setCSS = function (position) {
      var _ = this,
        positionProps = {},
        x,
        y;

      if (_.options.rtl === true) {
        position = -position;
      }
      x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
      y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";

      positionProps[_.positionProp] = position;

      if (_.transformsEnabled === false) {
        _.$slideTrack.css(positionProps);
      } else {
        positionProps = {};
        if (_.cssTransitions === false) {
          positionProps[_.animType] = "translate(" + x + ", " + y + ")";
          _.$slideTrack.css(positionProps);
        } else {
          positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
          _.$slideTrack.css(positionProps);
        }
      }
    };

    Slick.prototype.setDimensions = function () {
      var _ = this;

      if (_.options.vertical === false) {
        if (_.options.centerMode === true) {
          _.$list.css({
            padding: "0px " + _.options.centerPadding,
          });
        }
      } else {
        _.$list.height(
          _.$slides.first().outerHeight(true) * _.options.slidesToShow
        );
        if (_.options.centerMode === true) {
          _.$list.css({
            padding: _.options.centerPadding + " 0px",
          });
        }
      }

      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();

      if (_.options.vertical === false && _.options.variableWidth === false) {
        _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
        _.$slideTrack.width(
          Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)
        );
      } else if (_.options.variableWidth === true) {
        _.$slideTrack.width(5000 * _.slideCount);
      } else {
        _.slideWidth = Math.ceil(_.listWidth);
        _.$slideTrack.height(
          Math.ceil(
            _.$slides.first().outerHeight(true) *
            _.$slideTrack.children(".slick-slide").length
          )
        );
      }

      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false)
        _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {
      var _ = this,
        targetLeft;

      _.$slides.each(function (index, element) {
        targetLeft = _.slideWidth * index * -1;
        if (_.options.rtl === true) {
          $(element).css({
            position: "relative",
            right: targetLeft,
            top: 0,
            zIndex: _.options.zIndex - 2,
            opacity: 0,
          });
        } else {
          $(element).css({
            position: "relative",
            left: targetLeft,
            top: 0,
            zIndex: _.options.zIndex - 2,
            opacity: 0,
          });
        }
      });

      _.$slides.eq(_.currentSlide).css({
        zIndex: _.options.zIndex - 1,
        opacity: 1,
      });
    };

    Slick.prototype.setHeight = function () {
      var _ = this;

      if (
        _.options.slidesToShow === 1 &&
        _.options.adaptiveHeight === true &&
        _.options.vertical === false
      ) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.css("height", targetHeight);
      }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
      /**
       * accepts arguments in format of:
       *
       *  - for changing a single option's value:
       *     .slick("setOption", option, value, refresh )
       *
       *  - for changing a set of responsive options:
       *     .slick("setOption", 'responsive', [{}, ...], refresh )
       *
       *  - for updating multiple values at once (not responsive)
       *     .slick("setOption", { 'option': value, ... }, refresh )
       */

      var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

      if ($.type(arguments[0]) === "object") {
        option = arguments[0];
        refresh = arguments[1];
        type = "multiple";
      } else if ($.type(arguments[0]) === "string") {
        option = arguments[0];
        value = arguments[1];
        refresh = arguments[2];

        if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
          type = "responsive";
        } else if (typeof arguments[1] !== "undefined") {
          type = "single";
        }
      }

      if (type === "single") {
        _.options[option] = value;
      } else if (type === "multiple") {
        $.each(option, function (opt, val) {
          _.options[opt] = val;
        });
      } else if (type === "responsive") {
        for (item in value) {
          if ($.type(_.options.responsive) !== "array") {
            _.options.responsive = [value[item]];
          } else {
            l = _.options.responsive.length - 1;

            // loop through the responsive object and splice out duplicates.
            while (l >= 0) {
              if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                _.options.responsive.splice(l, 1);
              }

              l--;
            }

            _.options.responsive.push(value[item]);
          }
        }
      }

      if (refresh) {
        _.unload();
        _.reinit();
      }
    };

    Slick.prototype.setPosition = function () {
      var _ = this;

      _.setDimensions();

      _.setHeight();

      if (_.options.fade === false) {
        _.setCSS(_.getLeft(_.currentSlide));
      } else {
        _.setFade();
      }

      _.$slider.trigger("setPosition", [_]);
    };

    Slick.prototype.setProps = function () {
      var _ = this,
        bodyStyle = document.body.style;

      _.positionProp = _.options.vertical === true ? "top" : "left";

      if (_.positionProp === "top") {
        _.$slider.addClass("slick-vertical");
      } else {
        _.$slider.removeClass("slick-vertical");
      }

      if (
        bodyStyle.WebkitTransition !== undefined ||
        bodyStyle.MozTransition !== undefined ||
        bodyStyle.msTransition !== undefined
      ) {
        if (_.options.useCSS === true) {
          _.cssTransitions = true;
        }
      }

      if (_.options.fade) {
        if (typeof _.options.zIndex === "number") {
          if (_.options.zIndex < 3) {
            _.options.zIndex = 3;
          }
        } else {
          _.options.zIndex = _.defaults.zIndex;
        }
      }

      if (bodyStyle.OTransform !== undefined) {
        _.animType = "OTransform";
        _.transformType = "-o-transform";
        _.transitionType = "OTransition";
        if (
          bodyStyle.perspectiveProperty === undefined &&
          bodyStyle.webkitPerspective === undefined
        )
          _.animType = false;
      }
      if (bodyStyle.MozTransform !== undefined) {
        _.animType = "MozTransform";
        _.transformType = "-moz-transform";
        _.transitionType = "MozTransition";
        if (
          bodyStyle.perspectiveProperty === undefined &&
          bodyStyle.MozPerspective === undefined
        )
          _.animType = false;
      }
      if (bodyStyle.webkitTransform !== undefined) {
        _.animType = "webkitTransform";
        _.transformType = "-webkit-transform";
        _.transitionType = "webkitTransition";
        if (
          bodyStyle.perspectiveProperty === undefined &&
          bodyStyle.webkitPerspective === undefined
        )
          _.animType = false;
      }
      if (bodyStyle.msTransform !== undefined) {
        _.animType = "msTransform";
        _.transformType = "-ms-transform";
        _.transitionType = "msTransition";
        if (bodyStyle.msTransform === undefined) _.animType = false;
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
        _.animType = "transform";
        _.transformType = "transform";
        _.transitionType = "transition";
      }
      _.transformsEnabled =
        _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {
      var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

      allSlides = _.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true");

      _.$slides.eq(index).addClass("slick-current");

      if (_.options.centerMode === true) {
        var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.infinite === true) {
          if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
            _.$slides
              .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
              .addClass("slick-active")
              .attr("aria-hidden", "false");
          } else {
            indexOffset = _.options.slidesToShow + index;
            allSlides
              .slice(
                indexOffset - centerOffset + 1 + evenCoef,
                indexOffset + centerOffset + 2
              )
              .addClass("slick-active")
              .attr("aria-hidden", "false");
          }

          if (index === 0) {
            allSlides
              .eq(allSlides.length - 1 - _.options.slidesToShow)
              .addClass("slick-center");
          } else if (index === _.slideCount - 1) {
            allSlides.eq(_.options.slidesToShow).addClass("slick-center");
          }
        }

        _.$slides.eq(index).addClass("slick-center");
      } else {
        if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
          _.$slides
            .slice(index, index + _.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        } else if (allSlides.length <= _.options.slidesToShow) {
          allSlides.addClass("slick-active").attr("aria-hidden", "false");
        } else {
          remainder = _.slideCount % _.options.slidesToShow;
          indexOffset =
            _.options.infinite === true ? _.options.slidesToShow + index : index;

          if (
            _.options.slidesToShow == _.options.slidesToScroll &&
            _.slideCount - index < _.options.slidesToShow
          ) {
            allSlides
              .slice(
                indexOffset - (_.options.slidesToShow - remainder),
                indexOffset + remainder
              )
              .addClass("slick-active")
              .attr("aria-hidden", "false");
          } else {
            allSlides
              .slice(indexOffset, indexOffset + _.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false");
          }
        }
      }

      if (
        _.options.lazyLoad === "ondemand" ||
        _.options.lazyLoad === "anticipated"
      ) {
        _.lazyLoad();
      }
    };

    Slick.prototype.setupInfinite = function () {
      var _ = this,
        i,
        slideIndex,
        infiniteCount;

      if (_.options.fade === true) {
        _.options.centerMode = false;
      }

      if (_.options.infinite === true && _.options.fade === false) {
        slideIndex = null;

        if (_.slideCount > _.options.slidesToShow) {
          if (_.options.centerMode === true) {
            infiniteCount = _.options.slidesToShow + 1;
          } else {
            infiniteCount = _.options.slidesToShow;
          }

          for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
            slideIndex = i - 1;
            $(_.$slides[slideIndex])
              .clone(true)
              .attr("id", "")
              .attr("data-slick-index", slideIndex - _.slideCount)
              .prependTo(_.$slideTrack)
              .addClass("slick-cloned");
          }
          for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
            slideIndex = i;
            $(_.$slides[slideIndex])
              .clone(true)
              .attr("id", "")
              .attr("data-slick-index", slideIndex + _.slideCount)
              .appendTo(_.$slideTrack)
              .addClass("slick-cloned");
          }
          _.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              $(this).attr("id", "");
            });
        }
      }
    };

    Slick.prototype.interrupt = function (toggle) {
      var _ = this;

      if (!toggle) {
        _.autoPlay();
      }
      _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {
      var _ = this;

      var targetElement = $(event.target).is(".slick-slide") ?
        $(event.target) :
        $(event.target).parents(".slick-slide");

      var index = parseInt(targetElement.attr("data-slick-index"));

      if (!index) index = 0;

      if (_.slideCount <= _.options.slidesToShow) {
        _.slideHandler(index, false, true);
        return;
      }

      _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
      var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

      sync = sync || false;

      if (_.animating === true && _.options.waitForAnimate === true) {
        return;
      }

      if (_.options.fade === true && _.currentSlide === index) {
        return;
      }

      if (sync === false) {
        _.asNavFor(index);
      }

      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      slideLeft = _.getLeft(_.currentSlide);

      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

      if (
        _.options.infinite === false &&
        _.options.centerMode === false &&
        (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
      ) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(slideLeft, function () {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      } else if (
        _.options.infinite === false &&
        _.options.centerMode === true &&
        (index < 0 || index > _.slideCount - _.options.slidesToScroll)
      ) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(slideLeft, function () {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      }

      if (_.options.autoplay) {
        clearInterval(_.autoPlayTimer);
      }

      if (targetSlide < 0) {
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
        } else {
          animSlide = _.slideCount + targetSlide;
        }
      } else if (targetSlide >= _.slideCount) {
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          animSlide = 0;
        } else {
          animSlide = targetSlide - _.slideCount;
        }
      } else {
        animSlide = targetSlide;
      }

      _.animating = true;

      _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);

      oldSlide = _.currentSlide;
      _.currentSlide = animSlide;

      _.setSlideClasses(_.currentSlide);

      if (_.options.asNavFor) {
        navTarget = _.getNavTarget();
        navTarget = navTarget.slick("getSlick");

        if (navTarget.slideCount <= navTarget.options.slidesToShow) {
          navTarget.setSlideClasses(_.currentSlide);
        }
      }

      _.updateDots();
      _.updateArrows();

      if (_.options.fade === true) {
        if (dontAnimate !== true) {
          _.fadeSlideOut(oldSlide);

          _.fadeSlide(animSlide, function () {
            _.postSlide(animSlide);
          });
        } else {
          _.postSlide(animSlide);
        }
        _.animateHeight();
        return;
      }

      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
        _.animateSlide(targetLeft, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
    };

    Slick.prototype.startLoad = function () {
      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.hide();
        _.$nextArrow.hide();
      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.hide();
      }

      _.$slider.addClass("slick-loading");
    };

    Slick.prototype.swipeDirection = function () {
      var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

      xDist = _.touchObject.startX - _.touchObject.curX;
      yDist = _.touchObject.startY - _.touchObject.curY;
      r = Math.atan2(yDist, xDist);

      swipeAngle = Math.round((r * 180) / Math.PI);
      if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
      }

      if (swipeAngle <= 45 && swipeAngle >= 0) {
        return _.options.rtl === false ? "left" : "right";
      }
      if (swipeAngle <= 360 && swipeAngle >= 315) {
        return _.options.rtl === false ? "left" : "right";
      }
      if (swipeAngle >= 135 && swipeAngle <= 225) {
        return _.options.rtl === false ? "right" : "left";
      }
      if (_.options.verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
          return "down";
        } else {
          return "up";
        }
      }

      return "vertical";
    };

    Slick.prototype.swipeEnd = function (event) {
      var _ = this,
        slideCount,
        direction;

      _.dragging = false;
      _.swiping = false;

      if (_.scrolling) {
        _.scrolling = false;
        return false;
      }

      _.interrupted = false;
      _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

      if (_.touchObject.curX === undefined) {
        return false;
      }

      if (_.touchObject.edgeHit === true) {
        _.$slider.trigger("edge", [_, _.swipeDirection()]);
      }

      if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
        direction = _.swipeDirection();

        switch (direction) {
          case "left":
          case "down":
            slideCount = _.options.swipeToSlide ?
              _.checkNavigable(_.currentSlide + _.getSlideCount()) :
              _.currentSlide + _.getSlideCount();

            _.currentDirection = 0;

            break;

          case "right":
          case "up":
            slideCount = _.options.swipeToSlide ?
              _.checkNavigable(_.currentSlide - _.getSlideCount()) :
              _.currentSlide - _.getSlideCount();

            _.currentDirection = 1;

            break;

          default:
        }

        if (direction != "vertical") {
          _.slideHandler(slideCount);
          _.touchObject = {};
          _.$slider.trigger("swipe", [_, direction]);
        }
      } else {
        if (_.touchObject.startX !== _.touchObject.curX) {
          _.slideHandler(_.currentSlide);
          _.touchObject = {};
        }
      }
    };

    Slick.prototype.swipeHandler = function (event) {
      var _ = this;

      if (
        _.options.swipe === false ||
        ("ontouchend" in document && _.options.swipe === false)
      ) {
        return;
      } else if (
        _.options.draggable === false &&
        event.type.indexOf("mouse") !== -1
      ) {
        return;
      }

      _.touchObject.fingerCount =
        event.originalEvent && event.originalEvent.touches !== undefined ?
        event.originalEvent.touches.length :
        1;

      _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

      if (_.options.verticalSwiping === true) {
        _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
      }

      switch (event.data.action) {
        case "start":
          _.swipeStart(event);
          break;

        case "move":
          _.swipeMove(event);
          break;

        case "end":
          _.swipeEnd(event);
          break;
      }
    };

    Slick.prototype.swipeMove = function (event) {
      var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

      touches =
        event.originalEvent !== undefined ? event.originalEvent.touches : null;

      if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
        return false;
      }

      curLeft = _.getLeft(_.currentSlide);

      _.touchObject.curX =
        touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY =
        touches !== undefined ? touches[0].pageY : event.clientY;

      _.touchObject.swipeLength = Math.round(
        Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
      );

      verticalSwipeLength = Math.round(
        Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
      );

      if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
        _.scrolling = true;
        return false;
      }

      if (_.options.verticalSwiping === true) {
        _.touchObject.swipeLength = verticalSwipeLength;
      }

      swipeDirection = _.swipeDirection();

      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
        _.swiping = true;
        event.preventDefault();
      }

      positionOffset =
        (_.options.rtl === false ? 1 : -1) *
        (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
        positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }

      swipeLength = _.touchObject.swipeLength;

      _.touchObject.edgeHit = false;

      if (_.options.infinite === false) {
        if (
          (_.currentSlide === 0 && swipeDirection === "right") ||
          (_.currentSlide >= _.getDotCount() && swipeDirection === "left")
        ) {
          swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
          _.touchObject.edgeHit = true;
        }
      }

      if (_.options.vertical === false) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
        _.swipeLeft =
          curLeft +
          swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      }

      if (_.options.fade === true || _.options.touchMove === false) {
        return false;
      }

      if (_.animating === true) {
        _.swipeLeft = null;
        return false;
      }

      _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {
      var _ = this,
        touches;

      _.interrupted = true;

      if (
        _.touchObject.fingerCount !== 1 ||
        _.slideCount <= _.options.slidesToShow
      ) {
        _.touchObject = {};
        return false;
      }

      if (
        event.originalEvent !== undefined &&
        event.originalEvent.touches !== undefined
      ) {
        touches = event.originalEvent.touches[0];
      }

      _.touchObject.startX = _.touchObject.curX =
        touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY =
        touches !== undefined ? touches.pageY : event.clientY;

      _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
      var _ = this;

      if (_.$slidesCache !== null) {
        _.unload();

        _.$slideTrack.children(this.options.slide).detach();

        _.$slidesCache.appendTo(_.$slideTrack);

        _.reinit();
      }
    };

    Slick.prototype.unload = function () {
      var _ = this;

      $(".slick-cloned", _.$slider).remove();

      if (_.$dots) {
        _.$dots.remove();
      }

      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }

      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }

      _.$slides
        .removeClass("slick-slide slick-active slick-visible slick-current")
        .attr("aria-hidden", "true")
        .css("width", "");
    };

    Slick.prototype.unslick = function (fromBreakpoint) {
      var _ = this;
      _.$slider.trigger("unslick", [_, fromBreakpoint]);
      _.destroy();
    };

    Slick.prototype.updateArrows = function () {
      var _ = this,
        centerOffset;

      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (
        _.options.arrows === true &&
        _.slideCount > _.options.slidesToShow &&
        !_.options.infinite
      ) {
        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

        if (_.currentSlide === 0) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false");
        } else if (
          _.currentSlide >= _.slideCount - _.options.slidesToShow &&
          _.options.centerMode === false
        ) {
          _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false");
        } else if (
          _.currentSlide >= _.slideCount - 1 &&
          _.options.centerMode === true
        ) {
          _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false");
        }
      }
    };

    Slick.prototype.updateDots = function () {
      var _ = this;

      if (_.$dots !== null) {
        _.$dots.find("li").removeClass("slick-active").end();

        _.$dots
          .find("li")
          .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
          .addClass("slick-active");
      }
    };

    Slick.prototype.visibility = function () {
      var _ = this;

      if (_.options.autoplay) {
        if (document[_.hidden]) {
          _.interrupted = true;
        } else {
          _.interrupted = false;
        }
      }
    };

    $.fn.slick = function () {
      var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
      for (i = 0; i < l; i++) {
        if (typeof opt == "object" || typeof opt == "undefined")
          _[i].slick = new Slick(_[i], opt);
        else ret = _[i].slick[opt].apply(_[i].slick, args);
        if (typeof ret != "undefined") return ret;
      }
      return _;
    };
  });

  //cart_model_resize
  var myModal = document.getElementById("addtocart");

myModal.addEventListener("shown.bs.modal", function () {
  $(window).trigger("resize");
});

//filter
$(".filter-btn").click(function () {
    $(".bg-overlay, .category-option").addClass("show");
  });
  $(".button-close, .bg-overlay").click(function () {
    $(".bg-overlay, .category-option").removeClass("show");
  });

  var contentwidth = jQuery(window).width();
  if (contentwidth < "991") {
    $(".hide-btn").click(function () {
      $(".bg-overlay, .category-option").addClass("show");
    });
    $(".button-close, .bg-overlay").click(function () {
      $(".bg-overlay, .category-option").removeClass("show");
    });
  }

  $(".hide-btn").click(function () {
    var $this = $(this);
    $this.toggleClass("hide-btn");
    if ($this.hasClass("hide-btn")) {
      $this.text("Hide Filter");
    } else {
      $this.text("Show Filter");
    }
  });

  if ($(window).width() > "992") {
    $(".hide-btn").on("click", function (e) {
      $(".category-side").toggleClass("show");
      $(".category-product").toggleClass("col-lg-12");
      $(".category-product").toggleClass("col-lg-9");
    });
  }

  $(".onclick-title h6").click(function () {
    $(this)
      .parent(".onclick-title")
      .toggleClass("show")
      .siblings()
      .removeClass("show");
  });

  $(".filter-show-button a").click(function () {
    $(".bg-overlay, .top-filter-section").addClass("show");
  });
  $(".back-btn, .bg-overlay").click(function () {
    $(".bg-overlay, .top-filter-section").removeClass("show");
  });

  $(document).ready(function () {
    $(".save-details").click(function () {
      $(".save-details").removeClass("show");
      $(this).addClass("show");
    });
  });

  //ion.rangeSlider.min
  // Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:56:44
! function (i) {
    "undefined" != typeof jQuery && jQuery || "function" != typeof define || !define.amd ? "undefined" != typeof jQuery && jQuery || "object" != typeof exports ? i(jQuery, document, window, navigator) : i(require("jquery"), document, window, navigator) : define(["jquery"], function (t) {
        return i(t, document, window, navigator)
    })
}(function (a, c, l, t, _) {
    "use strict";
    var i, s, o = 0,
        e = (i = t.userAgent, s = /msie\s\d+/i, 0 < i.search(s) && s.exec(i).toString().split(" ")[1] < 9 && (a("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (o) {
        var e = this,
            h = [].slice;
        if ("function" != typeof e) throw new TypeError;
        var r = h.call(arguments, 1),
            n = function () {
                if (this instanceof n) {
                    var t = function () {};
                    t.prototype = e.prototype;
                    var i = new t,
                        s = e.apply(i, r.concat(h.call(arguments)));
                    return Object(s) === s ? s : i
                }
                return e.apply(o, r.concat(h.call(arguments)))
            };
        return n
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) {
        var s;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this),
            e = o.length >>> 0;
        if (0 == e) return -1;
        var h = +i || 0;
        if (Math.abs(h) === 1 / 0 && (h = 0), e <= h) return -1;
        for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e;) {
            if (s in o && o[s] === t) return s;
            s++
        }
        return -1
    });

    function h(t, i, s) {
        this.VERSION = "2.3.1", this.input = t, this.plugin_count = s, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, i = i || {}, this.$cache = {
            win: a(l),
            body: a(c.body),
            input: a(t),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var o, e, h, r = this.$cache.input,
            n = r.prop("value");
        for (h in o = {
                skin: "flat",
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " — ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null
            }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), (e = {
                skin: r.data("skin"),
                type: r.data("type"),
                min: r.data("min"),
                max: r.data("max"),
                from: r.data("from"),
                to: r.data("to"),
                step: r.data("step"),
                min_interval: r.data("minInterval"),
                max_interval: r.data("maxInterval"),
                drag_interval: r.data("dragInterval"),
                values: r.data("values"),
                from_fixed: r.data("fromFixed"),
                from_min: r.data("fromMin"),
                from_max: r.data("fromMax"),
                from_shadow: r.data("fromShadow"),
                to_fixed: r.data("toFixed"),
                to_min: r.data("toMin"),
                to_max: r.data("toMax"),
                to_shadow: r.data("toShadow"),
                prettify_enabled: r.data("prettifyEnabled"),
                prettify_separator: r.data("prettifySeparator"),
                force_edges: r.data("forceEdges"),
                keyboard: r.data("keyboard"),
                grid: r.data("grid"),
                grid_margin: r.data("gridMargin"),
                grid_num: r.data("gridNum"),
                grid_snap: r.data("gridSnap"),
                hide_min_max: r.data("hideMinMax"),
                hide_from_to: r.data("hideFromTo"),
                prefix: r.data("prefix"),
                postfix: r.data("postfix"),
                max_postfix: r.data("maxPostfix"),
                decorate_both: r.data("decorateBoth"),
                values_separator: r.data("valuesSeparator"),
                input_values_separator: r.data("inputValuesSeparator"),
                disable: r.data("disable"),
                block: r.data("block"),
                extra_classes: r.data("extraClasses")
            }).values = e.values && e.values.split(","), e) e.hasOwnProperty(h) && (e[h] !== _ && "" !== e[h] || delete e[h]);
        n !== _ && "" !== n && ((n = n.split(e.input_values_separator || i.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), i && i.values && i.values.length ? (o.from = n[0] && i.values.indexOf(n[0]), o.to = n[1] && i.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), a.extend(o, i), a.extend(o, e), this.options = o, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    }
    h.prototype = {
            init: function (t) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            },
            append: function () {
                var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function () {
                var t = this.options.min,
                    i = this.options.max,
                    s = this.options.from,
                    o = this.options.to;
                t < s && o === i ? this.$cache.s_from.addClass("type_last") : o < i && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function (t) {
                switch (t) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
            },
            remove: function () {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), e && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function () {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), e && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            },
            pointerFocus: function (t) {
                var i, s;
                this.target || (i = (s = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += s.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {},
                    pageX: i
                }))
            },
            pointerMove: function (t) {
                if (this.dragging) {
                    var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                    this.coords.x_pointer = i - this.coords.x_gap, this.calc()
                }
            },
            pointerUp: function (t) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, e && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
            },
            pointerDown: function (t, i) {
                i.preventDefault();
                var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && ("both" === t && this.setTempMinInterval(), t = t || (this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = s - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), e && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function (t, i) {
                i.preventDefault();
                var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(s - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function (t, i) {
                if (!(this.current_plugin !== this.plugin_count || i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)) {
                    switch (i.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            i.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            i.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function (t) {
                var i = this.coords.p_pointer,
                    s = (this.options.max - this.options.min) / 100;
                s = this.options.step / s, t ? i += s : i -= s, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i), this.is_key = !0, this.calc()
            },
            setMinMax: function () {
                if (this.options) {
                    if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                    if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                    else {
                        var t = this._prettify(this.options.min),
                            i = this._prettify(this.options.max);
                        this.result.min_pretty = t, this.result.max_pretty = i, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(i, this.options.max))
                    }
                    this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                }
            },
            setTempMinInterval: function () {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function (t) {
                if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    var i = this.getHandleX();
                    switch ("both" === this.target && (this.coords.p_gap = 0, i = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, i = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(i)), this.target) {
                        case "base":
                            var s = (this.options.max - this.options.min) / 100,
                                o = (this.result.from - this.options.min) / s,
                                e = (this.result.to - this.options.min) / s;
                            this.coords.p_single_real = this.toFixed(o), this.coords.p_from_real = this.toFixed(o), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(i), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(i), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(i), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            i = this.toFixed(i + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(i) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(i) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var h = this.convertToRealPercent(i),
                                r = this.result.from_percent,
                                n = this.result.to_percent - r,
                                a = n / 2,
                                c = h - a,
                                l = h + a;
                            c < 0 && (l = (c = 0) + n), 100 < l && (c = (l = 100) - n), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function () {
                this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
            },
            convertToRealPercent: function (t) {
                return t / (100 - this.coords.p_handle) * 100
            },
            convertToFakePercent: function (t) {
                return t / 100 * (100 - this.coords.p_handle)
            },
            getHandleX: function () {
                var t = 100 - this.coords.p_handle,
                    i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return i < 0 ? i = 0 : t < i && (i = t), i
            },
            calcHandlePercent: function () {
                "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function (t) {
                return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function () {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function () {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function () {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
            },
            drawLabels: function () {
                if (this.options) {
                    var t, i, s, o, e, h = this.options.values.length,
                        r = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) t = h ? this.decorate(r[this.result.from]) : (o = this._prettify(this.result.from), this.decorate(o, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
                        else {
                            s = h ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), i = this.decorate(r[this.result.from]), this.decorate(r[this.result.to])) : (o = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(o, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(o + this.options.values_separator + e, this.result.to), i = this.decorate(o, this.result.from), this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s), this.calcLabels();
                            var n = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                a = this.labels.p_single_left + this.labels.p_single_fake,
                                c = this.labels.p_to_left + this.labels.p_to_fake,
                                l = Math.max(a, c);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), n < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                        }
                }
            },
            drawShadow: function () {
                var t, i, s, o, e = this.options,
                    h = this.$cache,
                    r = "number" == typeof e.from_min && !isNaN(e.from_min),
                    n = "number" == typeof e.from_max && !isNaN(e.from_max),
                    a = "number" == typeof e.to_min && !isNaN(e.to_min),
                    c = "number" == typeof e.to_max && !isNaN(e.to_max);
                "single" === e.type ? e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_single[0].style.display = "block", h.shad_single[0].style.left = t + "%", h.shad_single[0].style.width = i + "%") : h.shad_single[0].style.display = "none" : (e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_from[0].style.display = "block", h.shad_from[0].style.left = t + "%", h.shad_from[0].style.width = i + "%") : h.shad_from[0].style.display = "none", e.to_shadow && (a || c) ? (s = this.convertToPercent(a ? e.to_min : e.min), o = this.convertToPercent(c ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), o = this.toFixed(o - this.coords.p_handle / 100 * o), s += this.coords.p_handle / 2, h.shad_to[0].style.display = "block", h.shad_to[0].style.left = s + "%", h.shad_to[0].style.width = o + "%") : h.shad_to[0].style.display = "none")
            },
            writeToInput: function () {
                "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
            },
            callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
            },
            convertToPercent: function (t, i) {
                var s, o = this.options.max - this.options.min,
                    e = o / 100;
                return o ? (s = (i ? t : t - this.options.min) / e, this.toFixed(s)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function (t) {
                var i, s, o = this.options.min,
                    e = this.options.max,
                    h = o.toString().split(".")[1],
                    r = e.toString().split(".")[1],
                    n = 0,
                    a = 0;
                if (0 === t) return this.options.min;
                if (100 === t) return this.options.max;
                h && (n = i = h.length), r && (n = s = r.length), i && s && (n = s <= i ? i : s), o < 0 && (o = +(o + (a = Math.abs(o))).toFixed(n), e = +(e + a).toFixed(n));
                var c, l = (e - o) / 100 * t + o,
                    _ = this.options.step.toString().split(".")[1];
                return l = _ ? +l.toFixed(_.length) : (l /= this.options.step, +(l *= this.options.step).toFixed(0)), a && (l -= a), (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c
            },
            calcWithStep: function (t) {
                var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i)
            },
            checkMinInterval: function (t, i, s) {
                var o, e, h = this.options;
                return h.min_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o < h.min_interval && (o = e - h.min_interval) : o - e < h.min_interval && (o = e + h.min_interval), this.convertToPercent(o)) : t
            },
            checkMaxInterval: function (t, i, s) {
                var o, e, h = this.options;
                return h.max_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o > h.max_interval && (o = e - h.max_interval) : o - e > h.max_interval && (o = e + h.max_interval), this.convertToPercent(o)) : t
            },
            checkDiapason: function (t, i, s) {
                var o = this.convertToValue(t),
                    e = this.options;
                return "number" != typeof i && (i = e.min), "number" != typeof s && (s = e.max), o < i && (o = i), s < o && (o = s), this.convertToPercent(o)
            },
            toFixed: function (t) {
                return +(t = t.toFixed(20))
            },
            _prettify: function (t) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
            },
            prettify: function (t) {
                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function (t, i) {
                return this.options.force_edges && (t < 0 ? t = 0 : 100 - i < t && (t = 100 - i)), this.toFixed(t)
            },
            validate: function () {
                var t, i, s = this.options,
                    o = this.result,
                    e = s.values,
                    h = e.length;
                if ("string" == typeof s.min && (s.min = +s.min), "string" == typeof s.max && (s.max = +s.max), "string" == typeof s.from && (s.from = +s.from), "string" == typeof s.to && (s.to = +s.to), "string" == typeof s.step && (s.step = +s.step), "string" == typeof s.from_min && (s.from_min = +s.from_min), "string" == typeof s.from_max && (s.from_max = +s.from_max), "string" == typeof s.to_min && (s.to_min = +s.to_min), "string" == typeof s.to_max && (s.to_max = +s.to_max), "string" == typeof s.grid_num && (s.grid_num = +s.grid_num), s.max < s.min && (s.max = s.min), h)
                    for (s.p_values = [], s.min = 0, s.max = h - 1, s.step = 1, s.grid_num = s.max, s.grid_snap = !0, i = 0; i < h; i++) t = +e[i], t = isNaN(t) ? e[i] : (e[i] = t, this._prettify(t)), s.p_values.push(t);
                "number" == typeof s.from && !isNaN(s.from) || (s.from = s.min), "number" == typeof s.to && !isNaN(s.to) || (s.to = s.max), "single" === s.type ? (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max)) : (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max), s.to < s.min && (s.to = s.min), s.to > s.max && (s.to = s.max), this.update_check.from && (this.update_check.from !== s.from && s.from > s.to && (s.from = s.to), this.update_check.to !== s.to && s.to < s.from && (s.to = s.from)), s.from > s.to && (s.from = s.to), s.to < s.from && (s.to = s.from)), ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) && (s.step = 1), "number" == typeof s.from_min && s.from < s.from_min && (s.from = s.from_min), "number" == typeof s.from_max && s.from > s.from_max && (s.from = s.from_max), "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min), "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max), o && (o.min !== s.min && (o.min = s.min), o.max !== s.max && (o.max = s.max), (o.from < o.min || o.from > o.max) && (o.from = s.from), (o.to < o.min || o.to > o.max) && (o.to = s.to)), ("number" != typeof s.min_interval || isNaN(s.min_interval) || !s.min_interval || s.min_interval < 0) && (s.min_interval = 0), ("number" != typeof s.max_interval || isNaN(s.max_interval) || !s.max_interval || s.max_interval < 0) && (s.max_interval = 0), s.min_interval && s.min_interval > s.max - s.min && (s.min_interval = s.max - s.min), s.max_interval && s.max_interval > s.max - s.min && (s.max_interval = s.max - s.min)
            },
            decorate: function (t, i) {
                var s = "",
                    o = this.options;
                return o.prefix && (s += o.prefix), s += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (s += o.max_postfix, o.postfix && (s += " ")) : i === o.max && (s += o.max_postfix, o.postfix && (s += " "))), o.postfix && (s += o.postfix), s
            },
            updateFrom: function () {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function () {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function () {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var t, i, s, o, e, h, r = this.options,
                        n = r.max - r.min,
                        a = r.grid_num,
                        c = 0,
                        l = 4,
                        _ = "";
                    for (this.calcGridMargin(), r.grid_snap && (a = n / r.step), 50 < a && (a = 50), s = this.toFixed(100 / a), 4 < a && (l = 3), 7 < a && (l = 2), 14 < a && (l = 1), 28 < a && (l = 0), t = 0; t < a + 1; t++) {
                        for (o = l, 100 < (c = this.toFixed(s * t)) && (c = 100), e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1), i = 1; i <= o && 0 !== c; i++) _ += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - e * i) + '%"></span>';
                        _ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', h = this.convertToValue(c), _ += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (h = r.values.length ? r.p_values[h] : this._prettify(h)) + "</span>"
                    }
                    this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(_), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function () {
                var t, i, s = this.coords.big_num;
                for (i = 0; i < s; i++) t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            },
            calcGridLabels: function () {
                var t, i, s = [],
                    o = [],
                    e = this.coords.big_num;
                for (t = 0; t < e; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), o[t] = this.toFixed(s[t] + this.coords.big_p[t]);
                for (this.options.force_edges && (s[0] < -this.coords.grid_gap && (s[0] = -this.coords.grid_gap, o[0] = this.toFixed(s[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), o[e - 1] > 100 + this.coords.grid_gap && (o[e - 1] = 100 + this.coords.grid_gap, s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, s, o), this.calcGridCollision(4, s, o), t = 0; t < e; t++) i = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (i.style.marginLeft = -this.coords.big_x[t] + "%")
            },
            calcGridCollision: function (t, i, s) {
                var o, e, h, r = this.coords.big_num;
                for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t) h = this.$cache.grid_labels[e][0], s[o] <= i[e] ? h.style.visibility = "visible" : h.style.visibility = "hidden"
            },
            calcGridMargin: function () {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            },
            update: function (t) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = a.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function () {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
            }
        }, a.fn.ionRangeSlider = function (t) {
            return this.each(function () {
                a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, t, o++))
            })
        },
        function () {
            for (var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !l.requestAnimationFrame; ++i) l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[t[i] + "CancelAnimationFrame"] || l[t[i] + "CancelRequestAnimationFrame"];
            l.requestAnimationFrame || (l.requestAnimationFrame = function (t, i) {
                var s = (new Date).getTime(),
                    o = Math.max(0, 16 - (s - h)),
                    e = l.setTimeout(function () {
                        t(s + o)
                    }, o);
                return h = s + o, e
            }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }()
});

//jquery-3.5.1.min
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function (e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Ae(this, e, Se), !1
            },
            trigger: function () {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        },
        remove: function (e) {
            return Re(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Pe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Pe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return Pe(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
                    return Ze(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function () {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        nt || (nt = !0, st())
    }, S.fx.stop = function () {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

//lazysizes.min
/*! lazysizes - v3.0.0 */ ! function (a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function (a, b) {
    "use strict";
    if (b.getElementsByClassName) {
          var c, d = b.documentElement,
                e = a.Date,
                f = a.HTMLPictureElement,
                g = "addEventListener",
                h = "getAttribute",
                i = a[g],
                j = a.setTimeout,
                k = a.requestAnimationFrame || j,
                l = a.requestIdleCallback,
                m = /^picture$/i,
                n = ["load", "error", "lazyincluded", "_lazyloaded"],
                o = {},
                p = Array.prototype.forEach,
                q = function (a, b) {
                      return o[b] || (o[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), o[b].test(a[h]("class") || "") && o[b]
                },
                r = function (a, b) {
                      q(a, b) || a.setAttribute("class", (a[h]("class") || "").trim() + " " + b)
                },
                s = function (a, b) {
                      var c;
                      (c = q(a, b)) && a.setAttribute("class", (a[h]("class") || "").replace(c, " "))
                },
                t = function (a, b, c) {
                      var d = c ? g : "removeEventListener";
                      c && t(a, b), n.forEach(function (c) {
                            a[d](c, b)
                      })
                },
                u = function (a, c, d, e, f) {
                      var g = b.createEvent("CustomEvent");
                      return g.initCustomEvent(c, !e, !f, d || {}), a.dispatchEvent(g), g
                },
                v = function (b, d) {
                      var e;
                      !f && (e = a.picturefill || c.pf) ? e({
                            reevaluate: !0,
                            elements: [b]
                      }) : d && d.src && (b.src = d.src)
                },
                w = function (a, b) {
                      return (getComputedStyle(a, null) || {})[b]
                },
                x = function (a, b, d) {
                      for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode;
                      return d
                },
                y = function () {
                      var a, c, d = [],
                            e = [],
                            f = d,
                            g = function () {
                                  var b = f;
                                  for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                                  a = !1
                            },
                            h = function (d, e) {
                                  a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? j : k)(g)))
                            };
                      return h._lsFlush = g, h
                }(),
                z = function (a, b) {
                      return b ? function () {
                            y(a)
                      } : function () {
                            var b = this,
                                  c = arguments;
                            y(function () {
                                  a.apply(b, c)
                            })
                      }
                },
                A = function (a) {
                      var b, c = 0,
                            d = 125,
                            f = 666,
                            g = f,
                            h = function () {
                                  b = !1, c = e.now(), a()
                            },
                            i = l ? function () {
                                  l(h, {
                                        timeout: g
                                  }), g !== f && (g = f)
                            } : z(function () {
                                  j(h)
                            }, !0);
                      return function (a) {
                            var f;
                            (a = a === !0) && (g = 44), b || (b = !0, f = d - (e.now() - c), 0 > f && (f = 0), a || 9 > f && l ? i() : j(i, f))
                      }
                },
                B = function (a) {
                      var b, c, d = 99,
                            f = function () {
                                  b = null, a()
                            },
                            g = function () {
                                  var a = e.now() - c;
                                  d > a ? j(g, d - a) : (l || f)(f)
                            };
                      return function () {
                            c = e.now(), b || (b = j(g, d))
                      }
                },
                C = function () {
                      var f, k, l, n, o, x, C, E, F, G, H, I, J, K, L, M = /^img$/i,
                            N = /^iframe$/i,
                            O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                            P = 0,
                            Q = 0,
                            R = 0,
                            S = -1,
                            T = function (a) {
                                  R--, a && a.target && t(a.target, T), (!a || 0 > R || !a.target) && (R = 0)
                            },
                            U = function (a, c) {
                                  var e, f = a,
                                        g = "hidden" == w(b.body, "visibility") || "hidden" != w(a, "visibility");
                                  for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != d;) g = (w(f, "opacity") || 1) > 0, g && "visible" != w(f, "overflow") && (e = f.getBoundingClientRect(), g = H > e.left && G < e.right && I > e.top - 1 && F < e.bottom + 1);
                                  return g
                            },
                            V = function () {
                                  var a, e, g, i, j, m, n, p, q;
                                  if ((o = c.loadMode) && 8 > R && (a = f.length)) {
                                        e = 0, S++, null == K && ("expand" in c || (c.expand = d.clientHeight > 500 && d.clientWidth > 500 ? 500 : 370), J = c.expand, K = J * c.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;
                                        for (; a > e; e++)
                                              if (f[e] && !f[e]._lazyRace)
                                                    if (O)
                                                          if ((p = f[e][h]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (C = innerWidth + m * L, E = innerHeight + m, n = -1 * m, q = m), g = f[e].getBoundingClientRect(), (I = g.bottom) >= n && (F = g.top) <= E && (H = g.right) >= n * L && (G = g.left) <= C && (I || H || G || F) && (l && 3 > R && !p && (3 > o || 4 > S) || U(f[e], m))) {
                                                                if (ba(f[e]), j = !0, R > 9) break
                                                          } else !j && l && !i && 4 > R && 4 > S && o > 2 && (k[0] || c.preloadAfterLoad) && (k[0] || !p && (I || H || G || F || "auto" != f[e][h](c.sizesAttr))) && (i = k[0] || f[e]);
                                        else ba(f[e]);
                                        i && !j && ba(i)
                                  }
                            },
                            W = A(V),
                            X = function (a) {
                                  r(a.target, c.loadedClass), s(a.target, c.loadingClass), t(a.target, Z)
                            },
                            Y = z(X),
                            Z = function (a) {
                                  Y({
                                        target: a.target
                                  })
                            },
                            $ = function (a, b) {
                                  try {
                                        a.contentWindow.location.replace(b)
                                  } catch (c) {
                                        a.src = b
                                  }
                            },
                            _ = function (a) {
                                  var b, d, e = a[h](c.srcsetAttr);
                                  (b = c.customMedia[a[h]("data-media") || a[h]("media")]) && a.setAttribute("media", b), e && a.setAttribute("srcset", e), b && (d = a.parentNode, d.insertBefore(a.cloneNode(), a), d.removeChild(a))
                            },
                            aa = z(function (a, b, d, e, f) {
                                  var g, i, k, l, o, q;
                                  (o = u(a, "lazybeforeunveil", b)).defaultPrevented || (e && (d ? r(a, c.autosizesClass) : a.setAttribute("sizes", e)), i = a[h](c.srcsetAttr), g = a[h](c.srcAttr), f && (k = a.parentNode, l = k && m.test(k.nodeName || "")), q = b.firesLoad || "src" in a && (i || g || l), o = {
                                        target: a
                                  }, q && (t(a, T, !0), clearTimeout(n), n = j(T, 2500), r(a, c.loadingClass), t(a, Z, !0)), l && p.call(k.getElementsByTagName("source"), _), i ? a.setAttribute("srcset", i) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), (i || l) && v(a, {
                                        src: g
                                  })), a._lazyRace && delete a._lazyRace, s(a, c.lazyClass), y(function () {
                                        (!q || a.complete && a.naturalWidth > 1) && (q ? T(o) : R--, X(o))
                                  }, !0)
                            }),
                            ba = function (a) {
                                  var b, d = M.test(a.nodeName),
                                        e = d && (a[h](c.sizesAttr) || a[h]("sizes")),
                                        f = "auto" == e;
                                  (!f && l || !d || !a.src && !a.srcset || a.complete || q(a, c.errorClass)) && (b = u(a, "lazyunveilread").detail, f && D.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, d))
                            },
                            ca = function () {
                                  if (!l) {
                                        if (e.now() - x < 999) return void j(ca, 999);
                                        var a = B(function () {
                                              c.loadMode = 3, W()
                                        });
                                        l = !0, c.loadMode = 3, W(), i("scroll", function () {
                                              3 == c.loadMode && (c.loadMode = 2), a()
                                        }, !0)
                                  }
                            };
                      return {
                            _: function () {
                                  x = e.now(), f = b.getElementsByClassName(c.lazyClass), k = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), L = c.hFac, i("scroll", W, !0), i("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(d, {
                                        childList: !0,
                                        subtree: !0,
                                        attributes: !0
                                  }) : (d[g]("DOMNodeInserted", W, !0), d[g]("DOMAttrModified", W, !0), setInterval(W, 999)), i("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
                                        b[g](a, W, !0)
                                  }), /d$|^c/.test(b.readyState) ? ca() : (i("load", ca), b[g]("DOMContentLoaded", W), j(ca, 2e4)), f.length ? (V(), y._lsFlush()) : W()
                            },
                            checkElems: W,
                            unveil: ba
                      }
                }(),
                D = function () {
                      var a, d = z(function (a, b, c, d) {
                                  var e, f, g;
                                  if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), m.test(b.nodeName || ""))
                                        for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
                                  c.detail.dataAttr || v(a, c.detail)
                            }),
                            e = function (a, b, c) {
                                  var e, f = a.parentNode;
                                  f && (c = x(a, f, c), e = u(a, "lazybeforesizes", {
                                        width: c,
                                        dataAttr: !!b
                                  }), e.defaultPrevented || (c = e.detail.width, c && c !== a._lazysizesWidth && d(a, f, e, c)))
                            },
                            f = function () {
                                  var b, c = a.length;
                                  if (c)
                                        for (b = 0; c > b; b++) e(a[b])
                            },
                            g = B(f);
                      return {
                            _: function () {
                                  a = b.getElementsByClassName(c.autosizesClass), i("resize", g)
                            },
                            checkElems: g,
                            updateElem: e
                      }
                }(),
                E = function () {
                      E.i || (E.i = !0, D._(), C._())
                };
          return function () {
                var b, d = {
                      lazyClass: "lazyload",
                      loadedClass: "lazyloaded",
                      loadingClass: "lazyloading",
                      preloadClass: "lazypreload",
                      errorClass: "lazyerror",
                      autosizesClass: "lazyautosizes",
                      srcAttr: "data-src",
                      srcsetAttr: "data-srcset",
                      sizesAttr: "data-sizes",
                      minSize: 40,
                      customMedia: {},
                      init: !0,
                      expFactor: 1.5,
                      hFac: .8,
                      loadMode: 2
                };
                c = a.lazySizesConfig || a.lazysizesConfig || {};
                for (b in d) b in c || (c[b] = d[b]);
                a.lazySizesConfig = c, j(function () {
                      c.init && E()
                })
          }(), {
                cfg: c,
                autoSizer: D,
                loader: C,
                init: E,
                uP: v,
                aC: r,
                rC: s,
                hC: q,
                fire: u,
                gW: x,
                rAF: y
          }
    }
});

//newsletter
var firstTime = localStorage.getItem("first_time");
if (!firstTime) {
    $(window).on('load', function () {
        setTimeout(function () {
            $('#newsletter').modal('show');
        }, 500);
    });
    localStorage.setItem("first_time", "1");
}

//price-filter
// Trigger

$(function () {
    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 500,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      from: 0,
      to: 500,
      prefix: "$ ",
      onStart: updateInputs,
      onChange: updateInputs,
      step: 5,
      prettify_enabled: true,
      prettify_separator: ".",
      values_separator: " - ",
      force_edges: true,
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = "$" + data.from;
      to = "$" + data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);

      $("#prange").val(data.from + "," + data.to);
      $("#prange").trigger('change');
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val,
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val,
      });
    });
  });

  //scrip
  /*-----------------------------------------------------------------------------------

 Template Name:Surfside Media
 Template URI: surfsidemedia.in
 Description: Ecommerce Website Project
 Author: Surfside Media
 Author URI: https://www.surfsidemedia.in/

 ----------------------------------------------------------------------------------- */
// 01.Tap to top js
// 02.Image to background js
// 03.menu js
// 04.search box function
// 05.color select function
// 06.size select function
// 07.modal function
// 08.add to cart
// 09.add to wishlist
// 10.category menu
// 11.Footer function
// 12.cart dunction
// 13.log in functions
// 14.product page quantity counter
// 15.other js
// 16.Recently puchase modal
// 17.active ul js
// 18.cookie bar js
// 19.hide header on scroll down js
// 20.shop list-grid js
// 21.Shop List-grid js
// 22.Mouseup functions
// 23.Feather js
// 24.header Dropdown js

(function ($) {
    "use strict";

    /*=====================
      1. Tap To Top Js
      ==========================*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-to-top').addClass('show');
        } else {
            $('.tap-to-top').removeClass('show');
        }
    });

    $('.tap-to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0,
        },
            600
        );
        return false;
    });
    /*=====================
      2. Image to background js
      ==========================*/
    $(".bg-top").parent().addClass("b-top");
    $(".bg-bottom").parent().addClass("b-bottom");
    $(".bg-center").parent().addClass("b-center");
    $(".bg-left").parent().addClass("b-left");
    $(".bg-right").parent().addClass("b-right");
    $(".bg_size_content").parent().addClass("b_size_content");
    $(".bg-img").parent().addClass("bg-size");
    $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
    $(".bg-img").each(function () {
        var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
        });

        el.hide();
    });

    /*=====================
      3. Menu js
      ==========================*/
    $(".toggle-nav, .sidebar-toggle").on("click", function () {
        $(".nav-menu").css("right", "0px");
        $(".mobile-poster").css("right", "0px");
        $(".bg-overlay").addClass("show");
    });
    $(".back-btn, .bg-overlay").on("click", function () {
        $(".nav-menu").css("right", "-410px");
        $(".mobile-poster").css("right", "-410px");
        $(".bg-overlay").removeClass("show");
    });

    var contentwidth = $(window).width();
    if (contentwidth < "1200") {
        $(".menu-title").append('<span class="according-menu">+</span>');
        $(".menu-title").on("click", function () {
            $(".menu-title")
                .removeClass("active")
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
            $(".menu-content").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">-</span>');
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">+</span>');
            }
        });
        $(".menu-content").hide();
    }

    var contentwidth = $(window).width();
    if (contentwidth < "1200") {
        $(".menu-title-level1").append(
            '<span class="according-menu">+</span>'
        );
        $(".menu-title-level1").on("click", function () {
            $(".menu-title-level1")
                .removeClass("active")
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
            $(".level1").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">-</span>');
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">+</span>');
            }
        });
        $(".nav-sub-childmenu .level1").hide();
    }

    var contentwidth = $(window).width();
    if (contentwidth < "1200") {
        $(".submenu-title").append('<span class="according-menu">+</span>');
        $(".submenu-title").on("click", function () {
            $(".submenu-title")
                .removeClass("active")
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
            $(".submenu-content").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">-</span>');
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">+</span>');
            }
        });
        $(".submenu-content").hide();
    }

    /*=====================
       4. search box function
       ==========================*/
    $(".search-box").on("click", function () {
        $(this).closest(".main-menu").find(".search-full").addClass("open");
    });
    $(window).on("load resize", function () {
        // open searchbox
        $(".search-type").on("click", function () {
            $(this).parents(".search-full").addClass("show");
        });

        // close seach
        $(".close-search").on("click", function () {
            $(this).closest(".main-menu").find(".search-full").removeClass("open");
        });
    });

    /*=====================
      5. color select function
      ==========================*/
    $(".color-variant li").on("click", function () {
        $(this).toggleClass("selected").siblings("li").removeClass("selected");
    });

    /*=====================
      6. size select function
      ==========================*/
    $(".size-detail ul li").on("click", function () {
        $(this).toggleClass("selected").siblings("li").removeClass("selected");
    });

    /*=====================
       7. modal function
       ==========================*/
    // $("#quick-view").on("show.bs.modal", function (event) {
    //     $(window).trigger("resize");
    //     $(".quick-view-slider").slick("slickNext");
    //     $(".quick-nav").slick("slickNext");
    // });

    /*=====================
       8. Add to cart
       ==========================*/
    $(".product-box .cart-wrap li .addtocart-btn").on("click", function () {
        // $.notify({
        //     icon: "fa fa-check",
        //     title: "Success!",
        //     message: "Item Successfully added to your cart",
        // }, {
        //     element: "body",
        //     position: null,
        //     type: "success",
        //     allow_dismiss: true,
        //     newest_on_top: false,
        //     showProgressbar: true,
        //     placement: {
        //         from: "top",
        //         align: "right",
        //     },
        //     offset: 20,
        //     spacing: 10,
        //     z_index: 1031,
        //     delay: 5000,
        //     animate: {
        //         enter: "animated fadeInDown",
        //         exit: "animated fadeOutUp",
        //     },
        //     icon_type: "class",
        //     template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        //         '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
        //         '<span data-notify="icon"></span> ' +
        //         '<span data-notify="title">{1}</span> ' +
        //         '<span data-notify="message">{2}</span>' +
        //         '<div class="progress" data-notify="progressbar">' +
        //         '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        //         "</div>" +
        //         '<a href="{3}" target="{4}" data-notify="url"></a>' +
        //         "</div>",
        // });
    });

    /*=====================
      9. Add to wishlist
      ==========================*/
    // $(".product-box a.wishlist").on("click", function () {
    //     $.notify({
    //         icon: "fa fa-check",
    //         title: "Success!",
    //         message: "Item Successfully added in wishlist",
    //     }, {
    //         element: "body",
    //         position: null,
    //         type: "info",
    //         allow_dismiss: true,
    //         newest_on_top: false,
    //         showProgressbar: true,
    //         placement: {
    //             from: "top",
    //             align: "right",
    //         },
    //         offset: 20,
    //         spacing: 10,
    //         z_index: 1031,
    //         delay: 5000,
    //         animate: {
    //             enter: "animated fadeInDown",
    //             exit: "animated fadeOutUp",
    //         },
    //         icon_type: "class",
    //         template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    //             '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
    //             '<span data-notify="icon"></span> ' +
    //             '<span data-notify="title">{1}</span> ' +
    //             '<span data-notify="message">{2}</span>' +
    //             '<div class="progress" data-notify="progressbar">' +
    //             '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    //             "</div>" +
    //             '<a href="{3}" target="{4}" data-notify="url"></a>' +
    //             "</div>",
    //     });
    // });

    /*=====================
      10. category menu
       ==========================*/
    $(".toggle-category").on("click", function () {
        $(".category-dropdown").addClass("open");
        $(".bg-overlay").addClass("show");
    });
    $(".back-category, .bg-overlay").on("click", function () {
        $(".category-dropdown").removeClass("open");
        $(".bg-overlay").removeClass("show");
    });
    var contentwidth = $(window).width();
    if (contentwidth < "1200") {
        $(".category-menu li.submenu >a").append(
            '<span class="according-menu">+</span>'
        );
        $(".category-menu li.submenu >a").on("click", function () {
            $(".category-menu li.submenu >a")
                .removeClass("active")
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
            $(".category-mega-menu").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">-</span>');
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">+</span>');
            }
        });
        $(".category-mega-menu").hide();
    }

    var contentwidth = $(window).width();
    if (contentwidth < "1200") {
        $(".title-category").append('<span class="according-menu">+</span>');
        $(".title-category").on("click", function () {
            $(".title-category")
                .removeClass("active")
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
            $(".category-childmenu ul").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">-</span>');
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith('<span class="according-menu">+</span>');
            }
        });
        $(".category-childmenu ul").hide();
    }

    /*=====================
       11. Footer function
       ==========================*/
    var contentwidth = $(window).width();
    if (contentwidth < "576") {
        $(".footer-title h5").append(
            '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
        );
        $(".footer-title").on("click", function () {
            $(".footer-title")
                .removeClass("active")
                .find("span")
                .replaceWith(
                    '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                );
            $(".footer-content").slideUp("normal");
            if ($(this).next().is(":hidden") == true) {
                $(this).addClass("active");
                $(this)
                    .find("span")
                    .replaceWith(
                        '<span class="according-menu"><i class="fas fa-chevron-up"></i></span>'
                    );
                $(this).next().slideDown("normal");
            } else {
                $(this)
                    .find("span")
                    .replaceWith(
                        '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                    );
            }
        });
        $(".footer-content").hide();
    } else {
        $(".footer-content").show();
    }

    /*=====================
       12. cart function
       ==========================*/
    $(".cart-dropdown .cart-media, .cart-dropdown > button").on("click", function () {
        $(".cart-dropdown").addClass("show");
        $("body").addClass("o-hidden");
    });

    $(".back-cart").on("click", function () {
        $(".cart-dropdown").removeClass("show");
        $("body").removeClass("o-hidden");
    });

    /*=====================
        13. Log In functions
     ==========================*/
    $(function () {
        $(".input input")
            .focus(function () {
                $(this)
                    .parent(".input")
                    .each(function () {
                        $("label", this).css({
                            "line-height": "18px",
                            "font-weight": "100",
                            top: "0px",
                        });
                        $(".spin", this).css({
                            width: "100%",
                        });
                    });
            })
            .blur(function () {
                $(".spin").css({
                    width: "0px",
                });
                if ($(this).val() == "") {
                    $(this)
                        .parent(".input")
                        .each(function () {
                            $("label", this).css({
                                "line-height": "60px",
                                "font-weight": "300",
                                top: "10px",
                            });
                        });
                }
            });

        // $(".button").click(function (e) {
        //     var pX = e.pageX,
        //         pY = e.pageY,
        //         oX = parseInt($(this).offset().left),
        //         oY = parseInt($(this).offset().top);
        //     $(".x-" + oX + ".y-" + oY + "").animate({
        //         width: "500px",
        //         height: "500px",
        //         top: "-250px",
        //         left: "-250px",
        //     },
        //         600
        //     );
        //     $("button", this).addClass("active");
        // });

        $(".alt-2").on("click", function () {
            if (!$(this).hasClass("material-button")) {
                $(".shape").css({
                    width: "100%",
                    height: "100%",
                    transform: "rotate(0deg)",
                });

                setTimeout(function () {
                    $(".overbox").css({
                        overflow: "initial",
                    });
                }, 600);

                $(this).animate({
                    width: "140px",
                    height: "140px",
                },
                    500,
                    function () {
                        $(".box").removeClass("back");

                        $(this).removeClass("active");
                    }
                );

                $(".overbox .title").fadeOut(300);
                $(".overbox .input").fadeOut(300);
                $(".overbox .button").fadeOut(300);

                $(".alt-2").addClass("material-buton");
            }
        });

        // $(".material-button").on("click", function () {
        //     if ($(this).hasClass("material-button")) {
        //         setTimeout(function () {
        //             $(".overbox").css({
        //                 overflow: "hidden",
        //             });
        //             $(".box").addClass("back");
        //         }, 200);
        //         $(this).addClass("active").animate({
        //             width: "850px",
        //             height: "850px",
        //         });

        //         setTimeout(function () {
        //             $(".shape").css({
        //                 width: "50%",
        //                 height: "50%",
        //                 transform: "rotate(45deg)",
        //             });

        //             $(".overbox .title").fadeIn(300);
        //             $(".overbox .input").fadeIn(300);
        //             $(".overbox .button").fadeIn(300);
        //         }, 700);

        //         $(this).removeClass("material-button");
        //     }

        //     if ($(".alt-2").hasClass("material-buton")) {
        //         $(".alt-2").removeClass("material-buton");
        //         $(".alt-2").addClass("material-button");
        //     }
        // });
    });

    /*=====================
      14. Product page Quantity Counter
     ==========================*/
    $(".qty-box .quantity-right-plus").on("click", function () {
        var $qty = $(".qty-box .input-number");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });

    $(".qty-box .quantity-left-minus").on("click", function () {
        var $qty = $(".qty-box .input-number");
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });

    /*=====================
      15. Other Js
     ==========================*/
    $(".size-box ul li").on("click", function (e) {
        $(".size-box ul li").removeClass("active");
        $("#selectSize").removeClass("cartMove");
        $(this).addClass("active");
        $(this).parent().addClass("selected");
    });

    $("#cartEffect").on("click", function (e) {
        if ($("#selectSize .size-box ul").hasClass("selected")) {
            $("#cartEffect").text("Added to bag ");
            $(".added-notification").addClass("show");
            setTimeout(function () {
                $(".added-notification").removeClass("show");
            }, 5000);
        } else {
            $("#selectSize").addClass("cartMove");
        }
    });

    /*=====================
     16. Recently puchase modal
     ==========================*/
    setInterval(function () {
        $(".recently-purchase").toggleClass("show");
    }, 20000);

    $(".recently-purchase .close-popup").on("click", function () {
        $(".recently-purchase").removeClass("show");
    });

    /*=====================
    17. active ul js
     ==========================*/
    $(".image-section li").on("click", function () {
        $(".image-section li").removeClass("active");
        $(this).addClass("active");
    });

    /*=====================
      18. Coockie js
     ==========================*/
    $(".cookie-bar-section #button").on("click", function () {
        $(".cookie-bar-section").toggleClass("hide");
    });

    /*=====================
     19. Hide header on scroll down js
     ==========================*/
    $(function () {
        var $window = $(window);
        var lastScrollTop = 0;
        var $header = $("header");
        var headerHeight = $header.outerHeight();

        $window.scroll(function () {
            var windowTop = $window.scrollTop();

            if (windowTop >= headerHeight) {
                $header.addClass("nav-down");
            } else {
                $header.removeClass("nav-down");
                $header.removeClass("nav-up");
            }

            if ($header.hasClass("nav-down")) {
                if (windowTop < lastScrollTop) {
                    $header.addClass("nav-up");
                } else {
                    $header.removeClass("nav-up");
                }
            }
            $("#lastscrolltop").text("LastscrollTop: " + lastScrollTop);

            lastScrollTop = windowTop;

            $("#windowtop").text("scrollTop: " + windowTop);
        });
    });

    /*=====================
        20. Shop List-grid js
     ==========================*/
    $(".grid-options .grid-btn").on("click", function () {
        $(".product-list-section").removeClass("list-style");
    });

    $(".grid-options .list-btn").on("click", function () {
        $(".product-list-section").addClass("list-style");
    });
    $('.two-grid').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-2");
    });
    $('.three-grid').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-md-3 row-cols-2");
    });
    $('.grid-btn').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-lg-4 row-cols-md-3 row-cols-2");
    });
    $('.five-grid').on('click', function (e) {
        $(".product-list-section").removeClass("list-style").addClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2");
    });
    var contentwidth = $(window).width();
    if (contentwidth < "1199") {
        $(".grid-options .grid-btn").addClass("active");
    }
    if (contentwidth < "991") {
        $(".grid-options .three-grid").addClass("active");
    }
    if (contentwidth < "767") {
        $(".grid-options .two-grid").addClass("active");
    }

})(jQuery);

/*=====================
    21. Shop List-grid js
 ==========================*/
$(".grid-options ul li").click(function () {
    $(".grid-options li.active").removeClass("active");
    $(this).addClass("active")
});

/*=====================
    22. Mouseup functions
 ==========================*/
$(document).mouseup(function (e) {
    // searchbox
    var searchbar = $(".search-full");
    if (!searchbar.is(e.target) && searchbar.has(e.target).length === 0) {
        $(".search-full").removeClass("show");
    }

    // menu sidebar
    var navMenu = $(".nav-menu");
    if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0) {
        $(".nav-menu").css("right", "-410px");
        $("body").removeClass("o-hidden");
    }

    // category menu
    var categoryMenu = $(".category-dropdown");
    if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
        $(".category-dropdown").removeClass("open");
        $("body").removeClass("o-hidden");
    }

    // category menu
    var categoryMenu = $(".cart-dropdown");
    if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
        $(".cart-dropdown").removeClass("show");
        $("body").removeClass("o-hidden");
    }

    // top filter
    var topFilter = $(".top-filter-section .onclick-title");
    if (!topFilter.is(e.target) && topFilter.has(e.target).length === 0) {
        $(".top-filter-section .onclick-title").removeClass("show");
    }
});

/*=====================
    23. Feather js
 ==========================*/
feather.replace();

/*=====================
    24. header Dropdown js
 ==========================*/
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

//theme-setting
/*========================
 Dark local storage setting js
 ==========================*/
 $("#darkButton").on("click", function () {
    if ($("body").hasClass("light")) {
      var href = $("#color-link").attr("href");
      var split = href.split("/").pop().split(".").shift();
      $("body").removeClass("light");
      $("body").addClass("dark");
      $(this).text("Light");
      document
        .getElementById("color-link")
        .setAttribute("href", "assets/css/" + split + "_dark.css");
    } else {
      var href = $("#color-link").attr("href");
      var split = href.split("/").pop().split(".").shift().split("_").shift();
      $("body").removeClass("dark");
      $("body").addClass("light");
      $(this).text("Dark");
      document
        .getElementById("color-link")
        .setAttribute("href", "assets/css/" + split + ".css");
    }
  });

  /*========================
     RTL local storage setting js
     ==========================*/
  $(".rtl-button").on("click", function () {
    if ($("body").hasClass("ltr")) {
      $("html").attr("dir", "rtl");
      $("body").removeClass("ltr");
      $("body").addClass("rtl");
      $(this).text("LTR");
      $("#rtl-link").attr("href", "assets/css/vendors/bootstrap.rtl.css");
    } else {
      $("html").attr("dir", "");
      $("body").removeClass("rtl");
      $(this).text("RTL");
      $("body").addClass("ltr");
      $("#rtl-link").attr("href", "assets/css/vendors/bootstrap.css");
    }
  });

  €(".update-cart").change(function (e) {
    e.preventDefault();

    var ele = €(this);

    €.ajax({
        url: '{{ route('update.cart') }}',
        method: "patch",
        data: {
            _token: '{{ csrf_token() }}',
            id: ele.parents("tr").attr("data-id"),
            quantity: ele.parents("tr").find(".quantity").val()
        },
        success: function (response) {
           window.location.reload();
        }
    });
});

€(".remove-from-cart").click(function (e) {
    e.preventDefault();

    var ele = €(this);

    if(confirm("Are you sure want to remove?")) {
      €.ajax({
            url: '{{ route('remove.from.cart') }}',
            method: "DELETE",
            data: {
                _token: '{{ csrf_token() }}',
                id: ele.parents("tr").attr("data-id")
            },
            success: function (response) {
                window.location.reload();
            }
        });
    }
});
