import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BtnWrapper,
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./Login.elements";

const Login = () => {
  const [user] = useAuthState(auth);
  const signInWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {user ? (
          "you're signed in"
        ) : (
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <BtnWrapper>
              <Button style={{ marginRight: "10px" }}>LOGIN</Button>
              <Button onClick={signInWithGoogle}>Sign in with google</Button>
            </BtnWrapper>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE ACCOUNT</Link>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
};

export default Login;