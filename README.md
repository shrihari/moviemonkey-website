# getmoviemonkey.com

The website for [Movie Monkey](https://github.com/shrihari/moviemonkey). Built with Astro and Tailwind CSS. It's a static site, deployed on Vercel.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## When the app ships

Set `downloadUrl` in `src/site.ts` to the release `.dmg`. Every "Coming soon" button turns into "Download for Mac".

## Hosting

- **Vercel** project `moviemonkey-website`, connected to this repo. Every push to `master` deploys to production. Other branches get preview URLs.
- **Domain:** `getmoviemonkey.com`, with `www` redirecting to it. DNS is at Namecheap: two `A` records for `@` and a `CNAME` for `www` point at Vercel. The Google mail records there are separate and unrelated to the site.
- **Analytics:** Vercel Web Analytics (cookie-free) through `@vercel/analytics` in `src/layouts/Base.astro`. Visits show up in the Vercel dashboard under **Analytics**.
- **Old site:** the original GitHub Pages site is kept on the `v1-legacy` branch. GitHub Pages is turned off.

## Screenshots

The app screenshots in `src/assets/shots` are 2880×1800 captures of the real Movie Monkey UI, in light and dark versions. The page serves the one that matches the visitor's color scheme.
