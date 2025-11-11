import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync } from "../../services/action/Authencation";
import "./singup.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errMsg, isCreated } = useSelector((state) => state.auth);

  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputForm.email || !inputForm.password) {
      alert("Please fill all fields");
      return;
    }
    dispatch(createUserAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated, navigate]);

  return (
    <Container fluid className="signup-container">
      <Row className="vh-100">
       
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center bg-light flex-column signup-left"
        >
         
          <h1 className="brand-title text-danger fw-bold">MegaMart</h1>
          <p className="text-muted text-center px-4">
            Create your account and start shopping for the latest trends!
          </p>
        </Col>

       
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-white"
        >
          <Card className="p-5 shadow-lg border-0 signup-card">
            <h2 className="fw-bold text-center mb-4 text-primary">
              Create Account
            </h2>
            <p className="text-center text-muted mb-4">
              Fill your details to register
            </p>

            {errMsg && <p className="text-danger text-center">{errMsg}</p>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={inputForm.email}
                  onChange={handleChanged}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={inputForm.password}
                  onChange={handleChanged}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button type="submit" variant="danger" className="py-2">
                  Sign Up
                </Button>
              </div>
            </Form>

            <p className="text-center mt-3 text-muted">
              Already have an account?{" "}
              <Link to="/signIn" className="text-primary fw-semibold">
                Sign In
              </Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
