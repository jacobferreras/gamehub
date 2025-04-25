import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";
import Footer from "./components/common/Footer";
import ValorantAccountScreen from "./pages/ValorantAccountScreen";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </div>

    // <ValorantAccountScreen />
  );
}

export default App;
