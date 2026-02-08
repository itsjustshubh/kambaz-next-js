"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const base = `/courses/${cid}`;
  const isActive = (path: string, exact = false) =>
    exact ? pathname === path : pathname === path || pathname.startsWith(path + "/");
  const linkClass = (path: string, exact = false) =>
    `list-group-item border-0 ${isActive(path, exact) ? "border-start border-3 border-dark text-dark bg-light" : "text-danger"}`;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`${base}/home`}
        id="wd-course-home-link"
        className={linkClass(`${base}/home`, true)}
      >
        Home
      </Link>
      <Link
        href={`${base}/modules`}
        id="wd-course-modules-link"
        className={linkClass(`${base}/modules`)}
      >
        Modules
      </Link>
      <Link
        href={`${base}/piazza`}
        id="wd-course-piazza-link"
        className={linkClass(`${base}/piazza`)}
      >
        Piazza
      </Link>
      <Link
        href={`${base}/zoom`}
        id="wd-course-zoom-link"
        className={linkClass(`${base}/zoom`)}
      >
        Zoom
      </Link>
      <Link
        href={`${base}/assignments`}
        id="wd-course-assignments-link"
        className={linkClass(`${base}/assignments`)}
      >
        Assignments
      </Link>
      <Link
        href={`${base}/quizzes`}
        id="wd-course-quizzes-link"
        className={linkClass(`${base}/quizzes`)}
      >
        Quizzes
      </Link>
      <Link
        href={`${base}/grades`}
        id="wd-course-grades-link"
        className={linkClass(`${base}/grades`)}
      >
        Grades
      </Link>
      <Link
        href={`${base}/people/table`}
        id="wd-course-people-link"
        className={linkClass(`${base}/people`)}
      >
        People
      </Link>
    </div>
  );
}
