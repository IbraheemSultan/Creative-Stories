# Creative Stories

A simple static front-end project for displaying blog-style cards grouped by categories (Tech, Travel, Food, Design, LifeStyle).

This repository contains minimal HTML, Tailwind CSS sources, and a small JavaScript file that implements filtering, searching, and a "Load More" simulation.

## Project structure

- `index.html` – main HTML page with cards, filter buttons, search input and layout.
- `script.js` – client-side JavaScript for filtering, searching and the load-more button behavior.
- `src/input.css` – Tailwind input file (used by Tailwind CLI to generate the final CSS).
- `public/output.css` – generated Tailwind CSS (build output).
- `img/` – images used by the cards.
- `package.json` – helper scripts to build/watch Tailwind CSS.

## Requirements

- Node.js (for Tailwind CLI). Install from https://nodejs.org if needed.

## Build & Development (PowerShell)

Open PowerShell in the project folder and run:

```powershell
# install dependencies (first time)
npm install

# build minified Tailwind CSS into public/output.css
npm run build:css

# watch mode - automatically rebuild CSS on changes
npm run watch:css
```

After running `npm run build:css`, open `index.html` in your browser to view the site.

## What `script.js` does

- Initializes AOS (Animate On Scroll) if available.
- Adds click handlers to category buttons to filter visible cards by their `.type` text.
- Adds an input handler to the search box to filter cards by title text.
- Implements a simple simulated "Load More Posts" interaction that shows a spinner and re-enables the button after a delay.

## Notes & Suggestions

- The HTML currently contains static card markup. For a real project you might fetch posts from an API and render them dynamically.
- If you add a build step (Webpack/Vite/etc.) you can import scripts and CSS and enable a local dev server.
- Consider adding simple unit tests for the filtering/search logic if you extract it into functions.

If you want, I can also:

- convert the static card list to a JSON-driven renderer,
- add a small local dev server (e.g. with `live-server` or `vite`) and instructions,
- or provide an English + Arabic README split.
