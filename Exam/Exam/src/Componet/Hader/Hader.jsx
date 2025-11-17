import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
;
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync } from "../../service/ation/athencation";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(signOutAsync());
  };

  return (
    <>
     
      <Container fluid className="header py-3 shadow-sm bg-white">
        <Row className="align-items-center justify-content-between">

        
          <div className="col-4 d-flex align-items-center">
            <Link to="/" className="logo text-decoration-none">
              <h1 className="fw-bold m-0">BLOG</h1>
            </Link>
          </div>

          
          <div className="col-4 d-flex justify-content-center">
            <div className="search-button position-relative">
              <input
                type="text"
                className="search-input"
                placeholder="Search blogs..."
              />
              <img
                src="./src/img/search-interface-symbol.png"
                alt="search"
                className="search-icon"
              />
            </div>
          </div>

          
          <div className="col-4 d-flex justify-content-end align-items-center gap-3">

            <img src="./src/img/location.png" alt="location" height={20} />
            <img src="./src/img/heart.png" alt="heart" height={20} />

           
            {user ? (
              <>
              
                <Link to="/AddBLOG" className="btn btn-outline-primary btn-sm">
                  + Add Blog
                </Link>

              
                <div className="d-flex flex-column align-items-end">
                  <small className="text-muted">{user.email}</small>

                  <button
                    className="btn btn-danger btn-sm mt-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to="/signIn" className="btn btn-warning btn-sm">
                Sign In
              </Link>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
