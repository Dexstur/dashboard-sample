"use client";

import { PrototypesScreen } from "./prototypes";
import { listProducts } from "@/actions";

import { ProductsTable } from "./Table";

export function ProductsScreen() {
  listProducts();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold py-2">Products</h1>
      <ProductsTable />
    </main>
  );
}

export { PrototypesScreen };
