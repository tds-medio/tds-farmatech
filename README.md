# TDS FarmaTech

Portal educacional sobre interações medicamentosas.

## Como o site é servido

O código-fonte está em **TypeScript/React**, mas o que vai ao ar é **um único arquivo HTML**
com tudo embutido: CSS, JavaScript (já transpilado do TypeScript), imagens (data URI) e a
fonte Inter. Não há nenhuma dependência externa — funciona offline, até com duplo clique.

- Fonte de desenvolvimento: `index.html` + `src/` (TypeScript) — **não** deve ser aberto direto no navegador.
- Arquivo final gerado: `dist/index.html` (cópia pronta em `TDS-FarmaTech.html`).

## Publicar no GitHub Pages

1. Envie este repositório para o GitHub.
2. Em **Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.
3. Push na `main` (ou `master`) — o workflow `.github/workflows/deploy.yml` roda `npm run build`
   e publica a pasta `dist/`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera `dist/index.html` autocontido. Para testar localmente, basta abrir esse arquivo no navegador
(não precisa de servidor nem internet).
