from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import random
import os
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "client", "build")
app.mount("/static", StaticFiles(directory=os.path.join(client_path, "static")), name="static")

@app.get("/hello")
def hello():
    return random.randint(1, 100)

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    file_path = os.path.join(client_path, "index.html")
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"message": "Not found"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)