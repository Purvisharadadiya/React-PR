import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import './header.css'
function Header () {
  

  return (
    <>
     <Navbar expand="lg" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold">
          Book my Show
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Link to="/Addmovie" className="add-movie-btn">
            Add Movie
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header