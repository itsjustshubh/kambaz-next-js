"use client";

import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";

const SEGMENT_NAMES: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  piazza: "Piazza",
  zoom: "Zoom",
  assignments: "Assignments",
  quizzes: "Quizzes",
  grades: "Grades",
  people: "People",
  table: "Table",
};

function formatSegment(segment: string): string {
  return SEGMENT_NAMES[segment.toLowerCase()] ?? segment;
}

export default function CourseHeader({ cid }: { cid: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const courseIndex = segments.indexOf("courses");
  const afterCourse = courseIndex >= 0 ? segments.slice(courseIndex + 2) : [];
  const pageParts = afterCourse.map(formatSegment);
  const breadcrumb = pageParts.length > 0 ? ` > ${pageParts.join(" > ")}` : "";

  return (
    <h2 className="text-danger flex items-center gap-2 flex-wrap">
      <FaAlignJustify className="shrink-0 size-6 mr-4" />
      <span className="text-xl font-bold">Course {cid}</span>
      <span className="text-xl font-medium text-gray-800">{breadcrumb}</span>
    </h2>
  );
}
