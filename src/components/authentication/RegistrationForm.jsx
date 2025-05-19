import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const RegistrationForm = ({
  handleRegistration,
  showPassword,
  setShowPassword,
  error,
  isLoading,
  handleGoogleSignIn,
}) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
        <div className="bg-white  border border-gray-300 rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#00224D] mb-6">
            Register
          </h2>

          <form onSubmit={handleRegistration}>
            {/* Name Input */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Jhinku Suad"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="jhinku@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Photo URL Input */}
            <div className="mb-5">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="url"
                name="photoURL"
                required
                placeholder="https://example.com/photo.jpg "
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
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 focus:outline-none cursor-pointer text-[#1f5490]"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
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
                "Create Account"
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Register Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition duration-300 text-gray-700 cursor-pointer"
            >
              <FcGoogle />
              <span>Sign up with Google</span>
            </button>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1f5490] hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
