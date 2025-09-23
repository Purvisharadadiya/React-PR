import { useState, useEffect } from "react";
import { getstoragedata, setstroagedata } from "../../services/storageData";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./home.css";
import { useNavigate } from 'react-router';
const Home = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

const navigate = useNavigate();
  useEffect(() => {
    let data = getstoragedata();
    setMovie(data || []);
  }, []);

  const handleDelete = (id) => {
    let data = getstoragedata();
    let updated = data.filter((v) => v.id !== id);
    setstroagedata(updated);
    setMovie(updated);
  };
  const handleEdit = (id) => {
    navigate(`/Edit/${id}`)
  }

  const sortingData = (data, value) => {
    let [field, type] = value.split(",");
    return data.sort((a, b) =>
      type === "acs"
        ? a[field].localeCompare(b[field], undefined, { sensitivity: "base" })
        : b[field].localeCompare(a[field], undefined, { sensitivity: "base" })
    );
  };


  const applyFilters = () => {
    let data = getstoragedata() || [];

    let filtered = data.filter((v) =>
      v.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((v) => selectedGenres.includes(v.genre));
    }

    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((v) =>
        selectedLanguages.includes(v.language)
      );
    }

    if (sortData) {
      filtered = sortingData(filtered, sortData);
    }

    setMovie(filtered);
  };

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const handleSort = (e) => setSortData(e.target.value);

  const handleClear = () => {
    setSearch("");
    setSelectedGenres([]);
    setSelectedLanguages([]);
    setSortData("");
    let data = getstoragedata();
    setMovie(data);
  };


  useEffect(() => {
    applyFilters();
  }, [search, selectedGenres, selectedLanguages, sortData]);

  return (
    <Container fluid>
      <div className="d-flex">

        <div className="p-3 border rounded shadow-sm" style={{ width: "250px" }}>
          <h4>Filters</h4>


          <input type="text" placeholder="Search Movies..." value={search} onChange={handleSearchChange} className="form-control mb-3" />


          <h6> Genres</h6>
          {["Action", "Comedy", "Drama", "Thriller"].map((g) => (
            <div key={g}>
              <input
                type="checkbox"
                checked={selectedGenres.includes(g)}
                onChange={() => handleGenreChange(g)}
              />{" "}
              {g}
            </div>
          ))}


          <h6 className="mt-3"> Language</h6>
          {["Hindi", "English", "Tamil", "Telugu", "Gujarati"].map((lang) => (
            <div key={lang}>
              <input
                type="checkbox"
                checked={selectedLanguages.includes(lang)}
                onChange={() => handleLanguageChange(lang)}
              />{" "}
              {lang}
            </div>
          ))}


          <h6 className="mt-3">Sort By</h6>
          <select className="form-select" value={sortData} onChange={handleSort}>
            <option value="">--select--</option>
            <option value="name,acs">Name ASC</option>
            <option value="name,desc">Name DESC</option>
          </select>

          <Button
            variant="secondary"
            size="sm"
            className="mt-3 w-100"
            onClick={handleClear}
          >
            Clear All
          </Button>
        </div>

        {/* Movie Cards */}
        <main className="flex-grow-1 ms-4">
          <h2 className="mb-3">All Movies</h2>
          <Row className="g-4">
            {movie.length > 0 ? (
              movie.map((v) => (
                <Col key={v.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={v.poster} alt={v.name} style={{
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    />
                    <Card.Body>
                      <Card.Title>{v.name}</Card.Title>
                      <Card.Text>
                        {v.genre} | {v.language}
                      </Card.Text>
                      <p className="rating">⭐ {v.rating}</p>
                      <div className="d-flex justify-content-between">
                        <Button  size="sm" onClick={() => handleEdit(v.id)}> Edit
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(v.id)}> Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </Row>
        </main>
      </div>
    </Container>
  );
};

export default Home;
