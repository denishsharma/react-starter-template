# React Starter Template

This is a simple React starter template that allows you to quickly get started with a new React project. It includes the following:

-   Vite: A fast build tool that provides a lightning-fast development experience.
-   React: A JavaScript library for building user interfaces.
-   TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
-   ESLint: A pluggable linting utility for JavaScript and JSX.
-   UnoCSS: A utility-first CSS framework for rapid UI development.
-   TanStack Router: A simple and flexible router for React applications.
-   TanStack Query: A data-fetching library for React applications.
-   Zustand: A small, fast, and scalable state management library for React applications.

## Getting Started

Copy and paste the following command to create a new project using this template:

```bash
# Only works on Unix-based systems with bash
read -p "Enter directory name: " dirname && git clone --single-branch --branch main https://github.com/denishsharma/react-starter-template.git "$dirname" && cd "$dirname" && rm -rf .git && git init && { command -v pnpm >/dev/null 2>&1 || { echo >&2 "pnpm is not installed. Installing..."; npm install -g pnpm; }; } && pnpm install
```

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/denishsharma/react-starter-template.git
cd react-starter-template
pnpm install
```

Then, start the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

-   Remove the "welcome" module from the `src/modules` directory.
-   Change the title and description in the `public/index.html` file.
-   Update the `name`, `version`, `description`, `author`, and `repository` fields in the `package.json` file.

## Author

-   Name: Denish Sharma
-   Email: [denishcommon@gmail.com](matilto://denishcommon@gmail.com)
