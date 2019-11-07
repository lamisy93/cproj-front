# cproj-front
Typescript - jest - enzyme - parcel - react router - fetch / axios - less / sass - dev / prod

#Architecture du front

root
      ├── package.json 
      ├── package-lock.json 
      ├── node_modules
      ├── src (localhost:1234)
      │   └── index.js
      │   └── index.html
      ├── .gitignore
      └── README.md

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

2.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5. **`README.md`**: A text file containing useful reference information about your project.

6. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

-------------------------------------------------------------------------

- Initialisation d'un projet en javascript se fait via la commande  `npm init` (cré un manifest : description du projet)

-------------------------------------------------------------------------

Structure du JS

src/js
    components/(dumb component) : composants  normalement simples
    pages/(HOC : High order component) : composants parent qui souvent appellent d'autres composants, composants avec très souvent de la logique. 