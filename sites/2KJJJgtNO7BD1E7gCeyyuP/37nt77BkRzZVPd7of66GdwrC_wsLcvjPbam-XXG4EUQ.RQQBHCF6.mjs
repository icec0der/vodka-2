import { a as H } from './chunk-2YIP5WRJ.mjs'
import {
	$ as Ce,
	A as N,
	C as F,
	E as We,
	H as Xe,
	I as O,
	J as V,
	K as Ze,
	L as Se,
	M as Oe,
	O as D,
	P as Ge,
	Q as Ae,
	S as x,
	U as n,
	_ as M,
	b as r,
	ba as Te,
	ca as Ee,
	d as L,
	da as Y,
	ea as h,
	f as Pe,
	fa as o,
	g as Re,
	h as U,
	ha as de,
	i as Fe,
	ia as _,
	j as ke,
	ja as Le,
	k as b,
	ka as B,
	m as ce,
	n as e,
	o as t,
	p as j,
	q as i,
	r as he,
	s as S,
	u as ze,
} from './chunk-2MOPFOMY.mjs'
import './chunk-ELYU6EKT.mjs'
Y.loadFonts([])
var Ue = [{ explicitInter: !0, fonts: [] }],
	je = [
		'.framer-EcSG4 .framer-styles-preset-1rvuc2l:not(.rich-text-wrapper), .framer-EcSG4 .framer-styles-preset-1rvuc2l.rich-text-wrapper a { --framer-link-current-text-color: #373636; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #3aa3f4; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #373636; --framer-link-text-decoration: none; }',
	],
	Ne = 'framer-EcSG4'
var Je = ['NubfV5_NT', 'n8LRl0F4b', 'tvKuQyOqE'],
	Qe = 'framer-95JB1',
	$e = {
		n8LRl0F4b: 'framer-v-1gyl3hk',
		NubfV5_NT: 'framer-v-yr3z4m',
		tvKuQyOqE: 'framer-v-1dghb1y',
	}
function k(l, ...m) {
	let g = {}
	return m?.forEach(s => s && Object.assign(g, l[s])), g
}
var er = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring' },
	rr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring' },
	tr = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: rr,
	},
	ar = ({ value: l, children: m }) => {
		let g = Pe(j),
			s = l ?? g.transition,
			d = ke(() => ({ ...g, transition: s }), [JSON.stringify(s)])
		return e(j.Provider, { value: d, children: m })
	},
	nr = i(r),
	or = { 'Phone Open': 'tvKuQyOqE', Desktop: 'NubfV5_NT', Phone: 'n8LRl0F4b' },
	ir = ({ height: l, id: m, width: g, ...s }) => {
		var d, y
		return {
			...s,
			variant:
				(y = (d = or[s.variant]) !== null && d !== void 0 ? d : s.variant) !==
					null && y !== void 0
					? y
					: 'NubfV5_NT',
		}
	},
	mr = (l, m) =>
		l.layoutDependency ? m.join('-') + l.layoutDependency : m.join('-'),
	fr = L(function (l, m) {
		let { activeLocale: g, setLocale: s } = N(),
			{ style: d, className: y, layoutId: P, variant: ee, ...re } = ir(l),
			{
				baseVariant: a,
				classNames: ye,
				clearLoadingGesture: He,
				gestureHandlers: te,
				gestureVariant: R,
				isLoading: we,
				setGestureState: be,
				setVariant: A,
				variants: C,
			} = Ee({
				cycleOrder: Je,
				defaultVariant: 'NubfV5_NT',
				variant: ee,
				variantClassNames: $e,
			}),
			c = mr(l, C),
			{ activeVariantCallback: T, delay: Ie } = M(a),
			ae = T(async (...u) => {
				A('tvKuQyOqE')
			}),
			w = T(async (...u) => {
				A('n8LRl0F4b')
			}),
			ne = b(null),
			oe = () => !!['n8LRl0F4b', 'tvKuQyOqE'].includes(a),
			ie = () => a !== 'n8LRl0F4b',
			me = () => !['n8LRl0F4b', 'tvKuQyOqE'].includes(a),
			fe = U(),
			E = [Ne],
			p = Ze()
		return e(S, {
			id: P ?? fe,
			children: e(nr, {
				animate: C,
				initial: !1,
				children: e(ar, {
					value: er,
					children: t(i.nav, {
						...re,
						...te,
						className: O(Qe, ...E, 'framer-yr3z4m', y, ye),
						'data-framer-name': 'Desktop',
						layoutDependency: c,
						layoutId: 'NubfV5_NT',
						ref: m ?? ne,
						style: {
							backgroundColor: 'rgb(250, 250, 250)',
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
							...d,
						},
						...k(
							{
								n8LRl0F4b: { 'data-framer-name': 'Phone' },
								tvKuQyOqE: { 'data-framer-name': 'Phone Open' },
							},
							a,
							R
						),
						children: [
							e(i.div, {
								className: 'framer-gho174',
								'data-framer-name': 'Bottom Line',
								layoutDependency: c,
								layoutId: 'mRbWI7Ecu',
								style: { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
							}),
							t(i.div, {
								className: 'framer-1nuzqq',
								layoutDependency: c,
								layoutId: 'RHajUNifc',
								children: [
									t(i.div, {
										className: 'framer-180v4zz',
										'data-framer-name': 'Top',
										layoutDependency: c,
										layoutId: 'ILhNgS278',
										children: [
											e(x, {
												href: { hash: ':TRfJN9zNL', webPageId: 'augiA20Il' },
												openInNewTab: !1,
												smoothScroll: !0,
												children: e(i.a, {
													className: 'framer-1nsh1q7 framer-1e399qj',
													layoutDependency: c,
													layoutId: 'ter0srKLw',
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e(i.p, {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color':
																		'var(--extracted-r6o4lv, rgb(58, 163, 244))',
																},
																children: '$VODKA',
															}),
														}),
														className: 'framer-1voxf6w',
														'data-framer-name': '$VODKA',
														fonts: ['GF;Lilita One-regular'],
														layoutDependency: c,
														layoutId: 'c8HHWhcH7',
														style: {
															'--extracted-r6o4lv': 'rgb(58, 163, 244)',
															'--framer-paragraph-spacing': '0px',
														},
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
											}),
											oe() &&
												t(i.div, {
													className: 'framer-14idd2v',
													'data-framer-name': 'Icon',
													layoutDependency: c,
													layoutId: 'ntvL2in_p',
													...k(
														{
															n8LRl0F4b: { 'data-highlight': !0, onTap: ae },
															tvKuQyOqE: { 'data-highlight': !0, onTap: w },
														},
														a,
														R
													),
													children: [
														e(i.div, {
															className: 'framer-1lcezz9',
															'data-framer-name': 'Bottom',
															layoutDependency: c,
															layoutId: 'tE6PSR4su',
															style: {
																backgroundColor: 'rgb(153, 153, 153)',
																borderBottomLeftRadius: 10,
																borderBottomRightRadius: 10,
																borderTopLeftRadius: 10,
																borderTopRightRadius: 10,
																rotate: 0,
															},
															variants: { tvKuQyOqE: { rotate: -45 } },
														}),
														e(i.div, {
															className: 'framer-3ektay',
															'data-framer-name': 'Top',
															layoutDependency: c,
															layoutId: 'iU3p75anj',
															style: {
																backgroundColor: 'rgb(153, 153, 153)',
																borderBottomLeftRadius: 10,
																borderBottomRightRadius: 10,
																borderTopLeftRadius: 10,
																borderTopRightRadius: 10,
																rotate: 0,
															},
															variants: { tvKuQyOqE: { rotate: 45 } },
														}),
													],
												}),
										],
									}),
									ie() &&
										t(i.div, {
											className: 'framer-9l8ujn',
											'data-framer-name': 'Links',
											layoutDependency: c,
											layoutId: 'ht5w8IBpV',
											children: [
												e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e(i.p, {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color':
																	'var(--extracted-r6o4lv, rgb(55, 54, 54))',
															},
															children: e(x, {
																href: {
																	hash: ':agcawYLBV',
																	webPageId: 'augiA20Il',
																},
																openInNewTab: !1,
																smoothScroll: !0,
																children: e(i.a, {
																	className: 'framer-styles-preset-1rvuc2l',
																	'data-styles-preset': 'UBCIaTk0i',
																	children: 'ABOUT',
																}),
															}),
														}),
													}),
													className: 'framer-1wbfvb8',
													'data-framer-name': 'ABOUT',
													fonts: ['Inter-SemiBold'],
													layoutDependency: c,
													layoutId: 'rAYWwKEF5',
													style: {
														'--extracted-r6o4lv': 'rgb(55, 54, 54)',
														'--framer-paragraph-spacing': '0px',
													},
													verticalAlignment: 'top',
													withExternalLayout: !0,
													...k(
														{ tvKuQyOqE: { 'data-highlight': !0, onTap: w } },
														a,
														R
													),
												}),
												e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e(i.p, {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color':
																	'var(--extracted-r6o4lv, rgb(55, 54, 54))',
															},
															children: e(x, {
																href: {
																	hash: ':T2qqrgCYm',
																	webPageId: 'augiA20Il',
																},
																openInNewTab: !1,
																smoothScroll: !0,
																children: e(i.a, {
																	className: 'framer-styles-preset-1rvuc2l',
																	'data-styles-preset': 'UBCIaTk0i',
																	children: 'GAME',
																}),
															}),
														}),
													}),
													className: 'framer-15263yh',
													'data-framer-name': 'GAME',
													fonts: ['Inter-SemiBold'],
													layoutDependency: c,
													layoutId: 'LycVMxlGx',
													style: {
														'--extracted-r6o4lv': 'rgb(55, 54, 54)',
														'--framer-paragraph-spacing': '0px',
													},
													verticalAlignment: 'top',
													withExternalLayout: !0,
													...k(
														{ tvKuQyOqE: { 'data-highlight': !0, onTap: w } },
														a,
														R
													),
												}),
												e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e(i.p, {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color':
																	'var(--extracted-r6o4lv, rgb(55, 54, 54))',
															},
															children: e(x, {
																href: {
																	hash: ':WIXrMuZIL',
																	webPageId: 'augiA20Il',
																},
																openInNewTab: !1,
																smoothScroll: !0,
																children: e(i.a, {
																	className: 'framer-styles-preset-1rvuc2l',
																	'data-styles-preset': 'UBCIaTk0i',
																	children: 'TOKENOMICS',
																}),
															}),
														}),
													}),
													className: 'framer-1bkn6ao',
													'data-framer-name': 'TOKENOMICS',
													fonts: ['Inter-SemiBold'],
													layoutDependency: c,
													layoutId: 'v87TBoc5T',
													style: {
														'--extracted-r6o4lv': 'rgb(55, 54, 54)',
														'--framer-paragraph-spacing': '0px',
													},
													verticalAlignment: 'top',
													withExternalLayout: !0,
													...k(
														{ tvKuQyOqE: { 'data-highlight': !0, onTap: w } },
														a,
														R
													),
												}),
												e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e(i.p, {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color':
																	'var(--extracted-r6o4lv, rgb(55, 54, 54))',
															},
															children: e(x, {
																href: {
																	hash: ':q2lCNNmIU',
																	webPageId: 'augiA20Il',
																},
																openInNewTab: !1,
																smoothScroll: !0,
																children: e(i.a, {
																	className: 'framer-styles-preset-1rvuc2l',
																	'data-styles-preset': 'UBCIaTk0i',
																	children: 'ROADMAP',
																}),
															}),
														}),
													}),
													className: 'framer-1od7kna',
													'data-framer-name': 'ROADMAP',
													fonts: ['Inter-SemiBold'],
													layoutDependency: c,
													layoutId: 'rci16Vsoc',
													style: {
														'--extracted-r6o4lv': 'rgb(55, 54, 54)',
														'--framer-paragraph-spacing': '0px',
													},
													verticalAlignment: 'top',
													withExternalLayout: !0,
													...k(
														{ tvKuQyOqE: { 'data-highlight': !0, onTap: w } },
														a,
														R
													),
												}),
											],
										}),
								],
							}),
							me() &&
								e(x, {
									href: 'https://t.me/vodkatokensol',
									children: e(i.a, {
										className: 'framer-14hscyh framer-1e399qj',
										'data-border': !0,
										'data-framer-name': 'Frame 1948758442',
										layoutDependency: c,
										layoutId: 'pLY80NmKZ',
										style: {
											'--border-bottom-width': '1px',
											'--border-color': 'rgb(0, 0, 0)',
											'--border-left-width': '1px',
											'--border-right-width': '1px',
											'--border-style': 'solid',
											'--border-top-width': '1px',
											backgroundColor: 'rgb(249, 109, 109)',
											borderBottomLeftRadius: 10,
											borderBottomRightRadius: 10,
											borderTopLeftRadius: 10,
											borderTopRightRadius: 10,
											boxShadow:
												'0px 4px 0px 0px rgba(0, 0, 0, 0.6499999761581421)',
										},
										whileHover: tr,
										children: e(o, {
											__fromCanvasComponent: !0,
											children: e(r, {
												children: e(i.p, {
													style: {
														'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
														'--framer-font-family':
															'"Inter", "Inter Placeholder", sans-serif',
														'--framer-font-weight': '600',
														'--framer-line-height': '140%',
														'--framer-text-alignment': 'center',
														'--framer-text-color':
															'var(--extracted-r6o4lv, rgb(255, 255, 255))',
													},
													children: 'Presale soon',
												}),
											}),
											className: 'framer-12k0xyf',
											'data-framer-name': 'Presale soon',
											fonts: ['Inter-SemiBold'],
											layoutDependency: c,
											layoutId: 'tPiPyNDdB',
											style: {
												'--extracted-r6o4lv': 'rgb(255, 255, 255)',
												'--framer-paragraph-spacing': '0px',
											},
											verticalAlignment: 'top',
											withExternalLayout: !0,
										}),
									}),
								}),
						],
					}),
				}),
			}),
		})
	}),
	lr = [
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		'.framer-95JB1.framer-1e399qj, .framer-95JB1 .framer-1e399qj { display: block; }',
		'.framer-95JB1.framer-yr3z4m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 16px 20px 18px 24px; position: relative; width: 1200px; will-change: var(--framer-will-change-override, transform); }',
		'.framer-95JB1 .framer-gho174 { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }',
		'.framer-95JB1 .framer-1nuzqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: 18px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
		'.framer-95JB1 .framer-180v4zz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 10px; position: relative; width: min-content; }',
		'.framer-95JB1 .framer-1nsh1q7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
		'.framer-95JB1 .framer-1voxf6w, .framer-95JB1 .framer-1wbfvb8, .framer-95JB1 .framer-15263yh, .framer-95JB1 .framer-1bkn6ao, .framer-95JB1 .framer-1od7kna, .framer-95JB1 .framer-12k0xyf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
		'.framer-95JB1 .framer-14idd2v { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }',
		'.framer-95JB1 .framer-1lcezz9 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
		'.framer-95JB1 .framer-3ektay { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
		'.framer-95JB1 .framer-9l8ujn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
		'.framer-95JB1 .framer-14hscyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 40px 10px 40px; position: relative; text-decoration: none; width: min-content; }',
		'@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-95JB1 .framer-1nuzqq, .framer-95JB1 .framer-180v4zz, .framer-95JB1 .framer-1nsh1q7, .framer-95JB1 .framer-9l8ujn, .framer-95JB1 .framer-14hscyh { gap: 0px; } .framer-95JB1 .framer-1nuzqq > *, .framer-95JB1 .framer-9l8ujn > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-95JB1 .framer-1nuzqq > :first-child, .framer-95JB1 .framer-180v4zz > :first-child, .framer-95JB1 .framer-1nsh1q7 > :first-child, .framer-95JB1 .framer-9l8ujn > :first-child, .framer-95JB1 .framer-14hscyh > :first-child { margin-left: 0px; } .framer-95JB1 .framer-1nuzqq > :last-child, .framer-95JB1 .framer-180v4zz > :last-child, .framer-95JB1 .framer-1nsh1q7 > :last-child, .framer-95JB1 .framer-9l8ujn > :last-child, .framer-95JB1 .framer-14hscyh > :last-child { margin-right: 0px; } .framer-95JB1 .framer-180v4zz > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-95JB1 .framer-1nsh1q7 > *, .framer-95JB1 .framer-14hscyh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }',
		'.framer-95JB1.framer-v-1gyl3hk.framer-yr3z4m { flex-direction: column; gap: 0px; justify-content: center; padding: 8px 10px 10px 20px; width: 390px; }',
		'.framer-95JB1.framer-v-1gyl3hk .framer-1nuzqq { flex-direction: column; gap: 0px; height: min-content; justify-content: center; width: 100%; }',
		'.framer-95JB1.framer-v-1gyl3hk .framer-180v4zz, .framer-95JB1.framer-v-1dghb1y .framer-180v4zz { gap: unset; justify-content: space-between; padding: 0px; width: 100%; }',
		'.framer-95JB1.framer-v-1gyl3hk .framer-14idd2v, .framer-95JB1.framer-v-1dghb1y .framer-14idd2v { cursor: pointer; height: 44px; width: 44px; }',
		'@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-95JB1.framer-v-1gyl3hk.framer-yr3z4m, .framer-95JB1.framer-v-1gyl3hk .framer-1nuzqq, .framer-95JB1.framer-v-1gyl3hk .framer-180v4zz { gap: 0px; } .framer-95JB1.framer-v-1gyl3hk.framer-yr3z4m > *, .framer-95JB1.framer-v-1gyl3hk .framer-1nuzqq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-95JB1.framer-v-1gyl3hk.framer-yr3z4m > :first-child, .framer-95JB1.framer-v-1gyl3hk .framer-1nuzqq > :first-child { margin-top: 0px; } .framer-95JB1.framer-v-1gyl3hk.framer-yr3z4m > :last-child, .framer-95JB1.framer-v-1gyl3hk .framer-1nuzqq > :last-child { margin-bottom: 0px; } .framer-95JB1.framer-v-1gyl3hk .framer-180v4zz > *, .framer-95JB1.framer-v-1gyl3hk .framer-180v4zz > :first-child, .framer-95JB1.framer-v-1gyl3hk .framer-180v4zz > :last-child { margin: 0px; } }',
		'.framer-95JB1.framer-v-1dghb1y.framer-yr3z4m { flex-direction: column; gap: 0px; justify-content: center; padding: 8px 10px 20px 20px; width: 390px; }',
		'.framer-95JB1.framer-v-1dghb1y .framer-gho174 { bottom: -1px; order: 2; right: 17px; }',
		'.framer-95JB1.framer-v-1dghb1y .framer-1nuzqq { flex-direction: column; gap: 10px; height: min-content; justify-content: center; order: 0; width: 100%; }',
		'.framer-95JB1.framer-v-1dghb1y .framer-1lcezz9, .framer-95JB1.framer-v-1dghb1y .framer-3ektay { top: calc(50.00000000000002% - 2px / 2); }',
		'.framer-95JB1.framer-v-1dghb1y .framer-9l8ujn { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; padding: 10px; width: 100%; }',
		'.framer-95JB1.framer-v-1dghb1y .framer-1wbfvb8, .framer-95JB1.framer-v-1dghb1y .framer-15263yh, .framer-95JB1.framer-v-1dghb1y .framer-1bkn6ao, .framer-95JB1.framer-v-1dghb1y .framer-1od7kna { cursor: pointer; }',
		'@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-95JB1.framer-v-1dghb1y.framer-yr3z4m, .framer-95JB1.framer-v-1dghb1y .framer-1nuzqq, .framer-95JB1.framer-v-1dghb1y .framer-180v4zz, .framer-95JB1.framer-v-1dghb1y .framer-9l8ujn { gap: 0px; } .framer-95JB1.framer-v-1dghb1y.framer-yr3z4m > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-95JB1.framer-v-1dghb1y.framer-yr3z4m > :first-child, .framer-95JB1.framer-v-1dghb1y .framer-1nuzqq > :first-child, .framer-95JB1.framer-v-1dghb1y .framer-9l8ujn > :first-child { margin-top: 0px; } .framer-95JB1.framer-v-1dghb1y.framer-yr3z4m > :last-child, .framer-95JB1.framer-v-1dghb1y .framer-1nuzqq > :last-child, .framer-95JB1.framer-v-1dghb1y .framer-9l8ujn > :last-child { margin-bottom: 0px; } .framer-95JB1.framer-v-1dghb1y .framer-1nuzqq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-95JB1.framer-v-1dghb1y .framer-180v4zz > *, .framer-95JB1.framer-v-1dghb1y .framer-180v4zz > :first-child, .framer-95JB1.framer-v-1dghb1y .framer-180v4zz > :last-child { margin: 0px; } .framer-95JB1.framer-v-1dghb1y .framer-9l8ujn > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }',
		...je,
		'.framer-95JB1[data-border="true"]::after, .framer-95JB1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
	],
	G = D(fr, lr, 'framer-95JB1'),
	pe = G
G.displayName = 'Navigation'
G.defaultProps = { height: 76, width: 1200 }
Xe(G, {
	variant: {
		options: ['NubfV5_NT', 'n8LRl0F4b', 'tvKuQyOqE'],
		optionTitles: ['Desktop', 'Phone', 'Phone Open'],
		title: 'Variant',
		type: We.Enum,
	},
})
_(
	G,
	[
		{
			explicitInter: !0,
			fonts: [
				{
					family: 'Lilita One',
					source: 'google',
					style: 'normal',
					url: 'https://fonts.gstatic.com/s/lilitaone/v15/i7dPIFZ9Zz-WBtRtedDbUEN2RFq7AwU.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
					url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
					url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+1F00-1FFF',
					url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0370-03FF',
					url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
					url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
					url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
					url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
					weight: '600',
				},
			],
		},
		...B(Ue),
	],
	{ supportsExplicitInterCodegen: !0 }
)
Y.loadFonts([])
var Ve = [{ explicitInter: !0, fonts: [] }],
	De = [
		'.framer-UBLmV .framer-styles-preset-1mqj1fz:not(.rich-text-wrapper), .framer-UBLmV .framer-styles-preset-1mqj1fz.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #ffffff; --framer-link-text-decoration: underline; }',
	],
	Me = 'framer-UBLmV'
var cr = Le(pe),
	hr = V(Oe),
	z = V(i.div),
	xe = V(h)
var dr = {
		hwto4p5xW: '(min-width: 1280px) and (max-width: 1919px)',
		NRXlhggHx: '(min-width: 810px) and (max-width: 1279px)',
		WoMHsoWdr: '(max-width: 809px)',
		WQLkyLRf1: '(min-width: 1920px)',
	},
	pr = () => typeof document < 'u',
	Ye = 'framer-PmoIx',
	xr = {
		hwto4p5xW: 'framer-v-i8mwk7',
		NRXlhggHx: 'framer-v-wnoffv',
		WoMHsoWdr: 'framer-v-lh59il',
		WQLkyLRf1: 'framer-v-72rtr7',
	},
	v = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring' },
	gr = {
		opacity: 0,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0,
		x: 0,
		y: 0,
	},
	f = (l, m) => `translateX(-50%) ${m}`,
	ur = ({ children: l, blockDocumentScrolling: m, enabled: g = !0 }) => {
		let [s, d] = Te({ blockDocumentScrolling: m })
		return l({
			hide: () => d(!1),
			show: () => d(!0),
			toggle: () => d(!s),
			visible: g && s,
		})
	},
	W = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: 'inertia' },
	X = l => l.preventDefault(),
	ge = {
		opacity: 1,
		rotate: 10,
		rotateX: 0,
		rotateY: 0,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	Z = { cursor: 'grabbing' },
	ue = {
		opacity: 1,
		rotate: -10,
		rotateX: 0,
		rotateY: 0,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	yr = {
		backgroundColor: 'rgb(255, 253, 135)',
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	wr = { delay: 0, duration: 1.5, ease: [0, 0, 1, 1], type: 'tween' },
	br = {
		opacity: 1,
		rotate: 360,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0,
		x: 0,
		y: 0,
	},
	Ir = (l, m) => `translate(-50%, -50%) ${m}`,
	I = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	vr = {
		backgroundColor: 'rgb(255, 253, 135)',
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	Pr = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: 'tween' },
	_e = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0,
		x: 0,
		y: 10,
	},
	Rr = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.5, 1], type: 'tween' },
	Fr = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 350,
		scale: 1.1,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	Be = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 350,
		scale: 0.9,
		skewX: 0,
		skewY: 0,
		transition: v,
	},
	Q = H(),
	kr = {
		'Desktop 2': 'hwto4p5xW',
		Desktop: 'WQLkyLRf1',
		Mobile: 'WoMHsoWdr',
		Tablet: 'NRXlhggHx',
	},
	zr = ({ height: l, id: m, width: g, ...s }) => {
		var d, y
		return {
			...s,
			variant:
				(y = (d = kr[s.variant]) !== null && d !== void 0 ? d : s.variant) !==
					null && y !== void 0
					? y
					: 'WQLkyLRf1',
		}
	},
	Wr = L(function (l, m) {
		let { activeLocale: g, setLocale: s } = N(),
			{ style: d, className: y, layoutId: P, variant: ee, ...re } = zr(l)
		Re(() => {
			let p = H(void 0, g)
			if (p.robots) {
				let u = document.querySelector('meta[name="robots"]')
				u
					? u.setAttribute('content', p.robots)
					: ((u = document.createElement('meta')),
					  u.setAttribute('name', 'robots'),
					  u.setAttribute('content', p.robots),
					  document.head.appendChild(u))
			}
		}, [void 0, g]),
			Fe(() => {
				let p = H(void 0, g)
				if (((document.title = p.title || ''), p.viewport)) {
					var u
					;(u = document.querySelector('meta[name="viewport"]')) === null ||
						u === void 0 ||
						u.setAttribute('content', p.viewport)
				}
				let le = p.bodyClassName
				if (le) {
					let se = document.body
					se.classList.forEach(
						ve => ve.startsWith('framer-body-') && se.classList.remove(ve)
					),
						se.classList.add(`${p.bodyClassName}-framer-PmoIx`)
				}
				return () => {
					le &&
						document.body.classList.remove(`${p.bodyClassName}-framer-PmoIx`)
				}
			}, [void 0, g])
		let [a, ye] = Ce(ee, dr, !1),
			He = void 0,
			{ activeVariantCallback: te, delay: R } = M(void 0),
			we = ({ overlay: p, paginationInfo: u }) =>
				te(async (...le) => {
					p.toggle()
				}),
			be = b(null),
			A = F('vAHPW_r9B'),
			C = b(null),
			c = F('agcawYLBV'),
			T = b(null),
			Ie = F('T2qqrgCYm'),
			ae = b(null),
			w = () => (pr() ? a !== 'WoMHsoWdr' : !0),
			ne = F('WIXrMuZIL'),
			oe = b(null),
			ie = F('q2lCNNmIU'),
			me = b(null),
			fe = U(),
			E = [Me]
		return (
			Ge({}),
			e(Ae.Provider, {
				value: { primaryVariantId: 'WQLkyLRf1', variantClassNames: xr },
				children: t(S, {
					id: P ?? fe,
					children: [
						t(i.div, {
							...re,
							className: O(Ye, ...E, 'framer-72rtr7', y),
							ref: m ?? be,
							style: { ...d },
							children: [
								e(n, {
									breakpoint: a,
									overrides: { hwto4p5xW: { width: '95vw' } },
									children: e(Se, {
										width: '95.0521vw',
										children: e(n, {
											breakpoint: a,
											overrides: {
												NRXlhggHx: {
													__framer__styleAppearEffectEnabled: void 0,
												},
												WoMHsoWdr: {
													__framer__styleAppearEffectEnabled: void 0,
												},
											},
											children: e(hr, {
												__framer__animate: { transition: v },
												__framer__animateOnce: !1,
												__framer__scrollDirection: {
													direction: 'down',
													target: gr,
												},
												__framer__styleAppearEffectEnabled: !0,
												__framer__threshold: 0.5,
												__perspectiveFX: !1,
												__targetOpacity: 1,
												className: 'framer-1muvhg0-container',
												layoutScroll: !0,
												transformTemplate: f,
												children: e(n, {
													breakpoint: a,
													overrides: {
														NRXlhggHx: { variant: 'n8LRl0F4b' },
														WoMHsoWdr: { variant: 'n8LRl0F4b' },
													},
													children: e(pe, {
														height: '100%',
														id: 'RFYRXhlGS',
														layoutId: 'RFYRXhlGS',
														style: { width: '100%' },
														variant: 'NubfV5_NT',
														width: '100%',
													}),
												}),
											}),
										}),
									}),
								}),
								e(ur, {
									children: p =>
										e(ce, {
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: { onTap: void 0 },
													NRXlhggHx: { onTap: void 0 },
													WoMHsoWdr: { onTap: void 0 },
												},
												children: t(i.div, {
													className: 'framer-rdxkp8',
													'data-framer-name': 'Hero',
													id: 'rdxkp8',
													name: 'Hero',
													onTap: we({ overlay: p }),
													children: [
														e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		pixelHeight: 900,
																		pixelWidth: 1600,
																		positionX: 'center',
																		positionY: 'bottom',
																		sizes: '100vw',
																		src: 'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png',
																		srcSet:
																			'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png 1600w',
																	},
																},
																NRXlhggHx: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		pixelHeight: 900,
																		pixelWidth: 1600,
																		positionX: 'center',
																		positionY: 'top',
																		sizes: '100.0521vw',
																		src: 'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png',
																		srcSet:
																			'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png 1600w',
																	},
																},
																WoMHsoWdr: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		pixelHeight: 1600,
																		pixelWidth: 900,
																		positionX: 'center',
																		positionY: 'top',
																		sizes: '100vw',
																		src: 'https://framerusercontent.com/images/WNVN5H64zlgtOJpEUNn3we4qdM.png',
																		srcSet:
																			'https://framerusercontent.com/images/WNVN5H64zlgtOJpEUNn3we4qdM.png?scale-down-to=1024 576w,https://framerusercontent.com/images/WNVN5H64zlgtOJpEUNn3we4qdM.png 900w',
																	},
																},
															},
															children: e(h, {
																background: {
																	alt: '',
																	fit: 'fill',
																	pixelHeight: 900,
																	pixelWidth: 1600,
																	positionX: 'center',
																	positionY: 'bottom',
																	sizes: '100.0521vw',
																	src: 'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png',
																	srcSet:
																		'https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5hbSVnoL22RmqDTkBI0RtpwbeDM.png 1600w',
																},
																className: 'framer-1sopt9s',
																'data-framer-name': 'Rectangle 2',
																id: A,
																name: 'Rectangle 2',
																ref: C,
															}),
														}),
														e(he, {
															children:
																p.visible &&
																e(ce, {
																	children: ze(
																		e(r, {
																			children: e(
																				i.div,
																				{
																					animate: {
																						opacity: 1,
																						transition: {
																							delay: 0,
																							duration: 0,
																							ease: [0.5, 0, 0.88, 0.77],
																							type: 'tween',
																						},
																					},
																					className: 'framer-17bnxty',
																					'data-framer-portal-id': 'rdxkp8',
																					exit: {
																						opacity: 0,
																						transition: {
																							delay: 0,
																							duration: 0,
																							ease: [0.12, 0.23, 0.5, 1],
																							type: 'tween',
																						},
																					},
																					initial: { opacity: 0 },
																					onTap: () => p.hide(),
																				},
																				'Ahr1FpRdx'
																			),
																		}),
																		document.querySelector('#overlay')
																	),
																}),
														}),
													],
												}),
											}),
										}),
								}),
								t('div', {
									className: 'new-div',
									children: [
										t('div', {
											className: 'newDivTitle',
											children: [
												e('h1', {
													children: [
														'Get your ',
														e('span', {
															children: '$VODKA',
														}),
														' in 10 minutes',
													],
												}),
												e('h1', {
													children: [
														e('span', {
															children: '25,555 SOL',
														}),
														' HARDCAP',
													],
												}),
												e('p', {
													children:
														'$VODKA is the the next big memecoin on Solana that represents the ultimate scarcity and value of time',
												}),
											],
										}),
										t('div', {
											className: 'c-PJLV c-PJLV-idYkkGp-css',
											children: [
												t('div', {
													className: 'c-PJLV c-PJLV-iidirVF-css',
													children: [
														t('div', {
															className: 'c-PJLV c-PJLV-icdoWOC-css',
															children: [
																t('div', {
																	className: 'c-PJLV c-PJLV-ieWAuHs-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ihRIWZT-css',
																			children: '1',
																		}),
																	],
																}),
																t('div', {
																	className: 'c-PJLV c-PJLV-iYNlDw-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ePtfAL-fontWeight-700 c-gmdRNP-fPSeYF-color-white c-gmdRNP-ihZDNqO-css',
																			children: 'PREPARE A WALLET',
																		}),
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-fPSeYF-color-white c-gmdRNP-idLoIPz-css',
																			children: [
																				'The potential $VODKA holder should have a Solana-based wallet to operate with NFT and cryptocurrencies.',
																				t('span', {
																					children: 'Phantom Wallet',
																				}),
																				' works perfectly fine.',
																			],
																		}),
																	],
																}),
															],
														}),
														t('div', {
															className: 'c-PJLV c-PJLV-icdoWOC-css',
															children: [
																t('div', {
																	className: 'c-PJLV c-PJLV-ieWAuHs-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ihRIWZT-css',
																			children: '2',
																		}),
																	],
																}),
																t('div', {
																	className: 'c-PJLV c-PJLV-iYNlDw-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ePtfAL-fontWeight-700 c-gmdRNP-fPSeYF-color-white c-gmdRNP-ihZDNqO-css',
																			children: 'BUY SOLANA',
																		}),
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-fPSeYF-color-white c-gmdRNP-ihmAoyT-css',
																			children: [
																				'To participate you need to have $SOL on your wallet. You can buy Solana on any CEX or exchange like ',
																				t('a', {
																					href: 'https://binance.com',
																					target: '_blank',
																					children: [
																						t('img', {
																							alt: 'binance',
																							loading: 'lazy',
																							width: '24',
																							height: '24',
																							decoding: 'async',
																							className: 'c-PJLV',
																							style: { color: 'transparent' },
																							src: 'images/binance.svg',
																						}),
																						' Binance',
																					],
																				}),
																				', ',
																				t('a', {
																					href: 'ru.htm',
																					target: '_blank',
																					children: [
																						t('img', {
																							alt: 'binance',
																							loading: 'lazy',
																							width: '24',
																							height: '24',
																							decoding: 'async',
																							className: 'c-PJLV',
																							style: { color: 'transparent' },
																							srcset: '/images/okx.png',
																							src: '/images/okx.png',
																						}),
																						' OKX',
																					],
																				}),
																				', ',
																				t('a', {
																					href: 'index-1.htm',
																					target: '_blank',
																					children: [
																						t('img', {
																							alt: 'binance',
																							loading: 'lazy',
																							width: '24',
																							height: '24',
																							decoding: 'async',
																							className: 'c-PJLV',
																							style: { color: 'transparent' },
																							srcset: '/images/bitpanda.png',
																							src: '/images/bitpanda.png',
																						}),
																						' Bitpanda',
																					],
																				}),
																				', ',
																				t('a', {
																					href: 'index-2.htm',
																					target: '_blank',
																					children: [
																						t('img', {
																							alt: 'binance',
																							loading: 'lazy',
																							width: '24',
																							height: '24',
																							decoding: 'async',
																							className: 'c-PJLV',
																							style: { color: 'transparent' },
																							srcset: '/images/cryptocom.png',
																							src: '/images/cryptocom.png',
																						}),
																						' Crypto.com',
																					],
																				}),
																				', or anything else and send it to your wallet.',
																			],
																		}),
																	],
																}),
															],
														}),
														t('div', {
															className: 'c-PJLV c-PJLV-icdoWOC-css',
															children: [
																t('div', {
																	className: 'c-PJLV c-PJLV-ieWAuHs-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ihRIWZT-css',
																			children: '3',
																		}),
																	],
																}),
																t('div', {
																	className: 'c-PJLV c-PJLV-iYNlDw-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ePtfAL-fontWeight-700 c-gmdRNP-fPSeYF-color-white c-gmdRNP-ihZDNqO-css',
																			children: [
																				'BUY ',
																				t('span', {
																					children: '$TIME',
																				}),
																			],
																		}),
																		t('div', {
																			className: 'c-PJLV',
																			children: [
																				t('div', {
																					className:
																						'c-jOUXrB c-gmdRNP c-gmdRNP-fPSeYF-color-white c-gmdRNP-icHGwvX-css',
																					children: [
																						'After that, send up to 150 SOL from PHANTOM Wallet to the Presale address you will find on ',
																						t('span', {
																							children: 'vodkatoken.io',
																						}),
																						'  and our offical social accounts. Be prepared – the presale will last only 10 minutes! ',
																						t('img', {
																							src: './images/block1.png',
																							alt: '',
																						}),
																					],
																				}),
																			],
																		}),
																	],
																}),
															],
														}),
														t('div', {
															className: 'c-PJLV c-PJLV-icdoWOC-css',
															children: [
																t('div', {
																	className: 'c-PJLV c-PJLV-ieWAuHs-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ihRIWZT-css',
																			children: '4',
																		}),
																	],
																}),
																t('div', {
																	className: 'c-PJLV c-PJLV-iYNlDw-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ePtfAL-fontWeight-700 c-gmdRNP-fPSeYF-color-white c-gmdRNP-ihZDNqO-css',
																			children: [
																				'ADD ',
																				t('span', {
																					children: '$VODKA',
																				}),
																				' to your wallet',
																			],
																		}),
																		t('div', {
																			className: 'c-PJLV',
																			children: [
																				t('div', {
																					className:
																						'c-jOUXrB c-gmdRNP c-gmdRNP-fPSeYF-color-white c-gmdRNP-iZbViW-css',
																					children: [
																						'Listing happens within 24 hours after the presale has ended. TGE starts the moment the token is listed. ',
																						t('b', {
																							children: [
																								'Have any questions? ',
																								t('a', {
																									href: 'untitled.htm',
																									children: 'Read $VODKA WIKI',
																								}),
																							],
																						}),
																						t('img', {
																							src: './images/block2.png',
																							alt: '',
																						}),
																					],
																				}),
																			],
																		}),
																	],
																}),
															],
														}),
													],
												}),
												t('div', {
													id: 'presale',
													className: 'c-PJLV c-PJLV-iiMTLeK-css',
													children: [
														t('div', {
															className: 'c-PJLV c-PJLV-ijnIizc-css',
															children: [
																t('div', {
																	className:
																		'c-jOUXrB c-gmdRNP c-gmdRNP-fPSeYF-color-white c-gmdRNP-cGgmEV-fontSize-xxl c-gmdRNP-KuHyo-textTransform-uppercase c-gmdRNP-iiASqHt-css',
																	children: 'Presale DETAILS',
																}),
																t('div', {
																	className: 'c-PJLV c-PJLV-idPCaGw-css',
																	children: [
																		t('div', {
																			className:
																				'c-jOUXrB c-gmdRNP c-gmdRNP-ecBjWS-fontWeight-600 c-gmdRNP-fPSeYF-color-white c-gmdRNP-ixVeur-css',
																			children:
																				'FwKD9VVSjAMxSyLaTK2H92g9vzYVdHrBAi4ZtkgBxNtc',
																		}),

																		t('button', {
																			className:
																				'c-fkunLS c-jOQukA c-jOQukA-ighZpQj-css copy_btn',
																			children: 'Copy',
																			onclick: copyToClipboard(),
																		}),
																		function copyToClipboard() {
																			const textToCopy =
																				'FwKD9VVSjAMxSyLaTK2H92g9vzYVdHrBAi4ZtkgBxNtc'
																			navigator.clipboard
																				.writeText(textToCopy)
																				.then(() => {
																					console.log(
																						'Text copied to clipboard'
																					)
																				})
																				.catch(err => {
																					console.error(
																						'Failed to copy text: ',
																						err
																					)
																				})
																		},
																	],
																}),
																t('button', {
																	className:
																		'c-fkunLS c-jOQukA c-jOQukA-ihtUKkZ-css copy_btn',
																	children: 'Copy',
																	onclick: copyToClipboard(),
																}),
																function copyToClipboard() {
																	const textToCopy =
																		'FwKD9VVSjAMxSyLaTK2H92g9vzYVdHrBAi4ZtkgBxNtc'
																	navigator.clipboard
																		.writeText(textToCopy)
																		.then(() => {
																			console.log('Text copied to clipboard')
																		})
																		.catch(err => {
																			console.error(
																				'Failed to copy text: ',
																				err
																			)
																		})
																},
																t('div', {
																	className:
																		'c-jOUXrB c-gmdRNP c-gmdRNP-icgUdqR-css',
																	children: 'MORE tokens every round',
																}),
																t('p', {
																	className: 'p-new',
																	children: [
																		'HARDCAP 25.555 SOL in 5 rounds. 0.28 ',
																		t('span', {
																			children: '$VODKA',
																		}),
																		' ',
																		t('br', {}),
																		' with $ bonus tokens per round:',
																	],
																}),
																t('div', {
																	className: 'loading-div-new',
																	children: [
																		t('div', {
																			className: 'active-loading',
																			children: [
																				t('span', {
																					children: '36%',
																				}),
																			],
																		}),
																	],
																}),
																t('div', {
																	className: 'loading-bottom',
																	children: [
																		t('span', {
																			children: '0 $SOL',
																		}),
																		t('div', {
																			className: 'center',
																			children: [
																				t('h4', {
																					children: [
																						'Current bonus: ',
																						t('span', {
																							children: '35%',
																						}),
																					],
																				}),
																			],
																		}),
																		t('span', {
																			children: '111,111 $SOL',
																		}),
																	],
																}),
																t('div', {
																	className:
																		'c-jOUXrB c-gmdRNP c-gmdRNP-idiZhjN-css',
																	children: [
																		'Min. Investment per wallet - 0.1 SOL ',
																		t('br', {}),
																		' Max. Investment per wallet - 200 SOL',
																	],
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								t('div', {
									className: 'framer-1kvggyw',
									'data-framer-name': 'Frame 1948758459',
									id: c,
									name: 'Frame 1948758459',
									ref: T,
									children: [
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														sizes: '600px',
														src: 'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png',
														srcSet:
															'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png?scale-down-to=512 512w,https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png 1000w',
													},
												},
												NRXlhggHx: {
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														sizes: '100vw',
														src: 'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png',
														srcSet:
															'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png?scale-down-to=512 512w,https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png 1000w',
													},
												},
												WoMHsoWdr: {
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														sizes: '100vw',
														src: 'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png',
														srcSet:
															'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png?scale-down-to=512 512w,https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png 1000w',
													},
												},
											},
											children: e(h, {
												background: {
													alt: '',
													fit: 'fill',
													loading: 'lazy',
													sizes: '800px',
													src: 'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png',
													srcSet:
														'https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png?scale-down-to=512 512w,https://framerusercontent.com/images/YxU3DNyeYqxuvC79fZSuVMbgWo.png 1000w',
												},
												className: 'framer-bzx79m',
												'data-framer-name': 'place (1) 1',
												name: 'place (1) 1',
												transformTemplate: f,
											}),
										}),
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '60px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: '$VODKA',
														}),
													}),
												},
												NRXlhggHx: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '60px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: '$VODKA',
														}),
													}),
												},
												WoMHsoWdr: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '32px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: '$VODKA',
														}),
													}),
												},
											},
											children: e(o, {
												__fromCanvasComponent: !0,
												children: e(r, {
													children: e('p', {
														style: {
															'--font-selector': 'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
															'--framer-font-family':
																'"Lilita One", sans-serif',
															'--framer-font-size': '80px',
															'--framer-line-height': '100%',
															'--framer-text-alignment': 'center',
															'--framer-text-color': 'rgb(58, 163, 244)',
														},
														children: '$VODKA',
													}),
												}),
												className: 'framer-ubhggx',
												'data-framer-name': '$VODKA',
												fonts: ['GF;Lilita One-regular'],
												name: '$VODKA',
												transformTemplate: f,
												verticalAlignment: 'top',
												withExternalLayout: !0,
											}),
										}),
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '24px',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'And we\u2019ve got big plans',
														}),
													}),
												},
												NRXlhggHx: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '24px',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'And we\u2019ve got big plans',
														}),
													}),
													transformTemplate: void 0,
												},
												WoMHsoWdr: {
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '18px',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'And we\u2019ve got big plans',
														}),
													}),
												},
											},
											children: e(o, {
												__fromCanvasComponent: !0,
												children: e(r, {
													children: e('p', {
														style: {
															'--font-selector': 'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
															'--framer-font-family':
																'"Lilita One", sans-serif',
															'--framer-font-size': '40px',
															'--framer-line-height': '140%',
															'--framer-text-alignment': 'center',
															'--framer-text-color': 'rgb(42, 76, 117)',
														},
														children: 'And we\u2019ve got big plans',
													}),
												}),
												className: 'framer-11mn4ps',
												'data-framer-name': 'And we\u2019ve got big plans',
												fonts: ['GF;Lilita One-regular'],
												name: 'And we\u2019ve got big plans',
												transformTemplate: f,
												verticalAlignment: 'top',
												withExternalLayout: !0,
											}),
										}),
										t('div', {
											className: 'framer-1i6urjr',
											'data-framer-name': 'Frame 1948758465',
											name: 'Frame 1948758465',
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'You are the',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'You are the',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'You are the',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																	'--framer-text-transform': 'uppercase',
																},
																children: 'You are the',
															}),
														}),
														className: 'framer-6kuhdb',
														'data-framer-name': 'You are the',
														fonts: ['GF;Lilita One-regular'],
														name: 'You are the',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: '#1',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: '#1',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: '#1',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(88, 183, 231)',
																	'--framer-text-transform': 'uppercase',
																},
																children: '#1',
															}),
														}),
														className: 'framer-19zih48',
														'data-framer-name': '#1',
														fonts: ['GF;Lilita One-regular'],
														name: '#1',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'priority',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'priority',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(88, 183, 231)',
																		'--framer-text-transform': 'uppercase',
																	},
																	children: 'priority',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(88, 183, 231)',
																	'--framer-text-transform': 'uppercase',
																},
																children: 'priority',
															}),
														}),
														className: 'framer-l25tz9',
														'data-framer-name': 'priority',
														fonts: ['GF;Lilita One-regular'],
														name: 'priority',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-xk0ohv',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758467',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758467',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ge,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Fun Games',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Fun Games',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Fun Games',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Fun Games',
														}),
													}),
													className: 'framer-81oop2',
													'data-framer-name': 'Fun Games',
													fonts: ['Inter-SemiBold'],
													name: 'Fun Games',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-1sw1soa',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758468',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758468',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ue,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Influencers',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Influencers',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Influencers',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Influencers',
														}),
													}),
													className: 'framer-1cp64xu',
													'data-framer-name': 'Influencers',
													fonts: ['Inter-SemiBold'],
													name: 'Influencers',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-1o5fzz6',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758455',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758455',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ue,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Merchandise',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Merchandise',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Merchandise',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Merchandise',
														}),
													}),
													className: 'framer-123ia45',
													'data-framer-name': 'Merchandise',
													fonts: ['Inter-SemiBold'],
													name: 'Merchandise',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-1cewjx4',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758469',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758469',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ge,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Unlimited growth',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Unlimited growth',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Unlimited growth',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Unlimited growth',
														}),
													}),
													className: 'framer-29gkyr',
													'data-framer-name': 'Unlimited growth',
													fonts: ['Inter-SemiBold'],
													name: 'Unlimited growth',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-18wgnzl',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758470',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758470',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ue,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Many listings',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Many listings',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Many listings',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Many listings',
														}),
													}),
													className: 'framer-gg6j5g',
													'data-framer-name': 'Many listings',
													fonts: ['Inter-SemiBold'],
													name: 'Many listings',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(z, {
											__perspectiveFX: !1,
											__targetOpacity: 1,
											className: 'framer-2l0vrt',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758466',
											drag: !0,
											dragMomentum: !1,
											dragSnapToOrigin: !0,
											dragTransition: W,
											name: 'Frame 1948758466',
											onMouseDown: X,
											transformTemplate: f,
											whileHover: ge,
											whileTap: Z,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Mass Marketing',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Mass Marketing',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Mass Marketing',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Mass Marketing',
														}),
													}),
													className: 'framer-xj8wc0',
													'data-framer-name': 'Mass Marketing',
													fonts: ['Inter-SemiBold'],
													name: 'Mass Marketing',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
									],
								}),
								e('div', {
									className: 'framer-gktphm',
									'data-framer-name': 'Frame 1948758496',
									name: 'Frame 1948758496',
									children: e('div', {
										className: 'framer-1eyo6xm',
										'data-border': !0,
										'data-framer-name': 'Frame 1948758443',
										name: 'Frame 1948758443',
										children: t('div', {
											className: 'framer-e9vivy',
											'data-framer-name': 'Frame 1948758512',
											name: 'Frame 1948758512',
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(255, 255, 255)',
																	},
																	children: 'Join the Community',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '60px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(255, 255, 255)',
																},
																children: 'Join the Community',
															}),
														}),
														className: 'framer-1k3jpx4',
														'data-framer-name': 'Join the Community',
														fonts: ['GF;Lilita One-regular'],
														name: 'Join the Community',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 900,
																pixelWidth: 1600,
																sizes: '800px',
																src: 'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png',
																srcSet:
																	'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png 1600w',
															},
														},
														NRXlhggHx: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 900,
																pixelWidth: 1600,
																sizes: '100vw',
																src: 'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png',
																srcSet:
																	'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png 1600w',
															},
														},
													},
													children: e(h, {
														background: {
															alt: '',
															fit: 'fill',
															loading: 'lazy',
															pixelHeight: 900,
															pixelWidth: 1600,
															sizes: '1171px',
															src: 'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png',
															srcSet:
																'https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZEeNTIUzb0Jo9fAliCuXWgIZjfA.png 1600w',
														},
														className: 'framer-1l09mx8',
														'data-framer-name': 'DJ',
														name: 'DJ',
													}),
												}),
												e(x, {
													href: 'https://vodkatoken.io/',
													children: e(i.a, {
														className: 'framer-8fepo framer-lux5qc',
														'data-border': !0,
														'data-framer-name': 'Frame 1948758442',
														name: 'Frame 1948758442',
														whileHover: yr,
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItQm9sZA==',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-font-weight': '700',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(55, 54, 54)',
																	},
																	children: 'Presale soon',
																}),
															}),
															className: 'framer-cb1t89',
															'data-framer-name': 'Presale soon',
															fonts: ['Inter-Bold'],
															name: 'Presale soon',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
												}),
											],
										}),
									}),
								}),
								t('div', {
									className: 'framer-1apxpsq',
									'data-framer-name': 'Frame 1948758446',
									id: Ie,
									name: 'Frame 1948758446',
									ref: ae,
									children: [
										t('div', {
											className: 'framer-ee35la',
											'data-framer-name': 'Frame 1948758466',
											name: 'Frame 1948758466',
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Onchain Game: ',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Onchain Game: ',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Onchain Game: ',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '50px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Onchain Game: ',
															}),
														}),
														className: 'framer-oxvo8f',
														'data-framer-name': 'Onchain Game:',
														fonts: ['GF;Lilita One-regular'],
														name: 'Onchain Game:',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(58, 163, 244)',
																	},
																	children: 'Spin The Bottle!',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(58, 163, 244)',
																	},
																	children: 'Spin The Bottle!',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(58, 163, 244)',
																	},
																	children: 'Spin The Bottle!',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '50px',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'Spin The Bottle!',
															}),
														}),
														className: 'framer-gw3pmj',
														'data-framer-name': 'Spin The Bottle!',
														fonts: ['GF;Lilita One-regular'],
														name: 'Spin The Bottle!',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--framer-font-size': '20px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children:
																	'Spin the bottle and find out who pays for shots.',
															}),
															e('p', {
																style: {
																	'--framer-font-size': '20px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Win and get even more $VODKA!',
															}),
														],
													}),
												},
												NRXlhggHx: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--framer-font-size': '24px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children:
																	'Spin the bottle and find out who pays for shots.',
															}),
															e('p', {
																style: {
																	'--framer-font-size': '24px',
																	'--framer-line-height': '120%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Win and get even more $VODKA!',
															}),
														],
													}),
												},
												WoMHsoWdr: {
													children: e(r, {
														children: e('p', {
															style: {
																'--framer-font-size': '14px',
																'--framer-line-height': '120%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children:
																'Spin the bottle and find out who pays for shots. Win and get even more $VODKA!',
														}),
													}),
												},
											},
											children: e(o, {
												__fromCanvasComponent: !0,
												children: t(r, {
													children: [
														e('p', {
															style: {
																'--framer-font-size': '30px',
																'--framer-line-height': '120%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children:
																'Spin the bottle and find out who pays for shots.',
														}),
														e('p', {
															style: {
																'--framer-font-size': '30px',
																'--framer-line-height': '120%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Win and get even more $VODKA!',
														}),
													],
												}),
												className: 'framer-17k71j8',
												'data-framer-name':
													'Spin the bottle and find out who pays for shots. Win and get even more $VODKA!',
												fonts: ['Inter'],
												name: 'Spin the bottle and find out who pays for shots. Win and get even more $VODKA!',
												transformTemplate: f,
												verticalAlignment: 'top',
												withExternalLayout: !0,
											}),
										}),
										t('div', {
											className: 'framer-1fnyn3z',
											'data-framer-name': 'Group 1',
											name: 'Group 1',
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														NRXlhggHx: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 2e3,
																pixelWidth: 2e3,
																sizes: '100vw',
																src: 'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png',
																srcSet:
																	'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png 2000w',
															},
														},
														WoMHsoWdr: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 2e3,
																pixelWidth: 2e3,
																sizes: '100vw',
																src: 'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png',
																srcSet:
																	'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png 2000w',
															},
														},
													},
													children: e(h, {
														background: {
															alt: '',
															fit: 'fill',
															loading: 'lazy',
															pixelHeight: 2e3,
															pixelWidth: 2e3,
															sizes: '800px',
															src: 'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png',
															srcSet:
																'https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6o8GZbv3NjDo6lzwv2oYjmZZB4Q.png 2000w',
														},
														className: 'framer-1vq102f',
														'data-framer-name': 'butilch',
														name: 'butilch',
														transformTemplate: f,
														children: e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: { transformTemplate: void 0 },
																NRXlhggHx: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: '401px',
																		src: 'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png',
																		srcSet:
																			'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png?scale-down-to=512 512w,https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png 1000w',
																	},
																	transformTemplate: void 0,
																},
																WoMHsoWdr: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: '179px',
																		src: 'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png',
																		srcSet:
																			'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png?scale-down-to=512 512w,https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png 1000w',
																	},
																	transformTemplate: void 0,
																},
															},
															children: e(xe, {
																__framer__loop: br,
																__framer__loopEffectEnabled: !0,
																__framer__loopRepeatDelay: 0,
																__framer__loopRepeatType: 'loop',
																__framer__loopTransition: wr,
																__perspectiveFX: !1,
																__targetOpacity: 1,
																background: {
																	alt: '',
																	fit: 'fill',
																	loading: 'lazy',
																	sizes: '400px',
																	src: 'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png',
																	srcSet:
																		'https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png?scale-down-to=512 512w,https://framerusercontent.com/images/AVPxABspeXhMC6YFKrwkrixiXfI.png 1000w',
																},
																className: 'framer-11zp4m2',
																'data-framer-name': 'damag',
																name: 'damag',
																transformTemplate: Ir,
															}),
														}),
													}),
												}),
												w() &&
													e('div', {
														className: 'framer-fp0rtk hidden-lh59il',
														'data-border': !0,
														'data-framer-name': 'Frame 1948758472',
														name: 'Frame 1948758472',
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--framer-font-size': '16px',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																	},
																	children: e('span', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family': '"Lilita One"',
																			'--framer-font-size': '16px',
																			'--framer-text-color':
																				'rgba(87, 187, 122, 1)',
																		},
																		children: 'More fun with $VODKA!',
																	}),
																}),
															}),
															className: 'framer-8nkemn',
															'data-framer-name': 'More fun with $VODKA!',
															fonts: ['GF;Lilita One-regular'],
															name: 'More fun with $VODKA!',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
											],
										}),
										e(i.div, {
											className: 'framer-je8xcm',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758469',
											name: 'Frame 1948758469',
											transformTemplate: f,
											whileHover: I,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Make a splash with your cash',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Make a splash with your cash',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Make a splash with your cash',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Make a splash with your cash',
														}),
													}),
													className: 'framer-1692ktc',
													'data-framer-name': 'Make a splash with your cash',
													fonts: ['Inter-SemiBold'],
													name: 'Make a splash with your cash',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(i.div, {
											className: 'framer-fuf4a4',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758470',
											name: 'Frame 1948758470',
											transformTemplate: f,
											whileHover: I,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children:
																	'Bigger bet = higher chance to win the pot!',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children:
																	'Bigger bet = higher chance to win the pot!',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children:
																	'Bigger bet = higher chance to win the pot!',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children:
																'Bigger bet = higher chance to win the pot!',
														}),
													}),
													className: 'framer-tkbzaz',
													'data-framer-name':
														'Bigger bet = higher chance to win the pot!',
													fonts: ['Inter-SemiBold'],
													name: 'Bigger bet = higher chance to win the pot!',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
										e(i.div, {
											className: 'framer-jm5a72',
											'data-border': !0,
											'data-framer-name': 'Frame 1948758471',
											name: 'Frame 1948758471',
											transformTemplate: f,
											whileHover: I,
											children: e(n, {
												breakpoint: a,
												overrides: {
													hwto4p5xW: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Strategise or trust your gut!',
															}),
														}),
													},
													NRXlhggHx: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '18px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Strategise or trust your gut!',
															}),
														}),
													},
													WoMHsoWdr: {
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																	'--framer-font-family':
																		'"Inter", "Inter Placeholder", sans-serif',
																	'--framer-font-size': '14px',
																	'--framer-font-weight': '600',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Strategise or trust your gut!',
															}),
														}),
													},
												},
												children: e(o, {
													__fromCanvasComponent: !0,
													children: e(r, {
														children: e('p', {
															style: {
																'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																'--framer-font-family':
																	'"Inter", "Inter Placeholder", sans-serif',
																'--framer-font-size': '20px',
																'--framer-font-weight': '600',
																'--framer-line-height': '140%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(42, 76, 117)',
															},
															children: 'Strategise or trust your gut!',
														}),
													}),
													className: 'framer-18gwlrh',
													'data-framer-name': 'Strategise or trust your gut!',
													fonts: ['Inter-SemiBold'],
													name: 'Strategise or trust your gut!',
													verticalAlignment: 'top',
													withExternalLayout: !0,
												}),
											}),
										}),
									],
								}),
								e('div', {
									className: 'framer-14r5nw4',
									'data-framer-name': 'Frame 1948758495',
									name: 'Frame 1948758495',
									children: t('div', {
										className: 'framer-67vdpo',
										'data-border': !0,
										'data-framer-name': 'Frame 1948758479',
										name: 'Frame 1948758479',
										children: [
											t('div', {
												className: 'framer-bdhq95',
												'data-framer-name': 'Frame 1948758465',
												name: 'Frame 1948758465',
												children: [
													e(n, {
														breakpoint: a,
														overrides: {
															hwto4p5xW: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-line-height': '120%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: ' $VODKA ',
																	}),
																}),
															},
															NRXlhggHx: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-line-height': '120%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: ' $VODKA ',
																	}),
																}),
															},
															WoMHsoWdr: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '120%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: ' $VODKA ',
																	}),
																}),
															},
														},
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '80px',
																		'--framer-line-height': '120%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(255, 255, 255)',
																	},
																	children: ' $VODKA ',
																}),
															}),
															className: 'framer-1lhpjp7',
															'data-framer-name': '$VODKA',
															fonts: ['GF;Lilita One-regular'],
															name: '$VODKA',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
													e(n, {
														breakpoint: a,
														overrides: {
															hwto4p5xW: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children: 'HOLDERS LIVE IT UP!',
																	}),
																}),
															},
															NRXlhggHx: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children: 'HOLDERS LIVE IT UP!',
																	}),
																}),
															},
															WoMHsoWdr: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children: 'HOLDERS LIVE IT UP!',
																	}),
																}),
															},
														},
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '80px',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'HOLDERS LIVE IT UP!',
																}),
															}),
															className: 'framer-k6x8tg',
															'data-framer-name': 'HOLDERS LIVE IT UP!',
															fonts: ['GF;Lilita One-regular'],
															name: 'HOLDERS LIVE IT UP!',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
												],
											}),
											t('div', {
												className: 'framer-ozk4zi',
												'data-framer-name': 'Frame 1948758510',
												name: 'Frame 1948758510',
												children: [
													t('div', {
														className: 'framer-15ke55n',
														'data-framer-name': 'Frame 1948758500',
														name: 'Frame 1948758500',
														children: [
															e('div', {
																className: 'framer-1c1gqt2',
																'data-framer-name': 'Frame 1948758481',
																name: 'Frame 1948758481',
																children: t('div', {
																	className: 'framer-1x3e9a2',
																	'data-framer-name': 'Frame 1948758480',
																	name: 'Frame 1948758480',
																	children: [
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				hwto4p5xW: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '24px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children: 'PARTIES AT TOP CLUBS',
																						}),
																					}),
																				},
																				NRXlhggHx: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '24px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children: 'PARTIES AT TOP CLUBS',
																						}),
																					}),
																				},
																				WoMHsoWdr: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '18px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children: 'PARTIES AT TOP CLUBS',
																						}),
																					}),
																				},
																			},
																			children: e(o, {
																				__fromCanvasComponent: !0,
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '30px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'PARTIES AT TOP CLUBS',
																					}),
																				}),
																				className: 'framer-y3zlfk',
																				'data-framer-name':
																					'PARTIES AT TOP CLUBS',
																				fonts: ['GF;Lilita One-regular'],
																				name: 'PARTIES AT TOP CLUBS',
																				verticalAlignment: 'top',
																				withExternalLayout: !0,
																			}),
																		}),
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				hwto4p5xW: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--framer-font-size': '18px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children:
																								'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																						}),
																					}),
																				},
																				NRXlhggHx: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--framer-font-size': '18px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children:
																								'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																						}),
																					}),
																				},
																				WoMHsoWdr: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--framer-font-size': '14px',
																								'--framer-line-height': '140%',
																								'--framer-text-color':
																									'rgb(42, 76, 117)',
																							},
																							children:
																								'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																						}),
																					}),
																				},
																			},
																			children: e(o, {
																				__fromCanvasComponent: !0,
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '20px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																					}),
																				}),
																				className: 'framer-1btxcu4',
																				'data-framer-name':
																					'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																				fonts: ['Inter'],
																				name: 'Bottle service at the most elite clubs in your country and beyond. Party with celebrities and influencers, let loose and feel the vibes resonate through your body.',
																				verticalAlignment: 'top',
																				withExternalLayout: !0,
																			}),
																		}),
																	],
																}),
															}),
															e(n, {
																breakpoint: a,
																overrides: {
																	hwto4p5xW: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '800px',
																			src: 'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png',
																			srcSet:
																				'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=512 512w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png 1600w',
																		},
																	},
																	NRXlhggHx: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '100vw',
																			src: 'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png',
																			srcSet:
																				'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=512 512w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png 1600w',
																		},
																	},
																	WoMHsoWdr: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '100vw',
																			src: 'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png',
																			srcSet:
																				'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=512 512w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png 1600w',
																		},
																	},
																},
																children: e(h, {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: '1171px',
																		src: 'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png',
																		srcSet:
																			'https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=512 512w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fDqAOMFJMGS0rTBrv9qELhFOI7U.png 1600w',
																	},
																	className: 'framer-100i3mo',
																	'data-framer-name': 'DJ',
																	name: 'DJ',
																}),
															}),
														],
													}),
													t('div', {
														className: 'framer-1xltcvb',
														'data-framer-name': 'Frame 1948758498',
														name: 'Frame 1948758498',
														children: [
															t('div', {
																className: 'framer-gr3mfj',
																'data-framer-name': 'Frame 1948758480',
																name: 'Frame 1948758480',
																children: [
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'ICE COLD JEWELRY',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'ICE COLD JEWELRY',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'ICE COLD JEWELRY',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '140%',
																						'--framer-text-color':
																							'rgb(42, 76, 117)',
																					},
																					children: 'ICE COLD JEWELRY',
																				}),
																			}),
																			className: 'framer-42yq8x',
																			'data-framer-name': 'ICE COLD JEWELRY',
																			fonts: ['GF;Lilita One-regular'],
																			name: 'ICE COLD JEWELRY',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best thing you can do after drinking it!',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best thing you can do after drinking it!',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '14px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best thing you can do after drinking it!',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--framer-font-size': '20px',
																						'--framer-line-height': '140%',
																						'--framer-text-color':
																							'rgb(42, 76, 117)',
																					},
																					children:
																						'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best thing you can do after drinking it!',
																				}),
																			}),
																			className: 'framer-dedbqb',
																			'data-framer-name':
																				'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best think you can do after drinking it!',
																			fonts: ['Inter'],
																			name: 'Diamonds and vodka make the best combo! Pouring out a bottle onto a fresh Rolex is the 2nd best think you can do after drinking it!',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																],
															}),
															e('div', {
																className: 'framer-1rwpykc',
																'data-framer-name': 'Frame 1948758499',
																name: 'Frame 1948758499',
																children: e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			background: {
																				alt: '',
																				fit: 'fill',
																				loading: 'lazy',
																				pixelHeight: 1800,
																				pixelWidth: 3200,
																				sizes: '800px',
																				src: 'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png',
																				srcSet:
																					'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=512 512w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png 3200w',
																			},
																		},
																		NRXlhggHx: {
																			background: {
																				alt: '',
																				fit: 'fill',
																				loading: 'lazy',
																				pixelHeight: 1800,
																				pixelWidth: 3200,
																				sizes: '100vw',
																				src: 'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png',
																				srcSet:
																					'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=512 512w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png 3200w',
																			},
																		},
																		WoMHsoWdr: {
																			background: {
																				alt: '',
																				fit: 'fill',
																				loading: 'lazy',
																				pixelHeight: 1800,
																				pixelWidth: 3200,
																				sizes: '100vw',
																				src: 'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png',
																				srcSet:
																					'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=512 512w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png 3200w',
																			},
																		},
																	},
																	children: e(h, {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			pixelHeight: 1800,
																			pixelWidth: 3200,
																			sizes: '1170px',
																			src: 'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png',
																			srcSet:
																				'https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=512 512w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Ku0Uas6WTRInrqS9Mtpsi8A3u7o.png 3200w',
																		},
																		className: 'framer-1yh4x42',
																		'data-framer-name': 'factory',
																		name: 'factory',
																	}),
																}),
															}),
														],
													}),
													t('div', {
														className: 'framer-198b5kb',
														'data-framer-name': 'Frame 1948758497',
														name: 'Frame 1948758497',
														children: [
															t('div', {
																className: 'framer-b5f561',
																'data-framer-name': 'Frame 1948758480',
																name: 'Frame 1948758480',
																children: [
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'VODKA DISTILLERY TOUR',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'VODKA DISTILLERY TOUR',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children: 'VODKA DISTILLERY TOUR',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '140%',
																						'--framer-text-color':
																							'rgb(42, 76, 117)',
																					},
																					children: 'VODKA DISTILLERY TOUR',
																				}),
																			}),
																			className: 'framer-1k7i0yy',
																			'data-framer-name':
																				'VODKA DISTILLERY TOUR',
																			fonts: ['GF;Lilita One-regular'],
																			name: 'VODKA DISTILLERY TOUR',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '18px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--framer-font-size': '14px',
																							'--framer-line-height': '140%',
																							'--framer-text-color':
																								'rgb(42, 76, 117)',
																						},
																						children:
																							'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--framer-font-size': '20px',
																						'--framer-line-height': '140%',
																						'--framer-text-color':
																							'rgb(42, 76, 117)',
																					},
																					children:
																						'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																				}),
																			}),
																			className: 'framer-lu8ru5',
																			'data-framer-name':
																				'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																			fonts: ['Inter'],
																			name: 'Dive deep into the the vodka process. Find out how it\u2019s made and what makes it perfect. Get knowledge from industry specialists and take home limited edition samples.',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																],
															}),
															e(n, {
																breakpoint: a,
																overrides: {
																	hwto4p5xW: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '800px',
																			src: 'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png',
																			srcSet:
																				'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=512 512w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png 1600w',
																		},
																	},
																	NRXlhggHx: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '100vw',
																			src: 'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png',
																			srcSet:
																				'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=512 512w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png 1600w',
																		},
																	},
																	WoMHsoWdr: {
																		background: {
																			alt: '',
																			fit: 'fill',
																			loading: 'lazy',
																			sizes: '100vw',
																			src: 'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png',
																			srcSet:
																				'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=512 512w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png 1600w',
																		},
																	},
																},
																children: e(h, {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: '1171px',
																		src: 'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png',
																		srcSet:
																			'https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=512 512w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TCQ6DWwfimoxKXjtlX4d4pqo.png 1600w',
																	},
																	className: 'framer-ddrc6u',
																	'data-framer-name': 'factory',
																	name: 'factory',
																}),
															}),
														],
													}),
													e(n, {
														breakpoint: a,
														overrides: {
															hwto4p5xW: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '140%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children:
																			'Exclusive Rewards and more coming soon.',
																	}),
																}),
															},
															NRXlhggHx: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '140%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children:
																			'Exclusive Rewards and more coming soon.',
																	}),
																}),
															},
															WoMHsoWdr: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '140%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children:
																			'Exclusive Rewards and more coming soon.',
																	}),
																}),
															},
														},
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '40px',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(255, 255, 255)',
																	},
																	children:
																		'Exclusive Rewards and more coming soon.',
																}),
															}),
															className: 'framer-d64n2h',
															'data-framer-name':
																'Exclusive Rewards and more coming soon.',
															fonts: ['GF;Lilita One-regular'],
															name: 'Exclusive Rewards and more coming soon.',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
												],
											}),
										],
									}),
								}),
								t('div', {
									className: 'framer-wthcgz',
									'data-framer-name': 'Frame 1948758477',
									id: ne,
									name: 'Frame 1948758477',
									ref: oe,
									children: [
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'VODKANOMICS',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '40,000,000,000',
															}),
														],
													}),
												},
												NRXlhggHx: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'VODKANOMICS',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '40,000,000,000',
															}),
														],
													}),
												},
												WoMHsoWdr: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '24px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'VODKANOMICS',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '24px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '40,000,000,000',
															}),
														],
													}),
												},
											},
											children: e(o, {
												__fromCanvasComponent: !0,
												children: t(r, {
													children: [
														e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '80px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: 'VODKANOMICS',
														}),
														e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '80px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: '40,000,000,000',
														}),
													],
												}),
												className: 'framer-1m8n47q',
												'data-framer-name': 'VODKANOMICS 8,000,000,000',
												fonts: ['GF;Lilita One-regular'],
												name: 'VODKANOMICS 8,000,000,000',
												transformTemplate: f,
												verticalAlignment: 'top',
												withExternalLayout: !0,
											}),
										}),
										t(i.div, {
											className: 'framer-uho5er',
											'data-framer-name': 'Frame 1948758483',
											name: 'Frame 1948758483',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '25%',
															}),
														}),
														className: 'framer-6496vw',
														'data-framer-name': '20%',
														fonts: ['GF;Lilita One-regular'],
														name: '20%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Presale',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Presale',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Presale',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Presale',
															}),
														}),
														className: 'framer-1bev2v0',
														'data-framer-name': 'Presale Allocation',
														fonts: ['GF;Lilita One-regular'],
														name: 'Presale Allocation',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										t(i.div, {
											className: 'framer-1n2p2ke',
											'data-framer-name': 'Frame 1948758484',
											name: 'Frame 1948758484',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '35%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '35%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '35%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '35%',
															}),
														}),
														className: 'framer-1lb2jlc',
														'data-framer-name': '30%',
														fonts: ['GF;Lilita One-regular'],
														name: '30%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Liquidity&MM',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Liquidity&MM',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Liquidity&MM',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Liquidity&MM',
															}),
														}),
														className: 'framer-pchqj1',
														'data-framer-name': 'Liquidity Pool',
														fonts: ['GF;Lilita One-regular'],
														name: 'Liquidity Pool',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										t(i.div, {
											className: 'framer-1ky7vui',
											'data-framer-name': 'Frame 1948758485',
											name: 'Frame 1948758485',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '3%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '3%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '3%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '3%',
															}),
														}),
														className: 'framer-1nmaqra',
														'data-framer-name': '15%',
														fonts: ['GF;Lilita One-regular'],
														name: '15%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Airdrop',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'right',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Airdrop',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Airdrop',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'right',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Airdrop',
															}),
														}),
														className: 'framer-plm2bx',
														'data-framer-name': 'Community Rewards',
														fonts: ['GF;Lilita One-regular'],
														name: 'Community Rewards',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										t(i.div, {
											className: 'framer-w15q24',
											'data-framer-name': 'Frame 1948758486',
											name: 'Frame 1948758486',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '25%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '25%',
															}),
														}),
														className: 'framer-11amy61',
														'data-framer-name': '15%',
														fonts: ['GF;Lilita One-regular'],
														name: '15%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Marketing',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Marketing',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Marketing',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Marketing',
															}),
														}),
														className: 'framer-16xknvw',
														'data-framer-name': 'Development Fund',
														fonts: ['GF;Lilita One-regular'],
														name: 'Development Fund',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										t(i.div, {
											className: 'framer-12s9y3r',
											'data-framer-name': 'Frame 1948758487',
											name: 'Frame 1948758487',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '7%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '7%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '7%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '7%',
															}),
														}),
														className: 'framer-dsfmdh',
														'data-framer-name': '15%',
														fonts: ['GF;Lilita One-regular'],
														name: '15%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Early Contributors',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Early Contributors',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Early Contributors',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Early Contributors',
															}),
														}),
														className: 'framer-1h085i0',
														'data-framer-name': 'Marketing and Partnerships',
														fonts: ['GF;Lilita One-regular'],
														name: 'Marketing and Partnerships',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										t(i.div, {
											className: 'framer-a3jzr',
											'data-framer-name': 'Frame 1948758488',
											name: 'Frame 1948758488',
											transformTemplate: f,
											whileHover: I,
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '5%',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '5%',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '32px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(32, 132, 207)',
																	},
																	children: '5%',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '40px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(32, 132, 207)',
																},
																children: '5%',
															}),
														}),
														className: 'framer-wru2hs',
														'data-framer-name': '5%',
														fonts: ['GF;Lilita One-regular'],
														name: '5%',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Team',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Team',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector':
																			'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																		'--framer-font-family':
																			'"Lilita One", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(42, 76, 117)',
																	},
																	children: 'Team',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '30px',
																	'--framer-line-height': '100%',
																	'--framer-text-color': 'rgb(42, 76, 117)',
																},
																children: 'Team',
															}),
														}),
														className: 'framer-1isfxby',
														'data-framer-name': 'Team',
														fonts: ['GF;Lilita One-regular'],
														name: 'Team',
														verticalAlignment: 'center',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													background: {
														alt: '',
														fit: 'stretch',
														loading: 'lazy',
														positionX: 'center',
														positionY: 'center',
														sizes: '182px',
														src: 'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png',
														srcSet:
															'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png?scale-down-to=2048 681w,https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png 1104w',
													},
												},
												NRXlhggHx: {
													background: {
														alt: '',
														fit: 'stretch',
														loading: 'lazy',
														positionX: 'center',
														positionY: 'center',
														sizes: '165px',
														src: 'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png',
														srcSet:
															'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png?scale-down-to=2048 681w,https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png 1104w',
													},
												},
												WoMHsoWdr: {
													background: {
														alt: '',
														fit: 'stretch',
														loading: 'lazy',
														positionX: 'center',
														positionY: 'center',
														sizes: '118px',
														src: 'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png',
														srcSet:
															'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png?scale-down-to=2048 681w,https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png 1104w',
													},
												},
											},
											children: e(h, {
												background: {
													alt: '',
													fit: 'stretch',
													loading: 'lazy',
													positionX: 'center',
													positionY: 'center',
													sizes: '216px',
													src: 'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png',
													srcSet:
														'https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png?scale-down-to=2048 681w,https://framerusercontent.com/images/GcHcPOODrkFo7nAkGgxaXjqBa9c.png 1104w',
												},
												className: 'framer-1w84i2y',
												'data-framer-name': 'stan',
												name: 'stan',
												transformTemplate: f,
											}),
										}),
									],
								}),
								e('div', {
									className: 'framer-173jo37',
									'data-framer-name': 'Frame 1948758512',
									name: 'Frame 1948758512',
									children: e('div', {
										className: 'framer-1xwv8e0',
										'data-framer-name': 'Frame 1948758480',
										name: 'Frame 1948758480',
										children: t('div', {
											className: 'framer-5j4wwr',
											'data-framer-name': 'Frame 1948758515',
											name: 'Frame 1948758515',
											children: [
												t('div', {
													className: 'framer-yx6g96',
													'data-framer-name': 'Frame 1948758514',
													name: 'Frame 1948758514',
													children: [
														e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '40px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(0, 93, 174)',
																			},
																			children: 'Presale Soon!',
																		}),
																	}),
																},
																NRXlhggHx: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '40px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(0, 93, 174)',
																			},
																			children: 'Presale Soon!',
																		}),
																	}),
																},
																WoMHsoWdr: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '32px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(0, 93, 174)',
																			},
																			children: 'Presale Soon!',
																		}),
																	}),
																},
															},
															children: e(o, {
																__fromCanvasComponent: !0,
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '70px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(0, 93, 174)',
																		},
																		children: 'Presale Soon!',
																	}),
																}),
																className: 'framer-547rul',
																'data-framer-name': 'Presale Soon!',
																fonts: ['GF;Lilita One-regular'],
																name: 'Presale Soon!',
																verticalAlignment: 'center',
																withExternalLayout: !0,
															}),
														}),
														e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '24px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(255, 255, 255)',
																			},
																			children:
																				'Get ready to secure your first $VODKA tokens.',
																		}),
																	}),
																},
																NRXlhggHx: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '24px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(255, 255, 255)',
																			},
																			children:
																				'Get ready to secure your first $VODKA tokens.',
																		}),
																	}),
																},
																WoMHsoWdr: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector':
																					'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																				'--framer-font-family':
																					'"Lilita One", sans-serif',
																				'--framer-font-size': '24px',
																				'--framer-line-height': '100%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(255, 255, 255)',
																			},
																			children:
																				'Get ready to secure your first $VODKA tokens.',
																		}),
																	}),
																},
															},
															children: e(o, {
																__fromCanvasComponent: !0,
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '30px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children:
																			'Get ready to secure your first $VODKA tokens.',
																	}),
																}),
																className: 'framer-j140i9',
																'data-framer-name':
																	'Get ready to secure your first $VODKA tokens.',
																fonts: ['GF;Lilita One-regular'],
																name: 'Get ready to secure your first $VODKA tokens.',
																verticalAlignment: 'center',
																withExternalLayout: !0,
															}),
														}),
													],
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 720,
																pixelWidth: 1280,
																sizes: '800px',
																src: 'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg',
																srcSet:
																	'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg 1280w',
															},
														},
														NRXlhggHx: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 720,
																pixelWidth: 1280,
																sizes: '100vw',
																src: 'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg',
																srcSet:
																	'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg 1280w',
															},
														},
														WoMHsoWdr: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																pixelHeight: 720,
																pixelWidth: 1280,
																sizes: '100vw',
																src: 'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg',
																srcSet:
																	'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg 1280w',
															},
														},
													},
													children: e(h, {
														background: {
															alt: '',
															fit: 'fill',
															loading: 'lazy',
															pixelHeight: 720,
															pixelWidth: 1280,
															sizes: '1180px',
															src: 'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg',
															srcSet:
																'https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/29y1HlUVI54pTP8VKN628yZ7OKk.jpg 1280w',
														},
														className: 'framer-10i3drt',
													}),
												}),
												t('div', {
													className: 'framer-n2nczs',
													children: [
														t('div', {
															className: 'framer-1nstxph',
															'data-framer-name': 'Frame 1948758490',
															name: 'Frame 1948758490',
															children: [
																e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Blockchain:',
																				}),
																			}),
																		},
																		NRXlhggHx: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Blockchain:',
																				}),
																			}),
																		},
																		WoMHsoWdr: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Blockchain:',
																				}),
																			}),
																		},
																	},
																	children: e(o, {
																		__fromCanvasComponent: !0,
																		children: e(r, {
																			children: e('p', {
																				style: {
																					'--font-selector':
																						'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																					'--framer-font-family':
																						'"Lilita One", sans-serif',
																					'--framer-font-size': '40px',
																					'--framer-line-height': '100%',
																					'--framer-text-alignment': 'center',
																					'--framer-text-color':
																						'rgb(0, 93, 174)',
																				},
																				children: 'Blockchain:',
																			}),
																		}),
																		className: 'framer-18aoshr',
																		'data-framer-name': 'Supply limited:',
																		fonts: ['GF;Lilita One-regular'],
																		name: 'Supply limited:',
																		verticalAlignment: 'center',
																		withExternalLayout: !0,
																	}),
																}),
																t('div', {
																	className: 'framer-18qii88',
																	children: [
																		e(h, {
																			background: {
																				alt: '',
																				fit: 'fill',
																				loading: 'lazy',
																				pixelHeight: 316,
																				pixelWidth: 316,
																				src: 'https://framerusercontent.com/images/UmtvODXLIK4yO7d0por6c8sKNrg.png',
																			},
																			className: 'framer-1149868',
																		}),
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				hwto4p5xW: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '24px',
																								'--framer-line-height': '100%',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'SOLANA',
																						}),
																					}),
																				},
																				NRXlhggHx: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '28px',
																								'--framer-line-height': '100%',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'SOLANA',
																						}),
																					}),
																				},
																				WoMHsoWdr: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '22px',
																								'--framer-line-height': '100%',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'SOLANA',
																						}),
																					}),
																				},
																			},
																			children: e(o, {
																				__fromCanvasComponent: !0,
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '40px',
																							'--framer-line-height': '100%',
																							'--framer-text-alignment':
																								'center',
																							'--framer-text-color':
																								'rgb(255, 255, 255)',
																						},
																						children: 'SOLANA',
																					}),
																				}),
																				className: 'framer-1dyyeqf',
																				'data-framer-name': '100,000,000',
																				fonts: ['GF;Lilita One-regular'],
																				name: '100,000,000',
																				verticalAlignment: 'top',
																				withExternalLayout: !0,
																			}),
																		}),
																	],
																}),
															],
														}),
														t('div', {
															className: 'framer-1popjn6',
															'data-framer-name': 'Frame 1948758489',
															name: 'Frame 1948758489',
															children: [
																e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Time:',
																				}),
																			}),
																		},
																		NRXlhggHx: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Time:',
																				}),
																			}),
																		},
																		WoMHsoWdr: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Time:',
																				}),
																			}),
																		},
																	},
																	children: e(o, {
																		__fromCanvasComponent: !0,
																		children: e(r, {
																			children: e('p', {
																				style: {
																					'--framer-font-size': '40px',
																					'--framer-line-height': '100%',
																					'--framer-text-alignment': 'center',
																				},
																				children: e('span', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One"',
																						'--framer-font-size': '40px',
																						'--framer-text-color':
																							'rgba(0, 93, 174, 1)',
																					},
																					children: 'Time:',
																				}),
																			}),
																		}),
																		className: 'framer-1u9lku5',
																		'data-framer-name': 'Time:',
																		fonts: ['GF;Lilita One-regular'],
																		name: 'Time:',
																		verticalAlignment: 'center',
																		withExternalLayout: !0,
																	}),
																}),
																e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '26px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: e(x, {
																						href: 'https://t.me/vodkatokensol',
																						openInNewTab: !0,
																						smoothScroll: !1,
																						children: e('a', {
																							className:
																								'framer-styles-preset-1mqj1fz',
																							'data-styles-preset': 'H28EAb___',
																							children: 'Coming Soon',
																						}),
																					}),
																				}),
																			}),
																		},
																		NRXlhggHx: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: e(x, {
																						href: 'https://t.me/vodkatokensol',
																						openInNewTab: !0,
																						smoothScroll: !1,
																						children: e('a', {
																							className:
																								'framer-styles-preset-1mqj1fz',
																							'data-styles-preset': 'H28EAb___',
																							children: 'Coming Soon',
																						}),
																					}),
																				}),
																			}),
																		},
																		WoMHsoWdr: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: e(x, {
																						href: 'https://t.me/vodkatokensol',
																						openInNewTab: !0,
																						smoothScroll: !1,
																						children: e('a', {
																							className:
																								'framer-styles-preset-1mqj1fz',
																							'data-styles-preset': 'H28EAb___',
																							children: 'Coming Soon',
																						}),
																					}),
																				}),
																			}),
																		},
																	},
																	children: e(o, {
																		__fromCanvasComponent: !0,
																		children: e(r, {
																			children: e('p', {
																				style: {
																					'--font-selector':
																						'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																					'--framer-font-family':
																						'"Lilita One", sans-serif',
																					'--framer-font-size': '44px',
																					'--framer-line-height': '100%',
																					'--framer-text-alignment': 'center',
																					'--framer-text-color':
																						'rgb(255, 255, 255)',
																				},
																				children: e(x, {
																					href: 'https://t.me/vodkatokensol',
																					openInNewTab: !0,
																					smoothScroll: !1,
																					children: e('a', {
																						className:
																							'framer-styles-preset-1mqj1fz',
																						'data-styles-preset': 'H28EAb___',
																						children: 'Coming Soon',
																					}),
																				}),
																			}),
																		}),
																		className: 'framer-pa0wcg',
																		'data-framer-name': '21.08.2024',
																		fonts: ['GF;Lilita One-regular'],
																		name: '21.08.2024',
																		verticalAlignment: 'top',
																		withExternalLayout: !0,
																	}),
																}),
															],
														}),
														t('div', {
															className: 'framer-pwvnuf',
															'data-framer-name': 'Frame 1948758490',
															name: 'Frame 1948758490',
															children: [
																e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Presale Cap Limit',
																				}),
																			}),
																		},
																		NRXlhggHx: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '30px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Presale Cap Limit',
																				}),
																			}),
																		},
																		WoMHsoWdr: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(0, 93, 174)',
																					},
																					children: 'Presale Cap Limit',
																				}),
																			}),
																		},
																	},
																	children: e(o, {
																		__fromCanvasComponent: !0,
																		children: e(r, {
																			children: e('p', {
																				style: {
																					'--font-selector':
																						'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																					'--framer-font-family':
																						'"Lilita One", sans-serif',
																					'--framer-font-size': '40px',
																					'--framer-line-height': '100%',
																					'--framer-text-alignment': 'center',
																					'--framer-text-color':
																						'rgb(0, 93, 174)',
																				},
																				children: 'Presale Cap Limit',
																			}),
																		}),
																		className: 'framer-w69jx6',
																		'data-framer-name': 'Supply limited:',
																		fonts: ['GF;Lilita One-regular'],
																		name: 'Supply limited:',
																		verticalAlignment: 'center',
																		withExternalLayout: !0,
																	}),
																}),
																e(n, {
																	breakpoint: a,
																	overrides: {
																		hwto4p5xW: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '24px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: '4,000 SOL',
																				}),
																			}),
																		},
																		NRXlhggHx: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '28px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: '4,000 SOL',
																				}),
																			}),
																		},
																		WoMHsoWdr: {
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '22px',
																						'--framer-line-height': '100%',
																						'--framer-text-alignment': 'center',
																						'--framer-text-color':
																							'rgb(255, 255, 255)',
																					},
																					children: '4,000 SOL',
																				}),
																			}),
																		},
																	},
																	children: e(o, {
																		__fromCanvasComponent: !0,
																		children: e(r, {
																			children: e('p', {
																				style: {
																					'--font-selector':
																						'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																					'--framer-font-family':
																						'"Lilita One", sans-serif',
																					'--framer-font-size': '40px',
																					'--framer-line-height': '100%',
																					'--framer-text-alignment': 'center',
																					'--framer-text-color':
																						'rgb(255, 255, 255)',
																				},
																				children: '4,000 SOL',
																			}),
																		}),
																		className: 'framer-31cord',
																		'data-framer-name': '100,000,000',
																		fonts: ['GF;Lilita One-regular'],
																		name: '100,000,000',
																		verticalAlignment: 'top',
																		withExternalLayout: !0,
																	}),
																}),
															],
														}),
													],
												}),
												e(x, {
													href: 'https://t.me/vodkatokensol',
													openInNewTab: !0,
													children: e(i.a, {
														className: 'framer-2v1m3a framer-lux5qc',
														'data-border': !0,
														'data-framer-name': 'Frame 1948758442',
														name: 'Frame 1948758442',
														whileHover: vr,
														children: e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector': 'SW50ZXItQm9sZA==',
																				'--framer-font-family':
																					'"Inter", "Inter Placeholder", sans-serif',
																				'--framer-font-size': '20px',
																				'--framer-font-weight': '700',
																				'--framer-line-height': '140%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(55, 54, 54)',
																			},
																			children: '$VODKA',
																		}),
																	}),
																},
																NRXlhggHx: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector': 'SW50ZXItQm9sZA==',
																				'--framer-font-family':
																					'"Inter", "Inter Placeholder", sans-serif',
																				'--framer-font-size': '20px',
																				'--framer-font-weight': '700',
																				'--framer-line-height': '140%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(55, 54, 54)',
																			},
																			children: '$VODKA',
																		}),
																	}),
																},
																WoMHsoWdr: {
																	children: e(r, {
																		children: e('p', {
																			style: {
																				'--font-selector': 'SW50ZXItQm9sZA==',
																				'--framer-font-family':
																					'"Inter", "Inter Placeholder", sans-serif',
																				'--framer-font-weight': '700',
																				'--framer-line-height': '140%',
																				'--framer-text-alignment': 'center',
																				'--framer-text-color':
																					'rgb(55, 54, 54)',
																			},
																			children: '$VODKA',
																		}),
																	}),
																},
															},
															children: e(o, {
																__fromCanvasComponent: !0,
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector': 'SW50ZXItQm9sZA==',
																			'--framer-font-family':
																				'"Inter", "Inter Placeholder", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-font-weight': '700',
																			'--framer-line-height': '140%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(55, 54, 54)',
																		},
																		children: '$VODKA',
																	}),
																}),
																className: 'framer-ao93f7',
																'data-framer-name': 'Watch this space',
																fonts: ['Inter-Bold'],
																name: 'Watch this space',
																verticalAlignment: 'top',
																withExternalLayout: !0,
															}),
														}),
													}),
												}),
											],
										}),
									}),
								}),
								t('div', {
									className: 'framer-18ct404',
									'data-framer-name': 'Frame 1948758475',
									id: ie,
									name: 'Frame 1948758475',
									ref: me,
									children: [
										e(n, {
											breakpoint: a,
											overrides: {
												hwto4p5xW: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '60px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '$VODKA',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '60px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'ROADMAP',
															}),
														],
													}),
												},
												NRXlhggHx: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '60px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '$VODKA',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '60px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'ROADMAP',
															}),
														],
													}),
													transformTemplate: void 0,
												},
												WoMHsoWdr: {
													children: t(r, {
														children: [
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '32px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: '$VODKA',
															}),
															e('p', {
																style: {
																	'--font-selector':
																		'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																	'--framer-font-family':
																		'"Lilita One", sans-serif',
																	'--framer-font-size': '32px',
																	'--framer-line-height': '100%',
																	'--framer-text-alignment': 'center',
																	'--framer-text-color': 'rgb(58, 163, 244)',
																},
																children: 'ROADMAP',
															}),
														],
													}),
													transformTemplate: void 0,
												},
											},
											children: e(o, {
												__fromCanvasComponent: !0,
												children: t(r, {
													children: [
														e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '80px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: '$VODKA',
														}),
														e('p', {
															style: {
																'--font-selector':
																	'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																'--framer-font-family':
																	'"Lilita One", sans-serif',
																'--framer-font-size': '80px',
																'--framer-line-height': '100%',
																'--framer-text-alignment': 'center',
																'--framer-text-color': 'rgb(58, 163, 244)',
															},
															children: 'ROADMAP',
														}),
													],
												}),
												className: 'framer-ligwht',
												'data-framer-name': '$VODKA ROADMAP',
												fonts: ['GF;Lilita One-regular'],
												name: '$VODKA ROADMAP',
												transformTemplate: f,
												verticalAlignment: 'top',
												withExternalLayout: !0,
											}),
										}),
										t('div', {
											className: 'framer-1906rhs',
											'data-framer-name': 'Frame 1948758507',
											name: 'Frame 1948758507',
											children: [
												t('div', {
													className: 'framer-3b2fja',
													'data-framer-name': 'Frame 1948758504',
													name: 'Frame 1948758504',
													children: [
														e('div', {
															className: 'framer-p118lw',
															'data-border': !0,
															'data-framer-name': 'Frame 1948758464',
															name: 'Frame 1948758464',
															children: t('div', {
																className: 'framer-wtetba',
																'data-framer-name': 'Frame 1948758460',
																name: 'Frame 1948758460',
																children: [
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(87, 187, 122)',
																						},
																						children: 'The Grain',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(87, 187, 122)',
																						},
																						children: 'The Grain',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(87, 187, 122)',
																						},
																						children: 'The Grain',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '40px',
																						'--framer-line-height': '110%',
																						'--framer-text-color':
																							'rgb(87, 187, 122)',
																					},
																					children: 'The Grain',
																				}),
																			}),
																			className: 'framer-bl8juf',
																			'data-framer-name': 'The Grain',
																			fonts: ['GF;Lilita One-regular'],
																			name: 'The Grain',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																	t('div', {
																		className: 'framer-1rjedsj',
																		'data-framer-name': 'Frame 1948758493',
																		name: 'Frame 1948758493',
																		children: [
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Presale:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Get in early and secure your own $VODKA before launch.',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Presale:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Get in early and secure your own $VODKA before launch.',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Presale:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Get in early and secure your own $VODKA before launch.',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							t('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: [
																									'Presale:',
																									e('span', {
																										style: {
																											'--font-selector':
																												'SW50ZXItTWVkaXVt',
																											'--framer-font-weight':
																												'500',
																										},
																										children: ' ',
																									}),
																								],
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Get in early and secure your own $VODKA before launch.',
																							}),
																						],
																					}),
																					className: 'framer-1y58vcp',
																					'data-framer-name':
																						'Presale: Get in early and secure your own $VODKA before launch.',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Presale: Get in early and secure your own $VODKA before launch.',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'DEX Listing:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'DEX Listing:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'DEX Listing:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							t('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: [
																									'DEX Listing:',
																									e('span', {
																										style: {
																											'--font-selector':
																												'SW50ZXItTWVkaXVt',
																											'--framer-font-weight':
																												'500',
																										},
																										children: ' ',
																									}),
																								],
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																							}),
																						],
																					}),
																					className: 'framer-s4iklp',
																					'data-framer-name':
																						'DEX Listing: Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'DEX Listing: Watch as the market rallies for $VODKA. We got the biggest candles, and yes - they are green!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Marketing Campaign:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'If someone doesn\u2019t know about $VODKA, they sure will after this!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Marketing Campaign:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'If someone doesn\u2019t know about $VODKA, they sure will after this!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								t('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: [
																										'Marketing Campaign:',
																										e('span', {
																											style: {
																												'--font-selector':
																													'SW50ZXItTWVkaXVt',
																												'--framer-font-weight':
																													'500',
																											},
																											children: ' ',
																										}),
																									],
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'If someone doesn\u2019t know about $VODKA, they sure will after this!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							t('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: [
																									'Marketing Campaign:',
																									e('span', {
																										style: {
																											'--font-selector':
																												'SW50ZXItTWVkaXVt',
																											'--framer-font-weight':
																												'500',
																										},
																										children: ' ',
																									}),
																								],
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'If someone doesn\u2019t know about $VODKA, they sure will after this!',
																							}),
																						],
																					}),
																					className: 'framer-18hylh0',
																					'data-framer-name':
																						'Marketing Campaign: If someone doesn\u2019t know about $VODKA, they sure will after this!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Marketing Campaign: If someone doesn\u2019t know about $VODKA, they sure will after this!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																		],
																	}),
																],
															}),
														}),
														e(n, {
															breakpoint: a,
															overrides: {
																NRXlhggHx: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: '400px',
																		src: 'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png',
																		srcSet:
																			'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png 2000w',
																	},
																},
																WoMHsoWdr: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		sizes: 'calc(100vw - 40px)',
																		src: 'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png',
																		srcSet:
																			'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png 2000w',
																	},
																},
															},
															children: e(h, {
																background: {
																	alt: '',
																	fit: 'fill',
																	loading: 'lazy',
																	sizes: '450px',
																	src: 'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png',
																	srcSet:
																		'https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTDnezJoCMti8ljPPBrNeaKO2KM.png 2000w',
																},
																className: 'framer-fpm20v',
																'data-framer-name': 'seno 1',
																name: 'seno 1',
															}),
														}),
													],
												}),
												e(xe, {
													__framer__loop: _e,
													__framer__loopEffectEnabled: !0,
													__framer__loopRepeatDelay: 0,
													__framer__loopRepeatType: 'mirror',
													__framer__loopTransition: Pr,
													__perspectiveFX: !1,
													__targetOpacity: 1,
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														src: 'https://framerusercontent.com/images/rteXQfbULI9ER5idbVe0kOOCkNM.png',
													},
													className: 'framer-1l0pmhs',
													'data-framer-name': 'Arrow-Left-icon 1',
													name: 'Arrow-Left-icon 1',
													style: { rotate: -90 },
												}),
												t('div', {
													className: 'framer-17xn4pk',
													'data-framer-name': 'Frame 1948758505',
													name: 'Frame 1948758505',
													children: [
														e(n, {
															breakpoint: a,
															overrides: {
																NRXlhggHx: {
																	background: {
																		alt: '',
																		fit: 'stretch',
																		loading: 'lazy',
																		positionX: 'center',
																		positionY: 'center',
																		sizes: '400px',
																		src: 'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png',
																		srcSet:
																			'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=512 512w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png 2280w',
																	},
																},
																WoMHsoWdr: {
																	background: {
																		alt: '',
																		fit: 'stretch',
																		loading: 'lazy',
																		positionX: 'center',
																		positionY: 'center',
																		sizes: 'calc(100vw - 40px)',
																		src: 'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png',
																		srcSet:
																			'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=512 512w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png 2280w',
																	},
																},
															},
															children: e(h, {
																background: {
																	alt: '',
																	fit: 'stretch',
																	loading: 'lazy',
																	positionX: 'center',
																	positionY: 'center',
																	sizes: '500px',
																	src: 'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png',
																	srcSet:
																		'https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=512 512w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/pG5YTN9Vgjx7CDsLQ6OnzunzOdI.png 2280w',
																},
																className: 'framer-g2j26u',
																'data-framer-name': 'dist',
																name: 'dist',
															}),
														}),
														e('div', {
															className: 'framer-17smthl',
															'data-border': !0,
															'data-framer-name': 'Frame 1948758465',
															name: 'Frame 1948758465',
															children: t('div', {
																className: 'framer-d51xn7',
																'data-framer-name': 'Frame 1948758460',
																name: 'Frame 1948758460',
																children: [
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(185, 119, 205)',
																						},
																						children: 'Fermentation',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(185, 119, 205)',
																						},
																						children: 'Fermentation',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(185, 119, 205)',
																						},
																						children: 'Fermentation',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '40px',
																						'--framer-line-height': '110%',
																						'--framer-text-color':
																							'rgb(185, 119, 205)',
																					},
																					children: 'Fermentation',
																				}),
																			}),
																			className: 'framer-1ou4n0z',
																			'data-framer-name': 'Fermentation',
																			fonts: ['GF;Lilita One-regular'],
																			name: 'Fermentation',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																	t('div', {
																		className: 'framer-swgvvz',
																		'data-framer-name': 'Frame 1948758493',
																		name: 'Frame 1948758493',
																		children: [
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Tier 1 CEX Listing: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'With DEX\u2019s conquered, $VODKA is heading straight for the top!',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Expect to see your favourite memecoin on the biggest crypto exchanges in the world.',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Tier 1 CEX Listing: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'With DEX\u2019s conquered, $VODKA is heading straight for the top!',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Expect to see your favourite memecoin on the biggest crypto exchanges in the world.',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Tier 1 CEX Listing: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'With DEX\u2019s conquered, $VODKA is heading straight for the top!',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Expect to see your favourite memecoin on the biggest crypto exchanges in the world.',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Tier 1 CEX Listing: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'With DEX\u2019s conquered, $VODKA is heading straight for the top!',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Expect to see your favourite memecoin on the biggest crypto exchanges in the world.',
																							}),
																						],
																					}),
																					className: 'framer-18e8589',
																					'data-framer-name':
																						'CEX Listing: $VODKA Arrives on CEX! Trade $VODKA with almost anything. Earn even more with $VODKA: Staking, Interactive games and many more ways to multiply your holdings!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'CEX Listing: $VODKA Arrives on CEX! Trade $VODKA with almost anything. Earn even more with $VODKA: Staking, Interactive games and many more ways to multiply your holdings!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Community Challenges: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Community Challenges: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Community Challenges: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Community Challenges: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																							}),
																						],
																					}),
																					className: 'framer-fc8fzn',
																					'data-framer-name':
																						'Community Challenges: Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Community Challenges: Earn $VODKA by completing global challenges. Grab your friends and earn those tokens!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Onchain Game: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Onchain Game: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Onchain Game: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: 'Onchain Game: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																							}),
																						],
																					}),
																					className: 'framer-22oiuc',
																					'data-framer-name':
																						'Onchain Game: A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Onchain Game: A simple game on the Solana blockchain with the opportunity to earn more $VODKA',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																		],
																	}),
																],
															}),
														}),
													],
												}),
												e(xe, {
													__framer__loop: _e,
													__framer__loopEffectEnabled: !0,
													__framer__loopRepeatDelay: 0,
													__framer__loopRepeatType: 'mirror',
													__framer__loopTransition: Rr,
													__perspectiveFX: !1,
													__targetOpacity: 1,
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														src: 'https://framerusercontent.com/images/rteXQfbULI9ER5idbVe0kOOCkNM.png',
													},
													className: 'framer-1tcfwa2',
													'data-framer-name': 'Arrow-Left-icon 1',
													name: 'Arrow-Left-icon 1',
													style: { rotate: -90 },
												}),
												t('div', {
													className: 'framer-14mef7z',
													'data-framer-name': 'Frame 1948758506',
													name: 'Frame 1948758506',
													children: [
														e('div', {
															className: 'framer-s11ptt',
															'data-border': !0,
															'data-framer-name': 'Frame 1948758466',
															name: 'Frame 1948758466',
															children: t('div', {
																className: 'framer-180cjcr',
																'data-framer-name': 'Frame 1948758460',
																name: 'Frame 1948758460',
																children: [
																	e(n, {
																		breakpoint: a,
																		overrides: {
																			hwto4p5xW: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(247, 176, 93)',
																						},
																						children: 'Distillation',
																					}),
																				}),
																			},
																			NRXlhggHx: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '32px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(247, 176, 93)',
																						},
																						children: 'Distillation',
																					}),
																				}),
																			},
																			WoMHsoWdr: {
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-line-height': '110%',
																							'--framer-text-color':
																								'rgb(247, 176, 93)',
																						},
																						children: 'Distillation',
																					}),
																				}),
																			},
																		},
																		children: e(o, {
																			__fromCanvasComponent: !0,
																			children: e(r, {
																				children: e('p', {
																					style: {
																						'--font-selector':
																							'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																						'--framer-font-family':
																							'"Lilita One", sans-serif',
																						'--framer-font-size': '40px',
																						'--framer-line-height': '110%',
																						'--framer-text-color':
																							'rgb(247, 176, 93)',
																					},
																					children: 'Distillation',
																				}),
																			}),
																			className: 'framer-1lk1qv3',
																			'data-framer-name': 'Distillation',
																			fonts: ['GF;Lilita One-regular'],
																			name: 'Distillation',
																			verticalAlignment: 'top',
																			withExternalLayout: !0,
																		}),
																	}),
																	t('div', {
																		className: 'framer-1cvkrtf',
																		'data-framer-name': 'Frame 1948758493',
																		name: 'Frame 1948758493',
																		children: [
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: '$VODKA: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: '$VODKA: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: '$VODKA: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: '$VODKA: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																							}),
																						],
																					}),
																					className: 'framer-xmdkgl',
																					'data-framer-name':
																						'$VODKA: Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: '$VODKA: Early supporters will receive a bottle of our own vodka! You will be able to buy $VODKA VODKA with your $VODKA tokens!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Product Placement: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Product Placement: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'Product Placement: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: 'Product Placement: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																							}),
																						],
																					}),
																					className: 'framer-1yklsq4',
																					'data-framer-name':
																						'Product Placement: TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Product Placement: TV Shows, Games, and Movies will feature our own brand vodka, ensuring your favourite actors and characters only drink the best!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																			e(n, {
																				breakpoint: a,
																				overrides: {
																					hwto4p5xW: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Exclusive Trips: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'$VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																								}),
																							],
																						}),
																					},
																					NRXlhggHx: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Exclusive Trips: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'18px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'$VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																								}),
																							],
																						}),
																					},
																					WoMHsoWdr: {
																						children: t(r, {
																							children: [
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItQm9sZA==',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'700',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children: 'Exclusive Trips: ',
																								}),
																								e('p', {
																									style: {
																										'--font-selector':
																											'SW50ZXItTWVkaXVt',
																										'--framer-font-family':
																											'"Inter", "Inter Placeholder", sans-serif',
																										'--framer-font-size':
																											'14px',
																										'--framer-font-weight':
																											'500',
																										'--framer-line-height':
																											'140%',
																										'--framer-text-color':
																											'rgb(55, 54, 54)',
																									},
																									children:
																										'$VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																								}),
																							],
																						}),
																					},
																				},
																				children: e(o, {
																					__fromCanvasComponent: !0,
																					children: t(r, {
																						children: [
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItQm9sZA==',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '700',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children: 'Exclusive Trips: ',
																							}),
																							e('p', {
																								style: {
																									'--font-selector':
																										'SW50ZXItTWVkaXVt',
																									'--framer-font-family':
																										'"Inter", "Inter Placeholder", sans-serif',
																									'--framer-font-size': '20px',
																									'--framer-font-weight': '500',
																									'--framer-line-height':
																										'140%',
																									'--framer-text-color':
																										'rgb(55, 54, 54)',
																								},
																								children:
																									'$VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																							}),
																						],
																					}),
																					className: 'framer-1ckx7pj',
																					'data-framer-name':
																						'Exclusive Trips: $VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																					fonts: ['Inter-Bold', 'Inter-Medium'],
																					name: 'Exclusive Trips: $VODKA holders will have an opportunity to receive invites to exclusive events, trips and more!',
																					verticalAlignment: 'top',
																					withExternalLayout: !0,
																				}),
																			}),
																		],
																	}),
																],
															}),
														}),
														e(n, {
															breakpoint: a,
															overrides: {
																hwto4p5xW: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		pixelHeight: 1800,
																		pixelWidth: 3200,
																		sizes: '570px',
																		src: 'https://framerusercontent.com/images/jrtfubwUSAjFY1HGAwMShj8co.jpg',
																		srcSet:
																			'https://framerusercontent.com/images/jrtfubwUSAjFY1HGAwMShj8co.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/jrtfubwUSAjFY1HGAwMShj8co.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/jrtfubwUSAjFY1HGAwMShj8co.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/jrtfubwUSAjFY1HGAwMShj8co.jpg 3200w',
																	},
																},
																NRXlhggHx: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		pixelHeight: 1800,
																		pixelWidth: 3200,
																		sizes: '400px',
																		src: 'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png',
																		srcSet:
																			'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=512 512w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png 3200w',
																	},
																},
																WoMHsoWdr: {
																	background: {
																		alt: '',
																		fit: 'fill',
																		loading: 'lazy',
																		pixelHeight: 1800,
																		pixelWidth: 3200,
																		positionX: 'center',
																		positionY: 'center',
																		sizes: 'calc(100vw - 40px)',
																		src: 'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png',
																		srcSet:
																			'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=512 512w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png 3200w',
																	},
																},
															},
															children: e(h, {
																background: {
																	alt: '',
																	fit: 'fill',
																	loading: 'lazy',
																	pixelHeight: 1800,
																	pixelWidth: 3200,
																	sizes: '570px',
																	src: 'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png',
																	srcSet:
																		'https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=512 512w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/nRou8HGOGaupnR47COevF57nyz4.png 3200w',
																},
																className: 'framer-ea2g20',
																'data-framer-name': 'image 1',
																name: 'image 1',
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
								e('div', {
									className: 'framer-x34ham',
									'data-framer-name': 'Frame 1948758467',
									name: 'Frame 1948758467',
									children: t('div', {
										className: 'framer-cj6qj9',
										'data-framer-name': 'Frame 1948758440',
										name: 'Frame 1948758440',
										children: [
											w() &&
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																sizes: '452px',
																src: 'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png',
																srcSet:
																	'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png?scale-down-to=512 512w,https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png 1000w',
															},
														},
														NRXlhggHx: {
															background: {
																alt: '',
																fit: 'fill',
																loading: 'lazy',
																sizes: '250px',
																src: 'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png',
																srcSet:
																	'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png?scale-down-to=512 512w,https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png 1000w',
															},
														},
													},
													children: e(h, {
														background: {
															alt: '',
															fit: 'fill',
															loading: 'lazy',
															sizes: '330px',
															src: 'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png',
															srcSet:
																'https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png?scale-down-to=512 512w,https://framerusercontent.com/images/yHXtuOxlugOcZX03cVgattXSsY.png 1000w',
														},
														className: 'framer-152wbnc hidden-lh59il',
														'data-framer-name': 'rumka',
														name: 'rumka',
													}),
												}),
											t('div', {
												className: 'framer-wtwn0h',
												'data-framer-name': 'Frame 1948758492',
												name: 'Frame 1948758492',
												children: [
													e(n, {
														breakpoint: a,
														overrides: {
															hwto4p5xW: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children:
																			'Ain\u2019t no life without $VODKA ',
																	}),
																}),
															},
															NRXlhggHx: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '30px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children:
																			'Ain\u2019t no life without $VODKA ',
																	}),
																}),
															},
															WoMHsoWdr: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color': 'rgb(42, 76, 117)',
																		},
																		children:
																			'Ain\u2019t no life without $VODKA ',
																	}),
																}),
															},
														},
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--framer-font-size': '80px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																	},
																	children: e('span', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family': '"Lilita One"',
																			'--framer-font-size': '80px',
																			'--framer-text-color':
																				'rgba(42, 76, 117, 1)',
																		},
																		children:
																			'Ain\u2019t no life without $VODKA ',
																	}),
																}),
															}),
															className: 'framer-xy3trr',
															'data-framer-name':
																'Ain\u2019t no life without $VODKA',
															fonts: ['GF;Lilita One-regular'],
															name: 'Ain\u2019t no life without $VODKA',
															verticalAlignment: 'center',
															withExternalLayout: !0,
														}),
													}),
													e(n, {
														breakpoint: a,
														overrides: {
															hwto4p5xW: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '40px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: 'Get yours today!',
																	}),
																}),
															},
															NRXlhggHx: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '30px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: 'Get yours today!',
																	}),
																}),
															},
															WoMHsoWdr: {
																children: e(r, {
																	children: e('p', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family':
																				'"Lilita One", sans-serif',
																			'--framer-font-size': '24px',
																			'--framer-line-height': '100%',
																			'--framer-text-alignment': 'center',
																			'--framer-text-color':
																				'rgb(255, 255, 255)',
																		},
																		children: 'Get yours today!',
																	}),
																}),
															},
														},
														children: e(o, {
															__fromCanvasComponent: !0,
															children: e(r, {
																children: e('p', {
																	style: {
																		'--framer-font-size': '80px',
																		'--framer-line-height': '100%',
																		'--framer-text-alignment': 'center',
																	},
																	children: e('span', {
																		style: {
																			'--font-selector':
																				'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																			'--framer-font-family': '"Lilita One"',
																			'--framer-font-size': '80px',
																			'--framer-text-color':
																				'rgba(255, 255, 255, 1)',
																		},
																		children: 'Get yours today!',
																	}),
																}),
															}),
															className: 'framer-13t5b66',
															'data-framer-name': 'Get yours today!',
															fonts: ['GF;Lilita One-regular'],
															name: 'Get yours today!',
															verticalAlignment: 'top',
															withExternalLayout: !0,
														}),
													}),
													t('div', {
														className: 'framer-wl89kx',
														children: [
															e(x, {
																href: 'https://t.me/vodkatokensol',
																openInNewTab: !0,
																children: t('a', {
																	className: 'framer-8zb8ig framer-lux5qc',
																	children: [
																		e(de, {
																			className: 'framer-3ozcmb',
																			'data-framer-name': 'logos:telegram',
																			fill: 'rgba(0,0,0,1)',
																			intrinsicHeight: 72,
																			intrinsicWidth: 73,
																			name: 'logos:telegram',
																			svg: `<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_59_143)">
<path d="M36.5 0C26.9544 0 17.7913 3.79519 11.0469 10.5441C4.29559 17.2957 0.501932 26.452 0.5 36C0.5 45.5439 4.29688 54.7071 11.0469 61.4559C17.7913 68.2048 26.9544 72 36.5 72C46.0456 72 55.2088 68.2048 61.9531 61.4559C68.7031 54.7071 72.5 45.5439 72.5 36C72.5 26.4561 68.7031 17.2929 61.9531 10.5441C55.2088 3.79519 46.0456 0 36.5 0Z" fill="url(#paint0_linear_59_143)"/>
<path d="M16.1807 33.7759C26.6516 29.2604 33.6322 26.2834 37.1226 24.8449C47.0997 20.7377 49.1703 20.0244 50.5227 20.0002C50.8201 19.9955 51.4823 20.0683 51.9143 20.4141C52.2735 20.7058 52.3745 21.1002 52.425 21.3771C52.4699 21.6538 52.5316 22.2844 52.4811 22.7766C51.9424 28.3988 49.6024 42.042 48.4128 48.3392C47.9134 51.0036 46.9201 51.8969 45.9606 51.9841C43.8731 52.1741 42.2907 50.6197 40.2706 49.3092C37.1113 47.2575 35.3269 45.9809 32.2574 43.9792C28.711 41.6659 31.0117 40.3942 33.0318 38.3165C33.5593 37.7726 42.7508 29.4976 42.9248 28.7471C42.9472 28.6532 42.9697 28.3032 42.7565 28.1188C42.5488 27.9338 42.2402 27.9971 42.0157 28.0471C41.6959 28.1182 36.6512 31.4226 26.8648 37.9598C25.4339 38.9342 24.1377 39.4092 22.9705 39.3842C21.6911 39.357 19.2221 38.6665 17.3871 38.0765C15.1425 37.3526 13.3525 36.9698 13.5096 35.7404C13.5882 35.1004 14.4804 34.4454 16.1807 33.7759Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_59_143" x1="3600.5" y1="0" x2="3600.5" y2="7200" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AABEE"/>
<stop offset="1" stop-color="#229ED9"/>
</linearGradient>
<clipPath id="clip0_59_143">
<rect width="72" height="72" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
`,
																			withExternalLayout: !0,
																		}),
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				NRXlhggHx: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '18px',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'Channel',
																						}),
																					}),
																				},
																				WoMHsoWdr: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '14px',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'Channel',
																						}),
																					}),
																				},
																			},
																			children: e(o, {
																				__fromCanvasComponent: !0,
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-text-alignment':
																								'center',
																							'--framer-text-color':
																								'rgb(255, 255, 255)',
																						},
																						children: 'Channel',
																					}),
																				}),
																				className: 'framer-yl4l59',
																				fonts: ['GF;Lilita One-regular'],
																				verticalAlignment: 'top',
																				withExternalLayout: !0,
																			}),
																		}),
																	],
																}),
															}),
															e(x, {
																href: 'https://t.me/VODKATOKENbot',
																children: t('a', {
																	className: 'framer-161lqp5 framer-lux5qc',
																	children: [
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				WoMHsoWdr: {
																					svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 39"><g transform="translate(0.274 0)" id="ss11879371805_1"><path d="M 0 39.271 L 0 0.271 L 39.452 0.271 L 39.452 39.271 Z" fill="transparent"></path><path d="M 19.726 0 C 14.496 0 9.475 2.056 5.779 5.711 C 2.08 9.369 0.001 14.328 0 19.5 C 0 24.67 2.08 29.633 5.779 33.289 C 9.475 36.944 14.496 39 19.726 39 C 24.956 39 29.977 36.944 33.673 33.289 C 37.372 29.633 39.452 24.67 39.452 19.5 C 39.452 14.33 37.372 9.367 33.673 5.711 C 29.977 2.056 24.956 0 19.726 0 Z" fill="rgb(42, 76, 117)"></path><path d="M 8.592 18.295 C 14.33 15.849 18.155 14.237 20.067 13.458 C 25.534 11.233 26.669 10.847 27.41 10.833 C 27.573 10.831 27.936 10.87 28.172 11.058 C 28.369 11.216 28.424 11.429 28.452 11.579 C 28.477 11.729 28.51 12.071 28.483 12.337 C 28.188 15.383 26.905 22.773 26.254 26.184 C 25.98 27.627 25.436 28.111 24.91 28.158 C 23.766 28.261 22.899 27.419 21.792 26.709 C 20.061 25.598 19.083 24.906 17.401 23.822 C 15.458 22.569 16.719 21.88 17.826 20.755 C 18.115 20.46 23.151 15.978 23.246 15.571 C 23.259 15.52 23.271 15.331 23.154 15.231 C 23.04 15.131 22.871 15.165 22.748 15.192 C 22.573 15.231 19.809 17.021 14.446 20.562 C 13.662 21.089 12.952 21.347 12.313 21.333 C 11.612 21.318 10.259 20.944 9.253 20.625 C 8.023 20.233 7.042 20.025 7.129 19.359 C 7.172 19.013 7.66 18.658 8.592 18.295 Z" fill="rgb(255,255,255)"></path></g></svg>',
																					svgContentId: 11879371805,
																				},
																			},
																			children: e(de, {
																				className: 'framer-uxqoog',
																				'data-framer-name': 'logos:telegram',
																				layout: 'position',
																				name: 'logos:telegram',
																				opacity: 1,
																				svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 73 72"><g transform="translate(0.5 0)" id="ss11879880011_1"><path d="M 0 72.5 L 0 0.5 L 72 0.5 L 72 72.5 Z" fill="transparent"></path><path d="M 36 0 C 26.454 0 17.291 3.795 10.547 10.544 C 3.796 17.296 0.002 26.452 0 36 C 0 45.544 3.797 54.707 10.547 61.456 C 17.291 68.205 26.454 72 36 72 C 45.546 72 54.709 68.205 61.453 61.456 C 68.203 54.707 72 45.544 72 36 C 72 26.456 68.203 17.293 61.453 10.544 C 54.709 3.795 45.546 0 36 0 Z" fill="rgb(42, 76, 117)"></path><path d="M 15.681 33.776 C 26.152 29.26 33.132 26.283 36.623 24.845 C 46.6 20.738 48.67 20.024 50.023 20 C 50.32 19.995 50.982 20.068 51.414 20.414 C 51.773 20.706 51.874 21.1 51.925 21.377 C 51.97 21.654 52.032 22.284 51.981 22.777 C 51.442 28.399 49.102 42.042 47.913 48.339 C 47.413 51.004 46.42 51.897 45.461 51.984 C 43.373 52.174 41.791 50.62 39.771 49.309 C 36.611 47.258 34.827 45.981 31.757 43.979 C 28.211 41.666 30.512 40.394 32.532 38.316 C 33.059 37.773 42.251 29.498 42.425 28.747 C 42.447 28.653 42.47 28.303 42.257 28.119 C 42.049 27.934 41.74 27.997 41.516 28.047 C 41.196 28.118 36.151 31.423 26.365 37.96 C 24.934 38.934 23.638 39.409 22.471 39.384 C 21.191 39.357 18.722 38.666 16.887 38.077 C 14.643 37.353 12.852 36.97 13.01 35.74 C 13.088 35.1 13.98 34.445 15.681 33.776 Z" fill="rgb(255,255,255)"></path></g></svg>',
																				svgContentId: 11879880011,
																				withExternalLayout: !0,
																			}),
																		}),
																		e(n, {
																			breakpoint: a,
																			overrides: {
																				NRXlhggHx: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '18px',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'Our Bot',
																						}),
																					}),
																				},
																				WoMHsoWdr: {
																					children: e(r, {
																						children: e('p', {
																							style: {
																								'--font-selector':
																									'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																								'--framer-font-family':
																									'"Lilita One", sans-serif',
																								'--framer-font-size': '14px',
																								'--framer-text-alignment':
																									'center',
																								'--framer-text-color':
																									'rgb(255, 255, 255)',
																							},
																							children: 'Our Bot',
																						}),
																					}),
																				},
																			},
																			children: e(o, {
																				__fromCanvasComponent: !0,
																				children: e(r, {
																					children: e('p', {
																						style: {
																							'--font-selector':
																								'R0Y7TGlsaXRhIE9uZS1yZWd1bGFy',
																							'--framer-font-family':
																								'"Lilita One", sans-serif',
																							'--framer-font-size': '24px',
																							'--framer-text-alignment':
																								'center',
																							'--framer-text-color':
																								'rgb(255, 255, 255)',
																						},
																						children: 'Our Bot',
																					}),
																				}),
																				className: 'framer-1nnh470',
																				fonts: ['GF;Lilita One-regular'],
																				verticalAlignment: 'top',
																				withExternalLayout: !0,
																			}),
																		}),
																	],
																}),
															}),
														],
													}),
												],
											}),
											w() &&
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															background: {
																alt: '',
																fit: 'stretch',
																loading: 'lazy',
																positionX: 'center',
																positionY: 'center',
																sizes: '447px',
																src: 'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png',
																srcSet:
																	'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=1024 995w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=2048 1990w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png 2356w',
															},
														},
														NRXlhggHx: {
															background: {
																alt: '',
																fit: 'stretch',
																loading: 'lazy',
																positionX: 'center',
																positionY: 'center',
																sizes: '250px',
																src: 'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png',
																srcSet:
																	'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=1024 995w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=2048 1990w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png 2356w',
															},
														},
													},
													children: e(h, {
														background: {
															alt: '',
															fit: 'stretch',
															loading: 'lazy',
															positionX: 'center',
															positionY: 'center',
															sizes: '323px',
															src: 'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png',
															srcSet:
																'https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=1024 995w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png?scale-down-to=2048 1990w,https://framerusercontent.com/images/PywnXjN2x7UaBZWU4pnxsX2AjYk.png 2356w',
														},
														className: 'framer-1isudjv hidden-lh59il',
														'data-framer-name': 'damag',
														name: 'damag',
													}),
												}),
										],
									}),
								}),
								t('div', {
									className: 'framer-p96is2',
									'data-framer-name': 'Panel 10',
									name: 'Panel 10',
									children: [
										e(n, {
											breakpoint: a,
											overrides: {
												NRXlhggHx: { whileHover: void 0, whileTap: Be },
												WoMHsoWdr: {
													background: {
														alt: '',
														fit: 'fill',
														loading: 'lazy',
														sizes: '250px',
														src: 'https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png',
														srcSet:
															'https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=512 512w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png 4075w',
													},
													whileHover: void 0,
													whileTap: Be,
												},
											},
											children: e(h, {
												background: {
													alt: '',
													fit: 'fill',
													loading: 'lazy',
													sizes: '300px',
													src: 'https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png',
													srcSet:
														'https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=512 512w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ezqZRy8zD24XR1SPAaES3IFm2U.png 4075w',
												},
												className: 'framer-1e0x1vs',
												'data-framer-name':
													'\u0420\u0435\u0441\u0443\u0440\u0441 3@4x',
												name: '\u0420\u0435\u0441\u0443\u0440\u0441 3@4x',
												whileHover: Fr,
											}),
										}),
										t('div', {
											className: 'framer-14ipvrg',
											'data-framer-name': 'Frame 1948758509',
											name: 'Frame 1948758509',
											children: [
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-font-weight': '600',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children: 'DISCLAIMER',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '24px',
																		'--framer-font-weight': '600',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children: 'DISCLAIMER',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-font-weight': '600',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children: 'DISCLAIMER',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--framer-font-size': '30px',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																},
																children: e('span', {
																	style: {
																		'--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
																		'--framer-font-family':
																			'"Inter-SemiBold", "Inter", sans-serif',
																		'--framer-font-size': '30px',
																		'--framer-font-weight': '600',
																		'--framer-text-color':
																			'rgba(45, 44, 44, 1)',
																	},
																	children: 'DISCLAIMER',
																}),
															}),
														}),
														className: 'framer-gg6595',
														'data-framer-name': 'DISCLAIMER',
														fonts: ['Inter-SemiBold'],
														name: 'DISCLAIMER',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
												e(n, {
													breakpoint: a,
													overrides: {
														hwto4p5xW: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItTWVkaXVt',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-font-weight': '500',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children:
																		'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
																}),
															}),
														},
														NRXlhggHx: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItTWVkaXVt',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '18px',
																		'--framer-font-weight': '500',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children:
																		'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
																}),
															}),
														},
														WoMHsoWdr: {
															children: e(r, {
																children: e('p', {
																	style: {
																		'--font-selector': 'SW50ZXItTWVkaXVt',
																		'--framer-font-family':
																			'"Inter", "Inter Placeholder", sans-serif',
																		'--framer-font-size': '12px',
																		'--framer-font-weight': '500',
																		'--framer-line-height': '140%',
																		'--framer-text-alignment': 'center',
																		'--framer-text-color': 'rgb(45, 44, 44)',
																	},
																	children:
																		'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
																}),
															}),
														},
													},
													children: e(o, {
														__fromCanvasComponent: !0,
														children: e(r, {
															children: e('p', {
																style: {
																	'--framer-font-size': '20px',
																	'--framer-line-height': '140%',
																	'--framer-text-alignment': 'center',
																},
																children: e('span', {
																	style: {
																		'--font-selector': 'SW50ZXItTWVkaXVt',
																		'--framer-font-family':
																			'"Inter-Medium", "Inter", sans-serif',
																		'--framer-font-size': '20px',
																		'--framer-font-weight': '500',
																		'--framer-text-color':
																			'rgba(45, 44, 44, 1)',
																	},
																	children:
																		'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
																}),
															}),
														}),
														className: 'framer-19wggtd',
														'data-framer-name':
															'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
														fonts: ['Inter-Medium'],
														name: 'I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.',
														verticalAlignment: 'top',
														withExternalLayout: !0,
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						e('div', { className: O(Ye, ...E), id: 'overlay' }),
					],
				}),
			})
		)
	}),
	Xr = [
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		`.${Q.bodyClassName}-framer-PmoIx { background: white; }`,
		'.framer-PmoIx.framer-lux5qc, .framer-PmoIx .framer-lux5qc { display: block; }',
		'.framer-PmoIx.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1920px; }',
		'.framer-PmoIx .framer-1muvhg0-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 95%; z-index: 1; }',
		'.framer-PmoIx .framer-rdxkp8 { align-content: center; align-items: center; background-color: #ffffff; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1sopt9s { flex: none; height: 800px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-17bnxty { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 9; }',
		'.framer-PmoIx .framer-1kvggyw { background-color: #ffffff; flex: none; height: 1418px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-bzx79m { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 800px); left: 50%; position: absolute; top: 392px; transform: translateX(-50%); width: 800px; }',
		'.framer-PmoIx .framer-ubhggx { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 136px; transform: translateX(-50%); white-space: pre; width: auto; }',
		'.framer-PmoIx .framer-11mn4ps { --framer-paragraph-spacing: 0px; bottom: 139px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 823px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-1i6urjr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 246px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-6kuhdb, .framer-PmoIx .framer-19zih48, .framer-PmoIx .framer-l25tz9, .framer-PmoIx .framer-81oop2, .framer-PmoIx .framer-1cp64xu, .framer-PmoIx .framer-123ia45, .framer-PmoIx .framer-29gkyr, .framer-PmoIx .framer-gg6j5g, .framer-PmoIx .framer-xj8wc0, .framer-PmoIx .framer-cb1t89, .framer-PmoIx .framer-gw3pmj, .framer-PmoIx .framer-8nkemn, .framer-PmoIx .framer-1692ktc, .framer-PmoIx .framer-tkbzaz, .framer-PmoIx .framer-18gwlrh, .framer-PmoIx .framer-1lhpjp7, .framer-PmoIx .framer-k6x8tg, .framer-PmoIx .framer-6496vw, .framer-PmoIx .framer-1bev2v0, .framer-PmoIx .framer-1lb2jlc, .framer-PmoIx .framer-pchqj1, .framer-PmoIx .framer-1nmaqra, .framer-PmoIx .framer-plm2bx, .framer-PmoIx .framer-11amy61, .framer-PmoIx .framer-16xknvw, .framer-PmoIx .framer-dsfmdh, .framer-PmoIx .framer-1h085i0, .framer-PmoIx .framer-wru2hs, .framer-PmoIx .framer-1isfxby, .framer-PmoIx .framer-18aoshr, .framer-PmoIx .framer-1dyyeqf, .framer-PmoIx .framer-1u9lku5, .framer-PmoIx .framer-pa0wcg, .framer-PmoIx .framer-w69jx6, .framer-PmoIx .framer-ao93f7 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
		'.framer-PmoIx .framer-xk0ohv { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 66%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 617px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-1sw1soa { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 66%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 417px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-1o5fzz6 { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 34%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 617px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-1cewjx4 { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 35%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 827px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-18wgnzl { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 66%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 817px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-2l0vrt { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; cursor: grab; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 35%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 417px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-gktphm { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 1920px; }',
		'.framer-PmoIx .framer-1eyo6xm { --border-bottom-width: 2px; --border-color: #329bbb; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #6ed7f7; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 70px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-e9vivy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 677px; }',
		'.framer-PmoIx .framer-1k3jpx4 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 677px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-1l09mx8 { aspect-ratio: 1.7796352583586625 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: var(--framer-aspect-ratio-supported, 658px); position: relative; width: 1171px; }',
		'.framer-PmoIx .framer-8fepo, .framer-PmoIx .framer-2v1m3a { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.65); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 50px 20px 50px; position: relative; text-decoration: none; width: 370px; }',
		'.framer-PmoIx .framer-1apxpsq { background-color: #ffffff; flex: none; height: 1640px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-ee35la { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 98px; transform: translateX(-50%); width: 850px; }',
		'.framer-PmoIx .framer-oxvo8f { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 850px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-17k71j8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 282px; transform: translateX(-50%); white-space: pre-wrap; width: 1170px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-1fnyn3z { flex: none; height: 800px; left: calc(50.00000000000002% - 800px / 2); overflow: visible; position: absolute; top: 458px; width: 800px; }',
		'.framer-PmoIx .framer-1vq102f { aspect-ratio: 1 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: var(--framer-aspect-ratio-supported, 800px); left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: 800px; }',
		'.framer-PmoIx .framer-11zp4m2 { -webkit-filter: drop-shadow(20px 10px 3px rgba(0, 0, 0, 0.25)); aspect-ratio: 1 / 1; filter: drop-shadow(20px 10px 3px rgba(0, 0, 0, 0.25)); flex: none; height: var(--framer-aspect-ratio-supported, 400px); left: 51%; position: absolute; top: 54%; transform: translate(-50%, -50%); width: 400px; }',
		'.framer-PmoIx .framer-fp0rtk { --border-bottom-width: 1px; --border-color: #57bb7a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #e4f4f8; border-bottom-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; right: 0px; top: 0px; width: min-content; }',
		'.framer-PmoIx .framer-je8xcm { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 40%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 1338px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-fuf4a4 { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 1456px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-jm5a72 { --border-bottom-width: 2px; --border-color: #2a4c75; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; box-shadow: 0px 8px 0px 0px #2a4c75; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 61%; overflow: visible; padding: 20px 40px 20px 40px; position: absolute; top: 1337px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-14r5nw4 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-67vdpo { --border-bottom-width: 2px; --border-color: #329bbb; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #6dd6f7; flex: none; height: 3120px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-bdhq95 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 126px; transform: translateX(-50%); width: min-content; }',
		'.framer-PmoIx .framer-ozk4zi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 318px; transform: translateX(-50%); width: 1171px; }',
		'.framer-PmoIx .framer-15ke55n, .framer-PmoIx .framer-1xltcvb, .framer-PmoIx .framer-198b5kb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1c1gqt2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1x3e9a2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }',
		'.framer-PmoIx .framer-y3zlfk, .framer-PmoIx .framer-1btxcu4, .framer-PmoIx .framer-42yq8x, .framer-PmoIx .framer-dedbqb, .framer-PmoIx .framer-1k7i0yy, .framer-PmoIx .framer-lu8ru5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1171px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-100i3mo { aspect-ratio: 1.7796352583586625 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: var(--framer-aspect-ratio-supported, 658px); position: relative; width: 100%; }',
		'.framer-PmoIx .framer-gr3mfj, .framer-PmoIx .framer-b5f561 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1rwpykc { flex: none; height: 659px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1yh4x42 { aspect-ratio: 1.7754172989377845 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 659px); left: 0px; position: absolute; top: 0px; width: 1170px; }',
		'.framer-PmoIx .framer-ddrc6u { aspect-ratio: 1.7769347496206374 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 659px); position: relative; width: 100%; }',
		'.framer-PmoIx .framer-d64n2h { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-wthcgz { background-color: #ffffff; flex: none; height: 1250px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1m8n47q { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 51%; position: absolute; top: 144px; transform: translateX(-50%); white-space: pre; width: auto; }',
		'.framer-PmoIx .framer-uho5er { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 29%; overflow: visible; padding: 0px; position: absolute; top: 522px; transform: translateX(-50%); width: 370px; }',
		'.framer-PmoIx .framer-1n2p2ke { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 29%; overflow: visible; padding: 0px; position: absolute; top: 722px; transform: translateX(-50%); width: 370px; }',
		'.framer-PmoIx .framer-1ky7vui { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 29%; overflow: visible; padding: 0px; position: absolute; top: 922px; transform: translateX(-50%); width: 369px; }',
		'.framer-PmoIx .framer-w15q24 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 71%; overflow: visible; padding: 0px; position: absolute; top: 522px; transform: translateX(-50%); width: 370px; }',
		'.framer-PmoIx .framer-12s9y3r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 71%; overflow: visible; padding: 0px; position: absolute; top: 722px; transform: translateX(-50%); width: 370px; }',
		'.framer-PmoIx .framer-a3jzr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 71%; overflow: visible; padding: 0px; position: absolute; top: 922px; transform: translateX(-50%); width: 370px; }',
		'.framer-PmoIx .framer-1w84i2y { aspect-ratio: 0.3325301204819277 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 650px); left: 50%; position: absolute; top: 394px; transform: translateX(-50%); width: 216px; }',
		'.framer-PmoIx .framer-173jo37, .framer-PmoIx .framer-x34ham { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 30px 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1xwv8e0 { align-content: center; align-items: center; background-color: #6ed7f7; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 80px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-5j4wwr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1180px; }',
		'.framer-PmoIx .framer-yx6g96 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 770px; }',
		'.framer-PmoIx .framer-547rul, .framer-PmoIx .framer-j140i9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 770px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-10i3drt { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 716px; overflow: hidden; position: relative; width: 1180px; will-change: var(--framer-will-change-override, transform); }',
		'.framer-PmoIx .framer-n2nczs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 330px; }',
		'.framer-PmoIx .framer-18qii88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
		'.framer-PmoIx .framer-1149868 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; }',
		'.framer-PmoIx .framer-31cord { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 332px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-18ct404 { background-color: #ffffff; flex: none; height: 2575px; overflow: visible; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-ligwht { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 162px; transform: translateX(-50%); white-space: pre; width: auto; }',
		'.framer-PmoIx .framer-1906rhs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 472px; transform: translateX(-50%); width: 1170px; }',
		'.framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-14mef7z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-p118lw { --border-bottom-width: 1px; --border-color: #79c995; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #e4f4f7; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; box-shadow: 0px 8px 0px 0px rgba(87, 187, 122, 0.8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px; position: relative; width: 570px; }',
		'.framer-PmoIx .framer-wtetba, .framer-PmoIx .framer-d51xn7, .framer-PmoIx .framer-180cjcr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-bl8juf, .framer-PmoIx .framer-1y58vcp, .framer-PmoIx .framer-s4iklp, .framer-PmoIx .framer-18hylh0, .framer-PmoIx .framer-1ou4n0z, .framer-PmoIx .framer-18e8589, .framer-PmoIx .framer-fc8fzn, .framer-PmoIx .framer-22oiuc, .framer-PmoIx .framer-1lk1qv3, .framer-PmoIx .framer-xmdkgl, .framer-PmoIx .framer-1yklsq4, .framer-PmoIx .framer-1ckx7pj { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 450px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-1rjedsj, .framer-PmoIx .framer-swgvvz, .framer-PmoIx .framer-1cvkrtf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-fpm20v { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 450px); position: relative; width: 450px; }',
		'.framer-PmoIx .framer-1l0pmhs, .framer-PmoIx .framer-1tcfwa2 { flex: none; height: 80px; position: relative; width: 80px; }',
		'.framer-PmoIx .framer-g2j26u { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); position: relative; width: 500px; }',
		'.framer-PmoIx .framer-17smthl { --border-bottom-width: 1px; --border-color: #b977cd; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #e4f4f7; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; box-shadow: 0px 8px 0px 0px rgba(185, 119, 205, 0.8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px; position: relative; width: 570px; }',
		'.framer-PmoIx .framer-s11ptt { --border-bottom-width: 1px; --border-color: #f7b05d; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #e4f4f7; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; box-shadow: 0px 8px 0px 0px rgba(247, 176, 93, 0.8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px; position: relative; width: 570px; }',
		'.framer-PmoIx .framer-ea2g20 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 570px); position: relative; width: 570px; }',
		'.framer-PmoIx .framer-cj6qj9 { align-content: center; align-items: center; background-color: #6ed7f7; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 0px 60px 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-152wbnc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 330px); position: relative; width: 330px; }',
		'.framer-PmoIx .framer-wtwn0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
		'.framer-PmoIx .framer-xy3trr, .framer-PmoIx .framer-13t5b66 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1043px; word-break: break-word; word-wrap: break-word; }',
		'.framer-PmoIx .framer-wl89kx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
		'.framer-PmoIx .framer-8zb8ig, .framer-PmoIx .framer-161lqp5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
		'.framer-PmoIx .framer-3ozcmb, .framer-PmoIx .framer-uxqoog { flex: none; height: 72px; position: relative; width: 73px; }',
		'.framer-PmoIx .framer-yl4l59, .framer-PmoIx .framer-1nnh470 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
		'.framer-PmoIx .framer-1isudjv { aspect-ratio: 0.971947194719472 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 332px); position: relative; width: 323px; }',
		'.framer-PmoIx .framer-p96is2 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 62px; height: 698px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
		'.framer-PmoIx .framer-1e0x1vs { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); position: relative; width: 300px; }',
		'.framer-PmoIx .framer-14ipvrg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 970px; }',
		'.framer-PmoIx .framer-gg6595, .framer-PmoIx .framer-19wggtd { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 970px; word-break: break-word; word-wrap: break-word; }',
		'@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-PmoIx.framer-72rtr7, .framer-PmoIx .framer-rdxkp8, .framer-PmoIx .framer-1i6urjr, .framer-PmoIx .framer-xk0ohv, .framer-PmoIx .framer-1sw1soa, .framer-PmoIx .framer-1o5fzz6, .framer-PmoIx .framer-1cewjx4, .framer-PmoIx .framer-18wgnzl, .framer-PmoIx .framer-2l0vrt, .framer-PmoIx .framer-gktphm, .framer-PmoIx .framer-1eyo6xm, .framer-PmoIx .framer-e9vivy, .framer-PmoIx .framer-8fepo, .framer-PmoIx .framer-ee35la, .framer-PmoIx .framer-fp0rtk, .framer-PmoIx .framer-je8xcm, .framer-PmoIx .framer-fuf4a4, .framer-PmoIx .framer-jm5a72, .framer-PmoIx .framer-14r5nw4, .framer-PmoIx .framer-bdhq95, .framer-PmoIx .framer-ozk4zi, .framer-PmoIx .framer-15ke55n, .framer-PmoIx .framer-1c1gqt2, .framer-PmoIx .framer-1x3e9a2, .framer-PmoIx .framer-1xltcvb, .framer-PmoIx .framer-gr3mfj, .framer-PmoIx .framer-198b5kb, .framer-PmoIx .framer-b5f561, .framer-PmoIx .framer-uho5er, .framer-PmoIx .framer-1n2p2ke, .framer-PmoIx .framer-1ky7vui, .framer-PmoIx .framer-w15q24, .framer-PmoIx .framer-12s9y3r, .framer-PmoIx .framer-a3jzr, .framer-PmoIx .framer-173jo37, .framer-PmoIx .framer-1xwv8e0, .framer-PmoIx .framer-5j4wwr, .framer-PmoIx .framer-yx6g96, .framer-PmoIx .framer-n2nczs, .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-18qii88, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf, .framer-PmoIx .framer-2v1m3a, .framer-PmoIx .framer-1906rhs, .framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-p118lw, .framer-PmoIx .framer-wtetba, .framer-PmoIx .framer-1rjedsj, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-17smthl, .framer-PmoIx .framer-d51xn7, .framer-PmoIx .framer-swgvvz, .framer-PmoIx .framer-14mef7z, .framer-PmoIx .framer-s11ptt, .framer-PmoIx .framer-180cjcr, .framer-PmoIx .framer-1cvkrtf, .framer-PmoIx .framer-x34ham, .framer-PmoIx .framer-cj6qj9, .framer-PmoIx .framer-wtwn0h, .framer-PmoIx .framer-wl89kx, .framer-PmoIx .framer-8zb8ig, .framer-PmoIx .framer-161lqp5, .framer-PmoIx .framer-p96is2, .framer-PmoIx .framer-14ipvrg { gap: 0px; } .framer-PmoIx.framer-72rtr7 > *, .framer-PmoIx .framer-rdxkp8 > *, .framer-PmoIx .framer-ee35la > *, .framer-PmoIx .framer-1x3e9a2 > *, .framer-PmoIx .framer-gr3mfj > *, .framer-PmoIx .framer-b5f561 > *, .framer-PmoIx .framer-uho5er > *, .framer-PmoIx .framer-1n2p2ke > *, .framer-PmoIx .framer-1ky7vui > *, .framer-PmoIx .framer-w15q24 > *, .framer-PmoIx .framer-12s9y3r > *, .framer-PmoIx .framer-a3jzr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PmoIx.framer-72rtr7 > :first-child, .framer-PmoIx .framer-rdxkp8 > :first-child, .framer-PmoIx .framer-gktphm > :first-child, .framer-PmoIx .framer-e9vivy > :first-child, .framer-PmoIx .framer-ee35la > :first-child, .framer-PmoIx .framer-fp0rtk > :first-child, .framer-PmoIx .framer-ozk4zi > :first-child, .framer-PmoIx .framer-15ke55n > :first-child, .framer-PmoIx .framer-1x3e9a2 > :first-child, .framer-PmoIx .framer-1xltcvb > :first-child, .framer-PmoIx .framer-gr3mfj > :first-child, .framer-PmoIx .framer-198b5kb > :first-child, .framer-PmoIx .framer-b5f561 > :first-child, .framer-PmoIx .framer-uho5er > :first-child, .framer-PmoIx .framer-1n2p2ke > :first-child, .framer-PmoIx .framer-1ky7vui > :first-child, .framer-PmoIx .framer-w15q24 > :first-child, .framer-PmoIx .framer-12s9y3r > :first-child, .framer-PmoIx .framer-a3jzr > :first-child, .framer-PmoIx .framer-173jo37 > :first-child, .framer-PmoIx .framer-5j4wwr > :first-child, .framer-PmoIx .framer-yx6g96 > :first-child, .framer-PmoIx .framer-1nstxph > :first-child, .framer-PmoIx .framer-1popjn6 > :first-child, .framer-PmoIx .framer-pwvnuf > :first-child, .framer-PmoIx .framer-1906rhs > :first-child, .framer-PmoIx .framer-p118lw > :first-child, .framer-PmoIx .framer-wtetba > :first-child, .framer-PmoIx .framer-1rjedsj > :first-child, .framer-PmoIx .framer-17smthl > :first-child, .framer-PmoIx .framer-d51xn7 > :first-child, .framer-PmoIx .framer-swgvvz > :first-child, .framer-PmoIx .framer-s11ptt > :first-child, .framer-PmoIx .framer-180cjcr > :first-child, .framer-PmoIx .framer-1cvkrtf > :first-child, .framer-PmoIx .framer-x34ham > :first-child, .framer-PmoIx .framer-wtwn0h > :first-child, .framer-PmoIx .framer-8zb8ig > :first-child, .framer-PmoIx .framer-161lqp5 > :first-child, .framer-PmoIx .framer-p96is2 > :first-child, .framer-PmoIx .framer-14ipvrg > :first-child { margin-top: 0px; } .framer-PmoIx.framer-72rtr7 > :last-child, .framer-PmoIx .framer-rdxkp8 > :last-child, .framer-PmoIx .framer-gktphm > :last-child, .framer-PmoIx .framer-e9vivy > :last-child, .framer-PmoIx .framer-ee35la > :last-child, .framer-PmoIx .framer-fp0rtk > :last-child, .framer-PmoIx .framer-ozk4zi > :last-child, .framer-PmoIx .framer-15ke55n > :last-child, .framer-PmoIx .framer-1x3e9a2 > :last-child, .framer-PmoIx .framer-1xltcvb > :last-child, .framer-PmoIx .framer-gr3mfj > :last-child, .framer-PmoIx .framer-198b5kb > :last-child, .framer-PmoIx .framer-b5f561 > :last-child, .framer-PmoIx .framer-uho5er > :last-child, .framer-PmoIx .framer-1n2p2ke > :last-child, .framer-PmoIx .framer-1ky7vui > :last-child, .framer-PmoIx .framer-w15q24 > :last-child, .framer-PmoIx .framer-12s9y3r > :last-child, .framer-PmoIx .framer-a3jzr > :last-child, .framer-PmoIx .framer-173jo37 > :last-child, .framer-PmoIx .framer-5j4wwr > :last-child, .framer-PmoIx .framer-yx6g96 > :last-child, .framer-PmoIx .framer-1nstxph > :last-child, .framer-PmoIx .framer-1popjn6 > :last-child, .framer-PmoIx .framer-pwvnuf > :last-child, .framer-PmoIx .framer-1906rhs > :last-child, .framer-PmoIx .framer-p118lw > :last-child, .framer-PmoIx .framer-wtetba > :last-child, .framer-PmoIx .framer-1rjedsj > :last-child, .framer-PmoIx .framer-17smthl > :last-child, .framer-PmoIx .framer-d51xn7 > :last-child, .framer-PmoIx .framer-swgvvz > :last-child, .framer-PmoIx .framer-s11ptt > :last-child, .framer-PmoIx .framer-180cjcr > :last-child, .framer-PmoIx .framer-1cvkrtf > :last-child, .framer-PmoIx .framer-x34ham > :last-child, .framer-PmoIx .framer-wtwn0h > :last-child, .framer-PmoIx .framer-8zb8ig > :last-child, .framer-PmoIx .framer-161lqp5 > :last-child, .framer-PmoIx .framer-p96is2 > :last-child, .framer-PmoIx .framer-14ipvrg > :last-child { margin-bottom: 0px; } .framer-PmoIx .framer-1i6urjr > *, .framer-PmoIx .framer-bdhq95 > * { margin: 0px; margin-left: calc(25px / 2); margin-right: calc(25px / 2); } .framer-PmoIx .framer-1i6urjr > :first-child, .framer-PmoIx .framer-xk0ohv > :first-child, .framer-PmoIx .framer-1sw1soa > :first-child, .framer-PmoIx .framer-1o5fzz6 > :first-child, .framer-PmoIx .framer-1cewjx4 > :first-child, .framer-PmoIx .framer-18wgnzl > :first-child, .framer-PmoIx .framer-2l0vrt > :first-child, .framer-PmoIx .framer-1eyo6xm > :first-child, .framer-PmoIx .framer-8fepo > :first-child, .framer-PmoIx .framer-je8xcm > :first-child, .framer-PmoIx .framer-fuf4a4 > :first-child, .framer-PmoIx .framer-jm5a72 > :first-child, .framer-PmoIx .framer-14r5nw4 > :first-child, .framer-PmoIx .framer-bdhq95 > :first-child, .framer-PmoIx .framer-1c1gqt2 > :first-child, .framer-PmoIx .framer-1xwv8e0 > :first-child, .framer-PmoIx .framer-n2nczs > :first-child, .framer-PmoIx .framer-18qii88 > :first-child, .framer-PmoIx .framer-2v1m3a > :first-child, .framer-PmoIx .framer-3b2fja > :first-child, .framer-PmoIx .framer-17xn4pk > :first-child, .framer-PmoIx .framer-14mef7z > :first-child, .framer-PmoIx .framer-cj6qj9 > :first-child, .framer-PmoIx .framer-wl89kx > :first-child { margin-left: 0px; } .framer-PmoIx .framer-1i6urjr > :last-child, .framer-PmoIx .framer-xk0ohv > :last-child, .framer-PmoIx .framer-1sw1soa > :last-child, .framer-PmoIx .framer-1o5fzz6 > :last-child, .framer-PmoIx .framer-1cewjx4 > :last-child, .framer-PmoIx .framer-18wgnzl > :last-child, .framer-PmoIx .framer-2l0vrt > :last-child, .framer-PmoIx .framer-1eyo6xm > :last-child, .framer-PmoIx .framer-8fepo > :last-child, .framer-PmoIx .framer-je8xcm > :last-child, .framer-PmoIx .framer-fuf4a4 > :last-child, .framer-PmoIx .framer-jm5a72 > :last-child, .framer-PmoIx .framer-14r5nw4 > :last-child, .framer-PmoIx .framer-bdhq95 > :last-child, .framer-PmoIx .framer-1c1gqt2 > :last-child, .framer-PmoIx .framer-1xwv8e0 > :last-child, .framer-PmoIx .framer-n2nczs > :last-child, .framer-PmoIx .framer-18qii88 > :last-child, .framer-PmoIx .framer-2v1m3a > :last-child, .framer-PmoIx .framer-3b2fja > :last-child, .framer-PmoIx .framer-17xn4pk > :last-child, .framer-PmoIx .framer-14mef7z > :last-child, .framer-PmoIx .framer-cj6qj9 > :last-child, .framer-PmoIx .framer-wl89kx > :last-child { margin-right: 0px; } .framer-PmoIx .framer-xk0ohv > *, .framer-PmoIx .framer-1sw1soa > *, .framer-PmoIx .framer-1o5fzz6 > *, .framer-PmoIx .framer-1cewjx4 > *, .framer-PmoIx .framer-18wgnzl > *, .framer-PmoIx .framer-2l0vrt > *, .framer-PmoIx .framer-8fepo > *, .framer-PmoIx .framer-je8xcm > *, .framer-PmoIx .framer-fuf4a4 > *, .framer-PmoIx .framer-jm5a72 > *, .framer-PmoIx .framer-14r5nw4 > *, .framer-PmoIx .framer-18qii88 > *, .framer-PmoIx .framer-2v1m3a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PmoIx .framer-gktphm > *, .framer-PmoIx .framer-173jo37 > *, .framer-PmoIx .framer-wtetba > *, .framer-PmoIx .framer-d51xn7 > *, .framer-PmoIx .framer-180cjcr > *, .framer-PmoIx .framer-x34ham > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-PmoIx .framer-1eyo6xm > *, .framer-PmoIx .framer-1xwv8e0 > *, .framer-PmoIx .framer-cj6qj9 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-PmoIx .framer-e9vivy > *, .framer-PmoIx .framer-p96is2 > * { margin: 0px; margin-bottom: calc(62px / 2); margin-top: calc(62px / 2); } .framer-PmoIx .framer-fp0rtk > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-PmoIx .framer-ozk4zi > *, .framer-PmoIx .framer-5j4wwr > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-PmoIx .framer-15ke55n > *, .framer-PmoIx .framer-1xltcvb > *, .framer-PmoIx .framer-198b5kb > *, .framer-PmoIx .framer-1906rhs > *, .framer-PmoIx .framer-p118lw > *, .framer-PmoIx .framer-17smthl > *, .framer-PmoIx .framer-s11ptt > *, .framer-PmoIx .framer-wtwn0h > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-PmoIx .framer-1c1gqt2 > *, .framer-PmoIx .framer-3b2fja > *, .framer-PmoIx .framer-17xn4pk > *, .framer-PmoIx .framer-14mef7z > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-PmoIx .framer-yx6g96 > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-PmoIx .framer-n2nczs > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-PmoIx .framer-1nstxph > *, .framer-PmoIx .framer-1popjn6 > *, .framer-PmoIx .framer-pwvnuf > *, .framer-PmoIx .framer-1rjedsj > *, .framer-PmoIx .framer-swgvvz > *, .framer-PmoIx .framer-1cvkrtf > *, .framer-PmoIx .framer-14ipvrg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-PmoIx .framer-wl89kx > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-PmoIx .framer-8zb8ig > *, .framer-PmoIx .framer-161lqp5 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
		'@media (min-width: 1920px) { .framer-PmoIx .hidden-72rtr7 { display: none !important; } }',
		`@media (min-width: 1280px) and (max-width: 1919px) { .framer-PmoIx .hidden-i8mwk7 { display: none !important; } .${Q.bodyClassName}-framer-PmoIx { background: white; } .framer-PmoIx.framer-72rtr7 { width: 1280px; } .framer-PmoIx .framer-1muvhg0-container { left: 50%; width: 95%; } .framer-PmoIx .framer-rdxkp8 { cursor: unset; } .framer-PmoIx .framer-1sopt9s { height: 100vh; width: 100%; } .framer-PmoIx .framer-1kvggyw { height: 1159px; } .framer-PmoIx .framer-bzx79m { height: var(--framer-aspect-ratio-supported, 600px); top: 390px; width: 600px; } .framer-PmoIx .framer-ubhggx { top: 156px; } .framer-PmoIx .framer-11mn4ps { bottom: 107px; } .framer-PmoIx .framer-1i6urjr { gap: 12px; } .framer-PmoIx .framer-xk0ohv { left: 74%; top: 548px; } .framer-PmoIx .framer-1sw1soa { left: 74%; top: 380px; } .framer-PmoIx .framer-1o5fzz6 { left: 27%; top: 548px; } .framer-PmoIx .framer-1cewjx4 { left: 28%; top: 716px; } .framer-PmoIx .framer-18wgnzl { left: 73%; top: 716px; } .framer-PmoIx .framer-2l0vrt { left: 28%; top: 380px; } .framer-PmoIx .framer-gktphm, .framer-PmoIx .framer-y3zlfk, .framer-PmoIx .framer-1btxcu4, .framer-PmoIx .framer-42yq8x, .framer-PmoIx .framer-dedbqb, .framer-PmoIx .framer-1k7i0yy, .framer-PmoIx .framer-lu8ru5 { width: 100%; } .framer-PmoIx .framer-e9vivy { width: 800px; } .framer-PmoIx .framer-1l09mx8 { height: var(--framer-aspect-ratio-supported, 450px); width: 100%; } .framer-PmoIx .framer-1apxpsq { height: 1529px; } .framer-PmoIx .framer-ee35la { top: 142px; } .framer-PmoIx .framer-17k71j8 { top: 276px; } .framer-PmoIx .framer-1fnyn3z { top: 392px; } .framer-PmoIx .framer-11zp4m2 { aspect-ratio: unset; height: 400px; left: calc(50.00000000000002% - 400px / 2); top: calc(51.37500000000003% - 400px / 2); transform: unset; } .framer-PmoIx .framer-je8xcm { left: 35%; top: 1252px; } .framer-PmoIx .framer-fuf4a4 { left: 50%; top: 1360px; } .framer-PmoIx .framer-jm5a72 { left: 66%; top: 1252px; } .framer-PmoIx .framer-14r5nw4 { height: 2433px; } .framer-PmoIx .framer-67vdpo { height: 100%; } .framer-PmoIx .framer-bdhq95 { top: 125px; } .framer-PmoIx .framer-ozk4zi { align-content: center; align-items: center; left: 50%; top: 277px; width: 800px; } .framer-PmoIx .framer-100i3mo, .framer-PmoIx .framer-ddrc6u { height: var(--framer-aspect-ratio-supported, 450px); } .framer-PmoIx .framer-1rwpykc { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; } .framer-PmoIx .framer-1yh4x42 { height: var(--framer-aspect-ratio-supported, 451px); left: unset; position: relative; top: unset; width: 100%; } .framer-PmoIx .framer-d64n2h { height: 56px; } .framer-PmoIx .framer-wthcgz { height: 1044px; } .framer-PmoIx .framer-1m8n47q { left: 51%; top: 166px; } .framer-PmoIx .framer-uho5er { left: 23%; top: 424px; } .framer-PmoIx .framer-1n2p2ke { left: 23%; top: 614px; } .framer-PmoIx .framer-1ky7vui { left: 23%; top: 804px; } .framer-PmoIx .framer-w15q24 { left: 77%; top: 424px; } .framer-PmoIx .framer-12s9y3r { left: 77%; top: 614px; } .framer-PmoIx .framer-a3jzr { left: 77%; top: 804px; } .framer-PmoIx .framer-1w84i2y { height: var(--framer-aspect-ratio-supported, 547px); left: 50%; top: 360px; width: 182px; } .framer-PmoIx .framer-5j4wwr { gap: 60px; order: 0; width: 800px; } .framer-PmoIx .framer-yx6g96 { order: 0; width: 96%; } .framer-PmoIx .framer-10i3drt { aspect-ratio: 1.6480446927374302 / 1; height: var(--framer-aspect-ratio-supported, 485px); order: 1; width: 800px; } .framer-PmoIx .framer-n2nczs { order: 2; } .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf { width: 200px; } .framer-PmoIx .framer-1149868 { height: var(--framer-aspect-ratio-supported, 30px); width: 30px; } .framer-PmoIx .framer-31cord, .framer-PmoIx .framer-xy3trr, .framer-PmoIx .framer-13t5b66 { white-space: pre; width: auto; } .framer-PmoIx .framer-2v1m3a { order: 3; width: 46%; } .framer-PmoIx .framer-18ct404 { height: 2543px; } .framer-PmoIx .framer-ligwht { left: 50%; top: 177px; } .framer-PmoIx .framer-1906rhs { top: 440px; } .framer-PmoIx .framer-cj6qj9 { height: 429px; } .framer-PmoIx .framer-152wbnc { height: var(--framer-aspect-ratio-supported, 452px); width: 452px; } .framer-PmoIx .framer-1isudjv { height: var(--framer-aspect-ratio-supported, 459px); width: 447px; } .framer-PmoIx .framer-p96is2 { height: 742px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-PmoIx .framer-1i6urjr, .framer-PmoIx .framer-1rwpykc, .framer-PmoIx .framer-5j4wwr { gap: 0px; } .framer-PmoIx .framer-1i6urjr > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-PmoIx .framer-1i6urjr > :first-child { margin-left: 0px; } .framer-PmoIx .framer-1i6urjr > :last-child { margin-right: 0px; } .framer-PmoIx .framer-1rwpykc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PmoIx .framer-1rwpykc > :first-child, .framer-PmoIx .framer-5j4wwr > :first-child { margin-top: 0px; } .framer-PmoIx .framer-1rwpykc > :last-child, .framer-PmoIx .framer-5j4wwr > :last-child { margin-bottom: 0px; } .framer-PmoIx .framer-5j4wwr > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } }}`,
		`@media (min-width: 810px) and (max-width: 1279px) { .framer-PmoIx .hidden-wnoffv { display: none !important; } .${Q.bodyClassName}-framer-PmoIx { background: white; } .framer-PmoIx.framer-72rtr7 { width: 810px; } .framer-PmoIx .framer-rdxkp8 { cursor: unset; } .framer-PmoIx .framer-1sopt9s { height: 100vh; } .framer-PmoIx .framer-1kvggyw { height: 1715px; } .framer-PmoIx .framer-bzx79m { height: var(--framer-aspect-ratio-supported, 810px); top: 356px; width: 100%; } .framer-PmoIx .framer-11mn4ps { bottom: 111px; left: -6px; right: -7px; transform: unset; width: unset; } .framer-PmoIx .framer-1i6urjr { gap: 12px; top: 240px; } .framer-PmoIx .framer-xk0ohv { left: 66%; top: 1440px; } .framer-PmoIx .framer-1sw1soa { left: 66%; top: 1234px; } .framer-PmoIx .framer-1o5fzz6 { left: 34%; top: 1333px; } .framer-PmoIx .framer-1cewjx4 { left: 34%; top: 1433px; } .framer-PmoIx .framer-18wgnzl { left: 66%; top: 1333px; } .framer-PmoIx .framer-2l0vrt { left: 34%; top: 1234px; } .framer-PmoIx .framer-gktphm, .framer-PmoIx .framer-e9vivy, .framer-PmoIx .framer-oxvo8f, .framer-PmoIx .framer-gg6595, .framer-PmoIx .framer-19wggtd { width: 100%; } .framer-PmoIx .framer-1eyo6xm { padding: 70px 0px 70px 0px; } .framer-PmoIx .framer-1l09mx8 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 455px); width: 100%; } .framer-PmoIx .framer-ee35la { left: 50%; top: 64px; width: 100%; } .framer-PmoIx .framer-gw3pmj { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-PmoIx .framer-17k71j8 { top: 227px; width: 90%; } .framer-PmoIx .framer-1fnyn3z { height: 810px; left: calc(50.00000000000002% - 100% / 2); top: 363px; width: 100%; } .framer-PmoIx .framer-1vq102f { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 810px); width: 100%; } .framer-PmoIx .framer-11zp4m2 { aspect-ratio: unset; height: 401px; left: calc(50.00000000000002% - 401px / 2); top: calc(51.358024691358054% - 401px / 2); transform: unset; width: 401px; } .framer-PmoIx .framer-fp0rtk { border-top-right-radius: unset; } .framer-PmoIx .framer-je8xcm { left: 50%; top: 1253px; } .framer-PmoIx .framer-fuf4a4 { bottom: 211px; left: 50%; top: unset; } .framer-PmoIx .framer-jm5a72 { bottom: 103px; left: 50%; top: unset; } .framer-PmoIx .framer-14r5nw4, .framer-PmoIx .framer-173jo37 { padding: 0px; } .framer-PmoIx .framer-67vdpo { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: 2369px; } .framer-PmoIx .framer-bdhq95 { gap: 10px; justify-content: center; top: 86px; width: 100%; } .framer-PmoIx .framer-ozk4zi { gap: 100px; left: 50%; top: 208px; width: 100%; } .framer-PmoIx .framer-1x3e9a2 { align-content: center; align-items: center; flex: none; justify-content: center; width: 100%; } .framer-PmoIx .framer-y3zlfk { order: 0; width: 90%; } .framer-PmoIx .framer-1btxcu4 { order: 1; width: 90%; } .framer-PmoIx .framer-100i3mo { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 455px); } .framer-PmoIx .framer-gr3mfj, .framer-PmoIx .framer-b5f561 { align-content: center; align-items: center; } .framer-PmoIx .framer-42yq8x, .framer-PmoIx .framer-dedbqb, .framer-PmoIx .framer-1k7i0yy, .framer-PmoIx .framer-lu8ru5, .framer-PmoIx .framer-14ipvrg { width: 90%; } .framer-PmoIx .framer-1rwpykc { height: 424px; } .framer-PmoIx .framer-1yh4x42 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 456px); width: 100%; } .framer-PmoIx .framer-ddrc6u { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 456px); } .framer-PmoIx .framer-d64n2h { height: 42px; } .framer-PmoIx .framer-wthcgz { height: 931px; } .framer-PmoIx .framer-1m8n47q { left: 50%; top: 109px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-PmoIx .framer-uho5er { left: 12%; top: 357px; } .framer-PmoIx .framer-1n2p2ke { left: 12%; top: 537px; } .framer-PmoIx .framer-1ky7vui { left: 12%; top: 717px; } .framer-PmoIx .framer-w15q24 { left: 88%; top: 357px; } .framer-PmoIx .framer-12s9y3r { left: 88%; top: 537px; } .framer-PmoIx .framer-a3jzr { left: 88%; top: 717px; } .framer-PmoIx .framer-1w84i2y { height: var(--framer-aspect-ratio-supported, 496px); left: 50%; top: 317px; width: 165px; } .framer-PmoIx .framer-1xwv8e0 { padding: 80px 0px 80px 0px; } .framer-PmoIx .framer-5j4wwr { gap: 50px; width: 100%; } .framer-PmoIx .framer-10i3drt { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: 433px; width: 100%; } .framer-PmoIx .framer-n2nczs { align-content: center; align-items: center; flex-direction: column; } .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf { gap: 10px; } .framer-PmoIx .framer-1u9lku5 { order: 0; } .framer-PmoIx .framer-pa0wcg, .framer-PmoIx .framer-p118lw, .framer-PmoIx .framer-s11ptt, .framer-PmoIx .framer-wtwn0h { order: 1; } .framer-PmoIx .framer-31cord, .framer-PmoIx .framer-xy3trr, .framer-PmoIx .framer-13t5b66 { white-space: pre; width: auto; } .framer-PmoIx .framer-18ct404 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; padding: 100px 0px 100px 0px; } .framer-PmoIx .framer-ligwht { left: unset; order: 0; position: relative; top: unset; transform: unset; } .framer-PmoIx .framer-1906rhs { gap: 80px; left: unset; order: 1; position: relative; top: unset; transform: unset; width: 100%; } .framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-14mef7z { flex-direction: column; } .framer-PmoIx .framer-fpm20v, .framer-PmoIx .framer-ea2g20 { height: var(--framer-aspect-ratio-supported, 400px); order: 0; width: 400px; } .framer-PmoIx .framer-g2j26u { height: var(--framer-aspect-ratio-supported, 400px); width: 400px; } .framer-PmoIx .framer-x34ham { background-color: #6ed7f7; padding: 0px; } .framer-PmoIx .framer-cj6qj9 { background-color: unset; } .framer-PmoIx .framer-152wbnc { height: var(--framer-aspect-ratio-supported, 250px); order: 0; width: 250px; } .framer-PmoIx .framer-1isudjv { height: var(--framer-aspect-ratio-supported, 257px); order: 2; width: 250px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-PmoIx .framer-1i6urjr, .framer-PmoIx .framer-bdhq95, .framer-PmoIx .framer-ozk4zi, .framer-PmoIx .framer-5j4wwr, .framer-PmoIx .framer-n2nczs, .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf, .framer-PmoIx .framer-18ct404, .framer-PmoIx .framer-1906rhs, .framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-14mef7z { gap: 0px; } .framer-PmoIx .framer-1i6urjr > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-PmoIx .framer-1i6urjr > :first-child, .framer-PmoIx .framer-bdhq95 > :first-child { margin-left: 0px; } .framer-PmoIx .framer-1i6urjr > :last-child, .framer-PmoIx .framer-bdhq95 > :last-child { margin-right: 0px; } .framer-PmoIx .framer-bdhq95 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PmoIx .framer-ozk4zi > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-PmoIx .framer-ozk4zi > :first-child, .framer-PmoIx .framer-5j4wwr > :first-child, .framer-PmoIx .framer-n2nczs > :first-child, .framer-PmoIx .framer-1nstxph > :first-child, .framer-PmoIx .framer-1popjn6 > :first-child, .framer-PmoIx .framer-pwvnuf > :first-child, .framer-PmoIx .framer-18ct404 > :first-child, .framer-PmoIx .framer-1906rhs > :first-child, .framer-PmoIx .framer-3b2fja > :first-child, .framer-PmoIx .framer-17xn4pk > :first-child, .framer-PmoIx .framer-14mef7z > :first-child { margin-top: 0px; } .framer-PmoIx .framer-ozk4zi > :last-child, .framer-PmoIx .framer-5j4wwr > :last-child, .framer-PmoIx .framer-n2nczs > :last-child, .framer-PmoIx .framer-1nstxph > :last-child, .framer-PmoIx .framer-1popjn6 > :last-child, .framer-PmoIx .framer-pwvnuf > :last-child, .framer-PmoIx .framer-18ct404 > :last-child, .framer-PmoIx .framer-1906rhs > :last-child, .framer-PmoIx .framer-3b2fja > :last-child, .framer-PmoIx .framer-17xn4pk > :last-child, .framer-PmoIx .framer-14mef7z > :last-child { margin-bottom: 0px; } .framer-PmoIx .framer-5j4wwr > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-PmoIx .framer-n2nczs > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-PmoIx .framer-1nstxph > *, .framer-PmoIx .framer-1popjn6 > *, .framer-PmoIx .framer-pwvnuf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-PmoIx .framer-18ct404 > * { margin: 0px; margin-bottom: calc(120px / 2); margin-top: calc(120px / 2); } .framer-PmoIx .framer-1906rhs > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-PmoIx .framer-3b2fja > *, .framer-PmoIx .framer-17xn4pk > *, .framer-PmoIx .framer-14mef7z > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }}`,
		`@media (max-width: 809px) { .framer-PmoIx .hidden-lh59il { display: none !important; } .${Q.bodyClassName}-framer-PmoIx { background: white; } .framer-PmoIx.framer-72rtr7 { width: 360px; } .framer-PmoIx .framer-rdxkp8 { cursor: unset; } .framer-PmoIx .framer-1sopt9s { height: 100vh; width: 100%; } .framer-PmoIx .framer-1kvggyw { height: 1157px; } .framer-PmoIx .framer-bzx79m { height: var(--framer-aspect-ratio-supported, 360px); top: 206px; width: 100%; } .framer-PmoIx .framer-ubhggx { top: 40px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-PmoIx .framer-11mn4ps { bottom: unset; top: 1084px; width: 100%; } .framer-PmoIx .framer-1i6urjr { flex-direction: column; gap: 0px; top: 99px; width: 100%; } .framer-PmoIx .framer-xk0ohv { left: 50%; padding: 10px 20px 10px 20px; top: 996px; } .framer-PmoIx .framer-1sw1soa { left: 50%; padding: 10px 20px 10px 20px; top: 684px; } .framer-PmoIx .framer-1o5fzz6 { left: 50%; padding: 10px 20px 10px 20px; top: 762px; } .framer-PmoIx .framer-1cewjx4 { left: 50%; padding: 10px 20px 10px 20px; top: 918px; } .framer-PmoIx .framer-18wgnzl { left: 50%; padding: 10px 20px 10px 20px; top: 840px; } .framer-PmoIx .framer-2l0vrt { left: 50%; padding: 10px 20px 10px 20px; top: 606px; } .framer-PmoIx .framer-1apxpsq { height: 983px; } .framer-PmoIx .framer-ee35la { left: 50%; top: 58px; width: 100%; } .framer-PmoIx .framer-oxvo8f, .framer-PmoIx .framer-yx6g96, .framer-PmoIx .framer-547rul, .framer-PmoIx .framer-j140i9, .framer-PmoIx .framer-bl8juf, .framer-PmoIx .framer-1y58vcp, .framer-PmoIx .framer-s4iklp, .framer-PmoIx .framer-18hylh0, .framer-PmoIx .framer-1ou4n0z, .framer-PmoIx .framer-18e8589, .framer-PmoIx .framer-fc8fzn, .framer-PmoIx .framer-22oiuc, .framer-PmoIx .framer-1lk1qv3, .framer-PmoIx .framer-xmdkgl, .framer-PmoIx .framer-1yklsq4, .framer-PmoIx .framer-1ckx7pj, .framer-PmoIx .framer-wtwn0h, .framer-PmoIx .framer-xy3trr, .framer-PmoIx .framer-13t5b66, .framer-PmoIx .framer-gg6595, .framer-PmoIx .framer-19wggtd { width: 100%; } .framer-PmoIx .framer-gw3pmj, .framer-PmoIx .framer-1692ktc, .framer-PmoIx .framer-tkbzaz, .framer-PmoIx .framer-18gwlrh, .framer-PmoIx .framer-1bev2v0, .framer-PmoIx .framer-plm2bx, .framer-PmoIx .framer-16xknvw, .framer-PmoIx .framer-1h085i0, .framer-PmoIx .framer-1isfxby, .framer-PmoIx .framer-pa0wcg { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-PmoIx .framer-17k71j8 { top: 147px; width: 90%; } .framer-PmoIx .framer-1fnyn3z { height: 360px; left: calc(50.00000000000002% - 100% / 2); top: 241px; width: 100%; } .framer-PmoIx .framer-1vq102f { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 360px); width: 100%; } .framer-PmoIx .framer-11zp4m2 { aspect-ratio: unset; height: 179px; left: calc(50.00000000000002% - 179px / 2); top: calc(50.83333333333335% - 179px / 2); transform: unset; width: 179px; } .framer-PmoIx .framer-je8xcm { bottom: 272px; left: 50%; padding: 15px 20px 15px 20px; top: unset; width: 90%; } .framer-PmoIx .framer-fuf4a4 { bottom: 168px; left: 50%; padding: 15px 20px 15px 20px; top: unset; width: 90%; } .framer-PmoIx .framer-jm5a72 { bottom: 68px; left: 50%; padding: 15px 20px 15px 20px; top: unset; width: 90%; } .framer-PmoIx .framer-14r5nw4 { flex-direction: column; padding: 0px; } .framer-PmoIx .framer-67vdpo { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: 1512px; } .framer-PmoIx .framer-bdhq95 { flex-direction: column; gap: 10px; justify-content: center; top: 67px; width: 100%; } .framer-PmoIx .framer-ozk4zi { gap: 50px; left: 50%; top: 219px; width: 100%; } .framer-PmoIx .framer-1x3e9a2 { align-content: center; align-items: center; flex: none; justify-content: center; width: 100%; } .framer-PmoIx .framer-y3zlfk, .framer-PmoIx .framer-1btxcu4, .framer-PmoIx .framer-42yq8x, .framer-PmoIx .framer-dedbqb, .framer-PmoIx .framer-1k7i0yy, .framer-PmoIx .framer-lu8ru5, .framer-PmoIx .framer-2v1m3a, .framer-PmoIx .framer-14ipvrg { width: 90%; } .framer-PmoIx .framer-100i3mo { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 202px); } .framer-PmoIx .framer-gr3mfj, .framer-PmoIx .framer-b5f561 { align-content: center; align-items: center; } .framer-PmoIx .framer-1rwpykc { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; } .framer-PmoIx .framer-1yh4x42 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 203px); left: unset; position: relative; top: unset; width: 100%; } .framer-PmoIx .framer-ddrc6u { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: var(--framer-aspect-ratio-supported, 203px); } .framer-PmoIx .framer-wthcgz { height: 1175px; } .framer-PmoIx .framer-1m8n47q { left: 50%; top: 74px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-PmoIx .framer-uho5er { align-content: center; align-items: center; left: 50%; top: 526px; width: 100%; } .framer-PmoIx .framer-1n2p2ke { align-content: center; align-items: center; left: 50%; top: 726px; width: 100%; } .framer-PmoIx .framer-1ky7vui { align-content: center; align-items: center; left: 50%; top: 926px; width: 100%; } .framer-PmoIx .framer-w15q24 { align-content: center; align-items: center; left: 50%; top: 626px; width: 100%; } .framer-PmoIx .framer-12s9y3r { align-content: center; align-items: center; left: 50%; top: 826px; width: 100%; } .framer-PmoIx .framer-a3jzr { align-content: center; align-items: center; left: 50%; top: 1026px; width: 100%; } .framer-PmoIx .framer-1w84i2y { height: var(--framer-aspect-ratio-supported, 355px); left: 50%; top: 142px; width: 118px; } .framer-PmoIx .framer-173jo37, .framer-PmoIx .framer-x34ham { padding: 0px; } .framer-PmoIx .framer-1xwv8e0 { padding: 40px 0px 40px 0px; } .framer-PmoIx .framer-5j4wwr { gap: 40px; width: 100%; } .framer-PmoIx .framer-10i3drt { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: 205px; width: 100%; } .framer-PmoIx .framer-n2nczs { align-content: center; align-items: center; flex-direction: column; gap: 30px; } .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-pwvnuf { gap: 10px; } .framer-PmoIx .framer-1149868 { height: var(--framer-aspect-ratio-supported, 30px); width: 30px; } .framer-PmoIx .framer-1popjn6 { gap: 10px; width: 100%; } .framer-PmoIx .framer-18ct404 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; padding: 60px 0px 60px 0px; } .framer-PmoIx .framer-ligwht { left: unset; order: 0; position: relative; top: unset; transform: unset; } .framer-PmoIx .framer-1906rhs { left: unset; order: 1; position: relative; top: unset; transform: unset; width: 100%; } .framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-14mef7z { flex-direction: column; padding: 20px; } .framer-PmoIx .framer-p118lw, .framer-PmoIx .framer-s11ptt { order: 1; padding: 20px; width: 100%; } .framer-PmoIx .framer-fpm20v, .framer-PmoIx .framer-ea2g20 { height: var(--framer-aspect-ratio-supported, 320px); order: 0; width: 100%; } .framer-PmoIx .framer-g2j26u { height: var(--framer-aspect-ratio-supported, 320px); width: 100%; } .framer-PmoIx .framer-17smthl { padding: 20px; width: 100%; } .framer-PmoIx .framer-cj6qj9 { height: 388px; } .framer-PmoIx .framer-wl89kx { gap: 40px; } .framer-PmoIx .framer-3ozcmb { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); width: 40px; } .framer-PmoIx .framer-uxqoog { height: 39px; width: 40px; } .framer-PmoIx .framer-p96is2 { gap: 40px; height: 553px; } .framer-PmoIx .framer-1e0x1vs { height: var(--framer-aspect-ratio-supported, 250px); width: 250px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-PmoIx .framer-1i6urjr, .framer-PmoIx .framer-14r5nw4, .framer-PmoIx .framer-bdhq95, .framer-PmoIx .framer-ozk4zi, .framer-PmoIx .framer-1rwpykc, .framer-PmoIx .framer-5j4wwr, .framer-PmoIx .framer-n2nczs, .framer-PmoIx .framer-1nstxph, .framer-PmoIx .framer-1popjn6, .framer-PmoIx .framer-pwvnuf, .framer-PmoIx .framer-18ct404, .framer-PmoIx .framer-3b2fja, .framer-PmoIx .framer-17xn4pk, .framer-PmoIx .framer-14mef7z, .framer-PmoIx .framer-wl89kx, .framer-PmoIx .framer-p96is2 { gap: 0px; } .framer-PmoIx .framer-1i6urjr > *, .framer-PmoIx .framer-1rwpykc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PmoIx .framer-1i6urjr > :first-child, .framer-PmoIx .framer-14r5nw4 > :first-child, .framer-PmoIx .framer-bdhq95 > :first-child, .framer-PmoIx .framer-ozk4zi > :first-child, .framer-PmoIx .framer-1rwpykc > :first-child, .framer-PmoIx .framer-5j4wwr > :first-child, .framer-PmoIx .framer-n2nczs > :first-child, .framer-PmoIx .framer-1nstxph > :first-child, .framer-PmoIx .framer-1popjn6 > :first-child, .framer-PmoIx .framer-pwvnuf > :first-child, .framer-PmoIx .framer-18ct404 > :first-child, .framer-PmoIx .framer-3b2fja > :first-child, .framer-PmoIx .framer-17xn4pk > :first-child, .framer-PmoIx .framer-14mef7z > :first-child, .framer-PmoIx .framer-p96is2 > :first-child { margin-top: 0px; } .framer-PmoIx .framer-1i6urjr > :last-child, .framer-PmoIx .framer-14r5nw4 > :last-child, .framer-PmoIx .framer-bdhq95 > :last-child, .framer-PmoIx .framer-ozk4zi > :last-child, .framer-PmoIx .framer-1rwpykc > :last-child, .framer-PmoIx .framer-5j4wwr > :last-child, .framer-PmoIx .framer-n2nczs > :last-child, .framer-PmoIx .framer-1nstxph > :last-child, .framer-PmoIx .framer-1popjn6 > :last-child, .framer-PmoIx .framer-pwvnuf > :last-child, .framer-PmoIx .framer-18ct404 > :last-child, .framer-PmoIx .framer-3b2fja > :last-child, .framer-PmoIx .framer-17xn4pk > :last-child, .framer-PmoIx .framer-14mef7z > :last-child, .framer-PmoIx .framer-p96is2 > :last-child { margin-bottom: 0px; } .framer-PmoIx .framer-14r5nw4 > *, .framer-PmoIx .framer-bdhq95 > *, .framer-PmoIx .framer-1nstxph > *, .framer-PmoIx .framer-1popjn6 > *, .framer-PmoIx .framer-pwvnuf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-PmoIx .framer-ozk4zi > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-PmoIx .framer-5j4wwr > *, .framer-PmoIx .framer-18ct404 > *, .framer-PmoIx .framer-p96is2 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-PmoIx .framer-n2nczs > *, .framer-PmoIx .framer-3b2fja > *, .framer-PmoIx .framer-17xn4pk > *, .framer-PmoIx .framer-14mef7z > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-PmoIx .framer-wl89kx > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-PmoIx .framer-wl89kx > :first-child { margin-left: 0px; } .framer-PmoIx .framer-wl89kx > :last-child { margin-right: 0px; } }}`,
		...De,
		'.framer-PmoIx[data-border="true"]::after, .framer-PmoIx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
	],
	$ = D(Wr, Xr, 'framer-PmoIx'),
	tn = $
$.displayName = 'Home'
$.defaultProps = { height: 14682, width: 1920 }
_(
	$,
	[
		{
			explicitInter: !0,
			fonts: [
				{
					family: 'Lilita One',
					source: 'google',
					style: 'normal',
					url: 'https://fonts.gstatic.com/s/lilitaone/v15/i7dPIFZ9Zz-WBtRtedDbUEN2RFq7AwU.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
					url: 'https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
					url: 'https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+1F00-1FFF',
					url: 'https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0370-03FF',
					url: 'https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
					url: 'https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
					url: 'https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
					url: 'https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2',
					weight: '600',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
					url: 'https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
					url: 'https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+1F00-1FFF',
					url: 'https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0370-03FF',
					url: 'https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
					url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
					url: 'https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
					url: 'https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2',
					weight: '700',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
					url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
					url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+1F00-1FFF',
					url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0370-03FF',
					url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
					url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
					url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
					url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
					weight: '400',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
					url: 'https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
					url: 'https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+1F00-1FFF',
					url: 'https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange: 'U+0370-03FF',
					url: 'https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
					url: 'https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
					url: 'https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2',
					weight: '500',
				},
				{
					family: 'Inter',
					source: 'framer',
					style: 'normal',
					unicodeRange:
						'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
					url: 'https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2',
					weight: '500',
				},
			],
		},
		...cr,
		...B(Ve),
	],
	{ supportsExplicitInterCodegen: !0 }
)
var an = {
	exports: {
		Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
		default: {
			type: 'reactComponent',
			name: 'FrameraugiA20Il',
			slots: [],
			annotations: {
				framerComponentViewportWidth: 'true',
				framerIntrinsicHeight: '14682',
				framerContractVersion: '1',
				framerDisplayContentsDiv: 'false',
				framerIntrinsicWidth: '1920',
				framerImmutableVariables: 'true',
				framerResponsiveScreen: '',
				framerCanvasComponentVariantDetails:
					'{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"hwto4p5xW":{"layout":["fixed","auto"]},"NRXlhggHx":{"layout":["fixed","auto"]},"WoMHsoWdr":{"layout":["fixed","auto"]}}}',
			},
		},
		__FramerMetadata__: { type: 'variable' },
	},
}
export { an as __FramerMetadata__, tn as default }
//# sourceMappingURL=37nt77BkRzZVPd7of66GdwrC_wsLcvjPbam-XXG4EUQ.RQQBHCF6.mjs.map
