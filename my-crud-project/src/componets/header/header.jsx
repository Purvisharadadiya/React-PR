import { Link } from "react-router-dom";
import "./header.css";

function HEADER() {
  return (
    <div className="header">
      <div className="header-left">
        <span className="menu-icon">&#9776;</span>
        <span className="title">CRUD</span>
      </div>
      <div className="header-right">
        <Link to="/create">
          <button>CREATE</button>
        </Link>
      </div>
    </div>
  );
}

export default HEADER;
