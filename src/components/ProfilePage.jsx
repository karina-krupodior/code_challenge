import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const jwtToken = localStorage.getItem("token");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://rdeevqhn22.execute-api.us-east-1.amazonaws.com/dev/auth/user`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((response) => {
        setUser(response.data.user);
        setLoading(false);
      })
      .catch((error) => {
        if (error.status === 401) {
          navigate("/401");
        }
      });
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        Object.entries(user).map(([key, value], i) => (
          <div key={i}>
            <Grid
              item
              xs={12}
              container
              direction="column-reverse"
              justifyContent="center"
              alignItems="center"
            >
              {key}:{value}
            </Grid>
          </div>
        ))
      )}
    </>
  );
}

export default ProfilePage;
