import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPostAsync } from "../redux/actions/postActions";
import { Form, Button, Card } from "react-bootstrap";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreated, isError } = useSelector((state) => state.posts);

  const initialState = {
    title: "",
    description: "",
    date: "",
    image: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.category) newErrors.category = "Select a category";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBlog = {
        ...formData,
        id: Math.floor(Math.random() * 10000),
      };

      dispatch(addPostAsync(newBlog));
    }
  };

  
  useEffect(() => {
    if (isCreated) {
      navigate("/posts");
    }
  }, [isCreated]);

  return (
    <div className="container mt-3">
      <Card className="p-4">
        <h3 className="text-center">Add New Blog</h3>

        {isError && <p className="text-danger">{isError}</p>}

        <Form onSubmit={handleSubmit}>
        
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? "is-invalid" : ""}
            />
            <small className="text-danger">{errors.title}</small>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              placeholder="Enter blog description"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? "is-invalid" : ""}
            />
            <small className="text-danger">{errors.description}</small>
          </Form.Group>

          {/* Date */}
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? "is-invalid" : ""}
            />
            <small className="text-danger">{errors.date}</small>
          </Form.Group>

          {/* Image */}
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="Paste image link"
              value={formData.image}
              onChange={handleChange}
              className={errors.image ? "is-invalid" : ""}
            />
            <small className="text-danger">{errors.image}</small>
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? "is-invalid" : ""}
            >
              <option value="">Select category</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Business">Business</option>
            </Form.Select>
            <small className="text-danger">{errors.category}</small>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add Blog
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default PostForm;
