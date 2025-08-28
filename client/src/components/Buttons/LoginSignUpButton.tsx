import { useNavigate, useLocation } from "react-router-dom";

const LoginSignUpButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSignUpActive = location.pathname === "/user/signup";
  const isLoginActive = location.pathname === "/user/login";

  return (
    <div className="flex gap-2 py-2">
      <button
        onClick={() => navigate("/user/signup")}
        className={`border font-semibold px-4 py-2 rounded-full cursor-pointer duration-300 hover:scale-105 ${
          isSignUpActive
            ? "bg-indigo-700 text-white shadow-lg"
            : "bg-white text-indigo-600 hover:bg-indigo-200"
        }`}
      >
        Sign Up
      </button>
      <button
        onClick={() => navigate("/user/login")}
        className={`font-semibold border border-indigo-600 px-4 py-2 rounded-full cursor-pointer duration-300 hover:scale-105 ${
          isLoginActive
            ? "bg-indigo-700 text-white shadow-lg"
            : "bg-white text-indigo-600 hover:bg-indigo-200"
        }`}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginSignUpButton;
