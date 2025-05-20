import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/navFooter/Navbar";
import Footer from "./components/navFooter/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <>
        <div className="min-h-screen flex flex-col bg-[#F2F9FF]">
          {/* Navbar and main content */}
          <div className="flex-grow">
            <div className="">
              <Navbar />
              <hr className="text-gray-700" />
            </div>

            {/* Main Content */}
            <div className="mb-20">
              <Outlet />
            </div>
          </div>

          {/* Footer */}

          <Footer />
        </div>

        {/* toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </>
  );
}

export default App;
