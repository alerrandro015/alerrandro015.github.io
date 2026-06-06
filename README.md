# alerrandro.github.io

Blog pessoal de Alerrandro — Linux, Seguranca da Informacao, Hardware, Desenvolvimento e tecnologia em geral.

## Stack

HTML5 + CSS3 + JavaScript puro. Zero dependencias externas de producao.

## Estrutura

```
/
├── index.html          Pagina inicial
├── blog.html           Listagem de artigos com busca
├── post.html           Leitor de artigo unico
├── projetos.html       Portfolio de projetos
├── sobre.html          Pagina sobre
├── contato.html        Pagina de contato
├── assets/
│   ├── css/main.css    Estilos globais + componentes
│   └── js/
│       ├── components.js   Nav, HUD, Footer injetados
│       ├── matrix.js       Animacao Matrix (canvas)
│       ├── main.js         Typing, scroll, nav
│       ├── posts.js        Posts, busca, filtros
│       └── projects.js     Cards de projetos
└── README.md
```

## Deploy no GitHub Pages

1. Criar repositorio `seuusuario.github.io`
2. Copiar todos os arquivos para a raiz do repositorio
3. Em **Settings > Pages**, selecionar `main` branch e pasta `/root`
4. O site estara disponivel em `https://seuusuario.github.io`

## Adicionar Posts

Editar o array `POSTS` em `assets/js/posts.js`. Cada post e um objeto com:

```js
{
  id: 'slug-do-post',
  title: 'Titulo do Artigo',
  date: 'YYYY-MM-DD',
  category: 'linux|security|dev|hardware|general',
  readTime: 'X min',
  tags: ['tag1', 'tag2'],
  excerpt: 'Descricao curta...',
  featured: false,
  body: `<p>Conteudo HTML do post...</p>`
}
```

## Contato

- Email: alerrandrimiguelale@gmail.com
- Telegram: @alerrandro
- GitHub: github.com/alerrandro
