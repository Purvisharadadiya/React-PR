import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  googleSignInAsync,
  signInAsync,
} from "../../services/action/Authencation";
import "./Signin.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errMsg, user } = useSelector((state) => state.auth);

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
    dispatch(signInAsync(inputForm));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInAsync());
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container fluid className="signin-container">
      <Row className="vh-100">
      
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center bg-light flex-column signin-left"
        >
         
          <h1 className="brand-title text-danger fw-bold">MegaMart</h1>
          <p className="text-muted text-center px-4">
            Discover top brands and exclusive deals — login to start shopping!
          </p>
        </Col>

       
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-white"
        >
          <Card className="p-5 shadow-lg border-0 signin-card">
            <h2 className="fw-bold text-center mb-4 text-primary">
              Welcome Back 👋
            </h2>
            <p className="text-center text-muted mb-4">
              Sign in to continue shopping
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
                  Sign In
                </Button>
              </div>
            </Form>

            <div className="text-center mb-3 text-muted">or</div>

            <div className="d-grid mb-3">
              <Button
                variant="outline-dark"
                className="google-btn d-flex align-items-center justify-content-center gap-2"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="./src/img/img66.webp"
                  alt="Google"
                  width="20"
                />
                Sign in with Google
              </Button>
            </div>

            <p className="text-center mt-3 text-muted">
              Don't have an account?{" "}
              <Link to="/signUp" className="text-primary fw-semibold">
                Sign Up
              </Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
