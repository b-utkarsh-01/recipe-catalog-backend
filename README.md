# Recipe Catalog Backend

Express + MongoDB backend API for the Recipe Catalog application.

## Tech Stack
- Node.js
- Express
- Mongoose
- MongoDB Atlas

## Prerequisites
- Node.js 20+
- npm
- MongoDB connection string

## Environment Variables
Create a `.env` file in this folder (`recipe-catalog-backend`):

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Local Development
From this folder:

```bash
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

## Production Run

```bash
npm start
```

## API Endpoints
Base path: `/api/recipe`

- `POST /api/recipe/create` -> create recipe
- `GET /api/recipe` -> get all recipes
- `GET /api/recipe/:id` -> get recipe by id
- `PUT /api/recipe/:id` -> update recipe
- `DELETE /api/recipe/:id` -> delete recipe
- `PATCH /api/recipe/:id/favorite` -> toggle favorite
- `GET /` -> health message (`API Running...`)

## Docker (Backend Only)
From project root:

```bash
docker build -t recipe-backend:latest ./recipe-catalog-backend
docker run -d --name recipe-backend -p 5000:5000 --env-file ./recipe-catalog-backend/.env recipe-backend:latest
```

Test with:

```bash
curl http://localhost:5000/
```

## Run Full App with Docker Compose
From project root:

```bash
docker compose up --build -d
```

- Frontend: `http://localhost`
- Backend: `http://localhost:5000`
