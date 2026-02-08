import Link from "next/link";
import {
  Button,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <InputGroup className="flex-grow-1" style={{ maxWidth: "400px" }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        <div className="d-flex gap-2">
          <Button variant="secondary" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <h3
        id="wd-assignments-title"
        className="d-flex align-items-center justify-content-between mt-2 mb-3"
      >
        ASSIGNMENTS 40% of Total
        <Button variant="secondary" size="sm">
          <FaPlus />
        </Button>
      </h3>
      <ListGroup className="mb-4">
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success py-3">
          <div className="flex-grow-1">
            <Link
              href={`/courses/${cid}/assignments/123`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              A1 - ENV + HTML
            </Link>
            <div className="text-muted small">
              Multiple Modules | Not available until Jan 1 at 12:00am | Due Jan
              15 at 11:59pm | 100 pts
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success py-3">
          <div className="flex-grow-1">
            <Link
              href={`/courses/${cid}/assignments/124`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              A2 - CSS + BOOTSTRAP
            </Link>
            <div className="text-muted small">
              Multiple Modules | Not available until Jan 8 at 12:00am | Due Jan
              22 at 11:59pm | 100 pts
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success py-3">
          <div className="flex-grow-1">
            <Link
              href={`/courses/${cid}/assignments/125`}
              className="wd-assignment-link fw-bold text-danger text-decoration-none"
            >
              A3 - JAVASCRIPT + REACT
            </Link>
            <div className="text-muted small">
              Multiple Modules | Not available until Jan 15 at 12:00am | Due Jan
              29 at 11:59pm | 100 pts
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      <h3 className="d-flex align-items-center justify-content-between">
        QUIZZES 10% of Total
        <Button variant="secondary" size="sm">
          <FaPlus />
        </Button>
      </h3>
      <ListGroup className="mb-4">
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success">
          <Link
            href={`/courses/${cid}/assignments/q1`}
            className="wd-assignment-link fw-bold text-danger text-decoration-none"
          >
            Q1 - HTML Basics
          </Link>
        </ListGroupItem>
      </ListGroup>

      <h3 className="d-flex align-items-center justify-content-between">
        EXAMS 20% of Total
        <Button variant="secondary" size="sm">
          <FaPlus />
        </Button>
      </h3>
      <ListGroup className="mb-4">
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success">
          <Link
            href={`/courses/${cid}/assignments/midterm`}
            className="wd-assignment-link fw-bold text-danger text-decoration-none"
          >
            Midterm
          </Link>
        </ListGroupItem>
      </ListGroup>

      <h3 className="d-flex align-items-center justify-content-between">
        PROJECT 30% of Total
        <Button variant="secondary" size="sm">
          <FaPlus />
        </Button>
      </h3>
      <ListGroup>
        <ListGroupItem className="d-flex align-items-start border-0 border-start border-4 border-success">
          <Link
            href={`/courses/${cid}/assignments/project`}
            className="wd-assignment-link fw-bold text-danger text-decoration-none"
          >
            Final Project
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
