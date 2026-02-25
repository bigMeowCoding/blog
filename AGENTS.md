# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 10** blog front-end ("老喵 Blog") built with React 17, TypeScript, Ant Design, and Tailwind CSS 2.x.

### Node.js version

Requires **Node.js 16** (LTS Gallium). Node 22+ is incompatible with Next.js 10 / the older dependency tree. Use `nvm use 16` before any commands.

### Package manager

Uses **Yarn** (lockfile: `yarn.lock`). Install dependencies with:
```
yarn install
```
On environments with SSL certificate issues (e.g., expired CA), run:
```
NODE_TLS_REJECT_UNAUTHORIZED=0 yarn install
```

### Key commands

| Action | Command |
|--------|---------|
| Dev server | `yarn dev` (port 3000) |
| Build | `yarn build` |
| Type check | `npx tsc --noEmit` |

### External API dependency

The app fetches data via SSR (`getServerSideProps`) from `http://www.bigmeow.club:7001/default/`. This external API is **not part of this repo** and may be unreachable from cloud environments. When the API is down, pages will render but show errors in the SSR data. To work around this:

1. Add `127.0.0.1 www.bigmeow.club` to `/etc/hosts`
2. Run a mock API server on port 7001 that responds to the endpoints in `config/apiUrl.ts`

### Project structure

- `pages/` — Next.js pages (index, detail, list)
- `components/` — React components (header, footer, author, article-list, bg-info)
- `config/` — API URL configuration
- `styles/` — SCSS and Tailwind styles
- `libs/` — Utility hooks and helpers
- `@types/` — TypeScript type definitions

### No automated test suite

This project has no test framework or test files. Validation is done via TypeScript type checking (`npx tsc --noEmit`) and manual browser testing.
