import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import RegisterUserForm from "./component/RegisterUserForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-user" element={<RegisterUserForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
