import AlbumsHeader from "@/app/components/Header/AlbumsHeader";
import React from "react";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { albumId: string, id:string };
}) => {
    const {id} = params;
  return (
    <>
      <AlbumsHeader userId={id} />
      <main>{children}</main>
    </>
  );
};

export default layout;
