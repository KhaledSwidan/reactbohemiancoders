import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, ButtonGroup } from "react-bootstrap";
import { auth } from "../../firebase";

import styles from "./profile.module.css";

const Login = () => {
  const { signin } = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <section>
      <Container className="my-4 w-75">
        <h2 className={`${signin} rounded p-3 text-center w-100`}>
          تسجيل الدخول
        </h2>
        <Container>
          <Form>
            <Form.Group className="my-3" controlId="formEmail">
              <Form.Label className="h5">البريد الالكتروني</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="h5">كلمة السر</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <ButtonGroup>
              <Button variant="primary" type="submit" onClick={signIn}>
                تسجيل دخول
              </Button>
              <Button
                variant="success"
                className="ms-2"
                type="submit"
                onClick={register}>
                انشاء حساب جديد
              </Button>
            </ButtonGroup>
          </Form>
        </Container>
      </Container>
    </section>
  );
};

export default Login;
