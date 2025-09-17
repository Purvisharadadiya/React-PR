import "./from.css";

function UserForm() {
  return (
    <div className="form-container">
      <h2>Create User</h2>
      <form>
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Username *</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Avatar URL</label>
          <input type="text" />
        </div>
        <button type="submit" className="btn-create">CREATE</button>
      </form>
    </div>
  );
}

export default UserForm;
