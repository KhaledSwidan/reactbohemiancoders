import { React, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./profile.module.css";

const Login = () => {
  const { cardheader } = styles;
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath);
    } catch {
      setError("فشل في تسجيل الدخول");
    }

    setLoading(false);
  };

  return (
    <Container className="mb-4">
      <Card className="mt-4 mb-2">
        <Card.Header>
          <h2 className={`${cardheader} text-center mb-4 rounded py-2`}>تسجيل الدخول</h2>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email" className="h6">
                البريد الالكتروني
              </Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="name@example.com"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label htmlFor="password" className="h6">
                كلمة السر
              </Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              دخول
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4 d-flex flex-column align-items-start">
        <p className="mb-2">
          <Link to="/forgot-password" className="border-bottom border-primary">
            هل نسيت كلمة السر؟
          </Link>
        </p>
        <p className="mb-0">
          بحاجة الى حساب؟{" "}
          <Link to="/signup" className="border-bottom border-primary">
            تسجيل جديد
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
