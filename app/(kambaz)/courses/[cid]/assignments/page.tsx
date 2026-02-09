import Link from "next/link";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
}

function PlusIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
      style={style}
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
  );
}

function GripVerticalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="me-2 fs-3"
      style={{ fontSize: "1.25rem" }}
    >
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
}

function GreenCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="text-success me-1"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
}

function EllipsisVerticalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="fs-4"
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  );
}

const ASSIGNMENTS_LIST = [
  {
    id: "123",
    title: "A1",
    notAvailable: "May 6 at 12:00am",
    due: "May 13 at 11:59pm",
    pts: 100,
  },
  {
    id: "124",
    title: "A2",
    notAvailable: "May 13 at 12:00am",
    due: "May 20 at 11:59pm",
    pts: 100,
  },
  {
    id: "125",
    title: "A3",
    notAvailable: "May 20 at 12:00am",
    due: "May 27 at 11:59pm",
    pts: 100,
  },
];

function SectionControls() {
  return (
    <div className="float-end">
      <GreenCheckIcon />
      <span className="ms-1 align-middle">
        <PlusIcon className="align-middle" />
      </span>
      <span className="ms-1">
        <EllipsisVerticalIcon />
      </span>
    </div>
  );
}

function ItemControls() {
  return (
    <div className="float-end">
      <GreenCheckIcon />
      <span className="ms-1">
        <EllipsisVerticalIcon />
      </span>
    </div>
  );
}

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="text-nowrap mb-4">
        <div
          className="input-group flex-grow-1 d-inline-block"
          style={{ maxWidth: "400px" }}
        >
          <span className="input-group-text">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            aria-label="Search for Assignments"
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg float-end ms-1"
          id="wd-add-assignment"
        >
          <PlusIcon
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg float-end"
          id="wd-add-assignment-group"
        >
          Group
        </button>
      </div>
      <br />
      <br />
      <br />

      <div className="wd-module p-0 mb-5 fs-5 border border-secondary rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <GripVerticalIcon />
          ASSIGNMENTS
          <SectionControls />
        </div>
        <ul className="list-group wd-lessons rounded-0">
          {ASSIGNMENTS_LIST.map((a) => (
            <li
              key={a.id}
              className="list-group-item wd-lesson p-3 ps-1 border-0"
            >
              <GripVerticalIcon />
              <Link
                href={`/courses/${cid}/assignments/${a.id}`}
                className="wd-assignment-link fw-bold text-danger text-decoration-none"
              >
                {a.title}
              </Link>
              <span className="text-secondary small ms-1">
                Multiple Modules | Not available until {a.notAvailable} | Due{" "}
                {a.due} | {a.pts} pts
              </span>
              <ItemControls />
            </li>
          ))}
        </ul>
      </div>

      <div className="wd-module p-0 mb-5 fs-5 border border-secondary rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <GripVerticalIcon />
          QUIZZES
          <SectionControls />
        </div>
        <ul className="list-group wd-lessons rounded-0">
          <li className="list-group-item wd-lesson p-3 ps-1 border-0">
            <GripVerticalIcon />
            <Link
              href={`/courses/${cid}/assignments/q1`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              Q1 - HTML Basics
            </Link>
            <ItemControls />
          </li>
        </ul>
      </div>

      <div className="wd-module p-0 mb-5 fs-5 border border-secondary rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <GripVerticalIcon />
          EXAMS
          <SectionControls />
        </div>
        <ul className="list-group wd-lessons rounded-0">
          <li className="list-group-item wd-lesson p-3 ps-1 border-0">
            <GripVerticalIcon />
            <Link
              href={`/courses/${cid}/assignments/midterm`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              Midterm
            </Link>
            <ItemControls />
          </li>
        </ul>
      </div>

      <div className="wd-module p-0 mb-5 fs-5 border border-secondary rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <GripVerticalIcon />
          PROJECT
          <SectionControls />
        </div>
        <ul className="list-group wd-lessons rounded-0">
          <li className="list-group-item wd-lesson p-3 ps-1 border-0">
            <GripVerticalIcon />
            <Link
              href={`/courses/${cid}/assignments/project`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              Final Project
            </Link>
            <ItemControls />
          </li>
        </ul>
      </div>
    </div>
  );
}
