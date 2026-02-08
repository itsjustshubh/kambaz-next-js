import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{ maxWidth: 400 }}>
      <h1>Sign Up</h1>
      <FormControl
        type="text"
        placeholder="Username"
        className="wd-username mb-2"
        defaultValue="alice"
      />
      <FormControl
        placeholder="Password"
        type="password"
        className="wd-password mb-2"
        defaultValue="123"
      />
      <FormControl
        placeholder="Verify password"
        type="password"
        className="wd-password-verify mb-2"
        defaultValue="123"
      />
      <Link
        href="/account/profile"
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2 d-block text-center text-decoration-none"
      >
        Sign Up
      </Link>
      <Link href="/account/signin">Sign In</Link>
    </div>
  );
}
