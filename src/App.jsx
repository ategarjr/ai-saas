import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <div className="wrapper">
            <AppRoutes />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
