export async function getDashboardStats() {
  try {
    const response = await fetch("/api/dashboard/stats");
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

export async function getDashboardCharts() {
  try {
    const response = await fetch("/api/dashboard/charts");
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
