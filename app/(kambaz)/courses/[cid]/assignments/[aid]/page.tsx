"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Row className="mb-3">
          <Col>
            <FormGroup>
              <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
              <FormControl
                id="wd-name"
                className="form-control"
                defaultValue={assignment.title}
                placeholder="Assignment Name"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <FormGroup>
              <FormLabel htmlFor="wd-description">Description</FormLabel>
              <FormControl
                as="textarea"
                id="wd-description"
                className="form-control"
                rows={10}
                defaultValue={assignment.description}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-points">Points</FormLabel>
              <FormControl
                type="number"
                id="wd-points"
                className="form-control"
                defaultValue={assignment.points}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-assignment-group">
                Assignment Group
              </FormLabel>
              <FormSelect
                id="wd-assignment-group"
                defaultValue="ASSIGNMENTS"
                className="form-control"
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </FormSelect>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-display-grade-as">
                Display Grade as
              </FormLabel>
              <FormSelect
                id="wd-display-grade-as"
                defaultValue="Percentage"
                className="form-control"
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter">Letter</option>
              </FormSelect>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-submission-type">
                Submission Type
              </FormLabel>
              <FormSelect
                id="wd-submission-type"
                defaultValue="Online"
                className="form-control"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </FormSelect>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <FormGroup>
              <FormLabel>Online Entry Options</FormLabel>
              <div className="ps-2">
                <FormCheck
                  type="checkbox"
                  id="wd-online-text-entry"
                  label="Text Entry"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-online-website-url"
                  label="Website URL"
                  defaultChecked
                />
                <FormCheck
                  type="checkbox"
                  id="wd-online-media-recording"
                  label="Media Recording"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-online-student-annotation"
                  label="Student Annotation"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-online-file-upload"
                  label="File Uploads"
                />
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
              <FormControl
                id="wd-assign-to"
                className="form-control"
                defaultValue="Everyone"
                placeholder="Everyone"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-due-date">Due</FormLabel>
              <FormControl
                type="date"
                id="wd-due-date"
                className="form-control"
                defaultValue={assignment.dueDate}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
              <FormControl
                type="date"
                id="wd-available-from"
                className="form-control"
                defaultValue={assignment.availableFrom}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FormGroup>
              <FormLabel htmlFor="wd-available-until">Until</FormLabel>
              <FormControl
                type="date"
                id="wd-available-until"
                className="form-control"
                defaultValue={assignment.availableUntil}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr />
            <div className="d-flex gap-2 float-end">
              <Link href={`/courses/${cid}/assignments`}>
                <Button variant="secondary">Cancel</Button>
              </Link>
              <Link href={`/courses/${cid}/assignments`}>
                <Button variant="danger">Save</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
