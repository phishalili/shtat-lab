'use strict';
/* Shtat Lab: DP toolkit + lighting school. Everything is stored on this device (localStorage). */

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
const clone = o => JSON.parse(JSON.stringify(o));
const pad = (n, l = 2) => String(n).padStart(l, '0');
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayStr = () => ymd(new Date());
const parseDay = (s, t) => { if (!s) return null; const [y, m, d] = s.split('-').map(Number); const [hh, mm] = (t || '12:00').split(':').map(Number); return new Date(y, m - 1, d, hh || 0, mm || 0); };
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const fmtDay = s => { const d = parseDay(s); return d ? `${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}` : 'No date'; };
const fmtDayLong = s => { const d = parseDay(s); return d ? d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : ''; };
const fmtT = (d, tz) => { if (!d || isNaN(d)) return '--:--'; try { return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, ...(tz ? { timeZone: tz } : {}) }); } catch (e) { return `${pad(d.getHours())}:${pad(d.getMinutes())}`; } };
const dur = ms => { const m = Math.round(Math.abs(ms) / 6e4), h = Math.floor(m / 60); return h ? `${h}h ${pad(m % 60)}m` : `${m}m`; };
const num = v => { const n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : 0; };

// ---------- icons ----------
const ic = (p, w = 1.8) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const I = {
  back: ic('<path d="m15 18-6-6 6-6"/>', 2.2), chev: ic('<path d="m9 18 6-6-6-6"/>', 2),
  plus: ic('<path d="M12 5v14M5 12h14"/>', 2.2), x: ic('<path d="M18 6 6 18M6 6l12 12"/>', 2),
  gear: ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
  sun: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  pin: ic('<path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
  loc: ic('<path d="m3 11 19-9-9 19-2-8z"/>'),
  clap: ic('<path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="m3 9 1.2-4.6a1 1 0 0 1 1.2-.7l14.2 3.6-.5 1.7"/><path d="m8 4.6 2 4.4M13.5 6l2 3"/>'),
  eye: ic('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  frame: ic('<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><circle cx="12" cy="12" r="3"/>'),
  lens: ic('<circle cx="12" cy="12" r="9"/><path d="m14.3 3.3-4.6 8M21 12h-9.2M14.3 20.7 9.7 12.7M9.7 3.3l4.6 8M3 12h9.2M9.7 20.7l4.6-8"/>'),
  focus: ic('<circle cx="12" cy="12" r="2"/><path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4"/><path d="M7 12h-2M19 12h-2M12 7V5M12 19v-2"/>'),
  shutter: ic('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9h-9z" fill="currentColor" opacity=".35"/>'),
  nd: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 12h18" /><path d="M3 5l18 14" opacity=".5"/>'),
  card: ic('<path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M8 2v4M11 2v4M14 2v4"/>'),
  tc: ic('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3"/>'),
  phone: ic('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
  doc: ic('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>'),
  share: ic('<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>'),
  map: ic('<path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),
  copy: ic('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),
  trash: ic('<path d="M3 6h18M8 6V4h8v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/>'),
  user: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  brief: ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>'),
  cap: ic('<path d="M2 8.5 12 4l10 4.5-10 4.5z"/><path d="M6 10.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-5.5"/>'),
  cloud: ic('<path d="M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19z"/>'),
  flame: ic('<path d="M12 22c4 0 7-2.7 7-7 0-5-5-7-5-13-3 2-6 6-6 10-1-1-2-2-2-4-1 2-1 4-1 7 0 4.3 3 7 7 7z"/>'),
  check: ic('<path d="M20 6 9 17l-5-5"/>', 2.4),
  bolt: ic('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
  ratio: ic('<rect x="2" y="6" width="20" height="12" rx="1.5"/><rect x="8" y="4" width="8" height="16" rx="1.5"/>'),
  up: ic('<path d="m18 15-6-6-6 6"/>', 2), down: ic('<path d="m6 9 6 6 6-6"/>', 2),
};

// ---------- state ----------
const KEY = 'shtatlab.v1';
const OLD_KIT = 'Camera body + cage\nLenses (clean)\nBatteries charged\nMedia cards formatted\nTripod / gimbal\nND filters / VND\nMonitor + cables\nAudio recorder + lavs\nLights + stands + sandbags\nDiffusion / bounce / flags\nBackup drive + card reader\nGaffer tape, clamps, extension leads';
const KIT_R6 = 'Canon R6 Mark II body + cage\nRF 50mm f/1.8 STM\nRF 10-18mm f/4.5-6.3 IS STM\nSamyang lens set (caps on, glass clean)\nLP-E6NH batteries x4 charged + charger\n128 GB SD cards x2 per slot, formatted in camera\nCanon Log 3 / LUT on monitor checked\nVND / ND filters + step-up rings\nTripod / gimbal + quick release plates\nMonitor + HDMI cable (full size)\nAudio recorder + lavs, fresh batteries\nLights + stands + sandbags\nDiffusion / bounce / flags\nBackup drive + card reader\nGaffer tape, clamps, extension leads';
const LENSES_DEF = 'RF 50mm f/1.8\nRF 10-18mm f/4.5-6.3\nSamyang 14mm T3.1\nSamyang 24mm T1.5\nSamyang 35mm T1.5\nSamyang 50mm T1.5\nSamyang 85mm T1.5\nSamyang 135mm T2.2';
const myLenses = () => String(S.settings.lenses || '').split('\n').map(x => x.trim()).filter(Boolean);
const myFocals = () => { const f = new Set(); myLenses().forEach(l => { const m = l.match(/(\d+)(?:\s*-\s*(\d+))?\s*mm/i); if (m) { f.add(+m[1]); if (m[2]) f.add(+m[2]); } }); const a = [...f].sort((x, y) => x - y); return a.length ? a : [24, 35, 50, 85]; };
const DEF = {
  settings: {
    name: 'Phis', company: 'shtat.cool', email: '', phone: '', address: '', web: 'shtat.cool', iban: '', vatNo: '',
    cur: '€', vat: 0, sensor: 'ff', lat: null, lon: null, place: '', tz: '', phoneMm: 26, terms: 14,
    kit: KIT_R6,
    camera: 'Canon EOS R6 Mark II', lenses: LENSES_DEF,
    footer: 'Thank you for working with us.', seq: 0, installDismissed: false,
  },
  clients: [], projects: [], shoots: [],
  tools: { sensor: 'ff', focal: 50, fstop: 1.8, dist: 3, fps: 25, angle: 180, ndFrom: 11, ndTo: 1.8, codec: 470, mins: 60, cardGB: 128, tcA: '01:00:00:00', tcB: '00:00:10:00', tcOp: '+', tcFps: 25, tcFrames: 250, sunDate: '', vfAspect: '2.39', vfFocal: 50, vfGrid: true, other: 's35' },
  slate: { prod: 'SHTAT', roll: 'A001', scene: '1', take: 1, shot: 'A', fps: 25, beep: true },
  ui: { studio: 'pipe', status: 'all' },
};
let S = load();
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (d && d.settings) {
      const o = clone(DEF);
      for (const k of Object.keys(o)) if (d[k] !== undefined) o[k] = (typeof o[k] === 'object' && !Array.isArray(o[k])) ? { ...o[k], ...d[k] } : d[k];
      if (!o.settings.lenses) o.settings.lenses = LENSES_DEF;
      if (!o.settings.camera) o.settings.camera = 'Canon EOS R6 Mark II';
      if (o.settings.kit === OLD_KIT) o.settings.kit = KIT_R6;
      if (!o.tools.r6) { o.tools.r6 = 1; if (o.tools.codec === 707) o.tools.codec = 470; if (o.tools.cardGB === 256) o.tools.cardGB = 128; }
      return o;
    }
  } catch (e) { }
  return clone(DEF);
}
let saveT;
function save() { clearTimeout(saveT); saveT = setTimeout(saveNow, 250); }
function saveNow() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Storage is full'); } }
addEventListener('pagehide', saveNow);
document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); });

function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 1900); }
const money = (n, c = S.settings.cur) => `${(Math.round((n || 0) * 100) / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${c}`;
const moneyShort = n => { n = n || 0; const c = S.settings.cur; return n >= 10000 ? `${(n / 1000).toLocaleString('de-DE', { maximumFractionDigits: 1 })}k ${c}` : `${Math.round(n).toLocaleString('de-DE')} ${c}`; };

// ---------- sun (after the SunCalc formulas, V. Agafonkin, BSD) ----------
const SUN = (() => {
  const rad = Math.PI / 180, dayMs = 864e5, J1970 = 2440588, J2000 = 2451545, e = rad * 23.4397, J0 = 0.0009;
  const toDays = d => d.valueOf() / dayMs - 0.5 + J1970 - J2000;
  const fromJ = j => new Date((j + 0.5 - J1970) * dayMs);
  const dec = l => Math.asin(Math.sin(e) * Math.sin(l));
  const ra = l => Math.atan2(Math.sin(l) * Math.cos(e), Math.cos(l));
  const M = d => rad * (357.5291 + 0.98560028 * d);
  const L = m => m + rad * (1.9148 * Math.sin(m) + 0.02 * Math.sin(2 * m) + 0.0003 * Math.sin(3 * m)) + rad * 102.9372 + Math.PI;
  function pos(date, lat, lng) {
    const lw = rad * -lng, phi = rad * lat, d = toDays(date), m = M(d), l = L(m), dc = dec(l), H = rad * (280.16 + 360.9856235 * d) - lw - ra(l);
    const alt = Math.asin(Math.sin(phi) * Math.sin(dc) + Math.cos(phi) * Math.cos(dc) * Math.cos(H));
    const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dc) * Math.cos(phi));
    return { alt: alt / rad, az: (az / rad + 180 + 360) % 360 };
  }
  function times(date, lat, lng) {
    const lw = rad * -lng, phi = rad * lat, d = toDays(date), n = Math.round(d - J0 - lw / (2 * Math.PI));
    const ds = J0 + lw / (2 * Math.PI) + n, m = M(ds), l = L(m), dc = dec(l);
    const transit = (a) => J2000 + a + 0.0053 * Math.sin(m) - 0.0069 * Math.sin(2 * l);
    const noon = transit(ds);
    const at = h => { const w = Math.acos((Math.sin(h * rad) - Math.sin(phi) * Math.sin(dc)) / (Math.cos(phi) * Math.cos(dc))); if (isNaN(w)) return [null, null]; const set = transit(J0 + (w + lw) / (2 * Math.PI) + n); return [fromJ(noon - (set - noon)), fromJ(set)]; };
    const [rise, set] = at(-0.833), [dawn, dusk] = at(-6), [bh1, bh2] = at(-4), [gh1, gh2] = at(6);
    return { noon: fromJ(noon), rise, set, dawn, dusk, bh1, bh2, gh1, gh2 };
  }
  return { pos, times };
})();
const COMPASS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const compass = a => COMPASS[Math.round(a / 22.5) % 16];

function sunBlock(date, lat, lon, tz, opts = {}) {
  if (lat == null || lon == null) return `<div class="between"><div class="mute small">Set a location to see sunrise, golden hour and blue hour.</div><button class="btn sm" data-a="myloc" data-t="${opts.target || 'settings'}">${I.loc} Use my location</button></div>`;
  const day = parseDay(date || todayStr()); const T = SUN.times(day, lat, lon);
  const now = new Date();
  const start = T.dawn ? new Date(T.dawn - 3600e3) : new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0);
  const end = T.dusk ? new Date(+T.dusk + 3600e3) : new Date(+start + 864e5);
  const W = 340, H = 128, pts = [], N = 72; let maxA = 10;
  for (let i = 0; i <= N; i++) { const t = new Date(+start + (end - start) * i / N); const a = SUN.pos(t, lat, lon).alt; pts.push([t, a]); maxA = Math.max(maxA, a); }
  const minA = -12, top = maxA + 6, y = a => 8 + (top - a) / (top - minA) * (H - 26), x = t => (t - start) / (end - start) * W;
  const path = pts.map(([t, a], i) => `${i ? 'L' : 'M'}${x(t).toFixed(1)},${y(a).toFixed(1)}`).join('');
  const ticks = []; for (let i = 1; i < 6; i++) { const t = new Date(+start + (end - start) * i / 6); ticks.push(`<text x="${x(t)}" y="${H - 3}" fill="#5d5c64" font-size="9" text-anchor="middle" font-family="JetBrains Mono">${fmtT(t, tz)}</text>`); }
  let nowMark = '';
  if (now > start && now < end && ymd(now) === (date || todayStr())) { const a = SUN.pos(now, lat, lon).alt; nowMark = `<line x1="${x(now)}" y1="6" x2="${x(now)}" y2="${H - 16}" stroke="#ffffff30" stroke-dasharray="2 3"/><circle cx="${x(now)}" cy="${y(a)}" r="6" fill="${a > 6 ? '#fff3d6' : a > -4 ? '#ffb347' : '#6fa8ff'}" stroke="#09090b" stroke-width="2"/>`; }
  const svg = `<svg class="sunsvg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <defs><linearGradient id="sg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff3d6"/><stop offset=".5" stop-color="#ffb347"/><stop offset="1" stop-color="#6fa8ff"/></linearGradient></defs>
    <rect x="0" y="${y(6)}" width="${W}" height="${y(-4) - y(6)}" fill="#ffb347" opacity=".13"/>
    <rect x="0" y="${y(-4)}" width="${W}" height="${y(-6) - y(-4)}" fill="#6fa8ff" opacity=".16"/>
    <line x1="0" y1="${y(0)}" x2="${W}" y2="${y(0)}" stroke="#ffffff26"/>
    <text x="4" y="${y(6) - 4}" fill="#ffb347" font-size="9" font-family="Inter" font-weight="700" letter-spacing="1">GOLDEN</text>
    <text x="4" y="${y(-6) + 10}" fill="#6fa8ff" font-size="9" font-family="Inter" font-weight="700" letter-spacing="1">BLUE</text>
    <path d="${path}" fill="none" stroke="url(#sg)" stroke-width="2.4" stroke-linecap="round"/>${ticks.join('')}${nowMark}</svg>`;
  const tiles = [['Blue', T.dawn, T.bh1, 'var(--blue)'], ['Gold', T.bh1, T.gh1, 'var(--key)'], ['Gold', T.gh2, T.bh2, 'var(--key)'], ['Blue', T.bh2, T.dusk, 'var(--blue)']];
  const tileHtml = tiles.map(([n, a, b, c], i) => `<div><span style="color:${c}">${n} ${i < 2 ? 'am' : 'pm'}</span><b>${fmtT(a, tz)}</b><span class="dim" style="font-family:var(--fm);letter-spacing:0;font-weight:500;font-size:11px">to ${fmtT(b, tz)}</span></div>`).join('');
  let next = '';
  if ((date || todayStr()) === todayStr()) {
    const ev = [[T.dawn, 'Blue hour starts', 'blue'], [T.bh1, 'Golden hour starts', 'key'], [T.rise, 'Sunrise', 'key'], [T.gh1, 'Golden hour ends', 'key'], [T.gh2, 'Golden hour starts', 'key'], [T.set, 'Sunset', 'key'], [T.bh2, 'Blue hour starts', 'blue'], [T.dusk, 'Blue hour ends', 'blue']].filter(e => e[0] && e[0] > now).sort((a, b) => a[0] - b[0])[0];
    if (ev) next = `<div class="sunnext"><span class="pill ${ev[2]}"><span class="dot"></span>in ${dur(ev[0] - now)}</span><span>${ev[1]} at <b class="num">${fmtT(ev[0], tz)}</b></span></div>`;
  }
  const azR = T.rise ? SUN.pos(T.rise, lat, lon).az : null, azS = T.set ? SUN.pos(T.set, lat, lon).az : null;
  const meta = `<div class="note">Sunrise <b class="num">${fmtT(T.rise, tz)}</b>${azR != null ? ` from ${Math.round(azR)}° ${compass(azR)}` : ''} · Noon <b class="num">${fmtT(T.noon, tz)}</b> · Sunset <b class="num">${fmtT(T.set, tz)}</b>${azS != null ? ` toward ${Math.round(azS)}° ${compass(azS)}` : ''}</div>`;
  return svg + `<div class="suntimes">${tileHtml}</div>` + next + meta;
}

// ---------- weather + places (open-meteo, free, no key) ----------
const WX = {};
const WMO = c => c == null ? '' : c === 0 ? 'Clear' : c <= 2 ? 'Partly cloudy' : c === 3 ? 'Overcast' : c <= 48 ? 'Fog' : c <= 57 ? 'Drizzle' : c <= 67 ? 'Rain' : c <= 77 ? 'Snow' : c <= 82 ? 'Showers' : c <= 86 ? 'Snow showers' : 'Thunderstorm';
async function weather(lat, lon, date) {
  const k = `${lat.toFixed(3)},${lon.toFixed(3)},${date}`; if (WX[k]) return WX[k];
  const days = (parseDay(date) - parseDay(todayStr())) / 864e5; if (days < 0 || days > 15) return null;
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,cloud_cover,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&start_date=${date}&end_date=${date}`;
  const r = await fetch(u); if (!r.ok) throw new Error('weather'); const j = await r.json(); WX[k] = j; return j;
}
async function geocode(q) {
  const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=en&format=json`);
  const j = await r.json(); return j.results || [];
}
function wxHtml(j, call) {
  if (!j || !j.daily) return '';
  const d = j.daily, h = j.hourly, ch = call ? +call.split(':')[0] : -1;
  const hrs = h.time.map((t, i) => ({ hr: +t.slice(11, 13), t: h.temperature_2m[i], p: h.precipitation_probability[i], c: h.cloud_cover[i], w: h.wind_speed_10m[i] })).filter(x => x.hr >= 5 && x.hr <= 22);
  return `<div class="between"><div><b style="font-size:17px">${WMO(d.weather_code[0])}</b><div class="mute small">${Math.round(d.temperature_2m_min[0])}° to ${Math.round(d.temperature_2m_max[0])}° · rain ${d.precipitation_probability_max[0] ?? 0}% · wind up to ${Math.round(d.wind_speed_10m_max[0])} km/h</div></div></div>
  <div class="wx">${hrs.map(x => `<div class="${x.hr === ch ? 'on' : ''}"><span class="mute">${pad(x.hr)}h</span><b>${Math.round(x.t)}°</b><span class="mute">${x.c}% ☁</span><br><span style="color:var(--blue)">${x.p ?? 0}%</span></div>`).join('')}</div>
  <div class="note">Hourly: temperature, cloud cover, rain chance. Highlighted hour is call time. Forecast by Open-Meteo.</div>`;
}

// ---------- domain ----------
const STATUS = [['lead', 'Lead', ''], ['booked', 'Booked', 'blue'], ['shooting', 'Shooting', 'key'], ['editing', 'Editing', 'pink'], ['delivered', 'Invoiced', 'bad'], ['paid', 'Paid', 'ok']];
const stName = k => (STATUS.find(s => s[0] === k) || STATUS[0])[1];
const stCls = k => (STATUS.find(s => s[0] === k) || STATUS[0])[2];
function totals(p) {
  const sub = (p.items || []).reduce((a, i) => a + lineAmt(i), 0);
  const disc = sub * num(p.discount) / 100, net = sub - disc, vat = net * num(p.vat) / 100;
  if (num(p.fixed) > 0) { const net2 = num(p.fixed), vat2 = net2 * num(p.vat) / 100; return { sub: net2, disc: 0, net: net2, vat: vat2, gross: net2 + vat2, fixed: true }; }
  return { sub, disc, net, vat, gross: net + vat };
}
const isBlank = v => String(v ?? '').trim() === '';
const lineQty = it => isBlank(it.qty) ? 1 : num(it.qty);
const lineAmt = it => lineQty(it) * num(it.price);
const isFree = it => !(num(it.price) > 0);
// Outsourcing is private: it only feeds the money view, never a PDF.
const outsOf = p => p.out ? (p.outs || []) : [];
const outCost = p => outsOf(p).reduce((a, o) => a + num(o.amount), 0);
const isPaid = p => p.status === 'paid';
const counted = p => p.status !== 'lead';
const client = id => S.clients.find(c => c.id === id);
const project = id => S.projects.find(p => p.id === id);
const shootDT = s => parseDay(s.date, s.call || '08:00');
const byDate = (a, b) => (a.date || '9999').localeCompare(b.date || '9999') || (a.call || '').localeCompare(b.call || '');

const SENSORS = {
  ff: { n: 'Full frame (Canon R6 II)', w: 35.9, h: 23.9, coc: .03 },
  ffc: { n: 'R6 II in 1.6x crop mode', w: 22.4, h: 14.9, coc: .019 },
  lf: { n: 'ARRI Alexa LF / Mini LF', w: 36.7, h: 25.54, coc: .03 },
  a35: { n: 'ARRI Alexa 35 (open gate)', w: 27.99, h: 19.22, coc: .025 },
  s35: { n: 'Super 35 (16:9)', w: 24.89, h: 14.0, coc: .025 },
  apsc: { n: 'APS-C (Sony / Fuji)', w: 23.5, h: 15.6, coc: .02 },
  p6k: { n: 'BMPCC 6K (S35)', w: 23.1, h: 12.99, coc: .02 },
  mft: { n: 'Micro Four Thirds', w: 17.3, h: 13.0, coc: .015 },
  iph: { n: 'iPhone main camera', w: 9.8, h: 7.3, coc: .006 },
};
const diag = s => Math.hypot(s.w, s.h);
const sensorOpts = sel => Object.entries(SENSORS).map(([k, s]) => `<option value="${k}" ${k === sel ? 'selected' : ''}>${s.n}</option>`).join('');

// ---------- router ----------
let ROUTE = [], LIVE = null;
function go(h) { if (location.hash === '#' + h) render(); else location.hash = h; }
addEventListener('hashchange', render);
function render() {
  LIVE = null;
  const h = (location.hash || '#today').slice(1); ROUTE = h.split('/');
  const tab = { today: 'today', shoots: 'shoots', shoot: 'shoots', tools: 'tools', tool: 'tools', studio: 'studio', project: 'studio', client: 'studio', learn: 'learn' }[ROUTE[0]] || 'today';
  $$('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
  const v = $('#view'), fr = $('#learn');
  if (tab === 'learn') {
    v.hidden = true; fr.hidden = false;
    if (!fr.getAttribute('src')) fr.src = 'learn/index.html';
    document.body.classList.add('learning');
    return;
  }
  document.body.classList.remove('learning'); fr.hidden = true; v.hidden = false;
  const fn = { today: vToday, shoots: vShoots, shoot: vShoot, tools: vTools, tool: vTool, studio: vStudio, project: vProject, client: vClient }[ROUTE[0]] || vToday;
  v.className = ''; void v.offsetWidth; v.innerHTML = fn(ROUTE[1]); v.style.animation = '';
  if (!render.keepScroll) scrollTo(0, 0); render.keepScroll = false;
  after();
}
function rerender() { const y = scrollY; render.keepScroll = true; render(); scrollTo(0, y); }
let AFTER = [];
function after() { const a = AFTER; AFTER = []; a.forEach(f => { try { f(); } catch (e) { console.error(e); } }); }
const topbar = (back, acts = '') => `<div class="top">${back ? `<button class="back" data-a="back" data-to="${back}">${I.back}<span>${{ shoots: 'Shoots', tools: 'Tools', studio: 'Clients', today: 'Today' }[back.split('/')[0]] || 'Back'}</span></button>` : '<span></span>'}<div class="acts">${acts}</div></div>`;

// ---------- TODAY ----------
function learnStats() { try { return JSON.parse(localStorage.getItem('lightlab') || '{}'); } catch (e) { return {}; } }
function vToday() {
  const s = S.settings, now = new Date(), h = now.getHours();
  const greet = h < 5 ? 'Late night' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  const up = S.shoots.filter(x => x.date && x.date >= todayStr()).sort(byDate);
  const next = up[0];
  const pipe = S.projects.filter(p => ['lead', 'booked', 'shooting', 'editing'].includes(p.status)).reduce((a, p) => a + totals(p).gross, 0);
  const unpaid = S.projects.filter(p => p.status === 'delivered').reduce((a, p) => a + totals(p).gross, 0);
  const wk = new Date(+parseDay(todayStr(), '00:00') + 7 * 864e5);
  const thisWeek = up.filter(x => parseDay(x.date) < wk);
  const L = learnStats(), xp = L.xp || 0, lvl = Math.floor(xp / 100) + 1;
  const RANKS = [[0, 'Grip Trainee'], [100, 'Best Boy'], [250, 'Gaffer'], [500, 'Camera Operator'], [900, 'DP'], [1500, 'ASC Material'], [2500, 'Deakins Mode']];
  const rank = RANKS.filter(r => xp >= r[0]).pop()[1];
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !navigator.standalone && !matchMedia('(display-mode: standalone)').matches;
  let nextHtml;
  if (next) {
    const dt = shootDT(next), ms = dt - now, cl = client((project(next.projectId) || {}).clientId);
    const done = (next.shots || []).filter(x => x.done).length, tot = (next.shots || []).length;
    nextHtml = `<div class="card hero tap" data-a="go" data-to="shoot/${next.id}">
      <div class="between"><span class="pill key"><span class="dot"></span>Next shoot</span><span class="mute small num">${fmtDay(next.date)}</span></div>
      <div class="big">${ms > 0 ? (ms < 864e5 ? dur(ms) : Math.ceil(ms / 864e5) + ' days') : 'Today'}</div>
      <h3 style="font-size:20px;margin:6px 0 2px">${esc(next.title || 'Untitled shoot')}</h3>
      <div class="mute small">${[cl && cl.name, next.place, next.call && 'Call ' + next.call].filter(Boolean).map(esc).join(' · ')}</div>
      ${tot ? `<div style="margin-top:12px" class="between small"><span class="mute">Shot list</span><span class="num">${done}/${tot}</span></div><div class="progress" style="margin-top:6px"><i style="width:${done / tot * 100}%"></i></div>` : ''}
    </div>`;
  } else nextHtml = `<div class="card hero"><span class="pill key"><span class="dot"></span>No shoots booked</span><h3 style="font-size:20px;margin:12px 0 4px">Plan the next one</h3><div class="mute small">Call time, location, sun, weather, crew, shot list and gear in one place.</div><button class="btn" style="margin-top:14px" data-a="newShoot">${I.plus} New shoot</button></div>`;
  return `
  <div class="top"><span class="eyebrow" style="margin:0">${now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span><div class="acts"><button class="ibtn" data-a="settings" aria-label="Settings">${I.gear}</button></div></div>
  <h1 class="title">${greet}${s.name ? ', ' + esc(s.name) : ''}.<small>shtat lab · ${esc(s.company || 'studio')}</small></h1>
  ${ios && !s.installDismissed ? `<div class="card install">${I.share}<div class="grow small">Install: tap <b>Share</b> then <b>Add to Home Screen</b>. It opens full screen and works offline.</div><button class="ibtn" data-a="dismissInstall" aria-label="Dismiss">${I.x}</button></div>` : ''}
  ${nextHtml}
  <div class="grid3" style="margin-bottom:12px">
    <button class="tool" style="min-height:92px" data-a="slate"><span class="ic">${I.clap}</span><b style="margin-top:8px">Slate</b></button>
    <button class="tool" style="min-height:92px" data-a="viewfinder"><span class="ic">${I.frame}</span><b style="margin-top:8px">Viewfinder</b></button>
    <button class="tool" style="min-height:92px" data-a="newProject"><span class="ic">${I.doc}</span><b style="margin-top:8px">Quote</b></button>
  </div>
  <div class="card"><div class="between" style="margin-bottom:4px"><h3>${I.sun.replace('<svg', '<svg style="width:18px;height:18px;vertical-align:-3px;color:var(--key)"')} Light today</h3><span class="mute small">${esc(s.place || '')}</span></div>${sunBlock(todayStr(), s.lat, s.lon, s.tz || undefined)}</div>
  <div class="grid2" style="margin-bottom:12px">
    <div class="stat tap" data-a="go" data-to="studio"><span>Pipeline</span><b>${moneyShort(pipe)}</b><span>${S.projects.filter(p => ['lead', 'booked', 'shooting', 'editing'].includes(p.status)).length} open jobs</span></div>
    <div class="stat tap" data-a="go" data-to="studio"><span>Waiting for payment</span><b style="color:${unpaid ? 'var(--bad)' : 'inherit'}">${moneyShort(unpaid)}</b><span>${S.projects.filter(p => p.status === 'delivered').length} invoices</span></div>
  </div>
  <div class="card tap" data-a="go" data-to="learn">
    <div class="between"><span class="pill pink">${I.cap.replace('<svg', '<svg style="width:13px;height:13px"')} Lighting school</span><span class="small mute">${L.streak ? `${I.flame.replace('<svg', '<svg style="width:14px;height:14px;vertical-align:-2px;color:var(--key2)"')} ${L.streak} day streak` : 'Start your streak'}</span></div>
    <h3 style="font-size:19px;margin:12px 0 2px">${esc(rank)} · Level ${lvl}</h3>
    <div class="mute small">${xp} XP · lessons, looks, dictionary, light simulator</div>
    <div class="progress" style="margin-top:10px"><i style="width:${xp % 100}%"></i></div>
  </div>
  ${thisWeek.length > 1 ? `<div class="sec">This week</div><div class="list">${thisWeek.slice(1).map(shootRow).join('')}</div>` : ''}
  `;
}

// ---------- SHOOTS ----------
function shootRow(x) {
  const d = parseDay(x.date), cl = client((project(x.projectId) || {}).clientId);
  const done = (x.shots || []).filter(s => s.done).length, tot = (x.shots || []).length;
  return `<div class="li tap" data-a="go" data-to="shoot/${x.id}"><div class="datebox">${d ? `<span>${MON[d.getMonth()]}</span><b>${d.getDate()}</b>` : '<b>?</b>'}</div>
  <div class="grow"><div class="t">${esc(x.title || 'Untitled shoot')}</div><div class="s">${[x.call && 'Call ' + x.call, cl && cl.name, x.place].filter(Boolean).map(esc).join(' · ') || 'Add details'}</div></div>
  ${tot ? `<span class="pill ${done === tot ? 'ok' : ''}">${done}/${tot}</span>` : ''}${I.chev.replace('<svg', '<svg class="chev"')}</div>`;
}
function vShoots() {
  const t = todayStr(), up = S.shoots.filter(x => !x.date || x.date >= t).sort(byDate), past = S.shoots.filter(x => x.date && x.date < t).sort(byDate).reverse();
  return `${topbar('', `<button class="ibtn key" data-a="newShoot" aria-label="New shoot">${I.plus}</button>`)}
  <h1 class="title">Shoots<small>${up.length} upcoming · ${past.length} wrapped</small></h1>
  ${S.shoots.length ? '' : `<div class="card empty">${I.clap}<b>No shoots yet</b>Make your first call sheet: date, call time, location, sun and weather, crew, shot list, gear.<br><button class="btn" style="margin-top:14px" data-a="newShoot">${I.plus} New shoot</button></div>`}
  ${up.length ? `<div class="sec">Upcoming</div><div class="list">${up.map(shootRow).join('')}</div>` : ''}
  ${past.length ? `<div class="sec">Wrapped</div><div class="list">${past.map(shootRow).join('')}</div>` : ''}`;
}
function newShoot(projectId) {
  const tm = new Date(Date.now() + 864e5);
  const p = projectId && project(projectId);
  const s = { id: uid(), title: p ? p.title : '', projectId: projectId || '', date: ymd(tm), call: '08:00', wrap: '18:00', place: '', lat: S.settings.lat, lon: S.settings.lon, tz: S.settings.tz || '', address: '', crew: [{ name: S.settings.name || '', role: 'DP', phone: S.settings.phone || '' }], shots: [], gear: [], notes: '', created: Date.now() };
  if (s.lat != null) s.place = S.settings.place || '';
  S.shoots.push(s); save(); go('shoot/' + s.id);
}
function vShoot(id) {
  const s = S.shoots.find(x => x.id === id); if (!s) return topbar('shoots') + '<div class="empty">Shoot not found.</div>';
  const o = `shoots:${s.id}`;
  const done = s.shots.filter(x => x.done).length;
  const projOpts = `<option value="">No project</option>` + S.projects.map(p => `<option value="${p.id}" ${p.id === s.projectId ? 'selected' : ''}>${esc(p.title || 'Untitled')}${client(p.clientId) ? ' · ' + esc(client(p.clientId).name) : ''}</option>`).join('');
  if (s.lat != null) AFTER.push(() => loadWx(s));
  return `<div data-o="${o}">
  ${topbar('shoots', `<button class="ibtn" data-a="shootMenu" data-id="${s.id}" aria-label="More">${ic('<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>', 2)}</button>`)}
  <div class="eyebrow">${fmtDayLong(s.date)}</div>
  <input class="bare h1" data-b="title" placeholder="Shoot title" value="${esc(s.title)}" style="margin-bottom:14px">
  <div class="card">
    <div class="fgrid"><div><label class="f">Date</label><input type="date" data-b="date" data-rr value="${esc(s.date)}"></div><div><label class="f">Project</label><select data-b="projectId">${projOpts}</select></div></div>
    <div class="fgrid"><div><label class="f">Call time</label><input type="time" data-b="call" value="${esc(s.call)}"></div><div><label class="f">Wrap</label><input type="time" data-b="wrap" value="${esc(s.wrap)}"></div></div>
  </div>
  <div class="sec">Location</div>
  <div class="card">
    ${cityPick(o)}<div class="row"><div class="grow"><input data-loc="${o}" placeholder="Or search any place, hotel, street…" value="${esc(s.place)}" autocomplete="off"></div><button class="ibtn" data-a="myloc" data-t="${o}" aria-label="Use my location">${I.loc}</button></div>
    <div id="locres"></div>
    <label class="f">Address / parking / notes for crew</label><input data-b="address" value="${esc(s.address)}" placeholder="Entrance, parking, floor…">
    ${s.lat != null ? `<div class="btns"><a class="btn ghost sm" href="https://maps.apple.com/?ll=${s.lat},${s.lon}&q=${encodeURIComponent(s.place || 'Shoot')}" target="_blank" rel="noopener">${I.map} Apple Maps</a><a class="btn ghost sm" href="https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lon}" target="_blank" rel="noopener">${I.pin} Google Maps</a></div>` : ''}
  </div>
  <div class="sec">Sun on ${fmtDay(s.date)}</div>
  <div class="card">${sunBlock(s.date, s.lat, s.lon, s.tz || undefined, { target: o })}</div>
  ${s.lat != null ? `<div class="sec">Weather</div><div class="card" id="wx"><div class="mute small">Loading forecast…</div></div>` : ''}
  <div class="sec">Shot list <span class="mute num" id="shotCount" style="letter-spacing:0">${done}/${s.shots.length}</span></div>
  <div class="card">${s.shots.length ? s.shots.map((x, i) => `<div class="erow shot ${x.done ? 'done' : ''}"><input type="checkbox" data-a="tick" data-l="shots" data-i="${i}" ${x.done ? 'checked' : ''}><input type="text" data-b="shots.${i}.text" value="${esc(x.text)}" placeholder="Shot ${i + 1}"><input class="lensin" list="myLensList" data-b="shots.${i}.lens" value="${esc(x.lens || '')}" placeholder="lens"><div class="mini"><button class="x" data-a="mv" data-l="shots" data-i="${i}" aria-label="Move up">${I.up}</button><button class="x" data-a="rm" data-l="shots" data-i="${i}" aria-label="Remove">${I.x}</button></div></div>`).join('') : '<div class="mute small">Wide, medium, close, inserts. Add each shot with a lens.</div>'}
    <datalist id="myLensList">${myFocals().map(f => `<option value="${f}mm">`).join('')}</datalist><form class="addrow" data-a="addShot"><input name="t" placeholder="Add shot: WS hotel lobby, slider in" autocomplete="off"><button class="btn">${I.plus}</button></form></div>
  <div class="sec">Crew <button data-a="add" data-l="crew">+ Add</button></div>
  <div class="card">${s.crew.length ? s.crew.map((c, i) => `<div class="erow crew"><input data-b="crew.${i}.name" value="${esc(c.name)}" placeholder="Name"><input class="role" data-b="crew.${i}.role" value="${esc(c.role)}" placeholder="Role"><input class="tel" type="tel" data-b="crew.${i}.phone" value="${esc(c.phone)}" placeholder="Phone">${c.phone ? `<a class="x" href="tel:${esc(c.phone)}" aria-label="Call">${I.phone}</a>` : ''}<button class="x" data-a="rm" data-l="crew" data-i="${i}" aria-label="Remove">${I.x}</button></div>`).join('') : '<div class="mute small">Nobody yet.</div>'}</div>
  <div class="sec">Gear <button data-a="loadKit">Load my kit</button></div>
  <div class="card">${s.gear.length ? s.gear.map((g, i) => `<div class="erow ${g.done ? 'done' : ''}"><input type="checkbox" data-a="tick" data-l="gear" data-i="${i}" ${g.done ? 'checked' : ''}><input type="text" data-b="gear.${i}.text" value="${esc(g.text)}"><button class="x" data-a="rm" data-l="gear" data-i="${i}" aria-label="Remove">${I.x}</button></div>`).join('') : '<div class="mute small">Tap "Load my kit" to drop in your standard checklist (edit it in Settings).</div>'}
    <form class="addrow" data-a="addGear"><input name="t" placeholder="Add item" autocomplete="off"><button class="btn">${I.plus}</button></form></div>
  <div class="sec">Notes</div>
  <div class="card"><textarea data-b="notes" placeholder="Look, references, LUT, frame rate, deliverables…">${esc(s.notes)}</textarea></div>
  <div class="btns"><button class="btn" data-a="callSheet" data-id="${s.id}">${I.doc} Call sheet PDF</button><button class="btn ghost" data-a="shareShoot" data-id="${s.id}">${I.share} Share text</button></div>
  </div>`;
}
async function loadWx(s) {
  const box = $('#wx'); if (!box) return;
  try { const j = await weather(s.lat, s.lon, s.date); if (!$('#wx')) return; box.innerHTML = j ? wxHtml(j, s.call) : `<div class="mute small">Forecast shows up 16 days before the shoot.</div>`; s._wx = j ? { sum: WMO(j.daily.weather_code[0]), min: j.daily.temperature_2m_min[0], max: j.daily.temperature_2m_max[0], rain: j.daily.precipitation_probability_max[0], wind: j.daily.wind_speed_10m_max[0] } : null; }
  catch (e) { box.innerHTML = `<div class="mute small">No forecast right now (offline?).</div>`; }
}
function shootText(s) {
  const p = project(s.projectId), cl = p && client(p.clientId), T = s.lat != null ? SUN.times(parseDay(s.date), s.lat, s.lon) : null, tz = s.tz || undefined;
  const L = [`CALL SHEET: ${s.title || 'Shoot'}`, fmtDayLong(s.date), `Call ${s.call || '-'} · Wrap ${s.wrap || '-'}`];
  if (cl) L.push(`Client: ${cl.name}`);
  if (s.place) L.push(`Location: ${s.place}${s.address ? ' (' + s.address + ')' : ''}`);
  if (s.lat != null) L.push(`Map: https://maps.apple.com/?ll=${s.lat},${s.lon}`);
  if (T) L.push(`Sunrise ${fmtT(T.rise, tz)} · Golden ${fmtT(T.gh2, tz)}-${fmtT(T.bh2, tz)} · Sunset ${fmtT(T.set, tz)}`);
  if (s._wx) L.push(`Weather: ${s._wx.sum}, ${Math.round(s._wx.min)}-${Math.round(s._wx.max)}°C, rain ${s._wx.rain}%`);
  if (s.crew.length) { L.push('', 'CREW'); s.crew.forEach(c => L.push(`${c.role || ''}: ${c.name || ''} ${c.phone || ''}`.trim())); }
  if (s.shots.length) { L.push('', 'SHOTS'); s.shots.forEach((x, i) => L.push(`${i + 1}. ${x.text}${x.lens ? ' [' + x.lens + ']' : ''}`)); }
  if (s.notes) L.push('', 'NOTES', s.notes);
  return L.join('\n');
}

// ---------- TOOLS ----------
const TOOLS = [
  ['sun', 'Sun & golden hour', 'Any day, any place. Sun path and direction.', I.sun],
  ['lens', 'Lens & field of view', 'FOV, crop, framing width, equivalents.', I.lens],
  ['dof', 'Depth of field', 'Near, far, hyperfocal.', I.focus],
  ['shutter', 'Shutter & flicker', 'Angle to speed, 50 Hz safe check.', I.shutter],
  ['nd', 'ND calculator', 'Stops to filter, keep your aperture.', I.nd],
  ['storage', 'Card & storage', 'Minutes per card, GB per hour.', I.card],
  ['tc', 'Timecode', 'Add, subtract, frames.', I.tc],
  ['deliver', 'Delivery specs', 'Reels, YouTube, cinema, ratios.', I.ratio],
];
function vTools() {
  return `${topbar('')}
  <h1 class="title">Tools<small>Set tools that work offline.</small></h1>
  <div class="tools">
    <div class="tool wide" data-a="slate"><span class="ic" style="background:#3a1210;color:#ff5a4f">${I.clap}</span><div><b>Digital slate</b><span>Running timecode, scene and take, loud clap even on silent.</span></div></div>
    <div class="tool wide" data-a="viewfinder"><span class="ic">${I.frame}</span><div><b>Director's viewfinder</b><span>Live camera with 2.39, 1.85, 9:16 frame lines and lens simulation.</span></div></div>
    ${TOOLS.map(([k, n, d, i]) => `<div class="tool" data-a="go" data-to="tool/${k}"><span class="ic">${i}</span><div><b>${n}</b><span>${d}</span></div></div>`).join('')}
  </div>`;
}
const T = () => S.tools;
const sel = (k, opts, v) => `<select data-b="${k}" data-rr>${opts.map(([a, b]) => `<option value="${a}" ${String(a) === String(v) ? 'selected' : ''}>${b}</option>`).join('')}</select>`;
const rng = (k, label, min, max, step, v, unit = '') => `<div class="rangebox"><span>${label}</span><output id="o_${k.replace('.', '_')}">${v}${unit}</output><input type="range" data-b="${k}" data-u="${unit}" min="${min}" max="${max}" step="${step}" value="${v}"></div>`;
function vTool(k) {
  const t = TOOLS.find(x => x[0] === k); const head = `${topbar('tools')}<h1 class="title">${t ? t[1] : 'Tool'}</h1>`;
  const body = { sun: tSun, lens: tLens, dof: tDof, shutter: tShutter, nd: tNd, storage: tStorage, tc: tTc, deliver: tDeliver }[k];
  if (!body) return head;
  LIVE = () => { const o = $('#tout'); if (o) o.innerHTML = body.out(); };
  return head + `<div data-o="tools">${body()}<div id="tout">${body.out()}</div></div>`;
}
function tSun() { const t = T(); if (!t.sunDate) t.sunDate = todayStr(); const s = S.settings; return `<div class="card"><label class="f" style="margin-top:0">Date</label><input type="date" data-b="sunDate" value="${t.sunDate}"><label class="f">Place</label>${cityPick('settings')}<div class="row"><div class="grow"><input data-loc="settings" placeholder="Search a place" value="${esc(s.place)}" autocomplete="off"></div><button class="ibtn" data-a="myloc" data-t="settings" aria-label="Use my location">${I.loc}</button></div><div id="locres"></div></div>`; }
tSun.out = () => { const s = S.settings; return `<div class="card">${sunBlock(T().sunDate || todayStr(), s.lat, s.lon, s.tz || undefined)}</div><div class="note">Golden hour here means the sun between 6° above and 4° below the horizon. Blue hour: 4° to 6° below. Times are in the place's own time zone when known.</div>`; };
function tLens() { const t = T(); return `<div class="card">${'<label class="f" style="margin-top:0">Sensor</label>' + sel('sensor', Object.entries(SENSORS).map(([k, s]) => [k, s.n]), t.sensor)}${rng('focal', 'Focal length', 8, 200, 1, t.focal, 'mm')}<div class="chips" style="margin:0 0 4px;padding:0">${myFocals().map(f => `<button class="chip ${+t.focal === f ? 'on' : ''}" data-a="setTool" data-k="focal" data-v="${f}">${f}mm</button>`).join('')}</div>${rng('dist', 'Subject distance', .3, 30, .1, t.dist, 'm')}<label class="f">Compare with</label>${sel('other', Object.entries(SENSORS).map(([k, s]) => [k, s.n]), t.other)}</div>`; }
tLens.out = () => {
  const t = T(), s = SENSORS[t.sensor] || SENSORS.ff, f = +t.focal, fov = w => 2 * Math.atan(w / (2 * f)) * 180 / Math.PI, crop = 43.27 / diag(s), o = SENSORS[t.other] || SENSORS.ff;
  const wM = s.w * t.dist / f, hM = s.h * t.dist / f, eqOther = f * diag(o) / diag(s);
  const feel = fov(s.w) > 75 ? 'Ultra wide: big space, distortion near the edges' : fov(s.w) > 54 ? 'Wide: establishing, interiors, hotel rooms' : fov(s.w) > 38 ? 'Normal: close to how the eye sees, documentary' : fov(s.w) > 20 ? 'Short tele: portraits, flattering faces' : 'Tele: compression, product details, separation';
  return `<div class="readout"><div class="big">${fov(s.w).toFixed(1)}°</div><div class="lbl">Horizontal field of view</div></div>
  <div class="card"><div class="kv"><span>Vertical / diagonal</span><b>${fov(s.h).toFixed(1)}° / ${fov(diag(s)).toFixed(1)}°</b></div><div class="kv"><span>Crop factor</span><b>${crop.toFixed(2)}×</b></div><div class="kv"><span>Full-frame look</span><b>${(f * crop).toFixed(0)} mm</b></div><div class="kv"><span>Frame at ${(+t.dist).toFixed(1)} m</span><b>${wM.toFixed(2)} × ${hM.toFixed(2)} m</b></div><div class="kv"><span>Same view on ${esc(o.n)}</span><b>${eqOther.toFixed(0)} mm</b></div></div>
  <div class="note">${feel}.</div>`;
};
function tDof() { const t = T(); return `<div class="card"><label class="f" style="margin-top:0">Sensor</label>${sel('sensor', Object.entries(SENSORS).map(([k, s]) => [k, s.n]), t.sensor)}${rng('focal', 'Focal length', 8, 200, 1, t.focal, 'mm')}<div class="chips" style="margin:0 0 4px;padding:0">${myFocals().map(f => `<button class="chip ${+t.focal === f ? 'on' : ''}" data-a="setTool" data-k="focal" data-v="${f}">${f}mm</button>`).join('')}</div>${rng('fstop', 'Aperture', 1, 22, .1, t.fstop, '')}${rng('dist', 'Focus distance', .3, 30, .1, t.dist, 'm')}</div>`; }
tDof.out = () => {
  const t = T(), s = SENSORS[t.sensor] || SENSORS.ff, f = +t.focal, N = +t.fstop, c = s.coc, d = t.dist * 1000;
  const H = f * f / (N * c) + f, near = d * (H - f) / (H + d - 2 * f), far = d < H ? d * (H - f) / (H - d) : Infinity, tot = far - near;
  const m = v => v === Infinity ? '∞' : v >= 1000 ? (v / 1000).toFixed(2) + ' m' : (v / 10).toFixed(1) + ' cm';
  const pct = far === Infinity ? 100 : clamp((tot / 1000) / Math.max(+t.dist, .1) * 50, 4, 100);
  return `<div class="readout"><div class="big">${m(tot)}</div><div class="lbl">Total depth of field at f/${N.toFixed(1)}</div></div>
  <div class="card"><div class="kv"><span>Near limit</span><b>${m(near)}</b></div><div class="kv"><span>Far limit</span><b>${m(far)}</b></div><div class="kv"><span>Hyperfocal distance</span><b>${m(H)}</b></div><div class="kv"><span>In front / behind focus</span><b>${m(d - near)} / ${m(far - d)}</b></div>
  <div style="margin-top:12px" class="progress"><i style="width:${pct}%;margin:0 auto"></i></div></div>
  <div class="note">Circle of confusion ${c} mm for ${esc(s.n)}. On a 4K screen the real sharp zone is smaller, so pull focus with a monitor.</div>`;
};
function tShutter() { const t = T(); return `<div class="card"><label class="f" style="margin-top:0">Frame rate</label>${sel('fps', [[23.976, '23.976'], [24, '24'], [25, '25'], [29.97, '29.97'], [30, '30'], [48, '48'], [50, '50'], [60, '60'], [100, '100'], [120, '120']].map(([a, b]) => [a, b + ' fps']), t.fps)}${rng('angle', 'Shutter angle', 11.25, 360, .25, t.angle, '°')}<div class="chips" style="margin:10px 0 0;padding:0">${[45, 90, 144, 172.8, 180, 270, 360].map(a => `<button class="chip ${+t.angle === a ? 'on' : ''}" data-a="setTool" data-k="angle" data-v="${a}">${a}°</button>`).join('')}</div></div>`; }
tShutter.out = () => {
  const t = T(), fps = +t.fps, sec = t.angle / (360 * fps), safe = hz => { const x = sec * hz * 2; return Math.abs(x - Math.round(x)) < .02 && Math.round(x) >= 1; };
  const s50 = safe(50), s60 = safe(60), safeAng = [50, 60].map(hz => { const a = []; for (let k = 1; k <= 8; k++) { const ang = 360 * fps * k / (2 * hz); if (ang <= 360) a.push(+ang.toFixed(1)); } return a; });
  return `<div class="readout"><div class="big">1/${(1 / sec).toFixed(1).replace(/\.0$/, '')}</div><div class="lbl">Shutter speed (${(sec * 1000).toFixed(2)} ms)</div></div>
  <div class="card"><div class="kv"><span>Motion blur</span><b>${t.angle < 90 ? 'Crisp, staccato (action)' : t.angle < 160 ? 'Slightly sharp' : t.angle <= 200 ? 'Natural (180° rule)' : 'Dreamy, smeared'}</b></div>
  <div class="kv"><span>Flicker safe, 50 Hz lights (Europe)</span><b style="color:${s50 ? 'var(--ok)' : 'var(--bad)'}">${s50 ? 'Yes' : 'No'}</b></div>
  <div class="kv"><span>Flicker safe, 60 Hz lights (US)</span><b style="color:${s60 ? 'var(--ok)' : 'var(--bad)'}">${s60 ? 'Yes' : 'No'}</b></div>
  <div class="kv"><span>Safe angles at ${fps} fps, 50 Hz</span><b>${safeAng[0].join(', ') || 'none'}</b></div>
  <div class="kv"><span>Safe angles at ${fps} fps, 60 Hz</span><b>${safeAng[1].join(', ') || 'none'}</b></div></div>
  <div class="note">Under cheap LEDs, fluorescents or street lights, pick a safe angle. In Kosovo and Europe the mains is 50 Hz, so 1/50 and 1/100 are safe.</div>`;
};
const FST = [1, 1.1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22];
function tNd() { const t = T(); const o = FST.map(f => [f, 'f/' + f]); return `<div class="card"><div class="fgrid"><div><label class="f" style="margin-top:0">Correct exposure at</label>${sel('ndFrom', o, t.ndFrom)}</div><div><label class="f" style="margin-top:0">You want to shoot at</label>${sel('ndTo', o, t.ndTo)}</div></div><div class="note" style="margin-top:8px">Meter or expose without ND, then pick the aperture you want for the look.</div></div>`; }
tNd.out = () => {
  const t = T(), stops = Math.max(0, 2 * Math.log2(t.ndFrom / t.ndTo)), r3 = Math.round(stops * 3) / 3, od = (r3 * .3).toFixed(1), fac = Math.round(Math.pow(2, r3));
  const kit = [[.3, 1], [.6, 2], [.9, 3], [1.2, 4], [1.5, 5], [1.8, 6], [2.1, 7]]; let left = r3, use = [];
  for (const [d, s] of kit.slice().reverse()) if (left >= s - .01) { use.push('ND' + d.toFixed(1)); left -= s; }
  return `<div class="readout"><div class="big">${r3 ? 'ND' + od : 'No ND'}</div><div class="lbl">${r3.toFixed(1)} stops · ND${fac} · 1/${fac} light</div></div>
  <div class="card"><div class="kv"><span>Stack from a standard kit</span><b>${use.join(' + ') || '-'}</b></div><div class="kv"><span>Leftover to fix with shutter or ISO</span><b>${left > .05 ? left.toFixed(1) + ' stops' : 'none'}</b></div>
  <div class="kv"><span>Naming</span><b>0.3 = 1 stop = ND2</b></div></div><div class="note">Stacking many filters adds colour shift and IR pollution. Over ~1.2 use IR ND or a good VND.</div>`;
};
const CODECS = [[470, 'R6 II · 4K 25p ALL-I'], [120, 'R6 II · 4K 25p IPB'], [60, 'R6 II · 4K 25p IPB Light'], [940, 'R6 II · 4K 50p ALL-I (V90 card)'], [230, 'R6 II · 4K 50p IPB'], [180, 'R6 II · FHD 50p ALL-I'], [60.1, 'R6 II · FHD 50p IPB'], [707, 'ProRes 422 HQ · UHD 25p'], [471, 'ProRes 422 · UHD 25p'], [328, 'ProRes 422 LT · UHD 25p'], [1061, 'ProRes 4444 · UHD 25p'], [800, 'iPhone ProRes HQ · 4K 30p'], [250, 'XAVC S-I · 4K 25p'], [150, 'H.265 10-bit · 4K 25p'], [100, 'H.264 · 4K 25p'], [50, 'H.264 · HD 25p']];
function tStorage() { const t = T(); return `<div class="card"><label class="f" style="margin-top:0">Codec (approx. bitrate)</label>${sel('codec', CODECS.map(([a, b]) => [a, `${b} · ${Math.round(a)} Mb/s`]), t.codec)}${rng('mins', 'Recording time', 5, 600, 5, t.mins, ' min')}<label class="f">Card size</label>${sel('cardGB', [64, 128, 256, 512, 1000, 2000].map(g => [g, g >= 1000 ? g / 1000 + ' TB' : g + ' GB']), t.cardGB)}</div>`; }
tStorage.out = () => {
  const t = T(), gbMin = t.codec * 60 / 8 / 1000, tot = gbMin * t.mins, cardMin = t.cardGB * .93 / gbMin;
  return `<div class="readout"><div class="big">${tot >= 1000 ? (tot / 1000).toFixed(2) + ' TB' : tot.toFixed(0) + ' GB'}</div><div class="lbl">for ${t.mins} min of footage</div></div>
  <div class="card"><div class="kv"><span>Per minute</span><b>${gbMin.toFixed(2)} GB</b></div><div class="kv"><span>Per hour</span><b>${(gbMin * 60).toFixed(0)} GB</b></div><div class="kv"><span>One ${t.cardGB >= 1000 ? t.cardGB / 1000 + ' TB' : t.cardGB + ' GB'} card holds</span><b>${cardMin >= 60 ? Math.floor(cardMin / 60) + 'h ' + pad(Math.round(cardMin % 60)) + 'm' : Math.round(cardMin) + ' min'}</b></div><div class="kv"><span>Backup (2 copies)</span><b>${(tot * 2 / 1000).toFixed(2)} TB</b></div></div>
  <div class="note">Bitrates are approximate. Check your camera menu. 50p doubles it.</div>`;
};
const TCF = [23.976, 24, 25, 29.97, 30, 50, 60];
const tcToF = (s, fps) => { const p = String(s).split(/[:;.]/).map(Number); while (p.length < 4) p.unshift(0); const r = Math.round(fps); return ((p[0] * 60 + p[1]) * 60 + p[2]) * r + p[3]; };
const fToTc = (f, fps) => { const r = Math.round(fps), neg = f < 0; f = Math.abs(f); const ff = f % r, s = Math.floor(f / r); return (neg ? '-' : '') + [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60, ff].map(x => pad(x)).join(':'); };
function tTc() { const t = T(); return `<div class="card"><label class="f" style="margin-top:0">Frame rate</label>${sel('tcFps', TCF.map(f => [f, f + ' fps']), t.tcFps)}<div class="fgrid3" style="grid-template-columns:1fr 64px 1fr"><div><label class="f">Timecode A</label><input class="num" inputmode="numeric" data-b="tcA" value="${esc(t.tcA)}"></div><div><label class="f">&nbsp;</label>${sel('tcOp', [['+', '+'], ['-', '−']], t.tcOp)}</div><div><label class="f">Timecode B</label><input class="num" inputmode="numeric" data-b="tcB" value="${esc(t.tcB)}"></div></div><label class="f">Frames to timecode</label><input class="num" inputmode="numeric" data-b="tcFrames" value="${esc(t.tcFrames)}"></div>`; }
tTc.out = () => { const t = T(), fps = +t.tcFps, a = tcToF(t.tcA, fps), b = tcToF(t.tcB, fps), r = t.tcOp === '-' ? a - b : a + b; return `<div class="readout"><div class="big" style="font-size:34px">${fToTc(r, fps)}</div><div class="lbl">A ${t.tcOp === '-' ? '−' : '+'} B · ${r} frames · ${(r / fps).toFixed(2)} s</div></div><div class="card"><div class="kv"><span>${num(t.tcFrames)} frames</span><b>${fToTc(Math.round(num(t.tcFrames)), fps)}</b></div><div class="kv"><span>Duration</span><b>${(num(t.tcFrames) / fps).toFixed(2)} s</b></div></div><div class="note">Non-drop-frame. Format HH:MM:SS:FF.</div>`; };
function tDeliver() { return ''; }
tDeliver.out = () => `<div class="card" style="padding:6px 14px"><table class="cheat"><tr><th>Where</th><th>Ratio</th><th>Pixels</th></tr>
${[['Reels / TikTok / Shorts', '9:16', '1080×1920'], ['Instagram feed portrait', '4:5', '1080×1350'], ['Square', '1:1', '1080×1080'], ['YouTube / web', '16:9', '3840×2160'], ['HD master', '16:9', '1920×1080'], ['DCI 4K', '1.90:1', '4096×2160'], ['Cinema flat', '1.85:1', '3996×2160'], ['Cinema scope', '2.39:1', '4096×1716'], ['Scope inside UHD', '2.39:1', '3840×1608'], ['LinkedIn / Facebook feed', '4:5', '1080×1350']].map(r => `<tr><td>${r[0]}</td><td class="mute">${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table></div>
<div class="card"><h3>Safe zones for vertical</h3><div class="note" style="margin-top:4px">Keep titles and faces out of the top 220 px and bottom 380 px of a 1080×1920 frame, and 60 px from the sides. The app UI covers them.</div></div>
<div class="card"><h3>Frame rates</h3><div class="note" style="margin-top:4px">Europe / Kosovo TV and web: 25 or 50 fps (50 Hz mains, no flicker). Cinema: 24 or 23.976. Slow motion: shoot 50, 100 or 120 and conform to 25. Shoot vertical and horizontal? Frame for 4:5 safe in a 16:9 4K frame.</div></div>`;

// ---------- STUDIO: projects + clients ----------
function vStudio() {
  const seg = S.ui.studio, st = S.ui.status;
  const head = `${topbar('', seg === 'money' ? '' : `<button class="ibtn key" data-a="${seg === 'clients' ? 'newClient' : 'newProject'}" aria-label="New">${I.plus}</button>`)}
  <h1 class="title">Clients<small>Projects, quotes, invoices.</small></h1>
  <button class="card tickrow" id="gdPend" data-a="gdNow" ${GDPEND ? '' : 'hidden'} style="width:100%;text-align:left;margin-bottom:12px"><div class="grow"><b><span id="gdN">${GDPEND}</span> offer(s) waiting for Drive</b><small>Tap to upload now.</small></div></button>
  <div class="seg"><button class="${seg === 'pipe' ? 'on' : ''}" data-a="seg" data-v="pipe">Projects</button><button class="${seg === 'clients' ? 'on' : ''}" data-a="seg" data-v="clients">Clients</button><button class="${seg === 'money' ? 'on' : ''}" data-a="seg" data-v="money">Money</button></div>`;
  if (seg === 'money') return head + vMoney();
  if (seg === 'clients') {
    return head + (S.clients.length ? `<div class="list">${S.clients.slice().sort((a, b) => (a.name || '').localeCompare(b.name || '')).map(c => { const ps = S.projects.filter(p => p.clientId === c.id), paid = ps.filter(p => p.status === 'paid').reduce((a, p) => a + totals(p).gross, 0); return `<div class="li tap" data-a="go" data-to="client/${c.id}"><div class="datebox" style="background:var(--keybg);color:var(--key)"><b style="font-family:var(--fd)">${esc((c.name || '?').trim()[0] || '?').toUpperCase()}</b></div><div class="grow"><div class="t">${esc(c.name || 'Unnamed')}</div><div class="s">${ps.length} project${ps.length === 1 ? '' : 's'}${c.contact ? ' · ' + esc(c.contact) : ''}</div></div><div class="r">${moneyShort(paid)}</div>${I.chev.replace('<svg', '<svg class="chev"')}</div>`; }).join('')}</div>` : `<div class="card empty">${I.user}<b>No clients yet</b>Add the brands and hotels you shoot for.<br><button class="btn" style="margin-top:14px" data-a="newClient">${I.plus} New client</button></div>`);
  }
  const list = S.projects.filter(p => st === 'all' || p.status === st).sort((a, b) => (b.created || 0) - (a.created || 0));
  const cnt = k => S.projects.filter(p => p.status === k).length;
  return head + `<div class="chips"><button class="chip ${st === 'all' ? 'on' : ''}" data-a="status" data-v="all">All<b>${S.projects.length}</b></button>${STATUS.map(([k, n]) => `<button class="chip ${st === k ? 'on' : ''}" data-a="status" data-v="${k}">${n}<b>${cnt(k)}</b></button>`).join('')}</div>
  ${list.length ? `<div class="list">${list.map(p => { const c = client(p.clientId); return `<div class="li tap" data-a="go" data-to="project/${p.id}"><input type="checkbox" class="paychk" data-a="payTick" data-id="${p.id}" ${isPaid(p) ? 'checked' : ''} aria-label="Paid"><div class="grow"><div class="t">${esc(p.title || 'Untitled project')}</div><div class="s">${esc(c ? c.name : 'No client')}${p.due ? ' · due ' + fmtDay(p.due) : ''}</div></div><div style="text-align:right"><div class="r">${moneyShort(totals(p).gross)}</div><span class="pill ${isPaid(p) ? 'ok' : counted(p) ? 'bad' : ''}" style="margin-top:4px">${isPaid(p) ? 'Paid' : counted(p) ? 'Waiting' : 'Lead'}</span></div></div>`; }).join('')}</div><div class="note">Tick the box when the money is in. Unticked jobs count as waiting for payment.</div>` : `<div class="card empty">${I.brief}<b>${S.projects.length ? 'Nothing here' : 'No projects yet'}</b>A project holds the quote, the shoots and the invoice.<br><button class="btn" style="margin-top:14px" data-a="newProject">${I.plus} New project</button></div>`}`;
}
function newProject(clientId) {
  const p = { id: uid(), title: '', clientId: clientId || '', status: 'lead', due: '', vat: S.settings.vat || 0, discount: 0, subtitle: '', fixed: '', offerNote: '', items: [{ section: 'Production', desc: 'Shoot day (DP + camera package)', qty: 1, unit: 'day', price: '', note: '' }, { section: 'Post-production', desc: 'Editing', qty: '', unit: '', price: '', note: '' }, { section: 'Post-production', desc: 'Color grading', qty: '', unit: '', price: '', note: '' }], out: false, outs: [], notes: '', no: '', created: Date.now() };
  S.projects.push(p); save(); go('project/' + p.id);
}
function vProject(id) {
  const p = project(id); if (!p) return topbar('studio') + '<div class="empty">Project not found.</div>';
  const o = `projects:${p.id}`, t = totals(p), shoots = S.shoots.filter(s => s.projectId === p.id).sort(byDate);
  if (!p.outs) p.outs = [];
  LIVE = () => { const q = project(id), x = $('#totals'), y = $('#outsum'), z = $('#payamt'); if (x) x.innerHTML = totalsHtml(q); if (y) y.innerHTML = outSumHtml(q); if (z) z.textContent = 'Final price ' + money(totals(q).gross); };
  return `<div data-o="${o}">${topbar('studio', `<button class="ibtn" data-a="delProject" data-id="${p.id}" aria-label="Delete">${I.trash}</button>`)}
  <div class="eyebrow">${p.no ? esc(p.no) : 'Project'}</div>
  <input class="bare h1" data-b="title" placeholder="Project name" value="${esc(p.title)}" style="margin-bottom:12px">
  <div class="chips">${STATUS.map(([k, n]) => `<button class="chip ${p.status === k ? 'on' : ''}" data-a="setStatus" data-v="${k}">${n}</button>`).join('')}</div>
  <div class="card tickcard ${isPaid(p) ? 'is-paid' : ''}"><input type="checkbox" data-a="payTick" data-id="${p.id}" ${isPaid(p) ? 'checked' : ''} aria-label="Paid"><div class="grow"><b>${isPaid(p) ? 'Paid' : 'Waiting for payment'}</b><small id="payamt">Final price ${money(t.gross)}</small></div></div>
  <div class="card"><div class="fgrid"><div><label class="f" style="margin-top:0">Client</label><select data-b="clientId" data-rr><option value="">Choose…</option>${S.clients.map(c => `<option value="${c.id}" ${c.id === p.clientId ? 'selected' : ''}>${esc(c.name || 'Unnamed')}</option>`).join('')}<option value="__new">+ New client</option></select></div><div><label class="f" style="margin-top:0">Due / delivery</label><input type="date" data-b="due" value="${esc(p.due)}"></div></div></div>
  <div class="sec">Offer <span><button data-a="preset" data-v="reels">Reels package</button> <button data-a="add" data-l="items">+ Line</button></span></div>
  <div class="card"><label class="f" style="margin-top:0">Subtitle under the client name</label><input data-b="subtitle" value="${esc(p.subtitle || '')}" placeholder="Reels, Hero video, Brand film…">
    <datalist id="secList"><option value="Pre-production"><option value="Production"><option value="Post-production"><option value="Equipment"><option value="Usage rights"></datalist>
    ${p.items.map((it, i) => `<div class="erow" style="flex-wrap:wrap;gap:6px;padding:12px 0"><input list="secList" data-b="items.${i}.section" value="${esc(it.section || '')}" placeholder="Section" style="flex:1 1 100%;font-weight:700;color:var(--key)"><input data-b="items.${i}.desc" value="${esc(it.desc)}" placeholder="What you deliver" style="flex:1 1 100%"><input data-b="items.${i}.note" value="${esc(it.note || '')}" placeholder="Explanation under the line (optional, italic)" style="flex:1 1 100%;font-style:italic;font-size:14px"><input class="num" inputmode="decimal" data-b="items.${i}.qty" value="${esc(it.qty)}" placeholder="Qty" style="width:58px;flex:none"><input data-b="items.${i}.unit" value="${esc(it.unit || '')}" placeholder="unit" style="width:76px;flex:none"><input class="num" inputmode="decimal" data-b="items.${i}.price" value="${esc(it.price)}" placeholder="Free" style="flex:1;min-width:60px"><span class="mute small">${S.settings.cur}</span><button class="x" data-a="rm" data-l="items" data-i="${i}" aria-label="Remove">${I.x}</button></div>`).join('')}
    <div class="fgrid" style="margin-top:6px"><div><label class="f">Package price (optional)</label><input class="num" inputmode="decimal" data-b="fixed" value="${esc(p.fixed || '')}" placeholder="overrides lines"></div><div><label class="f">Discount %</label><input class="num" inputmode="decimal" data-b="discount" value="${esc(p.discount)}"></div></div>
    <div class="fgrid"><div><label class="f">VAT %</label><input class="num" inputmode="decimal" data-b="vat" value="${esc(p.vat)}"></div><div></div></div>
    <label class="f">Small print at the bottom of the offer</label><input data-b="offerNote" value="${esc(p.offerNote || '')}" placeholder="e.g. The number of reels is included every month…">
    <div id="totals" class="totals" style="margin-top:12px">${totalsHtml(p)}</div></div>
  <div class="btns"><button class="btn" data-a="pdf" data-k="quote" data-id="${p.id}">${I.doc} Offer PDF</button><button class="btn ghost" data-a="pdf" data-k="invoice" data-id="${p.id}">${I.doc} Invoice PDF</button></div>
  <div class="note" style="margin-top:-4px">A line with no price prints as "Free" on the offer and the invoice.</div>
  <div class="sec">Outsourcing <span class="pill">Only you see this</span></div>
  <div class="card"><div class="tickrow"><input type="checkbox" data-a="outToggle" ${p.out ? 'checked' : ''} aria-label="Outsourced"><div class="grow"><b>I pay other people on this job</b><small>Editors, gaffers, crew, rentals. Never printed on offers or invoices.</small></div></div>
  ${p.out ? `${p.outs.map((x, i) => `<div class="erow out ${x.paid ? 'done' : ''}"><input type="checkbox" data-a="outTick" data-i="${i}" ${x.paid ? 'checked' : ''} aria-label="Paid them"><input type="text" data-b="outs.${i}.who" value="${esc(x.who || '')}" placeholder="Who" class="who"><input type="text" data-b="outs.${i}.what" value="${esc(x.what || '')}" placeholder="For what" class="what"><input class="num amt" inputmode="decimal" data-b="outs.${i}.amount" value="${esc(x.amount ?? '')}" placeholder="0"><span class="mute small">${S.settings.cur}</span><button class="x" data-a="rm" data-l="outs" data-i="${i}" aria-label="Remove">${I.x}</button></div>`).join('')}
  <button class="btn ghost full" style="margin-top:10px" data-a="add" data-l="outs">${I.plus} Add person</button>
  <div class="note">Tick a person when you have paid them.</div>
  <div id="outsum" class="totals" style="margin-top:8px">${outSumHtml(p)}</div>` : ''}</div>
  <div class="sec">Shoots <button data-a="newShootFor" data-id="${p.id}">+ Shoot</button></div>
  ${shoots.length ? `<div class="list">${shoots.map(shootRow).join('')}</div>` : '<div class="card mute small">No shoot days yet.</div>'}
  <div class="sec">Notes</div><div class="card"><textarea data-b="notes" placeholder="Brief, references, usage rights, revisions…">${esc(p.notes)}</textarea></div></div>`;
}
function totalsHtml(p) { const t = totals(p); return `<div class="kv"><span>${t.fixed ? 'Package price' : 'Subtotal'}</span><b>${money(t.sub)}</b></div>${t.disc ? `<div class="kv"><span>Discount ${num(p.discount)}%</span><b>−${money(t.disc)}</b></div>` : ''}${t.vat ? `<div class="kv"><span>VAT ${num(p.vat)}%</span><b>${money(t.vat)}</b></div>` : ''}<div class="kv" style="align-items:center"><span>Total</span><b class="grand">${money(t.gross)}</b></div>`; }
function outSumHtml(p) { const g = totals(p).gross, oc = outCost(p), due = outsOf(p).filter(x => !x.paid).reduce((a, x) => a + num(x.amount), 0); return `<div class="kv"><span>Final price</span><b>${money(g)}</b></div><div class="kv"><span>You pay others</span><b>${oc ? '−' : ''}${money(oc)}</b></div>${due ? `<div class="kv"><span>Still to pay</span><b style="color:var(--bad)">${money(due)}</b></div>` : ''}<div class="kv" style="align-items:center"><span>Left for you</span><b class="grand">${money(g - oc)}</b></div>`; }

// ---------- MONEY: numbers only, across every project ----------
function vMoney() {
  const ps = S.projects.filter(counted), leads = S.projects.filter(p => !counted(p));
  const name = p => esc(p.title || 'Untitled project'), cn = p => esc((client(p.clientId) || {}).name || 'No client');
  const received = ps.filter(isPaid).reduce((a, p) => a + totals(p).gross, 0);
  const waitPs = ps.filter(p => !isPaid(p)).sort((a, b) => totals(b).gross - totals(a).gross), waiting = waitPs.reduce((a, p) => a + totals(p).gross, 0);
  const owe = {}; let paidOut = 0;
  ps.forEach(p => outsOf(p).forEach(x => { const amt = num(x.amount); if (x.paid) { paidOut += amt; return; } if (!amt) return; const k = (x.who || 'Unnamed').trim(), key = k.toLowerCase(); (owe[key] = owe[key] || { who: k, sum: 0, items: [] }).sum += amt; owe[key].items.push(`${p.title || 'Untitled'} ${moneyShort(amt)}`); }));
  const oweL = Object.values(owe).sort((a, b) => b.sum - a.sum), toPay = oweL.reduce((a, x) => a + x.sum, 0);
  const total = received + waiting, left = total - toPay - paidOut;
  const row = (t, s, r, cls = '') => `<div class="li"><div class="grow"><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ''}</div><div class="r ${cls}">${r}</div></div>`;
  return `<div class="grid2" style="margin-bottom:10px"><div class="stat"><span>Waiting to be paid</span><b style="color:var(--bad)">${moneyShort(waiting)}</b></div><div class="stat"><span>You have to pay</span><b>${moneyShort(toPay)}</b></div><div class="stat"><span>Received</span><b style="color:var(--ok)">${moneyShort(received)}</b></div><div class="stat"><span>Left for you</span><b style="color:var(--key)">${moneyShort(left)}</b></div></div>
  <div class="card totals"><div class="kv"><span>All projects, final prices</span><b>${money(total)}</b></div><div class="kv"><span>Paid out to others</span><b>${paidOut ? '−' : ''}${money(paidOut)}</b></div><div class="kv"><span>Still to pay others</span><b>${toPay ? '−' : ''}${money(toPay)}</b></div><div class="kv" style="align-items:center"><span>Left for you in the end</span><b class="grand">${money(left)}</b></div><div class="kv"><span>In your hands now</span><b>${money(received - paidOut)}</b></div></div>
  <div class="sec">Waiting to be paid <span class="mute small">${waitPs.length}</span></div>
  ${waitPs.length ? `<div class="list">${waitPs.map(p => `<div class="li tap" data-a="go" data-to="project/${p.id}"><input type="checkbox" class="paychk" data-a="payTick" data-id="${p.id}" aria-label="Paid"><div class="grow"><div class="t">${name(p)}</div><div class="s">${cn(p)}</div></div><div class="r">${money(totals(p).gross)}</div></div>`).join('')}${row('<b>Total</b>', '', `<b>${money(waiting)}</b>`)}</div>` : '<div class="card mute small">Nothing open. Everyone has paid.</div>'}
  <div class="sec">You have to pay <span class="mute small">${oweL.length}</span></div>
  ${oweL.length ? `<div class="list">${oweL.map(x => row(esc(x.who), esc(x.items.join(' · ')), money(x.sum))).join('')}${row('<b>Total</b>', '', `<b>${money(toPay)}</b>`)}</div>` : '<div class="card mute small">You owe nobody.</div>'}
  <div class="sec">Every project</div>
  ${ps.length ? `<div class="list">${ps.slice().sort((a, b) => (b.created || 0) - (a.created || 0)).map(p => { const g = totals(p).gross, oc = outCost(p); return `<div class="li tap" data-a="go" data-to="project/${p.id}"><div class="grow"><div class="t">${name(p)}</div><div class="s">${isPaid(p) ? 'Paid' : 'Waiting'}${oc ? ` · others ${moneyShort(oc)} · yours ${moneyShort(g - oc)}` : ''}</div></div><div class="r">${money(g)}</div></div>`; }).join('')}</div>` : '<div class="card mute small">No booked projects yet.</div>'}
  ${leads.length ? `<div class="note">${leads.length} lead${leads.length === 1 ? '' : 's'} (${moneyShort(leads.reduce((a, p) => a + totals(p).gross, 0))}) not counted until booked.</div>` : ''}`;
}
function newClient(back) { const c = { id: uid(), name: '', contact: '', email: '', phone: '', address: '', vatNo: '', notes: '' }; S.clients.push(c); save(); go('client/' + c.id); return c; }
function vClient(id) {
  const c = client(id); if (!c) return topbar('studio') + '<div class="empty">Client not found.</div>';
  const ps = S.projects.filter(p => p.clientId === c.id), paid = ps.filter(p => p.status === 'paid').reduce((a, p) => a + totals(p).gross, 0), open = ps.filter(p => p.status !== 'paid').reduce((a, p) => a + totals(p).gross, 0);
  return `<div data-o="clients:${c.id}">${topbar('studio', `<button class="ibtn" data-a="delClient" data-id="${c.id}" aria-label="Delete">${I.trash}</button>`)}
  <div class="eyebrow">Client</div><input class="bare h1" data-b="name" placeholder="Brand / company" value="${esc(c.name)}" style="margin-bottom:14px">
  <div class="grid2" style="margin-bottom:12px"><div class="stat"><span>Paid</span><b>${moneyShort(paid)}</b></div><div class="stat"><span>Open</span><b>${moneyShort(open)}</b></div></div>
  <div class="card"><label class="f" style="margin-top:0">Contact person</label><input data-b="contact" value="${esc(c.contact)}">
  <div class="fgrid"><div><label class="f">Email</label><input type="email" data-b="email" value="${esc(c.email)}"></div><div><label class="f">Phone</label><input type="tel" data-b="phone" value="${esc(c.phone)}"></div></div>
  <label class="f">Address</label><input data-b="address" value="${esc(c.address)}"><label class="f">VAT / business no.</label><input data-b="vatNo" value="${esc(c.vatNo)}">
  ${c.email || c.phone ? `<div class="btns">${c.phone ? `<a class="btn ghost sm" href="tel:${esc(c.phone)}">${I.phone} Call</a>` : ''}${c.email ? `<a class="btn ghost sm" href="mailto:${esc(c.email)}">${I.share} Email</a>` : ''}</div>` : ''}</div>
  <div class="sec">Projects <button data-a="newProjectFor" data-id="${c.id}">+ Project</button></div>
  ${ps.length ? `<div class="list">${ps.map(p => `<div class="li tap" data-a="go" data-to="project/${p.id}"><div class="grow"><div class="t">${esc(p.title || 'Untitled')}</div><div class="s">${stName(p.status)}</div></div><div class="r">${moneyShort(totals(p).gross)}</div></div>`).join('')}</div>` : '<div class="card mute small">No projects yet.</div>'}
  <div class="sec">Notes</div><div class="card"><textarea data-b="notes" placeholder="Brand guidelines, preferences, who approves…">${esc(c.notes)}</textarea></div></div>`;
}

// ---------- settings sheet ----------
function sheet(html) { const s = $('#sheet'); s.innerHTML = `<div class="box"><div class="grab"></div>${html}</div>`; s.hidden = false; }
function closeSheet() { $('#sheet').hidden = true; $('#sheet').innerHTML = ''; }
function settingsSheet() {
  const s = S.settings;
  sheet(`<div data-o="settings"><div class="between"><h2 style="font-size:24px">Settings</h2><button class="ibtn" data-a="closeSheet" aria-label="Close">${I.x}</button></div>
  <div class="sec" style="margin-top:14px">You & business (on PDFs)</div>
  <div class="fgrid"><div><label class="f">Your name</label><input data-b="name" value="${esc(s.name)}"></div><div><label class="f">Company</label><input data-b="company" value="${esc(s.company)}"></div></div>
  <div class="fgrid"><div><label class="f">Email</label><input type="email" data-b="email" value="${esc(s.email)}"></div><div><label class="f">Phone</label><input type="tel" data-b="phone" value="${esc(s.phone)}"></div></div>
  <label class="f">Address</label><input data-b="address" value="${esc(s.address)}">
  <div class="fgrid"><div><label class="f">Website</label><input data-b="web" value="${esc(s.web)}"></div><div><label class="f">Business / VAT no.</label><input data-b="vatNo" value="${esc(s.vatNo)}"></div></div>
  <label class="f">IBAN / bank details</label><input data-b="iban" value="${esc(s.iban)}">
  <div class="fgrid3"><div><label class="f">Currency</label><input data-b="cur" value="${esc(s.cur)}"></div><div><label class="f">Default VAT %</label><input inputmode="decimal" data-b="vat" value="${esc(s.vat)}"></div><div><label class="f">Pay in (days)</label><input inputmode="numeric" data-b="terms" value="${esc(s.terms)}"></div></div>
  <label class="f">Footer on quotes and invoices</label><input data-b="footer" value="${esc(s.footer)}">
  <div class="sec">Home location (sun on Today)</div>
  ${cityPick('settings')}<div class="row"><div class="grow"><input data-loc="settings" placeholder="Search a place" value="${esc(s.place)}" autocomplete="off"></div><button class="ibtn" data-a="myloc" data-t="settings" aria-label="Use my location">${I.loc}</button></div><div id="locres"></div>
  <div class="sec">Camera & lenses</div><label class="f" style="margin-top:0">Camera</label><input data-b="camera" value="${esc(s.camera)}"><label class="f">My lenses (one per line, used by the lens tools and viewfinder)</label><textarea data-b="lenses" style="min-height:150px">${esc(s.lenses)}</textarea>
  <div class="sec">My kit checklist (one item per line)</div><textarea data-b="kit" style="min-height:180px">${esc(s.kit)}</textarea>
  <div class="sec">Offers to Google Drive</div>
  <div class="tickrow"><input type="checkbox" data-a="gdToggle" ${s.gdOn ? 'checked' : ''} aria-label="Save offers to Drive"><div class="grow"><b>Save every offer PDF to Drive</b><small>Folder "${esc(s.gdFolder || 'ofertat')}". Offline? It uploads when you are back online. Your Mac gets it through Google Drive for desktop.</small></div></div>
  <label class="f">Google OAuth client ID</label><input data-b="gdClient" value="${esc(s.gdClient || '')}" placeholder="xxxx.apps.googleusercontent.com" autocomplete="off">
  <label class="f">Drive folder name</label><input data-b="gdFolder" value="${esc(s.gdFolder || 'ofertat')}">
  <div class="btns"><button class="btn ghost" data-a="gdConnect">Connect Google Drive</button><button class="btn ghost" data-a="gdNow">Upload waiting now</button></div>
  <div class="note" id="gdState">${s.gdLinked ? 'Connected before. ' : ''}${GDPEND ? GDPEND + ' offer(s) waiting to upload.' : 'Nothing waiting.'}</div>
  <div class="sec">Backup</div><div class="note" style="margin-top:0">Everything lives only on this phone. Export a backup now and then (AirDrop it to your Mac).</div>
  <div class="btns"><button class="btn ghost" data-a="exportData">${I.share} Export</button><label class="btn ghost">${I.copy} Import<input type="file" accept="application/json,.json" data-a="importData" hidden></label></div>
  <div class="note" style="text-align:center;margin-top:18px">Shtat Lab · made for ${esc(s.company || 'shtat.cool')}</div></div>`);
}

// ---------- slate ----------
let SLATE = null;
function openSlate() {
  const sl = S.slate, el = document.createElement('div'); el.className = 'fs'; el.id = 'slate';
  el.innerHTML = `<div class="bar"><button class="ibtn" data-a="closeFs" aria-label="Close">${I.x}</button><div class="mono" style="color:#fff8;font-size:12px" id="slDate">${new Date().toLocaleDateString('en-GB')}</div><button class="ibtn" data-a="slBeep" aria-label="Sound">${sl.beep ? ic('<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>') : ic('<path d="M11 5 6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"/>')}</button></div>
  <div class="meta"><input data-sl="prod" value="${esc(sl.prod)}" placeholder="PRODUCTION"><input data-sl="roll" value="${esc(sl.roll)}" placeholder="ROLL"></div>
  <div class="tc" id="slTc">00:00:00:00</div>
  <div class="opts">${[24, 25, 30, 50].map(f => `<button class="chip ${sl.fps === f ? 'on' : ''}" data-a="slFps" data-v="${f}">${f} fps</button>`).join('')}</div>
  <div class="grid">
    <div><span>SCENE</span><input data-sl="scene" value="${esc(sl.scene)}"></div>
    <div><span>SHOT</span><input data-sl="shot" value="${esc(sl.shot)}"></div>
    <div><span>TAKE</span><input data-sl="take" inputmode="numeric" value="${esc(sl.take)}" id="slTake"><div class="pm"><button data-a="slTake" data-v="-1">−</button><button data-a="slTake" data-v="1">+</button></div></div>
  </div>
  <button class="clap" data-a="clap"><span>CLAP</span><i class="flash"></i></button>`;
  document.body.appendChild(el);
  try { navigator.wakeLock && navigator.wakeLock.request('screen').then(w => SLATE.wl = w).catch(() => { }); } catch (e) { }
  SLATE = { el, raf: 0 }; clapPrep();
  const tick = () => { const n = new Date(), fps = S.slate.fps, fr = Math.floor(n.getMilliseconds() / 1000 * fps); const tc = $('#slTc'); if (tc) tc.textContent = `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}:${pad(fr)}`; SLATE.raf = requestAnimationFrame(tick); };
  tick();
}
// Clap sound: an <audio> element in the "playback" audio session plays even with the iPhone on silent
// (Web Audio is muted by the ringer switch, media elements are not).
let CLAPS = [], CLAPI = 0;
function clapPrep() {
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { }
  if (!CLAPS.length) CLAPS = [0, 1, 2].map(() => { const a = new Audio('clap.wav'); a.preload = 'auto'; a.volume = 1; a.setAttribute('playsinline', ''); return a; });
}
function clap() {
  const f = $('#slate .flash'); f.classList.add('on'); setTimeout(() => f.classList.remove('on'), 90);
  if (S.slate.beep) { try { clapPrep(); const a = CLAPS[CLAPI++ % CLAPS.length]; a.currentTime = 0; const pr = a.play(); if (pr) pr.catch(() => { }); } catch (e) { } }
  navigator.vibrate && navigator.vibrate(40);
  setTimeout(() => { S.slate.take = (+S.slate.take || 0) + 1; const t = $('#slTake'); if (t) t.value = S.slate.take; save(); }, 900);
}

// ---------- viewfinder ----------
let VF = null;
const ASPECTS = [['off', 'Full'], ['2.39', '2.39'], ['1.85', '1.85'], ['1.78', '16:9'], ['1.33', '4:3'], ['0.8', '4:5'], ['0.5625', '9:16'], ['1', '1:1']];
async function openVf() {
  const t = T(), el = document.createElement('div'); el.className = 'fs'; el.id = 'vf';
  el.innerHTML = `<div class="bar"><button class="ibtn" data-a="closeFs" aria-label="Close">${I.x}</button><div class="mono" style="font-size:12px;color:#fffa" id="vfInfo"></div><button class="ibtn ${t.vfGrid ? 'key' : ''}" data-a="vfGrid" aria-label="Grid">${ic('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>')}</button></div>
  <div class="stage"><video playsinline muted autoplay></video><div class="frame" id="vfFrame"><div class="thirds" ${t.vfGrid ? '' : 'hidden'}></div></div><div class="hud" id="vfHud"></div><div class="msg" id="vfMsg">Starting camera…</div></div>
  <div class="ctl"><div class="chips" id="vfAsp">${ASPECTS.map(([k, n]) => `<button class="chip ${t.vfAspect === k ? 'on' : ''}" data-a="vfAspect" data-v="${k}">${n}</button>`).join('')}</div>
  <div class="chips" id="vfLens">${myFocals().map(f => `<button class="chip ${+t.vfFocal === f ? 'on' : ''}" data-a="vfFocal" data-v="${f}">${f}mm</button>`).join('')}</div>
  <div class="chips" style="margin-bottom:10px">${Object.entries(SENSORS).filter(([k]) => k !== 'iph').map(([k, s]) => `<button class="chip ${t.sensor === k ? 'on' : ''}" data-a="vfSensor" data-v="${k}">${s.n.replace(/ \(.*\)/, '')}</button>`).join('')}</div>
  <div class="shoot"><span style="width:44px"></span><button class="shutter" data-a="vfSnap" aria-label="Capture frame"></button><span style="width:44px"></span></div></div>`;
  document.body.appendChild(el); VF = { el };
  try {
    const st = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
    if (!VF) { st.getTracks().forEach(t => t.stop()); return; }
    VF.stream = st; const v = $('#vf video'); v.srcObject = st; await v.play().catch(() => { }); $('#vfMsg').hidden = true;
  } catch (e) { const m = $('#vfMsg'); if (m) m.innerHTML = `Camera not available.<br><span class="small">Allow camera access for this app in Settings › Safari › Camera, and open it from the home screen over https.</span>`; }
  vfLayout(); addEventListener('resize', vfLayout);
}
function vfLayout() {
  if (!VF) return; const t = T(), stg = $('#vf .stage'), fr = $('#vfFrame'), v = $('#vf video'); if (!stg) return;
  const W = stg.clientWidth, H = stg.clientHeight, a = t.vfAspect === 'off' ? W / H : +t.vfAspect;
  let w = W, h = W / a; if (h > H) { h = H; w = H * a; }
  fr.style.width = w + 'px'; fr.style.height = h + 'px'; fr.style.boxShadow = t.vfAspect === 'off' ? 'none' : ''; fr.style.outlineColor = t.vfAspect === 'off' ? 'transparent' : '';
  const s = SENSORS[t.sensor] || SENSORS.ff, eq = t.vfFocal * 43.27 / diag(s), z = eq / (S.settings.phoneMm || 26);
  v.style.transform = `scale(${Math.max(1, z)})`;
  $('#vfHud').textContent = `${t.vfFocal}mm · ${s.n.replace(/ \(.*\)/, '')} · ≈${Math.round(eq)}mm FF`;
  $('#vfInfo').textContent = t.vfAspect === 'off' ? 'FULL' : (ASPECTS.find(x => x[0] === t.vfAspect) || [, ''])[1] + ' : 1';
  if (z < 1) $('#vfHud').textContent += ' · wider than this lens, use 0.5×';
}
function vfSnap() {
  const v = $('#vf video'), fr = $('#vfFrame'), stg = $('#vf .stage'); if (!v || !v.videoWidth) return toast('Camera not ready');
  const t = T(), s = SENSORS[t.sensor] || SENSORS.ff, z = Math.max(1, t.vfFocal * 43.27 / diag(s) / (S.settings.phoneMm || 26));
  const W = stg.clientWidth, H = stg.clientHeight, vw = v.videoWidth, vh = v.videoHeight, cover = Math.max(W / vw, H / vh) * z;
  const fw = fr.clientWidth, fh = fr.clientHeight, sw = fw / cover, sh = fh / cover, sx = (vw - sw) / 2, sy = (vh - sh) / 2;
  const c = document.createElement('canvas'), k = Math.min(2, 1600 / sw); c.width = Math.round(sw * k); c.height = Math.round(sh * k);
  const g = c.getContext('2d'); g.drawImage(v, sx, sy, sw, sh, 0, 0, c.width, c.height);
  g.font = `600 ${Math.round(c.width / 50)}px JetBrains Mono, monospace`; g.fillStyle = 'rgba(255,179,71,.9)'; g.fillText(`${t.vfFocal}mm ${s.n.replace(/ \(.*\)/, '')} · ${$('#vfInfo').textContent}`, c.width * .02, c.height - c.width * .02);
  const f = $('#vf .stage'); f.style.opacity = .3; setTimeout(() => f.style.opacity = 1, 120);
  c.toBlob(b => shareFile(b, `frame-${Date.now()}.jpg`, 'image/jpeg'), 'image/jpeg', .9);
}
function closeFs() {
  if (SLATE) { cancelAnimationFrame(SLATE.raf); try { SLATE.wl && SLATE.wl.release(); } catch (e) { } SLATE.el.remove(); SLATE = null; }
  if (VF) { (VF.stream && VF.stream.getTracks() || []).forEach(t => t.stop()); VF.el.remove(); VF = null; removeEventListener('resize', vfLayout); }
  rerender();
}

// ---------- files: share / download ----------
async function shareFile(blob, name, type) {
  const file = new File([blob], name, { type });
  if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: name }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
let jsPDFp;
function loadPDF() { return jsPDFp || (jsPDFp = new Promise((res, rej) => { if (window.jspdf) return res(); const s = document.createElement('script'); s.src = 'jspdf.min.js'; s.onload = res; s.onerror = () => { jsPDFp = null; rej(new Error('pdf')); }; document.head.appendChild(s); })); }
const pdfTxt = s => String(s ?? '').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—−]/g, '-').replace(/…/g, '...').replace(/[^\x00-\xFF€]/g, '');

// ---------- brand: fonts + images for PDFs ----------
const B64 = buf => { let s = '', b = new Uint8Array(buf); for (let i = 0; i < b.length; i += 32768) s += String.fromCharCode.apply(null, b.subarray(i, i + 32768)); return btoa(s); };
let FONTS = null;
async function brandFonts(d) {
  if (!FONTS) { FONTS = {}; for (const [k, f] of [['normal', 'Raleway-Regular'], ['semibold', 'Raleway-SemiBold'], ['medium', 'Raleway-Medium'], ['italic', 'Raleway-Italic'], ['lightitalic', 'Raleway-LightItalic']]) { try { const r = await fetch(`fonts/${f}.ttf`); if (r.ok) FONTS[k] = [f, B64(await r.arrayBuffer())]; } catch (e) { } } }
  for (const [k, [f, b]] of Object.entries(FONTS)) { d.addFileToVFS(f + '.ttf', b); d.addFont(f + '.ttf', 'Raleway', k); }
  return Object.keys(FONTS).length === 5;
}
const IMGC = {};
async function brandImg(u) { if (IMGC[u] !== undefined) return IMGC[u]; try { const r = await fetch(u); IMGC[u] = r.ok ? 'data:image/png;base64,' + B64(await r.arrayBuffer()) : null; } catch (e) { IMGC[u] = null; } return IMGC[u]; }
const offerMoney = n => { const r = Math.round(n * 100) / 100; return (Number.isInteger(r) ? r.toLocaleString('de-DE') : r.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })) + (S.settings.cur || '€'); };

// The shtat.cool offer template: orange header, dark page, sections, one big total.
async function offerDoc(p) {
  await loadPDF(); const { jsPDF } = window.jspdf; const d = new jsPDF({ unit: 'mm', format: 'a4' });
  const ok = await brandFonts(d), F = (st) => d.setFont(ok ? 'Raleway' : 'helvetica', ok ? st : ({ semibold: 'bold', medium: 'bold', lightitalic: 'italic' }[st] || st));
  const [logo, tag, contact] = await Promise.all(['brand/logo.png', 'brand/tagline.png', 'brand/contact.png'].map(brandImg));
  const c = client(p.clientId) || {}, t = totals(p), T = x => ok ? String(x ?? '') : pdfTxt(x), fixedPkg = !!t.fixed;
  const page = () => { d.setFillColor(17, 17, 17); d.rect(0, 0, 210, 297, 'F'); };
  page();
  d.setFillColor(238, 78, 52); d.rect(0, 0, 210, 44.6, 'F');
  d.setTextColor(255, 255, 255); F('medium'); let ts = 42; d.setFontSize(ts);
  const title = T(c.name || p.title || 'Offer'); while (d.getTextWidth(title) > 128 && ts > 22) d.setFontSize(--ts);
  d.text(title, 13, 26.5);
  if (p.subtitle) { F('italic'); d.setFontSize(15); d.text(T(p.subtitle), 13.2, 33.6); }
  if (logo) d.addImage(logo, 'PNG', 148, 15.5, 36.1, 14);
  let y = 80; const bottom = 262;
  const need = h => { if (y + h > bottom) { d.addPage(); page(); y = 24; } };
  const secs = []; p.items.forEach(it => { const k = (it.section || '').trim() || 'Production'; let g = secs.find(x => x.k === k); if (!g) secs.push(g = { k, items: [] }); g.items.push(it); });
  secs.forEach((g, gi) => {
    need(20); if (gi) y += 20.6 - 6.1;
    F('semibold'); d.setFontSize(25); d.setTextColor(255, 255, 255); d.text(T(g.k), 12.8, y); y += 8.8;
    g.items.forEach(it => {
      F('normal'); d.setFontSize(14); const lines = d.splitTextToSize(T(it.desc || ''), 108);
      need(lines.length * 6.2 + 2); d.setTextColor(255, 255, 255); d.text(lines, 12.8, y);
      const q = [it.qty, it.unit].filter(x => String(x ?? '').trim() !== '').join(' ');
      if (q) d.text(T(q), 128, y);
      if (isFree(it)) { F('italic'); d.setTextColor(238, 78, 52); d.text(fixedPkg ? T('Included') : 'Free', 197.2, y, { align: 'right' }); F('normal'); d.setTextColor(255, 255, 255); }
      else d.text(T(offerMoney(lineAmt(it))), 197.2, y, { align: 'right' });
      y += (lines.length - 1) * 6.2 + 7.4;
      if (it.note) { F('lightitalic'); d.setFontSize(10.5); d.setTextColor(125, 125, 125); const nl = d.splitTextToSize(T(it.note), 132); y -= 1.3; nl.forEach(l => { need(5); d.text(l, 12.8, y); y += 4.45; }); y += 1.7; }
    });
  });
  need(30); let ty = Math.max(y + 16.5, 192.2); if (ty > 250) { d.addPage(); page(); ty = 60; }
  d.setTextColor(255, 255, 255); F('normal'); d.setFontSize(56); d.text('Total', 192.2, ty, { align: 'right' });
  d.setFontSize(42); d.text(T(offerMoney(t.gross)), 193, ty + 13.3, { align: 'right' });
  if (t.vat) { F('lightitalic'); d.setFontSize(10); d.setTextColor(125, 125, 125); d.text(T(`përfshirë TVSH ${num(p.vat)}%`), 193, ty + 19.5, { align: 'right' }); }
  const pages = d.getNumberOfPages(); d.setPage(pages);
  if (p.offerNote) { F('lightitalic'); d.setFontSize(10.5); d.setTextColor(125, 125, 125); d.text(T(`“${p.offerNote}”`), 13, 277.1, { maxWidth: 180 }); }
  if (tag) d.addImage(tag, 'PNG', 11.8, 282.3, 65.5, 10.6); else { F('semibold'); d.setFontSize(18); d.setTextColor(255, 255, 255); d.text('creating bold', 13, 288); }
  if (contact) d.addImage(contact, 'PNG', 176, 282, 24.3, 10.9); else { F('normal'); d.setFontSize(9); d.setTextColor(255, 255, 255); d.text([S.settings.web || '', S.settings.email || ''], 198, 284, { align: 'right' }); }
  return d;
}

async function pdfDoc(p, kind) {
  await loadPDF(); const { jsPDF } = window.jspdf; const d = new jsPDF({ unit: 'mm', format: 'a4' });
  const s = S.settings, c = client(p.clientId) || {}, t = totals(p), cur = s.cur === '€' ? 'EUR' : s.cur;
  const m = n => `${(Math.round(n * 100) / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${cur}`;
  if (!p.no) { s.seq = (s.seq || 0) + 1; p.no = `SL-${new Date().getFullYear()}-${pad(s.seq, 3)}`; save(); }
  const today = new Date(), dueD = new Date(+today + (num(s.terms) || 14) * 864e5);
  await brandFonts(d); const logo = await brandImg('brand/logo.png');
  d.setFillColor(238, 78, 52); d.rect(0, 0, 210, 44, 'F');
  if (logo) d.addImage(logo, 'PNG', 16, 14, 36.1, 14); else { d.setTextColor(255, 255, 255); d.setFont('helvetica', 'bold'); d.setFontSize(22); d.text(pdfTxt(s.company || 'shtat.cool'), 16, 24); }
  d.setFont('helvetica', 'normal'); d.setFontSize(8.5); d.setTextColor(255, 225, 215);
  d.text(pdfTxt([s.name, s.email, s.phone, s.web].filter(Boolean).join('   ·   ')), 16, 31);
  if (s.address) d.text(pdfTxt(s.address), 16, 36);
  d.setTextColor(255, 255, 255); d.setFont('Raleway', 'semibold'); d.setFontSize(24); d.text(kind === 'invoice' ? 'Invoice' : 'Quote', 194, 24, { align: 'right' });
  d.setFontSize(9); d.setTextColor(255, 225, 215); d.setFont('helvetica', 'normal'); d.text(pdfTxt(p.no), 194, 30, { align: 'right' });
  let y = 60; d.setTextColor(120, 118, 125); d.setFontSize(8); d.setFont('helvetica', 'bold');
  d.text(kind === 'invoice' ? 'BILL TO' : 'PREPARED FOR', 16, y); d.text('DATE', 120, y); d.text(kind === 'invoice' ? 'DUE' : 'VALID UNTIL', 160, y);
  y += 6; d.setTextColor(20, 20, 24); d.setFontSize(11); d.text(pdfTxt(c.name || '-'), 16, y);
  d.setFont('helvetica', 'normal'); d.setFontSize(10); d.text(today.toLocaleDateString('en-GB'), 120, y); d.text((kind === 'invoice' ? dueD : new Date(+today + 30 * 864e5)).toLocaleDateString('en-GB'), 160, y);
  d.setFontSize(9); d.setTextColor(90, 90, 98); [c.contact, c.address, c.email, c.vatNo && 'No. ' + c.vatNo].filter(Boolean).forEach(l => { y += 5; d.text(pdfTxt(l), 16, y); });
  y += 12; d.setFont('helvetica', 'bold'); d.setFontSize(13); d.setTextColor(20, 20, 24); d.text(pdfTxt(p.title || 'Production'), 16, y);
  y += 9; d.setFillColor(243, 239, 231); d.rect(14, y - 5, 182, 8, 'F'); d.setFontSize(8); d.setTextColor(90, 90, 98);
  d.text('DESCRIPTION', 17, y); d.text('QTY', 128, y, { align: 'right' }); d.text('PRICE', 158, y, { align: 'right' }); d.text('AMOUNT', 193, y, { align: 'right' });
  y += 9; d.setFont('helvetica', 'normal'); d.setFontSize(10); d.setTextColor(20, 20, 24);
  for (const it of p.items) {
    const lines = d.splitTextToSize(pdfTxt(it.desc || ''), 100); if (y + lines.length * 5 > 255) { d.addPage(); y = 24; }
    const fr = isFree(it), q = [isBlank(it.qty) ? '1' : String(num(it.qty)), it.unit].filter(Boolean).join(' ');
    d.text(lines, 17, y); d.text(pdfTxt(q), 128, y, { align: 'right' }); d.text(fr ? 'Free' : m(num(it.price)), 158, y, { align: 'right' }); if (fr) d.setFont('helvetica', 'bold'); d.text(fr ? 'Free' : m(lineAmt(it)), 193, y, { align: 'right' }); d.setFont('helvetica', 'normal');
    y += lines.length * 5 + 3; d.setDrawColor(230, 228, 232); d.line(16, y - 3, 194, y - 3);
  }
  y += 4; const row = (l, v, b) => { d.setFont('helvetica', b ? 'bold' : 'normal'); d.setFontSize(b ? 13 : 10); d.setTextColor(b ? 20 : 90, b ? 20 : 90, b ? 24 : 98); d.text(l, 150, y, { align: 'right' }); d.text(v, 193, y, { align: 'right' }); y += b ? 9 : 6; };
  row('Subtotal', m(t.sub)); if (t.disc) row(`Discount ${num(p.discount)}%`, '-' + m(t.disc)); if (t.vat) row(`VAT ${num(p.vat)}%`, m(t.vat));
  d.setFillColor(255, 179, 71); d.rect(118, y - 4.5, 78, 0.6, 'F'); y += 3; row('Total', m(t.gross), true);
  let fy = 270; d.setDrawColor(230, 228, 232); d.line(16, fy - 6, 194, fy - 6); d.setFontSize(8.5); d.setFont('helvetica', 'normal'); d.setTextColor(90, 90, 98);
  if (kind === 'invoice' && s.iban) { d.setFont('helvetica', 'bold'); d.text('PAYMENT', 16, fy); d.setFont('helvetica', 'normal'); d.text(pdfTxt(`${s.iban}${s.vatNo ? '   ·   No. ' + s.vatNo : ''}   ·   Ref ${p.no}`), 34, fy); fy += 5; }
  if (s.footer) d.text(pdfTxt(s.footer), 16, fy);
  d.setTextColor(170, 168, 175); d.text('shtat lab', 194, 290, { align: 'right' });
  return d;
}
async function callSheetDoc(sh) {
  await loadPDF(); const { jsPDF } = window.jspdf; const d = new jsPDF({ unit: 'mm', format: 'a4' }); const s = S.settings;
  const p = project(sh.projectId), c = p && client(p.clientId), tz = sh.tz || undefined, T = sh.lat != null ? SUN.times(parseDay(sh.date), sh.lat, sh.lon) : null;
  d.setFillColor(9, 9, 11); d.rect(0, 0, 210, 52, 'F'); d.setFillColor(255, 179, 71); d.rect(0, 52, 210, 1.4, 'F');
  d.setTextColor(255, 179, 71); d.setFont('helvetica', 'bold'); d.setFontSize(9); d.text('CALL SHEET', 16, 16);
  d.setTextColor(243, 239, 231); d.setFontSize(22); d.text(d.splitTextToSize(pdfTxt(sh.title || 'Shoot'), 120)[0], 16, 27);
  d.setFont('helvetica', 'normal'); d.setFontSize(10); d.setTextColor(180, 178, 185); d.text(pdfTxt(fmtDayLong(sh.date) + (c ? '   ·   ' + c.name : '')), 16, 36);
  d.setFontSize(8); d.text(pdfTxt(`${s.company || ''}   ·   ${s.name || ''} ${s.phone || ''}`), 16, 44);
  d.setTextColor(255, 179, 71); d.setFont('helvetica', 'bold'); d.setFontSize(8); d.text('CALL', 150, 16); d.text('WRAP', 178, 16);
  d.setTextColor(243, 239, 231); d.setFontSize(20); d.text(sh.call || '--', 150, 27); d.text(sh.wrap || '--', 178, 27);
  let y = 64; const h = t => { if (y > 268) { d.addPage(); y = 20; } d.setFont('helvetica', 'bold'); d.setFontSize(8.5); d.setTextColor(200, 120, 30); d.text(t, 16, y); y += 6; d.setFont('helvetica', 'normal'); d.setFontSize(10); d.setTextColor(20, 20, 24); };
  const line = (t, x = 16, w = 178) => { const ls = d.splitTextToSize(pdfTxt(t), w); ls.forEach(l => { if (y > 280) { d.addPage(); y = 20; } d.text(l, x, y); y += 5; }); };
  h('LOCATION'); line(sh.place || '-'); if (sh.address) line(sh.address); if (sh.lat != null) { d.setTextColor(30, 80, 200); line(`maps.apple.com/?ll=${sh.lat.toFixed(5)},${sh.lon.toFixed(5)}`); d.setTextColor(20, 20, 24); } y += 3;
  if (T) { h('LIGHT'); line(`Blue ${fmtT(T.dawn, tz)}-${fmtT(T.bh1, tz)}   Sunrise ${fmtT(T.rise, tz)}   Golden ${fmtT(T.bh1, tz)}-${fmtT(T.gh1, tz)}`); line(`Golden ${fmtT(T.gh2, tz)}-${fmtT(T.bh2, tz)}   Sunset ${fmtT(T.set, tz)}   Blue ${fmtT(T.bh2, tz)}-${fmtT(T.dusk, tz)}`); y += 3; }
  if (sh._wx) { h('WEATHER'); line(`${sh._wx.sum}, ${Math.round(sh._wx.min)}-${Math.round(sh._wx.max)} C, rain ${sh._wx.rain}%, wind up to ${Math.round(sh._wx.wind)} km/h`); y += 3; }
  if (sh.crew.length) { h('CREW'); sh.crew.forEach(x => { if (y > 280) { d.addPage(); y = 20; } d.setFont('helvetica', 'bold'); d.text(pdfTxt(x.role || ''), 16, y); d.setFont('helvetica', 'normal'); d.text(pdfTxt(x.name || ''), 56, y); d.text(pdfTxt(x.phone || ''), 194, y, { align: 'right' }); y += 6; }); y += 2; }
  if (sh.shots.length) { h('SHOT LIST'); sh.shots.forEach((x, i) => { if (y > 280) { d.addPage(); y = 20; } d.setTextColor(150, 150, 158); d.text(String(i + 1), 16, y); d.setTextColor(20, 20, 24); const ls = d.splitTextToSize(pdfTxt(x.text || ''), 140); d.text(ls, 24, y); if (x.lens) { d.setTextColor(200, 120, 30); d.text(pdfTxt(x.lens), 194, y, { align: 'right' }); d.setTextColor(20, 20, 24); } y += ls.length * 5 + 1.5; }); y += 2; }
  if (sh.gear.length) { h('GEAR'); const half = Math.ceil(sh.gear.length / 2), y0 = y; sh.gear.forEach((g, i) => { const col = i < half ? 16 : 108, yy = y0 + (i % half) * 5.5; if (yy > 285) return; d.rect(col, yy - 3, 3, 3); d.text(pdfTxt(g.text).slice(0, 48), col + 5, yy); }); y = y0 + half * 5.5 + 3; }
  if (sh.notes) { h('NOTES'); line(sh.notes); }
  d.setFontSize(8); d.setTextColor(170, 168, 175); d.text('shtat lab', 194, 290, { align: 'right' });
  return d;
}


// ---------- Google Drive: every offer PDF is saved to the "ofertat" folder ----------
// Static PWA, so sign-in is client-side (Google Identity Services, drive.file scope: the app only sees files it made).
// Offline or signed out? The PDF waits in IndexedDB and uploads on the next chance.
const GD = { tok: null, exp: 0, client: null };
const gdOn = () => !!(S.settings.gdClient && S.settings.gdOn);
function idb() { return new Promise((ok, no) => { const r = indexedDB.open('shtatlab-q', 1); r.onupgradeneeded = () => r.result.createObjectStore('q', { keyPath: 'id' }); r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); }); }
async function qAll() { const db = await idb(); return new Promise(ok => { const r = db.transaction('q').objectStore('q').getAll(); r.onsuccess = () => ok(r.result || []); r.onerror = () => ok([]); }); }
async function qPut(x) { const db = await idb(); return new Promise(ok => { const t = db.transaction('q', 'readwrite'); t.objectStore('q').put(x); t.oncomplete = ok; t.onerror = ok; }); }
async function qDel(id) { const db = await idb(); return new Promise(ok => { const t = db.transaction('q', 'readwrite'); t.objectStore('q').delete(id); t.oncomplete = ok; t.onerror = ok; }); }
function gisLoad() { return window.google?.accounts?.oauth2 ? Promise.resolve() : new Promise((ok, no) => { const sc = document.createElement('script'); sc.src = 'https://accounts.google.com/gsi/client'; sc.onload = ok; sc.onerror = no; document.head.appendChild(sc); }); }
async function gdToken(interactive) {
  if (GD.tok && Date.now() < GD.exp - 60e3) return GD.tok;
  if (!interactive) return null;
  await gisLoad();
  return new Promise((ok, no) => {
    setTimeout(() => no(new Error('timeout')), 90e3);
    GD.client = google.accounts.oauth2.initTokenClient({ client_id: S.settings.gdClient.trim(), scope: 'https://www.googleapis.com/auth/drive.file', callback: r => { if (r.error) return no(r); GD.tok = r.access_token; GD.exp = Date.now() + (+r.expires_in || 3600) * 1000; ok(GD.tok); }, error_callback: e => no(e) });
    GD.client.requestAccessToken({ prompt: S.settings.gdLinked ? '' : 'consent' });
  });
}
async function gdApi(url, opt = {}) { const r = await fetch(url, { ...opt, headers: { Authorization: 'Bearer ' + GD.tok, ...(opt.headers || {}) } }); if (r.status === 401) { GD.tok = null; throw new Error('auth'); } if (!r.ok) throw new Error('drive ' + r.status); return r.json(); }
async function gdFolder() {
  const name = (S.settings.gdFolder || 'ofertat').trim();
  if (S.settings.gdFolderId) { try { const f = await gdApi(`https://www.googleapis.com/drive/v3/files/${S.settings.gdFolderId}?fields=id,trashed`); if (!f.trashed) return f.id; } catch (e) { if (e.message === 'auth') throw e; } }
  const q = encodeURIComponent(`name='${name.replace(/'/g, "\\'")}' and mimeType='application/vnd.google-apps.folder' and trashed=false`);
  const l = await gdApi(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id)`);
  const id = l.files?.[0]?.id || (await gdApi('https://www.googleapis.com/drive/v3/files?fields=id', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, mimeType: 'application/vnd.google-apps.folder' }) })).id;
  S.settings.gdFolderId = id; save(); return id;
}
async function gdUpload(x) {
  const folder = await gdFolder(), meta = { name: x.name, parents: [folder], mimeType: 'application/pdf' };
  const fd = new FormData(); fd.append('metadata', new Blob([JSON.stringify(meta)], { type: 'application/json' })); fd.append('file', x.blob);
  return gdApi('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name', { method: 'POST', body: fd });
}
let GDBUSY = false;
async function gdFlush(interactive) {
  if (!gdOn() || GDBUSY) return; const q = await qAll(); if (!q.length) return gdBadge(0);
  if (!navigator.onLine) return gdBadge(q.length);
  GDBUSY = true; let done = 0;
  try { if (!(await gdToken(interactive))) return gdBadge(q.length); S.settings.gdLinked = true; save();
    for (const x of q.sort((a, b) => a.at - b.at)) { await gdUpload(x); await qDel(x.id); done++; }
    if (done) toast(done === 1 ? 'Offer saved to Drive / ' + (S.settings.gdFolder || 'ofertat') : `${done} offers saved to Drive`);
  } catch (e) { console.warn('drive', e); if (interactive) toast(e && e.message === 'drive 403' ? 'Drive refused. Check the client ID.' : 'Drive upload waits for next time'); }
  finally { GDBUSY = false; gdBadge((await qAll()).length); }
}
async function gdQueue(blob, name) { if (!gdOn()) return; await qPut({ id: uid(), name, blob, at: Date.now() }); gdFlush(true); }
let GDPEND = 0;
function gdBadge(n) { GDPEND = n; const b = $('#gdPend'); if (b) { b.hidden = !n; b.querySelector('#gdN').textContent = n; } }
window.addEventListener('online', () => gdFlush(false));
document.addEventListener('visibilitychange', () => { if (!document.hidden) gdFlush(false); });

// ---------- location search ----------
// All 38 Kosovo municipalities, so a place is picked by name. Coordinates stay behind the scenes.
const KS = [['Prishtinë',42.6629,21.1655],['Prizren',42.2139,20.7397],['Pejë',42.6593,20.2887],['Gjakovë',42.3803,20.4308],['Mitrovicë',42.8914,20.8660],['Ferizaj',42.3702,21.1553],['Gjilan',42.4635,21.4694],['Podujevë',42.9106,21.1925],['Vushtrri',42.8231,20.9675],['Suharekë',42.3580,20.8253],['Rahovec',42.3992,20.6547],['Drenas',42.6264,20.8939],['Lipjan',42.5217,21.1258],['Malishevë',42.4828,20.7458],['Kamenicë',42.5781,21.5803],['Viti',42.3214,21.3581],['Deçan',42.5402,20.2880],['Istog',42.7807,20.4875],['Klinë',42.6217,20.5778],['Skenderaj',42.7467,20.7886],['Dragash',42.0265,20.6533],['Fushë Kosovë',42.6397,21.0961],['Kaçanik',42.2319,21.2592],['Shtime',42.4331,21.0397],['Obiliq',42.6869,21.0703],['Novobërdë',42.6178,21.4342],['Graçanicë',42.6003,21.1931],['Hani i Elezit',42.1494,21.2967],['Junik',42.4761,20.2775],['Mamushë',42.3242,20.7275],['Shtërpcë',42.2392,21.0272],['Ranillug',42.4919,21.5994],['Kllokot',42.3681,21.3736],['Partesh',42.4022,21.4339],['Zubin Potok',42.9144,20.6897],['Zveçan',42.9075,20.8403],['Leposaviq',43.1039,20.8028],['Mitrovicë e Veriut',42.8939,20.8656]].sort((a, b) => a[0].localeCompare(b[0], 'sq'));
const NEAR = [['Shkup', 41.9981, 21.4254, 'Europe/Skopje'], ['Tetovë', 42.0069, 20.9715, 'Europe/Skopje'], ['Tiranë', 41.3275, 19.8187, 'Europe/Tirane']];
const cityPick = o => `<select class="citysel" data-city="${o}" aria-label="City"><option value="">Pick a city in Kosovo…</option>${KS.map((c, i) => `<option value="k${i}">${c[0]}</option>`).join('')}<optgroup label="Nearby">${NEAR.map((c, i) => `<option value="n${i}">${c[0]}</option>`).join('')}</optgroup></select>`;
function nearestCity(lat, lon) { let best = null, bd = 1e9; [...KS, ...NEAR].forEach(c => { const d = Math.hypot(c[1] - lat, (c[2] - lon) * Math.cos(lat * Math.PI / 180)) * 111; if (d < bd) { bd = d; best = c; } }); return bd < 20 ? best[0] : null; }

let locT;
function setLoc(target, r) {
  const obj = target === 'settings' ? S.settings : getObj(target); if (!obj) return;
  obj.lat = +(+r.latitude).toFixed(5); obj.lon = +(+r.longitude).toFixed(5); obj.place = r.label; obj.tz = r.timezone || ''; save(); rerender();
}
async function locSearch(inp) {
  const q = inp.value.trim(), box = $('#locres'); if (!box) return; if (q.length < 2) { box.innerHTML = ''; return; }
  try {
    const rs = await geocode(q); if (inp.value.trim() !== q) return;
    box.innerHTML = rs.length ? `<div class="list" style="margin:8px 0 0">${rs.map((r, i) => `<div class="li tap" data-a="pickLoc" data-t="${inp.dataset.loc}" data-i="${i}"><span style="color:var(--key)">${I.pin.replace('<svg', '<svg style="width:18px;height:18px"')}</span><div class="grow"><div class="t">${esc(r.name)}</div><div class="s">${esc([r.admin1, r.country].filter(Boolean).join(', '))}</div></div></div>`).join('')}</div>` : '<div class="note">No match.</div>';
    box._rs = rs;
  } catch (e) { box.innerHTML = '<div class="note">Search needs internet. Use the location button instead.</div>'; }
}

// ---------- binding ----------
function getObj(o) { if (!o) return null; if (o === 'settings') return S.settings; if (o === 'tools') return S.tools; const [col, id] = o.split(':'); return (S[col] || []).find(x => x.id === id); }
function setPath(obj, path, val) { const ks = path.split('.'); let o = obj; for (let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = val; }
function bindVal(el) {
  const holder = el.closest('[data-o]'); if (!holder) return; const obj = getObj(holder.dataset.o); if (!obj) return;
  let v = el.type === 'checkbox' ? el.checked : el.value;
  if (el.type === 'range') { v = +v; const out = $('#o_' + el.dataset.b.replace('.', '_')); if (out) out.textContent = (Number.isInteger(v) ? v : v.toFixed(el.step < .5 ? 1 : 2).replace(/\.?0+$/, '')) + (el.dataset.u || ''); }
  else if (el.tagName === 'SELECT' && holder.dataset.o === 'tools' && !isNaN(+v) && v !== '') v = +v;
  setPath(obj, el.dataset.b, v); save();
  if (LIVE) LIVE();
}
document.addEventListener('input', e => {
  const el = e.target;
  if (el.dataset.loc !== undefined) { clearTimeout(locT); locT = setTimeout(() => locSearch(el), 350); return; }
  if (el.dataset.sl) { S.slate[el.dataset.sl] = el.dataset.sl === 'take' ? (+el.value || 0) : el.value; save(); return; }
  if (el.dataset.b && el.tagName !== 'SELECT') bindVal(el);
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.a === 'importData') return importData(el);
  if (el.dataset.city !== undefined && el.value) { const k = el.value, c = k[0] === 'k' ? KS[+k.slice(1)] : NEAR[+k.slice(1)]; setLoc(el.dataset.city, { latitude: c[1], longitude: c[2], label: k[0] === 'k' ? `${c[0]}, Kosovo` : c[0], timezone: c[3] || 'Europe/Belgrade' }); toast(c[0]); return; }
  if (el.dataset.b && el.tagName === 'SELECT' && el.value === '__new') { const p = getObj(el.closest('[data-o]').dataset.o); const c = { id: uid(), name: 'New client', contact: '', email: '', phone: '', address: '', vatNo: '', notes: '' }; S.clients.push(c); p.clientId = c.id; save(); go('client/' + c.id); return; }
  if (el.dataset.b && (el.tagName === 'SELECT' || el.type === 'date')) { bindVal(el); if (el.dataset.rr !== undefined || el.type === 'date') { if (!el.closest('#sheet')) rerender(); } }
});
document.addEventListener('submit', e => {
  e.preventDefault(); const f = e.target, a = f.dataset.a, obj = getObj(f.closest('[data-o]')?.dataset.o), v = f.t.value.trim(); if (!v || !obj) return;
  if (a === 'addShot') obj.shots.push({ text: v, lens: '', done: false }); if (a === 'addGear') obj.gear.push({ text: v, done: false });
  save(); rerender(); setTimeout(() => { const n = $(`form[data-a="${a}"] input`); n && n.focus(); }, 30);
});

// ---------- actions ----------
const A = {
  go: el => go(el.dataset.to), back: el => go(el.dataset.to),
  settings: settingsSheet, closeSheet: () => { closeSheet(); rerender(); },
  dismissInstall: () => { S.settings.installDismissed = true; save(); rerender(); },
  newShoot: () => newShoot(), newShootFor: el => newShoot(el.dataset.id), newProject: () => newProject(), newProjectFor: el => newProject(el.dataset.id), newClient: () => newClient(),
  seg: el => { S.ui.studio = el.dataset.v; save(); rerender(); }, status: el => { S.ui.status = el.dataset.v; save(); rerender(); },
  gdToggle: el => { S.settings.gdOn = el.checked; save(); if (el.checked && !S.settings.gdClient) toast('Add the client ID first'); },
  gdConnect: async () => { if (!S.settings.gdClient) return toast('Add the client ID first'); try { await gdToken(true); S.settings.gdLinked = true; S.settings.gdOn = true; save(); await gdFolder(); toast('Drive connected'); gdFlush(true); closeSheet(); settingsSheet(); } catch (e) { console.warn(e); toast('Google sign-in did not finish'); } },
  gdNow: () => gdFlush(true),
  payTick: el => { const p = project(el.dataset.id); if (!p) return; p.status = el.checked ? 'paid' : 'delivered'; if (el.checked) p.paidAt = Date.now(); save(); toast(el.checked ? 'Paid' : 'Waiting for payment'); if (el.checked && navigator.vibrate) navigator.vibrate(10); rerender(); },
  outToggle: el => { const p = getObj(el.closest('[data-o]').dataset.o); p.out = el.checked; if (!p.outs) p.outs = []; if (p.out && !p.outs.length) p.outs.push({ who: '', what: '', amount: '', paid: false }); save(); rerender(); },
  outTick: el => { const p = getObj(el.closest('[data-o]').dataset.o); p.outs[+el.dataset.i].paid = el.checked; save(); el.closest('.erow').classList.toggle('done', el.checked); if (LIVE) LIVE(); },
  setStatus: el => { const p = getObj(el.closest('[data-o]').dataset.o); p.status = el.dataset.v; save(); rerender(); toast(stName(p.status)); },
  preset: el => { const p = getObj(el.closest('[data-o]').dataset.o); if (p.items.some(i => i.desc) && !confirm('Replace the lines with the reels package?')) return; p.subtitle = 'Reels'; p.items = [{ section: 'Production', desc: 'Video të shkurtra të përshtatura për Instagram / TikTok', qty: 5, unit: 'reels', price: 0, note: '' }, { section: 'Production', desc: 'Video reels statike', qty: 5, unit: 'reels', price: 0, note: '' }, { section: 'Production', desc: 'Cinematic Reels', qty: 1, unit: 'reels', price: 0, note: 'Cinematic Reels janë video më të kuruara dhe të detajuara, të ngjashme me një produksion komercial. Këto përmbajtje realizohen kryesisht për raste të veçanta, festa, kampanja sezonale, lansime ose evente të rëndësishme të brandit. Për shkak të nivelit më të lartë të produksionit, këto Reels mund të kërkojnë më shumë kohë për koncept, xhirim, ndriçim dhe post-produksion.' }, { section: 'Post-production', desc: 'Editing', qty: '', unit: '', price: 0, note: '' }, { section: 'Post-production', desc: 'Color grading', qty: '', unit: '', price: 0, note: '' }, { section: 'Post-production', desc: 'Sound design (SFX)', qty: '', unit: '', price: 0, note: '' }]; p.offerNote = 'Numri i përcaktuar i Reels përfshihet çdo muaj gjatë kohëzgjatjes së bashkëpunimit.'; save(); rerender(); toast('Reels package loaded. Set the package price.'); },
  setTool: el => { S.tools[el.dataset.k] = +el.dataset.v; save(); rerender(); },
  add: el => { const o = getObj(el.closest('[data-o]').dataset.o), l = el.dataset.l; o[l].push(l === 'crew' ? { name: '', role: '', phone: '' } : l === 'items' ? { section: (o.items[o.items.length - 1] || {}).section || 'Production', desc: '', qty: 1, unit: '', price: '', note: '' } : l === 'outs' ? { who: '', what: '', amount: '', paid: false } : { text: '' }); save(); rerender(); },
  rm: el => { const o = getObj(el.closest('[data-o]').dataset.o); o[el.dataset.l].splice(+el.dataset.i, 1); save(); rerender(); },
  mv: el => { const o = getObj(el.closest('[data-o]').dataset.o), a = o[el.dataset.l], i = +el.dataset.i; if (i > 0) { [a[i - 1], a[i]] = [a[i], a[i - 1]]; save(); rerender(); } },
  tick: el => { const o = getObj(el.closest('[data-o]').dataset.o); const it = o[el.dataset.l][+el.dataset.i]; it.done = el.checked; save(); el.closest('.erow').classList.toggle('done', el.checked); const sc = $('#shotCount'); if (sc && el.dataset.l === 'shots') sc.textContent = `${o.shots.filter(x => x.done).length}/${o.shots.length}`; if (el.checked && navigator.vibrate) navigator.vibrate(10); },
  loadKit: el => { const o = getObj(el.closest('[data-o]').dataset.o), have = new Set(o.gear.map(g => g.text)); S.settings.kit.split('\n').map(x => x.trim()).filter(x => x && !have.has(x)).forEach(text => o.gear.push({ text, done: false })); save(); rerender(); },
  myloc: el => {
    if (!navigator.geolocation) return toast('Location not available'); toast('Finding you…');
    navigator.geolocation.getCurrentPosition(async p => {
      const lat = p.coords.latitude, lon = p.coords.longitude, nc = nearestCity(lat, lon); let label = nc ? `Near ${nc}` : 'My location';
      setLoc(el.dataset.t, { latitude: lat, longitude: lon, label, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    }, () => toast('Location blocked. Search a place instead.'), { enableHighAccuracy: false, timeout: 12000, maximumAge: 6e5 });
  },
  pickLoc: el => { const r = $('#locres')._rs[+el.dataset.i]; setLoc(el.dataset.t, { ...r, label: [r.name, r.country].filter(Boolean).join(', ') }); },
  shootMenu: el => { const id = el.dataset.id; sheet(`<div class="list" style="margin-top:4px"><div class="li tap" data-a="editShoot" data-id="${id}">${I.edit || ic('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>')}<div class="grow t">Edit shoot</div></div><div class="li tap" data-a="callSheet" data-id="${id}">${I.doc}<div class="grow t">Call sheet PDF</div></div><div class="li tap" data-a="dupShoot" data-id="${id}">${I.copy}<div class="grow t">Duplicate shoot</div></div><div class="li tap" data-a="shareShoot" data-id="${id}">${I.share}<div class="grow t">Share as text</div></div><div class="li tap" data-a="delShoot" data-id="${id}" style="color:var(--bad)">${I.trash}<div class="grow t">Delete shoot</div></div></div><button class="btn ghost full" data-a="closeSheet">Cancel</button>`); },
  editShoot: el => { closeSheet(); go('shoot/' + el.dataset.id); setTimeout(() => { const t = $('input[data-b=title]'); if (t) { t.focus(); t.select(); } }, 120); },
  dupShoot: el => { const s = clone(S.shoots.find(x => x.id === el.dataset.id)); s.id = uid(); s.title = (s.title || 'Shoot') + ' (copy)'; s.shots.forEach(x => x.done = false); s.gear.forEach(x => x.done = false); delete s._wx; S.shoots.push(s); save(); closeSheet(); go('shoot/' + s.id); },
  delShoot: el => { if (!confirm('Delete this shoot?')) return; S.shoots = S.shoots.filter(x => x.id !== el.dataset.id); save(); closeSheet(); go('shoots'); },
  delProject: el => { if (!confirm('Delete this project? Its shoots stay.')) return; S.projects = S.projects.filter(x => x.id !== el.dataset.id); save(); go('studio'); },
  delClient: el => { if (!confirm('Delete this client? Projects stay, without a client.')) return; S.clients = S.clients.filter(x => x.id !== el.dataset.id); S.projects.forEach(p => { if (p.clientId === el.dataset.id) p.clientId = ''; }); save(); go('studio'); },
  shareShoot: async el => { const s = S.shoots.find(x => x.id === el.dataset.id), txt = shootText(s); closeSheet(); if (navigator.share) { try { await navigator.share({ text: txt, title: s.title }); return; } catch (e) { if (e.name === 'AbortError') return; } } try { await navigator.clipboard.writeText(txt); toast('Copied'); } catch (e) { toast('Could not share'); } },
  callSheet: async el => { const s = S.shoots.find(x => x.id === el.dataset.id); try { toast('Making PDF…'); const d = await callSheetDoc(s); shareFile(d.output('blob'), `Call sheet - ${(s.title || 'shoot').replace(/[\\/:*?"<>|]/g, '')} - ${s.date}.pdf`, 'application/pdf'); } catch (e) { console.error(e); toast('PDF failed. Open once online.'); } },
  pdf: async el => { const p = project(el.dataset.id); try { toast('Making PDF…'); const d = el.dataset.k === 'invoice' ? await pdfDoc(p, 'invoice') : await offerDoc(p), blob = d.output('blob'), fname = (el.dataset.k === 'invoice' ? `Invoice ${p.no} - ${(client(p.clientId) || {}).name || p.title || ''}.pdf` : `${(client(p.clientId) || {}).name || p.title || 'Offer'}${p.subtitle ? ' - ' + p.subtitle : ''}.pdf`).replace(/[\\/:*?"<>|]/g, ''); if (el.dataset.k !== 'invoice') gdQueue(blob, fname); shareFile(blob, fname, 'application/pdf'); if (el.dataset.k === 'invoice' && !['delivered', 'paid'].includes(p.status)) { p.status = 'delivered'; save(); setTimeout(rerender, 400); } } catch (e) { console.error(e); toast('PDF failed. Open once online.'); } },
  exportData: () => { saveNow(); const b = new Blob([JSON.stringify({ app: 'shtat-lab', v: 1, at: new Date().toISOString(), data: S, learn: learnStats() }, null, 1)], { type: 'application/json' }); shareFile(b, `shtat-lab-backup-${todayStr()}.json`, 'application/json'); },
  slate: openSlate, viewfinder: openVf, closeFs, clap,
  slFps: el => { S.slate.fps = +el.dataset.v; save(); $$('#slate .opts .chip').forEach(c => c.classList.toggle('on', c === el)); },
  slTake: el => { S.slate.take = Math.max(1, (+S.slate.take || 0) + +el.dataset.v); $('#slTake').value = S.slate.take; save(); },
  slBeep: el => { S.slate.beep = !S.slate.beep; save(); toast(S.slate.beep ? 'Clap sound on' : 'Clap sound off'); },
  vfAspect: el => { S.tools.vfAspect = el.dataset.v; save(); $$('#vfAsp .chip').forEach(c => c.classList.toggle('on', c === el)); vfLayout(); },
  vfFocal: el => { S.tools.vfFocal = +el.dataset.v; save(); $$('#vfLens .chip').forEach(c => c.classList.toggle('on', c === el)); vfLayout(); },
  vfSensor: el => { S.tools.sensor = el.dataset.v; save(); $$('#vf .chip[data-a=vfSensor]').forEach(c => c.classList.toggle('on', c === el)); vfLayout(); },
  vfGrid: el => { S.tools.vfGrid = !S.tools.vfGrid; save(); el.classList.toggle('key', S.tools.vfGrid); $('#vf .thirds').hidden = !S.tools.vfGrid; },
  vfSnap,
};
function importData(el) {
  const f = el.files[0]; if (!f) return; const r = new FileReader();
  r.onload = () => { try { const j = JSON.parse(r.result); const d = j.data || j; if (!d.settings) throw 0; if (!confirm('Replace everything on this phone with this backup?')) return; localStorage.setItem(KEY, JSON.stringify(d)); if (j.learn) localStorage.setItem('lightlab', JSON.stringify(j.learn)); S = load(); closeSheet(); go('today'); toast('Backup restored'); } catch (e) { toast('Not a Shtat Lab backup'); } };
  r.readAsText(f);
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-a]'); if (!el) return;
  if (el.tagName === 'FORM' || el.type === 'file' || (el.tagName === 'INPUT' && el.type !== 'checkbox')) return;
  if (el.tagName === 'LABEL') return;
  const fn = A[el.dataset.a]; if (fn) { if (el.tagName !== 'INPUT') e.preventDefault(); fn(el, e); }
});
$('#sheet').addEventListener('click', e => { if (e.target.id === 'sheet') { closeSheet(); rerender(); } });
$$('#tabs button').forEach(b => b.addEventListener('click', () => { const t = b.dataset.tab; if (location.hash.slice(1).split('/')[0] === t) { scrollTo({ top: 0, behavior: 'smooth' }); } go(t); }));

// ---------- boot ----------
// Old "use my location" saves stored coordinates as the place name. Show a city name instead.
[S.settings, ...S.shoots].forEach(o => { if (o && o.lat != null && /^-?\d+\.\d+,\s*-?\d+\.\d+$/.test(o.place || '')) { const nc = nearestCity(o.lat, o.lon); o.place = nc ? `Near ${nc}` : 'My location'; } });
render();
setTimeout(() => gdFlush(false), 1500);
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => { });
setInterval(() => { if (!document.hidden && (ROUTE[0] === 'today' || !ROUTE[0]) && !SLATE && !VF && $('#sheet').hidden && !document.activeElement.matches('input,textarea,select')) rerender(); }, 60e3);
