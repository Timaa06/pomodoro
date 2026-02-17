# Pomodoro

## Description

Application Pomodoro Timer permettant de gérer des sessions de travail et de pause selon la technique Pomodoro. La configuration est sauvegardée en localStorage.

## Stack technique

- **Frontend** : React 19 + TypeScript
- **Bundler** : Vite 7
- **CSS** : Tailwind CSS v4
- **Tests** : Vitest
- **Persistance** : localStorage
- **Package manager** : pnpm

## Fonctionnalités

- Timer Pomodoro (travail / pause)
- Configuration personnalisable :
  - Nombre de répétitions
  - Durée d'une session de travail
  - Durée d'une pause
- Formulaire de configuration
- Sauvegarde/restauration des préférences en localStorage

## Methodologie

- **TDD (Test-Driven Development)** — cycle strict Red / Green / Refactor :
  1. **Red** : écrire le test en premier, le lancer, vérifier qu'il échoue
  2. **Green** : implémenter le minimum de code pour que le test passe
  3. **Refactor** : améliorer le code si nécessaire, les tests doivent rester verts
- Développement itératif par petites fonctionnalités
- Commits atomiques et descriptifs

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
│   ├── hooks/              # Hooks custom (ex: useLocalStorage)
│   ├── types/              # Types TypeScript (ex: PomodoroConfig)
│   ├── App.tsx             # Composant principal
│   ├── index.css           # Styles globaux (import Tailwind)
│   └── main.tsx            # Point d'entrée React
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
pnpm test       # Lancer les tests avec Vitest (watch mode)
```
