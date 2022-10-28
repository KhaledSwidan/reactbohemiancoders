import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LogIn = () =>
{
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleSubmit = async e =>
  {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch {
      setError("فشل فى دخول الحساب");
    };
    setLoading(false);
  };
  
  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>تسجيل دخول</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='my-3'>
              <Form.Label htmlFor="email">البريد الالكتروني</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">كلمة السر</Form.Label>
              <Form.Control type="password" id="password" ref={passwordRef} />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3' disabled={loading}>دخول</Button>
          </Form>
          <div className="w-100 text-center d-flex mt-2">
            <Link to="/forgot-password">نسيت كلمة السر؟</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-3 d-flex'>
        ليس لديك حساب؟ <Link to="/signup">تسجيل جديد </Link>
      </div>
    </Container>
  );
};

export default LogIn