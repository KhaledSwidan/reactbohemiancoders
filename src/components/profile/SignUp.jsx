import { React, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

const Signup = () => {
  const { cardheader } = styles;
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      setError("كلمة المرور غير مطابقة");

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("فشل في إنشاء الحساب");
    }
    setLoading(false);
  };

  return (
    <Container className="mb-4">
      <Card className="mt-4 mb-2">
        <Card.Header>
          <h2 className={`${cardheader} text-center mb-4 rounded py-2`}>
            تسجيل جديد
          </h2>
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
            <Form.Group className="my-2">
              <Form.Label htmlFor="password" className="h6">
                كلمة المرور
              </Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm" className="h6">
                تأكيد كلمة المرور
              </Form.Label>
              <Form.Control
                id="password-confirm"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              تسجيل
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4 d-flex flex-column align-items-start">
        <p>
          لديك بالفعل حساب؟{" "}
          <Link to="/login" className="border-bottom border-primary">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Signup;
