import { dtoToQuery } from "../utils";
import { IFilter } from "@/types";

export async function productListRequest(filters: IFilter, search = "") {
  const query = dtoToQuery({ ...filters, search });
  try {
    const response = await fetch(`/api/product?${query}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
