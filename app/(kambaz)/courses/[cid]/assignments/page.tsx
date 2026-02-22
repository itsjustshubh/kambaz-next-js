"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import * as db from "../../../database";

function SectionControls() {
  return (
    <div className="float-end">
      <FaCheckCircle className="text-success me-1" />
      <FaPlus className="ms-1" />
      <FaEllipsisV className="ms-1 fs-4" />
    </div>
  );
}

function ItemControls() {
  return (
    <div className="float-end">
      <FaCheckCircle className="text-success me-1" />
      <FaEllipsisV className="ms-1 fs-4" />
    </div>
  );
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments">
      <div className="text-nowrap mb-4">
        <div
          className="input-group flex-grow-1 d-inline-block"
          style={{ maxWidth: "400px" }}
        >
          <span className="input-group-text">
            <FaSearch />
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
          <FaPlus
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
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS
          <SectionControls />
        </div>
        <ul className="list-group wd-lessons rounded-0">
          {assignments.map((a: any) => (
            <li
              key={a._id}
              className="list-group-item wd-lesson p-3 ps-1 border-0"
            >
              <BsGripVertical className="me-2 fs-3" />
              <Link
                href={`/courses/${cid}/assignments/${a._id}`}
                className="wd-assignment-link fw-bold text-danger text-decoration-none"
              >
                {a.title}
              </Link>
              <span className="text-secondary small ms-1">
                Multiple Modules | Not available until {a.availableFrom} | Due{" "}
                {a.dueDate} | {a.points} pts
              </span>
              <ItemControls />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
