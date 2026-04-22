# MERN Item Manager

A complete starter MERN project for a lab test. It includes:
- Separate **frontend** and **backend**
- MongoDB Atlas connection via `.env`
- CRUD APIs for items
- Added **module** field as requested
- Basic React UI
- Ready to push to GitHub and deploy separately

## Features
- Add item
- View items
- Update item
- Delete item
- Fields: `name`, `quantity`, `module`, `category`, `description`

## Project Structure
```text
mern_item_manager_complete/
  backend/
  frontend/
```

## Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# update MONGO_URI in .env
npm run dev
```

## Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Default Ports
- Backend: `5000`
- Frontend: `5173`

## Deployment
- Frontend: Netlify / Vercel
- Backend: Render / Railway

Before deployment:
- Set `MONGO_URI` in backend environment variables
- Set `VITE_API_URL` in frontend environment variables to deployed backend URL + `/api`

Example:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```
