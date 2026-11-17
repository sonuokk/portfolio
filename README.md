# Sonu's portfolio

A responsive React portfolio with an Express API for local development and Vercel Functions for deployment. The project cards, resume downloads, and contact form are configured in this repository.

## Requirements

- Node.js 18 or newer
- npm
- MongoDB, only if you want contact form submissions saved

## Run locally

```sh
npm install
```

Copy `.env.example` to `.env`. Set `MONGODB_URI` if you want to persist contact messages; the example uses a local MongoDB instance. Then start both the Vite frontend and Express API:

```sh
npm run dev
```

Open the Vite URL printed in the terminal (usually `http://localhost:5173`). Vite proxies `/api` requests to the local Express server on port 5000. The portfolio and resume downloads work without MongoDB; the contact form provides a direct email fallback if its API is not configured.

For a frontend-only development server, run `npm run dev:client`. For the API alone, run `npm run dev:server`.

## Projects and images

Project order and card content are maintained in [`src/data/projects.js`](src/data/projects.js). Add an object to the `projects` array with a unique `number` and `name`, a short `type` and `description`, a technology `stack`, and a color `tone` (`sage`, `lavender`, `peach`, or `blue`). Add `repo` and `demo` URLs when available.

To add a project screenshot:

1. Put the image in `public/images/projects/`.
2. Set the project's `image` to its public path, for example `/images/projects/my-project.jpg`.
3. Add a descriptive `imageAlt` value.

Leave `image` empty to use the generated artwork placeholder. A starter `.gitkeep` file keeps the images folder in the repository.

## Resumes

The four downloadable resume PDFs live in `public/resumes/`. The menu and download labels are configured in `src/App.jsx`; keep each `file` value in sync with the matching filename in that folder.

## Build and run the Express server

Create a static production frontend with:

```sh
npm run build
```

The generated site is in `dist/`. When that folder exists, Express serves the built portfolio and API together from one origin. To run the Express server, set `MONGODB_URI` in `.env` if you want contact form messages saved, then run:

```sh
npm start
```

## Deploy to Render

Render can host the built Vite frontend and Express API together as one Node web service.

1. Push the project to a GitHub repository and create a **Render → New → Web Service** from it.
2. Use the repository root as the Root Directory, `npm install && npm run build` as the Build Command, and `npm start` as the Start Command.
3. Add `MONGODB_URI` as an environment variable if you want the contact form to save submissions. Do not set `PORT`; Render provides it automatically. `CLIENT_ORIGIN` is not needed when the frontend and API use the same Render service.
4. Deploy, then check `/api/health` on the Render URL and try the contact form.

## Deploy to Vercel

Vercel serves the Vite build and deploys the files in `api/` as serverless functions. The Express server in `server/` is for local development or a separate Node.js host.

1. Push the project to a GitHub repository and import it with **Vercel → Add New → Project**.
2. Use the project root as the Root Directory, `npm run build` as the Build Command, and `dist` as the Output Directory.
3. For saved contact form submissions, create a MongoDB database and add `MONGODB_URI` to the Vercel project's Environment Variables. Redeploy after changing environment variables.
4. Check `/api/health` on the deployed domain. With MongoDB configured, submit a message through the contact form to confirm storage.

The site and resume downloads work without MongoDB. If the database is not configured, the contact endpoint returns a setup message and the page offers Sonu's email as an alternative.
