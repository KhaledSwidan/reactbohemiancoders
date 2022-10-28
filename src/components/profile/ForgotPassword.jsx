import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ForgotPassword = () =>
{
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const emailRef = useRef();

  const handleSubmit = async e =>
  {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("تفقد بريدك الالكتروني للحصول على كلمة سر جديدة");
    } catch {
      setError("فشل فى تغيير الرقم السري");
    };
    setLoading(false);
  };
  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>إعادة تعيين كلمة المرور</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label htmlFor="email">البريد الالكتروني</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef} />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3' disabled={loading}>تأكيد</Button>
          </Form>
          <div className="w-100 text-center d-flex mt-2">
            <Link to="/login">لدي حساب بالفعل</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-3 d-flex'>
        ليس لديك حساب؟ <Link to="/signup">تسجيل جديد </Link>
      </div>
    </Container>
  );
};

export default ForgotPassword