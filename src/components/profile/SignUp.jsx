import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignUp = () =>
{
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfiramtionRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async e =>
  {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfiramtionRef.current.value) {
      return setError("الرقم السري غير متطابق");
    };
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("فشل فى انشاء الحساب");
    };
    setLoading(false);
  };

  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>تسجيل جديد</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='my-3'>
              <Form.Label htmlFor="email">البريد الالكتروني</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">كلمة السر</Form.Label>
              <Form.Control type="password" id="password" ref={passwordRef} />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Label htmlFor="password-confirmation">تأكيد كلمة السر</Form.Label>
              <Form.Control type="password" id="password-confirmation" ref={passwordConfiramtionRef} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>تسجيل</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-3 d-flex'>
        هل تملك حساب بالفعل؟ <Link to="/login">تسجيل دخول </Link>
      </div>
    </Container>
  );
};

export default SignUp