!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Timeplayer = e() : t.Timeplayer = e()
}(window, (function () {
    return function (t) {
        var e = {};
        function i(n) {
            if (e[n])
                return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i),
                o.l = !0,
                o.exports
        }
        return i.m = t,
            i.c = e,
            i.d = function (t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ,
            i.t = function (t, e) {
                if (1 & e && (t = i(t)),
                    8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && "string" != typeof t)
                    for (var o in t)
                        i.d(n, o, function (e) {
                            return t[e]
                        }
                            .bind(null, o));
                return n
            }
            ,
            i.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                }
                    : function () {
                        return t
                    }
                    ;
                return i.d(e, "a", e),
                    e
            }
            ,
            i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "",
            i(i.s = 0)
    }([function (t, e, i) {
        "use strict";
        i.r(e);
        var n, o = {
            forward: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5762" width="16" height="16"><path d="M814.976 222.304c-10.432-5.504-23.168-4.832-32.96 1.824L576 364.288 576 250.592c0-11.872-6.56-22.72-17.024-28.288-10.432-5.504-23.168-4.832-32.96 1.824l-384 261.248C133.248 491.328 128 501.248 128 511.84s5.248 20.512 14.016 26.464l384 261.376c5.408 3.68 11.68 5.568 17.984 5.568 5.12 0 10.272-1.216 14.976-3.712C569.44 796 576 785.088 576 773.248l0-113.792 206.016 140.224c5.408 3.68 11.68 5.568 17.984 5.568 5.12 0 10.272-1.216 14.976-3.712C825.44 796 832 785.088 832 773.248L832 250.592C832 238.72 825.44 227.872 814.976 222.304z" p-id="5763"></path></svg>',
            next: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6081" width="16" height="16"><path d="M817.088 484.96l-512-323.744C295.232 154.976 282.752 154.592 272.576 160.224 262.336 165.856 256 176.608 256 188.256l0 647.328c0 11.648 6.336 22.4 16.576 28.032 4.8 2.656 10.112 3.968 15.424 3.968 5.952 0 11.904-1.664 17.088-4.928l512-323.616C826.368 533.184 832 522.976 832 512 832 501.024 826.368 490.816 817.088 484.96z" p-id="6082"></path></svg>',
            pause: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6307" width="16" height="16"><path d="M352 768c-17.664 0-32-14.304-32-32L320 288c0-17.664 14.336-32 32-32s32 14.336 32 32l0 448C384 753.696 369.664 768 352 768z" p-id="6308"></path><path d="M672 768c-17.696 0-32-14.304-32-32L640 288c0-17.664 14.304-32 32-32s32 14.336 32 32l0 448C704 753.696 689.696 768 672 768z" p-id="6309"></path></svg>'
        }, a = {
            controlBtn: "#000"
        }, s = function () {
            function t(t) {
                var e = t.speed
                    , i = void 0 === e ? 1 : e
                    , n = t.speedMax
                    , o = void 0 === n ? 10 : n
                    , s = t.speedMin
                    , l = void 0 === s ? .1 : s
                    , r = t.value
                    , d = void 0 === r ? 0 : r
                    , c = t.valueMax
                    , h = void 0 === c ? 10 : c
                    , p = t.valueMin
                    , v = void 0 === p ? 0 : p
                    , u = t.allowLoop
                    , f = void 0 === u || u
                    , g = t.step
                    , x = void 0 === g ? .1 : g;
                this.colors = Object.assign(a, t.colors || {}),
                    this.speed = i,
                    this.speedMax = o,
                    this.speedMin = l,
                    this.value = d,
                    this.valueMax = h,
                    this.valueMin = v,
                    this.allowLoop = f,
                    this.step = x,
                    t.onChange && (this.onChange = t.onChange),
                    this.speedMin = Math.max(this.speedMin, .1),
                    this.state = 0,
                    this.numberFix = this.step < 1 ? this.step.toString().length - 2 : 0,
                    this.controlid = "control_" + +new Date,
                    this.initDom(),
                    this.initEvent(),
                    this.draw()
            }
            return t.prototype.setCSS = function () {
                var t = this.controlid
                    , e = document.createElement("style");
                e.type = "text/css",
                    e.innerHTML = "\n        ." + t + " {\n            height: 20px;\n            line-height: 20px;\n            font-size: 10px;\n            text-align: center;\n        }\n        ." + t + " span {\n            cursor: pointer;\n            border: 1px solid transparent;\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 18px;\n            height: 18px;\n            width: 18px;\n            text-align: center;\n            box-sizing: border-box;\n            overflow: hidden;\n        }\n        ." + t + " span svg {\n            float: left;\n            height: 16px;\n            width: 16px;\n            fill: " + this.colors.controlBtn + "\n        }\n        ." + t + " .space {\n            width: 1px;\n            overflow: hidden;\n            margin: 0 3px;\n            border-right: 1px solid #eee;\n        }\n        ." + t + " .play {\n            border: 1px solid " + this.colors.controlBtn + ";\n            width: 14px;\n            height: 14px;\n            border-radius: 100px;\n        }\n        ." + t + " .pause {\n            border: 1px solid transparent;\n            width: 16px;\n            height: 16px;\n            margin: 0 -1px;\n        }\n        ." + t + " .previous svg,\n        ." + t + " .forward svg { \n            transform: rotate(180deg);\n        }\n        ." + t + " .up svg {\n            transform: rotate(-90deg);\n        }\n        ." + t + " .down svg { \n            transform: rotate(90deg);\n        }\n        ." + t + " .play svg {\n            width: 12px;\n            height: 12px;\n        }\n        ." + t + " .speed {\n            user-select: none;\n            width: auto;\n            color: " + this.colors.controlBtn + "\n        }\n        \n        ",
                    document.head.appendChild(e)
            }
                ,
                t.prototype.initDom = function () {
                    var t = this.controlid;
                    this.setCSS();
                    var e = ["forward", "next", "next", "pause", "next", "forward", "", "next", "", "next"]
                        , i = {};
                    ["backward", "previous", "play", "pause", "next", "forward", "space", "up", "speed", "down"].forEach((function (t, n) {
                        var a = document.createElement("span");
                        a.className = "" + t;
                        var s = e[n];
                        a.innerHTML = o[s] || "",
                            i[t] = a
                    }
                    ));
                    var n = document.createElement("div");
                    n.className = "" + t,
                        this.control = i;
                    for (var a = 0, s = Object.entries(this.control); a < s.length; a++) {
                        var l = s[a]
                            , r = (l[0],
                                l[1]);
                        n.appendChild(r)
                    }
                    this.dom = n
                }
                ,
                t.prototype.initEvent = function () {
                    var t = this
                        , e = this.control
                        , i = this.speedMax
                        , n = this.speedMin
                        , o = this.step;
                    e.up.addEventListener("click", (function () {
                        t.speed += o,
                            t.speed = Math.min(i, t.speed),
                            t.state = 0,
                            t.draw()
                    }
                    )),
                        e.down.addEventListener("click", (function () {
                            t.speed -= o,
                                t.speed = Math.max(n, t.speed),
                                t.state = 0,
                                t.draw()
                        }
                        )),
                        e.next.addEventListener("click", (function () {
                            t.value += 1,
                                t.value = Math.min(t.value, t.valueMax),
                                t.state = 0,
                                t.draw(!0)
                        }
                        )),
                        e.previous.addEventListener("click", (function () {
                            t.value -= 1,
                                t.state = 0,
                                t.value = Math.max(t.value, t.valueMin),
                                t.draw(!0)
                        }
                        )),
                        e.backward.addEventListener("click", (function () {
                            t.value = t.valueMin,
                                t.state = 0,
                                t.draw(!0)
                        }
                        )),
                        e.forward.addEventListener("click", (function () {
                            t.value = t.valueMax,
                                t.state = 0,
                                t.draw(!0)
                        }
                        )),
                        e.play.addEventListener("click", (function () {
                            t.state = 1,
                                window.clearInterval(t.interval),
                                t.interval = window.setInterval((function () {
                                    t.value += 1,
                                        t.value > t.valueMax && (t.allowLoop ? t.value = t.valueMin : (t.state = 0,
                                            window.clearInterval(t.interval))),
                                        t.draw(!0)
                                }
                                ), 1e3 * t.speed)
                        }
                        )),
                        e.pause.addEventListener("click", (function () {
                            t.state = 0,
                                window.clearInterval(t.interval),
                                t.draw()
                        }
                        ))
                }
                ,
                t.prototype.draw = function (t) {
                    void 0 === t && (t = !1);
                    var e = this
                        , i = e.control
                        , n = e.state
                        , o = e.numberFix
                        , a = e.value
                        , s = e.valueMin
                        , l = e.valueMax
                        , r = e.speed
                        , d = e.speedMin
                        , c = e.speedMax;
                    i.speed.innerText = r.toFixed(o),
                        0 === n ? (i.pause.style.display = "none",
                            i.play.style.display = "inline-block",
                            window.clearInterval(this.interval)) : (i.pause.style.display = "inline-block",
                                i.play.style.display = "none"),
                        i.backward.style.opacity = "1",
                        i.previous.style.opacity = "1",
                        i.forward.style.opacity = "1",
                        i.next.style.opacity = "1",
                        i.down.style.opacity = "1",
                        i.up.style.opacity = "1",
                        a <= s ? (i.backward.style.opacity = "0.5",
                            i.previous.style.opacity = "0.5") : a >= l && (i.forward.style.opacity = "0.5",
                                i.next.style.opacity = "0.5"),
                        r <= d ? i.down.style.opacity = "0.5" : r >= c && (i.up.style.opacity = "0.5"),
                        t && this.onChange(this.value)
                }
                ,
                t.prototype.setActive = function (t) {
                    this.value = t,
                        this.draw()
                }
                ,
                t
        }();
        !function (t) {
            t.change = "change"
        }(n || (n = {}));
        var l = {
            minHeight: 40,
            minWidth: 100,
            padding: 8,
            pointSpace: 10,
            defaultColors: {
                scaleStart: "#000",
                scaleEnd: "#000",
                scaleLine: "#000",
                scaleTextStart: "#333",
                scaleTextEnd: "#333",
                scalePointsSmall: "#0063a9",
                scalePointsBig: "#0190f5",
                activePointStroke: "black",
                activePointFill: "rgba(100, 191, 255, 1.0)",
                activeTipsBackground: "rgba(100, 191, 255, 0.8)",
                activeTipsText: "white",
                hoverPointStroke: "black",
                hoverPointFill: "white",
                hoverTipsBackground: "rgba(0, 0, 0, 0.8)",
                hoverTipsText: "white",
                controlBtn: "#000"
            },
            darkColors: {
                scaleStart: "#bbb",
                scaleEnd: "#bbb",
                scaleLine: "#bbb",
                scaleTextStart: "#ccc",
                scaleTextEnd: "#ccc",
                scalePointsSmall: "#fff",
                scalePointsBig: "#fff",
                activePointStroke: "#fff",
                activePointFill: "rgba(100, 191, 255, 1.0)",
                activeTipsBackground: "rgba(100, 191, 255, 0.8)",
                activeTipsText: "white",
                hoverPointStroke: "#fff",
                hoverPointFill: "#eee",
                hoverTipsBackground: "#666",
                hoverTipsText: "white",
                controlBtn: "#fff"
            }
        }
            , r = function () {
                function t(t, e) {
                    this.dom = t,
                        this.dates = e.dates,
                        this.Config = Object.assign({}, l, e),
                        this._activeIndex = this.dates.length - 1;
                    var i = getComputedStyle(this.dom);
                    this.padding = this.Config.padding,
                        this.height = e.height || Math.max(parseFloat(i.height), this.Config.minHeight),
                        this.width = e.width || Math.max(parseFloat(i.width), this.Config.minWidth) - 2 * this.padding,
                        e.colors ? this.colors = Object.assign({}, this.Config.defaultColors, e.colors) : this.colors = "dark" === e.theme ? this.Config.darkColors : this.Config.defaultColors,
                        this.setupControl(),
                        this.setupCanvas(),
                        this.setupEvens(),
                        this.draw()
                }
                return t.prototype.setupControl = function () {
                    var t = this
                        , e = this.colors.controlBtn;
                    this.control = new s({
                        valueMax: this.dates.length - 1,
                        value: this._activeIndex,
                        colors: {
                            controlBtn: e
                        },
                        onChange: function (e) {
                            t.activeIndex = e,
                                t.draw()
                        }
                    }),
                        this.dom.appendChild(this.control.dom)
                }
                    ,
                    t.prototype.setupCanvas = function () {
                        var t = this.padding
                            , e = this.height
                            , i = this.dom
                            , n = this.width + 2 * t
                            , o = this.canvas = document.createElement("canvas")
                            , a = this.ctx = o.getContext("2d");
                        o.style.width = n + "px",
                            o.style.height = e + "px",
                            i.appendChild(o);
                        var s = window.devicePixelRatio || 1;
                        o.width = n * s,
                            o.height = e * s,
                            a.scale(s, s)
                    }
                    ,
                    t.prototype.setupEvens = function () {
                        var t = this
                            , e = this.canvas
                            , i = this.padding
                            , n = this.width
                            , o = this.dates;
                        this.events = {},
                            e.onmousemove = function (e) {
                                var a = (e.offsetX - i) / n
                                    , s = Math.round(a * (o.length - 1));
                                s = Math.max(0, s),
                                    s = Math.min(o.length - 1, s),
                                    t.hoverIndex = s,
                                    t.draw()
                            }
                            ,
                            e.onmouseleave = function () {
                                t.hoverIndex = null,
                                    t.draw()
                            }
                            ,
                            e.onclick = function (e) {
                                var a = (e.offsetX - i) / n
                                    , s = Math.round(a * (o.length - 1));
                                s = Math.max(0, s),
                                    s = Math.min(o.length, s),
                                    t.activeIndex = s,
                                    t.control.setActive(s),
                                    t.draw()
                            }
                    }
                    ,
                    t.prototype.draw = function () {
                        var t = this.ctx;
                        t.clearRect(0, 0, t.canvas.width, t.canvas.height),
                            this.drawScale(),
                            this.drawHover(),
                            this.drawActive()
                    }
                    ,
                    t.prototype.drawScale = function () {
                        var t = this
                            , e = t.ctx
                            , i = t.padding
                            , n = t.width
                            , o = t.height
                            , a = t.dates
                            , s = t.colors
                            , l = t.Config
                            , r = n / (a.length - 1);
                        e.lineWidth = 2,
                            e.beginPath(),
                            e.moveTo(i, 0),
                            e.lineTo(i, o),
                            e.strokeStyle = s.scaleStart,
                            e.stroke(),
                            e.beginPath(),
                            e.moveTo(n + i, 0),
                            e.lineTo(n + i, o),
                            e.strokeStyle = s.scaleEnd,
                            e.stroke(),
                            e.beginPath(),
                            e.moveTo(i, o / 2),
                            e.lineTo(n + i, o / 2),
                            e.lineWidth = 1,
                            e.strokeStyle = s.scaleLine,
                            e.stroke(),
                            e.textBaseline = "top",
                            e.font = "10px Orbitron",
                            e.textAlign = "left",
                            e.fillStyle = s.scaleTextStart,
                            e.fillText(a[0], i + 4, 0),
                            e.textAlign = "right",
                            e.fillStyle = s.scaleTextEnd,
                            e.fillText(a[a.length - 1], n + i - 4, 0),
                            e.beginPath();
                        for (var d = 0, c = [], h = 1; h * r < n; h++) {
                            var p = void 0
                                , v = void 0;
                            if ((d += r) >= l.pointSpace)
                                d = 0,
                                    v = 4,
                                    c.push({
                                        leftX: h * r - v / 2 + i,
                                        leftY: o / 2 - v / 2
                                    });
                            else {
                                v = 1.5,
                                    p = s.scalePointsSmall;
                                var u = h * r - v / 2 + i
                                    , f = o / 2 - v / 2;
                                e.fillStyle = p,
                                    e.fillRect(u, f, v, v)
                            }
                        }
                        c.forEach((function (t) {
                            var i = t.leftX
                                , n = t.leftY;
                            e.fillStyle = s.scalePointsBig,
                                e.fillRect(i, n, 4, 4)
                        }
                        ))
                    }
                    ,
                    t.prototype.drawHover = function () {
                        var t = this
                            , e = t.width
                            , i = t.height
                            , n = t.ctx
                            , o = t.dates
                            , a = t.padding
                            , s = t.hoverIndex
                            , l = t.colors;
                        if (null !== s) {
                            var r = e / (o.length - 1);
                            n.beginPath(),
                                n.arc(r * s + a, i / 2, 4, 0, 2 * Math.PI),
                                n.lineWidth = 1,
                                n.fillStyle = l.hoverPointFill,
                                n.strokeStyle = l.hoverPointStroke,
                                n.stroke(),
                                n.fill(),
                                n.textBaseline = "top";
                            var d = n.measureText(o[s])
                                , c = void 0
                                , h = void 0;
                            s > o.length / 2 ? (n.textAlign = "right",
                                c = r * s + a - d.width - 10 - 5,
                                h = r * s + a - 5 - 5) : (n.textAlign = "left",
                                    h = (c = r * s + a + 5) + 5),
                                n.fillStyle = l.hoverTipsBackground,
                                n.fillRect(c, 0, d.width + 10, 14),
                                n.fillStyle = l.hoverTipsText,
                                n.fillText(o[s], h, 2)
                        }
                    }
                    ,
                    t.prototype.drawActive = function () {
                        var t = this
                            , e = t.width
                            , i = t.dates
                            , n = t.ctx
                            , o = t._activeIndex
                            , a = t.height
                            , s = t.colors
                            , l = t.padding
                            , r = e / (i.length - 1);
                        n.beginPath(),
                            n.arc(r * o + l, a / 2, 4, 0, 2 * Math.PI),
                            n.lineWidth = 2,
                            n.strokeStyle = s.activePointStroke,
                            n.fillStyle = s.activePointFill,
                            n.stroke(),
                            n.fill(),
                            n.closePath(),
                            n.font = "12px Orbitron",
                            n.textBaseline = "bottom",
                            n.textAlign = "center";
                        var d, c, h = n.measureText(i[o]).width + 10;
                        o > i.length / 2 ? (n.textAlign = "right",
                            d = r * o + l - h - 5,
                            c = r * o + l - 5 - 5) : (n.textAlign = "left",
                                c = (d = r * o + l + 5) + 5),
                            n.fillStyle = s.activeTipsBackground,
                            n.fillRect(d, a - 14, h, 14),
                            n.fillStyle = s.activeTipsText,
                            n.fillText(i[o], c, a)
                    }
                    ,
                    t.prototype.on = function (t, e) {
                        console.log(this.events),
                            this.events[t] = this.events[t] || [],
                            this.events[t].push(e)
                    }
                    ,
                    t.prototype.off = function (t, e) {
                        var i = this.events[t].indexOf(e);
                        -1 !== i && this.events[t].splice(i, 1)
                    }
                    ,
                    Object.defineProperty(t.prototype, "activeIndex", {
                        get: function () {
                            return this._activeIndex
                        },
                        set: function (t) {
                            var e = this;
                            this._activeIndex = t,
                                (this.events.change || []).forEach((function (i) {
                                    i(t, e.dates[t])
                                }
                                ))
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t
            }();
        e.default = r
    }
    ]).default
}
));

