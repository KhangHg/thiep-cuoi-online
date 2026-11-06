/* Bộ dựng thiệp cưới dùng chung cho trang quản trị và trang thiệp của khách */
(function () {
  // Ảnh luôn lấy theo vị trí của card.js (để trang quản trị trên Google cũng hiện được ảnh)
  const BASE = (document.currentScript && document.currentScript.src) || location.href;
  const img = (p) => new URL(p, BASE).href;
  const FONTS = [
    { name: 'Great Vibes', cat: 'cursive', q: 'Great+Vibes' },
    { name: 'Dancing Script', cat: 'cursive', q: 'Dancing+Script:wght@400;700' },
    { name: 'Allura', cat: 'cursive', q: 'Allura' },
    { name: 'Charm', cat: 'cursive', q: 'Charm:wght@400;700' },
    { name: 'Pacifico', cat: 'cursive', q: 'Pacifico' },
    { name: 'Lobster', cat: 'cursive', q: 'Lobster' },
    { name: 'Playfair Display', cat: 'serif', q: 'Playfair+Display:wght@400;700' },
    { name: 'Cormorant Garamond', cat: 'serif', q: 'Cormorant+Garamond:wght@400;600;700' },
    { name: 'Lora', cat: 'serif', q: 'Lora:wght@400;600' },
    { name: 'Merriweather', cat: 'serif', q: 'Merriweather:wght@400;700' },
    { name: 'Roboto Slab', cat: 'serif', q: 'Roboto+Slab:wght@400;600' },
    { name: 'Be Vietnam Pro', cat: 'sans-serif', q: 'Be+Vietnam+Pro:wght@400;600' },
    { name: 'Montserrat', cat: 'sans-serif', q: 'Montserrat:wght@400;600' },
    { name: 'Nunito', cat: 'sans-serif', q: 'Nunito:wght@400;700' },
    { name: 'Quicksand', cat: 'sans-serif', q: 'Quicksand:wght@400;600' },
  ];

  const DEFAULT_EVENT = {
    groom: 'Minh Quân',
    bride: 'Thu Hà',
    groomParents: 'Ông Nguyễn Văn Hùng\nBà Trần Thị Lan',
    brideParents: 'Ông Lê Văn Nam\nBà Phạm Thị Mai',
    intro: 'Trân trọng kính mời',
    inviteLine: 'đến dự bữa tiệc chung vui cùng gia đình chúng tôi\ntrong ngày lễ thành hôn của',
    date: '2026-12-20',
    time: '11:00',
    lunar: 'Tức ngày 01 tháng 11 năm Bính Ngọ',
    venue: 'Trung tâm Hội nghị Tiệc cưới Hoa Sen',
    address: '123 Đường Hoa Sữa, Quận 1, TP. Hồ Chí Minh',
    mapUrl: '',
    brideVenue: '',
    brideAddress: '',
    brideMapUrl: '',
    photoUrl: '',
    message: 'Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi!',
    phone: '',
  };

  const DEFAULT_DESIGN = {
    scriptFont: 'Great Vibes',
    headingFont: 'Playfair Display',
    bodyFont: 'Lora',
    namesSize: 56,
    guestSize: 30,
    bodySize: 16,
    bg: '#f6e9e6',
    cardBg: '#fffaf7',
    primary: '#b4636e',
    text: '#4a3b3b',
    accent: '#d9a5a0',
    border: 'inset',
    ornament: 'floral',
    pattern: 'dots',
    align: 'center',
    width: 520,
    radius: 16,
    showParents: true,
    showCountdown: true,
    showRsvp: true,
    bgImage: 'images/nen-cuoi-2.webp',
    bgMode: 'top',
    bgOpacity: 35,
  };

  const PRESETS = {
    'Hồng pastel': {},
    'Vàng sang trọng': { bg: '#1f1b16', cardBg: '#2a241c', primary: '#d4af37', text: '#f3e9d2', accent: '#8c7330', scriptFont: 'Allura', headingFont: 'Cormorant Garamond', bodyFont: 'Cormorant Garamond', bodySize: 18, border: 'corners', ornament: 'stars', pattern: 'grid' },
    'Đỏ truyền thống': { bg: '#8e1b1b', cardBg: '#fff6e5', primary: '#b3121b', text: '#5a1a12', accent: '#d4a017', scriptFont: 'Charm', headingFont: 'Playfair Display', bodyFont: 'Be Vietnam Pro', border: 'double', ornament: 'songhy', pattern: 'hearts', namesSize: 50 },
    'Xanh vintage': { bg: '#e3ebe1', cardBg: '#fbfbf6', primary: '#4f6f52', text: '#33413a', accent: '#a7bfa2', scriptFont: 'Dancing Script', headingFont: 'Lora', bodyFont: 'Quicksand', border: 'solid', ornament: 'leaf', pattern: 'none', radius: 4 },
    'Tối giản': { bg: '#f2f2f2', cardBg: '#ffffff', primary: '#222222', text: '#444444', accent: '#bbbbbb', scriptFont: 'Playfair Display', headingFont: 'Montserrat', bodyFont: 'Montserrat', namesSize: 44, guestSize: 26, bodySize: 15, border: 'none', ornament: 'line', pattern: 'none', radius: 0 },
  };

  const OPTIONS = {
    border: { none: 'Không viền', solid: 'Viền đơn', double: 'Viền đôi', inset: 'Khung lồng', corners: 'Góc trang trí' },
    ornament: { none: 'Không', floral: 'Hoa lá ❦', hearts: 'Trái tim ♥', songhy: 'Song hỷ 囍', stars: 'Ngôi sao ✦', leaf: 'Lá ❧', line: 'Đường kẻ' },
    pattern: { none: 'Trơn', dots: 'Chấm bi', grid: 'Kẻ ô', hearts: 'Trái tim' },
    align: { center: 'Giữa', left: 'Trái' },
    bgImage: { '': 'Không dùng ảnh', 'images/nen-cuoi-2.webp': 'Cặp đôi & Taj Mahal' },
    bgMode: { top: 'Ảnh ở đầu thiệp', card: 'Phủ kín nền thiệp (mờ)', page: 'Nền trang phía sau thiệp' },
  };

  const ORN = { floral: '❦', hearts: '♡ ♥ ♡', songhy: '囍', stars: '✦ ✧ ✦', leaf: '❧', line: '' };
  const DIV = { floral: '❦', hearts: '♥', songhy: '❀', stars: '✦', leaf: '❧' };
  const WEEKDAYS = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nl2br = (s) => esc(s).replace(/\n/g, '<br>');
  const color = (v, def) => (/^#[0-9a-f]{3,8}$/i.test(v || '') ? v : def);
  const num = (v, min, max, def) => { const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : def; };
  const font = (v, def) => (FONTS.some((f) => f.name === v) ? v : def);
  const opt = (key, v, def) => (v in OPTIONS[key] ? v : def);
  const url = (v) => (/^https?:\/\//i.test(v || '') ? v : '');
  const fontStack = (name) => { const f = FONTS.find((x) => x.name === name); return `'${name}', ${f ? f.cat : 'serif'}`; };

  function loadFonts(names) {
    names.forEach((n) => {
      const f = FONTS.find((x) => x.name === n);
      const id = 'wcf-' + n.replace(/\s/g, '-');
      if (!f || document.getElementById(id)) return;
      const l = document.createElement('link');
      l.id = id; l.rel = 'stylesheet';
      l.href = `https://fonts.googleapis.com/css2?family=${f.q}&display=swap`;
      document.head.appendChild(l);
    });
  }

  function normalize(event, design) {
    const e = { ...DEFAULT_EVENT, ...(event || {}) };
    const s = { ...DEFAULT_DESIGN, ...(design || {}) };
    const D = DEFAULT_DESIGN;
    const d = {
      scriptFont: font(s.scriptFont, D.scriptFont), headingFont: font(s.headingFont, D.headingFont), bodyFont: font(s.bodyFont, D.bodyFont),
      namesSize: num(s.namesSize, 20, 120, D.namesSize), guestSize: num(s.guestSize, 12, 80, D.guestSize), bodySize: num(s.bodySize, 10, 28, D.bodySize),
      bg: color(s.bg, D.bg), cardBg: color(s.cardBg, D.cardBg), primary: color(s.primary, D.primary), text: color(s.text, D.text), accent: color(s.accent, D.accent),
      border: opt('border', s.border, D.border), ornament: opt('ornament', s.ornament, D.ornament), pattern: opt('pattern', s.pattern, D.pattern), align: opt('align', s.align, D.align),
      width: num(s.width, 300, 800, D.width), radius: num(s.radius, 0, 60, D.radius),
      showParents: !!s.showParents, showCountdown: !!s.showCountdown, showRsvp: !!s.showRsvp,
      bgImage: opt('bgImage', s.bgImage, D.bgImage), bgMode: opt('bgMode', s.bgMode, D.bgMode), bgOpacity: num(s.bgOpacity, 0, 100, D.bgOpacity),
    };
    return { e, d };
  }

  // Lớp phủ màu để làm mờ ảnh: độ đậm ảnh 100% = không phủ
  const veil = (col, op) => { const m = `color-mix(in srgb, ${col} ${100 - op}%, transparent)`; return `linear-gradient(${m}, ${m})`; };

  function patternCss(d) {
    const c = d.accent;
    if (d.bgImage && d.bgMode === 'page') return `${veil(d.bg, d.bgOpacity)}, url("${img(d.bgImage)}") center/cover no-repeat fixed, ${d.bg}`;
    switch (d.pattern) {
      case 'dots': return `radial-gradient(${c}55 1.5px, transparent 2px) 0 0/22px 22px, ${d.bg}`;
      case 'grid': return `linear-gradient(${c}33 1px, transparent 1px) 0 0/28px 28px, linear-gradient(90deg, ${c}33 1px, transparent 1px) 0 0/28px 28px, ${d.bg}`;
      case 'hearts': {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M20 30s-9-5.6-9-11.2A4.8 4.8 0 0 1 20 16a4.8 4.8 0 0 1 9 2.8C29 24.4 20 30 20 30z' fill='${c}' fill-opacity='.35'/></svg>`;
        return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 0 0/40px 40px, ${d.bg}`;
      }
      default: return d.bg;
    }
  }

  const CSS = `
  .wc{min-height:100%;padding:36px 14px;display:flex;justify-content:center;align-items:flex-start;box-sizing:border-box}
  .wc *{box-sizing:border-box}
  .wc-card{position:relative;width:100%;max-width:var(--w);background:var(--card);color:var(--text);border-radius:var(--r);padding:52px 34px 44px;text-align:var(--align);font-family:var(--f-body);font-size:var(--s-body);line-height:1.6;box-shadow:0 24px 60px rgba(0,0,0,.18)}
  .wc-b-solid{border:2px solid var(--primary)}
  .wc-b-double{border:6px double var(--primary)}
  .wc-b-inset{box-shadow:inset 0 0 0 10px var(--card),inset 0 0 0 11px var(--primary),inset 0 0 0 14px var(--card),inset 0 0 0 15px var(--accent),0 24px 60px rgba(0,0,0,.18)}
  .wc-corner{position:absolute;width:46px;height:46px;border:2px solid var(--primary)}
  .wc-corner.tl{top:12px;left:12px;border-right:0;border-bottom:0;border-top-left-radius:calc(var(--r)*.6)}
  .wc-corner.tr{top:12px;right:12px;border-left:0;border-bottom:0;border-top-right-radius:calc(var(--r)*.6)}
  .wc-corner.bl{bottom:12px;left:12px;border-right:0;border-top:0;border-bottom-left-radius:calc(var(--r)*.6)}
  .wc-corner.br{bottom:12px;right:12px;border-left:0;border-top:0;border-bottom-right-radius:calc(var(--r)*.6)}
  .wc-corner{z-index:1}
  .wc-hero{margin:-38px -20px 14px;aspect-ratio:3/2;background-size:cover;background-position:center;border-radius:calc(var(--r)*.6) calc(var(--r)*.6) 0 0;-webkit-mask-image:linear-gradient(to bottom,#000 72%,transparent);mask-image:linear-gradient(to bottom,#000 72%,transparent)}
  .wc-orn{color:var(--primary);font-size:30px;line-height:1;margin-bottom:10px;letter-spacing:6px}
  .wc-orn.songhy{font-size:54px;font-family:serif;font-weight:700}
  .wc-div{display:flex;align-items:center;gap:12px;margin:22px 0;color:var(--accent)}
  .wc-div::before,.wc-div::after{content:"";flex:1;height:1px;background:var(--accent)}
  .wc[data-align=left] .wc-div::before{flex:0 0 0}
  .wc-photo{width:150px;height:150px;border-radius:50%;object-fit:cover;border:4px solid var(--accent);margin:0 auto 18px;display:block}
  .wc[data-align=left] .wc-photo{margin-left:0}
  .wc-intro{font-family:var(--f-head);text-transform:uppercase;letter-spacing:3px;font-size:.85em;margin:0;opacity:.85}
  .wc-guest{font-family:var(--f-head);font-size:var(--s-guest);color:var(--primary);margin:8px 0 6px;font-weight:700;line-height:1.25;word-break:break-word}
  .wc-line{margin:0 0 6px;opacity:.9}
  .wc-names{font-family:var(--f-script);font-size:var(--s-names);color:var(--primary);line-height:1.15;margin:10px 0 4px;font-weight:400}
  .wc-names .amp{display:block;font-size:.55em;color:var(--accent);margin:2px 0}
  .wc-parents{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:18px 0 6px;font-size:.88em}
  .wc-parents h4{font-family:var(--f-head);color:var(--primary);margin:0 0 4px;font-size:.95em;text-transform:uppercase;letter-spacing:2px}
  .wc-parents p{margin:0}
  .wc-date{display:flex;align-items:center;justify-content:var(--justify);gap:16px;font-family:var(--f-head);margin:6px 0}
  .wc-date .side{text-transform:uppercase;letter-spacing:2px;font-size:.85em;padding:6px 0;border-top:1px solid var(--accent);border-bottom:1px solid var(--accent);min-width:90px;text-align:center}
  .wc-date .day{font-size:3.2em;color:var(--primary);font-weight:700;line-height:1}
  .wc-lunar{font-style:italic;font-size:.88em;opacity:.8;margin:4px 0 0}
  .wc-venue{margin-top:6px}
  .wc-venue strong{font-family:var(--f-head);color:var(--primary);font-size:1.1em;display:block}
  .wc-party{margin:0 0 4px;text-transform:uppercase;letter-spacing:2px;font-size:.78em;opacity:.8}
  .wc-btn{display:inline-block;margin:10px 6px 0 0;padding:8px 18px;border-radius:999px;border:1px solid var(--primary);color:var(--primary);text-decoration:none;font-family:var(--f-head);font-size:.85em;letter-spacing:1px;background:transparent;cursor:pointer}
  .wc-btn.fill{background:var(--primary);color:var(--card)}
  .wc-msg{font-style:italic;margin:0}
  .wc-cd{display:flex;justify-content:var(--justify);gap:10px;margin-top:16px}
  .wc-cd div{min-width:62px;padding:8px 4px;border:1px solid var(--accent);border-radius:10px;text-align:center}
  .wc-cd b{display:block;font-family:var(--f-head);font-size:1.5em;color:var(--primary);line-height:1.1}
  .wc-cd span{font-size:.7em;text-transform:uppercase;letter-spacing:1px}
  .wc-rsvp{position:relative}
  .wc-q{font-family:var(--f-head);color:var(--primary);font-size:1.15em;font-weight:700;margin:0 0 6px;line-height:1.35}
  .wc-choices{display:flex;gap:12px;justify-content:var(--justify);flex-wrap:wrap;margin-top:14px}
  .wc-rsvp .wc-btn{margin:0}
  .wc-btn.big{padding:12px 22px;font-size:.95em}
  .wc-run{transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
  .wc-taunt{min-height:1.5em;margin:12px 0 0;font-style:italic;color:var(--primary);transition:opacity .3s}
  .wc-step{display:flex;align-items:center;justify-content:var(--justify);gap:16px;margin:10px 0 0}
  .wc-step button{width:40px;height:40px;border-radius:50%;border:1px solid var(--primary);background:transparent;color:var(--primary);font-size:22px;line-height:1;cursor:pointer}
  .wc-step b{font-size:2.2em;font-family:var(--f-head);color:var(--primary);min-width:44px;text-align:center}
  .wc-rsvp textarea{display:block;width:100%;border:1px solid var(--accent);border-radius:12px;padding:10px 12px;font:inherit;font-size:.92em;background:transparent;color:inherit;margin-top:12px;resize:vertical}
  .wc-emoji{font-size:54px;line-height:1;margin:4px 0 8px;display:inline-block;animation:wc-bob 1.6s ease-in-out infinite}
  @keyframes wc-bob{50%{transform:translateY(-6px) rotate(-8deg)}}
  .wc-pulse{animation:wc-pulse 1.3s ease-in-out infinite}
  @keyframes wc-pulse{50%{transform:scale(1.07)}}
  .wc-link{background:none;border:0;color:inherit;opacity:.7;text-decoration:underline;cursor:pointer;font:inherit;font-size:.85em;margin-top:14px;padding:4px}
  .wc-small{font-size:.82em;opacity:.8;margin:12px 0 0}
  .wc-small a{color:var(--primary)}
  .wc-confetti{position:fixed;top:-40px;pointer-events:none;z-index:9999;animation:wc-fall linear forwards}
  @keyframes wc-fall{to{transform:translateY(110vh) rotate(540deg)}}
  @media (max-width:480px){.wc-card{padding:44px 22px 36px}.wc-parents{grid-template-columns:1fr}.wc-hero{margin:-30px -8px 12px}}
  `;

  function ensureCss() {
    if (document.getElementById('wc-style')) return;
    const st = document.createElement('style');
    st.id = 'wc-style'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ================= XÁC NHẬN THAM DỰ: chỉ Có / Không, đổi ý được ================= */
  function confetti() {
    const em = ['🎉', '💖', '🌸', '✨', '🥂', '💍', '🎊'];
    for (let i = 0; i < 40; i++) {
      const s = document.createElement('span');
      s.className = 'wc-confetti';
      s.textContent = em[i % em.length];
      s.style.left = Math.random() * 100 + 'vw';
      s.style.animationDuration = 2 + Math.random() * 2.5 + 's';
      s.style.animationDelay = Math.random() * 0.6 + 's';
      s.style.fontSize = 16 + Math.random() * 18 + 'px';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 5500);
    }
  }

  function setupRsvp(box, { guest, guestName, dd, m, phone, preview }) {
    const gid = guest && guest.id ? String(guest.id) : '';
    const KEY = 'wc-rsvp-' + (gid || guestName);
    let attend = null;
    if (!preview) { try { attend = (JSON.parse(localStorage.getItem(KEY)) || {}).attend || null; } catch (_) {} }
    const when = dd ? `ngày ${String(dd).padStart(2, '0')}/${String(m).padStart(2, '0')}` : 'ngày cưới';
    const $ = (s) => box.querySelector(s);

    function ask() {
      box.innerHTML = `
        <p class="wc-q">${esc(guestName)} có đến chung vui cùng tụi mình không? 🥳</p>
        <div class="wc-choices">
          <button type="button" class="wc-btn big fill" data-a="yes">Có, mình sẽ đến 🎉</button>
          <button type="button" class="wc-btn big" data-a="no">Không đến được 😢</button>
        </div>`;
      $('[data-a=yes]').onclick = () => submit('yes');
      $('[data-a=no]').onclick = () => submit('no');
    }

    async function submit(a) {
      attend = a;
      if (!preview) try { localStorage.setItem(KEY, JSON.stringify({ attend })); } catch (_) {}
      done('sending');
      let s = 'preview';
      if (!preview) {
        s = 'fail';
        if (gid) {
          try {
            const remote = (window.WEDDING_CONFIG || {}).rsvpUrl;
            const body = JSON.stringify({ id: gid, name: guestName, attend });
            // Google Apps Script: gửi dạng text/plain để tránh lỗi CORS; local: server.rb
            const r = remote
              ? await fetch(remote, { method: 'POST', body })
              : await fetch('api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
            if (r.ok && (await r.json()).ok) s = 'ok';
          } catch (_) {}
        }
      }
      done(s);
      if (a === 'yes') confetti();
    }

    function statusLine(s) {
      if (s === 'sending') return '<p class="wc-small">Đang gửi... 🕊️</p>';
      if (s === 'ok') return '<p class="wc-small">✓ Đã gửi tới cô dâu chú rể</p>';
      if (s === 'preview') return '<p class="wc-small">(Bản xem trước — không gửi đi)</p>';
      if (s === 'fail') {
        const body = encodeURIComponent(`${guestName}: ${attend === 'yes' ? 'sẽ tham dự' : 'rất tiếc không tham dự được'}.`);
        return `<p class="wc-small">😅 Chưa gửi được qua mạng.${phone ? ` <a href="sms:${esc(phone)}?&body=${body}">Nhắn tin báo giúp tụi mình nha</a>` : ''}</p>`;
      }
      return '';
    }

    function done(s) {
      box.innerHTML = attend === 'yes'
        ? `<span class="wc-emoji">🎉</span>
           <p class="wc-q">Tuyệt quá! Hẹn gặp ${esc(guestName)} ${when} nhé!</p>
           ${statusLine(s)}
           <button type="button" class="wc-link" data-change>Đổi ý</button>`
        : `<span class="wc-emoji">😢</span>
           <p class="wc-q">Tiếc ghê... tụi mình vẫn mong được gặp ${esc(guestName)} lắm ❤️</p>
           ${statusLine(s)}
           <div class="wc-choices"><button type="button" class="wc-btn big fill wc-pulse" data-yes>Đổi ý, mình sẽ đến! 🏃💨</button></div>`;
      const c = $('[data-change]');
      if (c) c.onclick = ask;
      const y = $('[data-yes]');
      if (y) y.onclick = () => submit('yes');
    }

    if (attend) done(); else ask();
  }

  function render(el, { event, design, guest, preview } = {}) {
    ensureCss();
    const { e, d } = normalize(event, design);
    loadFonts([d.scriptFont, d.headingFont, d.bodyFont]);
    if (el._wcTimer) clearInterval(el._wcTimer);

    const guestName = guest ? `${guest.title ? guest.title + ' ' : ''}${guest.name || ''}`.trim() : 'Tên khách mời';
    const [y, m, dd] = (e.date || '').split('-').map(Number);
    const dt = y ? new Date(y, m - 1, dd) : null;
    const orn = ORN[d.ornament];
    const ornHtml = d.ornament === 'none' ? '' : d.ornament === 'line' ? '<div class="wc-div"></div>' : `<div class="wc-orn ${d.ornament}">${orn}</div>`;
    const divider = `<div class="wc-div">${DIV[d.ornament] || ''}</div>`;
    // Khách nhà gái xem địa điểm tiệc nhà gái (nếu đã nhập), còn lại xem địa điểm tiệc nhà trai
    const brideSide = !!(guest && guest.side === 'Nhà gái' && (e.brideVenue || e.brideAddress));
    const twoParties = !!(e.brideVenue || e.brideAddress);
    const venue = brideSide ? e.brideVenue : e.venue;
    const address = brideSide ? e.brideAddress : e.address;
    const map = url(brideSide ? e.brideMapUrl : e.mapUrl) || (address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue + ' ' + address)}` : '');
    const photo = url(e.photoUrl);
    const phone = (e.phone || '').replace(/[^\d+]/g, '');
    const smsBody = encodeURIComponent(`${guestName}: xác nhận sẽ tham dự đám cưới ${e.groom} & ${e.bride}.`);

    const vars = [
      `--bg:${d.bg}`, `--card:${d.cardBg}`, `--primary:${d.primary}`, `--text:${d.text}`, `--accent:${d.accent}`,
      `--f-script:${fontStack(d.scriptFont)}`, `--f-head:${fontStack(d.headingFont)}`, `--f-body:${fontStack(d.bodyFont)}`,
      `--s-names:${d.namesSize}px`, `--s-guest:${d.guestSize}px`, `--s-body:${d.bodySize}px`,
      `--w:${d.width}px`, `--r:${d.radius}px`, `--align:${d.align}`, `--justify:${d.align === 'left' ? 'flex-start' : 'center'}`,
    ].join(';');

    el.innerHTML = `
    <div class="wc" data-align="${d.align}" style="${esc(vars)};background:${esc(patternCss(d))}">
      <div class="wc-card wc-b-${d.border}"${d.bgImage && d.bgMode === 'card' ? ` style="background:${esc(`${veil(d.cardBg, d.bgOpacity)}, url("${img(d.bgImage)}") center/cover no-repeat, ${d.cardBg}`)}"` : ''}>
        ${d.border === 'corners' ? '<i class="wc-corner tl"></i><i class="wc-corner tr"></i><i class="wc-corner bl"></i><i class="wc-corner br"></i>' : ''}
        ${d.bgImage && d.bgMode === 'top' ? `<div class="wc-hero" style="background-image:url(&quot;${esc(img(d.bgImage))}&quot;)"></div>` : ''}
        ${ornHtml}
        ${photo ? `<img class="wc-photo" src="${esc(photo)}" alt="">` : ''}
        <p class="wc-intro">${esc(e.intro)}</p>
        <h2 class="wc-guest">${esc(guestName)}</h2>
        <p class="wc-line">${nl2br(e.inviteLine)}</p>
        <h1 class="wc-names">${esc(e.groom)}<span class="amp">&amp;</span>${esc(e.bride)}</h1>
        ${d.showParents && (e.groomParents || e.brideParents) ? `
        <div class="wc-parents">
          <div><h4>Nhà trai</h4><p>${nl2br(e.groomParents)}</p></div>
          <div><h4>Nhà gái</h4><p>${nl2br(e.brideParents)}</p></div>
        </div>` : ''}
        ${divider}
        ${dt ? `
        <div class="wc-date">
          <div class="side">${WEEKDAYS[dt.getDay()]}</div>
          <div class="day">${String(dd).padStart(2, '0')}</div>
          <div class="side">Tháng ${m}<br>${y}</div>
        </div>
        <p style="margin:6px 0 0">Vào lúc <strong>${esc(e.time)}</strong></p>` : ''}
        ${e.lunar ? `<p class="wc-lunar">${esc(e.lunar)}</p>` : ''}
        ${divider}
        <div class="wc-venue">
          ${twoParties ? `<p class="wc-party">${brideSide ? 'Tiệc cưới nhà gái' : 'Tiệc cưới nhà trai'}</p>` : ''}
          <strong>${esc(venue)}</strong>
          <span>${nl2br(address)}</span><br>
          ${map ? `<a class="wc-btn" href="${esc(map)}" target="_blank" rel="noopener">📍 Xem bản đồ</a>` : ''}
        </div>
        ${d.showCountdown && dt ? '<div class="wc-cd" data-cd></div>' : ''}
        ${e.message ? `${divider}<p class="wc-msg">${nl2br(e.message)}</p>` : ''}
        ${d.showRsvp ? `
        ${divider}
        <div class="wc-rsvp" data-rsvp></div>
        ${phone ? `<p class="wc-small">Cần hỏi gì thêm? <a href="tel:${esc(phone)}">📞 Gọi cho tụi mình</a></p>` : ''}` : ''}
      </div>
    </div>`;

    const rsvpBox = el.querySelector('[data-rsvp]');
    if (rsvpBox) setupRsvp(rsvpBox, { guest, guestName, e, dd, m, phone, smsBody, preview: !!preview });

    const cd = el.querySelector('[data-cd]');
    if (cd) {
      const [hh, mm] = (e.time || '00:00').split(':').map(Number);
      const target = new Date(y, m - 1, dd, hh || 0, mm || 0).getTime();
      const tick = () => {
        let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
        const parts = [[Math.floor(s / 86400), 'Ngày'], [Math.floor((s % 86400) / 3600), 'Giờ'], [Math.floor((s % 3600) / 60), 'Phút'], [s % 60, 'Giây']];
        cd.innerHTML = parts.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('');
      };
      tick();
      el._wcTimer = setInterval(tick, 1000);
    }
    return { e, d };
  }

  /* Mã hoá dữ liệu thiệp vào link (nén + base64url) */
  const toB64 = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const fromB64 = (str) => { const b = atob(str.replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(b, (c) => c.charCodeAt(0)); };
  const pipe = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());

  async function encode(obj) {
    const bytes = new TextEncoder().encode(JSON.stringify(obj));
    if (typeof CompressionStream !== 'undefined') return '1' + toB64(await pipe(bytes, new CompressionStream('deflate-raw')));
    return '0' + toB64(bytes);
  }
  async function decode(str) {
    let bytes = fromB64(str.slice(1));
    if (str[0] === '1') bytes = await pipe(bytes, new DecompressionStream('deflate-raw'));
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  // Chỉ lưu những trường khác mặc định để link ngắn hơn
  function diff(obj, def) {
    const out = {};
    for (const k in obj) if (obj[k] !== def[k]) out[k] = obj[k];
    return out;
  }

  window.WeddingCard = { FONTS, PRESETS, OPTIONS, DEFAULT_EVENT, DEFAULT_DESIGN, render, loadFonts, encode, decode, diff, esc };
})();
