"use client";
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
import { lists } from "@/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <header className="border-b shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          <Link href="/">
            Vikas <span className="dark:text-primary ">Meshram</span>
          </Link>
        </h1>

        <Sheet>
          <SheetTrigger className="block md:hidden">
            <Menu size={36} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-4xl font-bold text-center py-5">
                Vikas Meshram
              </SheetTitle>
            </SheetHeader>
            <ul>
              {lists.map((list) => (
                <li key={list.url} className="py-2">
                  <Link href={list.url} className="text-base">
                    {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden md:flex gap-4">
          <NavigationMenuList>
            {lists.map((list) => (
              <NavigationMenuItem key={list.url} className={cn(`${path === list.url ? "border-b-2 border-primary" : ""}`)}>
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
