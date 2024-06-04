import { redirect } from "next/navigation";
import React from "react";
import EnterPage from "~/features/auth/EnterPage";
import { getServerAuthSession } from "~/server/auth";

async function page() {
  const session = await getServerAuthSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      <EnterPage />
    </div>
  );
}

export default page;
