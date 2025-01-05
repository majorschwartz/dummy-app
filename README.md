# Dummy Application

A full-stack application built with React and FastAPI that generates random numbers.

## Features

- React-based frontend with a clean, responsive design
- FastAPI backend server
- Random number generation API endpoint
- Cross-Origin Resource Sharing (CORS) enabled
- Environment variable support

## Prerequisites

- Python 3.12.x (recommended)
- Node.js

## Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install the required Node.js packages:

```bash
npm install
```

3. Create a `.env` file in the client directory with the following content:

```bash
REACT_APP_API_ENDPOINT=http://localhost:5000
```

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

### Frontend

The frontend is a simple React application that can be run using the following command:

```bash
npm start
```

### Backend

The backend is a FastAPI server that can be run using the following command:

```bash
python app.py
```

The server will start on `http://localhost:5000`

## Project Structure

```
.
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── .env (not included)
├── server
│   ├── app.py
│   └── requirements.txt
├── .gitignore
└── README.md
```

## License

This project is open-source and available under the MIT License.