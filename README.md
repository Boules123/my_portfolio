# Boules Ashraf Samir: ML Engineer Portfolio

Next.js 14 (App Router) static site. No backend, no external fonts or scripts.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build and deploy
```bash
npm run build      # static site in ./out
npm run preview    # serve ./out locally
```
Deploy `out/` to any static host, or import the repo into Vercel or Netlify (no settings needed).
For GitHub Pages project sites, set `basePath` in `next.config.mjs`.

## Edit content
Everything is in `data/portfolio.js` (profile, skills, case studies, experience).
Set a project’s `repo` to a URL to show its “Code” link (the From-scratch Transformers entry has none yet).
Styles are in `app/globals.css`; each section is a component in `components/`.
