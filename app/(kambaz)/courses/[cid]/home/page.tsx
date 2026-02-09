import { Row, Col } from "react-bootstrap";
import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <Row id="wd-home-cols">
        <Col lg={3} className="d-none d-lg-block" />
        <Col lg={3} className="d-none d-lg-block" />
        <Col xs={12} lg={3} className="pe-lg-3">
          <Modules />
        </Col>
        <Col xs={12} lg={3} className="d-none d-lg-block">
          <CourseStatus />
        </Col>
      </Row>
    </div>
  );
}
