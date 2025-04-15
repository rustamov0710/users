import ProfileHeader from "@/app/components/Header/ProfileHeader";
import React from "react";

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
    const {id} = params;
  return (
    <>
      <ProfileHeader id={id} />
      <main>{children}</main>
    </>
  );
};

export default layout;
