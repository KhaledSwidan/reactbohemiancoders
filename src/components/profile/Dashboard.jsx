import React, { useState } from 'react'
import { Alert, Button, Card, Container } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () =>
{
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogout = async () =>
  {
    setError("");
    try {
      await logout();
      navigate("/login")
    } catch { setError("فشل فى الخروج") };
  };

  return (
    <Container className='my-4 w-50'>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>الصفحة الشخصية</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>البريد الالكتروني: </strong>{currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            تحديث الصفحة الشخصية
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100 d-flex">
        <Button className="btn btn-danger w-25" onClick={handleLogout}>
          خروج
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard