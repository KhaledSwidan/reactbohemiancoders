import React, { useState } from "react";
import { Card, Alert, Button, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

const Dashboard = () => {
  const { cardheader } = styles;

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Container className="mb-4">
      <Card className="mt-4 mb-2">
        <Card.Header>
          <h2 className={`${cardheader} text-center mb-4 rounded py-2`}>
            الصفحة الشخصية
          </h2>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>مرحبا بك,</strong> {currentUser && currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 mt-2 d-flex justify-content-between align-items-center">
        <Link to="/update-profile" className="btn btn-primary">
          تعديل البيانات
        </Link>
        <Button className="btn btn-danger" onClick={handleLogout}>
          تسجيل الخروج
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
