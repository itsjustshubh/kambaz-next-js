"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const links = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: LiaCogSolid },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroupItem
        id="wd-neu-link"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        action
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/account"
        id="wd-account-link"
        className={`text-center border-0 ${
          pathname.includes("account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("account") ? "text-danger" : "text-white"}`}
        />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          as={Link}
          href={link.path}
          id={`wd-${link.label.toLowerCase()}-link`}
          className={`bg-black text-center border-0 ${
            pathname.includes(link.label.toLowerCase())
              ? "text-danger bg-white"
              : "text-white bg-black"
          }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}