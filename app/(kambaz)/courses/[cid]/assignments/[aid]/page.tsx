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

const ASSIGNMENT_NAMES: Record<string, string> = {
  "123": "A1 - ENV + HTML",
  "124": "A2 - CSS + BOOTSTRAP",
  "125": "A3 - JAVASCRIPT + REACT",
  q1: "Q1 - HTML Basics",
  midterm: "Midterm",
  project: "Final Project",
};

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignmentName = ASSIGNMENT_NAMES[aid] ?? "Assignment";

  return (
    <div id="wd-assignments-editor" className="p-3">
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href={`/courses/${cid}`}>Course {cid}</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href={`/courses/${cid}/assignments`}>Assignments</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {assignmentName}
          </li>
        </ol>
      </nav>
      <Form>
        <Row className="mb-3">
          <Col>
            <FormGroup>
              <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
              <FormControl
                id="wd-name"
                className="form-control"
                defaultValue="A1 - ENV + HTML"
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
                defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments link to the Kanbas application a link to your GitHub repository"
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
                defaultValue={100}
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
                defaultValue="2024-05-13"
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
                defaultValue="2024-01-01"
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
                defaultValue="2024-12-31"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <FormCheck
              type="checkbox"
              id="wd-available"
              label="Available"
              defaultChecked
              className="mb-2"
            />
            <FormCheck
              type="checkbox"
              id="wd-published"
              label="Published"
              defaultChecked
              className="mb-4"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="d-flex gap-2">
              <Button variant="secondary">Cancel</Button>
              <Button variant="danger">Save</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
