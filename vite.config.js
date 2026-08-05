import { defineConfig } from 'vite'

// The decks are self-contained HTML files served as static assets:
// they are copied verbatim, never bundled, so each one stays a
// single portable file you can open without any tooling.
export default defineConfig({
  base: './',
  publicDir: 'decks',
})
