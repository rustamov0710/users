import PostsHeader from "@/app/components/Header/PostsHeader";
import React from "react";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { postId: string, id:string };
}) => {
    const {id} = params;
  return (
    <>
      <PostsHeader userId={id} />
      <main>{children}</main>
    </>
  );
};

export default layout;
