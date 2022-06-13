import { Grid } from "@mui/material";
import React from "react";
import QuizComponent from "./common/QuizComponent";

function Dashboard() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <QuizComponent />
        </Grid>
        <Grid item xs={6}>
          <QuizComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
