/* Fernflow 0.2.0 - MIT builder.io */
!(function (e, t, n, i, r, o, a, s, d, l, c, f) {
  function p() {
    f ||
      ((f = 1),
      '/' == (a = (o.lib || '/~fernflow/') + (o.debug ? 'debug/' : ''))[0] &&
        ((d = t.querySelectorAll('script[type="text/fernflow"]')),
        i != e
          ? i.dispatchEvent(new CustomEvent('pt1', { detail: e }))
          : d.length &&
            ((s = setTimeout(h, 1e4)),
            t.addEventListener('pt0', w),
            r
              ? u(1)
              : n.serviceWorker
              ? n.serviceWorker
                  .register(a + 'tool-web-worker-sw.js', { scope: a })
                  .then(function (e) {
                    e.active
                      ? u()
                      : e.installing &&
                        e.installing.addEventListener(
                          'statechange',
                          function (e) {
                            'activated' == e.target.state && u();
                          },
                        );
                  }, console.error)
              : h())));
  }
  function u(e) {
    (l = t.createElement(e ? 'script' : 'iframe')),
      e ||
        (l.setAttribute(
          'style',
          'display:block;width:0;height:0;border:0;visibility:hidden',
        ),
        l.setAttribute('aria-hidden', !0)),
      (l.src =
        a +
        'tool-web-worker-' +
        (e ? 'atomics.js' : 'sandbox-sw.html?' + Date.now())),
      t.body.appendChild(l);
  }
  function h(e, n) {
    for (w(), e = 0; e < d.length; e++)
      ((n = t.createElement('script')).innerHTML = d[e].innerHTML),
        t.head.appendChild(n);
  }
  function w() {
    clearTimeout(s);
  }
  (o = e.fernflow || {}),
    i == e &&
      (o.forward || []).map(function (t) {
        (c = e),
          t.split('.').map(function (t, n, i) {
            c = c[i[n]] =
              n + 1 < i.length
                ? 'push' == i[n + 1]
                  ? []
                  : c[i[n]] || {}
                : function () {
                    (e._fernf = e._fernf || []).push(i, arguments);
                  };
          });
      }),
    'complete' == t.readyState
      ? p()
      : (e.addEventListener('DOMContentLoaded', p),
        e.addEventListener('load', p));
})(window, document, navigator, top, top.crossOriginIsolated);
