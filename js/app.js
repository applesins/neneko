/* hooks.jsx */
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} = React;
const ICON_BASE = './images/icons/';
function useMedia(q) {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const f = () => setM(mq.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [q]);
  return m;
}
const useReduced = () => useMedia('(prefers-reduced-motion: reduce)');
const useCompact = () => useMedia('(max-width: 767px)');
const FORCE_TOUCH = /[?&]touch=1/.test(location.search);
const useTouch = () => useMedia('(hover: none)') || FORCE_TOUCH;
const clamp01 = v => Math.max(0, Math.min(1, v));
function useProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const ov = window.__pov && Object.keys(window.__pov).find(s => el.matches(s));
      if (ov) return setP(window.__pov[ov]);
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      setP(span > 0 ? clamp01(-r.top / span) : r.top < 0 ? 1 : 0);
    };
    const on = () => tick();
    tick();
    window.addEventListener('scroll', on, {
      passive: true
    });
    window.addEventListener('nh-pov', on);
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('nh-pov', on);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return p;
}
function useInView(ref, {
  threshold = .35,
  once = false
} = {}) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        if (once) io.disconnect();
      } else if (!once) setV(false);
    }, {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return v;
}
const PUNCT = /^[，。、！？：；」』）,.!?:;)]$/;
function RevealText({
  text,
  show,
  stagger = 45,
  className,
  style
}) {
  const chars = [];
  Array.from(text).forEach(c => {
    if (PUNCT.test(c) && chars.length) chars[chars.length - 1] += c;else chars.push(c);
  });
  return React.createElement("span", {
    className: className,
    style: style,
    "aria-label": text
  }, chars.map((c, i) => React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      whiteSpace: 'pre',
      opacity: show ? 1 : 0,
      transform: show ? 'none' : 'translateY(.35em)',
      transition: 'opacity 420ms var(--ease-out) ' + (show ? i * stagger : 0) + 'ms, transform 420ms var(--ease-out) ' + (show ? i * stagger : 0) + 'ms'
    }
  }, c)));
}
const __icons = {};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const [svg, setSvg] = useState(__icons[name] || '');
  useEffect(() => {
    if (__icons[name]) {
      setSvg(__icons[name]);
      return;
    }
    fetch(ICON_BASE + name + '.svg').then(r => r.text()).then(t => {
      __icons[name] = t.replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
      setSvg(__icons[name]);
    }).catch(() => {});
  }, [name]);
  return React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
function scrollToId(id, smooth = true) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 10,
    behavior: smooth && !reduce ? 'smooth' : 'auto'
  });
}
function SwipeDeck({
  index,
  onChange,
  count = 2,
  labels = [],
  dark = false,
  className = '',
  children
}) {
  const reduced = useReduced();
  const s = useRef(null);
  const go = i => onChange((i + count) % count);
  const ts = e => {
    const t = e.touches[0];
    s.current = {
      x: t.clientX,
      y: t.clientY,
      lock: null
    };
  };
  const tm = e => {
    const o = s.current;
    if (!o) return;
    const t = e.touches[0];
    const dx = t.clientX - o.x,
      dy = t.clientY - o.y;
    if (o.lock == null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) o.lock = Math.abs(dx) > Math.abs(dy) * 1.4 ? 'x' : 'y';
  };
  const te = e => {
    const o = s.current;
    s.current = null;
    if (!o || o.lock !== 'x') return;
    const dx = e.changedTouches[0].clientX - o.x;
    if (Math.abs(dx) > 36) go(index + (dx < 0 ? 1 : -1));
  };
  const kids = React.Children.toArray(children);
  return React.createElement("div", {
    className: 'deck ' + (dark ? 'is-dark ' : '') + className,
    onTouchStart: ts,
    onTouchMove: tm,
    onTouchEnd: te,
    onTouchCancel: () => {
      s.current = null;
    }
  }, React.createElement("div", {
    className: "deck-view"
  }, React.createElement("div", {
    className: "deck-track",
    style: {
      transform: 'translateX(' + -index * 100 + '%)',
      transition: reduced ? 'none' : undefined
    }
  }, kids.map((c, i) => React.createElement("div", {
    className: "deck-slide",
    key: i,
    "aria-hidden": i !== index ? 'true' : undefined
  }, c)))), React.createElement("button", {
    className: "deck-arrow prev",
    "aria-label": labels[(index - 1 + count) % count] || 'Previous',
    onClick: () => go(index - 1)
  }, React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), React.createElement("button", {
    className: "deck-arrow next",
    "aria-label": labels[(index + 1) % count] || 'Next',
    onClick: () => go(index + 1)
  }, React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  })), React.createElement("div", {
    className: "deck-dots"
  }, kids.map((_, i) => React.createElement("button", {
    key: i,
    className: 'deck-dot' + (i === index ? ' on' : ''),
    "aria-label": labels[i] || String(i + 1),
    "aria-current": i === index ? 'true' : undefined,
    onClick: () => onChange(i)
  }, React.createElement("i", null)))));
}
function useScrolling(ms = 450) {
  const [s, setS] = useState(false);
  useEffect(() => {
    let t = 0;
    const f = () => {
      setS(true);
      clearTimeout(t);
      t = setTimeout(() => setS(false), ms);
    };
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', f);
      clearTimeout(t);
    };
  }, []);
  return s;
}
function Reveal({
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const v = useInView(ref, {
    threshold: .2,
    once: true
  });
  return React.createElement(as, {
    ref,
    className: 'rv ' + (v ? 'is-in ' : '') + className,
    ...rest
  }, children);
}
function tx(s) {
  if (typeof s !== 'string') return s;
  s = s.replace(/([0-9A-Za-z%]+) (?=[^\x00-\x7F])/g, '$1\u00A0');
  const parts = s.split(/(《[^》]*》|「[^」]*」)/);
  return parts.length === 1 ? s : parts.map((p, i) => /^[《「]/.test(p) ? React.createElement("span", {
    key: i,
    className: "nw"
  }, p) : p);
}
function useHideZones() {
  const [hit, setHit] = useState(false);
  useEffect(() => {
    const els = [document.getElementById('consult'), document.querySelector('.site-foot')].filter(Boolean);
    if (!els.length) return;
    const on = new Set();
    const io = new IntersectionObserver(es => {
      es.forEach(e => e.isIntersecting ? on.add(e.target) : on.delete(e.target));
      setHit(on.size > 0);
    }, {
      threshold: 0
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return hit;
}
function NorenKit({
  label,
  tone = 'exhibit',
  state = 'closed',
  onOpen,
  sway = true,
  sub,
  className = ''
}) {
  const chars = Array.from(label);
  const n = chars.length;
  const mid = (n - 1) / 2;
  const hem = [3, 0, 2, 4, 1, 3, 0];
  return React.createElement("div", {
    className: 'nr nr-' + tone + ' nr-' + state + (sway ? ' nr-sway' : '') + ' ' + className,
    style: {
      '--n': n
    }
  }, React.createElement("button", {
    className: "nr-btn",
    onClick: onOpen,
    "aria-expanded": state === 'open',
    "aria-label": label,
    tabIndex: state === 'open' ? -1 : 0
  }, React.createElement("span", {
    className: "nr-rod",
    "aria-hidden": "true"
  }, React.createElement("i", {
    className: "nr-cap"
  }), React.createElement("i", {
    className: "nr-cap r"
  })), React.createElement("span", {
    className: "nr-row",
    "aria-hidden": "true"
  }, chars.map((ch, i) => {
    const d = i < mid ? -1 : i > mid ? 1 : 0;
    return React.createElement("span", {
      key: i,
      className: "nr-p",
      style: {
        '--d': d,
        '--k': Math.abs(i - mid) + 1,
        '--i': i
      }
    }, React.createElement("span", {
      className: "nr-cloth",
      style: {
        clipPath: 'polygon(0 0,100% 0,100% calc(100% - ' + hem[(i + 1) % 7] + 'px),0 calc(100% - ' + hem[i % 7] + 'px))',
        animationDelay: i * -1.7 + 's'
      }
    }, React.createElement("span", {
      className: "nr-sleeve"
    }), React.createElement("b", null, ch)));
  }))), sub && React.createElement("span", {
    className: "nr-sub"
  }, sub));
}
Object.assign(window, {
  NorenKit,
  tx,
  useHideZones,
  useScrolling,
  Reveal,
  SwipeDeck,
  useMedia,
  useReduced,
  useCompact,
  useTouch,
  useProgress,
  useInView,
  RevealText,
  Icon,
  scrollToId,
  clamp01
});
/* Street.jsx */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STARS = Array.from({
  length: 26
}, (_, i) => ({
  x: (i * 37.7 + 11) % 100,
  y: i * 53.3 % 62 + 3,
  s: i % 5 === 0 ? 3 : 2
}));
function Sky({
  mode
}) {
  return React.createElement("div", {
    className: "sky",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "sky-layer sky-dusk",
    style: {
      opacity: mode === 'dusk' ? 1 : 0
    }
  }), React.createElement("div", {
    className: "sky-layer sky-day",
    style: {
      opacity: mode === 'day' ? 1 : 0
    }
  }), React.createElement("div", {
    className: "sky-layer sky-night",
    style: {
      opacity: mode === 'night' ? 1 : 0
    }
  }), React.createElement("div", {
    className: "sky-pivot",
    style: {
      left: '12%',
      transform: 'rotate(' + (mode === 'day' ? 10 : mode === 'dusk' ? -38 : -80) + 'deg)',
      opacity: mode === 'night' ? 0 : 1
    }
  }, React.createElement("span", {
    className: "sun",
    style: {
      opacity: mode === 'day' ? 1 : .55
    }
  })), React.createElement("div", {
    className: "sky-pivot",
    style: {
      left: '76%',
      transform: 'rotate(' + (mode === 'night' ? 12 : 90) + 'deg)',
      opacity: mode === 'night' ? 1 : 0
    }
  }, React.createElement("span", {
    className: "moon"
  })), STARS.map((s, i) => React.createElement("span", {
    key: i,
    className: "star",
    style: {
      left: s.x + '%',
      top: s.y + '%',
      width: s.s,
      height: s.s,
      opacity: mode === 'night' ? i % 3 ? .9 : .55 : 0,
      transitionDelay: mode === 'night' ? 300 + i * 40 + 'ms' : '0ms'
    }
  })), React.createElement("div", {
    className: "clouds",
    style: {
      opacity: mode === 'day' ? 1 : mode === 'dusk' ? .45 : 0
    }
  }, React.createElement("span", {
    className: "cloud c1"
  }), React.createElement("span", {
    className: "cloud c2"
  }), React.createElement("span", {
    className: "cloud c3"
  })));
}
function Museum({
  x,
  mode,
  lang,
  onEnter,
  onLeave,
  onTap,
  glint,
  big
}) {
  const L = window.COPY[lang];
  const night = mode === 'night',
    day = mode === 'day';
  return React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    className: "bldg",
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onClick: onTap,
    role: "button",
    tabIndex: "0",
    "aria-label": L.exSign.join(' '),
    onFocus: onEnter,
    onBlur: onLeave,
    onKeyDown: e => e.key === 'Enter' && onTap()
  }, React.createElement("rect", {
    x: "-40",
    y: "160",
    width: "580",
    height: "350",
    fill: "transparent"
  }), React.createElement("polygon", {
    points: "0,500 520,500 610,538 90,538",
    fill: "var(--ink-2)",
    style: {
      opacity: day ? .16 : mode === 'dusk' ? .06 : 0,
      transition: 'opacity var(--dur-sky) var(--ease-soft)'
    }
  }), React.createElement("path", {
    d: "M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",
    fill: "var(--matcha-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "miter"
  }), React.createElement("g", {
    fill: "var(--matcha-2)",
    opacity: ".45"
  }, React.createElement("circle", {
    cx: "18",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "214",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "18",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "240",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "18",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "266",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "18",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "292",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "18",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "154",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "188",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "318",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "18",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "52",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "86",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "120",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "154",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "188",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "222",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "256",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "290",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "324",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "358",
    cy: "344",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "426",
    cy: "344",
    r: "1.5"
  })), React.createElement("path", {
    d: "M156,186 L176,306 L196,186",
    fill: "none",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "miter"
  }), React.createElement("rect", {
    x: "376",
    y: "214",
    width: "14",
    height: "250",
    fill: "#DFE7E3",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), React.createElement("rect", {
    x: "26",
    y: "384",
    width: "300",
    height: "116",
    fill: "#DFE7E3",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("g", {
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }, React.createElement("line", {
    x1: "126",
    y1: "384",
    x2: "126",
    y2: "500"
  }), React.createElement("line", {
    x1: "226",
    y1: "384",
    x2: "226",
    y2: "500"
  })), React.createElement("rect", {
    x: "150",
    y: "424",
    width: "56",
    height: "76",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "178",
    y1: "424",
    x2: "178",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("clipPath", {
    id: "glass-clip"
  }, React.createElement("rect", {
    x: "26",
    y: "384",
    width: "300",
    height: "116"
  })), React.createElement("g", {
    clipPath: "url(#glass-clip)"
  }, React.createElement("polygon", {
    points: "0,384 40,384 -20,500 -60,500",
    fill: "#fff",
    className: "glint",
    style: {
      transform: glint ? 'translateX(420px)' : 'translateX(0)',
      opacity: glint ? .85 : 0
    }
  })), React.createElement("rect", {
    x: "-20",
    y: "370",
    width: "480",
    height: "12",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "290",
    y: "490",
    width: "260",
    height: "10",
    fill: "var(--paper-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), React.createElement("rect", {
    x: "300",
    y: "426",
    width: "240",
    height: "64",
    rx: "5",
    fill: "var(--matcha-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "314",
    y: "438",
    width: "212",
    height: "40",
    rx: "2",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("text", {
    x: "420",
    y: "467",
    textAnchor: "middle",
    fill: "var(--matcha-2)"
  }, React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "26",
    fontWeight: "500",
    letterSpacing: "4"
  }, L.exSign[0]), React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "16",
    fontWeight: "500",
    letterSpacing: "2.5",
    dx: "10",
    fill: "var(--ink-1)"
  }, "EXHIBITION")), React.createElement("g", {
    style: {
      opacity: night ? .82 : 0,
      transition: 'opacity var(--dur-sky) var(--ease-soft)',
      pointerEvents: 'none'
    },
    fill: "var(--night-2)"
  }, React.createElement("path", {
    d: "M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"
  }), React.createElement("rect", {
    x: "-20",
    y: "370",
    width: "480",
    height: "12"
  }), React.createElement("rect", {
    x: "290",
    y: "426",
    width: "260",
    height: "74"
  })), React.createElement(StreetTag, {
    x: 330,
    y: 144,
    rot: 8,
    text: L.exTag,
    hidden: mode === 'night',
    active: mode === 'day',
    big: big
  }));
}
function TheatreBldg({
  x,
  mode,
  lang,
  onEnter,
  onLeave,
  onTap,
  big
}) {
  const L = window.COPY[lang];
  const night = mode === 'night';
  const win = i => {
    const wx = 34 + i * 60;
    return 'M' + wx + ',272 V222 A17,17 0 0 1 ' + (wx + 34) + ',222 V272 Z';
  };
  const bulbs = [];
  for (let i = 0; i < 11; i++) {
    bulbs.push([104 + i * 21.2, 298]);
    bulbs.push([104 + i * 21.2, 350]);
  }
  [314, 324, 334].forEach(y => {
    bulbs.push([96, y]);
    bulbs.push([324, y]);
  });
  const glow = {
    transition: 'opacity var(--dur-sky) var(--ease-soft)',
    pointerEvents: 'none'
  };
  return React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    className: "bldg",
    style: {
      opacity: mode === 'day' ? .42 : 1,
      transition: 'opacity var(--dur-sky) var(--ease-soft)'
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onClick: onTap,
    role: "button",
    tabIndex: "0",
    "aria-label": L.thSign.join(' '),
    onFocus: onEnter,
    onBlur: onLeave,
    onKeyDown: e => e.key === 'Enter' && onTap()
  }, React.createElement("rect", {
    x: "-20",
    y: "150",
    width: "460",
    height: "360",
    fill: "transparent"
  }), React.createElement("rect", {
    x: "20",
    y: "160",
    width: "380",
    height: "16",
    fill: "#F1E3D9",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "-14",
    y: "176",
    width: "448",
    height: "16",
    fill: "#F1E3D9",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "0",
    y: "192",
    width: "420",
    height: "308",
    fill: "#F5EAE2",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "0",
    y1: "282",
    x2: "420",
    y2: "282",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), [0, 1, 2, 3, 4, 5].map(i => React.createElement("path", {
    key: i,
    d: win(i),
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  })), React.createElement("rect", {
    x: "56",
    y: "398",
    width: "54",
    height: "76",
    fill: "var(--paper-3)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("rect", {
    x: "310",
    y: "398",
    width: "54",
    height: "76",
    fill: "var(--shu-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "var(--ink-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "-14",
    y: "160",
    width: "448",
    height: "340",
    fill: "var(--night-2)",
    style: {
      ...glow,
      opacity: night ? .62 : 0
    }
  }), [0, 1, 2, 3, 4, 5].map(i => React.createElement("path", {
    key: 'g' + i,
    d: win(i),
    fill: "var(--lamp-1)",
    style: {
      ...glow,
      opacity: night ? 1 : 0,
      transitionDelay: night ? 200 + i * 90 + 'ms' : '0ms'
    }
  })), React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "var(--lamp-2)",
    style: {
      ...glow,
      opacity: night ? 1 : 0,
      transitionDelay: night ? '500ms' : '0ms'
    }
  }), React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "none",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "128",
    y: "494",
    width: "164",
    height: "6",
    fill: "var(--paper-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("rect", {
    x: "90",
    y: "292",
    width: "240",
    height: "64",
    rx: "5",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "104",
    y: "304",
    width: "212",
    height: "40",
    rx: "2",
    fill: "var(--night-3)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), React.createElement("text", {
    x: "210",
    y: "333",
    textAnchor: "middle",
    fill: "var(--lamp-1)",
    style: {
      opacity: night ? 1 : .7,
      transition: 'opacity var(--dur-sky)'
    }
  }, React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "26",
    fontWeight: "500",
    letterSpacing: "4"
  }, L.thSign[0]), React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "16",
    fontWeight: "500",
    letterSpacing: "2.5",
    dx: "10"
  }, "THEATRE")), bulbs.map(([bx, by], i) => React.createElement("circle", {
    key: i,
    cx: bx,
    cy: by,
    r: "2.8",
    fill: "var(--lamp-2)",
    stroke: "var(--ink-1)",
    strokeWidth: ".6",
    style: {
      ...glow,
      opacity: night ? 1 : .25,
      transitionDelay: night ? 300 + (i >> 1) * 70 + 'ms' : '0ms'
    }
  })), React.createElement(StreetTag, {
    x: -30,
    y: 124,
    rot: -8,
    text: L.thTag,
    hidden: mode === 'day',
    light: mode === 'night',
    active: mode === 'night',
    big: big
  }));
}
function StreetTag({
  x,
  y,
  rot,
  text,
  hidden,
  light,
  active,
  big
}) {
  const tref = useRef(null);
  const [w, setW] = useState(Array.from(text).length * 18);
  useEffect(() => {
    const m = () => {
      try {
        setW(tref.current.getComputedTextLength());
      } catch (e) {}
    };
    m();
    document.fonts && document.fonts.ready.then(m);
  }, [text, big]);
  return React.createElement("g", {
    transform: 'translate(' + x + ',' + y + ') rotate(' + rot + ')',
    "aria-hidden": "true",
    style: {
      pointerEvents: 'none'
    }
  }, React.createElement("g", {
    style: {
      opacity: hidden ? 0 : 1,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, React.createElement("g", {
    className: 'tag-scale' + (active ? ' is-on' : '')
  }, React.createElement("g", {
    className: 'tag-pulse' + (active ? ' is-fast' : '')
  }, React.createElement("line", {
    x1: "-14",
    y1: "-16",
    x2: "-6",
    y2: "-6",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), React.createElement("line", {
    x1: "-18",
    y1: "1",
    x2: "-8",
    y2: "1",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), React.createElement("text", {
    ref: tref,
    x: "0",
    y: "6",
    fontFamily: "var(--font-sans)",
    fontSize: big ? 24 : 16,
    fontWeight: "500",
    letterSpacing: "2.4",
    fill: light ? 'var(--night-ink)' : 'var(--ink-1)',
    style: {
      transition: 'fill var(--dur-sky)'
    }
  }, text), React.createElement("line", {
    x1: w + 6,
    y1: "-6",
    x2: w + 14,
    y2: "-16",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), React.createElement("line", {
    x1: w + 8,
    y1: "1",
    x2: w + 18,
    y2: "1",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))));
}
function StreetTree({
  x,
  mode
}) {
  return React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    "aria-hidden": "true"
  }, React.createElement("line", {
    x1: "0",
    y1: "440",
    x2: "0",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), React.createElement("circle", {
    cx: "0",
    cy: "428",
    r: "22",
    fill: "var(--matcha-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: "M0,452 L-8,440 M0,446 L7,436",
    stroke: "var(--ink-1)",
    strokeWidth: "1",
    fill: "none"
  }), React.createElement("circle", {
    cx: "0",
    cy: "428",
    r: "22",
    fill: "var(--night-2)",
    style: {
      opacity: mode === 'night' ? .6 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }));
}
function StreetLamp({
  x,
  mode
}) {
  return React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    "aria-hidden": "true"
  }, React.createElement("circle", {
    cx: "0",
    cy: "392",
    r: "22",
    fill: "var(--lamp-glow)",
    style: {
      opacity: mode === 'night' ? 1 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), React.createElement("line", {
    x1: "0",
    y1: "398",
    x2: "0",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("path", {
    d: "M-9,398 H9 L5,384 H-5 Z",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }));
}
function EntranceLine({
  kind,
  text,
  lang,
  active,
  mode
}) {
  const vertical = lang === 'ja';
  const dim = mode === 'dusk' ? .38 : active ? 1 : 0;
  const cls = 'eline eline-' + kind + (vertical ? ' is-v' : '') + (kind === 'th' && mode === 'night' ? ' is-lit' : '');
  return React.createElement("div", {
    className: cls,
    style: {
      opacity: dim
    }
  }, React.createElement(RevealText, {
    text: text,
    show: mode === 'dusk' || active,
    stagger: active ? 55 : 0
  }));
}
function Street({
  lang,
  onEnterPage
}) {
  const L = window.COPY[lang];
  const compact = useCompact();
  const touch = useTouch();
  const reduced = useReduced();
  const [modeS, setMode] = useState('dusk');
  const [picked, setPicked] = useState(null);
  const [slide, setSlide] = useState(0);
  const mode = compact ? slide ? 'night' : 'day' : modeS;
  const [glint, setGlint] = useState(false);
  const [zoom, setZoom] = useState(null);
  const lay = compact ? {
    vb: '-40 90 1020 440',
    mx: 0,
    tx: 550,
    lamp: null
  } : {
    vb: '0 80 1440 460',
    mx: 200,
    tx: 880,
    lamp: 790
  };
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('nh-sky', {
      detail: mode
    }));
    return () => window.dispatchEvent(new CustomEvent('nh-sky', {
      detail: 'dusk'
    }));
  }, [mode]);
  useEffect(() => {
    if (mode === 'day') {
      const id = setTimeout(() => setGlint(true), 380);
      return () => {
        clearTimeout(id);
        setGlint(false);
      };
    }
  }, [mode]);
  useEffect(() => {
    if (!touch || picked || reduced || compact) return;
    const seq = ['day', 'dusk', 'night', 'dusk'];
    let i = 0;
    const id = setInterval(() => {
      setMode(seq[i % 4]);
      i++;
    }, 3200);
    return () => clearInterval(id);
  }, [touch, picked, reduced, compact]);
  const enter = which => {
    const vbx = compact ? -40 : 0,
      vbw = compact ? 1020 : 1440;
    const ox = which === 'ex' ? lay.mx + 178 : lay.tx + 210;
    setZoom(compact ? {
      which,
      ox: '50%',
      oy: '62%'
    } : {
      which,
      ox: (ox - vbx) / vbw * 100 + '%'
    });
    setTimeout(() => onEnterPage(which === 'ex' ? 'exhibition' : 'theatre'), reduced ? 0 : 950);
  };
  const handlers = which => {
    const m = which === 'ex' ? 'day' : 'night';
    if (compact) return {
      onEnter: () => {},
      onLeave: () => {},
      onTap: () => enter(which)
    };
    return touch ? {
      onEnter: () => {},
      onLeave: () => {},
      onTap: () => {
        if (picked === which) enter(which);else {
          setPicked(which);
          setMode(m);
        }
      }
    } : {
      onEnter: () => setMode(m),
      onLeave: () => setMode('dusk'),
      onTap: () => enter(which)
    };
  };
  return React.createElement("section", {
    className: 'street mode-' + mode,
    id: "street",
    "data-screen-label": "Home street"
  }, React.createElement(Sky, {
    mode: mode
  }), React.createElement("div", {
    className: "street-inner",
    style: zoom ? {
      transform: 'scale(3.2)',
      transformOrigin: zoom.ox + ' ' + (zoom.oy || '78%')
    } : null
  }, React.createElement("div", {
    className: "street-top"
  }, React.createElement("div", {
    className: "tagline-stack"
  }, React.createElement("h1", {
    className: 'tagline' + (lang === 'en' ? ' is-en' : '')
  }, L.tagline), React.createElement("h1", {
    className: 'tagline tagline-night' + (lang === 'en' ? ' is-en' : ''),
    "aria-hidden": "true",
    style: {
      opacity: mode === 'night' ? 1 : 0
    }
  }, L.tagline)), compact ? React.createElement("p", {
    className: "byline is-3l"
  }, L.byline.split('｜').map((t, n) => React.createElement("span", {
    key: n,
    className: n ? '' : 'nk'
  }, t))) : React.createElement("p", {
    className: "byline"
  }, L.byline)), compact ? React.createElement(SwipeDeck, {
    index: slide,
    onChange: setSlide,
    dark: slide === 1,
    labels: [L.exSign.join(' '), L.thSign.join(' ')],
    className: "street-deck"
  }, React.createElement("svg", {
    className: "street-svg is-stack",
    viewBox: "-60 70 650 470",
    preserveAspectRatio: "xMidYMax meet"
  }, React.createElement("rect", {
    x: "-70",
    y: "500",
    width: "670",
    height: "80",
    fill: "var(--paper-1)"
  }), React.createElement("rect", {
    x: "-70",
    y: "500",
    width: "670",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), React.createElement("line", {
    x1: "-70",
    y1: "500",
    x2: "600",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "-70",
    y1: "524",
    x2: "600",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), React.createElement(Museum, _extends({
    x: 0,
    mode: mode,
    lang: lang,
    glint: glint,
    big: true
  }, handlers('ex')))), React.createElement("svg", {
    className: "street-svg is-stack",
    viewBox: "-90 70 600 470",
    preserveAspectRatio: "xMidYMax meet"
  }, React.createElement("rect", {
    x: "-100",
    y: "500",
    width: "620",
    height: "80",
    fill: "var(--paper-1)"
  }), React.createElement("rect", {
    x: "-100",
    y: "500",
    width: "620",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), React.createElement("line", {
    x1: "-100",
    y1: "500",
    x2: "520",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "-100",
    y1: "524",
    x2: "520",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), React.createElement(TheatreBldg, _extends({
    x: 0,
    mode: mode,
    lang: lang,
    big: true
  }, handlers('th'))))) : React.createElement("svg", {
    className: "street-svg",
    viewBox: lay.vb,
    preserveAspectRatio: "xMidYMax meet"
  }, React.createElement("rect", {
    x: "-400",
    y: "500",
    width: "2240",
    height: "80",
    fill: "var(--paper-1)"
  }), React.createElement("rect", {
    x: "-400",
    y: "500",
    width: "2240",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), React.createElement("line", {
    x1: "-400",
    y1: "500",
    x2: "1840",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "-400",
    y1: "524",
    x2: "1840",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), React.createElement(Museum, _extends({
    x: lay.mx,
    mode: mode,
    lang: lang,
    glint: glint
  }, handlers('ex'))), lay.lamp && React.createElement(StreetTree, {
    x: lay.mx - 70,
    mode: mode
  }), lay.lamp && React.createElement(StreetLamp, {
    x: lay.lamp,
    mode: mode
  }), lay.lamp && React.createElement(StreetTree, {
    x: lay.tx + 500,
    mode: mode
  }), React.createElement(TheatreBldg, _extends({
    x: lay.tx,
    mode: mode,
    lang: lang
  }, handlers('th')))), React.createElement("p", {
    className: "street-hint"
  }, React.createElement("span", {
    className: "hint-arrow"
  }, React.createElement(Icon, {
    name: "arrow-down",
    size: 14,
    style: {
      transform: 'rotate(180deg)'
    }
  })), React.createElement("span", {
    className: "hint-text"
  }, compact ? L.hintSwipe : touch ? L.hintTap : L.hintHover))), React.createElement("div", {
    className: 'enter-veil ' + (zoom ? 'on ' + zoom.which : '')
  }));
}
window.Street = Street;
/* ConsultDesk.jsx */
function ConsultDesk({
  tone = 'exhibit',
  lang
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const touch = useTouch();
  const reduced = useReduced();
  const compact = useCompact();
  const ref = useRef(null);
  const seen = useInView(ref, {
    threshold: .25,
    once: true
  });
  const [open, setOpen] = useState(reduced);
  const [cur, setCur] = useState(lang === 'ja' ? 'JPY' : 'TWD');
  const [sway, setSway] = useState(0);
  const bodyRef = useRef(null);
  const [bh, setBh] = useState(0);
  useEffect(() => {
    if (!compact || !open || !bodyRef.current) return;
    const el = bodyRef.current;
    const m = () => setBh(el.scrollHeight);
    m();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(m) : null;
    ro && ro.observe(el.firstChild);
    return () => ro && ro.disconnect();
  }, [compact, open]);
  const openM = () => {
    setOpen(true);
    setTimeout(() => scrollToId('consult-services', !reduced), reduced ? 30 : 330);
  };
  useEffect(() => {
    if (touch && seen && !compact) {
      const id = setTimeout(() => setOpen(true), 700);
      return () => clearTimeout(id);
    }
  }, [touch, seen, compact]);
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const on = () => setSway(window.scrollY);
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, [reduced]);
  const th = tone === 'theatre';
  const services = th ? L.thServices : L.exServices;
  const price = s => s[2] == null ? L.quote : cur === 'TWD' ? 'NT$ ___' : '¥ ___';
  if (compact) return React.createElement("section", {
    ref: ref,
    id: "consult",
    className: 'desk desk-m ' + (th ? 'desk-th' : 'desk-ex') + (open ? ' is-open' : ''),
    "data-screen-label": th ? 'Theatre consult (box office)' : 'Exhibition consult (reception)'
  }, React.createElement("div", {
    className: "desk-head wrap"
  }, React.createElement("span", {
    className: "desk-plate"
  }, React.createElement("b", null, th ? L.deskTh : L.deskEx), React.createElement("small", null, th ? L.deskThSub : L.deskExSub))), React.createElement("div", {
    className: "desk-window wrap"
  }, React.createElement("div", {
    className: "desk-panel"
  }, React.createElement("div", {
    className: "desk-m-noren",
    "aria-hidden": open ? 'true' : undefined
  }, React.createElement(NorenKit, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    state: open ? 'open' : 'closed',
    onOpen: openM,
    sway: !reduced
  })), React.createElement("div", {
    className: "desk-m-intro"
  }, React.createElement("h3", {
    className: "desk-m-title"
  }, th ? L.thQ : L.exQ), React.createElement("p", {
    className: "desk-m-desc"
  }, tx(th ? L.roomTh : L.roomEx)), React.createElement("p", {
    className: "desk-m-free"
  }, L.csNote.split('｜')[0]), !open && React.createElement("button", {
    className: 'desk-m-open ' + (th ? 'is-th' : 'is-ex'),
    onClick: openM,
    "aria-expanded": "false",
    "aria-controls": "consult-body"
  }, L.openDesk, React.createElement(Icon, {
    name: "arrow-down",
    size: 16
  }))), React.createElement("div", {
    id: "consult-body",
    ref: bodyRef,
    className: "desk-m-body",
    style: {
      height: open ? bh || 'auto' : 0,
      transition: reduced ? 'none' : undefined
    }
  }, open && React.createElement("div", {
    className: "desk-m-inner"
  }, React.createElement("div", {
    className: "desk-row-head",
    id: "consult-services"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Services",
    title: L.services,
    size: "h3"
  }), React.createElement(NS.CurrencyToggle, {
    value: cur,
    onChange: setCur,
    tone: tone
  })), React.createElement("div", {
    className: "price-scroll"
  }, services.map((s, i) => React.createElement(NS.PriceCard, {
    key: i,
    index: i + 1,
    title: s[0],
    desc: s[1],
    price: price(s),
    unit: s[2] || undefined,
    tone: tone,
    visible: true,
    style: {
      minHeight: 0,
      padding: '20px 16px 16px',
      gap: 8,
      flex: '0 0 64%',
      scrollSnapAlign: 'start'
    }
  }))), React.createElement("p", {
    className: "note"
  }, L.priceNote), React.createElement("div", {
    className: "desk-block"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Process",
    title: L.process,
    size: "h3"
  }), React.createElement(NS.ProcessSteps, {
    tone: tone,
    direction: "vertical",
    steps: L.steps.map(label => ({
      label
    }))
  })), React.createElement("div", {
    className: "desk-block contact"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Contact",
    title: L.contact,
    size: "h3"
  }), React.createElement(NS.Button, {
    tone: tone,
    size: "lg",
    href: "#",
    icon: React.createElement(Icon, {
      name: "calendar-check",
      size: 18
    })
  }, L.book), React.createElement(NS.ContactForm, {
    tone: tone,
    labels: L.form,
    defaultType: th ? 1 : 0
  }), React.createElement("div", {
    className: "contact-links"
  }, React.createElement("a", {
    href: "#",
    "aria-label": "Email"
  }, React.createElement(Icon, {
    name: "mail",
    size: 20
  }), React.createElement("span", null, "Email")), React.createElement("a", {
    href: "#",
    "aria-label": "LINE"
  }, React.createElement(Icon, {
    name: "message-circle",
    size: 20
  }), React.createElement("span", null, "LINE")), React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, React.createElement(Icon, {
    name: "instagram",
    size: 20
  }), React.createElement("span", null, "Instagram"))), React.createElement("p", {
    className: "note"
  }, L.reply)))))));
  return React.createElement("section", {
    ref: ref,
    id: "consult",
    className: 'desk desk-d ' + (th ? 'desk-th' : 'desk-ex') + (open ? ' is-open' : ''),
    "data-screen-label": th ? 'Theatre consult (box office)' : 'Exhibition consult (reception)'
  }, React.createElement("div", {
    className: "desk-head wrap"
  }, React.createElement("span", {
    className: "desk-plate"
  }, React.createElement("b", null, th ? L.deskTh : L.deskEx), React.createElement("small", null, th ? L.deskThSub : L.deskExSub))), React.createElement("div", {
    className: "desk-window wrap"
  }, React.createElement("div", {
    className: "desk-panel"
  }, React.createElement("div", {
    className: "desk-noren",
    style: {
      pointerEvents: open ? 'none' : 'auto'
    },
    onMouseEnter: () => !touch && setOpen(true)
  }, React.createElement(NorenKit, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    sub: L.norenSub,
    state: open ? 'open' : 'closed',
    onOpen: () => setOpen(true),
    sway: !reduced
  })), React.createElement("div", {
    className: "desk-content",
    style: {
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(16px)'
    }
  }, React.createElement("div", {
    className: "desk-row-head"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Services",
    title: L.services,
    size: "h3"
  }), React.createElement(NS.CurrencyToggle, {
    value: cur,
    onChange: setCur,
    tone: tone
  })), React.createElement("div", {
    className: "price-grid"
  }, services.map((s, i) => React.createElement(NS.PriceCard, {
    key: i,
    index: i + 1,
    title: s[0],
    desc: s[1],
    price: price(s),
    unit: s[2] || undefined,
    tone: tone,
    visible: open,
    delay: 200 + i * 140
  }))), React.createElement("p", {
    className: "note"
  }, L.priceNote), React.createElement("div", {
    className: "desk-block"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Process",
    title: L.process,
    size: "h3"
  }), React.createElement(NS.ProcessSteps, {
    tone: tone,
    steps: L.steps.map(label => ({
      label
    }))
  })), React.createElement("div", {
    className: "desk-block contact"
  }, React.createElement(NS.SectionHeading, {
    eyebrow: "Contact",
    title: L.contact,
    size: "h3"
  }), React.createElement(NS.Button, {
    tone: tone,
    size: "lg",
    href: "#",
    icon: React.createElement(Icon, {
      name: "calendar-check",
      size: 18
    })
  }, L.book), React.createElement(NS.ContactForm, {
    tone: tone,
    labels: L.form,
    defaultType: th ? 1 : 0
  }), React.createElement("div", {
    className: "contact-links"
  }, React.createElement("a", {
    href: "#",
    "aria-label": "Email"
  }, React.createElement(Icon, {
    name: "mail",
    size: 20
  }), React.createElement("span", null, "Email")), React.createElement("a", {
    href: "#",
    "aria-label": "LINE"
  }, React.createElement(Icon, {
    name: "message-circle",
    size: 20
  }), React.createElement("span", null, "LINE")), React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, React.createElement(Icon, {
    name: "instagram",
    size: 20
  }), React.createElement("span", null, "Instagram"))), React.createElement("p", {
    className: "note"
  }, L.reply))))));
}
window.ConsultDesk = ConsultDesk;
/* Home.jsx */
function Home({
  lang,
  go
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const compact = useCompact();
  const reduced = useReduced();
  const [alt, setAlt] = useState(false);
  const [vf, setVf] = useState('all');
  const [order] = useState(() => {
    const a = [0, 1, 2, 3, 4, 5];
    for (let j = a.length - 1; j > 0; j--) {
      const r = Math.floor(Math.random() * (j + 1));
      [a[j], a[r]] = [a[r], a[j]];
    }
    return a;
  });
  return React.createElement("main", {
    className: "home"
  }, React.createElement(Street, {
    lang: lang,
    onEnterPage: p => go(p)
  }), React.createElement("section", {
    className: "about wrap",
    id: "about",
    "data-screen-label": "Home about"
  }, React.createElement("button", {
    className: 'about-card' + (alt ? ' is-alt' : ''),
    onClick: () => setAlt(a => !a),
    "aria-label": "Neneko"
  }, React.createElement("span", {
    className: "about-card-photo"
  }, React.createElement("img", {
    src: './images/portrait.jpg',
    alt: "Neneko",
    style: {
      objectPosition: '50% 30%'
    }
  }), React.createElement("img", {
    className: "alt",
    src: './images/desk.jpg',
    alt: "",
    style: {
      objectPosition: '62% 40%'
    }
  })), React.createElement("span", {
    className: "about-card-cap"
  }, React.createElement("b", null, "NENEKO"), React.createElement("small", null, L.cardRole))), React.createElement("div", {
    className: "about-text"
  }, React.createElement("span", {
    className: "about-eyebrow"
  }, L.since), React.createElement("div", {
    className: "about-head"
  }, React.createElement("h2", {
    className: "about-name"
  }, "About me"), React.createElement("a", {
    className: "cv-link",
    href: "#"
  }, React.createElement(Icon, {
    name: "arrow-down",
    size: 13
  }), L.cv)), L.about.map((p, n) => React.createElement("p", {
    key: n,
    className: "about-lead"
  }, tx(p))), React.createElement("p", {
    className: "about-cities",
    "aria-label": "Leeds, Taipei, Melbourne, Osaka"
  }, ['Leeds', 'Taipei', 'Melbourne', 'Osaka'].map((c, n) => React.createElement("span", {
    key: c,
    className: "ac-seg"
  }, n > 0 && React.createElement("span", {
    className: "ac-arrow",
    "aria-hidden": "true"
  }, "\u2192"), React.createElement("span", null, c)))))), React.createElement("section", {
    className: "partners",
    id: "partners",
    "data-screen-label": "Home partners"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("span", {
    className: "about-eyebrow"
  }, L.partnersEyebrow)), React.createElement("div", {
    className: "marquee",
    "aria-label": window.PARTNERS.join('、')
  }, React.createElement("div", {
    className: "marquee-track"
  }, [0, 1].map(k => React.createElement("ul", {
    key: k,
    "aria-hidden": k ? 'true' : undefined
  }, window.PARTNERS.map(p => React.createElement("li", {
    key: p
  }, p)))))), React.createElement("div", {
    className: "voices wrap"
  }, React.createElement("div", {
    className: "voices-filter",
    role: "group",
    "aria-label": L.reviewEx + ' / ' + L.reviewTh
  }, [['all', L.reviewAll, ''], ['exhibit', L.reviewEx, 'k-ex'], ['theatre', L.reviewTh, 'k-th']].map(([k, label, cls]) => React.createElement("button", {
    key: k,
    className: 'vf ' + cls + (vf === k ? ' is-on' : ''),
    "aria-pressed": vf === k,
    onClick: () => setVf(k)
  }, label))), React.createElement("div", {
    className: "letters",
    tabIndex: "0"
  }, order.map(i => ({
    i,
    tone: i % 2 ? 'theatre' : 'exhibit'
  })).filter(c => vf === 'all' || c.tone === vf).map(({
    i,
    tone
  }) => {
    const c = tone === 'theatre' ? 'shu' : 'matcha';
    return React.createElement(NS.LetterCard, {
      key: i,
      tone: tone,
      placeholder: true,
      placeholderLabel: L.pending,
      quote: L.reviewQuote,
      name: L.reviewName + ' 0' + (i + 1),
      role: L.reviewRole,
      org: (tone === 'theatre' ? L.reviewTh : L.reviewEx) + '｜' + L.reviewOrg,
      width: compact ? 220 : 240,
      tilt: i % 2 ? 1.6 : -1.8,
      style: {
        background: 'var(--' + c + '-4)',
        backgroundImage: 'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',
        backgroundPosition: '0 52px',
        backgroundClip: 'border-box',
        borderTop: '10px solid var(--' + c + '-1)',
        boxShadow: 'var(--shadow-paper), inset 0 0 0 1.5px var(--' + c + '-1)'
      }
    });
  })), React.createElement("button", {
    className: "voices-cta",
    onClick: () => scrollToId('home-consult')
  }, React.createElement("span", null, L.teammate.split('\n').map((t, n) => React.createElement("span", {
    key: n,
    className: "tm-line"
  }, t))), React.createElement(Icon, {
    name: "arrow-down",
    size: 26
  })))), React.createElement(ConsultStreet, {
    lang: lang,
    go: go
  }));
}
function CsNoren({
  tone,
  state,
  label
}) {
  const chars = Array.from(label);
  const off = state === 'open' ? 108 : state === 'half' ? 46 : 0;
  return React.createElement("div", {
    className: 'cs-noren cs-n-' + tone,
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "cs-rod"
  }), chars.map((ch, n) => React.createElement("span", {
    key: n,
    className: "cs-panel-wrap",
    style: {
      transform: 'translateX(' + (n >= chars.length / 2 ? off * 2 : -off * 2) + '%) rotate(' + (n >= chars.length / 2 ? 1 : -1) * off / 18 + 'deg)'
    }
  }, React.createElement("span", {
    className: "cs-panel",
    style: {
      animationDelay: n * -2.3 + 's'
    }
  }, React.createElement("b", null, ch)))));
}
function ConsultStreet({
  lang,
  go
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const touch = useTouch();
  const compact = useCompact();
  const [open, setOpen] = useState(null);
  const [slide, setSlide] = useState(0);
  const doors = [{
    k: 'ex',
    noren: '展覽相談',
    tone: 'exhibit',
    page: 'exhibition',
    q: L.exQ,
    egg: L.roomEx,
    cta: L.ctaEx,
    sv: L.exServices
  }, {
    k: 'th',
    noren: '劇場相談',
    tone: 'theatre',
    page: 'theatre',
    q: L.thQ,
    egg: L.roomTh,
    cta: L.ctaTh,
    sv: L.thServices
  }];
  const door = d => {
    const st = compact ? 'closed' : open === d.k ? 'open' : touch ? 'half' : 'closed';
    const on = compact || st !== 'closed';
    return React.createElement("div", {
      key: d.k,
      className: 'cs-bldg cs-' + d.k + (on ? ' is-on' : ''),
      onMouseEnter: () => !touch && setOpen(d.k),
      onMouseLeave: () => !touch && setOpen(null),
      onFocus: () => setOpen(d.k),
      onClick: () => touch && setOpen(o => o === d.k ? null : d.k)
    }, d.k === 'th' && React.createElement("span", {
      className: "cs-lamp",
      "aria-hidden": "true"
    }, React.createElement("i", null)), React.createElement("h3", {
      className: "cs-q"
    }, d.q), React.createElement("p", {
      className: "cs-egg"
    }, tx(d.egg)), React.createElement("div", {
      className: "cs-open"
    }, React.createElement("div", {
      className: "cs-interior",
      "aria-hidden": "true"
    }, d.k === 'ex' ? React.createElement(React.Fragment, null, React.createElement("span", {
      className: "cs-rack"
    }, React.createElement("i", null), React.createElement("i", null), React.createElement("i", null)), React.createElement("span", {
      className: "cs-uketsuke"
    }, React.createElement("b", null, "\u53D7\u4ED8"), React.createElement("small", null, "RECEPTION")), React.createElement("span", {
      className: "cs-counter"
    })) : React.createElement(React.Fragment, null, React.createElement("span", {
      className: "cs-ledge"
    }))), React.createElement("div", {
      className: "cs-preview",
      style: {
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(10px)'
      }
    }, React.createElement("ul", null, d.sv.map((s, n) => React.createElement("li", {
      key: n
    }, React.createElement("span", null, s[0])))), React.createElement("button", {
      className: "room-guide",
      tabIndex: on ? 0 : -1,
      onClick: e => {
        e.stopPropagation();
        go(d.page, 'consult');
      }
    }, d.cta, React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))), React.createElement("div", {
      className: "cs-noren2"
    }, React.createElement(NorenKit, {
      label: d.noren,
      tone: d.tone,
      state: st,
      onOpen: () => {},
      sway: true
    }))), d.k === 'th' && React.createElement("span", {
      className: "cs-poster",
      "aria-hidden": "true"
    }, React.createElement("b", null, L.poster), React.createElement("i", null), React.createElement("small", null, "\u306D\u306D\u30CD\u30B3")));
  };
  return React.createElement("section", {
    className: "cs",
    id: "home-consult",
    "data-screen-label": "Home consult doors"
  }, React.createElement("p", {
    className: "cs-note"
  }, L.csNote.split('｜').map((t, n) => React.createElement(React.Fragment, {
    key: n
  }, n > 0 && React.createElement("span", {
    className: "cs-sep"
  }, "\uFF5C"), React.createElement("span", {
    className: "cs-nw"
  }, t)))), compact && React.createElement("div", {
    className: "cs-sky",
    "aria-hidden": "true"
  }, React.createElement("i", {
    className: "d",
    style: {
      opacity: slide ? 0 : 1
    }
  }), React.createElement("i", {
    className: "n",
    style: {
      opacity: slide ? 1 : 0
    }
  })), compact ? React.createElement(SwipeDeck, {
    index: slide,
    onChange: i => {
      setSlide(i);
      setOpen(null);
    },
    dark: slide === 1,
    labels: [L.ctaEx, L.ctaTh],
    className: "cs-deck"
  }, doors.map(door)) : React.createElement("div", {
    className: "cs-street"
  }, doors.map(door)), React.createElement("div", {
    className: "cs-ground",
    "aria-hidden": "true"
  }));
}
function SiteFooter({
  lang,
  go,
  page
}) {
  const L = window.COPY[lang];
  const F = L.foot;
  const to = (p, a) => e => {
    e.preventDefault();
    if (p === page) {
      a ? scrollToId(a) : window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else go(p, a);
  };
  const home = [[F.top, 'home'], [F.about, 'home', 'about'], [F.partners, 'home', 'partners'], [F.consult, 'home', 'home-consult']];
  const ticket = React.createElement("svg", {
    viewBox: "0 0 64 40",
    width: "64",
    height: "40"
  }, React.createElement("path", {
    d: "M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M44 5v30",
    stroke: "var(--paper-0)",
    strokeWidth: "1.5",
    strokeDasharray: "3 3"
  }), React.createElement("path", {
    d: "M12 15h22M12 21h16M12 27h20",
    stroke: "var(--paper-0)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
  const piece = React.createElement("svg", {
    viewBox: "0 0 60 52",
    width: "60",
    height: "52"
  }, React.createElement("path", {
    d: "M30 2l-8 8M30 2l8 8",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    x: "3",
    y: "10",
    width: "54",
    height: "40",
    rx: "1",
    fill: "var(--wood-2, #C9A27A)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "9",
    y: "16",
    width: "42",
    height: "28",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("path", {
    d: "M10 43l11-13 7 8 6-6 16 11z",
    fill: "var(--matcha-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "40",
    cy: "24",
    r: "3.5",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }));
  const works = [[F.exWorks, 'exhibition', piece, 'ex'], [F.thWorks, 'theatre', ticket, 'th']];
  return React.createElement("footer", {
    className: "site-foot",
    "data-screen-label": "Footer"
  }, React.createElement("div", {
    className: "wrap site-foot-in"
  }, React.createElement("nav", {
    className: "sf-map",
    "aria-label": "Sitemap"
  }, React.createElement("div", {
    className: "sf-col"
  }, React.createElement("h4", null, "HOME"), React.createElement("ul", null, home.map(([label, p, a]) => React.createElement("li", {
    key: label
  }, React.createElement("a", {
    href: pageUrl(p, a),
    onClick: to(p, a)
  }, label))))), React.createElement("div", {
    className: "sf-col sf-works"
  }, works.map(([label, p, icon, k]) => React.createElement("h4", {
    key: k
  }, React.createElement("a", {
    className: 'sf-work sf-work-' + k,
    href: pageUrl(p),
    onClick: to(p)
  }, label, React.createElement("span", {
    className: "sf-pop",
    "aria-hidden": "true"
  }, icon)))))), React.createElement("div", {
    className: "sf-contact"
  }, React.createElement("h4", null, "LET'S TALK!"), React.createElement("a", {
    className: "sf-mail",
    href: "mailto:hanningchen13@gmail.com"
  }, "hanningchen13@gmail.com"), React.createElement("a", {
    className: "sf-tel",
    href: "tel:+886911506750"
  }, "+886 911506750"), React.createElement("div", {
    className: "sf-social"
  }, React.createElement("a", {
    href: "https://www.instagram.com/neneko.hc/",
    target: "_blank",
    rel: "noopener"
  }, "Instagram"), React.createElement("a", {
    href: "https://unsplash.com/@hanningchen",
    target: "_blank",
    rel: "noopener"
  }, "Unsplash")))), React.createElement("div", {
    className: "wrap sf-copy"
  }, React.createElement("span", null, "Copyright \xA9 2026 All rights reserved.")));
}
window.Home = Home;
window.SiteFooter = SiteFooter;
/* Exhibition.jsx */
function ExWall({
  lang,
  compact,
  reduced
}) {
  const L = window.COPY[lang];
  const ref = useRef(null);
  const p0 = useProgress(ref);
  const p = reduced ? 0 : easeIO2(clamp01(p0 * 1.25));
  const vertical = lang !== 'en';
  const a = compact ? 'translateY(' + -p * 105 + '%)' : 'translateX(' + -p * 105 + '%)';
  const b = compact ? 'translateY(' + p * 105 + '%)' : 'translateX(' + p * 105 + '%)';
  return React.createElement("section", {
    ref: ref,
    className: 'ex-wall-wrap' + (reduced ? ' is-static' : ''),
    "data-screen-label": "Exhibition title wall"
  }, React.createElement("div", {
    className: "ex-wall-sticky"
  }, React.createElement("div", {
    className: "ex-hall-peek",
    style: {
      opacity: .4 + p * .6
    }
  }, React.createElement("span", null, L.room, " 01 \u2192")), React.createElement("div", {
    className: "ex-wall ex-wall-a",
    style: {
      transform: a
    }
  }, React.createElement("h1", {
    className: 'ex-title' + (vertical ? ' tategaki' : '')
  }, L.exWall)), React.createElement("div", {
    className: "ex-wall ex-wall-b",
    style: {
      transform: b
    }
  }, React.createElement("span", {
    className: "ex-kicker"
  }, "NENEKO'S PROFILE"), React.createElement("p", {
    className: "ex-statement"
  }, L.exStatement), React.createElement("p", {
    className: "ex-period"
  }, L.exPeriod), React.createElement("p", {
    className: "ex-hint",
    style: {
      opacity: 1 - p * 3
    }
  }, React.createElement(Icon, {
    name: "arrow-down",
    size: 16
  }), L.scrollHint))));
}
const easeIO2 = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
function Room({
  r,
  i,
  lang,
  light,
  onOpen,
  id
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  return React.createElement("article", {
    className: "room",
    id: id,
    "data-screen-label": '展間 ' + r.n
  }, React.createElement("div", {
    className: "room-sky",
    style: {
      opacity: .35 + light * .65
    }
  }), React.createElement("div", {
    className: "room-num"
  }, React.createElement("span", null, L.room), React.createElement("b", null, r.n)), React.createElement("button", {
    className: "room-photo",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + r.title
  }, React.createElement(NS.PhotoFrame, {
    ratio: "3 / 2",
    label: '展間 ' + r.n + ' · 主視覺 · 待替換'
  }), React.createElement("span", {
    className: "room-photo-cta"
  }, L.viewDetail, React.createElement(Icon, {
    name: "plus",
    size: 14
  }))), React.createElement(NS.Plaque, {
    number: L.room + ' ' + r.n,
    year: r.year,
    title: r.title,
    client: r.client[lang],
    role: r.role[lang],
    note: L.placeholder,
    labels: {
      client: L.client,
      role: L.role
    },
    style: {
      alignSelf: 'end'
    }
  }), React.createElement("div", {
    className: "room-dark",
    style: {
      opacity: (1 - light) * .55
    }
  }));
}
function RoomM({
  r,
  i,
  lang,
  onOpen
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const ref = useRef(null);
  const v = useInView(ref, {
    threshold: .2,
    once: true
  });
  return React.createElement("article", {
    ref: ref,
    className: 'room-m' + (v ? ' is-in' : ''),
    id: 'room-' + r.id,
    "data-screen-label": '展間 ' + r.n
  }, React.createElement("div", {
    className: "room-sky",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "room-num"
  }, React.createElement("span", null, L.room), React.createElement("b", null, r.n)), React.createElement("button", {
    className: "room-photo",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + r.title
  }, React.createElement(NS.PhotoFrame, {
    ratio: "3 / 2",
    label: '展間 ' + r.n + ' · 主視覺 · 待替換'
  }), React.createElement("span", {
    className: "room-photo-cta"
  }, L.viewDetail, React.createElement(Icon, {
    name: "plus",
    size: 14
  }))), React.createElement(NS.Plaque, {
    number: L.room + ' ' + r.n,
    year: r.year,
    title: tx(r.title),
    client: r.client[lang],
    role: r.role[lang],
    note: L.placeholder,
    labels: {
      client: L.client,
      role: L.role
    },
    style: {
      maxWidth: 'none'
    }
  }));
}
function RoomDetail({
  r,
  lang,
  onClose
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t0 = setTimeout(() => setOn(true), 20);
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', k);
      document.body.style.overflow = '';
      clearTimeout(t0);
    };
  }, []);
  return React.createElement("div", {
    className: "detail",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": r.title,
    style: {
      opacity: on ? 1 : 0
    }
  }, React.createElement("div", {
    className: "detail-hero",
    style: {
      transform: on ? 'none' : 'scale(.82)'
    }
  }, React.createElement(NS.PhotoFrame, {
    ratio: "16 / 9",
    shape: "square",
    label: '展間 ' + r.n + ' · 全屏主視覺 · 待替換',
    style: {
      borderRadius: 0
    }
  })), React.createElement("div", {
    className: "detail-body wrap"
  }, React.createElement("button", {
    className: "detail-close",
    onClick: onClose
  }, React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), L.back), React.createElement("span", {
    className: "detail-num"
  }, L.room, " ", r.n, " \xB7 ", r.year), React.createElement("h2", null, tx(r.title)), React.createElement("p", {
    className: "detail-meta"
  }, React.createElement("span", {
    className: "dm"
  }, L.client, "\uFF1A", r.client[lang]), React.createElement("span", {
    className: "dm"
  }, L.role, "\uFF1A", r.role[lang])), React.createElement("div", {
    className: "detail-cols"
  }, [L.challenge, L.approach, L.result].map(h => React.createElement("div", {
    key: h
  }, React.createElement("h3", null, h), React.createElement("p", null, L.placeholder)))), React.createElement("div", {
    className: "detail-photos"
  }, [1, 2, 3].map(n => React.createElement(NS.PhotoFrame, {
    key: n,
    ratio: "4 / 3",
    label: '展間 ' + r.n + ' · 照片 0' + n
  })))));
}
function Exhibition({
  lang
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const rooms = window.ROOMS;
  const compact = useCompact();
  const narrow = useMedia('(max-width: 1099px)');
  const reduced = useReduced();
  const vertical = compact || reduced;
  const gRef = useRef(null);
  const p = useProgress(gRef);
  const scrolling = useScrolling();
  const inDesk = useHideZones();
  const [vw, setVw] = useState(window.innerWidth);
  const [cur, setCur] = useState('r01');
  const [visited, setVisited] = useState([]);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const f = () => setVw(window.innerWidth);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const roomW = Math.min(vw * .9, 1320),
    padX = (vw - roomW) / 2;
  const trackW = rooms.length * roomW + padX * 2;
  const pos = p * (rooms.length - 1);
  useEffect(() => {
    if (vertical) return;
    const r = rooms[Math.round(pos)].id;
    setCur(r);
  }, [pos, vertical]);
  useEffect(() => {
    if (vertical) return;
    if (p > .001 || gRef.current.getBoundingClientRect().top < 2) setVisited(v => v.includes(cur) ? v : [...v, cur]);
  }, [cur, p]);
  useEffect(() => {
    if (!vertical) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id.replace('room-', '');
        setCur(id);
        setVisited(v => v.includes(id) ? v : [...v, id]);
      }
    }), {
      threshold: .55
    });
    rooms.forEach(r => {
      const el = document.getElementById('room-' + r.id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, [vertical]);
  const jump = id => {
    const i = rooms.findIndex(r => r.id === id);
    if (vertical) return scrollToId('room-' + id);
    const el = gRef.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + span * (i / (rooms.length - 1)) + 2,
      behavior: reduced ? 'auto' : 'smooth'
    });
  };
  return React.createElement("main", {
    className: 'exhibition' + (compact ? ' ex-m' : '')
  }, compact ? React.createElement("section", {
    className: "ex-intro",
    "data-screen-label": "Exhibition title wall"
  }, React.createElement("h1", {
    className: 'ex-title' + (lang !== 'en' ? ' tategaki' : '')
  }, L.exWall), React.createElement("span", {
    className: "ex-kicker"
  }, "NENEKO'S PROFILE"), React.createElement("p", {
    className: "ex-statement"
  }, L.exStatement), React.createElement("p", {
    className: "ex-period"
  }, L.exPeriod)) : React.createElement(ExWall, {
    lang: lang,
    compact: compact,
    reduced: reduced
  }), compact ? React.createElement("section", {
    className: "gallery-m",
    "data-screen-label": "Exhibition gallery"
  }, rooms.map((r, i) => React.createElement(RoomM, {
    key: r.id,
    r: r,
    i: i,
    lang: lang,
    onOpen: setDetail
  }))) : vertical ? React.createElement("section", {
    className: "gallery-v",
    "data-screen-label": "Exhibition gallery"
  }, rooms.map((r, i) => React.createElement(Room, {
    key: r.id,
    id: 'room-' + r.id,
    r: r,
    i: i,
    lang: lang,
    light: cur === r.id ? 1 : .55,
    onOpen: setDetail
  }))) : React.createElement("section", {
    ref: gRef,
    className: "gallery-h",
    style: {
      height: rooms.length * 100 + 20 + 'vh'
    },
    "data-screen-label": "Exhibition gallery"
  }, React.createElement("div", {
    className: "gallery-sticky"
  }, React.createElement("div", {
    className: "gallery-ceiling",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "gallery-track",
    style: {
      width: trackW,
      paddingLeft: padX,
      transform: 'translateX(' + -p * (trackW - vw) + 'px)'
    }
  }, rooms.map((r, i) => React.createElement("div", {
    key: r.id,
    style: {
      width: roomW,
      flexShrink: 0
    }
  }, React.createElement(Room, {
    id: 'room-' + r.id,
    r: r,
    i: i,
    lang: lang,
    light: clamp01(1 - Math.abs(pos - i) * 1.3),
    onOpen: setDetail
  })))), React.createElement("div", {
    className: "gallery-floor",
    "aria-hidden": "true"
  }))), React.createElement("section", {
    className: "ex-exit wrap",
    "data-screen-label": "Exhibition exit"
  }, React.createElement("div", {
    className: "exit-sign"
  }, React.createElement("span", null, L.exit), React.createElement(Icon, {
    name: "arrow-down",
    size: 18
  }))), React.createElement(ConsultDesk, {
    tone: "exhibit",
    lang: lang
  }), React.createElement("div", {
    className: 'floormap-dock' + (narrow ? ' is-compact' : '') + (compact && (scrolling || inDesk) ? ' is-hidden' : '')
  }, React.createElement(NS.FloorMap, {
    rooms: rooms.map(r => ({
      id: r.id,
      label: L.room + ' ' + r.n
    })),
    current: cur,
    visited: visited,
    onJump: jump,
    title: L.floor,
    labels: {
      entrance: L.entrance,
      exit: L.exit
    },
    collapsible: narrow,
    defaultOpen: !narrow
  })), detail != null && React.createElement(RoomDetail, {
    r: rooms[detail],
    lang: lang,
    onClose: () => setDetail(null)
  }));
}
window.Exhibition = Exhibition;
/* Theatre.jsx */
function TicketM({
  lang,
  reduced
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const [torn, setTorn] = useState(0);
  const done = useRef(false);
  const fmt = () => {
    const d = new Date(),
      z = n => String(n).padStart(2, '0');
    return d.getFullYear() + '.' + z(d.getMonth() + 1) + '.' + z(d.getDate()) + ' — ' + z(d.getHours()) + ':' + z(d.getMinutes());
  };
  const [now, setNow] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setNow(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  const [drape, setDrape] = useState(reduced ? 1 : 0);
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setDrape(1), 350);
    return () => clearTimeout(id);
  }, []);
  const tear = () => {
    if (done.current) return;
    done.current = true;
    if (reduced) {
      setTorn(1);
      return;
    }
    const t0 = performance.now();
    const from = torn;
    const step = n => {
      const k = clamp01((n - t0) / 600);
      setTorn(from + (1 - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  useEffect(() => {
    const f = () => {
      if (done.current) return;
      const k = clamp01(window.scrollY / (window.innerHeight * .4));
      if (reduced) {
        if (k > .05) {
          done.current = true;
          setTorn(1);
        }
        return;
      }
      setTorn(k);
      if (k >= 1) done.current = true;
    };
    f();
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return React.createElement("section", {
    className: "ticket-m",
    "data-screen-label": "Theatre ticket"
  }, React.createElement("div", {
    className: "th-valance",
    "aria-hidden": "true"
  }), React.createElement(NS.Curtain, {
    open: drape,
    valance: false,
    duration: reduced ? undefined : 1400,
    style: {
      top: 22
    }
  }), React.createElement("button", {
    className: "ticket-btn",
    onClick: tear,
    "aria-label": L.tearHintM
  }, React.createElement(NS.Ticket, {
    title: L.thTicket,
    sub: L.ticketSub,
    date: now,
    seat: "\u4E00\u968E \u308D\u5217 7\u756A",
    no: "No. 000127",
    admit: L.admit,
    stubLabel: L.stub,
    torn: torn
  })), React.createElement("p", {
    className: "th-hint",
    style: {
      opacity: torn > 0 ? 0 : 1
    }
  }, React.createElement(Icon, {
    name: "arrow-down",
    size: 16
  }), L.tearHintM));
}
function ActM({
  a,
  i,
  lang,
  onOpen
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  return React.createElement(Reveal, {
    as: "article",
    className: "act-m",
    id: 'act-' + a.id,
    "data-screen-label": a.n.zh
  }, React.createElement("span", {
    className: "act-num"
  }, a.n[lang]), React.createElement("div", {
    className: "act-photo-m"
  }, React.createElement("button", {
    className: "room-photo act-photo-btn",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + a.title
  }, React.createElement(NS.PhotoFrame, {
    tone: "night",
    shape: "square",
    ratio: "16 / 9",
    label: a.n.zh + ' · 舞台照 · 待替換',
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  }), React.createElement("span", {
    className: "room-photo-cta is-th"
  }, L.viewDetail, React.createElement(Icon, {
    name: "plus",
    size: 14
  })))), React.createElement(NS.Playbill, {
    year: a.year,
    title: tx(a.title),
    rows: [{
      k: L.team,
      v: tx(a.team[lang])
    }, {
      k: L.role,
      v: a.role[lang]
    }]
  }));
}
function ActDetail({
  a,
  next,
  lang,
  onClose,
  onNext
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const T = L.thd;
  const [on, setOn] = useState(false);
  const box = useRef(null);
  useEffect(() => {
    const t0 = setTimeout(() => setOn(true), 20);
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', k);
      document.body.style.overflow = '';
      clearTimeout(t0);
    };
  }, []);
  useEffect(() => {
    if (box.current) box.current.scrollTop = 0;
  }, [a.id]);
  const cols = [[T.origin, T.photoOrigin], [T.production, T.photoProd], [T.performance, T.photoPerf]];
  return React.createElement("div", {
    ref: box,
    className: "detail detail-th",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": a.title,
    style: {
      opacity: on ? 1 : 0
    }
  }, React.createElement("div", {
    className: "detail-body wrap"
  }, React.createElement("button", {
    className: "detail-close",
    onClick: onClose
  }, React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), T.back), React.createElement("span", {
    className: "detail-num"
  }, a.n[lang], "\u30FB", a.year), React.createElement("h2", null, tx(a.title)), React.createElement("p", {
    className: "detail-meta"
  }, React.createElement("span", {
    className: "dm"
  }, L.team, "\uFF1A", tx(a.team[lang])), React.createElement("span", {
    className: "dm"
  }, T.venue, "\uFF1A", T.tbc), React.createElement("span", {
    className: "dm"
  }, L.role, "\uFF1A", a.role[lang])), React.createElement("div", {
    className: "detail-hero"
  }, React.createElement(NS.PhotoFrame, {
    tone: "night",
    ratio: "16 / 9",
    shape: "square",
    label: a.n.zh + ' · 主視覺 · 待替換',
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  })), React.createElement("div", {
    className: "detail-cols"
  }, cols.map(([h, ph]) => React.createElement("div", {
    key: h,
    className: "thd-col"
  }, React.createElement("h3", null, h), React.createElement("p", null, L.placeholder), React.createElement(NS.PhotoFrame, {
    tone: "night",
    ratio: "4 / 3",
    label: ph + ' · 待替換'
  })))), React.createElement("section", {
    className: "thd-cast",
    "aria-label": T.cast
  }, React.createElement("h3", null, T.cast), React.createElement("dl", null, T.castRoles.map((r, n) => React.createElement("div", {
    key: n
  }, React.createElement("dt", null, r), React.createElement("span", {
    "aria-hidden": "true"
  }), React.createElement("dd", null, n === 0 ? 'NENEKO' : T.tbc))))), React.createElement("button", {
    className: "thd-next",
    onClick: onNext
  }, React.createElement("span", null, React.createElement("small", null, T.next), next.n[lang], "\u3000", next.title), React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  }))));
}
function BowM({
  lang
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const reduced = useReduced();
  const ref = useRef(null);
  const v = useInView(ref, {
    threshold: .45,
    once: true
  });
  return React.createElement("section", {
    ref: ref,
    className: 'bow-m bow-rise' + (v ? ' is-up' : ''),
    id: "bow",
    "data-screen-label": "Theatre curtain call"
  }, React.createElement("div", {
    className: "bow-stage"
  }, React.createElement("span", {
    className: "bow-label"
  }, L.curtainCall), React.createElement("h2", null, tx(L.bowTitle)), React.createElement("p", null, L.bowSub)), React.createElement(NS.Curtain, {
    open: reduced ? 0 : v ? 0 : 1,
    valance: false,
    duration: reduced ? undefined : 1400,
    style: {
      top: 22,
      zIndex: 1
    }
  }), React.createElement("div", {
    className: "th-valance bow-valance",
    "aria-hidden": "true"
  }));
}
function Theatre({
  lang
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  const acts = window.ACTS;
  const compact = useCompact();
  const narrow = useMedia('(max-width: 1099px)');
  const reduced = useReduced();
  const [cur, setCur] = useState(null);
  const [detail, setDetail] = useState(null);
  const scrolling = useScrolling();
  const inDesk = useHideZones();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setCur(e.target.id === 'bow' ? 'bow' : e.target.id.replace('act-', ''));
    }), {
      threshold: .5
    });
    document.querySelectorAll('.act-m, #bow').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  const navActs = [...acts.map(a => ({
    id: a.id,
    label: a.n[lang],
    title: a.title
  })), {
    id: 'bow',
    label: L.curtainCall,
    title: '20% 實驗劇坊'
  }];
  const jump = id => scrollToId(id === 'bow' ? 'bow' : 'act-' + id);
  return React.createElement("main", {
    className: "theatre th-m"
  }, React.createElement(TicketM, {
    lang: lang,
    reduced: reduced
  }), React.createElement("section", {
    className: "acts-m",
    "data-screen-label": "Theatre acts"
  }, React.createElement(Reveal, {
    className: "overture-beam",
    "aria-hidden": "false"
  }, React.createElement("div", {
    className: "beam",
    "aria-hidden": "true"
  }), React.createElement("p", {
    className: "overture-m"
  }, L.overture)), acts.map((a, i) => React.createElement(ActM, {
    key: a.id,
    a: a,
    i: i,
    lang: lang,
    onOpen: setDetail
  }))), React.createElement(BowM, {
    lang: lang
  }), React.createElement("section", {
    className: "lobby wrap",
    "data-screen-label": "Theatre lobby"
  }, React.createElement("span", {
    className: "label"
  }, "Lobby"), React.createElement("h2", null, L.lobby)), React.createElement(ConsultDesk, {
    tone: "theatre",
    lang: lang
  }), React.createElement("div", {
    className: 'program-dock' + (narrow ? ' is-compact' : '') + (compact && (scrolling || inDesk) ? ' is-hidden' : '')
  }, React.createElement(NS.ProgramNav, {
    acts: navActs,
    current: cur,
    onJump: jump,
    title: L.program,
    collapsible: narrow,
    defaultOpen: !narrow
  })), detail != null && React.createElement(ActDetail, {
    a: acts[detail],
    next: acts[(detail + 1) % acts.length],
    lang: lang,
    onClose: () => setDetail(null),
    onNext: () => setDetail((detail + 1) % acts.length)
  }));
}
function ThHeader({
  lang,
  onLang,
  onConsult,
  onBrand,
  light,
  ex
}) {
  const L = window.COPY[lang];
  const NS = window.NS;
  return React.createElement("header", {
    className: 'th-header' + (light ? ' is-light' : '') + (ex ? ' is-ex' : '')
  }, React.createElement("button", {
    className: "thh-brand",
    onClick: onBrand
  }, "NENEKO"), React.createElement("div", {
    className: "thh-row"
  }, React.createElement(NS.LangSwitch, {
    value: lang,
    onChange: onLang,
    dark: !light && !ex
  }), React.createElement("button", {
    className: "thh-consult",
    onClick: onConsult
  }, L.consult)));
}
window.Theatre = Theatre;
window.ThHeader = ThHeader;
/* App.jsx */
const pageUrl = (p, a) => './' + (p === 'home' ? 'index' : p) + '.html' + (a ? '#' + a : '');
function App() {
  const NS = window.NS;
  const page = window.__START || 'home';
  const [lang, setLang] = useState(() => localStorage.getItem('nh-lang') || 'zh');
  const [veil, setVeil] = useState(false);
  const [sky, setSky] = useState('dusk');
  const [top, setTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const compact = useCompact();
  useEffect(() => {
    const f = e => setSky(e.detail);
    const g = () => {
      setTop(window.scrollY < window.innerHeight * .8);
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('nh-sky', f);
    window.addEventListener('scroll', g, {
      passive: true
    });
    return () => {
      window.removeEventListener('nh-sky', f);
      window.removeEventListener('scroll', g);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem('nh-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
  }, [lang]);
  useEffect(() => {
    const f = e => {
      if (e.persisted) setVeil(false);
    };
    window.addEventListener('pageshow', f);
    return () => window.removeEventListener('pageshow', f);
  }, []);
  useEffect(() => {
    const h = location.hash.slice(1);
    if (h && !['home', 'exhibition', 'theatre'].includes(h)) setTimeout(() => scrollToId(h, false), 700);
  }, []);
  const go = (p, anchor) => {
    if (p === page) {
      anchor ? scrollToId(anchor) : window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    setVeil(true);
    setTimeout(() => {
      location.href = pageUrl(p, anchor);
    }, 280);
  };
  const tone = page === 'exhibition' ? 'exhibit' : page === 'theatre' ? 'theatre' : 'ink';
  const consult = () => scrollToId(page === 'home' ? 'home-consult' : 'consult');
  return React.createElement(React.Fragment, null, React.createElement(NS.SiteHeader, {
    lang: lang,
    onLang: setLang,
    tone: tone,
    dark: !(compact && scrolled) && (page === 'theatre' || page === 'home' && sky === 'night' && top),
    onConsult: consult,
    onBrand: () => go('home'),
    style: compact && scrolled ? {
      background: 'rgba(250,247,240,.9)',
      WebkitBackdropFilter: 'blur(10px)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 1px 0 var(--line-3)',
      pointerEvents: 'auto',
      padding: '4px var(--gutter)',
      transition: 'background 240ms'
    } : {
      transition: 'background 240ms'
    }
  }), page === 'home' && React.createElement(Home, {
    lang: lang,
    go: go
  }), page === 'exhibition' && React.createElement(Exhibition, {
    lang: lang
  }), page === 'theatre' && React.createElement(Theatre, {
    lang: lang
  }), React.createElement(SiteFooter, {
    lang: lang,
    go: go,
    page: page
  }), React.createElement("div", {
    className: 'page-veil' + (veil ? ' on' : '') + (page === 'theatre' ? ' dark' : '')
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
