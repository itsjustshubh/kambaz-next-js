"use client";

import { ReactNode } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

function NavItem({
  href,
  id,
  icon,
  label,
  active = false,
  iconRed = true,
}: {
  href: string;
  id: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
  iconRed?: boolean;
}) {
  const bgClass = active ? "bg-white text-danger" : "bg-black text-white";
  const iconClass = active || iconRed ? "text-danger fs-5" : "text-white fs-5";

  return (
    <Link
      href={href}
      id={id}
      className={`list-group-item border-0 py-1.5 w-100 d-flex flex-column align-items-center justify-content-center ${bgClass}`}
    >
      <span className={`${iconClass} mb-0 text-3xl [&_svg]:w-8 [&_svg]:h-8`}>
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 d-flex flex-column align-items-center"
      style={{ width: 84 }}
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item border-0 text-center bg-black p-0 w-100"
      >
        <img
          src="/images/NEU.png"
          style={{ width: "100%" }}
          alt="Northeastern University"
        />
      </a>
      <NavItem
        href="/account"
        id="wd-account-link"
        icon={<FaRegCircleUser />}
        label="Account"
        iconRed={false}
      />
      <NavItem
        href="/dashboard"
        id="wd-dashboard-link"
        icon={<AiOutlineDashboard />}
        label="Dashboard"
        active
      />
      <NavItem
        href="/courses"
        id="wd-course-link"
        icon={<LiaBookSolid />}
        label="Courses"
      />
      <NavItem
        href="/calendar"
        id="wd-calendar-link"
        icon={<IoCalendarOutline />}
        label="Calendar"
      />
      <NavItem
        href="/inbox"
        id="wd-inbox-link"
        icon={<FaInbox />}
        label="Inbox"
      />
      <NavItem
        href="/labs"
        id="wd-labs-link"
        icon={<LiaCogSolid />}
        label="Labs"
      />
    </div>
  );
}
