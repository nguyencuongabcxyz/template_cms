import React from "react";
import {
  Box,
  Typography,
  TextField,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import classes from "./SignUpForm.style";

interface ISignUpFormProps{
    isHidden: boolean | undefined;
    switchToLoginForm: () => void;
}

export default function SignUpForm(props: ISignUpFormProps) {

  const {isHidden, switchToLoginForm, ...rest} = props;

  return(
    <Box {...rest} hidden={isHidden}>
      <Box className={classes().paper}>
        <Avatar className={classes().avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <form className={classes().form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes().submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" onClick={switchToLoginForm} variant="body2">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © cms template 2020"}
        </Typography>
      </Box>
    </Box>
  );
}