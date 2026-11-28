# getmoviemonkey.com

The website for [Movie Monkey](https://github.com/shrihari/moviemonkey). Built with Astro and Tailwind CSS. It's a static site, deployed on Vercel.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Downloads

`downloadUrl` in `src/site.ts` points at `releases/latest/download/Movie-Monkey.dmg`, so the buttons always fetch the newest GitHub release as long as its disk image keeps that name. Nothing on the site needs to change for a new release, except `version` and `softwareVersion` in the same file, which show in the hero and in the search-engine metadata. Setting `downloadUrl` to `null` switches every button back to "Coming soon".

When a release includes **Watch on TV**, set `watchOnTvReleased` in `src/site.ts` to `true`. That drops the "Coming in the next release" label from the TV section and updates the FAQ. If that release bundles ffmpeg, also delete the ffmpeg sentence in the small print under the TV section in `src/pages/index.astro`.

## Hosting

- **Vercel** project `moviemonkey-website`, connected to this repo. Every push to `master` deploys to production. Other branches get preview URLs.
- **Domain:** `getmoviemonkey.com`, with `www` redirecting to it. DNS is at Namecheap: two `A` records for `@` and a `CNAME` for `www` point at Vercel. The Google mail records there are separate and unrelated to the site.
- **Analytics:** Vercel Web Analytics (cookie-free) through `@vercel/analytics` in `src/layouts/Base.astro`. Visits show up in the Vercel dashboard under **Analytics**.
- **Old site:** the original GitHub Pages site is kept on the `v1-legacy` branch. GitHub Pages is turned off.

## Screenshots

The app screenshots in `src/assets/shots` are 2880×1800 captures of the real Movie Monkey UI, in light and dark versions. The page serves the one that matches the visitor's color scheme.

The TV in the Watch on TV section (`src/components/TvPairing.astro`) is drawn in HTML, copying the TV pairing screen from the app. Once there's a good photo or capture of the TV screens, it can replace it.
