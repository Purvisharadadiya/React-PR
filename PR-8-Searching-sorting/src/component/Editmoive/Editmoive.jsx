import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Getstroagedata, Setstroagedata } from '../../services/StroageData';
import { useNavigate, useParams } from 'react-router';

const Editmoive = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const inisitalstate = {
        id: " ",
        desc: " ",
        name: " ",
        category: " ",
        type: " ",
        year: " ",
        image: " "
    }

    const [addmoive, setaddmoive] = useState(inisitalstate);

    useEffect(() => {
        let data = Getstroagedata();
        let record = data.find(v => v.id == id);
        if (record) {
            setaddmoive(record);
        }
    }, [id])
    const handlechange = (e) => {
        const { name, value } = e.target;
        setaddmoive({
            ...addmoive,
            [name]: value,
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        let data = Getstroagedata();
        let up = data.map((v) => {
            if (v.id == addmoive.id) {
                return addmoive
            }
            else {
                return v;
            }
        })
        Setstroagedata(up);
        setaddmoive(inisitalstate);

        toast.success("Edit Record successfully!", {
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

    return (
        <>
            <section>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <div className="add-moive-form col-6">
                            <Form onSubmit={handlesubmit}>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Name :</Form.Label>
                                    <Form.Control type="text" name='name' value={addmoive.name} placeholder="Enter movie name" onChange={handlechange} />
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Description :</Form.Label>
                                    <Form.Control type="text" name='desc' value={addmoive.desc} placeholder="Enter Description" onChange={handlechange} />
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter moive Type :</Form.Label>
                                    <Form.Select name='type' onChange={handlechange} value={addmoive.type}>
                                        <option value="">--secect moive --</option>
                                        <option value="hollywood" selected={addmoive.type == 'Hollywood'}>Hollywood</option>
                                        <option value="bollywood" selected={addmoive.type == 'bollywoodd'}>Bollywood</option>
                                        <option value="tollywood" selected={addmoive.type == 'tollywood'}>Tollywood</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter category :</Form.Label>
                                    <Form.Control type="text" name='category' placeholder="Enter movie category" onChange={handlechange} value={addmoive.category} />
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Release Year :</Form.Label>
                                    <Form.Control type="number" name='year' value={addmoive.year} placeholder="Enter Release year" onChange={handlechange} />
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label className="fs-6">Enter Image URL  :</Form.Label>
                                    <Form.Control type="text" name='image' value={addmoive.image} placeholder="Enter Image URL" onChange={handlechange} />
                                </Form.Group>
                                <Button type="submit">Update</Button>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </section>

            <ToastContainer />

        </>
    )
}
export default Editmoive;