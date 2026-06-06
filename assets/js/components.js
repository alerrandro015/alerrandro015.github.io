const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="prompt">~/</span>alerrandro
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="projetos.html">Projetos</a></li>
      <li><a href="contato.html">Contato</a></li>
    </ul>
    <button class="nav-menu-btn" id="nav-menu-btn">[MENU]</button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="projetos.html">Projetos</a></li>
    <li><a href="contato.html">Contato</a></li>
  </ul>
</div>
`;

const HUD_HTML = `
<div class="hud-corner tl">
  <div class="hud-line">SYS::ONLINE</div>
  <div class="hud-line" id="hud-time">00:00:00</div>
</div>
<div class="hud-corner br">
  <div class="hud-line">SECURE::CHANNEL</div>
  <div class="hud-line">NODE::ACTIVE</div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <span>&gt;</span> alerrandro<span>@</span>terminal<span>:</span>~<span>#</span>
      </div>
      <div class="footer-links">
        <a href="index.html">Inicio</a>
        <a href="blog.html">Blog</a>
        <a href="projetos.html">Projetos</a>
        <a href="contato.html">Contato</a>
      </div>
      <div class="footer-copy">
        &copy; 2025 Alerrandro. Feito com terminal e cafe.
      </div>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  const hudEl = document.getElementById('site-hud');
  if (hudEl) hudEl.innerHTML = HUD_HTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
});
