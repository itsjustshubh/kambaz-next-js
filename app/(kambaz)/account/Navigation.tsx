"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    `list-group-item border-0 ${pathname === path ? "border-start border-3 border-dark text-dark bg-light" : "text-danger"}`;
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="/account/signin" className={linkClass("/account/signin")}>
        Sign In
      </Link>
      <Link href="/account/signup" className={linkClass("/account/signup")}>
        Sign Up
      </Link>
      <Link href="/account/profile" className={linkClass("/account/profile")}>
        Profile
      </Link>
    </div>
  );
}
