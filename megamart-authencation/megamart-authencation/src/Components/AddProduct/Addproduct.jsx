import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAsync } from "../../services/action/productAction";
import { useNavigate } from "react-router";
import "./Addproduct.css";

const Addproduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const { products, isError, isCreated } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

 
  const initialState = {
    id: "",
    pname: "",
    desc: "",
    img: "",
    price: "",
    brand: "",
    category: "",
    mainCategory: "",
    pattern: [],
    size: [],
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [error, setError] = useState({});

 
  const Handelchange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInputForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      });
    }
  };

  
  const validate = () => {
    let err = {};
    if (!inputForm.pname.trim()) err.pname = "Product Name is required";
    if (!inputForm.desc.trim()) err.desc = "Description is required";
    if (!inputForm.img.trim()) err.img = "Image URL is required";
    if (!inputForm.price.trim()) err.price = "Price is required";
    if (!inputForm.brand.trim()) err.brand = "Brand is required";
    if (!inputForm.category.trim()) err.category = "Category is required";
    if (!inputForm.mainCategory.trim()) err.mainCategory = "Main Category is required";
    if (inputForm.pattern.length === 0) err.pattern = "Select at least one pattern";
    if (inputForm.size.length === 0) err.size = "Select at least one size";
    setError(err);
    return Object.keys(err).length === 0; 
  };

 
  const Handelsubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newdata = {
        ...inputForm,
        id: String(Math.floor(Math.random() * 10000)),
      };
      dispatch(addNewProductAsync(newdata));
    }
  };

  
  useEffect(() => {
    if (isCreated && inputForm.mainCategory) {
      navigate(`/${inputForm.mainCategory}`);
    }
  }, [isCreated, inputForm.mainCategory, navigate]);

  return (
    <Container className="add-form-container py-5">
      <div className="form-card shadow-lg p-5 rounded-4 bg-white">
        <h2 className="text-center mb-4 fw-bold text-primary">Add New Product</h2>
        {isError && <p className="text-danger text-center">{isError}</p>}

        <Form onSubmit={Handelsubmit}>
          <Row className="gy-3">
         
            <Col md={6}>
              <div className="form-floating">
                <Form.Control
                  type="text"
                  name="pname"
                  value={inputForm.pname}
                  onChange={Handelchange}
                  placeholder="Product Name"
                />
                <Form.Label>Product Name</Form.Label>
              </div>
              {error.pname && <small className="text-danger">{error.pname}</small>}
            </Col>

           
            <Col md={6}>
              <div className="form-floating">
                <Form.Control
                  type="text"
                  name="desc"
                  value={inputForm.desc}
                  onChange={Handelchange}
                  placeholder="Description"
                />
                <Form.Label>Product Description</Form.Label>
              </div>
              {error.desc && <small className="text-danger">{error.desc}</small>}
            </Col>

           
            <Col md={6}>
              <div className="form-floating">
                <Form.Control
                  type="text"
                  name="img"
                  value={inputForm.img}
                  onChange={Handelchange}
                  placeholder="Image URL"
                />
                <Form.Label>Product Image URL</Form.Label>
              </div>
              {error.img && <small className="text-danger">{error.img}</small>}
            </Col>


            
            <Col md={6}>
              <div className="form-floating">
                <Form.Control
                  type="text"
                  name="price"
                  value={inputForm.price}
                  onChange={Handelchange}
                  placeholder="Price"
                />
                <Form.Label>Product Price (₹)</Form.Label>
              </div>
              {error.price && <small className="text-danger">{error.price}</small>}
            </Col>

            
            <Col md={6}>
              <div className="form-floating">
                <Form.Select name="brand" value={inputForm.brand} onChange={Handelchange}>
                  <option value="">Select Brand</option>
                  {["Nike", "Adidas", "Puma", "Reebok"].map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </Form.Select>
                <Form.Label>Product Brand</Form.Label>
              </div>
              {error.brand && <small className="text-danger">{error.brand}</small>}
            </Col>

           
            <Col md={6}>
              <div className="form-floating">
                <Form.Select
                  name="mainCategory"
                  value={inputForm.mainCategory}
                  onChange={Handelchange}
                >
                  <option value="">Select Main Category</option>
                  {["Men", "Women", "Kids"].map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </Form.Select>
                <Form.Label>Main Category</Form.Label>
              </div>
              {error.mainCategory && (
                <small className="text-danger">{error.mainCategory}</small>
              )}
            </Col>

           
            <Col md={6}>
              <div className="form-floating">
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={Handelchange}
                >
                  <option value="">Select Category</option>
                  {["Blazers", "Cargos", "Jackets", "Jeans", "Hoodies"].map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </Form.Select>
                <Form.Label>Product Category</Form.Label>
              </div>
              {error.category && <small className="text-danger">{error.category}</small>}
            </Col>


            <Col md={6}>
              <label className="form-label fw-semibold mb-2 text-muted">Pattern Type</label>
              <ul className="option-list">
                {["Solid", "Checkered", "Striped", "Printed"].map((v, i) => (
                  <li key={i}>
                    <input
                      type="checkbox"
                      name="pattern"
                      value={v}
                      id={`pattern-${i}`}
                      onChange={Handelchange}
                      checked={inputForm.pattern.includes(v)}
                    />
                    <label htmlFor={`pattern-${i}`}>{v}</label>
                  </li>
                ))}
              </ul>
              {error.pattern && <small className="text-danger">{error.pattern}</small>}
            </Col>

            
            <Col md={6}>
              <label className="form-label fw-semibold mb-2 text-muted">Available Sizes</label>
              <ul className="option-list">
                {["S", "M", "L", "XL", "XXL"].map((v, i) => (
                  <li key={i}>
                    <input
                      type="checkbox"
                      name="size"
                      value={v}
                      id={`size-${i}`}
                      onChange={Handelchange}
                      checked={inputForm.size.includes(v)}
                    />
                    <label htmlFor={`size-${i}`}>{v}</label>
                  </li>
                ))}
              </ul>
              {error.size && <small className="text-danger">{error.size}</small>}
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button className="submit-btn px-5 py-2" type="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Addproduct;
