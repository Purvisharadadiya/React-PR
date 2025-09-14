import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./Review.css";
import { getstoragedata, setstroagedata } from "../services/storageData";

function Review() {
    const initialState = {
        id: "",
        name: "",
        desc: "",
        rating: "",
        img: "",
    };

    const [inputForm, setInputForm] = useState(initialState);
    const [error, setError] = useState({});
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        let oldData = getstoragedata() || [];
        setReviews(oldData);
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const formValidation = () => {
        let formError = {};

        if (inputForm.name.trim() === "") {
            formError.name = "Name is required!";
        }

        if (inputForm.desc.trim() === "") {
            formError.desc = "Description is required!";
        }

        if (inputForm.rating.trim() === "") {
            formError.rating = "Please select a rating!";
        }

        if (inputForm.img.trim() === "") {
            formError.img = "Image URL is required!";
        }

        setError(formError);
        return Object.keys(formError).length !== 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValidation()) {
            const newReview = { ...inputForm, id: Date.now() };
            const updatedData = [...reviews, newReview];
            setReviews(updatedData);
            setstroagedata(updatedData);

            setInputForm(initialState);
            setError({});
            alert("Review Added Successfully!");
        }
    };


    return (
        <>

            <div className="form-wrapper">

                <Form className="custom-form" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Name:</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" name="name" placeholder="Enter your name" value={inputForm.name} onChange={handleInput}
                            />
                            {error.name && <span className="text-danger">{error.name}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Description:</Form.Label>
                        <Col sm="9">
                            <Form.Control as="textarea" rows={3} name="desc" placeholder="Write something..." value={inputForm.desc} onChange={handleInput}
                            />
                            {error.desc && <span className="text-danger">{error.desc}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select
                            name="rating"
                            value={inputForm.rating}
                            onChange={handleInput}
                        >
                            <option value="">Select Rating</option>
                            <option value="⭐️⭐️⭐️⭐️⭐️">5 Stars</option>
                            <option value="⭐️⭐️⭐️⭐️">4 Stars</option>
                            <option value="⭐️⭐️⭐️">3 Stars</option>
                            <option value="⭐️⭐️">2 Stars</option>
                            <option value="⭐️">1 Star</option>
                        </Form.Select>
                        {error.rating && <span className="text-danger">{error.rating}</span>}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Img:</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" name="img" placeholder="Enter Image URL" value={inputForm.img} onChange={handleInput}
                            />
                            {error.img && <span className="text-danger">{error.img}</span>}
                        </Col>
                    </Form.Group>

                    <Button type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="review-card-container mt-4">
                {reviews.length > 0 ? (
                    reviews.map((v) => (
                        <div key={v.id} className="testimonial-card">
                            <div className="testimonial-image">
                                <img src={v.img} alt={v.name} />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-rating">{v.name}</p>
                                <p className="testimonial-text">{v.desc}</p>
                                <h5 className="testimonial-name">{v.rating}</h5>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center mt-3">No reviews yet. Be the first!</p>
                )}
            </div>

        </>
    );
}

export default Review;
