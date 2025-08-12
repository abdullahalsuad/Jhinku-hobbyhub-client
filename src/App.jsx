import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/navFooter/Navbar";
import Footer from "./components/navFooter/Footer";
import { ToastContainer } from "react-toastify";
import FetchDataProvider from "./context/FetchDataProvider";

function App() {
  return (
    <>
      <>
        <div className="min-h-screen   bg-[#F2F9FF]">
          {/* Navbar and main content */}
          <div>
            <div>
              <Navbar />
              <hr className="text-gray-700" />
            </div>

            {/* Main Content */}
            <div>
              <FetchDataProvider>
                <Outlet />
              </FetchDataProvider>
            </div>
          </div>

          {/* Footer */}

          <div>
            <Footer />
          </div>
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
