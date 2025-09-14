import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getstoragedata, setstroagedata } from '../../services/storageData';
import { useParams, useNavigate } from "react-router";

const Editproduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const initalstate = {
        id: "",
        title: "",
        desc: "",
        price: "",
        Quantity: "",
        Category: "",
        Image: ""
    };

    const [inputFrom, setInputFrom] = useState(initalstate);
    


    useEffect(() => {
        let data = getstoragedata();
        let record = data.find(v => v.id == id);
        if (record) {
            setInputFrom(record);
        }
    }, [id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputFrom({
            ...inputFrom,
            [name]: value
        });
    };

   

    const hadleSubmit = (e) => {
        e.preventDefault();
        let data = getstoragedata();
        let updated = data.map((v) => {
            if (v.id == inputFrom.id) {
                return inputFrom
            } else {
                return v;
            }
        })
        setstroagedata(updated);
        setInputFrom(initalstate)
        navigate("/");
    };

    return (
        <Container>
            <Form onSubmit={hadleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Title</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Enter Title"
                            onChange={handleInput}
                            value={inputFrom.title}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name="desc"
                            placeholder="Enter Description"
                            onChange={handleInput}
                            value={inputFrom.desc}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Price</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            onChange={handleInput}
                            value={inputFrom.price}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Quantity</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="number"
                            name="Quantity"
                            placeholder="Enter Quantity"
                            onChange={handleInput}
                            value={inputFrom.Quantity}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Category</Form.Label>
                    <Col sm="6">
                        <Form.Select
                            onChange={handleInput}
                            name="Category"
                            value={inputFrom.Category}
                        >
                            <option>select Category</option>
                            <option value="mobile" selected={inputFrom.Category == "mobile"}>mobile</option>
                            <option value="Furniture" selected={inputFrom.Category == "Furniture"}>Furniture</option>
                            <option value="Fashion" selected={inputFrom.Category == "Fashion"}>Fashion</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Image</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            placeholder="Enter Image URL"
                            onChange={handleInput}
                            name="Image"
                            value={inputFrom.Image}
                        />
                    </Col>
                </Form.Group>

                <Button type="submit">Update Product</Button>
            </Form>
        </Container>
    );
};

export default Editproduct;
