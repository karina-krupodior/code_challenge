import React from "react";
import img401 from "../asses/401error.jpg";
import { Grid } from "@material-ui/core";

function Page401() {
  return (
    <Grid
      item
      xs={12}
      container
      direction="column-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <img src={img401} alt="401"></img>
      </div>
    </Grid>
  );
}

export default Page401;
