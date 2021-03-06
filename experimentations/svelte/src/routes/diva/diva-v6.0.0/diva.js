(function (e) {
	var t = {};
	function i(s) {
		if (t[s]) return t[s].exports;
		var n = (t[s] = { i: s, l: !1, exports: {} });
		return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
	}
	(i.m = e),
		(i.c = t),
		(i.d = function (e, t, s) {
			i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
		}),
		(i.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(i.t = function (e, t) {
			if ((1 & t && (e = i(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var s = Object.create(null);
			if (
				(i.r(s),
				Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var n in e)
					i.d(
						s,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return s;
		}),
		(i.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return i.d(t, 'a', t), t;
		}),
		(i.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = '/build/'),
		i((i.s = 2));
})([
	function (e, t, i) {
		(function (s) {
			function n() {
				var e;
				try {
					e = t.storage.debug;
				} catch (e) {}
				return !e && void 0 !== s && 'env' in s && (e = s.env.DEBUG), e;
			}
			((t = e.exports = i(9)).log = function () {
				return (
					'object' == typeof console &&
					console.log &&
					Function.prototype.apply.call(console.log, console, arguments)
				);
			}),
				(t.formatArgs = function (e) {
					var i = this.useColors;
					if (
						((e[0] =
							(i ? '%c' : '') +
							this.namespace +
							(i ? ' %c' : ' ') +
							e[0] +
							(i ? '%c ' : ' ') +
							'+' +
							t.humanize(this.diff)),
						!i)
					)
						return;
					var s = 'color: ' + this.color;
					e.splice(1, 0, s, 'color: inherit');
					var n = 0,
						o = 0;
					e[0].replace(/%[a-zA-Z%]/g, function (e) {
						'%%' !== e && '%c' === e && (o = ++n);
					}),
						e.splice(o, 0, s);
				}),
				(t.save = function (e) {
					try {
						null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
					} catch (e) {}
				}),
				(t.load = n),
				(t.useColors = function () {
					if ('undefined' != typeof window && window.process && 'renderer' === window.process.type)
						return !0;
					if (
						'undefined' != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						('undefined' != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						('undefined' != typeof window &&
							window.console &&
							(window.console.firebug || (window.console.exception && window.console.table))) ||
						('undefined' != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						('undefined' != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					);
				}),
				(t.storage =
					'undefined' != typeof chrome && void 0 !== chrome.storage
						? chrome.storage.local
						: (function () {
								try {
									return window.localStorage;
								} catch (e) {}
						  })()),
				(t.colors = [
					'#0000CC',
					'#0000FF',
					'#0033CC',
					'#0033FF',
					'#0066CC',
					'#0066FF',
					'#0099CC',
					'#0099FF',
					'#00CC00',
					'#00CC33',
					'#00CC66',
					'#00CC99',
					'#00CCCC',
					'#00CCFF',
					'#3300CC',
					'#3300FF',
					'#3333CC',
					'#3333FF',
					'#3366CC',
					'#3366FF',
					'#3399CC',
					'#3399FF',
					'#33CC00',
					'#33CC33',
					'#33CC66',
					'#33CC99',
					'#33CCCC',
					'#33CCFF',
					'#6600CC',
					'#6600FF',
					'#6633CC',
					'#6633FF',
					'#66CC00',
					'#66CC33',
					'#9900CC',
					'#9900FF',
					'#9933CC',
					'#9933FF',
					'#99CC00',
					'#99CC33',
					'#CC0000',
					'#CC0033',
					'#CC0066',
					'#CC0099',
					'#CC00CC',
					'#CC00FF',
					'#CC3300',
					'#CC3333',
					'#CC3366',
					'#CC3399',
					'#CC33CC',
					'#CC33FF',
					'#CC6600',
					'#CC6633',
					'#CC9900',
					'#CC9933',
					'#CCCC00',
					'#CCCC33',
					'#FF0000',
					'#FF0033',
					'#FF0066',
					'#FF0099',
					'#FF00CC',
					'#FF00FF',
					'#FF3300',
					'#FF3333',
					'#FF3366',
					'#FF3399',
					'#FF33CC',
					'#FF33FF',
					'#FF6600',
					'#FF6633',
					'#FF9900',
					'#FF9933',
					'#FFCC00',
					'#FFCC33'
				]),
				(t.formatters.j = function (e) {
					try {
						return JSON.stringify(e);
					} catch (e) {
						return '[UnexpectedJSONParseError]: ' + e.message;
					}
				}),
				t.enable(n());
		}.call(this, i(8)));
	},
	function (e, t, i) {
		(function (e, i) {
			var s = 200,
				n = 'Expected a function',
				o = '__lodash_hash_undefined__',
				r = 1,
				a = 2,
				l = 1 / 0,
				h = 9007199254740991,
				c = '[object Arguments]',
				u = '[object Array]',
				d = '[object Boolean]',
				g = '[object Date]',
				v = '[object Error]',
				p = '[object Function]',
				f = '[object GeneratorFunction]',
				m = '[object Map]',
				w = '[object Number]',
				b = '[object Object]',
				y = '[object RegExp]',
				_ = '[object Set]',
				P = '[object String]',
				S = '[object Symbol]',
				C = '[object ArrayBuffer]',
				L = '[object DataView]',
				O = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
				x = /^\w*$/,
				E = /^\./,
				I =
					/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				T = /\\(\\)?/g,
				D = /^\[object .+?Constructor\]$/,
				M = /^(?:0|[1-9]\d*)$/,
				z = {};
			(z['[object Float32Array]'] =
				z['[object Float64Array]'] =
				z['[object Int8Array]'] =
				z['[object Int16Array]'] =
				z['[object Int32Array]'] =
				z['[object Uint8Array]'] =
				z['[object Uint8ClampedArray]'] =
				z['[object Uint16Array]'] =
				z['[object Uint32Array]'] =
					!0),
				(z[c] =
					z[u] =
					z[C] =
					z[d] =
					z[L] =
					z[g] =
					z[v] =
					z[p] =
					z[m] =
					z[w] =
					z[b] =
					z[y] =
					z[_] =
					z[P] =
					z['[object WeakMap]'] =
						!1);
			var V = 'object' == typeof e && e && e.Object === Object && e,
				k = 'object' == typeof self && self && self.Object === Object && self,
				F = V || k || Function('return this')(),
				j = 'object' == typeof t && t && !t.nodeType && t,
				A = j && 'object' == typeof i && i && !i.nodeType && i,
				R = A && A.exports === j && V.process,
				H = (function () {
					try {
						return R && R.binding('util');
					} catch (e) {}
				})(),
				B = H && H.isTypedArray;
			function Z(e, t) {
				for (var i = -1, s = e ? e.length : 0; ++i < s; ) if (t(e[i], i, e)) return !0;
				return !1;
			}
			function G(e) {
				var t = !1;
				if (null != e && 'function' != typeof e.toString)
					try {
						t = !!(e + '');
					} catch (e) {}
				return t;
			}
			function N(e) {
				var t = -1,
					i = Array(e.size);
				return (
					e.forEach(function (e, s) {
						i[++t] = [s, e];
					}),
					i
				);
			}
			function U(e) {
				var t = -1,
					i = Array(e.size);
				return (
					e.forEach(function (e) {
						i[++t] = e;
					}),
					i
				);
			}
			var W = Array.prototype,
				Y = Function.prototype,
				q = Object.prototype,
				X = F['__core-js_shared__'],
				K = (function () {
					var e = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || '');
					return e ? 'Symbol(src)_1.' + e : '';
				})(),
				$ = Y.toString,
				J = q.hasOwnProperty,
				Q = q.toString,
				ee = RegExp(
					'^' +
						$.call(J)
							.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
							.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
						'$'
				),
				te = F.Symbol,
				ie = F.Uint8Array,
				se = q.propertyIsEnumerable,
				ne = W.splice,
				oe = (function (e, t) {
					return function (i) {
						return e(t(i));
					};
				})(Object.keys, Object),
				re = je(F, 'DataView'),
				ae = je(F, 'Map'),
				le = je(F, 'Promise'),
				he = je(F, 'Set'),
				ce = je(F, 'WeakMap'),
				ue = je(Object, 'create'),
				de = Ue(re),
				ge = Ue(ae),
				ve = Ue(le),
				pe = Ue(he),
				fe = Ue(ce),
				me = te ? te.prototype : void 0,
				we = me ? me.valueOf : void 0,
				be = me ? me.toString : void 0;
			function ye(e) {
				var t = -1,
					i = e ? e.length : 0;
				for (this.clear(); ++t < i; ) {
					var s = e[t];
					this.set(s[0], s[1]);
				}
			}
			function _e(e) {
				var t = -1,
					i = e ? e.length : 0;
				for (this.clear(); ++t < i; ) {
					var s = e[t];
					this.set(s[0], s[1]);
				}
			}
			function Pe(e) {
				var t = -1,
					i = e ? e.length : 0;
				for (this.clear(); ++t < i; ) {
					var s = e[t];
					this.set(s[0], s[1]);
				}
			}
			function Se(e) {
				var t = -1,
					i = e ? e.length : 0;
				for (this.__data__ = new Pe(); ++t < i; ) this.add(e[t]);
			}
			function Ce(e) {
				this.__data__ = new _e(e);
			}
			function Le(e, t) {
				var i =
						Xe(e) || qe(e)
							? (function (e, t) {
									for (var i = -1, s = Array(e); ++i < e; ) s[i] = t(i);
									return s;
							  })(e.length, String)
							: [],
					s = i.length,
					n = !!s;
				for (var o in e) (!t && !J.call(e, o)) || (n && ('length' == o || Re(o, s))) || i.push(o);
				return i;
			}
			function Oe(e, t) {
				for (var i = e.length; i--; ) if (Ye(e[i][0], t)) return i;
				return -1;
			}
			function xe(e, t) {
				for (var i = 0, s = (t = He(t, e) ? [t] : Ve(t)).length; null != e && i < s; )
					e = e[Ne(t[i++])];
				return i && i == s ? e : void 0;
			}
			function Ee(e, t) {
				return e > t;
			}
			function Ie(e, t) {
				return null != e && t in Object(e);
			}
			function Te(e, t, i, s, n) {
				return (
					e === t ||
					(null == e || null == t || (!Qe(e) && !et(t))
						? e != e && t != t
						: (function (e, t, i, s, n, o) {
								var l = Xe(e),
									h = Xe(t),
									p = u,
									f = u;
								l || (p = (p = Ae(e)) == c ? b : p);
								h || (f = (f = Ae(t)) == c ? b : f);
								var O = p == b && !G(e),
									x = f == b && !G(t),
									E = p == f;
								if (E && !O)
									return (
										o || (o = new Ce()),
										l || it(e)
											? ke(e, t, i, s, n, o)
											: (function (e, t, i, s, n, o, l) {
													switch (i) {
														case L:
															if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
																return !1;
															(e = e.buffer), (t = t.buffer);
														case C:
															return !(e.byteLength != t.byteLength || !s(new ie(e), new ie(t)));
														case d:
														case g:
														case w:
															return Ye(+e, +t);
														case v:
															return e.name == t.name && e.message == t.message;
														case y:
														case P:
															return e == t + '';
														case m:
															var h = N;
														case _:
															var c = o & a;
															if ((h || (h = U), e.size != t.size && !c)) return !1;
															var u = l.get(e);
															if (u) return u == t;
															(o |= r), l.set(e, t);
															var p = ke(h(e), h(t), s, n, o, l);
															return l.delete(e), p;
														case S:
															if (we) return we.call(e) == we.call(t);
													}
													return !1;
											  })(e, t, p, i, s, n, o)
									);
								if (!(n & a)) {
									var I = O && J.call(e, '__wrapped__'),
										T = x && J.call(t, '__wrapped__');
									if (I || T) {
										var D = I ? e.value() : e,
											M = T ? t.value() : t;
										return o || (o = new Ce()), i(D, M, s, n, o);
									}
								}
								if (!E) return !1;
								return (
									o || (o = new Ce()),
									(function (e, t, i, s, n, o) {
										var r = n & a,
											l = st(e),
											h = l.length,
											c = st(t).length;
										if (h != c && !r) return !1;
										for (var u = h; u--; ) {
											var d = l[u];
											if (!(r ? d in t : J.call(t, d))) return !1;
										}
										var g = o.get(e);
										if (g && o.get(t)) return g == t;
										var v = !0;
										o.set(e, t), o.set(t, e);
										for (var p = r; ++u < h; ) {
											d = l[u];
											var f = e[d],
												m = t[d];
											if (s) var w = r ? s(m, f, d, t, e, o) : s(f, m, d, e, t, o);
											if (!(void 0 === w ? f === m || i(f, m, s, n, o) : w)) {
												v = !1;
												break;
											}
											p || (p = 'constructor' == d);
										}
										if (v && !p) {
											var b = e.constructor,
												y = t.constructor;
											b != y &&
												'constructor' in e &&
												'constructor' in t &&
												!(
													'function' == typeof b &&
													b instanceof b &&
													'function' == typeof y &&
													y instanceof y
												) &&
												(v = !1);
										}
										return o.delete(e), o.delete(t), v;
									})(e, t, i, s, n, o)
								);
						  })(e, t, Te, i, s, n))
				);
			}
			function De(e) {
				return (
					!(
						!Qe(e) ||
						(function (e) {
							return !!K && K in e;
						})(e)
					) && ($e(e) || G(e) ? ee : D).test(Ue(e))
				);
			}
			function Me(e) {
				return 'function' == typeof e
					? e
					: null == e
					? nt
					: 'object' == typeof e
					? Xe(e)
						? (function (e, t) {
								if (He(e) && Be(t)) return Ze(Ne(e), t);
								return function (i) {
									var s = (function (e, t, i) {
										var s = null == e ? void 0 : xe(e, t);
										return void 0 === s ? i : s;
									})(i, e);
									return void 0 === s && s === t
										? (function (e, t) {
												return (
													null != e &&
													(function (e, t, i) {
														var s,
															n = -1,
															o = (t = He(t, e) ? [t] : Ve(t)).length;
														for (; ++n < o; ) {
															var r = Ne(t[n]);
															if (!(s = null != e && i(e, r))) break;
															e = e[r];
														}
														if (s) return s;
														return (
															!!(o = e ? e.length : 0) && Je(o) && Re(r, o) && (Xe(e) || qe(e))
														);
													})(e, t, Ie)
												);
										  })(i, e)
										: Te(t, s, void 0, r | a);
								};
						  })(e[0], e[1])
						: (function (e) {
								var t = (function (e) {
									var t = st(e),
										i = t.length;
									for (; i--; ) {
										var s = t[i],
											n = e[s];
										t[i] = [s, n, Be(n)];
									}
									return t;
								})(e);
								if (1 == t.length && t[0][2]) return Ze(t[0][0], t[0][1]);
								return function (i) {
									return (
										i === e ||
										(function (e, t, i, s) {
											var n = i.length,
												o = n,
												l = !s;
											if (null == e) return !o;
											for (e = Object(e); n--; ) {
												var h = i[n];
												if (l && h[2] ? h[1] !== e[h[0]] : !(h[0] in e)) return !1;
											}
											for (; ++n < o; ) {
												var c = (h = i[n])[0],
													u = e[c],
													d = h[1];
												if (l && h[2]) {
													if (void 0 === u && !(c in e)) return !1;
												} else {
													var g = new Ce();
													if (s) var v = s(u, d, c, e, t, g);
													if (!(void 0 === v ? Te(d, u, s, r | a, g) : v)) return !1;
												}
											}
											return !0;
										})(i, e, t)
									);
								};
						  })(e)
					: (function (e) {
							return He(e)
								? (function (e) {
										return function (t) {
											return null == t ? void 0 : t[e];
										};
								  })(Ne(e))
								: (function (e) {
										return function (t) {
											return xe(t, e);
										};
								  })(e);
					  })(e);
			}
			function ze(e) {
				if (
					!(function (e) {
						var t = e && e.constructor,
							i = ('function' == typeof t && t.prototype) || q;
						return e === i;
					})(e)
				)
					return oe(e);
				var t = [];
				for (var i in Object(e)) J.call(e, i) && 'constructor' != i && t.push(i);
				return t;
			}
			function Ve(e) {
				return Xe(e) ? e : Ge(e);
			}
			function ke(e, t, i, s, n, o) {
				var l = n & a,
					h = e.length,
					c = t.length;
				if (h != c && !(l && c > h)) return !1;
				var u = o.get(e);
				if (u && o.get(t)) return u == t;
				var d = -1,
					g = !0,
					v = n & r ? new Se() : void 0;
				for (o.set(e, t), o.set(t, e); ++d < h; ) {
					var p = e[d],
						f = t[d];
					if (s) var m = l ? s(f, p, d, t, e, o) : s(p, f, d, e, t, o);
					if (void 0 !== m) {
						if (m) continue;
						g = !1;
						break;
					}
					if (v) {
						if (
							!Z(t, function (e, t) {
								if (!v.has(t) && (p === e || i(p, e, s, n, o))) return v.add(t);
							})
						) {
							g = !1;
							break;
						}
					} else if (p !== f && !i(p, f, s, n, o)) {
						g = !1;
						break;
					}
				}
				return o.delete(e), o.delete(t), g;
			}
			function Fe(e, t) {
				var i = e.__data__;
				return (function (e) {
					var t = typeof e;
					return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
						? '__proto__' !== e
						: null === e;
				})(t)
					? i['string' == typeof t ? 'string' : 'hash']
					: i.map;
			}
			function je(e, t) {
				var i = (function (e, t) {
					return null == e ? void 0 : e[t];
				})(e, t);
				return De(i) ? i : void 0;
			}
			(ye.prototype.clear = function () {
				this.__data__ = ue ? ue(null) : {};
			}),
				(ye.prototype.delete = function (e) {
					return this.has(e) && delete this.__data__[e];
				}),
				(ye.prototype.get = function (e) {
					var t = this.__data__;
					if (ue) {
						var i = t[e];
						return i === o ? void 0 : i;
					}
					return J.call(t, e) ? t[e] : void 0;
				}),
				(ye.prototype.has = function (e) {
					var t = this.__data__;
					return ue ? void 0 !== t[e] : J.call(t, e);
				}),
				(ye.prototype.set = function (e, t) {
					return (this.__data__[e] = ue && void 0 === t ? o : t), this;
				}),
				(_e.prototype.clear = function () {
					this.__data__ = [];
				}),
				(_e.prototype.delete = function (e) {
					var t = this.__data__,
						i = Oe(t, e);
					return !(i < 0 || (i == t.length - 1 ? t.pop() : ne.call(t, i, 1), 0));
				}),
				(_e.prototype.get = function (e) {
					var t = this.__data__,
						i = Oe(t, e);
					return i < 0 ? void 0 : t[i][1];
				}),
				(_e.prototype.has = function (e) {
					return Oe(this.__data__, e) > -1;
				}),
				(_e.prototype.set = function (e, t) {
					var i = this.__data__,
						s = Oe(i, e);
					return s < 0 ? i.push([e, t]) : (i[s][1] = t), this;
				}),
				(Pe.prototype.clear = function () {
					this.__data__ = { hash: new ye(), map: new (ae || _e)(), string: new ye() };
				}),
				(Pe.prototype.delete = function (e) {
					return Fe(this, e).delete(e);
				}),
				(Pe.prototype.get = function (e) {
					return Fe(this, e).get(e);
				}),
				(Pe.prototype.has = function (e) {
					return Fe(this, e).has(e);
				}),
				(Pe.prototype.set = function (e, t) {
					return Fe(this, e).set(e, t), this;
				}),
				(Se.prototype.add = Se.prototype.push =
					function (e) {
						return this.__data__.set(e, o), this;
					}),
				(Se.prototype.has = function (e) {
					return this.__data__.has(e);
				}),
				(Ce.prototype.clear = function () {
					this.__data__ = new _e();
				}),
				(Ce.prototype.delete = function (e) {
					return this.__data__.delete(e);
				}),
				(Ce.prototype.get = function (e) {
					return this.__data__.get(e);
				}),
				(Ce.prototype.has = function (e) {
					return this.__data__.has(e);
				}),
				(Ce.prototype.set = function (e, t) {
					var i = this.__data__;
					if (i instanceof _e) {
						var n = i.__data__;
						if (!ae || n.length < s - 1) return n.push([e, t]), this;
						i = this.__data__ = new Pe(n);
					}
					return i.set(e, t), this;
				});
			var Ae = function (e) {
				return Q.call(e);
			};
			function Re(e, t) {
				return (
					!!(t = null == t ? h : t) &&
					('number' == typeof e || M.test(e)) &&
					e > -1 &&
					e % 1 == 0 &&
					e < t
				);
			}
			function He(e, t) {
				if (Xe(e)) return !1;
				var i = typeof e;
				return (
					!('number' != i && 'symbol' != i && 'boolean' != i && null != e && !tt(e)) ||
					x.test(e) ||
					!O.test(e) ||
					(null != t && e in Object(t))
				);
			}
			function Be(e) {
				return e == e && !Qe(e);
			}
			function Ze(e, t) {
				return function (i) {
					return null != i && i[e] === t && (void 0 !== t || e in Object(i));
				};
			}
			((re && Ae(new re(new ArrayBuffer(1))) != L) ||
				(ae && Ae(new ae()) != m) ||
				(le && '[object Promise]' != Ae(le.resolve())) ||
				(he && Ae(new he()) != _) ||
				(ce && '[object WeakMap]' != Ae(new ce()))) &&
				(Ae = function (e) {
					var t = Q.call(e),
						i = t == b ? e.constructor : void 0,
						s = i ? Ue(i) : void 0;
					if (s)
						switch (s) {
							case de:
								return L;
							case ge:
								return m;
							case ve:
								return '[object Promise]';
							case pe:
								return _;
							case fe:
								return '[object WeakMap]';
						}
					return t;
				});
			var Ge = We(function (e) {
				e = (function (e) {
					return null == e
						? ''
						: (function (e) {
								if ('string' == typeof e) return e;
								if (tt(e)) return be ? be.call(e) : '';
								var t = e + '';
								return '0' == t && 1 / e == -l ? '-0' : t;
						  })(e);
				})(e);
				var t = [];
				return (
					E.test(e) && t.push(''),
					e.replace(I, function (e, i, s, n) {
						t.push(s ? n.replace(T, '$1') : i || e);
					}),
					t
				);
			});
			function Ne(e) {
				if ('string' == typeof e || tt(e)) return e;
				var t = e + '';
				return '0' == t && 1 / e == -l ? '-0' : t;
			}
			function Ue(e) {
				if (null != e) {
					try {
						return $.call(e);
					} catch (e) {}
					try {
						return e + '';
					} catch (e) {}
				}
				return '';
			}
			function We(e, t) {
				if ('function' != typeof e || (t && 'function' != typeof t)) throw new TypeError(n);
				var i = function () {
					var s = arguments,
						n = t ? t.apply(this, s) : s[0],
						o = i.cache;
					if (o.has(n)) return o.get(n);
					var r = e.apply(this, s);
					return (i.cache = o.set(n, r)), r;
				};
				return (i.cache = new (We.Cache || Pe)()), i;
			}
			function Ye(e, t) {
				return e === t || (e != e && t != t);
			}
			function qe(e) {
				return (
					(function (e) {
						return et(e) && Ke(e);
					})(e) &&
					J.call(e, 'callee') &&
					(!se.call(e, 'callee') || Q.call(e) == c)
				);
			}
			We.Cache = Pe;
			var Xe = Array.isArray;
			function Ke(e) {
				return null != e && Je(e.length) && !$e(e);
			}
			function $e(e) {
				var t = Qe(e) ? Q.call(e) : '';
				return t == p || t == f;
			}
			function Je(e) {
				return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= h;
			}
			function Qe(e) {
				var t = typeof e;
				return !!e && ('object' == t || 'function' == t);
			}
			function et(e) {
				return !!e && 'object' == typeof e;
			}
			function tt(e) {
				return 'symbol' == typeof e || (et(e) && Q.call(e) == S);
			}
			var it = B
				? (function (e) {
						return function (t) {
							return e(t);
						};
				  })(B)
				: function (e) {
						return et(e) && Je(e.length) && !!z[Q.call(e)];
				  };
			function st(e) {
				return Ke(e) ? Le(e) : ze(e);
			}
			function nt(e) {
				return e;
			}
			i.exports = function (e, t) {
				return e && e.length
					? (function (e, t, i) {
							for (var s = -1, n = e.length; ++s < n; ) {
								var o = e[s],
									r = t(o);
								if (null != r && (void 0 === a ? r == r && !tt(r) : i(r, a)))
									var a = r,
										l = o;
							}
							return l;
					  })(e, Me(t), Ee)
					: void 0;
			};
		}.call(this, i(6), i(7)(e)));
	},
	function (e, t, i) {
		i(3), i(16), (e.exports = i(11));
	},
	function (e, t) {
		!(function () {
			if (!Array.prototype.fill) {
				var e = function (e) {
					if (null == this) throw new TypeError('this is null or not defined');
					for (
						var t = Object(this),
							i = t.length >>> 0,
							s = arguments[1] >> 0,
							n = s < 0 ? Math.max(i + s, 0) : Math.min(s, i),
							o = arguments[2],
							r = void 0 === o ? i : o >> 0,
							a = r < 0 ? Math.max(i + r, 0) : Math.min(r, i);
						n < a;

					)
						(t[n] = e), n++;
					return t;
				};
				if (Object.defineProperty)
					try {
						Object.defineProperty(Array.prototype, 'fill', {
							value: e,
							configurable: !0,
							enumerable: !1,
							writable: !0
						});
					} catch (e) {}
				Array.prototype.fill || (Array.prototype.fill = e);
			}
		})();
	},
	function (e, t) {
		!(function () {
			var e = window.requestAnimationFrame,
				t = 'ontouchend' in document,
				i = function () {
					for (var e = 1; e < arguments.length; e++)
						for (var t in arguments[e])
							arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
					return arguments[0];
				},
				s = function (e, t) {
					return (
						(this.settings = i({}, s.DEFAULTS, t)),
						(this.el = e),
						(this.ACTIVE_CLASS = 'kinetic-active'),
						this._initElements(),
						(this.el._VanillaKinetic = this),
						this
					);
				};
			(s.DEFAULTS = {
				cursor: 'move',
				decelerate: !0,
				triggerHardware: !1,
				threshold: 0,
				y: !0,
				x: !0,
				slowdown: 0.9,
				maxvelocity: 40,
				throttleFPS: 60,
				invert: !1,
				movingClass: {
					up: 'kinetic-moving-up',
					down: 'kinetic-moving-down',
					left: 'kinetic-moving-left',
					right: 'kinetic-moving-right'
				},
				deceleratingClass: {
					up: 'kinetic-decelerating-up',
					down: 'kinetic-decelerating-down',
					left: 'kinetic-decelerating-left',
					right: 'kinetic-decelerating-right'
				}
			}),
				(s.prototype.start = function (e) {
					(this.settings = i(this.settings, e)),
						(this.velocity = e.velocity || this.velocity),
						(this.velocityY = e.velocityY || this.velocityY),
						(this.settings.decelerate = !1),
						this._move();
				}),
				(s.prototype.end = function () {
					this.settings.decelerate = !0;
				}),
				(s.prototype.stop = function () {
					(this.velocity = 0),
						(this.velocityY = 0),
						(this.settings.decelerate = !0),
						'function' == typeof this.settings.stopped && this.settings.stopped.call(this);
				}),
				(s.prototype.detach = function () {
					this._detachListeners(),
						this.el.classList.remove(this.ACTIVE_CLASS),
						(this.el.style.cursor = '');
				}),
				(s.prototype.attach = function () {
					this.el.classList.contains(this.ACTIVE_CLASS) ||
						(this._attachListeners(),
						this.el.classList.add(this.ACTIVE_CLASS),
						(this.el.style.cursor = this.settings.cursor));
				}),
				(s.prototype._initElements = function () {
					this.el.classList.add(this.ACTIVE_CLASS),
						i(this, {
							xpos: null,
							prevXPos: !1,
							ypos: null,
							prevYPos: !1,
							mouseDown: !1,
							throttleTimeout: 1e3 / this.settings.throttleFPS,
							lastMove: null,
							elementFocused: null
						}),
						(this.velocity = 0),
						(this.velocityY = 0);
					var e = this;
					this.documentResetHandler = function () {
						e._resetMouse.apply(e);
					};
					var t = document.documentElement;
					if (
						(t.addEventListener('mouseup', this.documentResetHandler, !1),
						t.addEventListener('click', this.documentResetHandler, !1),
						this._initEvents(),
						(this.el.style.cursor = this.settings.cursor),
						this.settings.triggerHardware)
					)
						for (
							var s = ['', '-ms-', '-webkit-', '-moz-'],
								n = {
									transform: 'translate3d(0,0,0)',
									perspective: '1000',
									'backface-visibility': 'hidden'
								},
								o = 0;
							o < s.length;
							o++
						) {
							var r = s[o];
							for (var a in n) n.hasOwnProperty(a) && (this.el.style[r + a] = n[a]);
						}
				}),
				(s.prototype._initEvents = function () {
					var e = this;
					(this.settings.events = {
						touchStart: function (t) {
							var i;
							e._useTarget(t.target, t) &&
								((i = t.originalEvent.touches[0]),
								(e.threshold = e._threshold(t.target, t)),
								e._start(i.clientX, i.clientY),
								t.stopPropagation());
						},
						touchMove: function (t) {
							var i;
							e.mouseDown &&
								((i = t.originalEvent.touches[0]),
								e._inputmove(i.clientX, i.clientY),
								t.preventDefault && t.preventDefault());
						},
						inputDown: function (t) {
							e._useTarget(t.target, t) &&
								((e.threshold = e._threshold(t.target, t)),
								e._start(t.clientX, t.clientY),
								(e.elementFocused = t.target),
								'IMG' === t.target.nodeName && t.preventDefault(),
								t.stopPropagation());
						},
						inputEnd: function (t) {
							e._useTarget(t.target, t) &&
								(e._end(), (e.elementFocused = null), t.preventDefault && t.preventDefault());
						},
						inputMove: function (t) {
							e.mouseDown &&
								(e._inputmove(t.clientX, t.clientY), t.preventDefault && t.preventDefault());
						},
						scroll: function (t) {
							'function' == typeof e.settings.moved && e.settings.moved.call(e, e.settings),
								t.preventDefault && t.preventDefault();
						},
						inputClick: function (t) {
							if (Math.abs(e.velocity) > 0 || Math.abs(e.velocityY) > 0)
								return t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1;
						},
						dragStart: function (t) {
							if (e._useTarget(t.target, t) && e.elementFocused)
								return (
									t.preventDefault && t.preventDefault(),
									t.stopPropagation && t.stopPropagation(),
									!1
								);
						},
						selectStart: function (t) {
							return 'function' == typeof e.settings.selectStart
								? e.settings.selectStart.apply(e, arguments)
								: e._useTarget(t.target, t)
								? (t.preventDefault && t.preventDefault(),
								  t.stopPropagation && t.stopPropagation(),
								  !1)
								: void 0;
						}
					}),
						this._attachListeners();
				}),
				(s.prototype._inputmove = function (e, t) {
					if (
						(!this.lastMove ||
							new Date() > new Date(this.lastMove.getTime() + this.throttleTimeout)) &&
						((this.lastMove = new Date()), this.mouseDown && (this.xpos || this.ypos))
					) {
						var i = e - this.xpos,
							s = t - this.ypos;
						if ((this.settings.invert && ((i *= -1), (s *= -1)), this.threshold > 0)) {
							var n = Math.sqrt(i * i + s * s);
							if (this.threshold > n) return;
							this.threshold = 0;
						}
						this.elementFocused &&
							(this.elementFocused.blur(), (this.elementFocused = null), this.el.focus()),
							(this.settings.decelerate = !1),
							(this.velocity = this.velocityY = 0);
						var o = this.scrollLeft(),
							r = this.scrollTop();
						this.scrollLeft(this.settings.x ? o - i : o),
							this.scrollTop(this.settings.y ? r - s : r),
							(this.prevXPos = this.xpos),
							(this.prevYPos = this.ypos),
							(this.xpos = e),
							(this.ypos = t),
							this._calculateVelocities(),
							this._setMoveClasses(this.settings.movingClass),
							'function' == typeof this.settings.moved &&
								this.settings.moved.call(this, this.settings);
					}
				}),
				(s.prototype._calculateVelocities = function () {
					(this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity)),
						(this.velocityY = this._capVelocity(
							this.prevYPos - this.ypos,
							this.settings.maxvelocity
						)),
						this.settings.invert && ((this.velocity *= -1), (this.velocityY *= -1));
				}),
				(s.prototype._end = function () {
					this.xpos &&
						this.prevXPos &&
						!1 === this.settings.decelerate &&
						((this.settings.decelerate = !0),
						this._calculateVelocities(),
						(this.xpos = this.prevXPos = this.mouseDown = !1),
						this._move());
				}),
				(s.prototype._useTarget = function (e, t) {
					return (
						'function' != typeof this.settings.filterTarget ||
						!1 !== this.settings.filterTarget.call(this, e, t)
					);
				}),
				(s.prototype._threshold = function (e, t) {
					return 'function' == typeof this.settings.threshold
						? this.settings.threshold.call(this, e, t)
						: this.settings.threshold;
				}),
				(s.prototype._start = function (e, t) {
					(this.mouseDown = !0),
						(this.velocity = this.prevXPos = 0),
						(this.velocityY = this.prevYPos = 0),
						(this.xpos = e),
						(this.ypos = t);
				}),
				(s.prototype._resetMouse = function () {
					(this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1);
				}),
				(s.prototype._decelerateVelocity = function (e, t) {
					return 0 === Math.floor(Math.abs(e)) ? 0 : e * t;
				}),
				(s.prototype._capVelocity = function (e, t) {
					var i = e;
					return e > 0 ? e > t && (i = t) : e < 0 - t && (i = 0 - t), i;
				}),
				(s.prototype._setMoveClasses = function (e) {
					var t = this.settings,
						i = this.el;
					i.classList.remove(t.movingClass.up),
						i.classList.remove(t.movingClass.down),
						i.classList.remove(t.movingClass.left),
						i.classList.remove(t.movingClass.right),
						i.classList.remove(t.deceleratingClass.up),
						i.classList.remove(t.deceleratingClass.down),
						i.classList.remove(t.deceleratingClass.left),
						i.classList.remove(t.deceleratingClass.right),
						this.velocity > 0 && i.classList.add(e.right),
						this.velocity < 0 && i.classList.add(e.left),
						this.velocityY > 0 && i.classList.add(e.down),
						this.velocityY < 0 && i.classList.add(e.up);
				}),
				(s.prototype._move = function () {
					var t = this._getScroller(),
						i = this,
						s = this.settings;
					s.x && t.scrollWidth > 0
						? (this.scrollLeft(this.scrollLeft() + this.velocity),
						  Math.abs(this.velocity) > 0 &&
								(this.velocity = s.decelerate
									? i._decelerateVelocity(this.velocity, s.slowdown)
									: this.velocity))
						: (this.velocity = 0),
						s.y && t.scrollHeight > 0
							? (this.scrollTop(this.scrollTop() + this.velocityY),
							  Math.abs(this.velocityY) > 0 &&
									(this.velocityY = s.decelerate
										? i._decelerateVelocity(this.velocityY, s.slowdown)
										: this.velocityY))
							: (this.velocityY = 0),
						i._setMoveClasses(s.deceleratingClass),
						'function' == typeof s.moved && s.moved.call(this, s),
						Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0
							? this.moving ||
							  ((this.moving = !0),
							  e(function () {
									(i.moving = !1), i._move();
							  }))
							: i.stop();
				}),
				(s.prototype._getScroller = function () {
					return this.el;
				}),
				(s.prototype.scrollLeft = function (e) {
					var t = this._getScroller();
					if ('number' != typeof e) return t.scrollLeft;
					(t.scrollLeft = e), (this.settings.scrollLeft = e);
				}),
				(s.prototype.scrollTop = function (e) {
					var t = this._getScroller();
					if ('number' != typeof e) return t.scrollTop;
					(t.scrollTop = e), (this.settings.scrollTop = e);
				}),
				(s.prototype._attachListeners = function () {
					var e = this.el,
						i = this.settings;
					t &&
						(e.addEventListener('touchstart', i.events.touchStart, !1),
						e.addEventListener('touchend', i.events.inputEnd, !1),
						e.addEventListener('touchmove', i.events.touchMove, !1)),
						e.addEventListener('mousedown', i.events.inputDown, !1),
						e.addEventListener('mouseup', i.events.inputEnd, !1),
						e.addEventListener('mousemove', i.events.inputMove, !1),
						e.addEventListener('click', i.events.inputClick, !1),
						e.addEventListener('scroll', i.events.scroll, !1),
						e.addEventListener('selectstart', i.events.selectStart, !1),
						e.addEventListener('dragstart', i.events.dragStart, !1);
				}),
				(s.prototype._detachListeners = function () {
					var e = this.el,
						i = this.settings;
					t &&
						(e.removeEventListener('touchstart', i.events.touchStart, !1),
						e.removeEventListener('touchend', i.events.inputEnd, !1),
						e.removeEventListener('touchmove', i.events.touchMove, !1)),
						e.removeEventListener('mousedown', i.events.inputDown, !1),
						e.removeEventListener('mouseup', i.events.inputEnd, !1),
						e.removeEventListener('mousemove', i.events.inputMove, !1),
						e.removeEventListener('click', i.events.inputClick, !1),
						e.removeEventListener('scroll', i.events.scroll, !1),
						e.removeEventListener('selectstart', i.events.selectStart, !1),
						e.removeEventListener('dragstart', i.events.dragStart, !1);
				}),
				(window.VanillaKinetic = s);
		})();
	},
	function (e, t, i) {
		var s, n, o;
		/**
		 * @fileoverview dragscroll - scroll area by dragging
		 * @version 0.0.8
		 *
		 * @license MIT, see http://github.com/asvd/dragscroll
		 * @copyright 2015 asvd <heliosframework@gmail.com>
		 */ (n = [t]),
			void 0 ===
				(o =
					'function' ==
					typeof (s = function (e) {
						var t,
							i,
							s = window,
							n = document,
							o = [],
							r = function (e, r) {
								for (e = 0; e < o.length; )
									(r = (r = o[e++]).container || r).removeEventListener('mousedown', r.md, 0),
										s.removeEventListener('mouseup', r.mu, 0),
										s.removeEventListener('mousemove', r.mm, 0);
								for (
									o = [].slice.call(n.getElementsByClassName('dragscroll')), e = 0;
									e < o.length;

								)
									!(function (e, o, r, a, l, h) {
										(h = e.container || e).addEventListener(
											'mousedown',
											(h.md = function (t) {
												(e.hasAttribute('nochilddrag') &&
													n.elementFromPoint(t.pageX, t.pageY) !== h) ||
													((a = 1), (o = t.clientX), (r = t.clientY), t.preventDefault());
											}),
											0
										),
											s.addEventListener(
												'mouseup',
												(h.mu = function () {
													a = 0;
												}),
												0
											),
											s.addEventListener(
												'mousemove',
												(h.mm = function (s) {
													a &&
														(((l = e.scroller || e).scrollLeft -= t = -o + (o = s.clientX)),
														(l.scrollTop -= i = -r + (r = s.clientY)),
														e === n.body &&
															(((l = n.documentElement).scrollLeft -= t), (l.scrollTop -= i)));
												}),
												0
											);
									})(o[e++]);
							};
						'complete' === n.readyState ? r() : s.addEventListener('load', r, 0),
							(e.reset = r),
							(window.resetDragscroll = r);
					})
						? s.apply(t, n)
						: s) || (e.exports = o);
	},
	function (e, t) {
		var i;
		i = (function () {
			return this;
		})();
		try {
			i = i || Function('return this')() || (0, eval)('this');
		} catch (e) {
			'object' == typeof window && (i = window);
		}
		e.exports = i;
	},
	function (e, t) {
		e.exports = function (e) {
			return (
				e.webpackPolyfill ||
					((e.deprecate = function () {}),
					(e.paths = []),
					e.children || (e.children = []),
					Object.defineProperty(e, 'loaded', {
						enumerable: !0,
						get: function () {
							return e.l;
						}
					}),
					Object.defineProperty(e, 'id', {
						enumerable: !0,
						get: function () {
							return e.i;
						}
					}),
					(e.webpackPolyfill = 1)),
				e
			);
		};
	},
	function (e, t) {
		var i,
			s,
			n = (e.exports = {});
		function o() {
			throw new Error('setTimeout has not been defined');
		}
		function r() {
			throw new Error('clearTimeout has not been defined');
		}
		function a(e) {
			if (i === setTimeout) return setTimeout(e, 0);
			if ((i === o || !i) && setTimeout) return (i = setTimeout), setTimeout(e, 0);
			try {
				return i(e, 0);
			} catch (t) {
				try {
					return i.call(null, e, 0);
				} catch (t) {
					return i.call(this, e, 0);
				}
			}
		}
		!(function () {
			try {
				i = 'function' == typeof setTimeout ? setTimeout : o;
			} catch (e) {
				i = o;
			}
			try {
				s = 'function' == typeof clearTimeout ? clearTimeout : r;
			} catch (e) {
				s = r;
			}
		})();
		var l,
			h = [],
			c = !1,
			u = -1;
		function d() {
			c && l && ((c = !1), l.length ? (h = l.concat(h)) : (u = -1), h.length && g());
		}
		function g() {
			if (!c) {
				var e = a(d);
				c = !0;
				for (var t = h.length; t; ) {
					for (l = h, h = []; ++u < t; ) l && l[u].run();
					(u = -1), (t = h.length);
				}
				(l = null),
					(c = !1),
					(function (e) {
						if (s === clearTimeout) return clearTimeout(e);
						if ((s === r || !s) && clearTimeout) return (s = clearTimeout), clearTimeout(e);
						try {
							s(e);
						} catch (t) {
							try {
								return s.call(null, e);
							} catch (t) {
								return s.call(this, e);
							}
						}
					})(e);
			}
		}
		function v(e, t) {
			(this.fun = e), (this.array = t);
		}
		function p() {}
		(n.nextTick = function (e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
			h.push(new v(e, t)), 1 !== h.length || c || a(g);
		}),
			(v.prototype.run = function () {
				this.fun.apply(null, this.array);
			}),
			(n.title = 'browser'),
			(n.browser = !0),
			(n.env = {}),
			(n.argv = []),
			(n.version = ''),
			(n.versions = {}),
			(n.on = p),
			(n.addListener = p),
			(n.once = p),
			(n.off = p),
			(n.removeListener = p),
			(n.removeAllListeners = p),
			(n.emit = p),
			(n.prependListener = p),
			(n.prependOnceListener = p),
			(n.listeners = function (e) {
				return [];
			}),
			(n.binding = function (e) {
				throw new Error('process.binding is not supported');
			}),
			(n.cwd = function () {
				return '/';
			}),
			(n.chdir = function (e) {
				throw new Error('process.chdir is not supported');
			}),
			(n.umask = function () {
				return 0;
			});
	},
	function (e, t, i) {
		function s(e) {
			var i;
			function s() {
				if (s.enabled) {
					var e = s,
						n = +new Date(),
						o = n - (i || n);
					(e.diff = o), (e.prev = i), (e.curr = n), (i = n);
					for (var r = new Array(arguments.length), a = 0; a < r.length; a++) r[a] = arguments[a];
					(r[0] = t.coerce(r[0])), 'string' != typeof r[0] && r.unshift('%O');
					var l = 0;
					(r[0] = r[0].replace(/%([a-zA-Z%])/g, function (i, s) {
						if ('%%' === i) return i;
						l++;
						var n = t.formatters[s];
						if ('function' == typeof n) {
							var o = r[l];
							(i = n.call(e, o)), r.splice(l, 1), l--;
						}
						return i;
					})),
						t.formatArgs.call(e, r),
						(s.log || t.log || console.log.bind(console)).apply(e, r);
				}
			}
			return (
				(s.namespace = e),
				(s.enabled = t.enabled(e)),
				(s.useColors = t.useColors()),
				(s.color = (function (e) {
					var i,
						s = 0;
					for (i in e) (s = (s << 5) - s + e.charCodeAt(i)), (s |= 0);
					return t.colors[Math.abs(s) % t.colors.length];
				})(e)),
				(s.destroy = n),
				'function' == typeof t.init && t.init(s),
				t.instances.push(s),
				s
			);
		}
		function n() {
			var e = t.instances.indexOf(this);
			return -1 !== e && (t.instances.splice(e, 1), !0);
		}
		((t = e.exports = s.debug = s.default = s).coerce = function (e) {
			return e instanceof Error ? e.stack || e.message : e;
		}),
			(t.disable = function () {
				t.enable('');
			}),
			(t.enable = function (e) {
				var i;
				t.save(e), (t.names = []), (t.skips = []);
				var s = ('string' == typeof e ? e : '').split(/[\s,]+/),
					n = s.length;
				for (i = 0; i < n; i++)
					s[i] &&
						('-' === (e = s[i].replace(/\*/g, '.*?'))[0]
							? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
							: t.names.push(new RegExp('^' + e + '$')));
				for (i = 0; i < t.instances.length; i++) {
					var o = t.instances[i];
					o.enabled = t.enabled(o.namespace);
				}
			}),
			(t.enabled = function (e) {
				if ('*' === e[e.length - 1]) return !0;
				var i, s;
				for (i = 0, s = t.skips.length; i < s; i++) if (t.skips[i].test(e)) return !1;
				for (i = 0, s = t.names.length; i < s; i++) if (t.names[i].test(e)) return !0;
				return !1;
			}),
			(t.humanize = i(10)),
			(t.instances = []),
			(t.names = []),
			(t.skips = []),
			(t.formatters = {});
	},
	function (e, t) {
		var i = 1e3,
			s = 60 * i,
			n = 60 * s,
			o = 24 * n,
			r = 365.25 * o;
		function a(e, t, i) {
			if (!(e < t))
				return e < 1.5 * t ? Math.floor(e / t) + ' ' + i : Math.ceil(e / t) + ' ' + i + 's';
		}
		e.exports = function (e, t) {
			t = t || {};
			var l = typeof e;
			if ('string' === l && e.length > 0)
				return (function (e) {
					if ((e = String(e)).length > 100) return;
					var t =
						/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
							e
						);
					if (!t) return;
					var a = parseFloat(t[1]);
					switch ((t[2] || 'ms').toLowerCase()) {
						case 'years':
						case 'year':
						case 'yrs':
						case 'yr':
						case 'y':
							return a * r;
						case 'days':
						case 'day':
						case 'd':
							return a * o;
						case 'hours':
						case 'hour':
						case 'hrs':
						case 'hr':
						case 'h':
							return a * n;
						case 'minutes':
						case 'minute':
						case 'mins':
						case 'min':
						case 'm':
							return a * s;
						case 'seconds':
						case 'second':
						case 'secs':
						case 'sec':
						case 's':
							return a * i;
						case 'milliseconds':
						case 'millisecond':
						case 'msecs':
						case 'msec':
						case 'ms':
							return a;
						default:
							return;
					}
				})(e);
			if ('number' === l && !1 === isNaN(e))
				return t.long
					? (function (e) {
							return (
								a(e, o, 'day') ||
								a(e, n, 'hour') ||
								a(e, s, 'minute') ||
								a(e, i, 'second') ||
								e + ' ms'
							);
					  })(e)
					: (function (e) {
							if (e >= o) return Math.round(e / o) + 'd';
							if (e >= n) return Math.round(e / n) + 'h';
							if (e >= s) return Math.round(e / s) + 'm';
							if (e >= i) return Math.round(e / i) + 's';
							return e + 'ms';
					  })(e);
			throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e));
		};
	},
	function (e, t, i) {
		var s = i(12);
		'string' == typeof s && (s = [[e.i, s, '']]);
		var n = { hmr: !0, transform: void 0, insertInto: void 0 };
		i(14)(s, n);
		s.locals && (e.exports = s.locals);
	},
	function (e, t, i) {},
	,
	function (e, t, i) {
		var s = {},
			n = (function (e) {
				var t;
				return function () {
					return void 0 === t && (t = e.apply(this, arguments)), t;
				};
			})(function () {
				return window && document && document.all && !window.atob;
			}),
			o = (function (e) {
				var t = {};
				return function (e) {
					if ('function' == typeof e) return e();
					if (void 0 === t[e]) {
						var i = function (e) {
							return document.querySelector(e);
						}.call(this, e);
						if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
							try {
								i = i.contentDocument.head;
							} catch (e) {
								i = null;
							}
						t[e] = i;
					}
					return t[e];
				};
			})(),
			r = null,
			a = 0,
			l = [],
			h = i(15);
		function c(e, t) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i],
					o = s[n.id];
				if (o) {
					o.refs++;
					for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
					for (; r < n.parts.length; r++) o.parts.push(f(n.parts[r], t));
				} else {
					var a = [];
					for (r = 0; r < n.parts.length; r++) a.push(f(n.parts[r], t));
					s[n.id] = { id: n.id, refs: 1, parts: a };
				}
			}
		}
		function u(e, t) {
			for (var i = [], s = {}, n = 0; n < e.length; n++) {
				var o = e[n],
					r = t.base ? o[0] + t.base : o[0],
					a = { css: o[1], media: o[2], sourceMap: o[3] };
				s[r] ? s[r].parts.push(a) : i.push((s[r] = { id: r, parts: [a] }));
			}
			return i;
		}
		function d(e, t) {
			var i = o(e.insertInto);
			if (!i)
				throw new Error(
					"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
				);
			var s = l[l.length - 1];
			if ('top' === e.insertAt)
				s
					? s.nextSibling
						? i.insertBefore(t, s.nextSibling)
						: i.appendChild(t)
					: i.insertBefore(t, i.firstChild),
					l.push(t);
			else if ('bottom' === e.insertAt) i.appendChild(t);
			else {
				if ('object' != typeof e.insertAt || !e.insertAt.before)
					throw new Error(
						"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
					);
				var n = o(e.insertInto + ' ' + e.insertAt.before);
				i.insertBefore(t, n);
			}
		}
		function g(e) {
			if (null === e.parentNode) return !1;
			e.parentNode.removeChild(e);
			var t = l.indexOf(e);
			t >= 0 && l.splice(t, 1);
		}
		function v(e) {
			var t = document.createElement('style');
			return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), p(t, e.attrs), d(e, t), t;
		}
		function p(e, t) {
			Object.keys(t).forEach(function (i) {
				e.setAttribute(i, t[i]);
			});
		}
		function f(e, t) {
			var i, s, n, o;
			if (t.transform && e.css) {
				if (!(o = t.transform(e.css))) return function () {};
				e.css = o;
			}
			if (t.singleton) {
				var l = a++;
				(i = r || (r = v(t))), (s = w.bind(null, i, l, !1)), (n = w.bind(null, i, l, !0));
			} else
				e.sourceMap &&
				'function' == typeof URL &&
				'function' == typeof URL.createObjectURL &&
				'function' == typeof URL.revokeObjectURL &&
				'function' == typeof Blob &&
				'function' == typeof btoa
					? ((i = (function (e) {
							var t = document.createElement('link');
							return (
								void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
								(e.attrs.rel = 'stylesheet'),
								p(t, e.attrs),
								d(e, t),
								t
							);
					  })(t)),
					  (s = function (e, t, i) {
							var s = i.css,
								n = i.sourceMap,
								o = void 0 === t.convertToAbsoluteUrls && n;
							(t.convertToAbsoluteUrls || o) && (s = h(s));
							n &&
								(s +=
									'\n/*# sourceMappingURL=data:application/json;base64,' +
									btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
									' */');
							var r = new Blob([s], { type: 'text/css' }),
								a = e.href;
							(e.href = URL.createObjectURL(r)), a && URL.revokeObjectURL(a);
					  }.bind(null, i, t)),
					  (n = function () {
							g(i), i.href && URL.revokeObjectURL(i.href);
					  }))
					: ((i = v(t)),
					  (s = function (e, t) {
							var i = t.css,
								s = t.media;
							s && e.setAttribute('media', s);
							if (e.styleSheet) e.styleSheet.cssText = i;
							else {
								for (; e.firstChild; ) e.removeChild(e.firstChild);
								e.appendChild(document.createTextNode(i));
							}
					  }.bind(null, i)),
					  (n = function () {
							g(i);
					  }));
			return (
				s(e),
				function (t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						s((e = t));
					} else n();
				}
			);
		}
		e.exports = function (e, t) {
			if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
				throw new Error('The style-loader cannot be used in a non-browser environment');
			((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
				t.singleton || 'boolean' == typeof t.singleton || (t.singleton = n()),
				t.insertInto || (t.insertInto = 'head'),
				t.insertAt || (t.insertAt = 'bottom');
			var i = u(e, t);
			return (
				c(i, t),
				function (e) {
					for (var n = [], o = 0; o < i.length; o++) {
						var r = i[o];
						(a = s[r.id]).refs--, n.push(a);
					}
					e && c(u(e, t), t);
					for (o = 0; o < n.length; o++) {
						var a;
						if (0 === (a = n[o]).refs) {
							for (var l = 0; l < a.parts.length; l++) a.parts[l]();
							delete s[a.id];
						}
					}
				}
			);
		};
		var m = (function () {
			var e = [];
			return function (t, i) {
				return (e[t] = i), e.filter(Boolean).join('\n');
			};
		})();
		function w(e, t, i, s) {
			var n = i ? '' : s.css;
			if (e.styleSheet) e.styleSheet.cssText = m(t, n);
			else {
				var o = document.createTextNode(n),
					r = e.childNodes;
				r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
			}
		}
	},
	function (e, t) {
		e.exports = function (e) {
			var t = 'undefined' != typeof window && window.location;
			if (!t) throw new Error('fixUrls requires window.location');
			if (!e || 'string' != typeof e) return e;
			var i = t.protocol + '//' + t.host,
				s = i + t.pathname.replace(/\/[^\/]*$/, '/');
			return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
				var n,
					o = t
						.trim()
						.replace(/^"(.*)"$/, function (e, t) {
							return t;
						})
						.replace(/^'(.*)'$/, function (e, t) {
							return t;
						});
				return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
					? e
					: ((n =
							0 === o.indexOf('//')
								? o
								: 0 === o.indexOf('/')
								? i + o
								: s + o.replace(/^\.\//, '')),
					  'url(' + JSON.stringify(n) + ')');
			});
		};
	},
	function (e, t, i) {
		'use strict';
		i.r(t);
		i(4), i(5);
		function s(e) {
			const t = document.createElement(e),
				i = Array.prototype.slice.call(arguments, 1);
			for (; i.length; ) {
				n(t, i.shift());
			}
			return t;
		}
		function n(e, t) {
			if (null != t)
				if ('object' != typeof t && 'function' != typeof t)
					e.appendChild(document.createTextNode(t));
				else if (t instanceof window.Node) e.appendChild(t);
				else if (t instanceof Array) {
					const i = t.length;
					for (let s = 0; s < i; s++) n(e, t[s]);
				} else o(e, t);
		}
		function o(e, t) {
			for (const i in t)
				t.hasOwnProperty(i) && ('style' === i ? r(e, t.style) : e.setAttribute(i, t[i]));
		}
		function r(e, t) {
			if (t)
				if ('object' == typeof t) for (const i in t) t.hasOwnProperty(i) && (e.style[i] = t[i]);
				else e.style.cssText = t;
		}
		function a(e) {
			(this.name = 'DivaParentElementNotFoundException'),
				(this.message = e),
				(this.stack = new Error().stack);
		}
		function l(e) {
			(this.name = 'NotAnIIIFManifestException'),
				(this.message = e),
				(this.stack = new Error().stack);
		}
		function h(e) {
			(this.name = 'ObjectDataNotSuppliedException'),
				(this.message = e),
				(this.stack = new Error().stack);
		}
		(a.prototype = new Error()), (l.prototype = new Error()), (h.prototype = new Error());
		var c = {
			Events: new (class {
				constructor() {
					this._cache = {};
				}
				publish(e, t, i) {
					if (this._cache[e]) {
						const s = this._cache[e];
						if (void 0 !== s.global) {
							const e = s.global,
								n = e.length;
							for (let s = 0; s < n; s++) e[s].apply(i || null, t || []);
						}
						if (i && void 0 !== i.getInstanceId) {
							const s = i.getInstanceId();
							if (this._cache[e][s]) {
								const n = this._cache[e][s],
									o = n.length;
								for (let e = 0; e < o; e++) n[e].apply(i, t || []);
							}
						}
					}
				}
				subscribe(e, t, i) {
					return (
						this._cache[e] || (this._cache[e] = {}),
						'string' == typeof i
							? (this._cache[e][i] || (this._cache[e][i] = []), this._cache[e][i].push(t))
							: (this._cache[e].global || (this._cache[e].global = []),
							  this._cache[e].global.push(t)),
						i ? [e, t, i] : [e, t]
					);
				}
				unsubscribe(e, t) {
					const i = e[0];
					if (this._cache[i]) {
						let s;
						const n = 3 === e.length ? e[2] : 'global';
						if (!(s = this._cache[i][n])) return !1;
						if (t) return delete this._cache[i][n], s.length > 0;
						let o = s.length;
						for (; o--; ) if (s[o] === e[1]) return this._cache[i][n].splice(o, 1), !0;
					}
					return !1;
				}
				unsubscribeAll(e) {
					if (e) {
						const t = Object.keys(this._cache);
						let i,
							s = t.length;
						for (; s--; ) (i = t[s]), void 0 !== this._cache[i][e] && delete this._cache[i][e];
					} else this._cache = {};
				}
			})()
		};
		var u = {
			onDoubleClick: function (e, t) {
				e.addEventListener('dblclick', function (e) {
					e.ctrlKey || t(e, m(e.currentTarget, e));
				});
				const i = f(d);
				e.addEventListener('contextmenu', function (e) {
					e.preventDefault(),
						e.ctrlKey && (i.isTriggered() ? (i.reset(), t(e, m(e.currentTarget, e))) : i.trigger());
				});
			},
			onPinch: function (e, t) {
				let i = 0;
				e.addEventListener('touchstart', function (e) {
					e.preventDefault(),
						2 === e.originalEvent.touches.length &&
							(i = p(
								e.originalEvent.touches[0].clientX,
								e.originalEvent.touches[0].clientY,
								e.originalEvent.touches[1].clientX,
								e.originalEvent.touches[1].clientY
							));
				}),
					e.addEventListener('touchmove', function (e) {
						if ((e.preventDefault(), 2 === e.originalEvent.touches.length)) {
							const s = e.originalEvent.touches,
								n = p(s[0].clientX, s[0].clientY, s[1].clientX, s[1].clientY),
								o = n - i;
							if (Math.abs(o) > 0) {
								const o = {
									pageX: (s[0].clientX + s[1].clientX) / 2,
									pageY: (s[0].clientY + s[1].clientY) / 2
								};
								t(e, m(e.currentTarget, o), i, n);
							}
						}
					});
			},
			onDoubleTap: function (e, t) {
				const i = f(v);
				let s = null;
				e.addEventListener('touchend', (e) => {
					if ((e.preventDefault(), i.isTriggered())) {
						i.reset();
						const n = {
								pageX: e.originalEvent.changedTouches[0].clientX,
								pageY: e.originalEvent.changedTouches[0].clientY
							},
							o = p(s.pageX, s.pageY, n.pageX, n.pageY);
						o < g && t(e, m(e.currentTarget, n)), (s = null);
					} else
						(s = {
							pageX: e.originalEvent.changedTouches[0].clientX,
							pageY: e.originalEvent.changedTouches[0].clientY
						}),
							i.trigger();
				});
			}
		};
		const d = 500,
			g = 50,
			v = 250;
		function p(e, t, i, s) {
			return Math.sqrt((i - e) * (i - e) + (s - t) * (s - t));
		}
		function f(e) {
			let t = !1,
				i = null;
			return {
				trigger() {
					(t = !0),
						s(),
						(i = setTimeout(function () {
							(t = !1), (i = null);
						}, e));
				},
				isTriggered: () => t,
				reset() {
					(t = !1), s();
				}
			};
			function s() {
				null !== i && (clearTimeout(i), (i = null));
			}
		}
		function m(e, t) {
			const i = e.getBoundingClientRect();
			return { left: t.pageX - i.left, top: t.pageY - i.top };
		}
		var w = i(1),
			b = i.n(w);
		class y {
			constructor(e, t) {
				(this.page = e),
					(this._viewerCore = t),
					(this._innerElement = this._viewerCore.getSettings().innerElement),
					(this._pageToolsElem = null);
			}
			mount() {
				null === this._pageToolsElem &&
					((this._buttons = this._initializePageToolButtons()),
					(this._pageToolsElem = s(
						'div',
						{ class: 'diva-page-tools-wrapper' },
						s('div', { class: 'diva-page-tools' }, this._buttons)
					)),
					(this._pageLabelsElem = s(
						'div',
						{ class: 'diva-page-labels-wrapper' },
						s(
							'div',
							{ class: 'diva-page-labels' },
							this._viewerCore.settings.manifest.pages[this.page].l
						)
					))),
					this.refresh(),
					this._innerElement.appendChild(this._pageToolsElem),
					this._innerElement.appendChild(this._pageLabelsElem);
			}
			_initializePageToolButtons() {
				const e = this._viewerCore.getSettings(),
					t = this._viewerCore.getPublicInstance(),
					i = this.page;
				return this._viewerCore.getPageTools().map((s) => {
					const n = s.pageToolsIcon.cloneNode(!0);
					return (
						n.addEventListener(
							'click',
							(n) => {
								s.handleClick.call(s, n, e, t, i);
							},
							!1
						),
						n.addEventListener(
							'touchend',
							(n) => {
								n.preventDefault(), s.handleClick.call(s, n, e, t, i);
							},
							!1
						),
						n
					);
				});
			}
			unmount() {
				this._innerElement.removeChild(this._pageToolsElem),
					this._innerElement.removeChild(this._pageLabelsElem);
			}
			refresh() {
				const e = this._viewerCore.getPageRegion(this.page, {
					includePadding: !0,
					incorporateViewport: !0
				});
				let t = window.getComputedStyle(this._innerElement, null).getPropertyValue('margin-left');
				(this._pageToolsElem.style.top = e.top + 'px'),
					(this._pageToolsElem.style.left = e.left - parseFloat(t) + 'px'),
					(this._pageLabelsElem.style.top = e.top + 'px'),
					(this._pageLabelsElem.style.left = e.right - parseFloat(t) - this.labelWidth - 5 + 'px');
			}
		}
		class _ {
			constructor(e) {
				if (
					((this._viewerCore = e),
					(this._viewerState = e.getInternalState()),
					(this._overlays = []),
					this._viewerCore.getPageTools().length)
				) {
					const t = e.getSettings().numPages;
					for (let i = 0; i < t; i++) {
						const t = new y(i, e);
						this._overlays.push(t), this._viewerCore.addPageOverlay(t);
						let s = document.createElement('span');
						(s.innerHTML = e.settings.manifest.pages[i].l),
							s.classList.add('diva-page-labels'),
							s.setAttribute('style', 'display: inline-block;'),
							document.body.appendChild(s);
						let n = s.clientWidth;
						document.body.removeChild(s), (t.labelWidth = n);
					}
				}
			}
			onDoubleClick(e, t) {
				const i = this._viewerCore.getSettings(),
					s = e.ctrlKey ? i.zoomLevel - 1 : i.zoomLevel + 1,
					n = this._viewerCore.getPagePositionAtViewportOffset(t);
				this._viewerCore.zoom(s, n);
			}
			onPinch(e, t, i, s) {
				const n = this._viewerCore.getInternalState(),
					o = this._viewerCore.getSettings();
				let r = Math.log((Math.pow(2, o.zoomLevel) * s) / (i * Math.log(2))) / Math.log(2);
				if (((r = Math.max(o.minZoomLevel, r)), (r = Math.min(o.maxZoomLevel, r)) === o.zoomLevel))
					return;
				const a = this._viewerCore.getPagePositionAtViewportOffset(t),
					l = this._viewerCore
						.getCurrentLayout()
						.getPageToViewportCenterOffset(a.anchorPage, n.viewport),
					h = 1 / Math.pow(2, o.zoomLevel - r);
				this._viewerCore.reload({
					zoomLevel: r,
					goDirectlyTo: a.anchorPage,
					horizontalOffset: l.x - a.offset.left + a.offset.left * h,
					verticalOffset: l.y - a.offset.top + a.offset.top * h
				});
			}
			onViewWillLoad() {
				this._viewerCore.publish('DocumentWillLoad', this._viewerCore.getSettings());
			}
			onViewDidLoad() {
				this._handleZoomLevelChange();
				const e = this._viewerCore.getSettings().activePageIndex,
					t = this._viewerCore.getPageName(e);
				this._viewerCore.publish('DocumentDidLoad', e, t);
			}
			onViewDidUpdate(e, t) {
				const i =
					null !== t
						? t
						: (function (e, t, i) {
								const s = i.top + i.height / 2,
									n = i.left + i.width / 2,
									o = b()(e, (e) => {
										const i = t.getPageDimensions(e),
											o = t.getPageOffset(e, { includePadding: !1 }),
											r = o.left + i.height / 2,
											a = o.top + i.width / 2,
											l = Math.max(Math.abs(n - r) - i.width / 2, 0),
											h = Math.max(Math.abs(s - a) - i.height / 2, 0);
										return -(l * l + h * h);
									});
								return null != o ? o : null;
						  })(e, this._viewerCore.getCurrentLayout(), this._viewerCore.getViewport());
				let s = this._viewerState.viewport.intersectionTolerance;
				this._viewerState.viewport.intersectionTolerance = 0;
				let n = e.filter((e) => this._viewerState.renderer.isPageVisible(e));
				(this._viewerState.viewport.intersectionTolerance = s),
					null !== i && this._viewerCore.setCurrentPages(i, n),
					null !== t && this._viewerCore.publish('ViewerDidJump', t),
					this._handleZoomLevelChange();
			}
			_handleZoomLevelChange() {
				const e = this._viewerState,
					t = e.options.zoomLevel;
				e.oldZoomLevel !== t &&
					e.oldZoomLevel >= 0 &&
					(e.oldZoomLevel < t
						? this._viewerCore.publish('ViewerDidZoomIn', t)
						: this._viewerCore.publish('ViewerDidZoomOut', t),
					this._viewerCore.publish('ViewerDidZoom', t)),
					(e.oldZoomLevel = t);
			}
			destroy() {
				this._overlays.forEach((e) => {
					this._viewerCore.removePageOverlay(e);
				}, this);
			}
		}
		class P {
			constructor(e) {
				this._viewerCore = e;
			}
			onDoubleClick(e, t) {
				const i = this._viewerCore.getPagePositionAtViewportOffset(t),
					s = this._viewerCore.getCurrentLayout(),
					n = this._viewerCore.getViewport(),
					o = s.getPageToViewportCenterOffset(i.anchorPage, n);
				this._viewerCore.reload({
					inGrid: !1,
					goDirectlyTo: i.anchorPage,
					horizontalOffset: o.x + i.offset.left,
					verticalOffset: o.y + i.offset.top
				});
			}
			onPinch() {
				this._viewerCore.reload({ inGrid: !1 });
			}
			onViewWillLoad() {}
			onViewDidLoad() {}
			onViewDidUpdate(e, t) {
				if (0 === e.length) return;
				let i = this._viewerCore.viewerState.viewport.intersectionTolerance;
				this._viewerCore.viewerState.viewport.intersectionTolerance = 0;
				let s = e.filter((e) => this._viewerCore.viewerState.renderer.isPageVisible(e));
				if (((this._viewerCore.viewerState.viewport.intersectionTolerance = i), null !== t))
					return void this._viewerCore.setCurrentPages(t, s);
				const n = this._viewerCore.getCurrentLayout(),
					o = [];
				e.forEach((e) => {
					const t = n.getPageInfo(e).group;
					(0 !== o.length && t === o[o.length - 1]) || o.push(t);
				});
				const r = this._viewerCore.getViewport();
				let a;
				a =
					1 === o.length || o[0].region.top >= r.top
						? o[0]
						: o[1].region.bottom <= r.bottom
						? o[1]
						: (function (e, t) {
								const i = t.top + t.height / 2;
								return b()(e, (e) => {
									const t = e.region.top + e.dimensions.height / 2;
									return -Math.abs(i - t);
								});
						  })(o, r);
				const l = this._viewerCore.getSettings().activePageIndex;
				a.pages.some((e) => e.index === l) || this._viewerCore.setCurrentPages(a.pages[0].index, s);
			}
			destroy() {}
		}
		class S {
			constructor() {
				(this._pages = {}), (this._renderedPages = []), (this._renderedPageMap = {});
			}
			addOverlay(e) {
				(this._pages[e.page] || (this._pages[e.page] = [])).push(e),
					this._renderedPageMap[e.page] && e.mount();
			}
			removeOverlay(e) {
				const t = e.page,
					i = this._pages[t];
				if (!i) return;
				const s = i.indexOf(e);
				-1 !== s &&
					(this._renderedPageMap[t] && i[s].unmount(),
					i.splice(s, 1),
					0 === i.length && delete this._pages[t]);
			}
			updateOverlays(e) {
				const t = this._renderedPages,
					i = {};
				e.map((e) => {
					(i[e] = !0),
						this._renderedPageMap[e] ||
							((this._renderedPageMap[e] = !0),
							this._invokeOnOverlays(e, (e) => {
								e.mount();
							}));
				}),
					t.map((e) => {
						i[e]
							? this._invokeOnOverlays(e, (e) => {
									e.refresh();
							  })
							: (delete this._renderedPageMap[e],
							  this._invokeOnOverlays(e, (e) => {
									e.unmount();
							  }));
					}),
					(this._renderedPages = e);
			}
			_invokeOnOverlays(e, t) {
				const i = this._pages[e];
				i && i.map((e) => t(e));
			}
		}
		class C {
			constructor(e, t) {
				(this._rows = e),
					(this._cols = t),
					(this._map = new Array(e).fill(null).map(() => new Array(t).fill(!1)));
			}
			isLoaded(e, t) {
				return e >= this._rows || t >= this._cols || this._map[e][t];
			}
			set(e, t, i) {
				this._map[e][t] = i;
			}
		}
		class L {
			constructor(e) {
				this._levels = e;
				const t = (this._urlsToTiles = {});
				e.forEach((e) => {
					e.tiles.forEach((i) => {
						t[i.url] = { zoomLevel: e.zoomLevel, row: i.row, col: i.col };
					});
				}),
					this.clear();
			}
			clear() {
				const e = (this._loadedByLevel = {});
				this._levels.forEach((t) => {
					e[t.zoomLevel] = new C(t.rows, t.cols);
				});
			}
			getTiles(e) {
				const t = [],
					i = this._levels[0].zoomLevel,
					s = new C(this._levels[0].rows, this._levels[0].cols);
				let n;
				if (null === e) n = 0;
				else {
					const t = Math.ceil(e);
					n = (function (e, t) {
						const i = e.length;
						for (let s = 0; s < i; s++) if (t(e[s], s)) return s;
						return -1;
					})(this._levels, (e) => e.zoomLevel <= t);
				}
				this._levels
					.slice(0, n + 1)
					.reverse()
					.concat(this._levels.slice(n + 1))
					.forEach((e) => {
						const n = this._loadedByLevel[e.zoomLevel];
						let o = e.tiles.filter((e) => n.isLoaded(e.row, e.col));
						const r = Math.pow(2, i - e.zoomLevel);
						(o = o.filter((e) => {
							let t = !1;
							const i = e.row * r,
								n = e.col * r;
							for (let e = 0; e < r; e++)
								for (let o = 0; o < r; o++)
									s.isLoaded(i + e, n + o) || ((t = !0), s.set(i + e, n + o, !0));
							return t;
						})),
							t.push(o);
					}, this),
					t.reverse();
				const o = [];
				return (
					t.forEach((e) => {
						o.push.apply(o, e);
					}),
					o
				);
			}
			updateFromCache(e) {
				this.clear(),
					this._levels.forEach((t) => {
						const i = this._loadedByLevel[t.zoomLevel];
						t.tiles.forEach((t) => {
							e.has(t.url) && i.set(t.row, t.col, !0);
						});
					}, this);
			}
			updateWithLoadedUrls(e) {
				e.forEach((e) => {
					const t = this._urlsToTiles[e];
					this._loadedByLevel[t.zoomLevel].set(t.row, t.col, !0);
				}, this);
			}
		}
		class O {
			constructor(e, t) {
				const i = (function (e, t) {
					const i =
							null === t
								? e.pageLayouts
								: (function (e, t) {
										const i = Math.pow(2, t - e.maxZoomLevel);
										return e.pageLayouts.map((e) => ({
											dimensions: E(e.dimensions, i),
											pages: e.pages.map((e) => ({
												index: e.index,
												groupOffset: {
													top: Math.floor(e.groupOffset.top * i),
													left: Math.floor(e.groupOffset.left * i)
												},
												dimensions: E(e.dimensions, i)
											}))
										}));
								  })(e, t),
						s = (function (e, t) {
							let i, s;
							const n = e.padding.document;
							e.verticallyOriented
								? ((i = 'width'), (s = n.left + n.right))
								: ((i = 'height'), (s = n.top + n.bottom));
							return s + t.reduce((e, t) => Math.max(t.dimensions[i], e), 0);
						})(e, i);
					let n = e.verticallyOriented ? e.padding.document.top : e.padding.document.left;
					const o = [],
						r = { top: e.padding.page.top, left: e.padding.page.left };
					let a, l;
					i.forEach((t, i) => {
						let a, l;
						e.verticallyOriented
							? ((a = n), (l = (s - t.dimensions.width) / 2))
							: ((a = (s - t.dimensions.height) / 2), (l = n));
						const h = {
							top: a,
							bottom: a + r.top + t.dimensions.height,
							left: l,
							right: l + r.left + t.dimensions.width
						};
						o.push({ index: i, dimensions: t.dimensions, pages: t.pages, region: h, padding: r }),
							(n = e.verticallyOriented ? h.bottom : h.right);
					}),
						e.verticallyOriented ? ((a = n + r.top), (l = s)) : ((a = s), (l = n + r.left));
					return { dimensions: { height: a, width: l }, pageGroups: o };
				})(e, t);
				(this.dimensions = i.dimensions),
					(this.pageGroups = i.pageGroups),
					(this._pageLookup = (function (e) {
						const t = {};
						return (
							e.forEach((e) => {
								e.pages.forEach((i) => {
									t[i.index] = {
										index: i.index,
										group: e,
										dimensions: i.dimensions,
										groupOffset: i.groupOffset
									};
								});
							}),
							t
						);
					})(i.pageGroups));
			}
			getPageInfo(e) {
				return this._pageLookup[e] || null;
			}
			getPageDimensions(e) {
				if (!this._pageLookup || !this._pageLookup[e]) return null;
				const t = x(this._pageLookup[e]);
				return { height: t.bottom - t.top, width: t.right - t.left };
			}
			getPageOffset(e, t) {
				const i = this.getPageRegion(e, t);
				return i ? { top: i.top, left: i.left } : null;
			}
			getPageRegion(e, t) {
				const i = this._pageLookup[e];
				if (!i) return null;
				const s = x(i),
					n = i.group.padding;
				return t && t.includePadding
					? { top: s.top + n.top, left: s.left + n.left, bottom: s.bottom, right: s.right }
					: { top: s.top, left: s.left, bottom: s.bottom + n.top, right: s.right };
			}
			getPageToViewportCenterOffset(e, t) {
				const i = t.left,
					s = t.right - t.left,
					n = this.getPageOffset(e),
					o = i - n.left + parseInt(s / 2, 10),
					r = t.top,
					a = t.bottom - t.top;
				return { x: o, y: r - n.top + parseInt(a / 2, 10) };
			}
		}
		function x(e) {
			const t = e.groupOffset.top + e.group.region.top,
				i = t + e.dimensions.height,
				s = e.groupOffset.left + e.group.region.left;
			return { top: t, bottom: i, left: s, right: s + e.dimensions.width };
		}
		function E(e, t) {
			return { height: Math.floor(e.height * t), width: Math.floor(e.width * t) };
		}
		const I = i(0)('diva:ImageCache'),
			T = 100;
		class D {
			constructor(e) {
				(e = e || { maxKeys: T }),
					(this.maxKeys = e.maxKeys || T),
					(this._held = {}),
					(this._urls = {}),
					(this._lru = []);
			}
			get(e) {
				const t = this._urls[e];
				return t ? t.img : null;
			}
			has(e) {
				return !!this._urls[e];
			}
			put(e, t) {
				let i = this._urls[e];
				i
					? ((i.img = t), this._promote(i))
					: ((i = { img: t, url: e }),
					  (this._urls[e] = i),
					  this._tryEvict(1),
					  this._lru.unshift(i));
			}
			_promote(e) {
				const t = this._lru.indexOf(e);
				this._lru.splice(t, 1), this._lru.unshift(e);
			}
			_tryEvict(e) {
				const t = this.maxKeys - e;
				if (this._lru.length <= t) return;
				let i = this._lru.length - 1;
				for (;;) {
					const e = this._lru[i];
					if (
						!this._held[e.url] &&
						(I('Evicting image %s', e.url),
						this._lru.splice(i, 1),
						delete this._urls[e.url],
						this._lru.length <= t)
					)
						break;
					if (0 === i) {
						I.enabled &&
							I('Cache overfull by %s (all entries are being held)', this._lru.length - t);
						break;
					}
					i--;
				}
			}
			acquire(e) {
				(this._held[e] = (this._held[e] || 0) + 1), this._promote(this._urls[e]);
			}
			release(e) {
				this._held[e] > 1 ? this._held[e]-- : delete this._held[e], this._tryEvict(0);
			}
		}
		const M = i(0)('diva:ImageRequestHandler');
		class z {
			constructor(e) {
				(this._url = e.url),
					(this._callback = e.load),
					(this._errorCallback = e.error),
					(this.timeoutTime = e.timeoutTime || 0),
					(this._aborted = this._complete = !1),
					(this.timeout = setTimeout(() => {
						(this._image = new Image()),
							(this._image.crossOrigin = 'anonymous'),
							(this._image.onload = this._handleLoad.bind(this)),
							(this._image.onerror = this._handleError.bind(this)),
							(this._image.src = e.url),
							M('Requesting image %s', e.url);
					}, this.timeoutTime));
			}
			abort() {
				M('Aborting request to %s', this._url),
					clearTimeout(this.timeout),
					this._image &&
						((this._image.onload = this._image.onerror = null), (this._image.src = '')),
					(this._aborted = !0);
			}
			_handleLoad() {
				this._aborted
					? console.error('ImageRequestHandler invoked on cancelled request for ' + this._url)
					: this._complete
					? console.error('ImageRequestHandler invoked on completed request for ' + this._url)
					: ((this._complete = !0), M('Received image %s', this._url), this._callback(this._image));
			}
			_handleError() {
				M('Failed to load image %s', this._url), this._errorCallback(this._image);
			}
		}
		var V = {
			animate: function (e) {
				const t = e.duration,
					i = e.parameters,
					s = e.onUpdate,
					n = e.onEnd,
					o = k(),
					r = o + t,
					a = {},
					l = {},
					h = Object.keys(i);
				h.forEach((e) => {
					const t = i[e];
					a[e] = (function (e, t, i) {
						return (s) => e + (t - e) * i(s);
					})(t.from, t.to, t.easing || F);
				});
				let c = requestAnimationFrame(function e() {
					const i = k();
					const n = Math.min((i - o) / t, 1);
					!(function (e) {
						h.forEach((t) => {
							l[t] = a[t](e);
						});
					})(n);
					s(l);
					i < r ? (c = requestAnimationFrame(e)) : u({ interrupted: !1 });
				});
				return {
					cancel() {
						null !== c && (cancelAnimationFrame(c), u({ interrupted: !0 }));
					}
				};
				function u(e) {
					(c = null), n && n(e);
				}
			},
			easing: {
				linear: function (e) {
					return e;
				},
				cubic: F
			}
		};
		let k;
		function F(e) {
			return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
		}
		k =
			'undefined' != typeof performance && performance.now
				? () => performance.now()
				: () => Date.now();
		const j = i(0)('diva:Renderer'),
			A = i(0)('diva:Renderer:paints'),
			R = 250;
		class H {
			constructor(e, t) {
				(this._viewport = e.viewport),
					(this._outerElement = e.outerElement),
					(this._documentElement = e.innerElement),
					(this._hooks = t || {}),
					(this._canvas = s('canvas', { class: 'diva-viewer-canvas' })),
					(this._ctx = this._canvas.getContext('2d')),
					(this.layout = null),
					(this._sourceResolver = null),
					(this._renderedPages = null),
					(this._config = null),
					(this._zoomLevel = null),
					(this._compositeImages = null),
					(this._renderedTiles = null),
					(this._animation = null),
					(this._cache = new D()),
					(this._pendingRequests = {});
			}
			static getCompatibilityErrors() {
				return 'undefined' != typeof HTMLCanvasElement
					? null
					: [
							'Your browser lacks support for the ',
							s('pre', 'canvas'),
							' element. Please upgrade your browser.'
					  ];
			}
			load(e, t, i) {
				if (
					(this._clearAnimation(),
					this._hooks.onViewWillLoad && this._hooks.onViewWillLoad(),
					(this._sourceResolver = i),
					(this._config = e),
					(this._compositeImages = {}),
					this._setLayoutToZoomLevel(t.zoomLevel),
					!this.layout.getPageInfo(t.anchorPage))
				)
					throw new Error('invalid page: ' + t.anchorPage);
				this._canvas.width !== this._viewport.width || this._canvas.height !== this._viewport.height
					? (j(
							'Canvas dimension change: (%s, %s) -> (%s, %s)',
							this._canvas.width,
							this._canvas.height,
							this._viewport.width,
							this._viewport.height
					  ),
					  (this._canvas.width = this._viewport.width),
					  (this._canvas.height = this._viewport.height))
					: j('Reload, no size change'),
					this.goto(t.anchorPage, t.verticalOffset, t.horizontalOffset),
					this._canvas.parentNode !== this._outerElement &&
						this._outerElement.insertBefore(this._canvas, this._outerElement.firstChild),
					this._hooks.onViewDidLoad && this._hooks.onViewDidLoad();
			}
			_setViewportPosition(e) {
				if (e.zoomLevel !== this._zoomLevel) {
					if (null === this._zoomLevel) throw new TypeError('The current view is not zoomable');
					if (null === e.zoomLevel) throw new TypeError('The current view requires a zoom level');
					this._setLayoutToZoomLevel(e.zoomLevel);
				}
				this._goto(e.anchorPage, e.verticalOffset, e.horizontalOffset);
			}
			_setLayoutToZoomLevel(e) {
				(this.layout = new O(this._config, e)),
					(this._zoomLevel = e),
					o(this._documentElement, {
						style: {
							height: this.layout.dimensions.height + 'px',
							width: this.layout.dimensions.width + 'px'
						}
					}),
					this._viewport.setInnerDimensions(this.layout.dimensions);
			}
			adjust() {
				this._clearAnimation(),
					this._render(),
					this._hooks.onViewDidUpdate &&
						this._hooks.onViewDidUpdate(this._renderedPages.slice(), null);
			}
			_render() {
				const e = [];
				this.layout.pageGroups.forEach((t) => {
					if (!this._viewport.intersectsRegion(t.region)) return;
					const i = t.pages
						.filter(function (e) {
							return this.isPageVisible(e.index);
						}, this)
						.map((e) => e.index);
					e.push.apply(e, i);
				}, this),
					this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height),
					this._paintOutline(e),
					e.forEach((e) => {
						if (!this._compositeImages[e]) {
							const t = this.layout.getPageInfo(e),
								i = this._sourceResolver.getAllZoomLevelsForPage(t),
								s = new L(i);
							s.updateFromCache(this._cache), (this._compositeImages[e] = s);
						}
					}, this),
					this._initiateTileRequests(e);
				const t = Z(this._renderedPages || [], e);
				t.removed.forEach((e) => {
					delete this._compositeImages[e];
				}, this),
					(this._renderedPages = e),
					this._paint(),
					this._hooks.onPageWillLoad &&
						t.added.forEach((e) => {
							this._hooks.onPageWillLoad(e);
						}, this);
			}
			_paint() {
				j('Repainting');
				const e = [];
				this._renderedPages.forEach(function (t) {
					this._compositeImages[t].getTiles(this._zoomLevel).forEach((i) => {
						const s = B(i, this._zoomLevel);
						this._isTileVisible(t, s) &&
							(e.push(i.url), this._drawTile(t, s, this._cache.get(i.url)));
					}, this);
				}, this);
				const t = this._cache,
					i = Z(this._renderedTiles || [], e);
				i.added.forEach((e) => {
					t.acquire(e);
				}),
					i.removed.forEach((e) => {
						t.release(e);
					}),
					i.removed &&
						this._renderedPages.forEach((e) => {
							this._compositeImages[e].updateFromCache(this._cache);
						}, this),
					(this._renderedTiles = e);
			}
			_paintOutline(e) {
				e.forEach(function (e) {
					const t = this.layout.getPageInfo(e),
						i = this._getImageOffset(e),
						s = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2),
						n = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2),
						o = i.left - this._viewport.left + s,
						r = i.top - this._viewport.top + n,
						a = o < 0 ? -o : 0,
						l = r < 0 ? -r : 0,
						h = Math.max(0, o),
						c = Math.max(0, r),
						u = t.dimensions.width - a,
						d = t.dimensions.height - l;
					(this._ctx.strokeStyle = '#AAA'), this._ctx.strokeRect(h + 0.5, c + 0.5, u, d);
				}, this);
			}
			_initiateTileRequests(e) {
				const t = {},
					i = (e, i) => {
						const s = this._compositeImages[i];
						t[e.url] = new z({
							url: e.url,
							timeoutTime: R,
							load: (t) => {
								delete this._pendingRequests[e.url],
									this._cache.put(e.url, t),
									s === this._compositeImages[i]
										? (s.updateWithLoadedUrls([e.url]),
										  this._isTileForSourceVisible(i, e)
												? this._paint()
												: A('Page %s, tile %s no longer visible on image load', i, e.url))
										: this._isTileForSourceVisible(i, e)
										? this._paint()
										: A('Page %s, tile %s no longer visible on image load', i, e.url);
							},
							error: () => {
								delete this._pendingRequests[e.url];
							}
						});
					};
				for (let s = 0; s < e.length; s++) {
					const n = e[s],
						o = this._sourceResolver.getBestZoomLevelForPage(this.layout.getPageInfo(n)).tiles;
					for (let e = 0; e < o.length; e++) {
						const s = o[e];
						!this._cache.has(s.url) &&
							this._isTileForSourceVisible(n, s) &&
							(this._pendingRequests[s.url]
								? ((t[s.url] = this._pendingRequests[s.url]), delete this._pendingRequests[s.url])
								: i(s, n));
					}
				}
				for (const e in this._pendingRequests) this._pendingRequests[e].abort();
				this._pendingRequests = t;
			}
			_drawTile(e, t, i) {
				const s = this._getTileToDocumentOffset(e, t),
					n = Math.max(0, (this._viewport.width - this.layout.dimensions.width) / 2),
					o = Math.max(0, (this._viewport.height - this.layout.dimensions.height) / 2),
					r = s.left - this._viewport.left + n,
					a = s.top - this._viewport.top + o,
					l = r < 0 ? -r : 0,
					h = a < 0 ? -a : 0,
					c = l / t.scaleRatio,
					u = h / t.scaleRatio,
					d = Math.max(0, r),
					g = Math.max(0, a),
					v = Math.min(t.dimensions.width, i.width * t.scaleRatio) - l,
					p = Math.min(t.dimensions.height, i.height * t.scaleRatio) - h,
					f = v / t.scaleRatio,
					m = p / t.scaleRatio;
				A.enabled &&
					A(
						'Drawing page %s, tile %sx (%s, %s) from %s, %s to viewport at %s, %s, scale %s%%',
						e,
						t.sourceZoomLevel,
						t.row,
						t.col,
						c,
						u,
						d,
						g,
						Math.round(100 * t.scaleRatio)
					),
					this._ctx.drawImage(i, c, u, f, m, d, g, v, p);
			}
			_isTileForSourceVisible(e, t) {
				return this._isTileVisible(e, B(t, this._zoomLevel));
			}
			_isTileVisible(e, t) {
				const i = this._getTileToDocumentOffset(e, t);
				return this._viewport.intersectsRegion({
					top: i.top,
					bottom: i.top + t.dimensions.height,
					left: i.left,
					right: i.left + t.dimensions.width
				});
			}
			_getTileToDocumentOffset(e, t) {
				const i = this._getImageOffset(e);
				return { top: i.top + t.offset.top, left: i.left + t.offset.left };
			}
			_getImageOffset(e) {
				return this.layout.getPageOffset(e, { includePadding: !0 });
			}
			goto(e, t, i) {
				this._clearAnimation(),
					this._goto(e, t, i),
					this._hooks.onViewDidUpdate &&
						this._hooks.onViewDidUpdate(this._renderedPages.slice(), e);
			}
			_goto(e, t, i) {
				const s = this.layout.getPageOffset(e),
					n = s.top + t - parseInt(this._viewport.height / 2, 10),
					o = s.left + i - parseInt(this._viewport.width / 2, 10);
				(this._viewport.top = n), (this._viewport.left = o), this._render();
			}
			transitionViewportPosition(e) {
				this._clearAnimation();
				const t = e.getPosition,
					i = this._hooks.onViewDidTransition;
				this._animation = V.animate({
					duration: e.duration,
					parameters: e.parameters,
					onUpdate: (e) => {
						this._setViewportPosition(t(e)),
							this._hooks.onZoomLevelWillChange(e.zoomLevel),
							i && i();
					},
					onEnd: (t) => {
						e.onEnd && e.onEnd(t),
							this._hooks.onViewDidUpdate &&
								!t.interrupted &&
								this._hooks.onViewDidUpdate(this._renderedPages.slice(), null);
					}
				});
			}
			_clearAnimation() {
				this._animation && (this._animation.cancel(), (this._animation = null));
			}
			preload() {}
			isPageVisible(e) {
				if (!this.layout) return !1;
				return (
					!!this.layout.getPageInfo(e) &&
					this._viewport.intersectsRegion(this.layout.getPageRegion(e))
				);
			}
			getRenderedPages() {
				return this._renderedPages.slice();
			}
			destroy() {
				this._clearAnimation(),
					Object.keys(this._pendingRequests).forEach((e) => {
						const t = this._pendingRequests[e];
						delete this._pendingRequests[e], t.abort();
					}, this),
					this._canvas.parentNode.removeChild(this._canvas);
			}
		}
		function B(e, t) {
			let i;
			return (
				(i = null === t ? 1 : Math.pow(2, t - e.zoomLevel)),
				{
					sourceZoomLevel: e.zoomLevel,
					scaleRatio: i,
					row: e.row,
					col: e.col,
					dimensions: { width: e.dimensions.width * i, height: e.dimensions.height * i },
					offset: { left: e.offset.left * i, top: e.offset.top * i },
					url: e.url
				}
			);
		}
		function Z(e, t) {
			if (e === t) return { added: [], removed: [] };
			const i = e.filter((e) => -1 === t.indexOf(e));
			return { added: t.filter((t) => -1 === e.indexOf(t)), removed: i };
		}
		function G(e, t) {
			const i = t.getMaxPageDimensions(e);
			return { width: Math.floor(i.width), height: Math.floor(i.height) };
		}
		function N(e) {
			return (function (e) {
				const t = e.manifest,
					i = [];
				let s = null,
					n = [];
				const o = () => {
					for (let e = 0, t = n.length; e < t; e++) i.push([n[e]]);
					n = [];
				};
				t.pages.forEach((r, a) => {
					const l = { index: a, dimensions: G(a, t), paged: !t.paged || r.paged };
					(e.showNonPagedPages || l.paged) &&
						(l.paged
							? 0 === a || r.facingPages
								? (i.push([l]), o())
								: null === s
								? (s = l)
								: (i.push([s, l]), (s = null), o())
							: n.push(l));
				}),
					null !== s && (i.push([s]), o());
				return i;
			})(e).map((t) =>
				(function (e, t) {
					const i = e.verticallyOriented;
					if (2 === t.length)
						return (function (e, t, i) {
							const s = e.dimensions,
								n = t.dimensions,
								o = Math.max(s.height, n.height);
							let r, a, l;
							if (i) {
								const e = Math.max(s.width, n.width);
								(r = 2 * e), (a = e - s.width), (l = e);
							} else (r = s.width + n.width), (a = 0), (l = s.width);
							return {
								dimensions: { height: o, width: r },
								pages: [
									{ index: e.index, dimensions: s, groupOffset: { top: 0, left: a } },
									{ index: t.index, dimensions: n, groupOffset: { top: 0, left: l } }
								]
							};
						})(t[0], t[1], i);
					const s = t[0],
						n = s.dimensions;
					let o;
					o = s.paged ? (0 === s.index && i ? n.width : 0) : i ? n.width / 2 : 0;
					const r = i && !e.manifest.pages[s.index].facingPages;
					return {
						dimensions: { height: n.height, width: r ? 2 * n.width : n.width },
						pages: [{ index: s.index, groupOffset: { top: 0, left: o }, dimensions: n }]
					};
				})(e, t)
			);
		}
		function U(e) {
			const t = e.viewport.width,
				i = e.manifest,
				s = e.pagesPerRow,
				n = e.fixedHeightGrid,
				o = e.fixedPadding,
				r = e.showNonPagedPages,
				a = (t - o * (s + 1)) / s,
				l = a,
				h = n ? o + i.minRatio * a : o + i.maxRatio * a,
				c = [];
			let u = [];
			const d = { height: h, width: t };
			return (
				i.pages.forEach((e, t) => {
					if (!r && i.paged && !e.paged) return;
					const a = ((e) => {
						const t = e.d[e.d.length - 1],
							i = t.h / t.w;
						let s, r;
						return (
							n ? ((s = (h - o) / i), (r = h - o)) : (r = (s = l) * i),
							{ width: Math.round(s), height: Math.round(r) }
						);
					})(e);
					let g = Math.floor(u.length * (o + l) + o);
					n && (g += (l - a.width) / 2),
						u.push({ index: t, dimensions: a, groupOffset: { top: 0, left: g } }),
						u.length === s && (c.push({ dimensions: d, pages: u }), (u = []));
				}),
				u.length > 0 && c.push({ dimensions: d, pages: u }),
				c
			);
		}
		function W(e) {
			if (e.inGrid)
				return U(
					Y(e, [
						'manifest',
						'viewport',
						'pagesPerRow',
						'fixedHeightGrid',
						'fixedPadding',
						'showNonPagedPages'
					])
				);
			{
				const t = Y(e, ['manifest', 'verticallyOriented', 'showNonPagedPages']);
				return e.inBookLayout
					? N(t)
					: (function (e) {
							const t = e.manifest,
								i = [];
							return (
								t.pages.forEach((s, n) => {
									if (!e.showNonPagedPages && t.paged && !s.paged) return;
									const o = G(n, t);
									i.push({
										dimensions: o,
										pages: [{ index: n, groupOffset: { top: 0, left: 0 }, dimensions: o }]
									});
								}),
								i
							);
					  })(t);
			}
		}
		function Y(e, t) {
			const i = {};
			return (
				t.forEach(function (t) {
					i[t] = e[t];
				}),
				i
			);
		}
		function q(e) {
			const t = {};
			return (
				e.forEach((e) => {
					!(function (e, t) {
						Object.keys(t).forEach((i) => {
							Object.defineProperty(e, i, {
								get: () => t[i],
								set: () => {
									throw new TypeError('Cannot set settings.' + i);
								}
							});
						});
					})(t, e);
				}),
				t
			);
		}
		class X {
			constructor(e) {
				(this.whitelistedKeys = e.whitelistedKeys || []),
					(this.additionalProperties = e.additionalProperties || []),
					(this.validations = e.validations);
			}
			isValid(e, t, i) {
				let s = null;
				if ((this.validations.some((t, i) => t.key === e && ((s = i), !0)), null === s)) return !0;
				const n = {};
				n[e] = t;
				const o = K(i, n, this);
				return !this._runValidation(s, t, o);
			}
			validate(e) {
				this._validateOptions({}, e);
			}
			getValidatedOptions(e, t) {
				const i = Object.assign({}, t);
				return this._validateOptions(e, i), i;
			}
			_validateOptions(e, t) {
				const i = K(e, t, this);
				this._applyValidations(t, i);
			}
			_applyValidations(e, t) {
				this.validations.forEach((i, s) => {
					if (!e.hasOwnProperty(i.key)) return;
					const n = e[i.key],
						o = this._runValidation(s, n, t);
					o &&
						(o.warningSuppressed ||
							(function (e, t, i) {
								console.warn('Invalid value for ' + e + ': ' + t + '. Using ' + i + ' instead.');
							})(i.key, n, o.value),
						(e[i.key] = o.value));
				}, this);
			}
			_runValidation(e, t, i) {
				const s = this.validations[e];
				i.index = e;
				let n = !1;
				const o = {
						suppressWarning: () => {
							n = !0;
						}
					},
					r = s.validate(t, i.proxy, o);
				return void 0 === r || r === t ? null : { value: r, warningSuppressed: n };
			}
		}
		function K(e, t, i) {
			const s = { proxy: {}, index: null },
				n = function (e, t, i) {
					if (i in t) return t[i];
					return e[i];
				}.bind(null, e, t),
				o = {};
			return (
				i.whitelistedKeys.forEach((e) => {
					o[e] = { get: n.bind(null, e) };
				}),
				i.additionalProperties.forEach((e) => {
					o[e.key] = { get: e.get };
				}),
				i.validations.forEach((e, t) => {
					o[e.key] = {
						get: () => {
							if (t < s.index) return n(e.key);
							const o = i.validations[s.index].key;
							throw new TypeError('Cannot access setting ' + e.key + ' while validating ' + o);
						}
					};
				}),
				Object.defineProperties(s.proxy, o),
				s
			);
		}
		class $ {
			constructor(e, t) {
				(t = t || {}),
					(this.intersectionTolerance = t.intersectionTolerance || 0),
					(this.outer = e),
					(this._top = this._left = this._width = this._height = this._innerDimensions = null),
					this.invalidate();
			}
			intersectsRegion(e) {
				return this.hasHorizontalOverlap(e) && this.hasVerticalOverlap(e);
			}
			hasVerticalOverlap(e) {
				const t = this.top - this.intersectionTolerance,
					i = this.bottom + this.intersectionTolerance;
				return ee(e.top, t, i) || ee(e.bottom, t, i) || (e.top <= t && e.bottom >= i);
			}
			hasHorizontalOverlap(e) {
				const t = this.left - this.intersectionTolerance,
					i = this.right + this.intersectionTolerance;
				return ee(e.left, t, i) || ee(e.right, t, i) || (e.left <= t && e.right >= i);
			}
			invalidate() {
				(this._width = this.outer.clientWidth),
					(this._height = this.outer.clientHeight),
					(this._top = this.outer.scrollTop),
					(this._left = this.outer.scrollLeft);
			}
			setInnerDimensions(e) {
				(this._innerDimensions = e),
					e &&
						((this._top = te(this._top, 0, e.height - this._height)),
						(this._left = te(this._left, 0, e.width - this._width)));
			}
		}
		function J(e, t) {
			const i = '_' + e,
				s = 'scroll' + e.charAt(0).toUpperCase() + e.slice(1);
			return {
				get: function () {
					return this[i];
				},
				set: function (e) {
					let n;
					if (this._innerDimensions) {
						n = te(e, 0, this._innerDimensions[t] - this[t]);
					} else n = ie(e, 0);
					this[i] = this.outer[s] = n;
				}
			};
		}
		function Q(e) {
			return {
				get: function () {
					return this['_' + e];
				}
			};
		}
		function ee(e, t, i) {
			return e >= t && e <= i;
		}
		function te(e, t, i) {
			return ie(
				(function (e, t) {
					return Math.min(e, t);
				})(e, i),
				t
			);
		}
		function ie(e, t) {
			return Math.max(e, t);
		}
		Object.defineProperties($.prototype, {
			top: J('top', 'height'),
			left: J('left', 'width'),
			width: Q('width'),
			height: Q('height'),
			bottom: {
				get: function () {
					return this._top + this._height;
				}
			},
			right: {
				get: function () {
					return this._left + this._width;
				}
			}
		});
		const se = i(0)('diva:ViewerCore');
		function ne() {
			return ne.counter++;
		}
		ne.counter = 1;
		const oe = [
			{
				key: 'goDirectlyTo',
				validate: (e, t) => {
					if (e < 0 || e >= t.manifest.pages.length) return 0;
				}
			},
			{ key: 'minPagesPerRow', validate: (e) => Math.max(2, e) },
			{ key: 'maxPagesPerRow', validate: (e, t) => Math.max(e, t.minPagesPerRow) },
			{
				key: 'pagesPerRow',
				validate: (e, t) => {
					if (e < t.minPagesPerRow || e > t.maxPagesPerRow) return t.maxPagesPerRow;
				}
			},
			{
				key: 'maxZoomLevel',
				validate: (e, t, i) => {
					if ((i.suppressWarning(), e < 0 || e > t.manifest.maxZoom)) return t.manifest.maxZoom;
				}
			},
			{
				key: 'minZoomLevel',
				validate: (e, t, i) =>
					e > t.manifest.maxZoom
						? (i.suppressWarning(), 0)
						: e < 0 || e > t.maxZoomLevel
						? 0
						: void 0
			},
			{
				key: 'zoomLevel',
				validate: (e, t, i) =>
					e > t.manifest.maxZoom
						? (i.suppressWarning(), 0)
						: e < t.minZoomLevel || e > t.maxZoomLevel
						? t.minZoomLevel
						: void 0
			}
		];
		class re {
			constructor(e, t, i) {
				(this.parentObject = e),
					(this.publicInstance = i),
					(this.viewerState = {
						currentPageIndices: [0],
						activePageIndex: 0,
						horizontalOffset: 0,
						horizontalPadding: 0,
						ID: null,
						initialKeyScroll: !1,
						initialSpaceScroll: !1,
						innerElement: null,
						innerObject: {},
						isActiveDiva: !0,
						isScrollable: !0,
						isZooming: !1,
						loaded: !1,
						manifest: null,
						mobileWebkit: !1,
						numPages: 0,
						oldZoomLevel: -1,
						options: t,
						outerElement: null,
						outerObject: {},
						pageOverlays: new S(),
						pageTools: [],
						parentObject: this.parentObject,
						pendingManifestRequest: null,
						pluginInstances: [],
						renderer: null,
						resizeTimer: -1,
						scrollbarWidth: 0,
						selector: '',
						throbberTimeoutID: -1,
						toolbar: null,
						verticalOffset: 0,
						verticalPadding: 0,
						viewHandler: null,
						viewport: null,
						viewportElement: null,
						viewportObject: null,
						zoomDuration: 400
					}),
					(this.settings = q([t, this.viewerState]));
				const n = ne();
				(this.viewerState.ID = 'diva-' + n + '-'),
					(this.viewerState.selector = this.settings.ID),
					Object.defineProperties(this.settings, {
						panelHeight: { get: () => this.viewerState.viewport.height },
						panelWidth: { get: () => this.viewerState.viewport.width }
					}),
					(this.optionsValidator = new X({
						additionalProperties: [{ key: 'manifest', get: () => this.viewerState.manifest }],
						validations: oe
					})),
					(this.viewerState.scrollbarWidth = (function () {
						let e = document.createElement('p');
						(e.style.width = '100%'), (e.style.height = '200px');
						let t = document.createElement('div');
						(t.style.position = 'absolute'),
							(t.style.top = '0px'),
							(t.style.left = '0px'),
							(t.style.visibility = 'hidden'),
							(t.style.width = '200px'),
							(t.style.height = '150px'),
							(t.style.overflow = 'hidden'),
							t.appendChild(e),
							document.body.appendChild(t);
						let i = e.offsetWidth;
						t.style.overflow = 'scroll';
						let s = e.offsetWidth;
						return i === s && (s = t.clientWidth), document.body.removeChild(t), i - s;
					})()),
					(this.viewerState.mobileWebkit = void 0 !== window.orientation),
					null === t.hashParamSuffix && (t.hashParamSuffix = 1 === n ? '' : n + '');
				const o = s('div', this.elemAttrs('inner', { class: 'diva-inner' })),
					r = s('div', this.elemAttrs('viewport'), o),
					a = s(
						'div',
						this.elemAttrs('outer'),
						r,
						s('div', this.elemAttrs('throbber'), [
							s('div', { class: 'cube cube1' }),
							s('div', { class: 'cube cube2' }),
							s('div', { class: 'cube cube3' }),
							s('div', { class: 'cube cube4' }),
							s('div', { class: 'cube cube5' }),
							s('div', { class: 'cube cube6' }),
							s('div', { class: 'cube cube7' }),
							s('div', { class: 'cube cube8' }),
							s('div', { class: 'cube cube9' })
						])
					);
				(this.viewerState.innerElement = o),
					(this.viewerState.viewportElement = r),
					(this.viewerState.outerElement = a),
					(this.viewerState.innerObject = o),
					(this.viewerState.viewportObject = r),
					(this.viewerState.outerObject = a),
					this.settings.parentObject.append(a),
					(this.viewerState.viewport = new $(this.viewerState.viewportElement, {
						intersectionTolerance: this.settings.viewportMargin
					})),
					(this.boundScrollFunction = this.scrollFunction.bind(this)),
					(this.boundEscapeListener = this.escapeListener.bind(this)),
					this.initPlugins(),
					this.handleEvents(),
					this.showThrobber();
			}
			isValidOption(e, t) {
				return this.optionsValidator.isValid(e, t, this.viewerState.options);
			}
			elemAttrs(e, t) {
				const i = { id: this.settings.ID + e, class: 'diva-' + e };
				return t ? Object.assign(i, t) : i;
			}
			getPageData(e, t) {
				return this.settings.manifest.pages[e].d[this.settings.zoomLevel][t];
			}
			clearViewer() {
				(this.viewerState.viewport.top = 0), clearTimeout(this.viewerState.resizeTimer);
			}
			hasChangedOption(e, t) {
				return t in e && e[t] !== this.settings[t];
			}
			escapeListener(e) {
				27 === e.keyCode && this.publicInstance.leaveFullscreenMode();
			}
			reloadViewer(e) {
				const t = [];
				if (
					((e = this.optionsValidator.getValidatedOptions(this.settings, e)),
					this.hasChangedOption(e, 'zoomLevel') &&
						((this.viewerState.oldZoomLevel = this.settings.zoomLevel),
						(this.viewerState.options.zoomLevel = e.zoomLevel),
						t.push(['ZoomLevelDidChange', e.zoomLevel])),
					this.hasChangedOption(e, 'pagesPerRow') &&
						((this.viewerState.options.pagesPerRow = e.pagesPerRow),
						t.push(['GridRowNumberDidChange', e.pagesPerRow])),
					this.hasChangedOption(e, 'verticallyOriented') &&
						(this.viewerState.options.verticallyOriented = e.verticallyOriented),
					this.hasChangedOption(e, 'showNonPagedPages') &&
						(this.viewerState.options.showNonPagedPages = e.showNonPagedPages),
					'goDirectlyTo' in e
						? ((this.viewerState.options.goDirectlyTo = e.goDirectlyTo),
						  'verticalOffset' in e && (this.viewerState.verticalOffset = e.verticalOffset),
						  'horizontalOffset' in e && (this.viewerState.horizontalOffset = e.horizontalOffset))
						: (this.viewerState.options.goDirectlyTo = this.settings.activePageIndex),
					(this.hasChangedOption(e, 'inGrid') || this.hasChangedOption(e, 'inBookLayout')) &&
						('inGrid' in e && (this.viewerState.options.inGrid = e.inGrid),
						'inBookLayout' in e && (this.viewerState.options.inBookLayout = e.inBookLayout),
						t.push(['ViewDidSwitch', this.settings.inGrid])),
					this.hasChangedOption(e, 'inFullscreen') &&
						((this.viewerState.options.inFullscreen = e.inFullscreen),
						this.prepareModeChange(e),
						t.push(['ModeDidSwitch', this.settings.inFullscreen])),
					this.clearViewer(),
					this.updateViewHandlerAndRendering(),
					this.viewerState.renderer)
				) {
					const e = {
							pageLayouts: W(this.settings),
							padding: this.getPadding(),
							maxZoomLevel: this.settings.inGrid ? null : this.viewerState.manifest.maxZoom,
							verticallyOriented: this.settings.verticallyOriented || this.settings.inGrid
						},
						t = {
							zoomLevel: this.settings.inGrid ? null : this.settings.zoomLevel,
							anchorPage: this.settings.goDirectlyTo,
							verticalOffset: this.viewerState.verticalOffset,
							horizontalOffset: this.viewerState.horizontalOffset
						},
						i = this.getCurrentSourceProvider();
					if (se.enabled) {
						const t = Object.keys(e)
							.filter(function (e) {
								return 'pageLayouts' !== e && 'padding' !== e;
							})
							.map(function (t) {
								const i = e[t];
								return t + ': ' + JSON.stringify(i);
							})
							.join(', ');
						se('reload with %s', t);
					}
					this.viewerState.renderer.load(e, t, i);
				}
				return (
					t.forEach((e) => {
						this.publish.apply(this, e);
					}),
					!0
				);
			}
			prepareModeChange(e) {
				const t = e.inFullscreen ? 'add' : 'remove';
				this.viewerState.outerObject.classList[t]('diva-fullscreen'),
					document.body.classList[t]('diva-hide-scrollbar'),
					this.settings.parentObject.classList[t]('diva-full-width');
				const i = this.settings.panelHeight,
					s = this.settings.panelWidth;
				if (
					(this.viewerState.viewport.invalidate(),
					!(this.viewerState.loaded || this.settings.inGrid || 'verticalOffset' in e))
				) {
					const e = this.settings.panelHeight,
						t = this.settings.panelWidth;
					(this.viewerState.verticalOffset += (i - e) / 2),
						(this.viewerState.horizontalOffset += (s - t) / 2);
				}
				e.inFullscreen
					? document.addEventListener('keyup', this.boundEscapeListener)
					: document.removeEventListener('keyup', this.boundEscapeListener);
			}
			updateViewHandlerAndRendering() {
				const e = this.settings.inGrid ? P : _;
				!this.viewerState.viewHandler ||
					this.viewerState.viewHandler instanceof e ||
					(this.viewerState.viewHandler.destroy(), (this.viewerState.viewHandler = null)),
					this.viewerState.viewHandler || (this.viewerState.viewHandler = new e(this)),
					this.viewerState.renderer || this.initializeRenderer();
			}
			initializeRenderer() {
				const e = H.getCompatibilityErrors();
				if (e) this.showError(e);
				else {
					const e = {
							viewport: this.viewerState.viewport,
							outerElement: this.viewerState.outerElement,
							innerElement: this.viewerState.innerElement
						},
						t = {
							onViewWillLoad: () => {
								this.viewerState.viewHandler.onViewWillLoad();
							},
							onViewDidLoad: () => {
								this.updatePageOverlays(), this.viewerState.viewHandler.onViewDidLoad();
							},
							onViewDidUpdate: (e, t) => {
								this.updatePageOverlays(), this.viewerState.viewHandler.onViewDidUpdate(e, t);
							},
							onViewDidTransition: () => {
								this.updatePageOverlays();
							},
							onPageWillLoad: (e) => {
								this.publish('PageWillLoad', e);
							},
							onZoomLevelWillChange: (e) => {
								this.publish('ZoomLevelWillChange', e);
							}
						};
					this.viewerState.renderer = new H(e, t);
				}
			}
			getCurrentSourceProvider() {
				if (this.settings.inGrid) {
					const e = {
						getAllZoomLevelsForPage: (t) => [e.getBestZoomLevelForPage(t)],
						getBestZoomLevelForPage: (e) => {
							return {
								zoomLevel: 1,
								rows: 1,
								cols: 1,
								tiles: [
									{
										url: this.settings.manifest.getPageImageURL(e.index, {
											width: e.dimensions.width
										}),
										zoomLevel: 1,
										row: 0,
										col: 0,
										dimensions: e.dimensions,
										offset: { top: 0, left: 0 }
									}
								]
							};
						}
					};
					return e;
				}
				const e = { width: this.settings.tileWidth, height: this.settings.tileHeight };
				return {
					getBestZoomLevelForPage: (t) =>
						this.settings.manifest.getPageImageTiles(
							t.index,
							Math.ceil(this.settings.zoomLevel),
							e
						),
					getAllZoomLevelsForPage: (t) => {
						const i = [],
							s = this.viewerState.manifest.maxZoom;
						for (let n = 0; n <= s; n++)
							i.push(this.settings.manifest.getPageImageTiles(t.index, n, e));
						return i.reverse(), i;
					}
				};
			}
			getPadding() {
				let e, t, i, s;
				return (
					this.settings.inGrid
						? ((i = this.settings.fixedPadding), (e = t = s = 0))
						: ((e = this.settings.verticallyOriented ? this.viewerState.verticalPadding : 0),
						  (t = this.settings.verticallyOriented ? 0 : this.viewerState.horizontalPadding),
						  (i = this.settings.verticallyOriented ? 0 : this.viewerState.verticalPadding),
						  (s = this.settings.verticallyOriented ? this.viewerState.horizontalPadding : 0)),
					{
						document: { top: i, bottom: i, left: s, right: s },
						page: { top: e, bottom: 0, left: t, right: 0 }
					}
				);
			}
			updatePageOverlays() {
				this.viewerState.pageOverlays.updateOverlays(this.viewerState.renderer.getRenderedPages());
			}
			handleZoom(e, t) {
				if (!this.isValidOption('zoomLevel', e)) return !1;
				if (
					(this.viewerState.viewportObject.removeEventListener('scroll', this.boundScrollFunction),
					!t)
				) {
					const e = this.viewerState.viewport,
						i = this.viewerState.renderer.layout.getPageRegion(this.settings.activePageIndex);
					t = {
						anchorPage: this.settings.activePageIndex,
						offset: { left: e.width / 2 - (i.left - e.left), top: e.height / 2 - (i.top - e.top) }
					};
				}
				const i = this.viewerState.renderer.layout.getPageRegion(t.anchorPage),
					s =
						i.left +
						t.offset.left -
						(this.settings.viewport.left + this.settings.viewport.width / 2),
					n =
						i.top + t.offset.top - (this.settings.viewport.top + this.settings.viewport.height / 2),
					o = function (e, i) {
						const o = Math.pow(2, e - i),
							r = t.offset.left * o - s,
							a = t.offset.top * o - n;
						return {
							zoomLevel: e,
							anchorPage: t.anchorPage,
							verticalOffset: a,
							horizontalOffset: r
						};
					};
				this.viewerState.options.zoomLevel = e;
				let r = this.viewerState.oldZoomLevel;
				this.viewerState.oldZoomLevel = this.settings.zoomLevel;
				const a = o(e, r);
				(this.viewerState.options.goDirectlyTo = a.anchorPage),
					(this.viewerState.verticalOffset = a.verticalOffset),
					(this.viewerState.horizontalOffset = a.horizontalOffset),
					this.viewerState.renderer.transitionViewportPosition({
						duration: this.settings.zoomDuration,
						parameters: { zoomLevel: { from: r, to: e } },
						getPosition: (e) => o(e.zoomLevel, r),
						onEnd: (t) => {
							this.viewerState.viewportObject.addEventListener('scroll', this.boundScrollFunction),
								t.interrupted && (this.viewerState.oldZoomLevel = e);
						}
					});
				let l = document.getElementById(this.settings.selector + 'zoom-in-button'),
					h = document.getElementById(this.settings.selector + 'zoom-out-button');
				return (
					(l.disabled = !0),
					(h.disabled = !0),
					setTimeout(() => {
						(l.disabled = !1), (h.disabled = !1);
					}, this.settings.zoomDuration),
					this.publish('ZoomLevelDidChange', e),
					!0
				);
			}
			getYOffset(e, t) {
				let i = void 0 === e ? this.settings.activePageIndex : e;
				return 'center' === t || 'centre' === t
					? parseInt(this.getPageData(i, 'h') / 2, 10)
					: 'bottom' === t
					? parseInt(this.getPageData(i, 'h') - this.settings.panelHeight / 2, 10)
					: parseInt(this.settings.panelHeight / 2, 10);
			}
			getXOffset(e, t) {
				let i = void 0 === e ? this.settings.activePageIndex : e;
				return 'left' === t
					? parseInt(this.settings.panelWidth / 2, 10)
					: 'right' === t
					? parseInt(this.getPageData(i, 'w') - this.settings.panelWidth / 2, 10)
					: parseInt(this.getPageData(i, 'w') / 2, 10);
			}
			updatePanelSize() {
				return (
					this.viewerState.viewport.invalidate(),
					this.viewerState.renderer &&
						(this.updateOffsets(),
						this.viewerState.renderer.goto(
							this.settings.activePageIndex,
							this.viewerState.verticalOffset,
							this.viewerState.horizontalOffset
						)),
					!0
				);
			}
			updateOffsets() {
				const e = this.viewerState.renderer.layout.getPageToViewportCenterOffset(
					this.settings.activePageIndex,
					this.viewerState.viewport
				);
				e && ((this.viewerState.horizontalOffset = e.x), (this.viewerState.verticalOffset = e.y));
			}
			bindMouseEvents() {
				this.viewerState.viewportObject.classList.add('dragscroll'),
					u.onDoubleClick(this.viewerState.viewportObject, (e, t) => {
						se('Double click at %s, %s', t.left, t.top),
							this.viewerState.viewHandler.onDoubleClick(e, t);
					});
			}
			onResize() {
				this.updatePanelSize(),
					clearTimeout(this.viewerState.resizeTimer),
					(this.viewerState.resizeTimer = setTimeout(() => {
						const e = this.viewerState.renderer.layout.getPageToViewportCenterOffset(
							this.settings.activePageIndex,
							this.viewerState.viewport
						);
						e
							? this.reloadViewer({
									goDirectlyTo: this.settings.activePageIndex,
									verticalOffset: e.y,
									horizontalOffset: e.x
							  })
							: this.reloadViewer({ goDirectlyTo: this.settings.activePageIndex });
					}, 200));
			}
			bindTouchEvents() {
				this.settings.blockMobileMove &&
					document.body.addEventListener('touchmove', (e) => {
						return e.originalEvent.preventDefault(), !1;
					}),
					u.onPinch(this.viewerState.viewportObject, function (e, t, i, s) {
						se('Pinch %s at %s, %s', s - i, t.left, t.top),
							this.viewerState.viewHandler.onPinch(e, t, i, s);
					}),
					u.onDoubleTap(this.viewerState.viewportObject, function (e, t) {
						se('Double tap at %s, %s', t.left, t.top),
							this.viewerState.viewHandler.onDoubleClick(e, t);
					});
			}
			scrollFunction() {
				const e = this.viewerState.viewport.top,
					t = this.viewerState.viewport.left;
				let i;
				this.viewerState.viewport.invalidate();
				const s = this.viewerState.viewport.top,
					n = this.viewerState.viewport.left;
				(i = this.settings.verticallyOriented || this.settings.inGrid ? s - e : n - t),
					this.viewerState.renderer.adjust();
				const o = this.settings.verticallyOriented || this.settings.inGrid ? s : n;
				this.publish('ViewerDidScroll', o),
					i > 0
						? this.publish('ViewerDidScrollDown', o)
						: i < 0 && this.publish('ViewerDidScrollUp', o),
					this.updateOffsets();
			}
			handleEvents() {
				this.viewerState.innerObject.addEventListener('mousedown', () => {
					this.viewerState.innerObject.classList.add('diva-grabbing');
				}),
					this.viewerState.innerObject.addEventListener('mouseup', () => {
						this.viewerState.innerObject.classList.remove('diva-grabbing');
					}),
					this.bindMouseEvents(),
					this.viewerState.viewportObject.addEventListener('scroll', this.boundScrollFunction);
				document.addEventListener('keydown.diva', (e) => {
					if (!this.viewerState.isActiveDiva) return !0;
					if (
						(this.settings.enableSpaceScroll && !e.shiftKey && 32 === e.keyCode) ||
						(this.settings.enableKeyScroll && 34 === e.keyCode)
					)
						return (this.viewerState.viewport.top += this.settings.panelHeight), !1;
					if (
						(this.settings.enableSpaceScroll || 32 !== e.keyCode || e.preventDefault(),
						this.settings.enableKeyScroll)
					) {
						if (e.shiftKey || e.ctrlKey || e.metaKey) return !0;
						switch (e.keyCode) {
							case 33:
								return (this.viewerState.viewport.top -= this.settings.panelHeight), !1;
							case 38:
								return (this.viewerState.viewport.top -= this.settings.arrowScrollAmount), !1;
							case 40:
								return (this.viewerState.viewport.top += this.settings.arrowScrollAmount), !1;
							case 37:
								return (this.viewerState.viewport.left -= this.settings.arrowScrollAmount), !1;
							case 39:
								return (this.viewerState.viewport.left += this.settings.arrowScrollAmount), !1;
							case 36:
								return (this.viewerState.viewport.top = 0), !1;
							case 35:
								return (
									this.settings.verticallyOriented
										? (this.viewerState.viewport.top = 1 / 0)
										: (this.viewerState.viewport.left = 1 / 0),
									!1
								);
							default:
								return !0;
						}
					}
					return !0;
				}),
					c.Events.subscribe(
						'ViewerDidTerminate',
						function () {
							document.removeEventListener('keydown.diva');
						},
						this.settings.ID
					),
					window.addEventListener('resize', this.onResize.bind(this), !1),
					c.Events.subscribe(
						'ViewerDidTerminate',
						function () {
							window.removeEventListener('resize', this.onResize, !1);
						},
						this.settings.ID
					),
					'onorientationchange' in window &&
						(window.addEventListener('orientationchange', this.onResize, !1),
						c.Events.subscribe(
							'ViewerDidTerminate',
							function () {
								window.removeEventListener('orientationchange', this.onResize, !1);
							},
							this.settings.ID
						)),
					c.Events.subscribe('PanelSizeDidChange', this.updatePanelSize, this.settings.ID),
					c.Events.subscribe(
						'ViewerDidTerminate',
						() => {
							this.viewerState.renderer && this.viewerState.renderer.destroy(),
								clearTimeout(this.viewerState.resizeTimer);
						},
						this.settings.ID
					);
			}
			initPlugins() {
				if (!this.settings.hasOwnProperty('plugins')) return null;
				this.viewerState.pluginInstances = this.settings.plugins.map((e) => {
					const t = new e(this);
					return t.isPageTool && this.viewerState.pageTools.push(t), t;
				});
			}
			showThrobber() {
				this.hideThrobber(),
					(this.viewerState.throbberTimeoutID = setTimeout(() => {
						let e = document.getElementById(this.settings.selector + 'throbber');
						e && (e.style.display = 'block');
					}, this.settings.throbberTimeout));
			}
			hideThrobber() {
				clearTimeout(this.viewerState.throbberTimeoutID);
				let e = document.getElementById(this.settings.selector + 'throbber');
				e && (e.style.display = 'none');
			}
			showError(e) {
				const t = s('div', this.elemAttrs('error'), [
					s('button', this.elemAttrs('error-close', { 'aria-label': 'Close dialog' })),
					s('p', s('strong', 'Error')),
					s('div', e)
				]);
				this.viewerState.outerObject.appendChild(t),
					document
						.querySelector(this.settings.selector + 'error-close')
						.addEventListener('click', () => {
							t.parentNode.removeChild(t);
						});
			}
			setManifest(e, t) {
				if (
					((this.viewerState.manifest = e),
					this.hideThrobber(),
					(this.viewerState.numPages = this.settings.manifest.pages.length),
					this.optionsValidator.validate(this.viewerState.options),
					this.publish('NumberOfPagesDidChange', this.settings.numPages),
					this.settings.enableAutoTitle)
				) {
					let e = document.getElementById(this.settings.selector + 'title');
					e
						? (e.innerHTML = this.settings.manifest.itemTitle)
						: this.settings.parentObject.insertBefore(
								s('div', this.elemAttrs('title'), [this.settings.manifest.itemTitle]),
								this.settings.parentObject.firstChild
						  );
				}
				if (this.settings.adaptivePadding > 0) {
					const e = Math.floor((this.settings.minZoomLevel + this.settings.maxZoomLevel) / 2);
					(this.viewerState.horizontalPadding = parseInt(
						this.settings.manifest.getAverageWidth(e) * this.settings.adaptivePadding,
						10
					)),
						(this.viewerState.verticalPadding = parseInt(
							this.settings.manifest.getAverageHeight(e) * this.settings.adaptivePadding,
							10
						));
				} else
					(this.viewerState.horizontalPadding = this.settings.fixedPadding),
						(this.viewerState.verticalPadding = this.settings.fixedPadding);
				let i, n;
				this.viewerState.pageTools.length &&
					(this.viewerState.verticalPadding = Math.max(40, this.viewerState.verticalPadding)),
					this.settings.manifest.paged && (this.viewerState.options.inBookLayout = !0),
					this.publish('ObjectDidLoad', this.settings),
					this.updatePanelSize();
				let o = !1,
					r = !1;
				null == t.goDirectlyTo
					? ((t.goDirectlyTo = this.settings.goDirectlyTo), (i = n = !0))
					: ((i = null == t.horizontalOffset || isNaN(t.horizontalOffset)),
					  (n = null == t.verticalOffset || isNaN(t.verticalOffset))),
					i &&
						(0 === t.goDirectlyTo && this.settings.inBookLayout && this.settings.verticallyOriented
							? (t.horizontalOffset = this.viewerState.horizontalPadding)
							: ((r = !0), (t.horizontalOffset = this.getXOffset(t.goDirectlyTo, 'center')))),
					n && ((o = !0), (t.verticalOffset = this.getYOffset(t.goDirectlyTo, 'top'))),
					this.reloadViewer(t),
					this.updatePanelSize(),
					this.settings.verticallyOriented
						? (this.viewerState.innerElement.style.minWidth = this.settings.panelWidth + 'px')
						: (this.viewerState.innerElement.style.minHeight = this.settings.panelHeight + 'px'),
					(o || r) &&
						(o &&
							(this.viewerState.verticalOffset = this.getYOffset(
								this.settings.activePageIndex,
								'top'
							)),
						r &&
							(this.viewerState.horizontalOffset = this.getXOffset(
								this.settings.activePageIndex,
								'center'
							)),
						this.viewerState.renderer.goto(
							this.settings.activePageIndex,
							this.viewerState.verticalOffset,
							this.viewerState.horizontalOffset
						)),
					(this.viewerState.loaded = !0),
					this.publish('ViewerDidLoad', this.settings);
			}
			publish(e) {
				const t = Array.prototype.slice.call(arguments, 1);
				c.Events.publish(e, t, this.publicInstance);
			}
			getSettings() {
				return this.settings;
			}
			getInternalState() {
				return this.viewerState;
			}
			getPublicInstance() {
				return this.publicInstance;
			}
			getPageTools() {
				return this.viewerState.pageTools;
			}
			getCurrentLayout() {
				return this.viewerState.renderer ? this.viewerState.renderer.layout : null;
			}
			getViewport() {
				const e = this.viewerState.viewport;
				return {
					top: e.top,
					left: e.left,
					bottom: e.bottom,
					right: e.right,
					width: e.width,
					height: e.height
				};
			}
			addPageOverlay(e) {
				this.viewerState.pageOverlays.addOverlay(e);
			}
			removePageOverlay(e) {
				this.viewerState.pageOverlays.removeOverlay(e);
			}
			getPageRegion(e, t) {
				const i = this.viewerState.renderer.layout,
					s = i.getPageRegion(e, t);
				if (t && t.incorporateViewport) {
					const e = this.settings.verticallyOriented ? 'width' : 'height';
					if (this.viewerState.viewport[e] > i.dimensions[e]) {
						const t = (this.viewerState.viewport[e] - i.dimensions[e]) / 2;
						return this.settings.verticallyOriented
							? { top: s.top, bottom: s.bottom, left: s.left + t, right: s.right + t }
							: { top: s.top + t, bottom: s.bottom + t, left: s.left, right: s.right };
					}
				}
				return s;
			}
			getPagePositionAtViewportOffset(e) {
				const t = e.left + this.viewerState.viewport.left,
					i = e.top + this.viewerState.viewport.top,
					s = this.viewerState.renderer.getRenderedPages(),
					n = s.length;
				for (let e = 0; e < n; e++) {
					const n = s[e],
						o = this.viewerState.renderer.layout.getPageRegion(n);
					if (o.left <= t && o.right >= t && o.top <= i && o.bottom >= i)
						return { anchorPage: n, offset: { left: t - o.left, top: i - o.top } };
				}
				const o = this.viewerState.renderer.layout.getPageRegion(this.settings.activePageIndex);
				return {
					anchorPage: this.settings.activePageIndex,
					offset: { left: t - o.left, top: i - o.top }
				};
			}
			setCurrentPages(e, t) {
				(function (e, t) {
					if (e.length !== t.length) return !1;
					for (let i = 0, s = e.length; i < s; i++) if (e[i] !== t[i]) return !1;
					return !0;
				})(this.viewerState.currentPageIndices, t) ||
					((this.viewerState.currentPageIndices = t),
					(this.viewerState.activePageIndex = e),
					this.publish('VisiblePageDidChange', t),
					this.viewerState.manifest.pages[e].otherImages.length > 0 &&
						this.publish('VisiblePageHasAlternateViews', e));
			}
			getPageName(e) {
				return this.viewerState.manifest.pages[e].f;
			}
			reload(e) {
				this.reloadViewer(e);
			}
			zoom(e, t) {
				return this.handleZoom(e, t);
			}
			enableScrollable() {
				this.viewerState.isScrollable ||
					(this.bindMouseEvents(),
					this.enableDragScrollable(),
					(this.viewerState.options.enableKeyScroll = this.viewerState.initialKeyScroll),
					(this.viewerState.options.enableSpaceScroll = this.viewerState.initialSpaceScroll),
					(this.viewerState.viewportElement.style.overflow = 'auto'),
					(this.viewerState.isScrollable = !0));
			}
			enableDragScrollable() {
				this.viewerState.viewportObject.hasAttribute('nochilddrag') &&
					this.viewerState.viewportObject.removeAttribute('nochilddrag');
			}
			disableScrollable() {
				this.viewerState.isScrollable &&
					(this.disableDragScrollable(),
					(this.viewerState.outerObject.dblclick = null),
					(this.viewerState.outerObject.contextmenu = null),
					(this.viewerState.viewportElement.style.overflow = 'hidden'),
					(this.viewerState.initialKeyScroll = this.settings.enableKeyScroll),
					(this.viewerState.initialSpaceScroll = this.settings.enableSpaceScroll),
					(this.viewerState.options.enableKeyScroll = !1),
					(this.viewerState.options.enableSpaceScroll = !1),
					(this.viewerState.isScrollable = !1));
			}
			disableDragScrollable() {
				this.viewerState.viewportObject.hasAttribute('nochilddrag') ||
					this.viewerState.viewportObject.setAttribute('nochilddrag', '');
			}
			clear() {
				this.clearViewer();
			}
			setPendingManifestRequest(e) {
				this.viewerState.pendingManifestRequest = e;
			}
			destroy() {
				this.publish('ViewerWillTerminate', this.settings),
					this.settings.pendingManifestRequest && this.settings.pendingManifestRequest.abort(),
					document.body.removeClass('diva-hide-scrollbar'),
					this.settings.parentObject.parent().empty().removeData('diva'),
					this.settings.parentObject.parent().removeAttr('style').removeAttr('class'),
					this.publish('ViewerDidTerminate', this.settings),
					c.Events.unsubscribeAll(this.settings.ID);
			}
		}
		const ae = (e, t) => {
				const i = Math.max(e, t);
				return i < 128 ? 0 : Math.ceil(Math.log((i + 1) / 257) / Math.log(2));
			},
			le = (e, t) => e / Math.pow(2, t),
			he = (e, t) =>
				e.map((e) => {
					const i = e.width,
						s = e.height,
						n = de(e),
						o = '/' !== n.url.slice(-1) ? n.url + '/' : n.url,
						r = new Array(t + 1);
					for (let e = 0; e < t + 1; e++)
						r[e] = { h: Math.floor(le(s, t - e)), w: Math.floor(le(i, t - e)) };
					return { f: n.url, url: o, il: e.label || '', d: r };
				}),
			ce = (e) =>
				'http://iiif.io/api/presentation/2/context.json' === e
					? 2
					: Array.isArray(e) && e.includes('http://iiif.io/api/presentation/2/context.json')
					? 2
					: Array.isArray(e) && e.includes('http://iiif.io/api/presentation/3/context.json')
					? 3
					: 2;
		function ue(e) {
			let t = e['@context'];
			if (!t) return console.error('Invalid IIIF Manifest; No @context found.'), null;
			const i = ce(t),
				s = e.sequences ? e.sequences[0] : null,
				n = s ? s.canvases : e.items,
				o = n.length,
				r = new Array(n.length);
			let a,
				l,
				h,
				c,
				u,
				d,
				g,
				v,
				p,
				f,
				m,
				w,
				b,
				y,
				_,
				P,
				S,
				C = [],
				L = 100,
				O = 0,
				x = 100;
			for (let e = 0; e < o; e++) {
				const t = n[e],
					i = t.width,
					s = t.height,
					o = ae(i, s),
					r = s / i;
				(O = Math.max(r, O)), (x = Math.min(r, x)), (L = Math.min(L, o));
			}
			const E = new Array(L + 1).fill(0),
				I = new Array(L + 1).fill(0),
				T = new Array(L + 1).fill(0),
				D = new Array(L + 1).fill(0);
			for (let e = 0; e < o; e++) {
				if (
					((w = (a = n[e])['@id'] || a.id),
					(b = a.label),
					(C = []),
					'oa:Choice' ===
						(l = a.images ? a.images[0].resource : a.items[0].items[0].body)['@type'] ||
					'Choice' === l.type
						? ((h = l.default || l.items[0]), (c = l.item || l.items.slice(1)), (C = he(c, L)))
						: (h = l),
					(p = a.width || h.width),
					(f = a.height || h.height),
					p <= 0 || f <= 0)
				) {
					console.warn('Invalid width or height for canvas ' + b + '. Skipping');
					continue;
				}
				(m = ae(p, f)),
					(y = h.label || null),
					(d = '/' !== (g = de(h)).url.slice(-1) ? g.url + '/' : g.url),
					(v =
						'http://iiif.io/api/image/2/context.json' ===
							(u = h.service['@context'] || h.service.type) || 'ImageService2' === u
							? 2
							: 'http://library.stanford.edu/iiif/image-api/1.1/context.json' === u
							? 1.1
							: 1),
					(_ = new Array(L + 1));
				for (let e = 0; e < L + 1; e++)
					(P = Math.floor(le(p, L - e))),
						(S = Math.floor(le(f, L - e))),
						(_[e] = { h: S, w: P }),
						(E[e] += P),
						(I[e] += S),
						(T[e] = Math.max(P, T[e])),
						(D[e] = Math.max(S, D[e]));
				let t = 'non-paged' !== a.viewingHint || (!!a.behavior && 'non-paged' !== a.behavior[0]),
					i =
						'facing-pages' === a.viewingHint || (!!a.behavior && 'facing-pages' === a.behavior[0]);
				r[e] = {
					d: _,
					m: m,
					l: b,
					il: y,
					f: g.url,
					url: d,
					api: v,
					paged: t,
					facingPages: i,
					canvas: w,
					otherImages: C,
					xoffset: g.x || null,
					yoffset: g.y || null
				};
			}
			const M = new Array(L + 1),
				z = new Array(L + 1);
			for (let e = 0; e < L + 1; e++) (M[e] = E[e] / o), (z[e] = I[e] / o);
			const V = {
				a_wid: M,
				a_hei: z,
				max_w: T,
				max_h: D,
				max_ratio: O,
				min_ratio: x,
				t_hei: I,
				t_wid: E
			};
			return {
				version: i,
				item_title: (function (e) {
					let t,
						i = e.label,
						s = 'object' == typeof i ? i[Object.keys(i)[0]][0] : i,
						n = e.value;
					return (
						(t = Array.isArray(n)
							? n.map((e) => e[Object.keys(e)[0]])
							: 'object' == typeof n
							? n[Object.keys(n)[0]]
							: n),
						Array.isArray(t) && (t = t.join(', ')),
						{ label: s, value: t }
					);
				})(e).label,
				metadata: e.metadata || null,
				dims: V,
				max_zoom: L,
				pgs: r,
				paged:
					'paged' === e.viewingHint ||
					(!!e.behaviour && 'paged' === e.behaviour[0]) ||
					(!!s && 'paged' === s.viewingHint)
			};
		}
		function de(e) {
			let t = e['@id'] || e.id;
			const i = /#xywh=([0-9]+,[0-9]+,[0-9]+,[0-9]+)/;
			let s = '',
				n = !0;
			if (/\/([0-9]+,[0-9]+,[0-9]+,[0-9]+)\//.test(t)) {
				const e = t.split('/');
				s = e[e.length - 4];
			} else if (i.test(t)) {
				s = i.exec(t)[1];
			} else
				e.service &&
					(e.service['@id'] || e.service.id) &&
					((t = e.service['@id'] || e.service.id), (n = !1));
			n && (t = t.split('/').slice(0, -4).join('/'));
			const o = { url: t };
			if (s.length) {
				const e = s.split(',');
				(o.x = parseInt(e[0], 10)),
					(o.y = parseInt(e[1], 10)),
					(o.w = parseInt(e[2], 10)),
					(o.h = parseInt(e[3], 10));
			}
			return o;
		}
		class ge {
			getPageImageURL(e, t, i) {
				let s;
				s =
					!i || (null == i.width && null == i.height)
						? 'full'
						: (null == i.width ? '' : i.width) + ',' + (null == i.height ? '' : i.height);
				const n = e.pages[t],
					o = n.api > 1.1 ? 'default' : 'native';
				return encodeURI(n.url + 'full/' + s + '/0/' + o + '.jpg');
			}
			getTileImageURL(e, t, i) {
				const s = e.pages[t];
				let n, o;
				(n =
					i.row === i.rowCount - 1
						? s.d[i.zoomLevel].h - (i.rowCount - 1) * i.tileDimensions.height
						: i.tileDimensions.height),
					(o =
						i.col === i.colCount - 1
							? s.d[i.zoomLevel].w - (i.colCount - 1) * i.tileDimensions.width
							: i.tileDimensions.width);
				const r = Math.pow(2, e.maxZoom - i.zoomLevel);
				let a = i.col * i.tileDimensions.width * r,
					l = i.row * i.tileDimensions.height * r;
				s.hasOwnProperty('xoffset') && ((a += s.xoffset), (l += s.yoffset));
				const h = [a, l, o * r, n * r].join(','),
					c = s.api > 1.1 ? 'default' : 'native';
				return encodeURI(s.url + h + '/' + o + ',' + n + '/0/' + c + '.jpg');
			}
		}
		class ve {
			constructor(e, t) {
				(this.pages = e.pgs),
					(this.maxZoom = e.max_zoom),
					(this.maxRatio = e.dims.max_ratio),
					(this.minRatio = e.dims.min_ratio),
					(this.itemTitle = e.item_title),
					(this.metadata = e.metadata),
					(this.paged = !!e.paged),
					(this._maxWidths = e.dims.max_w),
					(this._maxHeights = e.dims.max_h),
					(this._averageWidths = e.dims.a_wid),
					(this._averageHeights = e.dims.a_hei),
					(this._totalHeights = e.dims.t_hei),
					(this._totalWidths = e.dims.t_wid),
					(this._urlAdapter = t);
			}
			static fromIIIF(e) {
				const t = ue(e);
				return new ve(t, new ge());
			}
			isPageValid(e, t) {
				return !(!t && this.paged && !this.pages[e].paged) && e >= 0 && e < this.pages.length;
			}
			getMaxPageDimensions(e) {
				const t = this.pages[e].d[this.maxZoom];
				return { height: t.h, width: t.w };
			}
			getPageDimensionsAtZoomLevel(e, t) {
				const i = this.pages[e].d[this.maxZoom],
					s = (function (e, t) {
						return 1 / Math.pow(2, e - t);
					})(this.maxZoom, t);
				return { height: i.h * s, width: i.w * s };
			}
			getPageImageURL(e, t) {
				return this._urlAdapter.getPageImageURL(this, e, t);
			}
			getPageImageTiles(e, t, i) {
				const s = this.pages[e];
				if (!isFinite(t) || t % 1 != 0) throw new TypeError('Zoom level must be an integer: ' + t);
				const n = Math.ceil(s.d[t].h / i.height),
					o = Math.ceil(s.d[t].w / i.width),
					r = [];
				let a, l, h;
				for (a = 0; a < n; a++)
					for (l = 0; l < o; l++)
						(h = this._urlAdapter.getTileImageURL(this, e, {
							row: a,
							col: l,
							rowCount: n,
							colCount: o,
							zoomLevel: t,
							tileDimensions: i
						})),
							r.push({
								row: a,
								col: l,
								zoomLevel: t,
								dimensions: { height: i.height, width: i.width },
								offset: { top: a * i.height, left: l * i.width },
								url: h
							});
				return { zoomLevel: t, rows: n, cols: o, tiles: r };
			}
		}
		function pe(e) {
			return function (t) {
				return this[e][t];
			};
		}
		(ve.prototype.getMaxWidth = pe('_maxWidths')),
			(ve.prototype.getMaxHeight = pe('_maxHeights')),
			(ve.prototype.getAverageWidth = pe('_averageWidths')),
			(ve.prototype.getAverageHeight = pe('_averageHeights')),
			(ve.prototype.getTotalWidth = pe('_totalWidths')),
			(ve.prototype.getTotalHeight = pe('_totalHeights'));
		class fe {
			constructor(e) {
				(this.viewer = e), (this.settings = e.settings);
			}
			_elemAttrs(e, t) {
				const i = { id: this.settings.ID + e, class: 'diva-' + e };
				return t ? Object.assign(i, t) : i;
			}
			_subscribe(e, t) {
				c.Events.subscribe(e, t, this.settings.ID);
			}
			createButton(e, t, i, n) {
				const o = s('button', {
					type: 'button',
					id: this.settings.ID + e,
					class: 'diva-' + e + ' diva-button',
					title: t
				});
				return n && o.appendChild(n), i && o.addEventListener('click', i), o;
			}
			createLabel(e, t, i, n, o) {
				return s('div', { id: this.settings.ID + t, class: e + ' diva-label' }, [
					i,
					s('span', { id: this.settings.ID + n }, o)
				]);
			}
			createZoomButtons() {
				let e = this._createZoomOutIcon(),
					t = this._createZoomInIcon(),
					i = [
						this.createButton(
							'zoom-out-button',
							'Zoom Out',
							() => {
								this.viewer.setZoomLevel(this.settings.zoomLevel - 1);
							},
							e
						),
						this.createButton(
							'zoom-in-button',
							'Zoom In',
							() => {
								this.viewer.setZoomLevel(this.settings.zoomLevel + 1);
							},
							t
						),
						this.createLabel(
							'diva-zoom-label',
							'zoom-label',
							'Zoom level: ',
							'zoom-level',
							this.settings.zoomLevel + 1
						)
					],
					n = function () {
						document.getElementById(this.settings.ID + 'zoom-level').textContent =
							this.settings.zoomLevel + 1;
					};
				return (
					this._subscribe('ZoomLevelDidChange', n),
					this._subscribe('ViewerDidLoad', n),
					s('div', { id: this.settings.ID + 'zoom-controls', style: 'display: none' }, i)
				);
			}
			createGridControls() {
				let e = this._createGridMoreIcon(),
					t = this._createGridFewerIcon(),
					i = [
						this.createButton(
							'grid-out-button',
							'Fewer',
							() => {
								this.viewer.setGridPagesPerRow(this.settings.pagesPerRow - 1);
							},
							t
						),
						this.createButton(
							'grid-in-button',
							'More',
							() => {
								this.viewer.setGridPagesPerRow(this.settings.pagesPerRow + 1);
							},
							e
						),
						this.createLabel(
							'diva-grid-label',
							'grid-label',
							'Pages per row: ',
							'pages-per-row',
							this.settings.pagesPerRow
						)
					];
				return (
					this._subscribe('GridRowNumberDidChange', function () {
						document.getElementById(this.settings.ID + 'pages-per-row').textContent =
							this.settings.pagesPerRow;
					}),
					s('div', { id: this.settings.ID + 'grid-controls', style: 'display:none' }, i)
				);
			}
			createPageLabel() {
				const e = s('span', { id: this.settings.ID + 'current-page' }),
					t = () => {
						let t = this.viewer.getCurrentPageIndices(),
							i = t[0],
							s = t[t.length - 1],
							n = this.settings.manifest.pages[i].l,
							o = this.settings.manifest.pages[s].l;
						e.textContent = i !== s ? n + ' - ' + o : n;
					};
				return (
					this._subscribe('VisiblePageDidChange', t),
					this._subscribe('ViewerDidLoad', t),
					this._subscribe('ViewDidSwitch', t),
					s('span', { class: 'diva-page-label diva-label' }, e)
				);
			}
			createGotoPageForm() {
				const e = s('input', {
						id: this.settings.ID + 'goto-page-input',
						class: 'diva-input diva-goto-page-input',
						autocomplete: 'off',
						type: 'text'
					}),
					t = s('input', {
						id: this.settings.ID + 'goto-page-submit',
						class: 'diva-button diva-button-text',
						type: 'submit',
						value: 'Go'
					}),
					i = s('div', {
						id: this.settings.ID + 'input-suggestions',
						class: 'diva-input-suggestions'
					}),
					n = s('form', { id: this.settings.ID + 'goto-page', class: 'diva-goto-form' }, e, t, i);
				return (
					n.addEventListener('submit', (t) => {
						t.preventDefault();
						const s = e.value;
						if (this.settings.onGotoSubmit && 'function' == typeof this.settings.onGotoSubmit) {
							const e = this.settings.onGotoSubmit(s);
							this.viewer.gotoPageByIndex(e) ||
								window.alert('No page could be found with that label or page number');
						} else
							this.viewer.gotoPageByLabel(s) ||
								window.alert('No page could be found with that label or page number');
						return (i.style.display = 'none'), !1;
					}),
					['input', 'focus'].forEach((t) => {
						e.addEventListener(t, () => {
							i.innerHTML = '';
							const t = e.value;
							let n = 0;
							if (this.settings.enableGotoSuggestions && t) {
								const e = this.settings.manifest.pages;
								for (let o = 0, r = e.length; o < r && n < 10; o++)
									if (e[o].l.toLowerCase().indexOf(t.toLowerCase()) > -1) {
										const t = s('div', { class: 'diva-input-suggestion' }, e[o].l);
										i.appendChild(t), n++;
									}
								n > 0 && (i.style.display = 'block');
							} else i.style.display = 'none';
						});
					}),
					e.addEventListener('keydown', (t) => {
						let i;
						if (13 === t.keyCode) {
							const t = document.getElementsByClassName('active')[0];
							void 0 !== t && (e.value = t.innerText);
						}
						if (38 === t.keyCode) {
							const e = (i = document.getElementsByClassName('active')[0])
								? i.previousSibling
								: void 0;
							if (void 0 !== e)
								i.classList.remove('active'), null !== e && e.classList.add('active');
							else {
								let e = document.getElementsByClassName('diva-input-suggestion').length - 1;
								document.getElementsByClassName('diva-input-suggestion')[e].classList.add('active');
							}
						} else if (40 === t.keyCode) {
							const e = (i = document.getElementsByClassName('active')[0]) ? i.nextSibling : void 0;
							void 0 !== e
								? (i.classList.remove('active'), null !== e && e.classList.add('active'))
								: document
										.getElementsByClassName('diva-input-suggestion')[0]
										.classList.add('active');
						}
					}),
					(function (e, t, i, s) {
						e.addEventListener(t, function (e) {
							for (var t = e.target; t && t !== this; )
								t.matches(i) && s.call(t, e), (t = t.parentNode);
						});
					})(i, 'mousedown', '.diva-input-suggestion', function () {
						(e.value = this.textContent), (i.style.display = 'none');
						let t = new Event('submit');
						n.dispatchEvent(t);
					}),
					e.addEventListener('blur', () => {
						i.style.display = 'none';
					}),
					n
				);
			}
			createViewMenu() {
				const e = s('div', this._elemAttrs('view-options')),
					t = this._createGridViewIcon(),
					i = this._createBookViewIcon(),
					n = this._createPageViewIcon(),
					o = this.createButton('view-icon', 'Change view', () => {
						e.style.display = 'none' === e.style.display ? 'block' : 'none';
					}),
					r = (t) => {
						this.viewer.changeView(t), (e.style.display = 'none');
					},
					a = () => {
						this.settings.inGrid
							? (o.appendChild(t), (o.className = 'diva-grid-icon diva-view-icon diva-button'))
							: this.settings.inBookLayout
							? (o.appendChild(i), (o.className = 'diva-book-icon diva-view-icon diva-button'))
							: (o.appendChild(n), (o.className = 'diva-document-icon diva-view-icon diva-button'));
						const s = document.createDocumentFragment();
						for (
							(this.settings.inGrid || this.settings.inBookLayout) &&
								s.appendChild(
									this.createButton('document-icon', 'Document View', r.bind(null, 'document'), n)
								),
								(!this.settings.inGrid && this.settings.inBookLayout) ||
									s.appendChild(
										this.createButton('book-icon', 'Book View', r.bind(null, 'book'), i)
									),
								this.settings.inGrid ||
									s.appendChild(
										this.createButton('grid-icon', 'Grid View', r.bind(null, 'grid'), t)
									);
							e.firstChild;

						)
							e.removeChild(e.firstChild);
						e.appendChild(s);
					};
				return (
					document.addEventListener('mouseup', (t) => {
						e !== t.target && (e.style.display = 'none');
					}),
					this._subscribe('ViewDidSwitch', a),
					this._subscribe('ObjectDidLoad', a),
					s('div', this._elemAttrs('view-menu'), o, e)
				);
			}
			createFullscreenButton() {
				let e = this._createFullscreenIcon();
				return this.createButton(
					'fullscreen-icon',
					'Toggle fullscreen mode',
					() => {
						this.viewer.toggleFullscreenMode();
					},
					e
				);
			}
			toggleZoomGridControls() {
				this.settings.inGrid
					? ((document.getElementById(this.settings.ID + 'zoom-controls').style.display = 'none'),
					  (document.getElementById(this.settings.ID + 'grid-controls').style.display = 'block'))
					: ((document.getElementById(this.settings.ID + 'zoom-controls').style.display = 'block'),
					  (document.getElementById(this.settings.ID + 'grid-controls').style.display = 'none'));
			}
			render() {
				this._subscribe('ViewDidSwitch', this.toggleZoomGridControls),
					this._subscribe('ObjectDidLoad', this.toggleZoomGridControls);
				let e = [this.createZoomButtons(), this.createGridControls()],
					t = [this.createPageLabel(), this.createViewMenu()];
				this.settings.enableFullscreen && t.push(this.createFullscreenButton()),
					this.settings.enableGotoPage && t.splice(1, 0, this.createGotoPageForm());
				let i = this.viewer.viewerState.pluginInstances;
				for (var n = 0, o = i.length; n < o; n++) {
					let s = i[n];
					s.toolbarSide &&
						((s.toolbarIcon = s.createIcon()),
						s.toolbarIcon &&
							('right' === s.toolbarSide
								? t.splice(2, 0, s.toolbarIcon)
								: 'left' === s.toolbarSide && e.splice(2, 0, s.toolbarIcon),
							s.toolbarIcon.addEventListener('click', r.bind(this, s))));
				}
				function r(e) {
					e.handleClick(this.viewer);
				}
				const a = s(
					'div',
					this._elemAttrs('tools'),
					s('div', this._elemAttrs('tools-left'), e),
					s('div', this._elemAttrs('tools-right'), t)
				);
				this.settings.toolbarParentObject.insertBefore(
					a,
					this.settings.toolbarParentObject.firstChild
				);
			}
			_createToolbarIcon(e) {
				let t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				t.setAttributeNS(null, 'viewBox', '0 0 25 25'),
					t.setAttributeNS(null, 'x', '0px'),
					t.setAttributeNS(null, 'y', '0px'),
					t.setAttributeNS(null, 'style', 'enable-background:new 0 0 48 48;');
				let i = document.createElementNS('http://www.w3.org/2000/svg', 'g');
				return (
					i.setAttributeNS(null, 'transform', 'matrix(1, 0, 0, 1, -12, -12)'),
					e.forEach((e) => {
						let t = document.createElementNS('http://www.w3.org/2000/svg', 'path');
						t.setAttributeNS(null, 'd', e), i.appendChild(t);
					}),
					t.appendChild(i),
					t
				);
			}
			_createZoomOutIcon() {
				return this._createToolbarIcon([
					'M19.5,23c-0.275,0-0.5-0.225-0.5-0.5v-1c0-0.275,0.225-0.5,0.5-0.5h7c0.275,0,0.5,0.225,0.5,0.5v1c0,0.275-0.225,0.5-0.5,0.5H19.5z',
					'M37.219,34.257l-2.213,2.212c-0.202,0.202-0.534,0.202-0.736,0l-6.098-6.099c-1.537,0.993-3.362,1.577-5.323,1.577c-5.431,0-9.849-4.418-9.849-9.849c0-5.431,4.418-9.849,9.849-9.849c5.431,0,9.849,4.418,9.849,9.849c0,1.961-0.584,3.786-1.576,5.323l6.098,6.098C37.422,33.722,37.422,34.054,37.219,34.257z M29.568,22.099c0-3.706-3.014-6.72-6.72-6.72c-3.706,0-6.72,3.014-6.72,6.72c0,3.706,3.014,6.72,6.72,6.72C26.555,28.818,29.568,25.805,29.568,22.099z'
				]);
			}
			_createZoomInIcon() {
				return this._createToolbarIcon([
					'M37.469,34.257l-2.213,2.212c-0.202,0.202-0.534,0.202-0.736,0l-6.098-6.099c-1.537,0.993-3.362,1.577-5.323,1.577c-5.431,0-9.849-4.418-9.849-9.849c0-5.431,4.418-9.849,9.849-9.849c5.431,0,9.849,4.418,9.849,9.849c0,1.961-0.584,3.786-1.576,5.323l6.098,6.098C37.672,33.722,37.672,34.054,37.469,34.257z M29.818,22.099c0-3.706-3.014-6.72-6.72-6.72c-3.706,0-6.72,3.014-6.72,6.72c0,3.706,3.014,6.72,6.72,6.72C26.805,28.818,29.818,25.805,29.818,22.099z M26.5,21H24v-2.5c0-0.275-0.225-0.5-0.5-0.5h-1c-0.275,0-0.5,0.225-0.5,0.5V21h-2.5c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5H22v2.5c0,0.275,0.225,0.5,0.5,0.5h1c0.275,0,0.5-0.225,0.5-0.5V23h2.5c0.275,0,0.5-0.225,0.5-0.5v-1C27,21.225,26.775,21,26.5,21z'
				]);
			}
			_createGridMoreIcon() {
				return this._createToolbarIcon([
					'M29.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z'
				]);
			}
			_createGridFewerIcon() {
				return this._createToolbarIcon([
					'M25.5,35c-0.275,0-0.5-0.225-0.5-0.5v-9c0-0.275,0.225-0.5,0.5-0.5h9c0.275,0,0.5,0.225,0.5,0.5v9c0,0.275-0.225,0.5-0.5,0.5H25.5z M22.5,35c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H22.5z M34.5,23c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H34.5z M22.5,23c0.275,0,0.5-0.225,0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5h-9c-0.275,0-0.5,0.225-0.5,0.5v9c0,0.275,0.225,0.5,0.5,0.5H22.5z'
				]);
			}
			_createGridViewIcon() {
				return this._createToolbarIcon([
					'M29.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,35c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,27c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z M29.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H29.5z M21.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H21.5z M13.5,19c-0.275,0-0.5-0.225-0.5-0.5v-5c0-0.275,0.225-0.5,0.5-0.5h5c0.275,0,0.5,0.225,0.5,0.5v5c0,0.275-0.225,0.5-0.5,0.5H13.5z'
				]);
			}
			_createBookViewIcon() {
				return this._createToolbarIcon([
					'M35,16.8v-1.323c0,0-2.292-1.328-5.74-1.328c-3.448,0-5.26,1.25-5.26,1.25s-1.813-1.25-5.26-1.25c-3.448,0-5.74,1.328-5.74,1.328V16.8l-1,0.531v0.021v15.687c0,0,4.531-1.578,6.999-1.578c2.468,0,5.001,0.885,5.001,0.885s2.532-0.885,5-0.885c0.306,0,0.643,0.024,1,0.066v4.325l1.531-2.016L33,35.852v-3.72c2,0.43,3,0.906,3,0.906V17.352v-0.021L35,16.8z M23,29.03c-1-0.292-2.584-0.679-3.981-0.679c-2.246,0-3.019,0.404-4.019,0.699V16.634c0,0,1.125-0.699,4.019-0.699c1.694,0,2.981,0.417,3.981,1.126V29.03z M33,29.051c-1-0.295-1.773-0.699-4.02-0.699c-1.396,0-2.981,0.387-3.98,0.679V17.06c1-0.709,2.286-1.126,3.98-1.126c2.895,0,4.02,0.699,4.02,0.699V29.051z'
				]);
			}
			_createPageViewIcon() {
				return this._createToolbarIcon([
					'M29.425,29h4.47L29,33.934v-4.47C29,29.19,29.151,29,29.425,29z M34,14.563V28h-5.569C28.157,28,28,28.196,28,28.47V34H14.497C14.223,34,14,33.71,14,33.437V14.563C14,14.29,14.223,14,14.497,14h18.9C33.672,14,34,14.29,34,14.563z M25.497,26.497C25.497,26.223,25.275,26,25,26h-7c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,27.777,17.725,28,18,28h7c0.275,0,0.497-0.223,0.497-0.497V26.497z M30.497,22.497C30.497,22.223,30.275,22,30,22H18c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,23.777,17.725,24,18,24h12c0.275,0,0.497-0.223,0.497-0.497V22.497z M30.497,18.497C30.497,18.223,30.275,18,30,18H18c-0.275,0-0.497,0.223-0.497,0.497v1.006C17.503,19.777,17.725,20,18,20h12c0.275,0,0.497-0.223,0.497-0.497V18.497z'
				]);
			}
			_createFullscreenIcon() {
				return this._createToolbarIcon([
					'M35,12H13c-0.55,0-1,0.45-1,1v22c0,0.55,0.45,1,1,1h22c0.55,0,1-0.45,1-1V13C36,12.45,35.55,12,35,12z M34,34H14V14h20V34z',
					'M17,21.75v-4.5c0-0.138,0.112-0.25,0.25-0.25h4.5c0.138,0,0.17,0.08,0.073,0.177l-1.616,1.616l1.823,1.823c0.097,0.097,0.097,0.256,0,0.354l-1.061,1.06c-0.097,0.097-0.256,0.097-0.354,0l-1.823-1.823l-1.616,1.616C17.08,21.92,17,21.888,17,21.75z M20.97,25.97c-0.097-0.097-0.256-0.097-0.354,0l-1.823,1.823l-1.616-1.616C17.08,26.08,17,26.112,17,26.25v4.5c0,0.138,0.112,0.25,0.25,0.25h4.5c0.138,0,0.17-0.08,0.073-0.177l-1.616-1.616l1.823-1.823c0.097-0.097,0.097-0.256,0-0.354L20.97,25.97z M30.75,17h-4.5c-0.138,0-0.17,0.08-0.073,0.177l1.616,1.616l-1.823,1.823c-0.097,0.097-0.097,0.256,0,0.354l1.061,1.06c0.097,0.097,0.256,0.097,0.354,0l1.823-1.823l1.616,1.616C30.92,21.92,31,21.888,31,21.75v-4.5C31,17.112,30.888,17,30.75,17z M30.823,26.177l-1.616,1.616l-1.823-1.823c-0.097-0.097-0.256-0.097-0.354,0l-1.061,1.06c-0.097,0.097-0.097,0.256,0,0.354l1.823,1.823l-1.616,1.616C26.08,30.92,26.112,31,26.25,31h4.5c0.138,0,0.25-0.112,0.25-0.25v-4.5C31,26.112,30.92,26.08,30.823,26.177z M26,22.5c0-0.275-0.225-0.5-0.5-0.5h-3c-0.275,0-0.5,0.225-0.5,0.5v3c0,0.275,0.225,0.5,0.5,0.5h3c0.275,0,0.5-0.225,0.5-0.5V22.5z'
				]);
			}
		}
		var me = {
			get: we,
			update: function (e, t) {
				const i = we(e),
					s = window.location.hash;
				if (i !== t)
					if ('string' == typeof i) {
						const n =
								s.indexOf('&' + e + '=') > 0 ? s.indexOf('&' + e + '=') : s.indexOf('#' + e + '='),
							o = n + e.length + 2 + i.length,
							r = 0 === n ? '#' : '&';
						window.location.replace(s.substring(0, n) + r + e + '=' + t + s.substring(o));
					} else
						0 === s.length
							? window.location.replace('#' + e + '=' + t)
							: window.location.replace(s + '&' + e + '=' + t);
			}
		};
		function we(e) {
			const t = window.location.hash;
			if ('' !== t) {
				let i = t.indexOf('&' + e + '=') > 0 ? t.indexOf('&' + e + '=') : t.indexOf('#' + e + '=');
				if (i >= 0) {
					i += e.length + 2;
					const s = t.indexOf('&', i);
					return s > i
						? decodeURIComponent(t.substring(i, s))
						: s < 0
						? decodeURIComponent(t.substring(i))
						: '';
				}
				return !1;
			}
			return !1;
		}
		class be {
			constructor(e, t) {
				if (
					!(e instanceof HTMLElement) &&
					((this.element = document.getElementById(e)), null === this.element)
				)
					throw new a();
				if (!t.objectData)
					throw new h('You must supply either a URL or a literal object to the `objectData` key.');
				this.options = Object.assign(
					{
						acceptHeader: 'application/json',
						adaptivePadding: 0.05,
						arrowScrollAmount: 40,
						blockMobileMove: !1,
						objectData: '',
						enableAutoTitle: !0,
						enableFilename: !0,
						enableFullscreen: !0,
						enableGotoPage: !0,
						enableGotoSuggestions: !0,
						enableGridIcon: !0,
						enableGridControls: 'buttons',
						enableImageTitles: !0,
						enableKeyScroll: !0,
						enableLinkIcon: !0,
						enableNonPagedVisibilityIcon: !0,
						enableSpaceScroll: !1,
						enableToolbar: !0,
						enableZoomControls: 'buttons',
						fillParentHeight: !0,
						fixedPadding: 10,
						fixedHeightGrid: !0,
						goDirectlyTo: 0,
						hashParamSuffix: null,
						inFullscreen: !1,
						inBookLayout: !1,
						inGrid: !1,
						maxPagesPerRow: 8,
						maxZoomLevel: -1,
						minPagesPerRow: 2,
						minZoomLevel: 0,
						onGotoSubmit: null,
						pageAliases: {},
						pageAliasFunction: function () {
							return !1;
						},
						pageLoadTimeout: 200,
						pagesPerRow: 5,
						showNonPagedPages: !1,
						throbberTimeout: 100,
						tileHeight: 256,
						tileWidth: 256,
						toolbarParentObject: null,
						verticallyOriented: !0,
						viewportMargin: 200,
						zoomLevel: 2
					},
					t
				);
				const i = s('div', {
					class: `diva-wrapper${this.options.fillParentHeight ? ' diva-wrapper-flexbox' : ''}`
				});
				this.element.appendChild(i),
					(this.options.toolbarParentObject = this.options.toolbarParentObject || i);
				const n = new re(i, this.options, this);
				(this.viewerState = n.getInternalState()),
					(this.settings = n.getSettings()),
					(this.toolbar = new fe(this)),
					(i.id = this.settings.ID + 'wrapper'),
					(this.divaState = {
						viewerCore: n,
						toolbar: this.settings.enableToolbar ? this.toolbar : null
					});
				let o = c.Events.subscribe('ObjectDidLoad', () => {
					this.toolbar.render(), c.Events.unsubscribe(o);
				});
				(this.hashState = this._getHashParamState()), this._loadOrFetchObjectData();
			}
			_loadOrFetchObjectData() {
				if ('object' == typeof this.settings.objectData)
					setTimeout(() => {
						this._loadObjectData(this.settings.objectData, this.hashState);
					}, 0);
				else {
					const e = fetch(this.settings.objectData, {
						headers: { Accept: this.settings.acceptHeader }
					})
						.then((e) => {
							if (!e.ok) {
								this._ajaxError(e);
								let t = new Error(e.statusText);
								throw ((t.response = e), t);
							}
							return e.json();
						})
						.then((e) => {
							this._loadObjectData(e, this.hashState);
						});
					this.divaState.viewerCore.setPendingManifestRequest(e);
				}
			}
			_showError(e) {
				this.divaState.viewerCore.showError(e);
			}
			_ajaxError(e) {
				const t = ['Invalid objectData setting. Error code: ' + e.status + ' ' + e.statusText];
				if (0 === this.settings.objectData.lastIndexOf('http', 0)) {
					const e = this.settings.objectData.replace(/https?:\/\//i, '').split(/[/?#]/)[0];
					window.location.hostname !== e &&
						t.push(
							s('p', 'Attempted to access cross-origin data without CORS.'),
							s(
								'p',
								'You may need to update your server configuration to support CORS. For help, see the ',
								s(
									'a',
									{
										href: 'https://github.com/DDMAL/diva.js/wiki/Installation#a-note-about-cross-site-requests',
										target: '_blank'
									},
									'cross-site request documentation.'
								)
							)
						);
				}
				this._showError(t);
			}
			_loadObjectData(e, t) {
				let i;
				if (
					!e.hasOwnProperty('@context') &&
					(-1 === e['@context'].indexOf('iiif') || -1 === e['@context'].indexOf('shared-canvas'))
				)
					throw new l('This does not appear to be a IIIF Manifest.');
				c.Events.publish('ManifestDidLoad', [e], this), (i = ve.fromIIIF(e));
				const s = t ? this._getLoadOptionsForState(t, i) : {};
				this.divaState.viewerCore.setManifest(i, s);
			}
			_getHashParamState() {
				const e = {};
				return (
					['f', 'v', 'z', 'n', 'i', 'p', 'y', 'x'].forEach((t) => {
						const i = me.get(t + this.settings.hashParamSuffix);
						!1 !== i && (e[t] = i);
					}),
					'true' === e.f ? (e.f = !0) : 'false' === e.f && (e.f = !1),
					['z', 'n', 'p', 'x', 'y'].forEach((t) => {
						t in e && (e[t] = parseInt(e[t], 10));
					}),
					e
				);
			}
			_getLoadOptionsForState(e, t) {
				t = t || this.settings.manifest;
				const i = 'v' in e ? this._getViewState(e.v) : {};
				'f' in e && (i.inFullscreen = e.f),
					'z' in e && (i.zoomLevel = e.z),
					'n' in e && (i.pagesPerRow = e.n);
				let s = this._getPageIndexForManifest(t, e.i);
				if (
					((s >= 0 && s < t.pages.length) ||
						((s = e.p - 1) >= 0 && s < t.pages.length) ||
						(s = null),
					null !== s)
				) {
					const t = parseInt(e.x, 10),
						n = parseInt(e.y, 10);
					(i.goDirectlyTo = s), (i.horizontalOffset = t), (i.verticalOffset = n);
				}
				return i;
			}
			_getViewState(e) {
				switch (e) {
					case 'd':
						return { inGrid: !1, inBookLayout: !1 };
					case 'b':
						return { inGrid: !1, inBookLayout: !0 };
					case 'g':
						return { inGrid: !0, inBookLayout: !1 };
					default:
						return {};
				}
			}
			_getPageIndexForManifest(e, t) {
				let i;
				const s = e.pages.length;
				for (i = 0; i < s; i++) if (e.pages[i].f === t) return i;
				return -1;
			}
			_getState() {
				let e;
				e = this.settings.inGrid ? 'g' : this.settings.inBookLayout ? 'b' : 'd';
				const t = this.divaState.viewerCore
					.getCurrentLayout()
					.getPageToViewportCenterOffset(this.settings.activePageIndex, this.viewerState.viewport);
				return {
					f: this.settings.inFullscreen,
					v: e,
					z: this.settings.zoomLevel,
					n: this.settings.pagesPerRow,
					i:
						!!this.settings.enableFilename &&
						this.settings.manifest.pages[this.settings.activePageIndex].f,
					p: !this.settings.enableFilename && this.settings.activePageIndex + 1,
					y: !!t && t.y,
					x: !!t && t.x
				};
			}
			_getURLHash() {
				const e = this._getState(),
					t = [];
				let i;
				for (i in e)
					!1 !== e[i] && t.push(i + this.settings.hashParamSuffix + '=' + encodeURIComponent(e[i]));
				return t.join('&');
			}
			_getPageIndex(e) {
				return this._getPageIndexForManifest(this.settings.manifest, e);
			}
			_checkLoaded() {
				return (
					!!this.viewerState.loaded ||
					(console.warn(
						'The viewer is not completely initialized. This is likely because it is still downloading data. To fix this, only call this function if the isReady() method returns true.'
					),
					!1)
				);
			}
			_toggleFullscreen() {
				let e;
				this._reloadViewer({ inFullscreen: !this.settings.inFullscreen });
				let t = !1,
					i = document.getElementById(this.settings.selector + 'tools');
				const s = 2e3;
				function n() {
					(i.style.opacity = 1),
						clearTimeout(e),
						!t &&
							this.settings.inFullscreen &&
							(e = setTimeout(function () {
								i.style.opacity = 0;
							}, s));
				}
				this.settings.inFullscreen
					? (i.classList.add('diva-fullscreen-tools'),
					  document.addEventListener('mousemove', n.bind(this)),
					  document
							.getElementsByClassName('diva-viewport')[0]
							.addEventListener('scroll', n.bind(this)),
					  i.addEventListener('mouseenter', function () {
							t = !0;
					  }),
					  i.addEventListener('mouseleave', function () {
							t = !1;
					  }))
					: i.classList.remove('diva-fullscreen-tools');
			}
			_togglePageLayoutOrientation() {
				const e = !this.settings.verticallyOriented;
				return (
					this._reloadViewer({
						inGrid: !1,
						verticallyOriented: e,
						goDirectlyTo: this.settings.activePageIndex,
						verticalOffset: this.divaState.viewerCore.getYOffset(),
						horizontalOffset: this.divaState.viewerCore.getXOffset()
					}),
					e
				);
			}
			_changeView(e) {
				switch (e) {
					case 'document':
						return this._reloadViewer({ inGrid: !1, inBookLayout: !1 });
					case 'book':
						return this._reloadViewer({ inGrid: !1, inBookLayout: !0 });
					case 'grid':
						return this._reloadViewer({ inGrid: !0 });
					default:
						return !1;
				}
			}
			_gotoPageByIndex(e, t, i) {
				let s = parseInt(e, 10);
				if (this._isPageIndexValid(s)) {
					const e = this.divaState.viewerCore.getXOffset(s, t),
						n = this.divaState.viewerCore.getYOffset(s, i);
					return this.viewerState.renderer.goto(s, n, e), !0;
				}
				return !1;
			}
			_isPageIndexValid(e) {
				return this.settings.manifest.isPageValid(e, this.settings.showNonPagedPages);
			}
			_getPageIndexForPageXYValues(e, t) {
				const i = this.viewerState.outerElement.getBoundingClientRect(),
					s = i.top,
					n = i.left,
					o = i.bottom,
					r = i.right;
				if (e < n || e > r) return -1;
				if (t < s || t > o) return -1;
				const a = document.getElementsByClassName('diva-page');
				let l = a.length;
				for (; l--; ) {
					const i = a[l],
						s = i.getBoundingClientRect();
					if (!(e < s.left || e > s.right) && !(t < s.top || t > s.bottom))
						return i.getAttribute('data-index');
				}
				return -1;
			}
			_reloadViewer(e) {
				return this.divaState.viewerCore.reload(e);
			}
			_getCurrentURL() {
				return (
					location.protocol +
					'//' +
					location.host +
					location.pathname +
					location.search +
					'#' +
					this._getURLHash()
				);
			}
			activate() {
				this.viewerState.isActiveDiva = !0;
			}
			changeObject(e) {
				(this.viewerState.loaded = !1),
					this.divaState.viewerCore.clear(),
					this.viewerState.renderer && this.viewerState.renderer.destroy(),
					(this.viewerState.options.objectData = e),
					this._loadOrFetchObjectData();
			}
			changeView(e) {
				this._changeView(e);
			}
			deactivate() {
				this.viewerState.isActiveDiva = !1;
			}
			destroy() {
				this.divaState.viewerCore.destroy();
			}
			disableScrollable() {
				this.divaState.viewerCore.disableScrollable();
			}
			enableScrollable() {
				this.divaState.viewerCore.enableScrollable();
			}
			disableDragScrollable() {
				this.divaState.viewerCore.disableDragScrollable();
			}
			enableDragScrollable() {
				this.divaState.viewerCore.enableDragScrollable();
			}
			enterFullscreenMode() {
				return !this.settings.inFullscreen && (this._toggleFullscreen(), !0);
			}
			enterGridView() {
				return !this.settings.inGrid && (this._changeView('grid'), !0);
			}
			getAllPageURIs() {
				return this.settings.manifest.pages.map((e) => e.f);
			}
			getCurrentCanvas() {
				return this.settings.manifest.pages[this.settings.activePageIndex].canvas;
			}
			getCurrentPageDimensionsAtCurrentZoomLevel() {
				return this.getPageDimensionsAtCurrentZoomLevel(this.settings.activePageIndex);
			}
			getCurrentPageFilename() {
				return (
					console.warn(
						'This method will be deprecated in the next version of Diva. Please use getCurrentPageURI instead.'
					),
					this.settings.manifest.pages[this.settings.activePageIndex].f
				);
			}
			getCurrentPageIndices() {
				return this.settings.currentPageIndices;
			}
			getActivePageIndex() {
				return this.settings.activePageIndex;
			}
			getCurrentPageOffset() {
				return this.getPageOffset(this.settings.activePageIndex);
			}
			getCurrentPageURI() {
				return this.settings.manifest.pages[this.settings.activePageIndex].f;
			}
			getCurrentURL() {
				return this._getCurrentURL();
			}
			getFilenames() {
				return (
					console.warn(
						'This will be removed in the next version of Diva. Use getAllPageURIs instead.'
					),
					this.settings.manifest.pages.map((e) => e.f)
				);
			}
			getGridPagesPerRow() {
				return this.settings.pagesPerRow;
			}
			getInstanceId() {
				return this.settings.ID;
			}
			getInstanceSelector() {
				return this.divaState.viewerCore.selector;
			}
			getItemTitle() {
				return this.settings.manifest.itemTitle;
			}
			getMaxZoomLevel() {
				return this.settings.maxZoomLevel;
			}
			getMaxZoomLevelForPage(e) {
				return !!this._checkLoaded() && this.settings.manifest.pages[e].m;
			}
			getMinZoomLevel() {
				return this.settings.minZoomLevel;
			}
			getNumberOfPages() {
				return !!this._checkLoaded() && this.settings.numPages;
			}
			getOtherImages(e) {
				return this.settings.manifest.pages[e].otherImages;
			}
			getPageDimensions(e) {
				return this._checkLoaded()
					? this.divaState.viewerCore.getCurrentLayout().getPageDimensions(e)
					: null;
			}
			getPageDimensionsAtCurrentZoomLevel(e) {
				let t = parseInt(e, 10);
				if (!this._isPageIndexValid(t)) throw new Error('Invalid Page Index');
				return this.divaState.viewerCore.getCurrentLayout().getPageDimensions(t);
			}
			getPageDimensionsAtZoomLevel(e, t) {
				if (!this._checkLoaded()) return !1;
				t > this.settings.maxZoomLevel && (t = this.settings.maxZoomLevel);
				const i = this.settings.manifest.pages[parseInt(e, 10)].d[parseInt(t, 10)];
				return { width: i.w, height: i.h };
			}
			getPageImageURL(e, t) {
				return this.settings.manifest.getPageImageURL(e, t);
			}
			getPageIndexForPageXYValues(e, t) {
				return this._getPageIndexForPageXYValues(e, t);
			}
			getPageOffset(e, t) {
				const i = this.divaState.viewerCore.getPageRegion(e, t);
				return { top: i.top, left: i.left };
			}
			getSettings() {
				return this.settings;
			}
			getState() {
				return this._getState();
			}
			getZoomLevel() {
				return this.settings.zoomLevel;
			}
			gotoPageByIndex(e, t, i) {
				this._gotoPageByIndex(e, t, i);
			}
			gotoPageByLabel(e, t, i) {
				const s = this.settings.manifest.pages;
				let n = e.toLowerCase();
				for (let e = 0, o = s.length; e < o; e++)
					if (s[e].l.toLowerCase().indexOf(n) > -1) return this._gotoPageByIndex(e, t, i);
				const o = parseInt(e, 10) - 1;
				return this._gotoPageByIndex(o, t, i);
			}
			gotoPageByName(e, t, i) {
				console.warn(
					'This method will be removed in the next version of Diva.js. Use gotoPageByURI instead.'
				);
				const s = this._getPageIndex(e);
				return this._gotoPageByIndex(s, t, i);
			}
			gotoPageByURI(e, t, i) {
				const s = this._getPageIndex(e);
				return this._gotoPageByIndex(s, t, i);
			}
			hasOtherImages(e) {
				return !0 === this.settings.manifest.pages[e].otherImages;
			}
			hideNonPagedPages() {
				this._reloadViewer({ showNonPagedPages: !1 });
			}
			isInFullscreen() {
				return this.settings.inFullscreen;
			}
			isPageIndexValid(e) {
				return this._isPageIndexValid(e);
			}
			isPageInViewport(e) {
				return this.viewerState.renderer.isPageVisible(e);
			}
			isReady() {
				return this.viewerState.loaded;
			}
			isRegionInViewport(e, t, i, s, n) {
				const o = this.divaState.viewerCore.getCurrentLayout();
				if (!o) return !1;
				const r = o.getPageOffset(e),
					a = r.top + i,
					l = r.left + t;
				return this.viewerState.viewport.intersectsRegion({
					top: a,
					bottom: a + n,
					left: l,
					right: l + s
				});
			}
			isVerticallyOriented() {
				return this.settings.verticallyOriented;
			}
			leaveFullscreenMode() {
				return !!this.settings.inFullscreen && (this._toggleFullscreen(), !0);
			}
			leaveGridView() {
				return !!this.settings.inGrid && (this._reloadViewer({ inGrid: !1 }), !0);
			}
			setGridPagesPerRow(e) {
				return (
					!!this.divaState.viewerCore.isValidOption('pagesPerRow', e) &&
					this._reloadViewer({ inGrid: !0, pagesPerRow: e })
				);
			}
			setState(e) {
				this._reloadViewer(this._getLoadOptionsForState(e));
			}
			setZoomLevel(e) {
				return (
					this.settings.inGrid && this._reloadViewer({ inGrid: !1 }),
					this.divaState.viewerCore.zoom(e)
				);
			}
			showNonPagedPages() {
				this._reloadViewer({ showNonPagedPages: !0 });
			}
			toggleFullscreenMode() {
				this._toggleFullscreen();
			}
			toggleNonPagedPagesVisibility() {
				this._reloadViewer({ showNonPagedPages: !this.settings.showNonPagedPages });
			}
			toggleOrientation() {
				return this._togglePageLayoutOrientation();
			}
			translateFromMaxZoomLevel(e) {
				const t = this.settings.maxZoomLevel - this.settings.zoomLevel;
				return e / Math.pow(2, t);
			}
			translateToMaxZoomLevel(e) {
				const t = this.settings.maxZoomLevel - this.settings.zoomLevel;
				return 0 === t ? e : e * Math.pow(2, t);
			}
			zoomIn() {
				return this.setZoomLevel(this.settings.zoomLevel + 1);
			}
			zoomOut() {
				return this.setZoomLevel(this.settings.zoomLevel - 1);
			}
		}
		t.default = be;
		!(function (e) {
			(e.Diva = e.Diva || be), (e.Diva.Events = c.Events);
		})(window);
	}
]);
//# sourceMappingURL=diva.js.map
