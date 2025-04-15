import React from "react";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");

  const user = await res.json();

  return (
    <div className=" mx-auto p-6 space-y-8">

      <div className="flex items-start space-x-6">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center text-3xl">
          👤
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="flex gap-[50px]">
        <div className="h-64">
          <iframe
            className="w-[390px] h-full rounded shadow-md"
            src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=15&output=embed`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Company:</h2>
          <p className="text-xl">{user.company.name}</p>
          <p className="text-sm text-gray-500 mt-1">"{user.company.catchPhrase}"</p>

          <div className="flex gap-4 mt-[33px]">
          <Link href={`/users/${id}/albums`} className="px-4 py-2 border border-blue-500 text-blue-500 rounded shadow hover:border-blue-600 text-blue-600">
          Albums
        </Link>
        <Link href={`/users/${id}/posts`} className="px-4 py-2 border border-blue-500 text-blue-500 rounded shadow hover:border-blue-600 text-blue-600">
          Posts
        </Link>
        <Link href={`/users/${id}/todos`} className="px-4 py-2 border border-blue-500 text-blue-500 rounded shadow hover:border-blue-600 text-blue-600">
          Todos
        </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
