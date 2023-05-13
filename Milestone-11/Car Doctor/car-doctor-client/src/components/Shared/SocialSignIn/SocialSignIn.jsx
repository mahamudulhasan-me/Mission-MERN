import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialSignIn = ({ signUpPage, setSignUpPage }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName}`);
        navigate(path);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="text-center font-semibold mt-8">
      <p>Or Sign In with</p>
      <div className="flex justify-center space-x-3 text-xl mt-3 mb-5 ">
        <Link className="bg-[#f3f3f3] p-3 rounded-full text-[#4267B2]">
          <FaFacebookF />
        </Link>
        <Link className="bg-[#f3f3f3] p-3 rounded-full text-[#0A66C2]">
          <FaLinkedinIn />
        </Link>
        <Link
          onClick={handleGoogleSignIn}
          className="bg-[#f3f3f3] p-3 rounded-full "
        >
          <FcGoogle />
        </Link>
      </div>
      <p>
        Haven&apos;t account?{" "}
        <Link
          onClick={() => setSignUpPage(!signUpPage)}
          className="text-primary font-bold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SocialSignIn;
