'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function CreateTicket(){
 const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
   const res = await fetch("http://localhost:4000/tickets",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description
    }),
   });
   if (res.ok){
    // alert("Ticket added!");
    setName('');
    setDescription('');
    router.push('/tickets');
   }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Ticket</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter ticket name' />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter ticket description'
          className="w-full h-32 p-2 border rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Create Ticket
      </button>
    </form>

  );
}
