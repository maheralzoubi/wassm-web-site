# Deployment Guide

This project is a client-only React application built with Vite. You can deploy it to any static hosting service.

## Quick Deploy Options

### 1. Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

   Or connect your GitHub repository at [vercel.com](https://vercel.com) for automatic deployments.

**Configuration:** Already set up in `vercel.json`

---

### 2. Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

   Or connect your GitHub repository at [netlify.com](https://netlify.com) for automatic deployments.

**Configuration:** Already set up in `netlify.toml`

---

### 3. GitHub Pages

1. Update `vite.config.ts` to set `base: '/your-repo-name/'`

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

### 4. Cloudflare Pages

1. Connect your GitHub repository at [pages.cloudflare.com](https://pages.cloudflare.com)

2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20`

---

### 5. Any Static Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder contents to your hosting service

3. Ensure your server is configured to serve `index.html` for all routes (SPA routing)

---

## Build Commands

- **Development:** `npm run dev`
- **Production Build:** `npm run build`
- **Preview Build:** `npm run preview`

The built files will be in the `dist` directory.

---

## Environment Variables

If you need environment variables, create a `.env` file in the root directory:

```
VITE_API_URL=https://api.example.com
```

Access them in your code with `import.meta.env.VITE_API_URL`

---

## Notes

- The app uses client-side routing (wouter), so all routes must redirect to `index.html`
- Configuration files for Vercel and Netlify are already included
- The `_redirects` file in `client/public/` ensures SPA routing works on Netlify


