import Link from "next/link";
import { Form, FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: 500 }}>
      <h1>Profile</h1>
      <Form>
        <FormControl
          type="text"
          defaultValue="alice"
          placeholder="Username"
          className="wd-username mb-2"
        />
        <FormControl
          defaultValue="123"
          placeholder="Password"
          type="password"
          className="wd-password mb-2"
        />
        <FormControl
          type="text"
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className="mb-2"
        />
        <FormControl
          type="text"
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className="mb-2"
        />
        <FormControl
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className="mb-2"
        />
        <FormControl
          defaultValue="alice@wonderland.com"
          type="email"
          id="wd-email"
          placeholder="Email"
          className="mb-2"
        />
        <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>
        <Link href="/account/signin">
          <Button variant="danger">Sign Out</Button>
        </Link>
      </Form>
    </div>
  );
}
