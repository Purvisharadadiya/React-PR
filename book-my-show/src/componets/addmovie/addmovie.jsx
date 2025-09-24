import { useState } from "react";
import "./addmovie.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { getstoragedata, setstroagedata } from "../../services/storageData";
import { useNavigate } from "react-router";

function AddMovie() {
  const navigate = useNavigate();

  const initialState = {
    id: "",
    poster: "",
    name: "",
    genre: "",
    rating: "",
    language: "",
  };

  const [inputFrom, setInputFrom] = useState(initialState);
  const [errors, setErrors] = useState({}); // per-field errors

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFrom({ ...inputFrom, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!inputFrom.poster) formErrors.poster = "Poster is required!";
    if (!inputFrom.name) formErrors.name = "Movie name is required!";
    if (!inputFrom.genre) formErrors.genre = "Genre is required!";
    if (!inputFrom.language) formErrors.language = "Language is required!";
    if (!inputFrom.rating) formErrors.rating = "Rating is required!";
    else if (inputFrom.rating < 1 || inputFrom.rating > 10)
      formErrors.rating = "Rating must be between 1 and 10!";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // true if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    inputFrom.id = Math.floor(Math.random() * 1000);
    const oldData = getstoragedata() || [];
    oldData.push(inputFrom);
    setstroagedata(oldData);

    setInputFrom(initialState);
    navigate("/");
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h1>Welcome to BookMyShow</h1>
        <p>Add new movies to your collection with proper details.</p>
      </div>

      <div className="form-right">
        <div className="form-box">
          <h2 className="mb-3">Add Movie</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="poster">
              <Form.Label>Poster (Image URL)</Form.Label>
              <Form.Control
                type="text"
                name="poster"
                placeholder="Enter image URL"
                value={inputFrom.poster}
                onChange={handleInput}
              />
              {errors.poster && <span className="text-danger">{errors.poster}</span>}
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter movie name"
                    value={inputFrom.name}
                    onChange={handleInput}
                  />
                  {errors.name && <span className="text-danger">{errors.name}</span>}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="genre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    placeholder="Enter genre"
                    value={inputFrom.genre}
                    onChange={handleInput}
                  />
                  {errors.genre && <span className="text-danger">{errors.genre}</span>}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                placeholder="Enter language"
                value={inputFrom.language}
                onChange={handleInput}
              />
              {errors.language && <span className="text-danger">{errors.language}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating (1-10)</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                placeholder="Enter rating"
                min="1"
                max="10"
                value={inputFrom.rating}
                onChange={handleInput}
              />
              {errors.rating && <span className="text-danger">{errors.rating}</span>}
            </Form.Group>

            <Button type="submit" className="w-100 custom-btn">
              Add Movie
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
