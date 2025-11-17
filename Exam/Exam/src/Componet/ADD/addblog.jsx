import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import { addNewBlogAsync } from "../../service/ation/action";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreated, isError } = useSelector((state) => state.blog);

  const initialState = {
    id: "",
    title: "",
    desc: "",
    img: "",
    category: "",
  };

  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!input.title.trim()) err.title = "Title required";
    if (!input.desc.trim()) err.desc = "Description required";
    if (!input.img.trim()) err.img = "Image URL required";
    if (!input.category.trim()) err.category = "Category required";
    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newBlog = {
        ...input,
        id: String(Math.floor(Math.random() * 10000)),
      };
      dispatch(addNewBlogAsync(newBlog));
    }
  };

  if (isCreated) {
    navigate("/");
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Add New Blog</h2>

      {isError && <p className="text-danger text-center">{isError}</p>}

      <Form onSubmit={handleSubmit}>
        <Row className="gy-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Blog Title"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
            {error.title && <small className="text-danger">{error.title}</small>}
          </Col>

          <Col md={6}>
            <Form.Select
              name="category"
              value={input.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {["Tech", "Fashion", "Sports", "News"].map((v, i) => (
                <option key={i} value={v}>{v}</option>
              ))}
            </Form.Select>
            {error.category && (
              <small className="text-danger">{error.category}</small>
            )}
          </Col>

          <Col md={12}>
            <Form.Control
              as="textarea"
              placeholder="Description"
              rows={3}
              name="desc"
              value={input.desc}
              onChange={handleChange}
            />
            {error.desc && <small className="text-danger">{error.desc}</small>}
          </Col>

          
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Image URL"
              name="img"
              value={input.img}
              onChange={handleChange}
            />
            {input.img && (
              <img
                src={input.img}
                alt="preview"
                width={120}
                className="mt-2 rounded"
              />
            )}
            {error.img && <small className="text-danger">{error.img}</small>}
          </Col>
        </Row>

        <Button className="mt-4" type="submit">
          Add Blog
        </Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
