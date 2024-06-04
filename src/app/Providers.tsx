"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "~/components/ui/toaster";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
}

export default Providers;
