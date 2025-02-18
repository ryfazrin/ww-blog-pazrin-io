/* Fernflow 0.2.0 - MIT builder.io */
((t) => {
  const e = Symbol(),
    s = Symbol(),
    n = Symbol(),
    r = Symbol(),
    i = Symbol(),
    o = Symbol(),
    a = [],
    u = (e, s) => (t[e] = d(e, s)),
    d = (t, e) => Object.defineProperty(e, 'name', { value: t }),
    [c, h, f, p, g, l, m, v, S, b, y] = t.ptm;
  class L extends m {
    start(...t) {
      return f(this, ['start'], t);
    }
    end(...t) {
      return f(this, ['end'], t);
    }
    get length() {
      return c(this, ['length']);
    }
  }
  var w;
  u('TimeRanges', L);
  class T extends Array {
    constructor(t) {
      super(), (this[s] = t);
    }
    addEventListener(...t) {
      f(this[s], ['sourceBuffers', 'addEventListener'], t, 3);
    }
    removeEventListener(...t) {
      f(this[s], ['sourceBuffers', 'removeEventListener'], t, 3);
    }
  }
  class E extends v {
    constructor(t) {
      super(t[S], t[b], ['sourceBuffers']), (this[w] = []), (this[s] = t);
    }
    abort() {
      const t = B(this);
      f(this, [t, 'appendWindowStart'], a, 1);
    }
    addEventListener(...t) {
      const e = B(this);
      f(this, [e, 'addEventListener'], t, 3);
    }
    appendBuffer(t) {
      this[i].push(['appendBuffer', [t], t]), k(this);
    }
    get appendWindowStart() {
      const t = B(this);
      return c(this, [t, 'appendWindowStart']);
    }
    set appendWindowStart(t) {
      const e = B(this);
      h(this, [e, 'appendWindowStart'], t);
    }
    get appendWindowEnd() {
      const t = B(this);
      return c(this, [t, 'appendWindowEnd']);
    }
    set appendWindowEnd(t) {
      const e = B(this);
      h(this, [e, 'appendWindowEnd'], t);
    }
    get buffered() {
      const t = this[s],
        e = B(this);
      return new L(t[S], t[b], ['sourceBuffers', e, 'buffered']);
    }
    changeType(t) {
      const e = B(this);
      f(this, [e, 'changeType'], [t], 2);
    }
    get mode() {
      const t = B(this);
      return c(this, [t, 'mode']);
    }
    set mode(t) {
      const e = B(this);
      h(this, [e, 'mode'], t);
    }
    remove(t, e) {
      this[i].push(['remove', [t, e]]), k(this);
    }
    removeEventListener(...t) {
      const e = B(this);
      f(this, [e, 'removeEventListener'], t, 3);
    }
    get timestampOffset() {
      const t = B(this);
      return c(this, [t, 'timestampOffset']);
    }
    set timestampOffset(t) {
      const e = B(this);
      h(this, [e, 'timestampOffset'], t);
    }
    get updating() {
      const t = B(this);
      return c(this, [t, 'updating']);
    }
  }
  w = i;
  const k = (t) => {
      if (t[i].length) {
        if (!t.updating) {
          const e = t[i].shift();
          if (e) {
            const s = B(t);
            f(t, [s, e[0]], e[1], 3, void 0, e[2]);
          }
        }
        setTimeout(() => k(t), 50);
      }
    },
    B = (t) => (t ? t[s][r].indexOf(t) : -1);
  u('SourceBufferList', T), u('SourceBuffer', E);
  const x = class {
      constructor(t) {
        const e = 'audioTracks',
          s = t[S],
          n = t[b];
        return new Proxy(
          {
            addEventListener(...s) {
              f(t, [e, 'addEventListener'], s, 3);
            },
            getTrackById: (...s) => f(t, [e, 'getTrackById'], s),
            get length() {
              return c(t, [e, 'length']);
            },
            removeEventListener(...s) {
              f(t, [e, 'removeEventListener'], s, 3);
            },
          },
          {
            get: (t, r) => ('number' == typeof r ? new R(s, n, [e, r]) : t[r]),
          },
        );
      }
    },
    R = class extends m {
      get enabled() {
        return c(this, ['enabled']);
      }
      set enabled(t) {
        h(this, ['enabled'], t);
      }
      get id() {
        return c(this, ['id']);
      }
      get kind() {
        return c(this, ['kind']);
      }
      get label() {
        return c(this, ['label']);
      }
      get language() {
        return c(this, ['language']);
      }
      get sourceBuffer() {
        return new E(this);
      }
    },
    W = 'audioTracks' in t.HTMLMediaElement.prototype;
  W && (u('AudioTrackList', x), u('AudioTrack', R));
  const O = {
    buffered: {
      get() {
        return (
          this[o] ||
            ((this[o] = new L(this[S], this[b], ['buffered'])),
            setTimeout(() => {
              this[o] = void 0;
            }, 5e3)),
          this[o]
        );
      },
    },
    readyState: {
      get() {
        return 4 === this[n]
          ? 4
          : ('number' != typeof this[n] &&
              ((this[n] = c(this, ['readyState'])),
              setTimeout(() => {
                this[n] = void 0;
              }, 1e3)),
            this[n]);
      },
    },
  };
  W &&
    (O.audioTracks = {
      get() {
        return new x(this);
      },
    }),
    g(t.HTMLMediaElement, O);
  const C = new Map(),
    P = (t, e, s) => {
      const n = t[S],
        r = l(),
        i = { [S]: n, [b]: r, [y]: [] },
        o = f(t, ['getContext'], [e, s], 1, r),
        a = {
          get: (t, e) =>
            'string' == typeof e && e in o
              ? 'function' == typeof o[e]
                ? (...t) => {
                    if (e.startsWith('create')) {
                      const r = l();
                      return (
                        f(i, [e], t, 2, r),
                        'createImageData' === e || 'createPattern' === e
                          ? ((s = `${e}()`),
                            console.warn(`${s} not implemented`),
                            { setTransform: () => {} })
                          : new U(n, r)
                      );
                    }
                    var s;
                    const r = M.includes(e) ? 1 : 2;
                    return f(i, [e], t, r);
                  }
                : o[e]
              : t[e],
          set: (t, e, s) => (
            'string' == typeof e && e in o
              ? (o[e] !== s && 'function' != typeof s && h(i, [e], s),
                (o[e] = s))
              : (t[e] = s),
            !0
          ),
        };
      return new Proxy(o, a);
    },
    U = class {
      constructor(t, e) {
        (this[S] = t), (this[b] = e), (this[y] = []);
      }
      addColorStop(...t) {
        f(this, ['addColorStop'], t, 2);
      }
    };
  u('CanvasGradient', U), u('CanvasPattern', CanvasPattern);
  const M =
      'getContextAttributes,getImageData,getLineDash,getTransform,isPointInPath,isPointInStroke,measureText'.split(
        ',',
      ),
    I = (t, e, s) => {
      const n = t[S],
        r = l(),
        i = { [S]: n, [b]: r, [y]: [] },
        o = f(t, ['getContext'], [e, s], 1, r),
        a = {
          get: (t, e) =>
            'string' == typeof e
              ? 'function' != typeof o[e]
                ? o[e]
                : (...t) => f(i, [e], t, $(e))
              : t[e],
          set: (t, e, s) => (
            'string' == typeof e && e in o
              ? (o[e] !== s && 'function' != typeof s && h(i, [e], s),
                (o[e] = s))
              : (t[e] = s),
            !0
          ),
        };
      return new Proxy(o, a);
    },
    A = 'checkFramebufferStatus,makeXRCompatible'.split(','),
    $ = (t) =>
      t.startsWith('create') ||
      t.startsWith('get') ||
      t.startsWith('is') ||
      A.includes(t)
        ? 1
        : 2,
    j = {
      getContext: {
        value(t, s) {
          return (
            this[e] || (this[e] = (t.includes('webgl') ? I : P)(this, t, s)),
            this[e]
          );
        },
      },
    };
  g(t.HTMLCanvasElement, j);
  const H = {
    Audio: (t) =>
      d(
        'HTMLAudioElement',
        class {
          constructor(e) {
            const s = t.j.createElement('audio');
            return (s.src = e), s;
          }
        },
      ),
    MediaSource: (t, e, s) => {
      const n = (e.URL = d('URL', class extends URL {}));
      return (
        (n.createObjectURL = (t) => f(e, ['URL', 'createObjectURL'], [t])),
        (n.revokeObjectURL = (t) => f(e, ['URL', 'revokeObjectURL'], [t])),
        d(
          s,
          class extends v {
            constructor() {
              super(t.M, l()), (this[r] = new T(this)), p(this, s, a);
            }
            get activeSourceBuffers() {
              return [];
            }
            addSourceBuffer(t) {
              const e = new E(this);
              return this[r].push(e), f(this, ['addSourceBuffer'], [t]), e;
            }
            clearLiveSeekableRange() {
              f(this, ['clearLiveSeekableRange'], a, 2);
            }
            get duration() {
              return c(this, ['duration']);
            }
            set duration(t) {
              h(this, ['duration'], t);
            }
            endOfStream(t) {
              f(this, ['endOfStream'], [t], 3);
            }
            get readyState() {
              return c(this, ['readyState']);
            }
            removeSourceBuffer(t) {
              const e = B(t);
              e > -1 &&
                (this[r].splice(e, 1), f(this, ['removeSourceBuffer'], [e], 1));
            }
            setLiveSeekableRange(t, e) {
              f(this, ['setLiveSeekableRange'], [t, e], 2);
            }
            get sourceBuffers() {
              return this[r];
            }
            static isTypeSupported(t) {
              if (!C.has(t)) {
                const n = f(e, [s, 'isTypeSupported'], [t]);
                C.set(t, n);
              }
              return C.get(t);
            }
          },
        )
      );
    },
  };
  t.ptm = H;
})(self);
