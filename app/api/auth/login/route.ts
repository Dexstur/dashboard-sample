export async function POST(req: Request) {
  const body: LoginDto = await req.json();

  return Response.json({
    message: "Login successful",
    data: {
      email: body.email,
    },
  });
}
