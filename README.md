# AI Tools Ranking Dashboard

A comprehensive web application featuring user authentication and a dashboard displaying rankings of the most popular AI tools worldwide, organized by categories.

## Features

- User Authentication System
  - Secure user registration and login
  - JWT-based authentication
  - Password encryption with bcrypt
  - Session management

- Dashboard Interface
  - Responsive design with Tailwind CSS
  - AI tools ranking display
  - Category filtering (Productivity, Development, Design, Research, Writing)
  - Visual charts and graphs using Recharts
  - Interactive cards with tool details

- Technical Features
  - Full-stack application with Node.js/Express backend and React frontend
  - MongoDB database with Mongoose ODM
  - TypeScript for type safety
  - RESTful API endpoints
  - Error handling and validation
  - ESLint and Prettier for code quality

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite as build tool
- Tailwind CSS for styling
- React Router for navigation
- Recharts for data visualization
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Express Validator for input validation
- Helmet for security headers
- Rate limiting for API protection

## Project Structure

```
web-test/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── test/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seed/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn package manager

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lxwzone/web-test.git
cd web-test
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/web-test
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRE=7d
```

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the frontend directory:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup

Start MongoDB service on your machine or use MongoDB Atlas cloud service.

Seed the database with AI tools data:

```bash
cd ../backend
npm run seed
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
```

### Start Backend Server

Navigate to the backend directory:

```bash
cd backend
```

Run the development server:

```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

### Start Frontend Server

Open a new terminal, navigate to the frontend directory:

```bash
cd frontend
```

Run the development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:3000`

## Usage

### Register a New Account

1. Navigate to `http://localhost:3000/register`
2. Fill in your name, email, and password
3. Click "Sign Up" to create your account

### Login

1. Navigate to `http://localhost:3000/login`
2. Enter your email and password
3. Click "Sign In" to access the dashboard

### Explore AI Tools Dashboard

1. After logging in, you'll be redirected to the dashboard
2. View the top 10 most popular AI tools in the bar chart
3. See the distribution of tools by category in the pie chart
4. Filter tools by category using the category buttons
5. Click on "Visit Website" to learn more about each tool

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, password }`
  - Response: `{ token, user }`

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Response: `{ token, user }`

- `GET /api/auth/me` - Get current user (protected)
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ user }`

### AI Tools

- `GET /api/ai-tools` - Get all AI tools
  - Query: `?category=<category>&sort=<field>`
  - Response: Array of AI tools

- `GET /api/ai-tools/categories` - Get all categories
  - Response: Array of category names

- `GET /api/ai-tools/:id` - Get specific AI tool
  - Response: Single AI tool object

## Available Scripts

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
npm run test     # Run tests
```

### Backend

```bash
npm run dev      # Start development server with nodemon
npm run build    # Compile TypeScript
npm start        # Start production server
npm run lint     # Run ESLint
npm run seed     # Seed database with AI tools data
```

## Code Quality

The project uses ESLint and Prettier for maintaining code quality:

```bash
# Frontend
cd frontend
npm run lint

# Backend
cd backend
npm run lint
```

## Testing

Run tests for the frontend:

```bash
cd frontend
npm run test
```

## Deployment

### Backend Deployment

1. Build the backend:
```bash
cd backend
npm run build
```

2. Set environment variables on your hosting platform
3. Deploy the `dist` folder to your hosting service

### Frontend Deployment

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

## Environment Variables

### Backend (.env)

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation
- `JWT_EXPIRE` - JWT token expiration time (default: 7d)

### Frontend (.env)

- `VITE_API_URL` - Backend API URL

## Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Rate limiting on API endpoints
- Helmet for security headers
- Input validation with express-validator
- CORS configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- AI tools data sourced from various public sources
- Icons provided by Lucide React
- Charts powered by Recharts
- Styling with Tailwind CSS