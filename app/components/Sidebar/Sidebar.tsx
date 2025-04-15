import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed top-0 left-0 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">My App</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          Home
        </Link>
        <Link href="/users" className="hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          Users
        </Link>
        <Link href="/rank" className="hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          Rank
        </Link>
      </nav>
    </div>
  );
}
