"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const base = `/courses/${cid}`;

  const isActive = (linkName: string) => {
    const linkPath = linkName.toLowerCase();
    if (linkName === "Home") {
      return pathname === base || pathname === `${base}/home`;
    }
    if (linkName === "People") {
      return pathname.includes(`${base}/people`);
    }
    return pathname.includes(`${base}/${linkPath}`);
  };

  const getHref = (linkName: string) => {
    if (linkName === "People") {
      return `${base}/people/table`;
    }
    return `${base}/${linkName.toLowerCase()}`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          href={getHref(link)}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0 ${
            isActive(link)
              ? "border-start border-3 border-dark text-dark bg-light"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
