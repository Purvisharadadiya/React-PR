import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart, CiHeart, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../assets/img/logo.png';

function Header() {
    return (
        <>
            <Navbar expand="lg" className='main'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="Logo" height={50} />
                    </Navbar.Brand>

                    <Form className="d-flex search-form mx-auto">
                        <Form.Control 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            className="search-input" 
                        />
                        <CiSearch className="search-icon" />
                    </Form>

                    <Nav className="d-flex align-items-center">
                        <Nav.Link as={Link} to="/account"><VscAccount /></Nav.Link>
                        <Nav.Link as={Link} to="/wishlist"><CiHeart /></Nav.Link>
                        <Nav.Link as={Link} to="/cart"><CiShoppingCart /></Nav.Link>
                        <Link to="/AddProduct" className="btn btn-warning ms-2">
                            Add Product
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar bg="light" className="second-header">
                <Container fluid className="justify-content-center">
                    <Nav>
                        <Nav.Link as={Link} to="/MenCard">Men</Nav.Link>
                        <Nav.Link as={Link} to="/Women">Women</Nav.Link>
                        <Nav.Link as={Link} to="/Kids">Kids</Nav.Link>
                        <Nav.Link as={Link} to="/Footwear">Footwear</Nav.Link>
                        <Nav.Link as={Link} to="/Innerwear">Innerwear</Nav.Link>
                        <Nav.Link as={Link} to="/Accessories">Accessories</Nav.Link>
                        <Nav.Link as={Link} to="/Brands">Brands</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}



export default Header;
