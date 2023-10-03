"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { LogOut, User, UserCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full w-full flex-col">
        <nav className="flex-1 space-y-4">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                href={item.route}
                key={item.label}
                className={`${
                  isActive
                    ? "primary-gradient text-light-900"
                    : "text-dark300_light900"
                } hover:background-light700_dark400 flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
                title={item.label}
              >
                <Image
                  height={24}
                  width={24}
                  src={item.imgURL}
                  alt={item.label}
                  className={`${isActive ? "text-light-900" : "invert-colors"}`}
                />
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } hidden lg:block`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </nav>

        <SignedIn>
          <SignOutButton>
            <Button className="text-dark200_light900 hover:background-light700_dark400 flex items-center justify-start gap-4 bg-transparent p-4">
              <LogOut width={24} height={24} />
              <span className="base-medium max-lg:hidden">Logout</span>
            </Button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <div className="flex flex-col gap-2">
            <Link href="/sign-in" title="Sign in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <User
                  width={24}
                  height={24}
                  className="text-dark200_light900 lg:hidden"
                />
                <span className="primary-text-gradient font-inter max-lg:hidden">
                  Log in
                </span>
              </Button>
            </Link>
            <Link href="/sign-up" title="Sign up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 font-inter shadow-none">
                <UserCog
                  width={24}
                  height={24}
                  className="text-dark200_light900 lg:hidden"
                />
                <span className="primary-text-gradient font-inter max-lg:hidden">
                  Sign Up
                </span>
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </aside>
  );
};

export default LeftSidebar;
