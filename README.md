# Mulot Girls School Website (Static)

This is a **multi-page, responsive, accessible** school website template with:
- Home (notices, events, news preview, quick links)
- About
- Academics (C3 Pathways: STEM + Social Science, curriculum & assessment tabs)
- Departments (dynamic from data.js) + Department detail page
- Library (services + e-resources template)
- Staff Portfolio (dynamic directory + individual staff profiles)
- Admissions (requirements + downloads template)
- News (dynamic from data.js)
- Contact (mailto form + contacts)

## Quick edit checklist (5 minutes)
1. Open `assets/js/config.js` and update:
   - School name, domain, contacts, address, social links
2. Open `assets/js/data.js` and update:
   - Notices, news, events, departments, staff
3. Replace images in `assets/img/` (logo.svg, hero.svg, library.svg)

## Run locally
- Just open `index.html` in a browser, or use VS Code extension "Live Server".

## Deploy
### GitHub Pages
- Push all files to a GitHub repo
- Repo Settings → Pages → Deploy from branch → `/ (root)`

### Netlify / Vercel / Cloudflare Pages
- Import the repo and deploy (no build command needed)

## Notes
- Navigation, search overlay, staff pages, department pages, and tabs are powered by `assets/js/main.js`.
- No external libraries required.
