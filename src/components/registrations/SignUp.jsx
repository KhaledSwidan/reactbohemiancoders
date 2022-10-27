import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SignUp = () =>
{
  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>تسجيل جديد</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="userName">الاسم الرباعي</Form.Label>
              <Form.Control type="text" id="userName" />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Label htmlFor="email">البريد الالكتروني</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">كلمة السر</Form.Label>
              <Form.Control type="password" id="password" />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Label htmlFor="password-confirmation">تأكيد كلمة السر</Form.Label>
              <Form.Control type="password" id="password-confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit">تسجيل</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-3 d-flex'>
        هل تملك حساب بالفعل؟ <Link to="login">تسجيل دخول </Link>
      </div>
    </Container>
  );
};

export default SignUp