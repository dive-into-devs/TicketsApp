export async function POST(request) {
  const body = await request.json();
  const {name, description} = body;

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description
    }),
  });
  const result = await res.json();
  return Response.json(result, {status: 201});



}
