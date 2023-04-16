import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav>
      <div className="navbar bg-base-200">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"register"}>
          Register
        </Link>

        <p>
          {user ? (
            <>
              <span>{user.email}</span>
              {
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost normal-case text-xl"
                >
                  LogOut
                </button>
              }
              <Link
                className="btn btn-ghost normal-case text-xl"
                to={"/profile"}
              >
                Profile
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link className="btn btn-ghost normal-case text-xl" to={"signIn"}>
                SignIn
              </Link>
            </>
          )}
        </p>
      </div>
    </nav>
  );
};

export default Header;
