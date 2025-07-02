import { FetchError } from "../stategy/error";

export async function apiFetch(url: string) {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      throw new FetchError(response.status, response.statusText, data);
    }

    return data;
  } catch (error: any) {
    if (error instanceof FetchError) throw error;

    throw new FetchError(0, "Network error", null);
  }
}
