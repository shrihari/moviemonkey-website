# getmoviemonkey.com

The website for [Movie Monkey](https://github.com/shrihari/moviemonkey). Built with Astro and Tailwind CSS. It's a static site, deployed on Vercel.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## When the app ships

Set `downloadUrl` in `src/site.ts` to the release `.dmg`. Every "Coming soon" button turns into "Download for Mac".

## Moving the domain from GitHub Pages to Vercel

`master` still holds the old site and still serves getmoviemonkey.com through GitHub Pages. The new site lives on the `v2` branch and is deployed to the Vercel project `moviemonkey-website` (https://moviemonkey-website.vercel.app).

When you're ready:

1. Merge `v2` into `master`.
2. In Vercel, connect the GitHub repo to the `moviemonkey-website` project so pushes deploy automatically.
3. In Vercel, add the domains under **Project → Settings → Domains**: `getmoviemonkey.com` and `www.getmoviemonkey.com`.
4. At your DNS provider, replace the GitHub Pages records with the ones Vercel shows. Vercel issues the HTTPS certificate automatically.
5. In the GitHub repo, open **Settings → Pages** and turn GitHub Pages off.

## Screenshots

The app screenshots in `src/assets/shots` are 2880×1800 captures of the real Movie Monkey UI, in light and dark versions. The page serves the one that matches the visitor's color scheme.
