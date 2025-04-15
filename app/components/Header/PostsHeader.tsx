import Link from "next/link";
import React from "react";

const PostsHeader = async ({ userId }: { userId: string }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) throw new Error("Failed to fetch user");
  
    const user = await res.json();

  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center gap-[68%] px-6 fixed top-0 left-64 z-50">
      <Link href={`/users/${userId}/posts`}>
        <h2 className="text-xl font-bold text-blue-600">Posts</h2>
      </Link>
      <Link href={`/users/${userId}`}>
      <h2 className="text-lg font-medium text-gray-700">{user.name}</h2>
      </Link>
    </header>
  );
};

export default PostsHeader;
