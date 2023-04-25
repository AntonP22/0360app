import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const Profile = () => {
  return <h1>Это страница с профилем</h1>;
};
const Messages = () => {
  return <h1>Это страница с сообщениями</h1>;
};
const Settings = () => {
  return <h1>Это страница с настройками</h1>;
};
const Freinds = () => {
  return <h1>Мои друзья</h1>;
};

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
