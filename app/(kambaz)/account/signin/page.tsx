import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{ maxWidth: 400 }}>
      <h1>Sign In</h1>
      <FormControl
        id="wd-username"
        placeholder="Username"
        className="mb-2"
        defaultValue="alice"
      />
      <FormControl
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        defaultValue="123"
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2 d-block text-center text-decoration-none"
      >
        Sign In
      </Link>
      <Link href="/account/signup" id="wd-signup-link">
        Sign Up
      </Link>
    </div>
  );
}
