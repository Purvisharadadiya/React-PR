import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getproduct, updateproduct } from "../srvices/action/action";
import { useNavigate, useParams } from "react-router";

function Edit() {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const {product} = useSelector(state => state)

  const navigate = useNavigate();
   const initialState = {
    id: "",
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    img:"",
    size:"",
  };

    const [inputfrom, setinputfrom] = useState(initialState);

 const handleChange = (e) => {
    const { name, value } = e.target;
     setinputfrom({
      ...inputfrom,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateproduct(inputfrom)); 
    
    navigate("/MenCard"); 
  };



  useEffect(() => {
    if (product) {
      setinputfrom(product);
    }
  }, [product]);

  
  useEffect(() => {
    if(id)
    dispatch(getproduct(id));
  }, [id]);


  return (
    <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={inputfrom.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={inputfrom.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
         <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="number"
            name="size"
            placeholder="Enter size"
            value={inputfrom.size}
            onChange={handleChange}
          />
          </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={inputfrom.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={inputfrom.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Blazers">Blazers</option>
            <option value="Cargos">Cargos</option>
            <option value="Chinos">Chinos</option>
            <option value="Jackets">Jackets</option>
            <option value="Joggers">Joggers</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="productBrand">
          <Form.Label>Brand Name</Form.Label>
          <Form.Select
            name="brand"
            value={inputfrom.brand}
            onChange={handleChange}
            required
          >
            <option value="">Select Brand</option>
            <option value="AD BY Arvind">AD BY Arvind</option>
            <option value="Arrow">Arrow</option>
            <option value="Calvin Klein">Calvin Klein</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
            <option value="Levi's">Levi's</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="poster">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="img"
            placeholder="Enter image URL"
            value={inputfrom.img}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default Edit;
