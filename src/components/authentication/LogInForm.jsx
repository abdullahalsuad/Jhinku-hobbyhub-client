import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LogInForm = ({ handleSignin, error, isLoading, handleGoogleSignIn }) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md border border-gray-300">
          <h2 className="text-3xl font-bold text-center text-[#00224D] mb-6">
            Login
          </h2>

          <form onSubmit={handleSignin}>
            {/* Email Input */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1f5490] text-white py-3 rounded-lg font-semibold hover:bg-[#00224D] transition duration-300 cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full animate-pulse bg-[#C68EFD]"></div>
                  <div className="w-4 h-4 rounded-full animate-pulse bg-[#C68EFD]"></div>
                  <div className="w-4 h-4 rounded-full animate-pulse bg-[#C68EFD]"></div>
                </div>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition duration-300 text-gray-700 cursor-pointer"
          >
            <FcGoogle />
            <span>Continue with Google</span>
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#1f5490] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
