import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">show tickets</Link>
      <Link href="/tickets/create">Create ticket</Link>
    </nav>
  );
}
