import styled from "styled-components";
import { auth } from "../firebase";
import { mobile } from "../responsive";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { COLORS } from "../globalStyles";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const BtnWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  max-height: 80%;
  border: none;
  padding: 15px 20px;
  background-color: ${COLORS.purple};
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

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
