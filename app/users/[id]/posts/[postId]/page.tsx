import React from "react";

const page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  interface CommentType {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const newPost = await post.json();

  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/`);
  if (!res.ok) throw new Error("Failed to fetch comments");

  const comments: CommentType[] = await res.json();

  const newComments = comments.filter(
    (comment) => comment.postId === Number(params.postId)
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {newPost.title}
        </h1>
        <p className="text-gray-700">{newPost.body}</p>
      </div>

      <div className="space-y-4">
        {newComments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-400"
          >
            <p className="text-gray-800 font-medium mb-1">{comment.name}</p>
            <p className="text-gray-600 mb-2">{comment.body}</p>
            <p className="text-sm text-gray-500 italic">💬 {comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
