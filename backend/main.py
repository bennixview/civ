from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS für Remix-Frontend erlauben
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Statische Mock-Daten
civilizations = [
    {"id": 1, "name": "Ägypter", "leader": "Cleopatra", "color": "#f59e0b"},
    {"id": 2, "name": "Römer", "leader": "Caesar", "color": "#ef4444"},
    {"id": 3, "name": "Chinesen", "leader": "Wu Zetian", "color": "#3b82f6"},
]

@app.get("/api/civilizations")
def get_civilizations():
    return civilizations

@app.get("/api/map")
def get_map():
    width, height = 10, 10
    terrain_types = ["grass", "water", "forest", "hill"]
    map_tiles = []

    for y in range(height):
        for x in range(width):
            tile = {
                "x": x,
                "y": y,
                "terrain": terrain_types[(x + y) % len(terrain_types)],
                "ownerId": (1 if (x + y) % 7 == 0 else 2 if (x + y) % 11 == 0 else None)
            }
            map_tiles.append(tile)
    return map_tiles
