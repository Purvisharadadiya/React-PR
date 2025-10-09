import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import './Addmoive.css'
import { useState } from 'react';
import { Getstroagedata, Setstroagedata } from '../../services/StroageData';
import { useNavigate } from 'react-router';


const Addmoive = () => {
    const [Error, setError] = useState({});
    const navigate = useNavigate();
    const inisitalstate = {
        id: "",
        desc: "",
        name: "",
        category: "",
        type: "",
        year: "",
        image: ""
    }

    const [addmoive, setaddmoive] = useState(inisitalstate);


    const handlechange = (e) => {
        const { name, value } = e.target;
        setaddmoive({
            ...addmoive,
            [name]: value,
        })
    }

    const fromVaildation = () => {
        const formError = {};

        if (addmoive.name == "") {
            formError.name = "Name is required !";
        }

        if (addmoive.desc == "") {
            formError.desc = "Description must be Required !";
        }
        if (addmoive.category == "") {
            formError.category = "category must be Required !";
        }
        if (addmoive.type == "") {
            formError.type = "type must be Required !";
        }
        if (addmoive.year == "") {
            formError.year = "year must be Required !";
        }
        if (addmoive.image == "") {
            formError.image = "Image must be Required !";
        }

        setError(formError);
        return Object.keys(formError).length != 0;

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!fromVaildation()) {
            addmoive.id = Math.floor(Math.random() * 100000);
            let oldata = Getstroagedata();
            oldata.push(addmoive);
            Setstroagedata(oldata);
            setaddmoive(inisitalstate);
            toast.success("Movie added successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                navigate('/');
            }, 1500);
        }

    }

    return (
        <>
            <section>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <div className="add-moive-form col-6">
                            <Form onSubmit={handlesubmit}>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Name :</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter movie name" value={addmoive.name} onChange={handlechange} />
                                    {Error.name ? <span style={{ color: 'red' }}>{Error.name}</span> : ""}
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Description :</Form.Label>
                                    <Form.Control type="text" name='desc' value={addmoive.desc} placeholder="Enter Description" onChange={handlechange} />
                                    {Error.desc ? <span style={{ color: 'red' }}>{Error.desc}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter moive Type :</Form.Label>
                                    <Form.Select name='type' onChange={handlechange} value={addmoive.type}>
                                        <option value="">--secect moive --</option>
                                        <option value="hollywood" selected={addmoive.type == 'Hollywood'}>Hollywood</option>
                                        <option value="bollywood" selected={addmoive.type == 'bollywoodd'}>Bollywood</option>
                                        <option value="tollywood" selected={addmoive.type == 'tollywood'}>Tollywood</option>
                                    </Form.Select>
                                    {Error.type ? <span style={{ color: 'red' }}>{Error.type}</span> : ""}
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter category :</Form.Label>
                                    <Form.Select name='category' onChange={handlechange} value={addmoive.category}>
                                        <option value="">--secect category --</option>
                                        <option value="action" selected={addmoive.type == 'action'}>action</option>
                                        <option value="drama" selected={addmoive.type == 'drama'}>drama</option>
                                        <option value="comedy" selected={addmoive.type == 'comedy'}>comedy</option>
                                        <option value="horror" selected={addmoive.type == 'horror'}>horror</option>
                                    </Form.Select>
                                    {Error.category ? <span style={{ color: 'red' }}>{Error.category}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Release Year :</Form.Label>
                                    <Form.Control type="number" name='year' value={addmoive.year} placeholder="Enter Release year" onChange={handlechange} />
                                    {Error.year ? <span style={{ color: 'red' }}>{Error.year}</span> : ""}
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Image URL  :</Form.Label>
                                    <Form.Control type="text" name='image' value={addmoive.image} placeholder="Enter Image URL" onChange={handlechange} />
                                    {Error.image ? <span style={{ color: 'red' }}>{Error.image}</span> : ""}
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>

                        </div>
                    </Row>
                </Container>
            </section>

            <ToastContainer />
        </>
    )
}
export default Addmoive;