# Crystaring Light Website

First-version static B2B website for Crystaring Light.

## What is included

- Home page
- Product category index
- Opal glass shades page
- Transparent glass shades page
- Alabaster-effect glass shades page
- Borosilicate glass components page
- OEM/ODM page
- Manufacturing capabilities page
- Catalogue request page
- Contact / RFQ page
- New SVG logo concept based on a glassblower
- Selected real product images copied into `assets/images`

## Local preview

From this folder:

```bash
python3 -m http.server 4173
```

Open:

```txt
http://127.0.0.1:4173/
```

## Content rules

- Do not publish unconfirmed MOQ, lead time, packaging, capacity or certification claims.
- Use `TBC / Confirm before quotation` for missing specification details.
- Keep "glass shade only; electrical parts are not included unless specified" where relevant.

## Deployment options

This static site can be deployed to:

- Cloudflare Pages
- Vercel
- Netlify

For Cloudflare Pages, set the project build output directory to:

```txt
site
```

No build command is required for this static version.
