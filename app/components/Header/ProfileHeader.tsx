import Link from "next/link";
import React from "react";

const ProfileHeader = async ({ id }: { id: string }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");

  const user = await res.json();

  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center gap-[68%] px-6 fixed top-0 left-64 z-50">
      <Link href="/users">
        <h2 className="text-xl font-bold text-blue-600">Users</h2>
      </Link>
      <Link href={`/users/${id}`}>
      <h2 className="text-lg font-medium text-gray-700">{user.name}</h2>
      </Link>
    </header>
  );
};

export default ProfileHeader;
