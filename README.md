# E-Commerce Application

This project is an e-commerce application built with React, TypeScript, and Vite. It includes a minimal setup to get React working with Vite, Hot Module Replacement (HMR), and ESLint rules.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [ESLint Configuration](#eslint-configuration)
- [Prettier Configuration](#prettier-configuration)
- [TypeScript Configuration](#typescript-configuration)
- [Vite Configuration](#vite-configuration)
- [Recommended Extensions](#recommended-extensions)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd e-commerce
   ```
3. Install the dependencies:
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   yarn run dev
   ```

## Project Structure

```plaintext
.gitignore
.prettierignore
.prettierrc
.vscode/
    extensions.json
    settings.json
eslint.config.js
index.html
main.tsx
package.json
public/
README.md
src/
    app/
        App.tsx
        components/
            *.tsx
            modals/
                *.tsx
        constant/
            *.ts
        helper/
            *.ts
        layout/
            *.tsx
            *.ts
        model/
            *.ts
        navigation/
            *.tsx
        pages/
            *.tsx
        redux/
            */.ts
            */.tsx
        utils/
            */.ts
            */.tsx
        vite-env.d.ts
    assets/
      */
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the project using ESLint.
- `npm run fix`: Fixes linting issues using ESLint.
- `npm run preview`: Previews the production build.

## ESLint Configuration

The ESLint configuration is defined in [`eslint.config.js`](./eslint.config.js). It includes rules for React, TypeScript, and Prettier integration.

To expand the ESLint configuration for type-aware lint rules, update the `parserOptions` and replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

## Prettier Configuration

The Prettier configuration is defined in [`.prettierrc`](./.prettierrc). It includes settings for code formatting such as tab width, single quotes, and trailing commas.

## TypeScript Configuration

The TypeScript configuration is defined in [`tsconfig.app.json`](./tsconfig.app.json) and [`tsconfig.json`](./tsconfig.json). It includes compiler options and project references.

## Vite Configuration

The Vite configuration is defined in [`vite.config.ts`](./vite.config.ts). It includes settings for the development server and plugins.

## Recommended Extensions

The recommended extensions for Visual Studio Code are listed in [`.vscode/extensions.json`](./.vscode/extensions.json). These extensions include support for ESLint, Prettier, and TypeScript.

## License

This project is licensed under the MIT License.
