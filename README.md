# Personal Project Showcase App

## Overview

This project is a simple Single Page Application (SPA) built using **React**.  
It allows users to view, add, and search through a list of projects.  
The application demonstrates component-based design, state management, and dynamic UI updates without page reloads.

---

## Features

- Display a list of projects on the landing page
- Add new projects dynamically using a form
- Search and filter projects in real time
- Responsive layout for different screen sizes
- Clean and maintainable component structure

---

## Technologies Used

- React (Functional Components)
- JavaScript (ES6)
- HTML5
- CSS3
- Vite (development server and build tool)

---

## Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── AddProjectForm.jsx
│ ├── SearchBar.jsx
│ ├── ProjectList.jsx
│ └── ProjectCard.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## Component Overview

- **App**: Root component that holds global state
- **Header**: Displays the application title
- **AddProjectForm**: Handles adding new projects
- **SearchBar**: Filters projects based on user input
- **ProjectList**: Displays filtered projects
- **ProjectCard**: Displays individual project details

---

## State Management

- `useState` is used for managing local and shared state
- Project data is stored in the `App` component
- State is passed to child components using props
- Form inputs use controlled components

---

## Setup Instructions

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repository from GitHub: git clone <your-github-repository-link>
2. Navigate into the project directory: cd project-showcase
3. Install the project dependencies: npm install
4. Start the development server: npm run dev
5. Open your browser and visit: http://localhost:5173/
   The application will load and update automatically when you make changes to the source files.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
