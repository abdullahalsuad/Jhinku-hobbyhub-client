import { use, useState } from "react";

import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import LogInForm from "../components/authentication/LogInForm";

const LoginPage = () => {
  const { logIn, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Get form values
    const formValue = e.target;
    const email = formValue.email.value;
    const password = formValue.password.value;

    // Input validation
    if (!email || !password) {
      toast.warning("Please fill all fields.");
      setError("Please fill all fields.");
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Sign in
    try {
      await logIn(email, password);
      e.target.reset();
      toast.success("Login successful. Welcome back!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // Map Firebase error codes to user-friendly messages
      const errorMessages = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        default: error.message,
      };
      const errorMessage = errorMessages[error.code] || errorMessages.default;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful. Welcome back!");
    } catch (error) {
      // Map Firebase error codes to friendly messages
      const errorMessages = {
        "auth/popup-closed-by-user": "Popup closed. Please try again.",
        "auth/cancelled-popup-request":
          "Another popup was opened. Please try again.",
        "auth/invalid-credential": "Failed to authenticate with Google.",
        default: "Something went wrong. Please try again.",
      };
      const errorMessage = errorMessages[error.code] || errorMessages.default;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* UI  */}
      <LogInForm
        handleSignin={handleSignin}
        error={error}
        isLoading={isLoading}
        handleGoogleSignIn={handleGoogleSignIn}
      />
    </>
  );
};

export default LoginPage;
