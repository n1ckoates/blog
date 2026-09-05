"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/lib/navData";

export default function SidebarLinks() {
  let pathname = usePathname();
  if (pathname.startsWith("/blog")) {pathname = "/blog";}

  return (
    <div className="mt-6 flex w-48 flex-col">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group py-0.5 text-base font-medium"
        >
          <div
            className={clsx("flex items-center gap-3 rounded-md px-3 py-2", {
              "bg-secondary text-foreground": pathname === link.href,
              "text-muted-foreground group-hover:bg-secondary/70 group-hover:text-foreground":
                pathname !== link.href,
            })}
          >
            <link.Icon size={18} stroke={1.8} aria-hidden />
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
