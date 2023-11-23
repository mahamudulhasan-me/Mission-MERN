import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialSignin = ({ path }) => {
  const { logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName}`);
        navigate(path);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          userUid: user.uid,
        };
        fetch(`https://bristo-boss-server-psi.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(path);
            }
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="mt-5">
      <p className="text-center text-sm font-semibold mb-2">Or sign in with</p>
      <div className="flex justify-center items-center gap-5">
        <FaFacebookF className="social-login-icon" />
        <FaGoogle className="social-login-icon" onClick={handleGoogleLogIn} />
        <FaGithub className="social-login-icon" />
      </div>
    </div>
  );
};

export default SocialSignin;
