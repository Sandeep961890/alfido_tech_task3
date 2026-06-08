# AI-Style React Router Website

A premium React + Vite website with Tailwind CSS, Framer Motion animations, responsive routing, dynamic product pages, and a dark theme.

## Project Overview

This app includes:

- `React Router` for multi-page navigation
- `Tailwind CSS` for responsive styling
- `Framer Motion` for animated UI transitions
- `Dark mode` support with localStorage persistence
- `Dynamic product detail` pages via `/products/:id`
- `404 Not Found` fallback page with animated UI

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Repository Setup

If this project has not been initialized as a Git repository yet, run:

```bash
git init
git add .
git commit -m "Initial commit: premium React Router AI-style website"
```

If you already have a GitHub repository URL, add it as a remote:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
```

## Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If your remote branch is named `master`, use:

```bash
git push -u origin master
```

## Recommended GitHub Workflow

1. Create a new GitHub repository at `https://github.com/new`
2. Copy the remote repository URL from GitHub
3. Run the remote setup commands above
4. Push your local branch to GitHub

## Project Structure

- `src/App.jsx` — app entry and route definitions
- `src/components/Navbar.jsx` — responsive navigation bar
- `src/components/Footer.jsx` — footer layout
- `src/components/AnimatedPage.jsx` — route transition wrapper
- `src/components/AnimatedBackground.jsx` — premium animated background
- `src/components/ProductCard.jsx` — product listing cards
- `src/components/ThemeToggle.jsx` — theme switcher
- `src/pages/Home.jsx` — landing page
- `src/pages/About.jsx` — about page
- `src/pages/Products.jsx` — products page
- `src/pages/ProductDetails.jsx` — dynamic product route
- `src/pages/NotFound.jsx` — animated 404 page
- `src/index.css` — Tailwind base and custom utilities

## Notes

- Customize `package.json` scripts as needed.
- Verify the `homepage` field for GitHub Pages deployments if you plan to use them.
- Use `npm run build` before pushing major updates to ensure the app compiles cleanly.

## License

Add your license information here.
