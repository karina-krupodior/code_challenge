import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Grid,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Link,
} from "@material-ui/core";
import axios from "axios";

import InputField from "../InputField";
import { signupValidationSchema } from "../../helpers/validationSchema";

import { useStylesForSignupPage } from "./useStylesForSignupPage";

function Signup() {
  const classes = useStylesForSignupPage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = (e) => {
    // e.preventDefault();
    axios
      .post(
        `https://rdeevqhn22.execute-api.us-east-1.amazonaws.com/dev/auth/signup`,
        {
          first_name: watch("first_name"),
          last_name: watch("last_name"),
          email: watch("email"),
          password: watch("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField
                  required
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  inputProps={{ ...register("first_name") }}
                  error={errors.first_name ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.first_name?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  id="lastName"
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  autoComplete="lname"
                  inputProps={{ ...register("last_name") }}
                  error={errors.last_name ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.last_name?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  inputProps={{ ...register("email") }}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  type="email"
                  name="confirmEmail"
                  id="Confirm email"
                  placeholder="Confirm email"
                  autoComplete="Confirm_email"
                  inputProps={{ ...register("confirmEmail") }}
                  error={errors.confirmEmail ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmEmail?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="Confirm_password"
                  inputProps={{ ...register("password") }}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  inputProps={{ ...register("confirmPassword") }}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
            <Grid container justify-content="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
