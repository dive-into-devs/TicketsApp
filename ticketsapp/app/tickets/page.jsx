
import Link from "next/link";
export default async function Tickets(){

  const res = await fetch("http://localhost:3000/api/tickets", {
     cache: "no-store",
  });
  if (!res.ok) {
  throw new Error(`Failed to fetch tickets: ${res.status}`);
}
  const ticketlist = await res.json();

  return(
    <>
    <div>

      {ticketlist.map(ticket => (
       <Link key={ticket.id} href={`/tickets/${ticket.id}`} className="flex flex-row justify-between items-center gap-2 p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors" >
         <div className="flex flex-row justify-between items-center gap-2 w-1/4">
          <h1>{ticket.name}</h1>
          <p>{ticket.description}</p>
         </div>
       </Link>
      ))}

    </div>
    </>
  );
}
