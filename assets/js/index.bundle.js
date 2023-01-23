!(function (e) {
	function t(t) {
		for (
			var n, o, r = t[0], a = t[1], s = t[2], c = 0, l = [];
			c < r.length;
			c++
		)
			(o = r[c]),
				Object.prototype.hasOwnProperty.call(T, o) &&
					T[o] &&
					l.push(T[o][0]),
				(T[o] = 0);
		for (n in a)
			Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
		for (D && D(t); l.length; ) l.shift()();
		return C.push.apply(C, s || []), i();
	}
	function i() {
		for (var e, t = 0; t < C.length; t++) {
			for (var i = C[t], n = !0, o = 1; o < i.length; o++) {
				var r = i[o];
				0 !== T[r] && (n = !1);
			}
			n && (C.splice(t--, 1), (e = E((E.s = i[0]))));
		}
		return e;
	}
	var n = window.webpackHotUpdate;
	window.webpackHotUpdate = function (e, t) {
		!(function (e, t) {
			if (!_[e] || !g[e]) return;
			for (var i in ((g[e] = !1), t))
				Object.prototype.hasOwnProperty.call(t, i) && (m[i] = t[i]);
			0 == --b && 0 === y && $();
		})(e, t),
			n && n(e, t);
	};
	var o,
		r = !0,
		a = "b72bf77d8989fc5a4004",
		s = {},
		c = [],
		l = [];
	function u(e) {
		var t = {
			_acceptedDependencies: {},
			_declinedDependencies: {},
			_selfAccepted: !1,
			_selfDeclined: !1,
			_disposeHandlers: [],
			_main: o !== e,
			active: !0,
			accept: function (e, i) {
				if (void 0 === e) t._selfAccepted = !0;
				else if ("function" == typeof e) t._selfAccepted = e;
				else if ("object" == typeof e)
					for (var n = 0; n < e.length; n++)
						t._acceptedDependencies[e[n]] = i || function () {};
				else t._acceptedDependencies[e] = i || function () {};
			},
			decline: function (e) {
				if (void 0 === e) t._selfDeclined = !0;
				else if ("object" == typeof e)
					for (var i = 0; i < e.length; i++)
						t._declinedDependencies[e[i]] = !0;
				else t._declinedDependencies[e] = !0;
			},
			dispose: function (e) {
				t._disposeHandlers.push(e);
			},
			addDisposeHandler: function (e) {
				t._disposeHandlers.push(e);
			},
			removeDisposeHandler: function (e) {
				var i = t._disposeHandlers.indexOf(e);
				i >= 0 && t._disposeHandlers.splice(i, 1);
			},
			check: x,
			apply: P,
			status: function (e) {
				if (!e) return p;
				d.push(e);
			},
			addStatusHandler: function (e) {
				d.push(e);
			},
			removeStatusHandler: function (e) {
				var t = d.indexOf(e);
				t >= 0 && d.splice(t, 1);
			},
			data: s[e],
		};
		return (o = void 0), t;
	}
	var d = [],
		p = "idle";
	function h(e) {
		p = e;
		for (var t = 0; t < d.length; t++) d[t].call(null, e);
	}
	var f,
		m,
		v,
		b = 0,
		y = 0,
		w = {},
		g = {},
		_ = {};
	function k(e) {
		return +e + "" === e ? +e : e;
	}
	function x(e) {
		if ("idle" !== p)
			throw new Error("check() is only allowed in idle status");
		return (
			(r = e),
			h("check"),
			((t = 1e4),
			(t = t || 1e4),
			new Promise(function (e, i) {
				if ("undefined" == typeof XMLHttpRequest)
					return i(new Error("No browser support"));
				try {
					var n = new XMLHttpRequest(),
						o = E.p + "" + a + ".hot-update.json";
					n.open("GET", o, !0), (n.timeout = t), n.send(null);
				} catch (e) {
					return i(e);
				}
				n.onreadystatechange = function () {
					if (4 === n.readyState)
						if (0 === n.status)
							i(
								new Error(
									"Manifest request to " + o + " timed out."
								)
							);
						else if (404 === n.status) e();
						else if (200 !== n.status && 304 !== n.status)
							i(
								new Error(
									"Manifest request to " + o + " failed."
								)
							);
						else {
							try {
								var t = JSON.parse(n.responseText);
							} catch (e) {
								return void i(e);
							}
							e(t);
						}
				};
			})).then(function (e) {
				if (!e) return h("idle"), null;
				(g = {}), (w = {}), (_ = e.c), (v = e.h), h("prepare");
				var t = new Promise(function (e, t) {
					f = { resolve: e, reject: t };
				});
				for (var i in ((m = {}), T)) I(i);
				return "prepare" === p && 0 === y && 0 === b && $(), t;
			})
		);
		var t;
	}
	function I(e) {
		_[e]
			? ((g[e] = !0),
			  b++,
			  (function (e) {
					var t = document.createElement("script");
					(t.charset = "utf-8"),
						(t.src = E.p + "" + e + "." + a + ".hot-update.js"),
						document.head.appendChild(t);
			  })(e))
			: (w[e] = !0);
	}
	function $() {
		h("ready");
		var e = f;
		if (((f = null), e))
			if (r)
				Promise.resolve()
					.then(function () {
						return P(r);
					})
					.then(
						function (t) {
							e.resolve(t);
						},
						function (t) {
							e.reject(t);
						}
					);
			else {
				var t = [];
				for (var i in m)
					Object.prototype.hasOwnProperty.call(m, i) && t.push(k(i));
				e.resolve(t);
			}
	}
	function P(t) {
		if ("ready" !== p)
			throw new Error("apply() is only allowed in ready status");
		var i, n, o, r, l;
		function u(e) {
			for (
				var t = [e],
					i = {},
					n = t.map(function (e) {
						return { chain: [e], id: e };
					});
				n.length > 0;

			) {
				var o = n.pop(),
					a = o.id,
					s = o.chain;
				if ((r = O[a]) && !r.hot._selfAccepted) {
					if (r.hot._selfDeclined)
						return { type: "self-declined", chain: s, moduleId: a };
					if (r.hot._main)
						return { type: "unaccepted", chain: s, moduleId: a };
					for (var c = 0; c < r.parents.length; c++) {
						var l = r.parents[c],
							u = O[l];
						if (u) {
							if (u.hot._declinedDependencies[a])
								return {
									type: "declined",
									chain: s.concat([l]),
									moduleId: a,
									parentId: l,
								};
							-1 === t.indexOf(l) &&
								(u.hot._acceptedDependencies[a]
									? (i[l] || (i[l] = []), d(i[l], [a]))
									: (delete i[l],
									  t.push(l),
									  n.push({ chain: s.concat([l]), id: l })));
						}
					}
				}
			}
			return {
				type: "accepted",
				moduleId: e,
				outdatedModules: t,
				outdatedDependencies: i,
			};
		}
		function d(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				-1 === e.indexOf(n) && e.push(n);
			}
		}
		t = t || {};
		var f = {},
			b = [],
			y = {},
			w = function () {
				console.warn(
					"[HMR] unexpected require(" +
						x.moduleId +
						") to disposed module"
				);
			};
		for (var g in m)
			if (Object.prototype.hasOwnProperty.call(m, g)) {
				var x;
				l = k(g);
				var I = !1,
					$ = !1,
					P = !1,
					C = "";
				switch (
					((x = m[g] ? u(l) : { type: "disposed", moduleId: g })
						.chain &&
						(C = "\nUpdate propagation: " + x.chain.join(" -> ")),
					x.type)
				) {
					case "self-declined":
						t.onDeclined && t.onDeclined(x),
							t.ignoreDeclined ||
								(I = new Error(
									"Aborted because of self decline: " +
										x.moduleId +
										C
								));
						break;
					case "declined":
						t.onDeclined && t.onDeclined(x),
							t.ignoreDeclined ||
								(I = new Error(
									"Aborted because of declined dependency: " +
										x.moduleId +
										" in " +
										x.parentId +
										C
								));
						break;
					case "unaccepted":
						t.onUnaccepted && t.onUnaccepted(x),
							t.ignoreUnaccepted ||
								(I = new Error(
									"Aborted because " +
										l +
										" is not accepted" +
										C
								));
						break;
					case "accepted":
						t.onAccepted && t.onAccepted(x), ($ = !0);
						break;
					case "disposed":
						t.onDisposed && t.onDisposed(x), (P = !0);
						break;
					default:
						throw new Error("Unexception type " + x.type);
				}
				if (I) return h("abort"), Promise.reject(I);
				if ($)
					for (l in ((y[l] = m[l]),
					d(b, x.outdatedModules),
					x.outdatedDependencies))
						Object.prototype.hasOwnProperty.call(
							x.outdatedDependencies,
							l
						) &&
							(f[l] || (f[l] = []),
							d(f[l], x.outdatedDependencies[l]));
				P && (d(b, [x.moduleId]), (y[l] = w));
			}
		var j,
			M = [];
		for (n = 0; n < b.length; n++)
			(l = b[n]),
				O[l] &&
					O[l].hot._selfAccepted &&
					y[l] !== w &&
					M.push({ module: l, errorHandler: O[l].hot._selfAccepted });
		h("dispose"),
			Object.keys(_).forEach(function (e) {
				!1 === _[e] &&
					(function (e) {
						delete T[e];
					})(e);
			});
		for (var H, D, S = b.slice(); S.length > 0; )
			if (((l = S.pop()), (r = O[l]))) {
				var A = {},
					B = r.hot._disposeHandlers;
				for (o = 0; o < B.length; o++) (i = B[o])(A);
				for (
					s[l] = A,
						r.hot.active = !1,
						delete O[l],
						delete f[l],
						o = 0;
					o < r.children.length;
					o++
				) {
					var U = O[r.children[o]];
					U &&
						(j = U.parents.indexOf(l)) >= 0 &&
						U.parents.splice(j, 1);
				}
			}
		for (l in f)
			if (Object.prototype.hasOwnProperty.call(f, l) && (r = O[l]))
				for (D = f[l], o = 0; o < D.length; o++)
					(H = D[o]),
						(j = r.children.indexOf(H)) >= 0 &&
							r.children.splice(j, 1);
		for (l in (h("apply"), (a = v), y))
			Object.prototype.hasOwnProperty.call(y, l) && (e[l] = y[l]);
		var R = null;
		for (l in f)
			if (Object.prototype.hasOwnProperty.call(f, l) && (r = O[l])) {
				D = f[l];
				var z = [];
				for (n = 0; n < D.length; n++)
					if (((H = D[n]), (i = r.hot._acceptedDependencies[H]))) {
						if (-1 !== z.indexOf(i)) continue;
						z.push(i);
					}
				for (n = 0; n < z.length; n++) {
					i = z[n];
					try {
						i(D);
					} catch (e) {
						t.onErrored &&
							t.onErrored({
								type: "accept-errored",
								moduleId: l,
								dependencyId: D[n],
								error: e,
							}),
							t.ignoreErrored || R || (R = e);
					}
				}
			}
		for (n = 0; n < M.length; n++) {
			var N = M[n];
			(l = N.module), (c = [l]);
			try {
				E(l);
			} catch (e) {
				if ("function" == typeof N.errorHandler)
					try {
						N.errorHandler(e);
					} catch (i) {
						t.onErrored &&
							t.onErrored({
								type: "self-accept-error-handler-errored",
								moduleId: l,
								error: i,
								originalError: e,
							}),
							t.ignoreErrored || R || (R = i),
							R || (R = e);
					}
				else
					t.onErrored &&
						t.onErrored({
							type: "self-accept-errored",
							moduleId: l,
							error: e,
						}),
						t.ignoreErrored || R || (R = e);
			}
		}
		return R
			? (h("fail"), Promise.reject(R))
			: (h("idle"),
			  new Promise(function (e) {
					e(b);
			  }));
	}
	var O = {},
		T = { 10: 0 },
		C = [];
	function E(t) {
		if (O[t]) return O[t].exports;
		var i = (O[t] = {
			i: t,
			l: !1,
			exports: {},
			hot: u(t),
			parents: ((l = c), (c = []), l),
			children: [],
		});
		return (
			e[t].call(
				i.exports,
				i,
				i.exports,
				(function (e) {
					var t = O[e];
					if (!t) return E;
					var i = function (i) {
							return (
								t.hot.active
									? (O[i]
											? -1 === O[i].parents.indexOf(e) &&
											  O[i].parents.push(e)
											: ((c = [e]), (o = i)),
									  -1 === t.children.indexOf(i) &&
											t.children.push(i))
									: (console.warn(
											"[HMR] unexpected require(" +
												i +
												") from disposed module " +
												e
									  ),
									  (c = [])),
								E(i)
							);
						},
						n = function (e) {
							return {
								configurable: !0,
								enumerable: !0,
								get: function () {
									return E[e];
								},
								set: function (t) {
									E[e] = t;
								},
							};
						};
					for (var r in E)
						Object.prototype.hasOwnProperty.call(E, r) &&
							"e" !== r &&
							"t" !== r &&
							Object.defineProperty(i, r, n(r));
					return (
						(i.e = function (e) {
							return (
								"ready" === p && h("prepare"),
								y++,
								E.e(e).then(t, function (e) {
									throw (t(), e);
								})
							);
							function t() {
								y--,
									"prepare" === p &&
										(w[e] || I(e),
										0 === y && 0 === b && $());
							}
						}),
						(i.t = function (e, t) {
							return 1 & t && (e = i(e)), E.t(e, -2 & t);
						}),
						i
					);
				})(t)
			),
			(i.l = !0),
			i.exports
		);
	}
	(E.m = e),
		(E.c = O),
		(E.d = function (e, t, i) {
			E.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: i });
		}),
		(E.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(E.t = function (e, t) {
			if ((1 & t && (e = E(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (
				(E.r(i),
				Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e,
				}),
				2 & t && "string" != typeof e)
			)
				for (var n in e)
					E.d(
						i,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return i;
		}),
		(E.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return E.d(t, "a", t), t;
		}),
		(E.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(E.p = "/js/"),
		(E.h = function () {
			return a;
		});
	var j = (window.webpackJsonp = window.webpackJsonp || []),
		M = j.push.bind(j);
	(j.push = t), (j = j.slice());
	for (var H = 0; H < j.length; H++) t(j[H]);
	var D = M;
	C.push([480, 0]), i();
})({
	480: function (e, t, i) {
		"use strict";
		i.r(t);
		i(18);
		var n = i(5),
			o = i(12),
			r = i(39),
			a = i(11),
			s = i(3),
			c = i.n(s);
		function l(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		var u,
			d,
			p = new a.a();
		void 0 !== document.hidden
			? ((u = "hidden"), (d = "visibilitychange"))
			: void 0 !== document.mozHidden
			? ((u = "mozHidden"), (d = "mozvisibilitychange"))
			: void 0 !== document.msHidden
			? ((u = "msHidden"), (d = "msvisibilitychange"))
			: void 0 !== document.webkitHidden &&
			  ((u = "webkitHidden"), (d = "webkitvisibilitychange"));
		var h = (function () {
				function e() {
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError(
								"Cannot call a class as a function"
							);
					})(this, e),
						this.visibilityChange,
						(this.isMute = !1),
						(this.homeAudio = document.getElementById("homeAudio")),
						(this.btnAudio = c()(".btn-audio")),
						(this.mobileInitMusic = !0),
						this.init();
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "handleVisibilityChange",
							value: function () {
								(this.isMute = !(
									!document[u] &&
									!c()(".audio-line-group").hasClass(
										"mute"
									) &&
									"true" != p.cookieGet("c_bgm")
								)),
									c()("audio").prop("muted", this.isMute);
							},
						},
						{
							key: "init",
							value: function () {
								document.addEventListener(
									d,
									this.handleVisibilityChange,
									!1
								),
									"true" == p.cookieGet("c_bgm")
										? this.pause()
										: this.play();
							},
						},
						{
							key: "mobileTriggerBGM",
							value: function () {
								this.mobileInitMusic &&
									!c()(".audio-line-group").hasClass(
										"mute"
									) &&
									(this.homeAudio.play(),
									(this.mobileInitMusic = !1));
							},
						},
						{
							key: "pause",
							value: function () {
								this.homeAudio.pause(),
									c()("audio").prop("muted", !0),
									this.btnAudio
										.find(".audio-line-group")
										.addClass("mute");
							},
						},
						{
							key: "play",
							value: function () {
								this.homeAudio.play(),
									c()("audio").prop("muted", !1),
									this.btnAudio
										.find(".audio-line-group")
										.removeClass("mute");
							},
						},
						{
							key: "togglePlay",
							value: function () {
								this.btnAudio
									.find(".audio-line-group")
									.hasClass("mute")
									? (this.play(), p.cookieSet("c_bgm", !1, 1))
									: (this.pause(),
									  p.cookieSet("c_bgm", !0, 1));
							},
						},
					]) && l(t.prototype, i),
					n && l(t, n),
					e
				);
			})(),
			f = i(0),
			m = i.n(f),
			v = i(4);
		function b(e, t) {
			if (!(e instanceof t))
				throw new TypeError("Cannot call a class as a function");
		}
		function y(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		var w = (function () {
				function e() {
					var t =
						arguments.length > 0 &&
						void 0 !== arguments[0] &&
						arguments[0];
					b(this, e),
						(this.circle = document.querySelector(
							".progress-ring__circle"
						)),
						this.radius,
						this.circumference,
						this.point_center_x,
						this.point_center_y,
						(this.now = m()()),
						(this.schedule_items = []),
						this.lastest_item,
						this.current_item,
						(this.stopUpdateTimer = !1),
						this.next_video_timer,
						(this.next_video_duration = 7),
						(this.loading = !1),
						(this.isMobile = t),
						this.switch_device_screen,
						this._initClockRing();
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "autoNextVideo",
							value: function () {
								var e = this;
								this.next_video_timer = setInterval(
									function () {
										var t = c()(
											".event-item.active .time"
										).data("origin-time");
										c()(".event-item.active .time").text(t),
											(e.stopUpdateTimer = !0),
											e.showNextItem();
									},
									1e3 * this.next_video_duration
								);
							},
						},
						{
							key: "getItemsPointPostion",
							value: function () {
								var e = this,
									t = 360 / this.schedule_items.length;
								this.schedule_items.forEach(function (i, n) {
									var o = n * t,
										r = i.id,
										a = m()("".concat(i.time), "HH:mm");
									(i.order = n + 1),
										(i.angle = o),
										e._setPoint(r, o),
										e.now.isAfter(a) &&
											(e.lastest_item = i);
								}),
									this.lastest_item ||
										(this.lastest_item =
											this.schedule_items[0]);
							},
						},
						{
							key: "_getScheduleItems",
							value: function () {
								var e = this;
								c.a.ajax({
									type: "GET",
									url: "../../ajax/getscheduleitemlist.json",
									dataType: "json",
									data: { type: "" },
									success: function (t) {
										(e.schedule_items = Object.keys(t).map(
											function (e) {
												return t[e];
											}
										)),
											e.getItemsPointPostion(),
											e.showEventItem(
												e.lastest_item.order
											);
									},
									error: function (e) {
										console.log("error" + e);
									},
								});
							},
						},
						{
							key: "_initClockRing",
							value: function () {
								this.updateTimer(),
									this.render(),
									this._getScheduleItems();
							},
						},
						{
							key: "render",
							value: function () {
								var e,
									t = window.innerHeight,
									i =
										(window.innerWidth,
										(e = t < 850 ? 850 : t)),
									n = e,
									o = e - 350;
								(this.radius = o / 2),
									null ==
										c()(".progress-ring").attr("height") &&
										(document
											.querySelector(".progress-ring")
											.setAttribute(
												"viewBox",
												"0 0 ".concat(e, " ").concat(e)
											),
										c()(
											".progress-ring__background-circle, .progress-ring__circle"
										).attr({
											r: this.radius,
											cx: n / 2,
											cy: i / 2,
										}),
										(this.circumference =
											2 * this.radius * Math.PI)),
									(this.point_center_x =
										this.circle.cx.baseVal.value),
									(this.point_center_y =
										this.circle.cy.baseVal.value),
									c()(".progress-ring").attr({
										width: n,
										height: i,
									}),
									c()(".progress-ring").css(
										"width",
										"".concat(e, "px")
									),
									c()(".progress-ring").css(
										"height",
										"".concat(e, "px")
									),
									c()(".schedule-wrapper").css({
										"max-width": "".concat(o, "px"),
										"max-height": "".concat(o, "px"),
									}),
									setTimeout(function () {
										v.TweenLite.to(
											".progress-ring__circle",
											2,
											{
												rotation: -90,
												y: 0,
												transformOrigin: "50% 50%",
											}
										);
									}, 1e3),
									(this.circle.style.strokeDasharray = ""
										.concat(this.circumference, " ")
										.concat(this.circumference)),
									(this.circle.style.strokeDashoffset = 0);
							},
						},
						{
							key: "resize",
							value: function () {
								this.getItemsPointPostion();
							},
						},
						{
							key: "_setPoint",
							value: function (e, t) {
								var i = c()(
										".time-label-".concat(e)
									)[0].getBBox().width,
									n = c()(
										".time-label-".concat(e)
									)[0].getBBox().height,
									o =
										this.point_center_x +
										(this.radius + 40) *
											Math.cos(
												((t - 90) * Math.PI) / 180
											) -
										i / 2,
									r =
										this.point_center_y +
										(this.radius + 40) *
											Math.sin(
												((t - 90) * Math.PI) / 180
											) +
										n / 4;
								0 == t
									? (r += 10)
									: 90 == t
									? (o += 10)
									: 180 == t
									? (r -= 10)
									: 270 == t && (o -= 10);
								var a =
										this.point_center_x +
										this.radius *
											Math.cos(
												((t - 90) * Math.PI) / 180
											),
									s =
										this.point_center_y +
										this.radius *
											Math.sin(
												((t - 90) * Math.PI) / 180
											);
								c()(".point-item-".concat(e)).attr({
									cx: a,
									cy: s,
								}),
									c()(".time-label-".concat(e)).attr({
										x: o,
										y: r,
									});
							},
						},
						{
							key: "_setProgress",
							value: function (e) {
								var t = (e / this.schedule_items.length) * 100,
									i = (1 / this.schedule_items.length) * 100,
									n =
										this.circumference -
										(t / 100) * this.circumference,
									o = (i / 100) * this.circumference,
									r = n - this.circumference;
								(this.circle.style.strokeDasharray = ""
									.concat(o, " ")
									.concat(this.circumference - o)),
									(this.circle.style.strokeDashoffset = r);
							},
						},
						{
							key: "showEventItem",
							value: function (e) {
								var t = this;
								(this.loading = !0),
									(this.current_item = e),
									clearInterval(this.next_video_timer),
									v.TweenLite.to(
										c()(
											".background-video-wrapper .video-overlay"
										),
										1,
										{ opacity: 1 }
									),
									this.current_item >
									this.schedule_items.length
										? (this.current_item = 1)
										: this.current_item < 1 &&
										  (this.current_item =
												this.schedule_items.length),
									c()(".event-item").removeClass("active"),
									c()(".event-item > *").css("transform", "");
								var i = new v.TimelineMax();
								c()(
									".event-item-".concat(this.current_item)
								).addClass("active"),
									this.stopUpdateTimer
										? i.staggerFromTo(
												c()(
													".event-item-".concat(
														this.current_item,
														">*"
													)
												),
												1,
												{ y: 100, autoAlpha: 0 },
												{ y: 0, autoAlpha: 1 },
												0.2,
												"+=0"
										  )
										: setTimeout(function () {
												i.staggerFromTo(
													c()(
														".event-item-".concat(
															t.current_item,
															">*"
														)
													),
													1,
													{ y: 100, autoAlpha: 0 },
													{ y: 0, autoAlpha: 1 },
													0.2,
													"+=0"
												);
										  }, 1e3),
									this._setProgress(this.current_item - 1),
									setTimeout(function () {
										var e =
											document.getElementById(
												"homeVideo"
											);
										t.isMobile
											? (c()(
													".background-video-wrapper"
											  ).css(
													"background-image",
													'url("'.concat(
														t.schedule_items[
															t.current_item - 1
														].cover_image_m,
														'")'
													)
											  ),
											  e.pause(),
											  e.removeAttribute("src"))
											: (e.setAttribute(
													"autoplay",
													"autoplay"
											  ),
											  e.setAttribute(
													"src",
													t.schedule_items[
														t.current_item - 1
													].video
											  )),
											v.TweenLite.to(
												c()(
													".background-video-wrapper .video-overlay"
												),
												1,
												{
													opacity: 0.3,
													onComplete: function () {
														t.loading = !1;
													},
												}
											);
									}, 1e3),
									this.autoNextVideo();
							},
						},
						{
							key: "showNextItem",
							value: function () {
								this.loading ||
									this.showEventItem(this.current_item + 1);
							},
						},
						{
							key: "showPrevItem",
							value: function () {
								this.loading ||
									this.showEventItem(this.current_item - 1);
							},
						},
						{
							key: "updateTimer",
							value: function () {
								var e = this,
									t = this.now.format("HH"),
									i = this.now.format("mm");
								if (
									(c()(".event-item.active .time").html(
										""
											.concat(t, " <span>:</span> ")
											.concat(i)
									),
									this.stopUpdateTimer)
								) {
									var n = c()(
										".event-item.active .time"
									).data("origin-time");
									c()(".event-item.active .time").text(n);
								} else
									setTimeout(function () {
										c()(
											".event-item.active .time span"
										).css("opacity", 1);
									}, 500),
										setTimeout(function () {
											e.updateTimer();
										}, 1e3);
							},
						},
						{
							key: "logCircle",
							value: function (e, t, i) {
								c()(".display-info").html(""),
									c()(".display-info").append(
										"<div>progress-ring-container-width: ".concat(
											t,
											"</div>"
										)
									),
									c()(".display-info").append(
										"<div>progress-ring-container-height: ".concat(
											i,
											"</div>"
										)
									),
									c()(".display-info").append("<br>"),
									c()(".display-info").append(
										"<div>clock_ring_diameter: ".concat(
											e,
											"</div>"
										)
									),
									c()(".display-info").append("<br>"),
									c()(".display-info").append(
										"<div>this.radius: ".concat(
											this.radius,
											"</div>"
										)
									),
									c()(".display-info").append("<br>"),
									c()(".display-info").append("<br>"),
									c()(".display-info").append(
										"<div>this.point_center_x: ".concat(
											this.point_center_x,
											"</div>"
										)
									),
									c()(".display-info").append(
										"<div>this.point_center_y: ".concat(
											this.point_center_y,
											"</div>"
										)
									);
							},
						},
					]) && y(t.prototype, i),
					n && y(t, n),
					e
				);
			})(),
			g = i(58);
		function _(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		var k = (function () {
			function e() {
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							"Cannot call a class as a function"
						);
				})(this, e),
					(this.promotionBubbleContainer =
						".exclusive-promotion-bubble-container"),
					(this.swiperContainer =
						".promotion-bubble-swiper-container"),
					this.swiper,
					(this.progressBar = $(
						"".concat(
							this.promotionBubbleContainer,
							" .progress-bar"
						)
					)),
					(this.autoplay = 5e3),
					(this.promotionBubbleOpened = !0),
					(this.isProgressRun = !1),
					this.initSwiper(),
					this.calculateThumbnailImageSize();
			}
			var t, i, o;
			return (
				(t = e),
				(i = [
					{
						key: "showHideBubble",
						value: function () {
							$(window).width() > 750
								? $(window).scrollTop() < 200
									? (this.open(),
									  $(
											".btn-exclusive-promotion-bubble-icon"
									  ).addClass("disabled"))
									: (this.close(),
									  $(
											".btn-exclusive-promotion-bubble-icon.disabled"
									  ).removeClass("disabled"))
								: $(
										".btn-exclusive-promotion-bubble-icon.disabled"
								  ).removeClass("disabled");
						},
					},
					{
						key: "open",
						value: function () {
							this.promotionBubbleOpened ||
								(this.swiper.autoplay.start(),
								this.timelineProgress(),
								(this.promotionBubbleOpened = !0),
								$(
									"".concat(this.promotionBubbleContainer)
								).removeClass("disabled"));
						},
					},
					{
						key: "close",
						value: function () {
							$(
								"".concat(this.promotionBubbleContainer)
							).addClass("disabled"),
								this.swiper.autoplay.stop(),
								(this.promotionBubbleOpened = !1);
						},
					},
					{
						key: "initSwiper",
						value: function () {
							(this.swiper = new n.a(
								"".concat(this.swiperContainer),
								{
									slidesPerView: 1,
									spaceBetween: 0,
									speed: 800,
									loop: !0,
									effect: "fade",
									touchRatio: 0,
									noSwiping: !0,
									noSwipingClass: "swiper-no-swiping",
									autoplay: { delay: this.autoplay },
									on: {
										progress:
											this.timelineProgress.bind(this),
										slideChangeTransitionEnd:
											this.updateInfo.bind(this),
									},
								}
							)),
								this.updateInfo();
						},
					},
					{
						key: "timelineProgress",
						value: function () {
							var e = this;
							if (!this.isProgressRun) {
								this.isProgressRun = !0;
								var t = 1,
									i = this.autoplay / 100,
									n = setInterval(function () {
										t >= 100 || !e.promotionBubbleOpened
											? ((e.isProgressRun = !1),
											  clearInterval(n))
											: (t++,
											  e.progressBar.width(
													"".concat(t, "%")
											  ));
									}, i);
							}
						},
					},
					{
						key: "updateInfo",
						value: function () {
							var e = $(
									"".concat(
										this.swiperContainer,
										" .swiper-slide-active"
									)
								).data("title"),
								t = $(
									"".concat(
										this.swiperContainer,
										" .swiper-slide-active"
									)
								).data("url");
							$(
								"".concat(
									this.promotionBubbleContainer,
									" .promotion-bubble-info .title"
								)
							).html(e),
								$(
									"".concat(
										this.promotionBubbleContainer,
										" .promotion-bubble-info .btn-view-more"
									)
								).attr(
									"href",
									""
										// .concat(lang, "/exclusive-promotions/")
										.concat(t)
								);
						},
					},
					{
						key: "calculateThumbnailImageSize",
						value: function () {
							var e;
							$(
								".exclusive-promotion-bubble-container .cover-image img"
							).each(function (t, i) {
								(e = parseInt($(i).width())),
									parseInt($(i).height()) / e > 143 / 190
										? ($(i).css("width", "100%"),
										  $(i).css("height", "auto"))
										: ($(i).css("width", "auto"),
										  $(i).css("height", "100%"));
							});
						},
					},
				]) && _(t.prototype, i),
				o && _(t, o),
				e
			);
		})();
		function x(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		var I,
			P,
			O,
			T,
			C,
			E,
			j,
			M,
			H,
			D,
			S = (function () {
				function e() {
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError(
								"Cannot call a class as a function"
							);
					})(this, e),
						(this.bar = ".notification-bar"),
						(this.popupContianer = ".notification-popup"),
						(this.activeItem = 1),
						this.scrollInterval,
						this.scrollNotificationItem();
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "slideupBar",
							value: function () {
								$(this.bar).slideUp(),
									$(
										".header-bar, .exclusive-promotion-bubble-container"
									).removeClass("has-notification"),
									clearInterval(this.interval);
							},
						},
						{
							key: "openPopup",
							value: function () {
								$(this.popupContianer).fadeIn();
							},
						},
						{
							key: "closePopup",
							value: function () {
								$(this.popupContianer).fadeOut();
							},
						},
						{
							key: "scrollNotificationItem",
							value: function () {
								var e = this,
									t = $(".notification-bar .item").length;
								1 !== t &&
									(this.scrollInterval = setInterval(
										function () {
											var i = 30 * e.activeItem;
											$(
												".notification-bar .container"
											).css("top", "-".concat(i, "px")),
												(e.activeItem =
													e.activeItem >= t - 1
														? 0
														: e.activeItem + 1);
										},
										6e3
									));
							},
						},
					]) && x(t.prototype, i),
					n && x(t, n),
					e
				);
			})(),
			A = i(85);
		function B() {
			var e = $(
					".inspiration-swiper-container .swiper-slide-active"
				).data("title"),
				t = $(
					".inspiration-swiper-container .swiper-slide-active"
				).data("url");
			$(".inspiration-container .swiper-text-content .title").text(e),
				$(
					".inspiration-container .swiper-text-content .btn-learn-more"
				).attr("href", "./inspiration/".concat(t));
		}
		$(document).on("touchstart", function () {
			T.mobileTriggerBGM();
		}),
			$(window).on("load", function () {
				(I = new o.a()),
					(P = new r.a(lang)),
					(O = new a.a()),
					(M = new S()),
					new A.a(),
					O.checkScreenSize(),
					(D = $(window).width()),
					$(".notification-bar .btn-close").on("click", function () {
						return M.slideupBar();
					}),
					$(".notification-bar .item").on({
						mouseenter: function () {
							clearInterval(M.scrollInterval);
						},
						mouseleave: function () {
							M.scrollNotificationItem();
						},
					}),
					(T = new h()),
					(E = new g.a($("#media-popup"))),
					$(".home-wrapper .today").html(P.getToday()),
					$(".time-label, .btn-left, .btn-right").on(
						"click",
						function () {
							if ($(".event-item").hasClass("init")) {
								$(".event-item").removeClass("init");
								var e = $(".event-item.active .time").data(
									"origin-time"
								);
								$(".event-item.active .time").text(e),
									(C.stopUpdateTimer = !0);
							}
						}
					),
					$(".time-label").on("click", function () {
						var e = $(this).data("event-item");
						$(".event-item-".concat(e)).hasClass("active") ||
							C.showEventItem(e);
					}),
					$(".btn-left").on("click", function () {
						return C.showPrevItem();
					}),
					$(".btn-right").on("click", function () {
						return C.showNextItem();
					}),
					$(".btn-audio").on("click", function () {
						return T.togglePlay();
					}),
					$("[data-media]").on("click touch", function () {
						E.openPopUpVideo(this), T.pause();
					}),
					$(".popup").on("click touch", function (e) {
						E.closePopUpVideo(e), T.isMute || T.play();
					}),
					$(".exclusive-promotion-bubble-container .btn-close").on(
						"click",
						function () {
							j.close(),
								O.cookieSet("m_promotion_bubble", !1, "dayend");
						}
					),
					I.setElementHidden("section"),
					setTimeout(function () {
						(C = new w(O.isMobile)),
							(j = new k()),
							"false" == O.cookieGet("m_promotion_bubble") &&
							O.isMobile
								? j.close()
								: j.showHideBubble();
					}, 250),
					setTimeout(function () {
						!(function () {
							var e = new n.a(
									".residences-text-swiper-container",
									{
										speed: 1e3,
										effect: "fade",
										on: {
											slideChangeTransitionStart:
												function () {
													t.slideTo(this.activeIndex);
												},
										},
									}
								),
								t = new n.a(
									".residences-image-swiper-container",
									{
										navigation: {
											nextEl: $(
												".residences-container .btn-next-arrow"
											),
											prevEl: $(
												".residences-container .btn-prev-arrow"
											),
										},
										on: {
											slideChangeTransitionStart:
												function () {
													var t = O.pad(
														this.activeIndex + 1,
														2
													);
													$(
														".residences-container .swiper-info-group .pager span"
													).text(t),
														e.slideTo(
															this.activeIndex
														);
												},
										},
									}
								),
								i = new n.a(
									".inspiration-text-swiper-container",
									{
										speed: 500,
										effect: "fade",
										touchRatio: 0,
									}
								),
								o = new n.a(
									".inspiration-prev-swiper-container",
									{ speed: 1e3, touchRatio: 0 }
								),
								r = new n.a(
									".inspiration-next-swiper-container",
									{ speed: 1e3, touchRatio: 0 }
								);
							new n.a(".inspiration-swiper-container", {
								speed: 1e3,
								navigation: {
									nextEl: $(
										".inspiration-container .btn-next-arrow"
									),
									prevEl: $(
										".inspiration-container .btn-prev-arrow"
									),
								},
								on: {
									init: function () {
										B();
									},
									slideChangeTransitionStart: function () {
										B(),
											o.slideTo(this.activeIndex),
											r.slideTo(this.activeIndex),
											i.slideTo(this.activeIndex);
									},
								},
							});
							$(".inspiration-next-swiper-container").on(
								"click",
								function () {
									$(
										".inspiration-container .btn-next-arrow"
									).click();
								}
							),
								$(".inspiration-prev-swiper-container").on(
									"click",
									function () {
										$(
											".inspiration-container .btn-prev-arrow"
										).click();
									}
								);
						})(),
							I.scrollFadeIn("section");
					}, 1e3);
			}),
			$(window).resize(function () {
				clearTimeout(H),
					(H = setTimeout(function () {
						O.checkScreenSize(),
							(C.switch_device_screen = O.switch_device_screen),
							$(window).width() == D ||
								O.isMobileDevice() ||
								((C.isMobile = $(window).width() <= 750),
								C.resize(),
								(D = $(window).width())),
							j.showHideBubble();
					}, 0));
			}),
			setTimeout(function () {
				$(window).scroll(function () {
					j.showHideBubble();
				});
			}, 1e3);
	},
});
