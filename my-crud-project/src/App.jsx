// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HEADER from "./componets/header/header";
import UsersTable from "./componets/header/usertable";
import UserForm from "./componets/header/from";

function App() {
  return (
    <Router>
      <HEADER />
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path="/create" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
