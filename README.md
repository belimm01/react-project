# react-project

A small project-management UI for browsing, creating, editing and deleting
translation projects. It is a React + Redux single-page app that talks to a
Spring Boot REST backend.

## Prerequisites

- Node.js 20+ and npm 10+
- A running instance of the backend API
  ([memsource-assigment](https://github.com/belimm01/memsource-assigment)),
  reachable at `http://localhost:8090` by default. CORS is handled on the
  backend.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional: point the app at a different API
npm run dev                  # http://localhost:3000
```

## Configuration

The app reads a single environment variable at build/dev time. Vite only
exposes variables prefixed with `VITE_` to the client.

| Variable            | Default                 | Description                       |
| ------------------- | ----------------------- | --------------------------------- |
| `VITE_API_BASE_URL` | `http://localhost:8090` | Base URL of the projects REST API |

Copy `.env.example` to `.env.local` and adjust as needed. Environment files
other than `.env.example` are git-ignored.

## Scripts

| Command                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR                   |
| `npm run build`        | Typecheck and produce a production build in `build/` |
| `npm run preview`      | Serve the production build locally                   |
| `npm run typecheck`    | Run the TypeScript compiler (no emit)                |
| `npm run lint`         | Run ESLint                                           |
| `npm run format`       | Format the codebase with Prettier                    |
| `npm run format:check` | Verify formatting without writing                    |

## Docker

The image builds the static bundle and serves it with a rootless
nginx-unprivileged container listening on port 8080.

```bash
docker build -t react-project .
docker run --rm -p 8080:8080 react-project   # http://localhost:8080
```

## Architecture

```
src/
  component/        Presentational + container React components (function
    app/            components with hooks)
    project/
  store/            Redux store, reducers and thunk actions
    app/            Global UI state (loader)
    project/        Project CRUD state
  service/          Data-shaping helpers
  model/            TypeScript domain models
  router/           react-router route definitions
```

- **State:** Redux with `redux-thunk` for async API calls; the store is wired
  to Redux DevTools in development.
- **Data:** `axios` against the projects REST API; the base URL is configurable
  (see [Configuration](#configuration)).
- **UI:** Material-UI (v4) components and routing via react-router.
- **Build:** Vite (ESM) with the React plugin; TypeScript in strict mode;
  ESLint (flat config) and Prettier enforce style.

## Recommended follow-ups

The build tooling and dependencies were modernized without changing runtime
behavior. The following framework upgrades are worthwhile but are breaking
changes that deserve their own PRs and test coverage before landing:

- **React 18/19** with the `createRoot` API (react-redux 8+/9 required).
- **Material-UI v5+** — `@material-ui/*` is unmaintained; the v5 migration
  replaces `makeStyles`/`withStyles` with `styled`/`sx`.
- **react-router v6/7** — `Switch`/`component` → `Routes`/`element`,
  `useHistory` → `useNavigate`.
- **Redux Toolkit** to replace the hand-rolled action/reducer boilerplate.
