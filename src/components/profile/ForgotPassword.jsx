import { React, useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./profile.module.css";

const ForgotPassword = () => {
  const { cardheader } = styles;
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("تحقق من صندوق الوارد الخاص بك لمزيد من التعليمات.");
    } catch {
      setError("فشل إعادة تعيين كلمة المرور.");
    }

    setLoading(false);
  };

  return (
    <Container className="mb-4">
      <Card className="mt-4 mb-2">
        <Card.Header>
          <h2 className={`${cardheader} text-center mb-4 rounded py-2`}>
            اعادة تعيين كلمة المرور
          </h2>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label htmlFor="emailreset" className="h6">
                البريد الالكتروني
              </Form.Label>
              <Form.Control
                type="email"
                id="emailreset"
                ref={emailRef}
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              تغيير كلمة المرور
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3 d-flex flex-column align-items-start">
        <p className="mb-1">
          لدي بالفعل حساب:{" "}
          <Link to="/login" className="border-bottom border-primary">
            تسجيل دخول
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

export default ForgotPassword;
