import React from "react";
import { Input } from "~/components/ui/input";
import AuthButtons from "../auth/AuthButtons";
import { getServerAuthSession } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { FaRegBell, FaSistrix } from "react-icons/fa6";
import AccountMenu from "../auth/AccountMenu";
import SidebarDrawer from "./SidebarDrawer";

async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <nav className="sticky left-0 right-0 top-0 h-16 bg-white">
      <div className="container flex h-full w-full items-center justify-between">
        <div className="flex w-full max-w-lg items-center justify-start gap-4 md:justify-center">
          <SidebarDrawer />

          <div className="font-semibold">Logo</div>

          <Input placeholder="Search..." className="hidden md:block" />
        </div>

        {session?.user ? (
          <div className="flex items-center gap-7">
            <Button variant="outline" className="hidden md:block">
              Create Post
            </Button>

            <FaSistrix className="text-lg md:hidden" />

            <FaRegBell className="text-lg" />

            <AccountMenu />
          </div>
        ) : (
          <AuthButtons />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// bg-opacity-80 backdrop-blur-lg backdrop-filter
