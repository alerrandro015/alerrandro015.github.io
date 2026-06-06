const PROJECTS = [
  {
    id: 'pentest-toolkit',
    name: 'PentestKit',
    icon: '[*]',
    description: 'Conjunto de scripts e ferramentas automatizadas para reconhecimento, enumeração e análise de vulnerabilidades em ambientes controlados e CTFs.',
    tech: ['Python', 'Bash', 'Nmap', 'Metasploit API'],
    github: 'https://github.com/alerrandro',
    status: 'active',
  },
  {
    id: 'arch-dotfiles',
    name: 'Dotfiles',
    icon: '[~]',
    description: 'Configurações pessoais para o ambiente de desenvolvimento: Neovim, ZSH, i3wm, tmux, Alacritty e scripts de bootstrapping para instalação automatizada.',
    tech: ['Shell', 'Lua', 'Python', 'i3wm', 'Neovim'],
    github: 'https://github.com/alerrandro/dotfiles',
    status: 'active',
  },
  {
    id: 'sdr-monitor',
    name: 'SDR Monitor',
    icon: '[~]',
    description: 'Dashboard web leve para monitoramento de sinais de radiofrequência via RTL-SDR. Exibe espectro em tempo real, log de ADS-B e alertas configuráveis.',
    tech: ['Python', 'WebSocket', 'RTL-SDR', 'HTML/CSS'],
    github: 'https://github.com/alerrandro',
    status: 'wip',
  },
  {
    id: 'linux-hardening',
    name: 'Hardening Scripts',
    icon: '[!]',
    description: 'Scripts de hardening para servidores Linux baseados em benchmarks CIS e STIG. Automatiza configurações de segurança, auditoria e conformidade para Debian/Ubuntu/RHEL.',
    tech: ['Bash', 'Python', 'Ansible', 'CIS Benchmarks'],
    github: 'https://github.com/alerrandro',
    status: 'active',
  },
  {
    id: 'esp32-homelab',
    name: 'ESP32 HomeLab',
    icon: '[#]',
    description: 'Firmware para monitoramento de homelab com ESP32: temperatura, consumo de energia, status de serviços e alertas via Telegram usando MQTT e FreeRTOS.',
    tech: ['C/C++', 'ESP-IDF', 'FreeRTOS', 'MQTT', 'Telegram API'],
    github: 'https://github.com/alerrandro',
    status: 'wip',
  },
  {
    id: 'ctf-writeups',
    name: 'CTF Writeups',
    icon: '[?]',
    description: 'Repositório de soluções detalhadas para Capture The Flag challenges. Cobrindo categorias de pwn, web, crypto, forensics e reverse engineering.',
    tech: ['Python', 'pwntools', 'GDB', 'Ghidra'],
    github: 'https://github.com/alerrandro',
    status: 'active',
  },
];

function renderProjectCard(project) {
  const statusLabel = { active: 'Ativo', wip: 'Em desenvolvimento', archived: 'Arquivado' };
  return `
    <article class="card project-card animate-in">
      <div class="card-corner tl"></div>
      <div class="card-corner tr"></div>
      <div class="card-corner bl"></div>
      <div class="card-corner br"></div>
      <div class="project-header">
        <div class="project-icon">${project.icon}</div>
        <span class="project-status status-${project.status}">${statusLabel[project.status]}</span>
      </div>
      <h3 class="project-name">${project.name}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      <a href="${project.github}" target="_blank" rel="noopener" class="project-link">${project.name.toLowerCase().replace(/\s+/g, '-')}</a>
    </article>
  `;
}

function initProjectsPage() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = PROJECTS.map((p, i) => {
    return renderProjectCard(p).replace('animate-in', `animate-in delay-${Math.min(i % 5 + 1, 5)}`);
  }).join('');
}

function initHomeProjects() {
  const container = document.getElementById('home-projects');
  if (!container) return;
  container.innerHTML = PROJECTS.slice(0, 3).map((p, i) => {
    return renderProjectCard(p).replace('animate-in', `animate-in delay-${i + 2}`);
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectsPage();
  initHomeProjects();
});
