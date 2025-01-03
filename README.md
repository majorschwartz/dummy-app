# Dummy Application

A simple full-stack application that displays random numbers. The application consists of a FastAPI backend serving a React frontend as static files.

## Features

- FastAPI backend with CORS enabled
- React frontend served as static files
- Random number generation endpoint
- Single-page application (SPA) support

## Prerequisites

- Python 3.12.x (recommended)
- Node.js (for development only)

## Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Create and activate a virtual environment (optional but recommended):

```bash
python -m venv .venv
source .venv/bin/activate
```

3. Install the required Python packages:

```bash
pip install -r requirements.txt
```

## Running the Application

The application is configured to serve the pre-built React frontend through the Python server. Simply run:

```bash
python app.py
```

The server will start on `http://localhost:5000`

## Development

### Backend
The FastAPI server provides two main endpoints:
- `/hello` - Returns a random number between 1 and 100
- `/{full_path:path}` - Serves the React SPA for all other routes

### Frontend
The React frontend is a simple application that fetches and displays random numbers from the backend. The main application logic can be found in:

```bash
client/src/App.js
```

## Project Structure

- `/server` - Contains the FastAPI backend
  - `app.py` - Main server file
  - `requirements.txt` - Python dependencies
- `/client` - Contains the React frontend
  - `/build` - Production build (pre-built for convenience)
  - `/public` - Static assets
  - `/src` - Source code

## Notes

- The React application is pre-built and served as static files through the Python server
- CORS is enabled for all origins in development
- The server runs on port 5000 by default
- For development purposes, you can run the React application separately using `npm start` in the client directory

## License

This project is open-source and available under the MIT License.