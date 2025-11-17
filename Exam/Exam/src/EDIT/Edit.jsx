import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {  getSingleBlogAsync, updateBlogAsync } from "../service/ation/action";

const EditBlog = () => {
  const { id } = useParams();
  const { blog, isUpdated } = useSelector((state) => state.blog);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    id: "",
    title: "",
    desc: "",
    img: "",
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [error, setError] = useState({});

 
  const handleChange = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = {};
    if (!inputForm.title) formError.title = "Title Required";
    if (!inputForm.desc) formError.desc = "Description Required";
    if (!inputForm.img) formError.img = "Image URL Required";
    if (!inputForm.category) formError.category = "Category Required";

    setError(formError);

    if (Object.keys(formError).length > 0) return;

    dispatch(updateBlogAsync(inputForm));
  };

  
  useEffect(() => {
    if (isUpdated) {
      navigate("/blogs");
    }
  }, [isUpdated]);

  
  useEffect(() => {
    dispatch(getSingleBlogAsync(id));
  }, [id]);

  useEffect(() => {
    if (blog) {
      setInputForm({
        ...initialState,
        ...blog,
      });
    }
  }, [blog]);

  return (
    <Container className="add-form-container py-5">
      <div className="form-card p-5 my-5 bg-white shadow rounded-4">
        <h2 className="text-center mb-4 fw-bold text-primary">Edit Blog</h2>

        <Form onSubmit={handleSubmit}>

        
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Blog Title</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="title"
                value={inputForm.title}
                onChange={handleChange}
                placeholder="Enter Blog Title"
              />
              {error.title && <small className="text-danger">{error.title}</small>}
            </Col>
          </Form.Group>

          
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Category</Form.Label>
            <Col sm="7">
              <Form.Select
                name="category"
                value={inputForm.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {["Tech", "Fashion", "Sports", "News"].map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </Form.Select>
              {error.category && <small className="text-danger">{error.category}</small>}
            </Col>
          </Form.Group>

        
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Description</Form.Label>
            <Col sm="7">
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                value={inputForm.desc}
                onChange={handleChange}
                placeholder="Write Blog Content"
              />
              {error.desc && <small className="text-danger">{error.desc}</small>}
            </Col>
          </Form.Group>

          
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Form.Label column sm="3" className="fw-semibold">Image URL</Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                name="img"
                value={inputForm.img}
                onChange={handleChange}
                placeholder="Enter Image URL"
              />
              {inputForm.img && (
                <img
                  src={inputForm.img}
                  width={150}
                  className="mt-2 rounded"
                  alt="preview"
                />
              )}
              {error.img && <small className="text-danger">{error.img}</small>}
            </Col>
          </Form.Group>

          
          <div className="text-center">
            <Button type="submit" className="submit-btn px-5 py-2">
              Update Blog
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditBlog;
