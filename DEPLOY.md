# Deployment Guide

This app is configured to be hosted on **GitHub Pages**.

## 1. Prerequisites
- Ensure you have pushed all your code to the GitHub repository: `https://github.com/jakubstenc/CREAFcoffee`

## 2. Automatic Deployment (Recommended)
I have added a script to make this easy. Run the following command in your terminal:

```bash
npm run deploy
```

This command will:
1. Build the project (compile it).
2. Upload the `dist` folder to a `gh-pages` branch on your GitHub repository.
3. GitHub will automatically serve your site at `https://jakubstenc.github.io/CREAFcoffee/`.

## 3. Manual Build (If you want to host elsewhere)
To just compile the app without deploying:

```bash
npm run build
```

This creates a `dist` folder containing the static website. You can upload this folder to any static host (Netlify, Vercel, etc.).

> **Note**: If hosting outside of GitHub Pages/CREAFcoffee, you might need to remove `base: '/CREAFcoffee/'` from `vite.config.js`.
