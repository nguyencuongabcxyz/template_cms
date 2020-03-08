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
import classes from "./LoginForm.style";
import CTextInput from "../../../shared/components/cTextInput/CTextInput";
import { usernameValidator } from "../../../shared/validator";

interface ILoginFormProps{
  isHidden: boolean | undefined;
  switchToSignUpFrom: () => void;
}

export default function LoginForm(props: ILoginFormProps) {

  const {isHidden, switchToSignUpFrom, ...rest} = props;

  return(
    <Box {...rest} hidden={isHidden}>
      <Box className={classes().paper}>
        <Avatar className={classes().avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className={classes().form} noValidate>
          <CTextInput
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            validator={usernameValidator}
            value={"cuongnguyen@gmail.com"}
            onTextChanged={(e) => {console.log(e.target.value);}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes().submit}
          >Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={switchToSignUpFrom}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © cms template 2020"}
        </Typography>
      </Box>
    </Box>
  );
}
