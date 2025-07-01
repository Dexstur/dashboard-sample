export async function loginRequest(dto: LoginDto) {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if (!res.ok) {
      throw new Error("Failed to login");
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
