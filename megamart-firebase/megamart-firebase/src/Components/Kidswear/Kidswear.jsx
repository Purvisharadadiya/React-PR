import { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getallproductAsync } from "../../services/action/productAction";
import { useNavigate } from "react-router";
import "./Kidswear.css";

const Kidswear = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [genreFilter, setGenreFilter] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPatterns, setSelectedPatterns] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]); 

  const [showCategory, setShowCategory] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showPattern, setShowPattern] = useState(true);
  const [showSize, setShowSize] = useState(true); 

  useEffect(() => {
    dispatch(getallproductAsync());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const kidsData = products.filter((item) => item.mainCategory === "Kids");
      setSortedProducts(kidsData);
    }
  }, [products]);

  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleGenreFilter = (e) => {
    const filter = e.target.value;
    setGenreFilter(filter);
    let sorted = [...sortedProducts];
    if (filter === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (filter === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  };

  
  const applyFilters = (categories, brands, patterns, sizes) => {
    let filtered = products.filter((p) => p.mainCategory === "Kids");

    if (categories.length > 0) {
      filtered = filtered.filter((p) => categories.includes(p.category));
    }

    if (brands.length > 0) {
      filtered = filtered.filter((p) => brands.includes(p.brand));
    }

    if (patterns.length > 0) {
      filtered = filtered.filter((p) =>
        p.pattern?.some((pt) => patterns.includes(pt))
      );
    }

    if (sizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.size?.some((s) => sizes.includes(s))
      );
    }

    setSortedProducts(filtered);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const updated = e.target.checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((v) => v !== value);
    setSelectedCategories(updated);
    applyFilters(updated, selectedBrands, selectedPatterns, selectedSizes);
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    const updated = e.target.checked
      ? [...selectedBrands, value]
      : selectedBrands.filter((v) => v !== value);
    setSelectedBrands(updated);
    applyFilters(selectedCategories, updated, selectedPatterns, selectedSizes);
  };

  const handlePatternChange = (e) => {
    const value = e.target.value;
    const updated = e.target.checked
      ? [...selectedPatterns, value]
      : selectedPatterns.filter((v) => v !== value);
    setSelectedPatterns(updated);
    applyFilters(selectedCategories, selectedBrands, updated, selectedSizes);
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    const updated = e.target.checked
      ? [...selectedSizes, value]
      : selectedSizes.filter((v) => v !== value);
    setSelectedSizes(updated);
    applyFilters(selectedCategories, selectedBrands, selectedPatterns, updated);
  };

  const handleClear = () => {
    setSortedProducts(products.filter((p) => p.mainCategory === "Kids"));
    setGenreFilter("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPatterns([]);
    setSelectedSizes([]);
  };

  const categoryList = ["T-shirt", "Shorts", "Frock", "Jacket", "Jeans"];
  const brandList = ["Puma", "Nike", "BabyGap", "H&M"];
  const patternList = ["Cartoon", "Printed", "Striped", "Solid"];

  
  const sizeList = [
    "XS", "S", "M", "L", "XL", "XXL",    
    "1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "8Y", "10Y", "12Y" 
  ];

  return (
    <Container>
      <Row>
      
        <div className="col-4 sidebar-filter">
          <div className="filter-header d-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold">Filters</h3>
            <button className="clear-btn" onClick={handleClear}>
              Clear All
            </button>
          </div>


          <div className="filter-box mb-4">
            <div
              className="filter-title d-flex justify-content-between align-items-center"
              onClick={() => setShowCategory(!showCategory)}
            >
              <h5 className="mb-0">Category</h5>
              <span>{showCategory ? "▲" : "▼"}</span>
            </div>
            {showCategory && (
              <ul className="filter-list mt-3">
                {categoryList.map((cat) => (
                  <li key={cat}>
                    <label>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                    <small className="count">
                      {products.filter(
                        (p) => p.mainCategory === "Kids" && p.category === cat
                      ).length}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </div>

         
          <div className="filter-box mb-4">
            <div
              className="filter-title d-flex justify-content-between align-items-center"
              onClick={() => setShowBrand(!showBrand)}
            >
              <h5 className="mb-0">Brand</h5>
              <span>{showBrand ? "▲" : "▼"}</span>
            </div>
            {showBrand && (
              <ul className="filter-list mt-3">
                {brandList.map((brand) => (
                  <li key={brand}>
                    <label>
                      <input
                        type="checkbox"
                        value={brand}
                        onChange={handleBrandChange}
                        checked={selectedBrands.includes(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                    <small className="count">
                      {products.filter(
                        (p) => p.mainCategory === "Kids" && p.brand === brand
                      ).length}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </div>

          
          <div className="filter-box mb-4">
            <div
              className="filter-title d-flex justify-content-between align-items-center"
              onClick={() => setShowPattern(!showPattern)}
            >
              <h5 className="mb-0">Pattern</h5>
              <span>{showPattern ? "▲" : "▼"}</span>
            </div>
            {showPattern && (
              <ul className="filter-list mt-3">
                {patternList.map((pattern) => (
                  <li key={pattern}>
                    <label>
                      <input
                        type="checkbox"
                        value={pattern}
                        onChange={handlePatternChange}
                        checked={selectedPatterns.includes(pattern)}
                      />
                      <span>{pattern}</span>
                    </label>
                    <small className="count">
                      {products.filter(
                        (p) =>
                          p.mainCategory === "Kids" &&
                          p.pattern?.includes(pattern)
                      ).length}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </div>

        
          <div className="filter-box mb-4">
            <div
              className="filter-title d-flex justify-content-between align-items-center"
              onClick={() => setShowSize(!showSize)}
            >
              <h5 className="mb-0">Size</h5>
              <span>{showSize ? "▲" : "▼"}</span>
            </div>
            {showSize && (
              <ul className="filter-list mt-3">
                {sizeList.map((size) => (
                  <li key={size}>
                    <label>
                      <input
                        type="checkbox"
                        value={size}
                        onChange={handleSizeChange}
                        checked={selectedSizes.includes(size)}
                      />
                      <span>{size}</span>
                    </label>
                    <small className="count">
                      {products.filter(
                        (p) =>
                          p.mainCategory === "Kids" &&
                          p.size?.includes(size)
                      ).length}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      
        <div className="col-8">
          <div className="d-flex justify-content-end my-3">
            <select
              className="sort-select"
              value={genreFilter}
              onChange={handleGenreFilter}
            >
              <option value="">Sort by price:</option>
              <option value="low">Price Low to High</option>
              <option value="high">Price High to Low</option>
            </select>
          </div>

          <div className="cards-container">
            {sortedProducts && sortedProducts.length > 0 ? (
              sortedProducts.map((v, i) => (
                <Card key={i} className="card-custom mb-3 shadow-sm">
                  <Card.Img variant="top" src={v.img} />
                  <Card.Body className="card-body-custom">
                    <h5>{v.pname}</h5>
                    <p>Desc: {v.desc}</p>
                    <p>Brand: {v.brand}</p>
                    <p className="price">₹{v.price}</p>
                    <p className="pattern">Pattern: {v.pattern?.join(", ")}</p>
                    <p className="size">Sizes: {v.size?.join(", ")}</p>
                    <div className="btn-group">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(v.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEdit(v.id)}
                      >
                        Edit
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <h2>No Kids products found</h2>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Kidswear;
