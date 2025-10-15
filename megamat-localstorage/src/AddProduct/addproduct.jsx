import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../srvices/action/action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    name: "",
    price: "",
    size: "",
    description: "",
    category: "",
    brand: "",
    img: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  
  const validateForm = () => {
    const formErrors = {};

    if (!inputForm.name) formErrors.name = "Product name is required!";
    if (!inputForm.price) formErrors.price = "Price is required!";
    else if (inputForm.price <= 0) formErrors.price = "Price must be greater than 0!";

    if (!inputForm.size) formErrors.size = "Size is required!";
    

    if (!inputForm.description) formErrors.description = "Description is required!";
    if (!inputForm.category) formErrors.category = "Category is required!";
    if (!inputForm.brand) formErrors.brand = "Brand is required!";
    if (!inputForm.img) formErrors.img = "Product image URL is required!";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    const newProduct = {
      ...inputForm,
      id: Math.floor(Math.random() * 100000),
    };

    dispatch(addNewProduct(newProduct));
    setInputForm(initialState);
    navigate("/MenCard");
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2>Add Product</h2>

      <Form onSubmit={handleSubmit}>
     
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter product name"
            value={inputForm.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={inputForm.price}
            onChange={handleChange}
          />
          {errors.price && <span className="text-danger">{errors.price}</span>}
        </Form.Group>

       
        <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="number"
            name="size"
            placeholder="Enter size"
            value={inputForm.size}
            onChange={handleChange}
          />
          {errors.size && <span className="text-danger">{errors.size}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Enter product description"
            value={inputForm.description}
            onChange={handleChange}
          />
          {errors.description && <span className="text-danger">{errors.description}</span>}
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={inputForm.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Blazers">Blazers</option>
            <option value="Cargos">Cargos</option>
            <option value="Chinos">Chinos</option>
            <option value="Jackets">Jackets</option>
            <option value="Joggers">Joggers</option>
          </Form.Select>
          {errors.category && <span className="text-danger">{errors.category}</span>}
        </Form.Group>

       
        <Form.Group className="mb-3">
          <Form.Label>Brand Name</Form.Label>
          <Form.Select
            name="brand"
            value={inputForm.brand}
            onChange={handleChange}
          >
            <option value="">Select Brand</option>
            <option value="AD BY Arvind">AD BY Arvind</option>
            <option value="Arrow">Arrow</option>
            <option value="Calvin Klein">Calvin Klein</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
            <option value="Levi's">Levi's</option>
          </Form.Select>
          {errors.brand && <span className="text-danger">{errors.brand}</span>}
        </Form.Group>

       
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="img"
            placeholder="Enter image URL"
            value={inputForm.img}
            onChange={handleChange}
          />
          {errors.img && <span className="text-danger">{errors.img}</span>}
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
