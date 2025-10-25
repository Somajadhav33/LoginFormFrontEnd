# Login Form Frontend

A React frontend application for user authentication with login and signup functionality.

## Features

- User login with JWT authentication
- User registration/signup
- Protected routes
- Responsive design
- Cookie-based session management

## Tech Stack

- React 19
- Vite
- React Router DOM
- Axios for API calls
- js-cookie for cookie management

## Getting Started

### Prerequisites
- Node.js 18+
- Backend server running (see LoginFormBackEnd)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy the example file
cp env.example .env.local

# Edit .env.local with your API URL
VITE_API_URL=http://localhost:5000
```

3. Start development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── Components/
│   ├── Login/          # Login page component
│   ├── SignUp/         # Signup page component
│   ├── Home/           # Home page component
│   └── ProtectedRoute.jsx  # Route protection
├── App.jsx             # Main app component
└── main.jsx           # App entry point
```

## Deployment

See the main DEPLOYMENT.md file for deployment instructions. 
