import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthProviderContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <header className="bg-[#1C2B35] h-20 px-[10%] flex justify-between items-center">
      <img src={logo} alt="" />
      <nav className="text-white text-lg space-x-8">
        <Link to={"/"}>Shop</Link>
        <Link to={"/order"}>Order</Link>
        <Link to={"/inventory"}>Manage Inventory</Link>

        {user ? (
          <>
            <small>welcome {user.email}</small>{" "}
            <Link onClick={handleLogOut}>Logout</Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>{" "}
            <Link to={"/sign-up"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
