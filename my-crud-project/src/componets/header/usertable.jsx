import { Link } from "react-router-dom";
import "./usertable.css";

function UsersTable() {
  return (
    <div className="users-container">
      <div className="users-header">
        <h3>USERS</h3>
        <Link to="/create">
          <button className="create-btn">CREATE</button>
        </Link>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First</th>
            <th>Last</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><img src="https://via.placeholder.com/40" alt="avatar" className="avatar" /></td>
            <td>John</td>
            <td>Doe</td>
            <td>johndoe</td>
            <td>
              <button className="edit-btn">EDIT</button>
              <button className="del-btn">DEL</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td><img src="https://via.placeholder.com/40" alt="avatar" className="avatar" /></td>
            <td>Jane</td>
            <td>Smith</td>
            <td>janesmith</td>
            <td>
              <button className="edit-btn">EDIT</button>
              <button className="del-btn">DEL</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
