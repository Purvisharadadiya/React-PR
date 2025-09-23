import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoStarSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import './card.css'
function CRAD() {

  const products = [
    { id: 1, title: "Shrimp Foods", price: "$35.00", imgs: "/src/assets/img/img1.jpg" },
    { id: 2, title: "French mayos", price: "$15.00", imgs: "/src/assets/img/item-2.jpg" },
    { id: 3, title: "Cheese pizza", price: "$25.00", imgs: "/src/assets/img/item-3.jpg" },
    { id: 4, title: "Bussion rolls", price: "$20.00", imgs: "/src/assets/img/item-4.jpg" },
    { id: 5, title: "Seafood burger", price: "$12.00", imgs: "/src/assets/img/item-5.jpg" },
    { id: 6, title: "Sandwish soup", price: "$10.00", imgs: "/src/assets/img/item-6.jpg" },
  ];

  return (
    <>
      <Container className="my-4">
        <div className="d-flex justify-content-between align-items-center mb-4 filter-bar">
          <Button className="filter-btn"><IoFilter size={30} /> FILTER</Button>

          <div className="d-flex align-items-center">
            <span className="results-text me-3">
              Showing all {products.length} results
            </span>
            <DropdownButton id="dropdown-basic-button" title="Default Sorting" variant="light" className="sort-dropdown"
            >
              <Dropdown.Item href="#/action-1">Sort by Popularity</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sort by Price: Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sort by Price: High to Low</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </Container>
      <Container className='my-4'>
      <Row>
        {products.map((item) => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card className="shadow-sm food-card">

              <Card.Img variant="top" src={item.imgs} />


              <Card.Body className="d-flex gap-5 align-items-center">
                <Card.Title className="mb-0">
                  <a href="#" className="text-dark text-decoration-none">
                    {item.title}
                  </a>
                </Card.Title>
                <span className="price">{item.price}</span>
              </Card.Body>


              <Card.Body className="pt-0">
                <div className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
              </Card.Body>


              <Card.Body className="pt-0">
                <Card.Text className="desc">
                 All the Lorem Ipsum generators on the Internet tend to repeat
                </Card.Text>
              </Card.Body>

              <Card.Body className="pt-0">
                <Button className="w-100% order-btn">
                  <LuShoppingCart style={{ marginRight: "6px" }} /> ORDER NOW
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
</Container>
        <div className="pagination">
        <span className="page active">1</span>
        <span className="page">2</span>
        <span className="page">&gt;</span>
      </div>
    </>
  );
}

export default CRAD;
