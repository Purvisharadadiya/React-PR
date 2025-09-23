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
  const [inputFrom, setInputFrom] = useState(initialState)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFrom({
      ...inputFrom,
      [name]: value
    })
  }
  const hadleSubmit = (e) => {
    e.preventDefault();
    inputFrom.id = Math.floor(Math.random() * 1000);
    let olddata = getstoragedata();
    olddata.push(inputFrom);
    setstroagedata(olddata);
    navigate("/")
  }
  return (
    <div className="form-container">
      <div className="form-left">
        <h1>Welcome to BookMyShow</h1>
        <p>
          Easily add new movies to your collection. Manage genres, ratings, and
          keep track of your favorites.
        </p>
      </div>
      <div className="form-right">
        <div className="form-box">
          <h2 className="mb-3">Add Movie</h2>

          <Form onSubmit={hadleSubmit}>

            <Form.Group className="mb-3" controlId="poster">
              <Form.Label>Poster</Form.Label>
              <Form.Control type="text" name="poster" placeholder="Enter movie name" onChange={handleInput} />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="movieName">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter movie name" onChange={handleInput}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="genre">
                  <Form.Label>genre</Form.Label>
                  <Form.Control type="text" name="genre" placeholder="Enter genre" onChange={handleInput} />
                </Form.Group>
              </Col>
            </Row>

            <Col>
              <Form.Group className="mb-3" controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" name="language"placeholder="Enter language" onChange={handleInput}
                />
              </Form.Group>
            </Col>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating (1-10)</Form.Label>
              <Form.Control type="number" name="rating" placeholder="Enter rating" min="1" max="10" onChange={handleInput} />
            </Form.Group>
            <Button type="submit" className="w-100 custom-btn">
              Add Movie
            </Button>
          </Form>

          <p className="small-text">
            Already have movies added? 
          </p>
        </div>
      </div>
    </div>
  );
}
export default AddMovie