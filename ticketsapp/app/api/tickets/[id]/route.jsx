export async function GET(request, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: res.status });
  }

  const data = await res.json();
  return Response.json(data);
}
