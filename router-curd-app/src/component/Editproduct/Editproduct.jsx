import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";
import { getstoragedata, setstroagedata } from '../../services/storageData';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    Quantity: "",
    Category: "",
    Image: ""
  };

  const [inputForm, setInputForm] = useState(initialState);

  useEffect(() => {
    const data = getstoragedata() || [];
    const record = data.find(v => String(v.id) === String(id));
    if (record) {
      setInputForm(record);
    } else {
      setInputForm(initialState);
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getstoragedata() || [];
    const updated = data.map(v => (String(v.id) === String(inputForm.id) ? inputForm : v));
    setstroagedata(updated);
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Title</Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title"
              value={inputForm.title || ""}
              onChange={handleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Description</Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              name="desc"
              placeholder="Enter Description"
              value={inputForm.desc || ""}
              onChange={handleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="6">
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
              value={inputForm.price || ""}
              onChange={handleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Quantity</Form.Label>
          <Col sm="6">
            <Form.Control
              type="number"
              name="Quantity"
              placeholder="Enter Quantity"
              value={inputForm.Quantity || ""}
              onChange={handleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="6">
            <Form.Select
              name="Category"
              value={inputForm.Category || ""}
              onChange={handleInput}
            >
              <option value="">Select Category</option>
              <option value="mobile">Mobile</option>
              <option value="Furniture">Furniture</option>
              <option value="Fashion">Fashion</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image</Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              name="Image"
              placeholder="Enter Image URL"
              value={inputForm.Image || ""}
              onChange={handleInput}
            />
          </Col>
        </Form.Group>

        <Button type="submit">Update Product</Button>
      </Form>
    </Container>
  );
};

export default EditProduct;
