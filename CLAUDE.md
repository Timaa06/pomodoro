# Pomodoro

## Description

Application Pomodoro Timer permettant de gérer des sessions de travail et de pause selon la technique Pomodoro. Utilise une base de données MongoDB Atlas pour la persistance des données.

## Stack technique

- **Frontend** : React 19 + TypeScript
- **Bundler** : Vite 7
- **CSS** : Tailwind CSS v4
- **Base de données** : MongoDB Atlas
- **Package manager** : pnpm

## Methodologie

- Développement itératif par petites fonctionnalités
- Commits atomiques et descriptifs
- Tester chaque fonctionnalité avant de passer à la suivante

## Conventions de code

- Composants React en arrow functions
- Fichiers composants en PascalCase (ex: `Timer.tsx`)
- Fichiers utilitaires en camelCase (ex: `formatTime.ts`)
- Styling avec les classes utilitaires Tailwind (pas de CSS custom sauf nécessité)
- Langue du code et des variables : anglais

## Structure actuelle

```
pomodoro/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx          # Composant principal
│   ├── index.css        # Styles globaux (import Tailwind)
│   └── main.tsx         # Point d'entrée React
├── CLAUDE.md
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Commandes

```bash
pnpm dev        # Lancer le serveur de développement
pnpm build      # Build de production (tsc + vite build)
pnpm preview    # Prévisualiser le build de production
pnpm lint       # Linter le code avec ESLint
```
