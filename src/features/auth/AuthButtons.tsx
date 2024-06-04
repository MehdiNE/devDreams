"use client";

import Link from "next/link";
import React from "react";
import { FaSistrix } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

function AuthButtons() {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-2">
      <FaSistrix className="text-lg md:hidden" />

      <Link href={"/enter"} className="hidden lg:block">
        <Button variant="ghost">Log in</Button>
      </Link>

      <Link
        href={{
          pathname: "/enter",
          query: { state: "newUser" },
        }}
      >
        <Button variant="outline">Create Account</Button>
      </Link>
    </div>
  );
}

export default AuthButtons;
