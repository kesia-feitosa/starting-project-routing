"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Children } from "react";

export default function NavLink({href, children}) {
  const path = usePathname();

  return (
    <Link 
      href={href}
      className={path.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  );
}