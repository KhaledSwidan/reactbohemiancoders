import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

const UpdateProfile = () => {
  const { cardheader } = styles;
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      setError("كلمة المرور غير مطابقة");

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email)
      promises.push(updateUserEmail(emailRef.current.value));

    if (passwordRef.current.value)
      promises.push(updateUserPassword(passwordRef.current.value));

    Promise.all(promises)
      .then(() => navigate("/"))
      .catch(() => setError("Failed to update account"))
      .finally(() => setLoading(false));
  };

  return (
    <Container className="mb-4">
      <Card className="mt-4 mb-2">
        <Card.Header>
          <h2 className={`${cardheader} text-center mb-4 rounded py-2`}>
            تحديث الملف الشخصي
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
                ref={emailRef}
                placeholder="name@example.com"
                required
                defaultValue={currentUser?.email}
              />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label htmlFor="password" className="h6">
                كلمة المرور
              </Form.Label>
              <Form.Control id="password" type="password" ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm" className="h6">
                تأكيد كلمة المرور
              </Form.Label>
              <Form.Control
                id="password-confirm"
                type="password"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <div className="w-100 text-center mt-3 d-flex align-items-center justify-content-between">
              <Button disabled={loading} className="w-50" type="submit">
                تحديث
              </Button>
              <Link className="btn btn-danger w-25" to="/">
                الغاء
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateProfile;
