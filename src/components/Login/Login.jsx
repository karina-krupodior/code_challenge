import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Grid,
  CssBaseline,
  Link,
  Avatar,
  Paper,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "../InputField";
import { useStylesForLoginPage } from "./useStylesForLoginPage";
import { loginValidationSchema } from "../../helpers/validationSchema";

function Login() {
  const classes = useStylesForLoginPage();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (e) => {
    // e.preventDefault();
    axios
      .post(
        "https://rdeevqhn22.execute-api.us-east-1.amazonaws.com/dev/auth/login",
        {
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
        localStorage.setItem("token", response.data.token);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Grid container component="main" className={classes.root} spacing={1}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(onSubmit)}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
