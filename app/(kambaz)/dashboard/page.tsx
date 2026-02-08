import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

const courses = [
  {
    id: "1234",
    title: "CS1234 React JS",
    desc: "Full Stack software developer",
    img: "/images/reactjs.jpg",
  },
  {
    id: "5678",
    title: "CS5678 Node.js",
    desc: "Server-side JavaScript development",
    img: "/images/reactjs.jpg",
  },
  {
    id: "9012",
    title: "CS9012 MongoDB",
    desc: "Database management and design",
    img: "/images/reactjs.jpg",
  },
  {
    id: "3456",
    title: "CS3456 TypeScript",
    desc: "Typed JavaScript development",
    img: "/images/reactjs.jpg",
  },
  {
    id: "7890",
    title: "CS7890 Express.js",
    desc: "Web application framework",
    img: "/images/reactjs.jpg",
  },
  {
    id: "2468",
    title: "CS2468 Next.js",
    desc: "React framework for production",
    img: "/images/reactjs.jpg",
  },
  {
    id: "1357",
    title: "CS1357 GraphQL",
    desc: "Query language for APIs",
    img: "/images/teslabot.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {courses.map((c) => (
            <Col
              key={c.id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/courses/${c.id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <div
                    className="card-img-top"
                    style={{ height: 160, overflow: "hidden" }}
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.desc}
                    </CardText>
                    <Button variant="primary">Go</Button>
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
