
# Mike Services Site

Bilingual (中文/English) landing page for IT support, home repairs, licensed real estate services, and smart home automation.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- lucide-react icons

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```
Build outputs to `dist/`

## Deploy to Netlify
1. Push this project to a GitHub repo.
2. In Netlify: **Add new site → Import from Git**.
3. Select the repo, then set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Click **Deploy Site**.

## Customize
- Change contact info in `src/App.tsx`.
- Adjust colors or typography via Tailwind in `src/index.css` or `tailwind.config.js`.

