import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Zapto</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                       <Link to={'/addProduct'} className='btn bg-warning' >Add Product</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;