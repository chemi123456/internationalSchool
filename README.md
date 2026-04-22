# International School Management System (MERN)

A full-stack MERN application for managing student enrollments and school records.

## Project Structure
- `backend/`: Node.js/Express API with MongoDB
- `frontend/`: React/Vite application

## Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file (see `.env.example`) and add your `MONGODB_URI`
4. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create a `.env` file if needed (see `.env.example`)
4. `npm run dev`

## Features
- Student enrollment form
- Real-time student directory
- Update/Delete student records
- Responsive design

## Deployment
- **Backend**: Deploy to Render or Railway. Set environment variables for `MONGODB_URI` and `PORT`.
- **Frontend**: Deploy to Vercel or Netlify. Set `VITE_API_URL` to your deployed backend URL.
