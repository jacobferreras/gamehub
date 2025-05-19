import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <ScrollToTop />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
