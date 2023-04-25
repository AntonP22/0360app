import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Settings } from "./components/Settings";
import { Freinds } from "./components/Freinds";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" to="/profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="/messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="/settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="/freinds">
              Мои друзья
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/freinds" element ={<Freinds />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
