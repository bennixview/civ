// MVP: Civilization-ähnliches Browsergame
// Stack: Remix.run (Frontend), FastAPI (Backend), PostgreSQL (DB)

// --- Frontend: app/routes/index.tsx ---
import { useEffect, useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Civilization = {
  id: number;
  name: string;
  leader: string;
  color: string;
};

type Tile = {
  x: number;
  y: number;
  terrain: string;
  ownerId?: number;
};

export const loader: LoaderFunction = async () => {
  const civs = await fetch("http://localhost:8000/api/civilizations").then(res => res.json());
  const map = await fetch("http://localhost:8000/api/map").then(res => res.json());
  return json({ civs, map });
};

export default function Index() {
  const { civs, map } = useLoaderData<{ civs: Civilization[]; map: Tile[] }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CivGame MVP</h1>
      <h2 className="text-xl mb-2">Zivilisationen</h2>
      <ul className="mb-4">
        {civs.map(civ => (
          <li key={civ.id} style={{ color: civ.color }}>
            {civ.name} (geführt von {civ.leader})
          </li>
        ))}
      </ul>
      <h2 className="text-xl mb-2">Weltkarte</h2>
      <div className="grid grid-cols-10 gap-1">
        {map.map(tile => (
          <div
            key={`${tile.x}-${tile.y}`}
            className="w-8 h-8 border text-xs flex items-center justify-center"
            style={{ backgroundColor: tile.ownerId ? civs.find(c => c.id === tile.ownerId)?.color : '#ccc' }}
          >
            {tile.terrain[0]}
          </div>
        ))}
      </div>
    </div>
  );
}
