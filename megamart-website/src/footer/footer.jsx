import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
        
          <Col md={3} sm={6} className="footer-col">
            <h5>TOP CATEGORIES</h5>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Footwear</li>
              <li>Innerwear</li>
              <li>Accessories</li>
            </ul>
          </Col>

        
          <Col md={3} sm={6} className="footer-col">
            <h5>TOP BRANDS</h5>
            <ul>
              <li>U.S. Polo Assn.</li>
              <li>Arrow</li>
              <li>Flying Machine</li>
              <li>Tommy Hilfiger</li>
              <li>Calvin Klein</li>
              <li>AD By Arvind</li>
            </ul>
          </Col>

         
          <Col md={3} sm={6} className="footer-col">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Returns and Cancellation Policy</li>
              <li>Help and FAQs</li>
              <li>Delivery and Shipping Policy</li>
            </ul>
          </Col>

          
          <Col md={3} sm={6} className="footer-col">
            <h5>CONTACT US</h5>
            <ul className="contact-info">
              <li>
                <FaPhoneAlt /> +91-9740542174
              </li>
              <li>
                <MdEmail /> care@megamartfashions.com
              </li>
              <li>
                <BiMessageDetail /> Message Us
              </li>
            </ul>
          </Col>
        </Row>

       
        <Row className="mt-4">
          <Col md={12}>
            <h5>DOWNLOAD THE APP</h5>
            <div className="app-links">
             
             <img src="./src/assets/img/google.png"></img>
             <img src="./src/assets/img/app.png"></img>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="text-center">
            <p className="copyright">
               MegaMart. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
 );
};
 {/* <Navbar expand="lg" className='main'>
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
                        <Nav.Link href="#account"><VscAccount /></Nav.Link>
                        <Nav.Link href="#wishlist"><CiHeart /></Nav.Link>
                        <Nav.Link href="#cart"><CiShoppingCart /></Nav.Link>
                        <Link to="/AddProduct" className="btn btn-warning ms-2">
                            Add Product
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar bg="light" className="second-header">
                <Container fluid className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#">Men</Nav.Link>
                        <Nav.Link href="#">Women</Nav.Link>
                        <Nav.Link href="#">Kids</Nav.Link>
                        <Nav.Link href="#">Footwear</Nav.Link>
                        <Nav.Link href="#">Innerwear</Nav.Link>
                        <Nav.Link href="#">Accessories</Nav.Link>
                        <Nav.Link href="#">Brands</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
             */}


 

export default Footer;
