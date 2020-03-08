import React, {useState} from "react";
import { 
  Container,  
  CssBaseline,
  Zoom,
} from "@material-ui/core";
import LoginForm from "../../components/loginForm/LoginForm";
import SignUpForm from "../../components/signUpForm/SignUpForm";

export default function AuthPage() {

  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <Zoom in={isLoginVisible}>
        <LoginForm 
          isHidden={!isLoginVisible} 
          switchToSignUpFrom={() => {
            setIsLoginVisible(false);
            setIsSignUpVisible(true);
          }} 
        />
      </Zoom>
      <Zoom in={isSignUpVisible}>
        <SignUpForm 
          isHidden={!isSignUpVisible}
          switchToLoginForm={() => {
            setIsSignUpVisible(false);
            setIsLoginVisible(true);
          }}
        />
      </Zoom>
    </Container>
  );
} 