import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  const lists = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Skills",
      url: "/skills",
    },
    {
      title: "Hire Me",
      url: "/hire-me",
    },
  ];
  return (
    <header className="border-b shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          <Link href="/">Vikas Meshram</Link>
        </h1>

        <NavigationMenu>
          <NavigationMenuList>
            {lists.map((list) => (
              <NavigationMenuItem key={list.url}>
                <Link href={list.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-base")}
                  >
                    {list.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <ModeToggle />
        </NavigationMenu>

      </div>
    </header>
  );
}
