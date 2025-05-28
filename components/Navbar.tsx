"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./theme-select";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { LogOut, Pencil, SearchIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { redirect } from "next/navigation";

export function Navbartop({ session }: { session: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {/* <NavItems items={navItems} /> */}
          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                <NavbarButton
                  variant="secondary"
                  onClick={() => redirect("/blog/create")}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Pencil />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-thin">Create Blog</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavbarButton>

                <NavbarButton variant="secondary" onClick={() => signOut()}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <LogOut />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-thin">Logout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavbarButton>
                <Avatar>
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <NavbarButton variant="secondary">Login</NavbarButton>
            )}

            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              {session?.user && (
                <Avatar>
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              )}

              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))} */}
            <div className="flex w-full flex-col gap-4">
              {session?.user && (
                <>
                  <NavbarButton variant="secondary">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Pencil />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-thin">Create Blog</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </NavbarButton>

                  <NavbarButton variant="secondary" onClick={() => signOut()}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <LogOut />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-thin">Logout</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </NavbarButton>
                </>
              )}

              <ModeToggle />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
