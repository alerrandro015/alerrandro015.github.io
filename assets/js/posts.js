const POSTS = [
  {
    id: 'arch-install-guide',
    title: 'Guia Definitivo de Instalação do Arch Linux com BTRFS e Snapshots',
    date: '2025-06-10',
    category: 'linux',
    readTime: '18 min',
    tags: ['arch', 'linux', 'btrfs', 'instalação'],
    excerpt: 'Um guia completo e atualizado para instalar o Arch Linux utilizando o sistema de arquivos BTRFS com suporte a snapshots automáticos via Snapper, configuração do bootloader e pós-instalação.',
    featured: true,
    featuredIcon: '[/]',
    body: `
<p>O Arch Linux continua sendo uma das distribuições mais poderosas para quem quer total controle sobre o sistema. Neste guia, vamos além da instalação padrão e configuramos um setup robusto com BTRFS.</p>

<h2>Pré-requisitos</h2>
<p>Antes de começar, certifique-se de ter uma mídia de boot do Arch Linux atualizada e uma conexão com a internet disponível.</p>

<h2>Particionamento com BTRFS</h2>
<p>O BTRFS oferece recursos avançados como copy-on-write, compressão e snapshots nativos que tornam o sistema muito mais resiliente.</p>

<pre><code># Criar partições
fdisk /dev/sda

# Formatar a partição principal
mkfs.btrfs -L arch /dev/sda2

# Criar subvolumes
mount /dev/sda2 /mnt
btrfs subvolume create /mnt/@
btrfs subvolume create /mnt/@home
btrfs subvolume create /mnt/@snapshots</code></pre>

<h2>Configuração do Snapper</h2>
<p>O Snapper automatiza a criação e gestão de snapshots, permitindo reverter o sistema para estados anteriores de forma simples.</p>

<pre><code>pacman -S snapper snap-pac
snapper -c root create-config /
snapper -c home create-config /home</code></pre>

<h2>Conclusão</h2>
<p>Com esta configuração, você terá um sistema Arch Linux altamente otimizado e com recuperação de desastres integrada. Os snapshots automáticos garantem que qualquer atualização problemática possa ser revertida em segundos.</p>
    `
  },
  {
    id: 'iptables-firewall',
    title: 'Construindo um Firewall Robusto com iptables e nftables',
    date: '2025-05-28',
    category: 'security',
    readTime: '14 min',
    tags: ['firewall', 'iptables', 'nftables', 'segurança', 'linux'],
    excerpt: 'Aprenda a configurar regras de firewall eficientes no Linux usando iptables e a nova abordagem com nftables. Cobrindo filtragem de pacotes, NAT e prevenção de intrusões.',
    featured: false,
    body: `
<p>A segurança de rede começa com um firewall bem configurado. Neste artigo, exploramos desde conceitos básicos até configurações avançadas com iptables e nftables.</p>

<h2>Conceitos Fundamentais</h2>
<p>O netfilter é o framework de filtragem de pacotes do kernel Linux. Tanto iptables quanto nftables são interfaces para este framework.</p>

<h2>Regras básicas com iptables</h2>
<pre><code># Política padrão: dropar tudo
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Permitir loopback
iptables -A INPUT -i lo -j ACCEPT

# Permitir conexões estabelecidas
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Permitir SSH apenas de IPs confiáveis
iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT</code></pre>

<h2>Migrando para nftables</h2>
<p>O nftables oferece uma sintaxe mais consistente e melhor performance. É o substituto oficial do iptables nas distribuições modernas.</p>

<pre><code>table inet filter {
  chain input {
    type filter hook input priority 0; policy drop;
    iif lo accept
    ct state established,related accept
    tcp dport 22 ip saddr 192.168.1.0/24 accept
    tcp dport { 80, 443 } accept
  }
}</code></pre>
    `
  },
  {
    id: 'python-ctypes-hardware',
    title: 'Interagindo com Hardware Diretamente via Python e ctypes',
    date: '2025-05-15',
    category: 'dev',
    readTime: '11 min',
    tags: ['python', 'ctypes', 'hardware', 'baixo-nível'],
    excerpt: 'Explorando como utilizar a biblioteca ctypes do Python para fazer chamadas diretas a bibliotecas C e interagir com hardware serial, GPIO e drivers de dispositivo sem precisar escrever extensões em C.',
    featured: false,
    body: `
<p>Python não precisa se limitar a alto nível. Com ctypes, é possível interagir diretamente com bibliotecas do sistema e hardware.</p>

<h2>Carregando uma biblioteca compartilhada</h2>
<pre><code>import ctypes

libc = ctypes.CDLL("libc.so.6")
libserial = ctypes.CDLL("libserialport.so")</code></pre>

<h2>Estruturas de dados compatíveis com C</h2>
<pre><code>class SerialConfig(ctypes.Structure):
    _fields_ = [
        ("baudrate", ctypes.c_int),
        ("bits", ctypes.c_int),
        ("parity", ctypes.c_char),
        ("stopbits", ctypes.c_int),
    ]</code></pre>
    `
  },
  {
    id: 'sdr-radio-freq',
    title: 'Software Defined Radio: Captando Sinais de RF com RTL-SDR',
    date: '2025-04-22',
    category: 'hardware',
    readTime: '9 min',
    tags: ['sdr', 'rtl-sdr', 'rf', 'radio', 'hardware'],
    excerpt: 'Um guia prático para começar com SDR usando dongles RTL-SDR de baixo custo. Captando sinais de AM/FM, ADS-B de aviões, dados meteorológicos e muito mais com GNU Radio e SDR++.',
    featured: false,
    body: `
<p>O Software Defined Radio democratizou o acesso ao espectro de radiofrequência. Com um dongle RTL-SDR de menos de R$100, você pode captar uma enorme variedade de sinais.</p>

<h2>Instalando as dependências</h2>
<pre><code>sudo apt install rtl-sdr gr-osmosdr gnuradio
sudo pip3 install pyrtlsdr</code></pre>

<h2>Captando ADS-B de aviões</h2>
<pre><code>rtl_adsb | adsbexchange-feed</code></pre>
    `
  },
  {
    id: 'reverse-eng-basics',
    title: 'Fundamentos de Engenharia Reversa com Ghidra e GDB',
    date: '2025-04-08',
    category: 'security',
    readTime: '22 min',
    tags: ['reverse-engineering', 'ghidra', 'gdb', 'assembly', 'segurança'],
    excerpt: 'Introdução à engenharia reversa de binários Linux utilizando Ghidra para análise estática e GDB para análise dinâmica. Cobrindo análise de assembly x86-64, identificação de funções e debugging avançado.',
    featured: false,
    body: `
<p>A engenharia reversa é uma habilidade fundamental em segurança ofensiva e defensiva. Vamos explorar as ferramentas essenciais para análise de binários.</p>

<h2>Análise Estática com Ghidra</h2>
<p>O Ghidra é um framework de engenharia reversa de código aberto desenvolvido pela NSA. Sua capacidade de decompilação é impressionante.</p>

<h2>Análise Dinâmica com GDB</h2>
<pre><code>gdb ./binary
(gdb) break main
(gdb) run
(gdb) info registers
(gdb) x/20xg $rsp</code></pre>
    `
  },
  {
    id: 'git-advanced-workflow',
    title: 'Workflow Avançado com Git: Rebase Interativo, Hooks e Bisect',
    date: '2025-03-30',
    category: 'dev',
    readTime: '13 min',
    tags: ['git', 'workflow', 'hooks', 'rebase', 'dev'],
    excerpt: 'Dominando funcionalidades avançadas do Git que a maioria dos desenvolvedores ignora: rebase interativo para histórico limpo, hooks para automação, git bisect para caçar bugs e reflog para recuperar commits perdidos.',
    featured: false,
    body: `
<p>Git é muito mais do que add, commit e push. Vamos explorar as funcionalidades que transformam o controle de versão em uma ferramenta poderosa de produtividade.</p>

<h2>Rebase Interativo</h2>
<pre><code>git rebase -i HEAD~5</code></pre>

<h2>Git Bisect</h2>
<pre><code>git bisect start
git bisect bad HEAD
git bisect good v1.0
# Git encontra automaticamente o commit problemático</code></pre>
    `
  },
];

// ==================== RENDER POSTS ====================
function renderPostCard(post) {
  const dateObj = new Date(post.date + 'T00:00:00');
  const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

  return `
    <article class="card post-card animate-in" data-post-id="${post.id}" onclick="openPost('${post.id}')">
      <div class="card-corner tl"></div>
      <div class="card-corner tr"></div>
      <div class="card-corner bl"></div>
      <div class="card-corner br"></div>
      <div class="post-card-meta">
        <span class="post-category ${post.category}">${post.category}</span>
        <span class="post-date">${dateStr}</span>
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-footer">
        <div class="post-tags">
          ${post.tags.slice(0, 3).map(t => `<span class="post-tag">${t}</span>`).join('')}
        </div>
        <div class="post-read-time">${post.readTime}</div>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:14px;">
        <span class="post-arrow">READ --></span>
      </div>
    </article>
  `;
}

function renderFeaturedPost(post) {
  const dateObj = new Date(post.date + 'T00:00:00');
  const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

  return `
    <article class="featured-post" onclick="openPost('${post.id}')" style="cursor:pointer;">
      <div class="featured-post-visual">
        <div class="featured-grid"></div>
        <div class="featured-icon">${post.featuredIcon || '[*]'}</div>
      </div>
      <div class="featured-post-content">
        <div class="featured-label">Destaque</div>
        <h2 class="featured-post-title">${post.title}</h2>
        <p class="featured-post-excerpt">${post.excerpt}</p>
        <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
          <span class="post-category ${post.category}">${post.category}</span>
          <span class="post-date" style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted);">${dateStr}</span>
          <span style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted);">${post.readTime}</span>
        </div>
      </div>
    </article>
  `;
}

function openPost(id) {
  window.location.href = `post.html?id=${id}`;
}

// ==================== BLOG PAGE ====================
function initBlogPage() {
  const container = document.getElementById('posts-container');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container) return;

  let activeFilter = 'all';
  let searchQuery = '';

  function getFiltered() {
    return POSTS.filter(p => {
      const matchFilter = activeFilter === 'all' || p.category === activeFilter;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.category.includes(q);
      return matchFilter && matchSearch;
    });
  }

  function render() {
    const filtered = getFiltered();
    if (filtered.length === 0) {
      container.innerHTML = '<p class="no-results">Nenhum resultado encontrado para a busca.</p>';
      return;
    }
    container.innerHTML = filtered.map((p, i) => {
      const card = renderPostCard(p);
      return card.replace('animate-in', `animate-in delay-${Math.min(i % 5 + 1, 5)}`);
    }).join('');
  }

  render();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });
}

// ==================== HOME PAGE ====================
function initHomePage() {
  const featuredContainer = document.getElementById('featured-post');
  const recentContainer = document.getElementById('recent-posts');

  if (featuredContainer) {
    const featured = POSTS.find(p => p.featured);
    if (featured) featuredContainer.innerHTML = renderFeaturedPost(featured);
  }

  if (recentContainer) {
    const recent = POSTS.filter(p => !p.featured).slice(0, 3);
    recentContainer.innerHTML = recent.map((p, i) => {
      const card = renderPostCard(p);
      return card.replace('animate-in', `animate-in delay-${i + 2}`);
    }).join('');
  }
}

// ==================== POST PAGE ====================
function initPostPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('post-content');
  if (!container || !id) return;

  const post = POSTS.find(p => p.id === id);
  if (!post) {
    container.innerHTML = '<p class="no-results">Post nao encontrado.</p>';
    return;
  }

  const postIdx = POSTS.indexOf(post);
  const prev = postIdx > 0 ? POSTS[postIdx - 1] : null;
  const next = postIdx < POSTS.length - 1 ? POSTS[postIdx + 1] : null;

  const dateObj = new Date(post.date + 'T00:00:00');
  const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  document.title = `${post.title} | Alerrandro`;

  container.innerHTML = `
    <div class="post-single">
      <a href="blog.html" class="post-single-back">Voltar ao Blog</a>
      <header class="post-single-header">
        <div class="post-single-meta">
          <span class="post-category ${post.category}">${post.category}</span>
          <span class="separator">|</span>
          <span>${dateStr}</span>
          <span class="separator">|</span>
          <span>${post.readTime} de leitura</span>
        </div>
        <h1 class="post-single-title">${post.title}</h1>
        <div class="post-tags" style="margin-top:16px;">
          ${post.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}
        </div>
      </header>
      <div class="post-body">${post.body}</div>
      <nav class="post-nav">
        ${prev ? `
          <div class="post-nav-btn" onclick="location.href='post.html?id=${prev.id}'">
            <div class="post-nav-label">&lt;- Anterior</div>
            <div class="post-nav-title">${prev.title}</div>
          </div>
        ` : '<div></div>'}
        ${next ? `
          <div class="post-nav-btn next" onclick="location.href='post.html?id=${next.id}'">
            <div class="post-nav-label">Proximo -&gt;</div>
            <div class="post-nav-title">${next.title}</div>
          </div>
        ` : '<div></div>'}
      </nav>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initBlogPage();
  initPostPage();
});
