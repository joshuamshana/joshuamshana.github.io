# Joshua Mshana - Personal Website

A modern, responsive personal website built with React and Tailwind CSS.

## Features
- Modern, clean design with smooth animations
- Responsive layout for all devices
- Interactive sections with hover effects
- Professional portfolio showcase
- Contact form

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## Deployment to GitHub Pages

This project is set up to be deployed to GitHub Pages. To deploy:

1. Ensure all your changes are committed and pushed to your GitHub repository.

2. Run the deploy command:
```bash
npm run deploy
```

This will create a `gh-pages` branch in your repository and push the built files to it. GitHub Pages will automatically serve the content from this branch.

3. Your site will be live at: https://joshuamshana.github.io/personal-website

### Important Notes:
- The site uses HashRouter for client-side routing to work with GitHub Pages.
- The `homepage` field in `package.json` is set to your GitHub Pages URL.
- The `predeploy` script automatically builds the production version of your app.
- If you change the repository name, update the `homepage` field in `package.json` accordingly.
