"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { Button, Form } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const signout = () => {
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  return (
    <div id="wd-profile-screen" style={{ maxWidth: 500 }}>
      <h3>Profile</h3>
      {profile && (
        <div>
          <Form.Control
            id="wd-username"
            className="mb-2"
            value={profile.username ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <Form.Control
            id="wd-password"
            className="mb-2"
            value={profile.password ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            type="password"
          />
          <Form.Control
            id="wd-firstname"
            className="mb-2"
            value={profile.firstName ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <Form.Control
            id="wd-lastname"
            className="mb-2"
            value={profile.lastName ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <Form.Control
            id="wd-dob"
            className="mb-2"
            type="date"
            value={profile.dob ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })
            }
          />
          <Form.Control
            id="wd-email"
            className="mb-2"
            value={profile.email ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />
          <select
            className="form-control mb-2"
            id="wd-role"
            value={profile.role ?? "USER"}
            onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })
            }
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <Button
            onClick={signout}
            className="w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
