/* Fernflow 0.2.0 - MIT builder.io */
((e) => {
  const t = () => {},
    r = (e) => e.length,
    n = (e) => {
      try {
        return e.constructor.name;
      } catch (e) {}
      return '';
    },
    s = (e, t) => e.startsWith(t),
    o = (e) =>
      !(
        s(e, 'webkit') ||
        s(e, 'toJSON') ||
        s(e, 'constructor') ||
        s(e, 'toString') ||
        s(e, '_')
      ),
    i = () => Math.round(999999999 * Math.random() + 4),
    a = Symbol(),
    l = Symbol(),
    c = new Map(),
    u = new Map(),
    h = {},
    d = new WeakMap(),
    p = (e, t, r) =>
      e
        ? e === e.window
          ? 0
          : '#document' === (r = e.nodeName)
          ? 1
          : 'HTML' === r
          ? 2
          : 'HEAD' === r
          ? 3
          : 'BODY' === r
          ? 4
          : ('number' != typeof (t = e[a]) && f(e, (t = i())), t)
        : -1,
    g = (e, t, r, n, s) => {
      if ((r = h[e]) && (n = r.L))
        return (
          (s = n.document),
          0 === t
            ? n
            : 1 === t
            ? s
            : 2 === t
            ? s.documentElement
            : 3 === t
            ? s.head
            : 4 === t
            ? s.body
            : c.get(t)
        );
    },
    f = (e, t, r) => {
      e &&
        (c.set(t, e),
        (e[a] = t),
        (e[l] = r = Date.now()),
        r > m + 5e3 &&
          (c.forEach((e, t) => {
            e[l] < m && e.nodeType && !e.isConnected && c.delete(t);
          }),
          (m = r)));
    };
  let m = 0;
  const w = e.parent,
    y = document,
    $ = w.fernflow || {},
    v = ($.lib || '/~fernflow/') + '',
    T = (e, t, r, o, i) =>
      void 0 !== t && (o = typeof t)
        ? 'string' === o || 'number' === o || 'boolean' === o || null == t
          ? [0, t]
          : 'function' === o
          ? [6]
          : (r = r || new Set()) && Array.isArray(t)
          ? r.has(t)
            ? [1, []]
            : r.add(t) && [1, t.map((t) => T(e, t, r))]
          : 'object' === o
          ? '' === (i = n(t))
            ? [2, {}]
            : 'Window' === i
            ? [3, { M: e, r: 0 }]
            : 'HTMLCollection' === i || 'NodeList' === i
            ? [7, Array.from(t).map((t) => T(e, t, r)[1])]
            : i.endsWith('Event')
            ? [5, b(e, t, r)]
            : 'CSSRuleList' === i
            ? [12, Array.from(t).map(S)]
            : s(i, 'CSS') && i.endsWith('Rule')
            ? [11, S(t)]
            : 'CSSStyleDeclaration' === i
            ? [13, b(e, t, r)]
            : 'Attr' === i
            ? [10, [t.name, t.value]]
            : t.nodeType
            ? [3, { M: e, r: p(t), z: t.nodeName }]
            : [2, b(e, t, r, !0, !0)]
          : void 0
        : t,
    b = (e, t, r, n, s, i, a, l) => {
      if (((i = {}), !r.has(t)))
        for (a in (r.add(t), t))
          o(a) &&
            ((l = t[a]),
            (n || 'function' != typeof l) &&
              (s || '' !== l) &&
              (i[a] = T(e, l, r)));
      return i;
    },
    S = (e) => {
      let t,
        r = {};
      for (t in e) N.includes(t) && (r[t] = e[t]);
      return r;
    },
    M = (t, r, n, s) =>
      r
        ? ((n = r[0]),
          (s = r[1]),
          0 === n
            ? s
            : 4 === n
            ? E(t, s)
            : 1 === n
            ? s.map((e) => M(t, e))
            : 3 === n
            ? g(s.M, s.r)
            : 5 === n
            ? I(L(t, s))
            : 2 === n
            ? L(t, s)
            : 8 === n
            ? s
            : 9 === n
            ? new e[r[2]](s)
            : void 0)
        : void 0,
    E = (e, { M: t, r: r, E: n }, s) => (
      (s = u.get(n)) ||
        ((s = function (...s) {
          e.postMessage([7, { M: t, r: r, E: n, J: T(t, this), b: T(t, s) }]);
        }),
        u.set(n, s)),
      s
    ),
    I = (e) => new ('detail' in e ? CustomEvent : Event)(e.type, e),
    L = (e, t, r, n) => {
      for (n in ((r = {}), t)) r[n] = M(e, t[n]);
      return r;
    },
    N =
      'cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText'.split(
        ',',
      ),
    x = async (e, t) => {
      let n,
        s,
        o,
        i,
        a,
        l,
        c = { y: t.y },
        u = r(t.I),
        d = 0;
      for (; d < u; d++)
        try {
          (l = d === u - 1),
            (n = t.I[d]),
            (s = n.M),
            (o = n.a),
            h[s] ||
              (await new Promise((e) => {
                let t = 0,
                  r = () => {
                    h[s] || t++ > 999 ? e() : setTimeout(r, 9);
                  };
                r();
              })),
            1 === o[0] && o[1] in h[s].L
              ? f(new h[s].L[o[1]](...M(e, o[2])), n.r)
              : ((i = g(s, n.r)),
                i
                  ? ((a = C(e, i, o, l, n.n)),
                    n.c && f(a, n.c),
                    'object' == typeof (p = a) &&
                      p &&
                      p.then &&
                      ((a = await a), (c.u = !0)),
                    (c.F = T(s, a)))
                  : (c.l = n.r + ' not found'));
        } catch (e) {
          l ? (c.l = String(e.stack || e)) : console.error(e);
        }
      var p;
      return c;
    },
    C = (e, t, n, s, o) => {
      let i,
        a,
        l,
        c,
        u,
        h = 0,
        d = r(n);
      for (; h < d; h++) {
        (a = n[h]), (i = n[h + 1]), (l = n[h - 1]);
        try {
          if (!Array.isArray(i))
            if ('string' == typeof a || 'number' == typeof a) {
              if (h + 1 === d && o)
                return (u = {}), o.map((e) => (u[e] = t[e])), u;
              t = t[a];
            } else {
              if (0 === i) return void (t[l] = M(e, a));
              if (
                'function' == typeof t[l] &&
                ((c = M(e, a)),
                'insertRule' === l &&
                  c[1] > r(t.cssRules) &&
                  (c[1] = r(t.cssRules)),
                (t = t[l].apply(t, c)),
                'play' === l)
              )
                return Promise.resolve();
            }
        } catch (e) {
          if (s) throw e;
          console.debug(e);
        }
      }
      return t;
    },
    O = (e, t, r) => {
      if (!d.has(r)) {
        d.set(r, t);
        const n = r.document,
          s = r.history,
          o = d.get(r.parent),
          i = () => e.postMessage([3, { M: t, C: o, K: n.baseURI }]),
          a = s.pushState.bind(s),
          l = s.replaceState.bind(s),
          c = () => setTimeout(() => e.postMessage([11, t, n.baseURI]));
        (s.pushState = (e, t, r) => {
          a(e, t, r), c();
        }),
          (s.replaceState = (e, t, r) => {
            l(e, t, r), c();
          }),
          r.addEventListener('popstate', c),
          r.addEventListener('hashchange', c),
          (h[t] = { M: t, L: r }),
          'complete' === n.readyState ? i() : r.addEventListener('load', i);
      }
    },
    A = (e, t) => {
      let n,
        s,
        o,
        i = t.M,
        a = t.L,
        l = a.document;
      l && l.body
        ? ((n = l.querySelector(
            'script[type="text/fernflow"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])',
          )),
          n ||
            (n = l.querySelector(
              'script[type="text/fernflow"]:not([data-ptid]):not([data-pterror])',
            )),
          n
            ? ((n.dataset.ptid = s = p(n, i)),
              (o = { M: i, r: s }),
              n.src
                ? ((o.K = n.src), (o.A = n.dataset.ptsrc || n.src))
                : (o.g = n.innerHTML),
              e.postMessage([5, o]))
            : (t.s ||
                ((t.s = 1),
                ((e, t, n) => {
                  let s,
                    o,
                    i = n._fernf,
                    a = (n.fernflow || {}).forward || [],
                    l = (r, n) =>
                      e.postMessage([
                        8,
                        { M: t, m: r, b: T(t, Array.from(n)) },
                      ]);
                  if (
                    ((n._fernf = void 0),
                    a.map((e) => {
                      (o = n),
                        e.split('.').map((e, t, n) => {
                          o = o[n[t]] =
                            t + 1 < r(n)
                              ? o[n[t]] || ('push' === n[t + 1] ? [] : {})
                              : (...e) => l(n, e);
                        });
                    }),
                    i)
                  )
                    for (s = 0; s < r(i); s += 2) l(i[s], i[s + 1]);
                })(e, i, a),
                l.dispatchEvent(new CustomEvent('pt0'))),
              e.postMessage([6, i])))
        : requestAnimationFrame(() => A(e, t));
    },
    R = (e, t, r) => {
      let n = [],
        s = [e, 'Object', n];
      for (r in t) H(n, t, r);
      return s;
    },
    D = (e, t, r, s, o) => {
      if ('Object' !== t && !e.some((e) => e[0] === t)) {
        const i = Object.getPrototypeOf(r),
          a = n(i),
          l = [];
        D(e, a, i, s, o),
          Object.keys(Object.getOwnPropertyDescriptors(r)).map((e) =>
            H(l, s, e),
          ),
          e.push([t, a, l, o, s.nodeName]);
      }
    },
    H = (e, t, r, s, i, a) => {
      try {
        o(r) &&
          isNaN(r[0]) &&
          'all' !== r &&
          ('function' == (i = typeof (s = t[r]))
            ? (String(s).includes('[native') || Object.getPrototypeOf(t)[r]) &&
              e.push([r, 5])
            : 'object' === i && null != s
            ? 'Object' !== (a = n(s)) && self[a] && e.push([r, s.nodeType || a])
            : 'symbol' !== i &&
              (r.toUpperCase() === r ? e.push([r, 6, s]) : e.push([r, 6])));
      } catch (e) {
        console.warn(e);
      }
    },
    P = {
      Anchor: 'A',
      DList: 'DL',
      Image: 'IMG',
      OList: 'OL',
      Paragraph: 'P',
      TableCaption: 'CAPTION',
      TableCell: 'TD',
      TableCol: 'COLGROUP',
      TableRow: 'TR',
      TableSection: 'TBODY',
      UList: 'UL',
    },
    j = (e) => {
      let t,
        n = [],
        s = 0,
        o = r(w[e]);
      for (; s < o; s++) (t = w[e].key(s)), n.push([t, w[e].getItem(t)]);
      return n;
    },
    k = (e, r) => (void 0 !== e[r] ? new e[r](t) : 0);
  let U;
  (async (e) => {
    const t = new SharedArrayBuffer(1073741824),
      r = new Int32Array(t);
    return (s, o) => {
      const a = o[0],
        l = o[1];
      if (0 === a) {
        const e = (() => {
          const e = y.implementation.createHTMLDocument(),
            t = e.createTextNode(''),
            r = e.createComment(''),
            s = e.createDocumentFragment(),
            o = e.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            i = k(w, 'IntersectionObserver'),
            a = k(w, 'MutationObserver'),
            l = k(w, 'ResizeObserver'),
            c = w.performance,
            u = w.screen,
            h = Object.getOwnPropertyNames(w)
              .filter((e) => /^HTML.+Element$/.test(e))
              .map((t) => {
                return [
                  e.createElement(
                    ((r = t),
                    (r = r.slice(4).replace('Element', '')),
                    P[r] || r),
                  ),
                ];
                var r;
              }),
            d = h[0][0],
            p = [
              [w.history],
              [c],
              [c.navigation],
              [c.timing],
              [u],
              [u.orientation],
              [i, 12],
              [a, 12],
              [l, 12],
              [t],
              [r],
              [s],
              [d],
              [d.attributes],
              [d.classList],
              [d.dataset],
              [d.style],
              [o],
              [e],
              [e.doctype],
              ...h,
            ]
              .filter((e) => e[0])
              .map((e) => {
                const t = e[0],
                  r = e[1],
                  s = n(t);
                return [s, w[s].prototype, t, r];
              }),
            g = [R('Window', w), R('Node', t)],
            f = {
              f: JSON.stringify(
                $,
                (e, t) => (
                  'function' == typeof t &&
                    (t = String(t)).startsWith(e + '(') &&
                    (t = 'function ' + t),
                  t
                ),
              ),
              v: new URL(v, w.location) + '',
              q: g,
              w: j('localStorage'),
              G: j('sessionStorage'),
            };
          return p.map(([e, t, r, n]) => D(g, e, t, r, n)), f;
        })();
        (e.H = t), s.postMessage([1, e]);
      } else
        9 === a
          ? e(l, (e) => {
              const t = JSON.stringify(e),
                n = t.length;
              for (let e = 0; e < n; e++) r[e + 1] = t.charCodeAt(e);
              (r[0] = n), Atomics.notify(r, 0);
            })
          : ((e, t, r) => {
              2 === t[0]
                ? O(e, i(), w)
                : (r = h[t[1]]) &&
                  (5 === t[0]
                    ? requestAnimationFrame(() => A(e, r))
                    : 4 === t[0] &&
                      ((e, t, r, n, s) => {
                        (s = t.L.document.querySelector(
                          `[data-ptid="${r}"]`,
                        )) && (n ? (s.dataset.pterror = n) : (s.type += '-x')),
                          A(e, t);
                      })(e, r, t[2], t[3]));
            })(s, o);
    };
  })((e, t) => x(U, e).then(t)).then((e) => {
    e &&
      ((U = new Worker(
        URL.createObjectURL(
          new Blob(
            [
              '/* Fernflow 0.2.0 - MIT builder.io */\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),s=Symbol(),i=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=new Map,$={},h=new WeakMap,u=new Map,d={},p=[],g={},m=new Map,f=new Map,w={},y=new Map,I=new Map,v=e=>e.split(","),b=e=>{if(e=g.v+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},S=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),T=v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling"),E=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=v("insertBefore,remove,removeChild,replaceChild"),N=v("className,width,height,hidden,innerHTML,innerText,textContent"),x=v("setAttribute,setProperty"),L=v("getClientRects,getBoundingClientRect"),A=["getComputedStyle"],C=v("addEventListener,dispatchEvent,removeEventListener"),R=C.concat(x,v("add,observe,remove,unobserve")),W=/^[A-Z]([A-Z0-9-]*[A-Z0-9])?$/,P=()=>{},H=e=>e.length,O=e=>{try{return e.constructor.name}catch(e){}return""},k=[],D=()=>Math.round(999999999*Math.random()+4),B="text/fernflow",j=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),U=(e,t)=>j(e,"name",{value:t}),F=(e,t,r)=>j(e.prototype,t,r),_=(e,t)=>Object.defineProperties(e.prototype,t),z=(e,t,r)=>F(e,t,{value:r,writable:!0}),V=(e,t)=>t in e[o],q=(e,t)=>e[o][t],X=(e,t,r)=>e[o][t]=r,Z=[];let J=0;const Y=(e,n,s,o,a,l)=>{if(Z.push({M:e[t],r:e[r],a:[...e[i],...n],c:o,n:a}),3===s)g.D([10,{y:D(),I:[...Z]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),Z.length=0;else if(1===s)return G(!0);J=setTimeout(G,20)},G=e=>{if(clearTimeout(J),H(Z)){const t=Z[H(Z)-1],r={y:D(),I:[...Z]};if(Z.length=0,e){const e=((e,t)=>{const r=e.H,n=new Int32Array(r);Atomics.store(n,0,0),e.D([9,t]),Atomics.wait(n,0,0);let s=Atomics.load(n,0),i="",o=0;for(;o<s;o++)i+=String.fromCharCode(n[o+1]);return JSON.parse(i)})(g,r),n=e.u,s=Oe(t.M,t.r,t.a,e.F);if(e.l){if(n)return Promise.reject(e.l);throw new Error(e.l)}return n?Promise.resolve(s):s}g.D([10,r])}},K=(e,t,r,n)=>g.f.get&&(n=g.f.get(re(e,t)))!==a?n:n=Y(e,t,1,void 0,r),Q=(e,t,r,n)=>{if(g.f.set){if((n=g.f.set({value:r,prevent:l,...re(e,t)}))===l)return;n!==a&&(r=n)}N.some((e=>t.includes(e)))&&(y.clear(),t[t.length-1]),t=[...t,He(e,r),0],Y(e,t,2)},ee=(e,t,r,n,s,i,o,l)=>g.f.apply&&(o=g.f.apply({args:r,...re(e,t)}))!==a?o:(l=t[H(t)-1],t=[...t,He(e,r)],n=n||(R.includes(l)?2:1),"setAttribute"===l&&V(e,r[0])?X(e,r[0],r[1]):M.includes(l)?(y.clear(),I.clear()):x.includes(l)&&(n=2,y.clear()),o=Y(e,t,n,s,void 0,i)),te=(e,t,r)=>{Y(e,[1,t,He(e,r)],1)},re=(e,t)=>({name:t.join("."),continue:a,nodeName:e[n],constructor:O(e)}),ne=(t,r,n)=>{let s,i,o=()=>e.origin===t.origin,a=e=>((e=n.get(t.origin))||n.set(t.origin,e=[]),e),l=e=>a().findIndex((t=>t[se]===e)),c={getItem:e=>(s=l(e),s>-1?a()[s][ie]:null),setItem(e,n){s=l(e),s>-1?a()[s][ie]=n:a().push([e,n]),o()&&ee(t,[r,"setItem"],[e,n],2)},removeItem(e){s=l(e),s>-1&&a().splice(s,1),o()&&ee(t,[r,"removeItem"],[e],2)},key:e=>(i=a()[e],i?i[se]:null),clear(){a().length=0,o()&&ee(t,[r,"clear"],k,2)},get length(){return a().length}};t[r]=c},se=0,ie=1;class oe{constructor(e,a,l,c,$){this[t]=e,this[r]=a,this[i]=l||[],this[n]=c,this[o]={},$&&(this[s]=$)}}class ae extends oe{}C.map((e=>ae.prototype[e]=function(...t){return ee(this,[e],t,2)}));class le extends oe{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>K(e,[t]),set:(e,t,r)=>(Q(e,[t],r),!0)})}}const ce=()=>(e.ptm||(e.ptm=[K,Q,ee,te,_,D,oe,ae,t,r,i],g.p(b("fernflow-media.js"))),e.ptm),$e=v("AUDIO,CANVAS,VIDEO"),he=v("Audio,MediaSource"),ue=(e,t,r,n,s)=>((s=c.get(t))||(s=de(e,t,r,n),c.set(t,s)),s),de=(t,r,n,s)=>($e.includes(n)&&ce(),new(d[n]?d[n]:n.includes("-")?d.UNKNOWN:e.HTMLElement)(t,r,[],n,s)),pe=(e,t,r,n,s)=>{try{e.h=t,ge(e,r)}catch(e){console.error(r,e),s=String(e.stack||e)}return e.h=-1,s},ge=(e,t,r)=>new Function(`with(this){${t.replace(/\\bthis\\b/g,"(thi$(this)?window:this)").replace(/\\/\\/# so/g,"//Xso")};function thi$(t){return t===this}${(g.f.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\'function\'&&(window.${e}=${e}))`)).join(";")}}`+(r?"\\n//# sourceURL="+r:"")).call(e.L),me=(e,t,r)=>{(r=q(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},fe=(e,t,r,n,s,i)=>{for(n=e.x;!n.host&&(n=(e=w[e.C]).x,e.M!==e.C););return s=new URL(t||"",n),!r&&g.f.resolveUrl&&(i=g.f.resolveUrl(s,n))?i:s},we=(e,t,r)=>fe(e,t,r)+"",ye=()=>`<script src="${b("tool-web-worker.js")}"><\\/script>`,Ie=e=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(t){fetch(we(e,t,!0),{mode:"no-cors",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}};class ve extends URL{assign(){}reload(){}replace(){}}class Window extends oe{constructor(t,r,n,s){super(t,0);let i,o,a,l=this;for(i in e)if(!(i in l)&&"onmessage"!==i&&(o=e[i],null!=o)){const t="function"==typeof o&&!o.toString().startsWith("class");l[i]=t?o.bind(e):o}Object.getOwnPropertyNames(e).map((t=>{t in l||(l[t]=e[t])})),u.forEach(((e,r)=>{l[r]=U(class{constructor(...n){const s=new e(t,D());return te(s,r,n),s}},r)})),he.map((e=>j(l,e,{get(){delete l[e];const t=ce()[e];return l[e]=t(Te(l),l,e)}}))),"trustedTypes"in e&&(l.trustedTypes=e.trustedTypes),w[t]={M:t,C:r,L:new Proxy(l,{has:()=>!0}),j:de(t,1,"#document"),k:de(t,2,"HTML"),o:de(t,3,"HEAD"),d:de(t,4,"BODY"),x:new ve(n)},l.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),l.cancelAnimationFrame=e=>clearTimeout(e),l.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),l.cancelIdleCallback=e=>clearTimeout(e),ne(l,"localStorage",m),ne(l,"sessionStorage",f),s&&(a={},l.history={pushState(e){a=e},replaceState(e){a=e},get state(){return a},length:0}),l.Worker=void 0}get body(){return Te(this).d}get document(){return Te(this).j}get documentElement(){return Te(this).k}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(we(Te(this),e),t)}get frameElement(){const e=Te(this),t=e.C,r=e.M;return r===t?null:ue(t,r,"IFRAME")}get globalThis(){return this}get head(){return Te(this).o}get location(){return Te(this).x}set location(e){Te(this).x.href=e+""}get Image(){return Ie(Te(this))}get name(){return name+this[t]}get navigator(){return(t=>{const r=e.navigator;return r.sendBeacon=(e,r)=>{try{return fetch(we(t,e,!0),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}},r})(Te(this))}get origin(){return Te(this).x.origin}get parent(){return be(w[Te(this).C].L,this[t])}postMessage(...e){ee(this,["postMessage"],e,3)}get self(){return this}get top(){for(let e in w)if(w[e].M===w[e].C)return be(w[e].L,this[t])}get window(){return this}get XMLHttpRequest(){const t=Te(this);return class extends e.XMLHttpRequest{open(...e){e[1]=we(t,e[1]),super.open(...e)}set withCredentials(e){}}}}const be=(e,t)=>new Proxy(e,{get:(e,r)=>"postMessage"===r?(...r)=>{H(p)>20&&p.splice(0,5),p.push({i:JSON.stringify(r[0]),M:t}),e.postMessage(...r)}:e[r]}),Se=({M:e,C:t,K:r},n)=>(w[e]||new Window(e,t,r,n),g.D([5,e]),w[e]),Te=e=>w[e[t]],Ee={addEventListener:{value(...e){const t=e[0],r=q(this,t)||[];r.push(e[1]),X(this,t,r)}},async:{get:P,set:P},defer:{get:P,set:P},onload:{get(){let e=q(this,"load");return e&&e[0]||null},set(e){X(this,"load",e?[e]:null)}},onerror:{get(){let e=q(this,"error");return e&&e[0]||null},set(e){X(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:ee(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Me.includes(e)?this[e]=t:ee(this,["setAttribute"],[e,t])}}},Me=v("src,type"),Ne={get(){return q(this,3)||""},set(e){X(this,3,e)}},xe={innerHTML:Ne,innerText:Ne,src:{get(){return q(this,4)||""},set(e){const t=Te(this),r=we(t,e,!0);e=we(t,e),X(this,4,e),Q(this,["src"],e),r!==e&&Q(this,["dataset","ptsrc"],r)}},textContent:Ne,type:{get(){return K(this,["type"])},set(e){Le(e)||(X(this,5,e),Q(this,["type"],e))}},...Ee},Le=e=>!e||"text/javascript"===e;class Node extends oe{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const i=e[t]=this[t],o=e[r],a=e[n],l="SCRIPT"===a,c="IFRAME"===a;if(l){const t=q(e,3),r=q(e,5);if(t){if(Le(r)){const r=pe(Te(e),o,t,0,""),n=r?"pterror":"ptid",s=r||o;Q(e,["type"],B+"-x"),Q(e,["dataset",n],s)}Q(e,["innerHTML"],t)}}return ee(this,["insertBefore"],[e,s],2),c&&((e,t)=>{let r,n,s=0,i=()=>{w[e]&&w[e].s&&!w[e].t?(r=q(t,1)?"error":"load",n=q(t,r),n&&n.map((e=>e({type:r})))):s++>2e3?(n=q(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(i,9)};i()})(o,e),l&&(G(!0),g.D([5,i])),e}get nodeName(){return this[n]}get nodeType(){return 3}get ownerDocument(){return Te(this).j}}class Ae{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}}class Ce extends oe{constructor(e,t,r,n){return super(e,t,r),Object.assign(this,n),new Proxy(this,{get:(e,t)=>e[t],set:(e,t,r)=>(Q(e,[t],r),y.clear(),!0)})}getPropertyValue(e){return this[e]}setProperty(e,t){this[e]=t}}class NodeList{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return H(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const Re=(e,n,s,i,o)=>{return void 0!==s&&(o=typeof s)?"string"===o||"boolean"===o||"number"===o||null==s?[0,s]:"function"===o?[4,{M:e,r:n,E:(a=s,(l=h.get(a))||(h.set(a,l=D()),$[l]=a),l)}]:(i=i||new Set)&&Array.isArray(s)?i.has(s)?[1,[]]:i.add(s)&&[1,s.map((t=>Re(e,n,t,i)))]:"object"===o?"number"==typeof s[r]?[3,{M:s[t],r:s[r]}]:s instanceof Event?[5,Pe(e,n,s,!1,i)]:We&&s instanceof TrustedHTML?[0,s.toString()]:s instanceof ArrayBuffer?[8,s]:ArrayBuffer.isView(s)?[9,s.buffer,O(s)]:[2,Pe(e,n,s,!0,i)]:void 0:s;var a,l},We="undefined"!=typeof TrustedHTML,Pe=(e,t,r,n,s,i,o,a)=>{if(i={},!s.has(r))for(o in s.add(r),r)a=r[o],(n||"function"!=typeof a)&&(i[o]=Re(e,t,a,s));return i},He=(e,n)=>e?Re(e[t],e[r],n):[0,n],Oe=(e,t,r,n,s,i,o,a)=>{if(n){if(s=n[0],i=n[1],0===s||11===s||12===s)return i;if(4===s)return Be(r,i);if(6===s)return P;if(3===s)return ke(i);if(7===s)return new NodeList(i.map(ke));if(10===s)return new Ae(i);if(1===s)return i.map((n=>Oe(e,t,r,n)));for(a in o={},i)o[a]=Oe(e,t,[...r,a],i[a]);if(13===s)return new Ce(e,t,r,o);if(5===s){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=p.find((e=>e.i===t));r&&(e=w[r.M],e&&(o.source=e.L,o.origin=e.x.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?P:e[String(t)]})}if(2===s)return o}},ke=({M:e,r:t,z:r})=>De(e,t)||ue(e,t,r),De=(e,t,r)=>(r=w[e])&&0===t?r.L:1===t?r.j:2===t?r.k:3===t?r.o:4===t?r.d:void 0,Be=(e,{M:t,r:r,z:n,E:s})=>($[s]||h.set($[s]=function(...s){const i=ue(t,r,n);return ee(i,e,s)},s),$[s]),je={sheet:{get(){return new Ue(this)}}};class Ue{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>_e(e,t):"length"===n?Fe(e).length:isNaN(n)?t[r]:_e(e,n)}})}insertRule(e,t){const r=Fe(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(ee(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,y.clear(),t}deleteRule(e){ee(this.ownerNode,["sheet","deleteRule"],[e],2),Fe(this.ownerNode).splice(e,1),this.ownerNode,y.clear()}}const Fe=(e,t)=>((t=q(e,2))||(t=K(e,["sheet","cssRules"]),X(e,2,t)),t),_e=(e,t,r)=>(0===(r=Fe(e))[t]&&(r[t]=K(e,["sheet","cssRules",parseInt(t,10)])),r[t]),ze={body:{get(){return Te(this).d}},createElement:{value(e){if(e=e.toUpperCase(),!W.test(e))throw e+" not valid";const r=this[t],n=D(),s=ue(r,n,e);if(ee(this,["createElement"],[e],2,n),"IFRAME"===e)Se({M:n,C:r,K:"about:blank"},!0).L.fetch=fetch,Q(s,["srcdoc"],ye());else if("SCRIPT"===e){const e=q(s,5);Le(e)&&Q(s,["type"],B)}return s}},createElementNS:{value(e,r){r=r.toLowerCase();const n=this[t],s=D(),i=ue(n,s,r,e);return ee(this,["createElementNS"],[e,r],2,s),i}},createTextNode:{value(e){const r=this[t],n=D(),s=ue(r,n,"#text");return ee(this,["createTextNode"],[e],2,n),s}},createEvent:{value:e=>new Event(e)},currentScript:{get(){const e=this[t],r=Te(this).h;return r>0?ue(e,r,"SCRIPT"):null}},defaultView:{get(){return Te(this).L}},documentElement:{get(){return Te(this).k}},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[Te(this).d]:"HEAD"===e?[Te(this).o]:ee(this,["getElementsByTagName"],[e])}},head:{get(){return Te(this).o}},implementation:{value:{hasFeature:()=>!0}},location:{get(){return Te(this).x},set(e){Te(this).x.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"}},Ve={parentElement:{get(){return this.parentNode}},parentNode:{get(){return Te(this).k}}},qe={parentElement:{value:null},parentNode:{get(){return Te(this).j}}},Xe={localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[s]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}},Ze={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{Ze[e]={get(){let t,r=Te(this),n=q(this,4);return"string"!=typeof n&&(t=K(this,["href"]),X(this,4,t),n=new URL(t)[e]),fe(r,n)[e]},set(t){let r=Te(this),n=q(this,4),s=fe(r,n);s[e]=new URL(t+"",s.href),X(this,4,s.href),Q(this,["href"],s.href)}}}));const Je={contentDocument:{get(){return this.contentWindow.document}},contentWindow:{get(){const e=this[r];return w[e]||Se({M:e,C:this[t],K:K(this,["src"])||"about:blank"},!0),w[e].L}},src:{get(){let e=w[this[r]].x.href;return e.startsWith("about")&&(e=""),e},set(e){let t,n=new XMLHttpRequest,s=this[r],i=w[s];i.x.href=e=we(Te(this),e),i.t=1,X(this,1,void 0),n.open("GET",e,!1),n.send(),t=n.status,t>199&&t<300?(Q(this,["srcdoc"],`<base href="${e}">`+n.responseText.replace(/<script>/g,\'<script type="text/fernflow">\').replace(/<script /g,\'<script type="text/fernflow" \').replace(/text\\/javascript/g,B)+ye()),G(!0),g.D([5,s])):(X(this,1,t),i.t=0)}},...Ee},Ye=([s,o,a,l,c])=>{const $=Ge[s]?le:"EventTarget"===o?ae:"Object"===o?oe:e[o],h=e[s]=U(e[s]||class extends ${},s);12===l&&u.set(s,h),c&&(d[c]=h),a.map((([s,o,a])=>{s in h.prototype||s in $.prototype||("string"==typeof o?F(h,s,{get(){if(!V(this,s)){const a=this[t],l=this[r],c=[...this[i],s],$=this[n],h=e[o];X(this,s,new h(a,l,c,$))}return q(this,s)},set(e){X(this,s,e)}}):5===o?z(h,s,(function(...e){return ee(this,[s],e)})):o>0&&(void 0!==a?z(h,s,a):F(h,s,{get(){return K(this,[s])},set(e){return Q(this,[s],e)}})))}))},Ge={CSSStyleDeclaration:1,DOMStringMap:1,NamedNodeMap:1},Ke=(e,t)=>z(e,"nodeType",t),Qe=(e,t)=>t.map((t=>F(e,t,{get(){let e=et(this,t),r=I.get(e);return r||(r=K(this,[t]),I.set(e,r)),r}}))),et=(e,n,s)=>[e[t],e[r],n,...(s||k).map((e=>String(e&&e[t]?e[r]:e)))].join("."),tt=(e,t)=>v(t).map((t=>F(e,t,{get(){return V(this,t)||X(this,t,K(this,[t])),q(this,t)},set(e){q(this,t)!==e&&Q(this,[t],e),X(this,t,e)}}))),rt=e=>S.map((t=>F(e,t,{get(){const e=y.get(et(this,t));if("number"==typeof e)return e;const r=K(this,[t],S);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>y.set(et(this,e),t))),r[t]):r}}))),nt=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=et(this,t,e),n=y.get(r);return n||(n=ee(this,[t],e),y.set(r,n)),n}}));class st extends oe{now(){return performance.now()}}const it=[],ot=t=>{const r=t.data,n=r[0],s=r[1];g.s?5===n?(async t=>{let r,n=t.M,s=t.r,i=ue(n,s,"SCRIPT"),o=t.g,a=t.K,l=t.A,c="",$=w[n];if(a)try{a=fe($,a)+"",X(i,4,a),r=await e.fetch(a),r.ok?(o=await r.text(),$.h=s,ge($,o,l||a),me(i,"load")):(c=r.statusText,me(i,"error"))}catch(e){console.error(e),c=String(e.stack||e),me(i,"error")}else o&&(c=pe($,s,o,0,c));$.h=-1,g.D([4,n,s,c])})(s):7===n?(({M:e,r:t,E:r,J:n,b:s})=>{if($[r])try{$[r].apply(Oe(e,t,[],n),Oe(e,t,[],s))}catch(e){console.error(e)}})(s):8===n?(({M:e,m:t,b:r})=>{try{let n=w[e].L,s=0,i=H(t);for(;s<i;s++)s+1<i?n=n[t[s]]:n[t[s]].apply(n,Oe(null,0,[],r))}catch(e){console.error(e)}})(s):3===n?Se(s):6===n?(w[s].s=1,w[s].t=0):11===n&&(w[r[1]].x.href=r[2]):1===n?((t=>{const r=g.f=JSON.parse(t.f);g.p=importScripts.bind(e),g.v=t.v,g.D=postMessage.bind(e),g.H=t.H,m.set(origin,t.w),f.set(origin,t.G),delete e.postMessage,delete e.importScripts,e.Node=Node,e.Window=Window,e.CSSStyleSheet=Ue,e.Performance=st,t.q.map(Ye),(()=>{const t=e.Document,r=e.DocumentFragment,n=e.Element;var s,i;v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((e=>delete Window.prototype[e])),_(n,Xe),_(t,ze),_(e.HTMLAnchorElement,Ze),_(e.HTMLIFrameElement,Je),_(e.HTMLScriptElement,xe),_(e.HTMLStyleElement,je),_(e.HTMLHeadElement,Ve),_(e.HTMLBodyElement,Ve),_(e.HTMLHtmlElement,qe),s=Ue,i={type:"text/css"},Object.keys(i).map((e=>z(s,e,i[e]))),Ke(e.Comment,8),Ke(e.DocumentType,10),Ke(r,11),Qe(Node,T),Qe(n,E),Qe(r,E),rt(n),nt(n,L),rt(Window),nt(Window,A),tt(Window,"devicePixelRatio"),tt(t,"compatMode,referrer"),tt(n,"id")})(),["resolveUrl","get","set","apply"].map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())})),g.s=1})(r[1]),g.D([2]),[...it].map(ot),it.length=0):it.push(t)};e.onmessage=ot,postMessage([0])})(self);\n',
            ],
            { type: 'text/javascript' },
          ),
        ),
        { name: 'Tool-web-worker' },
      )),
      (U.onmessage = (t) => {
        const r = t.data;
        10 === r[0] ? x(U, r[1]) : e(U, r);
      }),
      w.addEventListener('pt1', (e) =>
        O(U, p(e.detail.frameElement), e.detail),
      ));
  });
})(window);
