import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync, updateProductAsync } from '../../services/action/productAction';
import { useNavigate, useParams } from 'react-router';
import "./Editproduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const { product, isUpdated } = useSelector((state) => state.product); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    id: '',
    pname: '',
    desc: '',
    img: '',
    price: '',
    brand: '',
    category: '',
    mainCategory: '',
    pattern: [],
    size: [],
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = {};
    if (!inputForm.pname) formError.pname = "Product name required";
    if (!inputForm.price) formError.price = "Price required";
    if (inputForm.size.length === 0) formError.size = "Select at least one size";

    setError(formError);
    if (Object.keys(formError).length > 0) return;

    dispatch(updateProductAsync(inputForm));
  };

  useEffect(() => {
    if (isUpdated) {
      if (inputForm.mainCategory === 'Men') navigate('/Men');
      else if (inputForm.mainCategory === 'Women') navigate('/Women');
      else if (inputForm.mainCategory === 'Kids') navigate('/Kids');
      else navigate('/');
    }
  }, [isUpdated, inputForm.mainCategory, navigate]);

  useEffect(() => {
    if (product) {
      setInputForm({
        ...initialState,
        ...product,
        pattern: Array.isArray(product.pattern) ? product.pattern : [],
        size: Array.isArray(product.size) ? product.size : [],
      });
    }
  }, [product]);

  useEffect(() => {
    dispatch(getProductAsync(id));
  }, [id, dispatch]);

  return (
    <Container className="add-form-container py-5">
      <div className="form-card p-5 my-5 bg-white shadow rounded-4">
        <h2 className="text-center mb-4 fw-bold text-primary">Edit Product</h2>
        <Form onSubmit={handleSubmit}>
          
          {/* Product Name */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Product Name</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="pname"
                value={inputForm.pname}
                onChange={handleChange}
                placeholder="Enter Product Name"
              />
              {error.pname && <small className="text-danger">{error.pname}</small>}
            </Col>
          </Form.Group>

          {/* Description */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Description</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="desc"
                value={inputForm.desc}
                onChange={handleChange}
                placeholder="Enter Product Description"
              />
            </Col>
          </Form.Group>

          {/* Image */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Image URL</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="img"
                value={inputForm.img}
                onChange={handleChange}
                placeholder="Enter Product Image URL"
              />
            </Col>
          </Form.Group>

          {/* Brand */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Brand</Form.Label>
            <Col sm="7">
              <Form.Select
                name="brand"
                value={inputForm.brand}
                onChange={handleChange}
              >
                <option value="">Select Brand</option>
                {['Nike', 'Adidas', 'Puma', 'Reebok'].map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Category */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Category</Form.Label>
            <Col sm="7">
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {['Blazers', 'Cargos', 'Jackets', 'Jeans', 'Hoodies'].map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Price */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Price</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="price"
                value={inputForm.price}
                onChange={handleChange}
                placeholder="Enter Product Price"
              />
              {error.price && <small className="text-danger">{error.price}</small>}
            </Col>
          </Form.Group>

          {/* Pattern */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Pattern</Form.Label>
            <Col sm="7">
              <ul className="option-list">
                {['Solid', 'Checkered', 'Striped', 'Printed'].map((v, i) => (
                  <li key={i}>
                    <input
                      type="checkbox"
                      name="pattern"
                      value={v}
                      id={`pattern-${i}`}
                      onChange={handleChange}
                      checked={Array.isArray(inputForm.pattern) && inputForm.pattern.includes(v)} // ✅ fixed
                    />
                    <label htmlFor={`pattern-${i}`}>{v}</label>
                  </li>
                ))}
              </ul>
            </Col>
          </Form.Group>

          {/* Main Category */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Main Category</Form.Label>
            <Col sm="7">
              <Form.Select
                name="mainCategory"
                value={inputForm.mainCategory}
                onChange={handleChange}
              >
                <option value="">Select Main Category</option>
                {['Men', 'Women', 'Kids'].map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Sizes */}
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Available Sizes</Form.Label>
            <Col sm="7">
              <ul className="option-list">
                {['S', 'M', 'L', 'XL', 'XXL'].map((v, i) => (
                  <li key={i}>
                    <input
                      type="checkbox"
                      name="size"
                      value={v}
                      id={`size-${i}`}
                      onChange={handleChange}
                      checked={Array.isArray(inputForm.size) && inputForm.size.includes(v)} // ✅ fixed
                    />
                    <label htmlFor={`size-${i}`}>{v}</label>
                  </li>
                ))}
              </ul>
              {error.size && <small className="text-danger">{error.size}</small>}
            </Col>
          </Form.Group>

          {/* Submit */}
          <div className="text-center">
            <Button type="submit" className="submit-btn px-5 py-2">
              Update Product
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct;
