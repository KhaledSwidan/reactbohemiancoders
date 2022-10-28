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
          <div className="mt-2 text-center d-flex justify-content-between align-items-center flex-wrap">
            <Link to="/update-profile" className="btn btn-primary mt-3">
              تحديث الصفحة الشخصية
            </Link>
            <Button className="btn btn-danger mt-3" onClick={handleLogout}>
              خروج
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;