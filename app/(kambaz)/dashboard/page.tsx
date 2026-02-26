"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { RootState } from "../store";
import * as db from "../database";

const defaultCourse = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  image: "/images/reactjs.jpg",
  description: "New Description",
};

export default function Dashboard() {
  const { courses } = useSelector(
    (state: RootState) => state.coursesReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>(defaultCourse);

  const enrolledCourseIds =
    currentUser && db.enrollments
      ? db.enrollments
          .filter((e: any) => e.user === currentUser._id)
          .map((e: any) => e.course)
      : [];
  const displayedCourses = currentUser
    ? courses.filter((c: any) => enrolledCourseIds.includes(c._id))
    : courses;

  const addNewCourseHandler = () => {
    dispatch(addNewCourse(course));
  };

  const updateCourseHandler = () => {
    dispatch(updateCourse(course));
  };

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <Button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourseHandler}
        >
          Add
        </Button>
        <Button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={updateCourseHandler}
        >
          Update
        </Button>
      </h5>
      <br />
      <Form.Control
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <Form.Control
        value={course.description}
        rows={3}
        as="textarea"
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c: any) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/courses/${c._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src={(c as any).image || "/images/reactjs.jpg"}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    <Button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setCourse(c);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        dispatch(deleteCourse(c._id));
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
