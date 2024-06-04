"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";

function EnterPage() {
  const searchParams = useSearchParams();

  const authState = searchParams.get("state");

  return (
    <div className="mt-10 flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-1.5">
        <h1 className="text-lg font-semibold leading-none tracking-tight">
          {authState === "newUser" ? "Join devDream." : "Welcome back."}
        </h1>
        <p className="text-sm text-muted-foreground">
          Gain insights from industry experts and thought leaders and Connect,
          collaborate, and grow with peers in the tech community
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <Button
          onClick={() => signIn("github")}
          variant="outline"
          className="w-full max-w-96 rounded-full"
        >
          <GitHubLogoIcon className="mr-2" />
          Sign {authState === "newUser" ? "up" : "in"} with GitHub
        </Button>

        <div className="mb-3 mt-10">
          {authState === "newUser" ? (
            <div>
              Already have an account?{" "}
              <Link href={"/enter"}>
                <span className="cursor-pointer text-blue-500">Log in</span>
              </Link>
              .
            </div>
          ) : (
            <div>
              New to DEV Community?{" "}
              <Link
                href={{
                  pathname: "/enter",
                  query: { state: "newUser" },
                }}
              >
                <span className="cursor-pointer text-blue-500">
                  Create account
                </span>
              </Link>
              .
            </div>
          )}
        </div>

        <p className="w-5/6 text-center text-xs text-slate-500">
          Click {authState === "newUser" ? "“Sign up”" : "“Sign in”"} to agree
          to devDreams’s Terms of Service and acknowledge that devDreams’s
          Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
}

export default EnterPage;
