import { Container, Row } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router";
import { signOutAsync } from "../../services/action/Authencation";
import { useDispatch, useSelector } from "react-redux";

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
              <h1 className="fw-bold m-0">MegaMart</h1>
            </Link>
          </div>

          
          <div className="col-4 d-flex justify-content-center">
            <div className="search-button position-relative">
              <input
                type="text"
                className="search-input"
                placeholder="Search for products..."
              />
              <img
                src="./src/img/search-interface-symbol.png"
                alt="search"
                className="search-icon"
              />
            </div>
          </div>

        
          <div className="col-4 d-flex justify-content-end align-items-center cart-button">
            <img src="./src/img/location.png" alt="location" height={20} />
            <img src="./src/img/heart.png" alt="heart" height={20} />

            {user ? (
              <>
                <Link to="/addproduct" className="btn btn-outline-primary btn-sm">
                  + Add Product
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <small className="text-muted">{user.email}</small>
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger btn-sm mt-1"
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

      
      <Container fluid className="cart-menu py-2">
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <div className="menu d-flex">
              <ul className="d-flex gap-4 pt-2 align-items-center">
                <Link to="/Men" className="text-decoration-none">
                  <li>Men</li>
                </Link>
                <Link to="/Women" className="text-decoration-none">
                  <li>Women</li>
                </Link>
                <Link to="/Kids" className="text-decoration-none">
                  <li>Kids</li>
                </Link>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
