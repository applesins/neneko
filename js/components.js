/* @ds-bundle: {"format":4,"namespace":"NENEKOHANNINGDesignSystem_57fc37","components":[{"name":"ContactForm","sourcePath":"components/consult/ContactForm.jsx"},{"name":"CurrencyToggle","sourcePath":"components/consult/CurrencyToggle.jsx"},{"name":"LetterCard","sourcePath":"components/consult/LetterCard.jsx"},{"name":"Noren","sourcePath":"components/consult/Noren.jsx"},{"name":"PriceCard","sourcePath":"components/consult/PriceCard.jsx"},{"name":"ProcessSteps","sourcePath":"components/consult/ProcessSteps.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LANGS","sourcePath":"components/core/LangSwitch.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"FloorMap","sourcePath":"components/exhibit/FloorMap.jsx"},{"name":"Plaque","sourcePath":"components/exhibit/Plaque.jsx"},{"name":"Curtain","sourcePath":"components/theatre/Curtain.jsx"},{"name":"Playbill","sourcePath":"components/theatre/Playbill.jsx"},{"name":"ProgramNav","sourcePath":"components/theatre/ProgramNav.jsx"},{"name":"Ticket","sourcePath":"components/theatre/Ticket.jsx"}],"sourceHashes":{"components/consult/ContactForm.jsx":"e4798c9038fa","components/consult/CurrencyToggle.jsx":"997118d2d365","components/consult/LetterCard.jsx":"762935cfebec","components/consult/Noren.jsx":"b1561ea60e9e","components/consult/PriceCard.jsx":"6c3974e972e1","components/consult/ProcessSteps.jsx":"81050eadfce4","components/core/Button.jsx":"18a6339fafcc","components/core/LangSwitch.jsx":"27e6d31f454d","components/core/PhotoFrame.jsx":"a62535526eb1","components/core/SectionHeading.jsx":"19ab79009681","components/core/SiteHeader.jsx":"e9b9cf80f402","components/core/Stamp.jsx":"c2c5aae7f878","components/exhibit/FloorMap.jsx":"d0afedfb7479","components/exhibit/Plaque.jsx":"8f249a341562","components/theatre/Curtain.jsx":"7c56876f50e2","components/theatre/Playbill.jsx":"c0374e9420c9","components/theatre/ProgramNav.jsx":"8424b50a0171","components/theatre/Ticket.jsx":"7949894fe5e8","neneko-site/js/app.js":"65e435997ae3","neneko-site/js/components.js":"94ab86847292","neneko-site/js/i18n.js":"58fbd48ca859","ui_kits/portfolio/App.jsx":"9270ff555283","ui_kits/portfolio/ConsultDesk.jsx":"5f9ca33e9950","ui_kits/portfolio/Exhibition.jsx":"837bcc9a8424","ui_kits/portfolio/Home.jsx":"88b26e17bc1f","ui_kits/portfolio/Intro.jsx":"dfa69b6139c2","ui_kits/portfolio/Street.jsx":"e85822b9b97d","ui_kits/portfolio/Theatre.jsx":"cab478968fa2","ui_kits/portfolio/hooks.jsx":"7b0f36d1c2f8","ui_kits/portfolio/i18n.js":"58fbd48ca859"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NENEKOHANNINGDesignSystem_57fc37 = window.NENEKOHANNINGDesignSystem_57fc37 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/consult/ContactForm.jsx
try { (() => {
const {
  useState
} = React;
const TC = {
  exhibit: {
    c: 'var(--matcha-1)',
    d: 'var(--matcha-2)',
    t: 'var(--matcha-4)'
  },
  theatre: {
    c: 'var(--shu-1)',
    d: 'var(--shu-2)',
    t: 'var(--shu-4)'
  },
  ink: {
    c: 'var(--ink-1)',
    d: 'var(--ink-2)',
    t: 'var(--paper-2)'
  }
};
const L0 = {
  name: '姓名',
  org: '單位',
  type: '類型',
  types: ['展場', '劇場', '其他'],
  budget: '預算區間',
  budgets: ['未定', 'NT$ 5 萬以下', 'NT$ 5–20 萬', 'NT$ 20–50 萬', 'NT$ 50 萬以上'],
  timeline: '時程',
  timelineHint: '例：2027 年春季開幕',
  message: '說明',
  submit: '送出',
  sent: '已送出，2 個工作天內回覆。'
};
const field = {
  width: '100%',
  minHeight: 48,
  padding: '10px 14px',
  boxSizing: 'border-box',
  border: '1px solid var(--line-2)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--paper-0)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  color: 'var(--ink-1)',
  outline: 'none'
};
function Row({
  label,
  children,
  full
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      gridColumn: full ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      color: 'var(--ink-3)'
    }
  }, label), children);
}
function ContactForm({
  labels,
  tone = 'exhibit',
  defaultType = 0,
  onSubmit,
  style
}) {
  const L = {
    ...L0,
    ...labels
  };
  const t = TC[tone] || TC.exhibit;
  const [type, setType] = useState(defaultType);
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(Object.fromEntries(new FormData(e.target)));
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
      gap: '20px 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: L.name
  }, /*#__PURE__*/React.createElement("input", {
    name: "name",
    style: field
  })), /*#__PURE__*/React.createElement(Row, {
    label: L.org
  }, /*#__PURE__*/React.createElement("input", {
    name: "org",
    style: field
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.14em',
      color: 'var(--ink-3)'
    }
  }, L.type), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, L.types.map((x, i) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: i,
    role: "radio",
    "aria-checked": type === i,
    onClick: () => setType(i),
    style: {
      minHeight: 44,
      padding: '0 20px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid ' + (type === i ? t.c : 'var(--line-2)'),
      background: type === i ? t.c : 'var(--paper-0)',
      color: type === i ? 'var(--paper-0)' : 'var(--ink-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, x))), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "type",
    value: L.types[type]
  })), /*#__PURE__*/React.createElement(Row, {
    label: L.budget
  }, /*#__PURE__*/React.createElement("select", {
    name: "budget",
    style: {
      ...field,
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(-45deg, transparent 50%, var(--ink-3) 50%)',
      backgroundSize: '5px 5px',
      backgroundPosition: 'calc(100% - 20px) 50%, calc(100% - 15px) 50%',
      backgroundRepeat: 'no-repeat'
    }
  }, L.budgets.map(b => /*#__PURE__*/React.createElement("option", {
    key: b
  }, b)))), /*#__PURE__*/React.createElement(Row, {
    label: L.timeline
  }, /*#__PURE__*/React.createElement("input", {
    name: "timeline",
    placeholder: L.timelineHint,
    style: field
  })), /*#__PURE__*/React.createElement(Row, {
    label: L.message,
    full: true
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: 5,
    style: {
      ...field,
      resize: 'vertical',
      lineHeight: 1.7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      minHeight: 48,
      padding: '0 32px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid ' + t.c,
      background: 'transparent',
      color: t.c,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      letterSpacing: '.1em',
      cursor: 'pointer'
    }
  }, L.submit), sent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: t.c
    }
  }, L.sent)));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/consult/CurrencyToggle.jsx
try { (() => {
function CurrencyToggle({
  value = 'TWD',
  onChange,
  options = [{
    id: 'TWD',
    label: 'NT$'
  }, {
    id: 'JPY',
    label: 'JPY'
  }],
  tone = 'ink',
  style
}) {
  const c = tone === 'exhibit' ? 'var(--matcha-1)' : tone === 'theatre' ? 'var(--shu-1)' : 'var(--ink-1)';
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Currency",
    style: {
      display: 'inline-flex',
      padding: 3,
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--line-2)',
      background: 'var(--paper-0)',
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => onChange && onChange(o.id),
    "aria-pressed": value === o.id,
    style: {
      minHeight: 44,
      minWidth: 56,
      padding: '0 14px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.08em',
      background: value === o.id ? c : 'transparent',
      color: value === o.id ? 'var(--paper-0)' : 'var(--ink-2)',
      transition: 'background var(--dur-base), color var(--dur-base)'
    }
  }, o.label)));
}
Object.assign(__ds_scope, { CurrencyToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/CurrencyToggle.jsx", error: String((e && e.message) || e) }); }

// components/consult/LetterCard.jsx
try { (() => {
const TC = {
  exhibit: {
    c: 'var(--matcha-1)',
    d: 'var(--matcha-2)',
    t: 'var(--matcha-4)'
  },
  theatre: {
    c: 'var(--shu-1)',
    d: 'var(--shu-2)',
    t: 'var(--shu-4)'
  },
  ink: {
    c: 'var(--ink-1)',
    d: 'var(--ink-2)',
    t: 'var(--paper-2)'
  }
};
function LetterCard({
  quote,
  name,
  role,
  org,
  placeholder = false,
  placeholderLabel = '待替換',
  tilt = 0,
  tone = 'exhibit',
  width = 240,
  style
}) {
  const t = TC[tone] || TC.exhibit;
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      width,
      minHeight: width * 1.9,
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '44px 24px 24px',
      boxSizing: 'border-box',
      background: 'var(--paper-0)',
      backgroundImage: 'repeating-linear-gradient(transparent 0 31px, ' + t.t + ' 31px 32px)',
      backgroundPosition: '0 52px',
      backgroundClip: 'content-box',
      boxShadow: 'var(--shadow-paper)',
      borderRadius: 'var(--radius-xs)',
      transform: 'rotate(' + tilt + 'deg)',
      transformOrigin: '50% 0',
      transition: 'transform var(--dur-slow) var(--ease-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 16,
      left: 24,
      right: 24,
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 8,
      background: 'var(--karashi-1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: '1px solid ' + t.c,
      opacity: .5
    }
  })), placeholder && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 12,
      fontSize: 10,
      letterSpacing: '.12em',
      color: t.c,
      border: '1px dashed ' + t.c,
      padding: '1px 6px',
      borderRadius: 4,
      background: 'var(--paper-0)'
    }
  }, placeholderLabel), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      lineHeight: '32px',
      color: 'var(--ink-1)',
      letterSpacing: '.04em',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--ink-1)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--ink-3)'
    }
  }, [role, org].filter(Boolean).join('｜'))));
}
Object.assign(__ds_scope, { LetterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/LetterCard.jsx", error: String((e && e.message) || e) }); }

// components/consult/Noren.jsx
try { (() => {
const {
  useState
} = React;
const TC = {
  exhibit: {
    c: 'var(--matcha-1)',
    d: 'var(--matcha-2)',
    t: 'var(--matcha-4)'
  },
  theatre: {
    c: 'var(--shu-1)',
    d: 'var(--shu-2)',
    t: 'var(--shu-4)'
  },
  ink: {
    c: 'var(--ink-1)',
    d: 'var(--ink-2)',
    t: 'var(--paper-2)'
  }
};
const KF = '@keyframes nh-sway{0%,100%{transform:rotate(0deg) skewX(0deg)}30%{transform:rotate(1.4deg) skewX(-1deg)}70%{transform:rotate(-1deg) skewX(.8deg)}}';
function Noren({
  label = '相談',
  sub,
  tone = 'exhibit',
  open: openProp,
  onOpen,
  sway = true,
  height = 280,
  style
}) {
  const [hover, setHover] = useState(false);
  const [self, setSelf] = useState(false);
  const open = openProp ?? self;
  const t = TC[tone] || TC.exhibit;
  const chars = Array.from(label);
  const n = Math.max(2, chars.length);
  const toggle = () => {
    setSelf(true);
    onOpen && onOpen();
  };
  const part = hover && !open ? 14 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 560,
      margin: '0 auto',
      height,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, KF), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: -12,
      right: -12,
      height: 10,
      borderRadius: 10,
      background: 'var(--wood-3)',
      zIndex: 2,
      opacity: open ? 0 : 1,
      transition: 'opacity var(--dur-slow) var(--ease-out) 200ms'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": open,
    style: {
      position: 'absolute',
      inset: '6px 0 0',
      display: 'flex',
      gap: 4,
      padding: 0,
      border: 0,
      background: 'none',
      cursor: 'pointer'
    }
  }, Array.from({
    length: n
  }).map((_, i) => {
    const side = i < n / 2 ? -1 : 1;
    const centre = i - (n - 1) / 2;
    const tf = open ? 'translateX(' + side * 120 + '%) rotate(' + side * 6 + 'deg)' : 'translateX(' + (centre === 0 ? 0 : Math.sign(centre) * part) + 'px)';
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height: '100%',
        transformOrigin: 'top center',
        transform: tf,
        opacity: open ? 0 : 1,
        transition: 'transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: t.c,
        borderRadius: '0 0 3px 3px',
        transformOrigin: 'top center',
        animation: sway && !open ? 'nh-sway ' + (5 + i * .7) + 's ease-in-out ' + -i * 1.3 + 's infinite' : 'none',
        boxShadow: 'inset 0 -14px 0 -8px rgba(0,0,0,.08)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: Math.min(88, height * .3),
        color: 'var(--paper-0)',
        fontWeight: 500
      }
    }, chars[i] || '')));
  })), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -36,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.24em',
      color: 'var(--ink-3)',
      opacity: open ? 0 : 1,
      transition: 'opacity var(--dur-base)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Noren });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/Noren.jsx", error: String((e && e.message) || e) }); }

// components/consult/PriceCard.jsx
try { (() => {
const TC = {
  exhibit: {
    c: 'var(--matcha-1)',
    d: 'var(--matcha-2)',
    t: 'var(--matcha-4)'
  },
  theatre: {
    c: 'var(--shu-1)',
    d: 'var(--shu-2)',
    t: 'var(--shu-4)'
  },
  ink: {
    c: 'var(--ink-1)',
    d: 'var(--ink-2)',
    t: 'var(--paper-2)'
  }
};
function PriceCard({
  index,
  title,
  desc,
  price,
  unit,
  tone = 'exhibit',
  visible = true,
  delay = 0,
  style
}) {
  const t = TC[tone] || TC.exhibit;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '36px 26px 28px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--wood-1)',
      backgroundImage: 'repeating-linear-gradient(92deg, rgba(138,110,69,.08) 0 2px, transparent 2px 9px, rgba(138,110,69,.05) 9px 10px, transparent 10px 23px)',
      boxShadow: 'var(--shadow-paper), inset 0 0 0 1px rgba(138,110,69,.25)',
      color: 'var(--ink-1)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(28px)',
      transition: 'opacity var(--dur-slow) var(--ease-out) ' + delay + 'ms, transform var(--dur-slow) var(--ease-out) ' + delay + 'ms',
      minHeight: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      width: 8,
      height: 8,
      marginLeft: -4,
      borderRadius: 8,
      background: 'var(--wood-3)',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,.4)'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.24em',
      color: t.c
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '.06em',
      color: 'var(--ink-1)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.8,
      color: 'var(--ink-2)',
      flex: 1,
      textWrap: 'pretty'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(138,110,69,.45)',
      paddingTop: 14,
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '2px 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      fontWeight: 600,
      color: t.d,
      letterSpacing: '.02em'
    }
  }, price), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)'
    }
  }, unit)));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/consult/ProcessSteps.jsx
try { (() => {
const {
  useRef,
  useState,
  useEffect
} = React;
const TC = {
  exhibit: {
    c: 'var(--matcha-1)',
    d: 'var(--matcha-2)',
    t: 'var(--matcha-4)'
  },
  theatre: {
    c: 'var(--shu-1)',
    d: 'var(--shu-2)',
    t: 'var(--shu-4)'
  },
  ink: {
    c: 'var(--ink-1)',
    d: 'var(--ink-2)',
    t: 'var(--paper-2)'
  }
};
function ProcessSteps({
  steps = [],
  tone = 'exhibit',
  direction = 'auto',
  style
}) {
  const ref = useRef(null);
  const [w, setW] = useState(800);
  const t = TC[tone] || TC.exhibit;
  useEffect(() => {
    if (!ref.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const vert = direction === 'vertical' || direction === 'auto' && w < 560;
  return /*#__PURE__*/React.createElement("ol", {
    ref: ref,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: vert ? '1fr' : 'repeat(' + steps.length + ', minmax(0,1fr))',
      gap: vert ? 28 : 12,
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: vert ? {
      position: 'absolute',
      left: 21,
      top: 22,
      bottom: 22,
      borderLeft: '1px solid var(--line-2)'
    } : {
      position: 'absolute',
      left: 'calc(100% / ' + steps.length * 2 + ')',
      right: 'calc(100% / ' + steps.length * 2 + ')',
      top: 22,
      borderTop: '1px solid var(--line-2)'
    }
  }), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: vert ? 'row' : 'column',
      alignItems: vert ? 'flex-start' : 'center',
      gap: vert ? 18 : 14,
      textAlign: vert ? 'left' : 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 44,
      border: '1px solid ' + t.c,
      background: 'var(--paper-1)',
      color: t.c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 16
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--ink-1)',
      letterSpacing: '.08em'
    }
  }, s.label), s.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      color: 'var(--ink-3)'
    }
  }, s.note)))));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/consult/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const TONES = {
  ink: {
    bg: 'var(--ink-1)',
    bgH: 'var(--ink-2)',
    fg: 'var(--paper-0)'
  },
  exhibit: {
    bg: 'var(--matcha-1)',
    bgH: 'var(--matcha-2)',
    fg: 'var(--paper-0)'
  },
  theatre: {
    bg: 'var(--shu-1)',
    bgH: 'var(--shu-2)',
    fg: 'var(--paper-0)'
  },
  paper: {
    bg: 'var(--paper-0)',
    bgH: 'var(--paper-2)',
    fg: 'var(--ink-1)'
  }
};
function Button({
  children,
  variant = 'primary',
  tone = 'ink',
  size = 'md',
  href,
  icon,
  iconRight,
  disabled,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const t = TONES[tone] || TONES.ink;
  const H = size === 'lg' ? 56 : size === 'sm' ? 44 : 48;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    minHeight: H,
    padding: variant === 'ghost' ? '0 4px' : size === 'lg' ? '0 32px' : '0 24px',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'lg' ? 16 : 15,
    fontWeight: 500,
    letterSpacing: '.08em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    border: '1px solid transparent',
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: p && !disabled ? 'scale(.98)' : h && !disabled ? 'translateY(-1px)' : 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  };
  const v = variant === 'primary' ? {
    background: h ? t.bgH : t.bg,
    color: t.fg
  } : variant === 'secondary' ? {
    background: h ? t.bg : 'transparent',
    color: h ? t.fg : tone === 'paper' ? 'var(--paper-0)' : t.bg,
    borderColor: tone === 'paper' ? 'var(--paper-0)' : t.bg
  } : {
    background: 'transparent',
    color: tone === 'paper' ? 'var(--paper-0)' : tone === 'ink' ? 'var(--ink-1)' : t.bg,
    borderRadius: 0,
    borderBottom: '1px solid currentColor',
    minHeight: 44
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    type: href ? undefined : type,
    disabled,
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...base,
      ...v,
      ...style
    },
    ...rest
  }, icon, React.createElement('span', null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/LangSwitch.jsx
try { (() => {
const LANGS = [{
  id: 'zh',
  label: 'CH'
}, {
  id: 'ja',
  label: 'JP'
}, {
  id: 'en',
  label: 'EN'
}];
function LangSwitch({
  value = 'zh',
  onChange,
  options = LANGS,
  dark = false,
  style
}) {
  const fg = dark ? 'var(--night-ink)' : 'var(--ink-1)';
  const mute = dark ? 'var(--night-ink-2)' : 'var(--ink-3)';
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Language",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.06em',
      ...style
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: o.id
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: mute,
      opacity: .6
    }
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange(o.id),
    "aria-pressed": value === o.id,
    style: {
      minHeight: 44,
      minWidth: 44,
      padding: '0 6px',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: value === o.id ? fg : mute,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      position: 'relative'
    }
  }, o.label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 8,
      width: 4,
      height: 4,
      marginLeft: -2,
      borderRadius: 4,
      background: 'var(--karashi-1)',
      opacity: value === o.id ? 1 : 0,
      transition: 'opacity var(--dur-base)'
    }
  })))));
}
Object.assign(__ds_scope, { LANGS, LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoFrame.jsx
try { (() => {
function PhotoFrame({
  src,
  alt = '',
  position = '50% 50%',
  label = 'PHOTO',
  shape = 'rounded',
  ratio = '4 / 3',
  tone = 'paper',
  style,
  children
}) {
  const radius = shape === 'circle' ? '50%' : shape === 'arch' ? '999px 999px var(--radius-md) var(--radius-md)' : shape === 'square' ? 'var(--radius-xs)' : 'var(--radius-lg)';
  const dark = tone === 'night';
  const stripe = dark ? 'repeating-linear-gradient(135deg, #2A2622 0 10px, #24211D 10px 20px)' : 'repeating-linear-gradient(135deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: shape === 'circle' ? '1 / 1' : ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: src ? 'var(--paper-3)' : stripe,
      width: '100%',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11,
      letterSpacing: '.14em',
      color: dark ? 'var(--night-ink-2)' : 'var(--ink-3)',
      textAlign: 'center',
      padding: 12
    }
  }, label), children);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  vertical = false,
  dot = true,
  color = 'var(--ink-1)',
  as = 'h2',
  size = 'h2',
  style
}) {
  const fs = size === 'display' ? 'var(--fs-display)' : size === 'h1' ? 'var(--fs-h1)' : size === 'h3' ? 'var(--fs-h3)' : 'var(--fs-h2)';
  const H = as;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'row-reverse' : 'column',
      alignItems: vertical ? 'flex-start' : 'flex-start',
      gap: vertical ? 16 : 12,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      writingMode: vertical ? 'vertical-rl' : 'horizontal-tb'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: 7,
      background: 'var(--karashi-1)',
      flexShrink: 0
    }
  }), eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: fs,
      lineHeight: vertical ? 1.5 : 1.3,
      letterSpacing: vertical ? '.18em' : '.04em',
      color,
      writingMode: vertical ? 'vertical-rl' : 'horizontal-tb',
      textWrap: 'pretty'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SiteHeader.jsx
try { (() => {
const COPY = {
  zh: '相談',
  ja: '相談',
  en: 'Consult'
};
function SiteHeader({
  lang = 'zh',
  onLang,
  onConsult,
  tone = 'ink',
  dark = false,
  brand = 'NENEKO',
  onBrand,
  consultLabel,
  style
}) {
  const bg = tone === 'exhibit' ? 'var(--matcha-1)' : tone === 'theatre' ? 'var(--shu-1)' : 'var(--ink-1)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 'var(--z-header)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '10px var(--gutter)',
      pointerEvents: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBrand,
    style: {
      pointerEvents: 'auto',
      background: 'none',
      border: 0,
      padding: 0,
      minHeight: 44,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '.12em',
      color: dark ? 'var(--night-ink)' : 'var(--ink-1)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, {
    value: lang,
    onChange: onLang,
    dark: dark
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onConsult,
    style: {
      minHeight: 44,
      minWidth: 64,
      padding: '0 16px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      background: bg,
      color: 'var(--paper-0)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '.12em',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-paper)',
      whiteSpace: 'nowrap'
    }
  }, consultLabel || COPY[lang] || COPY.zh)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function Stamp({
  top,
  main,
  bottom,
  shape = 'circle',
  color = 'var(--shu-1)',
  size = 112,
  rotate = -8,
  inked = true,
  style
}) {
  const r = shape === 'circle' ? '50%' : shape === 'oval' ? '50% / 42%' : 'var(--radius-sm)';
  const w = shape === 'oval' ? size * 1.35 : size;
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": [top, main, bottom].filter(Boolean).join(' '),
    style: {
      width: w,
      height: size,
      borderRadius: r,
      border: '2px solid ' + color,
      color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: 6,
      boxSizing: 'border-box',
      transform: 'rotate(' + rotate + 'deg) scale(' + (inked ? 1 : 1.4) + ')',
      opacity: inked ? .88 : 0,
      transition: 'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast) linear',
      mixBlendMode: 'multiply',
      position: 'relative',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 4,
      borderRadius: r,
      border: '1px solid ' + color,
      opacity: .7
    }
  }), top && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: Math.max(8, size * .085),
      letterSpacing: '.2em',
      fontWeight: 500
    }
  }, top), main && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: size * .2,
      fontWeight: 600,
      letterSpacing: '.08em',
      lineHeight: 1.1,
      textAlign: 'center'
    }
  }, main), bottom && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: Math.max(8, size * .08),
      letterSpacing: '.16em'
    }
  }, bottom));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/exhibit/FloorMap.jsx
try { (() => {
const {
  useState
} = React;
function FloorMap({
  rooms = [],
  current,
  visited = [],
  onJump,
  title = '展場平面圖',
  collapsible = false,
  defaultOpen = true,
  labels = {
    entrance: '入口',
    exit: '出口 EXIT'
  },
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 10,
      letterSpacing: '.16em',
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, labels.entrance, " \u2192"), /*#__PURE__*/React.createElement("span", null, labels.exit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + rooms.length + ', 1fr)',
      border: '1.5px solid var(--ink-1)',
      borderRadius: 2
    }
  }, rooms.map((r, i) => {
    const on = r.id === current;
    const v = visited.includes(r.id);
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      onClick: () => onJump && onJump(r.id),
      "aria-current": on ? 'step' : undefined,
      "aria-label": r.label,
      style: {
        position: 'relative',
        minHeight: 56,
        minWidth: 44,
        padding: 0,
        border: 0,
        borderLeft: i ? '1px solid var(--line-2)' : 0,
        background: on ? 'var(--matcha-4)' : 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 6,
        transition: 'background var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 8,
        left: '50%',
        width: 24,
        height: 24,
        marginLeft: -12,
        borderRadius: 24,
        border: '1.5px solid var(--matcha-1)',
        color: 'var(--matcha-1)',
        fontFamily: 'var(--font-serif)',
        fontSize: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: v ? 'rotate(-12deg) scale(1)' : 'scale(1.6)',
        opacity: v ? .9 : 0,
        transition: 'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast)'
      }
    }, "\u6E08"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 13,
        color: on ? 'var(--matcha-2)' : 'var(--ink-2)'
      }
    }, String(i + 1).padStart(2, '0')));
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 10,
      borderBottom: '1px dashed var(--line-2)',
      position: 'relative'
    }
  }, rooms.findIndex(r => r.id === current) >= 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      left: 'calc(' + (rooms.findIndex(r => r.id === current) + .5) / rooms.length * 100 + '% - 5px)',
      width: 10,
      height: 10,
      borderRadius: 10,
      background: 'var(--karashi-1)',
      transition: 'left var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '.08em'
    }
  }, visited.length, " / ", rooms.length));
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": title,
    style: {
      width: 260,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: collapsible && !open ? 0 : '14px 16px 12px',
      background: 'rgba(250,247,240,.94)',
      border: '1px solid var(--line-3)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lift)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, collapsible ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      width: '100%',
      minHeight: 48,
      padding: open ? '0 0 8px' : '0 16px',
      border: 0,
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--ink-1)',
      letterSpacing: '.1em'
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--matcha-1)'
    }
  }, visited.length, "/", rooms.length, " ", open ? '−' : '+')) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--ink-1)',
      letterSpacing: '.1em',
      marginBottom: 8
    }
  }, title), (!collapsible || open) && body);
}
Object.assign(__ds_scope, { FloorMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/exhibit/FloorMap.jsx", error: String((e && e.message) || e) }); }

// components/exhibit/Plaque.jsx
try { (() => {
function Plaque({
  number,
  year,
  title,
  client,
  role,
  note,
  labels = {
    client: '委託單位',
    role: '我的角色'
  },
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: '100%',
      maxWidth: 300,
      padding: '20px 20px 18px',
      boxSizing: 'border-box',
      background: 'var(--paper-0)',
      border: '1px solid var(--line-3)',
      borderRadius: 'var(--radius-xs)',
      boxShadow: '0 1px 0 rgba(30,28,25,.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.22em',
      color: 'var(--matcha-1)',
      fontWeight: 500
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.5,
      fontWeight: 600,
      color: 'var(--ink-1)',
      letterSpacing: '.04em',
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '4px 12px',
      fontSize: 12.5,
      lineHeight: 1.6,
      borderTop: '1px solid var(--line-3)',
      paddingTop: 10
    }
  }, client && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--ink-3)'
    }
  }, labels.client), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--ink-1)'
    }
  }, client)), role && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--ink-3)'
    }
  }, labels.role), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--ink-1)'
    }
  }, role))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.8,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, note));
}
Object.assign(__ds_scope, { Plaque });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/exhibit/Plaque.jsx", error: String((e && e.message) || e) }); }

// components/theatre/Curtain.jsx
try { (() => {
const fold = 'repeating-linear-gradient(90deg, var(--shu-5) 0, var(--shu-2) 4%, var(--shu-1) 8%, var(--shu-3) 10%, var(--shu-1) 12%, var(--shu-2) 16%, var(--shu-5) 20%)';
function Curtain({
  open = 0,
  valance = true,
  duration,
  style
}) {
  const o = Math.max(0, Math.min(1, open));
  const tr = duration != null ? 'transform ' + duration + 'ms var(--ease-inout)' : 'none';
  const panel = side => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '51%',
    [side]: 0,
    background: fold,
    backgroundSize: '40% 100%',
    transform: 'translateX(' + (side === 'left' ? -1 : 1) * o * 100 + '%) scaleX(' + (1 - o * .25) + ')',
    transformOrigin: side === 'left' ? '0 50%' : '100% 50%',
    transition: tr,
    boxShadow: side === 'left' ? 'inset -30px 0 40px -20px rgba(0,0,0,.5)' : 'inset 30px 0 40px -20px rgba(0,0,0,.5)'
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: o > .95 ? 'none' : 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel('left')
  }), /*#__PURE__*/React.createElement("div", {
    style: panel('right')
  }), valance && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '9%',
      minHeight: 36,
      background: fold,
      backgroundSize: '8% 100%',
      borderBottom: '3px solid var(--karashi-1)',
      boxShadow: '0 10px 20px rgba(0,0,0,.4)'
    }
  }));
}
Object.assign(__ds_scope, { Curtain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/theatre/Curtain.jsx", error: String((e && e.message) || e) }); }

// components/theatre/Playbill.jsx
try { (() => {
function Playbill({
  act,
  year,
  title,
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 480,
      margin: '0 auto',
      color: 'var(--night-ink)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      fontSize: 12,
      letterSpacing: '.3em',
      color: 'var(--shu-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      borderTop: '1px solid currentColor'
    }
  }), act, year && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--night-ink-2)'
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      borderTop: '1px solid currentColor'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(22px,2.6vw,32px)',
      lineHeight: 1.45,
      fontWeight: 500,
      color: 'var(--night-ink)',
      letterSpacing: '.06em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: '6px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 13.5
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--night-ink-2)',
      letterSpacing: '.14em',
      whiteSpace: 'nowrap'
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      borderBottom: '1px dotted var(--night-4)',
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--night-ink)',
      textAlign: 'right'
    }
  }, r.v)))));
}
Object.assign(__ds_scope, { Playbill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/theatre/Playbill.jsx", error: String((e && e.message) || e) }); }

// components/theatre/ProgramNav.jsx
try { (() => {
const {
  useState
} = React;
function ProgramNav({
  acts = [],
  current,
  onJump,
  title = '節目單',
  collapsible = false,
  defaultOpen = true,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  const list = /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, acts.map(a => {
    const on = a.id === current;
    return /*#__PURE__*/React.createElement("li", {
      key: a.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onJump && onJump(a.id),
      "aria-current": on ? 'step' : undefined,
      style: {
        width: '100%',
        minHeight: 44,
        padding: '6px 0',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '14px auto 1fr',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        color: on ? 'var(--night-ink)' : 'var(--night-ink-2)',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 6,
        background: on ? 'var(--lamp-1)' : 'transparent',
        border: '1px solid ' + (on ? 'var(--lamp-1)' : 'var(--night-4)'),
        boxShadow: on ? '0 0 8px var(--lamp-glow)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        letterSpacing: '.1em',
        color: on ? 'var(--shu-3)' : 'inherit',
        whiteSpace: 'nowrap'
      }
    }, a.label), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, a.title)));
  }));
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": title,
    style: {
      width: 240,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: collapsible && !open ? 0 : '14px 16px 8px',
      background: 'rgba(23,21,19,.88)',
      border: '1px solid var(--night-4)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, collapsible ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      width: '100%',
      minHeight: 48,
      padding: open ? '0 0 6px' : '0 16px',
      border: 0,
      background: 'none',
      color: 'var(--night-ink)',
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      letterSpacing: '.2em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--shu-3)'
    }
  }, open ? '−' : '+')) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      letterSpacing: '.3em',
      color: 'var(--night-ink)',
      paddingBottom: 6,
      borderBottom: '1px solid var(--night-4)',
      marginBottom: 4
    }
  }, title), (!collapsible || open) && list);
}
Object.assign(__ds_scope, { ProgramNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/theatre/ProgramNav.jsx", error: String((e && e.message) || e) }); }

// components/theatre/Ticket.jsx
try { (() => {
function Ticket({
  title = 'NENEKO / HANNING',
  sub,
  date,
  seat,
  no,
  admit = 'ADMIT ONE',
  stubLabel = 'もぎり',
  torn = 0,
  style
}) {
  const tr = Math.max(0, Math.min(1, torn));
  const notch = 'radial-gradient(circle at 0 50%, transparent 10px, #000 10.5px)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      maxWidth: 560,
      filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.45))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '28px 28px 24px',
      background: 'var(--paper-1)',
      borderRadius: '8px 0 0 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderRight: '2px dashed var(--paper-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '.3em',
      color: 'var(--shu-1)'
    }
  }, admit), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(22px,3vw,30px)',
      lineHeight: 1.3,
      color: 'var(--ink-1)',
      letterSpacing: '.06em'
    }
  }, title), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      fontSize: 12,
      color: 'var(--ink-3)',
      letterSpacing: '.1em',
      borderTop: '1px solid var(--line-3)',
      paddingTop: 10
    }
  }, date && /*#__PURE__*/React.createElement("span", null, date), seat && /*#__PURE__*/React.createElement("span", null, seat))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 118,
      flexShrink: 0,
      padding: '20px 14px',
      background: 'var(--shu-1)',
      color: 'var(--paper-0)',
      borderRadius: '0 8px 8px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      transformOrigin: '0% 100%',
      transform: 'translate(' + tr * 40 + 'px,' + tr * 120 + 'px) rotate(' + tr * 24 + 'deg)',
      opacity: 1 - tr * .9,
      WebkitMaskImage: notch,
      maskImage: notch
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      writingMode: 'vertical-rl',
      letterSpacing: '.3em'
    }
  }, stubLabel), no && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11,
      letterSpacing: '.1em'
    }
  }, no)));
}
Object.assign(__ds_scope, { Ticket });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/theatre/Ticket.jsx", error: String((e && e.message) || e) }); }

// neneko-site/js/app.js
try { (() => {
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
Object.assign(window, {
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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
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
    viewBox: "-50 70 620 470",
    preserveAspectRatio: "xMidYMax meet"
  }, React.createElement("rect", {
    x: "-60",
    y: "500",
    width: "640",
    height: "80",
    fill: "var(--paper-1)"
  }), React.createElement("rect", {
    x: "-60",
    y: "500",
    width: "640",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), React.createElement("line", {
    x1: "-60",
    y1: "500",
    x2: "580",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), React.createElement("line", {
    x1: "-60",
    y1: "524",
    x2: "580",
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
  }, React.createElement(NS.Noren, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    open: open,
    onOpen: openM,
    height: 130,
    sway: !reduced
  })), React.createElement("div", {
    className: "desk-m-intro"
  }, React.createElement("h3", {
    className: "desk-m-title"
  }, th ? L.thQ : L.exQ), React.createElement("p", {
    className: "desk-m-desc"
  }, (th ? L.roomTh : L.roomEx).split('\n')[0]), React.createElement("p", {
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
  }, React.createElement(NS.Noren, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    sub: L.norenSub,
    open: open,
    onOpen: () => setOpen(true),
    height: compact ? 100 : 140,
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
  }, p)), React.createElement("p", {
    className: "about-cities",
    "aria-label": "Leeds, Taipei, Melbourne, Osaka"
  }, ['Leeds', 'Taipei', 'Melbourne', 'Osaka'].map((c, n) => React.createElement(React.Fragment, {
    key: c
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
    }, d.egg), React.createElement("div", {
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
    }))), React.createElement(CsNoren, {
      tone: d.tone,
      state: st,
      label: d.noren
    })), d.k === 'th' && React.createElement("span", {
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
    title: r.title,
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
  }, L.room, " ", r.n, " \xB7 ", r.year), React.createElement("h2", null, r.title), React.createElement("p", {
    className: "detail-meta"
  }, L.client, "\uFF1A", r.client[lang], "\u3000", L.role, "\uFF1A", r.role[lang]), React.createElement("div", {
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
  const [inDesk, setInDesk] = useState(false);
  useEffect(() => {
    const el = document.getElementById('consult');
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInDesk(e.isIntersecting), {
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
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
    title: a.title,
    rows: [{
      k: L.team,
      v: a.team[lang]
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
  }, a.n[lang], "\u30FB", a.year), React.createElement("h2", null, a.title), React.createElement("p", {
    className: "detail-meta"
  }, L.team, "\uFF1A", a.team[lang], "\u3000", T.venue, "\uFF1A", T.tbc, "\u3000", L.role, "\uFF1A", a.role[lang]), React.createElement("div", {
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
  }, L.curtainCall), React.createElement("h2", null, L.bowTitle), React.createElement("p", null, L.bowSub)), React.createElement(NS.Curtain, {
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
  const [inDesk, setInDesk] = useState(false);
  useEffect(() => {
    const el = document.getElementById('consult');
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInDesk(e.isIntersecting), {
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "neneko-site/js/app.js", error: String((e && e.message) || e) }); }

// neneko-site/js/components.js
try { (() => {
/* @ds-bundle: {"format":4,"namespace":"NENEKOHANNINGDesignSystem_57fc37","components":[{"name":"ContactForm","sourcePath":"components/consult/ContactForm.jsx"},{"name":"CurrencyToggle","sourcePath":"components/consult/CurrencyToggle.jsx"},{"name":"LetterCard","sourcePath":"components/consult/LetterCard.jsx"},{"name":"Noren","sourcePath":"components/consult/Noren.jsx"},{"name":"PriceCard","sourcePath":"components/consult/PriceCard.jsx"},{"name":"ProcessSteps","sourcePath":"components/consult/ProcessSteps.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LANGS","sourcePath":"components/core/LangSwitch.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"FloorMap","sourcePath":"components/exhibit/FloorMap.jsx"},{"name":"Plaque","sourcePath":"components/exhibit/Plaque.jsx"},{"name":"Curtain","sourcePath":"components/theatre/Curtain.jsx"},{"name":"Playbill","sourcePath":"components/theatre/Playbill.jsx"},{"name":"ProgramNav","sourcePath":"components/theatre/ProgramNav.jsx"},{"name":"Ticket","sourcePath":"components/theatre/Ticket.jsx"}],"sourceHashes":{"components/consult/ContactForm.jsx":"e4798c9038fa","components/consult/CurrencyToggle.jsx":"997118d2d365","components/consult/LetterCard.jsx":"762935cfebec","components/consult/Noren.jsx":"b1561ea60e9e","components/consult/PriceCard.jsx":"6c3974e972e1","components/consult/ProcessSteps.jsx":"81050eadfce4","components/core/Button.jsx":"18a6339fafcc","components/core/LangSwitch.jsx":"27e6d31f454d","components/core/PhotoFrame.jsx":"a62535526eb1","components/core/SectionHeading.jsx":"19ab79009681","components/core/SiteHeader.jsx":"e9b9cf80f402","components/core/Stamp.jsx":"c2c5aae7f878","components/exhibit/FloorMap.jsx":"d0afedfb7479","components/exhibit/Plaque.jsx":"8f249a341562","components/theatre/Curtain.jsx":"7c56876f50e2","components/theatre/Playbill.jsx":"c0374e9420c9","components/theatre/ProgramNav.jsx":"8424b50a0171","components/theatre/Ticket.jsx":"7949894fe5e8","neneko-site/js/app.js":"96d02b840ed2","neneko-site/js/components.js":"149df542af19","neneko-site/js/i18n.js":"e1bc4857d67f","ui_kits/portfolio/App.jsx":"9270ff555283","ui_kits/portfolio/ConsultDesk.jsx":"121128decabc","ui_kits/portfolio/Exhibition.jsx":"eaa9487cf8ca","ui_kits/portfolio/Home.jsx":"b3ec016597ad","ui_kits/portfolio/Intro.jsx":"dfa69b6139c2","ui_kits/portfolio/Street.jsx":"20922856d9a7","ui_kits/portfolio/Theatre.jsx":"f9c8abe0603e","ui_kits/portfolio/hooks.jsx":"ff06b8628587","ui_kits/portfolio/i18n.js":"58fbd48ca859"},"inlinedExternals":[],"unexposedExports":[]} */(()=>{const __ds_ns=window.NENEKOHANNINGDesignSystem_57fc37=window.NENEKOHANNINGDesignSystem_57fc37||{};const __ds_scope={};__ds_ns.__errors=__ds_ns.__errors||[];// components/consult/ContactForm.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const L0={name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'};const field={width:'100%',minHeight:48,padding:'10px 14px',boxSizing:'border-box',border:'1px solid var(--line-2)',borderRadius:'var(--radius-sm)',background:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--ink-1)',outline:'none'};function Row({label,children,full}){return/*#__PURE__*/React.createElement("label",{style:{display:'flex',flexDirection:'column',gap:6,gridColumn:full?'1 / -1':'auto'}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},label),children);}function ContactForm({labels,tone='exhibit',defaultType=0,onSubmit,style}){const L={...L0,...labels};const t=TC[tone]||TC.exhibit;const[type,setType]=useState(defaultType);const[sent,setSent]=useState(false);const submit=e=>{e.preventDefault();setSent(true);onSubmit&&onSubmit(Object.fromEntries(new FormData(e.target)));};return/*#__PURE__*/React.createElement("form",{onSubmit:submit,style:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',gap:'20px 20px',...style}},/*#__PURE__*/React.createElement(Row,{label:L.name},/*#__PURE__*/React.createElement("input",{name:"name",style:field})),/*#__PURE__*/React.createElement(Row,{label:L.org},/*#__PURE__*/React.createElement("input",{name:"org",style:field})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',flexDirection:'column',gap:6}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},L.type),/*#__PURE__*/React.createElement("div",{role:"radiogroup",style:{display:'flex',flexWrap:'wrap',gap:8}},L.types.map((x,i)=>/*#__PURE__*/React.createElement("button",{type:"button",key:i,role:"radio","aria-checked":type===i,onClick:()=>setType(i),style:{minHeight:44,padding:'0 20px',borderRadius:'var(--radius-full)',border:'1px solid '+(type===i?t.c:'var(--line-2)'),background:type===i?t.c:'var(--paper-0)',color:type===i?'var(--paper-0)':'var(--ink-2)',fontFamily:'var(--font-sans)',fontSize:14,cursor:'pointer'}},x))),/*#__PURE__*/React.createElement("input",{type:"hidden",name:"type",value:L.types[type]})),/*#__PURE__*/React.createElement(Row,{label:L.budget},/*#__PURE__*/React.createElement("select",{name:"budget",style:{...field,appearance:'none',backgroundImage:'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(-45deg, transparent 50%, var(--ink-3) 50%)',backgroundSize:'5px 5px',backgroundPosition:'calc(100% - 20px) 50%, calc(100% - 15px) 50%',backgroundRepeat:'no-repeat'}},L.budgets.map(b=>/*#__PURE__*/React.createElement("option",{key:b},b)))),/*#__PURE__*/React.createElement(Row,{label:L.timeline},/*#__PURE__*/React.createElement("input",{name:"timeline",placeholder:L.timelineHint,style:field})),/*#__PURE__*/React.createElement(Row,{label:L.message,full:true},/*#__PURE__*/React.createElement("textarea",{name:"message",rows:5,style:{...field,resize:'vertical',lineHeight:1.7}})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}},/*#__PURE__*/React.createElement("button",{type:"submit",style:{minHeight:48,padding:'0 32px',borderRadius:'var(--radius-full)',border:'1px solid '+t.c,background:'transparent',color:t.c,fontFamily:'var(--font-sans)',fontSize:15,letterSpacing:'.1em',cursor:'pointer'}},L.submit),sent&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:t.c}},L.sent)));}Object.assign(__ds_scope,{ContactForm});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ContactForm.jsx",error:String(e&&e.message||e)});}// components/consult/CurrencyToggle.jsx
try{(()=>{function CurrencyToggle({value='TWD',onChange,options=[{id:'TWD',label:'NT$'},{id:'JPY',label:'JPY'}],tone='ink',style}){const c=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Currency",style:{display:'inline-flex',padding:3,borderRadius:'var(--radius-full)',border:'1px solid var(--line-2)',background:'var(--paper-0)',...style}},options.map(o=>/*#__PURE__*/React.createElement("button",{key:o.id,onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:56,padding:'0 14px',borderRadius:'var(--radius-full)',border:0,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.08em',background:value===o.id?c:'transparent',color:value===o.id?'var(--paper-0)':'var(--ink-2)',transition:'background var(--dur-base), color var(--dur-base)'}},o.label)));}Object.assign(__ds_scope,{CurrencyToggle});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/CurrencyToggle.jsx",error:String(e&&e.message||e)});}// components/consult/LetterCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function LetterCard({quote,name,role,org,placeholder=false,placeholderLabel='待替換',tilt=0,tone='exhibit',width=240,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("figure",{style:{margin:0,width,minHeight:width*1.9,flexShrink:0,position:'relative',display:'flex',flexDirection:'column',padding:'44px 24px 24px',boxSizing:'border-box',background:'var(--paper-0)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, '+t.t+' 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'content-box',boxShadow:'var(--shadow-paper)',borderRadius:'var(--radius-xs)',transform:'rotate('+tilt+'deg)',transformOrigin:'50% 0',transition:'transform var(--dur-slow) var(--ease-soft)',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:16,left:24,right:24,display:'flex',gap:6,alignItems:'center'}},/*#__PURE__*/React.createElement("span",{style:{width:8,height:8,borderRadius:8,background:'var(--karashi-1)'}}),/*#__PURE__*/React.createElement("span",{style:{flex:1,borderTop:'1px solid '+t.c,opacity:.5}})),placeholder&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:10,right:12,fontSize:10,letterSpacing:'.12em',color:t.c,border:'1px dashed '+t.c,padding:'1px 6px',borderRadius:4,background:'var(--paper-0)'}},placeholderLabel),/*#__PURE__*/React.createElement("blockquote",{style:{margin:0,flex:1,fontFamily:'var(--font-serif)',fontSize:15,lineHeight:'32px',color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},quote),/*#__PURE__*/React.createElement("figcaption",{style:{marginTop:20,display:'flex',flexDirection:'column',gap:2}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,color:'var(--ink-1)'}},name),/*#__PURE__*/React.createElement("span",{style:{fontSize:12,lineHeight:1.6,color:'var(--ink-3)'}},[role,org].filter(Boolean).join('｜'))));}Object.assign(__ds_scope,{LetterCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/LetterCard.jsx",error:String(e&&e.message||e)});}// components/consult/Noren.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const KF='@keyframes nh-sway{0%,100%{transform:rotate(0deg) skewX(0deg)}30%{transform:rotate(1.4deg) skewX(-1deg)}70%{transform:rotate(-1deg) skewX(.8deg)}}';function Noren({label='相談',sub,tone='exhibit',open:openProp,onOpen,sway=true,height=280,style}){const[hover,setHover]=useState(false);const[self,setSelf]=useState(false);const open=openProp??self;const t=TC[tone]||TC.exhibit;const chars=Array.from(label);const n=Math.max(2,chars.length);const toggle=()=>{setSelf(true);onOpen&&onOpen();};const part=hover&&!open?14:0;return/*#__PURE__*/React.createElement("div",{style:{position:'relative',width:'100%',maxWidth:560,margin:'0 auto',height,...style}},/*#__PURE__*/React.createElement("style",null,KF),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',top:0,left:-12,right:-12,height:10,borderRadius:10,background:'var(--wood-3)',zIndex:2,opacity:open?0:1,transition:'opacity var(--dur-slow) var(--ease-out) 200ms'}}),/*#__PURE__*/React.createElement("button",{onClick:toggle,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),"aria-expanded":open,style:{position:'absolute',inset:'6px 0 0',display:'flex',gap:4,padding:0,border:0,background:'none',cursor:'pointer'}},Array.from({length:n}).map((_,i)=>{const side=i<n/2?-1:1;const centre=i-(n-1)/2;const tf=open?'translateX('+side*120+'%) rotate('+side*6+'deg)':'translateX('+(centre===0?0:Math.sign(centre)*part)+'px)';return/*#__PURE__*/React.createElement("span",{key:i,style:{flex:1,height:'100%',transformOrigin:'top center',transform:tf,opacity:open?0:1,transition:'transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)'}},/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',background:t.c,borderRadius:'0 0 3px 3px',transformOrigin:'top center',animation:sway&&!open?'nh-sway '+(5+i*.7)+'s ease-in-out '+-i*1.3+'s infinite':'none',boxShadow:'inset 0 -14px 0 -8px rgba(0,0,0,.08)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:Math.min(88,height*.3),color:'var(--paper-0)',fontWeight:500}},chars[i]||'')));})),sub&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',left:0,right:0,bottom:-36,textAlign:'center',fontFamily:'var(--font-sans)',fontSize:12,letterSpacing:'.24em',color:'var(--ink-3)',opacity:open?0:1,transition:'opacity var(--dur-base)'}},sub));}Object.assign(__ds_scope,{Noren});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/Noren.jsx",error:String(e&&e.message||e)});}// components/consult/PriceCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function PriceCard({index,title,desc,price,unit,tone='exhibit',visible=true,delay=0,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("article",{style:{position:'relative',display:'flex',flexDirection:'column',gap:14,padding:'36px 26px 28px',borderRadius:'var(--radius-sm)',background:'var(--wood-1)',backgroundImage:'repeating-linear-gradient(92deg, rgba(138,110,69,.08) 0 2px, transparent 2px 9px, rgba(138,110,69,.05) 9px 10px, transparent 10px 23px)',boxShadow:'var(--shadow-paper), inset 0 0 0 1px rgba(138,110,69,.25)',color:'var(--ink-1)',opacity:visible?1:0,transform:visible?'none':'translateY(28px)',transition:'opacity var(--dur-slow) var(--ease-out) '+delay+'ms, transform var(--dur-slow) var(--ease-out) '+delay+'ms',minHeight:260,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:12,left:'50%',width:8,height:8,marginLeft:-4,borderRadius:8,background:'var(--wood-3)',boxShadow:'inset 0 1px 2px rgba(0,0,0,.4)'}}),index!=null&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:11,letterSpacing:'.24em',color:t.c}},String(index).padStart(2,'0')),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:22,fontWeight:600,lineHeight:1.4,letterSpacing:'.06em',color:'var(--ink-1)'}},title),/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:14,lineHeight:1.8,color:'var(--ink-2)',flex:1,textWrap:'pretty'}},desc),/*#__PURE__*/React.createElement("div",{style:{borderTop:'1px solid rgba(138,110,69,.45)',paddingTop:14,display:'flex',alignItems:'baseline',flexWrap:'wrap',gap:'2px 6px'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:26,fontWeight:600,color:t.d,letterSpacing:'.02em'}},price),unit&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},unit)));}Object.assign(__ds_scope,{PriceCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/PriceCard.jsx",error:String(e&&e.message||e)});}// components/consult/ProcessSteps.jsx
try{(()=>{const{useRef,useState,useEffect}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function ProcessSteps({steps=[],tone='exhibit',direction='auto',style}){const ref=useRef(null);const[w,setW]=useState(800);const t=TC[tone]||TC.exhibit;useEffect(()=>{if(!ref.current||typeof ResizeObserver==='undefined')return;const ro=new ResizeObserver(e=>setW(e[0].contentRect.width));ro.observe(ref.current);return()=>ro.disconnect();},[]);const vert=direction==='vertical'||direction==='auto'&&w<560;return/*#__PURE__*/React.createElement("ol",{ref:ref,style:{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:vert?'1fr':'repeat('+steps.length+', minmax(0,1fr))',gap:vert?28:12,position:'relative',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:vert?{position:'absolute',left:21,top:22,bottom:22,borderLeft:'1px solid var(--line-2)'}:{position:'absolute',left:'calc(100% / '+steps.length*2+')',right:'calc(100% / '+steps.length*2+')',top:22,borderTop:'1px solid var(--line-2)'}}),steps.map((s,i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{position:'relative',display:'flex',flexDirection:vert?'row':'column',alignItems:vert?'flex-start':'center',gap:vert?18:14,textAlign:vert?'left':'center'}},/*#__PURE__*/React.createElement("span",{style:{width:44,height:44,flexShrink:0,borderRadius:44,border:'1px solid '+t.c,background:'var(--paper-1)',color:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-serif)',fontSize:16}},i+1),/*#__PURE__*/React.createElement("span",{style:{display:'flex',flexDirection:'column',gap:4}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:18,color:'var(--ink-1)',letterSpacing:'.08em'}},s.label),s.note&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,lineHeight:1.7,color:'var(--ink-3)'}},s.note)))));}Object.assign(__ds_scope,{ProcessSteps});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ProcessSteps.jsx",error:String(e&&e.message||e)});}// components/core/Button.jsx
try{(()=>{const{useState}=React;const TONES={ink:{bg:'var(--ink-1)',bgH:'var(--ink-2)',fg:'var(--paper-0)'},exhibit:{bg:'var(--matcha-1)',bgH:'var(--matcha-2)',fg:'var(--paper-0)'},theatre:{bg:'var(--shu-1)',bgH:'var(--shu-2)',fg:'var(--paper-0)'},paper:{bg:'var(--paper-0)',bgH:'var(--paper-2)',fg:'var(--ink-1)'}};function Button({children,variant='primary',tone='ink',size='md',href,icon,iconRight,disabled,onClick,type='button',style,...rest}){const[h,setH]=useState(false);const[p,setP]=useState(false);const t=TONES[tone]||TONES.ink;const H=size==='lg'?56:size==='sm'?44:48;const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,minHeight:H,padding:variant==='ghost'?'0 4px':size==='lg'?'0 32px':'0 24px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-sans)',fontSize:size==='lg'?16:15,fontWeight:500,letterSpacing:'.08em',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,border:'1px solid transparent',transition:'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',transform:p&&!disabled?'scale(.98)':h&&!disabled?'translateY(-1px)':'none',whiteSpace:'nowrap',boxSizing:'border-box'};const v=variant==='primary'?{background:h?t.bgH:t.bg,color:t.fg}:variant==='secondary'?{background:h?t.bg:'transparent',color:h?t.fg:tone==='paper'?'var(--paper-0)':t.bg,borderColor:tone==='paper'?'var(--paper-0)':t.bg}:{background:'transparent',color:tone==='paper'?'var(--paper-0)':tone==='ink'?'var(--ink-1)':t.bg,borderRadius:0,borderBottom:'1px solid currentColor',minHeight:44};const Tag=href?'a':'button';return React.createElement(Tag,{href,type:href?undefined:type,disabled,onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false);},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),style:{...base,...v,...style},...rest},icon,React.createElement('span',null,children),iconRight);}Object.assign(__ds_scope,{Button});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Button.jsx",error:String(e&&e.message||e)});}// components/core/LangSwitch.jsx
try{(()=>{const LANGS=[{id:'zh',label:'CH'},{id:'ja',label:'JP'},{id:'en',label:'EN'}];function LangSwitch({value='zh',onChange,options=LANGS,dark=false,style}){const fg=dark?'var(--night-ink)':'var(--ink-1)';const mute=dark?'var(--night-ink-2)':'var(--ink-3)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Language",style:{display:'flex',alignItems:'center',gap:2,fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.06em',...style}},options.map((o,i)=>/*#__PURE__*/React.createElement(React.Fragment,{key:o.id},i>0&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{color:mute,opacity:.6}},"/"),/*#__PURE__*/React.createElement("button",{onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:44,padding:'0 6px',background:'none',border:0,cursor:'pointer',color:value===o.id?fg:mute,fontFamily:'inherit',fontSize:'inherit',letterSpacing:'inherit',position:'relative'}},o.label,/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',left:'50%',bottom:8,width:4,height:4,marginLeft:-2,borderRadius:4,background:'var(--karashi-1)',opacity:value===o.id?1:0,transition:'opacity var(--dur-base)'}})))));}Object.assign(__ds_scope,{LANGS,LangSwitch});})();}catch(e){__ds_ns.__errors.push({path:"components/core/LangSwitch.jsx",error:String(e&&e.message||e)});}// components/core/PhotoFrame.jsx
try{(()=>{function PhotoFrame({src,alt='',position='50% 50%',label='PHOTO',shape='rounded',ratio='4 / 3',tone='paper',style,children}){const radius=shape==='circle'?'50%':shape==='arch'?'999px 999px var(--radius-md) var(--radius-md)':shape==='square'?'var(--radius-xs)':'var(--radius-lg)';const dark=tone==='night';const stripe=dark?'repeating-linear-gradient(135deg, #2A2622 0 10px, #24211D 10px 20px)':'repeating-linear-gradient(135deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)';return/*#__PURE__*/React.createElement("div",{style:{position:'relative',aspectRatio:shape==='circle'?'1 / 1':ratio,borderRadius:radius,overflow:'hidden',background:src?'var(--paper-3)':stripe,width:'100%',...style}},src?/*#__PURE__*/React.createElement("img",{src:src,alt:alt,style:{width:'100%',height:'100%',objectFit:'cover',objectPosition:position,display:'block'}}):/*#__PURE__*/React.createElement("span",{style:{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.14em',color:dark?'var(--night-ink-2)':'var(--ink-3)',textAlign:'center',padding:12}},label),children);}Object.assign(__ds_scope,{PhotoFrame});})();}catch(e){__ds_ns.__errors.push({path:"components/core/PhotoFrame.jsx",error:String(e&&e.message||e)});}// components/core/SectionHeading.jsx
try{(()=>{function SectionHeading({eyebrow,title,vertical=false,dot=true,color='var(--ink-1)',as='h2',size='h2',style}){const fs=size==='display'?'var(--fs-display)':size==='h1'?'var(--fs-h1)':size==='h3'?'var(--fs-h3)':'var(--fs-h2)';const H=as;return/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:vertical?'row-reverse':'column',alignItems:vertical?'flex-start':'flex-start',gap:vertical?16:12,...style}},eyebrow&&/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontSize:'var(--fs-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--ink-3)',writingMode:vertical?'vertical-rl':'horizontal-tb'}},dot&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:7,background:'var(--karashi-1)',flexShrink:0}}),eyebrow),/*#__PURE__*/React.createElement(H,{style:{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:fs,lineHeight:vertical?1.5:1.3,letterSpacing:vertical?'.18em':'.04em',color,writingMode:vertical?'vertical-rl':'horizontal-tb',textWrap:'pretty'}},title));}Object.assign(__ds_scope,{SectionHeading});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SectionHeading.jsx",error:String(e&&e.message||e)});}// components/core/SiteHeader.jsx
try{(()=>{const COPY={zh:'相談',ja:'相談',en:'Consult'};function SiteHeader({lang='zh',onLang,onConsult,tone='ink',dark=false,brand='NENEKO',onBrand,consultLabel,style}){const bg=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("header",{style:{position:'fixed',top:0,left:0,right:0,zIndex:'var(--z-header)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'10px var(--gutter)',pointerEvents:'none',...style}},/*#__PURE__*/React.createElement("button",{onClick:onBrand,style:{pointerEvents:'auto',background:'none',border:0,padding:0,minHeight:44,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:700,letterSpacing:'.12em',color:dark?'var(--night-ink)':'var(--ink-1)',whiteSpace:'nowrap'}},brand),/*#__PURE__*/React.createElement("div",{style:{pointerEvents:'auto',display:'flex',alignItems:'center',gap:12}},/*#__PURE__*/React.createElement(__ds_scope.LangSwitch,{value:lang,onChange:onLang,dark:dark}),/*#__PURE__*/React.createElement("button",{onClick:onConsult,style:{minHeight:44,minWidth:64,padding:'0 16px',borderRadius:'var(--radius-full)',border:0,background:bg,color:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.12em',cursor:'pointer',boxShadow:'var(--shadow-paper)',whiteSpace:'nowrap'}},consultLabel||COPY[lang]||COPY.zh)));}Object.assign(__ds_scope,{SiteHeader});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SiteHeader.jsx",error:String(e&&e.message||e)});}// components/core/Stamp.jsx
try{(()=>{function Stamp({top,main,bottom,shape='circle',color='var(--shu-1)',size=112,rotate=-8,inked=true,style}){const r=shape==='circle'?'50%':shape==='oval'?'50% / 42%':'var(--radius-sm)';const w=shape==='oval'?size*1.35:size;return/*#__PURE__*/React.createElement("div",{"aria-label":[top,main,bottom].filter(Boolean).join(' '),style:{width:w,height:size,borderRadius:r,border:'2px solid '+color,color,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,padding:6,boxSizing:'border-box',transform:'rotate('+rotate+'deg) scale('+(inked?1:1.4)+')',opacity:inked?.88:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast) linear',mixBlendMode:'multiply',position:'relative',flexShrink:0,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',inset:4,borderRadius:r,border:'1px solid '+color,opacity:.7}}),top&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.085),letterSpacing:'.2em',fontWeight:500}},top),main&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:size*.2,fontWeight:600,letterSpacing:'.08em',lineHeight:1.1,textAlign:'center'}},main),bottom&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.08),letterSpacing:'.16em'}},bottom));}Object.assign(__ds_scope,{Stamp});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Stamp.jsx",error:String(e&&e.message||e)});}// components/exhibit/FloorMap.jsx
try{(()=>{const{useState}=React;function FloorMap({rooms=[],current,visited=[],onJump,title='展場平面圖',collapsible=false,defaultOpen=true,labels={entrance:'入口',exit:'出口 EXIT'},style}){const[open,setOpen]=useState(defaultOpen);const body=/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:'column',gap:10}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'.16em',color:'var(--ink-3)'}},/*#__PURE__*/React.createElement("span",null,labels.entrance," \u2192"),/*#__PURE__*/React.createElement("span",null,labels.exit)),/*#__PURE__*/React.createElement("div",{style:{display:'grid',gridTemplateColumns:'repeat('+rooms.length+', 1fr)',border:'1.5px solid var(--ink-1)',borderRadius:2}},rooms.map((r,i)=>{const on=r.id===current;const v=visited.includes(r.id);return/*#__PURE__*/React.createElement("button",{key:r.id,onClick:()=>onJump&&onJump(r.id),"aria-current":on?'step':undefined,"aria-label":r.label,style:{position:'relative',minHeight:56,minWidth:44,padding:0,border:0,borderLeft:i?'1px solid var(--line-2)':0,background:on?'var(--matcha-4)':'transparent',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',paddingBottom:6,transition:'background var(--dur-base)'}},/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:8,left:'50%',width:24,height:24,marginLeft:-12,borderRadius:24,border:'1.5px solid var(--matcha-1)',color:'var(--matcha-1)',fontFamily:'var(--font-serif)',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',transform:v?'rotate(-12deg) scale(1)':'scale(1.6)',opacity:v?.9:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast)'}},"\u6E08"),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:13,color:on?'var(--matcha-2)':'var(--ink-2)'}},String(i+1).padStart(2,'0')));})),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{height:10,borderBottom:'1px dashed var(--line-2)',position:'relative'}},rooms.findIndex(r=>r.id===current)>=0&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:4,left:'calc('+(rooms.findIndex(r=>r.id===current)+.5)/rooms.length*100+'% - 5px)',width:10,height:10,borderRadius:10,background:'var(--karashi-1)',transition:'left var(--dur-slow) var(--ease-out)'}})),/*#__PURE__*/React.createElement("div",{style:{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em'}},visited.length," / ",rooms.length));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:260,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 12px',background:'rgba(250,247,240,.94)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lift)',fontFamily:'var(--font-sans)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 8px':'0 16px',border:0,background:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:12,color:'var(--matcha-1)'}},visited.length,"/",rooms.length," ",open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em',marginBottom:8}},title),(!collapsible||open)&&body);}Object.assign(__ds_scope,{FloorMap});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/FloorMap.jsx",error:String(e&&e.message||e)});}// components/exhibit/Plaque.jsx
try{(()=>{function Plaque({number,year,title,client,role,note,labels={client:'委託單位',role:'我的角色'},style}){return/*#__PURE__*/React.createElement("aside",{style:{width:'100%',maxWidth:300,padding:'20px 20px 18px',boxSizing:'border-box',background:'var(--paper-0)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-xs)',boxShadow:'0 1px 0 rgba(30,28,25,.05)',display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-sans)',...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}},/*#__PURE__*/React.createElement("span",{style:{fontSize:11,letterSpacing:'.22em',color:'var(--matcha-1)',fontWeight:500}},number),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-3)'}},year)),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:19,lineHeight:1.5,fontWeight:600,color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 12px',fontSize:12.5,lineHeight:1.6,borderTop:'1px solid var(--line-3)',paddingTop:10}},client&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.client),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},client)),role&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.role),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},role))),note&&/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:13,lineHeight:1.8,color:'var(--ink-2)',textWrap:'pretty'}},note));}Object.assign(__ds_scope,{Plaque});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/Plaque.jsx",error:String(e&&e.message||e)});}// components/theatre/Curtain.jsx
try{(()=>{const fold='repeating-linear-gradient(90deg, var(--shu-5) 0, var(--shu-2) 4%, var(--shu-1) 8%, var(--shu-3) 10%, var(--shu-1) 12%, var(--shu-2) 16%, var(--shu-5) 20%)';function Curtain({open=0,valance=true,duration,style}){const o=Math.max(0,Math.min(1,open));const tr=duration!=null?'transform '+duration+'ms var(--ease-inout)':'none';const panel=side=>({position:'absolute',top:0,bottom:0,width:'51%',[side]:0,background:fold,backgroundSize:'40% 100%',transform:'translateX('+(side==='left'?-1:1)*o*100+'%) scaleX('+(1-o*.25)+')',transformOrigin:side==='left'?'0 50%':'100% 50%',transition:tr,boxShadow:side==='left'?'inset -30px 0 40px -20px rgba(0,0,0,.5)':'inset 30px 0 40px -20px rgba(0,0,0,.5)'});return/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',inset:0,overflow:'hidden',pointerEvents:o>.95?'none':'auto',...style}},/*#__PURE__*/React.createElement("div",{style:panel('left')}),/*#__PURE__*/React.createElement("div",{style:panel('right')}),valance&&/*#__PURE__*/React.createElement("div",{style:{position:'absolute',top:0,left:0,right:0,height:'9%',minHeight:36,background:fold,backgroundSize:'8% 100%',borderBottom:'3px solid var(--karashi-1)',boxShadow:'0 10px 20px rgba(0,0,0,.4)'}}));}Object.assign(__ds_scope,{Curtain});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Curtain.jsx",error:String(e&&e.message||e)});}// components/theatre/Playbill.jsx
try{(()=>{function Playbill({act,year,title,rows=[],style}){return/*#__PURE__*/React.createElement("div",{style:{width:'100%',maxWidth:480,margin:'0 auto',color:'var(--night-ink)',fontFamily:'var(--font-sans)',textAlign:'center',display:'flex',flexDirection:'column',gap:14,...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:14,fontSize:12,letterSpacing:'.3em',color:'var(--shu-3)'}},/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}}),act,year&&/*#__PURE__*/React.createElement("span",{style:{color:'var(--night-ink-2)'}},year),/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}})),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:'clamp(22px,2.6vw,32px)',lineHeight:1.45,fontWeight:500,color:'var(--night-ink)',letterSpacing:'.06em',textWrap:'balance'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:'6px 0 0',display:'flex',flexDirection:'column',gap:6,fontSize:13.5}},rows.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:i,style:{display:'flex',alignItems:'baseline',gap:10}},/*#__PURE__*/React.createElement("dt",{style:{color:'var(--night-ink-2)',letterSpacing:'.14em',whiteSpace:'nowrap'}},r.k),/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{flex:1,borderBottom:'1px dotted var(--night-4)',transform:'translateY(-4px)'}}),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--night-ink)',textAlign:'right'}},r.v)))));}Object.assign(__ds_scope,{Playbill});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Playbill.jsx",error:String(e&&e.message||e)});}// components/theatre/ProgramNav.jsx
try{(()=>{const{useState}=React;function ProgramNav({acts=[],current,onJump,title='節目單',collapsible=false,defaultOpen=true,style}){const[open,setOpen]=useState(defaultOpen);const list=/*#__PURE__*/React.createElement("ol",{style:{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column'}},acts.map(a=>{const on=a.id===current;return/*#__PURE__*/React.createElement("li",{key:a.id},/*#__PURE__*/React.createElement("button",{onClick:()=>onJump&&onJump(a.id),"aria-current":on?'step':undefined,style:{width:'100%',minHeight:44,padding:'6px 0',border:0,background:'none',cursor:'pointer',display:'grid',gridTemplateColumns:'14px auto 1fr',alignItems:'center',gap:8,textAlign:'left',color:on?'var(--night-ink)':'var(--night-ink-2)',fontFamily:'var(--font-sans)',fontSize:12.5}},/*#__PURE__*/React.createElement("span",{style:{width:6,height:6,borderRadius:6,background:on?'var(--lamp-1)':'transparent',border:'1px solid '+(on?'var(--lamp-1)':'var(--night-4)'),boxShadow:on?'0 0 8px var(--lamp-glow)':'none'}}),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',letterSpacing:'.1em',color:on?'var(--shu-3)':'inherit',whiteSpace:'nowrap'}},a.label),/*#__PURE__*/React.createElement("span",{style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},a.title)));}));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:240,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 8px',background:'rgba(23,21,19,.88)',border:'1px solid var(--night-4)',borderRadius:'var(--radius-md)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 6px':'0 16px',border:0,background:'none',color:'var(--night-ink)',fontFamily:'var(--font-serif)',fontSize:14,letterSpacing:'.2em',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',color:'var(--shu-3)'}},open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:13,letterSpacing:'.3em',color:'var(--night-ink)',paddingBottom:6,borderBottom:'1px solid var(--night-4)',marginBottom:4}},title),(!collapsible||open)&&list);}Object.assign(__ds_scope,{ProgramNav});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/ProgramNav.jsx",error:String(e&&e.message||e)});}// components/theatre/Ticket.jsx
try{(()=>{function Ticket({title='NENEKO / HANNING',sub,date,seat,no,admit='ADMIT ONE',stubLabel='もぎり',torn=0,style}){const tr=Math.max(0,Math.min(1,torn));const notch='radial-gradient(circle at 0 50%, transparent 10px, #000 10.5px)';return/*#__PURE__*/React.createElement("div",{style:{display:'flex',width:'100%',maxWidth:560,filter:'drop-shadow(0 18px 30px rgba(0,0,0,.45))',...style}},/*#__PURE__*/React.createElement("div",{style:{flex:1,minWidth:0,padding:'28px 28px 24px',background:'var(--paper-1)',borderRadius:'8px 0 0 8px',display:'flex',flexDirection:'column',gap:12,borderRight:'2px dashed var(--paper-4)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:10,letterSpacing:'.3em',color:'var(--shu-1)'}},admit),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:'clamp(22px,3vw,30px)',lineHeight:1.3,color:'var(--ink-1)',letterSpacing:'.06em'}},title),sub&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},sub),/*#__PURE__*/React.createElement("div",{style:{display:'flex',gap:24,flexWrap:'wrap',fontSize:12,color:'var(--ink-3)',letterSpacing:'.1em',borderTop:'1px solid var(--line-3)',paddingTop:10}},date&&/*#__PURE__*/React.createElement("span",null,date),seat&&/*#__PURE__*/React.createElement("span",null,seat))),/*#__PURE__*/React.createElement("div",{style:{width:118,flexShrink:0,padding:'20px 14px',background:'var(--shu-1)',color:'var(--paper-0)',borderRadius:'0 8px 8px 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',gap:8,transformOrigin:'0% 100%',transform:'translate('+tr*40+'px,'+tr*120+'px) rotate('+tr*24+'deg)',opacity:1-tr*.9,WebkitMaskImage:notch,maskImage:notch}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,writingMode:'vertical-rl',letterSpacing:'.3em'}},stubLabel),no&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.1em'}},no)));}Object.assign(__ds_scope,{Ticket});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Ticket.jsx",error:String(e&&e.message||e)});}// neneko-site/js/app.js
try{(()=>{/* hooks.jsx */const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE='./images/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const FORCE_TOUCH=/[?&]touch=1/.test(location.search);const useTouch=()=>useMedia('(hover: none)')||FORCE_TOUCH;const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}function SwipeDeck({index,onChange,count=2,labels=[],dark=false,className='',children}){const reduced=useReduced();const s=useRef(null);const go=i=>onChange((i+count)%count);const ts=e=>{const t=e.touches[0];s.current={x:t.clientX,y:t.clientY,lock:null};};const tm=e=>{const o=s.current;if(!o)return;const t=e.touches[0];const dx=t.clientX-o.x,dy=t.clientY-o.y;if(o.lock==null&&(Math.abs(dx)>10||Math.abs(dy)>10))o.lock=Math.abs(dx)>Math.abs(dy)*1.4?'x':'y';};const te=e=>{const o=s.current;s.current=null;if(!o||o.lock!=='x')return;const dx=e.changedTouches[0].clientX-o.x;if(Math.abs(dx)>36)go(index+(dx<0?1:-1));};const kids=React.Children.toArray(children);return React.createElement("div",{className:'deck '+(dark?'is-dark ':'')+className,onTouchStart:ts,onTouchMove:tm,onTouchEnd:te,onTouchCancel:()=>{s.current=null;}},React.createElement("div",{className:"deck-view"},React.createElement("div",{className:"deck-track",style:{transform:'translateX('+-index*100+'%)',transition:reduced?'none':undefined}},kids.map((c,i)=>React.createElement("div",{className:"deck-slide",key:i,"aria-hidden":i!==index?'true':undefined},c)))),React.createElement("button",{className:"deck-arrow prev","aria-label":labels[(index-1+count)%count]||'Previous',onClick:()=>go(index-1)},React.createElement(Icon,{name:"chevron-left",size:22})),React.createElement("button",{className:"deck-arrow next","aria-label":labels[(index+1)%count]||'Next',onClick:()=>go(index+1)},React.createElement(Icon,{name:"chevron-right",size:22})),React.createElement("div",{className:"deck-dots"},kids.map((_,i)=>React.createElement("button",{key:i,className:'deck-dot'+(i===index?' on':''),"aria-label":labels[i]||String(i+1),"aria-current":i===index?'true':undefined,onClick:()=>onChange(i)},React.createElement("i",null)))));}Object.assign(window,{SwipeDeck,useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});/* Street.jsx */function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return React.createElement("div",{className:"sky","aria-hidden":"true"},React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},React.createElement("span",{className:"moon"})),STARS.map((s,i)=>React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},React.createElement("span",{className:"cloud c1"}),React.createElement("span",{className:"cloud c2"}),React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint,big}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("clipPath",{id:"glass-clip"},React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),React.createElement("g",{clipPath:"url(#glass-clip)"},React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day',big:big}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap,big}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night',big:big}));}function StreetTag({x,y,rot,text,hidden,light,active,big}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text,big]);return React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:big?24:16,fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return React.createElement("div",{className:cls,style:{opacity:dim}},React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[modeS,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[slide,setSlide]=useState(0);const mode=compact?slide?'night':'day':modeS;const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced||compact)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced,compact]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom(compact?{which,ox:'50%',oy:'62%'}:{which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';if(compact)return{onEnter:()=>{},onLeave:()=>{},onTap:()=>enter(which)};return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},React.createElement(Sky,{mode:mode}),React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' '+(zoom.oy||'78%')}:null},React.createElement("div",{className:"street-top"},React.createElement("div",{className:"tagline-stack"},React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),compact?React.createElement("p",{className:"byline is-3l"},L.byline.split('｜').map((t,n)=>React.createElement("span",{key:n,className:n?'':'nk'},t))):React.createElement("p",{className:"byline"},L.byline)),compact?React.createElement(SwipeDeck,{index:slide,onChange:setSlide,dark:slide===1,labels:[L.exSign.join(' '),L.thSign.join(' ')],className:"street-deck"},React.createElement("svg",{className:"street-svg is-stack",viewBox:"-50 70 620 470",preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-60",y1:"500",x2:"580",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-60",y1:"524",x2:"580",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(Museum,_extends({x:0,mode:mode,lang:lang,glint:glint,big:true},handlers('ex')))),React.createElement("svg",{className:"street-svg is-stack",viewBox:"-90 70 600 470",preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-100",y1:"500",x2:"520",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-100",y1:"524",x2:"520",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(TheatreBldg,_extends({x:0,mode:mode,lang:lang,big:true},handlers('th'))))):React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),React.createElement("p",{className:"street-hint"},React.createElement("span",{className:"hint-arrow"},React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),React.createElement("span",{className:"hint-text"},compact?L.hintSwipe:touch?L.hintTap:L.hintHover))),React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;/* ConsultDesk.jsx */function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},React.createElement("div",{className:"desk-head wrap"},React.createElement("span",{className:"desk-plate"},React.createElement("b",null,th?L.deskTh:L.deskEx),React.createElement("small",null,th?L.deskThSub:L.deskExSub))),React.createElement("div",{className:"desk-window wrap"},React.createElement("div",{className:"desk-panel"},React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},React.createElement("div",{className:"desk-row-head"},React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),React.createElement("div",{className:"price-grid"},services.map((s,i)=>React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),React.createElement("p",{className:"note"},L.priceNote),React.createElement("div",{className:"desk-block"},React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),React.createElement("div",{className:"desk-block contact"},React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:React.createElement(Icon,{name:"calendar-check",size:18})},L.book),React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),React.createElement("div",{className:"contact-links"},React.createElement("a",{href:"#","aria-label":"Email"},React.createElement(Icon,{name:"mail",size:20}),React.createElement("span",null,"Email")),React.createElement("a",{href:"#","aria-label":"LINE"},React.createElement(Icon,{name:"message-circle",size:20}),React.createElement("span",null,"LINE")),React.createElement("a",{href:"#","aria-label":"Instagram"},React.createElement(Icon,{name:"instagram",size:20}),React.createElement("span",null,"Instagram"))),React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;/* Home.jsx */function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});return React.createElement("main",{className:"home"},React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},React.createElement("span",{className:"about-card-photo"},React.createElement("img",{src:'./images/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),React.createElement("img",{className:"alt",src:'./images/desk.jpg',alt:"",style:{objectPosition:'62% 40%'}})),React.createElement("span",{className:"about-card-cap"},React.createElement("b",null,"NENEKO"),React.createElement("small",null,L.cardRole))),React.createElement("div",{className:"about-text"},React.createElement("span",{className:"about-eyebrow"},L.since),React.createElement("div",{className:"about-head"},React.createElement("h2",{className:"about-name"},"About me"),React.createElement("a",{className:"cv-link",href:"#"},React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>React.createElement("p",{key:n,className:"about-lead"},p)),React.createElement("p",{className:"about-cities","aria-label":"Leeds, Taipei, Melbourne, Osaka"},['Leeds','Taipei','Melbourne','Osaka'].map((c,n)=>React.createElement(React.Fragment,{key:c},n>0&&React.createElement("span",{className:"ac-arrow","aria-hidden":"true"},"\u2192"),React.createElement("span",null,c)))))),React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},React.createElement("div",{className:"wrap"},React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},React.createElement("div",{className:"marquee-track"},[0,1].map(k=>React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>React.createElement("li",{key:p},p)))))),React.createElement("div",{className:"voices wrap"},React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},React.createElement("span",null,L.teammate.split('\n').map((t,n)=>React.createElement("span",{key:n,className:"tm-line"},t))),React.createElement(Icon,{name:"arrow-down",size:26})))),React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const compact=useCompact();const[open,setOpen]=useState(null);const[slide,setSlide]=useState(0);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];const door=d=>{const st=compact?'closed':open===d.k?'open':touch?'half':'closed';const on=compact||st!=='closed';return React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},React.createElement("i",null)),React.createElement("h3",{className:"cs-q"},d.q),React.createElement("p",{className:"cs-egg"},d.egg),React.createElement("div",{className:"cs-open"},React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-rack"},React.createElement("i",null),React.createElement("i",null),React.createElement("i",null)),React.createElement("span",{className:"cs-uketsuke"},React.createElement("b",null,"\u53D7\u4ED8"),React.createElement("small",null,"RECEPTION")),React.createElement("span",{className:"cs-counter"})):React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-ledge"}))),React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},React.createElement("ul",null,d.sv.map((s,n)=>React.createElement("li",{key:n},React.createElement("span",null,s[0])))),React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,React.createElement(Icon,{name:"arrow-right",size:16}))),React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&React.createElement("span",{className:"cs-poster","aria-hidden":"true"},React.createElement("b",null,L.poster),React.createElement("i",null),React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));};return React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},React.createElement("p",{className:"cs-note"},L.csNote.split('｜').map((t,n)=>React.createElement(React.Fragment,{key:n},n>0&&React.createElement("span",{className:"cs-sep"},"\uFF5C"),React.createElement("span",{className:"cs-nw"},t)))),compact&&React.createElement("div",{className:"cs-sky","aria-hidden":"true"},React.createElement("i",{className:"d",style:{opacity:slide?0:1}}),React.createElement("i",{className:"n",style:{opacity:slide?1:0}})),compact?React.createElement(SwipeDeck,{index:slide,onChange:i=>{setSlide(i);setOpen(null);},dark:slide===1,labels:[L.ctaEx,L.ctaTh],className:"cs-deck"},doors.map(door)):React.createElement("div",{className:"cs-street"},doors.map(door)),React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},React.createElement("div",{className:"wrap site-foot-in"},React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},React.createElement("div",{className:"sf-col"},React.createElement("h4",null,"HOME"),React.createElement("ul",null,home.map(([label,p,a])=>React.createElement("li",{key:label},React.createElement("a",{href:pageUrl(p,a),onClick:to(p,a)},label))))),React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>React.createElement("h4",{key:k},React.createElement("a",{className:'sf-work sf-work-'+k,href:pageUrl(p),onClick:to(p)},label,React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),React.createElement("div",{className:"sf-contact"},React.createElement("h4",null,"LET'S TALK!"),React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),React.createElement("div",{className:"sf-social"},React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),React.createElement("div",{className:"wrap sf-copy"},React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;/* Exhibition.jsx */function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},React.createElement("div",{className:"ex-wall-sticky"},React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},React.createElement("span",null,L.room," 01 \u2192")),React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},React.createElement("p",{className:"ex-statement"},L.exStatement),React.createElement("p",{className:"ex-period"},L.exPeriod),React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),React.createElement("div",{className:"room-num"},React.createElement("span",null,L.room),React.createElement("b",null,r.n)),React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),React.createElement("span",{className:"room-photo-cta"},L.viewDetail,React.createElement(Icon,{name:"plus",size:14}))),React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),React.createElement("div",{className:"detail-body wrap"},React.createElement("button",{className:"detail-close",onClick:onClose},React.createElement(Icon,{name:"arrow-left",size:18}),L.back),React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),React.createElement("h2",null,r.title),React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>React.createElement("div",{key:h},React.createElement("h3",null,h),React.createElement("p",null,L.placeholder)))),React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"exhibition"},React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},React.createElement("div",{className:"gallery-sticky"},React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},React.createElement("div",{className:"exit-sign"},React.createElement("span",null,L.exit),React.createElement(Icon,{name:"arrow-down",size:18}))),React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;/* Theatre.jsx */function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),React.createElement("span",{className:"act-num"},a.n[lang]),React.createElement("div",{className:"stage-photo"},React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"theatre"},React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>React.createElement("div",{className:"ticket-stage"},React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},React.createElement("span",{className:"bow-label"},L.curtainCall),React.createElement("h2",null,L.bowTitle),React.createElement("p",null,L.bowSub)),React.createElement(NS.Curtain,{open:o}));}),React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),React.createElement("span",{className:"label"},"Lobby"),React.createElement("h2",null,L.lobby)),React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;/* App.jsx */const pageUrl=(p,a)=>'./'+(p==='home'?'index':p)+'.html'+(a?'#'+a:'');function App(){const NS=window.NS;const page=window.__START||'home';const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);const[scrolled,setScrolled]=useState(false);const compact=useCompact();useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>{setTop(window.scrollY<window.innerHeight*.8);setScrolled(window.scrollY>24);};window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=e=>{if(e.persisted)setVeil(false);};window.addEventListener('pageshow',f);return()=>window.removeEventListener('pageshow',f);},[]);useEffect(()=>{const h=location.hash.slice(1);if(h&&!['home','exhibition','theatre'].includes(h))setTimeout(()=>scrollToId(h,false),700);},[]);const go=(p,anchor)=>{if(p===page){anchor?scrollToId(anchor):window.scrollTo({top:0,behavior:'smooth'});return;}setVeil(true);setTimeout(()=>{location.href=pageUrl(p,anchor);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return React.createElement(React.Fragment,null,React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:!(compact&&scrolled)&&(page==='theatre'||page==='home'&&sky==='night'&&top),onConsult:consult,onBrand:()=>go('home'),style:compact&&scrolled?{background:'rgba(250,247,240,.9)',WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)',boxShadow:'0 1px 0 var(--line-3)',pointerEvents:'auto',padding:'4px var(--gutter)',transition:'background 240ms'}:{transition:'background 240ms'}}),page==='home'&&React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&React.createElement(Exhibition,{lang:lang}),page==='theatre'&&React.createElement(Theatre,{lang:lang}),React.createElement(SiteFooter,{lang:lang,go:go,page:page}),React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/app.js",error:String(e&&e.message||e)});}// neneko-site/js/components.js
try{(()=>{/* @ds-bundle: {"format":4,"namespace":"NENEKOHANNINGDesignSystem_57fc37","components":[{"name":"ContactForm","sourcePath":"components/consult/ContactForm.jsx"},{"name":"CurrencyToggle","sourcePath":"components/consult/CurrencyToggle.jsx"},{"name":"LetterCard","sourcePath":"components/consult/LetterCard.jsx"},{"name":"Noren","sourcePath":"components/consult/Noren.jsx"},{"name":"PriceCard","sourcePath":"components/consult/PriceCard.jsx"},{"name":"ProcessSteps","sourcePath":"components/consult/ProcessSteps.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LANGS","sourcePath":"components/core/LangSwitch.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"FloorMap","sourcePath":"components/exhibit/FloorMap.jsx"},{"name":"Plaque","sourcePath":"components/exhibit/Plaque.jsx"},{"name":"Curtain","sourcePath":"components/theatre/Curtain.jsx"},{"name":"Playbill","sourcePath":"components/theatre/Playbill.jsx"},{"name":"ProgramNav","sourcePath":"components/theatre/ProgramNav.jsx"},{"name":"Ticket","sourcePath":"components/theatre/Ticket.jsx"}],"sourceHashes":{"components/consult/ContactForm.jsx":"e4798c9038fa","components/consult/CurrencyToggle.jsx":"997118d2d365","components/consult/LetterCard.jsx":"762935cfebec","components/consult/Noren.jsx":"b1561ea60e9e","components/consult/PriceCard.jsx":"6c3974e972e1","components/consult/ProcessSteps.jsx":"81050eadfce4","components/core/Button.jsx":"18a6339fafcc","components/core/LangSwitch.jsx":"27e6d31f454d","components/core/PhotoFrame.jsx":"a62535526eb1","components/core/SectionHeading.jsx":"19ab79009681","components/core/SiteHeader.jsx":"e9b9cf80f402","components/core/Stamp.jsx":"c2c5aae7f878","components/exhibit/FloorMap.jsx":"d0afedfb7479","components/exhibit/Plaque.jsx":"8f249a341562","components/theatre/Curtain.jsx":"7c56876f50e2","components/theatre/Playbill.jsx":"c0374e9420c9","components/theatre/ProgramNav.jsx":"8424b50a0171","components/theatre/Ticket.jsx":"7949894fe5e8","neneko-site/js/app.js":"bffcc86855f1","neneko-site/js/components.js":"73f3aa37ffd8","neneko-site/js/i18n.js":"668c735fe068","ui_kits/portfolio/App.jsx":"2c23763a8419","ui_kits/portfolio/ConsultDesk.jsx":"62e9eac72dbe","ui_kits/portfolio/Exhibition.jsx":"358dbe4ced62","ui_kits/portfolio/Home.jsx":"b3ec016597ad","ui_kits/portfolio/Intro.jsx":"dfa69b6139c2","ui_kits/portfolio/Street.jsx":"20922856d9a7","ui_kits/portfolio/Theatre.jsx":"dc8bb67decd6","ui_kits/portfolio/hooks.jsx":"f50fead4f4e0","ui_kits/portfolio/i18n.js":"e1bc4857d67f"},"inlinedExternals":[],"unexposedExports":[]} */(()=>{const __ds_ns=window.NENEKOHANNINGDesignSystem_57fc37=window.NENEKOHANNINGDesignSystem_57fc37||{};const __ds_scope={};__ds_ns.__errors=__ds_ns.__errors||[];// components/consult/ContactForm.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const L0={name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'};const field={width:'100%',minHeight:48,padding:'10px 14px',boxSizing:'border-box',border:'1px solid var(--line-2)',borderRadius:'var(--radius-sm)',background:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--ink-1)',outline:'none'};function Row({label,children,full}){return/*#__PURE__*/React.createElement("label",{style:{display:'flex',flexDirection:'column',gap:6,gridColumn:full?'1 / -1':'auto'}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},label),children);}function ContactForm({labels,tone='exhibit',defaultType=0,onSubmit,style}){const L={...L0,...labels};const t=TC[tone]||TC.exhibit;const[type,setType]=useState(defaultType);const[sent,setSent]=useState(false);const submit=e=>{e.preventDefault();setSent(true);onSubmit&&onSubmit(Object.fromEntries(new FormData(e.target)));};return/*#__PURE__*/React.createElement("form",{onSubmit:submit,style:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',gap:'20px 20px',...style}},/*#__PURE__*/React.createElement(Row,{label:L.name},/*#__PURE__*/React.createElement("input",{name:"name",style:field})),/*#__PURE__*/React.createElement(Row,{label:L.org},/*#__PURE__*/React.createElement("input",{name:"org",style:field})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',flexDirection:'column',gap:6}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},L.type),/*#__PURE__*/React.createElement("div",{role:"radiogroup",style:{display:'flex',flexWrap:'wrap',gap:8}},L.types.map((x,i)=>/*#__PURE__*/React.createElement("button",{type:"button",key:i,role:"radio","aria-checked":type===i,onClick:()=>setType(i),style:{minHeight:44,padding:'0 20px',borderRadius:'var(--radius-full)',border:'1px solid '+(type===i?t.c:'var(--line-2)'),background:type===i?t.c:'var(--paper-0)',color:type===i?'var(--paper-0)':'var(--ink-2)',fontFamily:'var(--font-sans)',fontSize:14,cursor:'pointer'}},x))),/*#__PURE__*/React.createElement("input",{type:"hidden",name:"type",value:L.types[type]})),/*#__PURE__*/React.createElement(Row,{label:L.budget},/*#__PURE__*/React.createElement("select",{name:"budget",style:{...field,appearance:'none',backgroundImage:'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(-45deg, transparent 50%, var(--ink-3) 50%)',backgroundSize:'5px 5px',backgroundPosition:'calc(100% - 20px) 50%, calc(100% - 15px) 50%',backgroundRepeat:'no-repeat'}},L.budgets.map(b=>/*#__PURE__*/React.createElement("option",{key:b},b)))),/*#__PURE__*/React.createElement(Row,{label:L.timeline},/*#__PURE__*/React.createElement("input",{name:"timeline",placeholder:L.timelineHint,style:field})),/*#__PURE__*/React.createElement(Row,{label:L.message,full:true},/*#__PURE__*/React.createElement("textarea",{name:"message",rows:5,style:{...field,resize:'vertical',lineHeight:1.7}})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}},/*#__PURE__*/React.createElement("button",{type:"submit",style:{minHeight:48,padding:'0 32px',borderRadius:'var(--radius-full)',border:'1px solid '+t.c,background:'transparent',color:t.c,fontFamily:'var(--font-sans)',fontSize:15,letterSpacing:'.1em',cursor:'pointer'}},L.submit),sent&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:t.c}},L.sent)));}Object.assign(__ds_scope,{ContactForm});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ContactForm.jsx",error:String(e&&e.message||e)});}// components/consult/CurrencyToggle.jsx
try{(()=>{function CurrencyToggle({value='TWD',onChange,options=[{id:'TWD',label:'NT$'},{id:'JPY',label:'JPY'}],tone='ink',style}){const c=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Currency",style:{display:'inline-flex',padding:3,borderRadius:'var(--radius-full)',border:'1px solid var(--line-2)',background:'var(--paper-0)',...style}},options.map(o=>/*#__PURE__*/React.createElement("button",{key:o.id,onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:56,padding:'0 14px',borderRadius:'var(--radius-full)',border:0,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.08em',background:value===o.id?c:'transparent',color:value===o.id?'var(--paper-0)':'var(--ink-2)',transition:'background var(--dur-base), color var(--dur-base)'}},o.label)));}Object.assign(__ds_scope,{CurrencyToggle});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/CurrencyToggle.jsx",error:String(e&&e.message||e)});}// components/consult/LetterCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function LetterCard({quote,name,role,org,placeholder=false,placeholderLabel='待替換',tilt=0,tone='exhibit',width=240,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("figure",{style:{margin:0,width,minHeight:width*1.9,flexShrink:0,position:'relative',display:'flex',flexDirection:'column',padding:'44px 24px 24px',boxSizing:'border-box',background:'var(--paper-0)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, '+t.t+' 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'content-box',boxShadow:'var(--shadow-paper)',borderRadius:'var(--radius-xs)',transform:'rotate('+tilt+'deg)',transformOrigin:'50% 0',transition:'transform var(--dur-slow) var(--ease-soft)',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:16,left:24,right:24,display:'flex',gap:6,alignItems:'center'}},/*#__PURE__*/React.createElement("span",{style:{width:8,height:8,borderRadius:8,background:'var(--karashi-1)'}}),/*#__PURE__*/React.createElement("span",{style:{flex:1,borderTop:'1px solid '+t.c,opacity:.5}})),placeholder&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:10,right:12,fontSize:10,letterSpacing:'.12em',color:t.c,border:'1px dashed '+t.c,padding:'1px 6px',borderRadius:4,background:'var(--paper-0)'}},placeholderLabel),/*#__PURE__*/React.createElement("blockquote",{style:{margin:0,flex:1,fontFamily:'var(--font-serif)',fontSize:15,lineHeight:'32px',color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},quote),/*#__PURE__*/React.createElement("figcaption",{style:{marginTop:20,display:'flex',flexDirection:'column',gap:2}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,color:'var(--ink-1)'}},name),/*#__PURE__*/React.createElement("span",{style:{fontSize:12,lineHeight:1.6,color:'var(--ink-3)'}},[role,org].filter(Boolean).join('｜'))));}Object.assign(__ds_scope,{LetterCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/LetterCard.jsx",error:String(e&&e.message||e)});}// components/consult/Noren.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const KF='@keyframes nh-sway{0%,100%{transform:rotate(0deg) skewX(0deg)}30%{transform:rotate(1.4deg) skewX(-1deg)}70%{transform:rotate(-1deg) skewX(.8deg)}}';function Noren({label='相談',sub,tone='exhibit',open:openProp,onOpen,sway=true,height=280,style}){const[hover,setHover]=useState(false);const[self,setSelf]=useState(false);const open=openProp??self;const t=TC[tone]||TC.exhibit;const chars=Array.from(label);const n=Math.max(2,chars.length);const toggle=()=>{setSelf(true);onOpen&&onOpen();};const part=hover&&!open?14:0;return/*#__PURE__*/React.createElement("div",{style:{position:'relative',width:'100%',maxWidth:560,margin:'0 auto',height,...style}},/*#__PURE__*/React.createElement("style",null,KF),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',top:0,left:-12,right:-12,height:10,borderRadius:10,background:'var(--wood-3)',zIndex:2,opacity:open?0:1,transition:'opacity var(--dur-slow) var(--ease-out) 200ms'}}),/*#__PURE__*/React.createElement("button",{onClick:toggle,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),"aria-expanded":open,style:{position:'absolute',inset:'6px 0 0',display:'flex',gap:4,padding:0,border:0,background:'none',cursor:'pointer'}},Array.from({length:n}).map((_,i)=>{const side=i<n/2?-1:1;const centre=i-(n-1)/2;const tf=open?'translateX('+side*120+'%) rotate('+side*6+'deg)':'translateX('+(centre===0?0:Math.sign(centre)*part)+'px)';return/*#__PURE__*/React.createElement("span",{key:i,style:{flex:1,height:'100%',transformOrigin:'top center',transform:tf,opacity:open?0:1,transition:'transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)'}},/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',background:t.c,borderRadius:'0 0 3px 3px',transformOrigin:'top center',animation:sway&&!open?'nh-sway '+(5+i*.7)+'s ease-in-out '+-i*1.3+'s infinite':'none',boxShadow:'inset 0 -14px 0 -8px rgba(0,0,0,.08)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:Math.min(88,height*.3),color:'var(--paper-0)',fontWeight:500}},chars[i]||'')));})),sub&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',left:0,right:0,bottom:-36,textAlign:'center',fontFamily:'var(--font-sans)',fontSize:12,letterSpacing:'.24em',color:'var(--ink-3)',opacity:open?0:1,transition:'opacity var(--dur-base)'}},sub));}Object.assign(__ds_scope,{Noren});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/Noren.jsx",error:String(e&&e.message||e)});}// components/consult/PriceCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function PriceCard({index,title,desc,price,unit,tone='exhibit',visible=true,delay=0,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("article",{style:{position:'relative',display:'flex',flexDirection:'column',gap:14,padding:'36px 26px 28px',borderRadius:'var(--radius-sm)',background:'var(--wood-1)',backgroundImage:'repeating-linear-gradient(92deg, rgba(138,110,69,.08) 0 2px, transparent 2px 9px, rgba(138,110,69,.05) 9px 10px, transparent 10px 23px)',boxShadow:'var(--shadow-paper), inset 0 0 0 1px rgba(138,110,69,.25)',color:'var(--ink-1)',opacity:visible?1:0,transform:visible?'none':'translateY(28px)',transition:'opacity var(--dur-slow) var(--ease-out) '+delay+'ms, transform var(--dur-slow) var(--ease-out) '+delay+'ms',minHeight:260,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:12,left:'50%',width:8,height:8,marginLeft:-4,borderRadius:8,background:'var(--wood-3)',boxShadow:'inset 0 1px 2px rgba(0,0,0,.4)'}}),index!=null&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:11,letterSpacing:'.24em',color:t.c}},String(index).padStart(2,'0')),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:22,fontWeight:600,lineHeight:1.4,letterSpacing:'.06em',color:'var(--ink-1)'}},title),/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:14,lineHeight:1.8,color:'var(--ink-2)',flex:1,textWrap:'pretty'}},desc),/*#__PURE__*/React.createElement("div",{style:{borderTop:'1px solid rgba(138,110,69,.45)',paddingTop:14,display:'flex',alignItems:'baseline',flexWrap:'wrap',gap:'2px 6px'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:26,fontWeight:600,color:t.d,letterSpacing:'.02em'}},price),unit&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},unit)));}Object.assign(__ds_scope,{PriceCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/PriceCard.jsx",error:String(e&&e.message||e)});}// components/consult/ProcessSteps.jsx
try{(()=>{const{useRef,useState,useEffect}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function ProcessSteps({steps=[],tone='exhibit',direction='auto',style}){const ref=useRef(null);const[w,setW]=useState(800);const t=TC[tone]||TC.exhibit;useEffect(()=>{if(!ref.current||typeof ResizeObserver==='undefined')return;const ro=new ResizeObserver(e=>setW(e[0].contentRect.width));ro.observe(ref.current);return()=>ro.disconnect();},[]);const vert=direction==='vertical'||direction==='auto'&&w<560;return/*#__PURE__*/React.createElement("ol",{ref:ref,style:{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:vert?'1fr':'repeat('+steps.length+', minmax(0,1fr))',gap:vert?28:12,position:'relative',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:vert?{position:'absolute',left:21,top:22,bottom:22,borderLeft:'1px solid var(--line-2)'}:{position:'absolute',left:'calc(100% / '+steps.length*2+')',right:'calc(100% / '+steps.length*2+')',top:22,borderTop:'1px solid var(--line-2)'}}),steps.map((s,i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{position:'relative',display:'flex',flexDirection:vert?'row':'column',alignItems:vert?'flex-start':'center',gap:vert?18:14,textAlign:vert?'left':'center'}},/*#__PURE__*/React.createElement("span",{style:{width:44,height:44,flexShrink:0,borderRadius:44,border:'1px solid '+t.c,background:'var(--paper-1)',color:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-serif)',fontSize:16}},i+1),/*#__PURE__*/React.createElement("span",{style:{display:'flex',flexDirection:'column',gap:4}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:18,color:'var(--ink-1)',letterSpacing:'.08em'}},s.label),s.note&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,lineHeight:1.7,color:'var(--ink-3)'}},s.note)))));}Object.assign(__ds_scope,{ProcessSteps});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ProcessSteps.jsx",error:String(e&&e.message||e)});}// components/core/Button.jsx
try{(()=>{const{useState}=React;const TONES={ink:{bg:'var(--ink-1)',bgH:'var(--ink-2)',fg:'var(--paper-0)'},exhibit:{bg:'var(--matcha-1)',bgH:'var(--matcha-2)',fg:'var(--paper-0)'},theatre:{bg:'var(--shu-1)',bgH:'var(--shu-2)',fg:'var(--paper-0)'},paper:{bg:'var(--paper-0)',bgH:'var(--paper-2)',fg:'var(--ink-1)'}};function Button({children,variant='primary',tone='ink',size='md',href,icon,iconRight,disabled,onClick,type='button',style,...rest}){const[h,setH]=useState(false);const[p,setP]=useState(false);const t=TONES[tone]||TONES.ink;const H=size==='lg'?56:size==='sm'?44:48;const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,minHeight:H,padding:variant==='ghost'?'0 4px':size==='lg'?'0 32px':'0 24px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-sans)',fontSize:size==='lg'?16:15,fontWeight:500,letterSpacing:'.08em',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,border:'1px solid transparent',transition:'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',transform:p&&!disabled?'scale(.98)':h&&!disabled?'translateY(-1px)':'none',whiteSpace:'nowrap',boxSizing:'border-box'};const v=variant==='primary'?{background:h?t.bgH:t.bg,color:t.fg}:variant==='secondary'?{background:h?t.bg:'transparent',color:h?t.fg:tone==='paper'?'var(--paper-0)':t.bg,borderColor:tone==='paper'?'var(--paper-0)':t.bg}:{background:'transparent',color:tone==='paper'?'var(--paper-0)':tone==='ink'?'var(--ink-1)':t.bg,borderRadius:0,borderBottom:'1px solid currentColor',minHeight:44};const Tag=href?'a':'button';return React.createElement(Tag,{href,type:href?undefined:type,disabled,onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false);},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),style:{...base,...v,...style},...rest},icon,React.createElement('span',null,children),iconRight);}Object.assign(__ds_scope,{Button});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Button.jsx",error:String(e&&e.message||e)});}// components/core/LangSwitch.jsx
try{(()=>{const LANGS=[{id:'zh',label:'CH'},{id:'ja',label:'JP'},{id:'en',label:'EN'}];function LangSwitch({value='zh',onChange,options=LANGS,dark=false,style}){const fg=dark?'var(--night-ink)':'var(--ink-1)';const mute=dark?'var(--night-ink-2)':'var(--ink-3)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Language",style:{display:'flex',alignItems:'center',gap:2,fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.06em',...style}},options.map((o,i)=>/*#__PURE__*/React.createElement(React.Fragment,{key:o.id},i>0&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{color:mute,opacity:.6}},"/"),/*#__PURE__*/React.createElement("button",{onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:44,padding:'0 6px',background:'none',border:0,cursor:'pointer',color:value===o.id?fg:mute,fontFamily:'inherit',fontSize:'inherit',letterSpacing:'inherit',position:'relative'}},o.label,/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',left:'50%',bottom:8,width:4,height:4,marginLeft:-2,borderRadius:4,background:'var(--karashi-1)',opacity:value===o.id?1:0,transition:'opacity var(--dur-base)'}})))));}Object.assign(__ds_scope,{LANGS,LangSwitch});})();}catch(e){__ds_ns.__errors.push({path:"components/core/LangSwitch.jsx",error:String(e&&e.message||e)});}// components/core/PhotoFrame.jsx
try{(()=>{function PhotoFrame({src,alt='',position='50% 50%',label='PHOTO',shape='rounded',ratio='4 / 3',tone='paper',style,children}){const radius=shape==='circle'?'50%':shape==='arch'?'999px 999px var(--radius-md) var(--radius-md)':shape==='square'?'var(--radius-xs)':'var(--radius-lg)';const dark=tone==='night';const stripe=dark?'repeating-linear-gradient(135deg, #2A2622 0 10px, #24211D 10px 20px)':'repeating-linear-gradient(135deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)';return/*#__PURE__*/React.createElement("div",{style:{position:'relative',aspectRatio:shape==='circle'?'1 / 1':ratio,borderRadius:radius,overflow:'hidden',background:src?'var(--paper-3)':stripe,width:'100%',...style}},src?/*#__PURE__*/React.createElement("img",{src:src,alt:alt,style:{width:'100%',height:'100%',objectFit:'cover',objectPosition:position,display:'block'}}):/*#__PURE__*/React.createElement("span",{style:{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.14em',color:dark?'var(--night-ink-2)':'var(--ink-3)',textAlign:'center',padding:12}},label),children);}Object.assign(__ds_scope,{PhotoFrame});})();}catch(e){__ds_ns.__errors.push({path:"components/core/PhotoFrame.jsx",error:String(e&&e.message||e)});}// components/core/SectionHeading.jsx
try{(()=>{function SectionHeading({eyebrow,title,vertical=false,dot=true,color='var(--ink-1)',as='h2',size='h2',style}){const fs=size==='display'?'var(--fs-display)':size==='h1'?'var(--fs-h1)':size==='h3'?'var(--fs-h3)':'var(--fs-h2)';const H=as;return/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:vertical?'row-reverse':'column',alignItems:vertical?'flex-start':'flex-start',gap:vertical?16:12,...style}},eyebrow&&/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontSize:'var(--fs-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--ink-3)',writingMode:vertical?'vertical-rl':'horizontal-tb'}},dot&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:7,background:'var(--karashi-1)',flexShrink:0}}),eyebrow),/*#__PURE__*/React.createElement(H,{style:{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:fs,lineHeight:vertical?1.5:1.3,letterSpacing:vertical?'.18em':'.04em',color,writingMode:vertical?'vertical-rl':'horizontal-tb',textWrap:'pretty'}},title));}Object.assign(__ds_scope,{SectionHeading});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SectionHeading.jsx",error:String(e&&e.message||e)});}// components/core/SiteHeader.jsx
try{(()=>{const COPY={zh:'相談',ja:'相談',en:'Consult'};function SiteHeader({lang='zh',onLang,onConsult,tone='ink',dark=false,brand='NENEKO',onBrand,consultLabel,style}){const bg=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("header",{style:{position:'fixed',top:0,left:0,right:0,zIndex:'var(--z-header)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'10px var(--gutter)',pointerEvents:'none',...style}},/*#__PURE__*/React.createElement("button",{onClick:onBrand,style:{pointerEvents:'auto',background:'none',border:0,padding:0,minHeight:44,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:700,letterSpacing:'.12em',color:dark?'var(--night-ink)':'var(--ink-1)',whiteSpace:'nowrap'}},brand),/*#__PURE__*/React.createElement("div",{style:{pointerEvents:'auto',display:'flex',alignItems:'center',gap:12}},/*#__PURE__*/React.createElement(__ds_scope.LangSwitch,{value:lang,onChange:onLang,dark:dark}),/*#__PURE__*/React.createElement("button",{onClick:onConsult,style:{minHeight:44,minWidth:64,padding:'0 16px',borderRadius:'var(--radius-full)',border:0,background:bg,color:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.12em',cursor:'pointer',boxShadow:'var(--shadow-paper)',whiteSpace:'nowrap'}},consultLabel||COPY[lang]||COPY.zh)));}Object.assign(__ds_scope,{SiteHeader});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SiteHeader.jsx",error:String(e&&e.message||e)});}// components/core/Stamp.jsx
try{(()=>{function Stamp({top,main,bottom,shape='circle',color='var(--shu-1)',size=112,rotate=-8,inked=true,style}){const r=shape==='circle'?'50%':shape==='oval'?'50% / 42%':'var(--radius-sm)';const w=shape==='oval'?size*1.35:size;return/*#__PURE__*/React.createElement("div",{"aria-label":[top,main,bottom].filter(Boolean).join(' '),style:{width:w,height:size,borderRadius:r,border:'2px solid '+color,color,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,padding:6,boxSizing:'border-box',transform:'rotate('+rotate+'deg) scale('+(inked?1:1.4)+')',opacity:inked?.88:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast) linear',mixBlendMode:'multiply',position:'relative',flexShrink:0,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',inset:4,borderRadius:r,border:'1px solid '+color,opacity:.7}}),top&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.085),letterSpacing:'.2em',fontWeight:500}},top),main&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:size*.2,fontWeight:600,letterSpacing:'.08em',lineHeight:1.1,textAlign:'center'}},main),bottom&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.08),letterSpacing:'.16em'}},bottom));}Object.assign(__ds_scope,{Stamp});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Stamp.jsx",error:String(e&&e.message||e)});}// components/exhibit/FloorMap.jsx
try{(()=>{const{useState}=React;function FloorMap({rooms=[],current,visited=[],onJump,title='展場平面圖',collapsible=false,defaultOpen=true,labels={entrance:'入口',exit:'出口 EXIT'},style}){const[open,setOpen]=useState(defaultOpen);const body=/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:'column',gap:10}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'.16em',color:'var(--ink-3)'}},/*#__PURE__*/React.createElement("span",null,labels.entrance," \u2192"),/*#__PURE__*/React.createElement("span",null,labels.exit)),/*#__PURE__*/React.createElement("div",{style:{display:'grid',gridTemplateColumns:'repeat('+rooms.length+', 1fr)',border:'1.5px solid var(--ink-1)',borderRadius:2}},rooms.map((r,i)=>{const on=r.id===current;const v=visited.includes(r.id);return/*#__PURE__*/React.createElement("button",{key:r.id,onClick:()=>onJump&&onJump(r.id),"aria-current":on?'step':undefined,"aria-label":r.label,style:{position:'relative',minHeight:56,minWidth:44,padding:0,border:0,borderLeft:i?'1px solid var(--line-2)':0,background:on?'var(--matcha-4)':'transparent',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',paddingBottom:6,transition:'background var(--dur-base)'}},/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:8,left:'50%',width:24,height:24,marginLeft:-12,borderRadius:24,border:'1.5px solid var(--matcha-1)',color:'var(--matcha-1)',fontFamily:'var(--font-serif)',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',transform:v?'rotate(-12deg) scale(1)':'scale(1.6)',opacity:v?.9:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast)'}},"\u6E08"),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:13,color:on?'var(--matcha-2)':'var(--ink-2)'}},String(i+1).padStart(2,'0')));})),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{height:10,borderBottom:'1px dashed var(--line-2)',position:'relative'}},rooms.findIndex(r=>r.id===current)>=0&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:4,left:'calc('+(rooms.findIndex(r=>r.id===current)+.5)/rooms.length*100+'% - 5px)',width:10,height:10,borderRadius:10,background:'var(--karashi-1)',transition:'left var(--dur-slow) var(--ease-out)'}})),/*#__PURE__*/React.createElement("div",{style:{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em'}},visited.length," / ",rooms.length));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:260,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 12px',background:'rgba(250,247,240,.94)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lift)',fontFamily:'var(--font-sans)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 8px':'0 16px',border:0,background:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:12,color:'var(--matcha-1)'}},visited.length,"/",rooms.length," ",open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em',marginBottom:8}},title),(!collapsible||open)&&body);}Object.assign(__ds_scope,{FloorMap});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/FloorMap.jsx",error:String(e&&e.message||e)});}// components/exhibit/Plaque.jsx
try{(()=>{function Plaque({number,year,title,client,role,note,labels={client:'委託單位',role:'我的角色'},style}){return/*#__PURE__*/React.createElement("aside",{style:{width:'100%',maxWidth:300,padding:'20px 20px 18px',boxSizing:'border-box',background:'var(--paper-0)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-xs)',boxShadow:'0 1px 0 rgba(30,28,25,.05)',display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-sans)',...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}},/*#__PURE__*/React.createElement("span",{style:{fontSize:11,letterSpacing:'.22em',color:'var(--matcha-1)',fontWeight:500}},number),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-3)'}},year)),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:19,lineHeight:1.5,fontWeight:600,color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 12px',fontSize:12.5,lineHeight:1.6,borderTop:'1px solid var(--line-3)',paddingTop:10}},client&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.client),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},client)),role&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.role),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},role))),note&&/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:13,lineHeight:1.8,color:'var(--ink-2)',textWrap:'pretty'}},note));}Object.assign(__ds_scope,{Plaque});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/Plaque.jsx",error:String(e&&e.message||e)});}// components/theatre/Curtain.jsx
try{(()=>{const fold='repeating-linear-gradient(90deg, var(--shu-5) 0, var(--shu-2) 4%, var(--shu-1) 8%, var(--shu-3) 10%, var(--shu-1) 12%, var(--shu-2) 16%, var(--shu-5) 20%)';function Curtain({open=0,valance=true,duration,style}){const o=Math.max(0,Math.min(1,open));const tr=duration!=null?'transform '+duration+'ms var(--ease-inout)':'none';const panel=side=>({position:'absolute',top:0,bottom:0,width:'51%',[side]:0,background:fold,backgroundSize:'40% 100%',transform:'translateX('+(side==='left'?-1:1)*o*100+'%) scaleX('+(1-o*.25)+')',transformOrigin:side==='left'?'0 50%':'100% 50%',transition:tr,boxShadow:side==='left'?'inset -30px 0 40px -20px rgba(0,0,0,.5)':'inset 30px 0 40px -20px rgba(0,0,0,.5)'});return/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',inset:0,overflow:'hidden',pointerEvents:o>.95?'none':'auto',...style}},/*#__PURE__*/React.createElement("div",{style:panel('left')}),/*#__PURE__*/React.createElement("div",{style:panel('right')}),valance&&/*#__PURE__*/React.createElement("div",{style:{position:'absolute',top:0,left:0,right:0,height:'9%',minHeight:36,background:fold,backgroundSize:'8% 100%',borderBottom:'3px solid var(--karashi-1)',boxShadow:'0 10px 20px rgba(0,0,0,.4)'}}));}Object.assign(__ds_scope,{Curtain});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Curtain.jsx",error:String(e&&e.message||e)});}// components/theatre/Playbill.jsx
try{(()=>{function Playbill({act,year,title,rows=[],style}){return/*#__PURE__*/React.createElement("div",{style:{width:'100%',maxWidth:480,margin:'0 auto',color:'var(--night-ink)',fontFamily:'var(--font-sans)',textAlign:'center',display:'flex',flexDirection:'column',gap:14,...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:14,fontSize:12,letterSpacing:'.3em',color:'var(--shu-3)'}},/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}}),act,year&&/*#__PURE__*/React.createElement("span",{style:{color:'var(--night-ink-2)'}},year),/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}})),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:'clamp(22px,2.6vw,32px)',lineHeight:1.45,fontWeight:500,color:'var(--night-ink)',letterSpacing:'.06em',textWrap:'balance'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:'6px 0 0',display:'flex',flexDirection:'column',gap:6,fontSize:13.5}},rows.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:i,style:{display:'flex',alignItems:'baseline',gap:10}},/*#__PURE__*/React.createElement("dt",{style:{color:'var(--night-ink-2)',letterSpacing:'.14em',whiteSpace:'nowrap'}},r.k),/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{flex:1,borderBottom:'1px dotted var(--night-4)',transform:'translateY(-4px)'}}),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--night-ink)',textAlign:'right'}},r.v)))));}Object.assign(__ds_scope,{Playbill});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Playbill.jsx",error:String(e&&e.message||e)});}// components/theatre/ProgramNav.jsx
try{(()=>{const{useState}=React;function ProgramNav({acts=[],current,onJump,title='節目單',collapsible=false,defaultOpen=true,style}){const[open,setOpen]=useState(defaultOpen);const list=/*#__PURE__*/React.createElement("ol",{style:{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column'}},acts.map(a=>{const on=a.id===current;return/*#__PURE__*/React.createElement("li",{key:a.id},/*#__PURE__*/React.createElement("button",{onClick:()=>onJump&&onJump(a.id),"aria-current":on?'step':undefined,style:{width:'100%',minHeight:44,padding:'6px 0',border:0,background:'none',cursor:'pointer',display:'grid',gridTemplateColumns:'14px auto 1fr',alignItems:'center',gap:8,textAlign:'left',color:on?'var(--night-ink)':'var(--night-ink-2)',fontFamily:'var(--font-sans)',fontSize:12.5}},/*#__PURE__*/React.createElement("span",{style:{width:6,height:6,borderRadius:6,background:on?'var(--lamp-1)':'transparent',border:'1px solid '+(on?'var(--lamp-1)':'var(--night-4)'),boxShadow:on?'0 0 8px var(--lamp-glow)':'none'}}),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',letterSpacing:'.1em',color:on?'var(--shu-3)':'inherit',whiteSpace:'nowrap'}},a.label),/*#__PURE__*/React.createElement("span",{style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},a.title)));}));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:240,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 8px',background:'rgba(23,21,19,.88)',border:'1px solid var(--night-4)',borderRadius:'var(--radius-md)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 6px':'0 16px',border:0,background:'none',color:'var(--night-ink)',fontFamily:'var(--font-serif)',fontSize:14,letterSpacing:'.2em',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',color:'var(--shu-3)'}},open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:13,letterSpacing:'.3em',color:'var(--night-ink)',paddingBottom:6,borderBottom:'1px solid var(--night-4)',marginBottom:4}},title),(!collapsible||open)&&list);}Object.assign(__ds_scope,{ProgramNav});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/ProgramNav.jsx",error:String(e&&e.message||e)});}// components/theatre/Ticket.jsx
try{(()=>{function Ticket({title='NENEKO / HANNING',sub,date,seat,no,admit='ADMIT ONE',stubLabel='もぎり',torn=0,style}){const tr=Math.max(0,Math.min(1,torn));const notch='radial-gradient(circle at 0 50%, transparent 10px, #000 10.5px)';return/*#__PURE__*/React.createElement("div",{style:{display:'flex',width:'100%',maxWidth:560,filter:'drop-shadow(0 18px 30px rgba(0,0,0,.45))',...style}},/*#__PURE__*/React.createElement("div",{style:{flex:1,minWidth:0,padding:'28px 28px 24px',background:'var(--paper-1)',borderRadius:'8px 0 0 8px',display:'flex',flexDirection:'column',gap:12,borderRight:'2px dashed var(--paper-4)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:10,letterSpacing:'.3em',color:'var(--shu-1)'}},admit),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:'clamp(22px,3vw,30px)',lineHeight:1.3,color:'var(--ink-1)',letterSpacing:'.06em'}},title),sub&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},sub),/*#__PURE__*/React.createElement("div",{style:{display:'flex',gap:24,flexWrap:'wrap',fontSize:12,color:'var(--ink-3)',letterSpacing:'.1em',borderTop:'1px solid var(--line-3)',paddingTop:10}},date&&/*#__PURE__*/React.createElement("span",null,date),seat&&/*#__PURE__*/React.createElement("span",null,seat))),/*#__PURE__*/React.createElement("div",{style:{width:118,flexShrink:0,padding:'20px 14px',background:'var(--shu-1)',color:'var(--paper-0)',borderRadius:'0 8px 8px 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',gap:8,transformOrigin:'0% 100%',transform:'translate('+tr*40+'px,'+tr*120+'px) rotate('+tr*24+'deg)',opacity:1-tr*.9,WebkitMaskImage:notch,maskImage:notch}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,writingMode:'vertical-rl',letterSpacing:'.3em'}},stubLabel),no&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.1em'}},no)));}Object.assign(__ds_scope,{Ticket});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Ticket.jsx",error:String(e&&e.message||e)});}// neneko-site/js/app.js
try{(()=>{/* hooks.jsx */const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE='./images/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const FORCE_TOUCH=/[?&]touch=1/.test(location.search);const useTouch=()=>useMedia('(hover: none)')||FORCE_TOUCH;const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}Object.assign(window,{useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});/* Intro.jsx */const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch('./js/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},React.createElement("b",null,a),React.createElement("span",null,"\uFF5C"),b))),React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;/* Street.jsx */function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return React.createElement("div",{className:"sky","aria-hidden":"true"},React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},React.createElement("span",{className:"moon"})),STARS.map((s,i)=>React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},React.createElement("span",{className:"cloud c1"}),React.createElement("span",{className:"cloud c2"}),React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint,big}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("clipPath",{id:"glass-clip"},React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),React.createElement("g",{clipPath:"url(#glass-clip)"},React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day',big:big}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap,big}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night',big:big}));}function StreetTag({x,y,rot,text,hidden,light,active,big}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text,big]);return React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:big?24:16,fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return React.createElement("div",{className:cls,style:{opacity:dim}},React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[mode,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom(compact?{which,ox:'50%',oy:which==='ex'?'50%':'86%'}:{which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},React.createElement(Sky,{mode:mode}),React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' '+(zoom.oy||'78%')}:null},React.createElement("div",{className:"street-top"},React.createElement("div",{className:"tagline-stack"},React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),compact?React.createElement("p",{className:"byline is-2l"},L.byline.split('｜').slice(1).map((t,n)=>React.createElement("span",{key:n},t))):React.createElement("p",{className:"byline"},L.byline)),compact?React.createElement("div",{className:"street-stack"},React.createElement("svg",{className:"street-svg is-stack",viewBox:"-50 70 620 470",preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-60",y1:"500",x2:"580",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-60",y1:"524",x2:"580",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(Museum,_extends({x:0,mode:mode,lang:lang,glint:glint,big:true},handlers('ex')))),React.createElement("svg",{className:"street-svg is-stack",viewBox:"-90 70 600 470",preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-100",y1:"500",x2:"520",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-100",y1:"524",x2:"520",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(TheatreBldg,_extends({x:0,mode:mode,lang:lang,big:true},handlers('th'))))):React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),React.createElement("p",{className:"street-hint"},React.createElement("span",{className:"hint-arrow"},React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),React.createElement("span",{className:"hint-text"},touch?L.hintTap:L.hintHover))),React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;/* ConsultDesk.jsx */function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},React.createElement("div",{className:"desk-head wrap"},React.createElement("span",{className:"desk-plate"},React.createElement("b",null,th?L.deskTh:L.deskEx),React.createElement("small",null,th?L.deskThSub:L.deskExSub))),React.createElement("div",{className:"desk-window wrap"},React.createElement("div",{className:"desk-panel"},React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},React.createElement("div",{className:"desk-row-head"},React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),React.createElement("div",{className:"price-grid"},services.map((s,i)=>React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),React.createElement("p",{className:"note"},L.priceNote),React.createElement("div",{className:"desk-block"},React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),React.createElement("div",{className:"desk-block contact"},React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:React.createElement(Icon,{name:"calendar-check",size:18})},L.book),React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),React.createElement("div",{className:"contact-links"},React.createElement("a",{href:"#","aria-label":"Email"},React.createElement(Icon,{name:"mail",size:20}),React.createElement("span",null,"Email")),React.createElement("a",{href:"#","aria-label":"LINE"},React.createElement(Icon,{name:"message-circle",size:20}),React.createElement("span",null,"LINE")),React.createElement("a",{href:"#","aria-label":"Instagram"},React.createElement(Icon,{name:"instagram",size:20}),React.createElement("span",null,"Instagram"))),React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;/* Home.jsx */function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[intro,setIntro]=useState(()=>!reduced&&!sessionStorage.getItem('nh-intro-seen'));const done=()=>{sessionStorage.setItem('nh-intro-seen','1');setIntro(false);};const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});const replay=()=>{window.scrollTo({top:0});setIntro(true);};return React.createElement("main",{className:"home"},intro&&React.createElement(Intro,{lang:lang,compact:compact,onDone:done}),React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},React.createElement("span",{className:"about-card-photo"},React.createElement("img",{src:'./images/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),React.createElement("img",{className:"alt",src:'./images/desk.jpg',alt:"",style:{objectPosition:'62% 40%'}})),React.createElement("span",{className:"about-card-cap"},React.createElement("b",null,"NENEKO"),React.createElement("small",null,L.cardRole))),React.createElement("div",{className:"about-text"},React.createElement("span",{className:"about-eyebrow"},L.since),React.createElement("div",{className:"about-head"},React.createElement("h2",{className:"about-name"},"About me"),React.createElement("a",{className:"cv-link",href:"#"},React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>React.createElement("p",{key:n,className:"about-lead"},p))),React.createElement("div",{className:"about-route"},React.createElement("ol",null,window.ROUTE.map(([y,c],n)=>React.createElement("li",{key:y},React.createElement("b",null,y),React.createElement("span",null,c)))),React.createElement(NS.Button,{variant:"ghost",onClick:replay,icon:React.createElement(Icon,{name:"rotate-ccw",size:16})},L.replay))),React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},React.createElement("div",{className:"wrap"},React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},React.createElement("div",{className:"marquee-track"},[0,1].map(k=>React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>React.createElement("li",{key:p},p)))))),React.createElement("div",{className:"voices wrap"},React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},React.createElement("span",null,L.teammate),React.createElement(Icon,{name:"arrow-down",size:26})))),React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const[open,setOpen]=useState(null);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];return React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},React.createElement("p",{className:"cs-note"},L.csNote.split('｜').map((t,n)=>React.createElement(React.Fragment,{key:n},n>0&&React.createElement("span",{className:"cs-sep"},"\uFF5C"),React.createElement("span",{className:"cs-nw"},t)))),React.createElement("div",{className:"cs-street"},doors.map(d=>{const st=open===d.k?'open':touch?'half':'closed';const on=st!=='closed';return React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},React.createElement("i",null)),React.createElement("h3",{className:"cs-q"},d.q),React.createElement("p",{className:"cs-egg"},d.egg),React.createElement("div",{className:"cs-open"},React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-rack"},React.createElement("i",null),React.createElement("i",null),React.createElement("i",null)),React.createElement("span",{className:"cs-uketsuke"},React.createElement("b",null,"\u53D7\u4ED8"),React.createElement("small",null,"RECEPTION")),React.createElement("span",{className:"cs-counter"})):React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-ledge"}))),React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},React.createElement("ul",null,d.sv.map((s,n)=>React.createElement("li",{key:n},React.createElement("span",null,s[0])))),React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,React.createElement(Icon,{name:"arrow-right",size:16}))),React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&React.createElement("span",{className:"cs-poster","aria-hidden":"true"},React.createElement("b",null,L.poster),React.createElement("i",null),React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));})),React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},React.createElement("div",{className:"wrap site-foot-in"},React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},React.createElement("div",{className:"sf-col"},React.createElement("h4",null,"HOME"),React.createElement("ul",null,home.map(([label,p,a])=>React.createElement("li",{key:label},React.createElement("a",{href:pageUrl(p,a),onClick:to(p,a)},label))))),React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>React.createElement("h4",{key:k},React.createElement("a",{className:'sf-work sf-work-'+k,href:pageUrl(p),onClick:to(p)},label,React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),React.createElement("div",{className:"sf-contact"},React.createElement("h4",null,"LET'S TALK!"),React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),React.createElement("div",{className:"sf-social"},React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),React.createElement("div",{className:"wrap sf-copy"},React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;/* Exhibition.jsx */function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},React.createElement("div",{className:"ex-wall-sticky"},React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},React.createElement("span",null,L.room," 01 \u2192")),React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},React.createElement("p",{className:"ex-statement"},L.exStatement),React.createElement("p",{className:"ex-period"},L.exPeriod),React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),React.createElement("div",{className:"room-num"},React.createElement("span",null,L.room),React.createElement("b",null,r.n)),React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),React.createElement("span",{className:"room-photo-cta"},L.viewDetail,React.createElement(Icon,{name:"plus",size:14}))),React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),React.createElement("div",{className:"detail-body wrap"},React.createElement("button",{className:"detail-close",onClick:onClose},React.createElement(Icon,{name:"arrow-left",size:18}),L.back),React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),React.createElement("h2",null,r.title),React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>React.createElement("div",{key:h},React.createElement("h3",null,h),React.createElement("p",null,L.placeholder)))),React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"exhibition"},React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},React.createElement("div",{className:"gallery-sticky"},React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},React.createElement("div",{className:"exit-sign"},React.createElement("span",null,L.exit),React.createElement(Icon,{name:"arrow-down",size:18}))),React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;/* Theatre.jsx */function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),React.createElement("span",{className:"act-num"},a.n[lang]),React.createElement("div",{className:"stage-photo"},React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"theatre"},React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>React.createElement("div",{className:"ticket-stage"},React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},React.createElement("span",{className:"bow-label"},L.curtainCall),React.createElement("h2",null,L.bowTitle),React.createElement("p",null,L.bowSub)),React.createElement(NS.Curtain,{open:o}));}),React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),React.createElement("span",{className:"label"},"Lobby"),React.createElement("h2",null,L.lobby)),React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;/* App.jsx */const pageUrl=(p,a)=>'./'+(p==='home'?'index':p)+'.html'+(a?'#'+a:'');function App(){const NS=window.NS;const page=window.__START||'home';const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);const[scrolled,setScrolled]=useState(false);const compact=useCompact();useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>{setTop(window.scrollY<window.innerHeight*.8);setScrolled(window.scrollY>24);};window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=e=>{if(e.persisted)setVeil(false);};window.addEventListener('pageshow',f);return()=>window.removeEventListener('pageshow',f);},[]);useEffect(()=>{const h=location.hash.slice(1);if(h&&!['home','exhibition','theatre'].includes(h))setTimeout(()=>scrollToId(h,false),700);},[]);const go=(p,anchor)=>{if(p===page){anchor?scrollToId(anchor):window.scrollTo({top:0,behavior:'smooth'});return;}setVeil(true);setTimeout(()=>{location.href=pageUrl(p,anchor);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return React.createElement(React.Fragment,null,React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:!(compact&&scrolled)&&(page==='theatre'||page==='home'&&sky==='night'&&top),onConsult:consult,onBrand:()=>go('home'),style:compact&&scrolled?{background:'rgba(250,247,240,.9)',WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)',boxShadow:'0 1px 0 var(--line-3)',pointerEvents:'auto',padding:'4px var(--gutter)',transition:'background 240ms'}:{transition:'background 240ms'}}),page==='home'&&React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&React.createElement(Exhibition,{lang:lang}),page==='theatre'&&React.createElement(Theatre,{lang:lang}),React.createElement(SiteFooter,{lang:lang,go:go,page:page}),React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/app.js",error:String(e&&e.message||e)});}// neneko-site/js/components.js
try{(()=>{/* @ds-bundle: {"format":4,"namespace":"NENEKOHANNINGDesignSystem_57fc37","components":[{"name":"ContactForm","sourcePath":"components/consult/ContactForm.jsx"},{"name":"CurrencyToggle","sourcePath":"components/consult/CurrencyToggle.jsx"},{"name":"LetterCard","sourcePath":"components/consult/LetterCard.jsx"},{"name":"Noren","sourcePath":"components/consult/Noren.jsx"},{"name":"PriceCard","sourcePath":"components/consult/PriceCard.jsx"},{"name":"ProcessSteps","sourcePath":"components/consult/ProcessSteps.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LANGS","sourcePath":"components/core/LangSwitch.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"FloorMap","sourcePath":"components/exhibit/FloorMap.jsx"},{"name":"Plaque","sourcePath":"components/exhibit/Plaque.jsx"},{"name":"Curtain","sourcePath":"components/theatre/Curtain.jsx"},{"name":"Playbill","sourcePath":"components/theatre/Playbill.jsx"},{"name":"ProgramNav","sourcePath":"components/theatre/ProgramNav.jsx"},{"name":"Ticket","sourcePath":"components/theatre/Ticket.jsx"}],"sourceHashes":{"components/consult/ContactForm.jsx":"e4798c9038fa","components/consult/CurrencyToggle.jsx":"997118d2d365","components/consult/LetterCard.jsx":"762935cfebec","components/consult/Noren.jsx":"b1561ea60e9e","components/consult/PriceCard.jsx":"6c3974e972e1","components/consult/ProcessSteps.jsx":"81050eadfce4","components/core/Button.jsx":"18a6339fafcc","components/core/LangSwitch.jsx":"27e6d31f454d","components/core/PhotoFrame.jsx":"a62535526eb1","components/core/SectionHeading.jsx":"19ab79009681","components/core/SiteHeader.jsx":"e9b9cf80f402","components/core/Stamp.jsx":"c2c5aae7f878","components/exhibit/FloorMap.jsx":"d0afedfb7479","components/exhibit/Plaque.jsx":"8f249a341562","components/theatre/Curtain.jsx":"7c56876f50e2","components/theatre/Playbill.jsx":"c0374e9420c9","components/theatre/ProgramNav.jsx":"8424b50a0171","components/theatre/Ticket.jsx":"7949894fe5e8","neneko-site/js/app.js":"0306141057c0","neneko-site/js/components.js":"061803916c97","neneko-site/js/i18n.js":"668c735fe068","ui_kits/portfolio/App.jsx":"2c23763a8419","ui_kits/portfolio/ConsultDesk.jsx":"62e9eac72dbe","ui_kits/portfolio/Exhibition.jsx":"358dbe4ced62","ui_kits/portfolio/Home.jsx":"c42a9d8e390d","ui_kits/portfolio/Intro.jsx":"dfa69b6139c2","ui_kits/portfolio/Street.jsx":"48203085cd8b","ui_kits/portfolio/Theatre.jsx":"dc8bb67decd6","ui_kits/portfolio/hooks.jsx":"debd887dd3a8","ui_kits/portfolio/i18n.js":"668c735fe068"},"inlinedExternals":[],"unexposedExports":[]} */(()=>{const __ds_ns=window.NENEKOHANNINGDesignSystem_57fc37=window.NENEKOHANNINGDesignSystem_57fc37||{};const __ds_scope={};__ds_ns.__errors=__ds_ns.__errors||[];// components/consult/ContactForm.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const L0={name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'};const field={width:'100%',minHeight:48,padding:'10px 14px',boxSizing:'border-box',border:'1px solid var(--line-2)',borderRadius:'var(--radius-sm)',background:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--ink-1)',outline:'none'};function Row({label,children,full}){return/*#__PURE__*/React.createElement("label",{style:{display:'flex',flexDirection:'column',gap:6,gridColumn:full?'1 / -1':'auto'}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},label),children);}function ContactForm({labels,tone='exhibit',defaultType=0,onSubmit,style}){const L={...L0,...labels};const t=TC[tone]||TC.exhibit;const[type,setType]=useState(defaultType);const[sent,setSent]=useState(false);const submit=e=>{e.preventDefault();setSent(true);onSubmit&&onSubmit(Object.fromEntries(new FormData(e.target)));};return/*#__PURE__*/React.createElement("form",{onSubmit:submit,style:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',gap:'20px 20px',...style}},/*#__PURE__*/React.createElement(Row,{label:L.name},/*#__PURE__*/React.createElement("input",{name:"name",style:field})),/*#__PURE__*/React.createElement(Row,{label:L.org},/*#__PURE__*/React.createElement("input",{name:"org",style:field})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',flexDirection:'column',gap:6}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},L.type),/*#__PURE__*/React.createElement("div",{role:"radiogroup",style:{display:'flex',flexWrap:'wrap',gap:8}},L.types.map((x,i)=>/*#__PURE__*/React.createElement("button",{type:"button",key:i,role:"radio","aria-checked":type===i,onClick:()=>setType(i),style:{minHeight:44,padding:'0 20px',borderRadius:'var(--radius-full)',border:'1px solid '+(type===i?t.c:'var(--line-2)'),background:type===i?t.c:'var(--paper-0)',color:type===i?'var(--paper-0)':'var(--ink-2)',fontFamily:'var(--font-sans)',fontSize:14,cursor:'pointer'}},x))),/*#__PURE__*/React.createElement("input",{type:"hidden",name:"type",value:L.types[type]})),/*#__PURE__*/React.createElement(Row,{label:L.budget},/*#__PURE__*/React.createElement("select",{name:"budget",style:{...field,appearance:'none',backgroundImage:'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(-45deg, transparent 50%, var(--ink-3) 50%)',backgroundSize:'5px 5px',backgroundPosition:'calc(100% - 20px) 50%, calc(100% - 15px) 50%',backgroundRepeat:'no-repeat'}},L.budgets.map(b=>/*#__PURE__*/React.createElement("option",{key:b},b)))),/*#__PURE__*/React.createElement(Row,{label:L.timeline},/*#__PURE__*/React.createElement("input",{name:"timeline",placeholder:L.timelineHint,style:field})),/*#__PURE__*/React.createElement(Row,{label:L.message,full:true},/*#__PURE__*/React.createElement("textarea",{name:"message",rows:5,style:{...field,resize:'vertical',lineHeight:1.7}})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}},/*#__PURE__*/React.createElement("button",{type:"submit",style:{minHeight:48,padding:'0 32px',borderRadius:'var(--radius-full)',border:'1px solid '+t.c,background:'transparent',color:t.c,fontFamily:'var(--font-sans)',fontSize:15,letterSpacing:'.1em',cursor:'pointer'}},L.submit),sent&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:t.c}},L.sent)));}Object.assign(__ds_scope,{ContactForm});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ContactForm.jsx",error:String(e&&e.message||e)});}// components/consult/CurrencyToggle.jsx
try{(()=>{function CurrencyToggle({value='TWD',onChange,options=[{id:'TWD',label:'NT$'},{id:'JPY',label:'JPY'}],tone='ink',style}){const c=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Currency",style:{display:'inline-flex',padding:3,borderRadius:'var(--radius-full)',border:'1px solid var(--line-2)',background:'var(--paper-0)',...style}},options.map(o=>/*#__PURE__*/React.createElement("button",{key:o.id,onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:56,padding:'0 14px',borderRadius:'var(--radius-full)',border:0,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.08em',background:value===o.id?c:'transparent',color:value===o.id?'var(--paper-0)':'var(--ink-2)',transition:'background var(--dur-base), color var(--dur-base)'}},o.label)));}Object.assign(__ds_scope,{CurrencyToggle});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/CurrencyToggle.jsx",error:String(e&&e.message||e)});}// components/consult/LetterCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function LetterCard({quote,name,role,org,placeholder=false,placeholderLabel='待替換',tilt=0,tone='exhibit',width=240,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("figure",{style:{margin:0,width,minHeight:width*1.9,flexShrink:0,position:'relative',display:'flex',flexDirection:'column',padding:'44px 24px 24px',boxSizing:'border-box',background:'var(--paper-0)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, '+t.t+' 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'content-box',boxShadow:'var(--shadow-paper)',borderRadius:'var(--radius-xs)',transform:'rotate('+tilt+'deg)',transformOrigin:'50% 0',transition:'transform var(--dur-slow) var(--ease-soft)',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:16,left:24,right:24,display:'flex',gap:6,alignItems:'center'}},/*#__PURE__*/React.createElement("span",{style:{width:8,height:8,borderRadius:8,background:'var(--karashi-1)'}}),/*#__PURE__*/React.createElement("span",{style:{flex:1,borderTop:'1px solid '+t.c,opacity:.5}})),placeholder&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:10,right:12,fontSize:10,letterSpacing:'.12em',color:t.c,border:'1px dashed '+t.c,padding:'1px 6px',borderRadius:4,background:'var(--paper-0)'}},placeholderLabel),/*#__PURE__*/React.createElement("blockquote",{style:{margin:0,flex:1,fontFamily:'var(--font-serif)',fontSize:15,lineHeight:'32px',color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},quote),/*#__PURE__*/React.createElement("figcaption",{style:{marginTop:20,display:'flex',flexDirection:'column',gap:2}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,color:'var(--ink-1)'}},name),/*#__PURE__*/React.createElement("span",{style:{fontSize:12,lineHeight:1.6,color:'var(--ink-3)'}},[role,org].filter(Boolean).join('｜'))));}Object.assign(__ds_scope,{LetterCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/LetterCard.jsx",error:String(e&&e.message||e)});}// components/consult/Noren.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const KF='@keyframes nh-sway{0%,100%{transform:rotate(0deg) skewX(0deg)}30%{transform:rotate(1.4deg) skewX(-1deg)}70%{transform:rotate(-1deg) skewX(.8deg)}}';function Noren({label='相談',sub,tone='exhibit',open:openProp,onOpen,sway=true,height=280,style}){const[hover,setHover]=useState(false);const[self,setSelf]=useState(false);const open=openProp??self;const t=TC[tone]||TC.exhibit;const chars=Array.from(label);const n=Math.max(2,chars.length);const toggle=()=>{setSelf(true);onOpen&&onOpen();};const part=hover&&!open?14:0;return/*#__PURE__*/React.createElement("div",{style:{position:'relative',width:'100%',maxWidth:560,margin:'0 auto',height,...style}},/*#__PURE__*/React.createElement("style",null,KF),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',top:0,left:-12,right:-12,height:10,borderRadius:10,background:'var(--wood-3)',zIndex:2,opacity:open?0:1,transition:'opacity var(--dur-slow) var(--ease-out) 200ms'}}),/*#__PURE__*/React.createElement("button",{onClick:toggle,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),"aria-expanded":open,style:{position:'absolute',inset:'6px 0 0',display:'flex',gap:4,padding:0,border:0,background:'none',cursor:'pointer'}},Array.from({length:n}).map((_,i)=>{const side=i<n/2?-1:1;const centre=i-(n-1)/2;const tf=open?'translateX('+side*120+'%) rotate('+side*6+'deg)':'translateX('+(centre===0?0:Math.sign(centre)*part)+'px)';return/*#__PURE__*/React.createElement("span",{key:i,style:{flex:1,height:'100%',transformOrigin:'top center',transform:tf,opacity:open?0:1,transition:'transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)'}},/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',background:t.c,borderRadius:'0 0 3px 3px',transformOrigin:'top center',animation:sway&&!open?'nh-sway '+(5+i*.7)+'s ease-in-out '+-i*1.3+'s infinite':'none',boxShadow:'inset 0 -14px 0 -8px rgba(0,0,0,.08)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:Math.min(88,height*.3),color:'var(--paper-0)',fontWeight:500}},chars[i]||'')));})),sub&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',left:0,right:0,bottom:-36,textAlign:'center',fontFamily:'var(--font-sans)',fontSize:12,letterSpacing:'.24em',color:'var(--ink-3)',opacity:open?0:1,transition:'opacity var(--dur-base)'}},sub));}Object.assign(__ds_scope,{Noren});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/Noren.jsx",error:String(e&&e.message||e)});}// components/consult/PriceCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function PriceCard({index,title,desc,price,unit,tone='exhibit',visible=true,delay=0,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("article",{style:{position:'relative',display:'flex',flexDirection:'column',gap:14,padding:'36px 26px 28px',borderRadius:'var(--radius-sm)',background:'var(--wood-1)',backgroundImage:'repeating-linear-gradient(92deg, rgba(138,110,69,.08) 0 2px, transparent 2px 9px, rgba(138,110,69,.05) 9px 10px, transparent 10px 23px)',boxShadow:'var(--shadow-paper), inset 0 0 0 1px rgba(138,110,69,.25)',color:'var(--ink-1)',opacity:visible?1:0,transform:visible?'none':'translateY(28px)',transition:'opacity var(--dur-slow) var(--ease-out) '+delay+'ms, transform var(--dur-slow) var(--ease-out) '+delay+'ms',minHeight:260,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:12,left:'50%',width:8,height:8,marginLeft:-4,borderRadius:8,background:'var(--wood-3)',boxShadow:'inset 0 1px 2px rgba(0,0,0,.4)'}}),index!=null&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:11,letterSpacing:'.24em',color:t.c}},String(index).padStart(2,'0')),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:22,fontWeight:600,lineHeight:1.4,letterSpacing:'.06em',color:'var(--ink-1)'}},title),/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:14,lineHeight:1.8,color:'var(--ink-2)',flex:1,textWrap:'pretty'}},desc),/*#__PURE__*/React.createElement("div",{style:{borderTop:'1px solid rgba(138,110,69,.45)',paddingTop:14,display:'flex',alignItems:'baseline',flexWrap:'wrap',gap:'2px 6px'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:26,fontWeight:600,color:t.d,letterSpacing:'.02em'}},price),unit&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},unit)));}Object.assign(__ds_scope,{PriceCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/PriceCard.jsx",error:String(e&&e.message||e)});}// components/consult/ProcessSteps.jsx
try{(()=>{const{useRef,useState,useEffect}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function ProcessSteps({steps=[],tone='exhibit',direction='auto',style}){const ref=useRef(null);const[w,setW]=useState(800);const t=TC[tone]||TC.exhibit;useEffect(()=>{if(!ref.current||typeof ResizeObserver==='undefined')return;const ro=new ResizeObserver(e=>setW(e[0].contentRect.width));ro.observe(ref.current);return()=>ro.disconnect();},[]);const vert=direction==='vertical'||direction==='auto'&&w<560;return/*#__PURE__*/React.createElement("ol",{ref:ref,style:{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:vert?'1fr':'repeat('+steps.length+', minmax(0,1fr))',gap:vert?28:12,position:'relative',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:vert?{position:'absolute',left:21,top:22,bottom:22,borderLeft:'1px solid var(--line-2)'}:{position:'absolute',left:'calc(100% / '+steps.length*2+')',right:'calc(100% / '+steps.length*2+')',top:22,borderTop:'1px solid var(--line-2)'}}),steps.map((s,i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{position:'relative',display:'flex',flexDirection:vert?'row':'column',alignItems:vert?'flex-start':'center',gap:vert?18:14,textAlign:vert?'left':'center'}},/*#__PURE__*/React.createElement("span",{style:{width:44,height:44,flexShrink:0,borderRadius:44,border:'1px solid '+t.c,background:'var(--paper-1)',color:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-serif)',fontSize:16}},i+1),/*#__PURE__*/React.createElement("span",{style:{display:'flex',flexDirection:'column',gap:4}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:18,color:'var(--ink-1)',letterSpacing:'.08em'}},s.label),s.note&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,lineHeight:1.7,color:'var(--ink-3)'}},s.note)))));}Object.assign(__ds_scope,{ProcessSteps});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ProcessSteps.jsx",error:String(e&&e.message||e)});}// components/core/Button.jsx
try{(()=>{const{useState}=React;const TONES={ink:{bg:'var(--ink-1)',bgH:'var(--ink-2)',fg:'var(--paper-0)'},exhibit:{bg:'var(--matcha-1)',bgH:'var(--matcha-2)',fg:'var(--paper-0)'},theatre:{bg:'var(--shu-1)',bgH:'var(--shu-2)',fg:'var(--paper-0)'},paper:{bg:'var(--paper-0)',bgH:'var(--paper-2)',fg:'var(--ink-1)'}};function Button({children,variant='primary',tone='ink',size='md',href,icon,iconRight,disabled,onClick,type='button',style,...rest}){const[h,setH]=useState(false);const[p,setP]=useState(false);const t=TONES[tone]||TONES.ink;const H=size==='lg'?56:size==='sm'?44:48;const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,minHeight:H,padding:variant==='ghost'?'0 4px':size==='lg'?'0 32px':'0 24px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-sans)',fontSize:size==='lg'?16:15,fontWeight:500,letterSpacing:'.08em',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,border:'1px solid transparent',transition:'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',transform:p&&!disabled?'scale(.98)':h&&!disabled?'translateY(-1px)':'none',whiteSpace:'nowrap',boxSizing:'border-box'};const v=variant==='primary'?{background:h?t.bgH:t.bg,color:t.fg}:variant==='secondary'?{background:h?t.bg:'transparent',color:h?t.fg:tone==='paper'?'var(--paper-0)':t.bg,borderColor:tone==='paper'?'var(--paper-0)':t.bg}:{background:'transparent',color:tone==='paper'?'var(--paper-0)':tone==='ink'?'var(--ink-1)':t.bg,borderRadius:0,borderBottom:'1px solid currentColor',minHeight:44};const Tag=href?'a':'button';return React.createElement(Tag,{href,type:href?undefined:type,disabled,onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false);},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),style:{...base,...v,...style},...rest},icon,React.createElement('span',null,children),iconRight);}Object.assign(__ds_scope,{Button});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Button.jsx",error:String(e&&e.message||e)});}// components/core/LangSwitch.jsx
try{(()=>{const LANGS=[{id:'zh',label:'CH'},{id:'ja',label:'JP'},{id:'en',label:'EN'}];function LangSwitch({value='zh',onChange,options=LANGS,dark=false,style}){const fg=dark?'var(--night-ink)':'var(--ink-1)';const mute=dark?'var(--night-ink-2)':'var(--ink-3)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Language",style:{display:'flex',alignItems:'center',gap:2,fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.06em',...style}},options.map((o,i)=>/*#__PURE__*/React.createElement(React.Fragment,{key:o.id},i>0&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{color:mute,opacity:.6}},"/"),/*#__PURE__*/React.createElement("button",{onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:44,padding:'0 6px',background:'none',border:0,cursor:'pointer',color:value===o.id?fg:mute,fontFamily:'inherit',fontSize:'inherit',letterSpacing:'inherit',position:'relative'}},o.label,/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',left:'50%',bottom:8,width:4,height:4,marginLeft:-2,borderRadius:4,background:'var(--karashi-1)',opacity:value===o.id?1:0,transition:'opacity var(--dur-base)'}})))));}Object.assign(__ds_scope,{LANGS,LangSwitch});})();}catch(e){__ds_ns.__errors.push({path:"components/core/LangSwitch.jsx",error:String(e&&e.message||e)});}// components/core/PhotoFrame.jsx
try{(()=>{function PhotoFrame({src,alt='',position='50% 50%',label='PHOTO',shape='rounded',ratio='4 / 3',tone='paper',style,children}){const radius=shape==='circle'?'50%':shape==='arch'?'999px 999px var(--radius-md) var(--radius-md)':shape==='square'?'var(--radius-xs)':'var(--radius-lg)';const dark=tone==='night';const stripe=dark?'repeating-linear-gradient(135deg, #2A2622 0 10px, #24211D 10px 20px)':'repeating-linear-gradient(135deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)';return/*#__PURE__*/React.createElement("div",{style:{position:'relative',aspectRatio:shape==='circle'?'1 / 1':ratio,borderRadius:radius,overflow:'hidden',background:src?'var(--paper-3)':stripe,width:'100%',...style}},src?/*#__PURE__*/React.createElement("img",{src:src,alt:alt,style:{width:'100%',height:'100%',objectFit:'cover',objectPosition:position,display:'block'}}):/*#__PURE__*/React.createElement("span",{style:{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.14em',color:dark?'var(--night-ink-2)':'var(--ink-3)',textAlign:'center',padding:12}},label),children);}Object.assign(__ds_scope,{PhotoFrame});})();}catch(e){__ds_ns.__errors.push({path:"components/core/PhotoFrame.jsx",error:String(e&&e.message||e)});}// components/core/SectionHeading.jsx
try{(()=>{function SectionHeading({eyebrow,title,vertical=false,dot=true,color='var(--ink-1)',as='h2',size='h2',style}){const fs=size==='display'?'var(--fs-display)':size==='h1'?'var(--fs-h1)':size==='h3'?'var(--fs-h3)':'var(--fs-h2)';const H=as;return/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:vertical?'row-reverse':'column',alignItems:vertical?'flex-start':'flex-start',gap:vertical?16:12,...style}},eyebrow&&/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontSize:'var(--fs-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--ink-3)',writingMode:vertical?'vertical-rl':'horizontal-tb'}},dot&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:7,background:'var(--karashi-1)',flexShrink:0}}),eyebrow),/*#__PURE__*/React.createElement(H,{style:{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:fs,lineHeight:vertical?1.5:1.3,letterSpacing:vertical?'.18em':'.04em',color,writingMode:vertical?'vertical-rl':'horizontal-tb',textWrap:'pretty'}},title));}Object.assign(__ds_scope,{SectionHeading});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SectionHeading.jsx",error:String(e&&e.message||e)});}// components/core/SiteHeader.jsx
try{(()=>{const COPY={zh:'相談',ja:'相談',en:'Consult'};function SiteHeader({lang='zh',onLang,onConsult,tone='ink',dark=false,brand='NENEKO',onBrand,consultLabel,style}){const bg=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("header",{style:{position:'fixed',top:0,left:0,right:0,zIndex:'var(--z-header)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'10px var(--gutter)',pointerEvents:'none',...style}},/*#__PURE__*/React.createElement("button",{onClick:onBrand,style:{pointerEvents:'auto',background:'none',border:0,padding:0,minHeight:44,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:700,letterSpacing:'.12em',color:dark?'var(--night-ink)':'var(--ink-1)',whiteSpace:'nowrap'}},brand),/*#__PURE__*/React.createElement("div",{style:{pointerEvents:'auto',display:'flex',alignItems:'center',gap:12}},/*#__PURE__*/React.createElement(__ds_scope.LangSwitch,{value:lang,onChange:onLang,dark:dark}),/*#__PURE__*/React.createElement("button",{onClick:onConsult,style:{minHeight:44,minWidth:64,padding:'0 16px',borderRadius:'var(--radius-full)',border:0,background:bg,color:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.12em',cursor:'pointer',boxShadow:'var(--shadow-paper)',whiteSpace:'nowrap'}},consultLabel||COPY[lang]||COPY.zh)));}Object.assign(__ds_scope,{SiteHeader});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SiteHeader.jsx",error:String(e&&e.message||e)});}// components/core/Stamp.jsx
try{(()=>{function Stamp({top,main,bottom,shape='circle',color='var(--shu-1)',size=112,rotate=-8,inked=true,style}){const r=shape==='circle'?'50%':shape==='oval'?'50% / 42%':'var(--radius-sm)';const w=shape==='oval'?size*1.35:size;return/*#__PURE__*/React.createElement("div",{"aria-label":[top,main,bottom].filter(Boolean).join(' '),style:{width:w,height:size,borderRadius:r,border:'2px solid '+color,color,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,padding:6,boxSizing:'border-box',transform:'rotate('+rotate+'deg) scale('+(inked?1:1.4)+')',opacity:inked?.88:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast) linear',mixBlendMode:'multiply',position:'relative',flexShrink:0,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',inset:4,borderRadius:r,border:'1px solid '+color,opacity:.7}}),top&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.085),letterSpacing:'.2em',fontWeight:500}},top),main&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:size*.2,fontWeight:600,letterSpacing:'.08em',lineHeight:1.1,textAlign:'center'}},main),bottom&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.08),letterSpacing:'.16em'}},bottom));}Object.assign(__ds_scope,{Stamp});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Stamp.jsx",error:String(e&&e.message||e)});}// components/exhibit/FloorMap.jsx
try{(()=>{const{useState}=React;function FloorMap({rooms=[],current,visited=[],onJump,title='展場平面圖',collapsible=false,defaultOpen=true,labels={entrance:'入口',exit:'出口 EXIT'},style}){const[open,setOpen]=useState(defaultOpen);const body=/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:'column',gap:10}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'.16em',color:'var(--ink-3)'}},/*#__PURE__*/React.createElement("span",null,labels.entrance," \u2192"),/*#__PURE__*/React.createElement("span",null,labels.exit)),/*#__PURE__*/React.createElement("div",{style:{display:'grid',gridTemplateColumns:'repeat('+rooms.length+', 1fr)',border:'1.5px solid var(--ink-1)',borderRadius:2}},rooms.map((r,i)=>{const on=r.id===current;const v=visited.includes(r.id);return/*#__PURE__*/React.createElement("button",{key:r.id,onClick:()=>onJump&&onJump(r.id),"aria-current":on?'step':undefined,"aria-label":r.label,style:{position:'relative',minHeight:56,minWidth:44,padding:0,border:0,borderLeft:i?'1px solid var(--line-2)':0,background:on?'var(--matcha-4)':'transparent',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',paddingBottom:6,transition:'background var(--dur-base)'}},/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:8,left:'50%',width:24,height:24,marginLeft:-12,borderRadius:24,border:'1.5px solid var(--matcha-1)',color:'var(--matcha-1)',fontFamily:'var(--font-serif)',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',transform:v?'rotate(-12deg) scale(1)':'scale(1.6)',opacity:v?.9:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast)'}},"\u6E08"),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:13,color:on?'var(--matcha-2)':'var(--ink-2)'}},String(i+1).padStart(2,'0')));})),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{height:10,borderBottom:'1px dashed var(--line-2)',position:'relative'}},rooms.findIndex(r=>r.id===current)>=0&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:4,left:'calc('+(rooms.findIndex(r=>r.id===current)+.5)/rooms.length*100+'% - 5px)',width:10,height:10,borderRadius:10,background:'var(--karashi-1)',transition:'left var(--dur-slow) var(--ease-out)'}})),/*#__PURE__*/React.createElement("div",{style:{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em'}},visited.length," / ",rooms.length));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:260,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 12px',background:'rgba(250,247,240,.94)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lift)',fontFamily:'var(--font-sans)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 8px':'0 16px',border:0,background:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:12,color:'var(--matcha-1)'}},visited.length,"/",rooms.length," ",open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em',marginBottom:8}},title),(!collapsible||open)&&body);}Object.assign(__ds_scope,{FloorMap});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/FloorMap.jsx",error:String(e&&e.message||e)});}// components/exhibit/Plaque.jsx
try{(()=>{function Plaque({number,year,title,client,role,note,labels={client:'委託單位',role:'我的角色'},style}){return/*#__PURE__*/React.createElement("aside",{style:{width:'100%',maxWidth:300,padding:'20px 20px 18px',boxSizing:'border-box',background:'var(--paper-0)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-xs)',boxShadow:'0 1px 0 rgba(30,28,25,.05)',display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-sans)',...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}},/*#__PURE__*/React.createElement("span",{style:{fontSize:11,letterSpacing:'.22em',color:'var(--matcha-1)',fontWeight:500}},number),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-3)'}},year)),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:19,lineHeight:1.5,fontWeight:600,color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 12px',fontSize:12.5,lineHeight:1.6,borderTop:'1px solid var(--line-3)',paddingTop:10}},client&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.client),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},client)),role&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.role),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},role))),note&&/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:13,lineHeight:1.8,color:'var(--ink-2)',textWrap:'pretty'}},note));}Object.assign(__ds_scope,{Plaque});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/Plaque.jsx",error:String(e&&e.message||e)});}// components/theatre/Curtain.jsx
try{(()=>{const fold='repeating-linear-gradient(90deg, var(--shu-5) 0, var(--shu-2) 4%, var(--shu-1) 8%, var(--shu-3) 10%, var(--shu-1) 12%, var(--shu-2) 16%, var(--shu-5) 20%)';function Curtain({open=0,valance=true,duration,style}){const o=Math.max(0,Math.min(1,open));const tr=duration!=null?'transform '+duration+'ms var(--ease-inout)':'none';const panel=side=>({position:'absolute',top:0,bottom:0,width:'51%',[side]:0,background:fold,backgroundSize:'40% 100%',transform:'translateX('+(side==='left'?-1:1)*o*100+'%) scaleX('+(1-o*.25)+')',transformOrigin:side==='left'?'0 50%':'100% 50%',transition:tr,boxShadow:side==='left'?'inset -30px 0 40px -20px rgba(0,0,0,.5)':'inset 30px 0 40px -20px rgba(0,0,0,.5)'});return/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',inset:0,overflow:'hidden',pointerEvents:o>.95?'none':'auto',...style}},/*#__PURE__*/React.createElement("div",{style:panel('left')}),/*#__PURE__*/React.createElement("div",{style:panel('right')}),valance&&/*#__PURE__*/React.createElement("div",{style:{position:'absolute',top:0,left:0,right:0,height:'9%',minHeight:36,background:fold,backgroundSize:'8% 100%',borderBottom:'3px solid var(--karashi-1)',boxShadow:'0 10px 20px rgba(0,0,0,.4)'}}));}Object.assign(__ds_scope,{Curtain});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Curtain.jsx",error:String(e&&e.message||e)});}// components/theatre/Playbill.jsx
try{(()=>{function Playbill({act,year,title,rows=[],style}){return/*#__PURE__*/React.createElement("div",{style:{width:'100%',maxWidth:480,margin:'0 auto',color:'var(--night-ink)',fontFamily:'var(--font-sans)',textAlign:'center',display:'flex',flexDirection:'column',gap:14,...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:14,fontSize:12,letterSpacing:'.3em',color:'var(--shu-3)'}},/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}}),act,year&&/*#__PURE__*/React.createElement("span",{style:{color:'var(--night-ink-2)'}},year),/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}})),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:'clamp(22px,2.6vw,32px)',lineHeight:1.45,fontWeight:500,color:'var(--night-ink)',letterSpacing:'.06em',textWrap:'balance'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:'6px 0 0',display:'flex',flexDirection:'column',gap:6,fontSize:13.5}},rows.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:i,style:{display:'flex',alignItems:'baseline',gap:10}},/*#__PURE__*/React.createElement("dt",{style:{color:'var(--night-ink-2)',letterSpacing:'.14em',whiteSpace:'nowrap'}},r.k),/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{flex:1,borderBottom:'1px dotted var(--night-4)',transform:'translateY(-4px)'}}),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--night-ink)',textAlign:'right'}},r.v)))));}Object.assign(__ds_scope,{Playbill});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Playbill.jsx",error:String(e&&e.message||e)});}// components/theatre/ProgramNav.jsx
try{(()=>{const{useState}=React;function ProgramNav({acts=[],current,onJump,title='節目單',collapsible=false,defaultOpen=true,style}){const[open,setOpen]=useState(defaultOpen);const list=/*#__PURE__*/React.createElement("ol",{style:{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column'}},acts.map(a=>{const on=a.id===current;return/*#__PURE__*/React.createElement("li",{key:a.id},/*#__PURE__*/React.createElement("button",{onClick:()=>onJump&&onJump(a.id),"aria-current":on?'step':undefined,style:{width:'100%',minHeight:44,padding:'6px 0',border:0,background:'none',cursor:'pointer',display:'grid',gridTemplateColumns:'14px auto 1fr',alignItems:'center',gap:8,textAlign:'left',color:on?'var(--night-ink)':'var(--night-ink-2)',fontFamily:'var(--font-sans)',fontSize:12.5}},/*#__PURE__*/React.createElement("span",{style:{width:6,height:6,borderRadius:6,background:on?'var(--lamp-1)':'transparent',border:'1px solid '+(on?'var(--lamp-1)':'var(--night-4)'),boxShadow:on?'0 0 8px var(--lamp-glow)':'none'}}),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',letterSpacing:'.1em',color:on?'var(--shu-3)':'inherit',whiteSpace:'nowrap'}},a.label),/*#__PURE__*/React.createElement("span",{style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},a.title)));}));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:240,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 8px',background:'rgba(23,21,19,.88)',border:'1px solid var(--night-4)',borderRadius:'var(--radius-md)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 6px':'0 16px',border:0,background:'none',color:'var(--night-ink)',fontFamily:'var(--font-serif)',fontSize:14,letterSpacing:'.2em',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',color:'var(--shu-3)'}},open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:13,letterSpacing:'.3em',color:'var(--night-ink)',paddingBottom:6,borderBottom:'1px solid var(--night-4)',marginBottom:4}},title),(!collapsible||open)&&list);}Object.assign(__ds_scope,{ProgramNav});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/ProgramNav.jsx",error:String(e&&e.message||e)});}// components/theatre/Ticket.jsx
try{(()=>{function Ticket({title='NENEKO / HANNING',sub,date,seat,no,admit='ADMIT ONE',stubLabel='もぎり',torn=0,style}){const tr=Math.max(0,Math.min(1,torn));const notch='radial-gradient(circle at 0 50%, transparent 10px, #000 10.5px)';return/*#__PURE__*/React.createElement("div",{style:{display:'flex',width:'100%',maxWidth:560,filter:'drop-shadow(0 18px 30px rgba(0,0,0,.45))',...style}},/*#__PURE__*/React.createElement("div",{style:{flex:1,minWidth:0,padding:'28px 28px 24px',background:'var(--paper-1)',borderRadius:'8px 0 0 8px',display:'flex',flexDirection:'column',gap:12,borderRight:'2px dashed var(--paper-4)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:10,letterSpacing:'.3em',color:'var(--shu-1)'}},admit),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:'clamp(22px,3vw,30px)',lineHeight:1.3,color:'var(--ink-1)',letterSpacing:'.06em'}},title),sub&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},sub),/*#__PURE__*/React.createElement("div",{style:{display:'flex',gap:24,flexWrap:'wrap',fontSize:12,color:'var(--ink-3)',letterSpacing:'.1em',borderTop:'1px solid var(--line-3)',paddingTop:10}},date&&/*#__PURE__*/React.createElement("span",null,date),seat&&/*#__PURE__*/React.createElement("span",null,seat))),/*#__PURE__*/React.createElement("div",{style:{width:118,flexShrink:0,padding:'20px 14px',background:'var(--shu-1)',color:'var(--paper-0)',borderRadius:'0 8px 8px 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',gap:8,transformOrigin:'0% 100%',transform:'translate('+tr*40+'px,'+tr*120+'px) rotate('+tr*24+'deg)',opacity:1-tr*.9,WebkitMaskImage:notch,maskImage:notch}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,writingMode:'vertical-rl',letterSpacing:'.3em'}},stubLabel),no&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.1em'}},no)));}Object.assign(__ds_scope,{Ticket});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Ticket.jsx",error:String(e&&e.message||e)});}// neneko-site/js/app.js
try{(()=>{/* hooks.jsx */const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE='./images/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const useTouch=()=>useMedia('(hover: none)');const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}Object.assign(window,{useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});/* Intro.jsx */const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch('./js/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},React.createElement("b",null,a),React.createElement("span",null,"\uFF5C"),b))),React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;/* Street.jsx */function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return React.createElement("div",{className:"sky","aria-hidden":"true"},React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},React.createElement("span",{className:"moon"})),STARS.map((s,i)=>React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},React.createElement("span",{className:"cloud c1"}),React.createElement("span",{className:"cloud c2"}),React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("clipPath",{id:"glass-clip"},React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),React.createElement("g",{clipPath:"url(#glass-clip)"},React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day'}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night'}));}function StreetTag({x,y,rot,text,hidden,light,active}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text]);return React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return React.createElement("div",{className:cls,style:{opacity:dim}},React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[mode,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom({which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},React.createElement(Sky,{mode:mode}),React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' 78%'}:null},React.createElement("div",{className:"street-top"},React.createElement("div",{className:"tagline-stack"},React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),React.createElement("p",{className:"byline"},L.byline)),React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),React.createElement("p",{className:"street-hint"},React.createElement("span",{className:"hint-arrow"},React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),React.createElement("span",{className:"hint-text"},touch?L.hintTap:L.hintHover))),React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;/* ConsultDesk.jsx */function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},React.createElement("div",{className:"desk-head wrap"},React.createElement("span",{className:"desk-plate"},React.createElement("b",null,th?L.deskTh:L.deskEx),React.createElement("small",null,th?L.deskThSub:L.deskExSub))),React.createElement("div",{className:"desk-window wrap"},React.createElement("div",{className:"desk-panel"},React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},React.createElement("div",{className:"desk-row-head"},React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),React.createElement("div",{className:"price-grid"},services.map((s,i)=>React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),React.createElement("p",{className:"note"},L.priceNote),React.createElement("div",{className:"desk-block"},React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),React.createElement("div",{className:"desk-block contact"},React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:React.createElement(Icon,{name:"calendar-check",size:18})},L.book),React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),React.createElement("div",{className:"contact-links"},React.createElement("a",{href:"#","aria-label":"Email"},React.createElement(Icon,{name:"mail",size:20}),React.createElement("span",null,"Email")),React.createElement("a",{href:"#","aria-label":"LINE"},React.createElement(Icon,{name:"message-circle",size:20}),React.createElement("span",null,"LINE")),React.createElement("a",{href:"#","aria-label":"Instagram"},React.createElement(Icon,{name:"instagram",size:20}),React.createElement("span",null,"Instagram"))),React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;/* Home.jsx */function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[intro,setIntro]=useState(()=>!reduced&&!sessionStorage.getItem('nh-intro-seen'));const done=()=>{sessionStorage.setItem('nh-intro-seen','1');setIntro(false);};const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});const replay=()=>{window.scrollTo({top:0});setIntro(true);};return React.createElement("main",{className:"home"},intro&&React.createElement(Intro,{lang:lang,compact:compact,onDone:done}),React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},React.createElement("span",{className:"about-card-photo"},React.createElement("img",{src:'./images/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),React.createElement("img",{className:"alt",src:'./images/desk.jpg',alt:"",style:{objectPosition:'62% 40%'}})),React.createElement("span",{className:"about-card-cap"},React.createElement("b",null,"NENEKO"),React.createElement("small",null,L.cardRole))),React.createElement("div",{className:"about-text"},React.createElement("span",{className:"about-eyebrow"},L.since),React.createElement("div",{className:"about-head"},React.createElement("h2",{className:"about-name"},"About me"),React.createElement("a",{className:"cv-link",href:"#"},React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>React.createElement("p",{key:n,className:"about-lead"},p))),React.createElement("div",{className:"about-route"},React.createElement("ol",null,window.ROUTE.map(([y,c],n)=>React.createElement("li",{key:y},React.createElement("b",null,y),React.createElement("span",null,c)))),React.createElement(NS.Button,{variant:"ghost",onClick:replay,icon:React.createElement(Icon,{name:"rotate-ccw",size:16})},L.replay))),React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},React.createElement("div",{className:"wrap"},React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},React.createElement("div",{className:"marquee-track"},[0,1].map(k=>React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>React.createElement("li",{key:p},p)))))),React.createElement("div",{className:"voices wrap"},React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},React.createElement("span",null,L.teammate),React.createElement(Icon,{name:"arrow-down",size:26})))),React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const[open,setOpen]=useState(null);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];return React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},React.createElement("p",{className:"cs-note"},L.csNote),React.createElement("div",{className:"cs-street"},doors.map(d=>{const st=open===d.k?'open':touch?'half':'closed';const on=st!=='closed';return React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},React.createElement("i",null)),React.createElement("h3",{className:"cs-q"},d.q),React.createElement("p",{className:"cs-egg"},d.egg),React.createElement("div",{className:"cs-open"},React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-rack"},React.createElement("i",null),React.createElement("i",null),React.createElement("i",null)),React.createElement("span",{className:"cs-uketsuke"},React.createElement("b",null,"\u53D7\u4ED8"),React.createElement("small",null,"RECEPTION")),React.createElement("span",{className:"cs-counter"})):React.createElement(React.Fragment,null,React.createElement("span",{className:"cs-ledge"}))),React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},React.createElement("ul",null,d.sv.map((s,n)=>React.createElement("li",{key:n},React.createElement("span",null,s[0])))),React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,React.createElement(Icon,{name:"arrow-right",size:16}))),React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&React.createElement("span",{className:"cs-poster","aria-hidden":"true"},React.createElement("b",null,L.poster),React.createElement("i",null),React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));})),React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},React.createElement("div",{className:"wrap site-foot-in"},React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},React.createElement("div",{className:"sf-col"},React.createElement("h4",null,"HOME"),React.createElement("ul",null,home.map(([label,p,a])=>React.createElement("li",{key:label},React.createElement("a",{href:pageUrl(p,a),onClick:to(p,a)},label))))),React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>React.createElement("h4",{key:k},React.createElement("a",{className:'sf-work sf-work-'+k,href:pageUrl(p),onClick:to(p)},label,React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),React.createElement("div",{className:"sf-contact"},React.createElement("h4",null,"LET'S TALK!"),React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),React.createElement("div",{className:"sf-social"},React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),React.createElement("div",{className:"wrap sf-copy"},React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;/* Exhibition.jsx */function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},React.createElement("div",{className:"ex-wall-sticky"},React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},React.createElement("span",null,L.room," 01 \u2192")),React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},React.createElement("p",{className:"ex-statement"},L.exStatement),React.createElement("p",{className:"ex-period"},L.exPeriod),React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),React.createElement("div",{className:"room-num"},React.createElement("span",null,L.room),React.createElement("b",null,r.n)),React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),React.createElement("span",{className:"room-photo-cta"},L.viewDetail,React.createElement(Icon,{name:"plus",size:14}))),React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),React.createElement("div",{className:"detail-body wrap"},React.createElement("button",{className:"detail-close",onClick:onClose},React.createElement(Icon,{name:"arrow-left",size:18}),L.back),React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),React.createElement("h2",null,r.title),React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>React.createElement("div",{key:h},React.createElement("h3",null,h),React.createElement("p",null,L.placeholder)))),React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"exhibition"},React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},React.createElement("div",{className:"gallery-sticky"},React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},React.createElement("div",{className:"exit-sign"},React.createElement("span",null,L.exit),React.createElement(Icon,{name:"arrow-down",size:18}))),React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;/* Theatre.jsx */function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),React.createElement("span",{className:"act-num"},a.n[lang]),React.createElement("div",{className:"stage-photo"},React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return React.createElement("main",{className:"theatre"},React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>React.createElement("div",{className:"ticket-stage"},React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return React.createElement("div",{className:"overture"},React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},React.createElement("span",{className:"bow-label"},L.curtainCall),React.createElement("h2",null,L.bowTitle),React.createElement("p",null,L.bowSub)),React.createElement(NS.Curtain,{open:o}));}),React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),React.createElement("span",{className:"label"},"Lobby"),React.createElement("h2",null,L.lobby)),React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;/* App.jsx */const pageUrl=(p,a)=>'./'+(p==='home'?'index':p)+'.html'+(a?'#'+a:'');function App(){const NS=window.NS;const page=window.__START||'home';const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>setTop(window.scrollY<window.innerHeight*.8);window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const h=location.hash.replace('#','');if(h)setTimeout(()=>scrollToId(h,false),400);},[]);const go=(p,anchor)=>{if(p===page){anchor?scrollToId(anchor):window.scrollTo({top:0,behavior:'smooth'});return;}setVeil(true);setTimeout(()=>{location.href=pageUrl(p,anchor);},280);};useEffect(()=>{const f=e=>{if(e.persisted)setVeil(false);};window.addEventListener('pageshow',f);return()=>window.removeEventListener('pageshow',f);},[]);const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return React.createElement(React.Fragment,null,React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:page==='theatre'||page==='home'&&sky==='night'&&top,onConsult:consult,onBrand:()=>go('home')}),page==='home'&&React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&React.createElement(Exhibition,{lang:lang}),page==='theatre'&&React.createElement(Theatre,{lang:lang}),React.createElement(SiteFooter,{lang:lang,go:go,page:page}),React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/app.js",error:String(e&&e.message||e)});}// neneko-site/js/components.js
try{(()=>{/* @ds-bundle: {"format":4,"namespace":"NENEKOHANNINGDesignSystem_57fc37","components":[{"name":"ContactForm","sourcePath":"components/consult/ContactForm.jsx"},{"name":"CurrencyToggle","sourcePath":"components/consult/CurrencyToggle.jsx"},{"name":"LetterCard","sourcePath":"components/consult/LetterCard.jsx"},{"name":"Noren","sourcePath":"components/consult/Noren.jsx"},{"name":"PriceCard","sourcePath":"components/consult/PriceCard.jsx"},{"name":"ProcessSteps","sourcePath":"components/consult/ProcessSteps.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LANGS","sourcePath":"components/core/LangSwitch.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteHeader","sourcePath":"components/core/SiteHeader.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"FloorMap","sourcePath":"components/exhibit/FloorMap.jsx"},{"name":"Plaque","sourcePath":"components/exhibit/Plaque.jsx"},{"name":"Curtain","sourcePath":"components/theatre/Curtain.jsx"},{"name":"Playbill","sourcePath":"components/theatre/Playbill.jsx"},{"name":"ProgramNav","sourcePath":"components/theatre/ProgramNav.jsx"},{"name":"Ticket","sourcePath":"components/theatre/Ticket.jsx"}],"sourceHashes":{"components/consult/ContactForm.jsx":"e4798c9038fa","components/consult/CurrencyToggle.jsx":"68a3eb035237","components/consult/LetterCard.jsx":"762935cfebec","components/consult/Noren.jsx":"b1561ea60e9e","components/consult/PriceCard.jsx":"6c3974e972e1","components/consult/ProcessSteps.jsx":"81050eadfce4","components/core/Button.jsx":"18a6339fafcc","components/core/LangSwitch.jsx":"27e6d31f454d","components/core/PhotoFrame.jsx":"a62535526eb1","components/core/SectionHeading.jsx":"19ab79009681","components/core/SiteHeader.jsx":"2d9914d19d41","components/core/Stamp.jsx":"c2c5aae7f878","components/exhibit/FloorMap.jsx":"d0afedfb7479","components/exhibit/Plaque.jsx":"8f249a341562","components/theatre/Curtain.jsx":"7c56876f50e2","components/theatre/Playbill.jsx":"c0374e9420c9","components/theatre/ProgramNav.jsx":"8424b50a0171","components/theatre/Ticket.jsx":"7949894fe5e8","ui_kits/portfolio/App.jsx":"81485f60e895","ui_kits/portfolio/ConsultDesk.jsx":"62e9eac72dbe","ui_kits/portfolio/Exhibition.jsx":"358dbe4ced62","ui_kits/portfolio/Home.jsx":"cefe408cb499","ui_kits/portfolio/Intro.jsx":"dfa69b6139c2","ui_kits/portfolio/Street.jsx":"91d9e20c3f59","ui_kits/portfolio/Theatre.jsx":"dc8bb67decd6","ui_kits/portfolio/hooks.jsx":"4a8934ad436a","ui_kits/portfolio/i18n.js":"668c735fe068"},"inlinedExternals":[],"unexposedExports":[]} */(()=>{const __ds_ns=window.NENEKOHANNINGDesignSystem_57fc37=window.NENEKOHANNINGDesignSystem_57fc37||{};const __ds_scope={};__ds_ns.__errors=__ds_ns.__errors||[];// components/consult/ContactForm.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const L0={name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'};const field={width:'100%',minHeight:48,padding:'10px 14px',boxSizing:'border-box',border:'1px solid var(--line-2)',borderRadius:'var(--radius-sm)',background:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--ink-1)',outline:'none'};function Row({label,children,full}){return/*#__PURE__*/React.createElement("label",{style:{display:'flex',flexDirection:'column',gap:6,gridColumn:full?'1 / -1':'auto'}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},label),children);}function ContactForm({labels,tone='exhibit',defaultType=0,onSubmit,style}){const L={...L0,...labels};const t=TC[tone]||TC.exhibit;const[type,setType]=useState(defaultType);const[sent,setSent]=useState(false);const submit=e=>{e.preventDefault();setSent(true);onSubmit&&onSubmit(Object.fromEntries(new FormData(e.target)));};return/*#__PURE__*/React.createElement("form",{onSubmit:submit,style:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',gap:'20px 20px',...style}},/*#__PURE__*/React.createElement(Row,{label:L.name},/*#__PURE__*/React.createElement("input",{name:"name",style:field})),/*#__PURE__*/React.createElement(Row,{label:L.org},/*#__PURE__*/React.createElement("input",{name:"org",style:field})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',flexDirection:'column',gap:6}},/*#__PURE__*/React.createElement("span",{style:{fontSize:12,letterSpacing:'.14em',color:'var(--ink-3)'}},L.type),/*#__PURE__*/React.createElement("div",{role:"radiogroup",style:{display:'flex',flexWrap:'wrap',gap:8}},L.types.map((x,i)=>/*#__PURE__*/React.createElement("button",{type:"button",key:i,role:"radio","aria-checked":type===i,onClick:()=>setType(i),style:{minHeight:44,padding:'0 20px',borderRadius:'var(--radius-full)',border:'1px solid '+(type===i?t.c:'var(--line-2)'),background:type===i?t.c:'var(--paper-0)',color:type===i?'var(--paper-0)':'var(--ink-2)',fontFamily:'var(--font-sans)',fontSize:14,cursor:'pointer'}},x))),/*#__PURE__*/React.createElement("input",{type:"hidden",name:"type",value:L.types[type]})),/*#__PURE__*/React.createElement(Row,{label:L.budget},/*#__PURE__*/React.createElement("select",{name:"budget",style:{...field,appearance:'none',backgroundImage:'linear-gradient(45deg, transparent 50%, var(--ink-3) 50%), linear-gradient(-45deg, transparent 50%, var(--ink-3) 50%)',backgroundSize:'5px 5px',backgroundPosition:'calc(100% - 20px) 50%, calc(100% - 15px) 50%',backgroundRepeat:'no-repeat'}},L.budgets.map(b=>/*#__PURE__*/React.createElement("option",{key:b},b)))),/*#__PURE__*/React.createElement(Row,{label:L.timeline},/*#__PURE__*/React.createElement("input",{name:"timeline",placeholder:L.timelineHint,style:field})),/*#__PURE__*/React.createElement(Row,{label:L.message,full:true},/*#__PURE__*/React.createElement("textarea",{name:"message",rows:5,style:{...field,resize:'vertical',lineHeight:1.7}})),/*#__PURE__*/React.createElement("div",{style:{gridColumn:'1 / -1',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}},/*#__PURE__*/React.createElement("button",{type:"submit",style:{minHeight:48,padding:'0 32px',borderRadius:'var(--radius-full)',border:'1px solid '+t.c,background:'transparent',color:t.c,fontFamily:'var(--font-sans)',fontSize:15,letterSpacing:'.1em',cursor:'pointer'}},L.submit),sent&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:t.c}},L.sent)));}Object.assign(__ds_scope,{ContactForm});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ContactForm.jsx",error:String(e&&e.message||e)});}// components/consult/CurrencyToggle.jsx
try{(()=>{function CurrencyToggle({value='TWD',onChange,options=[{id:'TWD',label:'NT$'},{id:'JPY',label:'JPY'}],tone='ink',style}){const c=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Currency",style:{display:'inline-flex',padding:3,borderRadius:'var(--radius-full)',border:'1px solid var(--line-2)',background:'var(--paper-0)',...style}},options.map(o=>/*#__PURE__*/React.createElement("button",{key:o.id,onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:38,minWidth:56,padding:'0 14px',borderRadius:'var(--radius-full)',border:0,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.08em',background:value===o.id?c:'transparent',color:value===o.id?'var(--paper-0)':'var(--ink-2)',transition:'background var(--dur-base), color var(--dur-base)'}},o.label)));}Object.assign(__ds_scope,{CurrencyToggle});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/CurrencyToggle.jsx",error:String(e&&e.message||e)});}// components/consult/LetterCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function LetterCard({quote,name,role,org,placeholder=false,placeholderLabel='待替換',tilt=0,tone='exhibit',width=240,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("figure",{style:{margin:0,width,minHeight:width*1.9,flexShrink:0,position:'relative',display:'flex',flexDirection:'column',padding:'44px 24px 24px',boxSizing:'border-box',background:'var(--paper-0)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, '+t.t+' 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'content-box',boxShadow:'var(--shadow-paper)',borderRadius:'var(--radius-xs)',transform:'rotate('+tilt+'deg)',transformOrigin:'50% 0',transition:'transform var(--dur-slow) var(--ease-soft)',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:16,left:24,right:24,display:'flex',gap:6,alignItems:'center'}},/*#__PURE__*/React.createElement("span",{style:{width:8,height:8,borderRadius:8,background:'var(--karashi-1)'}}),/*#__PURE__*/React.createElement("span",{style:{flex:1,borderTop:'1px solid '+t.c,opacity:.5}})),placeholder&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:10,right:12,fontSize:10,letterSpacing:'.12em',color:t.c,border:'1px dashed '+t.c,padding:'1px 6px',borderRadius:4,background:'var(--paper-0)'}},placeholderLabel),/*#__PURE__*/React.createElement("blockquote",{style:{margin:0,flex:1,fontFamily:'var(--font-serif)',fontSize:15,lineHeight:'32px',color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},quote),/*#__PURE__*/React.createElement("figcaption",{style:{marginTop:20,display:'flex',flexDirection:'column',gap:2}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,color:'var(--ink-1)'}},name),/*#__PURE__*/React.createElement("span",{style:{fontSize:12,lineHeight:1.6,color:'var(--ink-3)'}},[role,org].filter(Boolean).join('｜'))));}Object.assign(__ds_scope,{LetterCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/LetterCard.jsx",error:String(e&&e.message||e)});}// components/consult/Noren.jsx
try{(()=>{const{useState}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};const KF='@keyframes nh-sway{0%,100%{transform:rotate(0deg) skewX(0deg)}30%{transform:rotate(1.4deg) skewX(-1deg)}70%{transform:rotate(-1deg) skewX(.8deg)}}';function Noren({label='相談',sub,tone='exhibit',open:openProp,onOpen,sway=true,height=280,style}){const[hover,setHover]=useState(false);const[self,setSelf]=useState(false);const open=openProp??self;const t=TC[tone]||TC.exhibit;const chars=Array.from(label);const n=Math.max(2,chars.length);const toggle=()=>{setSelf(true);onOpen&&onOpen();};const part=hover&&!open?14:0;return/*#__PURE__*/React.createElement("div",{style:{position:'relative',width:'100%',maxWidth:560,margin:'0 auto',height,...style}},/*#__PURE__*/React.createElement("style",null,KF),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',top:0,left:-12,right:-12,height:10,borderRadius:10,background:'var(--wood-3)',zIndex:2,opacity:open?0:1,transition:'opacity var(--dur-slow) var(--ease-out) 200ms'}}),/*#__PURE__*/React.createElement("button",{onClick:toggle,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),"aria-expanded":open,style:{position:'absolute',inset:'6px 0 0',display:'flex',gap:4,padding:0,border:0,background:'none',cursor:'pointer'}},Array.from({length:n}).map((_,i)=>{const side=i<n/2?-1:1;const centre=i-(n-1)/2;const tf=open?'translateX('+side*120+'%) rotate('+side*6+'deg)':'translateX('+(centre===0?0:Math.sign(centre)*part)+'px)';return/*#__PURE__*/React.createElement("span",{key:i,style:{flex:1,height:'100%',transformOrigin:'top center',transform:tf,opacity:open?0:1,transition:'transform var(--dur-slow) var(--ease-out), opacity var(--dur-slow) var(--ease-out)'}},/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',background:t.c,borderRadius:'0 0 3px 3px',transformOrigin:'top center',animation:sway&&!open?'nh-sway '+(5+i*.7)+'s ease-in-out '+-i*1.3+'s infinite':'none',boxShadow:'inset 0 -14px 0 -8px rgba(0,0,0,.08)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:Math.min(88,height*.3),color:'var(--paper-0)',fontWeight:500}},chars[i]||'')));})),sub&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',left:0,right:0,bottom:-36,textAlign:'center',fontFamily:'var(--font-sans)',fontSize:12,letterSpacing:'.24em',color:'var(--ink-3)',opacity:open?0:1,transition:'opacity var(--dur-base)'}},sub));}Object.assign(__ds_scope,{Noren});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/Noren.jsx",error:String(e&&e.message||e)});}// components/consult/PriceCard.jsx
try{(()=>{const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function PriceCard({index,title,desc,price,unit,tone='exhibit',visible=true,delay=0,style}){const t=TC[tone]||TC.exhibit;return/*#__PURE__*/React.createElement("article",{style:{position:'relative',display:'flex',flexDirection:'column',gap:14,padding:'36px 26px 28px',borderRadius:'var(--radius-sm)',background:'var(--wood-1)',backgroundImage:'repeating-linear-gradient(92deg, rgba(138,110,69,.08) 0 2px, transparent 2px 9px, rgba(138,110,69,.05) 9px 10px, transparent 10px 23px)',boxShadow:'var(--shadow-paper), inset 0 0 0 1px rgba(138,110,69,.25)',color:'var(--ink-1)',opacity:visible?1:0,transform:visible?'none':'translateY(28px)',transition:'opacity var(--dur-slow) var(--ease-out) '+delay+'ms, transform var(--dur-slow) var(--ease-out) '+delay+'ms',minHeight:260,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',top:12,left:'50%',width:8,height:8,marginLeft:-4,borderRadius:8,background:'var(--wood-3)',boxShadow:'inset 0 1px 2px rgba(0,0,0,.4)'}}),index!=null&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:11,letterSpacing:'.24em',color:t.c}},String(index).padStart(2,'0')),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:22,fontWeight:600,lineHeight:1.4,letterSpacing:'.06em',color:'var(--ink-1)'}},title),/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:14,lineHeight:1.8,color:'var(--ink-2)',flex:1,textWrap:'pretty'}},desc),/*#__PURE__*/React.createElement("div",{style:{borderTop:'1px solid rgba(138,110,69,.45)',paddingTop:14,display:'flex',alignItems:'baseline',flexWrap:'wrap',gap:'2px 6px'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:26,fontWeight:600,color:t.d,letterSpacing:'.02em'}},price),unit&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},unit)));}Object.assign(__ds_scope,{PriceCard});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/PriceCard.jsx",error:String(e&&e.message||e)});}// components/consult/ProcessSteps.jsx
try{(()=>{const{useRef,useState,useEffect}=React;const TC={exhibit:{c:'var(--matcha-1)',d:'var(--matcha-2)',t:'var(--matcha-4)'},theatre:{c:'var(--shu-1)',d:'var(--shu-2)',t:'var(--shu-4)'},ink:{c:'var(--ink-1)',d:'var(--ink-2)',t:'var(--paper-2)'}};function ProcessSteps({steps=[],tone='exhibit',direction='auto',style}){const ref=useRef(null);const[w,setW]=useState(800);const t=TC[tone]||TC.exhibit;useEffect(()=>{if(!ref.current||typeof ResizeObserver==='undefined')return;const ro=new ResizeObserver(e=>setW(e[0].contentRect.width));ro.observe(ref.current);return()=>ro.disconnect();},[]);const vert=direction==='vertical'||direction==='auto'&&w<560;return/*#__PURE__*/React.createElement("ol",{ref:ref,style:{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:vert?'1fr':'repeat('+steps.length+', minmax(0,1fr))',gap:vert?28:12,position:'relative',...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:vert?{position:'absolute',left:21,top:22,bottom:22,borderLeft:'1px solid var(--line-2)'}:{position:'absolute',left:'calc(100% / '+steps.length*2+')',right:'calc(100% / '+steps.length*2+')',top:22,borderTop:'1px solid var(--line-2)'}}),steps.map((s,i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{position:'relative',display:'flex',flexDirection:vert?'row':'column',alignItems:vert?'flex-start':'center',gap:vert?18:14,textAlign:vert?'left':'center'}},/*#__PURE__*/React.createElement("span",{style:{width:44,height:44,flexShrink:0,borderRadius:44,border:'1px solid '+t.c,background:'var(--paper-1)',color:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-serif)',fontSize:16}},i+1),/*#__PURE__*/React.createElement("span",{style:{display:'flex',flexDirection:'column',gap:4}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:18,color:'var(--ink-1)',letterSpacing:'.08em'}},s.label),s.note&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,lineHeight:1.7,color:'var(--ink-3)'}},s.note)))));}Object.assign(__ds_scope,{ProcessSteps});})();}catch(e){__ds_ns.__errors.push({path:"components/consult/ProcessSteps.jsx",error:String(e&&e.message||e)});}// components/core/Button.jsx
try{(()=>{const{useState}=React;const TONES={ink:{bg:'var(--ink-1)',bgH:'var(--ink-2)',fg:'var(--paper-0)'},exhibit:{bg:'var(--matcha-1)',bgH:'var(--matcha-2)',fg:'var(--paper-0)'},theatre:{bg:'var(--shu-1)',bgH:'var(--shu-2)',fg:'var(--paper-0)'},paper:{bg:'var(--paper-0)',bgH:'var(--paper-2)',fg:'var(--ink-1)'}};function Button({children,variant='primary',tone='ink',size='md',href,icon,iconRight,disabled,onClick,type='button',style,...rest}){const[h,setH]=useState(false);const[p,setP]=useState(false);const t=TONES[tone]||TONES.ink;const H=size==='lg'?56:size==='sm'?44:48;const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,minHeight:H,padding:variant==='ghost'?'0 4px':size==='lg'?'0 32px':'0 24px',borderRadius:'var(--radius-full)',fontFamily:'var(--font-sans)',fontSize:size==='lg'?16:15,fontWeight:500,letterSpacing:'.08em',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,border:'1px solid transparent',transition:'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',transform:p&&!disabled?'scale(.98)':h&&!disabled?'translateY(-1px)':'none',whiteSpace:'nowrap',boxSizing:'border-box'};const v=variant==='primary'?{background:h?t.bgH:t.bg,color:t.fg}:variant==='secondary'?{background:h?t.bg:'transparent',color:h?t.fg:tone==='paper'?'var(--paper-0)':t.bg,borderColor:tone==='paper'?'var(--paper-0)':t.bg}:{background:'transparent',color:tone==='paper'?'var(--paper-0)':tone==='ink'?'var(--ink-1)':t.bg,borderRadius:0,borderBottom:'1px solid currentColor',minHeight:44};const Tag=href?'a':'button';return React.createElement(Tag,{href,type:href?undefined:type,disabled,onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setP(false);},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),style:{...base,...v,...style},...rest},icon,React.createElement('span',null,children),iconRight);}Object.assign(__ds_scope,{Button});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Button.jsx",error:String(e&&e.message||e)});}// components/core/LangSwitch.jsx
try{(()=>{const LANGS=[{id:'zh',label:'CH'},{id:'ja',label:'JP'},{id:'en',label:'EN'}];function LangSwitch({value='zh',onChange,options=LANGS,dark=false,style}){const fg=dark?'var(--night-ink)':'var(--ink-1)';const mute=dark?'var(--night-ink-2)':'var(--ink-3)';return/*#__PURE__*/React.createElement("div",{role:"group","aria-label":"Language",style:{display:'flex',alignItems:'center',gap:2,fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.06em',...style}},options.map((o,i)=>/*#__PURE__*/React.createElement(React.Fragment,{key:o.id},i>0&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{color:mute,opacity:.6}},"/"),/*#__PURE__*/React.createElement("button",{onClick:()=>onChange&&onChange(o.id),"aria-pressed":value===o.id,style:{minHeight:44,minWidth:44,padding:'0 6px',background:'none',border:0,cursor:'pointer',color:value===o.id?fg:mute,fontFamily:'inherit',fontSize:'inherit',letterSpacing:'inherit',position:'relative'}},o.label,/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',left:'50%',bottom:8,width:4,height:4,marginLeft:-2,borderRadius:4,background:'var(--karashi-1)',opacity:value===o.id?1:0,transition:'opacity var(--dur-base)'}})))));}Object.assign(__ds_scope,{LANGS,LangSwitch});})();}catch(e){__ds_ns.__errors.push({path:"components/core/LangSwitch.jsx",error:String(e&&e.message||e)});}// components/core/PhotoFrame.jsx
try{(()=>{function PhotoFrame({src,alt='',position='50% 50%',label='PHOTO',shape='rounded',ratio='4 / 3',tone='paper',style,children}){const radius=shape==='circle'?'50%':shape==='arch'?'999px 999px var(--radius-md) var(--radius-md)':shape==='square'?'var(--radius-xs)':'var(--radius-lg)';const dark=tone==='night';const stripe=dark?'repeating-linear-gradient(135deg, #2A2622 0 10px, #24211D 10px 20px)':'repeating-linear-gradient(135deg, var(--paper-2) 0 10px, var(--paper-3) 10px 20px)';return/*#__PURE__*/React.createElement("div",{style:{position:'relative',aspectRatio:shape==='circle'?'1 / 1':ratio,borderRadius:radius,overflow:'hidden',background:src?'var(--paper-3)':stripe,width:'100%',...style}},src?/*#__PURE__*/React.createElement("img",{src:src,alt:alt,style:{width:'100%',height:'100%',objectFit:'cover',objectPosition:position,display:'block'}}):/*#__PURE__*/React.createElement("span",{style:{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.14em',color:dark?'var(--night-ink-2)':'var(--ink-3)',textAlign:'center',padding:12}},label),children);}Object.assign(__ds_scope,{PhotoFrame});})();}catch(e){__ds_ns.__errors.push({path:"components/core/PhotoFrame.jsx",error:String(e&&e.message||e)});}// components/core/SectionHeading.jsx
try{(()=>{function SectionHeading({eyebrow,title,vertical=false,dot=true,color='var(--ink-1)',as='h2',size='h2',style}){const fs=size==='display'?'var(--fs-display)':size==='h1'?'var(--fs-h1)':size==='h3'?'var(--fs-h3)':'var(--fs-h2)';const H=as;return/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:vertical?'row-reverse':'column',alignItems:vertical?'flex-start':'flex-start',gap:vertical?16:12,...style}},eyebrow&&/*#__PURE__*/React.createElement("span",{style:{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontSize:'var(--fs-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--ink-3)',writingMode:vertical?'vertical-rl':'horizontal-tb'}},dot&&/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:7,background:'var(--karashi-1)',flexShrink:0}}),eyebrow),/*#__PURE__*/React.createElement(H,{style:{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:fs,lineHeight:vertical?1.5:1.3,letterSpacing:vertical?'.18em':'.04em',color,writingMode:vertical?'vertical-rl':'horizontal-tb',textWrap:'pretty'}},title));}Object.assign(__ds_scope,{SectionHeading});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SectionHeading.jsx",error:String(e&&e.message||e)});}// components/core/SiteHeader.jsx
try{(()=>{const COPY={zh:'相談',ja:'相談',en:'Consult'};function SiteHeader({lang='zh',onLang,onConsult,tone='ink',dark=false,brand='NENEKO',onBrand,consultLabel,style}){const bg=tone==='exhibit'?'var(--matcha-1)':tone==='theatre'?'var(--shu-1)':'var(--ink-1)';return/*#__PURE__*/React.createElement("header",{style:{position:'fixed',top:0,left:0,right:0,zIndex:'var(--z-header)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'10px var(--gutter)',pointerEvents:'none',...style}},/*#__PURE__*/React.createElement("button",{onClick:onBrand,style:{pointerEvents:'auto',background:'none',border:0,padding:0,minHeight:44,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:700,letterSpacing:'.12em',color:dark?'var(--night-ink)':'var(--ink-1)',whiteSpace:'nowrap'}},brand),/*#__PURE__*/React.createElement("div",{style:{pointerEvents:'auto',display:'flex',alignItems:'center',gap:12}},/*#__PURE__*/React.createElement(__ds_scope.LangSwitch,{value:lang,onChange:onLang,dark:dark}),/*#__PURE__*/React.createElement("button",{onClick:onConsult,style:{minHeight:34,minWidth:64,padding:'0 16px',borderRadius:'var(--radius-full)',border:0,background:bg,color:'var(--paper-0)',fontFamily:'var(--font-sans)',fontSize:13,letterSpacing:'.12em',cursor:'pointer',boxShadow:'var(--shadow-paper)',whiteSpace:'nowrap'}},consultLabel||COPY[lang]||COPY.zh)));}Object.assign(__ds_scope,{SiteHeader});})();}catch(e){__ds_ns.__errors.push({path:"components/core/SiteHeader.jsx",error:String(e&&e.message||e)});}// components/core/Stamp.jsx
try{(()=>{function Stamp({top,main,bottom,shape='circle',color='var(--shu-1)',size=112,rotate=-8,inked=true,style}){const r=shape==='circle'?'50%':shape==='oval'?'50% / 42%':'var(--radius-sm)';const w=shape==='oval'?size*1.35:size;return/*#__PURE__*/React.createElement("div",{"aria-label":[top,main,bottom].filter(Boolean).join(' '),style:{width:w,height:size,borderRadius:r,border:'2px solid '+color,color,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,padding:6,boxSizing:'border-box',transform:'rotate('+rotate+'deg) scale('+(inked?1:1.4)+')',opacity:inked?.88:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast) linear',mixBlendMode:'multiply',position:'relative',flexShrink:0,...style}},/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{position:'absolute',inset:4,borderRadius:r,border:'1px solid '+color,opacity:.7}}),top&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.085),letterSpacing:'.2em',fontWeight:500}},top),main&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:size*.2,fontWeight:600,letterSpacing:'.08em',lineHeight:1.1,textAlign:'center'}},main),bottom&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:Math.max(8,size*.08),letterSpacing:'.16em'}},bottom));}Object.assign(__ds_scope,{Stamp});})();}catch(e){__ds_ns.__errors.push({path:"components/core/Stamp.jsx",error:String(e&&e.message||e)});}// components/exhibit/FloorMap.jsx
try{(()=>{const{useState}=React;function FloorMap({rooms=[],current,visited=[],onJump,title='展場平面圖',collapsible=false,defaultOpen=true,labels={entrance:'入口',exit:'出口 EXIT'},style}){const[open,setOpen]=useState(defaultOpen);const body=/*#__PURE__*/React.createElement("div",{style:{display:'flex',flexDirection:'column',gap:10}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'.16em',color:'var(--ink-3)'}},/*#__PURE__*/React.createElement("span",null,labels.entrance," \u2192"),/*#__PURE__*/React.createElement("span",null,labels.exit)),/*#__PURE__*/React.createElement("div",{style:{display:'grid',gridTemplateColumns:'repeat('+rooms.length+', 1fr)',border:'1.5px solid var(--ink-1)',borderRadius:2}},rooms.map((r,i)=>{const on=r.id===current;const v=visited.includes(r.id);return/*#__PURE__*/React.createElement("button",{key:r.id,onClick:()=>onJump&&onJump(r.id),"aria-current":on?'step':undefined,"aria-label":r.label,style:{position:'relative',minHeight:56,minWidth:44,padding:0,border:0,borderLeft:i?'1px solid var(--line-2)':0,background:on?'var(--matcha-4)':'transparent',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',paddingBottom:6,transition:'background var(--dur-base)'}},/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:8,left:'50%',width:24,height:24,marginLeft:-12,borderRadius:24,border:'1.5px solid var(--matcha-1)',color:'var(--matcha-1)',fontFamily:'var(--font-serif)',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center',transform:v?'rotate(-12deg) scale(1)':'scale(1.6)',opacity:v?.9:0,transition:'transform var(--dur-base) cubic-bezier(.3,1.6,.5,1), opacity var(--dur-fast)'}},"\u6E08"),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:13,color:on?'var(--matcha-2)':'var(--ink-2)'}},String(i+1).padStart(2,'0')));})),/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{height:10,borderBottom:'1px dashed var(--line-2)',position:'relative'}},rooms.findIndex(r=>r.id===current)>=0&&/*#__PURE__*/React.createElement("span",{style:{position:'absolute',top:4,left:'calc('+(rooms.findIndex(r=>r.id===current)+.5)/rooms.length*100+'% - 5px)',width:10,height:10,borderRadius:10,background:'var(--karashi-1)',transition:'left var(--dur-slow) var(--ease-out)'}})),/*#__PURE__*/React.createElement("div",{style:{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em'}},visited.length," / ",rooms.length));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:260,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 12px',background:'rgba(250,247,240,.94)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lift)',fontFamily:'var(--font-sans)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 8px':'0 16px',border:0,background:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:12,color:'var(--matcha-1)'}},visited.length,"/",rooms.length," ",open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-1)',letterSpacing:'.1em',marginBottom:8}},title),(!collapsible||open)&&body);}Object.assign(__ds_scope,{FloorMap});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/FloorMap.jsx",error:String(e&&e.message||e)});}// components/exhibit/Plaque.jsx
try{(()=>{function Plaque({number,year,title,client,role,note,labels={client:'委託單位',role:'我的角色'},style}){return/*#__PURE__*/React.createElement("aside",{style:{width:'100%',maxWidth:300,padding:'20px 20px 18px',boxSizing:'border-box',background:'var(--paper-0)',border:'1px solid var(--line-3)',borderRadius:'var(--radius-xs)',boxShadow:'0 1px 0 rgba(30,28,25,.05)',display:'flex',flexDirection:'column',gap:10,fontFamily:'var(--font-sans)',...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}},/*#__PURE__*/React.createElement("span",{style:{fontSize:11,letterSpacing:'.22em',color:'var(--matcha-1)',fontWeight:500}},number),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:14,color:'var(--ink-3)'}},year)),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:19,lineHeight:1.5,fontWeight:600,color:'var(--ink-1)',letterSpacing:'.04em',textWrap:'pretty'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',gap:'4px 12px',fontSize:12.5,lineHeight:1.6,borderTop:'1px solid var(--line-3)',paddingTop:10}},client&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.client),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},client)),role&&/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("dt",{style:{color:'var(--ink-3)'}},labels.role),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--ink-1)'}},role))),note&&/*#__PURE__*/React.createElement("p",{style:{margin:0,fontSize:13,lineHeight:1.8,color:'var(--ink-2)',textWrap:'pretty'}},note));}Object.assign(__ds_scope,{Plaque});})();}catch(e){__ds_ns.__errors.push({path:"components/exhibit/Plaque.jsx",error:String(e&&e.message||e)});}// components/theatre/Curtain.jsx
try{(()=>{const fold='repeating-linear-gradient(90deg, var(--shu-5) 0, var(--shu-2) 4%, var(--shu-1) 8%, var(--shu-3) 10%, var(--shu-1) 12%, var(--shu-2) 16%, var(--shu-5) 20%)';function Curtain({open=0,valance=true,duration,style}){const o=Math.max(0,Math.min(1,open));const tr=duration!=null?'transform '+duration+'ms var(--ease-inout)':'none';const panel=side=>({position:'absolute',top:0,bottom:0,width:'51%',[side]:0,background:fold,backgroundSize:'40% 100%',transform:'translateX('+(side==='left'?-1:1)*o*100+'%) scaleX('+(1-o*.25)+')',transformOrigin:side==='left'?'0 50%':'100% 50%',transition:tr,boxShadow:side==='left'?'inset -30px 0 40px -20px rgba(0,0,0,.5)':'inset 30px 0 40px -20px rgba(0,0,0,.5)'});return/*#__PURE__*/React.createElement("div",{"aria-hidden":"true",style:{position:'absolute',inset:0,overflow:'hidden',pointerEvents:o>.95?'none':'auto',...style}},/*#__PURE__*/React.createElement("div",{style:panel('left')}),/*#__PURE__*/React.createElement("div",{style:panel('right')}),valance&&/*#__PURE__*/React.createElement("div",{style:{position:'absolute',top:0,left:0,right:0,height:'9%',minHeight:36,background:fold,backgroundSize:'8% 100%',borderBottom:'3px solid var(--karashi-1)',boxShadow:'0 10px 20px rgba(0,0,0,.4)'}}));}Object.assign(__ds_scope,{Curtain});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Curtain.jsx",error:String(e&&e.message||e)});}// components/theatre/Playbill.jsx
try{(()=>{function Playbill({act,year,title,rows=[],style}){return/*#__PURE__*/React.createElement("div",{style:{width:'100%',maxWidth:480,margin:'0 auto',color:'var(--night-ink)',fontFamily:'var(--font-sans)',textAlign:'center',display:'flex',flexDirection:'column',gap:14,...style}},/*#__PURE__*/React.createElement("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:14,fontSize:12,letterSpacing:'.3em',color:'var(--shu-3)'}},/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}}),act,year&&/*#__PURE__*/React.createElement("span",{style:{color:'var(--night-ink-2)'}},year),/*#__PURE__*/React.createElement("span",{style:{width:28,borderTop:'1px solid currentColor'}})),/*#__PURE__*/React.createElement("h3",{style:{margin:0,fontFamily:'var(--font-serif)',fontSize:'clamp(22px,2.6vw,32px)',lineHeight:1.45,fontWeight:500,color:'var(--night-ink)',letterSpacing:'.06em',textWrap:'balance'}},title),/*#__PURE__*/React.createElement("dl",{style:{margin:'6px 0 0',display:'flex',flexDirection:'column',gap:6,fontSize:13.5}},rows.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:i,style:{display:'flex',alignItems:'baseline',gap:10}},/*#__PURE__*/React.createElement("dt",{style:{color:'var(--night-ink-2)',letterSpacing:'.14em',whiteSpace:'nowrap'}},r.k),/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{flex:1,borderBottom:'1px dotted var(--night-4)',transform:'translateY(-4px)'}}),/*#__PURE__*/React.createElement("dd",{style:{margin:0,color:'var(--night-ink)',textAlign:'right'}},r.v)))));}Object.assign(__ds_scope,{Playbill});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Playbill.jsx",error:String(e&&e.message||e)});}// components/theatre/ProgramNav.jsx
try{(()=>{const{useState}=React;function ProgramNav({acts=[],current,onJump,title='節目單',collapsible=false,defaultOpen=true,style}){const[open,setOpen]=useState(defaultOpen);const list=/*#__PURE__*/React.createElement("ol",{style:{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column'}},acts.map(a=>{const on=a.id===current;return/*#__PURE__*/React.createElement("li",{key:a.id},/*#__PURE__*/React.createElement("button",{onClick:()=>onJump&&onJump(a.id),"aria-current":on?'step':undefined,style:{width:'100%',minHeight:44,padding:'6px 0',border:0,background:'none',cursor:'pointer',display:'grid',gridTemplateColumns:'14px auto 1fr',alignItems:'center',gap:8,textAlign:'left',color:on?'var(--night-ink)':'var(--night-ink-2)',fontFamily:'var(--font-sans)',fontSize:12.5}},/*#__PURE__*/React.createElement("span",{style:{width:6,height:6,borderRadius:6,background:on?'var(--lamp-1)':'transparent',border:'1px solid '+(on?'var(--lamp-1)':'var(--night-4)'),boxShadow:on?'0 0 8px var(--lamp-glow)':'none'}}),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',letterSpacing:'.1em',color:on?'var(--shu-3)':'inherit',whiteSpace:'nowrap'}},a.label),/*#__PURE__*/React.createElement("span",{style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},a.title)));}));return/*#__PURE__*/React.createElement("nav",{"aria-label":title,style:{width:240,maxWidth:'100%',boxSizing:'border-box',padding:collapsible&&!open?0:'14px 16px 8px',background:'rgba(23,21,19,.88)',border:'1px solid var(--night-4)',borderRadius:'var(--radius-md)',...style}},collapsible?/*#__PURE__*/React.createElement("button",{onClick:()=>setOpen(!open),"aria-expanded":open,style:{width:'100%',minHeight:48,padding:open?'0 0 6px':'0 16px',border:0,background:'none',color:'var(--night-ink)',fontFamily:'var(--font-serif)',fontSize:14,letterSpacing:'.2em',display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}},title,/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',color:'var(--shu-3)'}},open?'−':'+')):/*#__PURE__*/React.createElement("div",{style:{fontFamily:'var(--font-serif)',fontSize:13,letterSpacing:'.3em',color:'var(--night-ink)',paddingBottom:6,borderBottom:'1px solid var(--night-4)',marginBottom:4}},title),(!collapsible||open)&&list);}Object.assign(__ds_scope,{ProgramNav});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/ProgramNav.jsx",error:String(e&&e.message||e)});}// components/theatre/Ticket.jsx
try{(()=>{function Ticket({title='NENEKO / HANNING',sub,date,seat,no,admit='ADMIT ONE',stubLabel='もぎり',torn=0,style}){const tr=Math.max(0,Math.min(1,torn));const notch='radial-gradient(circle at 0 50%, transparent 10px, #000 10.5px)';return/*#__PURE__*/React.createElement("div",{style:{display:'flex',width:'100%',maxWidth:560,filter:'drop-shadow(0 18px 30px rgba(0,0,0,.45))',...style}},/*#__PURE__*/React.createElement("div",{style:{flex:1,minWidth:0,padding:'28px 28px 24px',background:'var(--paper-1)',borderRadius:'8px 0 0 8px',display:'flex',flexDirection:'column',gap:12,borderRight:'2px dashed var(--paper-4)'}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-sans)',fontSize:10,letterSpacing:'.3em',color:'var(--shu-1)'}},admit),/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:'clamp(22px,3vw,30px)',lineHeight:1.3,color:'var(--ink-1)',letterSpacing:'.06em'}},title),sub&&/*#__PURE__*/React.createElement("span",{style:{fontSize:13,color:'var(--ink-2)'}},sub),/*#__PURE__*/React.createElement("div",{style:{display:'flex',gap:24,flexWrap:'wrap',fontSize:12,color:'var(--ink-3)',letterSpacing:'.1em',borderTop:'1px solid var(--line-3)',paddingTop:10}},date&&/*#__PURE__*/React.createElement("span",null,date),seat&&/*#__PURE__*/React.createElement("span",null,seat))),/*#__PURE__*/React.createElement("div",{style:{width:118,flexShrink:0,padding:'20px 14px',background:'var(--shu-1)',color:'var(--paper-0)',borderRadius:'0 8px 8px 0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',gap:8,transformOrigin:'0% 100%',transform:'translate('+tr*40+'px,'+tr*120+'px) rotate('+tr*24+'deg)',opacity:1-tr*.9,WebkitMaskImage:notch,maskImage:notch}},/*#__PURE__*/React.createElement("span",{style:{fontFamily:'var(--font-serif)',fontSize:15,writingMode:'vertical-rl',letterSpacing:'.3em'}},stubLabel),no&&/*#__PURE__*/React.createElement("span",{style:{fontFamily:'ui-monospace, Menlo, monospace',fontSize:11,letterSpacing:'.1em'}},no)));}Object.assign(__ds_scope,{Ticket});})();}catch(e){__ds_ns.__errors.push({path:"components/theatre/Ticket.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/App.jsx
try{(()=>{function App(){const NS=window.NS;const pageFrom=init=>{const h=location.hash.replace('#','');if(init)return window.__START||'home';return['home','exhibition','theatre'].includes(h)?h:window.__START||'home';};const[page,setPage]=useState(()=>pageFrom(true));const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>setTop(window.scrollY<window.innerHeight*.8);window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=()=>setPage(pageFrom());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f);},[]);const go=(p,anchor)=>{setVeil(true);setTimeout(()=>{history.replaceState(null,'','#'+p);setPage(p);window.scrollTo(0,0);setTimeout(()=>{setVeil(false);if(anchor)scrollToId(anchor,false);},60);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:page==='theatre'||page==='home'&&sky==='night'&&top,onConsult:consult,onBrand:()=>go('home')}),page==='home'&&/*#__PURE__*/React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&/*#__PURE__*/React.createElement(Exhibition,{lang:lang}),page==='theatre'&&/*#__PURE__*/React.createElement(Theatre,{lang:lang}),/*#__PURE__*/React.createElement(SiteFooter,{lang:lang,go:go,page:page}),/*#__PURE__*/React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/App.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/ConsultDesk.jsx
try{(()=>{function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return/*#__PURE__*/React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},/*#__PURE__*/React.createElement("div",{className:"desk-head wrap"},/*#__PURE__*/React.createElement("span",{className:"desk-plate"},/*#__PURE__*/React.createElement("b",null,th?L.deskTh:L.deskEx),/*#__PURE__*/React.createElement("small",null,th?L.deskThSub:L.deskExSub))),/*#__PURE__*/React.createElement("div",{className:"desk-window wrap"},/*#__PURE__*/React.createElement("div",{className:"desk-panel"},/*#__PURE__*/React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},/*#__PURE__*/React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),/*#__PURE__*/React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("div",{className:"desk-row-head"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),/*#__PURE__*/React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),/*#__PURE__*/React.createElement("div",{className:"price-grid"},services.map((s,i)=>/*#__PURE__*/React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),/*#__PURE__*/React.createElement("p",{className:"note"},L.priceNote),/*#__PURE__*/React.createElement("div",{className:"desk-block"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),/*#__PURE__*/React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),/*#__PURE__*/React.createElement("div",{className:"desk-block contact"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),/*#__PURE__*/React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:/*#__PURE__*/React.createElement(Icon,{name:"calendar-check",size:18})},L.book),/*#__PURE__*/React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),/*#__PURE__*/React.createElement("div",{className:"contact-links"},/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Email"},/*#__PURE__*/React.createElement(Icon,{name:"mail",size:20}),/*#__PURE__*/React.createElement("span",null,"Email")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"LINE"},/*#__PURE__*/React.createElement(Icon,{name:"message-circle",size:20}),/*#__PURE__*/React.createElement("span",null,"LINE")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Instagram"},/*#__PURE__*/React.createElement(Icon,{name:"instagram",size:20}),/*#__PURE__*/React.createElement("span",null,"Instagram"))),/*#__PURE__*/React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/ConsultDesk.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Exhibition.jsx
try{(()=>{function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return/*#__PURE__*/React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},/*#__PURE__*/React.createElement("div",{className:"ex-wall-sticky"},/*#__PURE__*/React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},/*#__PURE__*/React.createElement("span",null,L.room," 01 \u2192")),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},/*#__PURE__*/React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},/*#__PURE__*/React.createElement("p",{className:"ex-statement"},L.exStatement),/*#__PURE__*/React.createElement("p",{className:"ex-period"},L.exPeriod),/*#__PURE__*/React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},/*#__PURE__*/React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),/*#__PURE__*/React.createElement("div",{className:"room-num"},/*#__PURE__*/React.createElement("span",null,L.room),/*#__PURE__*/React.createElement("b",null,r.n)),/*#__PURE__*/React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14}))),/*#__PURE__*/React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),/*#__PURE__*/React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return/*#__PURE__*/React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},/*#__PURE__*/React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),/*#__PURE__*/React.createElement("div",{className:"detail-body wrap"},/*#__PURE__*/React.createElement("button",{className:"detail-close",onClick:onClose},/*#__PURE__*/React.createElement(Icon,{name:"arrow-left",size:18}),L.back),/*#__PURE__*/React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),/*#__PURE__*/React.createElement("h2",null,r.title),/*#__PURE__*/React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),/*#__PURE__*/React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>/*#__PURE__*/React.createElement("div",{key:h},/*#__PURE__*/React.createElement("h3",null,h),/*#__PURE__*/React.createElement("p",null,L.placeholder)))),/*#__PURE__*/React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>/*#__PURE__*/React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"exhibition"},/*#__PURE__*/React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?/*#__PURE__*/React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>/*#__PURE__*/React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):/*#__PURE__*/React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},/*#__PURE__*/React.createElement("div",{className:"gallery-sticky"},/*#__PURE__*/React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),/*#__PURE__*/React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},/*#__PURE__*/React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),/*#__PURE__*/React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),/*#__PURE__*/React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},/*#__PURE__*/React.createElement("div",{className:"exit-sign"},/*#__PURE__*/React.createElement("span",null,L.exit),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:18}))),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&/*#__PURE__*/React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Exhibition.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Home.jsx
try{(()=>{function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[intro,setIntro]=useState(()=>!reduced&&!sessionStorage.getItem('nh-intro-seen'));const done=()=>{sessionStorage.setItem('nh-intro-seen','1');setIntro(false);};const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});const replay=()=>{window.scrollTo({top:0});setIntro(true);};return/*#__PURE__*/React.createElement("main",{className:"home"},intro&&/*#__PURE__*/React.createElement(Intro,{lang:lang,compact:compact,onDone:done}),/*#__PURE__*/React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),/*#__PURE__*/React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},/*#__PURE__*/React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},/*#__PURE__*/React.createElement("span",{className:"about-card-photo"},/*#__PURE__*/React.createElement("img",{src:(window.__ASSETS||'../../assets')+'/photos/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),/*#__PURE__*/React.createElement("img",{className:"alt",src:(window.__ASSETS||'../../assets')+'/photos/desk-sm.jpg',alt:"",style:{objectPosition:'62% 40%'}})),/*#__PURE__*/React.createElement("span",{className:"about-card-cap"},/*#__PURE__*/React.createElement("b",null,"NENEKO"),/*#__PURE__*/React.createElement("small",null,L.cardRole))),/*#__PURE__*/React.createElement("div",{className:"about-text"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.since),/*#__PURE__*/React.createElement("div",{className:"about-head"},/*#__PURE__*/React.createElement("h2",{className:"about-name"},"About me"),/*#__PURE__*/React.createElement("a",{className:"cv-link",href:"#"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>/*#__PURE__*/React.createElement("p",{key:n,className:"about-lead"},p))),/*#__PURE__*/React.createElement("div",{className:"about-route"},/*#__PURE__*/React.createElement("ol",null,window.ROUTE.map(([y,c],n)=>/*#__PURE__*/React.createElement("li",{key:y},/*#__PURE__*/React.createElement("b",null,y),/*#__PURE__*/React.createElement("span",null,c)))),/*#__PURE__*/React.createElement(NS.Button,{variant:"ghost",onClick:replay,icon:/*#__PURE__*/React.createElement(Icon,{name:"rotate-ccw",size:16})},L.replay))),/*#__PURE__*/React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},/*#__PURE__*/React.createElement("div",{className:"wrap"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),/*#__PURE__*/React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},/*#__PURE__*/React.createElement("div",{className:"marquee-track"},[0,1].map(k=>/*#__PURE__*/React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>/*#__PURE__*/React.createElement("li",{key:p},p)))))),/*#__PURE__*/React.createElement("div",{className:"voices wrap"},/*#__PURE__*/React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>/*#__PURE__*/React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),/*#__PURE__*/React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return/*#__PURE__*/React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),/*#__PURE__*/React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},/*#__PURE__*/React.createElement("span",null,L.teammate),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:26})))),/*#__PURE__*/React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return/*#__PURE__*/React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},/*#__PURE__*/React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},/*#__PURE__*/React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},/*#__PURE__*/React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const[open,setOpen]=useState(null);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];return/*#__PURE__*/React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},/*#__PURE__*/React.createElement("p",{className:"cs-note"},L.csNote),/*#__PURE__*/React.createElement("div",{className:"cs-street"},doors.map(d=>{const st=open===d.k?'open':touch?'half':'closed';const on=st!=='closed';return/*#__PURE__*/React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("h3",{className:"cs-q"},d.q),/*#__PURE__*/React.createElement("p",{className:"cs-egg"},d.egg),/*#__PURE__*/React.createElement("div",{className:"cs-open"},/*#__PURE__*/React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-rack"},/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("span",{className:"cs-uketsuke"},/*#__PURE__*/React.createElement("b",null,"\u53D7\u4ED8"),/*#__PURE__*/React.createElement("small",null,"RECEPTION")),/*#__PURE__*/React.createElement("span",{className:"cs-counter"})):/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-ledge"}))),/*#__PURE__*/React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},/*#__PURE__*/React.createElement("ul",null,d.sv.map((s,n)=>/*#__PURE__*/React.createElement("li",{key:n},/*#__PURE__*/React.createElement("span",null,s[0])))),/*#__PURE__*/React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,/*#__PURE__*/React.createElement(Icon,{name:"arrow-right",size:16}))),/*#__PURE__*/React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-poster","aria-hidden":"true"},/*#__PURE__*/React.createElement("b",null,L.poster),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));})),/*#__PURE__*/React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},/*#__PURE__*/React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),/*#__PURE__*/React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},/*#__PURE__*/React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return/*#__PURE__*/React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},/*#__PURE__*/React.createElement("div",{className:"wrap site-foot-in"},/*#__PURE__*/React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},/*#__PURE__*/React.createElement("div",{className:"sf-col"},/*#__PURE__*/React.createElement("h4",null,"HOME"),/*#__PURE__*/React.createElement("ul",null,home.map(([label,p,a])=>/*#__PURE__*/React.createElement("li",{key:label},/*#__PURE__*/React.createElement("a",{href:'#'+p,onClick:to(p,a)},label))))),/*#__PURE__*/React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>/*#__PURE__*/React.createElement("h4",{key:k},/*#__PURE__*/React.createElement("a",{className:'sf-work sf-work-'+k,href:'#'+p,onClick:to(p)},label,/*#__PURE__*/React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),/*#__PURE__*/React.createElement("div",{className:"sf-contact"},/*#__PURE__*/React.createElement("h4",null,"LET'S TALK!"),/*#__PURE__*/React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),/*#__PURE__*/React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),/*#__PURE__*/React.createElement("div",{className:"sf-social"},/*#__PURE__*/React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),/*#__PURE__*/React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),/*#__PURE__*/React.createElement("div",{className:"wrap sf-copy"},/*#__PURE__*/React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Home.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Intro.jsx
try{(()=>{const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch((window.__ASSETS||'../../assets')+'/maps/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return/*#__PURE__*/React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},/*#__PURE__*/React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},/*#__PURE__*/React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>/*#__PURE__*/React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>/*#__PURE__*/React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},/*#__PURE__*/React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),/*#__PURE__*/React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return/*#__PURE__*/React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},/*#__PURE__*/React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&/*#__PURE__*/React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},/*#__PURE__*/React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),/*#__PURE__*/React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},/*#__PURE__*/React.createElement("b",null,a),/*#__PURE__*/React.createElement("span",null,"\uFF5C"),b))),/*#__PURE__*/React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,/*#__PURE__*/React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Intro.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Street.jsx
try{(()=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return/*#__PURE__*/React.createElement("div",{className:"sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},/*#__PURE__*/React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},/*#__PURE__*/React.createElement("span",{className:"moon"})),STARS.map((s,i)=>/*#__PURE__*/React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),/*#__PURE__*/React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},/*#__PURE__*/React.createElement("span",{className:"cloud c1"}),/*#__PURE__*/React.createElement("span",{className:"cloud c2"}),/*#__PURE__*/React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),/*#__PURE__*/React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),/*#__PURE__*/React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},/*#__PURE__*/React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),/*#__PURE__*/React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),/*#__PURE__*/React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("clipPath",{id:"glass-clip"},/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),/*#__PURE__*/React.createElement("g",{clipPath:"url(#glass-clip)"},/*#__PURE__*/React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),/*#__PURE__*/React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),/*#__PURE__*/React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day'}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),/*#__PURE__*/React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),/*#__PURE__*/React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>/*#__PURE__*/React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),/*#__PURE__*/React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night'}));}function StreetTag({x,y,rot,text,hidden,light,active}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text]);return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},/*#__PURE__*/React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},/*#__PURE__*/React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},/*#__PURE__*/React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},/*#__PURE__*/React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),/*#__PURE__*/React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return/*#__PURE__*/React.createElement("div",{className:cls,style:{opacity:dim}},/*#__PURE__*/React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[mode,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom({which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return/*#__PURE__*/React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},/*#__PURE__*/React.createElement(Sky,{mode:mode}),/*#__PURE__*/React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' 78%'}:null},/*#__PURE__*/React.createElement("div",{className:"street-top"},/*#__PURE__*/React.createElement("div",{className:"tagline-stack"},/*#__PURE__*/React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),/*#__PURE__*/React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),/*#__PURE__*/React.createElement("p",{className:"byline"},L.byline)),/*#__PURE__*/React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),/*#__PURE__*/React.createElement("p",{className:"street-hint"},/*#__PURE__*/React.createElement("span",{className:"hint-arrow"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),/*#__PURE__*/React.createElement("span",{className:"hint-text"},touch?L.hintTap:L.hintHover))),/*#__PURE__*/React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Street.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Theatre.jsx
try{(()=>{function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return/*#__PURE__*/React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},/*#__PURE__*/React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return/*#__PURE__*/React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},/*#__PURE__*/React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),/*#__PURE__*/React.createElement("span",{className:"act-num"},a.n[lang]),/*#__PURE__*/React.createElement("div",{className:"stage-photo"},/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),/*#__PURE__*/React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"theatre"},/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"ticket-stage"},/*#__PURE__*/React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),/*#__PURE__*/React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),/*#__PURE__*/React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),/*#__PURE__*/React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),/*#__PURE__*/React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>/*#__PURE__*/React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),/*#__PURE__*/React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),/*#__PURE__*/React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("span",{className:"bow-label"},L.curtainCall),/*#__PURE__*/React.createElement("h2",null,L.bowTitle),/*#__PURE__*/React.createElement("p",null,L.bowSub)),/*#__PURE__*/React.createElement(NS.Curtain,{open:o}));}),/*#__PURE__*/React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},/*#__PURE__*/React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),/*#__PURE__*/React.createElement("span",{className:"label"},"Lobby"),/*#__PURE__*/React.createElement("h2",null,L.lobby)),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Theatre.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/hooks.jsx
try{(()=>{const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE=(window.__ASSETS||'../../assets')+'/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const useTouch=()=>useMedia('(hover: none)');const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return/*#__PURE__*/React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>/*#__PURE__*/React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}Object.assign(window,{useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/hooks.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？先聊聊吧！',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？まずはお話ししましょう！',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate? Let’s talk first!',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/i18n.js",error:String(e&&e.message||e)});}__ds_ns.ContactForm=__ds_scope.ContactForm;__ds_ns.CurrencyToggle=__ds_scope.CurrencyToggle;__ds_ns.LetterCard=__ds_scope.LetterCard;__ds_ns.Noren=__ds_scope.Noren;__ds_ns.PriceCard=__ds_scope.PriceCard;__ds_ns.ProcessSteps=__ds_scope.ProcessSteps;__ds_ns.Button=__ds_scope.Button;__ds_ns.LANGS=__ds_scope.LANGS;__ds_ns.LangSwitch=__ds_scope.LangSwitch;__ds_ns.PhotoFrame=__ds_scope.PhotoFrame;__ds_ns.SectionHeading=__ds_scope.SectionHeading;__ds_ns.SiteHeader=__ds_scope.SiteHeader;__ds_ns.Stamp=__ds_scope.Stamp;__ds_ns.FloorMap=__ds_scope.FloorMap;__ds_ns.Plaque=__ds_scope.Plaque;__ds_ns.Curtain=__ds_scope.Curtain;__ds_ns.Playbill=__ds_scope.Playbill;__ds_ns.ProgramNav=__ds_scope.ProgramNav;__ds_ns.Ticket=__ds_scope.Ticket;})();})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/components.js",error:String(e&&e.message||e)});}// neneko-site/js/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？先聊聊吧！',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？まずはお話ししましょう！',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate? Let’s talk first!',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/i18n.js",error:String(e&&e.message||e)});}// ui_kits/portfolio/App.jsx
try{(()=>{function App(){const NS=window.NS;const pageFrom=init=>{const h=location.hash.replace('#','');if(init)return window.__START||'home';return['home','exhibition','theatre'].includes(h)?h:window.__START||'home';};const[page,setPage]=useState(()=>pageFrom(true));const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);const[scrolled,setScrolled]=useState(false);const compact=useCompact();useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>{setTop(window.scrollY<window.innerHeight*.8);setScrolled(window.scrollY>24);};window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=()=>setPage(pageFrom());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f);},[]);useEffect(()=>{const h=location.hash.slice(1);if(h&&!['home','exhibition','theatre'].includes(h))setTimeout(()=>scrollToId(h,false),700);},[]);const go=(p,anchor)=>{setVeil(true);setTimeout(()=>{history.replaceState(null,'','#'+p);setPage(p);window.scrollTo(0,0);setTimeout(()=>{setVeil(false);if(anchor)scrollToId(anchor,false);},60);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:!(compact&&scrolled)&&(page==='theatre'||page==='home'&&sky==='night'&&top),onConsult:consult,onBrand:()=>go('home'),style:compact&&scrolled?{background:'rgba(250,247,240,.9)',WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)',boxShadow:'0 1px 0 var(--line-3)',pointerEvents:'auto',padding:'4px var(--gutter)',transition:'background 240ms'}:{transition:'background 240ms'}}),page==='home'&&/*#__PURE__*/React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&/*#__PURE__*/React.createElement(Exhibition,{lang:lang}),page==='theatre'&&/*#__PURE__*/React.createElement(Theatre,{lang:lang}),/*#__PURE__*/React.createElement(SiteFooter,{lang:lang,go:go,page:page}),/*#__PURE__*/React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/App.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/ConsultDesk.jsx
try{(()=>{function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return/*#__PURE__*/React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},/*#__PURE__*/React.createElement("div",{className:"desk-head wrap"},/*#__PURE__*/React.createElement("span",{className:"desk-plate"},/*#__PURE__*/React.createElement("b",null,th?L.deskTh:L.deskEx),/*#__PURE__*/React.createElement("small",null,th?L.deskThSub:L.deskExSub))),/*#__PURE__*/React.createElement("div",{className:"desk-window wrap"},/*#__PURE__*/React.createElement("div",{className:"desk-panel"},/*#__PURE__*/React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},/*#__PURE__*/React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),/*#__PURE__*/React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("div",{className:"desk-row-head"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),/*#__PURE__*/React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),/*#__PURE__*/React.createElement("div",{className:"price-grid"},services.map((s,i)=>/*#__PURE__*/React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),/*#__PURE__*/React.createElement("p",{className:"note"},L.priceNote),/*#__PURE__*/React.createElement("div",{className:"desk-block"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),/*#__PURE__*/React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),/*#__PURE__*/React.createElement("div",{className:"desk-block contact"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),/*#__PURE__*/React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:/*#__PURE__*/React.createElement(Icon,{name:"calendar-check",size:18})},L.book),/*#__PURE__*/React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),/*#__PURE__*/React.createElement("div",{className:"contact-links"},/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Email"},/*#__PURE__*/React.createElement(Icon,{name:"mail",size:20}),/*#__PURE__*/React.createElement("span",null,"Email")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"LINE"},/*#__PURE__*/React.createElement(Icon,{name:"message-circle",size:20}),/*#__PURE__*/React.createElement("span",null,"LINE")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Instagram"},/*#__PURE__*/React.createElement(Icon,{name:"instagram",size:20}),/*#__PURE__*/React.createElement("span",null,"Instagram"))),/*#__PURE__*/React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/ConsultDesk.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Exhibition.jsx
try{(()=>{function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return/*#__PURE__*/React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},/*#__PURE__*/React.createElement("div",{className:"ex-wall-sticky"},/*#__PURE__*/React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},/*#__PURE__*/React.createElement("span",null,L.room," 01 \u2192")),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},/*#__PURE__*/React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},/*#__PURE__*/React.createElement("p",{className:"ex-statement"},L.exStatement),/*#__PURE__*/React.createElement("p",{className:"ex-period"},L.exPeriod),/*#__PURE__*/React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},/*#__PURE__*/React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),/*#__PURE__*/React.createElement("div",{className:"room-num"},/*#__PURE__*/React.createElement("span",null,L.room),/*#__PURE__*/React.createElement("b",null,r.n)),/*#__PURE__*/React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14}))),/*#__PURE__*/React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),/*#__PURE__*/React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return/*#__PURE__*/React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},/*#__PURE__*/React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),/*#__PURE__*/React.createElement("div",{className:"detail-body wrap"},/*#__PURE__*/React.createElement("button",{className:"detail-close",onClick:onClose},/*#__PURE__*/React.createElement(Icon,{name:"arrow-left",size:18}),L.back),/*#__PURE__*/React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),/*#__PURE__*/React.createElement("h2",null,r.title),/*#__PURE__*/React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),/*#__PURE__*/React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>/*#__PURE__*/React.createElement("div",{key:h},/*#__PURE__*/React.createElement("h3",null,h),/*#__PURE__*/React.createElement("p",null,L.placeholder)))),/*#__PURE__*/React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>/*#__PURE__*/React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"exhibition"},/*#__PURE__*/React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?/*#__PURE__*/React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>/*#__PURE__*/React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):/*#__PURE__*/React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},/*#__PURE__*/React.createElement("div",{className:"gallery-sticky"},/*#__PURE__*/React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),/*#__PURE__*/React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},/*#__PURE__*/React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),/*#__PURE__*/React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),/*#__PURE__*/React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},/*#__PURE__*/React.createElement("div",{className:"exit-sign"},/*#__PURE__*/React.createElement("span",null,L.exit),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:18}))),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&/*#__PURE__*/React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Exhibition.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Home.jsx
try{(()=>{function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[intro,setIntro]=useState(()=>!reduced&&!sessionStorage.getItem('nh-intro-seen'));const done=()=>{sessionStorage.setItem('nh-intro-seen','1');setIntro(false);};const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});const replay=()=>{window.scrollTo({top:0});setIntro(true);};return/*#__PURE__*/React.createElement("main",{className:"home"},intro&&/*#__PURE__*/React.createElement(Intro,{lang:lang,compact:compact,onDone:done}),/*#__PURE__*/React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),/*#__PURE__*/React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},/*#__PURE__*/React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},/*#__PURE__*/React.createElement("span",{className:"about-card-photo"},/*#__PURE__*/React.createElement("img",{src:(window.__ASSETS||'../../assets')+'/photos/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),/*#__PURE__*/React.createElement("img",{className:"alt",src:(window.__ASSETS||'../../assets')+'/photos/desk-sm.jpg',alt:"",style:{objectPosition:'62% 40%'}})),/*#__PURE__*/React.createElement("span",{className:"about-card-cap"},/*#__PURE__*/React.createElement("b",null,"NENEKO"),/*#__PURE__*/React.createElement("small",null,L.cardRole))),/*#__PURE__*/React.createElement("div",{className:"about-text"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.since),/*#__PURE__*/React.createElement("div",{className:"about-head"},/*#__PURE__*/React.createElement("h2",{className:"about-name"},"About me"),/*#__PURE__*/React.createElement("a",{className:"cv-link",href:"#"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>/*#__PURE__*/React.createElement("p",{key:n,className:"about-lead"},p))),/*#__PURE__*/React.createElement("div",{className:"about-route"},/*#__PURE__*/React.createElement("ol",null,window.ROUTE.map(([y,c],n)=>/*#__PURE__*/React.createElement("li",{key:y},/*#__PURE__*/React.createElement("b",null,y),/*#__PURE__*/React.createElement("span",null,c)))),/*#__PURE__*/React.createElement(NS.Button,{variant:"ghost",onClick:replay,icon:/*#__PURE__*/React.createElement(Icon,{name:"rotate-ccw",size:16})},L.replay))),/*#__PURE__*/React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},/*#__PURE__*/React.createElement("div",{className:"wrap"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),/*#__PURE__*/React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},/*#__PURE__*/React.createElement("div",{className:"marquee-track"},[0,1].map(k=>/*#__PURE__*/React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>/*#__PURE__*/React.createElement("li",{key:p},p)))))),/*#__PURE__*/React.createElement("div",{className:"voices wrap"},/*#__PURE__*/React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>/*#__PURE__*/React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),/*#__PURE__*/React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return/*#__PURE__*/React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),/*#__PURE__*/React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},/*#__PURE__*/React.createElement("span",null,L.teammate),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:26})))),/*#__PURE__*/React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return/*#__PURE__*/React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},/*#__PURE__*/React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},/*#__PURE__*/React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},/*#__PURE__*/React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const[open,setOpen]=useState(null);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];return/*#__PURE__*/React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},/*#__PURE__*/React.createElement("p",{className:"cs-note"},L.csNote.split('｜').map((t,n)=>/*#__PURE__*/React.createElement(React.Fragment,{key:n},n>0&&/*#__PURE__*/React.createElement("span",{className:"cs-sep"},"\uFF5C"),/*#__PURE__*/React.createElement("span",{className:"cs-nw"},t)))),/*#__PURE__*/React.createElement("div",{className:"cs-street"},doors.map(d=>{const st=open===d.k?'open':touch?'half':'closed';const on=st!=='closed';return/*#__PURE__*/React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("h3",{className:"cs-q"},d.q),/*#__PURE__*/React.createElement("p",{className:"cs-egg"},d.egg),/*#__PURE__*/React.createElement("div",{className:"cs-open"},/*#__PURE__*/React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-rack"},/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("span",{className:"cs-uketsuke"},/*#__PURE__*/React.createElement("b",null,"\u53D7\u4ED8"),/*#__PURE__*/React.createElement("small",null,"RECEPTION")),/*#__PURE__*/React.createElement("span",{className:"cs-counter"})):/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-ledge"}))),/*#__PURE__*/React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},/*#__PURE__*/React.createElement("ul",null,d.sv.map((s,n)=>/*#__PURE__*/React.createElement("li",{key:n},/*#__PURE__*/React.createElement("span",null,s[0])))),/*#__PURE__*/React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,/*#__PURE__*/React.createElement(Icon,{name:"arrow-right",size:16}))),/*#__PURE__*/React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-poster","aria-hidden":"true"},/*#__PURE__*/React.createElement("b",null,L.poster),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));})),/*#__PURE__*/React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},/*#__PURE__*/React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),/*#__PURE__*/React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},/*#__PURE__*/React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return/*#__PURE__*/React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},/*#__PURE__*/React.createElement("div",{className:"wrap site-foot-in"},/*#__PURE__*/React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},/*#__PURE__*/React.createElement("div",{className:"sf-col"},/*#__PURE__*/React.createElement("h4",null,"HOME"),/*#__PURE__*/React.createElement("ul",null,home.map(([label,p,a])=>/*#__PURE__*/React.createElement("li",{key:label},/*#__PURE__*/React.createElement("a",{href:'#'+p,onClick:to(p,a)},label))))),/*#__PURE__*/React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>/*#__PURE__*/React.createElement("h4",{key:k},/*#__PURE__*/React.createElement("a",{className:'sf-work sf-work-'+k,href:'#'+p,onClick:to(p)},label,/*#__PURE__*/React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),/*#__PURE__*/React.createElement("div",{className:"sf-contact"},/*#__PURE__*/React.createElement("h4",null,"LET'S TALK!"),/*#__PURE__*/React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),/*#__PURE__*/React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),/*#__PURE__*/React.createElement("div",{className:"sf-social"},/*#__PURE__*/React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),/*#__PURE__*/React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),/*#__PURE__*/React.createElement("div",{className:"wrap sf-copy"},/*#__PURE__*/React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Home.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Intro.jsx
try{(()=>{const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch((window.__ASSETS||'../../assets')+'/maps/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return/*#__PURE__*/React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},/*#__PURE__*/React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},/*#__PURE__*/React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>/*#__PURE__*/React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>/*#__PURE__*/React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},/*#__PURE__*/React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),/*#__PURE__*/React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return/*#__PURE__*/React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},/*#__PURE__*/React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&/*#__PURE__*/React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},/*#__PURE__*/React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),/*#__PURE__*/React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},/*#__PURE__*/React.createElement("b",null,a),/*#__PURE__*/React.createElement("span",null,"\uFF5C"),b))),/*#__PURE__*/React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,/*#__PURE__*/React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Intro.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Street.jsx
try{(()=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return/*#__PURE__*/React.createElement("div",{className:"sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},/*#__PURE__*/React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},/*#__PURE__*/React.createElement("span",{className:"moon"})),STARS.map((s,i)=>/*#__PURE__*/React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),/*#__PURE__*/React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},/*#__PURE__*/React.createElement("span",{className:"cloud c1"}),/*#__PURE__*/React.createElement("span",{className:"cloud c2"}),/*#__PURE__*/React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint,big}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),/*#__PURE__*/React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),/*#__PURE__*/React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},/*#__PURE__*/React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),/*#__PURE__*/React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),/*#__PURE__*/React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("clipPath",{id:"glass-clip"},/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),/*#__PURE__*/React.createElement("g",{clipPath:"url(#glass-clip)"},/*#__PURE__*/React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),/*#__PURE__*/React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),/*#__PURE__*/React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day',big:big}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap,big}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),/*#__PURE__*/React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),/*#__PURE__*/React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>/*#__PURE__*/React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),/*#__PURE__*/React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night',big:big}));}function StreetTag({x,y,rot,text,hidden,light,active,big}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text,big]);return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},/*#__PURE__*/React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},/*#__PURE__*/React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},/*#__PURE__*/React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},/*#__PURE__*/React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:big?24:16,fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),/*#__PURE__*/React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return/*#__PURE__*/React.createElement("div",{className:cls,style:{opacity:dim}},/*#__PURE__*/React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[mode,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom(compact?{which,ox:'50%',oy:which==='ex'?'50%':'86%'}:{which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return/*#__PURE__*/React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},/*#__PURE__*/React.createElement(Sky,{mode:mode}),/*#__PURE__*/React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' '+(zoom.oy||'78%')}:null},/*#__PURE__*/React.createElement("div",{className:"street-top"},/*#__PURE__*/React.createElement("div",{className:"tagline-stack"},/*#__PURE__*/React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),/*#__PURE__*/React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),compact?/*#__PURE__*/React.createElement("p",{className:"byline is-2l"},L.byline.split('｜').slice(1).map((t,n)=>/*#__PURE__*/React.createElement("span",{key:n},t))):/*#__PURE__*/React.createElement("p",{className:"byline"},L.byline)),compact?/*#__PURE__*/React.createElement("div",{className:"street-stack"},/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-50 70 620 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"500",x2:"580",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"524",x2:"580",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:0,mode:mode,lang:lang,glint:glint,big:true},handlers('ex')))),/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-90 70 600 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"500",x2:"520",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"524",x2:"520",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:0,mode:mode,lang:lang,big:true},handlers('th'))))):/*#__PURE__*/React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),/*#__PURE__*/React.createElement("p",{className:"street-hint"},/*#__PURE__*/React.createElement("span",{className:"hint-arrow"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),/*#__PURE__*/React.createElement("span",{className:"hint-text"},touch?L.hintTap:L.hintHover))),/*#__PURE__*/React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Street.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Theatre.jsx
try{(()=>{function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return/*#__PURE__*/React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},/*#__PURE__*/React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return/*#__PURE__*/React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},/*#__PURE__*/React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),/*#__PURE__*/React.createElement("span",{className:"act-num"},a.n[lang]),/*#__PURE__*/React.createElement("div",{className:"stage-photo"},/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),/*#__PURE__*/React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"theatre"},/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"ticket-stage"},/*#__PURE__*/React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),/*#__PURE__*/React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),/*#__PURE__*/React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),/*#__PURE__*/React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),/*#__PURE__*/React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>/*#__PURE__*/React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),/*#__PURE__*/React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),/*#__PURE__*/React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("span",{className:"bow-label"},L.curtainCall),/*#__PURE__*/React.createElement("h2",null,L.bowTitle),/*#__PURE__*/React.createElement("p",null,L.bowSub)),/*#__PURE__*/React.createElement(NS.Curtain,{open:o}));}),/*#__PURE__*/React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},/*#__PURE__*/React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),/*#__PURE__*/React.createElement("span",{className:"label"},"Lobby"),/*#__PURE__*/React.createElement("h2",null,L.lobby)),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Theatre.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/hooks.jsx
try{(()=>{const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE=(window.__ASSETS||'../../assets')+'/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const FORCE_TOUCH=/[?&]touch=1/.test(location.search);const useTouch=()=>useMedia('(hover: none)')||FORCE_TOUCH;const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return/*#__PURE__*/React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>/*#__PURE__*/React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}Object.assign(window,{useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/hooks.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？先聊聊吧！',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？まずはお話ししましょう！',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate? Let’s talk first!',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/i18n.js",error:String(e&&e.message||e)});}__ds_ns.ContactForm=__ds_scope.ContactForm;__ds_ns.CurrencyToggle=__ds_scope.CurrencyToggle;__ds_ns.LetterCard=__ds_scope.LetterCard;__ds_ns.Noren=__ds_scope.Noren;__ds_ns.PriceCard=__ds_scope.PriceCard;__ds_ns.ProcessSteps=__ds_scope.ProcessSteps;__ds_ns.Button=__ds_scope.Button;__ds_ns.LANGS=__ds_scope.LANGS;__ds_ns.LangSwitch=__ds_scope.LangSwitch;__ds_ns.PhotoFrame=__ds_scope.PhotoFrame;__ds_ns.SectionHeading=__ds_scope.SectionHeading;__ds_ns.SiteHeader=__ds_scope.SiteHeader;__ds_ns.Stamp=__ds_scope.Stamp;__ds_ns.FloorMap=__ds_scope.FloorMap;__ds_ns.Plaque=__ds_scope.Plaque;__ds_ns.Curtain=__ds_scope.Curtain;__ds_ns.Playbill=__ds_scope.Playbill;__ds_ns.ProgramNav=__ds_scope.ProgramNav;__ds_ns.Ticket=__ds_scope.Ticket;})();})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/components.js",error:String(e&&e.message||e)});}// neneko-site/js/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？先聊聊吧！',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？まずはお話ししましょう！',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate? Let’s talk first!',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/i18n.js",error:String(e&&e.message||e)});}// ui_kits/portfolio/App.jsx
try{(()=>{function App(){const NS=window.NS;const pageFrom=init=>{const h=location.hash.replace('#','');if(init)return window.__START||'home';return['home','exhibition','theatre'].includes(h)?h:window.__START||'home';};const[page,setPage]=useState(()=>pageFrom(true));const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);const[scrolled,setScrolled]=useState(false);const compact=useCompact();useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>{setTop(window.scrollY<window.innerHeight*.8);setScrolled(window.scrollY>24);};window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=()=>setPage(pageFrom());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f);},[]);useEffect(()=>{const h=location.hash.slice(1);if(h&&!['home','exhibition','theatre'].includes(h))setTimeout(()=>scrollToId(h,false),700);},[]);const go=(p,anchor)=>{setVeil(true);setTimeout(()=>{history.replaceState(null,'','#'+p);setPage(p);window.scrollTo(0,0);setTimeout(()=>{setVeil(false);if(anchor)scrollToId(anchor,false);},60);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:!(compact&&scrolled)&&(page==='theatre'||page==='home'&&sky==='night'&&top),onConsult:consult,onBrand:()=>go('home'),style:compact&&scrolled?{background:'rgba(250,247,240,.9)',WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)',boxShadow:'0 1px 0 var(--line-3)',pointerEvents:'auto',padding:'4px var(--gutter)',transition:'background 240ms'}:{transition:'background 240ms'}}),page==='home'&&/*#__PURE__*/React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&/*#__PURE__*/React.createElement(Exhibition,{lang:lang}),page==='theatre'&&/*#__PURE__*/React.createElement(Theatre,{lang:lang}),/*#__PURE__*/React.createElement(SiteFooter,{lang:lang,go:go,page:page}),/*#__PURE__*/React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/App.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/ConsultDesk.jsx
try{(()=>{function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);useEffect(()=>{if(touch&&seen){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';return/*#__PURE__*/React.createElement("section",{ref:ref,id:"consult",className:'desk '+(th?'desk-th':'desk-ex'),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},/*#__PURE__*/React.createElement("div",{className:"desk-head wrap"},/*#__PURE__*/React.createElement("span",{className:"desk-plate"},/*#__PURE__*/React.createElement("b",null,th?L.deskTh:L.deskEx),/*#__PURE__*/React.createElement("small",null,th?L.deskThSub:L.deskExSub))),/*#__PURE__*/React.createElement("div",{className:"desk-window wrap"},/*#__PURE__*/React.createElement("div",{className:"desk-panel"},/*#__PURE__*/React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},/*#__PURE__*/React.createElement(NS.Noren,{label:L.consult==='Consult'?'相談':L.consult,tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?200:280,sway:!reduced})),/*#__PURE__*/React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("div",{className:"desk-row-head"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),/*#__PURE__*/React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),/*#__PURE__*/React.createElement("div",{className:"price-grid"},services.map((s,i)=>/*#__PURE__*/React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),/*#__PURE__*/React.createElement("p",{className:"note"},L.priceNote),/*#__PURE__*/React.createElement("div",{className:"desk-block"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),/*#__PURE__*/React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),/*#__PURE__*/React.createElement("div",{className:"desk-block contact"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),/*#__PURE__*/React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:/*#__PURE__*/React.createElement(Icon,{name:"calendar-check",size:18})},L.book),/*#__PURE__*/React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),/*#__PURE__*/React.createElement("div",{className:"contact-links"},/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Email"},/*#__PURE__*/React.createElement(Icon,{name:"mail",size:20}),/*#__PURE__*/React.createElement("span",null,"Email")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"LINE"},/*#__PURE__*/React.createElement(Icon,{name:"message-circle",size:20}),/*#__PURE__*/React.createElement("span",null,"LINE")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Instagram"},/*#__PURE__*/React.createElement(Icon,{name:"instagram",size:20}),/*#__PURE__*/React.createElement("span",null,"Instagram"))),/*#__PURE__*/React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/ConsultDesk.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Exhibition.jsx
try{(()=>{function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return/*#__PURE__*/React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},/*#__PURE__*/React.createElement("div",{className:"ex-wall-sticky"},/*#__PURE__*/React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},/*#__PURE__*/React.createElement("span",null,L.room," 01 \u2192")),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},/*#__PURE__*/React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},/*#__PURE__*/React.createElement("p",{className:"ex-statement"},L.exStatement),/*#__PURE__*/React.createElement("p",{className:"ex-period"},L.exPeriod),/*#__PURE__*/React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},/*#__PURE__*/React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),/*#__PURE__*/React.createElement("div",{className:"room-num"},/*#__PURE__*/React.createElement("span",null,L.room),/*#__PURE__*/React.createElement("b",null,r.n)),/*#__PURE__*/React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14}))),/*#__PURE__*/React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),/*#__PURE__*/React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return/*#__PURE__*/React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},/*#__PURE__*/React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),/*#__PURE__*/React.createElement("div",{className:"detail-body wrap"},/*#__PURE__*/React.createElement("button",{className:"detail-close",onClick:onClose},/*#__PURE__*/React.createElement(Icon,{name:"arrow-left",size:18}),L.back),/*#__PURE__*/React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),/*#__PURE__*/React.createElement("h2",null,r.title),/*#__PURE__*/React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),/*#__PURE__*/React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>/*#__PURE__*/React.createElement("div",{key:h},/*#__PURE__*/React.createElement("h3",null,h),/*#__PURE__*/React.createElement("p",null,L.placeholder)))),/*#__PURE__*/React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>/*#__PURE__*/React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"exhibition"},/*#__PURE__*/React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),vertical?/*#__PURE__*/React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>/*#__PURE__*/React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):/*#__PURE__*/React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},/*#__PURE__*/React.createElement("div",{className:"gallery-sticky"},/*#__PURE__*/React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),/*#__PURE__*/React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},/*#__PURE__*/React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),/*#__PURE__*/React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),/*#__PURE__*/React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},/*#__PURE__*/React.createElement("div",{className:"exit-sign"},/*#__PURE__*/React.createElement("span",null,L.exit),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:18}))),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&/*#__PURE__*/React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Exhibition.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Home.jsx
try{(()=>{function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});return/*#__PURE__*/React.createElement("main",{className:"home"},/*#__PURE__*/React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),/*#__PURE__*/React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},/*#__PURE__*/React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},/*#__PURE__*/React.createElement("span",{className:"about-card-photo"},/*#__PURE__*/React.createElement("img",{src:(window.__ASSETS||'../../assets')+'/photos/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),/*#__PURE__*/React.createElement("img",{className:"alt",src:(window.__ASSETS||'../../assets')+'/photos/desk-sm.jpg',alt:"",style:{objectPosition:'62% 40%'}})),/*#__PURE__*/React.createElement("span",{className:"about-card-cap"},/*#__PURE__*/React.createElement("b",null,"NENEKO"),/*#__PURE__*/React.createElement("small",null,L.cardRole))),/*#__PURE__*/React.createElement("div",{className:"about-text"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.since),/*#__PURE__*/React.createElement("div",{className:"about-head"},/*#__PURE__*/React.createElement("h2",{className:"about-name"},"About me"),/*#__PURE__*/React.createElement("a",{className:"cv-link",href:"#"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>/*#__PURE__*/React.createElement("p",{key:n,className:"about-lead"},p)),/*#__PURE__*/React.createElement("p",{className:"about-cities","aria-label":"Leeds, Taipei, Melbourne, Osaka"},['Leeds','Taipei','Melbourne','Osaka'].map((c,n)=>/*#__PURE__*/React.createElement(React.Fragment,{key:c},n>0&&/*#__PURE__*/React.createElement("span",{className:"ac-arrow","aria-hidden":"true"},"\u2192"),/*#__PURE__*/React.createElement("span",null,c)))))),/*#__PURE__*/React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},/*#__PURE__*/React.createElement("div",{className:"wrap"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),/*#__PURE__*/React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},/*#__PURE__*/React.createElement("div",{className:"marquee-track"},[0,1].map(k=>/*#__PURE__*/React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>/*#__PURE__*/React.createElement("li",{key:p},p)))))),/*#__PURE__*/React.createElement("div",{className:"voices wrap"},/*#__PURE__*/React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>/*#__PURE__*/React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),/*#__PURE__*/React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return/*#__PURE__*/React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),/*#__PURE__*/React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},/*#__PURE__*/React.createElement("span",null,L.teammate.split('\n').map((t,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"tm-line"},t))),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:26})))),/*#__PURE__*/React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return/*#__PURE__*/React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},/*#__PURE__*/React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},/*#__PURE__*/React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},/*#__PURE__*/React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const compact=useCompact();const[open,setOpen]=useState(null);const[slide,setSlide]=useState(0);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];const door=d=>{const st=compact?'closed':open===d.k?'open':touch?'half':'closed';const on=compact||st!=='closed';return/*#__PURE__*/React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("h3",{className:"cs-q"},d.q),/*#__PURE__*/React.createElement("p",{className:"cs-egg"},d.egg),/*#__PURE__*/React.createElement("div",{className:"cs-open"},/*#__PURE__*/React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-rack"},/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("span",{className:"cs-uketsuke"},/*#__PURE__*/React.createElement("b",null,"\u53D7\u4ED8"),/*#__PURE__*/React.createElement("small",null,"RECEPTION")),/*#__PURE__*/React.createElement("span",{className:"cs-counter"})):/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-ledge"}))),/*#__PURE__*/React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},/*#__PURE__*/React.createElement("ul",null,d.sv.map((s,n)=>/*#__PURE__*/React.createElement("li",{key:n},/*#__PURE__*/React.createElement("span",null,s[0])))),/*#__PURE__*/React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,/*#__PURE__*/React.createElement(Icon,{name:"arrow-right",size:16}))),/*#__PURE__*/React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-poster","aria-hidden":"true"},/*#__PURE__*/React.createElement("b",null,L.poster),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));};return/*#__PURE__*/React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},/*#__PURE__*/React.createElement("p",{className:"cs-note"},L.csNote.split('｜').map((t,n)=>/*#__PURE__*/React.createElement(React.Fragment,{key:n},n>0&&/*#__PURE__*/React.createElement("span",{className:"cs-sep"},"\uFF5C"),/*#__PURE__*/React.createElement("span",{className:"cs-nw"},t)))),compact&&/*#__PURE__*/React.createElement("div",{className:"cs-sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",{className:"d",style:{opacity:slide?0:1}}),/*#__PURE__*/React.createElement("i",{className:"n",style:{opacity:slide?1:0}})),compact?/*#__PURE__*/React.createElement(SwipeDeck,{index:slide,onChange:i=>{setSlide(i);setOpen(null);},dark:slide===1,labels:[L.ctaEx,L.ctaTh],className:"cs-deck"},doors.map(door)):/*#__PURE__*/React.createElement("div",{className:"cs-street"},doors.map(door)),/*#__PURE__*/React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},/*#__PURE__*/React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),/*#__PURE__*/React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},/*#__PURE__*/React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return/*#__PURE__*/React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},/*#__PURE__*/React.createElement("div",{className:"wrap site-foot-in"},/*#__PURE__*/React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},/*#__PURE__*/React.createElement("div",{className:"sf-col"},/*#__PURE__*/React.createElement("h4",null,"HOME"),/*#__PURE__*/React.createElement("ul",null,home.map(([label,p,a])=>/*#__PURE__*/React.createElement("li",{key:label},/*#__PURE__*/React.createElement("a",{href:'#'+p,onClick:to(p,a)},label))))),/*#__PURE__*/React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>/*#__PURE__*/React.createElement("h4",{key:k},/*#__PURE__*/React.createElement("a",{className:'sf-work sf-work-'+k,href:'#'+p,onClick:to(p)},label,/*#__PURE__*/React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),/*#__PURE__*/React.createElement("div",{className:"sf-contact"},/*#__PURE__*/React.createElement("h4",null,"LET'S TALK!"),/*#__PURE__*/React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),/*#__PURE__*/React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),/*#__PURE__*/React.createElement("div",{className:"sf-social"},/*#__PURE__*/React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),/*#__PURE__*/React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),/*#__PURE__*/React.createElement("div",{className:"wrap sf-copy"},/*#__PURE__*/React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Home.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Intro.jsx
try{(()=>{const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch((window.__ASSETS||'../../assets')+'/maps/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return/*#__PURE__*/React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},/*#__PURE__*/React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},/*#__PURE__*/React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>/*#__PURE__*/React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>/*#__PURE__*/React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},/*#__PURE__*/React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),/*#__PURE__*/React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return/*#__PURE__*/React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},/*#__PURE__*/React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&/*#__PURE__*/React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},/*#__PURE__*/React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),/*#__PURE__*/React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},/*#__PURE__*/React.createElement("b",null,a),/*#__PURE__*/React.createElement("span",null,"\uFF5C"),b))),/*#__PURE__*/React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,/*#__PURE__*/React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Intro.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Street.jsx
try{(()=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return/*#__PURE__*/React.createElement("div",{className:"sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},/*#__PURE__*/React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},/*#__PURE__*/React.createElement("span",{className:"moon"})),STARS.map((s,i)=>/*#__PURE__*/React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),/*#__PURE__*/React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},/*#__PURE__*/React.createElement("span",{className:"cloud c1"}),/*#__PURE__*/React.createElement("span",{className:"cloud c2"}),/*#__PURE__*/React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint,big}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),/*#__PURE__*/React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),/*#__PURE__*/React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},/*#__PURE__*/React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),/*#__PURE__*/React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),/*#__PURE__*/React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("clipPath",{id:"glass-clip"},/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),/*#__PURE__*/React.createElement("g",{clipPath:"url(#glass-clip)"},/*#__PURE__*/React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),/*#__PURE__*/React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),/*#__PURE__*/React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day',big:big}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap,big}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),/*#__PURE__*/React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),/*#__PURE__*/React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>/*#__PURE__*/React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),/*#__PURE__*/React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night',big:big}));}function StreetTag({x,y,rot,text,hidden,light,active,big}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text,big]);return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},/*#__PURE__*/React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},/*#__PURE__*/React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},/*#__PURE__*/React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},/*#__PURE__*/React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:big?24:16,fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),/*#__PURE__*/React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return/*#__PURE__*/React.createElement("div",{className:cls,style:{opacity:dim}},/*#__PURE__*/React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[modeS,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[slide,setSlide]=useState(0);const mode=compact?slide?'night':'day':modeS;const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced||compact)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced,compact]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom(compact?{which,ox:'50%',oy:'62%'}:{which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';if(compact)return{onEnter:()=>{},onLeave:()=>{},onTap:()=>enter(which)};return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return/*#__PURE__*/React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},/*#__PURE__*/React.createElement(Sky,{mode:mode}),/*#__PURE__*/React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' '+(zoom.oy||'78%')}:null},/*#__PURE__*/React.createElement("div",{className:"street-top"},/*#__PURE__*/React.createElement("div",{className:"tagline-stack"},/*#__PURE__*/React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),/*#__PURE__*/React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),compact?/*#__PURE__*/React.createElement("p",{className:"byline is-3l"},L.byline.split('｜').map((t,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:n?'':'nk'},t))):/*#__PURE__*/React.createElement("p",{className:"byline"},L.byline)),compact?/*#__PURE__*/React.createElement(SwipeDeck,{index:slide,onChange:setSlide,dark:slide===1,labels:[L.exSign.join(' '),L.thSign.join(' ')],className:"street-deck"},/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-50 70 620 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"500",x2:"580",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"524",x2:"580",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:0,mode:mode,lang:lang,glint:glint,big:true},handlers('ex')))),/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-90 70 600 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"500",x2:"520",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"524",x2:"520",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:0,mode:mode,lang:lang,big:true},handlers('th'))))):/*#__PURE__*/React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),/*#__PURE__*/React.createElement("p",{className:"street-hint"},/*#__PURE__*/React.createElement("span",{className:"hint-arrow"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),/*#__PURE__*/React.createElement("span",{className:"hint-text"},compact?L.hintSwipe:touch?L.hintTap:L.hintHover))),/*#__PURE__*/React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Street.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Theatre.jsx
try{(()=>{function Sticky({h,className,label,id,children,reduced,onProgress}){const ref=useRef(null);const p=useProgress(ref);useEffect(()=>{onProgress&&onProgress(p);},[p]);return/*#__PURE__*/React.createElement("section",{ref:ref,id:id,className:'sticky-wrap '+(className||'')+(reduced?' is-static':''),style:{height:reduced?'auto':h},"data-screen-label":label},/*#__PURE__*/React.createElement("div",{className:"sticky-inner"},children(reduced?1:p)));}function Act({a,lang,compact,reduced,onActive}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'190vh',className:"act",id:'act-'+a.id,label:a.n.zh,reduced:reduced,onProgress:p=>{if(p>.18&&p<.82)onActive(a.id);}},p=>{const lit=reduced?1:p<.18?p/.18:p>.82?(1-p)/.18:1;return/*#__PURE__*/React.createElement("div",{className:"stage",style:{opacity:clamp01(lit)}},/*#__PURE__*/React.createElement("div",{className:"spot",style:{transform:'scaleY('+(.6+clamp01(lit)*.4)+')'}}),/*#__PURE__*/React.createElement("span",{className:"act-num"},a.n[lang]),/*#__PURE__*/React.createElement("div",{className:"stage-photo"},/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),/*#__PURE__*/React.createElement(NS.Playbill,{act:a.n[lang],year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));});}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const onActive=useCallback(id=>setCur(c=>c===id?c:id),[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>{const el=document.getElementById(id==='bow'?'bow':'act-'+id);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+(id==='bow'?span*.7:span*.45),behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:"theatre"},/*#__PURE__*/React.createElement(Sticky,{h:compact?'150vh':'180vh',className:"th-ticket",label:"Theatre ticket",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"ticket-stage"},/*#__PURE__*/React.createElement(NS.Ticket,{title:'NENEKO / HANNING '+L.thSign[0],sub:L.ticketSub,date:"2026.11.07 \u2014 19:30",seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:reduced?0:clamp01((p-.15)/.55)}),/*#__PURE__*/React.createElement("p",{className:"th-hint",style:{opacity:1-p*2}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHint))),/*#__PURE__*/React.createElement(Sticky,{h:compact?'160vh':'220vh',className:"th-overture",label:"Theatre overture curtain",reduced:reduced},p=>/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot",style:{opacity:clamp01(p*1.4)}}),/*#__PURE__*/React.createElement("h1",{className:"overture-title",style:{opacity:clamp01((p-.3)/.4),transform:'translateY('+(1-clamp01((p-.3)/.4))*20+'px)'}},L.overture),/*#__PURE__*/React.createElement(NS.Curtain,{open:reduced?1:easeIO2(clamp01(p/.8))}))),acts.map(a=>/*#__PURE__*/React.createElement(Act,{key:a.id,a:a,lang:lang,compact:compact,reduced:reduced,onActive:onActive})),/*#__PURE__*/React.createElement(Sticky,{h:compact?'200vh':'280vh',className:"th-bow",id:"bow",label:"Theatre curtain call",reduced:reduced,onProgress:p=>{if(p>.1&&p<.95)onActive('bow');}},p=>{const o=reduced?1:p<.35?1-p/.35:p<.5?0:clamp01((p-.5)/.35);const show=reduced||p>.5;return/*#__PURE__*/React.createElement("div",{className:"overture"},/*#__PURE__*/React.createElement("div",{className:"spot wide",style:{opacity:show?1:.3}}),/*#__PURE__*/React.createElement("div",{className:"bow",style:{opacity:show?1:0,transform:show?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("span",{className:"bow-label"},L.curtainCall),/*#__PURE__*/React.createElement("h2",null,L.bowTitle),/*#__PURE__*/React.createElement("p",null,L.bowSub)),/*#__PURE__*/React.createElement(NS.Curtain,{open:o}));}),/*#__PURE__*/React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},/*#__PURE__*/React.createElement("span",{className:"lobby-lamp","aria-hidden":"true"}),/*#__PURE__*/React.createElement("span",{className:"label"},"Lobby"),/*#__PURE__*/React.createElement("h2",null,L.lobby)),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')},/*#__PURE__*/React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})));}window.Theatre=Theatre;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Theatre.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/hooks.jsx
try{(()=>{const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE=(window.__ASSETS||'../../assets')+'/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const FORCE_TOUCH=/[?&]touch=1/.test(location.search);const useTouch=()=>useMedia('(hover: none)')||FORCE_TOUCH;const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return/*#__PURE__*/React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>/*#__PURE__*/React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}function SwipeDeck({index,onChange,count=2,labels=[],dark=false,className='',children}){const reduced=useReduced();const s=useRef(null);const go=i=>onChange((i+count)%count);const ts=e=>{const t=e.touches[0];s.current={x:t.clientX,y:t.clientY,lock:null};};const tm=e=>{const o=s.current;if(!o)return;const t=e.touches[0];const dx=t.clientX-o.x,dy=t.clientY-o.y;if(o.lock==null&&(Math.abs(dx)>10||Math.abs(dy)>10))o.lock=Math.abs(dx)>Math.abs(dy)*1.4?'x':'y';};const te=e=>{const o=s.current;s.current=null;if(!o||o.lock!=='x')return;const dx=e.changedTouches[0].clientX-o.x;if(Math.abs(dx)>36)go(index+(dx<0?1:-1));};const kids=React.Children.toArray(children);return/*#__PURE__*/React.createElement("div",{className:'deck '+(dark?'is-dark ':'')+className,onTouchStart:ts,onTouchMove:tm,onTouchEnd:te,onTouchCancel:()=>{s.current=null;}},/*#__PURE__*/React.createElement("div",{className:"deck-view"},/*#__PURE__*/React.createElement("div",{className:"deck-track",style:{transform:'translateX('+-index*100+'%)',transition:reduced?'none':undefined}},kids.map((c,i)=>/*#__PURE__*/React.createElement("div",{className:"deck-slide",key:i,"aria-hidden":i!==index?'true':undefined},c)))),/*#__PURE__*/React.createElement("button",{className:"deck-arrow prev","aria-label":labels[(index-1+count)%count]||'Previous',onClick:()=>go(index-1)},/*#__PURE__*/React.createElement(Icon,{name:"chevron-left",size:22})),/*#__PURE__*/React.createElement("button",{className:"deck-arrow next","aria-label":labels[(index+1)%count]||'Next',onClick:()=>go(index+1)},/*#__PURE__*/React.createElement(Icon,{name:"chevron-right",size:22})),/*#__PURE__*/React.createElement("div",{className:"deck-dots"},kids.map((_,i)=>/*#__PURE__*/React.createElement("button",{key:i,className:'deck-dot'+(i===index?' on':''),"aria-label":labels[i]||String(i+1),"aria-current":i===index?'true':undefined,onClick:()=>onChange(i)},/*#__PURE__*/React.createElement("i",null)))));}Object.assign(window,{SwipeDeck,useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/hooks.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？\n先聊聊吧！',hintSwipe:'左右滑動，切換白天的展場與夜晚的劇場',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？\nまずはお話ししましょう！',hintSwipe:'左右にスワイプして、昼の展示と夜の劇場を切り替え',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate?\nLet’s talk first!',hintSwipe:'Swipe to switch between the daytime gallery and the night theatre',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/i18n.js",error:String(e&&e.message||e)});}__ds_ns.ContactForm=__ds_scope.ContactForm;__ds_ns.CurrencyToggle=__ds_scope.CurrencyToggle;__ds_ns.LetterCard=__ds_scope.LetterCard;__ds_ns.Noren=__ds_scope.Noren;__ds_ns.PriceCard=__ds_scope.PriceCard;__ds_ns.ProcessSteps=__ds_scope.ProcessSteps;__ds_ns.Button=__ds_scope.Button;__ds_ns.LANGS=__ds_scope.LANGS;__ds_ns.LangSwitch=__ds_scope.LangSwitch;__ds_ns.PhotoFrame=__ds_scope.PhotoFrame;__ds_ns.SectionHeading=__ds_scope.SectionHeading;__ds_ns.SiteHeader=__ds_scope.SiteHeader;__ds_ns.Stamp=__ds_scope.Stamp;__ds_ns.FloorMap=__ds_scope.FloorMap;__ds_ns.Plaque=__ds_scope.Plaque;__ds_ns.Curtain=__ds_scope.Curtain;__ds_ns.Playbill=__ds_scope.Playbill;__ds_ns.ProgramNav=__ds_scope.ProgramNav;__ds_ns.Ticket=__ds_scope.Ticket;})();})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/components.js",error:String(e&&e.message||e)});}// neneko-site/js/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'把知識，變成可以走進去的體驗',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'往下捲動，撕下半券',overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？\n先聊聊吧！',hintSwipe:'左右滑動，切換白天的展場與夜晚的劇場',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'知識を、歩いて巡れる体験に',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？\nまずはお話ししましょう！',hintSwipe:'左右にスワイプして、昼の展示と夜の劇場を切り替え',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Turning knowledge into experiences you can walk into',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',ticketSub:'Producer’s Works 2023 — 2026',admit:'ADMIT ONE',stub:'Mogiri',tearHint:'Scroll to tear the stub',overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate?\nLet’s talk first!',hintSwipe:'Swipe to switch between the daytime gallery and the night theatre',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"neneko-site/js/i18n.js",error:String(e&&e.message||e)});}// ui_kits/portfolio/App.jsx
try{(()=>{function App(){const NS=window.NS;const pageFrom=init=>{const h=location.hash.replace('#','');if(init)return window.__START||'home';return['home','exhibition','theatre'].includes(h)?h:window.__START||'home';};const[page,setPage]=useState(()=>pageFrom(true));const[lang,setLang]=useState(()=>localStorage.getItem('nh-lang')||'zh');const[veil,setVeil]=useState(false);const[sky,setSky]=useState('dusk');const[top,setTop]=useState(true);const[scrolled,setScrolled]=useState(false);const compact=useCompact();useEffect(()=>{const f=e=>setSky(e.detail);const g=()=>{setTop(window.scrollY<window.innerHeight*.8);setScrolled(window.scrollY>24);};window.addEventListener('nh-sky',f);window.addEventListener('scroll',g,{passive:true});return()=>{window.removeEventListener('nh-sky',f);window.removeEventListener('scroll',g);};},[]);useEffect(()=>{localStorage.setItem('nh-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':lang;},[lang]);useEffect(()=>{const f=()=>setPage(pageFrom());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f);},[]);useEffect(()=>{const h=location.hash.slice(1);if(h&&!['home','exhibition','theatre'].includes(h))setTimeout(()=>scrollToId(h,false),700);},[]);const go=(p,anchor)=>{setVeil(true);setTimeout(()=>{history.replaceState(null,'','#'+p);setPage(p);window.scrollTo(0,0);setTimeout(()=>{setVeil(false);if(anchor)scrollToId(anchor,false);},60);},280);};const tone=page==='exhibition'?'exhibit':page==='theatre'?'theatre':'ink';const consult=()=>scrollToId(page==='home'?'home-consult':'consult');return/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(NS.SiteHeader,{lang:lang,onLang:setLang,tone:tone,dark:!(compact&&scrolled)&&(page==='theatre'||page==='home'&&sky==='night'&&top),onConsult:consult,onBrand:()=>go('home'),style:compact&&scrolled?{background:'rgba(250,247,240,.9)',WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)',boxShadow:'0 1px 0 var(--line-3)',pointerEvents:'auto',padding:'4px var(--gutter)',transition:'background 240ms'}:{transition:'background 240ms'}}),page==='home'&&/*#__PURE__*/React.createElement(Home,{lang:lang,go:go}),page==='exhibition'&&/*#__PURE__*/React.createElement(Exhibition,{lang:lang}),page==='theatre'&&/*#__PURE__*/React.createElement(Theatre,{lang:lang}),/*#__PURE__*/React.createElement(SiteFooter,{lang:lang,go:go,page:page}),/*#__PURE__*/React.createElement("div",{className:'page-veil'+(veil?' on':'')+(page==='theatre'?' dark':'')}));}ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App,null));})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/App.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/ConsultDesk.jsx
try{(()=>{function ConsultDesk({tone='exhibit',lang}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const reduced=useReduced();const compact=useCompact();const ref=useRef(null);const seen=useInView(ref,{threshold:.25,once:true});const[open,setOpen]=useState(reduced);const[cur,setCur]=useState(lang==='ja'?'JPY':'TWD');const[sway,setSway]=useState(0);const bodyRef=useRef(null);const[bh,setBh]=useState(0);useEffect(()=>{if(!compact||!open||!bodyRef.current)return;const el=bodyRef.current;const m=()=>setBh(el.scrollHeight);m();const ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(m):null;ro&&ro.observe(el.firstChild);return()=>ro&&ro.disconnect();},[compact,open]);const openM=()=>{setOpen(true);setTimeout(()=>scrollToId('consult-services',!reduced),reduced?30:330);};useEffect(()=>{if(touch&&seen&&!compact){const id=setTimeout(()=>setOpen(true),700);return()=>clearTimeout(id);}},[touch,seen,compact]);useEffect(()=>{if(reduced)return;let raf=0;const on=()=>setSway(window.scrollY);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on);},[reduced]);const th=tone==='theatre';const services=th?L.thServices:L.exServices;const price=s=>s[2]==null?L.quote:cur==='TWD'?'NT$ ___':'¥ ___';if(compact)return/*#__PURE__*/React.createElement("section",{ref:ref,id:"consult",className:'desk desk-m '+(th?'desk-th':'desk-ex')+(open?' is-open':''),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},/*#__PURE__*/React.createElement("div",{className:"desk-head wrap"},/*#__PURE__*/React.createElement("span",{className:"desk-plate"},/*#__PURE__*/React.createElement("b",null,th?L.deskTh:L.deskEx),/*#__PURE__*/React.createElement("small",null,th?L.deskThSub:L.deskExSub))),/*#__PURE__*/React.createElement("div",{className:"desk-window wrap"},/*#__PURE__*/React.createElement("div",{className:"desk-panel"},/*#__PURE__*/React.createElement("div",{className:"desk-m-noren","aria-hidden":open?'true':undefined},/*#__PURE__*/React.createElement(NS.Noren,{label:th?'劇場相談室':'展覽相談室',tone:tone,open:open,onOpen:openM,height:130,sway:!reduced})),/*#__PURE__*/React.createElement("div",{className:"desk-m-intro"},/*#__PURE__*/React.createElement("h3",{className:"desk-m-title"},th?L.thQ:L.exQ),/*#__PURE__*/React.createElement("p",{className:"desk-m-desc"},(th?L.roomTh:L.roomEx).split('\n')[0]),/*#__PURE__*/React.createElement("p",{className:"desk-m-free"},L.csNote.split('｜')[0]),!open&&/*#__PURE__*/React.createElement("button",{className:'desk-m-open '+(th?'is-th':'is-ex'),onClick:openM,"aria-expanded":"false","aria-controls":"consult-body"},L.openDesk,/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}))),/*#__PURE__*/React.createElement("div",{id:"consult-body",ref:bodyRef,className:"desk-m-body",style:{height:open?bh||'auto':0,transition:reduced?'none':undefined}},open&&/*#__PURE__*/React.createElement("div",{className:"desk-m-inner"},/*#__PURE__*/React.createElement("div",{className:"desk-row-head",id:"consult-services"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),/*#__PURE__*/React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),/*#__PURE__*/React.createElement("div",{className:"price-scroll"},services.map((s,i)=>/*#__PURE__*/React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:true,style:{minHeight:0,padding:'20px 16px 16px',gap:8,flex:'0 0 64%',scrollSnapAlign:'start'}}))),/*#__PURE__*/React.createElement("p",{className:"note"},L.priceNote),/*#__PURE__*/React.createElement("div",{className:"desk-block"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),/*#__PURE__*/React.createElement(NS.ProcessSteps,{tone:tone,direction:"vertical",steps:L.steps.map(label=>({label}))})),/*#__PURE__*/React.createElement("div",{className:"desk-block contact"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),/*#__PURE__*/React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:/*#__PURE__*/React.createElement(Icon,{name:"calendar-check",size:18})},L.book),/*#__PURE__*/React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),/*#__PURE__*/React.createElement("div",{className:"contact-links"},/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Email"},/*#__PURE__*/React.createElement(Icon,{name:"mail",size:20}),/*#__PURE__*/React.createElement("span",null,"Email")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"LINE"},/*#__PURE__*/React.createElement(Icon,{name:"message-circle",size:20}),/*#__PURE__*/React.createElement("span",null,"LINE")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Instagram"},/*#__PURE__*/React.createElement(Icon,{name:"instagram",size:20}),/*#__PURE__*/React.createElement("span",null,"Instagram"))),/*#__PURE__*/React.createElement("p",{className:"note"},L.reply)))))));return/*#__PURE__*/React.createElement("section",{ref:ref,id:"consult",className:'desk desk-d '+(th?'desk-th':'desk-ex')+(open?' is-open':''),"data-screen-label":th?'Theatre consult (box office)':'Exhibition consult (reception)'},/*#__PURE__*/React.createElement("div",{className:"desk-head wrap"},/*#__PURE__*/React.createElement("span",{className:"desk-plate"},/*#__PURE__*/React.createElement("b",null,th?L.deskTh:L.deskEx),/*#__PURE__*/React.createElement("small",null,th?L.deskThSub:L.deskExSub))),/*#__PURE__*/React.createElement("div",{className:"desk-window wrap"},/*#__PURE__*/React.createElement("div",{className:"desk-panel"},/*#__PURE__*/React.createElement("div",{className:"desk-noren",style:{pointerEvents:open?'none':'auto'},onMouseEnter:()=>!touch&&setOpen(true)},/*#__PURE__*/React.createElement(NS.Noren,{label:th?'劇場相談室':'展覽相談室',tone:tone,sub:L.norenSub,open:open,onOpen:()=>setOpen(true),height:compact?100:140,sway:!reduced})),/*#__PURE__*/React.createElement("div",{className:"desk-content",style:{opacity:open?1:0,transform:open?'none':'translateY(16px)'}},/*#__PURE__*/React.createElement("div",{className:"desk-row-head"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Services",title:L.services,size:"h3"}),/*#__PURE__*/React.createElement(NS.CurrencyToggle,{value:cur,onChange:setCur,tone:tone})),/*#__PURE__*/React.createElement("div",{className:"price-grid"},services.map((s,i)=>/*#__PURE__*/React.createElement(NS.PriceCard,{key:i,index:i+1,title:s[0],desc:s[1],price:price(s),unit:s[2]||undefined,tone:tone,visible:open,delay:200+i*140}))),/*#__PURE__*/React.createElement("p",{className:"note"},L.priceNote),/*#__PURE__*/React.createElement("div",{className:"desk-block"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Process",title:L.process,size:"h3"}),/*#__PURE__*/React.createElement(NS.ProcessSteps,{tone:tone,steps:L.steps.map(label=>({label}))})),/*#__PURE__*/React.createElement("div",{className:"desk-block contact"},/*#__PURE__*/React.createElement(NS.SectionHeading,{eyebrow:"Contact",title:L.contact,size:"h3"}),/*#__PURE__*/React.createElement(NS.Button,{tone:tone,size:"lg",href:"#",icon:/*#__PURE__*/React.createElement(Icon,{name:"calendar-check",size:18})},L.book),/*#__PURE__*/React.createElement(NS.ContactForm,{tone:tone,labels:L.form,defaultType:th?1:0}),/*#__PURE__*/React.createElement("div",{className:"contact-links"},/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Email"},/*#__PURE__*/React.createElement(Icon,{name:"mail",size:20}),/*#__PURE__*/React.createElement("span",null,"Email")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"LINE"},/*#__PURE__*/React.createElement(Icon,{name:"message-circle",size:20}),/*#__PURE__*/React.createElement("span",null,"LINE")),/*#__PURE__*/React.createElement("a",{href:"#","aria-label":"Instagram"},/*#__PURE__*/React.createElement(Icon,{name:"instagram",size:20}),/*#__PURE__*/React.createElement("span",null,"Instagram"))),/*#__PURE__*/React.createElement("p",{className:"note"},L.reply))))));}window.ConsultDesk=ConsultDesk;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/ConsultDesk.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Exhibition.jsx
try{(()=>{function ExWall({lang,compact,reduced}){const L=window.COPY[lang];const ref=useRef(null);const p0=useProgress(ref);const p=reduced?0:easeIO2(clamp01(p0*1.25));const vertical=lang!=='en';const a=compact?'translateY('+-p*105+'%)':'translateX('+-p*105+'%)';const b=compact?'translateY('+p*105+'%)':'translateX('+p*105+'%)';return/*#__PURE__*/React.createElement("section",{ref:ref,className:'ex-wall-wrap'+(reduced?' is-static':''),"data-screen-label":"Exhibition title wall"},/*#__PURE__*/React.createElement("div",{className:"ex-wall-sticky"},/*#__PURE__*/React.createElement("div",{className:"ex-hall-peek",style:{opacity:.4+p*.6}},/*#__PURE__*/React.createElement("span",null,L.room," 01 \u2192")),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-a",style:{transform:a}},/*#__PURE__*/React.createElement("h1",{className:'ex-title'+(vertical?' tategaki':'')},L.exWall)),/*#__PURE__*/React.createElement("div",{className:"ex-wall ex-wall-b",style:{transform:b}},/*#__PURE__*/React.createElement("span",{className:"ex-kicker"},"NENEKO'S PROFILE"),/*#__PURE__*/React.createElement("p",{className:"ex-statement"},L.exStatement),/*#__PURE__*/React.createElement("p",{className:"ex-period"},L.exPeriod),/*#__PURE__*/React.createElement("p",{className:"ex-hint",style:{opacity:1-p*3}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.scrollHint))));}const easeIO2=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;function Room({r,i,lang,light,onOpen,id}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement("article",{className:"room",id:id,"data-screen-label":'展間 '+r.n},/*#__PURE__*/React.createElement("div",{className:"room-sky",style:{opacity:.35+light*.65}}),/*#__PURE__*/React.createElement("div",{className:"room-num"},/*#__PURE__*/React.createElement("span",null,L.room),/*#__PURE__*/React.createElement("b",null,r.n)),/*#__PURE__*/React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14}))),/*#__PURE__*/React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{alignSelf:'end'}}),/*#__PURE__*/React.createElement("div",{className:"room-dark",style:{opacity:(1-light)*.55}}));}function RoomM({r,i,lang,onOpen}){const L=window.COPY[lang];const NS=window.NS;const ref=useRef(null);const v=useInView(ref,{threshold:.2,once:true});return/*#__PURE__*/React.createElement("article",{ref:ref,className:'room-m'+(v?' is-in':''),id:'room-'+r.id,"data-screen-label":'展間 '+r.n},/*#__PURE__*/React.createElement("div",{className:"room-sky","aria-hidden":"true"}),/*#__PURE__*/React.createElement("div",{className:"room-num"},/*#__PURE__*/React.createElement("span",null,L.room),/*#__PURE__*/React.createElement("b",null,r.n)),/*#__PURE__*/React.createElement("button",{className:"room-photo",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+r.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"3 / 2",label:'展間 '+r.n+' · 主視覺 · 待替換'}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14}))),/*#__PURE__*/React.createElement(NS.Plaque,{number:L.room+' '+r.n,year:r.year,title:r.title,client:r.client[lang],role:r.role[lang],note:L.placeholder,labels:{client:L.client,role:L.role},style:{maxWidth:'none'}}));}function RoomDetail({r,lang,onClose}){const L=window.COPY[lang];const NS=window.NS;const[on,setOn]=useState(false);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);return/*#__PURE__*/React.createElement("div",{className:"detail",role:"dialog","aria-modal":"true","aria-label":r.title,style:{opacity:on?1:0}},/*#__PURE__*/React.createElement("div",{className:"detail-hero",style:{transform:on?'none':'scale(.82)'}},/*#__PURE__*/React.createElement(NS.PhotoFrame,{ratio:"16 / 9",shape:"square",label:'展間 '+r.n+' · 全屏主視覺 · 待替換',style:{borderRadius:0}})),/*#__PURE__*/React.createElement("div",{className:"detail-body wrap"},/*#__PURE__*/React.createElement("button",{className:"detail-close",onClick:onClose},/*#__PURE__*/React.createElement(Icon,{name:"arrow-left",size:18}),L.back),/*#__PURE__*/React.createElement("span",{className:"detail-num"},L.room," ",r.n," \xB7 ",r.year),/*#__PURE__*/React.createElement("h2",null,r.title),/*#__PURE__*/React.createElement("p",{className:"detail-meta"},L.client,"\uFF1A",r.client[lang],"\u3000",L.role,"\uFF1A",r.role[lang]),/*#__PURE__*/React.createElement("div",{className:"detail-cols"},[L.challenge,L.approach,L.result].map(h=>/*#__PURE__*/React.createElement("div",{key:h},/*#__PURE__*/React.createElement("h3",null,h),/*#__PURE__*/React.createElement("p",null,L.placeholder)))),/*#__PURE__*/React.createElement("div",{className:"detail-photos"},[1,2,3].map(n=>/*#__PURE__*/React.createElement(NS.PhotoFrame,{key:n,ratio:"4 / 3",label:'展間 '+r.n+' · 照片 0'+n})))));}function Exhibition({lang}){const L=window.COPY[lang];const NS=window.NS;const rooms=window.ROOMS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const vertical=compact||reduced;const gRef=useRef(null);const p=useProgress(gRef);const scrolling=useScrolling();const[inDesk,setInDesk]=useState(false);useEffect(()=>{const el=document.getElementById('consult');if(!el)return;const io=new IntersectionObserver(([e])=>setInDesk(e.isIntersecting),{threshold:0});io.observe(el);return()=>io.disconnect();},[]);const[vw,setVw]=useState(window.innerWidth);const[cur,setCur]=useState('r01');const[visited,setVisited]=useState([]);const[detail,setDetail]=useState(null);useEffect(()=>{const f=()=>setVw(window.innerWidth);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f);},[]);const roomW=Math.min(vw*.9,1320),padX=(vw-roomW)/2;const trackW=rooms.length*roomW+padX*2;const pos=p*(rooms.length-1);useEffect(()=>{if(vertical)return;const r=rooms[Math.round(pos)].id;setCur(r);},[pos,vertical]);useEffect(()=>{if(vertical)return;if(p>.001||gRef.current.getBoundingClientRect().top<2)setVisited(v=>v.includes(cur)?v:[...v,cur]);},[cur,p]);useEffect(()=>{if(!vertical)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id.replace('room-','');setCur(id);setVisited(v=>v.includes(id)?v:[...v,id]);}}),{threshold:.55});rooms.forEach(r=>{const el=document.getElementById('room-'+r.id);el&&io.observe(el);});return()=>io.disconnect();},[vertical]);const jump=id=>{const i=rooms.findIndex(r=>r.id===id);if(vertical)return scrollToId('room-'+id);const el=gRef.current;const top=el.getBoundingClientRect().top+window.scrollY;const span=el.offsetHeight-window.innerHeight;window.scrollTo({top:top+span*(i/(rooms.length-1))+2,behavior:reduced?'auto':'smooth'});};return/*#__PURE__*/React.createElement("main",{className:'exhibition'+(compact?' ex-m':'')},compact?/*#__PURE__*/React.createElement("section",{className:"ex-intro","data-screen-label":"Exhibition title wall"},/*#__PURE__*/React.createElement("h1",{className:'ex-title'+(lang!=='en'?' tategaki':'')},L.exWall),/*#__PURE__*/React.createElement("span",{className:"ex-kicker"},"NENEKO'S PROFILE"),/*#__PURE__*/React.createElement("p",{className:"ex-statement"},L.exStatement),/*#__PURE__*/React.createElement("p",{className:"ex-period"},L.exPeriod)):/*#__PURE__*/React.createElement(ExWall,{lang:lang,compact:compact,reduced:reduced}),compact?/*#__PURE__*/React.createElement("section",{className:"gallery-m","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>/*#__PURE__*/React.createElement(RoomM,{key:r.id,r:r,i:i,lang:lang,onOpen:setDetail}))):vertical?/*#__PURE__*/React.createElement("section",{className:"gallery-v","data-screen-label":"Exhibition gallery"},rooms.map((r,i)=>/*#__PURE__*/React.createElement(Room,{key:r.id,id:'room-'+r.id,r:r,i:i,lang:lang,light:cur===r.id?1:.55,onOpen:setDetail}))):/*#__PURE__*/React.createElement("section",{ref:gRef,className:"gallery-h",style:{height:rooms.length*100+20+'vh'},"data-screen-label":"Exhibition gallery"},/*#__PURE__*/React.createElement("div",{className:"gallery-sticky"},/*#__PURE__*/React.createElement("div",{className:"gallery-ceiling","aria-hidden":"true"}),/*#__PURE__*/React.createElement("div",{className:"gallery-track",style:{width:trackW,paddingLeft:padX,transform:'translateX('+-p*(trackW-vw)+'px)'}},rooms.map((r,i)=>/*#__PURE__*/React.createElement("div",{key:r.id,style:{width:roomW,flexShrink:0}},/*#__PURE__*/React.createElement(Room,{id:'room-'+r.id,r:r,i:i,lang:lang,light:clamp01(1-Math.abs(pos-i)*1.3),onOpen:setDetail})))),/*#__PURE__*/React.createElement("div",{className:"gallery-floor","aria-hidden":"true"}))),/*#__PURE__*/React.createElement("section",{className:"ex-exit wrap","data-screen-label":"Exhibition exit"},/*#__PURE__*/React.createElement("div",{className:"exit-sign"},/*#__PURE__*/React.createElement("span",null,L.exit),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:18}))),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"exhibit",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'floormap-dock'+(narrow?' is-compact':'')+(compact&&(scrolling||inDesk)?' is-hidden':'')},/*#__PURE__*/React.createElement(NS.FloorMap,{rooms:rooms.map(r=>({id:r.id,label:L.room+' '+r.n})),current:cur,visited:visited,onJump:jump,title:L.floor,labels:{entrance:L.entrance,exit:L.exit},collapsible:narrow,defaultOpen:!narrow})),detail!=null&&/*#__PURE__*/React.createElement(RoomDetail,{r:rooms[detail],lang:lang,onClose:()=>setDetail(null)}));}window.Exhibition=Exhibition;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Exhibition.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Home.jsx
try{(()=>{function Home({lang,go}){const L=window.COPY[lang];const NS=window.NS;const compact=useCompact();const reduced=useReduced();const[alt,setAlt]=useState(false);const[vf,setVf]=useState('all');const[order]=useState(()=>{const a=[0,1,2,3,4,5];for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]];}return a;});return/*#__PURE__*/React.createElement("main",{className:"home"},/*#__PURE__*/React.createElement(Street,{lang:lang,onEnterPage:p=>go(p)}),/*#__PURE__*/React.createElement("section",{className:"about wrap",id:"about","data-screen-label":"Home about"},/*#__PURE__*/React.createElement("button",{className:'about-card'+(alt?' is-alt':''),onClick:()=>setAlt(a=>!a),"aria-label":"Neneko"},/*#__PURE__*/React.createElement("span",{className:"about-card-photo"},/*#__PURE__*/React.createElement("img",{src:(window.__ASSETS||'../../assets')+'/photos/portrait.jpg',alt:"Neneko",style:{objectPosition:'50% 30%'}}),/*#__PURE__*/React.createElement("img",{className:"alt",src:(window.__ASSETS||'../../assets')+'/photos/desk-sm.jpg',alt:"",style:{objectPosition:'62% 40%'}})),/*#__PURE__*/React.createElement("span",{className:"about-card-cap"},/*#__PURE__*/React.createElement("b",null,"NENEKO"),/*#__PURE__*/React.createElement("small",null,L.cardRole))),/*#__PURE__*/React.createElement("div",{className:"about-text"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.since),/*#__PURE__*/React.createElement("div",{className:"about-head"},/*#__PURE__*/React.createElement("h2",{className:"about-name"},"About me"),/*#__PURE__*/React.createElement("a",{className:"cv-link",href:"#"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:13}),L.cv)),L.about.map((p,n)=>/*#__PURE__*/React.createElement("p",{key:n,className:"about-lead"},p)),/*#__PURE__*/React.createElement("p",{className:"about-cities","aria-label":"Leeds, Taipei, Melbourne, Osaka"},['Leeds','Taipei','Melbourne','Osaka'].map((c,n)=>/*#__PURE__*/React.createElement(React.Fragment,{key:c},n>0&&/*#__PURE__*/React.createElement("span",{className:"ac-arrow","aria-hidden":"true"},"\u2192"),/*#__PURE__*/React.createElement("span",null,c)))))),/*#__PURE__*/React.createElement("section",{className:"partners",id:"partners","data-screen-label":"Home partners"},/*#__PURE__*/React.createElement("div",{className:"wrap"},/*#__PURE__*/React.createElement("span",{className:"about-eyebrow"},L.partnersEyebrow)),/*#__PURE__*/React.createElement("div",{className:"marquee","aria-label":window.PARTNERS.join('、')},/*#__PURE__*/React.createElement("div",{className:"marquee-track"},[0,1].map(k=>/*#__PURE__*/React.createElement("ul",{key:k,"aria-hidden":k?'true':undefined},window.PARTNERS.map(p=>/*#__PURE__*/React.createElement("li",{key:p},p)))))),/*#__PURE__*/React.createElement("div",{className:"voices wrap"},/*#__PURE__*/React.createElement("div",{className:"voices-filter",role:"group","aria-label":L.reviewEx+' / '+L.reviewTh},[['all',L.reviewAll,''],['exhibit',L.reviewEx,'k-ex'],['theatre',L.reviewTh,'k-th']].map(([k,label,cls])=>/*#__PURE__*/React.createElement("button",{key:k,className:'vf '+cls+(vf===k?' is-on':''),"aria-pressed":vf===k,onClick:()=>setVf(k)},label))),/*#__PURE__*/React.createElement("div",{className:"letters",tabIndex:"0"},order.map(i=>({i,tone:i%2?'theatre':'exhibit'})).filter(c=>vf==='all'||c.tone===vf).map(({i,tone})=>{const c=tone==='theatre'?'shu':'matcha';return/*#__PURE__*/React.createElement(NS.LetterCard,{key:i,tone:tone,placeholder:true,placeholderLabel:L.pending,quote:L.reviewQuote,name:L.reviewName+' 0'+(i+1),role:L.reviewRole,org:(tone==='theatre'?L.reviewTh:L.reviewEx)+'｜'+L.reviewOrg,width:compact?220:240,tilt:i%2?1.6:-1.8,style:{background:'var(--'+c+'-4)',backgroundImage:'repeating-linear-gradient(transparent 0 31px, rgba(255,255,255,.7) 31px 32px)',backgroundPosition:'0 52px',backgroundClip:'border-box',borderTop:'10px solid var(--'+c+'-1)',boxShadow:'var(--shadow-paper), inset 0 0 0 1.5px var(--'+c+'-1)'}});})),/*#__PURE__*/React.createElement("button",{className:"voices-cta",onClick:()=>scrollToId('home-consult')},/*#__PURE__*/React.createElement("span",null,L.teammate.split('\n').map((t,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"tm-line"},t))),/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:26})))),/*#__PURE__*/React.createElement(ConsultStreet,{lang:lang,go:go}));}function CsNoren({tone,state,label}){const chars=Array.from(label);const off=state==='open'?108:state==='half'?46:0;return/*#__PURE__*/React.createElement("div",{className:'cs-noren cs-n-'+tone,"aria-hidden":"true"},/*#__PURE__*/React.createElement("span",{className:"cs-rod"}),chars.map((ch,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:"cs-panel-wrap",style:{transform:'translateX('+(n>=chars.length/2?off*2:-off*2)+'%) rotate('+(n>=chars.length/2?1:-1)*off/18+'deg)'}},/*#__PURE__*/React.createElement("span",{className:"cs-panel",style:{animationDelay:n*-2.3+'s'}},/*#__PURE__*/React.createElement("b",null,ch)))));}function ConsultStreet({lang,go}){const L=window.COPY[lang];const NS=window.NS;const touch=useTouch();const compact=useCompact();const[open,setOpen]=useState(null);const[slide,setSlide]=useState(0);const doors=[{k:'ex',noren:'展覽相談',tone:'exhibit',page:'exhibition',q:L.exQ,egg:L.roomEx,cta:L.ctaEx,sv:L.exServices},{k:'th',noren:'劇場相談',tone:'theatre',page:'theatre',q:L.thQ,egg:L.roomTh,cta:L.ctaTh,sv:L.thServices}];const door=d=>{const st=compact?'closed':open===d.k?'open':touch?'half':'closed';const on=compact||st!=='closed';return/*#__PURE__*/React.createElement("div",{key:d.k,className:'cs-bldg cs-'+d.k+(on?' is-on':''),onMouseEnter:()=>!touch&&setOpen(d.k),onMouseLeave:()=>!touch&&setOpen(null),onFocus:()=>setOpen(d.k),onClick:()=>touch&&setOpen(o=>o===d.k?null:d.k)},d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-lamp","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("h3",{className:"cs-q"},d.q),/*#__PURE__*/React.createElement("p",{className:"cs-egg"},d.egg),/*#__PURE__*/React.createElement("div",{className:"cs-open"},/*#__PURE__*/React.createElement("div",{className:"cs-interior","aria-hidden":"true"},d.k==='ex'?/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-rack"},/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("i",null)),/*#__PURE__*/React.createElement("span",{className:"cs-uketsuke"},/*#__PURE__*/React.createElement("b",null,"\u53D7\u4ED8"),/*#__PURE__*/React.createElement("small",null,"RECEPTION")),/*#__PURE__*/React.createElement("span",{className:"cs-counter"})):/*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement("span",{className:"cs-ledge"}))),/*#__PURE__*/React.createElement("div",{className:"cs-preview",style:{opacity:on?1:0,transform:on?'none':'translateY(10px)'}},/*#__PURE__*/React.createElement("ul",null,d.sv.map((s,n)=>/*#__PURE__*/React.createElement("li",{key:n},/*#__PURE__*/React.createElement("span",null,s[0])))),/*#__PURE__*/React.createElement("button",{className:"room-guide",tabIndex:on?0:-1,onClick:e=>{e.stopPropagation();go(d.page,'consult');}},d.cta,/*#__PURE__*/React.createElement(Icon,{name:"arrow-right",size:16}))),/*#__PURE__*/React.createElement(CsNoren,{tone:d.tone,state:st,label:d.noren})),d.k==='th'&&/*#__PURE__*/React.createElement("span",{className:"cs-poster","aria-hidden":"true"},/*#__PURE__*/React.createElement("b",null,L.poster),/*#__PURE__*/React.createElement("i",null),/*#__PURE__*/React.createElement("small",null,"\u306D\u306D\u30CD\u30B3")));};return/*#__PURE__*/React.createElement("section",{className:"cs",id:"home-consult","data-screen-label":"Home consult doors"},/*#__PURE__*/React.createElement("p",{className:"cs-note"},L.csNote.split('｜').map((t,n)=>/*#__PURE__*/React.createElement(React.Fragment,{key:n},n>0&&/*#__PURE__*/React.createElement("span",{className:"cs-sep"},"\uFF5C"),/*#__PURE__*/React.createElement("span",{className:"cs-nw"},t)))),compact&&/*#__PURE__*/React.createElement("div",{className:"cs-sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",{className:"d",style:{opacity:slide?0:1}}),/*#__PURE__*/React.createElement("i",{className:"n",style:{opacity:slide?1:0}})),compact?/*#__PURE__*/React.createElement(SwipeDeck,{index:slide,onChange:i=>{setSlide(i);setOpen(null);},dark:slide===1,labels:[L.ctaEx,L.ctaTh],className:"cs-deck"},doors.map(door)):/*#__PURE__*/React.createElement("div",{className:"cs-street"},doors.map(door)),/*#__PURE__*/React.createElement("div",{className:"cs-ground","aria-hidden":"true"}));}function SiteFooter({lang,go,page}){const L=window.COPY[lang];const F=L.foot;const to=(p,a)=>e=>{e.preventDefault();if(p===page){a?scrollToId(a):window.scrollTo({top:0,behavior:'smooth'});}else go(p,a);};const home=[[F.top,'home'],[F.about,'home','about'],[F.partners,'home','partners'],[F.consult,'home','home-consult']];const ticket=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 64 40",width:"64",height:"40"},/*#__PURE__*/React.createElement("path",{d:"M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("path",{d:"M44 5v30",stroke:"var(--paper-0)",strokeWidth:"1.5",strokeDasharray:"3 3"}),/*#__PURE__*/React.createElement("path",{d:"M12 15h22M12 21h16M12 27h20",stroke:"var(--paper-0)",strokeWidth:"2",strokeLinecap:"round"}));const piece=/*#__PURE__*/React.createElement("svg",{viewBox:"0 0 60 52",width:"60",height:"52"},/*#__PURE__*/React.createElement("path",{d:"M30 2l-8 8M30 2l8 8",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("rect",{x:"3",y:"10",width:"54",height:"40",rx:"1",fill:"var(--wood-2, #C9A27A)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"9",y:"16",width:"42",height:"28",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M10 43l11-13 7 8 6-6 16 11z",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"round"}),/*#__PURE__*/React.createElement("circle",{cx:"40",cy:"24",r:"3.5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}));const works=[[F.exWorks,'exhibition',piece,'ex'],[F.thWorks,'theatre',ticket,'th']];return/*#__PURE__*/React.createElement("footer",{className:"site-foot","data-screen-label":"Footer"},/*#__PURE__*/React.createElement("div",{className:"wrap site-foot-in"},/*#__PURE__*/React.createElement("nav",{className:"sf-map","aria-label":"Sitemap"},/*#__PURE__*/React.createElement("div",{className:"sf-col"},/*#__PURE__*/React.createElement("h4",null,"HOME"),/*#__PURE__*/React.createElement("ul",null,home.map(([label,p,a])=>/*#__PURE__*/React.createElement("li",{key:label},/*#__PURE__*/React.createElement("a",{href:'#'+p,onClick:to(p,a)},label))))),/*#__PURE__*/React.createElement("div",{className:"sf-col sf-works"},works.map(([label,p,icon,k])=>/*#__PURE__*/React.createElement("h4",{key:k},/*#__PURE__*/React.createElement("a",{className:'sf-work sf-work-'+k,href:'#'+p,onClick:to(p)},label,/*#__PURE__*/React.createElement("span",{className:"sf-pop","aria-hidden":"true"},icon)))))),/*#__PURE__*/React.createElement("div",{className:"sf-contact"},/*#__PURE__*/React.createElement("h4",null,"LET'S TALK!"),/*#__PURE__*/React.createElement("a",{className:"sf-mail",href:"mailto:hanningchen13@gmail.com"},"hanningchen13@gmail.com"),/*#__PURE__*/React.createElement("a",{className:"sf-tel",href:"tel:+886911506750"},"+886 911506750"),/*#__PURE__*/React.createElement("div",{className:"sf-social"},/*#__PURE__*/React.createElement("a",{href:"https://www.instagram.com/neneko.hc/",target:"_blank",rel:"noopener"},"Instagram"),/*#__PURE__*/React.createElement("a",{href:"https://unsplash.com/@hanningchen",target:"_blank",rel:"noopener"},"Unsplash")))),/*#__PURE__*/React.createElement("div",{className:"wrap sf-copy"},/*#__PURE__*/React.createElement("span",null,"Copyright \xA9 2026 All rights reserved.")));}window.Home=Home;window.SiteFooter=SiteFooter;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Home.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Intro.jsx
try{(()=>{const INTRO_CITIES={TPE:[121.56,25.03],LDS:[-1.55,53.8],MEL:[144.96,-37.81],OSA:[135.5,34.69]};const INTRO_LEGS=[['TPE','LDS',.35,1.35,-1],['LDS','TPE',1.55,2.4,1],['TPE','MEL',2.6,3.3,-1],['MEL','OSA',3.5,4.15,-1]];const INTRO_END=5.1,INTRO_CAM=4.45;const easeIO=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;let __land=null;function Intro({lang,onDone,compact}){const L=window.COPY[lang];const W=compact?375:1440,H=compact?720:900;const[land,setLand]=useState(__land);const[t,setT]=useState(0);const doneRef=useRef(false);const finish=()=>{if(!doneRef.current){doneRef.current=true;onDone();}};useEffect(()=>{if(!land)fetch((window.__ASSETS||'../../assets')+'/maps/land-110m.json').then(r=>r.json()).then(j=>{__land=topojson.feature(j,j.objects.land);setLand(__land);}).catch(()=>{});const t0=performance.now();const id=setInterval(()=>{const s=(performance.now()-t0)/1000;setT(s);if(s>=INTRO_END){clearInterval(id);finish();}},16);return()=>clearInterval(id);},[]);const geo=useMemo(()=>{const proj=d3.geoNaturalEarth1();const pts={type:'MultiPoint',coordinates:Object.values(INTRO_CITIES)};if(compact)proj.fitExtent([[28,H*.3],[W-28,H*.62]],pts);else proj.fitExtent([[W*.14,H*.2],[W*.86,H*.7]],pts);const P={};for(const k in INTRO_CITIES)P[k]=proj(INTRO_CITIES[k]);const legs=INTRO_LEGS.map(([a,b,s,e,side])=>{const p0=P[a],p1=P[b];const dx=p1[0]-p0[0],dy=p1[1]-p0[1];const len=Math.hypot(dx,dy);const c=[(p0[0]+p1[0])/2+side*dy*.18*(side<0?1:.6),(p0[1]+p1[1])/2-Math.abs(dx)*(side<0?.22:.08)];const at=u=>{const v=1-u;return[v*v*p0[0]+2*v*u*c[0]+u*u*p1[0],v*v*p0[1]+2*v*u*c[1]+u*u*p1[1]];};const tan=u=>{const v=1-u;return Math.atan2(2*v*(c[1]-p0[1])+2*u*(p1[1]-c[1]),2*v*(c[0]-p0[0])+2*u*(p1[0]-c[0]))*180/Math.PI;};const n=Math.max(6,Math.round(len/(compact?9:16)));const dashes=Array.from({length:n},(_,i)=>{const u=(i+.5)/n;return{u,p:at(u),a:tan(u)};});return{a,b,s,e,at,tan,dashes};});return{proj,P,legs,path:d3.geoPath(proj)};},[compact]);const landD=useMemo(()=>land?geo.path(land):'',[land,geo]);let plane=null;for(const lg of geo.legs){if(t>=lg.s&&t<=lg.e+.25){const u=easeIO(clamp01((t-lg.s)/(lg.e-lg.s)));plane={p:lg.at(u),a:lg.tan(Math.min(u,.995))};}}if(!plane&&t<geo.legs[0].s)plane={p:geo.P.TPE,a:geo.legs[0].tan(0)};const landed=t>geo.legs[3].e;const STOPS=['LDS','TPE','MEL','OSA'];const arrive=STOPS.map((k,i)=>t>=geo.legs[i].e);const cam=easeIO(clamp01((t-INTRO_CAM)/(INTRO_END-INTRO_CAM)));const stampSize=compact?66:96;const stampOff={LDS:[.9,1.1],TPE:[-1.1,.3],MEL:[1.1,-.2],OSA:[1,-1.1]};const stampTxt=[['ARRIVAL','LEEDS','2018'],['ARRIVAL','TAIPEI','2019'],['ARRIVAL','MELBOURNE','2024'],['ARRIVAL','OSAKA','2025']];return/*#__PURE__*/React.createElement("div",{className:"intro",style:{transform:'translateY('+-cam*100+'%)'},"aria-label":"Intro"},/*#__PURE__*/React.createElement("svg",{viewBox:'0 0 '+W+' '+H,preserveAspectRatio:"xMidYMid slice",className:"intro-map",style:{opacity:clamp01(t/.35)}},/*#__PURE__*/React.createElement("path",{d:landD,fill:"var(--paper-2)",stroke:"var(--ink-3)",strokeWidth:"0.8",strokeLinejoin:"round"}),geo.legs.map((lg,li)=>lg.dashes.map((d,i)=>/*#__PURE__*/React.createElement("line",{key:li+'-'+i,x1:-3,x2:3,y1:0,y2:0,transform:'translate('+d.p[0]+','+d.p[1]+') rotate('+d.a+')',stroke:"var(--ink-1)",strokeWidth:"1.6",strokeLinecap:"round",style:{opacity:easeIO(clamp01((t-lg.s)/(lg.e-lg.s)))>=d.u?1:0,transition:'opacity 120ms linear'}}))),Object.entries(geo.P).map(([k,p])=>/*#__PURE__*/React.createElement("g",{key:k,transform:'translate('+p[0]+','+p[1]+')'},/*#__PURE__*/React.createElement("circle",{r:"4",fill:"var(--karashi-1)"}),/*#__PURE__*/React.createElement("circle",{r:"9",fill:"none",stroke:"var(--karashi-1)",strokeWidth:"1",opacity:".6"})))),STOPS.map((k,i)=>{const p=geo.P[k];const o=stampOff[k];return/*#__PURE__*/React.createElement("div",{key:k,className:"intro-stamp",style:{left:p[0]/W*100+'%',top:p[1]/H*100+'%',transform:'translate('+(o[0]*stampSize*.7-stampSize/2)+'px,'+(o[1]*stampSize*.8-stampSize/2)+'px)'}},/*#__PURE__*/React.createElement(window.NS.Stamp,{top:stampTxt[i][0],main:stampTxt[i][1],bottom:stampTxt[i][2],size:stampSize,color:['var(--matcha-1)','var(--ink-2)','var(--karashi-1)','var(--shu-1)'][i],rotate:[-10,7,-6,-5][i],inked:arrive[i]}));}),plane&&/*#__PURE__*/React.createElement("div",{className:"intro-plane",style:{left:plane.p[0]/W*100+'%',top:plane.p[1]/H*100+'%',transform:'translate(-50%,-50%) rotate('+(plane.a+45)+'deg) scale('+(landed?.6:1)+')',opacity:landed?0:1}},/*#__PURE__*/React.createElement(Icon,{name:"plane",size:compact?22:28,color:"var(--ink-1)"})),/*#__PURE__*/React.createElement("ol",{className:"intro-lines"},L.intro.map(([a,b],i)=>/*#__PURE__*/React.createElement("li",{key:i,style:{opacity:arrive[i]?1:0,transform:arrive[i]?'none':'translateY(8px)'}},/*#__PURE__*/React.createElement("b",null,a),/*#__PURE__*/React.createElement("span",null,"\uFF5C"),b))),/*#__PURE__*/React.createElement("button",{className:"intro-skip",onClick:finish},L.skip,/*#__PURE__*/React.createElement(Icon,{name:"skip-forward",size:16})));}window.Intro=Intro;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Intro.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Street.jsx
try{(()=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n;},_extends.apply(null,arguments);}const STARS=Array.from({length:26},(_,i)=>({x:(i*37.7+11)%100,y:i*53.3%62+3,s:i%5===0?3:2}));function Sky({mode}){return/*#__PURE__*/React.createElement("div",{className:"sky","aria-hidden":"true"},/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-dusk",style:{opacity:mode==='dusk'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-day",style:{opacity:mode==='day'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-layer sky-night",style:{opacity:mode==='night'?1:0}}),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'12%',transform:'rotate('+(mode==='day'?10:mode==='dusk'?-38:-80)+'deg)',opacity:mode==='night'?0:1}},/*#__PURE__*/React.createElement("span",{className:"sun",style:{opacity:mode==='day'?1:.55}})),/*#__PURE__*/React.createElement("div",{className:"sky-pivot",style:{left:'76%',transform:'rotate('+(mode==='night'?12:90)+'deg)',opacity:mode==='night'?1:0}},/*#__PURE__*/React.createElement("span",{className:"moon"})),STARS.map((s,i)=>/*#__PURE__*/React.createElement("span",{key:i,className:"star",style:{left:s.x+'%',top:s.y+'%',width:s.s,height:s.s,opacity:mode==='night'?i%3?.9:.55:0,transitionDelay:mode==='night'?300+i*40+'ms':'0ms'}})),/*#__PURE__*/React.createElement("div",{className:"clouds",style:{opacity:mode==='day'?1:mode==='dusk'?.45:0}},/*#__PURE__*/React.createElement("span",{className:"cloud c1"}),/*#__PURE__*/React.createElement("span",{className:"cloud c2"}),/*#__PURE__*/React.createElement("span",{className:"cloud c3"})));}function Museum({x,mode,lang,onEnter,onLeave,onTap,glint,big}){const L=window.COPY[lang];const night=mode==='night',day=mode==='day';return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.exSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-40",y:"160",width:"580",height:"350",fill:"transparent"}),/*#__PURE__*/React.createElement("polygon",{points:"0,500 520,500 610,538 90,538",fill:"var(--ink-2)",style:{opacity:day?.16:mode==='dusk'?.06:0,transition:'opacity var(--dur-sky) var(--ease-soft)'}}),/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("g",{fill:"var(--matcha-2)",opacity:".45"},/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"214",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"240",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"266",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"292",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"318",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"18",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"52",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"86",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"120",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"154",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"188",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"222",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"256",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"290",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"324",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"358",cy:"344",r:"1.5"}),/*#__PURE__*/React.createElement("circle",{cx:"426",cy:"344",r:"1.5"})),/*#__PURE__*/React.createElement("path",{d:"M156,186 L176,306 L196,186",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5",strokeLinejoin:"miter"}),/*#__PURE__*/React.createElement("rect",{x:"376",y:"214",width:"14",height:"250",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116",fill:"#DFE7E3",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("g",{stroke:"var(--ink-1)",strokeWidth:"1.2"},/*#__PURE__*/React.createElement("line",{x1:"126",y1:"384",x2:"126",y2:"500"}),/*#__PURE__*/React.createElement("line",{x1:"226",y1:"384",x2:"226",y2:"500"})),/*#__PURE__*/React.createElement("rect",{x:"150",y:"424",width:"56",height:"76",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"178",y1:"424",x2:"178",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("clipPath",{id:"glass-clip"},/*#__PURE__*/React.createElement("rect",{x:"26",y:"384",width:"300",height:"116"})),/*#__PURE__*/React.createElement("g",{clipPath:"url(#glass-clip)"},/*#__PURE__*/React.createElement("polygon",{points:"0,384 40,384 -20,500 -60,500",fill:"#fff",className:"glint",style:{transform:glint?'translateX(420px)':'translateX(0)',opacity:glint?.85:0}})),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"490",width:"260",height:"10",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("rect",{x:"300",y:"426",width:"240",height:"64",rx:"5",fill:"var(--matcha-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"314",y:"438",width:"212",height:"40",rx:"2",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"420",y:"467",textAnchor:"middle",fill:"var(--matcha-2)"},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.exSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10",fill:"var(--ink-1)"},"EXHIBITION")),/*#__PURE__*/React.createElement("g",{style:{opacity:night?.82:0,transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'},fill:"var(--night-2)"},/*#__PURE__*/React.createElement("path",{d:"M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"}),/*#__PURE__*/React.createElement("rect",{x:"-20",y:"370",width:"480",height:"12"}),/*#__PURE__*/React.createElement("rect",{x:"290",y:"426",width:"260",height:"74"})),/*#__PURE__*/React.createElement(StreetTag,{x:330,y:144,rot:8,text:L.exTag,hidden:mode==='night',active:mode==='day',big:big}));}function TheatreBldg({x,mode,lang,onEnter,onLeave,onTap,big}){const L=window.COPY[lang];const night=mode==='night';const win=i=>{const wx=34+i*60;return'M'+wx+',272 V222 A17,17 0 0 1 '+(wx+34)+',222 V272 Z';};const bulbs=[];for(let i=0;i<11;i++){bulbs.push([104+i*21.2,298]);bulbs.push([104+i*21.2,350]);}[314,324,334].forEach(y=>{bulbs.push([96,y]);bulbs.push([324,y]);});const glow={transition:'opacity var(--dur-sky) var(--ease-soft)',pointerEvents:'none'};return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',className:"bldg",style:{opacity:mode==='day'?.42:1,transition:'opacity var(--dur-sky) var(--ease-soft)'},onMouseEnter:onEnter,onMouseLeave:onLeave,onClick:onTap,role:"button",tabIndex:"0","aria-label":L.thSign.join(' '),onFocus:onEnter,onBlur:onLeave,onKeyDown:e=>e.key==='Enter'&&onTap()},/*#__PURE__*/React.createElement("rect",{x:"-20",y:"150",width:"460",height:"360",fill:"transparent"}),/*#__PURE__*/React.createElement("rect",{x:"20",y:"160",width:"380",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"176",width:"448",height:"16",fill:"#F1E3D9",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"0",y:"192",width:"420",height:"308",fill:"#F5EAE2",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"282",x2:"420",y2:"282",stroke:"var(--ink-1)",strokeWidth:"1"}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:i,d:win(i),fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"})),/*#__PURE__*/React.createElement("rect",{x:"56",y:"398",width:"54",height:"76",fill:"var(--paper-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"310",y:"398",width:"54",height:"76",fill:"var(--shu-4)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--ink-2)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"-14",y:"160",width:"448",height:"340",fill:"var(--night-2)",style:{...glow,opacity:night?.62:0}}),[0,1,2,3,4,5].map(i=>/*#__PURE__*/React.createElement("path",{key:'g'+i,d:win(i),fill:"var(--lamp-1)",style:{...glow,opacity:night?1:0,transitionDelay:night?200+i*90+'ms':'0ms'}})),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"var(--lamp-2)",style:{...glow,opacity:night?1:0,transitionDelay:night?'500ms':'0ms'}}),/*#__PURE__*/React.createElement("path",{d:"M150,500 V432 A60,60 0 0 1 270,432 V500 Z",fill:"none",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"128",y:"494",width:"164",height:"6",fill:"var(--paper-2)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("rect",{x:"90",y:"292",width:"240",height:"64",rx:"5",fill:"var(--shu-1)",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("rect",{x:"104",y:"304",width:"212",height:"40",rx:"2",fill:"var(--night-3)",stroke:"var(--ink-1)",strokeWidth:"1"}),/*#__PURE__*/React.createElement("text",{x:"210",y:"333",textAnchor:"middle",fill:"var(--lamp-1)",style:{opacity:night?1:.7,transition:'opacity var(--dur-sky)'}},/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"26",fontWeight:"500",letterSpacing:"4"},L.thSign[0]),/*#__PURE__*/React.createElement("tspan",{fontFamily:"var(--font-sans)",fontSize:"16",fontWeight:"500",letterSpacing:"2.5",dx:"10"},"THEATRE")),bulbs.map(([bx,by],i)=>/*#__PURE__*/React.createElement("circle",{key:i,cx:bx,cy:by,r:"2.8",fill:"var(--lamp-2)",stroke:"var(--ink-1)",strokeWidth:".6",style:{...glow,opacity:night?1:.25,transitionDelay:night?300+(i>>1)*70+'ms':'0ms'}})),/*#__PURE__*/React.createElement(StreetTag,{x:-30,y:124,rot:-8,text:L.thTag,hidden:mode==='day',light:mode==='night',active:mode==='night',big:big}));}function StreetTag({x,y,rot,text,hidden,light,active,big}){const tref=useRef(null);const[w,setW]=useState(Array.from(text).length*18);useEffect(()=>{const m=()=>{try{setW(tref.current.getComputedTextLength());}catch(e){}};m();document.fonts&&document.fonts.ready.then(m);},[text,big]);return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+','+y+') rotate('+rot+')',"aria-hidden":"true",style:{pointerEvents:'none'}},/*#__PURE__*/React.createElement("g",{style:{opacity:hidden?0:1,transition:'opacity var(--dur-base) var(--ease-out)'}},/*#__PURE__*/React.createElement("g",{className:'tag-scale'+(active?' is-on':'')},/*#__PURE__*/React.createElement("g",{className:'tag-pulse'+(active?' is-fast':'')},/*#__PURE__*/React.createElement("line",{x1:"-14",y1:"-16",x2:"-6",y2:"-6",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:"-18",y1:"1",x2:"-8",y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("text",{ref:tref,x:"0",y:"6",fontFamily:"var(--font-sans)",fontSize:big?24:16,fontWeight:"500",letterSpacing:"2.4",fill:light?'var(--night-ink)':'var(--ink-1)',style:{transition:'fill var(--dur-sky)'}},text),/*#__PURE__*/React.createElement("line",{x1:w+6,y1:"-6",x2:w+14,y2:"-16",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"}),/*#__PURE__*/React.createElement("line",{x1:w+8,y1:"1",x2:w+18,y2:"1",stroke:"var(--karashi-1)",strokeWidth:"2",strokeLinecap:"round"})))));}function StreetTree({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("line",{x1:"0",y1:"440",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--matcha-4)",stroke:"var(--ink-1)",strokeWidth:"1.2"}),/*#__PURE__*/React.createElement("path",{d:"M0,452 L-8,440 M0,446 L7,436",stroke:"var(--ink-1)",strokeWidth:"1",fill:"none"}),/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"428",r:"22",fill:"var(--night-2)",style:{opacity:mode==='night'?.6:0,transition:'opacity var(--dur-sky)'}}));}function StreetLamp({x,mode}){return/*#__PURE__*/React.createElement("g",{transform:'translate('+x+',0)',"aria-hidden":"true"},/*#__PURE__*/React.createElement("circle",{cx:"0",cy:"392",r:"22",fill:"var(--lamp-glow)",style:{opacity:mode==='night'?1:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"0",y1:"398",x2:"0",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("path",{d:"M-9,398 H9 L5,384 H-5 Z",fill:"var(--paper-0)",stroke:"var(--ink-1)",strokeWidth:"1.2"}));}function EntranceLine({kind,text,lang,active,mode}){const vertical=lang==='ja';const dim=mode==='dusk'?.38:active?1:0;const cls='eline eline-'+kind+(vertical?' is-v':'')+(kind==='th'&&mode==='night'?' is-lit':'');return/*#__PURE__*/React.createElement("div",{className:cls,style:{opacity:dim}},/*#__PURE__*/React.createElement(RevealText,{text:text,show:mode==='dusk'||active,stagger:active?55:0}));}function Street({lang,onEnterPage}){const L=window.COPY[lang];const compact=useCompact();const touch=useTouch();const reduced=useReduced();const[modeS,setMode]=useState('dusk');const[picked,setPicked]=useState(null);const[slide,setSlide]=useState(0);const mode=compact?slide?'night':'day':modeS;const[glint,setGlint]=useState(false);const[zoom,setZoom]=useState(null);const lay=compact?{vb:'-40 90 1020 440',mx:0,tx:550,lamp:null}:{vb:'0 80 1440 460',mx:200,tx:880,lamp:790};useEffect(()=>{window.dispatchEvent(new CustomEvent('nh-sky',{detail:mode}));return()=>window.dispatchEvent(new CustomEvent('nh-sky',{detail:'dusk'}));},[mode]);useEffect(()=>{if(mode==='day'){const id=setTimeout(()=>setGlint(true),380);return()=>{clearTimeout(id);setGlint(false);};}},[mode]);useEffect(()=>{if(!touch||picked||reduced||compact)return;const seq=['day','dusk','night','dusk'];let i=0;const id=setInterval(()=>{setMode(seq[i%4]);i++;},3200);return()=>clearInterval(id);},[touch,picked,reduced,compact]);const enter=which=>{const vbx=compact?-40:0,vbw=compact?1020:1440;const ox=which==='ex'?lay.mx+178:lay.tx+210;setZoom(compact?{which,ox:'50%',oy:'62%'}:{which,ox:(ox-vbx)/vbw*100+'%'});setTimeout(()=>onEnterPage(which==='ex'?'exhibition':'theatre'),reduced?0:950);};const handlers=which=>{const m=which==='ex'?'day':'night';if(compact)return{onEnter:()=>{},onLeave:()=>{},onTap:()=>enter(which)};return touch?{onEnter:()=>{},onLeave:()=>{},onTap:()=>{if(picked===which)enter(which);else{setPicked(which);setMode(m);}}}:{onEnter:()=>setMode(m),onLeave:()=>setMode('dusk'),onTap:()=>enter(which)};};return/*#__PURE__*/React.createElement("section",{className:'street mode-'+mode,id:"street","data-screen-label":"Home street"},/*#__PURE__*/React.createElement(Sky,{mode:mode}),/*#__PURE__*/React.createElement("div",{className:"street-inner",style:zoom?{transform:'scale(3.2)',transformOrigin:zoom.ox+' '+(zoom.oy||'78%')}:null},/*#__PURE__*/React.createElement("div",{className:"street-top"},/*#__PURE__*/React.createElement("div",{className:"tagline-stack"},/*#__PURE__*/React.createElement("h1",{className:'tagline'+(lang==='en'?' is-en':'')},L.tagline),/*#__PURE__*/React.createElement("h1",{className:'tagline tagline-night'+(lang==='en'?' is-en':''),"aria-hidden":"true",style:{opacity:mode==='night'?1:0}},L.tagline)),compact?/*#__PURE__*/React.createElement("p",{className:"byline is-3l"},L.byline.split('｜').map((t,n)=>/*#__PURE__*/React.createElement("span",{key:n,className:n?'':'nk'},t))):/*#__PURE__*/React.createElement("p",{className:"byline"},L.byline)),compact?/*#__PURE__*/React.createElement(SwipeDeck,{index:slide,onChange:setSlide,dark:slide===1,labels:[L.exSign.join(' '),L.thSign.join(' ')],className:"street-deck"},/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-50 70 620 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-60",y:"500",width:"640",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"500",x2:"580",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-60",y1:"524",x2:"580",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:0,mode:mode,lang:lang,glint:glint,big:true},handlers('ex')))),/*#__PURE__*/React.createElement("svg",{className:"street-svg is-stack",viewBox:"-90 70 600 470",preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-100",y:"500",width:"620",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"500",x2:"520",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-100",y1:"524",x2:"520",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:0,mode:mode,lang:lang,big:true},handlers('th'))))):/*#__PURE__*/React.createElement("svg",{className:"street-svg",viewBox:lay.vb,preserveAspectRatio:"xMidYMax meet"},/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--paper-1)"}),/*#__PURE__*/React.createElement("rect",{x:"-400",y:"500",width:"2240",height:"80",fill:"var(--night-3)",style:{opacity:mode==='night'?.5:0,transition:'opacity var(--dur-sky)'}}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"500",x2:"1840",y2:"500",stroke:"var(--ink-1)",strokeWidth:"1.5"}),/*#__PURE__*/React.createElement("line",{x1:"-400",y1:"524",x2:"1840",y2:"524",stroke:"var(--ink-3)",strokeWidth:"1",strokeDasharray:"10 8"}),/*#__PURE__*/React.createElement(Museum,_extends({x:lay.mx,mode:mode,lang:lang,glint:glint},handlers('ex'))),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.mx-70,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetLamp,{x:lay.lamp,mode:mode}),lay.lamp&&/*#__PURE__*/React.createElement(StreetTree,{x:lay.tx+500,mode:mode}),/*#__PURE__*/React.createElement(TheatreBldg,_extends({x:lay.tx,mode:mode,lang:lang},handlers('th')))),/*#__PURE__*/React.createElement("p",{className:"street-hint"},/*#__PURE__*/React.createElement("span",{className:"hint-arrow"},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:14,style:{transform:'rotate(180deg)'}})),/*#__PURE__*/React.createElement("span",{className:"hint-text"},compact?L.hintSwipe:touch?L.hintTap:L.hintHover))),/*#__PURE__*/React.createElement("div",{className:'enter-veil '+(zoom?'on '+zoom.which:'')}));}window.Street=Street;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Street.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/Theatre.jsx
try{(()=>{function TicketM({lang,reduced}){const L=window.COPY[lang];const NS=window.NS;const[torn,setTorn]=useState(0);const done=useRef(false);const fmt=()=>{const d=new Date(),z=n=>String(n).padStart(2,'0');return d.getFullYear()+'.'+z(d.getMonth()+1)+'.'+z(d.getDate())+' — '+z(d.getHours())+':'+z(d.getMinutes());};const[now,setNow]=useState(fmt);useEffect(()=>{const id=setInterval(()=>setNow(fmt()),15000);return()=>clearInterval(id);},[]);const[drape,setDrape]=useState(reduced?1:0);useEffect(()=>{if(reduced)return;const id=setTimeout(()=>setDrape(1),350);return()=>clearTimeout(id);},[]);const tear=()=>{if(done.current)return;done.current=true;if(reduced){setTorn(1);return;}const t0=performance.now();const from=torn;const step=n=>{const k=clamp01((n-t0)/600);setTorn(from+(1-from)*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step);};requestAnimationFrame(step);};useEffect(()=>{const f=()=>{if(done.current)return;const k=clamp01(window.scrollY/(window.innerHeight*.4));if(reduced){if(k>.05){done.current=true;setTorn(1);}return;}setTorn(k);if(k>=1)done.current=true;};f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f);},[]);return/*#__PURE__*/React.createElement("section",{className:"ticket-m","data-screen-label":"Theatre ticket"},/*#__PURE__*/React.createElement("div",{className:"th-valance","aria-hidden":"true"}),/*#__PURE__*/React.createElement(NS.Curtain,{open:drape,valance:false,duration:reduced?undefined:1400,style:{top:22}}),/*#__PURE__*/React.createElement("button",{className:"ticket-btn",onClick:tear,"aria-label":L.tearHintM},/*#__PURE__*/React.createElement(NS.Ticket,{title:L.thTicket,sub:L.ticketSub,date:now,seat:"\u4E00\u968E \u308D\u5217 7\u756A",no:"No. 000127",admit:L.admit,stubLabel:L.stub,torn:torn})),/*#__PURE__*/React.createElement("p",{className:"th-hint",style:{opacity:torn>0?0:1}},/*#__PURE__*/React.createElement(Icon,{name:"arrow-down",size:16}),L.tearHintM));}function ActM({a,i,lang,onOpen}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement(Reveal,{as:"article",className:"act-m",id:'act-'+a.id,"data-screen-label":a.n.zh},/*#__PURE__*/React.createElement("span",{className:"act-num"},a.n[lang]),/*#__PURE__*/React.createElement("div",{className:"act-photo-m"},/*#__PURE__*/React.createElement("button",{className:"room-photo act-photo-btn",onClick:()=>onOpen(i),"aria-label":L.viewDetail+' '+a.title},/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",shape:"square",ratio:"16 / 9",label:a.n.zh+' · 舞台照 · 待替換',style:{borderRadius:'var(--radius-sm)'}}),/*#__PURE__*/React.createElement("span",{className:"room-photo-cta is-th"},L.viewDetail,/*#__PURE__*/React.createElement(Icon,{name:"plus",size:14})))),/*#__PURE__*/React.createElement(NS.Playbill,{year:a.year,title:a.title,rows:[{k:L.team,v:a.team[lang]},{k:L.role,v:a.role[lang]}]}));}function ActDetail({a,next,lang,onClose,onNext}){const L=window.COPY[lang];const NS=window.NS;const T=L.thd;const[on,setOn]=useState(false);const box=useRef(null);useEffect(()=>{const t0=setTimeout(()=>setOn(true),20);const k=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';clearTimeout(t0);};},[]);useEffect(()=>{if(box.current)box.current.scrollTop=0;},[a.id]);const cols=[[T.origin,T.photoOrigin],[T.production,T.photoProd],[T.performance,T.photoPerf]];return/*#__PURE__*/React.createElement("div",{ref:box,className:"detail detail-th",role:"dialog","aria-modal":"true","aria-label":a.title,style:{opacity:on?1:0}},/*#__PURE__*/React.createElement("div",{className:"detail-body wrap"},/*#__PURE__*/React.createElement("button",{className:"detail-close",onClick:onClose},/*#__PURE__*/React.createElement(Icon,{name:"arrow-left",size:18}),T.back),/*#__PURE__*/React.createElement("span",{className:"detail-num"},a.n[lang],"\u30FB",a.year),/*#__PURE__*/React.createElement("h2",null,a.title),/*#__PURE__*/React.createElement("p",{className:"detail-meta"},L.team,"\uFF1A",a.team[lang],"\u3000",T.venue,"\uFF1A",T.tbc,"\u3000",L.role,"\uFF1A",a.role[lang]),/*#__PURE__*/React.createElement("div",{className:"detail-hero"},/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",ratio:"16 / 9",shape:"square",label:a.n.zh+' · 主視覺 · 待替換',style:{borderRadius:'var(--radius-sm)'}})),/*#__PURE__*/React.createElement("div",{className:"detail-cols"},cols.map(([h,ph])=>/*#__PURE__*/React.createElement("div",{key:h,className:"thd-col"},/*#__PURE__*/React.createElement("h3",null,h),/*#__PURE__*/React.createElement("p",null,L.placeholder),/*#__PURE__*/React.createElement(NS.PhotoFrame,{tone:"night",ratio:"4 / 3",label:ph+' · 待替換'})))),/*#__PURE__*/React.createElement("section",{className:"thd-cast","aria-label":T.cast},/*#__PURE__*/React.createElement("h3",null,T.cast),/*#__PURE__*/React.createElement("dl",null,T.castRoles.map((r,n)=>/*#__PURE__*/React.createElement("div",{key:n},/*#__PURE__*/React.createElement("dt",null,r),/*#__PURE__*/React.createElement("span",{"aria-hidden":"true"}),/*#__PURE__*/React.createElement("dd",null,n===0?'NENEKO':T.tbc))))),/*#__PURE__*/React.createElement("button",{className:"thd-next",onClick:onNext},/*#__PURE__*/React.createElement("span",null,/*#__PURE__*/React.createElement("small",null,T.next),next.n[lang],"\u3000",next.title),/*#__PURE__*/React.createElement(Icon,{name:"arrow-right",size:18}))));}function BowM({lang}){const L=window.COPY[lang];const NS=window.NS;const reduced=useReduced();const ref=useRef(null);const v=useInView(ref,{threshold:.45,once:true});return/*#__PURE__*/React.createElement("section",{ref:ref,className:'bow-m bow-rise'+(v?' is-up':''),id:"bow","data-screen-label":"Theatre curtain call"},/*#__PURE__*/React.createElement("div",{className:"bow-stage"},/*#__PURE__*/React.createElement("span",{className:"bow-label"},L.curtainCall),/*#__PURE__*/React.createElement("h2",null,L.bowTitle),/*#__PURE__*/React.createElement("p",null,L.bowSub)),/*#__PURE__*/React.createElement(NS.Curtain,{open:reduced?0:v?0:1,valance:false,duration:reduced?undefined:1400,style:{top:22,zIndex:1}}),/*#__PURE__*/React.createElement("div",{className:"th-valance bow-valance","aria-hidden":"true"}));}function Theatre({lang}){const L=window.COPY[lang];const NS=window.NS;const acts=window.ACTS;const compact=useCompact();const narrow=useMedia('(max-width: 1099px)');const reduced=useReduced();const[cur,setCur]=useState(null);const[detail,setDetail]=useState(null);const scrolling=useScrolling();const[inDesk,setInDesk]=useState(false);useEffect(()=>{const el=document.getElementById('consult');if(!el)return;const io=new IntersectionObserver(([e])=>setInDesk(e.isIntersecting),{threshold:0});io.observe(el);return()=>io.disconnect();},[]);useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setCur(e.target.id==='bow'?'bow':e.target.id.replace('act-',''));}),{threshold:.5});document.querySelectorAll('.act-m, #bow').forEach(el=>io.observe(el));return()=>io.disconnect();},[]);const navActs=[...acts.map(a=>({id:a.id,label:a.n[lang],title:a.title})),{id:'bow',label:L.curtainCall,title:'20% 實驗劇坊'}];const jump=id=>scrollToId(id==='bow'?'bow':'act-'+id);return/*#__PURE__*/React.createElement("main",{className:"theatre th-m"},/*#__PURE__*/React.createElement(TicketM,{lang:lang,reduced:reduced}),/*#__PURE__*/React.createElement("section",{className:"acts-m","data-screen-label":"Theatre acts"},/*#__PURE__*/React.createElement(Reveal,{className:"overture-beam","aria-hidden":"false"},/*#__PURE__*/React.createElement("div",{className:"beam","aria-hidden":"true"}),/*#__PURE__*/React.createElement("p",{className:"overture-m"},L.overture)),acts.map((a,i)=>/*#__PURE__*/React.createElement(ActM,{key:a.id,a:a,i:i,lang:lang,onOpen:setDetail}))),/*#__PURE__*/React.createElement(BowM,{lang:lang}),/*#__PURE__*/React.createElement("section",{className:"lobby wrap","data-screen-label":"Theatre lobby"},/*#__PURE__*/React.createElement("span",{className:"label"},"Lobby"),/*#__PURE__*/React.createElement("h2",null,L.lobby)),/*#__PURE__*/React.createElement(ConsultDesk,{tone:"theatre",lang:lang}),/*#__PURE__*/React.createElement("div",{className:'program-dock'+(narrow?' is-compact':'')+(compact&&(scrolling||inDesk)?' is-hidden':'')},/*#__PURE__*/React.createElement(NS.ProgramNav,{acts:navActs,current:cur,onJump:jump,title:L.program,collapsible:narrow,defaultOpen:!narrow})),detail!=null&&/*#__PURE__*/React.createElement(ActDetail,{a:acts[detail],next:acts[(detail+1)%acts.length],lang:lang,onClose:()=>setDetail(null),onNext:()=>setDetail((detail+1)%acts.length)}));}function ThHeader({lang,onLang,onConsult,onBrand,light,ex}){const L=window.COPY[lang];const NS=window.NS;return/*#__PURE__*/React.createElement("header",{className:'th-header'+(light?' is-light':'')+(ex?' is-ex':'')},/*#__PURE__*/React.createElement("button",{className:"thh-brand",onClick:onBrand},"NENEKO"),/*#__PURE__*/React.createElement("div",{className:"thh-row"},/*#__PURE__*/React.createElement(NS.LangSwitch,{value:lang,onChange:onLang,dark:!light&&!ex}),/*#__PURE__*/React.createElement("button",{className:"thh-consult",onClick:onConsult},L.consult)));}window.Theatre=Theatre;window.ThHeader=ThHeader;})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/Theatre.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/hooks.jsx
try{(()=>{const{useState,useEffect,useRef,useCallback,useMemo}=React;const ICON_BASE=(window.__ASSETS||'../../assets')+'/icons/';function useMedia(q){const[m,setM]=useState(()=>window.matchMedia(q).matches);useEffect(()=>{const mq=window.matchMedia(q);const f=()=>setM(mq.matches);mq.addEventListener('change',f);return()=>mq.removeEventListener('change',f);},[q]);return m;}const useReduced=()=>useMedia('(prefers-reduced-motion: reduce)');const useCompact=()=>useMedia('(max-width: 767px)');const FORCE_TOUCH=/[?&]touch=1/.test(location.search);const useTouch=()=>useMedia('(hover: none)')||FORCE_TOUCH;const clamp01=v=>Math.max(0,Math.min(1,v));function useProgress(ref){const[p,setP]=useState(0);useEffect(()=>{let raf=0;const tick=()=>{raf=0;const el=ref.current;if(!el)return;const ov=window.__pov&&Object.keys(window.__pov).find(s=>el.matches(s));if(ov)return setP(window.__pov[ov]);const r=el.getBoundingClientRect();const span=r.height-window.innerHeight;setP(span>0?clamp01(-r.top/span):r.top<0?1:0);};const on=()=>tick();tick();window.addEventListener('scroll',on,{passive:true});window.addEventListener('nh-pov',on);window.addEventListener('resize',on);return()=>{window.removeEventListener('nh-pov',on);window.removeEventListener('scroll',on);window.removeEventListener('resize',on);cancelAnimationFrame(raf);};},[]);return p;}function useInView(ref,{threshold=.35,once=false}={}){const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);if(once)io.disconnect();}else if(!once)setV(false);},{threshold});io.observe(el);return()=>io.disconnect();},[]);return v;}const PUNCT=/^[，。、！？：；」』）,.!?:;)]$/;function RevealText({text,show,stagger=45,className,style}){const chars=[];Array.from(text).forEach(c=>{if(PUNCT.test(c)&&chars.length)chars[chars.length-1]+=c;else chars.push(c);});return/*#__PURE__*/React.createElement("span",{className:className,style:style,"aria-label":text},chars.map((c,i)=>/*#__PURE__*/React.createElement("span",{key:i,"aria-hidden":"true",style:{display:'inline-block',whiteSpace:'pre',opacity:show?1:0,transform:show?'none':'translateY(.35em)',transition:'opacity 420ms var(--ease-out) '+(show?i*stagger:0)+'ms, transform 420ms var(--ease-out) '+(show?i*stagger:0)+'ms'}},c)));}const __icons={};function Icon({name,size=20,color='currentColor',style}){const[svg,setSvg]=useState(__icons[name]||'');useEffect(()=>{if(__icons[name]){setSvg(__icons[name]);return;}fetch(ICON_BASE+name+'.svg').then(r=>r.text()).then(t=>{__icons[name]=t.replace(/width="24"/,'width="100%"').replace(/height="24"/,'height="100%"');setSvg(__icons[name]);}).catch(()=>{});},[name]);return/*#__PURE__*/React.createElement("span",{"aria-hidden":"true",style:{display:'inline-flex',width:size,height:size,flexShrink:0,color,...style},dangerouslySetInnerHTML:{__html:svg}});}function scrollToId(id,smooth=true){const el=document.getElementById(id);if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-10,behavior:smooth&&!reduce?'smooth':'auto'});}function SwipeDeck({index,onChange,count=2,labels=[],dark=false,className='',children}){const reduced=useReduced();const s=useRef(null);const go=i=>onChange((i+count)%count);const ts=e=>{const t=e.touches[0];s.current={x:t.clientX,y:t.clientY,lock:null};};const tm=e=>{const o=s.current;if(!o)return;const t=e.touches[0];const dx=t.clientX-o.x,dy=t.clientY-o.y;if(o.lock==null&&(Math.abs(dx)>10||Math.abs(dy)>10))o.lock=Math.abs(dx)>Math.abs(dy)*1.4?'x':'y';};const te=e=>{const o=s.current;s.current=null;if(!o||o.lock!=='x')return;const dx=e.changedTouches[0].clientX-o.x;if(Math.abs(dx)>36)go(index+(dx<0?1:-1));};const kids=React.Children.toArray(children);return/*#__PURE__*/React.createElement("div",{className:'deck '+(dark?'is-dark ':'')+className,onTouchStart:ts,onTouchMove:tm,onTouchEnd:te,onTouchCancel:()=>{s.current=null;}},/*#__PURE__*/React.createElement("div",{className:"deck-view"},/*#__PURE__*/React.createElement("div",{className:"deck-track",style:{transform:'translateX('+-index*100+'%)',transition:reduced?'none':undefined}},kids.map((c,i)=>/*#__PURE__*/React.createElement("div",{className:"deck-slide",key:i,"aria-hidden":i!==index?'true':undefined},c)))),/*#__PURE__*/React.createElement("button",{className:"deck-arrow prev","aria-label":labels[(index-1+count)%count]||'Previous',onClick:()=>go(index-1)},/*#__PURE__*/React.createElement(Icon,{name:"chevron-left",size:22})),/*#__PURE__*/React.createElement("button",{className:"deck-arrow next","aria-label":labels[(index+1)%count]||'Next',onClick:()=>go(index+1)},/*#__PURE__*/React.createElement(Icon,{name:"chevron-right",size:22})),/*#__PURE__*/React.createElement("div",{className:"deck-dots"},kids.map((_,i)=>/*#__PURE__*/React.createElement("button",{key:i,className:'deck-dot'+(i===index?' on':''),"aria-label":labels[i]||String(i+1),"aria-current":i===index?'true':undefined,onClick:()=>onChange(i)},/*#__PURE__*/React.createElement("i",null)))));}function useScrolling(ms=450){const[s,setS]=useState(false);useEffect(()=>{let t=0;const f=()=>{setS(true);clearTimeout(t);t=setTimeout(()=>setS(false),ms);};window.addEventListener('scroll',f,{passive:true});return()=>{window.removeEventListener('scroll',f);clearTimeout(t);};},[]);return s;}function Reveal({as='div',className='',children,...rest}){const ref=useRef(null);const v=useInView(ref,{threshold:.2,once:true});return React.createElement(as,{ref,className:'rv '+(v?'is-in ':'')+className,...rest},children);}Object.assign(window,{useScrolling,Reveal,SwipeDeck,useMedia,useReduced,useCompact,useTouch,useProgress,useInView,RevealText,Icon,scrollToId,clamp01});})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/hooks.jsx",error:String(e&&e.message||e)});}// ui_kits/portfolio/i18n.js
try{(()=>{window.COPY={zh:{consult:'相談',skip:'略過',replay:'重播飛行路線',intro:[['LEEDS 2018','英國里茲大學 文化創意產業碩士'],['TAIPEI 2019','禾谷創意・啟雲科技・獨立製作'],['MELBOURNE 2024','墨爾本'],['OSAKA 2025','現在，在大阪']],tagline:'展演之間',byline:'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',exLine:'把知識，變成可以走進去的體驗。',thLine:'我負責讓幕順利拉開。',exTag:'今天去看展',thTag:'今天去看戲',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'將滑鼠移到建築上',hintTap:'點一下建築切換天色，再點一次進入',aboutEyebrow:'About',aboutTitle:'關於我',since:'© \'16 - 2026',about:['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。','研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],csNote:'初次相談 30 分鐘免費｜中文・日本語・English',exQ:'和我一起蓋一座展',thQ:'和我一起做一齣戲',fromPrice:'NT$ ___ 起',poster:'本日公演',roomEx:'帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',roomTh:'場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',cardRole:'獨立製作人',cv:'Download CV',routeTitle:'飛行路線',partnersEyebrow:'Worked with',partnersTitle:'合作單位',partnersNote:'名單佔位，之後替換為正式名稱與標誌',ctaEx:'前往展覽相談室',ctaTh:'前往劇場相談室',exWall:'展之間\n展示與體驗設計\n合作案例',exStatement:'策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',exPeriod:'展期：2019 — 現在',scrollHint:'往下捲動，走進展廳',room:'展間',client:'委託單位',role:'我的角色',viewDetail:'查看詳情',back:'返回展廳',challenge:'挑戰',approach:'做法',result:'成果',placeholder:'內容佔位，之後替換。',floor:'展場平面圖',entrance:'入口',exit:'出口 EXIT',thTicket:'演之間｜劇場合作案例',ticketSub:'Collaborations in Theatre since 2016',admit:'NENEKO\'S PROFILE',stub:'もぎり',tearHint:'往下捲動，撕下半券',tearHintM:'輕觸或往下捲動，撕下半券',openDesk:'點開相談室',thd:{back:'回到觀眾席',venue:'城市與場地',tbc:'待替換',origin:'緣起',production:'製作',performance:'演出',photoOrigin:'排練／幕後',photoProd:'演出現場',photoPerf:'觀眾／謝幕',cast:'演職員表',castRoles:['製作人','導演','編劇','舞台設計','燈光設計','演員'],next:'下一幕'},overture:'開演',team:'團隊',program:'節目單',curtainCall:'謝幕',bowTitle:'20% 實驗劇坊 行政總監',bowSub:'2025 臺中市傑出演藝團隊',lobby:'劇場大廳',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'售票口',deskThSub:'BOX OFFICE',norenSub:'滑過或點擊進入',services:'服務項目與費用',priceNote:'實際費用依規模與時程報價',process:'合作流程',steps:['相談','提案與報價','簽約','執行'],reviews:'客戶好評',reviewEx:'展覽',reviewTh:'劇場',reviewAll:'全部',teammate:'你在找隊友嗎？\n先聊聊吧！',hintSwipe:'左右滑動，切換白天的展場與夜晚的劇場',foot:{consult:'服務相談',thWorks:'劇場作品',exWorks:'展覽作品',home:'首頁',top:'回到街上',about:'關於我',partners:'合作單位',ex:'展覽',galleries:'展廳',th:'劇場',program:'節目單',contact:'聯絡方式'},pending:'待替換',reviewQuote:'推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',reviewName:'姓名',reviewRole:'職稱',reviewOrg:'單位',contact:'聯絡',book:'預約 30 分鐘免費相談',reply:'2 個工作天內回覆｜中文・日本語・English',form:{name:'姓名',org:'單位',type:'類型',types:['展場','劇場','其他'],budget:'預算區間',budgets:['未定','NT$ 5 萬以下','NT$ 5–20 萬','NT$ 20–50 萬','NT$ 50 萬以上'],timeline:'時程',timelineHint:'例：2027 年春季開幕',message:'說明',submit:'送出',sent:'已送出，2 個工作天內回覆。'},exServices:[['企劃健檢','展覽或體驗企劃的諮詢與建議','起／次'],['展覽企劃與體驗設計','研究 → 展示敘事 → 體驗設計','起'],['專案統籌','跨域團隊、時程預算、落地執行',null]],thServices:[['計畫撰寫','補助與國際交流計畫','起'],['日本在地協調','場地、技術、行政、翻譯對接','起／日'],['台日巡演製作','整體製作統籌',null]],quote:'依規模報價',backHome:'回到街上'},ja:{consult:'相談',skip:'スキップ',replay:'飛行ルートを再生',intro:[['LEEDS 2018','英国リーズ大学 文化・クリエイティブ産業 修士'],['TAIPEI 2019','禾谷創意・啟雲科技・独立制作'],['MELBOURNE 2024','メルボルン'],['OSAKA 2025','現在、大阪にて']],tagline:'展演ノ間',byline:'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',exLine:'知識を、歩いて巡れる体験に。',thLine:'幕が無事に上がるまで、すべてを整える。',exTag:'今日は展示へ',thTag:'今日は芝居へ',exSign:['展示','Exhibition'],thSign:['劇場','Theatre'],hintHover:'建物にカーソルを合わせてください',hintTap:'建物をタップで空が変わり、もう一度で入れます',aboutEyebrow:'About',aboutTitle:'わたしについて',since:'© \'16 - 2026',about:['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。','産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],csNote:'初回相談30分無料｜中文・日本語・English',exQ:'いっしょに展示をつくろう',thQ:'いっしょに芝居をつくろう',fromPrice:'NT$ ___〜',poster:'本日公演',roomEx:'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',roomTh:'会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',cardRole:'独立プロデューサー',cv:'Download CV',routeTitle:'フライトルート',partnersEyebrow:'Worked with',partnersTitle:'協働先',partnersNote:'仮のリストです。正式名称とロゴに差し替えます',ctaEx:'展示の相談室へ',ctaTh:'劇場の相談室へ',exWall:'展ノ間\n展示・体験デザインの協働',exStatement:'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',exPeriod:'会期：2019 — 現在',scrollHint:'スクロールして展示室へ',room:'展示室',client:'委託元',role:'担当',viewDetail:'詳しく見る',back:'展示室に戻る',challenge:'課題',approach:'アプローチ',result:'成果',placeholder:'仮のテキストです。後ほど差し替えます。',floor:'フロアマップ',entrance:'入口',exit:'出口 EXIT',thTicket:'演ノ間｜劇場コラボレーション',ticketSub:'Collaborations in Theatre since 2016',admit:'NENEKO\'S PROFILE',stub:'もぎり',tearHint:'スクロールで半券をもぎる',tearHintM:'タップかスクロールで半券をもぎる',openDesk:'相談室をひらく',thd:{back:'客席に戻る',venue:'都市・会場',tbc:'差し替え予定',origin:'はじまり',production:'制作',performance:'上演',photoOrigin:'稽古・舞台裏',photoProd:'上演風景',photoPerf:'観客・カーテンコール',cast:'キャスト・スタッフ',castRoles:['プロデューサー','演出','脚本','舞台美術','照明','出演'],next:'次の幕'},overture:'開演',team:'カンパニー',program:'プログラム',curtainCall:'カーテンコール',bowTitle:'20% 實驗劇坊 制作総監督',bowSub:'2025 台中市優秀舞台芸術団体',lobby:'劇場ロビー',deskEx:'受付',deskExSub:'RECEPTION',deskTh:'チケット売り場',deskThSub:'BOX OFFICE',norenSub:'カーソルを合わせるか、タップして入る',services:'サービスと料金',priceNote:'実際の費用は規模とスケジュールに応じてお見積りします',process:'ご依頼の流れ',steps:['ご相談','ご提案・お見積り','ご契約','実施'],reviews:'お客様の声',reviewEx:'展示',reviewTh:'劇場',reviewAll:'すべて',teammate:'チームメイトをお探しですか？\nまずはお話ししましょう！',hintSwipe:'左右にスワイプして、昼の展示と夜の劇場を切り替え',foot:{consult:'ご相談',thWorks:'劇場作品',exWorks:'展示作品',home:'ホーム',top:'通りへ',about:'わたしについて',partners:'協働先',ex:'展示',galleries:'展示室',th:'劇場',program:'プログラム',contact:'連絡先'},pending:'差し替え予定',reviewQuote:'推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',reviewName:'氏名',reviewRole:'役職',reviewOrg:'所属',contact:'お問い合わせ',book:'30分の無料相談を予約',reply:'2営業日以内にご返信します｜中文・日本語・English',form:{name:'お名前',org:'ご所属',type:'種別',types:['展示','劇場','その他'],budget:'ご予算',budgets:['未定','50万円以下','50–100万円','100–250万円','250万円以上'],timeline:'スケジュール',timelineHint:'例：2027年春オープン',message:'ご相談内容',submit:'送信',sent:'送信しました。2営業日以内にご返信します。'},exServices:[['企画ヘルスチェック','展示・体験企画へのアドバイス','〜／回'],['展示企画・体験デザイン','リサーチ → 展示ナラティブ → 体験設計','〜'],['プロジェクト統括','分野横断チーム、スケジュール・予算、実施まで',null]],thServices:[['申請書作成','助成金・国際交流プログラム','〜'],['日本での現地コーディネート','会場・技術・制作・通訳の手配','〜／日'],['日台ツアー制作','制作全体の統括',null]],quote:'規模に応じてお見積り',backHome:'通りに戻る'},en:{consult:'Consult',skip:'Skip',replay:'Replay the flight',intro:[['LEEDS 2018','MA Creative and Cultural Industries, University of Leeds'],['TAIPEI 2019','禾谷創意・啟雲科技・Independent producing'],['MELBOURNE 2024','Melbourne'],['OSAKA 2025','Now based in Osaka']],tagline:'Intervals：Between galleries & shows',byline:'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',exLine:'Turning knowledge into experiences you can walk into.',thLine:'Everything it takes for the curtain to rise.',exTag:'Gallery day',thTag:'Theatre night',exSign:['展覽','Exhibition'],thSign:['劇場','Theatre'],hintHover:'Hover over a building',hintTap:'Tap a building to change the sky, tap again to enter',aboutEyebrow:'About',aboutTitle:'About me',since:'© \'16 - 2026',about:['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.','I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],csNote:'First 30-minute consult free｜中文・日本語・English',exQ:'Let’s build an exhibition together',thQ:'Let’s make a show together',fromPrice:'from NT$ ___',poster:'Tonight',roomEx:'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',roomTh:'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',cardRole:'Independent Producer',cv:'Download CV',routeTitle:'Flight path',partnersEyebrow:'Worked with',partnersTitle:'Partners',partnersNote:'Placeholder list, to be replaced with official names and logos',ctaEx:'To the exhibition consult room',ctaTh:'To the theatre consult room',exWall:'Between exhibitions\nExhibition & experience design collaborations',exStatement:'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',exPeriod:'On view: 2019 — present',scrollHint:'Scroll to enter the galleries',room:'Room',client:'Client',role:'My role',viewDetail:'View details',back:'Back to the gallery',challenge:'Challenge',approach:'Approach',result:'Outcome',placeholder:'Placeholder text, to be replaced.',floor:'Floor plan',entrance:'Entrance',exit:'EXIT',thTicket:'Between Performances｜Theatre Collaborations',ticketSub:'Collaborations in Theatre since 2016',admit:'NENEKO\'S PROFILE',stub:'Mogiri',tearHint:'Scroll to tear the stub',tearHintM:'Tap or scroll to tear the stub',openDesk:'Open the consult room',thd:{back:'Back to the seats',venue:'City & venue',tbc:'TBC',origin:'Origin',production:'Production',performance:'Performance',photoOrigin:'Rehearsal / backstage',photoProd:'On stage',photoPerf:'Audience / curtain call',cast:'Cast & crew',castRoles:['Producer','Director','Playwright','Set design','Lighting design','Cast'],next:'Next act'},overture:'Curtain up',team:'Company',program:'Programme',curtainCall:'Curtain call',bowTitle:'Managing Director, 20% Theatre Lab',bowSub:'2025 Taichung Outstanding Performing Arts Group',lobby:'Theatre lobby',deskEx:'Reception',deskExSub:'受付',deskTh:'Box office',deskThSub:'售票口',norenSub:'Hover or tap to enter',services:'Services & fees',priceNote:'Final fees are quoted by scope and schedule',process:'How we work',steps:['Consult','Proposal & quote','Contract','Delivery'],reviews:'Kind words',reviewEx:'Exhibition',reviewTh:'Theatre',reviewAll:'All',teammate:'Looking for a teammate?\nLet’s talk first!',hintSwipe:'Swipe to switch between the daytime gallery and the night theatre',foot:{consult:'Consult',thWorks:'Theatre works',exWorks:'Exhibition works',home:'Home',top:'The street',about:'About me',partners:'Partners',ex:'Exhibition',galleries:'Galleries',th:'Theatre',program:'Programme',contact:'Contact'},pending:'Placeholder',reviewQuote:'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',reviewName:'Name',reviewRole:'Title',reviewOrg:'Organisation',contact:'Contact',book:'Book a free 30-minute consult',reply:'Replies within 2 business days｜中文・日本語・English',form:{name:'Name',org:'Organisation',type:'Type',types:['Exhibition','Theatre','Other'],budget:'Budget',budgets:['Not sure yet','Under NT$50k','NT$50–200k','NT$200–500k','Over NT$500k'],timeline:'Timeline',timelineHint:'e.g. opening spring 2027',message:'Details',submit:'Send',sent:'Sent. I’ll reply within 2 business days.'},exServices:[['Concept check-up','Advice on an exhibition or experience plan','from / session'],['Exhibition & experience design','Research → narrative → experience design','from'],['Project management','Cross-disciplinary teams, schedule, budget, delivery',null]],thServices:[['Grant writing','Funding and international exchange proposals','from'],['Local coordination in Japan','Venues, tech, admin, interpreting','from / day'],['Taiwan–Japan touring','Full production management',null]],quote:'Quoted by scope',backHome:'Back to the street'}};window.PARTNERS=['禾谷創意','宜東文化','工研院 ITRI','Meta','文策院TAICCA','鮮乳坊','KidZania Taipei','Amway','20% 實驗劇坊','真雲林閣掌中劇團'];window.ROUTE=[['2018','Leeds'],['2019','Taipei'],['2024','Melbourne'],['2025','Osaka']];const R=(zh,ja,en)=>({zh,ja,en});window.ROOMS=[{id:'r01',n:'01',year:'2026',title:'司法博物館《司法的中挫與再生》',client:R('待補','未記入','TBC'),role:R('體驗設計、授權管理','体験デザイン・ライセンス管理','Experience design, licensing')},{id:'r02',n:'02',year:'2025',title:'KidZania「鮮乳研究中心」',client:R('鮮乳坊','鮮乳坊','鮮乳坊 (Fresh Milk Co.)'),role:R('體驗設計、專案 PM','体験デザイン・PM','Experience design, Project manager')},{id:'r03',n:'03',year:'2023',title:'工研院「史料文物館」常設展',client:R('工研院','ITRI 工業技術研究院','ITRI'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r04',n:'04',year:'2022',title:'桃園「物我共容—工藝特展」',client:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'r05',n:'05',year:'2022',title:'Meta × 文策院《藝術再想像》',client:R('Meta × 文策院','Meta × 文策院','Meta × TAICCA'),role:R('AR 技術團隊 PM','ARテクニカルチームPM','AR tech team PM')}];window.ACTS=[{id:'act1',n:R('第一幕','第一幕','Act I'),year:'2026',title:'靜岡街頭劇場節《市場に行こう！》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('製作人','プロデューサー','Producer')},{id:'act2',n:R('第二幕','第二幕','Act II'),year:'2025',title:'老派日常 2.0《貓眼所見的城市》',team:R('20% 實驗劇坊','20% 實驗劇坊','20% Theatre Lab'),role:R('藝術行政','アートマネジメント','Arts administration')},{id:'act3',n:R('第三幕','第三幕','Act III'),year:'2024',title:'彰化「半線說故事」臺語說故事劇場巡演',team:R('待補','未記入','TBC'),role:R('專案 PM','プロジェクトPM','Project manager')},{id:'act4',n:R('第四幕','第四幕','Act IV'),year:'2023',title:'安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',team:R('待補','未記入','TBC'),role:R('製作人','プロデューサー','Producer')}];})();}catch(e){__ds_ns.__errors.push({path:"ui_kits/portfolio/i18n.js",error:String(e&&e.message||e)});}__ds_ns.ContactForm=__ds_scope.ContactForm;__ds_ns.CurrencyToggle=__ds_scope.CurrencyToggle;__ds_ns.LetterCard=__ds_scope.LetterCard;__ds_ns.Noren=__ds_scope.Noren;__ds_ns.PriceCard=__ds_scope.PriceCard;__ds_ns.ProcessSteps=__ds_scope.ProcessSteps;__ds_ns.Button=__ds_scope.Button;__ds_ns.LANGS=__ds_scope.LANGS;__ds_ns.LangSwitch=__ds_scope.LangSwitch;__ds_ns.PhotoFrame=__ds_scope.PhotoFrame;__ds_ns.SectionHeading=__ds_scope.SectionHeading;__ds_ns.SiteHeader=__ds_scope.SiteHeader;__ds_ns.Stamp=__ds_scope.Stamp;__ds_ns.FloorMap=__ds_scope.FloorMap;__ds_ns.Plaque=__ds_scope.Plaque;__ds_ns.Curtain=__ds_scope.Curtain;__ds_ns.Playbill=__ds_scope.Playbill;__ds_ns.ProgramNav=__ds_scope.ProgramNav;__ds_ns.Ticket=__ds_scope.Ticket;})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "neneko-site/js/components.js", error: String((e && e.message) || e) }); }

// neneko-site/js/i18n.js
try { (() => {
window.COPY = {
  zh: {
    consult: '相談',
    skip: '略過',
    replay: '重播飛行路線',
    intro: [['LEEDS 2018', '英國里茲大學 文化創意產業碩士'], ['TAIPEI 2019', '禾谷創意・啟雲科技・獨立製作'], ['MELBOURNE 2024', '墨爾本'], ['OSAKA 2025', '現在，在大阪']],
    tagline: '展演之間',
    byline: 'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',
    exLine: '把知識，變成可以走進去的體驗。',
    thLine: '我負責讓幕順利拉開。',
    exTag: '今天去看展',
    thTag: '今天去看戲',
    exSign: ['展覽', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: '將滑鼠移到建築上',
    hintTap: '點一下建築切換天色，再點一次進入',
    aboutEyebrow: 'About',
    aboutTitle: '關於我',
    since: '© \'16 - 2026',
    about: ['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。', '研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],
    csNote: '初次相談 30 分鐘免費｜中文・日本語・English',
    exQ: '和我一起蓋一座展',
    thQ: '和我一起做一齣戲',
    fromPrice: 'NT$ ___ 起',
    poster: '本日公演',
    roomEx: '帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',
    roomTh: '場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',
    cardRole: '獨立製作人',
    cv: 'Download CV',
    routeTitle: '飛行路線',
    partnersEyebrow: 'Worked with',
    partnersTitle: '合作單位',
    partnersNote: '名單佔位，之後替換為正式名稱與標誌',
    ctaEx: '前往展覽相談室',
    ctaTh: '前往劇場相談室',
    exWall: '展之間\n展示與體驗設計\n合作案例',
    exStatement: '策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',
    exPeriod: '展期：2019 — 現在',
    scrollHint: '往下捲動，走進展廳',
    room: '展間',
    client: '委託單位',
    role: '我的角色',
    viewDetail: '查看詳情',
    back: '返回展廳',
    challenge: '挑戰',
    approach: '做法',
    result: '成果',
    placeholder: '內容佔位，之後替換。',
    floor: '展場平面圖',
    entrance: '入口',
    exit: '出口 EXIT',
    thTicket: '演之間｜劇場合作案例',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'もぎり',
    tearHint: '往下捲動，撕下半券',
    tearHintM: '輕觸或往下捲動，撕下半券',
    openDesk: '點開相談室',
    thd: {
      back: '回到觀眾席',
      venue: '城市與場地',
      tbc: '待替換',
      origin: '緣起',
      production: '製作',
      performance: '演出',
      photoOrigin: '排練／幕後',
      photoProd: '演出現場',
      photoPerf: '觀眾／謝幕',
      cast: '演職員表',
      castRoles: ['製作人', '導演', '編劇', '舞台設計', '燈光設計', '演員'],
      next: '下一幕'
    },
    overture: '開演',
    team: '團隊',
    program: '節目單',
    curtainCall: '謝幕',
    bowTitle: '20% 實驗劇坊 行政總監',
    bowSub: '2025 臺中市傑出演藝團隊',
    lobby: '劇場大廳',
    deskEx: '受付',
    deskExSub: 'RECEPTION',
    deskTh: '售票口',
    deskThSub: 'BOX OFFICE',
    norenSub: '滑過或點擊進入',
    services: '服務項目與費用',
    priceNote: '實際費用依規模與時程報價',
    process: '合作流程',
    steps: ['相談', '提案與報價', '簽約', '執行'],
    reviews: '客戶好評',
    reviewEx: '展覽',
    reviewTh: '劇場',
    reviewAll: '全部',
    teammate: '你在找隊友嗎？\n先聊聊吧！',
    hintSwipe: '左右滑動，切換白天的展場與夜晚的劇場',
    foot: {
      consult: '服務相談',
      thWorks: '劇場作品',
      exWorks: '展覽作品',
      home: '首頁',
      top: '回到街上',
      about: '關於我',
      partners: '合作單位',
      ex: '展覽',
      galleries: '展廳',
      th: '劇場',
      program: '節目單',
      contact: '聯絡方式'
    },
    pending: '待替換',
    reviewQuote: '推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',
    reviewName: '姓名',
    reviewRole: '職稱',
    reviewOrg: '單位',
    contact: '聯絡',
    book: '預約 30 分鐘免費相談',
    reply: '2 個工作天內回覆｜中文・日本語・English',
    form: {
      name: '姓名',
      org: '單位',
      type: '類型',
      types: ['展場', '劇場', '其他'],
      budget: '預算區間',
      budgets: ['未定', 'NT$ 5 萬以下', 'NT$ 5–20 萬', 'NT$ 20–50 萬', 'NT$ 50 萬以上'],
      timeline: '時程',
      timelineHint: '例：2027 年春季開幕',
      message: '說明',
      submit: '送出',
      sent: '已送出，2 個工作天內回覆。'
    },
    exServices: [['企劃健檢', '展覽或體驗企劃的諮詢與建議', '起／次'], ['展覽企劃與體驗設計', '研究 → 展示敘事 → 體驗設計', '起'], ['專案統籌', '跨域團隊、時程預算、落地執行', null]],
    thServices: [['計畫撰寫', '補助與國際交流計畫', '起'], ['日本在地協調', '場地、技術、行政、翻譯對接', '起／日'], ['台日巡演製作', '整體製作統籌', null]],
    quote: '依規模報價',
    backHome: '回到街上'
  },
  ja: {
    consult: '相談',
    skip: 'スキップ',
    replay: '飛行ルートを再生',
    intro: [['LEEDS 2018', '英国リーズ大学 文化・クリエイティブ産業 修士'], ['TAIPEI 2019', '禾谷創意・啟雲科技・独立制作'], ['MELBOURNE 2024', 'メルボルン'], ['OSAKA 2025', '現在、大阪にて']],
    tagline: '展演ノ間',
    byline: 'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',
    exLine: '知識を、歩いて巡れる体験に。',
    thLine: '幕が無事に上がるまで、すべてを整える。',
    exTag: '今日は展示へ',
    thTag: '今日は芝居へ',
    exSign: ['展示', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: '建物にカーソルを合わせてください',
    hintTap: '建物をタップで空が変わり、もう一度で入れます',
    aboutEyebrow: 'About',
    aboutTitle: 'わたしについて',
    since: '© \'16 - 2026',
    about: ['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。', '産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],
    csNote: '初回相談30分無料｜中文・日本語・English',
    exQ: 'いっしょに展示をつくろう',
    thQ: 'いっしょに芝居をつくろう',
    fromPrice: 'NT$ ___〜',
    poster: '本日公演',
    roomEx: 'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',
    roomTh: '会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',
    cardRole: '独立プロデューサー',
    cv: 'Download CV',
    routeTitle: 'フライトルート',
    partnersEyebrow: 'Worked with',
    partnersTitle: '協働先',
    partnersNote: '仮のリストです。正式名称とロゴに差し替えます',
    ctaEx: '展示の相談室へ',
    ctaTh: '劇場の相談室へ',
    exWall: '展ノ間\n展示・体験デザインの協働',
    exStatement: 'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',
    exPeriod: '会期：2019 — 現在',
    scrollHint: 'スクロールして展示室へ',
    room: '展示室',
    client: '委託元',
    role: '担当',
    viewDetail: '詳しく見る',
    back: '展示室に戻る',
    challenge: '課題',
    approach: 'アプローチ',
    result: '成果',
    placeholder: '仮のテキストです。後ほど差し替えます。',
    floor: 'フロアマップ',
    entrance: '入口',
    exit: '出口 EXIT',
    thTicket: '演ノ間｜劇場コラボレーション',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'もぎり',
    tearHint: 'スクロールで半券をもぎる',
    tearHintM: 'タップかスクロールで半券をもぎる',
    openDesk: '相談室をひらく',
    thd: {
      back: '客席に戻る',
      venue: '都市・会場',
      tbc: '差し替え予定',
      origin: 'はじまり',
      production: '制作',
      performance: '上演',
      photoOrigin: '稽古・舞台裏',
      photoProd: '上演風景',
      photoPerf: '観客・カーテンコール',
      cast: 'キャスト・スタッフ',
      castRoles: ['プロデューサー', '演出', '脚本', '舞台美術', '照明', '出演'],
      next: '次の幕'
    },
    overture: '開演',
    team: 'カンパニー',
    program: 'プログラム',
    curtainCall: 'カーテンコール',
    bowTitle: '20% 實驗劇坊 制作総監督',
    bowSub: '2025 台中市優秀舞台芸術団体',
    lobby: '劇場ロビー',
    deskEx: '受付',
    deskExSub: 'RECEPTION',
    deskTh: 'チケット売り場',
    deskThSub: 'BOX OFFICE',
    norenSub: 'カーソルを合わせるか、タップして入る',
    services: 'サービスと料金',
    priceNote: '実際の費用は規模とスケジュールに応じてお見積りします',
    process: 'ご依頼の流れ',
    steps: ['ご相談', 'ご提案・お見積り', 'ご契約', '実施'],
    reviews: 'お客様の声',
    reviewEx: '展示',
    reviewTh: '劇場',
    reviewAll: 'すべて',
    teammate: 'チームメイトをお探しですか？\nまずはお話ししましょう！',
    hintSwipe: '左右にスワイプして、昼の展示と夜の劇場を切り替え',
    foot: {
      consult: 'ご相談',
      thWorks: '劇場作品',
      exWorks: '展示作品',
      home: 'ホーム',
      top: '通りへ',
      about: 'わたしについて',
      partners: '協働先',
      ex: '展示',
      galleries: '展示室',
      th: '劇場',
      program: 'プログラム',
      contact: '連絡先'
    },
    pending: '差し替え予定',
    reviewQuote: '推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',
    reviewName: '氏名',
    reviewRole: '役職',
    reviewOrg: '所属',
    contact: 'お問い合わせ',
    book: '30分の無料相談を予約',
    reply: '2営業日以内にご返信します｜中文・日本語・English',
    form: {
      name: 'お名前',
      org: 'ご所属',
      type: '種別',
      types: ['展示', '劇場', 'その他'],
      budget: 'ご予算',
      budgets: ['未定', '50万円以下', '50–100万円', '100–250万円', '250万円以上'],
      timeline: 'スケジュール',
      timelineHint: '例：2027年春オープン',
      message: 'ご相談内容',
      submit: '送信',
      sent: '送信しました。2営業日以内にご返信します。'
    },
    exServices: [['企画ヘルスチェック', '展示・体験企画へのアドバイス', '〜／回'], ['展示企画・体験デザイン', 'リサーチ → 展示ナラティブ → 体験設計', '〜'], ['プロジェクト統括', '分野横断チーム、スケジュール・予算、実施まで', null]],
    thServices: [['申請書作成', '助成金・国際交流プログラム', '〜'], ['日本での現地コーディネート', '会場・技術・制作・通訳の手配', '〜／日'], ['日台ツアー制作', '制作全体の統括', null]],
    quote: '規模に応じてお見積り',
    backHome: '通りに戻る'
  },
  en: {
    consult: 'Consult',
    skip: 'Skip',
    replay: 'Replay the flight',
    intro: [['LEEDS 2018', 'MA Creative and Cultural Industries, University of Leeds'], ['TAIPEI 2019', '禾谷創意・啟雲科技・Independent producing'], ['MELBOURNE 2024', 'Melbourne'], ['OSAKA 2025', 'Now based in Osaka']],
    tagline: 'Intervals：Between galleries & shows',
    byline: 'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',
    exLine: 'Turning knowledge into experiences you can walk into.',
    thLine: 'Everything it takes for the curtain to rise.',
    exTag: 'Gallery day',
    thTag: 'Theatre night',
    exSign: ['展覽', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: 'Hover over a building',
    hintTap: 'Tap a building to change the sky, tap again to enter',
    aboutEyebrow: 'About',
    aboutTitle: 'About me',
    since: '© \'16 - 2026',
    about: ['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.', 'I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],
    csNote: 'First 30-minute consult free｜中文・日本語・English',
    exQ: 'Let’s build an exhibition together',
    thQ: 'Let’s make a show together',
    fromPrice: 'from NT$ ___',
    poster: 'Tonight',
    roomEx: 'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',
    roomTh: 'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',
    cardRole: 'Independent Producer',
    cv: 'Download CV',
    routeTitle: 'Flight path',
    partnersEyebrow: 'Worked with',
    partnersTitle: 'Partners',
    partnersNote: 'Placeholder list, to be replaced with official names and logos',
    ctaEx: 'To the exhibition consult room',
    ctaTh: 'To the theatre consult room',
    exWall: 'Between exhibitions\nExhibition & experience design collaborations',
    exStatement: 'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',
    exPeriod: 'On view: 2019 — present',
    scrollHint: 'Scroll to enter the galleries',
    room: 'Room',
    client: 'Client',
    role: 'My role',
    viewDetail: 'View details',
    back: 'Back to the gallery',
    challenge: 'Challenge',
    approach: 'Approach',
    result: 'Outcome',
    placeholder: 'Placeholder text, to be replaced.',
    floor: 'Floor plan',
    entrance: 'Entrance',
    exit: 'EXIT',
    thTicket: 'Between Performances｜Theatre Collaborations',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'Mogiri',
    tearHint: 'Scroll to tear the stub',
    tearHintM: 'Tap or scroll to tear the stub',
    openDesk: 'Open the consult room',
    thd: {
      back: 'Back to the seats',
      venue: 'City & venue',
      tbc: 'TBC',
      origin: 'Origin',
      production: 'Production',
      performance: 'Performance',
      photoOrigin: 'Rehearsal / backstage',
      photoProd: 'On stage',
      photoPerf: 'Audience / curtain call',
      cast: 'Cast & crew',
      castRoles: ['Producer', 'Director', 'Playwright', 'Set design', 'Lighting design', 'Cast'],
      next: 'Next act'
    },
    overture: 'Curtain up',
    team: 'Company',
    program: 'Programme',
    curtainCall: 'Curtain call',
    bowTitle: 'Managing Director, 20% Theatre Lab',
    bowSub: '2025 Taichung Outstanding Performing Arts Group',
    lobby: 'Theatre lobby',
    deskEx: 'Reception',
    deskExSub: '受付',
    deskTh: 'Box office',
    deskThSub: '售票口',
    norenSub: 'Hover or tap to enter',
    services: 'Services & fees',
    priceNote: 'Final fees are quoted by scope and schedule',
    process: 'How we work',
    steps: ['Consult', 'Proposal & quote', 'Contract', 'Delivery'],
    reviews: 'Kind words',
    reviewEx: 'Exhibition',
    reviewTh: 'Theatre',
    reviewAll: 'All',
    teammate: 'Looking for a teammate?\nLet’s talk first!',
    hintSwipe: 'Swipe to switch between the daytime gallery and the night theatre',
    foot: {
      consult: 'Consult',
      thWorks: 'Theatre works',
      exWorks: 'Exhibition works',
      home: 'Home',
      top: 'The street',
      about: 'About me',
      partners: 'Partners',
      ex: 'Exhibition',
      galleries: 'Galleries',
      th: 'Theatre',
      program: 'Programme',
      contact: 'Contact'
    },
    pending: 'Placeholder',
    reviewQuote: 'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',
    reviewName: 'Name',
    reviewRole: 'Title',
    reviewOrg: 'Organisation',
    contact: 'Contact',
    book: 'Book a free 30-minute consult',
    reply: 'Replies within 2 business days｜中文・日本語・English',
    form: {
      name: 'Name',
      org: 'Organisation',
      type: 'Type',
      types: ['Exhibition', 'Theatre', 'Other'],
      budget: 'Budget',
      budgets: ['Not sure yet', 'Under NT$50k', 'NT$50–200k', 'NT$200–500k', 'Over NT$500k'],
      timeline: 'Timeline',
      timelineHint: 'e.g. opening spring 2027',
      message: 'Details',
      submit: 'Send',
      sent: 'Sent. I’ll reply within 2 business days.'
    },
    exServices: [['Concept check-up', 'Advice on an exhibition or experience plan', 'from / session'], ['Exhibition & experience design', 'Research → narrative → experience design', 'from'], ['Project management', 'Cross-disciplinary teams, schedule, budget, delivery', null]],
    thServices: [['Grant writing', 'Funding and international exchange proposals', 'from'], ['Local coordination in Japan', 'Venues, tech, admin, interpreting', 'from / day'], ['Taiwan–Japan touring', 'Full production management', null]],
    quote: 'Quoted by scope',
    backHome: 'Back to the street'
  }
};
window.PARTNERS = ['禾谷創意', '宜東文化', '工研院 ITRI', 'Meta', '文策院TAICCA', '鮮乳坊', 'KidZania Taipei', 'Amway', '20% 實驗劇坊', '真雲林閣掌中劇團'];
window.ROUTE = [['2018', 'Leeds'], ['2019', 'Taipei'], ['2024', 'Melbourne'], ['2025', 'Osaka']];
const R = (zh, ja, en) => ({
  zh,
  ja,
  en
});
window.ROOMS = [{
  id: 'r01',
  n: '01',
  year: '2026',
  title: '司法博物館《司法的中挫與再生》',
  client: R('待補', '未記入', 'TBC'),
  role: R('體驗設計、授權管理', '体験デザイン・ライセンス管理', 'Experience design, licensing')
}, {
  id: 'r02',
  n: '02',
  year: '2025',
  title: 'KidZania「鮮乳研究中心」',
  client: R('鮮乳坊', '鮮乳坊', '鮮乳坊 (Fresh Milk Co.)'),
  role: R('體驗設計、專案 PM', '体験デザイン・PM', 'Experience design, Project manager')
}, {
  id: 'r03',
  n: '03',
  year: '2023',
  title: '工研院「史料文物館」常設展',
  client: R('工研院', 'ITRI 工業技術研究院', 'ITRI'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'r04',
  n: '04',
  year: '2022',
  title: '桃園「物我共容—工藝特展」',
  client: R('待補', '未記入', 'TBC'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'r05',
  n: '05',
  year: '2022',
  title: 'Meta × 文策院《藝術再想像》',
  client: R('Meta × 文策院', 'Meta × 文策院', 'Meta × TAICCA'),
  role: R('AR 技術團隊 PM', 'ARテクニカルチームPM', 'AR tech team PM')
}];
window.ACTS = [{
  id: 'act1',
  n: R('第一幕', '第一幕', 'Act I'),
  year: '2026',
  title: '靜岡街頭劇場節《市場に行こう！》',
  team: R('20% 實驗劇坊', '20% 實驗劇坊', '20% Theatre Lab'),
  role: R('製作人', 'プロデューサー', 'Producer')
}, {
  id: 'act2',
  n: R('第二幕', '第二幕', 'Act II'),
  year: '2025',
  title: '老派日常 2.0《貓眼所見的城市》',
  team: R('20% 實驗劇坊', '20% 實驗劇坊', '20% Theatre Lab'),
  role: R('藝術行政', 'アートマネジメント', 'Arts administration')
}, {
  id: 'act3',
  n: R('第三幕', '第三幕', 'Act III'),
  year: '2024',
  title: '彰化「半線說故事」臺語說故事劇場巡演',
  team: R('待補', '未記入', 'TBC'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'act4',
  n: R('第四幕', '第四幕', 'Act IV'),
  year: '2023',
  title: '安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',
  team: R('待補', '未記入', 'TBC'),
  role: R('製作人', 'プロデューサー', 'Producer')
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "neneko-site/js/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
function App() {
  const NS = window.NS;
  const pageFrom = init => {
    const h = location.hash.replace('#', '');
    if (init) return window.__START || 'home';
    return ['home', 'exhibition', 'theatre'].includes(h) ? h : window.__START || 'home';
  };
  const [page, setPage] = useState(() => pageFrom(true));
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
    const f = () => setPage(pageFrom());
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  useEffect(() => {
    const h = location.hash.slice(1);
    if (h && !['home', 'exhibition', 'theatre'].includes(h)) setTimeout(() => scrollToId(h, false), 700);
  }, []);
  const go = (p, anchor) => {
    setVeil(true);
    setTimeout(() => {
      history.replaceState(null, '', '#' + p);
      setPage(p);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setVeil(false);
        if (anchor) scrollToId(anchor, false);
      }, 60);
    }, 280);
  };
  const tone = page === 'exhibition' ? 'exhibit' : page === 'theatre' ? 'theatre' : 'ink';
  const consult = () => scrollToId(page === 'home' ? 'home-consult' : 'consult');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NS.SiteHeader, {
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
  }), page === 'home' && /*#__PURE__*/React.createElement(Home, {
    lang: lang,
    go: go
  }), page === 'exhibition' && /*#__PURE__*/React.createElement(Exhibition, {
    lang: lang
  }), page === 'theatre' && /*#__PURE__*/React.createElement(Theatre, {
    lang: lang
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    lang: lang,
    go: go,
    page: page
  }), /*#__PURE__*/React.createElement("div", {
    className: 'page-veil' + (veil ? ' on' : '') + (page === 'theatre' ? ' dark' : '')
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ConsultDesk.jsx
try { (() => {
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
  if (compact) return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    id: "consult",
    className: 'desk desk-m ' + (th ? 'desk-th' : 'desk-ex') + (open ? ' is-open' : ''),
    "data-screen-label": th ? 'Theatre consult (box office)' : 'Exhibition consult (reception)'
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-head wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "desk-plate"
  }, /*#__PURE__*/React.createElement("b", null, th ? L.deskTh : L.deskEx), /*#__PURE__*/React.createElement("small", null, th ? L.deskThSub : L.deskExSub))), /*#__PURE__*/React.createElement("div", {
    className: "desk-window wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-m-noren",
    "aria-hidden": open ? 'true' : undefined
  }, /*#__PURE__*/React.createElement(NorenKit, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    state: open ? 'open' : 'closed',
    onOpen: openM,
    sway: !reduced
  })), /*#__PURE__*/React.createElement("div", {
    className: "desk-m-intro"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "desk-m-title"
  }, th ? L.thQ : L.exQ), /*#__PURE__*/React.createElement("p", {
    className: "desk-m-desc"
  }, tx(th ? L.roomTh : L.roomEx)), /*#__PURE__*/React.createElement("p", {
    className: "desk-m-free"
  }, L.csNote.split('｜')[0]), !open && /*#__PURE__*/React.createElement("button", {
    className: 'desk-m-open ' + (th ? 'is-th' : 'is-ex'),
    onClick: openM,
    "aria-expanded": "false",
    "aria-controls": "consult-body"
  }, L.openDesk, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    id: "consult-body",
    ref: bodyRef,
    className: "desk-m-body",
    style: {
      height: open ? bh || 'auto' : 0,
      transition: reduced ? 'none' : undefined
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    className: "desk-m-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-row-head",
    id: "consult-services"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Services",
    title: L.services,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.CurrencyToggle, {
    value: cur,
    onChange: setCur,
    tone: tone
  })), /*#__PURE__*/React.createElement("div", {
    className: "price-scroll"
  }, services.map((s, i) => /*#__PURE__*/React.createElement(NS.PriceCard, {
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
  }))), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, L.priceNote), /*#__PURE__*/React.createElement("div", {
    className: "desk-block"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Process",
    title: L.process,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.ProcessSteps, {
    tone: tone,
    direction: "vertical",
    steps: L.steps.map(label => ({
      label
    }))
  })), /*#__PURE__*/React.createElement("div", {
    className: "desk-block contact"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Contact",
    title: L.contact,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.Button, {
    tone: tone,
    size: "lg",
    href: "#",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 18
    })
  }, L.book), /*#__PURE__*/React.createElement(NS.ContactForm, {
    tone: tone,
    labels: L.form,
    defaultType: th ? 1 : 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Email"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Email")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LINE"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "LINE")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Instagram"))), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, L.reply)))))));
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    id: "consult",
    className: 'desk desk-d ' + (th ? 'desk-th' : 'desk-ex') + (open ? ' is-open' : ''),
    "data-screen-label": th ? 'Theatre consult (box office)' : 'Exhibition consult (reception)'
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-head wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "desk-plate"
  }, /*#__PURE__*/React.createElement("b", null, th ? L.deskTh : L.deskEx), /*#__PURE__*/React.createElement("small", null, th ? L.deskThSub : L.deskExSub))), /*#__PURE__*/React.createElement("div", {
    className: "desk-window wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-noren",
    style: {
      pointerEvents: open ? 'none' : 'auto'
    },
    onMouseEnter: () => !touch && setOpen(true)
  }, /*#__PURE__*/React.createElement(NorenKit, {
    label: th ? '劇場相談室' : '展覽相談室',
    tone: tone,
    sub: L.norenSub,
    state: open ? 'open' : 'closed',
    onOpen: () => setOpen(true),
    sway: !reduced
  })), /*#__PURE__*/React.createElement("div", {
    className: "desk-content",
    style: {
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(16px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-row-head"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Services",
    title: L.services,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.CurrencyToggle, {
    value: cur,
    onChange: setCur,
    tone: tone
  })), /*#__PURE__*/React.createElement("div", {
    className: "price-grid"
  }, services.map((s, i) => /*#__PURE__*/React.createElement(NS.PriceCard, {
    key: i,
    index: i + 1,
    title: s[0],
    desc: s[1],
    price: price(s),
    unit: s[2] || undefined,
    tone: tone,
    visible: open,
    delay: 200 + i * 140
  }))), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, L.priceNote), /*#__PURE__*/React.createElement("div", {
    className: "desk-block"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Process",
    title: L.process,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.ProcessSteps, {
    tone: tone,
    steps: L.steps.map(label => ({
      label
    }))
  })), /*#__PURE__*/React.createElement("div", {
    className: "desk-block contact"
  }, /*#__PURE__*/React.createElement(NS.SectionHeading, {
    eyebrow: "Contact",
    title: L.contact,
    size: "h3"
  }), /*#__PURE__*/React.createElement(NS.Button, {
    tone: tone,
    size: "lg",
    href: "#",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 18
    })
  }, L.book), /*#__PURE__*/React.createElement(NS.ContactForm, {
    tone: tone,
    labels: L.form,
    defaultType: th ? 1 : 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Email"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Email")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LINE"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "LINE")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Instagram"))), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, L.reply))))));
}
window.ConsultDesk = ConsultDesk;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ConsultDesk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Exhibition.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: 'ex-wall-wrap' + (reduced ? ' is-static' : ''),
    "data-screen-label": "Exhibition title wall"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex-wall-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex-hall-peek",
    style: {
      opacity: .4 + p * .6
    }
  }, /*#__PURE__*/React.createElement("span", null, L.room, " 01 \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "ex-wall ex-wall-a",
    style: {
      transform: a
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: 'ex-title' + (vertical ? ' tategaki' : '')
  }, L.exWall)), /*#__PURE__*/React.createElement("div", {
    className: "ex-wall ex-wall-b",
    style: {
      transform: b
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ex-kicker"
  }, "NENEKO'S PROFILE"), /*#__PURE__*/React.createElement("p", {
    className: "ex-statement"
  }, L.exStatement), /*#__PURE__*/React.createElement("p", {
    className: "ex-period"
  }, L.exPeriod), /*#__PURE__*/React.createElement("p", {
    className: "ex-hint",
    style: {
      opacity: 1 - p * 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
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
  return /*#__PURE__*/React.createElement("article", {
    className: "room",
    id: id,
    "data-screen-label": '展間 ' + r.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "room-sky",
    style: {
      opacity: .35 + light * .65
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "room-num"
  }, /*#__PURE__*/React.createElement("span", null, L.room), /*#__PURE__*/React.createElement("b", null, r.n)), /*#__PURE__*/React.createElement("button", {
    className: "room-photo",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + r.title
  }, /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    ratio: "3 / 2",
    label: '展間 ' + r.n + ' · 主視覺 · 待替換'
  }), /*#__PURE__*/React.createElement("span", {
    className: "room-photo-cta"
  }, L.viewDetail, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }))), /*#__PURE__*/React.createElement(NS.Plaque, {
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
  }), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("article", {
    ref: ref,
    className: 'room-m' + (v ? ' is-in' : ''),
    id: 'room-' + r.id,
    "data-screen-label": '展間 ' + r.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "room-sky",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "room-num"
  }, /*#__PURE__*/React.createElement("span", null, L.room), /*#__PURE__*/React.createElement("b", null, r.n)), /*#__PURE__*/React.createElement("button", {
    className: "room-photo",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + r.title
  }, /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    ratio: "3 / 2",
    label: '展間 ' + r.n + ' · 主視覺 · 待替換'
  }), /*#__PURE__*/React.createElement("span", {
    className: "room-photo-cta"
  }, L.viewDetail, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }))), /*#__PURE__*/React.createElement(NS.Plaque, {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "detail",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": r.title,
    style: {
      opacity: on ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-hero",
    style: {
      transform: on ? 'none' : 'scale(.82)'
    }
  }, /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    ratio: "16 / 9",
    shape: "square",
    label: '展間 ' + r.n + ' · 全屏主視覺 · 待替換',
    style: {
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "detail-body wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "detail-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), L.back), /*#__PURE__*/React.createElement("span", {
    className: "detail-num"
  }, L.room, " ", r.n, " \xB7 ", r.year), /*#__PURE__*/React.createElement("h2", null, tx(r.title)), /*#__PURE__*/React.createElement("p", {
    className: "detail-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm"
  }, L.client, "\uFF1A", r.client[lang]), /*#__PURE__*/React.createElement("span", {
    className: "dm"
  }, L.role, "\uFF1A", r.role[lang])), /*#__PURE__*/React.createElement("div", {
    className: "detail-cols"
  }, [L.challenge, L.approach, L.result].map(h => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, L.placeholder)))), /*#__PURE__*/React.createElement("div", {
    className: "detail-photos"
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement(NS.PhotoFrame, {
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
  return /*#__PURE__*/React.createElement("main", {
    className: 'exhibition' + (compact ? ' ex-m' : '')
  }, compact ? /*#__PURE__*/React.createElement("section", {
    className: "ex-intro",
    "data-screen-label": "Exhibition title wall"
  }, /*#__PURE__*/React.createElement("h1", {
    className: 'ex-title' + (lang !== 'en' ? ' tategaki' : '')
  }, L.exWall), /*#__PURE__*/React.createElement("span", {
    className: "ex-kicker"
  }, "NENEKO'S PROFILE"), /*#__PURE__*/React.createElement("p", {
    className: "ex-statement"
  }, L.exStatement), /*#__PURE__*/React.createElement("p", {
    className: "ex-period"
  }, L.exPeriod)) : /*#__PURE__*/React.createElement(ExWall, {
    lang: lang,
    compact: compact,
    reduced: reduced
  }), compact ? /*#__PURE__*/React.createElement("section", {
    className: "gallery-m",
    "data-screen-label": "Exhibition gallery"
  }, rooms.map((r, i) => /*#__PURE__*/React.createElement(RoomM, {
    key: r.id,
    r: r,
    i: i,
    lang: lang,
    onOpen: setDetail
  }))) : vertical ? /*#__PURE__*/React.createElement("section", {
    className: "gallery-v",
    "data-screen-label": "Exhibition gallery"
  }, rooms.map((r, i) => /*#__PURE__*/React.createElement(Room, {
    key: r.id,
    id: 'room-' + r.id,
    r: r,
    i: i,
    lang: lang,
    light: cur === r.id ? 1 : .55,
    onOpen: setDetail
  }))) : /*#__PURE__*/React.createElement("section", {
    ref: gRef,
    className: "gallery-h",
    style: {
      height: rooms.length * 100 + 20 + 'vh'
    },
    "data-screen-label": "Exhibition gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-ceiling",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gallery-track",
    style: {
      width: trackW,
      paddingLeft: padX,
      transform: 'translateX(' + -p * (trackW - vw) + 'px)'
    }
  }, rooms.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      width: roomW,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Room, {
    id: 'room-' + r.id,
    r: r,
    i: i,
    lang: lang,
    light: clamp01(1 - Math.abs(pos - i) * 1.3),
    onOpen: setDetail
  })))), /*#__PURE__*/React.createElement("div", {
    className: "gallery-floor",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "ex-exit wrap",
    "data-screen-label": "Exhibition exit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exit-sign"
  }, /*#__PURE__*/React.createElement("span", null, L.exit), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 18
  }))), /*#__PURE__*/React.createElement(ConsultDesk, {
    tone: "exhibit",
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: 'floormap-dock' + (narrow ? ' is-compact' : '') + (compact && (scrolling || inDesk) ? ' is-hidden' : '')
  }, /*#__PURE__*/React.createElement(NS.FloorMap, {
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
  })), detail != null && /*#__PURE__*/React.createElement(RoomDetail, {
    r: rooms[detail],
    lang: lang,
    onClose: () => setDetail(null)
  }));
}
window.Exhibition = Exhibition;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Exhibition.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("main", {
    className: "home"
  }, /*#__PURE__*/React.createElement(Street, {
    lang: lang,
    onEnterPage: p => go(p)
  }), /*#__PURE__*/React.createElement("section", {
    className: "about wrap",
    id: "about",
    "data-screen-label": "Home about"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'about-card' + (alt ? ' is-alt' : ''),
    onClick: () => setAlt(a => !a),
    "aria-label": "Neneko"
  }, /*#__PURE__*/React.createElement("span", {
    className: "about-card-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__ASSETS || '../../assets') + '/photos/portrait.jpg',
    alt: "Neneko",
    style: {
      objectPosition: '50% 30%'
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "alt",
    src: (window.__ASSETS || '../../assets') + '/photos/desk-sm.jpg',
    alt: "",
    style: {
      objectPosition: '62% 40%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "about-card-cap"
  }, /*#__PURE__*/React.createElement("b", null, "NENEKO"), /*#__PURE__*/React.createElement("small", null, L.cardRole))), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "about-eyebrow"
  }, L.since), /*#__PURE__*/React.createElement("div", {
    className: "about-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "about-name"
  }, "About me"), /*#__PURE__*/React.createElement("a", {
    className: "cv-link",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 13
  }), L.cv)), L.about.map((p, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    className: "about-lead"
  }, tx(p))), /*#__PURE__*/React.createElement("p", {
    className: "about-cities",
    "aria-label": "Leeds, Taipei, Melbourne, Osaka"
  }, ['Leeds', 'Taipei', 'Melbourne', 'Osaka'].map((c, n) => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "ac-seg"
  }, n > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ac-arrow",
    "aria-hidden": "true"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, c)))))), /*#__PURE__*/React.createElement("section", {
    className: "partners",
    id: "partners",
    "data-screen-label": "Home partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "about-eyebrow"
  }, L.partnersEyebrow)), /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-label": window.PARTNERS.join('、')
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [0, 1].map(k => /*#__PURE__*/React.createElement("ul", {
    key: k,
    "aria-hidden": k ? 'true' : undefined
  }, window.PARTNERS.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    className: "voices wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "voices-filter",
    role: "group",
    "aria-label": L.reviewEx + ' / ' + L.reviewTh
  }, [['all', L.reviewAll, ''], ['exhibit', L.reviewEx, 'k-ex'], ['theatre', L.reviewTh, 'k-th']].map(([k, label, cls]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'vf ' + cls + (vf === k ? ' is-on' : ''),
    "aria-pressed": vf === k,
    onClick: () => setVf(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement(NS.LetterCard, {
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
  })), /*#__PURE__*/React.createElement("button", {
    className: "voices-cta",
    onClick: () => scrollToId('home-consult')
  }, /*#__PURE__*/React.createElement("span", null, L.teammate.split('\n').map((t, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "tm-line"
  }, t))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 26
  })))), /*#__PURE__*/React.createElement(ConsultStreet, {
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'cs-noren cs-n-' + tone,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-rod"
  }), chars.map((ch, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "cs-panel-wrap",
    style: {
      transform: 'translateX(' + (n >= chars.length / 2 ? off * 2 : -off * 2) + '%) rotate(' + (n >= chars.length / 2 ? 1 : -1) * off / 18 + 'deg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-panel",
    style: {
      animationDelay: n * -2.3 + 's'
    }
  }, /*#__PURE__*/React.createElement("b", null, ch)))));
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
    return /*#__PURE__*/React.createElement("div", {
      key: d.k,
      className: 'cs-bldg cs-' + d.k + (on ? ' is-on' : ''),
      onMouseEnter: () => !touch && setOpen(d.k),
      onMouseLeave: () => !touch && setOpen(null),
      onFocus: () => setOpen(d.k),
      onClick: () => touch && setOpen(o => o === d.k ? null : d.k)
    }, d.k === 'th' && /*#__PURE__*/React.createElement("span", {
      className: "cs-lamp",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("h3", {
      className: "cs-q"
    }, d.q), /*#__PURE__*/React.createElement("p", {
      className: "cs-egg"
    }, tx(d.egg)), /*#__PURE__*/React.createElement("div", {
      className: "cs-open"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cs-interior",
      "aria-hidden": "true"
    }, d.k === 'ex' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "cs-rack"
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", {
      className: "cs-uketsuke"
    }, /*#__PURE__*/React.createElement("b", null, "\u53D7\u4ED8"), /*#__PURE__*/React.createElement("small", null, "RECEPTION")), /*#__PURE__*/React.createElement("span", {
      className: "cs-counter"
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "cs-ledge"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "cs-preview",
      style: {
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(10px)'
      }
    }, /*#__PURE__*/React.createElement("ul", null, d.sv.map((s, n) => /*#__PURE__*/React.createElement("li", {
      key: n
    }, /*#__PURE__*/React.createElement("span", null, s[0])))), /*#__PURE__*/React.createElement("button", {
      className: "room-guide",
      tabIndex: on ? 0 : -1,
      onClick: e => {
        e.stopPropagation();
        go(d.page, 'consult');
      }
    }, d.cta, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))), /*#__PURE__*/React.createElement("div", {
      className: "cs-noren2"
    }, /*#__PURE__*/React.createElement(NorenKit, {
      label: d.noren,
      tone: d.tone,
      state: st,
      onOpen: () => {},
      sway: true
    }))), d.k === 'th' && /*#__PURE__*/React.createElement("span", {
      className: "cs-poster",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("b", null, L.poster), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("small", null, "\u306D\u306D\u30CD\u30B3")));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "cs",
    id: "home-consult",
    "data-screen-label": "Home consult doors"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cs-note"
  }, L.csNote.split('｜').map((t, n) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, n > 0 && /*#__PURE__*/React.createElement("span", {
    className: "cs-sep"
  }, "\uFF5C"), /*#__PURE__*/React.createElement("span", {
    className: "cs-nw"
  }, t)))), compact && /*#__PURE__*/React.createElement("div", {
    className: "cs-sky",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "d",
    style: {
      opacity: slide ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "n",
    style: {
      opacity: slide ? 1 : 0
    }
  })), compact ? /*#__PURE__*/React.createElement(SwipeDeck, {
    index: slide,
    onChange: i => {
      setSlide(i);
      setOpen(null);
    },
    dark: slide === 1,
    labels: [L.ctaEx, L.ctaTh],
    className: "cs-deck"
  }, doors.map(door)) : /*#__PURE__*/React.createElement("div", {
    className: "cs-street"
  }, doors.map(door)), /*#__PURE__*/React.createElement("div", {
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
  const ticket = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 40",
    width: "64",
    height: "40"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h58v10a6 6 0 0 0 0 12v10H3V26a6 6 0 0 0 0-12z",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 5v30",
    stroke: "var(--paper-0)",
    strokeWidth: "1.5",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15h22M12 21h16M12 27h20",
    stroke: "var(--paper-0)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
  const piece = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 52",
    width: "60",
    height: "52"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30 2l-8 8M30 2l8 8",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "10",
    width: "54",
    height: "40",
    rx: "1",
    fill: "var(--wood-2, #C9A27A)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "16",
    width: "42",
    height: "28",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 43l11-13 7 8 6-6 16 11z",
    fill: "var(--matcha-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "24",
    r: "3.5",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }));
  const works = [[F.exWorks, 'exhibition', piece, 'ex'], [F.thWorks, 'theatre', ticket, 'th']];
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-foot",
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap site-foot-in"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "sf-map",
    "aria-label": "Sitemap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-col"
  }, /*#__PURE__*/React.createElement("h4", null, "HOME"), /*#__PURE__*/React.createElement("ul", null, home.map(([label, p, a]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + p,
    onClick: to(p, a)
  }, label))))), /*#__PURE__*/React.createElement("div", {
    className: "sf-col sf-works"
  }, works.map(([label, p, icon, k]) => /*#__PURE__*/React.createElement("h4", {
    key: k
  }, /*#__PURE__*/React.createElement("a", {
    className: 'sf-work sf-work-' + k,
    href: '#' + p,
    onClick: to(p)
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "sf-pop",
    "aria-hidden": "true"
  }, icon)))))), /*#__PURE__*/React.createElement("div", {
    className: "sf-contact"
  }, /*#__PURE__*/React.createElement("h4", null, "LET'S TALK!"), /*#__PURE__*/React.createElement("a", {
    className: "sf-mail",
    href: "mailto:hanningchen13@gmail.com"
  }, "hanningchen13@gmail.com"), /*#__PURE__*/React.createElement("a", {
    className: "sf-tel",
    href: "tel:+886911506750"
  }, "+886 911506750"), /*#__PURE__*/React.createElement("div", {
    className: "sf-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/neneko.hc/",
    target: "_blank",
    rel: "noopener"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/@hanningchen",
    target: "_blank",
    rel: "noopener"
  }, "Unsplash")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap sf-copy"
  }, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 All rights reserved.")));
}
window.Home = Home;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Intro.jsx
try { (() => {
const INTRO_CITIES = {
  TPE: [121.56, 25.03],
  LDS: [-1.55, 53.8],
  MEL: [144.96, -37.81],
  OSA: [135.5, 34.69]
};
const INTRO_LEGS = [['TPE', 'LDS', .35, 1.35, -1], ['LDS', 'TPE', 1.55, 2.4, 1], ['TPE', 'MEL', 2.6, 3.3, -1], ['MEL', 'OSA', 3.5, 4.15, -1]];
const INTRO_END = 5.1,
  INTRO_CAM = 4.45;
const easeIO = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
let __land = null;
function Intro({
  lang,
  onDone,
  compact
}) {
  const L = window.COPY[lang];
  const W = compact ? 375 : 1440,
    H = compact ? 720 : 900;
  const [land, setLand] = useState(__land);
  const [t, setT] = useState(0);
  const doneRef = useRef(false);
  const finish = () => {
    if (!doneRef.current) {
      doneRef.current = true;
      onDone();
    }
  };
  useEffect(() => {
    if (!land) fetch((window.__ASSETS || '../../assets') + '/maps/land-110m.json').then(r => r.json()).then(j => {
      __land = topojson.feature(j, j.objects.land);
      setLand(__land);
    }).catch(() => {});
    const t0 = performance.now();
    const id = setInterval(() => {
      const s = (performance.now() - t0) / 1000;
      setT(s);
      if (s >= INTRO_END) {
        clearInterval(id);
        finish();
      }
    }, 16);
    return () => clearInterval(id);
  }, []);
  const geo = useMemo(() => {
    const proj = d3.geoNaturalEarth1();
    const pts = {
      type: 'MultiPoint',
      coordinates: Object.values(INTRO_CITIES)
    };
    if (compact) proj.fitExtent([[28, H * .3], [W - 28, H * .62]], pts);else proj.fitExtent([[W * .14, H * .2], [W * .86, H * .7]], pts);
    const P = {};
    for (const k in INTRO_CITIES) P[k] = proj(INTRO_CITIES[k]);
    const legs = INTRO_LEGS.map(([a, b, s, e, side]) => {
      const p0 = P[a],
        p1 = P[b];
      const dx = p1[0] - p0[0],
        dy = p1[1] - p0[1];
      const len = Math.hypot(dx, dy);
      const c = [(p0[0] + p1[0]) / 2 + side * dy * .18 * (side < 0 ? 1 : .6), (p0[1] + p1[1]) / 2 - Math.abs(dx) * (side < 0 ? .22 : .08)];
      const at = u => {
        const v = 1 - u;
        return [v * v * p0[0] + 2 * v * u * c[0] + u * u * p1[0], v * v * p0[1] + 2 * v * u * c[1] + u * u * p1[1]];
      };
      const tan = u => {
        const v = 1 - u;
        return Math.atan2(2 * v * (c[1] - p0[1]) + 2 * u * (p1[1] - c[1]), 2 * v * (c[0] - p0[0]) + 2 * u * (p1[0] - c[0])) * 180 / Math.PI;
      };
      const n = Math.max(6, Math.round(len / (compact ? 9 : 16)));
      const dashes = Array.from({
        length: n
      }, (_, i) => {
        const u = (i + .5) / n;
        return {
          u,
          p: at(u),
          a: tan(u)
        };
      });
      return {
        a,
        b,
        s,
        e,
        at,
        tan,
        dashes
      };
    });
    return {
      proj,
      P,
      legs,
      path: d3.geoPath(proj)
    };
  }, [compact]);
  const landD = useMemo(() => land ? geo.path(land) : '', [land, geo]);
  let plane = null;
  for (const lg of geo.legs) {
    if (t >= lg.s && t <= lg.e + .25) {
      const u = easeIO(clamp01((t - lg.s) / (lg.e - lg.s)));
      plane = {
        p: lg.at(u),
        a: lg.tan(Math.min(u, .995))
      };
    }
  }
  if (!plane && t < geo.legs[0].s) plane = {
    p: geo.P.TPE,
    a: geo.legs[0].tan(0)
  };
  const landed = t > geo.legs[3].e;
  const STOPS = ['LDS', 'TPE', 'MEL', 'OSA'];
  const arrive = STOPS.map((k, i) => t >= geo.legs[i].e);
  const cam = easeIO(clamp01((t - INTRO_CAM) / (INTRO_END - INTRO_CAM)));
  const stampSize = compact ? 66 : 96;
  const stampOff = {
    LDS: [.9, 1.1],
    TPE: [-1.1, .3],
    MEL: [1.1, -.2],
    OSA: [1, -1.1]
  };
  const stampTxt = [['ARRIVAL', 'LEEDS', '2018'], ['ARRIVAL', 'TAIPEI', '2019'], ['ARRIVAL', 'MELBOURNE', '2024'], ['ARRIVAL', 'OSAKA', '2025']];
  return /*#__PURE__*/React.createElement("div", {
    className: "intro",
    style: {
      transform: 'translateY(' + -cam * 100 + '%)'
    },
    "aria-label": "Intro"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + W + ' ' + H,
    preserveAspectRatio: "xMidYMid slice",
    className: "intro-map",
    style: {
      opacity: clamp01(t / .35)
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: landD,
    fill: "var(--paper-2)",
    stroke: "var(--ink-3)",
    strokeWidth: "0.8",
    strokeLinejoin: "round"
  }), geo.legs.map((lg, li) => lg.dashes.map((d, i) => /*#__PURE__*/React.createElement("line", {
    key: li + '-' + i,
    x1: -3,
    x2: 3,
    y1: 0,
    y2: 0,
    transform: 'translate(' + d.p[0] + ',' + d.p[1] + ') rotate(' + d.a + ')',
    stroke: "var(--ink-1)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    style: {
      opacity: easeIO(clamp01((t - lg.s) / (lg.e - lg.s))) >= d.u ? 1 : 0,
      transition: 'opacity 120ms linear'
    }
  }))), Object.entries(geo.P).map(([k, p]) => /*#__PURE__*/React.createElement("g", {
    key: k,
    transform: 'translate(' + p[0] + ',' + p[1] + ')'
  }, /*#__PURE__*/React.createElement("circle", {
    r: "4",
    fill: "var(--karashi-1)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: "none",
    stroke: "var(--karashi-1)",
    strokeWidth: "1",
    opacity: ".6"
  })))), STOPS.map((k, i) => {
    const p = geo.P[k];
    const o = stampOff[k];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "intro-stamp",
      style: {
        left: p[0] / W * 100 + '%',
        top: p[1] / H * 100 + '%',
        transform: 'translate(' + (o[0] * stampSize * .7 - stampSize / 2) + 'px,' + (o[1] * stampSize * .8 - stampSize / 2) + 'px)'
      }
    }, /*#__PURE__*/React.createElement(window.NS.Stamp, {
      top: stampTxt[i][0],
      main: stampTxt[i][1],
      bottom: stampTxt[i][2],
      size: stampSize,
      color: ['var(--matcha-1)', 'var(--ink-2)', 'var(--karashi-1)', 'var(--shu-1)'][i],
      rotate: [-10, 7, -6, -5][i],
      inked: arrive[i]
    }));
  }), plane && /*#__PURE__*/React.createElement("div", {
    className: "intro-plane",
    style: {
      left: plane.p[0] / W * 100 + '%',
      top: plane.p[1] / H * 100 + '%',
      transform: 'translate(-50%,-50%) rotate(' + (plane.a + 45) + 'deg) scale(' + (landed ? .6 : 1) + ')',
      opacity: landed ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plane",
    size: compact ? 22 : 28,
    color: "var(--ink-1)"
  })), /*#__PURE__*/React.createElement("ol", {
    className: "intro-lines"
  }, L.intro.map(([a, b], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      opacity: arrive[i] ? 1 : 0,
      transform: arrive[i] ? 'none' : 'translateY(8px)'
    }
  }, /*#__PURE__*/React.createElement("b", null, a), /*#__PURE__*/React.createElement("span", null, "\uFF5C"), b))), /*#__PURE__*/React.createElement("button", {
    className: "intro-skip",
    onClick: finish
  }, L.skip, /*#__PURE__*/React.createElement(Icon, {
    name: "skip-forward",
    size: 16
  })));
}
window.Intro = Intro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Street.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "sky",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sky-layer sky-dusk",
    style: {
      opacity: mode === 'dusk' ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sky-layer sky-day",
    style: {
      opacity: mode === 'day' ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sky-layer sky-night",
    style: {
      opacity: mode === 'night' ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sky-pivot",
    style: {
      left: '12%',
      transform: 'rotate(' + (mode === 'day' ? 10 : mode === 'dusk' ? -38 : -80) + 'deg)',
      opacity: mode === 'night' ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sun",
    style: {
      opacity: mode === 'day' ? 1 : .55
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sky-pivot",
    style: {
      left: '76%',
      transform: 'rotate(' + (mode === 'night' ? 12 : 90) + 'deg)',
      opacity: mode === 'night' ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "moon"
  })), STARS.map((s, i) => /*#__PURE__*/React.createElement("span", {
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "clouds",
    style: {
      opacity: mode === 'day' ? 1 : mode === 'dusk' ? .45 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cloud c1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cloud c2"
  }), /*#__PURE__*/React.createElement("span", {
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
  return /*#__PURE__*/React.createElement("g", {
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
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-40",
    y: "160",
    width: "580",
    height: "350",
    fill: "transparent"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,500 520,500 610,538 90,538",
    fill: "var(--ink-2)",
    style: {
      opacity: day ? .16 : mode === 'dusk' ? .06 : 0,
      transition: 'opacity var(--dur-sky) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z",
    fill: "var(--matcha-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "miter"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "var(--matcha-2)",
    opacity: ".45"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "214",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "240",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "266",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "292",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "154",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "188",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "318",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "154",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "188",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "222",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "324",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "344",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426",
    cy: "344",
    r: "1.5"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M156,186 L176,306 L196,186",
    fill: "none",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5",
    strokeLinejoin: "miter"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "376",
    y: "214",
    width: "14",
    height: "250",
    fill: "#DFE7E3",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "384",
    width: "300",
    height: "116",
    fill: "#DFE7E3",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "126",
    y1: "384",
    x2: "126",
    y2: "500"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "226",
    y1: "384",
    x2: "226",
    y2: "500"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "150",
    y: "424",
    width: "56",
    height: "76",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "178",
    y1: "424",
    x2: "178",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("clipPath", {
    id: "glass-clip"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "384",
    width: "300",
    height: "116"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#glass-clip)"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,384 40,384 -20,500 -60,500",
    fill: "#fff",
    className: "glint",
    style: {
      transform: glint ? 'translateX(420px)' : 'translateX(0)',
      opacity: glint ? .85 : 0
    }
  })), /*#__PURE__*/React.createElement("rect", {
    x: "-20",
    y: "370",
    width: "480",
    height: "12",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "290",
    y: "490",
    width: "260",
    height: "10",
    fill: "var(--paper-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "300",
    y: "426",
    width: "240",
    height: "64",
    rx: "5",
    fill: "var(--matcha-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "314",
    y: "438",
    width: "212",
    height: "40",
    rx: "2",
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "420",
    y: "467",
    textAnchor: "middle",
    fill: "var(--matcha-2)"
  }, /*#__PURE__*/React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "26",
    fontWeight: "500",
    letterSpacing: "4"
  }, L.exSign[0]), /*#__PURE__*/React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "16",
    fontWeight: "500",
    letterSpacing: "2.5",
    dx: "10",
    fill: "var(--ink-1)"
  }, "EXHIBITION")), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: night ? .82 : 0,
      transition: 'opacity var(--dur-sky) var(--ease-soft)',
      pointerEvents: 'none'
    },
    fill: "var(--night-2)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,500 V198 L156,186 L176,306 L196,186 L440,194 V500 Z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-20",
    y: "370",
    width: "480",
    height: "12"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "290",
    y: "426",
    width: "260",
    height: "74"
  })), /*#__PURE__*/React.createElement(StreetTag, {
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
  return /*#__PURE__*/React.createElement("g", {
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
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-20",
    y: "150",
    width: "460",
    height: "360",
    fill: "transparent"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "160",
    width: "380",
    height: "16",
    fill: "#F1E3D9",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-14",
    y: "176",
    width: "448",
    height: "16",
    fill: "#F1E3D9",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "192",
    width: "420",
    height: "308",
    fill: "#F5EAE2",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "282",
    x2: "420",
    y2: "282",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: win(i),
    fill: "var(--paper-0)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "56",
    y: "398",
    width: "54",
    height: "76",
    fill: "var(--paper-3)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "310",
    y: "398",
    width: "54",
    height: "76",
    fill: "var(--shu-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "var(--ink-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-14",
    y: "160",
    width: "448",
    height: "340",
    fill: "var(--night-2)",
    style: {
      ...glow,
      opacity: night ? .62 : 0
    }
  }), [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("path", {
    key: 'g' + i,
    d: win(i),
    fill: "var(--lamp-1)",
    style: {
      ...glow,
      opacity: night ? 1 : 0,
      transitionDelay: night ? 200 + i * 90 + 'ms' : '0ms'
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "var(--lamp-2)",
    style: {
      ...glow,
      opacity: night ? 1 : 0,
      transitionDelay: night ? '500ms' : '0ms'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150,500 V432 A60,60 0 0 1 270,432 V500 Z",
    fill: "none",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "128",
    y: "494",
    width: "164",
    height: "6",
    fill: "var(--paper-2)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "90",
    y: "292",
    width: "240",
    height: "64",
    rx: "5",
    fill: "var(--shu-1)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "104",
    y: "304",
    width: "212",
    height: "40",
    rx: "2",
    fill: "var(--night-3)",
    stroke: "var(--ink-1)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "210",
    y: "333",
    textAnchor: "middle",
    fill: "var(--lamp-1)",
    style: {
      opacity: night ? 1 : .7,
      transition: 'opacity var(--dur-sky)'
    }
  }, /*#__PURE__*/React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "26",
    fontWeight: "500",
    letterSpacing: "4"
  }, L.thSign[0]), /*#__PURE__*/React.createElement("tspan", {
    fontFamily: "var(--font-sans)",
    fontSize: "16",
    fontWeight: "500",
    letterSpacing: "2.5",
    dx: "10"
  }, "THEATRE")), bulbs.map(([bx, by], i) => /*#__PURE__*/React.createElement("circle", {
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
  })), /*#__PURE__*/React.createElement(StreetTag, {
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
  return /*#__PURE__*/React.createElement("g", {
    transform: 'translate(' + x + ',' + y + ') rotate(' + rot + ')',
    "aria-hidden": "true",
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: hidden ? 0 : 1,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: 'tag-scale' + (active ? ' is-on' : '')
  }, /*#__PURE__*/React.createElement("g", {
    className: 'tag-pulse' + (active ? ' is-fast' : '')
  }, /*#__PURE__*/React.createElement("line", {
    x1: "-14",
    y1: "-16",
    x2: "-6",
    y2: "-6",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-18",
    y1: "1",
    x2: "-8",
    y2: "1",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
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
  }, text), /*#__PURE__*/React.createElement("line", {
    x1: w + 6,
    y1: "-6",
    x2: w + 14,
    y2: "-16",
    stroke: "var(--karashi-1)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
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
  return /*#__PURE__*/React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "440",
    x2: "0",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "428",
    r: "22",
    fill: "var(--matcha-4)",
    stroke: "var(--ink-1)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,452 L-8,440 M0,446 L7,436",
    stroke: "var(--ink-1)",
    strokeWidth: "1",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
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
  return /*#__PURE__*/React.createElement("g", {
    transform: 'translate(' + x + ',0)',
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "392",
    r: "22",
    fill: "var(--lamp-glow)",
    style: {
      opacity: mode === 'night' ? 1 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "398",
    x2: "0",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      opacity: dim
    }
  }, /*#__PURE__*/React.createElement(RevealText, {
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
  return /*#__PURE__*/React.createElement("section", {
    className: 'street mode-' + mode,
    id: "street",
    "data-screen-label": "Home street"
  }, /*#__PURE__*/React.createElement(Sky, {
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    className: "street-inner",
    style: zoom ? {
      transform: 'scale(3.2)',
      transformOrigin: zoom.ox + ' ' + (zoom.oy || '78%')
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: "street-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tagline-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: 'tagline' + (lang === 'en' ? ' is-en' : '')
  }, L.tagline), /*#__PURE__*/React.createElement("h1", {
    className: 'tagline tagline-night' + (lang === 'en' ? ' is-en' : ''),
    "aria-hidden": "true",
    style: {
      opacity: mode === 'night' ? 1 : 0
    }
  }, L.tagline)), compact ? /*#__PURE__*/React.createElement("p", {
    className: "byline is-3l"
  }, L.byline.split('｜').map((t, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: n ? '' : 'nk'
  }, t))) : /*#__PURE__*/React.createElement("p", {
    className: "byline"
  }, L.byline)), compact ? /*#__PURE__*/React.createElement(SwipeDeck, {
    index: slide,
    onChange: setSlide,
    dark: slide === 1,
    labels: [L.exSign.join(' '), L.thSign.join(' ')],
    className: "street-deck"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "street-svg is-stack",
    viewBox: "-60 70 650 470",
    preserveAspectRatio: "xMidYMax meet"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-70",
    y: "500",
    width: "670",
    height: "80",
    fill: "var(--paper-1)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-70",
    y: "500",
    width: "670",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-70",
    y1: "500",
    x2: "600",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-70",
    y1: "524",
    x2: "600",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), /*#__PURE__*/React.createElement(Museum, _extends({
    x: 0,
    mode: mode,
    lang: lang,
    glint: glint,
    big: true
  }, handlers('ex')))), /*#__PURE__*/React.createElement("svg", {
    className: "street-svg is-stack",
    viewBox: "-90 70 600 470",
    preserveAspectRatio: "xMidYMax meet"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-100",
    y: "500",
    width: "620",
    height: "80",
    fill: "var(--paper-1)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-100",
    y: "500",
    width: "620",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-100",
    y1: "500",
    x2: "520",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-100",
    y1: "524",
    x2: "520",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), /*#__PURE__*/React.createElement(TheatreBldg, _extends({
    x: 0,
    mode: mode,
    lang: lang,
    big: true
  }, handlers('th'))))) : /*#__PURE__*/React.createElement("svg", {
    className: "street-svg",
    viewBox: lay.vb,
    preserveAspectRatio: "xMidYMax meet"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-400",
    y: "500",
    width: "2240",
    height: "80",
    fill: "var(--paper-1)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-400",
    y: "500",
    width: "2240",
    height: "80",
    fill: "var(--night-3)",
    style: {
      opacity: mode === 'night' ? .5 : 0,
      transition: 'opacity var(--dur-sky)'
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-400",
    y1: "500",
    x2: "1840",
    y2: "500",
    stroke: "var(--ink-1)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-400",
    y1: "524",
    x2: "1840",
    y2: "524",
    stroke: "var(--ink-3)",
    strokeWidth: "1",
    strokeDasharray: "10 8"
  }), /*#__PURE__*/React.createElement(Museum, _extends({
    x: lay.mx,
    mode: mode,
    lang: lang,
    glint: glint
  }, handlers('ex'))), lay.lamp && /*#__PURE__*/React.createElement(StreetTree, {
    x: lay.mx - 70,
    mode: mode
  }), lay.lamp && /*#__PURE__*/React.createElement(StreetLamp, {
    x: lay.lamp,
    mode: mode
  }), lay.lamp && /*#__PURE__*/React.createElement(StreetTree, {
    x: lay.tx + 500,
    mode: mode
  }), /*#__PURE__*/React.createElement(TheatreBldg, _extends({
    x: lay.tx,
    mode: mode,
    lang: lang
  }, handlers('th')))), /*#__PURE__*/React.createElement("p", {
    className: "street-hint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hint-arrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 14,
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "hint-text"
  }, compact ? L.hintSwipe : touch ? L.hintTap : L.hintHover))), /*#__PURE__*/React.createElement("div", {
    className: 'enter-veil ' + (zoom ? 'on ' + zoom.which : '')
  }));
}
window.Street = Street;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Street.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Theatre.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("section", {
    className: "ticket-m",
    "data-screen-label": "Theatre ticket"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th-valance",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(NS.Curtain, {
    open: drape,
    valance: false,
    duration: reduced ? undefined : 1400,
    style: {
      top: 22
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "ticket-btn",
    onClick: tear,
    "aria-label": L.tearHintM
  }, /*#__PURE__*/React.createElement(NS.Ticket, {
    title: L.thTicket,
    sub: L.ticketSub,
    date: now,
    seat: "\u4E00\u968E \u308D\u5217 7\u756A",
    no: "No. 000127",
    admit: L.admit,
    stubLabel: L.stub,
    torn: torn
  })), /*#__PURE__*/React.createElement("p", {
    className: "th-hint",
    style: {
      opacity: torn > 0 ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
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
  return /*#__PURE__*/React.createElement(Reveal, {
    as: "article",
    className: "act-m",
    id: 'act-' + a.id,
    "data-screen-label": a.n.zh
  }, /*#__PURE__*/React.createElement("span", {
    className: "act-num"
  }, a.n[lang]), /*#__PURE__*/React.createElement("div", {
    className: "act-photo-m"
  }, /*#__PURE__*/React.createElement("button", {
    className: "room-photo act-photo-btn",
    onClick: () => onOpen(i),
    "aria-label": L.viewDetail + ' ' + a.title
  }, /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    tone: "night",
    shape: "square",
    ratio: "16 / 9",
    label: a.n.zh + ' · 舞台照 · 待替換',
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "room-photo-cta is-th"
  }, L.viewDetail, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  })))), /*#__PURE__*/React.createElement(NS.Playbill, {
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
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    className: "detail detail-th",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": a.title,
    style: {
      opacity: on ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-body wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "detail-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), T.back), /*#__PURE__*/React.createElement("span", {
    className: "detail-num"
  }, a.n[lang], "\u30FB", a.year), /*#__PURE__*/React.createElement("h2", null, tx(a.title)), /*#__PURE__*/React.createElement("p", {
    className: "detail-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm"
  }, L.team, "\uFF1A", tx(a.team[lang])), /*#__PURE__*/React.createElement("span", {
    className: "dm"
  }, T.venue, "\uFF1A", T.tbc), /*#__PURE__*/React.createElement("span", {
    className: "dm"
  }, L.role, "\uFF1A", a.role[lang])), /*#__PURE__*/React.createElement("div", {
    className: "detail-hero"
  }, /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    tone: "night",
    ratio: "16 / 9",
    shape: "square",
    label: a.n.zh + ' · 主視覺 · 待替換',
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "detail-cols"
  }, cols.map(([h, ph]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "thd-col"
  }, /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, L.placeholder), /*#__PURE__*/React.createElement(NS.PhotoFrame, {
    tone: "night",
    ratio: "4 / 3",
    label: ph + ' · 待替換'
  })))), /*#__PURE__*/React.createElement("section", {
    className: "thd-cast",
    "aria-label": T.cast
  }, /*#__PURE__*/React.createElement("h3", null, T.cast), /*#__PURE__*/React.createElement("dl", null, T.castRoles.map((r, n) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("dt", null, r), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("dd", null, n === 0 ? 'NENEKO' : T.tbc))))), /*#__PURE__*/React.createElement("button", {
    className: "thd-next",
    onClick: onNext
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, T.next), next.n[lang], "\u3000", next.title), /*#__PURE__*/React.createElement(Icon, {
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
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: 'bow-m bow-rise' + (v ? ' is-up' : ''),
    id: "bow",
    "data-screen-label": "Theatre curtain call"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bow-stage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bow-label"
  }, L.curtainCall), /*#__PURE__*/React.createElement("h2", null, tx(L.bowTitle)), /*#__PURE__*/React.createElement("p", null, L.bowSub)), /*#__PURE__*/React.createElement(NS.Curtain, {
    open: reduced ? 0 : v ? 0 : 1,
    valance: false,
    duration: reduced ? undefined : 1400,
    style: {
      top: 22,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("main", {
    className: "theatre th-m"
  }, /*#__PURE__*/React.createElement(TicketM, {
    lang: lang,
    reduced: reduced
  }), /*#__PURE__*/React.createElement("section", {
    className: "acts-m",
    "data-screen-label": "Theatre acts"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "overture-beam",
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "beam",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "overture-m"
  }, L.overture)), acts.map((a, i) => /*#__PURE__*/React.createElement(ActM, {
    key: a.id,
    a: a,
    i: i,
    lang: lang,
    onOpen: setDetail
  }))), /*#__PURE__*/React.createElement(BowM, {
    lang: lang
  }), /*#__PURE__*/React.createElement("section", {
    className: "lobby wrap",
    "data-screen-label": "Theatre lobby"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Lobby"), /*#__PURE__*/React.createElement("h2", null, L.lobby)), /*#__PURE__*/React.createElement(ConsultDesk, {
    tone: "theatre",
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: 'program-dock' + (narrow ? ' is-compact' : '') + (compact && (scrolling || inDesk) ? ' is-hidden' : '')
  }, /*#__PURE__*/React.createElement(NS.ProgramNav, {
    acts: navActs,
    current: cur,
    onJump: jump,
    title: L.program,
    collapsible: narrow,
    defaultOpen: !narrow
  })), detail != null && /*#__PURE__*/React.createElement(ActDetail, {
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
  return /*#__PURE__*/React.createElement("header", {
    className: 'th-header' + (light ? ' is-light' : '') + (ex ? ' is-ex' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "thh-brand",
    onClick: onBrand
  }, "NENEKO"), /*#__PURE__*/React.createElement("div", {
    className: "thh-row"
  }, /*#__PURE__*/React.createElement(NS.LangSwitch, {
    value: lang,
    onChange: onLang,
    dark: !light && !ex
  }), /*#__PURE__*/React.createElement("button", {
    className: "thh-consult",
    onClick: onConsult
  }, L.consult)));
}
window.Theatre = Theatre;
window.ThHeader = ThHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Theatre.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/hooks.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} = React;
const ICON_BASE = (window.__ASSETS || '../../assets') + '/icons/';
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
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style,
    "aria-label": text
  }, chars.map((c, i) => /*#__PURE__*/React.createElement("span", {
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
  return /*#__PURE__*/React.createElement("span", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'deck ' + (dark ? 'is-dark ' : '') + className,
    onTouchStart: ts,
    onTouchMove: tm,
    onTouchEnd: te,
    onTouchCancel: () => {
      s.current = null;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "deck-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deck-track",
    style: {
      transform: 'translateX(' + -index * 100 + '%)',
      transition: reduced ? 'none' : undefined
    }
  }, kids.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "deck-slide",
    key: i,
    "aria-hidden": i !== index ? 'true' : undefined
  }, c)))), /*#__PURE__*/React.createElement("button", {
    className: "deck-arrow prev",
    "aria-label": labels[(index - 1 + count) % count] || 'Previous',
    onClick: () => go(index - 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    className: "deck-arrow next",
    "aria-label": labels[(index + 1) % count] || 'Next',
    onClick: () => go(index + 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "deck-dots"
  }, kids.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: 'deck-dot' + (i === index ? ' on' : ''),
    "aria-label": labels[i] || String(i + 1),
    "aria-current": i === index ? 'true' : undefined,
    onClick: () => onChange(i)
  }, /*#__PURE__*/React.createElement("i", null)))));
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
  return parts.length === 1 ? s : parts.map((p, i) => /^[《「]/.test(p) ? /*#__PURE__*/React.createElement("span", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'nr nr-' + tone + ' nr-' + state + (sway ? ' nr-sway' : '') + ' ' + className,
    style: {
      '--n': n
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nr-btn",
    onClick: onOpen,
    "aria-expanded": state === 'open',
    "aria-label": label,
    tabIndex: state === 'open' ? -1 : 0
  }, /*#__PURE__*/React.createElement("span", {
    className: "nr-rod",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "nr-cap"
  }), /*#__PURE__*/React.createElement("i", {
    className: "nr-cap r"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nr-row",
    "aria-hidden": "true"
  }, chars.map((ch, i) => {
    const d = i < mid ? -1 : i > mid ? 1 : 0;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "nr-p",
      style: {
        '--d': d,
        '--k': Math.abs(i - mid) + 1,
        '--i': i
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nr-cloth",
      style: {
        clipPath: 'polygon(0 0,100% 0,100% calc(100% - ' + hem[(i + 1) % 7] + 'px),0 calc(100% - ' + hem[i % 7] + 'px))',
        animationDelay: i * -1.7 + 's'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nr-sleeve"
    }), /*#__PURE__*/React.createElement("b", null, ch)));
  }))), sub && /*#__PURE__*/React.createElement("span", {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/hooks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/i18n.js
try { (() => {
window.COPY = {
  zh: {
    consult: '相談',
    skip: '略過',
    replay: '重播飛行路線',
    intro: [['LEEDS 2018', '英國里茲大學 文化創意產業碩士'], ['TAIPEI 2019', '禾谷創意・啟雲科技・獨立製作'], ['MELBOURNE 2024', '墨爾本'], ['OSAKA 2025', '現在，在大阪']],
    tagline: '展演之間',
    byline: 'NENEKO｜展覽・劇場製作人｜台北 ⇄ 大阪',
    exLine: '把知識，變成可以走進去的體驗。',
    thLine: '我負責讓幕順利拉開。',
    exTag: '今天去看展',
    thTag: '今天去看戲',
    exSign: ['展覽', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: '將滑鼠移到建築上',
    hintTap: '點一下建築切換天色，再點一次進入',
    aboutEyebrow: 'About',
    aboutTitle: '關於我',
    since: '© \'16 - 2026',
    about: ['展覽與劇場製作人，英國里茲大學文化創意產業研究所畢，具中英日三語商務溝通能力、七年以上展覽・劇場製作人經驗。興趣是考些奇奇怪怪的資格，例如大客車駕照。', '研究產業知識與地方歷史，熟悉跨國合作，曾經和許許多多的人，一起把它們變成一場一場的展與演，讓故事找到它的觀眾。'],
    csNote: '初次相談 30 分鐘免費｜中文・日本語・English',
    exQ: '和我一起蓋一座展',
    thQ: '和我一起做一齣戲',
    fromPrice: 'NT$ ___ 起',
    poster: '本日公演',
    roomEx: '帶著一個想法來就好，從敘事到空間，\n我們從最有趣的地方開始討論吧。',
    roomTh: '場地、技術、行政、翻譯，都寫進同一張 cue 表。\n還有便當一定要好吃！',
    cardRole: '獨立製作人',
    cv: 'Download CV',
    routeTitle: '飛行路線',
    partnersEyebrow: 'Worked with',
    partnersTitle: '合作單位',
    partnersNote: '名單佔位，之後替換為正式名稱與標誌',
    ctaEx: '前往展覽相談室',
    ctaTh: '前往劇場相談室',
    exWall: '展之間\n展示與體驗設計\n合作案例',
    exStatement: '策展論述佔位：以研究為起點，把史料、技術與知識轉譯成觀眾可以用身體走過、動手參與的展示敘事。每一間展間，都是一次「理解」被設計出來的過程。',
    exPeriod: '展期：2019 — 現在',
    scrollHint: '往下捲動，走進展廳',
    room: '展間',
    client: '委託單位',
    role: '我的角色',
    viewDetail: '查看詳情',
    back: '返回展廳',
    challenge: '挑戰',
    approach: '做法',
    result: '成果',
    placeholder: '內容佔位，之後替換。',
    floor: '展場平面圖',
    entrance: '入口',
    exit: '出口 EXIT',
    thTicket: '演之間｜劇場合作案例',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'もぎり',
    tearHint: '往下捲動，撕下半券',
    tearHintM: '輕觸或往下捲動，撕下半券',
    openDesk: '點開相談室',
    thd: {
      back: '回到觀眾席',
      venue: '城市與場地',
      tbc: '待替換',
      origin: '緣起',
      production: '製作',
      performance: '演出',
      photoOrigin: '排練／幕後',
      photoProd: '演出現場',
      photoPerf: '觀眾／謝幕',
      cast: '演職員表',
      castRoles: ['製作人', '導演', '編劇', '舞台設計', '燈光設計', '演員'],
      next: '下一幕'
    },
    overture: '開演',
    team: '團隊',
    program: '節目單',
    curtainCall: '謝幕',
    bowTitle: '20% 實驗劇坊 行政總監',
    bowSub: '2025 臺中市傑出演藝團隊',
    lobby: '劇場大廳',
    deskEx: '受付',
    deskExSub: 'RECEPTION',
    deskTh: '售票口',
    deskThSub: 'BOX OFFICE',
    norenSub: '滑過或點擊進入',
    services: '服務項目與費用',
    priceNote: '實際費用依規模與時程報價',
    process: '合作流程',
    steps: ['相談', '提案與報價', '簽約', '執行'],
    reviews: '客戶好評',
    reviewEx: '展覽',
    reviewTh: '劇場',
    reviewAll: '全部',
    teammate: '你在找隊友嗎？\n先聊聊吧！',
    hintSwipe: '左右滑動，切換白天的展場與夜晚的劇場',
    foot: {
      consult: '服務相談',
      thWorks: '劇場作品',
      exWorks: '展覽作品',
      home: '首頁',
      top: '回到街上',
      about: '關於我',
      partners: '合作單位',
      ex: '展覽',
      galleries: '展廳',
      th: '劇場',
      program: '節目單',
      contact: '聯絡方式'
    },
    pending: '待替換',
    reviewQuote: '推薦文佔位。這裡會放上合作夥伴對專案溝通、執行與成果的一段真實回饋。',
    reviewName: '姓名',
    reviewRole: '職稱',
    reviewOrg: '單位',
    contact: '聯絡',
    book: '預約 30 分鐘免費相談',
    reply: '2 個工作天內回覆｜中文・日本語・English',
    form: {
      name: '姓名',
      org: '單位',
      type: '類型',
      types: ['展場', '劇場', '其他'],
      budget: '預算區間',
      budgets: ['未定', 'NT$ 5 萬以下', 'NT$ 5–20 萬', 'NT$ 20–50 萬', 'NT$ 50 萬以上'],
      timeline: '時程',
      timelineHint: '例：2027 年春季開幕',
      message: '說明',
      submit: '送出',
      sent: '已送出，2 個工作天內回覆。'
    },
    exServices: [['企劃健檢', '展覽或體驗企劃的諮詢與建議', '起／次'], ['展覽企劃與體驗設計', '研究 → 展示敘事 → 體驗設計', '起'], ['專案統籌', '跨域團隊、時程預算、落地執行', null]],
    thServices: [['計畫撰寫', '補助與國際交流計畫', '起'], ['日本在地協調', '場地、技術、行政、翻譯對接', '起／日'], ['台日巡演製作', '整體製作統籌', null]],
    quote: '依規模報價',
    backHome: '回到街上'
  },
  ja: {
    consult: '相談',
    skip: 'スキップ',
    replay: '飛行ルートを再生',
    intro: [['LEEDS 2018', '英国リーズ大学 文化・クリエイティブ産業 修士'], ['TAIPEI 2019', '禾谷創意・啟雲科技・独立制作'], ['MELBOURNE 2024', 'メルボルン'], ['OSAKA 2025', '現在、大阪にて']],
    tagline: '展演ノ間',
    byline: 'NENEKO｜展示・劇場プロデューサー｜台北 ⇄ 大阪',
    exLine: '知識を、歩いて巡れる体験に。',
    thLine: '幕が無事に上がるまで、すべてを整える。',
    exTag: '今日は展示へ',
    thTag: '今日は芝居へ',
    exSign: ['展示', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: '建物にカーソルを合わせてください',
    hintTap: '建物をタップで空が変わり、もう一度で入れます',
    aboutEyebrow: 'About',
    aboutTitle: 'わたしについて',
    since: '© \'16 - 2026',
    about: ['展示と劇場のプロデューサー。英国リーズ大学 文化・クリエイティブ産業 修士。中国語・英語・日本語の3言語でビジネス対応が可能で、展示・劇場制作の経験は7年以上。趣味はちょっと変わった資格を取ること。たとえば大型バスの免許。', '産業の知識や地域の歴史をリサーチし、国際協働のなかで、本当にたくさんの人たちとともにひとつひとつの展示と公演に仕立て、物語をその観客へ届けてきました。'],
    csNote: '初回相談30分無料｜中文・日本語・English',
    exQ: 'いっしょに展示をつくろう',
    thQ: 'いっしょに芝居をつくろう',
    fromPrice: 'NT$ ___〜',
    poster: '本日公演',
    roomEx: 'アイデアひとつで大丈夫。物語から空間まで、\nいちばん面白いところから話しましょう。',
    roomTh: '会場・技術・制作・通訳、ぜんぶ同じキューシートに。\nそしてお弁当は絶対においしく！',
    cardRole: '独立プロデューサー',
    cv: 'Download CV',
    routeTitle: 'フライトルート',
    partnersEyebrow: 'Worked with',
    partnersTitle: '協働先',
    partnersNote: '仮のリストです。正式名称とロゴに差し替えます',
    ctaEx: '展示の相談室へ',
    ctaTh: '劇場の相談室へ',
    exWall: '展ノ間\n展示・体験デザインの協働',
    exStatement: 'キュレーション・ステートメント（仮）：リサーチを起点に、史料や技術、知識を、観客が身体で歩き、手で触れられる展示の物語へと翻訳します。ひとつひとつの展示室は、「わかる」がデザインされていく過程です。',
    exPeriod: '会期：2019 — 現在',
    scrollHint: 'スクロールして展示室へ',
    room: '展示室',
    client: '委託元',
    role: '担当',
    viewDetail: '詳しく見る',
    back: '展示室に戻る',
    challenge: '課題',
    approach: 'アプローチ',
    result: '成果',
    placeholder: '仮のテキストです。後ほど差し替えます。',
    floor: 'フロアマップ',
    entrance: '入口',
    exit: '出口 EXIT',
    thTicket: '演ノ間｜劇場コラボレーション',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'もぎり',
    tearHint: 'スクロールで半券をもぎる',
    tearHintM: 'タップかスクロールで半券をもぎる',
    openDesk: '相談室をひらく',
    thd: {
      back: '客席に戻る',
      venue: '都市・会場',
      tbc: '差し替え予定',
      origin: 'はじまり',
      production: '制作',
      performance: '上演',
      photoOrigin: '稽古・舞台裏',
      photoProd: '上演風景',
      photoPerf: '観客・カーテンコール',
      cast: 'キャスト・スタッフ',
      castRoles: ['プロデューサー', '演出', '脚本', '舞台美術', '照明', '出演'],
      next: '次の幕'
    },
    overture: '開演',
    team: 'カンパニー',
    program: 'プログラム',
    curtainCall: 'カーテンコール',
    bowTitle: '20% 實驗劇坊 制作総監督',
    bowSub: '2025 台中市優秀舞台芸術団体',
    lobby: '劇場ロビー',
    deskEx: '受付',
    deskExSub: 'RECEPTION',
    deskTh: 'チケット売り場',
    deskThSub: 'BOX OFFICE',
    norenSub: 'カーソルを合わせるか、タップして入る',
    services: 'サービスと料金',
    priceNote: '実際の費用は規模とスケジュールに応じてお見積りします',
    process: 'ご依頼の流れ',
    steps: ['ご相談', 'ご提案・お見積り', 'ご契約', '実施'],
    reviews: 'お客様の声',
    reviewEx: '展示',
    reviewTh: '劇場',
    reviewAll: 'すべて',
    teammate: 'チームメイトをお探しですか？\nまずはお話ししましょう！',
    hintSwipe: '左右にスワイプして、昼の展示と夜の劇場を切り替え',
    foot: {
      consult: 'ご相談',
      thWorks: '劇場作品',
      exWorks: '展示作品',
      home: 'ホーム',
      top: '通りへ',
      about: 'わたしについて',
      partners: '協働先',
      ex: '展示',
      galleries: '展示室',
      th: '劇場',
      program: 'プログラム',
      contact: '連絡先'
    },
    pending: '差し替え予定',
    reviewQuote: '推薦文（仮）。協働いただいた方からの、コミュニケーション・進行・成果についての声をここに掲載します。',
    reviewName: '氏名',
    reviewRole: '役職',
    reviewOrg: '所属',
    contact: 'お問い合わせ',
    book: '30分の無料相談を予約',
    reply: '2営業日以内にご返信します｜中文・日本語・English',
    form: {
      name: 'お名前',
      org: 'ご所属',
      type: '種別',
      types: ['展示', '劇場', 'その他'],
      budget: 'ご予算',
      budgets: ['未定', '50万円以下', '50–100万円', '100–250万円', '250万円以上'],
      timeline: 'スケジュール',
      timelineHint: '例：2027年春オープン',
      message: 'ご相談内容',
      submit: '送信',
      sent: '送信しました。2営業日以内にご返信します。'
    },
    exServices: [['企画ヘルスチェック', '展示・体験企画へのアドバイス', '〜／回'], ['展示企画・体験デザイン', 'リサーチ → 展示ナラティブ → 体験設計', '〜'], ['プロジェクト統括', '分野横断チーム、スケジュール・予算、実施まで', null]],
    thServices: [['申請書作成', '助成金・国際交流プログラム', '〜'], ['日本での現地コーディネート', '会場・技術・制作・通訳の手配', '〜／日'], ['日台ツアー制作', '制作全体の統括', null]],
    quote: '規模に応じてお見積り',
    backHome: '通りに戻る'
  },
  en: {
    consult: 'Consult',
    skip: 'Skip',
    replay: 'Replay the flight',
    intro: [['LEEDS 2018', 'MA Creative and Cultural Industries, University of Leeds'], ['TAIPEI 2019', '禾谷創意・啟雲科技・Independent producing'], ['MELBOURNE 2024', 'Melbourne'], ['OSAKA 2025', 'Now based in Osaka']],
    tagline: 'Intervals：Between galleries & shows',
    byline: 'NENEKO｜Exhibition・Theatre Producer｜Taipei ⇄ Osaka',
    exLine: 'Turning knowledge into experiences you can walk into.',
    thLine: 'Everything it takes for the curtain to rise.',
    exTag: 'Gallery day',
    thTag: 'Theatre night',
    exSign: ['展覽', 'Exhibition'],
    thSign: ['劇場', 'Theatre'],
    hintHover: 'Hover over a building',
    hintTap: 'Tap a building to change the sky, tap again to enter',
    aboutEyebrow: 'About',
    aboutTitle: 'About me',
    since: '© \'16 - 2026',
    about: ['Exhibition and theatre producer. MA, Creative and Cultural Industries, University of Leeds. Business-fluent in Chinese, English and Japanese, with over seven years producing exhibitions and theatre. For fun, I collect odd qualifications, like a bus driver’s licence.', 'I research industry knowledge and local history, work across borders, and together with a great many people have turned them into exhibitions and performances, so each story finds its audience.'],
    csNote: 'First 30-minute consult free｜中文・日本語・English',
    exQ: 'Let’s build an exhibition together',
    thQ: 'Let’s make a show together',
    fromPrice: 'from NT$ ___',
    poster: 'Tonight',
    roomEx: 'Just bring an idea. From narrative to space,\nlet’s start with the most interesting part.',
    roomTh: 'Venues, tech, admin, interpreting, all on one cue sheet.\nAnd the bento has to be good!',
    cardRole: 'Independent Producer',
    cv: 'Download CV',
    routeTitle: 'Flight path',
    partnersEyebrow: 'Worked with',
    partnersTitle: 'Partners',
    partnersNote: 'Placeholder list, to be replaced with official names and logos',
    ctaEx: 'To the exhibition consult room',
    ctaTh: 'To the theatre consult room',
    exWall: 'Between exhibitions\nExhibition & experience design collaborations',
    exStatement: 'Curatorial statement (placeholder): starting from research, I translate archives, technology and knowledge into exhibition narratives that visitors can walk through and take part in. Each room is a process in which understanding is designed.',
    exPeriod: 'On view: 2019 — present',
    scrollHint: 'Scroll to enter the galleries',
    room: 'Room',
    client: 'Client',
    role: 'My role',
    viewDetail: 'View details',
    back: 'Back to the gallery',
    challenge: 'Challenge',
    approach: 'Approach',
    result: 'Outcome',
    placeholder: 'Placeholder text, to be replaced.',
    floor: 'Floor plan',
    entrance: 'Entrance',
    exit: 'EXIT',
    thTicket: 'Between Performances｜Theatre Collaborations',
    ticketSub: 'Collaborations in Theatre since 2016',
    admit: 'NENEKO\'S PROFILE',
    stub: 'Mogiri',
    tearHint: 'Scroll to tear the stub',
    tearHintM: 'Tap or scroll to tear the stub',
    openDesk: 'Open the consult room',
    thd: {
      back: 'Back to the seats',
      venue: 'City & venue',
      tbc: 'TBC',
      origin: 'Origin',
      production: 'Production',
      performance: 'Performance',
      photoOrigin: 'Rehearsal / backstage',
      photoProd: 'On stage',
      photoPerf: 'Audience / curtain call',
      cast: 'Cast & crew',
      castRoles: ['Producer', 'Director', 'Playwright', 'Set design', 'Lighting design', 'Cast'],
      next: 'Next act'
    },
    overture: 'Curtain up',
    team: 'Company',
    program: 'Programme',
    curtainCall: 'Curtain call',
    bowTitle: 'Managing Director, 20% Theatre Lab',
    bowSub: '2025 Taichung Outstanding Performing Arts Group',
    lobby: 'Theatre lobby',
    deskEx: 'Reception',
    deskExSub: '受付',
    deskTh: 'Box office',
    deskThSub: '售票口',
    norenSub: 'Hover or tap to enter',
    services: 'Services & fees',
    priceNote: 'Final fees are quoted by scope and schedule',
    process: 'How we work',
    steps: ['Consult', 'Proposal & quote', 'Contract', 'Delivery'],
    reviews: 'Kind words',
    reviewEx: 'Exhibition',
    reviewTh: 'Theatre',
    reviewAll: 'All',
    teammate: 'Looking for a teammate?\nLet’s talk first!',
    hintSwipe: 'Swipe to switch between the daytime gallery and the night theatre',
    foot: {
      consult: 'Consult',
      thWorks: 'Theatre works',
      exWorks: 'Exhibition works',
      home: 'Home',
      top: 'The street',
      about: 'About me',
      partners: 'Partners',
      ex: 'Exhibition',
      galleries: 'Galleries',
      th: 'Theatre',
      program: 'Programme',
      contact: 'Contact'
    },
    pending: 'Placeholder',
    reviewQuote: 'Testimonial placeholder. A short note from a collaborator about communication, delivery and results will go here.',
    reviewName: 'Name',
    reviewRole: 'Title',
    reviewOrg: 'Organisation',
    contact: 'Contact',
    book: 'Book a free 30-minute consult',
    reply: 'Replies within 2 business days｜中文・日本語・English',
    form: {
      name: 'Name',
      org: 'Organisation',
      type: 'Type',
      types: ['Exhibition', 'Theatre', 'Other'],
      budget: 'Budget',
      budgets: ['Not sure yet', 'Under NT$50k', 'NT$50–200k', 'NT$200–500k', 'Over NT$500k'],
      timeline: 'Timeline',
      timelineHint: 'e.g. opening spring 2027',
      message: 'Details',
      submit: 'Send',
      sent: 'Sent. I’ll reply within 2 business days.'
    },
    exServices: [['Concept check-up', 'Advice on an exhibition or experience plan', 'from / session'], ['Exhibition & experience design', 'Research → narrative → experience design', 'from'], ['Project management', 'Cross-disciplinary teams, schedule, budget, delivery', null]],
    thServices: [['Grant writing', 'Funding and international exchange proposals', 'from'], ['Local coordination in Japan', 'Venues, tech, admin, interpreting', 'from / day'], ['Taiwan–Japan touring', 'Full production management', null]],
    quote: 'Quoted by scope',
    backHome: 'Back to the street'
  }
};
window.PARTNERS = ['禾谷創意', '宜東文化', '工研院 ITRI', 'Meta', '文策院TAICCA', '鮮乳坊', 'KidZania Taipei', 'Amway', '20% 實驗劇坊', '真雲林閣掌中劇團'];
window.ROUTE = [['2018', 'Leeds'], ['2019', 'Taipei'], ['2024', 'Melbourne'], ['2025', 'Osaka']];
const R = (zh, ja, en) => ({
  zh,
  ja,
  en
});
window.ROOMS = [{
  id: 'r01',
  n: '01',
  year: '2026',
  title: '司法博物館《司法的中挫與再生》',
  client: R('待補', '未記入', 'TBC'),
  role: R('體驗設計、授權管理', '体験デザイン・ライセンス管理', 'Experience design, licensing')
}, {
  id: 'r02',
  n: '02',
  year: '2025',
  title: 'KidZania「鮮乳研究中心」',
  client: R('鮮乳坊', '鮮乳坊', '鮮乳坊 (Fresh Milk Co.)'),
  role: R('體驗設計、專案 PM', '体験デザイン・PM', 'Experience design, Project manager')
}, {
  id: 'r03',
  n: '03',
  year: '2023',
  title: '工研院「史料文物館」常設展',
  client: R('工研院', 'ITRI 工業技術研究院', 'ITRI'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'r04',
  n: '04',
  year: '2022',
  title: '桃園「物我共容—工藝特展」',
  client: R('待補', '未記入', 'TBC'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'r05',
  n: '05',
  year: '2022',
  title: 'Meta × 文策院《藝術再想像》',
  client: R('Meta × 文策院', 'Meta × 文策院', 'Meta × TAICCA'),
  role: R('AR 技術團隊 PM', 'ARテクニカルチームPM', 'AR tech team PM')
}];
window.ACTS = [{
  id: 'act1',
  n: R('第一幕', '第一幕', 'Act I'),
  year: '2026',
  title: '靜岡街頭劇場節《市場に行こう！》',
  team: R('20% 實驗劇坊', '20% 實驗劇坊', '20% Theatre Lab'),
  role: R('製作人', 'プロデューサー', 'Producer')
}, {
  id: 'act2',
  n: R('第二幕', '第二幕', 'Act II'),
  year: '2025',
  title: '老派日常 2.0《貓眼所見的城市》',
  team: R('20% 實驗劇坊', '20% 實驗劇坊', '20% Theatre Lab'),
  role: R('藝術行政', 'アートマネジメント', 'Arts administration')
}, {
  id: 'act3',
  n: R('第三幕', '第三幕', 'Act III'),
  year: '2024',
  title: '彰化「半線說故事」臺語說故事劇場巡演',
  team: R('待補', '未記入', 'TBC'),
  role: R('專案 PM', 'プロジェクトPM', 'Project manager')
}, {
  id: 'act4',
  n: R('第四幕', '第四幕', 'Act IV'),
  year: '2023',
  title: '安麗沉浸式體驗劇場「求婚大作戰」「守望者藍光危機」',
  team: R('待補', '未記入', 'TBC'),
  role: R('製作人', 'プロデューサー', 'Producer')
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/i18n.js", error: String((e && e.message) || e) }); }

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.CurrencyToggle = __ds_scope.CurrencyToggle;

__ds_ns.LetterCard = __ds_scope.LetterCard;

__ds_ns.Noren = __ds_scope.Noren;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LANGS = __ds_scope.LANGS;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.FloorMap = __ds_scope.FloorMap;

__ds_ns.Plaque = __ds_scope.Plaque;

__ds_ns.Curtain = __ds_scope.Curtain;

__ds_ns.Playbill = __ds_scope.Playbill;

__ds_ns.ProgramNav = __ds_scope.ProgramNav;

__ds_ns.Ticket = __ds_scope.Ticket;

})();
