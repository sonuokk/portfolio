# Sonu's portfolio

A responsive React portfolio with an Express API and MongoDB-backed contact form.

## Run locally

1. Install Node.js 18 or newer and MongoDB.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `MONGODB_URI` if using the contact form.
4. Run `npm run dev`, then open the Vite URL shown in the terminal.

The portfolio and resume downloads work without MongoDB. The contact form stores messages in the `contact_messages` collection when MongoDB is configured; otherwise, visitors are shown a direct email link.

## Manage projects and images

The four projects from the resumes are listed in `src/data/projects.js`. Add another object to that array to add a project card. For a project image, copy the file into `public/images/projects/` and set its `image` field to a path such as `/images/projects/my-project.jpg`. Leave `image` empty to use the built-in placeholder artwork. Each project can also include its title, description, stack, and accessible `imageAlt` text.

## Production

Run `npm run build` to create the static frontend in `dist/`. Start the API with `npm start`. Set `CLIENT_ORIGIN` to the deployed frontend origin and provide `MONGODB_URI` in the server environment.

## Deploy to Vercel

The Vite frontend is served as a static site, and the files in `api/` provide Vercel Functions for `/api/health` and `/api/contact`.

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository, and keep the detected Vite settings: build command `npm run build`, output directory `dist`, and project root `.`.
3. If you want the contact form to save messages, create a MongoDB Atlas database and database user. Add `MONGODB_URI` to the Vercel project's Environment Variables for Production (and Preview if desired). Redeploy after saving it.
4. Visit `/api/health` on the deployed domain, then send a message through the contact form.

The portfolio and resume downloads work without MongoDB. Without `MONGODB_URI`, the API returns a setup message and the contact section still shows the direct email link.
