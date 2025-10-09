import Carousel from 'react-bootstrap/Carousel';
import Card from '../Eventcard/Eventcard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Showmoivecard from '../Showmoivecard/Showmoivecard';
import Eventcard from '../Eventcard/Eventcard';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <>
          
            <Carousel>
                <Carousel.Item>
                    <img src='./src/Image/slider1.jpeg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='./src/Image/slider2.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='./src/Image/slider3.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>

                </Carousel.Item>
            </Carousel>
           
            <Showmoivecard />
            <Eventcard />

            <Footer></Footer>



        </>
    )
}

export default Home;