 
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Eventcard.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Eventcard = () => {
  const [showdata, setshowdata] = useState([
    { id: 1, image: "./src/Image/event1.jpeg" },
    { id: 2, image: "./src/Image/event2.jpeg" },
    { id: 3, image: "./src/Image/event3.png" },
    { id: 4, image: "./src/Image/event4.png" },
    { id: 5, image: "./src/Image/event5.png" },
    { id: 6, image: "./src/Image/event6.png" },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,  
  };

  return (
    <section className="slider-moive" style={{ overflow: "hidden" }}>
      <h2 className="ms-3">The Best Of Live Events</h2>
    
        <Row className="justify-content-center">
          <Col xs={12}>
            <Slider {...settings}>
              {showdata.map((v) => (
                <div key={v.id} className="slide-item" style={{ padding: "0 10px" }}>
                  <img
                    src={v.image}
                    style={{
                      height: "200px",
                      width: "90%",
                      objectFit: "cover",
                      objectPosition:"top",
                      borderRadius: "10px",
                      margin:"0px auto"  
                    }}
                    alt="movie"
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      
    </section>
  );
};

export default Eventcard;
