import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BtnWrapper,
  Button,
  Container,
  Error,
  Form,
  GoogleBtn,
  Input,
  Link,
  Title,
  Wrapper,
} from "./Login.elements";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>

        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <BtnWrapper>
            <Button onClick={handleSubmit} disabled={isFetching}>
              LOGIN
            </Button>
            {/* <GoogleBtn type="light" onClick={signInWithGoogle}>
                Sign in with google
              </GoogleBtn> */}
          </BtnWrapper>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link href="/register">CREATE ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
