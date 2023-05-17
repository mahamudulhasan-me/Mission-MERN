import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
  const { logInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        alert(`welcome ${user.displayName}`);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-80 mx-auto  my-20">
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-2 text-2xl bg-violet-600 py-3 rounded-md text-white"
      >
        <FcGoogle /> Sign In With Google
      </div>
    </div>
  );
};

export default SignIn;
