"use client";

import { listPrototypes } from "@/actions";
import { PrototypeTable } from "./Table";

export function PrototypesScreen() {
  listPrototypes();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold py-2">Prototypes</h1>
      <PrototypeTable />
    </main>
  );
}
