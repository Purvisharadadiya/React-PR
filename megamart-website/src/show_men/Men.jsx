import { Card, Row, Col, Container, Button, Form, Accordion } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteproduct } from "../srvices/action/action";
import { useNavigate } from "react-router";
import { useState } from "react";

const MenCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products = [], isLoading } = useSelector(
    (state) => state.productReducer || state
  );

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    sizes: [],
    minPrice: "",
    maxPrice: "",
    sort: "",
  });

  const handleToggle = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const handleSortChange = (e) =>
    setFilters({ ...filters, sort: e.target.value });

  const handlePriceChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleDelete = (id) => dispatch(deleteproduct(id));
  const handleEdit = (id) => navigate(`/edit-product/${id}`);

  const filteredProducts = products
    .filter((p) =>
      filters.categories.length
        ? filters.categories.includes(p.category)
        : true
    )
    .filter((p) =>
      filters.brands.length ? filters.brands.includes(p.brand) : true
    )
    .filter((p) =>
      filters.sizes.length ? filters.sizes.some((s) => p.size?.includes(s)) : true
    )
    .filter((p) => (filters.minPrice ? p.price >= +filters.minPrice : true))
    .filter((p) => (filters.maxPrice ? p.price <= +filters.maxPrice : true))
    .sort((a, b) => {
      if (filters.sort === "lowToHigh") return a.price - b.price;
      if (filters.sort === "highToLow") return b.price - a.price;
      return 0;
    });

  const categoryOptions = ["Blazers", "Cargos", "Chinos", "Jackets", "Joggers"];
  const brandOptions = ["AD BY Arvind", "Arrow", "Calvin Klein", "Tommy Hilfiger", "Levi's"];
  const sizeOptions = [26,28,30,32,34,36];

  return (
    <Container fluid className="mt-4">
      <Row>
        
        <Col md={3} className="border-end pe-3">
          <h4 className="mb-3">HOME/MEN</h4>

          <Accordion defaultActiveKey="0" alwaysOpen>
          
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                {categoryOptions.map((cat) => (
                  <Form.Check
                    key={cat}
                    type="checkbox"
                    label={cat}
                    checked={filters.categories.includes(cat)}
                    onChange={() => handleToggle("categories", cat)}
                    className="mb-1"
                  />
                ))}
              </Accordion.Body>
            </Accordion.Item>

          
            <Accordion.Item eventKey="1">
              <Accordion.Header>Brand</Accordion.Header>
              <Accordion.Body>
                {brandOptions.map((brand) => (
                  <Form.Check
                    key={brand}
                    type="checkbox"
                    label={brand}
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleToggle("brands", brand)}
                    className="mb-1"
                  />
                ))}
              </Accordion.Body>
            </Accordion.Item>

            
            <Accordion.Item eventKey="2">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                {sizeOptions.map((size) => (
                  <Form.Check
                    key={size}
                    type="checkbox"
                    label={size}
                    checked={filters.sizes.includes(size)}
                    onChange={() => handleToggle("sizes", size)}
                    className="mb-1"
                  />
                ))}
              </Accordion.Body>
            </Accordion.Item>

           
            <Accordion.Item eventKey="3">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex mb-2">
                  <Form.Control
                    type="number"
                    placeholder="Min"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handlePriceChange}
                    className="me-2"
                  />
                  <Form.Control
                    type="number"
                    placeholder="Max"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>

            
            <Accordion.Item eventKey="4">
              <Accordion.Header>Sort by Price</Accordion.Header>
              <Accordion.Body>
                <Form.Select
                  name="sort"
                  value={filters.sort}
                  onChange={handleSortChange}
                >
                  <option value="">Default</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </Form.Select>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Button
            variant="secondary"
            className="w-100 mt-3"
            onClick={() =>
              setFilters({
                categories: [],
                brands: [],
                sizes: [],
                minPrice: "",
                maxPrice: "",
                sort: "",
              })
            }
          >
            Reset Filters
          </Button>
        </Col>

       
        <Col md={9}>
          
          {isLoading ? (
            <h4 className="text-center">Loading...</h4>
          ) : filteredProducts.length === 0 ? (
            <h5 className="text-center text-muted">No products available</h5>
          ) : (
            <Row className="g-4">
              {filteredProducts.map((p) => (
                <Col key={p.id} sm={12} md={6} lg={4}>
                  <Card className="shadow-sm border-0 h-100 card-hover">
                    <Card.Img
                      variant="top"
                      src={p.img}
                      style={{ height: "230px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text className="text-muted small">
                        {p.description?.slice(0, 60)}...
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                          <span className="fw-bold text-success">₹{p.price}</span>
                          <div className="text-muted small">{p.brand}</div>
                          <div className="text-muted small">{p.size}</div>
                          

                        </div>
                        <div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(p.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(p.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MenCard;
