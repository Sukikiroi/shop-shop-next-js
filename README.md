# shop-shop-next-js


<p align="center">
 <img src="https://img.shields.io/badge/License-MIT-blue.svg">
   <a href="https://app.netlify.com/sites/tnote/deploys"><img src="https://api.netlify.com/api/v1/badges/a0e055de-cab8-4217-80dd-5bd769b7d478/deploy-status"></a>
   <a href='https://coveralls.io/github/taniarascia/takenote'><img src='https://coveralls.io/repos/github/taniarascia/takenote/badge.svg' alt='Coverage Status' /></a>
 </p>


<p align="center">A web-based notes app for developers. (Demo only)</p>

![Screenshot](./assets/takenote-light.png)


## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                                          | Description                               |
| --------------------------------------------- | ----------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/) | Static type-checking programming language |
| [Node.js](https://nodejs.org/en/)             | JavaScript runtime for the backend        |
| [Nest](https://nestjs.com/)                   | Server framework                          |
| [React](https://reactjs.org/)                 | Front end user interface                  |
| [Next](https://nextjs.org/)                   | The React Framework                       |
| [Redux](https://redux.js.org/)                | Global state management                   |
| [Webpack](https://webpack.js.org/)            | Asset bundler                             |
| [Sass](https://sass-lang.com/)                | Style preprocessor                        |                         
| [Jest](https://jestjs.io/)                    | Unit testing framework                    |
| [Cypress](https://www.cypress.io/)            | End-to-end testing framework              |



## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc.js) and [Prettier](.prettierrc).

- No semicolons
- Single quotes
- Two space indentation
- Trailing commas in arrays and objects
- [Non-default exports](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) are preferred for components
- Module imports are ordered and separated: **built-in** -> **external** -> **internal** -> **css/assets/other**
- TypeScript: strict mode, with no implicitly any
- React: functional style with Hooks (no classes)
- `const` preferred over `let`
