# Vuekeleton

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Pinia](https://img.shields.io/badge/pinia-%23FCE4EC.svg?style=for-the-badge&logo=vuedotjs&logoColor=%2342b883)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Vuekeleton is a modern, feature-rich starter template for Vue 3 projects, designed to jumpstart your development process with best practices and powerful tools.

## Features

- ⚡️ [Vue 3](https://v3.vuejs.org/) with [Vite](https://vitejs.dev/) for lightning-fast development
- 🔑 [TypeScript](https://www.typescriptlang.org/) for type-safe code
- 📦 [Pinia](https://pinia.vuejs.org/) for intuitive state management
- 🚦 [Vue Router](https://router.vuejs.org/) for seamless navigation
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- 🌐 [vue-i18n](https://vue-i18n.intlify.dev/) for internationalization
- 🧹 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html) for code quality
- ✅ [Vitest](https://vitest.dev/) for unit and component testing
- 🔍 [Iconify](https://iconify.design/) for easy icon usage

## Getting Started

### Prerequisites

- Node.js (version 22 or higher recommended, based on @tsconfig/node22)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vuekeleton.git
   cd vuekeleton
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build
- `npm run test:unit`: Run unit tests with Vitest
- `npm run type-check`: Run TypeScript type checking
- `npm run lint`: Run all linters (Oxlint and ESLint)
- `npm run lint:oxlint`: Run Oxlint
- `npm run lint:eslint`: Run ESLint
- `npm run format`: Format code with Prettier

## Project Structure

The project structure is organized to promote modularity and ease of maintenance. Key directories include:

- `src/`: Main source code
    - `components/`: Vue components
    - `views/`: Vue components used for pages/routes
    - `router/`: Vue Router configuration
    - `stores/`: Pinia stores
    - `locales/`: i18n translation files
- `public/`: Static assets
- `tests/`: Unit and component tests

## Customization

### Tailwind CSS

Customize your Tailwind CSS configuration in `tailwind.config.js`.

### Vue Router

Add or modify routes in `src/router/index.ts`.

### Pinia Stores

Create and manage state in `src/stores/`.

### Internationalization

Add new languages or modify existing translations in `src/locales/`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Oxlint](https://oxc-project.github.io/)

---

Happy coding! 🚀
