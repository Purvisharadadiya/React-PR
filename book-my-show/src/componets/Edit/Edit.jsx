import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { getstoragedata, setstroagedata } from "../../services/storageData";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    poster: "",
    name: "",
    genre: "",
    rating: "",
    language: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

 
  useEffect(() => {
    if (id) {
      const data = getstoragedata() || [];
      const record = data.find((v) => v.id == id);
      if (record) setInputForm(record);
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = getstoragedata() || [];

    if (id) {
      
      const updated = data.map((v) => (v.id == inputForm.id ? inputForm : v));
      setstroagedata(updated);
    } else {
     
      const newMovie = { ...inputForm, id: Date.now().toString() };
      setstroagedata([...data, newMovie]);
    }

    navigate("/");
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <h1>Welcome to BookMyShow</h1>
        <p>
          Easily add or edit movies in your collection. Manage genres, ratings,
          and keep track of your favorites.
        </p>
      </div>

      <div className="form-right">
        <div className="form-box">
          <h2 className="mb-3">{id ? "Edit Movie" : "Add Movie"}</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="poster">
              <Form.Label>Poster</Form.Label>
              <Form.Control
                type="text"
                name="poster"
                placeholder="Enter poster URL"
                value={inputForm.poster}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter movie name"
                    value={inputForm.name}
                    onChange={handleInput}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="genre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    placeholder="Enter genre"
                    value={inputForm.genre}
                    onChange={handleInput}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                placeholder="Enter language"
                value={inputForm.language}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating (1-10)</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                min="1"
                max="10"
                placeholder="Enter rating"
                value={inputForm.rating}
                onChange={handleInput}
              />
            </Form.Group>

            <Button type="submit" className="w-100 custom-btn">
              {id ? "Update Movie" : "Add Movie"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditMovie;
