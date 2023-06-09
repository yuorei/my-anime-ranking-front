import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import UserList from "./component/UserList";
import RegisterUserForm from "./component/RegisterUserForm";
import UserAnimes from "./component/UserAnimes";
import UploadAnimeForm from "./component/UploadAnimeForm";
import Explain from "./component/Explain";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-user" element={<RegisterUserForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/upload-anime" element={<UploadAnimeForm />} />
          <Route path="/:userId/animes" element={<UserAnimes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
