import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/blocks/container";
import { ThemeToggle } from "@/components/blocks/theme-toggle";
import IconNextjs from "@/components/icons/nextjs";
import { navItems } from "@/lib/utils";
import { IconBrandVercel } from "@tabler/icons-react";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-zinc-500 dark:hover:text-zinc-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="faded-border"></div>
        <div className="pb-16 pt-10 ">
          <ContainerInner>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-muted-foreground mb-4">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink key={"/colophon"} href="/colophon">
                Colophon
              </NavLink>
            </div>
            <div className="text-sm text-muted-foreground">
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
