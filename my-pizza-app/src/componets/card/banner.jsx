import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './banner.css'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <>
            <section className='team-banner-section'>
                <Container fluid>
                    <Row className='d-flex align-items-center'>
                        <img src='./src/assets/img/onion.png' className='banner-onion-image'></img>
                        <img src='./src/assets/img/banner-leaf.png' className='banner-banner-leaf-image'></img>
                        <img src='./src/assets/img/tamato.png' className='banner-tamato-image'></img>
                        <div className='col-12 col-lg-6'>
                            <div className='banner-content'>
                                <h1>Shop List</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <ul className="banner-menu">
                                <li className='me-3'>
                                    <Link to="/" className='text-decoration-none home-link'>Home</Link>
                                </li> /
                                <li className='ms-3'>
                                    <Link to="/outerteam" className='shop-link'>Shop List</Link>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>

            </section>
        </>
    )
}
export default Banner;