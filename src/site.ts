// Site-wide settings and links.
export const site = {
  name: 'Movie Monkey',
  url: 'https://getmoviemonkey.com',
  github: 'https://github.com/shrihari/moviemonkey',
  releases: 'https://github.com/shrihari/moviemonkey/releases',
  releaseNotes: 'https://github.com/shrihari/moviemonkey/releases/latest',
  author: { name: 'Shrihari', url: 'https://twitter.com/shrihari' },
  /**
   * The latest release's disk image. GitHub's /releases/latest/download/ URL
   * always points at the newest release, as long as the asset keeps this name.
   * `null` switches the buttons back to "Coming soon".
   */
  downloadUrl: 'https://github.com/shrihari/moviemonkey/releases/latest/download/Movie-Monkey.dmg' as string | null,
  version: '2.0 alpha',
  softwareVersion: '2.0.0-alpha.1',
  requirements: 'macOS 13 or later · Apple Silicon and Intel',
  description:
    'A beautiful, local-first library for the movies and TV shows on your Mac. Drop in a folder; get back posters, artwork, cast and episode guides. Free, open source, no accounts.',
};
