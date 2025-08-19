# Designier – Next.js App

Modern portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Requirements
- Node.js 18+
- npm 9+

## Install
```
npm install
```

## Development
```
npm run dev
```
Open `http://localhost:3000`.

## Build
```
npm run build
npm start
```

## Deploy
- Vercel is recommended. The repo includes `.vercelignore` to exclude `legacy` from deployment.
- Static files are served from `public/` including `robots.txt` and `sitemap.xml`.

## Notes
- Do not modify `/legacy`. It remains as-is and is ignored by deploys.
- TypeScript strict mode is enabled in `tsconfig.json`.
