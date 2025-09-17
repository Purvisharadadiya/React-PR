import { useState, useEffect } from "react";
import { getstoragedata } from "../../services/storageData";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./home.css";

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let data = getstoragedata();
    setMovie(data);
  }, []);

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="filter-section">
          <h3 className="filter-title">Filter By</h3>
          <div className="filter-group">
            <p className="filter-label">🎭 Genres</p>
            <label><input type="checkbox" /> Action</label>
            <label><input type="checkbox" /> Comedy</label>
            <label><input type="checkbox" /> Drama</label>
            <label><input type="checkbox" /> Thriller</label>
          </div>

          <div className="filter-group">
            <p className="filter-label">🌍 Language</p>
            <label><input type="checkbox" /> Hindi</label>
            <label><input type="checkbox" /> English</label>
            <label><input type="checkbox" /> Tamil</label>
            <label><input type="checkbox" /> Telugu</label>
          </div>

          <div className="filter-group">
            <p className="filter-label">🔽 Sort By</p>
            <select className="sort-select">
              <option>Select</option>
              <option>Rating</option>
              <option>Popularity</option>
              <option>A → Z</option>
              <option>Z → A</option>
            </select>
          </div>
        </div>

        <div className="sidebar-footer">
          <p className="footer-title">Plans</p>
          <ul className="plan-list">
            <li><input type="radio" name="plan" /> UI Icons</li>
            <li><input type="radio" name="plan" /> Blog</li>
            <li><input type="radio" name="plan" /> Courses</li>
          </ul>
        </div>
      </aside>

      {/* Main Movie Section */}
      <main className="movie-section">
        <h2 className="page-title">Now Showing</h2>
        <Container>
          <Row className="g-4">
            {movie.length > 0 ? (
              movie.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card className="shadow-sm h-100">
                    <Card.Img
                      variant="top"
                      src={item.poster || "https://via.placeholder.com/250x350"}
                      alt={item.name || "Movie Poster"}
                      style={{
                        height: "350px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{item.name || "Untitled Movie"}</Card.Title>
                      <Card.Text>{item.desc || "No description available"}</Card.Text>
                      <p className="rating">⭐ {item.rating || "4.5"}</p>
                      <p className="price">₹ {item.price || "N/A"}</p>
                      <Button variant="primary" className="w-100">
                        Book Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </Row>
        </Container>
      </main>

    </div>
  );
};

export default Home;
