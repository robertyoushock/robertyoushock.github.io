// Builds the static site from _src/site.json. Run: node _src/build.mjs
// Output goes to the repo root (index.html, portfolio/…), which GitHub Pages serves as-is.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync } from 'node:fs';
const ROOT = new URL('../', import.meta.url).pathname;
const S = JSON.parse(readFileSync(ROOT + '_src/site.json', 'utf8'));
const SITE = 'https://www.robertyoushock.com';
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const imgs = (slug) => readdirSync(ROOT + `assets/work/${slug}`).filter((f) => f.endsWith('.webp')).map((f) => f.replace('.webp', '')).filter((n) => n !== 'cover').sort((a, b) => a - b);

const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const BACK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" fill="#140702" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
const BOLT = '<img class="bolt" src="/assets/bolt.png" alt="" width="448" height="640">';

const page = ({ title, desc, path, image = '/assets/og.png', body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${path}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${SITE}${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#E0FBFC">
<link rel="icon" href="/assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&display=swap">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${body}
</body>
</html>
`;

const contact = `
<section class="contact" id="contact" aria-labelledby="contact-title">
  <div>
    <h2 id="contact-title">Ready to shape stories through design?</h2>
    <p>I build visuals and tools that turn complex ideas into clear, compelling experiences. Let's talk about what you're making.</p>
  </div>
  <div class="actions">
    <a class="pill dark" href="mailto:${S.email}">${S.email}</a>
    <a class="pill" href="${S.linkedin}" rel="noopener">LinkedIn</a>
    <a class="pill" href="${S.resume}" rel="noopener">Resume</a>
  </div>
</section>
<footer class="foot"><span>© ${new Date().getFullYear()} ${S.name} · ${S.location}</span><span>Hand-built, hosted free on GitHub Pages</span></footer>`;

const card = (p, cls = '') => `
  <a class="card ${cls}" href="/portfolio/${p.slug}/">
    <div class="media"><img src="/assets/work/${p.slug}/cover.webp" alt="" loading="lazy" width="1600" height="900"></div>
    <div class="body"><h3>${esc(p.title)}</h3><p class="meta">${esc(p.kicker)} · ${esc(p.client)} · ${esc(p.year)}</p></div>
  </a>`;

const sideCard = (s) => `
  <a class="side-card" href="/portfolio/${s.slug}/">
    <div class="media"><img src="/assets/side/our-places.webp" alt="The Our Places app on three phones" loading="lazy" width="1600" height="889"></div>
    <div class="body">
      <p class="kicker">${esc(s.kicker)}</p>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.blurb)}</p>
      <div class="go"><span>Case study</span><span>Try the demo</span></div>
    </div>
  </a>`;

// ---------- home ----------
const fan = ['tegna-elections-24/cover', 'key-bridge-collapse/1', 'airbag-recall/cover', 'to-the-point-wind-turbines/3', 'manchester-road-race/cover', 'earthquake-risk/cover'];
const home = page({
  title: `${S.name} · ${S.title}`,
  desc: `${S.name} is a creative technologist in Denver: technical design, design systems and AI workflows, rooted in broadcast motion design and maps.`,
  path: '/',
  body: `
<main id="main">
<div class="bento">
  <section class="tile t-aqua hero rise">
    <p class="name">${S.name}${BOLT}</p>
    <h1>${esc(S.title)}</h1>
    <p class="sub">${esc(S.subtitle)}</p>
    <hr class="rule">
    <ul class="links">
      <li><a href="${S.linkedin}" rel="noopener">LinkedIn</a></li>
      <li><a href="mailto:${S.email}">Email</a></li>
      <li><a href="${S.resume}" rel="noopener">Resume</a></li>
      <li><a href="${S.team}" rel="noopener">Current team's portfolio</a></li>
    </ul>
    <div class="push">
      <p class="intro">${esc(S.intro)}</p>
      <p class="official">${esc(S.official)} · ${esc(S.location)}</p>
    </div>
  </section>
  <section class="tile t-coral avail rise d1" aria-labelledby="avail-title">
    <h2 id="avail-title">Available<br>for work</h2>
    <p>${esc(S.available)}</p>
    <div class="push"><hr class="rule"><a class="pill" href="mailto:${S.email}">${S.email}</a></div>
  </section>
  <section class="tile t-navy collage rise d2" aria-label="Selected work">
    <div class="fan" aria-hidden="true">${fan.map((f) => `<img src="/assets/work/${f}.webp" alt="" width="1600" height="900">`).join('')}</div>
    <a class="label" href="#work">${S.projects.length + 1} Projects ${ARROW}</a>
  </section>
</div>
<div class="bento row2">
  <section class="tile t-sky stack rise d2" aria-labelledby="stack-title">
    <h2 id="stack-title">My stack</h2>
    <dl>${Object.entries(S.stack).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v.join(', '))}</dd>`).join('')}</dl>
  </section>
  <section class="tile t-deep exp rise d3" aria-labelledby="exp-title">
    <a class="resume" href="${S.resume}" rel="noopener"><h2 id="exp-title">6+ years<br>of experience</h2>${ARROW}</a>
    <small>(Click for my resume)</small>
    <hr class="rule">
    <ol>${S.experience.map(([co, role, when]) => `<li><b>${esc(co)}</b><span>${esc(when)}</span><i>${esc(role)}</i></li>`).join('')}</ol>
  </section>
  <section class="tile t-aqua skills rise d4" aria-labelledby="skills-title">
    <h2 id="skills-title">Skills</h2>
    <ul class="push">${S.skills.map(([k, y]) => `<li>${esc(k)}<span>${y} year${y > 1 ? 's' : ''}</span></li>`).join('')}</ul>
  </section>
</div>
<div class="numbers" aria-label="By the numbers">${S.numbers.map(([n, t]) => `<div><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join('')}</div>

<section class="section" id="work" aria-labelledby="work-title">
  <div class="section-head"><div><p class="eyebrow">Broadcast · Motion · Maps</p><h2 id="work-title">Selected work</h2></div><p>Graphics packages and explainers for TEGNA stations across the country, built in After Effects, Google Earth Studio and Chyron.</p></div>
  <div class="work">${S.projects.map((p, i) => card(p)).join('')}</div>
</section>

<section class="section" id="tech" aria-labelledby="tech-title">
  <div class="section-head"><div><p class="eyebrow">Creative technology</p><h2 id="tech-title">Tools, pilots &amp; pipelines</h2></div><p>The technical side of my work at TEGNA: the systems, pilots and training behind the graphics.</p></div>
  <div class="tech">${S.tech.map((t) => `<article><p class="kicker">${esc(t.kicker)}</p><h3>${esc(t.title)}</h3><p>${esc(t.body)}</p></article>`).join('')}</div>
</section>

<section class="section" id="side" aria-labelledby="side-title">
  <div class="section-head"><div><p class="eyebrow">Built on my own time</p><h2 id="side-title">Side project</h2></div></div>
  ${sideCard(S.side)}
</section>
</main>
${contact}`,
});

// ---------- project pages ----------
const all = [...S.projects, S.side];
const projPage = (p, i) => {
  const isSide = p === S.side;
  const next = all[(i + 1) % all.length], prev = all[(i - 1 + all.length) % all.length];
  const gallery = isSide
    ? ['our-places-lists', 'our-places-map', 'our-places-stories'].map((n) => `<img class="wide" src="/assets/side/${n}.webp" alt="" loading="lazy" width="1600" height="850">`).join('')
    : imgs(p.slug).map((n, k, a) => `<img class="${k === 0 && a.length % 2 === 1 ? 'wide' : ''}" src="/assets/work/${p.slug}/${n}.webp" alt="" loading="lazy" width="1600" height="900">`).join('');
  const hero = isSide
    ? `<div class="player"><img src="/assets/side/our-places.webp" alt="The Our Places app on three phones" width="1600" height="889"></div>`
    : p.video
      ? `<div class="player" data-video="${p.video}"><img src="/assets/work/${p.slug}/cover.webp" alt="" width="1600" height="900"><button type="button" aria-label="Play the ${esc(p.title)} video"><span class="play">${PLAY}</span>Watch the piece</button></div>`
      : `<div class="player"><img src="/assets/work/${p.slug}/cover.webp" alt="" width="1600" height="900"></div>`;
  const links = isSide
    ? `<a class="pill dark" href="${p.demo}" rel="noopener">Try the demo</a><a class="pill" href="${p.repo}" rel="noopener">Project page on GitHub</a>`
    : `<a class="pill dark outlink" href="${p.link}" rel="noopener">${p.video ? 'Watch on YouTube' : 'See the story'} ${ARROW.replace('<svg', '<svg width="18" height="18"')}</a>`;
  return page({
    title: `${p.title} · ${S.name}`,
    desc: p.blurb.slice(0, 180),
    path: `/portfolio/${p.slug}/`,
    image: isSide ? '/assets/side/our-places.webp' : `/assets/work/${p.slug}/cover.webp`,
    body: `
<header class="topbar"><a class="home" href="/">${S.name}${BOLT}</a><a class="back" href="/#work">${BACK} All work</a></header>
<main id="main" class="proj">
  <p class="eyebrow rise">${esc(p.kicker)}</p>
  <h1 class="rise d1">${esc(p.title)}</h1>
  <p class="lede rise d2">${esc(p.blurb)}</p>
  <dl class="facts rise d3">
    <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
    <div><dt>Service</dt><dd>${esc(p.service)}</dd></div>
    <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
    <div><dt>Built in</dt><dd>${esc(p.built)}</dd></div>
  </dl>
  ${hero}
  <div class="ps">
    <div class="t-coral"><h2>Problem</h2><p>${esc(p.problem)}</p></div>
    <div class="t-deep"><h2>Solution</h2><p>${esc(p.solution)}</p></div>
  </div>
  <div class="gallery">${gallery}</div>
  <p class="btns" style="display:flex;gap:10px;flex-wrap:wrap;margin:0 0 28px">${links}</p>
  <nav class="next" aria-label="More work">
    <a href="/portfolio/${prev.slug}/"><small>← Previous</small><b>${esc(prev.title)}</b></a>
    <a href="/portfolio/${next.slug}/"><small>Next →</small><b>${esc(next.title)}</b></a>
  </nav>
</main>
${contact}
<script>
document.querySelectorAll('.player[data-video] button').forEach(function (b) {
  b.addEventListener('click', function () {
    var p = b.parentNode, f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + p.dataset.video + '?autoplay=1&rel=0';
    f.title = b.getAttribute('aria-label'); f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true;
    p.innerHTML = ''; p.appendChild(f);
  });
});
</script>`,
  });
};

// ---------- write ----------
const write = (path, html) => { mkdirSync(ROOT + path, { recursive: true }); writeFileSync(ROOT + path + 'index.html', html); };
write('', home);
all.forEach((p, i) => write(`portfolio/${p.slug}/`, projPage(p, i)));
// /portfolio itself just shows the work section.
write('portfolio/', `<!doctype html><meta charset="utf-8"><title>Portfolio · ${S.name}</title><meta http-equiv="refresh" content="0; url=/#work"><link rel="canonical" href="${SITE}/#work"><a href="/#work">Portfolio</a>`);
writeFileSync(ROOT + '404.html', page({ title: `Not found · ${S.name}`, desc: 'Page not found.', path: '/404', body: `<main id="main" class="proj" style="min-height:70vh"><p class="eyebrow" style="margin-top:60px">404</p><h1>That page moved.</h1><p class="lede">The site was rebuilt in 2026. Everything's still here.</p><p><a class="pill dark" href="/">Go home</a></p></main>` }));
copyFileSync(ROOT + '_src/site.css', ROOT + 'assets/site.css');
writeFileSync(ROOT + 'sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['/', ...all.map((p) => `/portfolio/${p.slug}/`)].map((u) => `<url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(ROOT + 'robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
writeFileSync(ROOT + '.nojekyll', '');
console.log('built', 2 + all.length, 'pages');
