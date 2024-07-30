# 11ty Tailwind CSS Project

This project is a static website generator using 11ty (Eleventy) with Tailwind CSS integration, live reload functionality, and easy deployment to Netlify.

## Setup Instructions

1. **Create a new directory and initialize a Node.js project:**

   ```bash
   mkdir my-11ty-project
   cd my-11ty-project
   npm init -y
   ```

2. **Install 11ty, Tailwind CSS, and other necessary dependencies:**

   ```bash
   npm install @11ty/eleventy tailwindcss postcss autoprefixer cross-env npm-run-all
   ```

3. **Create an 11ty configuration file (`.eleventy.js`) in the root of your project:**

   ```javascript
   module.exports = function(eleventyConfig) {
     // Copy the `css` directory to the output
     eleventyConfig.addPassthroughCopy("css");

     return {
       dir: {
         input: "src",
         output: "dist"
       }
     };
   };
   ```

4. **Set up Tailwind CSS:**

   Create a `tailwind.config.js` file in the root of your project:

   ```javascript
   module.exports = {
     content: ["./src/**/*.{html,js,njk,md}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Create a `postcss.config.js` file:

   ```javascript
   module.exports = {
     plugins: [
       require('tailwindcss'),
       require('autoprefixer'),
     ]
   }
   ```

5. **Create a main CSS file (e.g., `src/css/styles.css`):**

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Update your `package.json` with scripts for development and build:**

   ```json
   "scripts": {
     "watch:eleventy": "eleventy --serve",
     "watch:tailwind": "tailwindcss -i src/css/styles.css -o dist/css/styles.css --watch",
     "build:eleventy": "eleventy",
     "build:tailwind": "tailwindcss -i src/css/styles.css -o dist/css/styles.css --minify",
     "start": "npm-run-all --parallel watch:*",
     "build": "npm-run-all build:*"
   }
   ```

7. **Create a sample page (e.g., `src/index.html`):**

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My 11ty Project</title>
       <link rel="stylesheet" href="/css/styles.css">
   </head>
   <body class="bg-gray-100">
       <h1 class="text-3xl font-bold text-center mt-8">Welcome to My 11ty Project</h1>
   </body>
   </html>
   ```

8. **Initialize Git repository and create a `.gitignore` file:**

   ```bash
   git init
   ```

   Create a `.gitignore` file with the following content:

   ```
   node_modules
   dist
   ```

9. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

## Usage

- To start development:

  ```bash
  npm start
  ```

  This will start the 11ty server and watch for changes in your Tailwind CSS file.

- To build your project for production:

  ```bash
  npm run build
  ```

## Deployment to Netlify

1. Commit your changes to Git
2. Push to a GitHub repository
3. Connect your GitHub repository to Netlify
4. Configure Netlify to use the `npm run build` command and set the publish directory to `dist`

Alternatively, you can use the Netlify CLI for manual deployments:

```bash
netlify deploy
```

## Project Structure

```
my-11ty-project/
├── src/
│   ├── css/
│   │   └── styles.css
│   └── index.html
├── .eleventy.js
├── .gitignore
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

Feel free to modify this README to better suit your specific project needs.