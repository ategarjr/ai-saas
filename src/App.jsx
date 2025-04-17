import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
