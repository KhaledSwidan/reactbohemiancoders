import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ForgotPassword = () =>
{
  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>إعادة تعيين كلمة المرور</h2>
          <Form>
            <Form.Group >
              <Form.Label htmlFor="email">البريد الالكتروني</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>تأكيد</Button>
          </Form>
          <div className="w-100 text-center d-flex mt-2">
            <Link to="login">لدي حساب بالفعل</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-3 d-flex'>
        ليس لديك حساب؟ <Link to="signup">تسجيل جديد </Link>
      </div>
    </Container>
  );
};

export default ForgotPassword