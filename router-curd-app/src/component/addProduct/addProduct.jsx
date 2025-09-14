import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getstoragedata, setstroagedata } from '../../services/storageData';
import { useNavigate } from "react-router";


const Addproduct = () => {

    const navigate = useNavigate();
    const initalstate = {
        id: " ",
        title: "",
        desc: " ",
        price: " ",
        Quantity: " ",
        Category: " ",
        Image: " "
    }
    const [inputFrom, setInputFrom] = useState(initalstate);
    const [error, setError] = useState({});
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputFrom({
            ...inputFrom,
            [name]: value
        })
    }
    const fromValidation = () => {
        let formError = {};

        if (inputFrom.title == "") {
            formError.title = "Title is not Empty !";
        } else if (inputFrom.title.length < 7) {
            formError.title = "Length Must Be 7 letter !";
        }

        if (inputFrom.desc == " ") {
            formError.desc = "Description is not Empty !";
        }
        if (inputFrom.price == " ") {
            formError.price = "Price is not Empty !";
        }
        if (inputFrom.Quantity == " ") {
            formError.Quantity = "Quantity is not Empty !";
        }
        if (inputFrom.Category == " ") {
            formError.Category = "Category is not Empty!";
        }
        if (inputFrom.Image == " ") {
            formError.Image = "Image is not Empty !";
        }
        setError(formError);

        return Object.keys(formError).length != 0


    }
    const hadleSubmit = (e) => {
        e.preventDefault();
        if (!fromValidation()) {
            inputFrom.id = Math.floor(Math.random() * 1000);
            let olddata = getstoragedata();
            olddata.push(inputFrom);
            setstroagedata(olddata);
            setInputFrom(initalstate)
            navigate('/');
        }



    }
    return (
        <>
            <Container>
                <Form onSubmit={hadleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="title" placeholder="Enter Title" onChange={handleInput} />
                        </Col>
                        {error.title ? <span>{error.title}</span> : ""}
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Descripition
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='desc' placeholder="Enter Descripition" onChange={handleInput} />
                        </Col>
                        {error.desc ? <span>{error.desc}</span> : ""}
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="price" placeholder="Enter Price" onChange={handleInput} />
                        </Col>
                        {error.price ? <span>{error.price}</span> : ""}
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name="Quantity" placeholder="Enter Quantity" onChange={handleInput} />
                        </Col>
                        {error.Quantity ? <span>{error.Quantity}</span> : ""}

                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select onChange={handleInput} name="Category">
                                <option>select Category</option>
                                <option value="mobile">mobile</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Fashion">Fashion</option>
                            </Form.Select>
                        </Col>
                        {error.Category ? <span>{error.Category}</span> : ""}

                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Image
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" placeholder="Enter Image URL" onChange={handleInput} name="Image" />
                        </Col>
                        {error.Image ? <span>{error.Image}</span> : ""}

                    </Form.Group>

                    <Button type="submit">Add Product</Button>

                </Form>
            </Container>
        </>
    )
}
export default Addproduct;