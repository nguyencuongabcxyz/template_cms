import React from "react";
import { 
  Container,  
  CssBaseline, 
} from "@material-ui/core";
import LoginForm from "../components/loginForm/LoginForm";

export default function AuthPage() {
  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <LoginForm />
    </Container>
  );
} 